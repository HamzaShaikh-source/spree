'use client';

import { useState } from 'react';
import { Share2, Check, X, Copy } from 'lucide-react';

export default function ShareButton({ url, title = 'Check this out!', dark = false }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleShare = async () => {
    // Try native share on mobile
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
        return;
      } catch(e) {}
    }
    setShow(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch(e) {
      const ta = document.createElement('textarea');
      ta.value = shareUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <button onClick={handleShare}
        className={`p-2 rounded-xl transition-all duration-200 ${
          dark ? 'text-zinc-400 hover:text-white hover:bg-white/5' : 'text-zinc-500 hover:text-amber-400 hover:bg-white/5'
        }`}
        title="Share">
        <Share2 className="w-4 h-4" />
      </button>

      {show && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShow(false)} />
          <div className="relative glass-card rounded-2xl shadow-2xl p-7 w-full max-w-sm mx-4 animate-fadeIn">
            <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-bold text-white text-lg font-display mb-1">Share</h3>
            <p className="text-zinc-500 text-xs mb-5">Share this product with your friends</p>
            
            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(shareUrl)}`}
                alt="QR Code" className="rounded-xl border border-white/5 bg-white" />
            </div>
            <p className="text-xs text-zinc-600 text-center mb-4">Scan to open</p>

            {/* Copy link */}
            <div className="flex gap-2 mb-4">
              <input type="text" value={shareUrl} readOnly
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-zinc-400 truncate focus:outline-none" />
              <button onClick={copyLink}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  copied ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/20 text-amber-400 border border-amber-500/20 hover:bg-amber-500/30'
                }`}>
                {copied ? <><Check className="w-3 h-3 inline" /> Copied</> : <><Copy className="w-3 h-3 inline" /> Copy</>}
              </button>
            </div>

            {/* Social share */}
            <div className="grid grid-cols-4 gap-3">
              <a href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all">
                <span className="text-2xl">💬</span>
                <span className="text-[10px] text-zinc-500">WhatsApp</span>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all">
                <span className="text-2xl">🐦</span>
                <span className="text-[10px] text-zinc-500">X</span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all">
                <span className="text-2xl">👍</span>
                <span className="text-[10px] text-zinc-500">Facebook</span>
              </a>
              <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`}
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all">
                <span className="text-2xl">📧</span>
                <span className="text-[10px] text-zinc-500">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
