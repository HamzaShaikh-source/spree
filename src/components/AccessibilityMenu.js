'use client';

import { useState, useEffect } from 'react';
import { Accessibility, X, Minus, Plus, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  // Inject high-contrast styles
  useEffect(() => {
    if (!document.getElementById('hc-style')) {
      const style = document.createElement('style');
      style.id = 'hc-style';
      style.textContent = `
        .high-contrast * {
          background-color: #000 !important;
          color: #ff0 !important;
          border-color: #ff0 !important;
        }
        .high-contrast img { filter: invert(1) hue-rotate(180deg); }
        .high-contrast a { color: #0ff !important; }
        .high-contrast button { background: #ff0 !important; color: #000 !important; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const readPage = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl ${
          open
            ? 'bg-zinc-800 border border-white/10 text-white'
            : 'glass-card border-white/10 text-zinc-400 hover:border-white/20 hover:text-white hover:scale-105'
        }`}
        aria-label="Accessibility options">
        <Accessibility className="w-5 h-5" />
      </button>

      {/* Menu */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-64 animate-fadeIn">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d1a] shadow-2xl shadow-black/40 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white text-sm">Accessibility</h3>
              <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {/* Font size */}
              <div>
                <p className="text-xs font-medium text-zinc-500 mb-2">Font Size: <span className="text-white">{fontSize}%</span></p>
                <div className="flex gap-2">
                  <button onClick={() => setFontSize(Math.max(70, fontSize - 10))}
                    className="flex-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                    <Minus className="w-3 h-3 mx-auto" />
                  </button>
                  <button onClick={() => setFontSize(100)}
                    className="flex-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-zinc-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1">
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                  <button onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                    className="flex-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                    <Plus className="w-3 h-3 mx-auto" />
                  </button>
                </div>
              </div>

              {/* High contrast */}
              <button onClick={() => setHighContrast(!highContrast)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  highContrast
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/20'
                    : 'bg-white/5 text-zinc-400 border-white/10 hover:text-white hover:bg-white/10'
                }`}>
                {highContrast ? '✓ High Contrast On' : '🌗 High Contrast'}
              </button>

              {/* Text to speech */}
              <button onClick={readPage}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-2 ${
                  speaking
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/20'
                    : 'bg-white/5 text-zinc-400 border-white/10 hover:text-white hover:bg-white/10'
                }`}>
                {speaking ? <><VolumeX className="w-3.5 h-3.5" /> Stop Reading</> : <><Volume2 className="w-3.5 h-3.5" /> Read Page Aloud</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
