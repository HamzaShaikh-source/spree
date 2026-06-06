'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import ChatBot from '@/components/ChatBot';

export default function FloatingElements() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <AccessibilityMenu />
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className={`fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-soft-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 ${
          chatOpen ? 'gradient-brand rotate-0' : 'gradient-brand animate-pulse-ring'
        }`}
        aria-label={chatOpen ? 'Close chat' : 'Open chat'}
      >
        {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
