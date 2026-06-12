'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import products, { getProductBySlug, getRelatedProducts, formatPrice } from '@/data/products';
import Recommendations from '@/components/Recommendations';
import ShareButton from '@/components/ShareButton';
import { ShoppingCart, Check, Star, ChevronRight, Shield, Truck, RotateCcw, Heart, Minus, Plus } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

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
      <div className="min-h-screen bg-[#08080f] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <p className="text-6xl mb-5">😕</p>
          <h1 className="text-2xl font-bold text-white font-display mb-2">Product not found</h1>
          <p className="text-zinc-400 text-sm mb-6">This product may have been removed or the link is incorrect.</p>
          <Link href="/products" className="inline-flex items-center gap-2 bg-gradient-to-br from-amber-500 to-amber-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
            ← Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);
  const discount = product.originalPrice > product.price ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

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
    <div className="min-h-screen bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-zinc-600 mb-8 flex-wrap">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-zinc-700" />
          <Link href="/products" className="hover:text-amber-400 transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3 text-zinc-700" />
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-amber-400 transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3 text-zinc-700" />
          <span className="text-zinc-400 truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* ── PRODUCT DETAIL ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ── Image Gallery ── */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-white/[0.01] aspect-square">
              {!imgLoaded && <div className="absolute inset-0 skeleton-pulse rounded-3xl" />}
              <img src={product.image} alt={product.name}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-contain p-8 transition-all duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'} hover:scale-105`} />
              
              {/* Discount badge */}
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-gradient-to-br from-rose-500 to-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg shadow-rose-500/20">
                  −{discount}%
                </span>
              )}

              {/* Wishlist */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20 transition-all duration-200">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail nav */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {[product.image, product.image, product.image, product.image].slice(0, 4).map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)}
                  className={`shrink-0 w-16 h-16 rounded-xl border overflow-hidden transition-all duration-200 ${
                    activeImage === i
                      ? 'border-amber-500/40 bg-amber-500/5 shadow-lg shadow-amber-500/10'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                  }`}>
                  <img src={img} alt="" className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Info ── */}
          <div className="space-y-6">
            {/* Category + Share */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400/80 uppercase tracking-wider">{product.category}</span>
              <ShareButton title={`${product.name} - Spree`} />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= Math.round(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}`} />
                ))}
              </div>
              <span className="text-sm text-zinc-500">{product.rating} <span className="text-zinc-600">({product.reviews} reviews)</span></span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">{formatPrice(product.price)}</span>
              {discount > 0 && (
                <>
                  <span className="text-xl text-zinc-600 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="text-sm font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">Save {discount}%</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed">{product.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map(tag => (
                <Link key={tag} href={`/products?search=${encodeURIComponent(tag)}`}
                  className="text-[10px] bg-white/5 border border-white/5 text-zinc-500 hover:text-amber-400 hover:border-amber-500/20 px-2.5 py-1 rounded-full transition-all duration-200">
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* Stock + Quantity + Add to Cart */}
            {product.inStock ? (
              <div className="space-y-4">
                {/* Stock status */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30" />
                  <span className="text-sm text-emerald-400 font-medium">In Stock</span>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-zinc-400">Quantity:</span>
                  <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-white/5">
                    <button onClick={() => setQty(Math.max(1, qty - 1))}
                      className="px-3.5 py-2 text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-5 py-2 text-sm font-semibold text-white border-x border-white/10 min-w-[3rem] text-center">{qty}</span>
                    <button onClick={() => setQty(Math.min(10, qty + 1))}
                      className="px-3.5 py-2 text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-200">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button onClick={addToCart}
                    className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      added
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                        : 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.01] active:scale-[0.99]'
                    }`}>
                    {added ? <><Check className="w-4 h-4" /> Added to Cart!</> : <><ShoppingCart className="w-4 h-4" /> Add to Cart</>}
                  </button>
                  <button onClick={() => { if (!added) addToCart(); setTimeout(() => router.push('/cart'), 300); }}
                    className="flex-1 py-3.5 rounded-xl font-semibold text-sm border border-white/15 text-zinc-300 hover:bg-white/5 hover:text-white hover:border-white/25 transition-all duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10">
                <p className="text-rose-400 font-semibold text-sm">Out of Stock</p>
                <p className="text-rose-500/60 text-xs mt-0.5">This product is currently unavailable. Sign up to be notified when it&apos;s back.</p>
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Truck className="w-4 h-4 text-amber-400/70" />
                <div>
                  <p className="text-xs font-medium text-zinc-300">Free Shipping</p>
                  <p className="text-[10px] text-zinc-600">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <RotateCcw className="w-4 h-4 text-amber-400/70" />
                <div>
                  <p className="text-xs font-medium text-zinc-300">Easy Returns</p>
                  <p className="text-[10px] text-zinc-600">30-day hassle-free</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Shield className="w-4 h-4 text-amber-400/70" />
                <div>
                  <p className="text-xs font-medium text-zinc-300">Secure Checkout</p>
                  <p className="text-[10px] text-zinc-600">Protected payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RELATED PRODUCTS ── */}
        {related.length > 0 && (
          <section className="mt-20">
            <div className="divider-shine mb-8" />
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-zinc-500 text-xs font-bold tracking-[0.15em] uppercase">You May Also Like</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-1">Related Products</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p, i) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                  <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-amber-500/20 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500">
                    <div className="aspect-square p-4 flex items-center justify-center bg-white/[0.02]">
                      <img src={p.image} alt={p.name}
                        className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-xl" />
                    </div>
                    <div className="p-3.5">
                      <p className="text-xs font-semibold text-zinc-400 line-clamp-1 group-hover:text-amber-200 transition-colors">{p.name}</p>
                      <p className="text-sm font-bold text-white mt-0.5">{formatPrice(p.price)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── AI RECOMMENDATIONS ── */}
        <Recommendations title="You Might Also Like" currentProductId={product.id} />
      </div>
    </div>
  );
}
