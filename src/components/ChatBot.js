'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import products from '@/data/products';
import { Sparkles, RefreshCw, X, Bot } from 'lucide-react';

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
      { text: '🎮 Gaming', action: 'search', value: 'gaming keyboard' },
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
      { text: '🕶️ Accessories', action: 'search', value: 'sunglasses' },
      { text: '🧥 Jackets', action: 'search', value: 'jacket' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'home',
    question: 'What for your home?',
    options: [
      { text: '☕ Kitchen', action: 'search', value: 'kitchen' },
      { text: '🛋️ Home Decor', action: 'search', value: 'decor' },
      { text: '🛏️ Bedroom', action: 'search', value: 'pillow' },
      { text: '💡 Lighting', action: 'search', value: 'lamp' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'books',
    question: 'What media?',
    options: [
      { text: '📖 Books', action: 'search', value: 'book' },
      { text: '🎵 Music & Vinyl', action: 'search', value: 'vinyl' },
      { text: '🎨 Stationery & Art', action: 'search', value: 'notebook' },
      { text: '♟️ Games', action: 'search', value: 'chess' },
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
      { text: '💄 Makeup', action: 'search', value: 'makeup' },
      { text: '🧖‍♀️ Wellness', action: 'search', value: 'spa' },
      { text: '🔙 Back', next: 'category' },
    ],
  },
  {
    id: 'help',
    question: 'What do you need help with?',
    options: [
      { text: '🚚 Where is my order?', action: 'msg', value: '📦 Orders are usually delivered in **5-7 business days**. Please check your email for the tracking link! If you haven\'t received it, contact our support team.' },
      { text: '🔄 Can I return an item?', action: 'msg', value: '✅ Yes! We offer **30-day hassle-free returns**. Items must be unused and in original packaging. Start a return from your account or contact support.' },
      { text: '💳 What payment methods?', action: 'msg', value: '💵 We accept: **Cash on Delivery**, **Credit/Debit Cards**, **UPI** (Google Pay, PhonePe, Paytm), and **Net Banking**.' },
      { text: '📦 Shipping info', action: 'msg', value: '🚚 **Free shipping** on orders above ₹999! Standard delivery takes **5-7 business days** across India. Express shipping available at checkout.' },
      { text: '🔙 Go back', next: 'welcome' },
    ],
  },
  {
    id: 'browse',
    question: 'Great! Here are some popular categories to explore:',
    options: [
      { text: '📱 Electronics', action: 'goto', value: '/products?category=Electronics' },
      { text: '👕 Fashion', action: 'goto', value: '/products?category=Fashion' },
      { text: '🏠 Home & Kitchen', action: 'goto', value: '/products?category=Home%20%26%20Kitchen' },
      { text: '🎉 View all products', action: 'goto', value: '/products' },
      { text: '🔙 Back', next: 'welcome' },
    ],
  },
];

const QUICK_ACTIONS = [
  { text: '🛍️ Shop', next: 'category' },
  { text: '❓ Help', next: 'help' },
  { text: '🔥 Trending', action: 'goto', value: '/products?sort=reviews' },
];

export default function ChatBot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentQ, setCurrentQ] = useState('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();
  const endRef = useRef(null);
  const chatRef = useRef(null);

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        const q = QUESTIONS.find(q => q.id === 'welcome');
        setMessages([{ type: 'bot', text: q.question, options: q.options }]);
        setCurrentQ('welcome');
        setIsTyping(false);
      }, 500);
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const addBotMessage = useCallback((text, options) => {
    setMessages(prev => [...prev, { type: 'bot', text, options }]);
  }, []);

  const handleOption = useCallback((opt) => {
    const userMsg = { type: 'user', text: opt.text };
    setMessages(prev => [...prev, userMsg]);

    if (opt.action === 'search') {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(`🔍 Showing products: "${opt.value}"`);
        setIsTyping(false);
        setTimeout(() => {
          onClose();
          router.push(`/products?search=${encodeURIComponent(opt.value)}`);
        }, 600);
      }, 400);
      return;
    }

    if (opt.action === 'msg') {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(opt.value);
        setIsTyping(false);
        setTimeout(() => {
          addBotMessage('🤔 Anything else I can help with?', [
            { text: '🔙 Back to menu', next: 'welcome' },
            { text: '❓ More help', next: 'help' },
            { text: '✖️ Close', action: 'close' },
          ]);
        }, 400);
      }, 500);
      return;
    }

    if (opt.action === 'goto') {
      addBotMessage('Taking you there! 🚀');
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

    if (opt.next) {
      const nextQ = QUESTIONS.find(q => q.id === opt.next);
      if (nextQ) {
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage(nextQ.question, nextQ.options);
          setCurrentQ(opt.next);
          setIsTyping(false);
        }, 400);
      }
    }
  }, [addBotMessage, onClose, router]);

  const resetChat = () => {
    setMessages([]);
    setCurrentQ('welcome');
    setIsTyping(true);
    setTimeout(() => {
      const q = QUESTIONS.find(q => q.id === 'welcome');
      setMessages([{ type: 'bot', text: q.question, options: q.options }]);
      setIsTyping(false);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[360px] sm:w-[400px]">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d1a] shadow-2xl shadow-black/40 backdrop-blur-xl flex flex-col"
        style={{ maxHeight: '600px' }}>
        
        {/* Ambient glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* ── Header ── */}
        <div className="relative shrink-0 bg-gradient-to-r from-[#14142a] to-[#0d0d1a] border-b border-white/5 px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Spree Assistant</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30" />
                <p className="text-[10px] text-zinc-500">Online — Ask me anything</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={resetChat} className="p-1.5 rounded-lg text-zinc-500 hover:text-amber-400 hover:bg-white/5 transition-all" title="Reset chat">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button onClick={onClose} className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-all">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ── Messages ── */}
        <div ref={chatRef} className="relative overflow-y-auto p-4 space-y-4" style={{ minHeight: '340px', maxHeight: '400px' }}>
          {messages.length === 0 && !isTyping && (
            <div className="text-center py-10 text-zinc-500 text-xs">
              <p className="text-3xl mb-2">👋</p>
              <p>Loading...</p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i}>
              <div className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 text-amber-100 rounded-tr-sm'
                    : 'bg-white/5 border border-white/5 text-zinc-300 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
              {msg.options && (
                <div className="mt-2.5 space-y-1.5 ml-0.5">
                  {msg.options.map((opt, j) => (
                    <button key={j} onClick={() => handleOption(opt)}
                      className="block w-full text-left text-xs font-medium bg-white/[0.03] hover:bg-amber-500/10 border border-white/[0.06] hover:border-amber-500/20 rounded-xl px-3.5 py-2.5 text-zinc-400 hover:text-amber-300 transition-all duration-200">
                      {opt.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 rounded-tl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-zinc-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* ── Quick Actions ── */}
        {messages.length > 0 && (
          <div className="relative shrink-0 border-t border-white/[0.04] px-3 py-2.5">
            <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-thin">
              {QUICK_ACTIONS.map((action, i) => (
                <button key={i} onClick={() => handleOption(action)}
                  className="text-[10px] font-medium bg-white/[0.03] hover:bg-amber-500/10 border border-white/[0.06] hover:border-amber-500/20 rounded-full px-3.5 py-1.5 text-zinc-500 hover:text-amber-300 whitespace-nowrap transition shrink-0">
                  {action.text}
                </button>
              ))}
              <button onClick={resetChat}
                className="text-[10px] font-medium bg-white/[0.03] hover:bg-white/5 border border-white/[0.06] rounded-full px-3.5 py-1.5 text-zinc-600 whitespace-nowrap transition shrink-0">
                ↺ Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
