'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Bot, X, RotateCcw, ShoppingBag, HelpCircle, Flame, Send } from 'lucide-react';

const QUESTIONS = [
  {
    id: 'welcome',
    question: 'Hi there! What brings you here today?',
    options: [
      { text: 'Find a product', next: 'category' },
      { text: 'Need help with my order', next: 'help' },
      { text: 'Just browsing', next: 'browse' },
    ],
  },
  {
    id: 'category',
    question: 'What category interests you?',
    options: [
      { text: 'Electronics', next: 'electronics' },
      { text: 'Fashion', next: 'fashion' },
      { text: 'Home & Kitchen', next: 'home' },
      { text: 'Books & Media', next: 'books' },
      { text: 'Sports & Outdoors', next: 'sports' },
      { text: 'Beauty', next: 'beauty' },
      { text: 'Go back', next: 'welcome' },
    ],
  },
  {
    id: 'electronics',
    question: 'What kind of electronics?',
    options: [
      { text: 'Headphones & Audio', action: 'search', value: 'headphones' },
      { text: 'Smartwatches', action: 'search', value: 'smartwatch' },
      { text: 'Cameras', action: 'search', value: 'camera' },
      { text: 'Accessories', action: 'search', value: 'charger' },
      { text: 'Gaming', action: 'search', value: 'gaming keyboard' },
      { text: 'Back', next: 'category' },
    ],
  },
  {
    id: 'fashion',
    question: 'What fashion item?',
    options: [
      { text: 'Footwear', action: 'search', value: 'shoes' },
      { text: 'Clothing', action: 'search', value: 'clothing' },
      { text: 'Bags & Wallets', action: 'search', value: 'bag' },
      { text: 'Accessories', action: 'search', value: 'sunglasses' },
      { text: 'Jackets', action: 'search', value: 'jacket' },
      { text: 'Back', next: 'category' },
    ],
  },
  {
    id: 'home',
    question: 'What for your home?',
    options: [
      { text: 'Kitchen', action: 'search', value: 'kitchen' },
      { text: 'Home Decor', action: 'search', value: 'decor' },
      { text: 'Bedroom', action: 'search', value: 'pillow' },
      { text: 'Lighting', action: 'search', value: 'lamp' },
      { text: 'Back', next: 'category' },
    ],
  },
  {
    id: 'books',
    question: 'What media?',
    options: [
      { text: 'Books', action: 'search', value: 'book' },
      { text: 'Music & Vinyl', action: 'search', value: 'vinyl' },
      { text: 'Stationery & Art', action: 'search', value: 'notebook' },
      { text: 'Games', action: 'search', value: 'chess' },
      { text: 'Back', next: 'category' },
    ],
  },
  {
    id: 'sports',
    question: 'What sports item?',
    options: [
      { text: 'Fitness', action: 'search', value: 'fitness' },
      { text: 'Outdoor & Camping', action: 'search', value: 'outdoor' },
      { text: 'Water Bottles', action: 'search', value: 'bottle' },
      { text: 'Backpacks', action: 'search', value: 'backpack' },
      { text: 'Back', next: 'category' },
    ],
  },
  {
    id: 'beauty',
    question: 'What beauty product?',
    options: [
      { text: 'Skincare', action: 'search', value: 'skincare' },
      { text: 'Hair Care', action: 'search', value: 'hair' },
      { text: 'Makeup', action: 'search', value: 'makeup' },
      { text: 'Wellness', action: 'search', value: 'spa' },
      { text: 'Back', next: 'category' },
    ],
  },
  {
    id: 'help',
    question: 'What do you need help with?',
    options: [
      { text: 'Where is my order?', action: 'msg', value: 'Orders are usually delivered in 5-7 business days. Please check your email for the tracking link. If you haven\'t received it, contact our support team.' },
      { text: 'Can I return an item?', action: 'msg', value: 'Yes! We offer 30-day hassle-free returns. Items must be unused and in original packaging. Start a return from your account or contact support.' },
      { text: 'What payment methods?', action: 'msg', value: 'We accept Cash on Delivery, Credit/Debit Cards, UPI (Google Pay, PhonePe, Paytm), and Net Banking.' },
      { text: 'Shipping info', action: 'msg', value: 'Free shipping on orders above Rs.999! Standard delivery takes 5-7 business days across India. Express shipping available at checkout.' },
      { text: 'Go back', next: 'welcome' },
    ],
  },
  {
    id: 'browse',
    question: 'Great! Here are some popular categories to explore:',
    options: [
      { text: 'Electronics', action: 'goto', value: '/products?category=Electronics' },
      { text: 'Fashion', action: 'goto', value: '/products?category=Fashion' },
      { text: 'Home & Kitchen', action: 'goto', value: '/products?category=Home%20%26%20Kitchen' },
      { text: 'View all products', action: 'goto', value: '/products' },
      { text: 'Back', next: 'welcome' },
    ],
  },
];

const QUICK_ACTIONS = [
  { text: 'Shop', icon: ShoppingBag, next: 'category' },
  { text: 'Help', icon: HelpCircle, next: 'help' },
  { text: 'Trending', icon: Flame, action: 'goto', value: '/products?sort=reviews' },
];

export default function ChatBot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentQ, setCurrentQ] = useState('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();
  const endRef = useRef(null);
  const chatRef = useRef(null);

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

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = useCallback((text, options) => {
    setMessages(prev => [...prev, { type: 'bot', text, options }]);
  }, []);

  const handleOption = useCallback((opt) => {
    setMessages(prev => [...prev, { type: 'user', text: opt.text }]);

    if (opt.action === 'search') {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(`Showing products for "${opt.value}"`);
        setIsTyping(false);
        setTimeout(() => { onClose(); router.push(`/products?search=${encodeURIComponent(opt.value)}`); }, 600);
      }, 400);
      return;
    }
    if (opt.action === 'msg') {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(opt.value);
        setIsTyping(false);
        setTimeout(() => {
          addBotMessage('Anything else I can help with?', [
            { text: 'Back to menu', next: 'welcome' },
            { text: 'More help', next: 'help' },
            { text: 'Close', action: 'close' },
          ]);
        }, 400);
      }, 500);
      return;
    }
    if (opt.action === 'goto') {
      addBotMessage('Taking you there!');
      setTimeout(() => { onClose(); router.push(opt.value); }, 500);
      return;
    }
    if (opt.action === 'close') { onClose(); return; }
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
    <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-soft-lg border border-black/5 flex flex-col overflow-hidden" style={{ maxHeight: '580px' }}>
        {/* Header */}
        <div className="gradient-brand text-white px-4 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15">
              <Bot className="w-5 h-5" />
            </span>
            <div>
              <p className="font-display font-bold text-sm">Spree Assistant</p>
              <p className="text-[11px] text-white/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online — ask me anything
              </p>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <button onClick={resetChat} className="grid place-items-center w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition" title="Reset chat">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="grid place-items-center w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition" aria-label="Close chat">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div ref={chatRef} className="overflow-y-auto p-3.5 space-y-3 bg-gray-50/50" style={{ minHeight: '320px', maxHeight: '400px' }}>
          {messages.map((msg, i) => (
            <div key={i} className="animate-fade-in-up">
              <div className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed shadow-soft ${
                  msg.type === 'user'
                    ? 'gradient-brand text-white rounded-2xl rounded-br-md'
                    : 'bg-white text-ink-soft rounded-2xl rounded-bl-md border border-black/5'
                }`}>
                  {msg.text}
                </div>
              </div>
              {msg.options && (
                <div className="mt-2 flex flex-wrap gap-1.5 ml-0.5">
                  {msg.options.map((opt, j) => (
                    <button key={j} onClick={() => handleOption(opt)}
                      className="text-xs font-medium bg-white hover:bg-brand-50 border border-black/5 hover:border-brand-300 hover:text-brand-700 rounded-full px-3.5 py-2 text-ink-soft transition-all duration-150 shadow-soft">
                      {opt.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-black/5 rounded-2xl rounded-bl-md px-4 py-3 shadow-soft">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-brand-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Quick Actions */}
        {messages.length > 0 && (
          <div className="border-t border-black/5 px-3 py-2.5 shrink-0 bg-white">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_ACTIONS.map((action, i) => {
                const Icon = action.icon;
                return (
                  <button key={i} onClick={() => handleOption(action)}
                    className="flex items-center gap-1.5 text-[11px] font-semibold bg-gray-50 hover:bg-brand-50 border border-black/5 hover:border-brand-200 rounded-full px-3 py-1.5 text-ink-soft hover:text-brand-700 whitespace-nowrap transition shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                    {action.text}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
