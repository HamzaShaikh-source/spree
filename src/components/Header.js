'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getCategories } from '@/data/products';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getCategories();

  useEffect(() => {
    const update = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.reduce((s, i) => s + i.qty, 0));
    };
    update();
    window.addEventListener('cart-update', update);
    return () => window.removeEventListener('cart-update', update);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 shrink-0">
            <span className="text-xl">✨</span>
            <span className="font-bold text-lg text-gray-900 tracking-tight">Spree</span>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-3 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white transition"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </form>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition">Home</Link>
            <div className="relative group">
              <button className="text-sm text-gray-600 hover:text-gray-900 font-medium transition flex items-center gap-1">
                Shop
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {categories.map(cat => (
                  <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    {cat}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link href="/products" className="block px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-gray-50">
                    View All →
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition">New Arrivals</Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-2">
            <form onSubmit={handleSearch} className="px-2 pb-2">
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none"
              />
            </form>
            <Link href="/" className="block px-2 py-2 text-sm text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="px-2 py-1">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">Categories</p>
              {categories.map(cat => (
                <Link key={cat} href={`/products?category=${encodeURIComponent(cat)}`}
                  className="block py-1.5 text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setMenuOpen(false)}>
                  {cat}
                </Link>
              ))}
            </div>
            <Link href="/products" className="block px-2 py-2 text-sm text-indigo-600 font-semibold" onClick={() => setMenuOpen(false)}>View All →</Link>
          </div>
        )}
      </div>
    </header>
  );
}
