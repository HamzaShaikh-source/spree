'use client';

import { useEffect, useState } from 'react';
import { getRecommendations } from '@/data/products';
import ProductCard from './ProductCard';
import { Sparkles } from 'lucide-react';

export default function Recommendations({ title = 'Recommended for You', currentProductId = null }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    const filtered = currentProductId ? viewed.filter(id => id !== currentProductId) : viewed;
    const recs = getRecommendations(filtered, 6);
    setProducts(recs);
  }, [currentProductId]);

  if (products.length === 0) return null;

  return (
    <section className="mt-16 mb-8">
      <div className="divider-shine mb-8" />
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-emerald-400/80 text-xs font-bold tracking-[0.15em] uppercase">AI Curated</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-1">{title}</h2>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-gradient-to-r from-amber-500/20 to-violet-500/20 text-amber-300 font-bold px-3 py-1.5 rounded-full border border-amber-500/20">
          <Sparkles className="w-3 h-3" /> Personalized
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} priority={i < 2} />
        ))}
      </div>
    </section>
  );
}
