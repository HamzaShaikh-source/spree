'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { getRecommendations } from '@/data/products';
import ProductCard from './ProductCard';

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
    <section className="mt-12">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="grid place-items-center w-9 h-9 rounded-xl gradient-brand-soft text-brand-600">
          <Sparkles className="w-5 h-5" />
        </span>
        <h2 className="text-xl font-display font-bold text-ink">{title}</h2>
        <span className="text-[10px] bg-brand-100 text-brand-700 font-bold px-2.5 py-1 rounded-full">Personalized</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} priority={i < 2} />
        ))}
      </div>
    </section>
  );
}
