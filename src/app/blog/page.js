import Link from 'next/link';
export default function BlogPage() {
  const posts = [
    { title: 'Top 10 Gadgets Under ₹2000 in 2026', date: 'June 1, 2026', cat: 'Electronics', excerpt: 'Budget-friendly electronics that deliver premium performance without breaking the bank.' },
    { title: 'Summer Fashion Guide: What to Wear', date: 'May 28, 2026', cat: 'Fashion', excerpt: 'Stay stylish and cool this summer with our curated fashion picks.' },
    { title: '5 Kitchen Upgrades That Save Time', date: 'May 20, 2026', cat: 'Home & Kitchen', excerpt: 'Smart kitchen tools that make cooking faster and more enjoyable.' },
    { title: 'Beginner\'s Guide to Home Fitness', date: 'May 15, 2026', cat: 'Sports', excerpt: 'Start your fitness journey with these essential home workout gear.' },
    { title: 'Skincare Routine for Indian Summers', date: 'May 10, 2026', cat: 'Beauty', excerpt: 'Keep your skin glowing and protected during the hot months.' },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-xs text-gray-400 mb-4"><Link href="/" className="hover:text-indigo-600">Home</Link><span className="mx-1.5">/</span><span className="text-gray-600">Blog</span></div>
      <h1 className="text-3xl font-bold text-gray-900">Spree Blog</h1>
      <p className="text-sm text-gray-500 mt-1">Tips, guides, and stories from our team.</p>
      <div className="mt-8 space-y-5">
        {posts.map((post, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition cursor-pointer">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{post.cat}</span>
            <h3 className="font-bold text-gray-900 mt-0.5">{post.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
            <p className="text-[10px] text-gray-400 mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
