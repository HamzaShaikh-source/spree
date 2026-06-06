'use client';

import { useState } from 'react';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import ChatBot from '@/components/ChatBot';

export default function FloatingElements() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <AccessibilityMenu />
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center justify-center text-lg"
        aria-label="Open chat"
      >
        💬
      </button>
      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
