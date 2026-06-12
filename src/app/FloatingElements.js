'use client';

import { useState } from 'react';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import ChatBot from '@/components/ChatBot';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingElements() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <AccessibilityMenu />
      
      {/* Premium FAB */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl ${
          chatOpen 
            ? 'bg-zinc-800 border border-white/10 text-white hover:bg-zinc-700 scale-90' 
            : 'glass-card border-amber-500/20 text-amber-400 hover:border-amber-500/40 hover:shadow-amber-500/10 hover:scale-105 active:scale-95'
        }`}
        aria-label={chatOpen ? 'Close chat' : 'Open chat'}>
        {chatOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Ring indicator when closed */}
      {!chatOpen && (
        <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
          <div className="w-14 h-14 rounded-2xl border border-amber-500/20 animate-ping-slow" />
        </div>
      )}

      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
