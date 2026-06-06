import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <p className="text-7xl mb-4">🔍</p>
      <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
      <p className="text-gray-500 mt-2 text-sm">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <div className="flex gap-3 justify-center mt-8">
        <Link href="/" className="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition text-sm">Go Home</Link>
        <Link href="/products" className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition text-sm">Browse Products</Link>
      </div>
    </div>
  );
}
