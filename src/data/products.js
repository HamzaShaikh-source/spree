// ── Product Data ──
// 48 products across 8 categories

const products = [
  {
    "id": "el-1",
    "name": "Dell Wireless Headphones",
    "slug": "dell-wireless-headphones",
    "price": 5490,
    "originalPrice": 5490,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 5,
    "reviews": 978,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality wireless headphones from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-2",
    "name": "boAt Bluetooth Speaker Premium",
    "slug": "boat-bluetooth-speaker-premium",
    "price": 3350,
    "originalPrice": 4434,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4,
    "reviews": 1829,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "High-quality bluetooth speaker from boAt. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-3",
    "name": "pTron USB-C Hub Plus",
    "slug": "ptron-usb-c-hub-plus",
    "price": 1150,
    "originalPrice": 1150,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.8,
    "reviews": 1374,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "High-quality usb-c hub from pTron. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-4",
    "name": "Samsung Wireless Mouse Basic",
    "slug": "samsung-wireless-mouse-basic",
    "price": 1800,
    "originalPrice": 1800,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.1,
    "reviews": 1361,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "High-quality wireless mouse from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-5",
    "name": "HP Smart Band Basic",
    "slug": "hp-smart-band-basic",
    "price": 2540,
    "originalPrice": 2540,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.4,
    "reviews": 1034,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "High-quality smart band from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-6",
    "name": "Samsung Power Bank Pro",
    "slug": "samsung-power-bank-pro",
    "price": 660,
    "originalPrice": 660,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.3,
    "reviews": 264,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "High-quality power bank from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-1",
    "name": "USPA Running Shoes Plus",
    "slug": "uspa-running-shoes-plus",
    "price": 3800,
    "originalPrice": 3800,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.7,
    "reviews": 291,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality running shoes from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-2",
    "name": "Fossil Casual Sneakers Plus",
    "slug": "fossil-casual-sneakers-plus",
    "price": 3400,
    "originalPrice": 4833,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.5,
    "reviews": 458,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "High-quality casual sneakers from Fossil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-3",
    "name": "Puma Round Neck T-Shirt Standard",
    "slug": "puma-round-neck-t-shirt-standard",
    "price": 830,
    "originalPrice": 1136,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.7,
    "reviews": 1248,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "High-quality round neck t-shirt from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-4",
    "name": "USPA Denim Jeans Ultra",
    "slug": "uspa-denim-jeans-ultra",
    "price": 1740,
    "originalPrice": 2235,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.6,
    "reviews": 1591,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "High-quality denim jeans from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-5",
    "name": "USPA Formal Shirt Standard",
    "slug": "uspa-formal-shirt-standard",
    "price": 1580,
    "originalPrice": 2192,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.2,
    "reviews": 572,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "High-quality formal shirt from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-6",
    "name": "Fossil Leather Belt Deluxe",
    "slug": "fossil-leather-belt-deluxe",
    "price": 440,
    "originalPrice": 555,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.5,
    "reviews": 909,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "High-quality leather belt from Fossil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-1",
    "name": "Wakefit Non-Stick Tawa Premium",
    "slug": "wakefit-non-stick-tawa-premium",
    "price": 1300,
    "originalPrice": 1789,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.7,
    "reviews": 1246,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "High-quality non-stick tawa from Wakefit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-2",
    "name": "Cello Microwave Safe Bowl Set Standard",
    "slug": "cello-microwave-safe-bowl-set-standard",
    "price": 270,
    "originalPrice": 336,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.6,
    "reviews": 476,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "High-quality microwave safe bowl set from Cello. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-3",
    "name": "Wakefit Vegetable Chopper Ultra",
    "slug": "wakefit-vegetable-chopper-ultra",
    "price": 780,
    "originalPrice": 780,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.7,
    "reviews": 475,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality vegetable chopper from Wakefit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-4",
    "name": "Milton Spice Rack Standard",
    "slug": "milton-spice-rack-standard",
    "price": 790,
    "originalPrice": 930,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.6,
    "reviews": 1783,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality spice rack from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-5",
    "name": "Milton Tumbler Glass Set Ultra",
    "slug": "milton-tumbler-glass-set-ultra",
    "price": 450,
    "originalPrice": 450,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.8,
    "reviews": 376,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "High-quality tumbler glass set from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-6",
    "name": "Cello Kitchen Tongs Standard",
    "slug": "cello-kitchen-tongs-standard",
    "price": 150,
    "originalPrice": 187,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.9,
    "reviews": 1745,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "High-quality kitchen tongs from Cello. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-1",
    "name": "Oxford Fiction Bestseller Premium",
    "slug": "oxford-fiction-bestseller-premium",
    "price": 390,
    "originalPrice": 494,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.6,
    "reviews": 544,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "High-quality fiction bestseller from Oxford. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-2",
    "name": "Oxford Self-Help Guide Basic",
    "slug": "oxford-self-help-guide-basic",
    "price": 570,
    "originalPrice": 570,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.5,
    "reviews": 545,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "High-quality self-help guide from Oxford. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-3",
    "name": "Bloomsbury Indian History Book Pro",
    "slug": "bloomsbury-indian-history-book-pro",
    "price": 500,
    "originalPrice": 702,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.8,
    "reviews": 432,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "High-quality indian history book from Bloomsbury. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-4",
    "name": "Bloomsbury Children Storybook Deluxe",
    "slug": "bloomsbury-children-storybook-deluxe",
    "price": 180,
    "originalPrice": 180,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.5,
    "reviews": 17,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "High-quality children storybook from Bloomsbury. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-5",
    "name": "Random House Cooking Recipe Book Ultra",
    "slug": "random-house-cooking-recipe-book-ultra",
    "price": 390,
    "originalPrice": 591,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.1,
    "reviews": 969,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "High-quality cooking recipe book from Random House. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-6",
    "name": "Random House Exam Guide Pro",
    "slug": "random-house-exam-guide-pro",
    "price": 460,
    "originalPrice": 460,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.7,
    "reviews": 903,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "High-quality exam guide from Random House. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-1",
    "name": "Puma Skipping Rope Basic",
    "slug": "puma-skipping-rope-basic",
    "price": 300,
    "originalPrice": 387,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.7,
    "reviews": 1159,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "High-quality skipping rope from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-2",
    "name": "BSN Push Up Stand Basic",
    "slug": "bsn-push-up-stand-basic",
    "price": 680,
    "originalPrice": 933,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.7,
    "reviews": 596,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "High-quality push up stand from BSN. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-3",
    "name": "Decathlon Ab Roller Wheel Plus",
    "slug": "decathlon-ab-roller-wheel-plus",
    "price": 550,
    "originalPrice": 833,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.5,
    "reviews": 379,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "High-quality ab roller wheel from Decathlon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-4",
    "name": "Proff Hand Grip Strengthener Premium",
    "slug": "proff-hand-grip-strengthener-premium",
    "price": 380,
    "originalPrice": 380,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.7,
    "reviews": 319,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "High-quality hand grip strengthener from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-5",
    "name": "Fitkit Tennis Ball Set Elite",
    "slug": "fitkit-tennis-ball-set-elite",
    "price": 300,
    "originalPrice": 446,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "High-quality tennis ball set from Fitkit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-6",
    "name": "BSN Badminton Racket Ultra",
    "slug": "bsn-badminton-racket-ultra",
    "price": 540,
    "originalPrice": 767,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.9,
    "reviews": 1952,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "High-quality badminton racket from BSN. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-1",
    "name": "Lakme Face Wash",
    "slug": "lakme-face-wash",
    "price": 300,
    "originalPrice": 363,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.5,
    "reviews": 692,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "High-quality face wash from Lakme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-2",
    "name": "Mamaearth Moisturizer Elite",
    "slug": "mamaearth-moisturizer-elite",
    "price": 460,
    "originalPrice": 674,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.7,
    "reviews": 269,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "High-quality moisturizer from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-3",
    "name": "The Derma Co Toner",
    "slug": "the-derma-co-toner",
    "price": 590,
    "originalPrice": 590,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.9,
    "reviews": 1876,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "High-quality toner from The Derma Co. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-4",
    "name": "Minimalist Eye Cream Premium",
    "slug": "minimalist-eye-cream-premium",
    "price": 460,
    "originalPrice": 460,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.5,
    "reviews": 281,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "High-quality eye cream from Minimalist. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-5",
    "name": "Wow Skin Science Shampoo Pro",
    "slug": "wow-skin-science-shampoo-pro",
    "price": 700,
    "originalPrice": 700,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4,
    "reviews": 1862,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "High-quality shampoo from Wow Skin Science. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-6",
    "name": "Mamaearth Hair Oil Plus",
    "slug": "mamaearth-hair-oil-plus",
    "price": 550,
    "originalPrice": 550,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.5,
    "reviews": 1931,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "High-quality hair oil from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-1",
    "name": "Samsung Ultrabook Laptop",
    "slug": "samsung-ultrabook-laptop",
    "price": 105600,
    "originalPrice": 105600,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.2,
    "reviews": 1821,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "High-quality ultrabook laptop from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-2",
    "name": "Samsung Gaming Laptop Premium",
    "slug": "samsung-gaming-laptop-premium",
    "price": 133780,
    "originalPrice": 133780,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.1,
    "reviews": 792,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "High-quality gaming laptop from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-3",
    "name": "Xiaomi Monitor 24-inch Deluxe",
    "slug": "xiaomi-monitor-24-inch-deluxe",
    "price": 18310,
    "originalPrice": 18310,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.7,
    "reviews": 1704,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality monitor 24-inch from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-4",
    "name": "Acer Mechanical Keyboard Elite",
    "slug": "acer-mechanical-keyboard-elite",
    "price": 2960,
    "originalPrice": 4424,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.8,
    "reviews": 89,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "High-quality mechanical keyboard from Acer. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-5",
    "name": "Xiaomi External Hard Drive 1TB Ultra",
    "slug": "xiaomi-external-hard-drive-1tb-ultra",
    "price": 5310,
    "originalPrice": 6756,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.7,
    "reviews": 1383,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "High-quality external hard drive 1tb from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-6",
    "name": "Apple USB Mouse Basic",
    "slug": "apple-usb-mouse-basic",
    "price": 450,
    "originalPrice": 636,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.9,
    "reviews": 1366,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "High-quality usb mouse from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-1",
    "name": "DOMS A4 Notebook Pack Ultra",
    "slug": "doms-a4-notebook-pack-ultra",
    "price": 360,
    "originalPrice": 459,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.9,
    "reviews": 1768,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "High-quality a4 notebook pack from DOMS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-2",
    "name": "Faber-Castell Gel Pen Set Elite",
    "slug": "faber-castell-gel-pen-set-elite",
    "price": 240,
    "originalPrice": 276,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.2,
    "reviews": 589,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "High-quality gel pen set from Faber-Castell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-3",
    "name": "Uniball Pencil Box Plus",
    "slug": "uniball-pencil-box-plus",
    "price": 370,
    "originalPrice": 506,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 5,
    "reviews": 238,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality pencil box from Uniball. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-4",
    "name": "Faber-Castell Highlighter Set Basic",
    "slug": "faber-castell-highlighter-set-basic",
    "price": 280,
    "originalPrice": 423,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.4,
    "reviews": 1306,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "High-quality highlighter set from Faber-Castell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-5",
    "name": "Parker Geometry Box Pro",
    "slug": "parker-geometry-box-pro",
    "price": 500,
    "originalPrice": 500,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.9,
    "reviews": 457,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "High-quality geometry box from Parker. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-6",
    "name": "Parker Whiteboard Marker Set Pro",
    "slug": "parker-whiteboard-marker-set-pro",
    "price": 220,
    "originalPrice": 294,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 5,
    "reviews": 782,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "High-quality whiteboard marker set from Parker. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  }
];

// ── Brand Data ──
export const brands = [
  {
    "name": "Apple",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    "name": "Samsung",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
  },
  {
    "name": "Sony",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg"
  },
  {
    "name": "Nike",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },
  {
    "name": "Adidas",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
  },
  {
    "name": "Dell",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.svg"
  },
  {
    "name": "HP",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg"
  },
  {
    "name": "Lenovo",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Lenovo_logo_2015.svg"
  },
  {
    "name": "ASUS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Asus_Logo.svg"
  },
  {
    "name": "Bose",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Bose_logo.svg"
  },
  {
    "name": "Puma",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg"
  },
  {
    "name": "Levi's",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Levi%27s_logo.svg"
  }
];

// ── Helpers ──
export function getProductById(id) { return products.find(p => p.id === id) || null; }
export function getProductBySlug(slug) { return products.find(p => p.slug === slug) || null; }
export function getFeaturedProducts() { return products.filter(p => p.featured); }
export function getProductsByCategory(category) { return products.filter(p => p.category === category); }
export function getCategories() { return [...new Set(products.map(p => p.category))]; }
export function getBrands() { return brands; }
export function getPriceRange() {
  const prices = products.map(p => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return products
    .filter(p => p.id !== product.id)
    .map(p => ({ ...p, _score: p.tags.filter(t => product.tags.includes(t)).length }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function getRecommendations(viewedIds = [], limit = 6) {
  const viewedProducts = products.filter(p => viewedIds.includes(p.id));
  const tagScores = {};
  viewedProducts.forEach(p => p.tags.forEach(t => { tagScores[t] = (tagScores[t] || 0) + 1; }));
  if (viewedIds.length === 0) return getFeaturedProducts().slice(0, limit);
  return products
    .filter(p => !viewedIds.includes(p.id))
    .map(p => ({ ...p, _score: p.tags.reduce((sum, t) => sum + (tagScores[t] || 0), 0) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

export default products;

