'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import products, { getFeaturedProducts, getCategories, formatPrice, getBrands } from '@/data/products';

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);
  const categories = getCategories();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [recommended, setRecommended] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    const tagScores = {};
    products.filter(p => viewed.includes(p.id)).forEach(p =>
      p.tags.forEach(t => { tagScores[t] = (tagScores[t] || 0) + 1; })
    );
    if (viewed.length > 0) {
      setRecommended(
        products.filter(p => !viewed.includes(p.id))
          .map(p => ({ ...p, _score: p.tags.reduce((s, t) => s + (tagScores[t] || 0), 0) }))
          .sort((a, b) => b._score - a._score).slice(0, 5)
      );
    }
    setTrending([...products].sort((a, b) => b.reviews - a.reviews).slice(0, 5));
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-indigo-300 text-sm font-bold tracking-widest uppercase">New Season</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
                Discover What<br />
                <span className="text-indigo-300">You Love</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-lg">
                Curated collections across electronics, fashion, home, and more. 
                Smart picks tailored to your taste.
              </p>
              <div className="flex gap-3 mt-8">
                <Link href="/products" className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition shadow-lg">
                  Shop Now
                </Link>
                <Link href="#trending" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition">
                  Trending →
                </Link>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-3">
              {featured.slice(0, 4).map(p => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group">
                  <div className="aspect-square bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat, i) => {
            const icons = ['📱', '👕', '🏠', '📚', '🏃', '💄'];
            const count = products.filter(p => p.category === cat).length;
            return (
              <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition text-center group">
                <span className="text-2xl">{icons[i] || '🛍️'}</span>
                <h3 className="font-semibold text-gray-900 text-xs mt-1.5 leading-tight">{cat}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">{count} items</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── DEALS BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Link href="/products" className="block bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white overflow-hidden relative">
          <div className="relative z-10">
            <span className="text-amber-200 text-xs font-bold tracking-widest uppercase">Limited Time</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-1">Summer Sale — Up to 40% Off</h2>
            <p className="text-amber-100 mt-1 text-sm">Best deals on top brands. Offer ends soon.</p>
            <span className="inline-block mt-3 bg-white text-orange-600 font-bold px-5 py-2 rounded-full text-sm hover:bg-amber-50 transition">
              Shop Deals →
            </span>
          </div>
        </Link>
      </section>

      {/* ── FEATURED ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">Featured Picks</h2>
          <Link href="/products" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 3} />
          ))}
        </div>
      </section>

      {/* ── TRENDING ── */}
      <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-lg">🔥</span>
          <h2 className="text-xl font-bold text-gray-900">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {trending.map((p, i) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── TOP BRANDS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-lg">🏷️</span>
          <h2 className="text-xl font-bold text-gray-900">Top Brands</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x">
          {['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Bose', 'Puma', "Levi's"].map(brand => (
            <Link key={brand} href={`/products?search=${encodeURIComponent(brand)}`}
              className="snap-start shrink-0 bg-white border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 hover:shadow-md hover:border-indigo-200 transition min-w-[140px]">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                {brand.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{brand}</p>
                <p className="text-[10px] text-gray-400">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── EXPRESS / 10-MIN ORDER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Link href="/products" className="block bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 md:p-8 text-white overflow-hidden relative">
          <div className="flex items-center gap-4">
            <span className="text-4xl">⚡</span>
            <div>
              <span className="text-emerald-200 text-xs font-bold tracking-widest uppercase">Express</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-0.5">10-Minute Order</h2>
              <p className="text-emerald-100 text-sm mt-1 max-w-md">Quick checkout for returning customers. Select, pay, and done — under 10 minutes.</p>
              <span className="inline-block mt-3 bg-white text-emerald-700 font-bold px-5 py-2 rounded-full text-sm hover:bg-emerald-50 transition">
                Shop Now →
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── PERSONALIZED (was "AI Recommendations") ── */}
      {recommended.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-lg">🎯</span>
            <h2 className="text-xl font-bold text-gray-900">Just For You</h2>
            <span className="text-[10px] bg-indigo-100 text-indigo-600 font-bold px-2 py-0.5 rounded-full">Personalized</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {recommended.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 2} />
            ))}
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="max-w-lg mx-auto text-center">
            <span className="text-3xl">✉️</span>
            <h2 className="text-xl font-bold text-gray-900 mt-2">Stay in the Loop</h2>
            <p className="text-sm text-gray-500 mt-1">Get early access to new drops and exclusive deals.</p>
            {subscribed ? (
              <p className="mt-4 text-green-600 font-semibold">✓ You're on the list!</p>
            ) : (
              <form onSubmit={async e => { e.preventDefault(); 
                await fetch('/api/subscribe', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email, name: '' }) });
                setSubscribed(true); 
              }} className="mt-4 flex gap-2 max-w-sm mx-auto">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <button type="submit" className="bg-gray-900 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition text-sm">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
