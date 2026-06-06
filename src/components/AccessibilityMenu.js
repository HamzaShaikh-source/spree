'use client';

import { useState, useEffect } from 'react';

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
        className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center text-lg"
        aria-label="Accessibility options"
      >
        ♿
      </button>

      {/* Menu */}
      {open && (
        <div className="fixed bottom-20 left-4 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Accessibility</h3>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">&times;</button>
          </div>
          <div className="space-y-3">
            {/* Font size */}
            <div>
              <p className="text-xs font-medium text-gray-600 mb-1">Font Size: {fontSize}%</p>
              <div className="flex gap-2">
                <button onClick={() => setFontSize(Math.max(70, fontSize - 10))} className="flex-1 px-2 py-1.5 bg-gray-100 rounded-lg text-xs font-bold hover:bg-gray-200 transition">A−</button>
                <button onClick={() => setFontSize(100)} className="flex-1 px-2 py-1.5 bg-gray-100 rounded-lg text-xs hover:bg-gray-200 transition">Reset</button>
                <button onClick={() => setFontSize(Math.min(150, fontSize + 10))} className="flex-1 px-2 py-1.5 bg-gray-100 rounded-lg text-xs font-bold hover:bg-gray-200 transition">A+</button>
              </div>
            </div>

            {/* High contrast */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full py-2 rounded-xl text-xs font-bold transition ${
                highContrast ? 'bg-yellow-300 text-black' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {highContrast ? '✓ High Contrast On' : '🌗 High Contrast'}
            </button>

            {/* Text to speech */}
            <button
              onClick={readPage}
              className={`w-full py-2 rounded-xl text-xs font-bold transition ${
                speaking ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {speaking ? '⏹ Stop Reading' : '🔊 Read Page Aloud'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
