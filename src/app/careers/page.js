import Link from 'next/link';
export default function CareersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">Careers</span></div>
      <h1 className="text-3xl font-bold text-gray-900">Join Our Team</h1>
      <div className="mt-8 space-y-4 text-sm text-gray-600">
        <p>We&apos;re building the future of e-commerce in India. If you&apos;re passionate about technology, design, or customer experience, we&apos;d love to hear from you.</p>
        <div className="grid gap-4 mt-6">
          {['Frontend Developer', 'Product Manager', 'Customer Support Lead', 'Data Analyst'].map(role => (
            <div key={role} className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center">
              <div><p className="font-semibold text-gray-900">{role}</p><p className="text-xs text-gray-400">Bengaluru, India · Full-time</p></div>
              <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-3 py-1 rounded-full">Apply →</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">Email your resume to careers@spree.com</p>
      </div>
    </div>
  );
}
