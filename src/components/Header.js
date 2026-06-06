'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { getCategories } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import LoginModal from './LoginModal';
import SearchSuggestions from './SearchSuggestions';
import { supabase } from '@/lib/supabase';

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
  const [showVoiceTip, setShowVoiceTip] = useState(false);
  const searchRef = useRef(null);
  const recognitionRef = useRef(null);

  const categories = getCategories();

  useEffect(() => {
    const update = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.reduce((s, i) => s + i.qty, 0));
    };
    update();
    window.addEventListener('cart-update', update);
    window.addEventListener('storage', update);
    
    // Get user from Supabase
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) setUser(data.session.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    
    return () => {
      window.removeEventListener('cart-update', update);
      window.removeEventListener('storage', update);
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setShowVoiceTip(true);
      setTimeout(() => setShowVoiceTip(false), 2000);
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setListening(false);
      // Auto search after voice input
      setTimeout(() => {
        window.location.href = `/products?search=${encodeURIComponent(transcript)}`;
      }, 300);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
    setListening(true);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 shrink-0">
              <span className="text-lg">✨</span>
              <span className="font-bold text-base text-gray-900 tracking-tight">{t('brand')}</span>
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md relative">
              <div className="relative w-full">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  placeholder={t('search')}
                  className="w-full pl-8 pr-14 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition"
                />
                <svg className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <button type="button" onClick={startVoiceSearch}
                  className={`absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition ${
                    listening ? 'bg-red-500 text-white shadow' : 'text-gray-400 hover:text-indigo-600 bg-gray-200 hover:bg-gray-300'
                  }`}
                  title={t('searchVoice')}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8" />
                  </svg>
                </button>
              </div>
              <SearchSuggestions 
                query={searchQuery} 
                isFocused={searchFocused}
                onSearch={(term) => setSearchQuery(term)}
                onSubmit={() => {
                  if (searchQuery.trim()) {
                    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
                    const updated = [searchQuery.trim(), ...history.filter(h => h !== searchQuery.trim())].slice(0, 8);
                    localStorage.setItem('searchHistory', JSON.stringify(updated));
                    window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
                  }
                }}
              />
            </form>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/" className="text-xs text-gray-600 hover:text-gray-900 font-medium transition">{t('home')}</Link>
              <div className="relative group">
                <button className="text-xs text-gray-600 hover:text-gray-900 font-medium transition flex items-center gap-0.5">
                  {t('shop')}
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-0.5 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  {categories.map(cat => (
                    <a key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                      className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-gray-50">{cat}</a>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <a href="/products" className="block px-4 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-gray-50">{t('viewAll')}</a>
                  </div>
                </div>
              </div>
              <Link href="/products" className="text-xs text-gray-600 hover:text-gray-900 font-medium transition">{t('products')}</Link>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-1">
              {/* Language */}
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)}
                  className="text-xs text-gray-500 hover:text-gray-800 font-semibold px-2 py-1 rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
                  {lang.toUpperCase()}
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[120px] z-50">
                    {LANGUAGES.map(l => (
                      <button key={l.code} onClick={() => { changeLang(l.code); setLangOpen(false); }}
                        className={`block w-full text-left px-3 py-1.5 text-xs transition ${
                          lang === l.code ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                        }`}>
                        {l.native}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Login */}
              <button onClick={() => setLoginOpen(true)}
                className="text-xs text-gray-600 hover:text-gray-900 font-medium px-2 py-1 rounded-lg hover:bg-gray-100 transition">
                {user ? (user.user_metadata?.full_name || user.email?.split('@')[0] || 'User') : t('login')}
              </button>

              {/* Cart */}
              <Link href="/cart" className="relative p-1.5 text-gray-600 hover:text-gray-900 transition">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-indigo-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99' : cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1.5 text-gray-600">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-gray-100 py-2 space-y-1">
              <form onSubmit={handleSearch} className="px-2 pb-2">
                <div className="relative">
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                    placeholder={t('search')}
                    className="w-full pl-8 pr-8 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-xs focus:outline-none" />
                  <svg className="absolute left-2.5 top-1.5 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <button type="button" onClick={startVoiceSearch}
                    className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-0.5 ${listening ? 'text-red-500' : 'text-gray-400'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8" />
                    </svg>
                  </button>
                </div>
              </form>
              <Link href="/" className="block px-2 py-1.5 text-xs text-gray-700" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
              <div className="px-2 py-1">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">{t('categories')}</p>
                {categories.map(cat => (
                  <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                    className="block py-1 text-xs text-gray-600 hover:text-gray-900"
                    onClick={() => setMenuOpen(false)}>{cat}</Link>
                ))}
              </div>
              <Link href="/products" className="block px-2 py-1.5 text-xs text-indigo-600 font-semibold" onClick={() => setMenuOpen(false)}>{t('viewAll')}</Link>
            </div>
          )}
        </div>
      </header>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
