'use client';

import { useState } from 'react';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import ChatBot from '@/components/ChatBot';
import { MessageCircle } from 'lucide-react';

export default function FloatingElements() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <AccessibilityMenu />
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center"
        aria-label="Open chat">
        <MessageCircle className="w-5 h-5" />
      </button>
      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
