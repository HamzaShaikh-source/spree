# ✨ Spree — E-Commerce Platform

> **Discover What You Love.** A modern, feature-rich e-commerce platform built with Next.js, featuring AI-powered recommendations, voice search, multi-language support, and an interactive chatbot.

![Spree Screenshot](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop)

## 🚀 Live Demo

👉 **Live Site:** *(deployed privately)*

---

## ✨ Features

### 🛍️ Shopping Experience
- **72 products** across 6 categories: Electronics, Fashion, Home & Kitchen, Books & Media, Sports & Outdoors, Beauty
- Product detail pages with images, ratings, reviews, tags, and descriptions
- Related products and personalized recommendations
- Category browsing with smart filtering

### 🔍 Smart Search & Filters
- **Full-text search** across product names, descriptions, and tags
- **🎤 Voice Search** — click the microphone and speak to search
- **Category** sidebar filter
- **💰 Price range slider**
- **⭐ Rating filter** (3★ / 3.5★ / 4★ / 4.5★+)
- **Sort by**: Price, Rating, Popularity, Name

### 👤 User Accounts
- Login / Signup modal (localStorage-based)
- Profile display with name and email
- Logout functionality

### 🛒 Complete Checkout
- **Multi-step checkout**: Cart → Shipping → Payment → Confirm → Order confirmation
- **🎟️ Coupon Codes**:
  - `WELCOME10` — 10% off your first order
  - `SPREE20` — 20% off on all items  
  - `SAVE500` — ₹500 off on orders above ₹2,999
  - `FREESHIP` — Free shipping
- Form validation on all fields
- Free shipping on orders above ₹999
- Real-time order summary with discount breakdown

### 🌐 Multi-Language Support
- **4 languages**: English, हिन्दी (Hindi), தமிழ் (Tamil), বাংলা (Bengali)
- One-click language switcher in the header
- Full UI translation across all pages

### 💬 AI Chatbot Assistant
- Floating chat button (bottom-right)
- **MCQ-based navigation** — tap options to find products by category
- Customer support answers for: order tracking, returns, payments, shipping
- Direct product search from chat
- Quick links to categories and deals

### ♿ Accessibility
- Floating accessibility menu (bottom-left)
- **Font size** increase / decrease / reset
- **High contrast mode** for visually impaired users
- **Text-to-speech** — reads page content aloud
- Screen-reader friendly markup

### 📱 Fully Responsive
- Mobile-first design
- Collapsible navigation menu
- Touch-friendly buttons and controls
- Works on all screen sizes

### 📧 Other Features
- Newsletter subscription
- Trending products section
- Featured picks carousel
- Deals & offers banner
- Comprehensive footer with sitemap

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **Tailwind CSS** | Utility-first styling |
| **JavaScript** | Frontend logic |
| **Web Speech API** | Voice search + text-to-speech |
| **localStorage** | Cart, user sessions, language pref |
| **Vercel** | Hosting & deployment |

---

## 📦 Project Structure

```
spree/
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout with header, footer
│   │   ├── FloatingElements.js  # Chatbot + accessibility buttons
│   │   ├── page.js             # Homepage
│   │   ├── products/
│   │   │   ├── page.js         # Product listing with filters
│   │   │   └── [id]/page.js   # Product detail page
│   │   ├── cart/page.js       # Shopping cart
│   │   └── checkout/page.js   # Multi-step checkout with coupons
│   ├── components/
│   │   ├── Header.js           # Navigation with search + voice + language
│   │   ├── ProductCard.js      # Product card with add-to-cart
│   │   ├── Recommendations.js  # Personalized recommendations
│   │   ├── LoginModal.js       # Login / Signup modal
│   │   ├── ChatBot.js          # MCQ-based assistant chatbot
│   │   └── AccessibilityMenu.js # Accessibility options panel
│   ├── context/
│   │   └── LanguageContext.js   # Multi-language provider
│   └── data/
│       ├── products.js         # 72 products + recommendation engine
│       └── translations.js     # Translations for 4 languages
├── public/
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Local Development

```bash
# Clone the repo
git clone https://github.com/HamzaShaikh-source/spree.git
cd spree

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎯 Product Recommendations Engine

The recommendation system uses **tag-based scoring**:

1. Products you view are tracked in `localStorage`
2. Tags from viewed products build a preference profile
3. All products are scored by tag overlap with your profile
4. Top-scoring products are shown as "Just For You"

No external ML libraries needed — pure JavaScript running entirely on the client side.

---

## 📝 License

MIT License — free to use, modify, and distribute.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

<p align="center">Made with ❤️ for the Newton Headstart Program</p>
