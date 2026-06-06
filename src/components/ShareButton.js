'use client';

import { useState } from 'react';

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
      // Fallback
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
        className={`p-2 rounded-lg transition ${dark ? 'text-white hover:bg-white/10' : 'text-gray-500 hover:bg-gray-100'}`}
        title="Share">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>

      {show && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShow(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">&times;</button>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Share</h3>
            
            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(shareUrl)}`}
                alt="QR Code" className="rounded-xl border border-gray-200" />
            </div>
            <p className="text-xs text-gray-400 text-center mb-4">Scan to open</p>

            {/* Copy link */}
            <div className="flex gap-2 mb-3">
              <input type="text" value={shareUrl} readOnly
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 truncate" />
              <button onClick={copyLink}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${copied ? 'bg-green-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Native share fallback buttons */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              <a href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition">
                <span className="text-2xl">💬</span>
                <span className="text-[10px] text-gray-500">WhatsApp</span>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition">
                <span className="text-2xl">🐦</span>
                <span className="text-[10px] text-gray-500">X</span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer"
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition">
                <span className="text-2xl">👍</span>
                <span className="text-[10px] text-gray-500">Facebook</span>
              </a>
              <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`}
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-gray-50 transition">
                <span className="text-2xl">📧</span>
                <span className="text-[10px] text-gray-500">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
