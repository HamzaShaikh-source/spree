'use client';

import Link from 'next/link';
import { formatPrice } from '@/data/products';
import { useState } from 'react';
import { ShoppingCart, Check, Star } from 'lucide-react';

export default function ProductCard({ product, priority = false }) {
  const [added, setAdded] = useState(false);

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.qty += 1;
    else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-update'));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice > product.price ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-200">
        {/* Image */}
        <div className="aspect-square bg-gray-50 relative overflow-hidden">
          <img src={product.image} alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
              <span className="bg-white text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3.5">
          <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-wider">{product.category}</span>
          <h3 className="text-sm font-semibold text-gray-900 mt-0.5 leading-snug line-clamp-1">{product.name}</h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className={`w-3 h-3 ${i <= Math.round(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
              ))}
            </div>
            <span className="text-[10px] text-gray-400">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-base font-bold text-gray-900">{formatPrice(product.price)}</span>
            {discount > 0 && (
              <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {/* Add to Cart */}
          <button onClick={addToCart} disabled={!product.inStock}
            className={`mt-2.5 w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              added ? 'bg-emerald-500 text-white shadow-sm' :
              product.inStock ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] shadow-sm' :
              'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}>
            {added ? <><Check className="w-3.5 h-3.5" /> Added!</> :
             product.inStock ? <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</> :
             'Unavailable'}
          </button>
        </div>
      </div>
    </Link>
  );
}
