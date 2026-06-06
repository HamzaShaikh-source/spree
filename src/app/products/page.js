'use client';

import { useState, useMemo, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import products, { getCategories, getPriceRange, formatPrice } from '@/data/products';
import Link from 'next/link';
import { Search, Mic } from 'lucide-react';

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

  if (!loaded) return <div className="text-center py-20 text-gray-400">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-xs text-gray-400 mb-4">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-600">{selectedCat || (searchQuery ? `"${searchQuery}"` : 'All Products')}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-56 shrink-0">
          <div className="mb-4">
            <div className="relative">
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search..." 
                className="w-full pl-8 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <button type="button" onClick={startVoiceSearch}
                className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full transition ${
                  voiceListening ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-indigo-600'
                }`}>
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </div>
          <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Category</h3>
          <div className="space-y-0.5 mb-5">
            <button onClick={() => setSelectedCat('')}
              className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition ${!selectedCat ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>All</button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCat(cat)}
                className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition ${selectedCat === cat ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>{cat}</button>
            ))}
          </div>
          <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Price</h3>
          <div className="space-y-2 mb-5 px-1">
            <input type="range" min={priceRange.min} max={priceRange.max} step={100} value={priceMin} onChange={e => setPriceMin(Number(e.target.value))} className="w-full accent-indigo-600" />
            <input type="range" min={priceRange.min} max={priceRange.max} step={100} value={priceMax} onChange={e => setPriceMax(Number(e.target.value))} className="w-full accent-indigo-600" />
            <div className="flex justify-between text-xs text-gray-500"><span>{formatPrice(priceMin)}</span><span>{formatPrice(priceMax)}</span></div>
          </div>
          <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Rating</h3>
          <div className="space-y-1 mb-5">
            {[0, 3, 3.5, 4, 4.5].map(r => (
              <button key={r} onClick={() => setMinRating(r)}
                className={`block w-full text-left px-3 py-1 rounded-lg text-sm transition ${minRating === r ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>{r === 0 ? 'Any' : `${r} ★ & up`}</button>
            ))}
          </div>
          {hasActiveFilters && <button onClick={clearFilters} className="w-full text-sm text-red-500 font-semibold py-2 hover:text-red-600 transition">Clear All Filters</button>}
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{selectedCat || (searchQuery ? `Search: "${searchQuery}"` : 'All Products')}</h1>
              <p className="text-sm text-gray-400">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</p>
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Popular</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-gray-500 text-lg font-medium">No items match your filters</p>
              <button onClick={clearFilters} className="mt-3 text-indigo-600 font-semibold text-sm hover:underline">Clear all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {filtered.map((p, i) => (<ProductCard key={p.id} product={p} priority={i < 4} />))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
