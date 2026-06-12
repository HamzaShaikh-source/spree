'use client';

import { useState, useMemo, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import products, { getCategories, getPriceRange, formatPrice } from '@/data/products';
import Link from 'next/link';
import { Search, Mic, SlidersHorizontal, X, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  const categories = getCategories();
  const priceRange = getPriceRange();
  const [sort, setSort] = useState('featured');
  const [selectedCat, setSelectedCat] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceMin, setPriceMin] = useState(priceRange.min);
  const [priceMax, setPriceMax] = useState(priceRange.max);
  const [minRating, setMinRating] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [voiceListening, setVoiceListening] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      setSearchQuery(event.results[0][0].transcript);
      setVoiceListening(false);
    };
    recognition.onerror = () => setVoiceListening(false);
    recognition.onend = () => setVoiceListening(false);
    recognition.start();
    setVoiceListening(true);
  };

  // Read URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') || '';
    const search = params.get('search') || '';
    setSelectedCat(cat);
    setSearchQuery(search);
    setLoaded(true);
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCat) result = result.filter(p => p.category === selectedCat);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.description.toLowerCase().includes(q)
      );
    }
    result = result.filter(p => p.price >= priceMin && p.price <= priceMax);
    if (minRating > 0) result = result.filter(p => p.rating >= minRating);
    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'reviews': result.sort((a, b) => b.reviews - a.reviews); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
    }
    return result;
  }, [selectedCat, sort, searchQuery, priceMin, priceMax, minRating]);

  const clearFilters = () => {
    setSelectedCat(''); setSearchQuery(''); setPriceMin(priceRange.min); setPriceMax(priceRange.max); setMinRating(0);
  };
  const hasActiveFilters = selectedCat || searchQuery || priceMin > priceRange.min || priceMax < priceRange.max || minRating > 0;

  // Listen for popstate (back/forward)
  useEffect(() => {
    const onPop = () => {
      const params = new URLSearchParams(window.location.search);
      setSelectedCat(params.get('category') || '');
      setSearchQuery(params.get('search') || '');
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Also poll for URL changes (for Link-based navigation)
  useEffect(() => {
    if (!loaded) return;
    let lastUrl = window.location.href;
    const interval = setInterval(() => {
      if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        const params = new URLSearchParams(window.location.search);
        setSelectedCat(params.get('category') || '');
        setSearchQuery(params.get('search') || '');
      }
    }, 200);
    return () => clearInterval(interval);
  }, [loaded]);

  if (!loaded) return (
    <div className="min-h-screen flex items-center justify-center bg-theme-primary">
      <div className="space-y-4 text-center">
        <div className="w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto" />
        <p className="text-zinc-500 text-sm">Loading products...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-theme-primary">
      {/* Top bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Breadcrumb */}
            <div className="text-xs text-zinc-600">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span className="mx-1.5 text-zinc-700">/</span>
              <span className="text-zinc-400">{selectedCat || (searchQuery ? `"${searchQuery}"` : 'All Products')}</span>
            </div>

            {/* Mobile filter toggle */}
            <button onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 transition-all">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* ── SIDEBAR ── */}
          <aside className={`md:w-60 shrink-0 ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
            {/* Mobile close */}
            {sidebarOpen && (
              <div className="flex items-center justify-between mb-4 md:hidden">
                <h3 className="text-sm font-semibold text-white">Filters</h3>
                <button onClick={() => setSidebarOpen(false)} className="p-1 text-zinc-500 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Search */}
            <div className="mb-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search products..." 
                  className="w-full pl-9 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all duration-300" />
                <button type="button" onClick={startVoiceSearch}
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-lg transition-all ${
                    voiceListening ? 'bg-red-500/20 text-red-400' : 'text-zinc-500 hover:text-amber-400'
                  }`}>
                  <Mic className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Section: Category */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Category</h3>
              <div className="space-y-0.5">
                <button onClick={() => setSelectedCat('')}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    !selectedCat
                      ? 'bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20'
                      : 'text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}>All Categories</button>
                {categories.map(cat => (
                  <button key={cat} onClick={() => setSelectedCat(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      selectedCat === cat
                        ? 'bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20'
                        : 'text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>{cat}</button>
                ))}
              </div>
            </div>

            {/* Section: Price */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Price Range</h3>
              <div className="space-y-3 px-1">
                <input type="range" min={priceRange.min} max={priceRange.max} step={100} value={priceMin}
                  onChange={e => setPriceMin(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 appearance-none bg-white/10 rounded-full cursor-pointer" />
                <input type="range" min={priceRange.min} max={priceRange.max} step={100} value={priceMax}
                  onChange={e => setPriceMax(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 appearance-none bg-white/10 rounded-full cursor-pointer" />
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>{formatPrice(priceMin)}</span>
                  <span>{formatPrice(priceMax)}</span>
                </div>
              </div>
            </div>

            {/* Section: Rating */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Minimum Rating</h3>
              <div className="space-y-1">
                {[0, 3, 3.5, 4, 4.5].map(r => (
                  <button key={r} onClick={() => setMinRating(r)}
                    className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                      minRating === r
                        ? 'bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20'
                        : 'text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}>{r === 0 ? 'Any Rating' : `${r} ★ & up`}</button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button onClick={clearFilters}
                className="w-full text-sm font-semibold text-red-400 hover:text-red-300 py-2.5 bg-red-500/5 hover:bg-red-500/10 rounded-xl border border-red-500/10 transition-all duration-200">
                Clear All Filters
              </button>
            )}
          </aside>

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 min-w-0">
            {/* Header + Sort */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white font-display">
                  {selectedCat || (searchQuery ? `Results: "${searchQuery}"` : 'All Products')}
                </h1>
                <p className="text-sm text-zinc-500 mt-0.5">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-600 hidden sm:inline">Sort by</span>
                <select value={sort} onChange={e => setSort(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-amber-500/40 transition-all duration-200 cursor-pointer appearance-none">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Popular</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 glass-card rounded-2xl border-white/5">
                <p className="text-5xl mb-4">🔍</p>
                <p className="text-zinc-400 text-lg font-medium">No items match your filters</p>
                <p className="text-zinc-600 text-sm mt-1">Try adjusting your search or filter criteria</p>
                <button onClick={clearFilters}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-5 py-2.5 rounded-xl hover:bg-amber-500/20 transition-all">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((p, i) => (<ProductCard key={p.id} product={p} priority={i < 4} />))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
