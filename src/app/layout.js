import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import FloatingElements from './FloatingElements';

export const metadata = {
  title: 'Spree - Discover What You Love',
  description: 'Your destination for curated products across electronics, fashion, home, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="bg-white border-t border-gray-200 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 text-xs">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xs">Shop</h4>
                  <ul className="space-y-1 text-gray-500">
                    <li>Electronics</li><li>Fashion</li><li>Home & Kitchen</li>
                    <li>Books & Media</li><li>Sports & Outdoors</li><li>Beauty</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xs">Help</h4>
                  <ul className="space-y-1 text-gray-500">
                    <li>Contact Us</li><li>Shipping Info</li><li>Returns</li><li>FAQ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xs">Company</h4>
                  <ul className="space-y-1 text-gray-500">
                    <li>About Us</li><li>Careers</li><li>Press</li><li>Blog</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xs">Connect</h4>
                  <ul className="space-y-1 text-gray-500">
                    <li>Instagram</li><li>Facebook</li><li>Twitter</li><li>YouTube</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 text-center text-[10px] text-gray-400">
                <p className="font-semibold text-gray-600 mb-0.5">✨ Spree</p>
                <p>© 2026 Spree. All rights reserved.</p>
              </div>
            </div>
          </footer>
          <FloatingElements />
        </LanguageProvider>
      </body>
    </html>
  );
}
