'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import products, { formatPrice } from '@/data/products';

export default function SearchSuggestions({ query, onSearch, onSubmit, isFocused }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    setSearchHistory(JSON.parse(localStorage.getItem('searchHistory') || '[]'));
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const q = query.toLowerCase();
      const matches = products
        .filter(p => p.name.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)) || p.category.toLowerCase().includes(q))
        .slice(0, 6);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Hide on click outside
  useEffect(() => {
    const handleClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setSearchHistory([]); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const saveSearch = (term) => {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const updated = [term, ...history.filter(h => h !== term)].slice(0, 8);
    localStorage.setItem('searchHistory', JSON.stringify(updated));
    setSearchHistory(updated);
  };

  const handleSelect = (term) => {
    saveSearch(term);
    onSearch(term);
    setTimeout(() => {
      window.location.href = `/products?search=${encodeURIComponent(term)}`;
    }, 50);
  };

  const clearHistory = () => {
    localStorage.removeItem('searchHistory');
    setSearchHistory([]);
  };

  // Show when: typing suggestions exist OR search history available
  const showSuggestions = suggestions.length > 0;
  const showHistory = query.length === 0 && searchHistory.length > 0 && isFocused;

  if (!showSuggestions && !showHistory) return null;

  return (
    <div ref={ref} className="absolute top-full left-0 right-0 mt-1 z-50">
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
        {/* Suggestions */}
        {showSuggestions && (
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold px-3 pt-2 pb-1">Suggestions</p>
            {suggestions.map(p => (
              <button key={p.id} onMouseDown={() => handleSelect(p.name)}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-indigo-50 transition text-left">
                <img src={p.image} alt="" className="w-8 h-8 rounded-lg object-cover bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-900 truncate">{p.name}</p>
                  <p className="text-[10px] text-gray-400">{p.category}</p>
                </div>
                <span className="text-xs font-bold text-gray-900">{formatPrice(p.price)}</span>
              </button>
            ))}
          </div>
        )}

        {/* Search History */}
        {showHistory && (
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Recent Searches</p>
              <button onMouseDown={clearHistory} className="text-[10px] text-red-400 hover:text-red-500">Clear</button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {searchHistory.map((term, i) => (
                <button key={i} onMouseDown={() => handleSelect(term)}
                  className="text-xs bg-gray-100 hover:bg-indigo-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200 transition">
                  🕐 {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
