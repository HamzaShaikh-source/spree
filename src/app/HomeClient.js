'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import ShareButton from '@/components/ShareButton';
import products, { getFeaturedProducts, getCategories, formatPrice, getPersonalizedRecommendations } from '@/data/products';
import { Sparkles, TrendingUp, Target, Tag, ArrowRight, Mail, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);
  const categories = getCategories();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [personalized, setPersonalized] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    setPersonalized(getPersonalizedRecommendations(6));
    setTrending([...products].sort((a, b) => b.reviews - a.reviews).slice(0, 5));
  }, []);

  const categoryIcons = {
    'Electronics': '📱', 'Fashion': '👕', 'Home & Kitchen': '🏠',
    'Books & Media': '📚', 'Sports & Outdoors': '🏃', 'Beauty': '💄',
    'Laptops & Computers': '💻', 'Stationery & Office': '✏️',
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 text-indigo-300 text-xs font-semibold tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1">
                <Sparkles className="w-3.5 h-3.5" /> New Season
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Discover What<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">You Love</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Curated collections across electronics, fashion, home, and more. Smart picks tailored to your taste.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/products" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition shadow-lg">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#trending" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition">
                  <TrendingUp className="w-4 h-4" /> Trending
                </Link>
                <ShareButton title="Spree - Discover What You Love" dark />
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-3">
              {featured.slice(0, 4).map(p => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group">
                  <div className="aspect-square bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {categories.map((cat, i) => {
            const count = products.filter(p => p.category === cat).length;
            return (
              <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                className="bg-white rounded-xl p-3.5 shadow-md border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all text-center group hover:-translate-y-0.5">
                <span className="text-2xl block">{categoryIcons[cat] || '🛍️'}</span>
                <h3 className="font-semibold text-gray-900 text-[10px] mt-1.5 leading-tight">{cat}</h3>
                <p className="text-[9px] text-gray-400 mt-0.5">{count} items</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── DEALS BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Link href="/products" className="block bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white overflow-hidden relative group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm">🏷️</div>
            <div className="flex-1">
              <span className="text-amber-200 text-xs font-bold tracking-widest uppercase">Limited Time</span>
              <h2 className="text-xl md:text-2xl font-extrabold mt-0.5">Summer Sale — Up to 40% Off</h2>
              <p className="text-amber-100 text-sm mt-0.5">Best deals on top brands. Offer ends soon.</p>
            </div>
            <span className="hidden md:inline-flex items-center gap-1.5 bg-white text-orange-600 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-amber-50 transition group-hover:gap-2">
              Shop <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* ── FEATURED ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900">Featured Picks</h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition group">
            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {featured.map((p, i) => (<ProductCard key={p.id} product={p} priority={i < 3} />))}
        </div>
      </section>

      {/* ── TRENDING ── */}
      <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-900">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {trending.map((p, i) => (<ProductCard key={p.id} product={p} />))}
        </div>
      </section>

      {/* ── TOP BRANDS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center gap-2 mb-5">
          <Tag className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-900">Top Brands</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 snap-x">
          {['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Bose', 'Puma', "Levi's"].map(brand => (
            <Link key={brand} href={`/products?search=${encodeURIComponent(brand)}`}
              className="snap-start shrink-0 bg-white border border-gray-200 rounded-xl px-5 py-3.5 flex items-center gap-3 hover:shadow-md hover:border-indigo-200 transition-all min-w-[130px] hover:-translate-y-0.5">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full flex items-center justify-center text-sm font-bold text-indigo-600">
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

      {/* ── PERSONALIZED RECS ── */}
      {personalized.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex items-center gap-2 mb-5">
            <Target className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900">Based on Your Activity</h2>
            <span className="text-[10px] bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full border border-indigo-100">Personalized</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {personalized.map((p, i) => (<ProductCard key={p.id} product={p} priority={i < 2} />))}
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm mb-3">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Stay in the Loop</h2>
            <p className="text-sm text-gray-500 mt-1">Get early access to new drops and exclusive deals.</p>
            {subscribed ? (
              <p className="mt-4 text-emerald-600 font-semibold">✓ You're on the list!</p>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubscribed(true); }} className="mt-5 flex gap-2 max-w-sm mx-auto">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white" />
                <button type="submit" className="bg-gray-900 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition text-sm inline-flex items-center gap-1.5">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
