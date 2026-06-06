'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/data/products';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Try to get orders from API (works if any user is logged in)
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      // First check if we have a session by calling the orders API
      const res = await fetch('/api/orders?user_id=me');
      if (res.ok) {
        const data = await res.json();
        if (data.orders) {
          setOrders(data.orders);
          setLoggedIn(true);
          setLoading(false);
          return;
        }
      }
    } catch(e) {}
    
    // If that fails, try to get user_id from URL fragment (after Google login)
    try {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        // User just logged in - save their session info
        const params = new URLSearchParams(hash.replace('#', ''));
        const email = params.get('email') || 'user';
        localStorage.setItem('spree-session', JSON.stringify({ email }));
      }
    } catch(e) {}
    
    // Try getting orders with the stored user_id (from checkout)
    const session = JSON.parse(localStorage.getItem('spree-session') || 'null');
    if (session?.user_id) {
      try {
        const res = await fetch(`/api/orders?user_id=${session.user_id}`);
        const data = await res.json();
        setOrders(data.orders || []);
        setLoggedIn(true);
      } catch(e) {}
    }
    
    setLoading(false);
  };

  if (loading) return <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-400">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">My Orders</h1>
      <p className="text-sm text-gray-400 mb-6">{orders.length} order{orders.length !== 1 ? 's' : ''}</p>

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-4xl mb-3">📦</p>
          <p className="text-gray-500 text-lg">{loggedIn ? 'No orders yet' : 'Sign in to view your orders'}</p>
          <Link href="/products" className="mt-3 inline-block text-indigo-600 font-semibold text-sm hover:underline">
            {loggedIn ? 'Start Shopping →' : 'Browse Products'}
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs text-gray-400 font-mono">{order.order_number}</p>
                  <p className="text-xs text-gray-400">{new Date(order.created_at).toLocaleDateString('en-IN')}</p>
                </div>
                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full uppercase">
                  {order.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                {(typeof order.items === 'string' ? JSON.parse(order.items) : order.items || []).map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-gray-600">{item.name} × {item.qty}</span>
                    <span className="font-medium">{formatPrice(item.price * item.qty)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 mt-3 pt-3 flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
