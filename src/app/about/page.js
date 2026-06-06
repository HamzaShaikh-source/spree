import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">About</span></div>
      <h1 className="text-3xl font-bold text-gray-900">About Spree</h1>
      <div className="mt-8 space-y-5 text-gray-600 text-sm leading-relaxed">
        <p><strong>Spree</strong> was founded with a simple mission — to make quality products accessible to everyone in India at the best prices.</p>
        <p>We curate products across electronics, fashion, home, beauty, sports, books, laptops, and stationery — working with top brands and emerging labels to bring you the best of what&apos;s out there.</p>
        <p>Our team is based in India and we ship to over 20,000 pin codes across the country. With features like voice search, multi-language support, and personalized recommendations, we&apos;re building a shopping experience that works for everyone.</p>
        <div className="grid grid-cols-3 gap-6 mt-10 text-center">
          <div><p className="text-3xl font-bold text-indigo-600">500+</p><p className="text-xs text-gray-500 mt-1">Products</p></div>
          <div><p className="text-3xl font-bold text-indigo-600">8</p><p className="text-xs text-gray-500 mt-1">Categories</p></div>
          <div><p className="text-3xl font-bold text-indigo-600">50+</p><p className="text-xs text-gray-500 mt-1">Top Brands</p></div>
        </div>
      </div>
    </div>
  );
}
