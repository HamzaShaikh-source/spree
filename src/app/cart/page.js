'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/data/products';
import Recommendations from '@/components/Recommendations';

export default function CartPage() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = () => {
      setItems(JSON.parse(localStorage.getItem('cart') || '[]'));
      setLoaded(true);
    };
    load();
    window.addEventListener('cart-update', load);
    return () => window.removeEventListener('cart-update', load);
  }, []);

  const updateQty = (id, delta) => {
    const updated = items.map(i => {
      if (i.id === id) {
        const newQty = i.qty + delta;
        return newQty <= 0 ? null : { ...i, qty: newQty };
      }
      return i;
    }).filter(Boolean);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-update'));
    setItems(updated);
  };

  const removeItem = (id) => {
    const updated = items.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-update'));
    setItems(updated);
  };

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const itemCount = items.reduce((s, i) => s + i.qty, 0);

  if (!loaded) return <div className="max-w-4xl mx-auto px-4 py-20 text-center text-gray-400">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Shopping Cart</h1>
      <p className="text-sm text-gray-400 mb-8">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <p className="text-5xl mb-4">🛒</p>
          <h2 className="text-lg font-semibold text-gray-900">Your cart is empty</h2>
          <p className="text-sm text-gray-400 mt-1">Browse products and add items you love.</p>
          <Link href="/products" className="mt-4 inline-block bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-gray-50" />
              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.id}`} className="text-sm font-semibold text-gray-900 hover:text-indigo-600 line-clamp-1">
                  {item.name}
                </Link>
                <p className="text-sm font-bold text-gray-900 mt-0.5">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition text-sm">−</button>
                <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition text-sm">+</button>
              </div>
              <p className="text-sm font-bold text-gray-900 w-20 text-right">{formatPrice(item.price * item.qty)}</p>
              <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500 transition p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}

          {/* Summary */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal ({itemCount} items)</span>
              <span className="font-semibold text-gray-900">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">Free</span>
            </div>
            <div className="border-t border-gray-100 my-3" />
            <div className="flex justify-between text-base font-bold text-gray-900">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Link href="/checkout" className="block w-full mt-4 bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 transition shadow-sm text-center">
              Proceed to Checkout →
            </Link>
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="mt-12">
        <Recommendations title="Complete Your Look" />
      </div>
    </div>
  );
}
