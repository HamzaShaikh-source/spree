'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import translations from '@/data/translations';

const LanguageContext = createContext();

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('spree-lang');
    if (saved && LANGUAGES.some(l => l.code === saved)) setLang(saved);
    setMounted(true);
  }, []);

  const changeLang = (code) => {
    setLang(code);
    localStorage.setItem('spree-lang', code);
  };

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key;

  if (!mounted) return <>{children}</>;

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return { lang: 'en', changeLang: () => {}, t: (key) => translations.en[key] || key, LANGUAGES };
  return ctx;
}
