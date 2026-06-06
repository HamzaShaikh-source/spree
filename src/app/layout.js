import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import FloatingElements from './FloatingElements';

export const metadata = {
  title: 'Spree - Discover What You Love',
  description: 'Your destination for curated products across electronics, fashion, home, beauty, laptops, stationery and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                <div>
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded flex items-center justify-center text-white text-[10px] font-bold">S</span>
                    <span className="font-bold text-sm text-gray-900">pree</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Discover what you love. Curated products across 8 categories with personalized recommendations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3">Shop</h4>
                  <ul className="space-y-2">
                    {['Electronics', 'Fashion', 'Home & Kitchen', 'Books & Media'].map(cat => (
                      <li key={cat}><FooterLink href={`/products?category=${encodeURIComponent(cat)}`}>{cat}</FooterLink></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3">Support</h4>
                  <ul className="space-y-2">
                    <li><FooterLink href="/contact">Contact Us</FooterLink></li>
                    <li><FooterLink href="/shipping">Shipping Info</FooterLink></li>
                    <li><FooterLink href="/returns">Returns</FooterLink></li>
                    <li><FooterLink href="/faq">FAQ</FooterLink></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3">Company</h4>
                  <ul className="space-y-2">
                    <li><FooterLink href="/about">About Us</FooterLink></li>
                    <li><FooterLink href="/careers">Careers</FooterLink></li>
                    <li><FooterLink href="/press">Press</FooterLink></li>
                    <li><FooterLink href="/blog">Blog</FooterLink></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                <p>© 2026 Spree. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">Instagram</a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">Facebook</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">X</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">YouTube</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition">LinkedIn</a>
                </div>
              </div>
            </div>
          </footer>
          <FloatingElements />
        </LanguageProvider>
      </body>
    </html>
  );
}

function FooterLink({ href, children }) {
  return <a href={href} className="text-xs text-gray-500 hover:text-gray-900 transition">{children}</a>;
}
