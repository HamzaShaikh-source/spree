import Link from 'next/link';
export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">Shipping</span></div>
      <h1 className="text-3xl font-bold text-gray-900">Shipping Information</h1>
      <div className="mt-8 space-y-5 text-sm text-gray-600 leading-relaxed">
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">🚚 Delivery Timeline</h3><p className="mt-2">Standard: 5-7 business days · Express: 2-3 business days · Same-day: Available in select cities</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">💰 Shipping Charges</h3><p className="mt-2">Free on orders above ₹999 · ₹99 for orders below ₹999 · Express shipping ₹149 flat</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">📍 Coverage</h3><p className="mt-2">We ship to 20,000+ pin codes across all states and union territories in India.</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">📦 Packaging</h3><p className="mt-2">All items are packed securely in eco-friendly materials. Fragile items get extra bubble wrap protection.</p></div>
      </div>
    </div>
  );
}
