import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Spree - Discover What You Love',
  description: 'Your destination for curated products across electronics, fashion, home, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 py-10 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Shop</h4>
                <ul className="space-y-1.5 text-gray-500">
                  <li>Electronics</li>
                  <li>Fashion</li>
                  <li>Home & Kitchen</li>
                  <li>Books & Media</li>
                  <li>Sports & Outdoors</li>
                  <li>Beauty</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Help</h4>
                <ul className="space-y-1.5 text-gray-500">
                  <li>Contact Us</li>
                  <li>Shipping Info</li>
                  <li>Returns</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Company</h4>
                <ul className="space-y-1.5 text-gray-500">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Connect</h4>
                <ul className="space-y-1.5 text-gray-500">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
              <p className="font-semibold text-gray-600 mb-1">✨ Spree</p>
              <p>© 2026 Spree. All rights reserved. Discover what you love.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
