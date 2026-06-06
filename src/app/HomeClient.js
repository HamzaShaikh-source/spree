'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight, Smartphone, Shirt, Home, BookOpen, Dumbbell, Sparkles as SparkleIcon,
  Laptop, PenTool, ShoppingBag, Flame, Target, Tag, Zap, Mail, Check, Star,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ShareButton from '@/components/ShareButton';
import products, { getFeaturedProducts, getCategories, formatPrice, getPersonalizedRecommendations } from '@/data/products';

const CATEGORY_ICONS = {
  'Electronics': Smartphone,
  'Fashion': Shirt,
  'Home & Kitchen': Home,
  'Books & Media': BookOpen,
  'Sports & Outdoors': Dumbbell,
  'Beauty': SparkleIcon,
  'Laptops & Computers': Laptop,
  'Stationery & Office': PenTool,
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);
  const categories = getCategories();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [trending, setTrending] = useState([]);
  const [personalized, setPersonalized] = useState([]);

  useEffect(() => {
    setPersonalized(getPersonalizedRecommendations(6));
    setTrending([...products].sort((a, b) => b.reviews - a.reviews).slice(0, 5));
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="gradient-mesh text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-1.5 glass-dark text-brand-100 text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">
                <SparkleIcon className="w-3.5 h-3.5" /> New Season Drop
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-5 leading-[1.05] tracking-tight text-balance">
                Discover What<br />
                <span className="text-gradient-brand">You Love</span>
              </h1>
              <p className="mt-5 text-lg text-gray-300 leading-relaxed max-w-lg text-pretty">
                Curated collections across electronics, fashion, home, and more. Smart picks tailored to your taste.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Link href="/products" className="inline-flex items-center gap-2 bg-white text-ink font-bold px-6 py-3.5 rounded-2xl hover:bg-gray-100 transition shadow-soft-lg hover:scale-[1.03] active:scale-95">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#trending" className="inline-flex items-center gap-2 glass-dark text-white font-semibold px-6 py-3.5 rounded-2xl hover:bg-white/15 transition">
                  Trending <Flame className="w-4 h-4" />
                </Link>
                <ShareButton title="Spree - Discover What You Love" dark />
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Free shipping over Rs.999</span>
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-current" /> 4.8 rated store</span>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              {featured.slice(0, 4).map((p, i) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className={`aspect-square rounded-3xl overflow-hidden glass-dark shadow-soft-lg hover:scale-[1.04] transition-transform duration-300 ${i % 2 === 1 ? 'mt-8' : ''}`}>
                    <img src={p.image || "/placeholder.svg"} alt={p.name} className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat] || ShoppingBag;
            const count = products.filter(p => p.category === cat).length;
            return (
              <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                className="bg-white rounded-2xl p-4 shadow-soft border border-black/5 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 text-center group animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}>
                <span className="mx-auto grid place-items-center w-11 h-11 rounded-2xl gradient-brand-soft text-brand-600 group-hover:gradient-brand group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-ink text-xs mt-2.5 leading-tight">{cat}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">{count} items</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── DEALS BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Link href="/products" className="group block gradient-amber rounded-3xl p-7 md:p-10 text-white overflow-hidden relative shadow-soft-lg">
          <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute right-10 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Tag className="w-40 h-40" />
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">
              <Flame className="w-3.5 h-3.5" /> Limited Time
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold mt-3 text-balance">Summer Sale — Up to 40% Off</h2>
            <p className="text-amber-50 mt-2 text-sm md:text-base">Best deals on top brands. Offer ends soon.</p>
            <span className="inline-flex items-center gap-2 mt-5 bg-white text-orange-600 font-bold px-6 py-3 rounded-2xl text-sm group-hover:gap-3 transition-all">
              Shop Deals <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* ── FEATURED ── */}
      <SectionHeader title="Featured Picks" href="/products" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 3} />
          ))}
        </div>
      </section>

      {/* ── TRENDING ── */}
      <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-orange-50 text-orange-500">
            <Flame className="w-5 h-5" />
          </span>
          <h2 className="text-xl font-display font-bold text-ink">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {trending.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── PERSONALIZED ── */}
      {personalized.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="grid place-items-center w-9 h-9 rounded-xl gradient-brand-soft text-brand-600">
              <Target className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-display font-bold text-ink">Based on Your Activity</h2>
            <span className="text-[10px] bg-brand-100 text-brand-700 font-bold px-2.5 py-1 rounded-full">Personalized</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {personalized.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 2} />
            ))}
          </div>
        </section>
      )}

      {/* ── TOP BRANDS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-600">
            <Tag className="w-5 h-5" />
          </span>
          <h2 className="text-xl font-display font-bold text-ink">Top Brands</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x">
          {['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Bose', 'Puma', "Levi's"].map(brand => (
            <Link key={brand} href={`/products?search=${encodeURIComponent(brand)}`}
              className="snap-start shrink-0 bg-white border border-black/5 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 min-w-[150px]">
              <div className="grid place-items-center w-11 h-11 rounded-xl gradient-brand-soft text-sm font-display font-extrabold text-brand-600">
                {brand.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-ink text-sm">{brand}</p>
                <p className="text-[10px] text-gray-400 flex items-center gap-0.5">Explore <ArrowRight className="w-2.5 h-2.5" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── EXPRESS / 10-MIN ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <Link href="/products" className="group block bg-gradient-to-r from-emerald-600 to-green-700 rounded-3xl p-7 md:p-10 text-white overflow-hidden relative shadow-soft-lg">
          <div className="absolute -right-6 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Zap className="w-44 h-44" />
          </div>
          <div className="flex items-center gap-5 relative z-10">
            <span className="grid place-items-center w-16 h-16 rounded-2xl bg-white/15 shrink-0">
              <Zap className="w-8 h-8" />
            </span>
            <div>
              <span className="text-emerald-100 text-xs font-bold tracking-wide uppercase">Express</span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mt-0.5">10-Minute Order</h2>
              <p className="text-emerald-50 text-sm mt-1 max-w-md">Quick checkout for returning customers. Select, pay, and done.</p>
              <span className="inline-flex items-center gap-2 mt-4 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-2xl text-sm group-hover:gap-3 transition-all">
                Shop Now <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-4">
        <div className="gradient-brand-soft rounded-3xl p-8 md:p-14 border border-brand-100 relative overflow-hidden">
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-brand-200/30 blur-3xl" />
          <div className="max-w-lg mx-auto text-center relative z-10">
            <span className="mx-auto grid place-items-center w-14 h-14 rounded-2xl gradient-brand text-white shadow-soft">
              <Mail className="w-7 h-7" />
            </span>
            <h2 className="font-display text-2xl font-bold text-ink mt-4">Stay in the Loop</h2>
            <p className="text-sm text-ink-soft mt-1.5">Get early access to new drops and exclusive deals.</p>
            {subscribed ? (
              <p className="mt-5 inline-flex items-center gap-2 text-green-600 font-semibold bg-green-50 px-4 py-2.5 rounded-2xl">
                <Check className="w-5 h-5" /> You&apos;re on the list!
              </p>
            ) : (
              <form onSubmit={async e => {
                e.preventDefault();
                await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, name: '' }) });
                setSubscribed(true);
              }} className="mt-6 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-2xl border border-black/5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 shadow-soft" />
                <button type="submit" className="gradient-brand text-white font-bold px-6 py-3 rounded-2xl hover:opacity-90 transition text-sm shadow-soft hover:scale-[1.02] active:scale-95">
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

function SectionHeader({ title, href }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-bold text-ink">{title}</h2>
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:gap-2.5 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
