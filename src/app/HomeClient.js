'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import ShareButton from '@/components/ShareButton';
import products, { getFeaturedProducts, getCategories, formatPrice, getPersonalizedRecommendations } from '@/data/products';
import { Sparkles, TrendingUp, Target, Tag, ArrowRight, Mail, ChevronRight, Star } from 'lucide-react';

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
      {/* ═══════════════════════════════════════════
           HERO — Animated Gradient Orbs + Premium Hero
           ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#08080f]">
        {/* Animated orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-30" />

        {/* Noise texture */}
        <div className="noise" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-200 text-xs font-semibold tracking-widest uppercase">New Season Collection</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="text-white">Discover What </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                  You Love
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                Curated collections across electronics, fashion, home, and more. 
                Smart recommendations tailored to your taste — because you deserve 
                <span className="text-zinc-300"> the extraordinary</span>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/products" className="group relative inline-flex items-center gap-2 bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold px-8 py-3.5 rounded-xl overflow-hidden transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]" />
                  <span className="relative">Explore Collection</span>
                  <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#trending" className="inline-flex items-center gap-2 border border-white/15 text-zinc-300 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-300">
                  <TrendingUp className="w-4 h-4" /> Trending
                </Link>
                <ShareButton title="Spree - Discover What You Love" dark />
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm text-zinc-500">4.9/5 <span className="hidden sm:inline">Rating</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30" />
                  <span className="text-sm text-zinc-500">Free Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30" />
                  <span className="text-sm text-zinc-500">Easy Returns</span>
                </div>
              </div>
            </div>

            {/* Right: Featured product grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4 relative">
              {/* Floating sparkles */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" />

              {featured.slice(0, 4).map((p, i) => (
                <Link key={p.id} href={`/products/${p.slug}`}
                  className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-amber-500/20 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-amber-500/5 ${
                    i === 0 ? 'row-span-2' : ''
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={`${i === 0 ? 'aspect-[3/4]' : 'aspect-square'} p-4 flex items-center justify-center`}>
                    <img src={p.image} alt={p.name}
                      className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl" />
                  </div>
                  {/* Hover info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080f]/90 via-[#08080f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-4">
                    <div>
                      <p className="text-white text-sm font-semibold line-clamp-1">{p.name}</p>
                      <p className="text-amber-400 text-sm font-bold mt-0.5">{formatPrice(p.price)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08080f] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
           CATEGORIES — Glassmorphic Grid
           ═══════════════════════════════════════════ */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 z-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat, i) => {
            const count = products.filter(p => p.category === cat).length;
            return (
              <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                className="group glass-card rounded-xl p-4 text-center hover:border-amber-500/20 transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}>
                <span className="text-2xl block mb-2 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 inline-block">{categoryIcons[cat] || '🛍️'}</span>
                <h3 className="font-semibold text-white text-[11px] leading-tight">{cat}</h3>
                <p className="text-[10px] text-zinc-600 mt-0.5">{count} items</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           DEALS BANNER — Gradient + Glow
           ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <Link href="/products" className="group relative block overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-orange-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300/10 rounded-full blur-3xl animate-pulse-slow" />
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl border border-white/10">
              🏷️
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-amber-200/80 text-xs font-bold tracking-[0.15em] uppercase">Limited Time</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-1">Summer Sale — Up to 40% Off</h2>
              <p className="text-amber-100/70 text-sm mt-1">Best deals on top brands. Offer ends soon.</p>
            </div>
            <span className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-7 py-3.5 rounded-xl text-sm hover:bg-amber-50 transition-all duration-300 group-hover:shadow-xl group-hover:gap-3 shrink-0">
              Shop Now <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* ═══════════════════════════════════════════
           FEATURED PICKS
           ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-amber-400/80 text-xs font-bold tracking-[0.15em] uppercase">Editor&apos;s Choice</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-1">Featured Picks</h2>
            <p className="text-zinc-500 text-sm mt-1">Handpicked selections you won&apos;t want to miss</p>
          </div>
          <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group">
            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featured.map((p, i) => (<ProductCard key={p.id} product={p} priority={i < 3} />))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group">
            View All Products <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           TRENDING NOW — Section Divider + Cards
           ═══════════════════════════════════════════ */}
      <section id="trending" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="divider-shine mb-8" />
        
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-violet-400/80 text-xs font-bold tracking-[0.15em] uppercase">Most Popular</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-1">Trending Now</h2>
            <p className="text-zinc-500 text-sm mt-1">What everyone&apos;s talking about this week</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {trending.map((p, i) => (<ProductCard key={p.id} product={p} />))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           TOP BRANDS — Scrolling Marquee + Cards
           ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="divider-shine mb-8" />
        
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-zinc-500 text-xs font-bold tracking-[0.15em] uppercase">Trusted Names</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-1">Top Brands</h2>
            <p className="text-zinc-500 text-sm mt-1">Discover premium products from world-class brands</p>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x scrollbar-thin">
          {['Apple', 'Samsung', 'Sony', 'Nike', 'Adidas', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Bose', 'Puma', "Levi's"].map((brand, i) => (
            <Link key={brand} href={`/products?search=${encodeURIComponent(brand)}`}
              className="group snap-start shrink-0 glass-card rounded-xl px-5 py-4 flex items-center gap-4 hover:border-amber-500/20 transition-all duration-300 min-w-[150px]"
              style={{ animationDelay: `${i * 50}ms` }}>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center text-lg font-bold text-amber-400 border border-amber-500/10">
                {brand.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">{brand}</p>
                <p className="text-[11px] text-amber-400/70 group-hover:text-amber-400 transition-colors">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           PERSONALIZED RECOMMENDATIONS
           ═══════════════════════════════════════════ */}
      {personalized.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="divider-shine mb-8" />
          
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-emerald-400/80 text-xs font-bold tracking-[0.15em] uppercase">Just For You</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-1">Based on Your Activity</h2>
              <p className="text-zinc-500 text-sm mt-1">AI-powered recommendations crafted to your taste</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-gradient-to-r from-amber-500/20 to-violet-500/20 text-amber-300 font-bold px-3 py-1.5 rounded-full border border-amber-500/20">
              <Sparkles className="w-3 h-3" /> Personalized
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personalized.map((p, i) => (<ProductCard key={p.id} product={p} priority={i < 2} />))}
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
           NEWSLETTER — Dark Glass CTA
           ═══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#111125] to-[#0a0a18]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08),transparent_60%)]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-violet-500/5 rounded-full blur-3xl" />
          
          <div className="relative p-10 md:p-14 text-center max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">Stay in the Loop</h2>
            <p className="text-zinc-400 text-sm mb-6">Get early access to new drops, exclusive deals, and curated picks delivered to your inbox.</p>
            
            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-6 py-3">
                <span className="text-emerald-400 font-semibold">✓ You&apos;re on the list!</span>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubscribed(true); }} className="flex gap-3 max-w-sm mx-auto">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all duration-300" />
                <button type="submit" className="bg-gradient-to-br from-amber-500 to-amber-600 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 text-sm inline-flex items-center gap-1.5 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30">
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
