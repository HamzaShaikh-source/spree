'use client';
import Link from 'next/link';
import { useState } from 'react';

const FAQS = [
  { q: 'How do I place an order?', a: 'Browse products, add items to cart, and proceed to checkout. Fill in shipping details, choose payment method, and confirm your order.' },
  { q: 'What payment methods do you accept?', a: 'We accept Cash on Delivery, Credit/Debit cards, UPI (Google Pay, PhonePe, Paytm), and Net Banking.' },
  { q: 'How long does shipping take?', a: 'Standard delivery takes 5-7 business days across India. Express shipping is available at checkout for 2-3 day delivery.' },
  { q: 'Is shipping free?', a: 'Yes! Free shipping on all orders above ₹999.' },
  { q: 'Can I return an item?', a: 'Absolutely. We offer 30-day hassle-free returns. Items must be unused with original packaging.' },
  { q: 'How do I track my order?', a: 'Once shipped, you\'ll receive a tracking link via email. You can also check your order status in your account.' },
  { q: 'Do you ship internationally?', a: 'Currently we ship within India only, covering 20,000+ pin codes.' },
  { q: 'Can I change or cancel my order?', a: 'Orders can be modified within 2 hours of placement. Contact support for assistance.' },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">FAQ</span></div>
      <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-2">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full px-5 py-4 text-left flex justify-between items-center text-sm font-semibold text-gray-900 hover:bg-gray-50 transition">
              {faq.q}
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === i && <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
