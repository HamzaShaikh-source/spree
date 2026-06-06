'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { getCategories } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import LoginModal from './LoginModal';
import SearchSuggestions from './SearchSuggestions';
import { supabase } from '@/lib/supabase';
import { Search, ShoppingCart, User, Mic, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const { t, lang, changeLang, LANGUAGES } = useLanguage();
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef(null);

  const categories = getCategories();

  useEffect(() => {
    const update = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.reduce((s, i) => s + i.qty, 0));
    };
    update();
    window.addEventListener('cart-update', update);
    window.addEventListener('storage', update);
    
    if (supabase?.auth) {
      supabase.auth.getSession().then(({ data }) => {
        if (data?.session?.user) setUser(data.session.user);
      }).catch(() => {});
      try {
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user || null);
        });
        return () => {
          window.removeEventListener('cart-update', update);
          window.removeEventListener('storage', update);
          try { listener?.subscription?.unsubscribe(); } catch(e) {}
        };
      } catch(e) {}
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
      const updated = [searchQuery.trim(), ...history.filter(h => h !== searchQuery.trim())].slice(0, 8);
      localStorage.setItem('searchHistory', JSON.stringify(updated));
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setListening(false);
      setTimeout(() => window.location.href = `/products?search=${encodeURIComponent(transcript)}`, 300);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
    setListening(true);
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 shrink-0 group">
            <span className="px-2.5 py-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center text-white text-sm font-bold tracking-tight group-hover:shadow-md transition-shadow">Spree</span>
          </Link>

            {/* Search Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md relative">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input ref={searchRef} type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)} onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  placeholder={t('search')}
                  className="w-full pl-9 pr-12 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition" />
                <button type="button" onClick={startVoiceSearch}
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition ${
                    listening ? 'bg-red-500 text-white shadow' : 'text-gray-400 hover:text-indigo-600 bg-gray-100 hover:bg-gray-200'
                  }`}>
                  <Mic className="w-4 h-4" />
                </button>
              </div>
              <SearchSuggestions query={searchQuery} isFocused={searchFocused} onSearch={setSearchQuery} onSubmit={() => {}} />
            </form>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-5">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Home</Link>
              <div className="relative group">
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition flex items-center gap-1">
                  Shop <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 mt-1.5 bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {categories.map(cat => (
                    <a key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition">{cat}</a>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <a href="/products" className="block px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition">View All →</a>
                  </div>
                </div>
              </div>
              <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Products</Link>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-1">
              {/* Language */}
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)}
                  className="text-xs font-semibold text-gray-500 hover:text-gray-800 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
                  {lang.toUpperCase()} <ChevronDown className="w-3 h-3" />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[120px] z-50">
                    {LANGUAGES.map(l => (
                      <button key={l.code} onClick={() => { changeLang(l.code); setLangOpen(false); }}
                        className={`block w-full text-left px-3 py-1.5 text-sm transition ${
                          lang === l.code ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                        }`}>{l.native}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Social */}
              <a href="https://github.com/HamzaShaikh-source" target="_blank" rel="noopener noreferrer" className="hidden sm:block p-2 text-gray-400 hover:text-gray-700 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/hamza-shaikh-00a9a7412" target="_blank" rel="noopener noreferrer" className="hidden sm:block p-2 text-gray-400 hover:text-blue-600 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>

              {/* Login */}
              <button onClick={() => setLoginOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{user ? (user.user_metadata?.full_name || user.email?.split('@')[0]) : 'Login'}</span>
              </button>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900 transition">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-indigo-600 text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount > 99 ? '99' : cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-100 py-3 space-y-1 animate-fadeIn">
              <form onSubmit={handleSearch} className="px-2 pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                    placeholder={t('search')}
                    className="w-full pl-9 pr-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none" />
                </div>
              </form>
              <Link href="/" className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 rounded-lg" onClick={() => setMenuOpen(false)}>Home</Link>
              <div className="px-3 py-1">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">Categories</p>
                {categories.map(cat => (
                  <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                    className="block py-1.5 text-sm text-gray-600 hover:text-indigo-600"
                    onClick={() => setMenuOpen(false)}>{cat}</Link>
                ))}
              </div>
              <Link href="/products" className="block px-3 py-2 text-sm text-indigo-600 font-semibold" onClick={() => setMenuOpen(false)}>View All →</Link>
            </div>
          )}
        </div>
      </header>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
