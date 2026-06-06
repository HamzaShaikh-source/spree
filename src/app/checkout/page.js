'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatPrice } from '@/data/products';
import { supabase } from '@/lib/supabase';

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
  const [pinSuggest, setPinSuggest] = useState([]);
  const [pinFocused, setPinFocused] = useState(false);

  const INDIAN_PINCODES = {
    '110001': 'New Delhi, Delhi', '110002': 'New Delhi, Delhi', '400001': 'Mumbai, Maharashtra',
    '400002': 'Mumbai, Maharashtra', '700001': 'Kolkata, West Bengal', '600001': 'Chennai, Tamil Nadu',
    '560001': 'Bengaluru, Karnataka', '560002': 'Bengaluru, Karnataka', '500001': 'Hyderabad, Telangana',
    '380001': 'Ahmedabad, Gujarat', '380002': 'Ahmedabad, Gujarat', '411001': 'Pune, Maharashtra',
    '302001': 'Jaipur, Rajasthan', '226001': 'Lucknow, Uttar Pradesh', '682001': 'Kochi, Kerala',
    '452001': 'Indore, Madhya Pradesh', '462001': 'Bhopal, Madhya Pradesh', '160001': 'Chandigarh',
    '800001': 'Patna, Bihar', '751001': 'Bhubaneswar, Odisha', '248001': 'Dehradun, Uttarakhand',
    '834001': 'Ranchi, Jharkhand', '140001': 'Ludhiana, Punjab', '530001': 'Visakhapatnam, Andhra Pradesh',
  };

  const handlePincodeChange = (val) => {
    updateField(shipping, setShipping, 'pincode', val);
    if (val.length >= 5) {
      const matches = Object.entries(INDIAN_PINCODES)
        .filter(([code]) => code.startsWith(val))
        .slice(0, 5);
      setPinSuggest(matches);
    } else {
      setPinSuggest([]);
    }
  };

  const selectPincode = (code, location) => {
    setShipping({ ...shipping, pincode: code, city: location.split(',')[0] });
    setPinSuggest([]);
    if (errors.pincode) setErrors({ ...errors, pincode: undefined });
  };
  const [payment, setPayment] = useState({ method: 'cod', cardNumber: '', expiry: '', cvv: '' });
  const [errors, setErrors] = useState({});
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(null);
  const [couponMsg, setCouponMsg] = useState('');
  const [discount, setDiscount] = useState(0);

  const COUPONS = {
    'WELCOME10': { type: 'percent', value: 10, desc: '10% off your first order' },
    'SPREE20': { type: 'percent', value: 20, desc: '20% off on all items' },
    'SAVE500': { type: 'flat', value: 500, desc: '₹500 off on orders above ₹2999', minOrder: 2999 },
    'FREESHIP': { type: 'freeshipping', value: 0, desc: 'Free shipping (already applied below ₹999)' },
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    const coupon = COUPONS[code];
    if (!coupon) { setCouponMsg('❌ Invalid coupon code'); setCouponApplied(null); setDiscount(0); return; }
    if (coupon.minOrder && total < coupon.minOrder) {
      setCouponMsg(`❌ Minimum order ₹${coupon.minOrder.toLocaleString('en-IN')} required`);
      setCouponApplied(null); setDiscount(0); return;
    }
    setCouponApplied(coupon);
    if (coupon.type === 'percent') {
      setDiscount(Math.round(total * coupon.value / 100));
      setCouponMsg(`✅ ${coupon.desc} — saved ₹${Math.round(total * coupon.value / 100).toLocaleString('en-IN')}`);
    } else if (coupon.type === 'flat') {
      setDiscount(coupon.value);
      setCouponMsg(`✅ ${coupon.desc}`);
    } else if (coupon.type === 'freeshipping') {
      setDiscount(0);
      setCouponMsg(`✅ ${coupon.desc}`);
    }
  };

  const removeCoupon = () => {
    setCouponApplied(null);
    setCouponCode('');
    setDiscount(0);
    setCouponMsg('');
  };

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
  const shippingCost = (total - discount) >= 999 || couponApplied?.type === 'freeshipping' ? 0 : 99;
  const grandTotal = Math.max(0, total + shippingCost - discount);

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

  const placeOrder = async () => {
    const id = 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    setOrderId(id);
    setOrderDone(true);
    
    // Save order to Supabase if user is logged in
    try {
      const { supabase: sb } = await import('@/lib/supabase');
      if (!sb?.auth) throw new Error('Auth unavailable');
      const { data: { session } } = await sb.auth.getSession();
      if (session?.user) {
        // Save user_id for orders page to use
        localStorage.setItem('spree-session', JSON.stringify({ user_id: session.user.id, email: session.user.email }));
        
        await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: session.user.id,
            user_email: session.user.email,
            user_name: session.user.user_metadata?.full_name || '',
            items,
            shipping,
            payment_method: payment.method,
            subtotal: total,
            discount,
            shipping_charge: shippingCost,
            total: grandTotal,
            coupon_code: couponApplied ? couponCode : null,
          }),
        });
      }
    } catch (e) { console.log('Order save skipped:', e.message); }
    
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
                    <div className="relative">
                      <input type="text" value={shipping.pincode} onChange={e => handlePincodeChange(e.target.value)}
                        onFocus={() => setPinFocused(true)} onBlur={() => setTimeout(() => setPinFocused(false), 200)}
                        placeholder="Enter pincode" maxLength={6}
                        className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.pincode ? 'border-red-300' : 'border-gray-200'}`} />
                      {pinSuggest.length > 0 && pinFocused && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10 max-h-40 overflow-y-auto">
                          {pinSuggest.map(([code, loc]) => (
                            <button key={code} type="button" onMouseDown={() => selectPincode(code, loc)}
                              className="w-full text-left px-3 py-2 text-xs hover:bg-indigo-50 border-b border-gray-50 last:border-0">
                              <span className="font-semibold text-gray-900">{code}</span>
                              <span className="text-gray-500 ml-2">{loc}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
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

          {/* Coupon */}
          {!couponApplied ? (
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600 block mb-1">Have a coupon?</label>
              <div className="flex gap-1">
                <input type="text" value={couponCode} onChange={e => setCouponCode(e.target.value)}
                  placeholder="Enter code" className="flex-1 px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <button onClick={applyCoupon} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition">Apply</button>
              </div>
              {couponMsg && <p className="text-[10px] mt-1 font-medium">{couponMsg}</p>}
              <div className="mt-1.5 text-[9px] text-gray-400 space-y-0.5">
                <p>Try: <strong>WELCOME10</strong> (10% off) · <strong>SPREE20</strong> (20% off)</p>
                <p><strong>SAVE500</strong> (₹500 off ≥₹2999) · <strong>FREESHIP</strong></p>
              </div>
            </div>
          ) : (
            <div className="mb-4 bg-green-50 rounded-lg p-2 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-green-700">✅ {couponCode}</p>
                <p className="text-[10px] text-green-600">{couponApplied.desc}</p>
              </div>
              <button onClick={removeCoupon} className="text-xs text-red-500 hover:underline">Remove</button>
            </div>
          )}
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
            {discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-green-600">Discount</span>
                <span className="text-green-600 font-semibold">−{formatPrice(discount)}</span>
              </div>
            )}
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
