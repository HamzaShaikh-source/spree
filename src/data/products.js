// ── Product Data ──
// 521 products across 8 categories

const products = [
  {
    "id": "el-1",
    "name": "Realme Wireless Headphones",
    "slug": "realme-wireless-headphones",
    "price": 2860,
    "originalPrice": 3876,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.7,
    "reviews": 287,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "High-quality wireless headphones from Realme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-2",
    "name": "HP Wireless Headphones",
    "slug": "hp-wireless-headphones-hp",
    "price": 4910,
    "originalPrice": 4910,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.8,
    "reviews": 223,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-3",
    "name": "Panasonic Wireless Headphones Plus",
    "slug": "panasonic-wireless-headphones-plus-panasonic",
    "price": 1590,
    "originalPrice": 2130,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.4,
    "reviews": 1235,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-4",
    "name": "HP Wireless Headphones Ultra",
    "slug": "hp-wireless-headphones-ultra-hp",
    "price": 5430,
    "originalPrice": 8159,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.6,
    "reviews": 1259,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-5",
    "name": "pTron Wireless Headphones Plus",
    "slug": "ptron-wireless-headphones-plus-ptron",
    "price": 3580,
    "originalPrice": 4602,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.8,
    "reviews": 962,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-6",
    "name": "pTron Bluetooth Speaker Basic",
    "slug": "ptron-bluetooth-speaker-basic",
    "price": 4980,
    "originalPrice": 4980,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.5,
    "reviews": 1630,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "High-quality bluetooth speaker from pTron. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-7",
    "name": "JBL Bluetooth Speaker Pro",
    "slug": "jbl-bluetooth-speaker-pro-jbl",
    "price": 1150,
    "originalPrice": 1150,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.8,
    "reviews": 1255,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-8",
    "name": "Samsung Bluetooth Speaker Elite",
    "slug": "samsung-bluetooth-speaker-elite-samsung",
    "price": 1300,
    "originalPrice": 1300,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.8,
    "reviews": 1485,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-9",
    "name": "OnePlus Bluetooth Speaker Elite",
    "slug": "oneplus-bluetooth-speaker-elite-oneplus",
    "price": 3600,
    "originalPrice": 5328,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.8,
    "reviews": 1456,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-10",
    "name": "Dell Bluetooth Speaker Pro",
    "slug": "dell-bluetooth-speaker-pro-dell",
    "price": 3500,
    "originalPrice": 4792,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.8,
    "reviews": 298,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-11",
    "name": "Dell USB-C Hub",
    "slug": "dell-usb-c-hub",
    "price": 1160,
    "originalPrice": 1653,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.7,
    "reviews": 1482,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality usb-c hub from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-12",
    "name": "Sony USB-C Hub Basic",
    "slug": "sony-usb-c-hub-basic-sony",
    "price": 1150,
    "originalPrice": 1741,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.9,
    "reviews": 752,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-13",
    "name": "Xiaomi USB-C Hub Standard",
    "slug": "xiaomi-usb-c-hub-standard-xiaomi",
    "price": 840,
    "originalPrice": 840,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.6,
    "reviews": 476,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-14",
    "name": "Xiaomi USB-C Hub",
    "slug": "xiaomi-usb-c-hub-xiaomi",
    "price": 1080,
    "originalPrice": 1599,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.7,
    "reviews": 431,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-15",
    "name": "Sony USB-C Hub Plus",
    "slug": "sony-usb-c-hub-plus-sony",
    "price": 1490,
    "originalPrice": 2324,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.4,
    "reviews": 10,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-16",
    "name": "Dell Wireless Mouse Ultra",
    "slug": "dell-wireless-mouse-ultra",
    "price": 580,
    "originalPrice": 580,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 5,
    "reviews": 1576,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "High-quality wireless mouse from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-17",
    "name": "Realme Wireless Mouse Plus",
    "slug": "realme-wireless-mouse-plus-realme",
    "price": 1800,
    "originalPrice": 2682,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.7,
    "reviews": 741,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-18",
    "name": "boAt Wireless Mouse Pro",
    "slug": "boat-wireless-mouse-pro-boat",
    "price": 380,
    "originalPrice": 598,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 5,
    "reviews": 900,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-19",
    "name": "Sony Wireless Mouse",
    "slug": "sony-wireless-mouse-sony",
    "price": 1660,
    "originalPrice": 1660,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4,
    "reviews": 44,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-20",
    "name": "Samsung Wireless Mouse Plus",
    "slug": "samsung-wireless-mouse-plus-samsung",
    "price": 1430,
    "originalPrice": 1430,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 5,
    "reviews": 831,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-21",
    "name": "Panasonic Smart Band Premium",
    "slug": "panasonic-smart-band-premium",
    "price": 2060,
    "originalPrice": 2060,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.6,
    "reviews": 979,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "High-quality smart band from Panasonic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-22",
    "name": "Philips Smart Band Plus",
    "slug": "philips-smart-band-plus-philips",
    "price": 890,
    "originalPrice": 1186,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.1,
    "reviews": 302,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-23",
    "name": "Philips Smart Band Elite",
    "slug": "philips-smart-band-elite-philips",
    "price": 1070,
    "originalPrice": 1352,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.2,
    "reviews": 231,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-24",
    "name": "JBL Smart Band Deluxe",
    "slug": "jbl-smart-band-deluxe-jbl",
    "price": 2240,
    "originalPrice": 2490,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.9,
    "reviews": 775,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-25",
    "name": "Apple Smart Band Plus",
    "slug": "apple-smart-band-plus-apple",
    "price": 3900,
    "originalPrice": 3900,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.7,
    "reviews": 236,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-26",
    "name": "OnePlus Smart Band Pro",
    "slug": "oneplus-smart-band-pro-oneplus",
    "price": 3310,
    "originalPrice": 4703,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.6,
    "reviews": 595,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-27",
    "name": "Samsung Smart Band Premium",
    "slug": "samsung-smart-band-premium-samsung",
    "price": 1430,
    "originalPrice": 1861,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 5,
    "reviews": 1292,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-28",
    "name": "OnePlus Power Bank",
    "slug": "oneplus-power-bank",
    "price": 990,
    "originalPrice": 990,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.4,
    "reviews": 1938,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality power bank from OnePlus. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-29",
    "name": "Sony Power Bank",
    "slug": "sony-power-bank-sony",
    "price": 2040,
    "originalPrice": 2040,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.1,
    "reviews": 1035,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-30",
    "name": "Dell Power Bank Plus",
    "slug": "dell-power-bank-plus-dell",
    "price": 910,
    "originalPrice": 1264,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4,
    "reviews": 118,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-31",
    "name": "boAt Power Bank Ultra",
    "slug": "boat-power-bank-ultra-boat",
    "price": 1790,
    "originalPrice": 2197,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.9,
    "reviews": 682,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-32",
    "name": "Samsung Power Bank Premium",
    "slug": "samsung-power-bank-premium-samsung",
    "price": 2070,
    "originalPrice": 2290,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.3,
    "reviews": 384,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-33",
    "name": "Apple Power Bank Ultra",
    "slug": "apple-power-bank-ultra-apple",
    "price": 2580,
    "originalPrice": 2580,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.9,
    "reviews": 22,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-34",
    "name": "Philips Power Bank Basic",
    "slug": "philips-power-bank-basic-philips",
    "price": 1340,
    "originalPrice": 1340,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.7,
    "reviews": 530,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-35",
    "name": "Dell HDMI Cable Standard",
    "slug": "dell-hdmi-cable-standard",
    "price": 630,
    "originalPrice": 630,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.2,
    "reviews": 488,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "High-quality hdmi cable from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-36",
    "name": "LG HDMI Cable Basic",
    "slug": "lg-hdmi-cable-basic-lg",
    "price": 350,
    "originalPrice": 350,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.4,
    "reviews": 93,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-37",
    "name": "pTron HDMI Cable Deluxe",
    "slug": "ptron-hdmi-cable-deluxe-ptron",
    "price": 550,
    "originalPrice": 550,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4,
    "reviews": 573,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-38",
    "name": "Panasonic HDMI Cable Ultra",
    "slug": "panasonic-hdmi-cable-ultra-panasonic",
    "price": 580,
    "originalPrice": 846,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.9,
    "reviews": 412,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-39",
    "name": "OnePlus HDMI Cable Deluxe",
    "slug": "oneplus-hdmi-cable-deluxe-oneplus",
    "price": 160,
    "originalPrice": 160,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.5,
    "reviews": 696,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-40",
    "name": "pTron HDMI Cable Elite",
    "slug": "ptron-hdmi-cable-elite-ptron",
    "price": 420,
    "originalPrice": 590,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.3,
    "reviews": 793,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-41",
    "name": "Bose HDMI Cable Elite",
    "slug": "bose-hdmi-cable-elite-bose",
    "price": 210,
    "originalPrice": 300,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.5,
    "reviews": 611,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-42",
    "name": "Apple Webcam Basic",
    "slug": "apple-webcam-basic",
    "price": 3900,
    "originalPrice": 3900,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.6,
    "reviews": 765,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "High-quality webcam from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-43",
    "name": "boAt Webcam Ultra",
    "slug": "boat-webcam-ultra-boat",
    "price": 2890,
    "originalPrice": 2890,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.3,
    "reviews": 627,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium webcam from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-44",
    "name": "HP Webcam Basic",
    "slug": "hp-webcam-basic-hp",
    "price": 4520,
    "originalPrice": 5540,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4,
    "reviews": 54,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium webcam from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-45",
    "name": "Samsung Webcam Premium",
    "slug": "samsung-webcam-premium-samsung",
    "price": 3490,
    "originalPrice": 3490,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.8,
    "reviews": 182,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium webcam from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-46",
    "name": "LG Webcam Pro",
    "slug": "lg-webcam-pro-lg",
    "price": 4160,
    "originalPrice": 4160,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.7,
    "reviews": 1509,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium webcam from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-47",
    "name": "LG Webcam Ultra",
    "slug": "lg-webcam-ultra-lg",
    "price": 2000,
    "originalPrice": 2357,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.2,
    "reviews": 1399,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium webcam from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-48",
    "name": "OnePlus Webcam Deluxe",
    "slug": "oneplus-webcam-deluxe-oneplus",
    "price": 1720,
    "originalPrice": 1720,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.9,
    "reviews": 922,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium webcam from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-49",
    "name": "JBL Smart Plug Basic",
    "slug": "jbl-smart-plug-basic",
    "price": 780,
    "originalPrice": 1088,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.8,
    "reviews": 1526,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "High-quality smart plug from JBL. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-50",
    "name": "Samsung Smart Plug Plus",
    "slug": "samsung-smart-plug-plus-samsung",
    "price": 960,
    "originalPrice": 960,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3,
    "reviews": 249,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-51",
    "name": "Panasonic Smart Plug Standard",
    "slug": "panasonic-smart-plug-standard-panasonic",
    "price": 550,
    "originalPrice": 550,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.7,
    "reviews": 203,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-52",
    "name": "boAt Smart Plug Elite",
    "slug": "boat-smart-plug-elite-boat",
    "price": 1160,
    "originalPrice": 1776,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.7,
    "reviews": 1092,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-53",
    "name": "JBL Smart Plug Ultra",
    "slug": "jbl-smart-plug-ultra-jbl",
    "price": 590,
    "originalPrice": 906,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.2,
    "reviews": 1154,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-54",
    "name": "Dell LED Strip Lights Standard",
    "slug": "dell-led-strip-lights-standard",
    "price": 1260,
    "originalPrice": 1260,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.3,
    "reviews": 857,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "High-quality led strip lights from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-55",
    "name": "Bose LED Strip Lights Elite",
    "slug": "bose-led-strip-lights-elite-bose",
    "price": 600,
    "originalPrice": 845,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.1,
    "reviews": 1401,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-56",
    "name": "LG LED Strip Lights Deluxe",
    "slug": "lg-led-strip-lights-deluxe-lg",
    "price": 1220,
    "originalPrice": 1220,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.8,
    "reviews": 1252,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-57",
    "name": "boAt LED Strip Lights Pro",
    "slug": "boat-led-strip-lights-pro-boat",
    "price": 650,
    "originalPrice": 1012,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4,
    "reviews": 689,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-58",
    "name": "LG LED Strip Lights Standard",
    "slug": "lg-led-strip-lights-standard-lg",
    "price": 1320,
    "originalPrice": 1696,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.4,
    "reviews": 622,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-59",
    "name": "JBL LED Strip Lights Basic",
    "slug": "jbl-led-strip-lights-basic-jbl",
    "price": 870,
    "originalPrice": 1351,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 498,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-60",
    "name": "JBL Memory Card 64GB Plus",
    "slug": "jbl-memory-card-64gb-plus",
    "price": 1020,
    "originalPrice": 1202,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.5,
    "reviews": 155,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "High-quality memory card 64gb from JBL. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-61",
    "name": "Realme Memory Card 64GB Plus",
    "slug": "realme-memory-card-64gb-plus-realme",
    "price": 660,
    "originalPrice": 660,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3,
    "reviews": 1502,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-62",
    "name": "Samsung Memory Card 64GB Pro",
    "slug": "samsung-memory-card-64gb-pro-samsung",
    "price": 740,
    "originalPrice": 740,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.9,
    "reviews": 863,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-63",
    "name": "Dell Memory Card 64GB Basic",
    "slug": "dell-memory-card-64gb-basic-dell",
    "price": 480,
    "originalPrice": 480,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.8,
    "reviews": 247,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-64",
    "name": "Dell Memory Card 64GB Deluxe",
    "slug": "dell-memory-card-64gb-deluxe-dell",
    "price": 1030,
    "originalPrice": 1030,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.1,
    "reviews": 866,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-65",
    "name": "Apple Phone Case Deluxe",
    "slug": "apple-phone-case-deluxe",
    "price": 190,
    "originalPrice": 190,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.5,
    "reviews": 743,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "High-quality phone case from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-66",
    "name": "Samsung Phone Case Basic",
    "slug": "samsung-phone-case-basic-samsung",
    "price": 230,
    "originalPrice": 256,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.4,
    "reviews": 1246,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium phone case from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-67",
    "name": "pTron Phone Case Premium",
    "slug": "ptron-phone-case-premium-ptron",
    "price": 480,
    "originalPrice": 702,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.7,
    "reviews": 1337,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium phone case from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-68",
    "name": "boAt Phone Case Premium",
    "slug": "boat-phone-case-premium-boat",
    "price": 420,
    "originalPrice": 577,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.2,
    "reviews": 932,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium phone case from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-69",
    "name": "boAt Phone Case Ultra",
    "slug": "boat-phone-case-ultra-boat",
    "price": 190,
    "originalPrice": 225,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.2,
    "reviews": 542,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium phone case from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-70",
    "name": "Realme Phone Case Premium",
    "slug": "realme-phone-case-premium-realme",
    "price": 190,
    "originalPrice": 231,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.9,
    "reviews": 331,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium phone case from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-71",
    "name": "Panasonic Screen Guard Plus",
    "slug": "panasonic-screen-guard-plus",
    "price": 220,
    "originalPrice": 294,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.9,
    "reviews": 1036,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "High-quality screen guard from Panasonic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-72",
    "name": "JBL Screen Guard Premium",
    "slug": "jbl-screen-guard-premium-jbl",
    "price": 270,
    "originalPrice": 403,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.3,
    "reviews": 1434,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium screen guard from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-73",
    "name": "LG Screen Guard Standard",
    "slug": "lg-screen-guard-standard-lg",
    "price": 220,
    "originalPrice": 343,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.8,
    "reviews": 64,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium screen guard from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-74",
    "name": "Sony Screen Guard Elite",
    "slug": "sony-screen-guard-elite-sony",
    "price": 270,
    "originalPrice": 270,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.1,
    "reviews": 1369,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-75",
    "name": "Bose Screen Guard Elite",
    "slug": "bose-screen-guard-elite-bose",
    "price": 350,
    "originalPrice": 466,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.2,
    "reviews": 86,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-76",
    "name": "Realme Selfie Stick Tripod Deluxe",
    "slug": "realme-selfie-stick-tripod-deluxe",
    "price": 690,
    "originalPrice": 690,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4,
    "reviews": 1043,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "High-quality selfie stick tripod from Realme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-77",
    "name": "LG Selfie Stick Tripod Deluxe",
    "slug": "lg-selfie-stick-tripod-deluxe-lg",
    "price": 900,
    "originalPrice": 1035,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.4,
    "reviews": 565,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-78",
    "name": "Philips Selfie Stick Tripod",
    "slug": "philips-selfie-stick-tripod-philips",
    "price": 310,
    "originalPrice": 427,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.3,
    "reviews": 191,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-79",
    "name": "OnePlus Selfie Stick Tripod Pro",
    "slug": "oneplus-selfie-stick-tripod-pro-oneplus",
    "price": 810,
    "originalPrice": 1037,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.5,
    "reviews": 582,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-80",
    "name": "Realme Selfie Stick Tripod Standard",
    "slug": "realme-selfie-stick-tripod-standard-realme",
    "price": 550,
    "originalPrice": 550,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.3,
    "reviews": 716,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-81",
    "name": "Samsung Selfie Stick Tripod Deluxe",
    "slug": "samsung-selfie-stick-tripod-deluxe-samsung",
    "price": 320,
    "originalPrice": 450,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.4,
    "reviews": 654,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-82",
    "name": "Dell Selfie Stick Tripod Elite",
    "slug": "dell-selfie-stick-tripod-elite-dell",
    "price": 620,
    "originalPrice": 620,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.8,
    "reviews": 688,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-1",
    "name": "Skechers Running Shoes Pro",
    "slug": "skechers-running-shoes-pro",
    "price": 6200,
    "originalPrice": 7823,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.6,
    "reviews": 1604,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "High-quality running shoes from Skechers. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-2",
    "name": "Levi's Running Shoes Basic",
    "slug": "levi-s-running-shoes-basic-levi-s",
    "price": 3510,
    "originalPrice": 4443,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4,
    "reviews": 309,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-3",
    "name": "H&M Running Shoes Pro",
    "slug": "h-m-running-shoes-pro-h-m",
    "price": 1680,
    "originalPrice": 1680,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.3,
    "reviews": 80,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-4",
    "name": "Roadster Running Shoes Plus",
    "slug": "roadster-running-shoes-plus-roadster",
    "price": 2680,
    "originalPrice": 3259,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.7,
    "reviews": 723,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-5",
    "name": "Tommy Hilfiger Running Shoes Deluxe",
    "slug": "tommy-hilfiger-running-shoes-deluxe-tommy-hilfiger",
    "price": 2700,
    "originalPrice": 3601,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.1,
    "reviews": 1401,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-6",
    "name": "H&M Running Shoes Standard",
    "slug": "h-m-running-shoes-standard-h-m",
    "price": 6240,
    "originalPrice": 9837,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.7,
    "reviews": 161,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-7",
    "name": "Wildcraft Casual Sneakers Deluxe",
    "slug": "wildcraft-casual-sneakers-deluxe",
    "price": 1840,
    "originalPrice": 1840,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.5,
    "reviews": 617,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "High-quality casual sneakers from Wildcraft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-8",
    "name": "USPA Casual Sneakers Deluxe",
    "slug": "uspa-casual-sneakers-deluxe-uspa",
    "price": 3530,
    "originalPrice": 4443,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.5,
    "reviews": 1150,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-9",
    "name": "Nike Casual Sneakers Standard",
    "slug": "nike-casual-sneakers-standard-nike",
    "price": 2100,
    "originalPrice": 2100,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.9,
    "reviews": 128,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-10",
    "name": "HRX Casual Sneakers Ultra",
    "slug": "hrx-casual-sneakers-ultra-hrx",
    "price": 4940,
    "originalPrice": 6538,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.4,
    "reviews": 1164,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-11",
    "name": "Levi's Casual Sneakers Elite",
    "slug": "levi-s-casual-sneakers-elite-levi-s",
    "price": 3860,
    "originalPrice": 3860,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.4,
    "reviews": 1411,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-12",
    "name": "Diesel Round Neck T-Shirt Plus",
    "slug": "diesel-round-neck-t-shirt-plus",
    "price": 880,
    "originalPrice": 880,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.9,
    "reviews": 1802,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "High-quality round neck t-shirt from Diesel. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-13",
    "name": "HRX Round Neck T-Shirt Pro",
    "slug": "hrx-round-neck-t-shirt-pro-hrx",
    "price": 310,
    "originalPrice": 310,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.2,
    "reviews": 369,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-14",
    "name": "Wildcraft Round Neck T-Shirt Elite",
    "slug": "wildcraft-round-neck-t-shirt-elite-wildcraft",
    "price": 1280,
    "originalPrice": 1723,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4,
    "reviews": 1409,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-15",
    "name": "Tommy Hilfiger Round Neck T-Shirt Pro",
    "slug": "tommy-hilfiger-round-neck-t-shirt-pro-tommy-hilfiger",
    "price": 750,
    "originalPrice": 1121,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.4,
    "reviews": 952,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-16",
    "name": "Tommy Hilfiger Round Neck T-Shirt Deluxe",
    "slug": "tommy-hilfiger-round-neck-t-shirt-deluxe-tommy-hilfiger",
    "price": 990,
    "originalPrice": 1163,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.9,
    "reviews": 1464,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-17",
    "name": "Zara Denim Jeans Deluxe",
    "slug": "zara-denim-jeans-deluxe",
    "price": 2200,
    "originalPrice": 2540,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.8,
    "reviews": 1980,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "High-quality denim jeans from Zara. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-18",
    "name": "Zara Denim Jeans Premium",
    "slug": "zara-denim-jeans-premium-zara",
    "price": 2350,
    "originalPrice": 3385,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.8,
    "reviews": 664,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-19",
    "name": "Ray-Ban Denim Jeans Premium",
    "slug": "ray-ban-denim-jeans-premium-ray-ban",
    "price": 2690,
    "originalPrice": 2690,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.5,
    "reviews": 1425,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-20",
    "name": "Nike Denim Jeans Pro",
    "slug": "nike-denim-jeans-pro-nike",
    "price": 2020,
    "originalPrice": 2268,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 5,
    "reviews": 1036,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-21",
    "name": "Levi's Denim Jeans Standard",
    "slug": "levi-s-denim-jeans-standard-levi-s",
    "price": 1310,
    "originalPrice": 1899,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.5,
    "reviews": 327,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-22",
    "name": "Ray-Ban Denim Jeans",
    "slug": "ray-ban-denim-jeans-ray-ban",
    "price": 2690,
    "originalPrice": 2690,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.5,
    "reviews": 245,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-23",
    "name": "Puma Denim Jeans Plus",
    "slug": "puma-denim-jeans-plus-puma",
    "price": 1550,
    "originalPrice": 1940,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.9,
    "reviews": 539,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-24",
    "name": "Levi's Formal Shirt Elite",
    "slug": "levi-s-formal-shirt-elite",
    "price": 1590,
    "originalPrice": 1590,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality formal shirt from Levi's. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-25",
    "name": "USPA Formal Shirt Elite",
    "slug": "uspa-formal-shirt-elite-uspa",
    "price": 1380,
    "originalPrice": 1731,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.9,
    "reviews": 1336,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-26",
    "name": "Wildcraft Formal Shirt Elite",
    "slug": "wildcraft-formal-shirt-elite-wildcraft",
    "price": 1750,
    "originalPrice": 2245,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.6,
    "reviews": 991,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-27",
    "name": "Fossil Formal Shirt Ultra",
    "slug": "fossil-formal-shirt-ultra-fossil",
    "price": 850,
    "originalPrice": 1275,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.6,
    "reviews": 707,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-28",
    "name": "USPA Formal Shirt Standard",
    "slug": "uspa-formal-shirt-standard-uspa",
    "price": 1360,
    "originalPrice": 2032,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.1,
    "reviews": 623,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-29",
    "name": "Skechers Formal Shirt Deluxe",
    "slug": "skechers-formal-shirt-deluxe-skechers",
    "price": 1280,
    "originalPrice": 1280,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.6,
    "reviews": 1271,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-30",
    "name": "Roadster Leather Belt Premium",
    "slug": "roadster-leather-belt-premium",
    "price": 1350,
    "originalPrice": 1788,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.6,
    "reviews": 1280,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "High-quality leather belt from Roadster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-31",
    "name": "Roadster Leather Belt",
    "slug": "roadster-leather-belt-roadster",
    "price": 720,
    "originalPrice": 720,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.8,
    "reviews": 469,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-32",
    "name": "HRX Leather Belt",
    "slug": "hrx-leather-belt-hrx",
    "price": 520,
    "originalPrice": 727,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.9,
    "reviews": 1250,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium leather belt from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-33",
    "name": "Ray-Ban Leather Belt Ultra",
    "slug": "ray-ban-leather-belt-ultra-ray-ban",
    "price": 1200,
    "originalPrice": 1337,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.1,
    "reviews": 570,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-34",
    "name": "Tommy Hilfiger Leather Belt Plus",
    "slug": "tommy-hilfiger-leather-belt-plus-tommy-hilfiger",
    "price": 480,
    "originalPrice": 597,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.1,
    "reviews": 642,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-35",
    "name": "Zara Sports Cap",
    "slug": "zara-sports-cap",
    "price": 400,
    "originalPrice": 513,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.5,
    "reviews": 1414,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "High-quality sports cap from Zara. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-36",
    "name": "Levi's Sports Cap Ultra",
    "slug": "levi-s-sports-cap-ultra-levi-s",
    "price": 250,
    "originalPrice": 309,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.4,
    "reviews": 327,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-37",
    "name": "Zara Sports Cap Elite",
    "slug": "zara-sports-cap-elite-zara",
    "price": 230,
    "originalPrice": 282,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.5,
    "reviews": 1147,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-38",
    "name": "HRX Sports Cap Elite",
    "slug": "hrx-sports-cap-elite-hrx",
    "price": 560,
    "originalPrice": 560,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.1,
    "reviews": 66,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium sports cap from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-39",
    "name": "Ray-Ban Sports Cap Pro",
    "slug": "ray-ban-sports-cap-pro-ray-ban",
    "price": 710,
    "originalPrice": 710,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4,
    "reviews": 871,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-40",
    "name": "Wildcraft Wrist Watch Elite",
    "slug": "wildcraft-wrist-watch-elite",
    "price": 4630,
    "originalPrice": 4630,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.7,
    "reviews": 1988,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "High-quality wrist watch from Wildcraft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-41",
    "name": "Zara Wrist Watch Standard",
    "slug": "zara-wrist-watch-standard-zara",
    "price": 3300,
    "originalPrice": 3300,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.1,
    "reviews": 421,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-42",
    "name": "H&M Wrist Watch",
    "slug": "h-m-wrist-watch-h-m",
    "price": 1180,
    "originalPrice": 1180,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.9,
    "reviews": 837,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-43",
    "name": "USPA Wrist Watch",
    "slug": "uspa-wrist-watch-uspa",
    "price": 2750,
    "originalPrice": 2750,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.1,
    "reviews": 1026,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-44",
    "name": "Fossil Wrist Watch Premium",
    "slug": "fossil-wrist-watch-premium-fossil",
    "price": 3290,
    "originalPrice": 4769,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.1,
    "reviews": 60,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-45",
    "name": "USPA Casual Shorts Deluxe",
    "slug": "uspa-casual-shorts-deluxe",
    "price": 570,
    "originalPrice": 570,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.6,
    "reviews": 1138,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "High-quality casual shorts from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-46",
    "name": "HRX Casual Shorts Premium",
    "slug": "hrx-casual-shorts-premium-hrx",
    "price": 1280,
    "originalPrice": 1415,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.8,
    "reviews": 699,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-47",
    "name": "Tommy Hilfiger Casual Shorts Premium",
    "slug": "tommy-hilfiger-casual-shorts-premium-tommy-hilfiger",
    "price": 1090,
    "originalPrice": 1090,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.5,
    "reviews": 1477,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-48",
    "name": "Roadster Casual Shorts Standard",
    "slug": "roadster-casual-shorts-standard-roadster",
    "price": 590,
    "originalPrice": 738,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.3,
    "reviews": 769,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-49",
    "name": "Fossil Casual Shorts Deluxe",
    "slug": "fossil-casual-shorts-deluxe-fossil",
    "price": 1100,
    "originalPrice": 1100,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.7,
    "reviews": 322,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-50",
    "name": "Roadster Winter Gloves Elite",
    "slug": "roadster-winter-gloves-elite",
    "price": 230,
    "originalPrice": 230,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.9,
    "reviews": 1794,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "High-quality winter gloves from Roadster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-51",
    "name": "Nike Winter Gloves Premium",
    "slug": "nike-winter-gloves-premium-nike",
    "price": 700,
    "originalPrice": 1110,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.8,
    "reviews": 1440,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-52",
    "name": "Diesel Winter Gloves Plus",
    "slug": "diesel-winter-gloves-plus-diesel",
    "price": 640,
    "originalPrice": 831,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.8,
    "reviews": 416,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-53",
    "name": "Skechers Winter Gloves Pro",
    "slug": "skechers-winter-gloves-pro-skechers",
    "price": 260,
    "originalPrice": 260,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 5,
    "reviews": 1331,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-54",
    "name": "Roadster Winter Gloves Plus",
    "slug": "roadster-winter-gloves-plus-roadster",
    "price": 770,
    "originalPrice": 859,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.8,
    "reviews": 1139,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-55",
    "name": "Wildcraft Sunglasses",
    "slug": "wildcraft-sunglasses",
    "price": 1840,
    "originalPrice": 2122,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.6,
    "reviews": 297,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "High-quality sunglasses from Wildcraft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-56",
    "name": "Diesel Sunglasses Premium",
    "slug": "diesel-sunglasses-premium-diesel",
    "price": 2850,
    "originalPrice": 3791,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.8,
    "reviews": 680,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-57",
    "name": "USPA Sunglasses Plus",
    "slug": "uspa-sunglasses-plus-uspa",
    "price": 1940,
    "originalPrice": 2383,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3,
    "reviews": 1223,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-58",
    "name": "H&M Sunglasses Standard",
    "slug": "h-m-sunglasses-standard-h-m",
    "price": 2630,
    "originalPrice": 3028,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.1,
    "reviews": 675,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-59",
    "name": "Tommy Hilfiger Sunglasses Plus",
    "slug": "tommy-hilfiger-sunglasses-plus-tommy-hilfiger",
    "price": 740,
    "originalPrice": 917,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.5,
    "reviews": 772,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-60",
    "name": "Roadster Sunglasses Premium",
    "slug": "roadster-sunglasses-premium-roadster",
    "price": 2580,
    "originalPrice": 2580,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.7,
    "reviews": 853,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-61",
    "name": "USPA Wallet RFID",
    "slug": "uspa-wallet-rfid",
    "price": 1920,
    "originalPrice": 2484,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.4,
    "reviews": 326,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "High-quality wallet rfid from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-62",
    "name": "Ray-Ban Wallet RFID Basic",
    "slug": "ray-ban-wallet-rfid-basic-ray-ban",
    "price": 1240,
    "originalPrice": 1240,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.5,
    "reviews": 1495,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-63",
    "name": "HRX Wallet RFID Basic",
    "slug": "hrx-wallet-rfid-basic-hrx",
    "price": 1560,
    "originalPrice": 2202,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.2,
    "reviews": 94,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-64",
    "name": "Roadster Wallet RFID Standard",
    "slug": "roadster-wallet-rfid-standard-roadster",
    "price": 430,
    "originalPrice": 430,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.9,
    "reviews": 169,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-65",
    "name": "Wildcraft Wallet RFID Ultra",
    "slug": "wildcraft-wallet-rfid-ultra-wildcraft",
    "price": 650,
    "originalPrice": 950,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.9,
    "reviews": 807,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-66",
    "name": "Tommy Hilfiger Wallet RFID Basic",
    "slug": "tommy-hilfiger-wallet-rfid-basic-tommy-hilfiger",
    "price": 430,
    "originalPrice": 581,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 5,
    "reviews": 195,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-67",
    "name": "HRX Wallet RFID Deluxe",
    "slug": "hrx-wallet-rfid-deluxe-hrx",
    "price": 1740,
    "originalPrice": 1740,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3,
    "reviews": 569,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-1",
    "name": "Milton Non-Stick Tawa Elite",
    "slug": "milton-non-stick-tawa-elite",
    "price": 1170,
    "originalPrice": 1170,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.4,
    "reviews": 1689,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "High-quality non-stick tawa from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-2",
    "name": "Cello Non-Stick Tawa Ultra",
    "slug": "cello-non-stick-tawa-ultra-cello",
    "price": 650,
    "originalPrice": 650,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.8,
    "reviews": 881,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-3",
    "name": "Vidiem Non-Stick Tawa Basic",
    "slug": "vidiem-non-stick-tawa-basic-vidiem",
    "price": 1230,
    "originalPrice": 1412,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.2,
    "reviews": 1344,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-4",
    "name": "Milton Non-Stick Tawa Standard",
    "slug": "milton-non-stick-tawa-standard-milton",
    "price": 800,
    "originalPrice": 800,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.7,
    "reviews": 28,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-5",
    "name": "Signoraware Non-Stick Tawa Pro",
    "slug": "signoraware-non-stick-tawa-pro-signoraware",
    "price": 520,
    "originalPrice": 831,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4,
    "reviews": 314,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-6",
    "name": "Milton Non-Stick Tawa Ultra",
    "slug": "milton-non-stick-tawa-ultra-milton",
    "price": 1260,
    "originalPrice": 1260,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.5,
    "reviews": 968,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-7",
    "name": "Vidiem Non-Stick Tawa Deluxe",
    "slug": "vidiem-non-stick-tawa-deluxe-vidiem",
    "price": 1320,
    "originalPrice": 1320,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.7,
    "reviews": 60,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-8",
    "name": "Vidiem Microwave Safe Bowl Set Basic",
    "slug": "vidiem-microwave-safe-bowl-set-basic",
    "price": 620,
    "originalPrice": 620,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.1,
    "reviews": 1760,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality microwave safe bowl set from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-9",
    "name": "Butterfly Microwave Safe Bowl Set",
    "slug": "butterfly-microwave-safe-bowl-set-butterfly",
    "price": 580,
    "originalPrice": 580,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.2,
    "reviews": 244,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-10",
    "name": "Milton Microwave Safe Bowl Set Standard",
    "slug": "milton-microwave-safe-bowl-set-standard-milton",
    "price": 270,
    "originalPrice": 328,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.8,
    "reviews": 182,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-11",
    "name": "Hawkins Microwave Safe Bowl Set Basic",
    "slug": "hawkins-microwave-safe-bowl-set-basic-hawkins",
    "price": 220,
    "originalPrice": 220,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.8,
    "reviews": 1219,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-12",
    "name": "Signoraware Microwave Safe Bowl Set",
    "slug": "signoraware-microwave-safe-bowl-set-signoraware",
    "price": 660,
    "originalPrice": 660,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.6,
    "reviews": 106,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-13",
    "name": "Vidiem Vegetable Chopper",
    "slug": "vidiem-vegetable-chopper",
    "price": 350,
    "originalPrice": 350,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.5,
    "reviews": 1870,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality vegetable chopper from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-14",
    "name": "Prestige Vegetable Chopper Plus",
    "slug": "prestige-vegetable-chopper-plus-prestige",
    "price": 260,
    "originalPrice": 318,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.8,
    "reviews": 984,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-15",
    "name": "Butterfly Vegetable Chopper Basic",
    "slug": "butterfly-vegetable-chopper-basic-butterfly",
    "price": 480,
    "originalPrice": 666,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.3,
    "reviews": 1260,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-16",
    "name": "Butterfly Vegetable Chopper Standard",
    "slug": "butterfly-vegetable-chopper-standard-butterfly",
    "price": 320,
    "originalPrice": 365,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.1,
    "reviews": 728,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-17",
    "name": "Cello Vegetable Chopper Premium",
    "slug": "cello-vegetable-chopper-premium-cello",
    "price": 500,
    "originalPrice": 787,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 5,
    "reviews": 1096,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-18",
    "name": "Milton Vegetable Chopper Plus",
    "slug": "milton-vegetable-chopper-plus-milton",
    "price": 710,
    "originalPrice": 1075,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.2,
    "reviews": 578,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-19",
    "name": "Wakefit Spice Rack Basic",
    "slug": "wakefit-spice-rack-basic",
    "price": 440,
    "originalPrice": 627,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.1,
    "reviews": 139,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality spice rack from Wakefit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-20",
    "name": "Hawkins Spice Rack Basic",
    "slug": "hawkins-spice-rack-basic-hawkins",
    "price": 770,
    "originalPrice": 770,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.9,
    "reviews": 585,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-21",
    "name": "Borosil Spice Rack Deluxe",
    "slug": "borosil-spice-rack-deluxe-borosil",
    "price": 670,
    "originalPrice": 950,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.8,
    "reviews": 58,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-22",
    "name": "Butterfly Spice Rack Standard",
    "slug": "butterfly-spice-rack-standard-butterfly",
    "price": 520,
    "originalPrice": 628,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.4,
    "reviews": 448,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-23",
    "name": "Wakefit Spice Rack Deluxe",
    "slug": "wakefit-spice-rack-deluxe-wakefit",
    "price": 710,
    "originalPrice": 710,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.2,
    "reviews": 648,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-24",
    "name": "Signoraware Spice Rack Pro",
    "slug": "signoraware-spice-rack-pro-signoraware",
    "price": 430,
    "originalPrice": 619,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.7,
    "reviews": 1111,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-25",
    "name": "Hawkins Tumbler Glass Set Basic",
    "slug": "hawkins-tumbler-glass-set-basic",
    "price": 210,
    "originalPrice": 310,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.9,
    "reviews": 319,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality tumbler glass set from Hawkins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-26",
    "name": "Wakefit Tumbler Glass Set Elite",
    "slug": "wakefit-tumbler-glass-set-elite-wakefit",
    "price": 360,
    "originalPrice": 411,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 5,
    "reviews": 1380,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-27",
    "name": "Vidiem Tumbler Glass Set Premium",
    "slug": "vidiem-tumbler-glass-set-premium-vidiem",
    "price": 440,
    "originalPrice": 588,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.8,
    "reviews": 53,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-28",
    "name": "Borosil Tumbler Glass Set Plus",
    "slug": "borosil-tumbler-glass-set-plus-borosil",
    "price": 560,
    "originalPrice": 560,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4,
    "reviews": 725,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-29",
    "name": "Borosil Tumbler Glass Set Elite",
    "slug": "borosil-tumbler-glass-set-elite-borosil",
    "price": 340,
    "originalPrice": 340,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.3,
    "reviews": 293,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-30",
    "name": "Butterfly Tumbler Glass Set Standard",
    "slug": "butterfly-tumbler-glass-set-standard-butterfly",
    "price": 290,
    "originalPrice": 353,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.7,
    "reviews": 670,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-31",
    "name": "Pigeon Kitchen Tongs Elite",
    "slug": "pigeon-kitchen-tongs-elite",
    "price": 370,
    "originalPrice": 370,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.8,
    "reviews": 1660,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality kitchen tongs from Pigeon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-32",
    "name": "Hawkins Kitchen Tongs Standard",
    "slug": "hawkins-kitchen-tongs-standard-hawkins",
    "price": 360,
    "originalPrice": 416,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.6,
    "reviews": 1122,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-33",
    "name": "Signoraware Kitchen Tongs Basic",
    "slug": "signoraware-kitchen-tongs-basic-signoraware",
    "price": 270,
    "originalPrice": 356,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.3,
    "reviews": 435,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-34",
    "name": "Butterfly Kitchen Tongs",
    "slug": "butterfly-kitchen-tongs-butterfly",
    "price": 170,
    "originalPrice": 209,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.7,
    "reviews": 1264,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-35",
    "name": "Borosil Kitchen Tongs Basic",
    "slug": "borosil-kitchen-tongs-basic-borosil",
    "price": 290,
    "originalPrice": 290,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.4,
    "reviews": 1201,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-36",
    "name": "Pigeon Dinner Plate Set Basic",
    "slug": "pigeon-dinner-plate-set-basic",
    "price": 460,
    "originalPrice": 590,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.5,
    "reviews": 1368,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "High-quality dinner plate set from Pigeon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-37",
    "name": "Milton Dinner Plate Set Standard",
    "slug": "milton-dinner-plate-set-standard-milton",
    "price": 980,
    "originalPrice": 980,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.3,
    "reviews": 903,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-38",
    "name": "Borosil Dinner Plate Set Premium",
    "slug": "borosil-dinner-plate-set-premium-borosil",
    "price": 1730,
    "originalPrice": 2121,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4,
    "reviews": 956,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-39",
    "name": "Cello Dinner Plate Set Elite",
    "slug": "cello-dinner-plate-set-elite-cello",
    "price": 690,
    "originalPrice": 690,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.8,
    "reviews": 410,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-40",
    "name": "Butterfly Dinner Plate Set Deluxe",
    "slug": "butterfly-dinner-plate-set-deluxe-butterfly",
    "price": 1230,
    "originalPrice": 1230,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.2,
    "reviews": 45,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-41",
    "name": "Vidiem Storage Jar Set Elite",
    "slug": "vidiem-storage-jar-set-elite",
    "price": 560,
    "originalPrice": 711,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.2,
    "reviews": 1282,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality storage jar set from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-42",
    "name": "Prestige Storage Jar Set Premium",
    "slug": "prestige-storage-jar-set-premium-prestige",
    "price": 740,
    "originalPrice": 1136,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.8,
    "reviews": 257,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-43",
    "name": "Cello Storage Jar Set Premium",
    "slug": "cello-storage-jar-set-premium-cello",
    "price": 540,
    "originalPrice": 540,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.5,
    "reviews": 1239,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-44",
    "name": "Milton Storage Jar Set Premium",
    "slug": "milton-storage-jar-set-premium-milton",
    "price": 430,
    "originalPrice": 430,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.2,
    "reviews": 112,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-45",
    "name": "Cello Storage Jar Set Ultra",
    "slug": "cello-storage-jar-set-ultra-cello",
    "price": 700,
    "originalPrice": 1036,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4,
    "reviews": 188,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-46",
    "name": "Milton Storage Jar Set Pro",
    "slug": "milton-storage-jar-set-pro-milton",
    "price": 280,
    "originalPrice": 280,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.5,
    "reviews": 724,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-47",
    "name": "Cello Mop Floor Cleaner Premium",
    "slug": "cello-mop-floor-cleaner-premium",
    "price": 470,
    "originalPrice": 470,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.7,
    "reviews": 1560,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality mop floor cleaner from Cello. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-48",
    "name": "Butterfly Mop Floor Cleaner Pro",
    "slug": "butterfly-mop-floor-cleaner-pro-butterfly",
    "price": 600,
    "originalPrice": 839,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.1,
    "reviews": 365,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-49",
    "name": "Milton Mop Floor Cleaner Pro",
    "slug": "milton-mop-floor-cleaner-pro-milton",
    "price": 730,
    "originalPrice": 730,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4,
    "reviews": 1202,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-50",
    "name": "Prestige Mop Floor Cleaner Basic",
    "slug": "prestige-mop-floor-cleaner-basic-prestige",
    "price": 630,
    "originalPrice": 720,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.5,
    "reviews": 200,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-51",
    "name": "Pigeon Mop Floor Cleaner Elite",
    "slug": "pigeon-mop-floor-cleaner-elite-pigeon",
    "price": 360,
    "originalPrice": 360,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.8,
    "reviews": 671,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-52",
    "name": "Borosil Clothes Hanger Set Premium",
    "slug": "borosil-clothes-hanger-set-premium",
    "price": 490,
    "originalPrice": 490,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.2,
    "reviews": 850,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "High-quality clothes hanger set from Borosil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-53",
    "name": "Prestige Clothes Hanger Set Plus",
    "slug": "prestige-clothes-hanger-set-plus-prestige",
    "price": 430,
    "originalPrice": 430,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.4,
    "reviews": 416,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-54",
    "name": "Milton Clothes Hanger Set Pro",
    "slug": "milton-clothes-hanger-set-pro-milton",
    "price": 180,
    "originalPrice": 248,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.1,
    "reviews": 1281,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-55",
    "name": "Wakefit Clothes Hanger Set Premium",
    "slug": "wakefit-clothes-hanger-set-premium-wakefit",
    "price": 310,
    "originalPrice": 397,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.4,
    "reviews": 1175,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-56",
    "name": "Pigeon Clothes Hanger Set Premium",
    "slug": "pigeon-clothes-hanger-set-premium-pigeon",
    "price": 230,
    "originalPrice": 230,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.1,
    "reviews": 47,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-57",
    "name": "Prestige Clothes Hanger Set Elite",
    "slug": "prestige-clothes-hanger-set-elite-prestige",
    "price": 330,
    "originalPrice": 459,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.4,
    "reviews": 253,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-58",
    "name": "Milton Door Mat Basic",
    "slug": "milton-door-mat-basic",
    "price": 370,
    "originalPrice": 370,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.6,
    "reviews": 1432,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality door mat from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-59",
    "name": "Wakefit Door Mat Ultra",
    "slug": "wakefit-door-mat-ultra-wakefit",
    "price": 180,
    "originalPrice": 258,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.9,
    "reviews": 1265,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium door mat from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-60",
    "name": "Butterfly Door Mat Deluxe",
    "slug": "butterfly-door-mat-deluxe-butterfly",
    "price": 200,
    "originalPrice": 229,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.5,
    "reviews": 1279,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium door mat from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-61",
    "name": "Hawkins Door Mat Premium",
    "slug": "hawkins-door-mat-premium-hawkins",
    "price": 460,
    "originalPrice": 577,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4,
    "reviews": 112,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium door mat from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-62",
    "name": "Wakefit Door Mat Premium",
    "slug": "wakefit-door-mat-premium-wakefit",
    "price": 370,
    "originalPrice": 370,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4,
    "reviews": 1401,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium door mat from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-63",
    "name": "Vidiem Cushion Cover Set Plus",
    "slug": "vidiem-cushion-cover-set-plus",
    "price": 660,
    "originalPrice": 660,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.7,
    "reviews": 55,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "High-quality cushion cover set from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-64",
    "name": "Borosil Cushion Cover Set Premium",
    "slug": "borosil-cushion-cover-set-premium-borosil",
    "price": 310,
    "originalPrice": 360,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.7,
    "reviews": 27,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-65",
    "name": "Milton Cushion Cover Set Standard",
    "slug": "milton-cushion-cover-set-standard-milton",
    "price": 610,
    "originalPrice": 918,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.4,
    "reviews": 725,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-66",
    "name": "Wakefit Cushion Cover Set Premium",
    "slug": "wakefit-cushion-cover-set-premium-wakefit",
    "price": 290,
    "originalPrice": 421,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.2,
    "reviews": 894,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-67",
    "name": "Vidiem Cushion Cover Set Ultra",
    "slug": "vidiem-cushion-cover-set-ultra-vidiem",
    "price": 330,
    "originalPrice": 402,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.1,
    "reviews": 1110,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-68",
    "name": "Butterfly Cushion Cover Set Standard",
    "slug": "butterfly-cushion-cover-set-standard-butterfly",
    "price": 300,
    "originalPrice": 414,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.8,
    "reviews": 932,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-1",
    "name": "Scholastic Fiction Bestseller Plus",
    "slug": "scholastic-fiction-bestseller-plus",
    "price": 550,
    "originalPrice": 784,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4,
    "reviews": 1351,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "High-quality fiction bestseller from Scholastic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-2",
    "name": "Simon & Schuster Fiction Bestseller Pro",
    "slug": "simon-schuster-fiction-bestseller-pro-simon-schuster",
    "price": 770,
    "originalPrice": 1198,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.8,
    "reviews": 78,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-3",
    "name": "Oxford Fiction Bestseller",
    "slug": "oxford-fiction-bestseller-oxford",
    "price": 430,
    "originalPrice": 430,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.7,
    "reviews": 1001,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-4",
    "name": "Bloomsbury Fiction Bestseller Pro",
    "slug": "bloomsbury-fiction-bestseller-pro-bloomsbury",
    "price": 450,
    "originalPrice": 670,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.7,
    "reviews": 944,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-5",
    "name": "Scholastic Fiction Bestseller Deluxe",
    "slug": "scholastic-fiction-bestseller-deluxe-scholastic",
    "price": 230,
    "originalPrice": 308,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.8,
    "reviews": 1393,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-6",
    "name": "Aleph Fiction Bestseller Plus",
    "slug": "aleph-fiction-bestseller-plus-aleph",
    "price": 480,
    "originalPrice": 677,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.9,
    "reviews": 171,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-7",
    "name": "Penguin Self-Help Guide Deluxe",
    "slug": "penguin-self-help-guide-deluxe",
    "price": 330,
    "originalPrice": 399,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.4,
    "reviews": 1058,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "High-quality self-help guide from Penguin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-8",
    "name": "Puffin Self-Help Guide Elite",
    "slug": "puffin-self-help-guide-elite-puffin",
    "price": 320,
    "originalPrice": 320,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.8,
    "reviews": 1370,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-9",
    "name": "Bloomsbury Self-Help Guide Basic",
    "slug": "bloomsbury-self-help-guide-basic-bloomsbury",
    "price": 350,
    "originalPrice": 350,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.7,
    "reviews": 1411,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-10",
    "name": "Oxford Self-Help Guide Basic",
    "slug": "oxford-self-help-guide-basic-oxford",
    "price": 250,
    "originalPrice": 371,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.7,
    "reviews": 165,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-11",
    "name": "Oxford Self-Help Guide Premium",
    "slug": "oxford-self-help-guide-premium-oxford",
    "price": 250,
    "originalPrice": 276,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.3,
    "reviews": 527,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-12",
    "name": "Penguin Self-Help Guide Plus",
    "slug": "penguin-self-help-guide-plus-penguin",
    "price": 570,
    "originalPrice": 630,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.3,
    "reviews": 690,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-13",
    "name": "Rupa Indian History Book Basic",
    "slug": "rupa-indian-history-book-basic",
    "price": 400,
    "originalPrice": 488,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.7,
    "reviews": 304,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "High-quality indian history book from Rupa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-14",
    "name": "Puffin Indian History Book Elite",
    "slug": "puffin-indian-history-book-elite-puffin",
    "price": 750,
    "originalPrice": 1120,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.5,
    "reviews": 1265,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-15",
    "name": "Penguin Indian History Book Basic",
    "slug": "penguin-indian-history-book-basic-penguin",
    "price": 590,
    "originalPrice": 773,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.8,
    "reviews": 241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-16",
    "name": "Simon & Schuster Indian History Book Deluxe",
    "slug": "simon-schuster-indian-history-book-deluxe-simon-schuster",
    "price": 530,
    "originalPrice": 601,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.7,
    "reviews": 500,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-17",
    "name": "Puffin Indian History Book Standard",
    "slug": "puffin-indian-history-book-standard-puffin",
    "price": 400,
    "originalPrice": 400,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.4,
    "reviews": 854,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-18",
    "name": "Simon & Schuster Children Storybook Plus",
    "slug": "simon-schuster-children-storybook-plus",
    "price": 160,
    "originalPrice": 160,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.1,
    "reviews": 1844,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "High-quality children storybook from Simon & Schuster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-19",
    "name": "Oxford Children Storybook Pro",
    "slug": "oxford-children-storybook-pro-oxford",
    "price": 390,
    "originalPrice": 599,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.6,
    "reviews": 1040,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-20",
    "name": "Scholastic Children Storybook Plus",
    "slug": "scholastic-children-storybook-plus-scholastic",
    "price": 480,
    "originalPrice": 587,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.2,
    "reviews": 207,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-21",
    "name": "Oxford Children Storybook Premium",
    "slug": "oxford-children-storybook-premium-oxford",
    "price": 350,
    "originalPrice": 420,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.4,
    "reviews": 503,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-22",
    "name": "HarperCollins Children Storybook Premium",
    "slug": "harpercollins-children-storybook-premium-harpercollins",
    "price": 160,
    "originalPrice": 160,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.4,
    "reviews": 38,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium children storybook from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-23",
    "name": "Penguin Children Storybook Ultra",
    "slug": "penguin-children-storybook-ultra-penguin",
    "price": 390,
    "originalPrice": 390,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.3,
    "reviews": 344,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-24",
    "name": "Aleph Children Storybook Premium",
    "slug": "aleph-children-storybook-premium-aleph",
    "price": 300,
    "originalPrice": 446,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.3,
    "reviews": 409,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-25",
    "name": "Rupa Cooking Recipe Book Basic",
    "slug": "rupa-cooking-recipe-book-basic",
    "price": 370,
    "originalPrice": 370,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.7,
    "reviews": 1939,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "High-quality cooking recipe book from Rupa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-26",
    "name": "Bloomsbury Cooking Recipe Book Plus",
    "slug": "bloomsbury-cooking-recipe-book-plus-bloomsbury",
    "price": 770,
    "originalPrice": 850,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.1,
    "reviews": 1099,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-27",
    "name": "Random House Cooking Recipe Book Pro",
    "slug": "random-house-cooking-recipe-book-pro-random-house",
    "price": 420,
    "originalPrice": 561,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.7,
    "reviews": 624,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-28",
    "name": "Puffin Cooking Recipe Book Basic",
    "slug": "puffin-cooking-recipe-book-basic-puffin",
    "price": 540,
    "originalPrice": 540,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.6,
    "reviews": 697,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-29",
    "name": "Bloomsbury Cooking Recipe Book Ultra",
    "slug": "bloomsbury-cooking-recipe-book-ultra-bloomsbury",
    "price": 710,
    "originalPrice": 1016,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.3,
    "reviews": 445,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-30",
    "name": "Scholastic Exam Guide Deluxe",
    "slug": "scholastic-exam-guide-deluxe",
    "price": 410,
    "originalPrice": 410,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.5,
    "reviews": 975,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "High-quality exam guide from Scholastic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "bo-31",
    "name": "Puffin Exam Guide Premium",
    "slug": "puffin-exam-guide-premium-puffin",
    "price": 530,
    "originalPrice": 530,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3,
    "reviews": 1338,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-32",
    "name": "Scholastic Exam Guide Pro",
    "slug": "scholastic-exam-guide-pro-scholastic",
    "price": 480,
    "originalPrice": 480,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.3,
    "reviews": 438,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-33",
    "name": "Aleph Exam Guide",
    "slug": "aleph-exam-guide-aleph",
    "price": 570,
    "originalPrice": 570,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.9,
    "reviews": 24,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-34",
    "name": "Puffin Exam Guide",
    "slug": "puffin-exam-guide-puffin",
    "price": 470,
    "originalPrice": 565,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.7,
    "reviews": 1250,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-35",
    "name": "Random House Art Sketchbook Pro",
    "slug": "random-house-art-sketchbook-pro",
    "price": 180,
    "originalPrice": 180,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 5,
    "reviews": 44,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality art sketchbook from Random House. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-36",
    "name": "Oxford Art Sketchbook Premium",
    "slug": "oxford-art-sketchbook-premium-oxford",
    "price": 220,
    "originalPrice": 220,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.9,
    "reviews": 1391,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-37",
    "name": "Rupa Art Sketchbook Standard",
    "slug": "rupa-art-sketchbook-standard-rupa",
    "price": 460,
    "originalPrice": 460,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.9,
    "reviews": 1181,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-38",
    "name": "HarperCollins Art Sketchbook Ultra",
    "slug": "harpercollins-art-sketchbook-ultra-harpercollins",
    "price": 410,
    "originalPrice": 526,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.7,
    "reviews": 461,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-39",
    "name": "Puffin Art Sketchbook Standard",
    "slug": "puffin-art-sketchbook-standard-puffin",
    "price": 410,
    "originalPrice": 489,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.1,
    "reviews": 1320,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-40",
    "name": "Rupa Art Sketchbook Premium",
    "slug": "rupa-art-sketchbook-premium-rupa",
    "price": 190,
    "originalPrice": 190,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.1,
    "reviews": 496,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-41",
    "name": "Penguin Fountain Pen Ultra",
    "slug": "penguin-fountain-pen-ultra",
    "price": 930,
    "originalPrice": 930,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.7,
    "reviews": 534,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality fountain pen from Penguin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-42",
    "name": "Rupa Fountain Pen Premium",
    "slug": "rupa-fountain-pen-premium-rupa",
    "price": 260,
    "originalPrice": 352,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.5,
    "reviews": 792,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-43",
    "name": "Puffin Fountain Pen",
    "slug": "puffin-fountain-pen-puffin",
    "price": 900,
    "originalPrice": 900,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.9,
    "reviews": 775,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-44",
    "name": "Random House Fountain Pen Pro",
    "slug": "random-house-fountain-pen-pro-random-house",
    "price": 1240,
    "originalPrice": 1240,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.6,
    "reviews": 268,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-45",
    "name": "Random House Fountain Pen Ultra",
    "slug": "random-house-fountain-pen-ultra-random-house",
    "price": 1020,
    "originalPrice": 1153,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.3,
    "reviews": 901,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-46",
    "name": "Simon & Schuster Fountain Pen Pro",
    "slug": "simon-schuster-fountain-pen-pro-simon-schuster",
    "price": 920,
    "originalPrice": 920,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.8,
    "reviews": 768,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-47",
    "name": "Aleph Gift Wrapping Set Premium",
    "slug": "aleph-gift-wrapping-set-premium",
    "price": 120,
    "originalPrice": 120,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4,
    "reviews": 1893,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "High-quality gift wrapping set from Aleph. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-48",
    "name": "Rupa Gift Wrapping Set Ultra",
    "slug": "rupa-gift-wrapping-set-ultra-rupa",
    "price": 390,
    "originalPrice": 457,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3.6,
    "reviews": 715,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-49",
    "name": "Random House Gift Wrapping Set Pro",
    "slug": "random-house-gift-wrapping-set-pro-random-house",
    "price": 140,
    "originalPrice": 206,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.4,
    "reviews": 71,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-50",
    "name": "Aleph Gift Wrapping Set Plus",
    "slug": "aleph-gift-wrapping-set-plus-aleph",
    "price": 160,
    "originalPrice": 211,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3.2,
    "reviews": 1447,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-51",
    "name": "Simon & Schuster Gift Wrapping Set Plus",
    "slug": "simon-schuster-gift-wrapping-set-plus-simon-schuster",
    "price": 360,
    "originalPrice": 360,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.2,
    "reviews": 50,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-52",
    "name": "Random House Gift Wrapping Set Ultra",
    "slug": "random-house-gift-wrapping-set-ultra-random-house",
    "price": 230,
    "originalPrice": 285,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3.8,
    "reviews": 1414,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-53",
    "name": "Penguin Gift Wrapping Set Pro",
    "slug": "penguin-gift-wrapping-set-pro-penguin",
    "price": 280,
    "originalPrice": 280,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3,
    "reviews": 356,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-1",
    "name": "Adidas Skipping Rope Standard",
    "slug": "adidas-skipping-rope-standard",
    "price": 350,
    "originalPrice": 350,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.9,
    "reviews": 327,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "High-quality skipping rope from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-2",
    "name": "Cosco Skipping Rope Basic",
    "slug": "cosco-skipping-rope-basic-cosco",
    "price": 300,
    "originalPrice": 300,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4,
    "reviews": 1245,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-3",
    "name": "Puma Skipping Rope Premium",
    "slug": "puma-skipping-rope-premium-puma",
    "price": 390,
    "originalPrice": 390,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4,
    "reviews": 1301,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-4",
    "name": "Decathlon Skipping Rope Premium",
    "slug": "decathlon-skipping-rope-premium-decathlon",
    "price": 150,
    "originalPrice": 150,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.2,
    "reviews": 123,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-5",
    "name": "Cosco Skipping Rope",
    "slug": "cosco-skipping-rope-cosco",
    "price": 250,
    "originalPrice": 281,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4,
    "reviews": 186,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-6",
    "name": "Decathlon Skipping Rope Deluxe",
    "slug": "decathlon-skipping-rope-deluxe-decathlon",
    "price": 190,
    "originalPrice": 301,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.4,
    "reviews": 1494,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-7",
    "name": "Cosco Skipping Rope Deluxe",
    "slug": "cosco-skipping-rope-deluxe-cosco",
    "price": 160,
    "originalPrice": 241,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.2,
    "reviews": 1494,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-8",
    "name": "Decathlon Push Up Stand Pro",
    "slug": "decathlon-push-up-stand-pro",
    "price": 690,
    "originalPrice": 690,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.7,
    "reviews": 1363,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "High-quality push up stand from Decathlon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-9",
    "name": "Strauss Push Up Stand Deluxe",
    "slug": "strauss-push-up-stand-deluxe-strauss",
    "price": 680,
    "originalPrice": 832,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.1,
    "reviews": 684,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-10",
    "name": "Puma Push Up Stand Ultra",
    "slug": "puma-push-up-stand-ultra-puma",
    "price": 730,
    "originalPrice": 819,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.3,
    "reviews": 294,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-11",
    "name": "Speed Push Up Stand Premium",
    "slug": "speed-push-up-stand-premium-speed",
    "price": 570,
    "originalPrice": 886,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.3,
    "reviews": 283,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-12",
    "name": "Decathlon Push Up Stand Plus",
    "slug": "decathlon-push-up-stand-plus-decathlon",
    "price": 750,
    "originalPrice": 750,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.4,
    "reviews": 646,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-13",
    "name": "Strauss Ab Roller Wheel Basic",
    "slug": "strauss-ab-roller-wheel-basic",
    "price": 240,
    "originalPrice": 362,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.5,
    "reviews": 678,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "High-quality ab roller wheel from Strauss. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-14",
    "name": "BSN Ab Roller Wheel Premium",
    "slug": "bsn-ab-roller-wheel-premium-bsn",
    "price": 510,
    "originalPrice": 605,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.1,
    "reviews": 1228,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-15",
    "name": "Adidas Ab Roller Wheel Plus",
    "slug": "adidas-ab-roller-wheel-plus-adidas",
    "price": 300,
    "originalPrice": 384,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.6,
    "reviews": 697,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-16",
    "name": "Strauss Ab Roller Wheel Deluxe",
    "slug": "strauss-ab-roller-wheel-deluxe-strauss",
    "price": 260,
    "originalPrice": 384,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.2,
    "reviews": 330,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-17",
    "name": "Speed Ab Roller Wheel Deluxe",
    "slug": "speed-ab-roller-wheel-deluxe-speed",
    "price": 240,
    "originalPrice": 240,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4,
    "reviews": 1027,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-18",
    "name": "Proff Ab Roller Wheel Elite",
    "slug": "proff-ab-roller-wheel-elite-proff",
    "price": 350,
    "originalPrice": 350,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.1,
    "reviews": 615,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-19",
    "name": "Cosco Hand Grip Strengthener Ultra",
    "slug": "cosco-hand-grip-strengthener-ultra",
    "price": 130,
    "originalPrice": 153,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 5,
    "reviews": 1252,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "High-quality hand grip strengthener from Cosco. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-20",
    "name": "Cosco Hand Grip Strengthener Plus",
    "slug": "cosco-hand-grip-strengthener-plus-cosco",
    "price": 330,
    "originalPrice": 330,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.3,
    "reviews": 1182,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-21",
    "name": "Decathlon Hand Grip Strengthener",
    "slug": "decathlon-hand-grip-strengthener-decathlon",
    "price": 250,
    "originalPrice": 250,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.3,
    "reviews": 1442,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-22",
    "name": "BSN Hand Grip Strengthener",
    "slug": "bsn-hand-grip-strengthener-bsn",
    "price": 350,
    "originalPrice": 449,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.4,
    "reviews": 1048,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-23",
    "name": "Proff Hand Grip Strengthener",
    "slug": "proff-hand-grip-strengthener-proff",
    "price": 260,
    "originalPrice": 402,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.1,
    "reviews": 973,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-24",
    "name": "Decathlon Hand Grip Strengthener Ultra",
    "slug": "decathlon-hand-grip-strengthener-ultra-decathlon",
    "price": 260,
    "originalPrice": 326,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.8,
    "reviews": 1332,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-25",
    "name": "Puma Tennis Ball Set Deluxe",
    "slug": "puma-tennis-ball-set-deluxe",
    "price": 340,
    "originalPrice": 498,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.7,
    "reviews": 1938,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "High-quality tennis ball set from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-26",
    "name": "Strauss Tennis Ball Set Pro",
    "slug": "strauss-tennis-ball-set-pro-strauss",
    "price": 400,
    "originalPrice": 569,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.5,
    "reviews": 979,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-27",
    "name": "Puma Tennis Ball Set Basic",
    "slug": "puma-tennis-ball-set-basic-puma",
    "price": 210,
    "originalPrice": 317,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.4,
    "reviews": 75,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-28",
    "name": "Adidas Tennis Ball Set Standard",
    "slug": "adidas-tennis-ball-set-standard-adidas",
    "price": 360,
    "originalPrice": 405,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.2,
    "reviews": 630,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-29",
    "name": "Decathlon Tennis Ball Set",
    "slug": "decathlon-tennis-ball-set-decathlon",
    "price": 520,
    "originalPrice": 774,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.6,
    "reviews": 146,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-30",
    "name": "Speed Tennis Ball Set Plus",
    "slug": "speed-tennis-ball-set-plus-speed",
    "price": 290,
    "originalPrice": 400,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4,
    "reviews": 337,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-31",
    "name": "Fitkit Badminton Racket Ultra",
    "slug": "fitkit-badminton-racket-ultra",
    "price": 340,
    "originalPrice": 340,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.6,
    "reviews": 772,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "High-quality badminton racket from Fitkit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-32",
    "name": "Puma Badminton Racket Pro",
    "slug": "puma-badminton-racket-pro-puma",
    "price": 1140,
    "originalPrice": 1491,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.7,
    "reviews": 650,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-33",
    "name": "Adidas Badminton Racket Premium",
    "slug": "adidas-badminton-racket-premium-adidas",
    "price": 1930,
    "originalPrice": 1930,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.6,
    "reviews": 1504,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-34",
    "name": "Strauss Badminton Racket Premium",
    "slug": "strauss-badminton-racket-premium-strauss",
    "price": 1060,
    "originalPrice": 1308,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.9,
    "reviews": 79,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-35",
    "name": "Speed Badminton Racket Ultra",
    "slug": "speed-badminton-racket-ultra-speed",
    "price": 1540,
    "originalPrice": 2411,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.7,
    "reviews": 956,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-36",
    "name": "Fitkit Badminton Racket Deluxe",
    "slug": "fitkit-badminton-racket-deluxe-fitkit",
    "price": 1010,
    "originalPrice": 1510,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.8,
    "reviews": 150,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-37",
    "name": "Fitkit Badminton Racket Premium",
    "slug": "fitkit-badminton-racket-premium-fitkit",
    "price": 1370,
    "originalPrice": 1370,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.4,
    "reviews": 478,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-38",
    "name": "Cosco Cricket Bat Ultra",
    "slug": "cosco-cricket-bat-ultra",
    "price": 2900,
    "originalPrice": 3606,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.9,
    "reviews": 699,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "High-quality cricket bat from Cosco. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-39",
    "name": "Strauss Cricket Bat Standard",
    "slug": "strauss-cricket-bat-standard-strauss",
    "price": 1250,
    "originalPrice": 1986,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.3,
    "reviews": 221,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-40",
    "name": "Adidas Cricket Bat Pro",
    "slug": "adidas-cricket-bat-pro-adidas",
    "price": 1520,
    "originalPrice": 1520,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.6,
    "reviews": 1493,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-41",
    "name": "Proff Cricket Bat Pro",
    "slug": "proff-cricket-bat-pro-proff",
    "price": 2120,
    "originalPrice": 2902,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.1,
    "reviews": 321,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-42",
    "name": "Proff Cricket Bat Elite",
    "slug": "proff-cricket-bat-elite-proff",
    "price": 2570,
    "originalPrice": 2953,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.3,
    "reviews": 1217,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-43",
    "name": "BSN Yoga Block Set Elite",
    "slug": "bsn-yoga-block-set-elite",
    "price": 350,
    "originalPrice": 350,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.6,
    "reviews": 760,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "High-quality yoga block set from BSN. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-44",
    "name": "Adidas Yoga Block Set Pro",
    "slug": "adidas-yoga-block-set-pro-adidas",
    "price": 370,
    "originalPrice": 370,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.5,
    "reviews": 1100,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-45",
    "name": "Adidas Yoga Block Set Standard",
    "slug": "adidas-yoga-block-set-standard-adidas",
    "price": 310,
    "originalPrice": 410,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.2,
    "reviews": 1204,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-46",
    "name": "Puma Yoga Block Set Basic",
    "slug": "puma-yoga-block-set-basic-puma",
    "price": 330,
    "originalPrice": 330,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.3,
    "reviews": 1431,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-47",
    "name": "Adidas Yoga Block Set Premium",
    "slug": "adidas-yoga-block-set-premium-adidas",
    "price": 320,
    "originalPrice": 395,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.7,
    "reviews": 223,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-48",
    "name": "Decathlon Yoga Block Set Basic",
    "slug": "decathlon-yoga-block-set-basic-decathlon",
    "price": 520,
    "originalPrice": 520,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.5,
    "reviews": 961,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-49",
    "name": "Adidas Cycling Water Bottle Basic",
    "slug": "adidas-cycling-water-bottle-basic",
    "price": 460,
    "originalPrice": 460,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.5,
    "reviews": 1839,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality cycling water bottle from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-50",
    "name": "Adidas Cycling Water Bottle Standard",
    "slug": "adidas-cycling-water-bottle-standard-adidas",
    "price": 350,
    "originalPrice": 494,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.8,
    "reviews": 590,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-51",
    "name": "Nivia Cycling Water Bottle Premium",
    "slug": "nivia-cycling-water-bottle-premium-nivia",
    "price": 370,
    "originalPrice": 370,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.3,
    "reviews": 65,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-52",
    "name": "Speed Cycling Water Bottle Plus",
    "slug": "speed-cycling-water-bottle-plus-speed",
    "price": 260,
    "originalPrice": 295,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.7,
    "reviews": 107,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-53",
    "name": "Adidas Cycling Water Bottle",
    "slug": "adidas-cycling-water-bottle-adidas",
    "price": 280,
    "originalPrice": 395,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.8,
    "reviews": 521,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-1",
    "name": "Mamaearth Face Wash Plus",
    "slug": "mamaearth-face-wash-plus",
    "price": 540,
    "originalPrice": 649,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.1,
    "reviews": 245,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality face wash from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-2",
    "name": "Maybelline Face Wash Ultra",
    "slug": "maybelline-face-wash-ultra-maybelline",
    "price": 220,
    "originalPrice": 248,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.8,
    "reviews": 78,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium face wash from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-3",
    "name": "Mamaearth Face Wash Ultra",
    "slug": "mamaearth-face-wash-ultra-mamaearth",
    "price": 340,
    "originalPrice": 340,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.5,
    "reviews": 455,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium face wash from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-4",
    "name": "Biotique Face Wash Premium",
    "slug": "biotique-face-wash-premium-biotique",
    "price": 510,
    "originalPrice": 510,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.7,
    "reviews": 697,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium face wash from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-5",
    "name": "Wow Skin Science Face Wash Plus",
    "slug": "wow-skin-science-face-wash-plus-wow-skin-science",
    "price": 380,
    "originalPrice": 545,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.7,
    "reviews": 1187,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium face wash from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-6",
    "name": "Lakme Face Wash Basic",
    "slug": "lakme-face-wash-basic-lakme",
    "price": 460,
    "originalPrice": 460,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.6,
    "reviews": 797,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium face wash from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-7",
    "name": "Lakme Face Wash Elite",
    "slug": "lakme-face-wash-elite-lakme",
    "price": 330,
    "originalPrice": 330,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3,
    "reviews": 738,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium face wash from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-8",
    "name": "L'Oreal Moisturizer Deluxe",
    "slug": "l-oreal-moisturizer-deluxe",
    "price": 550,
    "originalPrice": 550,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4,
    "reviews": 60,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality moisturizer from L'Oreal. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-9",
    "name": "Mamaearth Moisturizer Basic",
    "slug": "mamaearth-moisturizer-basic-mamaearth",
    "price": 380,
    "originalPrice": 380,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 5,
    "reviews": 143,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-10",
    "name": "L'Oreal Moisturizer Standard",
    "slug": "l-oreal-moisturizer-standard-l-oreal",
    "price": 480,
    "originalPrice": 580,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.9,
    "reviews": 213,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-11",
    "name": "Minimalist Moisturizer Basic",
    "slug": "minimalist-moisturizer-basic-minimalist",
    "price": 310,
    "originalPrice": 370,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.5,
    "reviews": 402,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-12",
    "name": "Maybelline Moisturizer Premium",
    "slug": "maybelline-moisturizer-premium-maybelline",
    "price": 670,
    "originalPrice": 1056,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 5,
    "reviews": 772,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-13",
    "name": "Minimalist Toner Elite",
    "slug": "minimalist-toner-elite",
    "price": 270,
    "originalPrice": 270,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.3,
    "reviews": 875,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality toner from Minimalist. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-14",
    "name": "Lakme Toner Ultra",
    "slug": "lakme-toner-ultra-lakme",
    "price": 210,
    "originalPrice": 210,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.9,
    "reviews": 348,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium toner from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-15",
    "name": "Minimalist Toner",
    "slug": "minimalist-toner-minimalist",
    "price": 440,
    "originalPrice": 440,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.4,
    "reviews": 58,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium toner from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-16",
    "name": "Nykaa Toner Ultra",
    "slug": "nykaa-toner-ultra-nykaa",
    "price": 360,
    "originalPrice": 360,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4,
    "reviews": 1119,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium toner from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-17",
    "name": "Lakme Toner Deluxe",
    "slug": "lakme-toner-deluxe-lakme",
    "price": 210,
    "originalPrice": 210,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.7,
    "reviews": 363,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium toner from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-18",
    "name": "Maybelline Eye Cream Plus",
    "slug": "maybelline-eye-cream-plus",
    "price": 520,
    "originalPrice": 645,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.7,
    "reviews": 715,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality eye cream from Maybelline. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-19",
    "name": "L'Oreal Eye Cream Pro",
    "slug": "l-oreal-eye-cream-pro-l-oreal",
    "price": 420,
    "originalPrice": 579,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.5,
    "reviews": 210,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium eye cream from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-20",
    "name": "Plum Eye Cream Standard",
    "slug": "plum-eye-cream-standard-plum",
    "price": 410,
    "originalPrice": 410,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.6,
    "reviews": 1156,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-21",
    "name": "Minimalist Eye Cream Basic",
    "slug": "minimalist-eye-cream-basic-minimalist",
    "price": 960,
    "originalPrice": 1130,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.9,
    "reviews": 693,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-22",
    "name": "Mamaearth Eye Cream Premium",
    "slug": "mamaearth-eye-cream-premium-mamaearth",
    "price": 490,
    "originalPrice": 637,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.3,
    "reviews": 310,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-23",
    "name": "Lakme Eye Cream Standard",
    "slug": "lakme-eye-cream-standard-lakme",
    "price": 350,
    "originalPrice": 556,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.9,
    "reviews": 1071,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-24",
    "name": "Biotique Eye Cream",
    "slug": "biotique-eye-cream-biotique",
    "price": 840,
    "originalPrice": 840,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.4,
    "reviews": 825,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-25",
    "name": "Biotique Shampoo Deluxe",
    "slug": "biotique-shampoo-deluxe",
    "price": 260,
    "originalPrice": 260,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.3,
    "reviews": 1383,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality shampoo from Biotique. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-26",
    "name": "Plum Shampoo Pro",
    "slug": "plum-shampoo-pro-plum",
    "price": 330,
    "originalPrice": 330,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.4,
    "reviews": 1186,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-27",
    "name": "Lakme Shampoo",
    "slug": "lakme-shampoo-lakme",
    "price": 280,
    "originalPrice": 280,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.6,
    "reviews": 418,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-28",
    "name": "Minimalist Shampoo Plus",
    "slug": "minimalist-shampoo-plus-minimalist",
    "price": 580,
    "originalPrice": 750,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.9,
    "reviews": 761,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-29",
    "name": "Mamaearth Shampoo Pro",
    "slug": "mamaearth-shampoo-pro-mamaearth",
    "price": 670,
    "originalPrice": 1005,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.2,
    "reviews": 1342,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-30",
    "name": "Maybelline Shampoo",
    "slug": "maybelline-shampoo-maybelline",
    "price": 610,
    "originalPrice": 779,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.6,
    "reviews": 374,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-31",
    "name": "The Derma Co Shampoo Pro",
    "slug": "the-derma-co-shampoo-pro-the-derma-co",
    "price": 530,
    "originalPrice": 530,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.3,
    "reviews": 210,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium shampoo from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-32",
    "name": "L'Oreal Hair Oil",
    "slug": "l-oreal-hair-oil",
    "price": 540,
    "originalPrice": 540,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.9,
    "reviews": 674,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality hair oil from L'Oreal. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-33",
    "name": "Plum Hair Oil Elite",
    "slug": "plum-hair-oil-elite-plum",
    "price": 400,
    "originalPrice": 400,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.4,
    "reviews": 548,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-34",
    "name": "Mamaearth Hair Oil Ultra",
    "slug": "mamaearth-hair-oil-ultra-mamaearth",
    "price": 460,
    "originalPrice": 693,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.1,
    "reviews": 261,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-35",
    "name": "Nykaa Hair Oil Plus",
    "slug": "nykaa-hair-oil-plus-nykaa",
    "price": 350,
    "originalPrice": 492,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.8,
    "reviews": 555,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-36",
    "name": "Nykaa Hair Oil Pro",
    "slug": "nykaa-hair-oil-pro-nykaa",
    "price": 340,
    "originalPrice": 340,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.1,
    "reviews": 233,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-37",
    "name": "Maybelline Body Lotion Basic",
    "slug": "maybelline-body-lotion-basic",
    "price": 390,
    "originalPrice": 465,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.2,
    "reviews": 581,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality body lotion from Maybelline. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-38",
    "name": "Minimalist Body Lotion Premium",
    "slug": "minimalist-body-lotion-premium-minimalist",
    "price": 500,
    "originalPrice": 655,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.7,
    "reviews": 454,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-39",
    "name": "Mamaearth Body Lotion Premium",
    "slug": "mamaearth-body-lotion-premium-mamaearth",
    "price": 540,
    "originalPrice": 649,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.7,
    "reviews": 217,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-40",
    "name": "Minimalist Body Lotion Standard",
    "slug": "minimalist-body-lotion-standard-minimalist",
    "price": 380,
    "originalPrice": 565,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 5,
    "reviews": 1192,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-41",
    "name": "Maybelline Body Lotion Standard",
    "slug": "maybelline-body-lotion-standard-maybelline",
    "price": 350,
    "originalPrice": 350,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.9,
    "reviews": 1086,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-42",
    "name": "The Derma Co Body Lotion Ultra",
    "slug": "the-derma-co-body-lotion-ultra-the-derma-co",
    "price": 500,
    "originalPrice": 500,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.9,
    "reviews": 517,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium body lotion from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-43",
    "name": "Minimalist Body Lotion Basic",
    "slug": "minimalist-body-lotion-basic-minimalist",
    "price": 610,
    "originalPrice": 726,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 5,
    "reviews": 224,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-44",
    "name": "The Derma Co Lipstick Premium",
    "slug": "the-derma-co-lipstick-premium",
    "price": 720,
    "originalPrice": 876,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.9,
    "reviews": 1750,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality lipstick from The Derma Co. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-45",
    "name": "Biotique Lipstick",
    "slug": "biotique-lipstick-biotique",
    "price": 590,
    "originalPrice": 590,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.6,
    "reviews": 1138,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-46",
    "name": "Minimalist Lipstick Premium",
    "slug": "minimalist-lipstick-premium-minimalist",
    "price": 670,
    "originalPrice": 1056,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.7,
    "reviews": 1162,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-47",
    "name": "Minimalist Lipstick Basic",
    "slug": "minimalist-lipstick-basic-minimalist",
    "price": 210,
    "originalPrice": 210,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.2,
    "reviews": 986,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-48",
    "name": "L'Oreal Lipstick Standard",
    "slug": "l-oreal-lipstick-standard-l-oreal",
    "price": 320,
    "originalPrice": 403,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.8,
    "reviews": 1323,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium lipstick from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-49",
    "name": "Mamaearth Lipstick Ultra",
    "slug": "mamaearth-lipstick-ultra-mamaearth",
    "price": 880,
    "originalPrice": 880,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3,
    "reviews": 1140,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-50",
    "name": "Nykaa Lipstick Premium",
    "slug": "nykaa-lipstick-premium-nykaa",
    "price": 740,
    "originalPrice": 740,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.6,
    "reviews": 1430,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-51",
    "name": "Lakme Kajal Ultra",
    "slug": "lakme-kajal-ultra",
    "price": 120,
    "originalPrice": 120,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.6,
    "reviews": 1172,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality kajal from Lakme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-52",
    "name": "Minimalist Kajal Pro",
    "slug": "minimalist-kajal-pro-minimalist",
    "price": 150,
    "originalPrice": 150,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.9,
    "reviews": 17,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium kajal from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-53",
    "name": "L'Oreal Kajal Premium",
    "slug": "l-oreal-kajal-premium-l-oreal",
    "price": 280,
    "originalPrice": 280,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.4,
    "reviews": 1427,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium kajal from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-54",
    "name": "Minimalist Kajal Plus",
    "slug": "minimalist-kajal-plus-minimalist",
    "price": 190,
    "originalPrice": 249,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.5,
    "reviews": 558,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium kajal from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-55",
    "name": "L'Oreal Kajal Deluxe",
    "slug": "l-oreal-kajal-deluxe-l-oreal",
    "price": 240,
    "originalPrice": 240,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.1,
    "reviews": 984,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium kajal from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-56",
    "name": "The Derma Co Kajal Elite",
    "slug": "the-derma-co-kajal-elite-the-derma-co",
    "price": 290,
    "originalPrice": 290,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.6,
    "reviews": 1178,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium kajal from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-57",
    "name": "Wow Skin Science Nail Polish Set Standard",
    "slug": "wow-skin-science-nail-polish-set-standard",
    "price": 270,
    "originalPrice": 270,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.8,
    "reviews": 939,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality nail polish set from Wow Skin Science. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-58",
    "name": "Mamaearth Nail Polish Set Plus",
    "slug": "mamaearth-nail-polish-set-plus-mamaearth",
    "price": 220,
    "originalPrice": 248,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 367,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-59",
    "name": "Lakme Nail Polish Set Basic",
    "slug": "lakme-nail-polish-set-basic-lakme",
    "price": 390,
    "originalPrice": 390,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 687,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-60",
    "name": "Minimalist Nail Polish Set Plus",
    "slug": "minimalist-nail-polish-set-plus-minimalist",
    "price": 190,
    "originalPrice": 190,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.4,
    "reviews": 1363,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-61",
    "name": "Mamaearth Nail Polish Set Deluxe",
    "slug": "mamaearth-nail-polish-set-deluxe-mamaearth",
    "price": 220,
    "originalPrice": 220,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 690,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-62",
    "name": "The Derma Co Nail Polish Set Ultra",
    "slug": "the-derma-co-nail-polish-set-ultra-the-derma-co",
    "price": 260,
    "originalPrice": 260,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.4,
    "reviews": 85,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-63",
    "name": "The Derma Co Nail Polish Set Pro",
    "slug": "the-derma-co-nail-polish-set-pro-the-derma-co",
    "price": 100,
    "originalPrice": 118,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.8,
    "reviews": 1017,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-1",
    "name": "Acer Ultrabook Laptop Ultra",
    "slug": "acer-ultrabook-laptop-ultra",
    "price": 83130,
    "originalPrice": 83130,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.6,
    "reviews": 525,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "High-quality ultrabook laptop from Acer. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-2",
    "name": "Samsung Ultrabook Laptop Plus",
    "slug": "samsung-ultrabook-laptop-plus-samsung",
    "price": 74430,
    "originalPrice": 74430,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.6,
    "reviews": 252,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-3",
    "name": "Samsung Ultrabook Laptop Deluxe",
    "slug": "samsung-ultrabook-laptop-deluxe-samsung",
    "price": 64430,
    "originalPrice": 64430,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.8,
    "reviews": 897,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-4",
    "name": "Acer Ultrabook Laptop Elite",
    "slug": "acer-ultrabook-laptop-elite-acer",
    "price": 49960,
    "originalPrice": 49960,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.7,
    "reviews": 76,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-5",
    "name": "Samsung Ultrabook Laptop Basic",
    "slug": "samsung-ultrabook-laptop-basic-samsung",
    "price": 103070,
    "originalPrice": 158333,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.6,
    "reviews": 449,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-6",
    "name": "Lenovo Ultrabook Laptop Basic",
    "slug": "lenovo-ultrabook-laptop-basic-lenovo",
    "price": 46220,
    "originalPrice": 46220,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.1,
    "reviews": 978,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-7",
    "name": "MSI Ultrabook Laptop Pro",
    "slug": "msi-ultrabook-laptop-pro-msi",
    "price": 112190,
    "originalPrice": 127585,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4,
    "reviews": 1489,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-8",
    "name": "Microsoft Gaming Laptop Basic",
    "slug": "microsoft-gaming-laptop-basic",
    "price": 99580,
    "originalPrice": 99580,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4,
    "reviews": 649,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "High-quality gaming laptop from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-9",
    "name": "Dell Gaming Laptop Plus",
    "slug": "dell-gaming-laptop-plus-dell",
    "price": 77330,
    "originalPrice": 77330,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.8,
    "reviews": 1201,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-10",
    "name": "Dell Gaming Laptop",
    "slug": "dell-gaming-laptop-dell",
    "price": 105440,
    "originalPrice": 105440,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.8,
    "reviews": 721,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-11",
    "name": "Apple Gaming Laptop Premium",
    "slug": "apple-gaming-laptop-premium-apple",
    "price": 96650,
    "originalPrice": 96650,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.7,
    "reviews": 59,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-12",
    "name": "Xiaomi Gaming Laptop Elite",
    "slug": "xiaomi-gaming-laptop-elite-xiaomi",
    "price": 142300,
    "originalPrice": 184417,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.3,
    "reviews": 375,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-13",
    "name": "Apple Gaming Laptop Deluxe",
    "slug": "apple-gaming-laptop-deluxe-apple",
    "price": 103280,
    "originalPrice": 103280,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.2,
    "reviews": 1275,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-14",
    "name": "ASUS Gaming Laptop Pro",
    "slug": "asus-gaming-laptop-pro-asus",
    "price": 113980,
    "originalPrice": 113980,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.7,
    "reviews": 1068,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-15",
    "name": "Lenovo Monitor 24-inch Premium",
    "slug": "lenovo-monitor-24-inch-premium",
    "price": 11860,
    "originalPrice": 13672,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.4,
    "reviews": 312,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "High-quality monitor 24-inch from Lenovo. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-16",
    "name": "Microsoft Monitor 24-inch Elite",
    "slug": "microsoft-monitor-24-inch-elite-microsoft",
    "price": 20150,
    "originalPrice": 31589,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3,
    "reviews": 1204,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-17",
    "name": "MSI Monitor 24-inch Pro",
    "slug": "msi-monitor-24-inch-pro-msi",
    "price": 14410,
    "originalPrice": 17651,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.1,
    "reviews": 726,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-18",
    "name": "Acer Monitor 24-inch Deluxe",
    "slug": "acer-monitor-24-inch-deluxe-acer",
    "price": 11610,
    "originalPrice": 14838,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.4,
    "reviews": 1456,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-19",
    "name": "ASUS Monitor 24-inch Elite",
    "slug": "asus-monitor-24-inch-elite-asus",
    "price": 10030,
    "originalPrice": 10030,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.4,
    "reviews": 832,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-20",
    "name": "ASUS Monitor 24-inch Plus",
    "slug": "asus-monitor-24-inch-plus-asus",
    "price": 17660,
    "originalPrice": 21604,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.6,
    "reviews": 919,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-21",
    "name": "ASUS Monitor 24-inch Ultra",
    "slug": "asus-monitor-24-inch-ultra-asus",
    "price": 20700,
    "originalPrice": 20700,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.5,
    "reviews": 625,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-22",
    "name": "Xiaomi Mechanical Keyboard",
    "slug": "xiaomi-mechanical-keyboard",
    "price": 7800,
    "originalPrice": 7800,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.6,
    "reviews": 1432,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "High-quality mechanical keyboard from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-23",
    "name": "Samsung Mechanical Keyboard Premium",
    "slug": "samsung-mechanical-keyboard-premium-samsung",
    "price": 6150,
    "originalPrice": 9703,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.3,
    "reviews": 991,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-24",
    "name": "Apple Mechanical Keyboard Pro",
    "slug": "apple-mechanical-keyboard-pro-apple",
    "price": 7760,
    "originalPrice": 7760,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.9,
    "reviews": 104,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-25",
    "name": "ASUS Mechanical Keyboard Plus",
    "slug": "asus-mechanical-keyboard-plus-asus",
    "price": 7090,
    "originalPrice": 7090,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 1137,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-26",
    "name": "Xiaomi Mechanical Keyboard Deluxe",
    "slug": "xiaomi-mechanical-keyboard-deluxe-xiaomi",
    "price": 2990,
    "originalPrice": 2990,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.7,
    "reviews": 181,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-27",
    "name": "Lenovo External Hard Drive 1TB Premium",
    "slug": "lenovo-external-hard-drive-1tb-premium",
    "price": 5050,
    "originalPrice": 5873,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.6,
    "reviews": 28,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "High-quality external hard drive 1tb from Lenovo. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-28",
    "name": "HP External Hard Drive 1TB Standard",
    "slug": "hp-external-hard-drive-1tb-standard-hp",
    "price": 3170,
    "originalPrice": 3900,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.6,
    "reviews": 538,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-29",
    "name": "HP External Hard Drive 1TB Basic",
    "slug": "hp-external-hard-drive-1tb-basic-hp",
    "price": 3260,
    "originalPrice": 3260,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.5,
    "reviews": 756,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-30",
    "name": "Apple External Hard Drive 1TB Plus",
    "slug": "apple-external-hard-drive-1tb-plus-apple",
    "price": 5770,
    "originalPrice": 9232,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.3,
    "reviews": 1125,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-31",
    "name": "HP USB Mouse Pro",
    "slug": "hp-usb-mouse-pro",
    "price": 460,
    "originalPrice": 460,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.9,
    "reviews": 36,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "High-quality usb mouse from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-32",
    "name": "MSI USB Mouse Premium",
    "slug": "msi-usb-mouse-premium-msi",
    "price": 310,
    "originalPrice": 352,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.7,
    "reviews": 110,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-33",
    "name": "Microsoft USB Mouse Ultra",
    "slug": "microsoft-usb-mouse-ultra-microsoft",
    "price": 1130,
    "originalPrice": 1412,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.7,
    "reviews": 250,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-34",
    "name": "Lenovo USB Mouse Ultra",
    "slug": "lenovo-usb-mouse-ultra-lenovo",
    "price": 290,
    "originalPrice": 290,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.3,
    "reviews": 1141,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-35",
    "name": "ASUS USB Mouse",
    "slug": "asus-usb-mouse-asus",
    "price": 870,
    "originalPrice": 870,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.6,
    "reviews": 1134,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-36",
    "name": "ASUS USB Mouse Standard",
    "slug": "asus-usb-mouse-standard-asus",
    "price": 1450,
    "originalPrice": 1450,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3,
    "reviews": 1145,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-37",
    "name": "Microsoft Laptop Stand Elite",
    "slug": "microsoft-laptop-stand-elite",
    "price": 1480,
    "originalPrice": 1480,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4,
    "reviews": 158,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "High-quality laptop stand from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-38",
    "name": "Microsoft Laptop Stand Premium",
    "slug": "microsoft-laptop-stand-premium-microsoft",
    "price": 660,
    "originalPrice": 873,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.1,
    "reviews": 679,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-39",
    "name": "Xiaomi Laptop Stand Plus",
    "slug": "xiaomi-laptop-stand-plus-xiaomi",
    "price": 1460,
    "originalPrice": 1460,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.1,
    "reviews": 987,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-40",
    "name": "Apple Laptop Stand Pro",
    "slug": "apple-laptop-stand-pro-apple",
    "price": 500,
    "originalPrice": 500,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.5,
    "reviews": 271,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-41",
    "name": "Acer Laptop Stand Deluxe",
    "slug": "acer-laptop-stand-deluxe-acer",
    "price": 520,
    "originalPrice": 812,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.2,
    "reviews": 698,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-42",
    "name": "HP Laptop Stand Deluxe",
    "slug": "hp-laptop-stand-deluxe-hp",
    "price": 1850,
    "originalPrice": 1850,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3,
    "reviews": 1283,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-43",
    "name": "ASUS Laptop Stand Plus",
    "slug": "asus-laptop-stand-plus-asus",
    "price": 550,
    "originalPrice": 812,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.1,
    "reviews": 314,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-44",
    "name": "Xiaomi Wireless Keyboard Plus",
    "slug": "xiaomi-wireless-keyboard-plus",
    "price": 1850,
    "originalPrice": 1850,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.8,
    "reviews": 415,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality wireless keyboard from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-45",
    "name": "Apple Wireless Keyboard Ultra",
    "slug": "apple-wireless-keyboard-ultra-apple",
    "price": 3700,
    "originalPrice": 3700,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.4,
    "reviews": 263,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-46",
    "name": "Xiaomi Wireless Keyboard Elite",
    "slug": "xiaomi-wireless-keyboard-elite-xiaomi",
    "price": 3430,
    "originalPrice": 4644,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.6,
    "reviews": 240,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-47",
    "name": "Lenovo Wireless Keyboard Basic",
    "slug": "lenovo-wireless-keyboard-basic-lenovo",
    "price": 1410,
    "originalPrice": 2028,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.7,
    "reviews": 36,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-48",
    "name": "Acer Wireless Keyboard Standard",
    "slug": "acer-wireless-keyboard-standard-acer",
    "price": 1600,
    "originalPrice": 1974,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.2,
    "reviews": 747,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-49",
    "name": "ASUS Wireless Keyboard Standard",
    "slug": "asus-wireless-keyboard-standard-asus",
    "price": 2240,
    "originalPrice": 2240,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.3,
    "reviews": 208,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-50",
    "name": "MSI Wireless Keyboard Ultra",
    "slug": "msi-wireless-keyboard-ultra-msi",
    "price": 1090,
    "originalPrice": 1090,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.9,
    "reviews": 1028,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-51",
    "name": "Lenovo Laptop Bag Basic",
    "slug": "lenovo-laptop-bag-basic",
    "price": 2750,
    "originalPrice": 3866,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.8,
    "reviews": 1543,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "High-quality laptop bag from Lenovo. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-52",
    "name": "Microsoft Laptop Bag Deluxe",
    "slug": "microsoft-laptop-bag-deluxe-microsoft",
    "price": 1850,
    "originalPrice": 2340,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.5,
    "reviews": 1094,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-53",
    "name": "Xiaomi Laptop Bag Elite",
    "slug": "xiaomi-laptop-bag-elite-xiaomi",
    "price": 1200,
    "originalPrice": 1200,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 734,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-54",
    "name": "MSI Laptop Bag Ultra",
    "slug": "msi-laptop-bag-ultra-msi",
    "price": 760,
    "originalPrice": 1147,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 915,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-55",
    "name": "Apple Laptop Bag Premium",
    "slug": "apple-laptop-bag-premium-apple",
    "price": 2270,
    "originalPrice": 3573,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.8,
    "reviews": 819,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-56",
    "name": "Apple Laptop Bag Basic",
    "slug": "apple-laptop-bag-basic-apple",
    "price": 1580,
    "originalPrice": 1580,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.9,
    "reviews": 267,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-57",
    "name": "Samsung Cooling Pad Deluxe",
    "slug": "samsung-cooling-pad-deluxe",
    "price": 680,
    "originalPrice": 680,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 1136,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "High-quality cooling pad from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-58",
    "name": "Acer Cooling Pad",
    "slug": "acer-cooling-pad-acer",
    "price": 930,
    "originalPrice": 930,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.7,
    "reviews": 635,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-59",
    "name": "MSI Cooling Pad",
    "slug": "msi-cooling-pad-msi",
    "price": 1300,
    "originalPrice": 1890,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.4,
    "reviews": 265,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-60",
    "name": "Acer Cooling Pad Premium",
    "slug": "acer-cooling-pad-premium-acer",
    "price": 470,
    "originalPrice": 470,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.6,
    "reviews": 407,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-61",
    "name": "Samsung Cooling Pad Pro",
    "slug": "samsung-cooling-pad-pro-samsung",
    "price": 1280,
    "originalPrice": 1661,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 1257,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-62",
    "name": "Lenovo Cooling Pad Ultra",
    "slug": "lenovo-cooling-pad-ultra-lenovo",
    "price": 430,
    "originalPrice": 627,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.1,
    "reviews": 891,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-63",
    "name": "Samsung Cooling Pad Plus",
    "slug": "samsung-cooling-pad-plus-samsung",
    "price": 1200,
    "originalPrice": 1650,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.2,
    "reviews": 605,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-1",
    "name": "Camlin A4 Notebook Pack Deluxe",
    "slug": "camlin-a4-notebook-pack-deluxe",
    "price": 470,
    "originalPrice": 559,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.4,
    "reviews": 76,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "High-quality a4 notebook pack from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-2",
    "name": "Uniball A4 Notebook Pack Standard",
    "slug": "uniball-a4-notebook-pack-standard-uniball",
    "price": 170,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.9,
    "reviews": 752,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-3",
    "name": "Parker A4 Notebook Pack Ultra",
    "slug": "parker-a4-notebook-pack-ultra-parker",
    "price": 240,
    "originalPrice": 276,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.6,
    "reviews": 1214,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-4",
    "name": "Camlin A4 Notebook Pack Premium",
    "slug": "camlin-a4-notebook-pack-premium-camlin",
    "price": 280,
    "originalPrice": 398,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.9,
    "reviews": 1352,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-5",
    "name": "Parker A4 Notebook Pack Elite",
    "slug": "parker-a4-notebook-pack-elite-parker",
    "price": 450,
    "originalPrice": 553,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4,
    "reviews": 132,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-6",
    "name": "Navneet A4 Notebook Pack Pro",
    "slug": "navneet-a4-notebook-pack-pro-navneet",
    "price": 360,
    "originalPrice": 360,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.4,
    "reviews": 29,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-7",
    "name": "Staedtler Gel Pen Set",
    "slug": "staedtler-gel-pen-set",
    "price": 270,
    "originalPrice": 270,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.4,
    "reviews": 1246,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality gel pen set from Staedtler. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-8",
    "name": "Classmate Gel Pen Set Pro",
    "slug": "classmate-gel-pen-set-pro-classmate",
    "price": 250,
    "originalPrice": 311,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.9,
    "reviews": 1199,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-9",
    "name": "Camlin Gel Pen Set Plus",
    "slug": "camlin-gel-pen-set-plus-camlin",
    "price": 300,
    "originalPrice": 300,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.2,
    "reviews": 938,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-10",
    "name": "Uniball Gel Pen Set Ultra",
    "slug": "uniball-gel-pen-set-ultra-uniball",
    "price": 250,
    "originalPrice": 250,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.4,
    "reviews": 190,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-11",
    "name": "Navneet Gel Pen Set Pro",
    "slug": "navneet-gel-pen-set-pro-navneet",
    "price": 270,
    "originalPrice": 270,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.1,
    "reviews": 123,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-12",
    "name": "Faber-Castell Gel Pen Set Elite",
    "slug": "faber-castell-gel-pen-set-elite-faber-castell",
    "price": 110,
    "originalPrice": 155,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.9,
    "reviews": 1497,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-13",
    "name": "Faber-Castell Pencil Box Elite",
    "slug": "faber-castell-pencil-box-elite",
    "price": 130,
    "originalPrice": 130,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 5,
    "reviews": 1406,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality pencil box from Faber-Castell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-14",
    "name": "Navneet Pencil Box Elite",
    "slug": "navneet-pencil-box-elite-navneet",
    "price": 340,
    "originalPrice": 340,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 5,
    "reviews": 388,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-15",
    "name": "Classmate Pencil Box Elite",
    "slug": "classmate-pencil-box-elite-classmate",
    "price": 240,
    "originalPrice": 339,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 5,
    "reviews": 1059,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-16",
    "name": "Navneet Pencil Box",
    "slug": "navneet-pencil-box-navneet",
    "price": 150,
    "originalPrice": 230,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.1,
    "reviews": 919,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-17",
    "name": "Faber-Castell Pencil Box Pro",
    "slug": "faber-castell-pencil-box-pro-faber-castell",
    "price": 180,
    "originalPrice": 249,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.5,
    "reviews": 524,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-18",
    "name": "Camlin Pencil Box Elite",
    "slug": "camlin-pencil-box-elite-camlin",
    "price": 310,
    "originalPrice": 381,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.2,
    "reviews": 37,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-19",
    "name": "Staedtler Highlighter Set Standard",
    "slug": "staedtler-highlighter-set-standard",
    "price": 250,
    "originalPrice": 250,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.4,
    "reviews": 877,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality highlighter set from Staedtler. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-20",
    "name": "Classmate Highlighter Set Premium",
    "slug": "classmate-highlighter-set-premium-classmate",
    "price": 270,
    "originalPrice": 270,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.3,
    "reviews": 1171,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-21",
    "name": "Linc Highlighter Set Standard",
    "slug": "linc-highlighter-set-standard-linc",
    "price": 140,
    "originalPrice": 169,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.5,
    "reviews": 718,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-22",
    "name": "Parker Highlighter Set Pro",
    "slug": "parker-highlighter-set-pro-parker",
    "price": 260,
    "originalPrice": 260,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.8,
    "reviews": 488,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-23",
    "name": "DOMS Highlighter Set Premium",
    "slug": "doms-highlighter-set-premium-doms",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.7,
    "reviews": 420,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-24",
    "name": "Navneet Geometry Box",
    "slug": "navneet-geometry-box",
    "price": 340,
    "originalPrice": 465,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.8,
    "reviews": 1360,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality geometry box from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-25",
    "name": "Camlin Geometry Box Basic",
    "slug": "camlin-geometry-box-basic-camlin",
    "price": 490,
    "originalPrice": 490,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.1,
    "reviews": 867,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-26",
    "name": "Camlin Geometry Box Deluxe",
    "slug": "camlin-geometry-box-deluxe-camlin",
    "price": 440,
    "originalPrice": 652,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.2,
    "reviews": 1437,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-27",
    "name": "Staedtler Geometry Box Premium",
    "slug": "staedtler-geometry-box-premium-staedtler",
    "price": 260,
    "originalPrice": 260,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.5,
    "reviews": 123,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-28",
    "name": "Staedtler Geometry Box Standard",
    "slug": "staedtler-geometry-box-standard-staedtler",
    "price": 250,
    "originalPrice": 299,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.6,
    "reviews": 879,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-29",
    "name": "Camlin Geometry Box Elite",
    "slug": "camlin-geometry-box-elite-camlin",
    "price": 490,
    "originalPrice": 633,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.3,
    "reviews": 1497,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-30",
    "name": "Faber-Castell Whiteboard Marker Set Basic",
    "slug": "faber-castell-whiteboard-marker-set-basic",
    "price": 290,
    "originalPrice": 290,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.5,
    "reviews": 992,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality whiteboard marker set from Faber-Castell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-31",
    "name": "Faber-Castell Whiteboard Marker Set Plus",
    "slug": "faber-castell-whiteboard-marker-set-plus-faber-castell",
    "price": 240,
    "originalPrice": 358,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.9,
    "reviews": 1470,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-32",
    "name": "Staedtler Whiteboard Marker Set Basic",
    "slug": "staedtler-whiteboard-marker-set-basic-staedtler",
    "price": 190,
    "originalPrice": 269,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.6,
    "reviews": 263,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-33",
    "name": "Parker Whiteboard Marker Set Pro",
    "slug": "parker-whiteboard-marker-set-pro-parker",
    "price": 280,
    "originalPrice": 443,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.5,
    "reviews": 1241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-34",
    "name": "Navneet Whiteboard Marker Set Deluxe",
    "slug": "navneet-whiteboard-marker-set-deluxe-navneet",
    "price": 100,
    "originalPrice": 100,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.9,
    "reviews": 983,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-35",
    "name": "Parker Sticky Notes Pack Plus",
    "slug": "parker-sticky-notes-pack-plus",
    "price": 150,
    "originalPrice": 209,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.3,
    "reviews": 224,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality sticky notes pack from Parker. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-36",
    "name": "Navneet Sticky Notes Pack Premium",
    "slug": "navneet-sticky-notes-pack-premium-navneet",
    "price": 170,
    "originalPrice": 233,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.3,
    "reviews": 162,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-37",
    "name": "Navneet Sticky Notes Pack Basic",
    "slug": "navneet-sticky-notes-pack-basic-navneet",
    "price": 140,
    "originalPrice": 220,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.2,
    "reviews": 965,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-38",
    "name": "Uniball Sticky Notes Pack Pro",
    "slug": "uniball-sticky-notes-pack-pro-uniball",
    "price": 130,
    "originalPrice": 163,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 5,
    "reviews": 63,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-39",
    "name": "Maped Sticky Notes Pack Deluxe",
    "slug": "maped-sticky-notes-pack-deluxe-maped",
    "price": 190,
    "originalPrice": 248,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.9,
    "reviews": 833,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-40",
    "name": "Linc Sticky Notes Pack Deluxe",
    "slug": "linc-sticky-notes-pack-deluxe-linc",
    "price": 70,
    "originalPrice": 101,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.9,
    "reviews": 596,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-41",
    "name": "Classmate Sticky Notes Pack Standard",
    "slug": "classmate-sticky-notes-pack-standard-classmate",
    "price": 140,
    "originalPrice": 167,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.7,
    "reviews": 595,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-42",
    "name": "Parker Paper Clips Set Basic",
    "slug": "parker-paper-clips-set-basic",
    "price": 70,
    "originalPrice": 101,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.8,
    "reviews": 623,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality paper clips set from Parker. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-43",
    "name": "Camlin Paper Clips Set Elite",
    "slug": "camlin-paper-clips-set-elite-camlin",
    "price": 50,
    "originalPrice": 50,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.4,
    "reviews": 82,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-44",
    "name": "DOMS Paper Clips Set Standard",
    "slug": "doms-paper-clips-set-standard-doms",
    "price": 80,
    "originalPrice": 105,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.9,
    "reviews": 210,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-45",
    "name": "Uniball Paper Clips Set Ultra",
    "slug": "uniball-paper-clips-set-ultra-uniball",
    "price": 70,
    "originalPrice": 90,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.9,
    "reviews": 597,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-46",
    "name": "Navneet Paper Clips Set Standard",
    "slug": "navneet-paper-clips-set-standard-navneet",
    "price": 60,
    "originalPrice": 60,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.8,
    "reviews": 1035,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-47",
    "name": "Maped Paper Clips Set Elite",
    "slug": "maped-paper-clips-set-elite-maped",
    "price": 50,
    "originalPrice": 50,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.8,
    "reviews": 672,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-48",
    "name": "Faber-Castell Desk Organizer Ultra",
    "slug": "faber-castell-desk-organizer-ultra",
    "price": 680,
    "originalPrice": 680,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.5,
    "reviews": 282,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality desk organizer from Faber-Castell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-49",
    "name": "Maped Desk Organizer Deluxe",
    "slug": "maped-desk-organizer-deluxe-maped",
    "price": 720,
    "originalPrice": 720,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.1,
    "reviews": 423,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-50",
    "name": "Camlin Desk Organizer",
    "slug": "camlin-desk-organizer-camlin",
    "price": 560,
    "originalPrice": 560,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4,
    "reviews": 836,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-51",
    "name": "Uniball Desk Organizer Ultra",
    "slug": "uniball-desk-organizer-ultra-uniball",
    "price": 770,
    "originalPrice": 770,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4,
    "reviews": 142,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-52",
    "name": "Camlin Desk Organizer Premium",
    "slug": "camlin-desk-organizer-premium-camlin",
    "price": 590,
    "originalPrice": 673,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4,
    "reviews": 393,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-53",
    "name": "Linc File Folder Set Standard",
    "slug": "linc-file-folder-set-standard",
    "price": 130,
    "originalPrice": 178,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.8,
    "reviews": 582,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality file folder set from Linc. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-54",
    "name": "Uniball File Folder Set Elite",
    "slug": "uniball-file-folder-set-elite-uniball",
    "price": 330,
    "originalPrice": 330,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 5,
    "reviews": 625,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-55",
    "name": "Camlin File Folder Set Ultra",
    "slug": "camlin-file-folder-set-ultra-camlin",
    "price": 280,
    "originalPrice": 280,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.9,
    "reviews": 260,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-56",
    "name": "Uniball File Folder Set Plus",
    "slug": "uniball-file-folder-set-plus-uniball",
    "price": 260,
    "originalPrice": 366,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.4,
    "reviews": 990,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-57",
    "name": "Parker File Folder Set Basic",
    "slug": "parker-file-folder-set-basic-parker",
    "price": 170,
    "originalPrice": 220,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.7,
    "reviews": 1221,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-58",
    "name": "Faber-Castell File Folder Set Deluxe",
    "slug": "faber-castell-file-folder-set-deluxe-faber-castell",
    "price": 230,
    "originalPrice": 264,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.2,
    "reviews": 123,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-59",
    "name": "Linc Calculator Ultra",
    "slug": "linc-calculator-ultra",
    "price": 290,
    "originalPrice": 355,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.9,
    "reviews": 1542,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "High-quality calculator from Linc. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-60",
    "name": "Maped Calculator Ultra",
    "slug": "maped-calculator-ultra-maped",
    "price": 1360,
    "originalPrice": 1360,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.5,
    "reviews": 341,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-61",
    "name": "Navneet Calculator Basic",
    "slug": "navneet-calculator-basic-navneet",
    "price": 1340,
    "originalPrice": 1527,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.2,
    "reviews": 450,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-62",
    "name": "Parker Calculator Elite",
    "slug": "parker-calculator-elite-parker",
    "price": 370,
    "originalPrice": 370,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.4,
    "reviews": 1227,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-63",
    "name": "Classmate Calculator Elite",
    "slug": "classmate-calculator-elite-classmate",
    "price": 640,
    "originalPrice": 727,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.6,
    "reviews": 1093,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-64",
    "name": "Maped Calculator Deluxe",
    "slug": "maped-calculator-deluxe-maped",
    "price": 1110,
    "originalPrice": 1634,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.5,
    "reviews": 160,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-65",
    "name": "DOMS Calculator Plus",
    "slug": "doms-calculator-plus-doms",
    "price": 300,
    "originalPrice": 392,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.6,
    "reviews": 11,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-66",
    "name": "Classmate Stapler with Pins Premium",
    "slug": "classmate-stapler-with-pins-premium",
    "price": 260,
    "originalPrice": 383,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.2,
    "reviews": 1377,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality stapler with pins from Classmate. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-67",
    "name": "Parker Stapler with Pins Pro",
    "slug": "parker-stapler-with-pins-pro-parker",
    "price": 100,
    "originalPrice": 153,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.7,
    "reviews": 172,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-68",
    "name": "Uniball Stapler with Pins Standard",
    "slug": "uniball-stapler-with-pins-standard-uniball",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.6,
    "reviews": 1200,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-69",
    "name": "Navneet Stapler with Pins Standard",
    "slug": "navneet-stapler-with-pins-standard-navneet",
    "price": 200,
    "originalPrice": 200,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.4,
    "reviews": 889,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-70",
    "name": "Classmate Stapler with Pins Basic",
    "slug": "classmate-stapler-with-pins-basic-classmate",
    "price": 150,
    "originalPrice": 150,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 5,
    "reviews": 400,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-71",
    "name": "Camlin Stapler with Pins Plus",
    "slug": "camlin-stapler-with-pins-plus-camlin",
    "price": 240,
    "originalPrice": 240,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.5,
    "reviews": 1470,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-72",
    "name": "Faber-Castell Stapler with Pins Ultra",
    "slug": "faber-castell-stapler-with-pins-ultra-faber-castell",
    "price": 230,
    "originalPrice": 353,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.1,
    "reviews": 1128,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Faber-Castell. Features cutting-edge technology and superior build quality.",
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

