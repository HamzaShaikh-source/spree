import Link from 'next/link';
export default function PressPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">Press</span></div>
      <h1 className="text-3xl font-bold text-gray-900">Press Room</h1>
      <div className="mt-8 space-y-4">
        {[
          { title: 'Spree Launches Voice Search for Indian Languages', date: 'May 2026', desc: 'Spree introduces voice search supporting Hindi, Tamil, and Bengali — a first for Indian e-commerce.' },
          { title: 'Spree Crosses 500 Products Milestone', date: 'April 2026', desc: 'From electronics to stationery, Spree now offers 500+ products across 8 categories.' },
          { title: 'Accessibility First: Spree Adds Screen Reader Support', date: 'March 2026', desc: 'New accessibility features make Spree usable for visually impaired shoppers.' },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-[10px] text-gray-400 font-semibold uppercase">{item.date}</p>
            <h3 className="font-bold text-gray-900 mt-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
