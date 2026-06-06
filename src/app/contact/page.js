'use client';
import Link from 'next/link';
import { useState } from 'react';
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">Contact</span></div>
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-sm text-gray-600">
          <div className="bg-white rounded-xl border border-gray-200 p-4"><p className="font-bold text-gray-900">📧 Email</p><p className="mt-1">support@spree.com</p></div>
          <div className="bg-white rounded-xl border border-gray-200 p-4"><p className="font-bold text-gray-900">📞 Phone</p><p className="mt-1">+91 1800-572-6784</p></div>
          <div className="bg-white rounded-xl border border-gray-200 p-4"><p className="font-bold text-gray-900">📍 Address</p><p className="mt-1">Spree HQ, Bengaluru, Karnataka 560001, India</p></div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900 mb-3">Send a Message</h3>
          {sent ? <p className="text-green-600 font-semibold">✅ Thanks! We&apos;ll get back within 24 hours.</p> : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-3">
              <input type="text" placeholder="Your Name" required className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <input type="email" placeholder="Email" required className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <textarea rows={3} placeholder="Message" required className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <button type="submit" className="bg-indigo-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition text-sm">Send</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
