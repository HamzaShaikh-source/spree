'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Search, Mic, ShoppingCart, User, Menu, X, ChevronDown, Sparkles, Package } from 'lucide-react';
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
          try { listener?.subscription?.unsubscribe(); } catch (e) {}
        };
      } catch (e) {}
    }
    return () => {
      window.removeEventListener('cart-update', update);
      window.removeEventListener('storage', update);
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
      <header className="glass border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <span className="grid place-items-center w-9 h-9 rounded-xl gradient-brand text-white shadow-soft group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </span>
              <span className="font-display font-extrabold text-lg text-ink tracking-tight">{t('brand')}</span>
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl relative">
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  placeholder={t('search')}
                  className="w-full pl-10 pr-12 py-2.5 bg-white/70 border border-black/5 rounded-2xl text-sm text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white transition shadow-soft"
                />
                <button type="button" onClick={startVoiceSearch}
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-xl transition ${
                    listening ? 'bg-red-500 text-white animate-pulse-ring' : 'text-gray-500 hover:text-brand-600 bg-gray-100 hover:bg-brand-50'
                  }`}
                  title={t('searchVoice')}
                >
                  <Mic className="w-4 h-4" />
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
              {showVoiceTip && (
                <span className="absolute -bottom-9 left-0 bg-ink text-white text-xs px-3 py-1.5 rounded-lg shadow-soft animate-fade-in">
                  Voice search not supported on this browser
                </span>
              )}
            </form>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="text-sm text-ink-soft hover:text-brand-600 font-medium px-3 py-2 rounded-lg hover:bg-brand-50 transition">{t('home')}</Link>
              <div className="relative group">
                <button className="text-sm text-ink-soft hover:text-brand-600 font-medium px-3 py-2 rounded-lg hover:bg-brand-50 transition flex items-center gap-1">
                  {t('shop')}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white border border-black/5 rounded-2xl shadow-soft-lg py-2 min-w-[210px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  {categories.map(cat => (
                    <a key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                      className="block px-4 py-2 text-sm text-ink-soft hover:bg-brand-50 hover:text-brand-700 transition">{cat}</a>
                  ))}
                  <div className="border-t border-gray-100 mt-1.5 pt-1.5">
                    <a href="/products" className="block px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50 transition">{t('viewAll')}</a>
                  </div>
                </div>
              </div>
              <Link href="/products" className="text-sm text-ink-soft hover:text-brand-600 font-medium px-3 py-2 rounded-lg hover:bg-brand-50 transition">{t('products')}</Link>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-1.5">
              {/* Language */}
              <div className="relative hidden sm:block">
                <button onClick={() => setLangOpen(!langOpen)}
                  className="text-xs text-ink-soft hover:text-ink font-semibold px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
                  {lang.toUpperCase()}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1.5 bg-white border border-black/5 rounded-2xl shadow-soft-lg py-1.5 min-w-[130px] z-50 animate-scale-in origin-top-right">
                    {LANGUAGES.map(l => (
                      <button key={l.code} onClick={() => { changeLang(l.code); setLangOpen(false); }}
                        className={`block w-full text-left px-3.5 py-2 text-sm transition ${
                          lang === l.code ? 'bg-brand-50 text-brand-700 font-semibold' : 'text-ink-soft hover:bg-gray-50'
                        }`}>
                        {l.native}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Orders */}
              <Link href="/orders" className="hidden sm:grid place-items-center w-10 h-10 rounded-xl text-ink-soft hover:text-brand-600 hover:bg-brand-50 transition" title="My Orders">
                <Package className="w-5 h-5" />
              </Link>

              {/* Login */}
              <button onClick={() => setLoginOpen(true)}
                className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-brand-600 font-medium px-2.5 py-1.5 rounded-xl hover:bg-brand-50 transition">
                <User className="w-5 h-5" />
                <span className="hidden md:inline max-w-[90px] truncate">
                  {user ? (user.user_metadata?.full_name || user.email?.split('@')[0] || 'User') : t('login')}
                </span>
              </button>

              {/* Cart */}
              <Link href="/cart" className="relative grid place-items-center w-10 h-10 rounded-xl text-ink-soft hover:text-brand-600 hover:bg-brand-50 transition">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 gradient-brand text-white text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow animate-scale-in">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden grid place-items-center w-10 h-10 rounded-xl text-ink-soft hover:bg-gray-100 transition">
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-black/5 py-3 space-y-1 animate-fade-in-up">
              <form onSubmit={handleSearch} className="px-1 pb-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                    placeholder={t('search')}
                    className="w-full pl-9 pr-10 py-2.5 bg-gray-100 border border-black/5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-400" />
                  <button type="button" onClick={startVoiceSearch}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 ${listening ? 'text-red-500' : 'text-gray-400'}`}>
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </form>
              <Link href="/" className="block px-3 py-2.5 text-sm font-medium text-ink-soft rounded-xl hover:bg-brand-50" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
              <div className="px-3 py-1">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">{t('categories')}</p>
                {categories.map(cat => (
                  <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                    className="block py-2 text-sm text-ink-soft hover:text-brand-600"
                    onClick={() => setMenuOpen(false)}>{cat}</Link>
                ))}
              </div>
              <Link href="/orders" className="block px-3 py-2.5 text-sm font-medium text-ink-soft rounded-xl hover:bg-brand-50" onClick={() => setMenuOpen(false)}>My Orders</Link>
              <Link href="/products" className="block px-3 py-2.5 text-sm text-brand-600 font-semibold rounded-xl hover:bg-brand-50" onClick={() => setMenuOpen(false)}>{t('viewAll')}</Link>
            </div>
          )}
        </div>
      </header>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
