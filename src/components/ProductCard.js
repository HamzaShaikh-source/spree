'use client';

import Link from 'next/link';
import { formatPrice } from '@/data/products';
import { useState } from 'react';
import { ShoppingCart, Check, Star, Eye } from 'lucide-react';

export default function ProductCard({ product, priority = false }) {
  const [added, setAdded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

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
      <div className="product-card relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] overflow-hidden hover:border-amber-500/20 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500">
        {/* Glow on hover */}
        <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-100 group-hover:from-amber-500/10 group-hover:to-violet-500/10 blur-xl transition-all duration-500 pointer-events-none" />

        {/* Image */}
        <div className="aspect-square relative overflow-hidden bg-white/[0.02]">
          {/* Skeleton loader */}
          {!imgLoaded && (
            <div className="absolute inset-0 skeleton-pulse" />
          )}
          <img src={product.image} alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`} />

          {/* Discount badge */}
          {discount > 0 && (
            <span className="absolute top-2.5 left-2.5 bg-gradient-to-br from-rose-500 to-rose-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg shadow-rose-500/20 z-10">
              −{discount}%
            </span>
          )}

          {/* Quick view overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center"
            style={{background: 'linear-gradient(to top, var(--bg-overlay-soft), transparent, transparent)'}}>
            <span className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 hover:bg-white/20 transition-all">
              <Eye className="w-3.5 h-3.5" /> Quick View
            </span>
          </div>

          {/* Out of stock */}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm z-10"
              style={{background: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)'}}>
              <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-5 py-2 rounded-full">Out of Stock</span>
            </div>
          )}

          {/* Added checkmark animation */}
          {added && (
            <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/10 backdrop-blur-sm z-20 animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          )}

          {/* Quick add button */}
          {product.inStock && (
            <button onClick={addToCart}
              className="absolute bottom-2.5 right-2.5 w-9 h-9 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white/80 hover:text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/30 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 z-10">
              <ShoppingCart className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Info */}
        <div className="p-3.5 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-amber-400/80 uppercase tracking-wider">{product.category}</span>
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-[10px] text-zinc-500">{product.rating}</span>
              <span className="text-[10px] text-zinc-600">({product.reviews})</span>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-white leading-snug line-clamp-1 group-hover:text-amber-200 transition-colors duration-200">{product.name}</h3>

          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">{formatPrice(product.price)}</span>
            {discount > 0 && (
              <span className="text-xs text-zinc-600 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {product.inStock && (
            <button onClick={addToCart}
              className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 relative overflow-hidden ${
                added 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' 
                  : 'bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 text-amber-300 hover:from-amber-500/30 hover:to-amber-600/20 hover:shadow-lg hover:shadow-amber-500/10 active:scale-[0.98]'
              }`}>
              {added ? (
                <><Check className="w-3.5 h-3.5" /> Added!</>
              ) : (
                <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</>
              )}
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
