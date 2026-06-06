// ── Product Data ──
// 503 products across 8 categories

const products = [
  {
    "id": "el-1",
    "name": "Xiaomi Wireless Headphones Ultra",
    "slug": "xiaomi-wireless-headphones-ultra",
    "price": 4300,
    "originalPrice": 4300,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.8,
    "reviews": 712,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality wireless headphones from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-2",
    "name": "Dell Wireless Headphones",
    "slug": "dell-wireless-headphones-dell",
    "price": 7580,
    "originalPrice": 9316,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.3,
    "reviews": 1385,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-3",
    "name": "LG Wireless Headphones",
    "slug": "lg-wireless-headphones-lg",
    "price": 7170,
    "originalPrice": 8753,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.1,
    "reviews": 399,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-4",
    "name": "Bose Wireless Headphones Plus",
    "slug": "bose-wireless-headphones-plus-bose",
    "price": 2280,
    "originalPrice": 2280,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.3,
    "reviews": 168,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-5",
    "name": "Philips Wireless Headphones Plus",
    "slug": "philips-wireless-headphones-plus-philips",
    "price": 2780,
    "originalPrice": 2780,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4,
    "reviews": 1214,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-6",
    "name": "Philips Wireless Headphones Deluxe",
    "slug": "philips-wireless-headphones-deluxe-philips",
    "price": 6300,
    "originalPrice": 6997,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.4,
    "reviews": 655,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-7",
    "name": "LG Wireless Headphones Plus",
    "slug": "lg-wireless-headphones-plus-lg",
    "price": 5170,
    "originalPrice": 5170,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4,
    "reviews": 1223,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-8",
    "name": "Sony Bluetooth Speaker Deluxe",
    "slug": "sony-bluetooth-speaker-deluxe",
    "price": 1180,
    "originalPrice": 1573,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.9,
    "reviews": 653,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "High-quality bluetooth speaker from Sony. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-9",
    "name": "OnePlus Bluetooth Speaker Deluxe",
    "slug": "oneplus-bluetooth-speaker-deluxe-oneplus",
    "price": 4070,
    "originalPrice": 4070,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.3,
    "reviews": 390,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-10",
    "name": "Philips Bluetooth Speaker",
    "slug": "philips-bluetooth-speaker-philips",
    "price": 1470,
    "originalPrice": 1470,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.8,
    "reviews": 11,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-11",
    "name": "pTron Bluetooth Speaker Premium",
    "slug": "ptron-bluetooth-speaker-premium-ptron",
    "price": 5000,
    "originalPrice": 7752,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.4,
    "reviews": 1309,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-12",
    "name": "HP Bluetooth Speaker Pro",
    "slug": "hp-bluetooth-speaker-pro-hp",
    "price": 3500,
    "originalPrice": 4509,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.5,
    "reviews": 1121,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from HP. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-13",
    "name": "JBL Bluetooth Speaker Pro",
    "slug": "jbl-bluetooth-speaker-pro-jbl",
    "price": 2910,
    "originalPrice": 3271,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.2,
    "reviews": 745,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-14",
    "name": "HP USB-C Hub Pro",
    "slug": "hp-usb-c-hub-pro",
    "price": 1430,
    "originalPrice": 1430,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.8,
    "reviews": 213,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "High-quality usb-c hub from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-15",
    "name": "LG USB-C Hub Elite",
    "slug": "lg-usb-c-hub-elite-lg",
    "price": 1390,
    "originalPrice": 1390,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.3,
    "reviews": 867,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-16",
    "name": "Apple USB-C Hub Pro",
    "slug": "apple-usb-c-hub-pro-apple",
    "price": 1930,
    "originalPrice": 2736,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.3,
    "reviews": 941,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-17",
    "name": "OnePlus USB-C Hub Deluxe",
    "slug": "oneplus-usb-c-hub-deluxe-oneplus",
    "price": 1650,
    "originalPrice": 1650,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.5,
    "reviews": 123,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-18",
    "name": "JBL USB-C Hub Elite",
    "slug": "jbl-usb-c-hub-elite-jbl",
    "price": 1560,
    "originalPrice": 2168,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.6,
    "reviews": 441,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-19",
    "name": "Apple Wireless Mouse Basic",
    "slug": "apple-wireless-mouse-basic",
    "price": 1670,
    "originalPrice": 1670,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.5,
    "reviews": 55,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    "description": "High-quality wireless mouse from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-20",
    "name": "boAt Wireless Mouse Standard",
    "slug": "boat-wireless-mouse-standard-boat",
    "price": 1320,
    "originalPrice": 1320,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.9,
    "reviews": 294,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-21",
    "name": "Philips Wireless Mouse Ultra",
    "slug": "philips-wireless-mouse-ultra-philips",
    "price": 650,
    "originalPrice": 865,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.5,
    "reviews": 360,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-22",
    "name": "Realme Wireless Mouse Plus",
    "slug": "realme-wireless-mouse-plus-realme",
    "price": 1980,
    "originalPrice": 2489,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4,
    "reviews": 204,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-23",
    "name": "Apple Wireless Mouse Elite",
    "slug": "apple-wireless-mouse-elite-apple",
    "price": 370,
    "originalPrice": 473,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.4,
    "reviews": 718,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-24",
    "name": "Sony Wireless Mouse",
    "slug": "sony-wireless-mouse-sony",
    "price": 2050,
    "originalPrice": 2677,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4,
    "reviews": 1260,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-25",
    "name": "Samsung Smart Band Plus",
    "slug": "samsung-smart-band-plus",
    "price": 3800,
    "originalPrice": 3800,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 5,
    "reviews": 773,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "High-quality smart band from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-26",
    "name": "Dell Smart Band Premium",
    "slug": "dell-smart-band-premium-dell",
    "price": 1700,
    "originalPrice": 2240,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.7,
    "reviews": 120,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-27",
    "name": "boAt Smart Band Basic",
    "slug": "boat-smart-band-basic-boat",
    "price": 3400,
    "originalPrice": 3400,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.2,
    "reviews": 301,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-28",
    "name": "Bose Smart Band",
    "slug": "bose-smart-band-bose",
    "price": 2260,
    "originalPrice": 2857,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.6,
    "reviews": 500,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-29",
    "name": "Apple Smart Band Deluxe",
    "slug": "apple-smart-band-deluxe-apple",
    "price": 2550,
    "originalPrice": 2550,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.2,
    "reviews": 300,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-30",
    "name": "Bose Smart Band Pro",
    "slug": "bose-smart-band-pro-bose",
    "price": 2240,
    "originalPrice": 3582,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.6,
    "reviews": 1069,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart band from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-31",
    "name": "Sony Power Bank Elite",
    "slug": "sony-power-bank-elite",
    "price": 2400,
    "originalPrice": 3062,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.8,
    "reviews": 1223,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality power bank from Sony. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-32",
    "name": "Panasonic Power Bank Pro",
    "slug": "panasonic-power-bank-pro-panasonic",
    "price": 1480,
    "originalPrice": 1480,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.1,
    "reviews": 636,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-33",
    "name": "Samsung Power Bank Deluxe",
    "slug": "samsung-power-bank-deluxe-samsung",
    "price": 1590,
    "originalPrice": 2189,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.2,
    "reviews": 927,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-34",
    "name": "Dell Power Bank Standard",
    "slug": "dell-power-bank-standard-dell",
    "price": 840,
    "originalPrice": 840,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.8,
    "reviews": 285,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-35",
    "name": "Bose Power Bank Ultra",
    "slug": "bose-power-bank-ultra-bose",
    "price": 2570,
    "originalPrice": 2570,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.5,
    "reviews": 534,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-36",
    "name": "OnePlus Power Bank Deluxe",
    "slug": "oneplus-power-bank-deluxe-oneplus",
    "price": 2750,
    "originalPrice": 2750,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.3,
    "reviews": 639,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium power bank from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-37",
    "name": "OnePlus HDMI Cable Deluxe",
    "slug": "oneplus-hdmi-cable-deluxe",
    "price": 740,
    "originalPrice": 1115,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.4,
    "reviews": 966,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
    "description": "High-quality hdmi cable from OnePlus. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-38",
    "name": "Samsung HDMI Cable Basic",
    "slug": "samsung-hdmi-cable-basic-samsung",
    "price": 400,
    "originalPrice": 597,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.1,
    "reviews": 719,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-39",
    "name": "pTron HDMI Cable Standard",
    "slug": "ptron-hdmi-cable-standard-ptron",
    "price": 390,
    "originalPrice": 572,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.8,
    "reviews": 1001,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-40",
    "name": "Xiaomi HDMI Cable Plus",
    "slug": "xiaomi-hdmi-cable-plus-xiaomi",
    "price": 690,
    "originalPrice": 800,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.5,
    "reviews": 261,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-41",
    "name": "Xiaomi HDMI Cable Premium",
    "slug": "xiaomi-hdmi-cable-premium-xiaomi",
    "price": 700,
    "originalPrice": 1106,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4,
    "reviews": 241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-42",
    "name": "Xiaomi HDMI Cable Basic",
    "slug": "xiaomi-hdmi-cable-basic-xiaomi",
    "price": 350,
    "originalPrice": 423,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.8,
    "reviews": 287,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-43",
    "name": "Bose Webcam",
    "slug": "bose-webcam",
    "price": 1180,
    "originalPrice": 1669,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.4,
    "reviews": 59,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "High-quality webcam from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-44",
    "name": "OnePlus Webcam Deluxe",
    "slug": "oneplus-webcam-deluxe-oneplus",
    "price": 2720,
    "originalPrice": 3190,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.6,
    "reviews": 946,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium webcam from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-45",
    "name": "pTron Webcam Ultra",
    "slug": "ptron-webcam-ultra-ptron",
    "price": 4790,
    "originalPrice": 7170,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.5,
    "reviews": 947,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium webcam from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-46",
    "name": "Panasonic Webcam Basic",
    "slug": "panasonic-webcam-basic-panasonic",
    "price": 3620,
    "originalPrice": 5602,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.1,
    "reviews": 278,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium webcam from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-47",
    "name": "Xiaomi Webcam Pro",
    "slug": "xiaomi-webcam-pro-xiaomi",
    "price": 4850,
    "originalPrice": 5854,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.8,
    "reviews": 987,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium webcam from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-48",
    "name": "LG Webcam Plus",
    "slug": "lg-webcam-plus-lg",
    "price": 3050,
    "originalPrice": 3764,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.5,
    "reviews": 990,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium webcam from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-49",
    "name": "Apple Smart Plug",
    "slug": "apple-smart-plug",
    "price": 780,
    "originalPrice": 780,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4,
    "reviews": 302,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "High-quality smart plug from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-50",
    "name": "Samsung Smart Plug",
    "slug": "samsung-smart-plug-samsung",
    "price": 1120,
    "originalPrice": 1704,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.2,
    "reviews": 1275,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-51",
    "name": "Bose Smart Plug Elite",
    "slug": "bose-smart-plug-elite-bose",
    "price": 730,
    "originalPrice": 887,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.7,
    "reviews": 1404,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-52",
    "name": "OnePlus Smart Plug Elite",
    "slug": "oneplus-smart-plug-elite-oneplus",
    "price": 1000,
    "originalPrice": 1000,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.6,
    "reviews": 957,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-53",
    "name": "Realme Smart Plug Premium",
    "slug": "realme-smart-plug-premium-realme",
    "price": 1180,
    "originalPrice": 1180,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.2,
    "reviews": 1429,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-54",
    "name": "LG Smart Plug Plus",
    "slug": "lg-smart-plug-plus-lg",
    "price": 350,
    "originalPrice": 350,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.7,
    "reviews": 39,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-55",
    "name": "Sony LED Strip Lights Plus",
    "slug": "sony-led-strip-lights-plus",
    "price": 820,
    "originalPrice": 820,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.5,
    "reviews": 1245,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=400&fit=crop",
    "description": "High-quality led strip lights from Sony. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-56",
    "name": "JBL LED Strip Lights",
    "slug": "jbl-led-strip-lights-jbl",
    "price": 1210,
    "originalPrice": 1493,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.7,
    "reviews": 1388,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-57",
    "name": "Bose LED Strip Lights Plus",
    "slug": "bose-led-strip-lights-plus-bose",
    "price": 680,
    "originalPrice": 1035,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3,
    "reviews": 1193,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-58",
    "name": "Samsung LED Strip Lights",
    "slug": "samsung-led-strip-lights-samsung",
    "price": 1350,
    "originalPrice": 1633,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.8,
    "reviews": 1031,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-59",
    "name": "boAt LED Strip Lights Elite",
    "slug": "boat-led-strip-lights-elite-boat",
    "price": 710,
    "originalPrice": 710,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.7,
    "reviews": 821,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-60",
    "name": "Panasonic LED Strip Lights",
    "slug": "panasonic-led-strip-lights-panasonic",
    "price": 680,
    "originalPrice": 680,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.5,
    "reviews": 1320,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-61",
    "name": "Sony Memory Card 64GB Standard",
    "slug": "sony-memory-card-64gb-standard",
    "price": 760,
    "originalPrice": 760,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4,
    "reviews": 1218,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "High-quality memory card 64gb from Sony. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-62",
    "name": "Philips Memory Card 64GB Ultra",
    "slug": "philips-memory-card-64gb-ultra-philips",
    "price": 1250,
    "originalPrice": 1250,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.2,
    "reviews": 1303,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-63",
    "name": "Samsung Memory Card 64GB Plus",
    "slug": "samsung-memory-card-64gb-plus-samsung",
    "price": 1400,
    "originalPrice": 1556,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.1,
    "reviews": 460,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-64",
    "name": "HP Memory Card 64GB Pro",
    "slug": "hp-memory-card-64gb-pro-hp",
    "price": 600,
    "originalPrice": 903,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.3,
    "reviews": 687,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-65",
    "name": "Sony Memory Card 64GB Deluxe",
    "slug": "sony-memory-card-64gb-deluxe-sony",
    "price": 1100,
    "originalPrice": 1100,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.6,
    "reviews": 560,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-66",
    "name": "HP Memory Card 64GB Premium",
    "slug": "hp-memory-card-64gb-premium-hp",
    "price": 540,
    "originalPrice": 540,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.9,
    "reviews": 1040,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-67",
    "name": "pTron Phone Case Standard",
    "slug": "ptron-phone-case-standard",
    "price": 500,
    "originalPrice": 500,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 5,
    "reviews": 821,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    "description": "High-quality phone case from pTron. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-68",
    "name": "OnePlus Phone Case",
    "slug": "oneplus-phone-case-oneplus",
    "price": 720,
    "originalPrice": 806,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.5,
    "reviews": 1238,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    "description": "Premium phone case from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-69",
    "name": "Samsung Phone Case Elite",
    "slug": "samsung-phone-case-elite-samsung",
    "price": 340,
    "originalPrice": 502,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.5,
    "reviews": 1071,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    "description": "Premium phone case from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-70",
    "name": "HP Phone Case Ultra",
    "slug": "hp-phone-case-ultra-hp",
    "price": 620,
    "originalPrice": 712,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.3,
    "reviews": 480,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    "description": "Premium phone case from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-71",
    "name": "Sony Phone Case Standard",
    "slug": "sony-phone-case-standard-sony",
    "price": 350,
    "originalPrice": 386,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.4,
    "reviews": 89,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    "description": "Premium phone case from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-72",
    "name": "Philips Phone Case Standard",
    "slug": "philips-phone-case-standard-philips",
    "price": 650,
    "originalPrice": 650,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.5,
    "reviews": 614,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    "description": "Premium phone case from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-73",
    "name": "Realme Screen Guard Ultra",
    "slug": "realme-screen-guard-ultra",
    "price": 160,
    "originalPrice": 247,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.1,
    "reviews": 681,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598327105665-cede8901e8e1?w=400&h=400&fit=crop",
    "description": "High-quality screen guard from Realme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-74",
    "name": "JBL Screen Guard Ultra",
    "slug": "jbl-screen-guard-ultra-jbl",
    "price": 270,
    "originalPrice": 389,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.2,
    "reviews": 390,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598327105665-cede8901e8e1?w=400&h=400&fit=crop",
    "description": "Premium screen guard from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-75",
    "name": "LG Screen Guard Plus",
    "slug": "lg-screen-guard-plus-lg",
    "price": 320,
    "originalPrice": 354,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.7,
    "reviews": 1065,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598327105665-cede8901e8e1?w=400&h=400&fit=crop",
    "description": "Premium screen guard from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-76",
    "name": "JBL Screen Guard Plus",
    "slug": "jbl-screen-guard-plus-jbl",
    "price": 300,
    "originalPrice": 300,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.8,
    "reviews": 77,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598327105665-cede8901e8e1?w=400&h=400&fit=crop",
    "description": "Premium screen guard from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-77",
    "name": "boAt Screen Guard Ultra",
    "slug": "boat-screen-guard-ultra-boat",
    "price": 260,
    "originalPrice": 260,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.7,
    "reviews": 714,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598327105665-cede8901e8e1?w=400&h=400&fit=crop",
    "description": "Premium screen guard from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-78",
    "name": "boAt Selfie Stick Tripod Basic",
    "slug": "boat-selfie-stick-tripod-basic",
    "price": 400,
    "originalPrice": 473,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.7,
    "reviews": 2001,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588591795084-177c5cf5aea2?w=400&h=400&fit=crop",
    "description": "High-quality selfie stick tripod from boAt. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-79",
    "name": "Dell Selfie Stick Tripod Elite",
    "slug": "dell-selfie-stick-tripod-elite-dell",
    "price": 330,
    "originalPrice": 404,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.1,
    "reviews": 490,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588591795084-177c5cf5aea2?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-80",
    "name": "OnePlus Selfie Stick Tripod",
    "slug": "oneplus-selfie-stick-tripod-oneplus",
    "price": 280,
    "originalPrice": 280,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.9,
    "reviews": 1272,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588591795084-177c5cf5aea2?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-81",
    "name": "LG Selfie Stick Tripod",
    "slug": "lg-selfie-stick-tripod-lg",
    "price": 570,
    "originalPrice": 722,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.1,
    "reviews": 979,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588591795084-177c5cf5aea2?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-82",
    "name": "Philips Selfie Stick Tripod Plus",
    "slug": "philips-selfie-stick-tripod-plus-philips",
    "price": 250,
    "originalPrice": 250,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.4,
    "reviews": 1264,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588591795084-177c5cf5aea2?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-83",
    "name": "OnePlus Selfie Stick Tripod Plus",
    "slug": "oneplus-selfie-stick-tripod-plus-oneplus",
    "price": 410,
    "originalPrice": 512,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.8,
    "reviews": 183,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588591795084-177c5cf5aea2?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-1",
    "name": "Wildcraft Running Shoes Deluxe",
    "slug": "wildcraft-running-shoes-deluxe",
    "price": 6510,
    "originalPrice": 7865,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.5,
    "reviews": 1648,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "High-quality running shoes from Wildcraft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-2",
    "name": "H&M Running Shoes Elite",
    "slug": "h-m-running-shoes-elite-h-m",
    "price": 5710,
    "originalPrice": 6396,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.4,
    "reviews": 1138,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-3",
    "name": "Ray-Ban Running Shoes Pro",
    "slug": "ray-ban-running-shoes-pro-ray-ban",
    "price": 7690,
    "originalPrice": 8742,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.2,
    "reviews": 900,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-4",
    "name": "Zara Running Shoes Deluxe",
    "slug": "zara-running-shoes-deluxe-zara",
    "price": 3110,
    "originalPrice": 3110,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.8,
    "reviews": 345,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-5",
    "name": "Nike Running Shoes",
    "slug": "nike-running-shoes-nike",
    "price": 3390,
    "originalPrice": 3390,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.8,
    "reviews": 1495,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-6",
    "name": "H&M Casual Sneakers",
    "slug": "h-m-casual-sneakers",
    "price": 1480,
    "originalPrice": 1988,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.7,
    "reviews": 1823,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "High-quality casual sneakers from H&M. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-7",
    "name": "Zara Casual Sneakers Deluxe",
    "slug": "zara-casual-sneakers-deluxe-zara",
    "price": 2300,
    "originalPrice": 2300,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.7,
    "reviews": 1218,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-8",
    "name": "Nike Casual Sneakers Deluxe",
    "slug": "nike-casual-sneakers-deluxe-nike",
    "price": 4170,
    "originalPrice": 4170,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.4,
    "reviews": 1280,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-9",
    "name": "Tommy Hilfiger Casual Sneakers Pro",
    "slug": "tommy-hilfiger-casual-sneakers-pro-tommy-hilfiger",
    "price": 4470,
    "originalPrice": 6576,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.4,
    "reviews": 415,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-10",
    "name": "Tommy Hilfiger Casual Sneakers Elite",
    "slug": "tommy-hilfiger-casual-sneakers-elite-tommy-hilfiger",
    "price": 2400,
    "originalPrice": 3405,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.1,
    "reviews": 97,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-11",
    "name": "Nike Casual Sneakers Pro",
    "slug": "nike-casual-sneakers-pro-nike",
    "price": 3060,
    "originalPrice": 3060,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.9,
    "reviews": 1351,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-12",
    "name": "Ray-Ban Casual Sneakers Plus",
    "slug": "ray-ban-casual-sneakers-plus-ray-ban",
    "price": 1570,
    "originalPrice": 1766,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.1,
    "reviews": 242,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-13",
    "name": "Wildcraft Round Neck T-Shirt Plus",
    "slug": "wildcraft-round-neck-t-shirt-plus",
    "price": 1220,
    "originalPrice": 1220,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.1,
    "reviews": 1814,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "description": "High-quality round neck t-shirt from Wildcraft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-14",
    "name": "Fossil Round Neck T-Shirt Plus",
    "slug": "fossil-round-neck-t-shirt-plus-fossil",
    "price": 990,
    "originalPrice": 1378,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.7,
    "reviews": 404,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-15",
    "name": "Levi's Round Neck T-Shirt Plus",
    "slug": "levi-s-round-neck-t-shirt-plus-levi-s",
    "price": 310,
    "originalPrice": 425,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.9,
    "reviews": 1315,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-16",
    "name": "Fossil Round Neck T-Shirt Basic",
    "slug": "fossil-round-neck-t-shirt-basic-fossil",
    "price": 1250,
    "originalPrice": 1250,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3,
    "reviews": 1170,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-17",
    "name": "Skechers Round Neck T-Shirt Pro",
    "slug": "skechers-round-neck-t-shirt-pro-skechers",
    "price": 1270,
    "originalPrice": 1270,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3,
    "reviews": 181,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-18",
    "name": "H&M Round Neck T-Shirt Plus",
    "slug": "h-m-round-neck-t-shirt-plus-h-m",
    "price": 350,
    "originalPrice": 350,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.9,
    "reviews": 730,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-19",
    "name": "Nike Denim Jeans Elite",
    "slug": "nike-denim-jeans-elite",
    "price": 2580,
    "originalPrice": 2580,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.7,
    "reviews": 504,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1542272454-79f62f02b3c7?w=400&h=400&fit=crop",
    "description": "High-quality denim jeans from Nike. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-20",
    "name": "Roadster Denim Jeans Premium",
    "slug": "roadster-denim-jeans-premium-roadster",
    "price": 2860,
    "originalPrice": 3259,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.3,
    "reviews": 809,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542272454-79f62f02b3c7?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-21",
    "name": "H&M Denim Jeans",
    "slug": "h-m-denim-jeans-h-m",
    "price": 1380,
    "originalPrice": 1380,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.2,
    "reviews": 850,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542272454-79f62f02b3c7?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-22",
    "name": "Nike Denim Jeans Ultra",
    "slug": "nike-denim-jeans-ultra-nike",
    "price": 2850,
    "originalPrice": 4244,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.7,
    "reviews": 920,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542272454-79f62f02b3c7?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-23",
    "name": "Tommy Hilfiger Denim Jeans Basic",
    "slug": "tommy-hilfiger-denim-jeans-basic-tommy-hilfiger",
    "price": 2770,
    "originalPrice": 3752,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.3,
    "reviews": 616,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542272454-79f62f02b3c7?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-24",
    "name": "Fossil Formal Shirt Elite",
    "slug": "fossil-formal-shirt-elite",
    "price": 560,
    "originalPrice": 797,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.9,
    "reviews": 28,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "High-quality formal shirt from Fossil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-25",
    "name": "Roadster Formal Shirt Deluxe",
    "slug": "roadster-formal-shirt-deluxe-roadster",
    "price": 680,
    "originalPrice": 772,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.3,
    "reviews": 1251,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-26",
    "name": "Adidas Formal Shirt Elite",
    "slug": "adidas-formal-shirt-elite-adidas",
    "price": 1210,
    "originalPrice": 1210,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.9,
    "reviews": 842,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-27",
    "name": "Diesel Formal Shirt Elite",
    "slug": "diesel-formal-shirt-elite-diesel",
    "price": 780,
    "originalPrice": 1001,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.2,
    "reviews": 152,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-28",
    "name": "Fossil Formal Shirt Pro",
    "slug": "fossil-formal-shirt-pro-fossil",
    "price": 1920,
    "originalPrice": 3006,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.1,
    "reviews": 810,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-29",
    "name": "Diesel Formal Shirt Premium",
    "slug": "diesel-formal-shirt-premium-diesel",
    "price": 1770,
    "originalPrice": 2631,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.4,
    "reviews": 1114,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-30",
    "name": "USPA Formal Shirt",
    "slug": "uspa-formal-shirt-uspa",
    "price": 1390,
    "originalPrice": 1390,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.5,
    "reviews": 167,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-31",
    "name": "HRX Leather Belt Pro",
    "slug": "hrx-leather-belt-pro",
    "price": 1380,
    "originalPrice": 1380,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.6,
    "reviews": 756,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "High-quality leather belt from HRX. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-32",
    "name": "Wildcraft Leather Belt Plus",
    "slug": "wildcraft-leather-belt-plus-wildcraft",
    "price": 780,
    "originalPrice": 1222,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.8,
    "reviews": 1336,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-33",
    "name": "Levi's Leather Belt Plus",
    "slug": "levi-s-leather-belt-plus-levi-s",
    "price": 1240,
    "originalPrice": 1240,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.6,
    "reviews": 499,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-34",
    "name": "Skechers Leather Belt Elite",
    "slug": "skechers-leather-belt-elite-skechers",
    "price": 1100,
    "originalPrice": 1100,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.1,
    "reviews": 674,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-35",
    "name": "Levi's Leather Belt Standard",
    "slug": "levi-s-leather-belt-standard-levi-s",
    "price": 490,
    "originalPrice": 683,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.6,
    "reviews": 209,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-36",
    "name": "Zara Leather Belt Pro",
    "slug": "zara-leather-belt-pro-zara",
    "price": 1230,
    "originalPrice": 1425,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.9,
    "reviews": 743,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-37",
    "name": "Tommy Hilfiger Leather Belt Basic",
    "slug": "tommy-hilfiger-leather-belt-basic-tommy-hilfiger",
    "price": 550,
    "originalPrice": 771,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.7,
    "reviews": 741,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-38",
    "name": "H&M Sports Cap Deluxe",
    "slug": "h-m-sports-cap-deluxe",
    "price": 390,
    "originalPrice": 594,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.5,
    "reviews": 1776,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "High-quality sports cap from H&M. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-39",
    "name": "Skechers Sports Cap Premium",
    "slug": "skechers-sports-cap-premium-skechers",
    "price": 540,
    "originalPrice": 540,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.2,
    "reviews": 478,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-40",
    "name": "Ray-Ban Sports Cap Basic",
    "slug": "ray-ban-sports-cap-basic-ray-ban",
    "price": 650,
    "originalPrice": 744,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.6,
    "reviews": 577,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-41",
    "name": "Roadster Sports Cap Basic",
    "slug": "roadster-sports-cap-basic-roadster",
    "price": 790,
    "originalPrice": 790,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.8,
    "reviews": 526,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-42",
    "name": "Fossil Sports Cap Basic",
    "slug": "fossil-sports-cap-basic-fossil",
    "price": 400,
    "originalPrice": 400,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.7,
    "reviews": 1027,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-43",
    "name": "Roadster Sports Cap",
    "slug": "roadster-sports-cap-roadster",
    "price": 780,
    "originalPrice": 1056,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.8,
    "reviews": 1357,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-44",
    "name": "Wildcraft Sports Cap Premium",
    "slug": "wildcraft-sports-cap-premium-wildcraft",
    "price": 260,
    "originalPrice": 260,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4,
    "reviews": 1094,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-45",
    "name": "Fossil Wrist Watch Ultra",
    "slug": "fossil-wrist-watch-ultra",
    "price": 4690,
    "originalPrice": 4690,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.7,
    "reviews": 1823,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "High-quality wrist watch from Fossil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-46",
    "name": "Puma Wrist Watch Premium",
    "slug": "puma-wrist-watch-premium-puma",
    "price": 2730,
    "originalPrice": 3170,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.3,
    "reviews": 1240,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-47",
    "name": "USPA Wrist Watch",
    "slug": "uspa-wrist-watch-uspa",
    "price": 670,
    "originalPrice": 1024,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.1,
    "reviews": 315,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-48",
    "name": "Ray-Ban Wrist Watch Pro",
    "slug": "ray-ban-wrist-watch-pro-ray-ban",
    "price": 2660,
    "originalPrice": 3443,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.1,
    "reviews": 1088,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-49",
    "name": "USPA Wrist Watch Elite",
    "slug": "uspa-wrist-watch-elite-uspa",
    "price": 4630,
    "originalPrice": 4630,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.9,
    "reviews": 912,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-50",
    "name": "Ray-Ban Casual Shorts Pro",
    "slug": "ray-ban-casual-shorts-pro",
    "price": 830,
    "originalPrice": 1161,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.4,
    "reviews": 1738,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "High-quality casual shorts from Ray-Ban. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-51",
    "name": "Tommy Hilfiger Casual Shorts Basic",
    "slug": "tommy-hilfiger-casual-shorts-basic-tommy-hilfiger",
    "price": 1390,
    "originalPrice": 1870,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.2,
    "reviews": 1197,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-52",
    "name": "Adidas Casual Shorts Deluxe",
    "slug": "adidas-casual-shorts-deluxe-adidas",
    "price": 1370,
    "originalPrice": 1684,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.2,
    "reviews": 239,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-53",
    "name": "USPA Casual Shorts Standard",
    "slug": "uspa-casual-shorts-standard-uspa",
    "price": 1300,
    "originalPrice": 1300,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 5,
    "reviews": 73,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-54",
    "name": "Ray-Ban Casual Shorts Elite",
    "slug": "ray-ban-casual-shorts-elite-ray-ban",
    "price": 1450,
    "originalPrice": 1450,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.2,
    "reviews": 1032,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-55",
    "name": "H&M Casual Shorts Ultra",
    "slug": "h-m-casual-shorts-ultra-h-m",
    "price": 690,
    "originalPrice": 690,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.2,
    "reviews": 194,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-56",
    "name": "Tommy Hilfiger Winter Gloves Ultra",
    "slug": "tommy-hilfiger-winter-gloves-ultra",
    "price": 400,
    "originalPrice": 400,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 5,
    "reviews": 1967,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "High-quality winter gloves from Tommy Hilfiger. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-57",
    "name": "Zara Winter Gloves Basic",
    "slug": "zara-winter-gloves-basic-zara",
    "price": 420,
    "originalPrice": 420,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.1,
    "reviews": 750,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-58",
    "name": "Zara Winter Gloves Standard",
    "slug": "zara-winter-gloves-standard-zara",
    "price": 520,
    "originalPrice": 789,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.4,
    "reviews": 754,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-59",
    "name": "H&M Winter Gloves Pro",
    "slug": "h-m-winter-gloves-pro-h-m",
    "price": 600,
    "originalPrice": 901,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.3,
    "reviews": 1471,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-60",
    "name": "Skechers Winter Gloves Premium",
    "slug": "skechers-winter-gloves-premium-skechers",
    "price": 760,
    "originalPrice": 760,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.6,
    "reviews": 888,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-61",
    "name": "Fossil Winter Gloves Basic",
    "slug": "fossil-winter-gloves-basic-fossil",
    "price": 430,
    "originalPrice": 430,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.8,
    "reviews": 1383,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-62",
    "name": "Zara Sunglasses Deluxe",
    "slug": "zara-sunglasses-deluxe",
    "price": 1470,
    "originalPrice": 1470,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.6,
    "reviews": 408,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "High-quality sunglasses from Zara. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-63",
    "name": "Fossil Sunglasses",
    "slug": "fossil-sunglasses-fossil",
    "price": 1680,
    "originalPrice": 2053,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.9,
    "reviews": 62,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-64",
    "name": "Adidas Sunglasses Premium",
    "slug": "adidas-sunglasses-premium-adidas",
    "price": 1160,
    "originalPrice": 1649,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.3,
    "reviews": 620,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-65",
    "name": "Levi's Sunglasses Basic",
    "slug": "levi-s-sunglasses-basic-levi-s",
    "price": 2410,
    "originalPrice": 2410,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4,
    "reviews": 1302,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-66",
    "name": "Skechers Sunglasses Pro",
    "slug": "skechers-sunglasses-pro-skechers",
    "price": 720,
    "originalPrice": 720,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.2,
    "reviews": 814,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-67",
    "name": "Zara Wallet RFID Deluxe",
    "slug": "zara-wallet-rfid-deluxe",
    "price": 600,
    "originalPrice": 600,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.8,
    "reviews": 1402,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "High-quality wallet rfid from Zara. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-68",
    "name": "Puma Wallet RFID Basic",
    "slug": "puma-wallet-rfid-basic-puma",
    "price": 1350,
    "originalPrice": 1350,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.8,
    "reviews": 1234,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-69",
    "name": "Diesel Wallet RFID Elite",
    "slug": "diesel-wallet-rfid-elite-diesel",
    "price": 900,
    "originalPrice": 1122,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 5,
    "reviews": 485,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-70",
    "name": "Puma Wallet RFID Standard",
    "slug": "puma-wallet-rfid-standard-puma",
    "price": 1140,
    "originalPrice": 1551,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.8,
    "reviews": 1016,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-71",
    "name": "Nike Wallet RFID Basic",
    "slug": "nike-wallet-rfid-basic-nike",
    "price": 580,
    "originalPrice": 780,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.4,
    "reviews": 1259,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-1",
    "name": "Prestige Non-Stick Tawa",
    "slug": "prestige-non-stick-tawa",
    "price": 840,
    "originalPrice": 994,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.9,
    "reviews": 1026,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "High-quality non-stick tawa from Prestige. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-2",
    "name": "Borosil Non-Stick Tawa Ultra",
    "slug": "borosil-non-stick-tawa-ultra-borosil",
    "price": 330,
    "originalPrice": 330,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.5,
    "reviews": 551,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-3",
    "name": "Borosil Non-Stick Tawa Basic",
    "slug": "borosil-non-stick-tawa-basic-borosil",
    "price": 1360,
    "originalPrice": 1497,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.1,
    "reviews": 1383,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-4",
    "name": "Signoraware Non-Stick Tawa Basic",
    "slug": "signoraware-non-stick-tawa-basic-signoraware",
    "price": 1190,
    "originalPrice": 1190,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.1,
    "reviews": 253,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-5",
    "name": "Milton Non-Stick Tawa Ultra",
    "slug": "milton-non-stick-tawa-ultra-milton",
    "price": 380,
    "originalPrice": 508,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 5,
    "reviews": 23,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-6",
    "name": "Milton Non-Stick Tawa Pro",
    "slug": "milton-non-stick-tawa-pro-milton",
    "price": 860,
    "originalPrice": 1355,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.5,
    "reviews": 1482,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-7",
    "name": "Butterfly Microwave Safe Bowl Set Premium",
    "slug": "butterfly-microwave-safe-bowl-set-premium",
    "price": 340,
    "originalPrice": 340,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.2,
    "reviews": 1498,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "High-quality microwave safe bowl set from Butterfly. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-8",
    "name": "Borosil Microwave Safe Bowl Set Pro",
    "slug": "borosil-microwave-safe-bowl-set-pro-borosil",
    "price": 460,
    "originalPrice": 460,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.2,
    "reviews": 1093,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-9",
    "name": "Wakefit Microwave Safe Bowl Set Premium",
    "slug": "wakefit-microwave-safe-bowl-set-premium-wakefit",
    "price": 750,
    "originalPrice": 750,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.6,
    "reviews": 1336,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-10",
    "name": "Butterfly Microwave Safe Bowl Set Plus",
    "slug": "butterfly-microwave-safe-bowl-set-plus-butterfly",
    "price": 710,
    "originalPrice": 710,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.4,
    "reviews": 71,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-11",
    "name": "Prestige Vegetable Chopper Premium",
    "slug": "prestige-vegetable-chopper-premium",
    "price": 360,
    "originalPrice": 434,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.8,
    "reviews": 1440,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "High-quality vegetable chopper from Prestige. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-12",
    "name": "Pigeon Vegetable Chopper Premium",
    "slug": "pigeon-vegetable-chopper-premium-pigeon",
    "price": 450,
    "originalPrice": 665,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.3,
    "reviews": 705,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-13",
    "name": "Milton Vegetable Chopper Plus",
    "slug": "milton-vegetable-chopper-plus-milton",
    "price": 520,
    "originalPrice": 520,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.4,
    "reviews": 151,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-14",
    "name": "Pigeon Vegetable Chopper",
    "slug": "pigeon-vegetable-chopper-pigeon",
    "price": 740,
    "originalPrice": 740,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.6,
    "reviews": 829,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-15",
    "name": "Vidiem Vegetable Chopper Deluxe",
    "slug": "vidiem-vegetable-chopper-deluxe-vidiem",
    "price": 510,
    "originalPrice": 668,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.7,
    "reviews": 685,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-16",
    "name": "Vidiem Vegetable Chopper Pro",
    "slug": "vidiem-vegetable-chopper-pro-vidiem",
    "price": 220,
    "originalPrice": 220,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.9,
    "reviews": 587,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-17",
    "name": "Borosil Spice Rack Elite",
    "slug": "borosil-spice-rack-elite",
    "price": 430,
    "originalPrice": 638,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.9,
    "reviews": 1932,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality spice rack from Borosil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-18",
    "name": "Milton Spice Rack Pro",
    "slug": "milton-spice-rack-pro-milton",
    "price": 440,
    "originalPrice": 440,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.9,
    "reviews": 93,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-19",
    "name": "Vidiem Spice Rack Deluxe",
    "slug": "vidiem-spice-rack-deluxe-vidiem",
    "price": 700,
    "originalPrice": 700,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.6,
    "reviews": 585,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-20",
    "name": "Vidiem Spice Rack",
    "slug": "vidiem-spice-rack-vidiem",
    "price": 610,
    "originalPrice": 610,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.9,
    "reviews": 26,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-21",
    "name": "Signoraware Spice Rack Pro",
    "slug": "signoraware-spice-rack-pro-signoraware",
    "price": 450,
    "originalPrice": 703,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.8,
    "reviews": 234,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-22",
    "name": "Signoraware Spice Rack Elite",
    "slug": "signoraware-spice-rack-elite-signoraware",
    "price": 240,
    "originalPrice": 321,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.9,
    "reviews": 97,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-23",
    "name": "Prestige Tumbler Glass Set Basic",
    "slug": "prestige-tumbler-glass-set-basic",
    "price": 230,
    "originalPrice": 314,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.7,
    "reviews": 737,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "High-quality tumbler glass set from Prestige. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-24",
    "name": "Borosil Tumbler Glass Set",
    "slug": "borosil-tumbler-glass-set-borosil",
    "price": 490,
    "originalPrice": 653,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.3,
    "reviews": 1147,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-25",
    "name": "Hawkins Tumbler Glass Set Ultra",
    "slug": "hawkins-tumbler-glass-set-ultra-hawkins",
    "price": 380,
    "originalPrice": 380,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.4,
    "reviews": 1100,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-26",
    "name": "Cello Tumbler Glass Set Basic",
    "slug": "cello-tumbler-glass-set-basic-cello",
    "price": 480,
    "originalPrice": 625,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.2,
    "reviews": 944,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-27",
    "name": "Borosil Tumbler Glass Set Elite",
    "slug": "borosil-tumbler-glass-set-elite-borosil",
    "price": 590,
    "originalPrice": 590,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.8,
    "reviews": 638,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-28",
    "name": "Pigeon Tumbler Glass Set Ultra",
    "slug": "pigeon-tumbler-glass-set-ultra-pigeon",
    "price": 260,
    "originalPrice": 260,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.7,
    "reviews": 191,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-29",
    "name": "Hawkins Tumbler Glass Set Plus",
    "slug": "hawkins-tumbler-glass-set-plus-hawkins",
    "price": 560,
    "originalPrice": 560,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.1,
    "reviews": 679,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-30",
    "name": "Milton Kitchen Tongs Elite",
    "slug": "milton-kitchen-tongs-elite",
    "price": 220,
    "originalPrice": 220,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.2,
    "reviews": 242,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "High-quality kitchen tongs from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-31",
    "name": "Hawkins Kitchen Tongs",
    "slug": "hawkins-kitchen-tongs-hawkins",
    "price": 250,
    "originalPrice": 287,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.8,
    "reviews": 1104,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-32",
    "name": "Milton Kitchen Tongs Basic",
    "slug": "milton-kitchen-tongs-basic-milton",
    "price": 240,
    "originalPrice": 240,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.1,
    "reviews": 1052,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-33",
    "name": "Cello Kitchen Tongs Pro",
    "slug": "cello-kitchen-tongs-pro-cello",
    "price": 360,
    "originalPrice": 360,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.7,
    "reviews": 71,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-34",
    "name": "Butterfly Kitchen Tongs Ultra",
    "slug": "butterfly-kitchen-tongs-ultra-butterfly",
    "price": 190,
    "originalPrice": 190,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.2,
    "reviews": 1191,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-35",
    "name": "Wakefit Dinner Plate Set Basic",
    "slug": "wakefit-dinner-plate-set-basic",
    "price": 1220,
    "originalPrice": 1536,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.6,
    "reviews": 373,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "High-quality dinner plate set from Wakefit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-36",
    "name": "Prestige Dinner Plate Set Ultra",
    "slug": "prestige-dinner-plate-set-ultra-prestige",
    "price": 1100,
    "originalPrice": 1100,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.9,
    "reviews": 362,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-37",
    "name": "Butterfly Dinner Plate Set Standard",
    "slug": "butterfly-dinner-plate-set-standard-butterfly",
    "price": 1040,
    "originalPrice": 1443,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.9,
    "reviews": 1378,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-38",
    "name": "Vidiem Dinner Plate Set Premium",
    "slug": "vidiem-dinner-plate-set-premium-vidiem",
    "price": 1110,
    "originalPrice": 1310,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.7,
    "reviews": 199,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-39",
    "name": "Signoraware Dinner Plate Set Plus",
    "slug": "signoraware-dinner-plate-set-plus-signoraware",
    "price": 1740,
    "originalPrice": 2123,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.6,
    "reviews": 502,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-40",
    "name": "Signoraware Storage Jar Set Elite",
    "slug": "signoraware-storage-jar-set-elite",
    "price": 660,
    "originalPrice": 885,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.8,
    "reviews": 1407,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "High-quality storage jar set from Signoraware. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-41",
    "name": "Milton Storage Jar Set Basic",
    "slug": "milton-storage-jar-set-basic-milton",
    "price": 540,
    "originalPrice": 540,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.2,
    "reviews": 129,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-42",
    "name": "Pigeon Storage Jar Set Basic",
    "slug": "pigeon-storage-jar-set-basic-pigeon",
    "price": 790,
    "originalPrice": 1216,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3,
    "reviews": 484,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-43",
    "name": "Signoraware Storage Jar Set",
    "slug": "signoraware-storage-jar-set-signoraware",
    "price": 570,
    "originalPrice": 570,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.6,
    "reviews": 338,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-44",
    "name": "Vidiem Storage Jar Set Pro",
    "slug": "vidiem-storage-jar-set-pro-vidiem",
    "price": 330,
    "originalPrice": 396,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.8,
    "reviews": 288,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-45",
    "name": "Vidiem Mop Floor Cleaner Plus",
    "slug": "vidiem-mop-floor-cleaner-plus",
    "price": 470,
    "originalPrice": 470,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.6,
    "reviews": 239,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "High-quality mop floor cleaner from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-46",
    "name": "Borosil Mop Floor Cleaner Deluxe",
    "slug": "borosil-mop-floor-cleaner-deluxe-borosil",
    "price": 510,
    "originalPrice": 510,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.4,
    "reviews": 108,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-47",
    "name": "Vidiem Mop Floor Cleaner Ultra",
    "slug": "vidiem-mop-floor-cleaner-ultra-vidiem",
    "price": 440,
    "originalPrice": 506,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.2,
    "reviews": 633,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-48",
    "name": "Wakefit Mop Floor Cleaner Ultra",
    "slug": "wakefit-mop-floor-cleaner-ultra-wakefit",
    "price": 220,
    "originalPrice": 314,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.5,
    "reviews": 455,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-49",
    "name": "Pigeon Mop Floor Cleaner Deluxe",
    "slug": "pigeon-mop-floor-cleaner-deluxe-pigeon",
    "price": 600,
    "originalPrice": 948,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.9,
    "reviews": 434,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-50",
    "name": "Wakefit Mop Floor Cleaner Elite",
    "slug": "wakefit-mop-floor-cleaner-elite-wakefit",
    "price": 730,
    "originalPrice": 730,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.9,
    "reviews": 505,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-51",
    "name": "Hawkins Clothes Hanger Set Elite",
    "slug": "hawkins-clothes-hanger-set-elite",
    "price": 390,
    "originalPrice": 390,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.3,
    "reviews": 52,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "High-quality clothes hanger set from Hawkins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-52",
    "name": "Hawkins Clothes Hanger Set Premium",
    "slug": "hawkins-clothes-hanger-set-premium-hawkins",
    "price": 140,
    "originalPrice": 208,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.5,
    "reviews": 760,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-53",
    "name": "Vidiem Clothes Hanger Set Standard",
    "slug": "vidiem-clothes-hanger-set-standard-vidiem",
    "price": 340,
    "originalPrice": 446,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.7,
    "reviews": 1015,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-54",
    "name": "Borosil Clothes Hanger Set Elite",
    "slug": "borosil-clothes-hanger-set-elite-borosil",
    "price": 240,
    "originalPrice": 309,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.7,
    "reviews": 329,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-55",
    "name": "Signoraware Clothes Hanger Set Plus",
    "slug": "signoraware-clothes-hanger-set-plus-signoraware",
    "price": 310,
    "originalPrice": 475,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3,
    "reviews": 983,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-56",
    "name": "Butterfly Clothes Hanger Set Elite",
    "slug": "butterfly-clothes-hanger-set-elite-butterfly",
    "price": 380,
    "originalPrice": 563,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.1,
    "reviews": 1287,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-57",
    "name": "Hawkins Clothes Hanger Set Pro",
    "slug": "hawkins-clothes-hanger-set-pro-hawkins",
    "price": 110,
    "originalPrice": 158,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.6,
    "reviews": 1131,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-58",
    "name": "Butterfly Door Mat Elite",
    "slug": "butterfly-door-mat-elite",
    "price": 420,
    "originalPrice": 503,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.9,
    "reviews": 1198,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "High-quality door mat from Butterfly. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-59",
    "name": "Butterfly Door Mat Standard",
    "slug": "butterfly-door-mat-standard-butterfly",
    "price": 200,
    "originalPrice": 200,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.5,
    "reviews": 225,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium door mat from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-60",
    "name": "Pigeon Door Mat Premium",
    "slug": "pigeon-door-mat-premium-pigeon",
    "price": 250,
    "originalPrice": 250,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.9,
    "reviews": 1435,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium door mat from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-61",
    "name": "Wakefit Door Mat Basic",
    "slug": "wakefit-door-mat-basic-wakefit",
    "price": 220,
    "originalPrice": 220,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.1,
    "reviews": 101,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium door mat from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-62",
    "name": "Borosil Door Mat Pro",
    "slug": "borosil-door-mat-pro-borosil",
    "price": 230,
    "originalPrice": 230,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.7,
    "reviews": 159,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium door mat from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-63",
    "name": "Prestige Door Mat",
    "slug": "prestige-door-mat-prestige",
    "price": 320,
    "originalPrice": 478,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.4,
    "reviews": 849,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium door mat from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-64",
    "name": "Pigeon Door Mat Pro",
    "slug": "pigeon-door-mat-pro-pigeon",
    "price": 260,
    "originalPrice": 373,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.2,
    "reviews": 1028,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium door mat from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-65",
    "name": "Milton Cushion Cover Set Pro",
    "slug": "milton-cushion-cover-set-pro",
    "price": 790,
    "originalPrice": 1092,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.9,
    "reviews": 1984,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "High-quality cushion cover set from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-66",
    "name": "Cello Cushion Cover Set Elite",
    "slug": "cello-cushion-cover-set-elite-cello",
    "price": 500,
    "originalPrice": 500,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.8,
    "reviews": 67,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-67",
    "name": "Vidiem Cushion Cover Set Basic",
    "slug": "vidiem-cushion-cover-set-basic-vidiem",
    "price": 380,
    "originalPrice": 468,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.2,
    "reviews": 687,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-68",
    "name": "Milton Cushion Cover Set",
    "slug": "milton-cushion-cover-set-milton",
    "price": 720,
    "originalPrice": 720,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.3,
    "reviews": 328,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-69",
    "name": "Hawkins Cushion Cover Set Pro",
    "slug": "hawkins-cushion-cover-set-pro-hawkins",
    "price": 490,
    "originalPrice": 595,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.1,
    "reviews": 1453,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-70",
    "name": "Borosil Cushion Cover Set",
    "slug": "borosil-cushion-cover-set-borosil",
    "price": 630,
    "originalPrice": 630,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.7,
    "reviews": 20,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-1",
    "name": "Bloomsbury Fiction Bestseller",
    "slug": "bloomsbury-fiction-bestseller",
    "price": 290,
    "originalPrice": 290,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.9,
    "reviews": 85,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "High-quality fiction bestseller from Bloomsbury. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-2",
    "name": "Random House Fiction Bestseller Pro",
    "slug": "random-house-fiction-bestseller-pro-random-house",
    "price": 530,
    "originalPrice": 716,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.5,
    "reviews": 1256,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-3",
    "name": "Oxford Fiction Bestseller",
    "slug": "oxford-fiction-bestseller-oxford",
    "price": 700,
    "originalPrice": 994,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.8,
    "reviews": 424,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-4",
    "name": "Simon & Schuster Fiction Bestseller Standard",
    "slug": "simon-schuster-fiction-bestseller-standard-simon-schuster",
    "price": 410,
    "originalPrice": 410,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.8,
    "reviews": 112,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-5",
    "name": "Oxford Fiction Bestseller Ultra",
    "slug": "oxford-fiction-bestseller-ultra-oxford",
    "price": 520,
    "originalPrice": 603,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.6,
    "reviews": 1248,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-6",
    "name": "Oxford Self-Help Guide Deluxe",
    "slug": "oxford-self-help-guide-deluxe",
    "price": 540,
    "originalPrice": 540,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.8,
    "reviews": 58,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "High-quality self-help guide from Oxford. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-7",
    "name": "Scholastic Self-Help Guide Premium",
    "slug": "scholastic-self-help-guide-premium-scholastic",
    "price": 450,
    "originalPrice": 596,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.4,
    "reviews": 1082,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-8",
    "name": "Bloomsbury Self-Help Guide Standard",
    "slug": "bloomsbury-self-help-guide-standard-bloomsbury",
    "price": 230,
    "originalPrice": 230,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.4,
    "reviews": 1458,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-9",
    "name": "HarperCollins Self-Help Guide Standard",
    "slug": "harpercollins-self-help-guide-standard-harpercollins",
    "price": 420,
    "originalPrice": 420,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.3,
    "reviews": 338,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-10",
    "name": "Aleph Self-Help Guide",
    "slug": "aleph-self-help-guide-aleph",
    "price": 270,
    "originalPrice": 270,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.9,
    "reviews": 910,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-11",
    "name": "Aleph Self-Help Guide Deluxe",
    "slug": "aleph-self-help-guide-deluxe-aleph",
    "price": 200,
    "originalPrice": 293,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.4,
    "reviews": 1305,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-12",
    "name": "HarperCollins Self-Help Guide Elite",
    "slug": "harpercollins-self-help-guide-elite-harpercollins",
    "price": 500,
    "originalPrice": 713,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.7,
    "reviews": 266,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-13",
    "name": "HarperCollins Indian History Book Premium",
    "slug": "harpercollins-indian-history-book-premium",
    "price": 820,
    "originalPrice": 1042,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.2,
    "reviews": 1718,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "High-quality indian history book from HarperCollins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-14",
    "name": "Aleph Indian History Book Elite",
    "slug": "aleph-indian-history-book-elite-aleph",
    "price": 890,
    "originalPrice": 1147,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.2,
    "reviews": 984,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-15",
    "name": "Oxford Indian History Book Pro",
    "slug": "oxford-indian-history-book-pro-oxford",
    "price": 860,
    "originalPrice": 860,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3,
    "reviews": 1323,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-16",
    "name": "HarperCollins Indian History Book Pro",
    "slug": "harpercollins-indian-history-book-pro-harpercollins",
    "price": 480,
    "originalPrice": 719,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.5,
    "reviews": 556,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium indian history book from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-17",
    "name": "Oxford Indian History Book Elite",
    "slug": "oxford-indian-history-book-elite-oxford",
    "price": 490,
    "originalPrice": 490,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3,
    "reviews": 919,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-18",
    "name": "Rupa Indian History Book Pro",
    "slug": "rupa-indian-history-book-pro-rupa",
    "price": 940,
    "originalPrice": 1195,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.3,
    "reviews": 973,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-19",
    "name": "Simon & Schuster Children Storybook Plus",
    "slug": "simon-schuster-children-storybook-plus",
    "price": 460,
    "originalPrice": 460,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.8,
    "reviews": 1204,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "High-quality children storybook from Simon & Schuster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-20",
    "name": "Simon & Schuster Children Storybook",
    "slug": "simon-schuster-children-storybook-simon-schuster",
    "price": 280,
    "originalPrice": 420,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.8,
    "reviews": 1444,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-21",
    "name": "Random House Children Storybook Ultra",
    "slug": "random-house-children-storybook-ultra-random-house",
    "price": 190,
    "originalPrice": 284,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.9,
    "reviews": 40,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-22",
    "name": "Bloomsbury Children Storybook Ultra",
    "slug": "bloomsbury-children-storybook-ultra-bloomsbury",
    "price": 170,
    "originalPrice": 222,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.2,
    "reviews": 38,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-23",
    "name": "Penguin Children Storybook Ultra",
    "slug": "penguin-children-storybook-ultra-penguin",
    "price": 280,
    "originalPrice": 328,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.2,
    "reviews": 1165,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-24",
    "name": "Bloomsbury Children Storybook Premium",
    "slug": "bloomsbury-children-storybook-premium-bloomsbury",
    "price": 430,
    "originalPrice": 430,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.7,
    "reviews": 1423,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-25",
    "name": "Aleph Cooking Recipe Book Pro",
    "slug": "aleph-cooking-recipe-book-pro",
    "price": 420,
    "originalPrice": 595,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.4,
    "reviews": 193,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "High-quality cooking recipe book from Aleph. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-26",
    "name": "Oxford Cooking Recipe Book Plus",
    "slug": "oxford-cooking-recipe-book-plus-oxford",
    "price": 630,
    "originalPrice": 630,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.4,
    "reviews": 370,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-27",
    "name": "Simon & Schuster Cooking Recipe Book Elite",
    "slug": "simon-schuster-cooking-recipe-book-elite-simon-schuster",
    "price": 400,
    "originalPrice": 400,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.4,
    "reviews": 439,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-28",
    "name": "Bloomsbury Cooking Recipe Book Pro",
    "slug": "bloomsbury-cooking-recipe-book-pro-bloomsbury",
    "price": 410,
    "originalPrice": 545,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.5,
    "reviews": 1489,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-29",
    "name": "Oxford Cooking Recipe Book Basic",
    "slug": "oxford-cooking-recipe-book-basic-oxford",
    "price": 530,
    "originalPrice": 637,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.5,
    "reviews": 1032,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-30",
    "name": "Bloomsbury Cooking Recipe Book Standard",
    "slug": "bloomsbury-cooking-recipe-book-standard-bloomsbury",
    "price": 540,
    "originalPrice": 750,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.3,
    "reviews": 446,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-31",
    "name": "Aleph Exam Guide Premium",
    "slug": "aleph-exam-guide-premium",
    "price": 220,
    "originalPrice": 274,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.9,
    "reviews": 95,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "High-quality exam guide from Aleph. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-32",
    "name": "Scholastic Exam Guide Elite",
    "slug": "scholastic-exam-guide-elite-scholastic",
    "price": 520,
    "originalPrice": 520,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.8,
    "reviews": 467,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-33",
    "name": "Scholastic Exam Guide Ultra",
    "slug": "scholastic-exam-guide-ultra-scholastic",
    "price": 340,
    "originalPrice": 498,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.2,
    "reviews": 640,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-34",
    "name": "Random House Exam Guide Basic",
    "slug": "random-house-exam-guide-basic-random-house",
    "price": 290,
    "originalPrice": 428,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.4,
    "reviews": 366,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-35",
    "name": "Simon & Schuster Exam Guide Standard",
    "slug": "simon-schuster-exam-guide-standard-simon-schuster",
    "price": 230,
    "originalPrice": 230,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3,
    "reviews": 952,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-36",
    "name": "Bloomsbury Exam Guide Basic",
    "slug": "bloomsbury-exam-guide-basic-bloomsbury",
    "price": 580,
    "originalPrice": 837,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.6,
    "reviews": 570,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-37",
    "name": "Rupa Exam Guide Pro",
    "slug": "rupa-exam-guide-pro-rupa",
    "price": 540,
    "originalPrice": 540,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.4,
    "reviews": 1116,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-38",
    "name": "HarperCollins Art Sketchbook Plus",
    "slug": "harpercollins-art-sketchbook-plus",
    "price": 190,
    "originalPrice": 240,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.8,
    "reviews": 303,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality art sketchbook from HarperCollins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-39",
    "name": "Simon & Schuster Art Sketchbook Pro",
    "slug": "simon-schuster-art-sketchbook-pro-simon-schuster",
    "price": 430,
    "originalPrice": 490,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.9,
    "reviews": 643,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-40",
    "name": "Simon & Schuster Art Sketchbook Ultra",
    "slug": "simon-schuster-art-sketchbook-ultra-simon-schuster",
    "price": 330,
    "originalPrice": 443,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.7,
    "reviews": 724,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-41",
    "name": "Random House Art Sketchbook Premium",
    "slug": "random-house-art-sketchbook-premium-random-house",
    "price": 420,
    "originalPrice": 599,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.5,
    "reviews": 1044,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-42",
    "name": "Oxford Art Sketchbook Pro",
    "slug": "oxford-art-sketchbook-pro-oxford",
    "price": 250,
    "originalPrice": 250,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.2,
    "reviews": 81,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-43",
    "name": "Rupa Art Sketchbook Standard",
    "slug": "rupa-art-sketchbook-standard-rupa",
    "price": 320,
    "originalPrice": 320,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.1,
    "reviews": 1136,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-44",
    "name": "Aleph Art Sketchbook Elite",
    "slug": "aleph-art-sketchbook-elite-aleph",
    "price": 300,
    "originalPrice": 340,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3,
    "reviews": 567,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-45",
    "name": "Oxford Fountain Pen Premium",
    "slug": "oxford-fountain-pen-premium",
    "price": 1420,
    "originalPrice": 1420,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.9,
    "reviews": 1204,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "High-quality fountain pen from Oxford. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "bo-46",
    "name": "Simon & Schuster Fountain Pen",
    "slug": "simon-schuster-fountain-pen-simon-schuster",
    "price": 300,
    "originalPrice": 413,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4,
    "reviews": 1318,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-47",
    "name": "Puffin Fountain Pen Pro",
    "slug": "puffin-fountain-pen-pro-puffin",
    "price": 800,
    "originalPrice": 800,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.3,
    "reviews": 795,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-48",
    "name": "Puffin Fountain Pen Elite",
    "slug": "puffin-fountain-pen-elite-puffin",
    "price": 1430,
    "originalPrice": 1960,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.9,
    "reviews": 493,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-49",
    "name": "Random House Gift Wrapping Set Pro",
    "slug": "random-house-gift-wrapping-set-pro",
    "price": 160,
    "originalPrice": 160,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3.7,
    "reviews": 1005,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "High-quality gift wrapping set from Random House. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-50",
    "name": "Simon & Schuster Gift Wrapping Set",
    "slug": "simon-schuster-gift-wrapping-set-simon-schuster",
    "price": 200,
    "originalPrice": 200,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.5,
    "reviews": 386,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-51",
    "name": "Rupa Gift Wrapping Set Pro",
    "slug": "rupa-gift-wrapping-set-pro-rupa",
    "price": 390,
    "originalPrice": 499,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3.7,
    "reviews": 934,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-52",
    "name": "Scholastic Gift Wrapping Set Plus",
    "slug": "scholastic-gift-wrapping-set-plus-scholastic",
    "price": 200,
    "originalPrice": 303,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.7,
    "reviews": 576,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-53",
    "name": "Scholastic Gift Wrapping Set Elite",
    "slug": "scholastic-gift-wrapping-set-elite-scholastic",
    "price": 120,
    "originalPrice": 120,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3,
    "reviews": 719,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-54",
    "name": "Simon & Schuster Gift Wrapping Set Ultra",
    "slug": "simon-schuster-gift-wrapping-set-ultra-simon-schuster",
    "price": 200,
    "originalPrice": 200,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3.6,
    "reviews": 158,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-1",
    "name": "Speed Skipping Rope Premium",
    "slug": "speed-skipping-rope-premium",
    "price": 120,
    "originalPrice": 120,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.5,
    "reviews": 1066,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "High-quality skipping rope from Speed. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-2",
    "name": "Speed Skipping Rope Standard",
    "slug": "speed-skipping-rope-standard-speed",
    "price": 120,
    "originalPrice": 120,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.2,
    "reviews": 476,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-3",
    "name": "BSN Skipping Rope Standard",
    "slug": "bsn-skipping-rope-standard-bsn",
    "price": 100,
    "originalPrice": 100,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.4,
    "reviews": 1431,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-4",
    "name": "Strauss Skipping Rope Basic",
    "slug": "strauss-skipping-rope-basic-strauss",
    "price": 300,
    "originalPrice": 470,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 5,
    "reviews": 1474,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-5",
    "name": "BSN Skipping Rope Premium",
    "slug": "bsn-skipping-rope-premium-bsn",
    "price": 390,
    "originalPrice": 390,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.4,
    "reviews": 1440,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-6",
    "name": "Strauss Push Up Stand Plus",
    "slug": "strauss-push-up-stand-plus",
    "price": 330,
    "originalPrice": 330,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.5,
    "reviews": 48,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "High-quality push up stand from Strauss. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-7",
    "name": "Cosco Push Up Stand Premium",
    "slug": "cosco-push-up-stand-premium-cosco",
    "price": 730,
    "originalPrice": 1008,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.8,
    "reviews": 750,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-8",
    "name": "Strauss Push Up Stand Basic",
    "slug": "strauss-push-up-stand-basic-strauss",
    "price": 500,
    "originalPrice": 746,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.4,
    "reviews": 1330,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-9",
    "name": "Cosco Push Up Stand Pro",
    "slug": "cosco-push-up-stand-pro-cosco",
    "price": 440,
    "originalPrice": 440,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.6,
    "reviews": 1183,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-10",
    "name": "Fitkit Push Up Stand Elite",
    "slug": "fitkit-push-up-stand-elite-fitkit",
    "price": 800,
    "originalPrice": 800,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.4,
    "reviews": 17,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-11",
    "name": "Nivia Push Up Stand Deluxe",
    "slug": "nivia-push-up-stand-deluxe-nivia",
    "price": 780,
    "originalPrice": 780,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.1,
    "reviews": 76,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-12",
    "name": "Strauss Ab Roller Wheel Deluxe",
    "slug": "strauss-ab-roller-wheel-deluxe",
    "price": 200,
    "originalPrice": 200,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4,
    "reviews": 1869,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "description": "High-quality ab roller wheel from Strauss. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-13",
    "name": "Decathlon Ab Roller Wheel Plus",
    "slug": "decathlon-ab-roller-wheel-plus-decathlon",
    "price": 300,
    "originalPrice": 379,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.9,
    "reviews": 1138,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-14",
    "name": "Proff Ab Roller Wheel Standard",
    "slug": "proff-ab-roller-wheel-standard-proff",
    "price": 410,
    "originalPrice": 521,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.4,
    "reviews": 365,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-15",
    "name": "BSN Ab Roller Wheel Pro",
    "slug": "bsn-ab-roller-wheel-pro-bsn",
    "price": 380,
    "originalPrice": 380,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.3,
    "reviews": 64,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-16",
    "name": "Puma Hand Grip Strengthener Premium",
    "slug": "puma-hand-grip-strengthener-premium",
    "price": 110,
    "originalPrice": 151,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.6,
    "reviews": 1403,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "High-quality hand grip strengthener from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-17",
    "name": "Nivia Hand Grip Strengthener Standard",
    "slug": "nivia-hand-grip-strengthener-standard-nivia",
    "price": 240,
    "originalPrice": 240,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.3,
    "reviews": 1311,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-18",
    "name": "Decathlon Hand Grip Strengthener",
    "slug": "decathlon-hand-grip-strengthener-decathlon",
    "price": 300,
    "originalPrice": 440,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4,
    "reviews": 58,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-19",
    "name": "Puma Hand Grip Strengthener Ultra",
    "slug": "puma-hand-grip-strengthener-ultra-puma",
    "price": 340,
    "originalPrice": 340,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.4,
    "reviews": 182,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-20",
    "name": "Puma Hand Grip Strengthener Pro",
    "slug": "puma-hand-grip-strengthener-pro-puma",
    "price": 100,
    "originalPrice": 100,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.6,
    "reviews": 353,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-21",
    "name": "Nivia Hand Grip Strengthener Ultra",
    "slug": "nivia-hand-grip-strengthener-ultra-nivia",
    "price": 190,
    "originalPrice": 190,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.7,
    "reviews": 553,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-22",
    "name": "Speed Tennis Ball Set Pro",
    "slug": "speed-tennis-ball-set-pro",
    "price": 400,
    "originalPrice": 544,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.8,
    "reviews": 1150,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "High-quality tennis ball set from Speed. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-23",
    "name": "Puma Tennis Ball Set Ultra",
    "slug": "puma-tennis-ball-set-ultra-puma",
    "price": 220,
    "originalPrice": 268,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.1,
    "reviews": 197,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-24",
    "name": "Decathlon Tennis Ball Set Pro",
    "slug": "decathlon-tennis-ball-set-pro-decathlon",
    "price": 560,
    "originalPrice": 759,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.4,
    "reviews": 610,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-25",
    "name": "Decathlon Tennis Ball Set Deluxe",
    "slug": "decathlon-tennis-ball-set-deluxe-decathlon",
    "price": 550,
    "originalPrice": 665,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.5,
    "reviews": 213,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-26",
    "name": "Speed Tennis Ball Set Plus",
    "slug": "speed-tennis-ball-set-plus-speed",
    "price": 540,
    "originalPrice": 703,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.8,
    "reviews": 134,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-27",
    "name": "Adidas Badminton Racket",
    "slug": "adidas-badminton-racket",
    "price": 1640,
    "originalPrice": 1640,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.7,
    "reviews": 1285,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "High-quality badminton racket from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-28",
    "name": "Proff Badminton Racket Basic",
    "slug": "proff-badminton-racket-basic-proff",
    "price": 430,
    "originalPrice": 631,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.9,
    "reviews": 1494,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-29",
    "name": "Speed Badminton Racket Standard",
    "slug": "speed-badminton-racket-standard-speed",
    "price": 940,
    "originalPrice": 940,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.5,
    "reviews": 683,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-30",
    "name": "Puma Badminton Racket Deluxe",
    "slug": "puma-badminton-racket-deluxe-puma",
    "price": 1150,
    "originalPrice": 1150,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.6,
    "reviews": 1277,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-31",
    "name": "Proff Badminton Racket Plus",
    "slug": "proff-badminton-racket-plus-proff",
    "price": 580,
    "originalPrice": 580,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.5,
    "reviews": 814,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-32",
    "name": "Proff Cricket Bat Basic",
    "slug": "proff-cricket-bat-basic",
    "price": 2440,
    "originalPrice": 2440,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.4,
    "reviews": 1482,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "High-quality cricket bat from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-33",
    "name": "Cosco Cricket Bat Plus",
    "slug": "cosco-cricket-bat-plus-cosco",
    "price": 2740,
    "originalPrice": 2740,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.4,
    "reviews": 1258,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-34",
    "name": "Puma Cricket Bat",
    "slug": "puma-cricket-bat-puma",
    "price": 1690,
    "originalPrice": 1690,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.5,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-35",
    "name": "BSN Cricket Bat Deluxe",
    "slug": "bsn-cricket-bat-deluxe-bsn",
    "price": 2550,
    "originalPrice": 2550,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.6,
    "reviews": 1407,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-36",
    "name": "Strauss Cricket Bat",
    "slug": "strauss-cricket-bat-strauss",
    "price": 1940,
    "originalPrice": 2252,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.5,
    "reviews": 408,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-37",
    "name": "Adidas Yoga Block Set Deluxe",
    "slug": "adidas-yoga-block-set-deluxe",
    "price": 260,
    "originalPrice": 368,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.6,
    "reviews": 791,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "High-quality yoga block set from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-38",
    "name": "Decathlon Yoga Block Set Standard",
    "slug": "decathlon-yoga-block-set-standard-decathlon",
    "price": 460,
    "originalPrice": 460,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.5,
    "reviews": 980,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-39",
    "name": "Puma Yoga Block Set Basic",
    "slug": "puma-yoga-block-set-basic-puma",
    "price": 200,
    "originalPrice": 319,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.6,
    "reviews": 1251,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-40",
    "name": "Fitkit Yoga Block Set Elite",
    "slug": "fitkit-yoga-block-set-elite-fitkit",
    "price": 270,
    "originalPrice": 270,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.8,
    "reviews": 1473,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-41",
    "name": "Decathlon Yoga Block Set Premium",
    "slug": "decathlon-yoga-block-set-premium-decathlon",
    "price": 580,
    "originalPrice": 580,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.2,
    "reviews": 706,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-42",
    "name": "Adidas Yoga Block Set Elite",
    "slug": "adidas-yoga-block-set-elite-adidas",
    "price": 250,
    "originalPrice": 250,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.9,
    "reviews": 932,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-43",
    "name": "Proff Cycling Water Bottle",
    "slug": "proff-cycling-water-bottle",
    "price": 280,
    "originalPrice": 280,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.8,
    "reviews": 870,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "High-quality cycling water bottle from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-44",
    "name": "BSN Cycling Water Bottle Pro",
    "slug": "bsn-cycling-water-bottle-pro-bsn",
    "price": 270,
    "originalPrice": 321,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.6,
    "reviews": 1128,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-45",
    "name": "Nivia Cycling Water Bottle",
    "slug": "nivia-cycling-water-bottle-nivia",
    "price": 490,
    "originalPrice": 684,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.7,
    "reviews": 145,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-46",
    "name": "Decathlon Cycling Water Bottle Ultra",
    "slug": "decathlon-cycling-water-bottle-ultra-decathlon",
    "price": 260,
    "originalPrice": 260,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.3,
    "reviews": 1504,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-47",
    "name": "BSN Cycling Water Bottle Elite",
    "slug": "bsn-cycling-water-bottle-elite-bsn",
    "price": 240,
    "originalPrice": 349,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.7,
    "reviews": 554,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-1",
    "name": "The Derma Co Face Wash",
    "slug": "the-derma-co-face-wash",
    "price": 220,
    "originalPrice": 220,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.5,
    "reviews": 1447,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "High-quality face wash from The Derma Co. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-2",
    "name": "Mamaearth Face Wash",
    "slug": "mamaearth-face-wash-mamaearth",
    "price": 220,
    "originalPrice": 275,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.2,
    "reviews": 265,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium face wash from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-3",
    "name": "Nykaa Face Wash Deluxe",
    "slug": "nykaa-face-wash-deluxe-nykaa",
    "price": 480,
    "originalPrice": 627,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 5,
    "reviews": 1505,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium face wash from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-4",
    "name": "Mamaearth Face Wash Basic",
    "slug": "mamaearth-face-wash-basic-mamaearth",
    "price": 580,
    "originalPrice": 812,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.6,
    "reviews": 124,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium face wash from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-5",
    "name": "Lakme Face Wash Plus",
    "slug": "lakme-face-wash-plus-lakme",
    "price": 450,
    "originalPrice": 450,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.4,
    "reviews": 466,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium face wash from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-6",
    "name": "Plum Moisturizer Premium",
    "slug": "plum-moisturizer-premium",
    "price": 340,
    "originalPrice": 518,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.7,
    "reviews": 646,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "High-quality moisturizer from Plum. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-7",
    "name": "Nykaa Moisturizer Basic",
    "slug": "nykaa-moisturizer-basic-nykaa",
    "price": 380,
    "originalPrice": 380,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.6,
    "reviews": 290,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-8",
    "name": "The Derma Co Moisturizer Elite",
    "slug": "the-derma-co-moisturizer-elite-the-derma-co",
    "price": 200,
    "originalPrice": 252,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3,
    "reviews": 1087,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-9",
    "name": "Nykaa Moisturizer Pro",
    "slug": "nykaa-moisturizer-pro-nykaa",
    "price": 650,
    "originalPrice": 885,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.7,
    "reviews": 568,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-10",
    "name": "Minimalist Moisturizer Elite",
    "slug": "minimalist-moisturizer-elite-minimalist",
    "price": 560,
    "originalPrice": 649,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.8,
    "reviews": 1430,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-11",
    "name": "Minimalist Moisturizer Plus",
    "slug": "minimalist-moisturizer-plus-minimalist",
    "price": 330,
    "originalPrice": 507,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.3,
    "reviews": 1408,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-12",
    "name": "Mamaearth Moisturizer Plus",
    "slug": "mamaearth-moisturizer-plus-mamaearth",
    "price": 730,
    "originalPrice": 730,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.5,
    "reviews": 1449,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-13",
    "name": "Biotique Toner Standard",
    "slug": "biotique-toner-standard",
    "price": 420,
    "originalPrice": 420,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.8,
    "reviews": 1916,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "High-quality toner from Biotique. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-14",
    "name": "Maybelline Toner Standard",
    "slug": "maybelline-toner-standard-maybelline",
    "price": 340,
    "originalPrice": 340,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.9,
    "reviews": 1326,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium toner from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-15",
    "name": "Plum Toner Deluxe",
    "slug": "plum-toner-deluxe-plum",
    "price": 440,
    "originalPrice": 440,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.3,
    "reviews": 857,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium toner from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-16",
    "name": "Biotique Toner",
    "slug": "biotique-toner-biotique",
    "price": 490,
    "originalPrice": 600,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.1,
    "reviews": 95,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium toner from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-17",
    "name": "Maybelline Toner Basic",
    "slug": "maybelline-toner-basic-maybelline",
    "price": 570,
    "originalPrice": 863,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.9,
    "reviews": 752,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium toner from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-18",
    "name": "The Derma Co Toner Plus",
    "slug": "the-derma-co-toner-plus-the-derma-co",
    "price": 560,
    "originalPrice": 560,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.7,
    "reviews": 470,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium toner from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-19",
    "name": "L'Oreal Eye Cream Ultra",
    "slug": "l-oreal-eye-cream-ultra",
    "price": 320,
    "originalPrice": 437,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.7,
    "reviews": 1654,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "High-quality eye cream from L'Oreal. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-20",
    "name": "Plum Eye Cream Elite",
    "slug": "plum-eye-cream-elite-plum",
    "price": 830,
    "originalPrice": 1017,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.5,
    "reviews": 1453,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-21",
    "name": "Nykaa Eye Cream Ultra",
    "slug": "nykaa-eye-cream-ultra-nykaa",
    "price": 630,
    "originalPrice": 630,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.2,
    "reviews": 1501,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-22",
    "name": "The Derma Co Eye Cream Ultra",
    "slug": "the-derma-co-eye-cream-ultra-the-derma-co",
    "price": 340,
    "originalPrice": 377,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.2,
    "reviews": 585,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium eye cream from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-23",
    "name": "Mamaearth Eye Cream Premium",
    "slug": "mamaearth-eye-cream-premium-mamaearth",
    "price": 480,
    "originalPrice": 480,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4,
    "reviews": 1456,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-24",
    "name": "Lakme Eye Cream Premium",
    "slug": "lakme-eye-cream-premium-lakme",
    "price": 790,
    "originalPrice": 1244,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.2,
    "reviews": 853,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-25",
    "name": "Plum Shampoo Plus",
    "slug": "plum-shampoo-plus",
    "price": 540,
    "originalPrice": 709,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.6,
    "reviews": 750,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "High-quality shampoo from Plum. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-26",
    "name": "Maybelline Shampoo Standard",
    "slug": "maybelline-shampoo-standard-maybelline",
    "price": 200,
    "originalPrice": 250,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.7,
    "reviews": 1236,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-27",
    "name": "Plum Shampoo",
    "slug": "plum-shampoo-plum",
    "price": 680,
    "originalPrice": 1000,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.4,
    "reviews": 1128,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-28",
    "name": "Nykaa Shampoo Plus",
    "slug": "nykaa-shampoo-plus-nykaa",
    "price": 610,
    "originalPrice": 610,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.9,
    "reviews": 663,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-29",
    "name": "L'Oreal Shampoo Pro",
    "slug": "l-oreal-shampoo-pro-l-oreal",
    "price": 260,
    "originalPrice": 260,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.9,
    "reviews": 1267,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium shampoo from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-30",
    "name": "Biotique Shampoo Elite",
    "slug": "biotique-shampoo-elite-biotique",
    "price": 420,
    "originalPrice": 420,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.1,
    "reviews": 1153,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-31",
    "name": "Nykaa Hair Oil Elite",
    "slug": "nykaa-hair-oil-elite",
    "price": 540,
    "originalPrice": 540,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.8,
    "reviews": 1414,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    "description": "High-quality hair oil from Nykaa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-32",
    "name": "Mamaearth Hair Oil Standard",
    "slug": "mamaearth-hair-oil-standard-mamaearth",
    "price": 380,
    "originalPrice": 550,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.8,
    "reviews": 905,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-33",
    "name": "Mamaearth Hair Oil Pro",
    "slug": "mamaearth-hair-oil-pro-mamaearth",
    "price": 500,
    "originalPrice": 593,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.5,
    "reviews": 63,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-34",
    "name": "Lakme Body Lotion Elite",
    "slug": "lakme-body-lotion-elite",
    "price": 530,
    "originalPrice": 530,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.6,
    "reviews": 1056,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "High-quality body lotion from Lakme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-35",
    "name": "L'Oreal Body Lotion Basic",
    "slug": "l-oreal-body-lotion-basic-l-oreal",
    "price": 590,
    "originalPrice": 902,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.8,
    "reviews": 1059,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium body lotion from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-36",
    "name": "Nykaa Body Lotion Ultra",
    "slug": "nykaa-body-lotion-ultra-nykaa",
    "price": 420,
    "originalPrice": 612,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.6,
    "reviews": 238,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-37",
    "name": "Wow Skin Science Body Lotion Pro",
    "slug": "wow-skin-science-body-lotion-pro-wow-skin-science",
    "price": 610,
    "originalPrice": 891,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.9,
    "reviews": 618,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-38",
    "name": "Wow Skin Science Body Lotion Plus",
    "slug": "wow-skin-science-body-lotion-plus-wow-skin-science",
    "price": 240,
    "originalPrice": 240,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.6,
    "reviews": 889,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-39",
    "name": "Minimalist Lipstick Pro",
    "slug": "minimalist-lipstick-pro",
    "price": 730,
    "originalPrice": 730,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.8,
    "reviews": 1025,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "High-quality lipstick from Minimalist. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-40",
    "name": "Nykaa Lipstick Premium",
    "slug": "nykaa-lipstick-premium-nykaa",
    "price": 810,
    "originalPrice": 1143,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.2,
    "reviews": 1445,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-41",
    "name": "Nykaa Lipstick Plus",
    "slug": "nykaa-lipstick-plus-nykaa",
    "price": 700,
    "originalPrice": 700,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.7,
    "reviews": 564,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-42",
    "name": "Biotique Lipstick",
    "slug": "biotique-lipstick-biotique",
    "price": 380,
    "originalPrice": 380,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4,
    "reviews": 324,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-43",
    "name": "Wow Skin Science Lipstick",
    "slug": "wow-skin-science-lipstick-wow-skin-science",
    "price": 460,
    "originalPrice": 507,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.8,
    "reviews": 1014,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-44",
    "name": "Plum Kajal Pro",
    "slug": "plum-kajal-pro",
    "price": 390,
    "originalPrice": 390,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.3,
    "reviews": 1226,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "High-quality kajal from Plum. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-45",
    "name": "Minimalist Kajal Standard",
    "slug": "minimalist-kajal-standard-minimalist",
    "price": 180,
    "originalPrice": 273,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.9,
    "reviews": 1142,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium kajal from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-46",
    "name": "L'Oreal Kajal Standard",
    "slug": "l-oreal-kajal-standard-l-oreal",
    "price": 160,
    "originalPrice": 231,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.5,
    "reviews": 987,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium kajal from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-47",
    "name": "Nykaa Kajal Basic",
    "slug": "nykaa-kajal-basic-nykaa",
    "price": 260,
    "originalPrice": 320,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.4,
    "reviews": 1197,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium kajal from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-48",
    "name": "Mamaearth Kajal Premium",
    "slug": "mamaearth-kajal-premium-mamaearth",
    "price": 180,
    "originalPrice": 203,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.7,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium kajal from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-49",
    "name": "Mamaearth Nail Polish Set Ultra",
    "slug": "mamaearth-nail-polish-set-ultra",
    "price": 390,
    "originalPrice": 581,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.3,
    "reviews": 1149,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality nail polish set from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-50",
    "name": "Wow Skin Science Nail Polish Set Deluxe",
    "slug": "wow-skin-science-nail-polish-set-deluxe-wow-skin-science",
    "price": 190,
    "originalPrice": 190,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.3,
    "reviews": 692,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-51",
    "name": "Nykaa Nail Polish Set Ultra",
    "slug": "nykaa-nail-polish-set-ultra-nykaa",
    "price": 280,
    "originalPrice": 390,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.7,
    "reviews": 1098,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-52",
    "name": "L'Oreal Nail Polish Set Elite",
    "slug": "l-oreal-nail-polish-set-elite-l-oreal",
    "price": 290,
    "originalPrice": 290,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.7,
    "reviews": 231,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-53",
    "name": "Lakme Nail Polish Set Plus",
    "slug": "lakme-nail-polish-set-plus-lakme",
    "price": 100,
    "originalPrice": 141,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 747,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-54",
    "name": "Plum Nail Polish Set Deluxe",
    "slug": "plum-nail-polish-set-deluxe-plum",
    "price": 240,
    "originalPrice": 298,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.2,
    "reviews": 1420,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-1",
    "name": "HP Ultrabook Laptop Plus",
    "slug": "hp-ultrabook-laptop-plus",
    "price": 115040,
    "originalPrice": 115040,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.4,
    "reviews": 1544,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "High-quality ultrabook laptop from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-2",
    "name": "ASUS Ultrabook Laptop Plus",
    "slug": "asus-ultrabook-laptop-plus-asus",
    "price": 75460,
    "originalPrice": 75460,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.4,
    "reviews": 900,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-3",
    "name": "Microsoft Ultrabook Laptop Standard",
    "slug": "microsoft-ultrabook-laptop-standard-microsoft",
    "price": 81490,
    "originalPrice": 113381,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.8,
    "reviews": 1010,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-4",
    "name": "Xiaomi Ultrabook Laptop Deluxe",
    "slug": "xiaomi-ultrabook-laptop-deluxe-xiaomi",
    "price": 102570,
    "originalPrice": 118055,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.4,
    "reviews": 444,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-5",
    "name": "MSI Ultrabook Laptop Elite",
    "slug": "msi-ultrabook-laptop-elite-msi",
    "price": 77640,
    "originalPrice": 86323,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.5,
    "reviews": 1312,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-6",
    "name": "Dell Ultrabook Laptop Pro",
    "slug": "dell-ultrabook-laptop-pro-dell",
    "price": 91550,
    "originalPrice": 91550,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.9,
    "reviews": 671,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-7",
    "name": "Dell Gaming Laptop Basic",
    "slug": "dell-gaming-laptop-basic",
    "price": 67120,
    "originalPrice": 78259,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.7,
    "reviews": 167,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "High-quality gaming laptop from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-8",
    "name": "Acer Gaming Laptop Standard",
    "slug": "acer-gaming-laptop-standard-acer",
    "price": 84490,
    "originalPrice": 122197,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.1,
    "reviews": 1083,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-9",
    "name": "Xiaomi Gaming Laptop Deluxe",
    "slug": "xiaomi-gaming-laptop-deluxe-xiaomi",
    "price": 121420,
    "originalPrice": 121420,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.7,
    "reviews": 1193,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-10",
    "name": "Samsung Gaming Laptop Elite",
    "slug": "samsung-gaming-laptop-elite-samsung",
    "price": 95150,
    "originalPrice": 151310,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4,
    "reviews": 128,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-11",
    "name": "Dell Gaming Laptop Deluxe",
    "slug": "dell-gaming-laptop-deluxe-dell",
    "price": 68750,
    "originalPrice": 109949,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4,
    "reviews": 361,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-12",
    "name": "Dell Gaming Laptop Ultra",
    "slug": "dell-gaming-laptop-ultra-dell",
    "price": 126520,
    "originalPrice": 147311,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.6,
    "reviews": 767,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-13",
    "name": "HP Monitor 24-inch Plus",
    "slug": "hp-monitor-24-inch-plus",
    "price": 14340,
    "originalPrice": 14340,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.5,
    "reviews": 325,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "High-quality monitor 24-inch from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-14",
    "name": "Samsung Monitor 24-inch Ultra",
    "slug": "samsung-monitor-24-inch-ultra-samsung",
    "price": 18360,
    "originalPrice": 18360,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.5,
    "reviews": 744,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-15",
    "name": "Acer Monitor 24-inch Elite",
    "slug": "acer-monitor-24-inch-elite-acer",
    "price": 10780,
    "originalPrice": 16397,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.7,
    "reviews": 1114,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-16",
    "name": "Samsung Monitor 24-inch Plus",
    "slug": "samsung-monitor-24-inch-plus-samsung",
    "price": 14650,
    "originalPrice": 18373,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.7,
    "reviews": 1299,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-17",
    "name": "ASUS Monitor 24-inch Premium",
    "slug": "asus-monitor-24-inch-premium-asus",
    "price": 14110,
    "originalPrice": 18394,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.4,
    "reviews": 1101,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-18",
    "name": "HP Monitor 24-inch Standard",
    "slug": "hp-monitor-24-inch-standard-hp",
    "price": 9810,
    "originalPrice": 9810,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.4,
    "reviews": 1043,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-19",
    "name": "Xiaomi Monitor 24-inch",
    "slug": "xiaomi-monitor-24-inch-xiaomi",
    "price": 17380,
    "originalPrice": 17380,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.1,
    "reviews": 819,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-20",
    "name": "ASUS Mechanical Keyboard Ultra",
    "slug": "asus-mechanical-keyboard-ultra",
    "price": 5730,
    "originalPrice": 5730,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.9,
    "reviews": 1307,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "High-quality mechanical keyboard from ASUS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-21",
    "name": "Dell Mechanical Keyboard Standard",
    "slug": "dell-mechanical-keyboard-standard-dell",
    "price": 1920,
    "originalPrice": 1920,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4,
    "reviews": 920,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-22",
    "name": "ASUS Mechanical Keyboard Standard",
    "slug": "asus-mechanical-keyboard-standard-asus",
    "price": 7140,
    "originalPrice": 7140,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.1,
    "reviews": 1365,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-23",
    "name": "Apple Mechanical Keyboard Premium",
    "slug": "apple-mechanical-keyboard-premium-apple",
    "price": 5810,
    "originalPrice": 7712,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.6,
    "reviews": 312,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-24",
    "name": "Xiaomi Mechanical Keyboard Elite",
    "slug": "xiaomi-mechanical-keyboard-elite-xiaomi",
    "price": 2080,
    "originalPrice": 2690,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.9,
    "reviews": 278,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-25",
    "name": "Acer Mechanical Keyboard Standard",
    "slug": "acer-mechanical-keyboard-standard-acer",
    "price": 2600,
    "originalPrice": 3736,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.6,
    "reviews": 997,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-26",
    "name": "MSI External Hard Drive 1TB Deluxe",
    "slug": "msi-external-hard-drive-1tb-deluxe",
    "price": 5200,
    "originalPrice": 5200,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.7,
    "reviews": 989,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "High-quality external hard drive 1tb from MSI. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-27",
    "name": "Xiaomi External Hard Drive 1TB",
    "slug": "xiaomi-external-hard-drive-1tb-xiaomi",
    "price": 5320,
    "originalPrice": 5320,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.2,
    "reviews": 1053,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-28",
    "name": "Dell External Hard Drive 1TB Deluxe",
    "slug": "dell-external-hard-drive-1tb-deluxe-dell",
    "price": 3730,
    "originalPrice": 5224,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.7,
    "reviews": 1115,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-29",
    "name": "Microsoft External Hard Drive 1TB Premium",
    "slug": "microsoft-external-hard-drive-1tb-premium-microsoft",
    "price": 5290,
    "originalPrice": 5290,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.1,
    "reviews": 952,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-30",
    "name": "Xiaomi External Hard Drive 1TB Elite",
    "slug": "xiaomi-external-hard-drive-1tb-elite-xiaomi",
    "price": 4000,
    "originalPrice": 6210,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.7,
    "reviews": 790,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-31",
    "name": "Microsoft USB Mouse Deluxe",
    "slug": "microsoft-usb-mouse-deluxe",
    "price": 410,
    "originalPrice": 410,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.1,
    "reviews": 1506,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "High-quality usb mouse from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-32",
    "name": "Acer USB Mouse Deluxe",
    "slug": "acer-usb-mouse-deluxe-acer",
    "price": 280,
    "originalPrice": 280,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.8,
    "reviews": 1231,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-33",
    "name": "Lenovo USB Mouse Standard",
    "slug": "lenovo-usb-mouse-standard-lenovo",
    "price": 940,
    "originalPrice": 940,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4,
    "reviews": 878,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-34",
    "name": "Xiaomi USB Mouse Deluxe",
    "slug": "xiaomi-usb-mouse-deluxe-xiaomi",
    "price": 310,
    "originalPrice": 310,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.4,
    "reviews": 391,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-35",
    "name": "Dell USB Mouse Basic",
    "slug": "dell-usb-mouse-basic-dell",
    "price": 1420,
    "originalPrice": 1420,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3,
    "reviews": 963,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-36",
    "name": "ASUS Laptop Stand Basic",
    "slug": "asus-laptop-stand-basic",
    "price": 1500,
    "originalPrice": 1500,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.4,
    "reviews": 942,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "High-quality laptop stand from ASUS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-37",
    "name": "ASUS Laptop Stand Ultra",
    "slug": "asus-laptop-stand-ultra-asus",
    "price": 2080,
    "originalPrice": 2577,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.5,
    "reviews": 684,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-38",
    "name": "Dell Laptop Stand Ultra",
    "slug": "dell-laptop-stand-ultra-dell",
    "price": 1620,
    "originalPrice": 2110,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.9,
    "reviews": 1242,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-39",
    "name": "Samsung Laptop Stand Elite",
    "slug": "samsung-laptop-stand-elite-samsung",
    "price": 2430,
    "originalPrice": 2430,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.6,
    "reviews": 1458,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-40",
    "name": "Dell Wireless Keyboard Standard",
    "slug": "dell-wireless-keyboard-standard",
    "price": 3920,
    "originalPrice": 5283,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.5,
    "reviews": 218,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "High-quality wireless keyboard from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-41",
    "name": "Apple Wireless Keyboard Standard",
    "slug": "apple-wireless-keyboard-standard-apple",
    "price": 3340,
    "originalPrice": 3340,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 5,
    "reviews": 926,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-42",
    "name": "Apple Wireless Keyboard Basic",
    "slug": "apple-wireless-keyboard-basic-apple",
    "price": 3740,
    "originalPrice": 4249,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.3,
    "reviews": 1442,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-43",
    "name": "HP Wireless Keyboard Deluxe",
    "slug": "hp-wireless-keyboard-deluxe-hp",
    "price": 1010,
    "originalPrice": 1189,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.5,
    "reviews": 1342,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-44",
    "name": "Apple Laptop Bag Plus",
    "slug": "apple-laptop-bag-plus",
    "price": 2430,
    "originalPrice": 3371,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.9,
    "reviews": 154,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "High-quality laptop bag from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-45",
    "name": "Samsung Laptop Bag Elite",
    "slug": "samsung-laptop-bag-elite-samsung",
    "price": 2940,
    "originalPrice": 3517,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 893,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-46",
    "name": "MSI Laptop Bag Premium",
    "slug": "msi-laptop-bag-premium-msi",
    "price": 780,
    "originalPrice": 780,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.6,
    "reviews": 1092,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-47",
    "name": "Lenovo Laptop Bag Plus",
    "slug": "lenovo-laptop-bag-plus-lenovo",
    "price": 2100,
    "originalPrice": 2830,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.3,
    "reviews": 547,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-48",
    "name": "ASUS Laptop Bag Deluxe",
    "slug": "asus-laptop-bag-deluxe-asus",
    "price": 1730,
    "originalPrice": 2494,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.6,
    "reviews": 1315,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-49",
    "name": "ASUS Cooling Pad Basic",
    "slug": "asus-cooling-pad-basic",
    "price": 1440,
    "originalPrice": 2195,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.8,
    "reviews": 304,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "High-quality cooling pad from ASUS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-50",
    "name": "Dell Cooling Pad Premium",
    "slug": "dell-cooling-pad-premium-dell",
    "price": 1470,
    "originalPrice": 1470,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.2,
    "reviews": 566,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-51",
    "name": "Apple Cooling Pad Basic",
    "slug": "apple-cooling-pad-basic-apple",
    "price": 690,
    "originalPrice": 1080,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.2,
    "reviews": 840,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-52",
    "name": "MSI Cooling Pad Standard",
    "slug": "msi-cooling-pad-standard-msi",
    "price": 680,
    "originalPrice": 680,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.9,
    "reviews": 565,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-53",
    "name": "Apple Cooling Pad Pro",
    "slug": "apple-cooling-pad-pro-apple",
    "price": 970,
    "originalPrice": 1140,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.1,
    "reviews": 757,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-1",
    "name": "Camlin A4 Notebook Pack Plus",
    "slug": "camlin-a4-notebook-pack-plus",
    "price": 190,
    "originalPrice": 190,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.6,
    "reviews": 1019,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "High-quality a4 notebook pack from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-2",
    "name": "Camlin A4 Notebook Pack Basic",
    "slug": "camlin-a4-notebook-pack-basic-camlin",
    "price": 310,
    "originalPrice": 310,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.6,
    "reviews": 1188,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-3",
    "name": "Classmate A4 Notebook Pack Deluxe",
    "slug": "classmate-a4-notebook-pack-deluxe-classmate",
    "price": 440,
    "originalPrice": 617,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.5,
    "reviews": 900,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-4",
    "name": "Camlin A4 Notebook Pack Deluxe",
    "slug": "camlin-a4-notebook-pack-deluxe-camlin",
    "price": 240,
    "originalPrice": 363,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.3,
    "reviews": 63,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-5",
    "name": "Parker A4 Notebook Pack Elite",
    "slug": "parker-a4-notebook-pack-elite-parker",
    "price": 500,
    "originalPrice": 635,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.2,
    "reviews": 669,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-6",
    "name": "Classmate Gel Pen Set Standard",
    "slug": "classmate-gel-pen-set-standard",
    "price": 250,
    "originalPrice": 250,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.4,
    "reviews": 1240,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "High-quality gel pen set from Classmate. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-7",
    "name": "Camlin Gel Pen Set Basic",
    "slug": "camlin-gel-pen-set-basic-camlin",
    "price": 300,
    "originalPrice": 354,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.1,
    "reviews": 1091,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-8",
    "name": "Staedtler Gel Pen Set Pro",
    "slug": "staedtler-gel-pen-set-pro-staedtler",
    "price": 140,
    "originalPrice": 223,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4,
    "reviews": 1042,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-9",
    "name": "Linc Gel Pen Set Basic",
    "slug": "linc-gel-pen-set-basic-linc",
    "price": 180,
    "originalPrice": 243,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.5,
    "reviews": 314,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-10",
    "name": "Linc Gel Pen Set Pro",
    "slug": "linc-gel-pen-set-pro-linc",
    "price": 110,
    "originalPrice": 171,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.4,
    "reviews": 928,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-11",
    "name": "DOMS Gel Pen Set Pro",
    "slug": "doms-gel-pen-set-pro-doms",
    "price": 220,
    "originalPrice": 264,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.8,
    "reviews": 1065,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-12",
    "name": "Navneet Pencil Box Elite",
    "slug": "navneet-pencil-box-elite",
    "price": 160,
    "originalPrice": 240,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.9,
    "reviews": 1720,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "High-quality pencil box from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-13",
    "name": "Classmate Pencil Box Elite",
    "slug": "classmate-pencil-box-elite-classmate",
    "price": 170,
    "originalPrice": 170,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.4,
    "reviews": 1331,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-14",
    "name": "Navneet Pencil Box Standard",
    "slug": "navneet-pencil-box-standard-navneet",
    "price": 370,
    "originalPrice": 506,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.6,
    "reviews": 79,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-15",
    "name": "Classmate Pencil Box Basic",
    "slug": "classmate-pencil-box-basic-classmate",
    "price": 380,
    "originalPrice": 380,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.3,
    "reviews": 32,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-16",
    "name": "Navneet Pencil Box",
    "slug": "navneet-pencil-box-navneet",
    "price": 110,
    "originalPrice": 122,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4,
    "reviews": 414,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-17",
    "name": "Navneet Pencil Box Premium",
    "slug": "navneet-pencil-box-premium-navneet",
    "price": 320,
    "originalPrice": 470,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.4,
    "reviews": 327,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-18",
    "name": "Classmate Pencil Box Plus",
    "slug": "classmate-pencil-box-plus-classmate",
    "price": 200,
    "originalPrice": 303,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.7,
    "reviews": 1476,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-19",
    "name": "Maped Highlighter Set",
    "slug": "maped-highlighter-set",
    "price": 190,
    "originalPrice": 255,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.3,
    "reviews": 362,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "High-quality highlighter set from Maped. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-20",
    "name": "Classmate Highlighter Set Standard",
    "slug": "classmate-highlighter-set-standard-classmate",
    "price": 250,
    "originalPrice": 383,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.8,
    "reviews": 928,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-21",
    "name": "Navneet Highlighter Set Ultra",
    "slug": "navneet-highlighter-set-ultra-navneet",
    "price": 110,
    "originalPrice": 110,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.6,
    "reviews": 1430,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-22",
    "name": "Maped Highlighter Set Elite",
    "slug": "maped-highlighter-set-elite-maped",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.2,
    "reviews": 443,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-23",
    "name": "Uniball Highlighter Set Standard",
    "slug": "uniball-highlighter-set-standard-uniball",
    "price": 110,
    "originalPrice": 157,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.5,
    "reviews": 954,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-24",
    "name": "Linc Geometry Box",
    "slug": "linc-geometry-box",
    "price": 360,
    "originalPrice": 476,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.8,
    "reviews": 1043,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "High-quality geometry box from Linc. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-25",
    "name": "Faber-Castell Geometry Box Plus",
    "slug": "faber-castell-geometry-box-plus-faber-castell",
    "price": 320,
    "originalPrice": 443,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 5,
    "reviews": 845,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-26",
    "name": "Uniball Geometry Box Elite",
    "slug": "uniball-geometry-box-elite-uniball",
    "price": 150,
    "originalPrice": 150,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.9,
    "reviews": 758,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-27",
    "name": "Camlin Geometry Box Plus",
    "slug": "camlin-geometry-box-plus-camlin",
    "price": 180,
    "originalPrice": 266,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.3,
    "reviews": 777,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-28",
    "name": "Navneet Geometry Box Deluxe",
    "slug": "navneet-geometry-box-deluxe-navneet",
    "price": 400,
    "originalPrice": 505,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.7,
    "reviews": 844,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-29",
    "name": "Linc Geometry Box Ultra",
    "slug": "linc-geometry-box-ultra-linc",
    "price": 290,
    "originalPrice": 290,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.8,
    "reviews": 1444,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-30",
    "name": "Maped Whiteboard Marker Set Premium",
    "slug": "maped-whiteboard-marker-set-premium",
    "price": 110,
    "originalPrice": 110,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.5,
    "reviews": 1360,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "High-quality whiteboard marker set from Maped. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-31",
    "name": "Uniball Whiteboard Marker Set Deluxe",
    "slug": "uniball-whiteboard-marker-set-deluxe-uniball",
    "price": 150,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4,
    "reviews": 1372,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-32",
    "name": "Faber-Castell Whiteboard Marker Set Elite",
    "slug": "faber-castell-whiteboard-marker-set-elite-faber-castell",
    "price": 250,
    "originalPrice": 250,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4,
    "reviews": 765,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-33",
    "name": "DOMS Whiteboard Marker Set Basic",
    "slug": "doms-whiteboard-marker-set-basic-doms",
    "price": 160,
    "originalPrice": 229,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.1,
    "reviews": 1229,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-34",
    "name": "Faber-Castell Whiteboard Marker Set Standard",
    "slug": "faber-castell-whiteboard-marker-set-standard-faber-castell",
    "price": 190,
    "originalPrice": 190,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.6,
    "reviews": 1475,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-35",
    "name": "Linc Whiteboard Marker Set",
    "slug": "linc-whiteboard-marker-set-linc",
    "price": 170,
    "originalPrice": 203,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.8,
    "reviews": 482,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-36",
    "name": "Parker Sticky Notes Pack Deluxe",
    "slug": "parker-sticky-notes-pack-deluxe",
    "price": 140,
    "originalPrice": 164,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.9,
    "reviews": 1618,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "High-quality sticky notes pack from Parker. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-37",
    "name": "Uniball Sticky Notes Pack Basic",
    "slug": "uniball-sticky-notes-pack-basic-uniball",
    "price": 70,
    "originalPrice": 98,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.6,
    "reviews": 1019,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-38",
    "name": "Classmate Sticky Notes Pack Deluxe",
    "slug": "classmate-sticky-notes-pack-deluxe-classmate",
    "price": 50,
    "originalPrice": 66,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.8,
    "reviews": 1391,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-39",
    "name": "Navneet Sticky Notes Pack Deluxe",
    "slug": "navneet-sticky-notes-pack-deluxe-navneet",
    "price": 100,
    "originalPrice": 119,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.4,
    "reviews": 1305,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-40",
    "name": "Camlin Sticky Notes Pack Premium",
    "slug": "camlin-sticky-notes-pack-premium-camlin",
    "price": 120,
    "originalPrice": 170,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.2,
    "reviews": 459,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-41",
    "name": "Camlin Sticky Notes Pack Ultra",
    "slug": "camlin-sticky-notes-pack-ultra-camlin",
    "price": 140,
    "originalPrice": 140,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.5,
    "reviews": 1302,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-42",
    "name": "Navneet Paper Clips Set Premium",
    "slug": "navneet-paper-clips-set-premium",
    "price": 50,
    "originalPrice": 76,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.5,
    "reviews": 796,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "High-quality paper clips set from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-43",
    "name": "Maped Paper Clips Set Plus",
    "slug": "maped-paper-clips-set-plus-maped",
    "price": 40,
    "originalPrice": 40,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.1,
    "reviews": 1498,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-44",
    "name": "Linc Paper Clips Set Pro",
    "slug": "linc-paper-clips-set-pro-linc",
    "price": 90,
    "originalPrice": 126,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.5,
    "reviews": 485,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-45",
    "name": "Uniball Paper Clips Set Elite",
    "slug": "uniball-paper-clips-set-elite-uniball",
    "price": 40,
    "originalPrice": 40,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.4,
    "reviews": 1314,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-46",
    "name": "Faber-Castell Paper Clips Set Plus",
    "slug": "faber-castell-paper-clips-set-plus-faber-castell",
    "price": 40,
    "originalPrice": 61,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.9,
    "reviews": 490,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-47",
    "name": "Uniball Desk Organizer Pro",
    "slug": "uniball-desk-organizer-pro",
    "price": 610,
    "originalPrice": 610,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.9,
    "reviews": 1156,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "High-quality desk organizer from Uniball. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-48",
    "name": "Uniball Desk Organizer Elite",
    "slug": "uniball-desk-organizer-elite-uniball",
    "price": 640,
    "originalPrice": 640,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.2,
    "reviews": 1284,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-49",
    "name": "DOMS Desk Organizer Basic",
    "slug": "doms-desk-organizer-basic-doms",
    "price": 350,
    "originalPrice": 350,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.7,
    "reviews": 201,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-50",
    "name": "Maped Desk Organizer Ultra",
    "slug": "maped-desk-organizer-ultra-maped",
    "price": 440,
    "originalPrice": 547,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.8,
    "reviews": 509,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-51",
    "name": "Navneet Desk Organizer Standard",
    "slug": "navneet-desk-organizer-standard-navneet",
    "price": 490,
    "originalPrice": 637,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.3,
    "reviews": 1189,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-52",
    "name": "Parker Desk Organizer",
    "slug": "parker-desk-organizer-parker",
    "price": 790,
    "originalPrice": 1051,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.2,
    "reviews": 1118,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-53",
    "name": "Navneet File Folder Set",
    "slug": "navneet-file-folder-set",
    "price": 120,
    "originalPrice": 182,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.7,
    "reviews": 1830,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "High-quality file folder set from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-54",
    "name": "Camlin File Folder Set Basic",
    "slug": "camlin-file-folder-set-basic-camlin",
    "price": 280,
    "originalPrice": 312,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.8,
    "reviews": 1250,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-55",
    "name": "Faber-Castell File Folder Set Ultra",
    "slug": "faber-castell-file-folder-set-ultra-faber-castell",
    "price": 380,
    "originalPrice": 454,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.9,
    "reviews": 96,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-56",
    "name": "Linc File Folder Set Standard",
    "slug": "linc-file-folder-set-standard-linc",
    "price": 330,
    "originalPrice": 392,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 5,
    "reviews": 1323,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-57",
    "name": "DOMS File Folder Set Pro",
    "slug": "doms-file-folder-set-pro-doms",
    "price": 240,
    "originalPrice": 285,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.8,
    "reviews": 902,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium file folder set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-58",
    "name": "Faber-Castell File Folder Set Premium",
    "slug": "faber-castell-file-folder-set-premium-faber-castell",
    "price": 280,
    "originalPrice": 280,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.5,
    "reviews": 280,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-59",
    "name": "Faber-Castell Calculator Standard",
    "slug": "faber-castell-calculator-standard",
    "price": 830,
    "originalPrice": 1221,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.6,
    "reviews": 365,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "High-quality calculator from Faber-Castell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-60",
    "name": "Maped Calculator Plus",
    "slug": "maped-calculator-plus-maped",
    "price": 570,
    "originalPrice": 867,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.5,
    "reviews": 140,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-61",
    "name": "Uniball Calculator Pro",
    "slug": "uniball-calculator-pro-uniball",
    "price": 610,
    "originalPrice": 787,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.5,
    "reviews": 1008,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-62",
    "name": "Classmate Calculator Basic",
    "slug": "classmate-calculator-basic-classmate",
    "price": 1400,
    "originalPrice": 2199,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.4,
    "reviews": 839,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-63",
    "name": "Maped Calculator Elite",
    "slug": "maped-calculator-elite-maped",
    "price": 310,
    "originalPrice": 464,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4,
    "reviews": 518,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-64",
    "name": "Maped Calculator Pro",
    "slug": "maped-calculator-pro-maped",
    "price": 1200,
    "originalPrice": 1699,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4,
    "reviews": 623,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-65",
    "name": "DOMS Calculator Premium",
    "slug": "doms-calculator-premium-doms",
    "price": 1200,
    "originalPrice": 1878,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 5,
    "reviews": 927,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium calculator from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-66",
    "name": "Navneet Stapler with Pins Premium",
    "slug": "navneet-stapler-with-pins-premium",
    "price": 280,
    "originalPrice": 280,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.2,
    "reviews": 1614,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "High-quality stapler with pins from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-67",
    "name": "Linc Stapler with Pins Plus",
    "slug": "linc-stapler-with-pins-plus-linc",
    "price": 340,
    "originalPrice": 340,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.3,
    "reviews": 723,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-68",
    "name": "DOMS Stapler with Pins Elite",
    "slug": "doms-stapler-with-pins-elite-doms",
    "price": 350,
    "originalPrice": 508,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.2,
    "reviews": 626,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-69",
    "name": "Classmate Stapler with Pins Basic",
    "slug": "classmate-stapler-with-pins-basic-classmate",
    "price": 250,
    "originalPrice": 250,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.2,
    "reviews": 1050,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-70",
    "name": "Camlin Stapler with Pins Pro",
    "slug": "camlin-stapler-with-pins-pro-camlin",
    "price": 200,
    "originalPrice": 256,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.2,
    "reviews": 41,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-71",
    "name": "Uniball Stapler with Pins Pro",
    "slug": "uniball-stapler-with-pins-pro-uniball",
    "price": 250,
    "originalPrice": 345,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.7,
    "reviews": 328,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Uniball. Features cutting-edge technology and superior build quality.",
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

