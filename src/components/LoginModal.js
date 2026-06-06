'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';

export default function LoginModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [mode, setMode] = useState('login'); // login | signup | forgot | reset_sent
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) setUser(data.session.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => listener?.subscription?.unsubscribe();
  }, []);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'signup') {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name } }
        });
        if (signUpError) throw signUpError;
        if (data?.user) {
          await supabase.from('profiles').upsert({
            id: data.user.id,
            name,
            email: data.user.email,
          }, { onConflict: 'id' });
        }
        setError('✅ Check your email for confirmation link!');
      } else if (mode === 'login') {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        onClose?.();
      } else if (mode === 'forgot') {
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + '/?reset=true',
        });
        if (resetError) throw resetError;
        setMode('reset_sent');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    onClose?.();
  };

  const resetToLogin = () => { setMode('login'); setError(''); setEmail(''); setPassword(''); };
  const goToForgot = () => { setMode('forgot'); setError(''); };

  if (!isOpen && !user) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { if (!user) onClose?.(); }} />
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
        {user ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-2xl">
              {user.email?.charAt(0).toUpperCase() || '👤'}
            </div>
            <h3 className="font-bold text-gray-900 mt-2">{user.user_metadata?.full_name || user.email}</h3>
            <p className="text-xs text-gray-400">{user.email}</p>
            <a href="/orders" className="mt-3 block text-sm text-indigo-600 font-semibold hover:underline" onClick={onClose}>
              📦 View My Orders
            </a>
            <button onClick={handleLogout} className="mt-3 w-full bg-red-500 text-white font-bold py-2 rounded-xl hover:bg-red-600 transition text-sm">
              {t('logout')}
            </button>
          </div>
        ) : mode === 'reset_sent' ? (
          <div className="text-center py-4">
            <p className="text-4xl mb-3">📬</p>
            <h3 className="font-bold text-gray-900 text-lg">Check Your Email</h3>
            <p className="text-sm text-gray-500 mt-2">We&apos;ve sent a password reset link to <strong>{email}</strong></p>
            <p className="text-xs text-gray-400 mt-2">Didn&apos;t receive it? Check spam folder or try again.</p>
            <button onClick={resetToLogin} className="mt-4 text-indigo-600 font-semibold text-sm hover:underline">
              ← Back to Login
            </button>
          </div>
        ) : mode === 'forgot' ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Reset Password</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            {error && <p className={`text-xs mb-3 p-2 rounded-lg ${error.includes('✅') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>{error}</p>}
            <p className="text-xs text-gray-500 mb-4">Enter your email and we&apos;ll send you a reset link.</p>
            <form onSubmit={handleEmailAuth} className="space-y-3">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Your email" required className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <button type="submit" disabled={loading}
                className="w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-700 transition text-sm disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            <button onClick={resetToLogin} className="mt-3 text-xs text-indigo-600 font-semibold hover:underline w-full text-center">
              ← Back to Login
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">{mode === 'login' ? t('login') : t('signup')}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            </div>
            {error && <p className={`text-xs mb-3 p-2 rounded-lg ${error.includes('✅') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>{error}</p>}
            
            {/* Google Login */}
            <button onClick={handleGoogleLogin} disabled={loading}
              className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>

            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
              <div className="relative flex justify-center text-xs"><span className="bg-white px-2 text-gray-400">or</span></div>
            </div>

            <form onSubmit={handleEmailAuth} className="space-y-3">
              {mode === 'signup' && (
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Full Name" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              )}
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Email" required className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder="Password" required minLength={6} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              {mode === 'login' && (
                <div className="text-right">
                  <button type="button" onClick={goToForgot} className="text-xs text-indigo-600 hover:underline font-medium">
                    Forgot password?
                  </button>
                </div>
              )}
              <button type="submit" disabled={loading}
                className="w-full bg-gray-900 text-white font-bold py-2.5 rounded-xl hover:bg-gray-800 transition text-sm disabled:opacity-50">
                {loading ? 'Please wait...' : mode === 'login' ? t('login') : t('signup')}
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
