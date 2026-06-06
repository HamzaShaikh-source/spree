# ✨ Spree — Discover What You Love

> **A full-featured e-commerce platform** built with Next.js, featuring voice search, AI chatbot, multi-language support, Google login, real order history, email confirmations, and more. Built for the **Newton Headstart 2026** program.

<p align="center">
  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop" alt="Spree Banner" width="800" />
</p>

<p align="center">
  <a href="https://spree-henna.vercel.app">🚀 Live Site</a> &nbsp;|&nbsp;
  <a href="https://github.com/HamzaShaikh-source/spree">📂 GitHub</a>
</p>

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Pages](#-pages)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)

---

## ✨ Features

### 🛍️ Shopping Experience
| Feature | Details |
|---------|---------|
| **194 Products** | Real products from DummyJSON API with authentic matching images |
| **8 Categories** | Electronics, Fashion, Home & Kitchen, Books & Media, Sports & Outdoors, Beauty, Laptops & Computers, Stationery & Office |
| **Product Details** | Full descriptions, ratings, reviews, tags, price history |
| **Related Products** | Tag-based matching for similar items |
| **Share Button** | QR code generation, copy link, WhatsApp/X/Facebook/Email sharing |

### 🔍 Search & Discovery
| Feature | Details |
|---------|---------|
| **🔤 Text Search** | Full-text across names, descriptions, tags, categories |
| **🎤 Voice Search** | Click mic → speak → search powered by Web Speech API |
| **📜 Search History** | Last 8 searches saved as clickable chips |
| **💡 Search Suggestions** | Real-time autocomplete with product images & prices |
| **🎯 Personalized Recs** | Weighted scoring from viewed products + searches + orders |

### 📂 Filters & Sorting
- **Category** sidebar filter
- **💰 Price range** dual slider
- **⭐ Rating filter** (3★ / 3.5★ / 4★ / 4.5★+)
- **Sort by**: Featured, Price (low/high), Rating, Popularity, Name (A-Z)
- **Clear all filters** button

### 👤 User Accounts (Supabase Auth)
| Feature | Details |
|---------|---------|
| **🔵 Google Login** | OAuth with proper redirect |
| **📧 Email Signup** | Password-based with confirmation email |
| **🔑 Forgot Password** | Email reset link via Supabase |
| **👤 Profile View** | Name, email, avatar, logout |
| **🛡️ RLS Policies** | Row-level security on all user data |

### 🛒 Checkout & Orders
| Feature | Details |
|---------|---------|
| **Multi-step Checkout** | Cart → Shipping → Payment → Confirm → Order Placed 🎉 |
| **📍 Pincode Suggester** | Auto-suggests city/state from 25+ Indian cities |
| **🎟️ Coupon Codes** | `WELCOME10` (10%), `SPREE20` (20%), `SAVE500` (₹500 off), `FREESHIP` |
| **💾 Orders Saved** | PostgreSQL database via Supabase |
| **📜 Order History** | `/orders` page — persistent across logins |
| **📧 Email Confirmation** | Receipt sent via Resend |
| **🆓 Free Shipping** | On orders above ₹999 |

### 💬 AI Chatbot
- Floating 💬 button (bottom-right)
- **MCQ-based navigation** — tap to find products by category
- **Customer support answers** — returns, shipping, payments, tracking
- **Direct search** — selects products by category/subcategory
- **Quick actions** — Shop, Help, Trending, Reset

### 🌐 Multi-Language
| Language | Code |
|----------|:----:|
| English | 🇬🇧 `en` |
| हिन्दी (Hindi) | 🇮🇳 `hi` |
| தமிழ் (Tamil) | 🇮🇳 `ta` |
| বাংলা (Bengali) | 🇮🇳 `bn` |

One-click switcher in header — full UI translation across all pages.

### ♿ Accessibility
| Feature | Details |
|---------|---------|
| **♿ Floating Menu** | Bottom-left, always accessible |
| **🔤 Font Size** | A− / Reset / A+ controls |
| **🌗 High Contrast** | Yellow-on-black mode for visually impaired |
| **🔊 Text-to-Speech** | Reads entire page aloud via SpeechSynthesis |

### 📱 Responsive Design
- Mobile-first with collapsible hamburger menu
- Touch-friendly buttons & controls
- Works on all screen sizes (320px → 4K)
- Fast loading with Next.js optimized builds

### 🗺️ Additional Pages
| Page | Content |
|------|---------|
| `/about` | Company story & stats |
| `/contact` | Contact form + Google Maps embed |
| `/faq` | Expandable accordion Q&A |
| `/shipping` | Shipping policies & timelines |
| `/returns` | Return policy & process |
| `/careers` | Job listings |
| `/press` | Press releases |
| `/blog` | Blog articles |
| `/404` | Custom not-found with navigation |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** (App Router) | React framework |
| **Tailwind CSS** | Utility-first styling |
| **Supabase** | Auth (Google + Email), PostgreSQL database |
| **Resend** | Transactional emails |
| **Vercel** | Hosting & auto-deployment |
| **DummyJSON API** | 194 real products with authentic images |
| **Web Speech API** | Voice search & text-to-speech |
| **Google Maps Embed** | Location on contact page |
| **QR Code API** | Share button QR generation |

---

## 📄 Pages

```
/              → Homepage (hero, categories, featured, trending, personalized recs, newsletter)
/products      → All products with search, filters, sort
/products/:id  → Product detail with share, related items, recs
/cart          → Cart with qty controls, remove, free shipping
/checkout      → Multi-step: Cart → Shipping → Payment → Confirm
/orders        → Order history (persistent, per-user)
/contact       → Form + Google Maps
/faq           → Expandable Q&A
/about         → Company info
/shipping      → Shipping policies
/returns       → Return policies
/careers       → Job listings
/press         → Press releases
/blog          → Blog articles
```

---

## 📦 Project Structure

```
spree/
├── src/
│   ├── app/
│   │   ├── layout.js                # Root layout (header, footer, LanguageProvider)
│   │   ├── FloatingElements.js      # Chatbot + Accessibility floating buttons
│   │   ├── HomeClient.js            # Homepage with all sections
│   │   ├── page.js                  # Homepage entry
│   │   ├── not-found.js             # Custom 404 page
│   │   ├── products/page.js         # Product listing + filters
│   │   ├── products/[id]/page.js    # Product detail + share
│   │   ├── cart/page.js             # Shopping cart
│   │   ├── checkout/page.js         # Multi-step checkout
│   │   ├── orders/page.js           # Order history
│   │   ├── about/page.js            # About us
│   │   ├── contact/page.js          # Contact + Google Maps
│   │   ├── faq/page.js              # FAQ accordion
│   │   ├── shipping/page.js         # Shipping info
│   │   ├── returns/page.js          # Returns policy
│   │   ├── careers/page.js          # Job listings
│   │   ├── press/page.js            # Press releases
│   │   ├── blog/page.js             # Blog articles
│   │   └── api/
│   │       ├── orders/route.js      # Orders CRUD (service_role)
│   │       ├── subscribe/route.js   # Newsletter signup
│   │       └── setup/route.js       # DB setup endpoint
│   ├── components/
│   │   ├── Header.js                # Nav, search, voice, language, cart badge
│   │   ├── ProductCard.js           # Product card with add-to-cart
│   │   ├── Recommendations.js       # Personalized recommendations display
│   │   ├── SearchSuggestions.js     # Autocomplete + search history
│   │   ├── ShareButton.js           # QR code, copy link, social sharing
│   │   ├── LoginModal.js            # Google + Email auth modal
│   │   ├── ChatBot.js               # MCQ-based assistant chatbot
│   │   ├── AccessibilityMenu.js      # Font, contrast, TTS controls
│   │   └── ImageSearch.js           # (WIP) Search products by photo
│   ├── context/
│   │   └── LanguageContext.js        # Multi-language provider (EN/HI/TA/BN)
│   ├── lib/
│   │   ├── supabase.js              # Supabase client (safe init)
│   │   └── email.js                 # Resend email templates
│   └── data/
│       ├── products.js              # 194 products + recommendation engine
│       └── translations.js          # 4-language UI dictionary
├── scripts/
│   └── fetch-real-products.js       # Product data fetcher
├── .env                              # Environment variables (gitignored)
├── next.config.mjs
└── package.json
```

---

## 🎯 Recommendation System

The personalization engine uses **weighted tag scoring**:

1. **Viewed products** → tags weighted ×2
2. **Search history** → matching names/tags/categories weighted ×1
3. **Past orders** → tags weighted ×3 (highest)
4. All products scored → top 6 shown as "Based on Your Activity"

No external ML libraries — pure JavaScript, runs entirely client-side.

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/HamzaShaikh-source/spree.git
cd spree

# Install
npm install

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env` file (not committed) with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_role_key
RESEND_API_KEY=re_your_resend_key
```

---

<p align="center">Built with ❤️ for the <strong>Newton Headstart 2026</strong> program</p>
<p align="center">#headstart2026 #NewtonHeadstart2026</p>
