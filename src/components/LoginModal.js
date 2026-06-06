'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LoginModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [mode, setMode] = useState('login'); // login | signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('spree-user') || 'null');
    setLoggedIn(user);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('spree-users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('spree-user', JSON.stringify(user));
      setLoggedIn(user);
      setError('');
      onClose?.();
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) { setError('All fields required'); return; }
    const users = JSON.parse(localStorage.getItem('spree-users') || '[]');
    if (users.find(u => u.email === email)) { setError('Email already registered'); return; }
    const newUser = { name, email, password, joined: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem('spree-users', JSON.stringify(users));
    localStorage.setItem('spree-user', JSON.stringify(newUser));
    setLoggedIn(newUser);
    setError('');
    onClose?.();
  };

  const handleLogout = () => {
    localStorage.removeItem('spree-user');
    setLoggedIn(null);
    onClose?.();
  };

  if (!isOpen && loggedIn) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center ${isOpen || loggedIn ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { if (!loggedIn) onClose?.(); }} />
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
        {loggedIn ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-2xl">
              {loggedIn.name.charAt(0).toUpperCase()}
            </div>
            <h3 className="font-bold text-gray-900 mt-2">{loggedIn.name}</h3>
            <p className="text-xs text-gray-400">{loggedIn.email}</p>
            <button onClick={handleLogout} className="mt-4 w-full bg-red-500 text-white font-bold py-2 rounded-xl hover:bg-red-600 transition text-sm">
              {t('logout')}
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">{mode === 'login' ? t('login') : t('signup')}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            {error && <p className="text-red-500 text-xs mb-3 bg-red-50 p-2 rounded-lg">{error}</p>}
            <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-3">
              {mode === 'signup' && (
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Full Name" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              )}
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Email" required className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder="Password" required className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <button type="submit" className="w-full bg-gray-900 text-white font-bold py-2.5 rounded-xl hover:bg-gray-800 transition text-sm">
                {mode === 'login' ? t('login') : t('signup')}
              </button>
            </form>
            <p className="text-xs text-gray-400 text-center mt-3">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); }} className="text-indigo-600 font-semibold hover:underline">
                {mode === 'login' ? t('signup') : t('login')}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
