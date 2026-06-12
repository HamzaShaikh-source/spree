'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';
import { X, Mail, Lock, User, Loader2 } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    if (!supabase?.auth) return;
    supabase.auth.getSession()
      .then(r => { if (r?.data?.session?.user) { setUser(r.data.session.user); onClose?.(); } })
      .catch(() => {});
    try {
      const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
        if (session?.user) onClose?.();
      });
      return () => { try { listener?.subscription?.unsubscribe(); } catch(e) {} };
    } catch(e) {}
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!supabase?.auth) { setError('Auth service unavailable'); return; }
    setLoading(true); setError('');
    try {
      if (mode === 'signup') {
        const { data, error: err } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (err) throw err;
        if (data?.user) {
          try { await supabase.from('profiles').upsert({ id: data.user.id, name, email: data.user.email }, { onConflict: 'id' }).maybeSingle(); } catch(e) {}
        }
        setError('✅ Check your email!');
      } else if (mode === 'login') {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
        onClose?.();
      } else if (mode === 'forgot') {
        const { error: err } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin });
        if (err) throw err;
        setMode('reset_sent');
      }
    } catch (err) { setError(err.message); }
    setLoading(false);
  };

  const googleLogin = async () => {
    if (!supabase?.auth) { setError('Auth unavailable'); return; }
    setLoading(true);
    try { await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } }); }
    catch(e) { setError(e.message); }
    setLoading(false);
  };

  const logout = async () => {
    if (supabase?.auth) { await supabase.auth.signOut(); setUser(null); onClose?.(); }
  };

  if (!isOpen || !ready) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => onClose?.()} />
      <div className="relative glass-card rounded-2xl shadow-2xl p-7 w-full max-w-sm mx-4 animate-fadeIn">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>

        {user ? (
          <div className="text-center py-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mx-auto text-2xl text-amber-400 font-bold">
              {user?.email?.charAt(0)?.toUpperCase() || '👤'}
            </div>
            <h3 className="font-bold text-white mt-3">{user?.user_metadata?.full_name || user?.email || 'User'}</h3>
            <p className="text-xs text-zinc-500">{user?.email}</p>
            <a href="/orders" className="mt-4 block text-sm text-amber-400 font-semibold hover:text-amber-300 transition-colors" onClick={() => onClose?.()}>📦 View My Orders</a>
            <button onClick={logout} className="mt-4 w-full bg-gradient-to-br from-rose-500 to-rose-600 text-white font-bold py-2.5 rounded-xl hover:opacity-90 transition-all text-sm shadow-lg shadow-rose-500/20">Logout</button>
            <button onClick={() => onClose?.()} className="mt-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Close</button>
          </div>
        ) : mode === 'reset_sent' ? (
          <div className="text-center py-4">
            <p className="text-4xl mb-3">📬</p>
            <h3 className="font-bold text-white text-lg font-display">Check Your Email</h3>
            <p className="text-sm text-zinc-400 mt-2">We sent a reset link to <strong className="text-zinc-300">{email}</strong></p>
            <button onClick={() => { setMode('login'); setError(''); }} className="mt-4 text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors">← Back</button>
          </div>
        ) : mode === 'forgot' ? (
          <>
            <div className="mb-5">
              <h3 className="font-bold text-white text-lg font-display">Reset Password</h3>
              <p className="text-xs text-zinc-500 mt-1">Enter your email and we&apos;ll send you a reset link</p>
            </div>
            {error && <p className={`text-xs mb-3 p-2.5 rounded-xl ${error.includes('✅') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>{error}</p>}
            <form onSubmit={handleAuth} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" required
                  className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold py-2.5 rounded-xl hover:opacity-90 transition-all text-sm disabled:opacity-50 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
                {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            <button onClick={() => { setMode('login'); setError(''); }} className="mt-3 text-xs text-amber-400 font-semibold hover:text-amber-300 transition-colors w-full text-center">← Back to Login</button>
          </>
        ) : (
          <>
            <div className="mb-5">
              <h3 className="font-bold text-white text-lg font-display">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h3>
              <p className="text-xs text-zinc-500 mt-1">{mode === 'login' ? 'Sign in to your account' : 'Join Spree for a personalized experience'}</p>
            </div>
            {error && <p className={`text-xs mb-3 p-2.5 rounded-xl ${error.includes('✅') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>{error}</p>}
            
            <button onClick={googleLogin} disabled={loading}
              className="w-full flex items-center justify-center gap-2 border border-white/10 rounded-xl py-2.5 text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>

            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5" /></div>
              <div className="relative flex justify-center text-xs"><span className="bg-theme-dropdown px-2 text-zinc-600">or continue with email</span></div>
            </div>

            <form onSubmit={handleAuth} className="space-y-3">
              {mode === 'signup' && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full Name"
                    className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all" />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required
                  className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required minLength={6}
                  className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all" />
              </div>
              {mode === 'login' && (
                <div className="text-right">
                  <button type="button" onClick={() => { setMode('forgot'); setError(''); }}
                    className="text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium">Forgot password?</button>
                </div>
              )}
              <button type="submit" disabled={loading}
                className="w-full bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold py-2.5 rounded-xl hover:opacity-90 transition-all text-sm disabled:opacity-50 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
                {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>
            <p className="text-xs text-zinc-600 text-center mt-4">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); }}
                className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
