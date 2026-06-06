'use client';

import Link from 'next/link';
import { formatPrice } from '@/data/products';
import { useState } from 'react';
import { Star, ShoppingCart, Check } from 'lucide-react';

export default function ProductCard({ product, priority = false }) {
  const [added, setAdded] = useState(false);

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-update'));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice > product.price
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="aspect-square bg-gray-50 relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          {discount > 0 && (
            <span className="absolute top-2.5 left-2.5 gradient-amber text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-soft">
              {discount}% OFF
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-ink/50 backdrop-blur-[1px] flex items-center justify-center">
              <span className="bg-white text-ink text-xs font-bold px-4 py-1.5 rounded-full shadow-soft">Out of Stock</span>
            </div>
          )}
          {/* Quick add (desktop hover) */}
          {product.inStock && (
            <button
              onClick={addToCart}
              aria-label="Add to cart"
              className={`absolute bottom-2.5 right-2.5 grid place-items-center w-10 h-10 rounded-full shadow-soft-lg transition-all duration-300 sm:translate-y-12 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 ${
                added ? 'bg-green-500 text-white' : 'gradient-brand text-white hover:scale-110'
              }`}
            >
              {added ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* Info */}
        <div className="p-3.5">
          <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">{product.category}</span>
          <h3 className="text-sm font-semibold text-ink mt-0.5 leading-snug line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1.5">
            <span className="flex items-center gap-0.5 bg-green-50 text-green-700 text-[11px] font-bold px-1.5 py-0.5 rounded-md">
              {product.rating}
              <Star className="w-3 h-3 fill-current" />
            </span>
            <span className="text-[11px] text-gray-400">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-base font-bold text-ink">{formatPrice(product.price)}</span>
            {discount > 0 && (
              <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
