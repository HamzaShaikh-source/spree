import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from '@/components/BrandIcons';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import FloatingElements from './FloatingElements';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata = {
  title: 'Spree — Discover What You Love',
  description: 'Your destination for curated products across electronics, fashion, home, beauty, laptops, stationery and more.',
};

export const viewport = {
  themeColor: '#4f46e5',
};

const SOCIALS = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'X (Twitter)' },
  { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans text-ink antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>

          <footer className="bg-ink text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                <div className="col-span-2 md:col-span-1">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="grid place-items-center w-9 h-9 rounded-xl gradient-brand text-white shadow-soft">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <span className="font-display font-extrabold text-lg text-white tracking-tight">Spree</span>
                  </Link>
                  <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-xs">
                    Discover what you love. Curated products, smart picks, and delightful shopping.
                  </p>
                  <div className="flex items-center gap-2 mt-5">
                    {SOCIALS.map(({ Icon, href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-brand-600 text-gray-300 hover:text-white transition-colors duration-200">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <FooterColumn title="Shop" links={[
                  ['Electronics', '/products?category=Electronics'],
                  ['Fashion', '/products?category=Fashion'],
                  ['Home & Kitchen', '/products?category=Home+%26+Kitchen'],
                  ['Beauty', '/products?category=Beauty'],
                  ['Laptops & Computers', '/products?category=Laptops+%26+Computers'],
                  ['Stationery & Office', '/products?category=Stationery+%26+Office'],
                ]} />

                <FooterColumn title="Help" links={[
                  ['Contact Us', '/contact'],
                  ['Shipping Info', '/shipping'],
                  ['Returns & Exchanges', '/returns'],
                  ['FAQ', '/faq'],
                ]} />

                <FooterColumn title="Company" links={[
                  ['About Us', '/about'],
                  ['Careers', '/careers'],
                  ['Press', '/press'],
                  ['Blog', '/blog'],
                ]} />

                <FooterColumn title="Account" links={[
                  ['My Orders', '/orders'],
                  ['Cart', '/cart'],
                  ['All Products', '/products'],
                ]} />
              </div>

              <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
                <p>© 2026 Spree. All rights reserved.</p>
                <p>Made with care in India.</p>
              </div>
            </div>
          </footer>

          <FloatingElements />
        </LanguageProvider>
      </body>
    </html>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-display font-bold text-white mb-4 text-xs uppercase tracking-wider">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-150">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
