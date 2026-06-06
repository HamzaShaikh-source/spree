'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { formatPrice } from '@/data/products';

export default function OrdersPage() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        setUser(data.session.user);
        fetchOrders(data.session.user.id);
      } else {
        setLoading(false);
      }
    });
  }, []);

  const fetchOrders = async (userId) => {
    const res = await fetch(`/api/orders?user_id=${userId}`);
    const data = await res.json();
    setOrders(data.orders || []);
    setLoading(false);
  };

  if (loading) return <div className="max-w-3xl mx-auto px-4 py-20 text-center text-gray-400">Loading...</div>;

  if (!user) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">🔒</p>
        <h1 className="text-xl font-bold text-gray-900">Sign in to view orders</h1>
        <Link href="/" className="mt-4 inline-block bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition text-sm">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">My Orders</h1>
      <p className="text-sm text-gray-400 mb-6">{orders.length} order{orders.length !== 1 ? 's' : ''}</p>

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500">No orders yet</p>
          <Link href="/products" className="mt-3 inline-block text-indigo-600 font-semibold text-sm hover:underline">
            Start Shopping →
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
                {order.items?.map((item, i) => (
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
