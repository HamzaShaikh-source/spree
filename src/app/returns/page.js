import Link from 'next/link';
export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">Returns</span></div>
      <h1 className="text-3xl font-bold text-gray-900">Returns & Exchanges</h1>
      <div className="mt-8 space-y-5 text-sm text-gray-600 leading-relaxed">
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">🔄 30-Day Returns</h3><p className="mt-2">You can return any unused item within 30 days of delivery for a full refund. Items must be in original packaging.</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">💵 Refund Process</h3><p className="mt-2">Refunds are processed within 5-7 business days after we receive the returned item. Money goes back to original payment method.</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">🛡️ Damaged Items</h3><p className="mt-2">If you receive a damaged or defective item, contact us within 48 hours and we&apos;ll arrange a free replacement or instant refund.</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900">📋 How to Return</h3><p className="mt-2">Go to your Orders page, select the item, and click &quot;Return&quot;. We&apos;ll schedule a free pickup from your address.</p></div>
      </div>
    </div>
  );
}
