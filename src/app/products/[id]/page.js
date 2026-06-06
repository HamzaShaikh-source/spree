'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import products, { getProductBySlug, getRelatedProducts, formatPrice } from '@/data/products';
import Recommendations from '@/components/Recommendations';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  const product = getProductBySlug(id);

  useEffect(() => {
    if (product) {
      const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
      const updated = [product.id, ...viewed.filter(v => v !== product.id)].slice(0, 20);
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">😕</p>
        <h1 className="text-xl font-bold text-gray-900">Product not found</h1>
        <Link href="/products" className="mt-4 inline-block text-indigo-600 font-semibold hover:underline">
          ← Browse Products
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-update'));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href="/products" className="hover:text-indigo-600">Products</Link>
        <span className="mx-1.5">/</span>
        <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-indigo-600">{product.category}</Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-600">{product.name}</span>
      </div>

      {/* Product Detail */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image */}
        <div className="aspect-square bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{product.category}</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 text-sm">{'★'.repeat(Math.round(product.rating))}{product.rating % 1 ? '½' : ''}</span>
            <span className="text-sm text-gray-400">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">{product.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {product.tags.map(tag => (
              <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          {product.inStock ? (
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Qty:</span>
                <div className="flex border border-gray-200 rounded-lg">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 transition text-sm">−</button>
                  <span className="px-4 py-1.5 text-sm font-semibold border-x border-gray-200">{qty}</span>
                  <button onClick={() => setQty(Math.min(10, qty + 1))} className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 transition text-sm">+</button>
                </div>
              </div>

              <button
                onClick={addToCart}
                className={`w-full py-3.5 rounded-xl font-bold text-base transition shadow-sm ${
                  added ? 'bg-green-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {added ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                onClick={() => { addToCart(); router.push('/cart'); }}
                className="w-full py-3 rounded-xl font-semibold text-base border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
              >
                Buy Now
              </button>
            </div>
          ) : (
            <div className="mt-6 p-4 bg-red-50 rounded-xl">
              <p className="text-red-600 font-semibold text-sm">Out of Stock</p>
              <p className="text-red-400 text-xs mt-0.5">This product is currently unavailable.</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p, i) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
                  <div className="aspect-square bg-gray-50">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xs font-semibold text-gray-900 line-clamp-1">{p.name}</h3>
                    <p className="text-sm font-bold text-gray-900 mt-1">{formatPrice(p.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* AI Recommendations */}
      <Recommendations title="You Might Also Like" currentProductId={product.id} />
    </div>
  );
}
