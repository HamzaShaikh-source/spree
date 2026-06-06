'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatPrice } from '@/data/products';

const STEPS = ['Cart', 'Shipping', 'Payment', 'Confirm'];

export default function CheckoutPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form state
  const [shipping, setShipping] = useState({ name: '', email: '', phone: '', address: '', city: '', pincode: '' });
  const [payment, setPayment] = useState({ method: 'cod', cardNumber: '', expiry: '', cvv: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0 && step === 1) {
      router.push('/cart');
      return;
    }
    setItems(cart);
    setLoaded(true);
  }, [step, router]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shippingCost = total >= 999 ? 0 : 99;
  const grandTotal = total + shippingCost;

  const validateShipping = () => {
    const e = {};
    if (!shipping.name.trim()) e.name = 'Required';
    if (!shipping.email.includes('@')) e.email = 'Valid email required';
    if (shipping.phone.length < 10) e.phone = 'Valid phone required';
    if (!shipping.address.trim()) e.address = 'Required';
    if (!shipping.city.trim()) e.city = 'Required';
    if (shipping.pincode.length < 5) e.pincode = 'Valid pincode required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const placeOrder = () => {
    const id = 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    setOrderId(id);
    setOrderDone(true);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cart-update'));
  };

  const updateField = (obj, setter, key, val) => {
    setter({ ...obj, [key]: val });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  if (!loaded) return <div className="max-w-2xl mx-auto px-4 py-20 text-center text-gray-400">Loading...</div>;

  if (orderDone) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <p className="text-5xl mb-4">🎉</p>
          <h1 className="text-2xl font-bold text-gray-900">Order Placed!</h1>
          <p className="text-gray-500 mt-2">Thank you for shopping with Spree.</p>
          <div className="bg-gray-50 rounded-xl p-4 mt-6 text-left">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Order ID</p>
            <p className="text-sm font-mono font-bold text-gray-900 mt-0.5 break-all">{orderId}</p>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            <p>📧 Confirmation sent to <strong>{shipping.email}</strong></p>
            <p className="mt-0.5">🚚 Estimated delivery: 5-7 business days</p>
          </div>
          <Link href="/" className="mt-6 inline-block bg-gray-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-800 transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-400 mb-4">
        <Link href="/cart" className="hover:text-indigo-600">Cart</Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-600">Checkout</span>
      </div>

      {/* Steps */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              i + 1 <= step ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'
            }`}>{i + 1}</div>
            <span className={`text-xs font-medium ${i + 1 <= step ? 'text-gray-900' : 'text-gray-400'}`}>{s}</span>
            {i < STEPS.length - 1 && <div className="w-6 h-px bg-gray-200" />}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main */}
        <div className="md:col-span-2">
          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Review Your Cart</h2>
              {items.length === 0 ? (
                <p className="text-gray-400">Your cart is empty.</p>
              ) : (
                <div className="space-y-3">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-3">
                      <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg bg-gray-50" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-400">Qty: {item.qty} × {formatPrice(item.price)}</p>
                      </div>
                      <p className="text-sm font-bold text-gray-900">{formatPrice(item.price * item.qty)}</p>
                    </div>
                  ))}
                  <button onClick={() => setStep(2)} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition">
                    Continue to Shipping →
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Shipping Details</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Full Name</label>
                    <input type="text" value={shipping.name} onChange={e => updateField(shipping, setShipping, 'name', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.name ? 'border-red-300' : 'border-gray-200'}`} />
                    {errors.name && <p className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Email</label>
                    <input type="email" value={shipping.email} onChange={e => updateField(shipping, setShipping, 'email', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email ? 'border-red-300' : 'border-gray-200'}`} />
                    {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Phone</label>
                  <input type="tel" value={shipping.phone} onChange={e => updateField(shipping, setShipping, 'phone', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.phone ? 'border-red-300' : 'border-gray-200'}`} />
                  {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">Address</label>
                  <input type="text" value={shipping.address} onChange={e => updateField(shipping, setShipping, 'address', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.address ? 'border-red-300' : 'border-gray-200'}`} />
                  {errors.address && <p className="text-xs text-red-500 mt-0.5">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">City</label>
                    <input type="text" value={shipping.city} onChange={e => updateField(shipping, setShipping, 'city', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.city ? 'border-red-300' : 'border-gray-200'}`} />
                    {errors.city && <p className="text-xs text-red-500 mt-0.5">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 block mb-1">Pincode</label>
                    <input type="text" value={shipping.pincode} onChange={e => updateField(shipping, setShipping, 'pincode', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.pincode ? 'border-red-300' : 'border-gray-200'}`} />
                    {errors.pincode && <p className="text-xs text-red-500 mt-0.5">{errors.pincode}</p>}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setStep(1)} className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">← Back</button>
                  <button onClick={() => { if (validateShipping()) setStep(3); }} className="flex-1 bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-700 transition">
                    Continue to Payment →
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
                <div className="space-y-2">
                  {[
                    { id: 'cod', label: 'Cash on Delivery', desc: 'Pay when you receive', icon: '💵' },
                    { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay', icon: '💳' },
                    { id: 'upi', label: 'UPI', desc: 'Google Pay, PhonePe, Paytm', icon: '📱' },
                  ].map(m => (
                    <label key={m.id} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                      payment.method === m.id ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input type="radio" name="payment" value={m.id} checked={payment.method === m.id}
                        onChange={() => setPayment({ ...payment, method: m.id })} className="accent-indigo-600" />
                      <span className="text-lg">{m.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{m.label}</p>
                        <p className="text-xs text-gray-400">{m.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setStep(2)} className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">← Back</button>
                  <button onClick={() => setStep(4)} className="flex-1 bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-700 transition">
                    Review Order →
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1">Shipping To</p>
                  <p className="text-sm font-semibold text-gray-900">{shipping.name}</p>
                  <p className="text-sm text-gray-600">{shipping.address}, {shipping.city} — {shipping.pincode}</p>
                  <p className="text-sm text-gray-600">{shipping.email} | {shipping.phone}</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1">Payment</p>
                  <p className="text-sm text-gray-900">
                    {payment.method === 'cod' ? '💵 Cash on Delivery' : payment.method === 'card' ? '💳 Card Payment' : '📱 UPI'}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-2">Items ({items.length})</p>
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm py-1">
                      <span className="text-gray-600">{item.name} × {item.qty}</span>
                      <span className="font-medium text-gray-900">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-3 space-y-1">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className={shippingCost === 0 ? 'text-green-600 font-semibold' : ''}>
                      {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900 pt-1 border-t border-gray-100">
                    <span>Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setStep(3)} className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">← Back</button>
                  <button onClick={placeOrder} className="flex-1 bg-green-600 text-white font-bold py-2.5 rounded-xl hover:bg-green-700 transition text-base">
                    ✅ Place Order — {formatPrice(grandTotal)}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 h-fit">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Order Summary</h3>
          <div className="space-y-2 text-sm">
            {items.map(item => (
              <div key={item.id} className="flex justify-between">
                <span className="text-gray-600 truncate max-w-[140px]">{item.name} × {item.qty}</span>
                <span className="font-medium text-gray-900">{formatPrice(item.price * item.qty)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 mt-3 pt-3 space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className={shippingCost === 0 ? 'text-green-600 font-semibold' : ''}>
                {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </div>
          {total < 999 && (
            <p className="text-[10px] text-amber-600 mt-2 bg-amber-50 p-2 rounded-lg">
              Add items worth {formatPrice(999 - total)} more for <strong>free shipping</strong>!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
