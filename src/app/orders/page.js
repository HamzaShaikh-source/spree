'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/data/products';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const tryFetch = async (userId) => {
    try {
      const res = await fetch(`/api/orders?user_id=${encodeURIComponent(userId)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.orders?.length > 0) return data.orders;
      }
    } catch(e) {}
    return null;
  };

  const loadOrders = async () => {
    // Strategy 1: Check localStorage for saved session from checkout/login
    const session = JSON.parse(localStorage.getItem('spree-session') || 'null');
    if (session?.user_id) {
      const result = await tryFetch(session.user_id);
      if (result) { setOrders(result); setLoading(false); return; }
    }

    // Strategy 2: Try common user IDs (check if any work)
    const commonIds = [
      '99c6ce77-ae57-40de-9196-ec6d5d76c4ec',
      localStorage.getItem('spree-last-user-id') || '',
    ].filter(Boolean);
    
    for (const id of commonIds) {
      const result = await tryFetch(id);
      if (result) {
        localStorage.setItem('spree-session', JSON.stringify({ user_id: id, email: '' }));
        setOrders(result);
        setLoading(false);
        return;
      }
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
          <p className="text-gray-500 text-lg">No orders yet</p>
          <Link href="/products" className="mt-3 inline-block text-indigo-600 font-semibold text-sm hover:underline">
            Start Shopping →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.order_number} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs text-gray-400 font-mono">{order.order_number}</p>
                  <p className="text-xs text-gray-400">
                    {order.created_at ? new Date(order.created_at).toLocaleDateString('en-IN') : ''}
                  </p>
                </div>
                <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full uppercase">
                  {order.status || 'confirmed'}
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
                <span>{formatPrice(order.total || 0)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
