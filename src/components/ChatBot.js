'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import products from '@/data/products';

const QUESTIONS = [
  {
    id: 'welcome',
    question: '👋 Hi! What brings you here today?',
    options: [
      { text: '🛍️ Find a product', next: 'category' },
      { text: '❓ Need help with my order', next: 'help' },
      { text: '💬 Just browsing', next: 'browse' },
    ],
  },
  {
    id: 'category',
    question: 'What category interests you?',
    options: [
      { text: '📱 Electronics', next: 'electronics' },
      { text: '👕 Fashion', next: 'fashion' },
      { text: '🏠 Home & Kitchen', next: 'home' },
      { text: '📚 Books & Media', next: 'books' },
      { text: '🏃 Sports & Outdoors', next: 'sports' },
      { text: '💄 Beauty', next: 'beauty' },
      { text: '🔙 Go back', next: 'welcome' },
    ],
  },
  {
    id: 'electronics',
    question: 'What kind of electronics?',
    options: [
      { text: '🎧 Headphones & Audio', action: 'search', value: 'headphones' },
      { text: '⌚ Smartwatches', action: 'search', value: 'smartwatch' },
      { text: '📸 Cameras', action: 'search', value: 'camera' },
      { text: '🔌 Accessories', action: 'search', value: 'charger' },
      { text: '🎮 Gaming', action: 'search', value: 'gaming' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'fashion',
    question: 'What fashion item?',
    options: [
      { text: '👟 Footwear', action: 'search', value: 'shoes' },
      { text: '👕 Clothing', action: 'search', value: 'clothing' },
      { text: '👜 Bags & Wallets', action: 'search', value: 'bag' },
      { text: '🕶️ Accessories', action: 'search', value: 'accessories' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'home',
    question: 'What for your home?',
    options: [
      { text: '☕ Kitchen', action: 'search', value: 'kitchen' },
      { text: '🛋️ Home Decor', action: 'search', value: 'decor' },
      { text: '🛏️ Bedroom', action: 'search', value: 'bedroom' },
      { text: '💡 Lighting', action: 'search', value: 'lighting' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'books',
    question: 'What media?',
    options: [
      { text: '📖 Books', action: 'search', value: 'book' },
      { text: '🎵 Music & Vinyl', action: 'search', value: 'vinyl' },
      { text: '🎨 Stationery & Art', action: 'search', value: 'stationery' },
      { text: '♟️ Games', action: 'search', value: 'games' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'sports',
    question: 'What sports item?',
    options: [
      { text: '🏋️ Fitness', action: 'search', value: 'fitness' },
      { text: '⛺ Outdoor & Camping', action: 'search', value: 'outdoor' },
      { text: '🚰 Water Bottles', action: 'search', value: 'bottle' },
      { text: '🎒 Backpacks', action: 'search', value: 'backpack' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'beauty',
    question: 'What beauty product?',
    options: [
      { text: '🧴 Skincare', action: 'search', value: 'skincare' },
      { text: '💇 Hair Care', action: 'search', value: 'hair' },
      { text: '💄 Makeup', action: 'search', value: 'lip' },
      { text: '🧖‍♀️ Wellness', action: 'search', value: 'wellness' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'help',
    question: 'What do you need help with?',
    options: [
      { text: '🚚 Where is my order?', action: 'msg', value: 'Orders are usually delivered in 5-7 business days. Please check your email for tracking info!' },
      { text: '🔄 Can I return an item?', action: 'msg', value: 'Yes! We offer 30-day hassle-free returns. Items must be unused and in original packaging.' },
      { text: '💳 What payment methods?', action: 'msg', value: 'We accept Cash on Delivery, Credit/Debit cards, UPI (GPay, PhonePe, Paytm), and Net Banking.' },
      { text: '📦 Shipping info', action: 'msg', value: 'Free shipping on orders above ₹999! Delivery takes 5-7 business days across India.' },
      { text: '🔙 Go back', next: 'welcome' },
    ],
  },
  {
    id: 'browse',
    question: 'Feel free to browse! Here are some popular categories:',
    options: [
      { text: '📱 Electronics', action: 'goto', value: '/products?category=Electronics' },
      { text: '👕 Fashion', action: 'goto', value: '/products?category=Fashion' },
      { text: '🏠 Home & Kitchen', action: 'goto', value: '/products?category=Home%20%26%20Kitchen' },
      { text: '🎉 View all deals', action: 'goto', value: '/products' },
    ],
  },
];

export default function ChatBot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentQ, setCurrentQ] = useState('welcome');
  const router = useRouter();
  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const q = QUESTIONS.find(q => q.id === 'welcome');
      setMessages([{ type: 'bot', text: q.question }]);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOption = (opt) => {
    const newMsgs = [...messages, { type: 'user', text: opt.text }];

    if (opt.action === 'search') {
      newMsgs.push({ type: 'bot', text: `🔍 Showing "${opt.value}" products...` });
      setMessages(newMsgs);
      setTimeout(() => {
        onClose();
        router.push(`/products?search=${encodeURIComponent(opt.value)}`);
      }, 800);
      return;
    }

    if (opt.action === 'msg') {
      newMsgs.push({ type: 'bot', text: opt.value });
      newMsgs.push({ type: 'bot', text: 'Anything else I can help with?', options: [
        { text: '🔙 Back to menu', next: 'welcome' },
        { text: '✖️ Close', action: 'close' },
      ]});
      setMessages(newMsgs);
      setCurrentQ('end_msg');
      return;
    }

    if (opt.action === 'goto') {
      newMsgs.push({ type: 'bot', text: 'Taking you there! 🚀' });
      setMessages(newMsgs);
      setTimeout(() => {
        onClose();
        router.push(opt.value);
      }, 500);
      return;
    }

    if (opt.action === 'close') {
      onClose();
      return;
    }

    // Navigate to next question
    if (opt.next) {
      const nextQ = QUESTIONS.find(q => q.id === opt.next);
      if (nextQ) {
        newMsgs.push({ type: 'bot', text: nextQ.question, options: nextQ.options });
        setMessages(newMsgs);
        setCurrentQ(opt.next);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[500px] flex flex-col">
        {/* Header */}
        <div className="bg-indigo-600 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🤖</span>
            <span className="font-semibold text-sm">Spree Assistant</span>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white">&times;</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[300px] max-h-[380px]">
          {messages.map((msg, i) => (
            <div key={i}>
              <div className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl px-3.5 py-2 text-sm ${
                  msg.type === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}>
                  {msg.text}
                </div>
              </div>
              {msg.options && (
                <div className="mt-2 space-y-1.5 ml-1">
                  {msg.options.map((opt, j) => (
                    <button key={j} onClick={() => handleOption(opt)}
                      className="block w-full text-left text-xs bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-lg px-3 py-2 text-gray-700 transition">
                      {opt.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-2">
          <p className="text-[10px] text-gray-400 text-center">Choose an option above to get started ✨</p>
        </div>
      </div>
    </div>
  );
}
