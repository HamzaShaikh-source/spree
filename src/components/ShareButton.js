'use client';

import { useState } from 'react';
import { Share2, X, Check, Copy, Mail } from 'lucide-react';
import { WhatsApp, Twitter, Facebook } from '@/components/BrandIcons';

export default function ShareButton({ url, title = 'Check this out!', dark = false }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
        return;
      } catch (e) {}
    }
    setShow(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
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

  const socials = [
    { Icon: WhatsApp, label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`, color: 'bg-green-500' },
    { Icon: Twitter, label: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, color: 'bg-ink' },
    { Icon: Facebook, label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, color: 'bg-blue-600' },
    { Icon: Mail, label: 'Email', href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`, color: 'bg-brand-600' },
  ];

  return (
    <>
      <button onClick={handleShare}
        className={`grid place-items-center w-10 h-10 rounded-xl transition ${
          dark ? 'text-white bg-white/10 hover:bg-white/20' : 'text-ink-soft bg-gray-100 hover:bg-brand-50 hover:text-brand-600'
        }`}
        title="Share" aria-label="Share">
        <Share2 className="w-5 h-5" />
      </button>

      {show && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in" onClick={() => setShow(false)} />
          <div className="relative bg-white rounded-3xl shadow-soft-lg p-6 w-full max-w-sm animate-scale-in">
            <button onClick={() => setShow(false)} aria-label="Close"
              className="absolute top-4 right-4 grid place-items-center w-8 h-8 rounded-full text-gray-400 hover:text-ink hover:bg-gray-100 transition">
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-display font-bold text-ink text-lg mb-5">Share this</h3>

            {/* QR Code */}
            <div className="flex flex-col items-center mb-5">
              <div className="p-3 bg-white rounded-2xl border border-black/5 shadow-soft">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(shareUrl)}`}
                  alt="QR code to open this page" className="rounded-lg" width={170} height={170} />
              </div>
              <p className="text-xs text-gray-400 mt-2.5">Scan to open on your phone</p>
            </div>

            {/* Copy link */}
            <div className="flex gap-2 mb-5">
              <input type="text" value={shareUrl} readOnly aria-label="Share link"
                className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-black/5 rounded-xl text-xs text-ink-soft truncate" />
              <button onClick={copyLink}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                  copied ? 'bg-green-500 text-white' : 'gradient-brand text-white hover:opacity-90'
                }`}>
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Social tiles */}
            <div className="grid grid-cols-4 gap-3">
              {socials.map(({ Icon, label, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 group">
                  <span className={`grid place-items-center w-12 h-12 rounded-2xl text-white ${color} group-hover:scale-105 transition-transform shadow-soft`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] text-gray-500">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
