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
          <footer className="bg-white border-t border-gray-200 py-10 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-xs">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Shop</h4>
                  <ul className="space-y-1.5 text-gray-500">
                    <li><FooterLink href="/products?category=Electronics">Electronics</FooterLink></li>
                    <li><FooterLink href="/products?category=Fashion">Fashion</FooterLink></li>
                    <li><FooterLink href="/products?category=Home+%26+Kitchen">Home & Kitchen</FooterLink></li>
                    <li><FooterLink href="/products?category=Books+%26+Media">Books & Media</FooterLink></li>
                    <li><FooterLink href="/products?category=Sports+%26+Outdoors">Sports & Outdoors</FooterLink></li>
                    <li><FooterLink href="/products?category=Beauty">Beauty</FooterLink></li>
                    <li><FooterLink href="/products?category=Laptops+%26+Computers">Laptops & Computers</FooterLink></li>
                    <li><FooterLink href="/products?category=Stationery+%26+Office">Stationery & Office</FooterLink></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Help</h4>
                  <ul className="space-y-1.5 text-gray-500">
                    <li><FooterLink href="/contact">Contact Us</FooterLink></li>
                    <li><FooterLink href="/shipping">Shipping Info</FooterLink></li>
                    <li><FooterLink href="/returns">Returns & Exchanges</FooterLink></li>
                    <li><FooterLink href="/faq">FAQ</FooterLink></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Company</h4>
                  <ul className="space-y-1.5 text-gray-500">
                    <li><FooterLink href="/about">About Us</FooterLink></li>
                    <li><FooterLink href="/careers">Careers</FooterLink></li>
                    <li><FooterLink href="/press">Press</FooterLink></li>
                    <li><FooterLink href="/blog">Blog</FooterLink></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Connect</h4>
                  <ul className="space-y-1.5 text-gray-500">
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">📸 Instagram</a></li>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">👍 Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">🐦 X (Twitter)</a></li>
                    <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">📺 YouTube</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">💼 LinkedIn</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6 text-center text-[10px] text-gray-400 space-y-1">
                <p className="font-semibold text-gray-600 mb-0.5">✨ Spree — Discover What You Love</p>
                <p>© 2026 Spree. All rights reserved. Made with ❤️ in India.</p>
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
  return (
    <a href={href} className="hover:text-gray-900 transition cursor-pointer">{children}</a>
  );
}
