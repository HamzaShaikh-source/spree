'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { getCategories } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import LoginModal from './LoginModal';
import SearchSuggestions from './SearchSuggestions';
import { supabase } from '@/lib/supabase';
import { useTheme } from '@/context/ThemeContext';
import { Search, ShoppingCart, User, Mic, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const { t, lang, changeLang, LANGUAGES } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  const categories = getCategories();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-theme-header backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <span className="px-2.5 py-1 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg text-white text-sm font-bold tracking-tight shadow-lg shadow-amber-500/20 group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all duration-300">
                Spree
              </span>
            </Link>

            {/* Search Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg relative">
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input ref={searchRef} type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)} onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  placeholder={t('search')}
                  className="w-full pl-10 pr-12 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300" />
                <button type="button" onClick={startVoiceSearch}
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all duration-200 ${
                    listening 
                      ? 'bg-red-500/20 text-red-400 shadow-lg shadow-red-500/20' 
                      : 'text-zinc-500 hover:text-amber-400 hover:bg-white/5'
                  }`}>
                  <Mic className="w-4 h-4" />
                </button>
              </div>
              <SearchSuggestions query={searchQuery} isFocused={searchFocused} onSearch={setSearchQuery} onSubmit={() => {}} />
            </form>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
                Home
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 flex items-center gap-1">
                  Shop <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 mt-1.5 bg-theme-dropdown border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-xl">
                  {categories.map(cat => (
                    <a key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                      className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-amber-400 hover:bg-white/5 transition-colors duration-200">{cat}</a>
                  ))}
                  <div className="border-t border-white/5 mt-1.5 pt-1.5">
                    <a href="/products" className="block px-4 py-2.5 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:bg-white/5 transition-colors duration-200">View All →</a>
                  </div>
                </div>
              </div>
              <Link href="/products" className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
                Products
              </Link>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-0.5">
              {/* Language */}
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)}
                  className="text-xs font-semibold text-zinc-500 hover:text-white px-2.5 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-1">
                  {lang.toUpperCase()} <ChevronDown className="w-3 h-3" />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-theme-dropdown border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-1 min-w-[130px] z-50 backdrop-blur-xl">
                    {LANGUAGES.map(l => (
                      <button key={l.code} onClick={() => { changeLang(l.code); setLangOpen(false); }}
                        className={`block w-full text-left px-3.5 py-2 text-sm transition-colors duration-200 ${
                          lang === l.code ? 'bg-amber-500/10 text-amber-400 font-semibold' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}>{l.native}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              {mounted && (
                <button onClick={toggleTheme} className="theme-toggle-btn" title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                  {theme === 'dark' ? <Sun /> : <Moon />}
                </button>
              )}

              {/* Social - subtle only */}
              <a href="https://github.com/HamzaShaikh-source" target="_blank" rel="noopener noreferrer" className="hidden sm:block p-2 text-zinc-500 hover:text-amber-400 transition-colors duration-200 rounded-lg hover:bg-white/5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>

              {/* Login */}
              <button onClick={() => setLoginOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white px-2.5 py-2 rounded-lg hover:bg-white/5 transition-all duration-200">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{user ? (user.user_metadata?.full_name || user.email?.split('@')[0]) : 'Login'}</span>
              </button>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="cart-badge absolute -top-0.5 -right-0.5">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-white/5 py-4 space-y-1 animate-fadeIn">
              <form onSubmit={handleSearch} className="px-2 pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                    placeholder={t('search')}
                    className="w-full pl-9 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 transition-all" />
                  <button type="button" onClick={startVoiceSearch}
                    className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all ${
                      listening ? 'bg-red-500/20 text-red-400' : 'text-zinc-500 hover:text-amber-400'
                    }`}>
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </form>
              <Link href="/" className="block px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMenuOpen(false)}>Home</Link>
              <div className="px-3 py-1">
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold mb-2">Categories</p>
                {categories.map(cat => (
                  <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                    className="block py-2 text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}>{cat}</Link>
                ))}
              </div>
              <Link href="/products" className="block px-3 py-2.5 text-sm text-amber-400 font-semibold hover:bg-white/5 rounded-lg transition-all" onClick={() => setMenuOpen(false)}>View All →</Link>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
