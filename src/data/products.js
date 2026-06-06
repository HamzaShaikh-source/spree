// ── Product Data ──
// 522 products across 8 categories

const products = [
  {
    "id": "el-1",
    "name": "Bose Wireless Headphones Pro",
    "slug": "bose-wireless-headphones-pro",
    "price": 3140,
    "originalPrice": 3140,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4,
    "reviews": 52,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality wireless headphones from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-2",
    "name": "Dell Wireless Headphones Plus",
    "slug": "dell-wireless-headphones-plus-dell",
    "price": 2690,
    "originalPrice": 3151,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.3,
    "reviews": 330,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-3",
    "name": "Dell Wireless Headphones",
    "slug": "dell-wireless-headphones-dell",
    "price": 4650,
    "originalPrice": 4650,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.5,
    "reviews": 1291,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-4",
    "name": "boAt Wireless Headphones Elite",
    "slug": "boat-wireless-headphones-elite-boat",
    "price": 5990,
    "originalPrice": 7826,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.6,
    "reviews": 140,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-5",
    "name": "Apple Wireless Headphones",
    "slug": "apple-wireless-headphones-apple",
    "price": 5360,
    "originalPrice": 5360,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.5,
    "reviews": 26,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-6",
    "name": "Xiaomi Wireless Headphones Standard",
    "slug": "xiaomi-wireless-headphones-standard-xiaomi",
    "price": 5460,
    "originalPrice": 6640,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.2,
    "reviews": 467,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-7",
    "name": "Bose Wireless Headphones Basic",
    "slug": "bose-wireless-headphones-basic-bose",
    "price": 6370,
    "originalPrice": 6370,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.6,
    "reviews": 91,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-8",
    "name": "Bose Bluetooth Speaker Basic",
    "slug": "bose-bluetooth-speaker-basic",
    "price": 3550,
    "originalPrice": 4631,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.3,
    "reviews": 1424,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "High-quality bluetooth speaker from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-9",
    "name": "pTron Bluetooth Speaker Standard",
    "slug": "ptron-bluetooth-speaker-standard-ptron",
    "price": 4810,
    "originalPrice": 5562,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.7,
    "reviews": 876,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-10",
    "name": "Xiaomi Bluetooth Speaker Basic",
    "slug": "xiaomi-bluetooth-speaker-basic-xiaomi",
    "price": 4970,
    "originalPrice": 6314,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4,
    "reviews": 408,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-11",
    "name": "Xiaomi Bluetooth Speaker Deluxe",
    "slug": "xiaomi-bluetooth-speaker-deluxe-xiaomi",
    "price": 2130,
    "originalPrice": 3262,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.6,
    "reviews": 1235,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-12",
    "name": "Philips Bluetooth Speaker Pro",
    "slug": "philips-bluetooth-speaker-pro-philips",
    "price": 3940,
    "originalPrice": 3940,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4,
    "reviews": 1349,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-13",
    "name": "OnePlus Bluetooth Speaker Pro",
    "slug": "oneplus-bluetooth-speaker-pro-oneplus",
    "price": 2510,
    "originalPrice": 3224,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.4,
    "reviews": 546,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-14",
    "name": "Bose Bluetooth Speaker Elite",
    "slug": "bose-bluetooth-speaker-elite-bose",
    "price": 4140,
    "originalPrice": 6552,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.3,
    "reviews": 472,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-15",
    "name": "boAt USB-C Hub Standard",
    "slug": "boat-usb-c-hub-standard",
    "price": 1420,
    "originalPrice": 1862,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.9,
    "reviews": 662,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality usb-c hub from boAt. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-16",
    "name": "HP USB-C Hub Deluxe",
    "slug": "hp-usb-c-hub-deluxe-hp",
    "price": 1780,
    "originalPrice": 2141,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.2,
    "reviews": 1104,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-17",
    "name": "Realme USB-C Hub Basic",
    "slug": "realme-usb-c-hub-basic-realme",
    "price": 960,
    "originalPrice": 1340,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.3,
    "reviews": 284,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-18",
    "name": "boAt USB-C Hub Deluxe",
    "slug": "boat-usb-c-hub-deluxe-boat",
    "price": 1870,
    "originalPrice": 2486,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.3,
    "reviews": 571,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-19",
    "name": "Sony USB-C Hub Plus",
    "slug": "sony-usb-c-hub-plus-sony",
    "price": 1970,
    "originalPrice": 1970,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.6,
    "reviews": 1371,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-20",
    "name": "Xiaomi USB-C Hub Standard",
    "slug": "xiaomi-usb-c-hub-standard-xiaomi",
    "price": 610,
    "originalPrice": 610,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.2,
    "reviews": 1168,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-21",
    "name": "Philips USB-C Hub Premium",
    "slug": "philips-usb-c-hub-premium-philips",
    "price": 940,
    "originalPrice": 940,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.5,
    "reviews": 328,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-22",
    "name": "Bose Wireless Mouse Elite",
    "slug": "bose-wireless-mouse-elite",
    "price": 1180,
    "originalPrice": 1180,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.6,
    "reviews": 334,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "High-quality wireless mouse from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-23",
    "name": "Dell Wireless Mouse Plus",
    "slug": "dell-wireless-mouse-plus-dell",
    "price": 1800,
    "originalPrice": 2825,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.4,
    "reviews": 943,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-24",
    "name": "Dell Wireless Mouse Basic",
    "slug": "dell-wireless-mouse-basic-dell",
    "price": 1170,
    "originalPrice": 1742,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4,
    "reviews": 1282,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-25",
    "name": "Xiaomi Wireless Mouse Ultra",
    "slug": "xiaomi-wireless-mouse-ultra-xiaomi",
    "price": 1960,
    "originalPrice": 2542,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.9,
    "reviews": 188,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-26",
    "name": "HP Wireless Mouse Premium",
    "slug": "hp-wireless-mouse-premium-hp",
    "price": 470,
    "originalPrice": 653,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.4,
    "reviews": 839,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-27",
    "name": "boAt Smart Band Pro",
    "slug": "boat-smart-band-pro",
    "price": 1820,
    "originalPrice": 1820,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.2,
    "reviews": 850,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "High-quality smart band from boAt. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-28",
    "name": "OnePlus Smart Band",
    "slug": "oneplus-smart-band-oneplus",
    "price": 1540,
    "originalPrice": 2453,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.2,
    "reviews": 12,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium smart band from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-29",
    "name": "boAt Smart Band",
    "slug": "boat-smart-band-boat",
    "price": 2850,
    "originalPrice": 2850,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.5,
    "reviews": 1135,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium smart band from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-30",
    "name": "HP Smart Band Standard",
    "slug": "hp-smart-band-standard-hp",
    "price": 3880,
    "originalPrice": 3880,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.9,
    "reviews": 185,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium smart band from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-31",
    "name": "HP Smart Band Pro",
    "slug": "hp-smart-band-pro-hp",
    "price": 2260,
    "originalPrice": 2260,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.8,
    "reviews": 979,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium smart band from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-32",
    "name": "Sony Smart Band Plus",
    "slug": "sony-smart-band-plus-sony",
    "price": 3180,
    "originalPrice": 3180,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.7,
    "reviews": 1449,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium smart band from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-33",
    "name": "HP Smart Band Ultra",
    "slug": "hp-smart-band-ultra-hp",
    "price": 2570,
    "originalPrice": 3517,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.7,
    "reviews": 234,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium smart band from HP. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-34",
    "name": "Panasonic Power Bank",
    "slug": "panasonic-power-bank",
    "price": 1050,
    "originalPrice": 1050,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4,
    "reviews": 39,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "High-quality power bank from Panasonic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-35",
    "name": "Samsung Power Bank Elite",
    "slug": "samsung-power-bank-elite-samsung",
    "price": 2310,
    "originalPrice": 2310,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.1,
    "reviews": 579,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium power bank from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-36",
    "name": "HP Power Bank Elite",
    "slug": "hp-power-bank-elite-hp",
    "price": 510,
    "originalPrice": 807,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.8,
    "reviews": 1125,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium power bank from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-37",
    "name": "Panasonic Power Bank Deluxe",
    "slug": "panasonic-power-bank-deluxe-panasonic",
    "price": 1600,
    "originalPrice": 1600,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.8,
    "reviews": 92,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium power bank from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-38",
    "name": "Apple Power Bank Ultra",
    "slug": "apple-power-bank-ultra-apple",
    "price": 2880,
    "originalPrice": 2880,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.8,
    "reviews": 577,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium power bank from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-39",
    "name": "Sony Power Bank Pro",
    "slug": "sony-power-bank-pro-sony",
    "price": 2280,
    "originalPrice": 2280,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.8,
    "reviews": 1015,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium power bank from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-40",
    "name": "Dell Power Bank",
    "slug": "dell-power-bank-dell",
    "price": 850,
    "originalPrice": 1294,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.7,
    "reviews": 837,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium power bank from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-41",
    "name": "HP HDMI Cable Standard",
    "slug": "hp-hdmi-cable-standard",
    "price": 230,
    "originalPrice": 230,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.4,
    "reviews": 1236,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "High-quality hdmi cable from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-42",
    "name": "OnePlus HDMI Cable Elite",
    "slug": "oneplus-hdmi-cable-elite-oneplus",
    "price": 450,
    "originalPrice": 450,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.7,
    "reviews": 1187,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-43",
    "name": "Realme HDMI Cable Ultra",
    "slug": "realme-hdmi-cable-ultra-realme",
    "price": 470,
    "originalPrice": 538,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.1,
    "reviews": 560,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-44",
    "name": "HP HDMI Cable Elite",
    "slug": "hp-hdmi-cable-elite-hp",
    "price": 500,
    "originalPrice": 500,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.6,
    "reviews": 1065,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-45",
    "name": "LG Webcam Elite",
    "slug": "lg-webcam-elite",
    "price": 4120,
    "originalPrice": 4120,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.8,
    "reviews": 1040,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality webcam from LG. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-46",
    "name": "Samsung Webcam Elite",
    "slug": "samsung-webcam-elite-samsung",
    "price": 4130,
    "originalPrice": 5174,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.6,
    "reviews": 1456,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium webcam from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-47",
    "name": "pTron Webcam Elite",
    "slug": "ptron-webcam-elite-ptron",
    "price": 2680,
    "originalPrice": 2680,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.5,
    "reviews": 722,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium webcam from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-48",
    "name": "Dell Webcam Pro",
    "slug": "dell-webcam-pro-dell",
    "price": 3720,
    "originalPrice": 5810,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.3,
    "reviews": 178,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium webcam from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-49",
    "name": "Apple Webcam Plus",
    "slug": "apple-webcam-plus-apple",
    "price": 3770,
    "originalPrice": 3770,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.8,
    "reviews": 85,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium webcam from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-50",
    "name": "Philips Smart Plug Elite",
    "slug": "philips-smart-plug-elite",
    "price": 730,
    "originalPrice": 730,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.2,
    "reviews": 1315,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "High-quality smart plug from Philips. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-51",
    "name": "HP Smart Plug Basic",
    "slug": "hp-smart-plug-basic-hp",
    "price": 920,
    "originalPrice": 920,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.8,
    "reviews": 572,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium smart plug from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-52",
    "name": "HP Smart Plug Deluxe",
    "slug": "hp-smart-plug-deluxe-hp",
    "price": 380,
    "originalPrice": 498,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.8,
    "reviews": 516,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium smart plug from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-53",
    "name": "Xiaomi Smart Plug Elite",
    "slug": "xiaomi-smart-plug-elite-xiaomi",
    "price": 950,
    "originalPrice": 950,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.5,
    "reviews": 1387,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-54",
    "name": "Apple Smart Plug Ultra",
    "slug": "apple-smart-plug-ultra-apple",
    "price": 760,
    "originalPrice": 1136,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.5,
    "reviews": 1484,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-55",
    "name": "Bose Smart Plug Deluxe",
    "slug": "bose-smart-plug-deluxe-bose",
    "price": 400,
    "originalPrice": 452,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.1,
    "reviews": 221,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-56",
    "name": "OnePlus LED Strip Lights Ultra",
    "slug": "oneplus-led-strip-lights-ultra",
    "price": 260,
    "originalPrice": 379,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 1309,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "High-quality led strip lights from OnePlus. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-57",
    "name": "Sony LED Strip Lights Deluxe",
    "slug": "sony-led-strip-lights-deluxe-sony",
    "price": 390,
    "originalPrice": 535,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.4,
    "reviews": 851,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-58",
    "name": "Xiaomi LED Strip Lights Elite",
    "slug": "xiaomi-led-strip-lights-elite-xiaomi",
    "price": 1260,
    "originalPrice": 1260,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.9,
    "reviews": 1353,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-59",
    "name": "Xiaomi LED Strip Lights Basic",
    "slug": "xiaomi-led-strip-lights-basic-xiaomi",
    "price": 940,
    "originalPrice": 940,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.3,
    "reviews": 544,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-60",
    "name": "Realme LED Strip Lights Basic",
    "slug": "realme-led-strip-lights-basic-realme",
    "price": 1340,
    "originalPrice": 2074,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.5,
    "reviews": 965,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-61",
    "name": "boAt LED Strip Lights Basic",
    "slug": "boat-led-strip-lights-basic-boat",
    "price": 240,
    "originalPrice": 240,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.3,
    "reviews": 739,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-62",
    "name": "pTron LED Strip Lights Standard",
    "slug": "ptron-led-strip-lights-standard-ptron",
    "price": 1190,
    "originalPrice": 1190,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.4,
    "reviews": 443,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-63",
    "name": "boAt Memory Card 64GB",
    "slug": "boat-memory-card-64gb",
    "price": 870,
    "originalPrice": 1178,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.8,
    "reviews": 115,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "High-quality memory card 64gb from boAt. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-64",
    "name": "HP Memory Card 64GB Ultra",
    "slug": "hp-memory-card-64gb-ultra-hp",
    "price": 940,
    "originalPrice": 1438,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.6,
    "reviews": 39,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-65",
    "name": "Panasonic Memory Card 64GB",
    "slug": "panasonic-memory-card-64gb-panasonic",
    "price": 1070,
    "originalPrice": 1070,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.7,
    "reviews": 329,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-66",
    "name": "Bose Memory Card 64GB Basic",
    "slug": "bose-memory-card-64gb-basic-bose",
    "price": 430,
    "originalPrice": 625,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4,
    "reviews": 769,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-67",
    "name": "Philips Memory Card 64GB Premium",
    "slug": "philips-memory-card-64gb-premium-philips",
    "price": 970,
    "originalPrice": 1226,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.1,
    "reviews": 984,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-68",
    "name": "Apple Memory Card 64GB Standard",
    "slug": "apple-memory-card-64gb-standard-apple",
    "price": 880,
    "originalPrice": 1260,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.4,
    "reviews": 669,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-69",
    "name": "Realme Memory Card 64GB Basic",
    "slug": "realme-memory-card-64gb-basic-realme",
    "price": 1270,
    "originalPrice": 1664,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.7,
    "reviews": 951,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-70",
    "name": "Sony Phone Case Deluxe",
    "slug": "sony-phone-case-deluxe",
    "price": 300,
    "originalPrice": 457,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.8,
    "reviews": 189,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "High-quality phone case from Sony. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-71",
    "name": "Dell Phone Case Standard",
    "slug": "dell-phone-case-standard-dell",
    "price": 350,
    "originalPrice": 350,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.3,
    "reviews": 1105,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium phone case from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-72",
    "name": "Xiaomi Phone Case",
    "slug": "xiaomi-phone-case-xiaomi",
    "price": 420,
    "originalPrice": 420,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.6,
    "reviews": 1124,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium phone case from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-73",
    "name": "Samsung Phone Case Pro",
    "slug": "samsung-phone-case-pro-samsung",
    "price": 520,
    "originalPrice": 520,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.4,
    "reviews": 1271,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium phone case from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-74",
    "name": "JBL Phone Case Standard",
    "slug": "jbl-phone-case-standard-jbl",
    "price": 690,
    "originalPrice": 690,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.8,
    "reviews": 1278,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium phone case from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-75",
    "name": "Samsung Phone Case Plus",
    "slug": "samsung-phone-case-plus-samsung",
    "price": 780,
    "originalPrice": 780,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.6,
    "reviews": 1038,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium phone case from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-76",
    "name": "Realme Phone Case Plus",
    "slug": "realme-phone-case-plus-realme",
    "price": 570,
    "originalPrice": 770,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 5,
    "reviews": 524,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium phone case from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-77",
    "name": "Realme Screen Guard Standard",
    "slug": "realme-screen-guard-standard",
    "price": 340,
    "originalPrice": 340,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.7,
    "reviews": 598,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "High-quality screen guard from Realme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-78",
    "name": "OnePlus Screen Guard",
    "slug": "oneplus-screen-guard-oneplus",
    "price": 330,
    "originalPrice": 418,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.7,
    "reviews": 32,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium screen guard from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-79",
    "name": "JBL Screen Guard Standard",
    "slug": "jbl-screen-guard-standard-jbl",
    "price": 160,
    "originalPrice": 227,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.3,
    "reviews": 71,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium screen guard from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-80",
    "name": "Apple Screen Guard",
    "slug": "apple-screen-guard-apple",
    "price": 230,
    "originalPrice": 344,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.3,
    "reviews": 368,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-81",
    "name": "Sony Screen Guard",
    "slug": "sony-screen-guard-sony",
    "price": 360,
    "originalPrice": 416,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.9,
    "reviews": 1122,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-82",
    "name": "OnePlus Screen Guard Deluxe",
    "slug": "oneplus-screen-guard-deluxe-oneplus",
    "price": 170,
    "originalPrice": 249,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.3,
    "reviews": 740,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium screen guard from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-83",
    "name": "Realme Screen Guard Elite",
    "slug": "realme-screen-guard-elite-realme",
    "price": 340,
    "originalPrice": 484,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.3,
    "reviews": 484,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-84",
    "name": "JBL Selfie Stick Tripod Deluxe",
    "slug": "jbl-selfie-stick-tripod-deluxe",
    "price": 790,
    "originalPrice": 790,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.4,
    "reviews": 503,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "High-quality selfie stick tripod from JBL. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-85",
    "name": "Sony Selfie Stick Tripod Standard",
    "slug": "sony-selfie-stick-tripod-standard-sony",
    "price": 440,
    "originalPrice": 560,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.4,
    "reviews": 1399,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-86",
    "name": "HP Selfie Stick Tripod Deluxe",
    "slug": "hp-selfie-stick-tripod-deluxe-hp",
    "price": 780,
    "originalPrice": 780,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.5,
    "reviews": 327,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from HP. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-87",
    "name": "Sony Selfie Stick Tripod Basic",
    "slug": "sony-selfie-stick-tripod-basic-sony",
    "price": 690,
    "originalPrice": 690,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.5,
    "reviews": 66,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-88",
    "name": "JBL Selfie Stick Tripod Ultra",
    "slug": "jbl-selfie-stick-tripod-ultra-jbl",
    "price": 880,
    "originalPrice": 1070,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.5,
    "reviews": 1372,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-89",
    "name": "Samsung Selfie Stick Tripod Deluxe",
    "slug": "samsung-selfie-stick-tripod-deluxe-samsung",
    "price": 480,
    "originalPrice": 594,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.7,
    "reviews": 696,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-1",
    "name": "Zara Running Shoes Deluxe",
    "slug": "zara-running-shoes-deluxe",
    "price": 5820,
    "originalPrice": 8569,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.9,
    "reviews": 610,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "High-quality running shoes from Zara. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-2",
    "name": "Puma Running Shoes Plus",
    "slug": "puma-running-shoes-plus-puma",
    "price": 6150,
    "originalPrice": 7499,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.5,
    "reviews": 637,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-3",
    "name": "Ray-Ban Running Shoes Premium",
    "slug": "ray-ban-running-shoes-premium-ray-ban",
    "price": 4350,
    "originalPrice": 5153,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.6,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-4",
    "name": "Wildcraft Running Shoes Ultra",
    "slug": "wildcraft-running-shoes-ultra-wildcraft",
    "price": 4810,
    "originalPrice": 6421,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.6,
    "reviews": 252,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-5",
    "name": "Ray-Ban Running Shoes Basic",
    "slug": "ray-ban-running-shoes-basic-ray-ban",
    "price": 3570,
    "originalPrice": 5091,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.7,
    "reviews": 647,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-6",
    "name": "Tommy Hilfiger Running Shoes Elite",
    "slug": "tommy-hilfiger-running-shoes-elite-tommy-hilfiger",
    "price": 3320,
    "originalPrice": 4906,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.4,
    "reviews": 1244,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-7",
    "name": "Puma Running Shoes Standard",
    "slug": "puma-running-shoes-standard-puma",
    "price": 3370,
    "originalPrice": 5088,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.8,
    "reviews": 1269,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-8",
    "name": "Ray-Ban Casual Sneakers Standard",
    "slug": "ray-ban-casual-sneakers-standard",
    "price": 1840,
    "originalPrice": 2616,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 5,
    "reviews": 1855,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "High-quality casual sneakers from Ray-Ban. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-9",
    "name": "Fossil Casual Sneakers",
    "slug": "fossil-casual-sneakers-fossil",
    "price": 1670,
    "originalPrice": 1670,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.4,
    "reviews": 1060,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-10",
    "name": "Zara Casual Sneakers Deluxe",
    "slug": "zara-casual-sneakers-deluxe-zara",
    "price": 3310,
    "originalPrice": 4162,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.1,
    "reviews": 307,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-11",
    "name": "HRX Casual Sneakers Deluxe",
    "slug": "hrx-casual-sneakers-deluxe-hrx",
    "price": 2900,
    "originalPrice": 2900,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.1,
    "reviews": 125,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-12",
    "name": "USPA Casual Sneakers Pro",
    "slug": "uspa-casual-sneakers-pro-uspa",
    "price": 3100,
    "originalPrice": 4110,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.3,
    "reviews": 1037,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-13",
    "name": "H&M Casual Sneakers Elite",
    "slug": "h-m-casual-sneakers-elite-h-m",
    "price": 2420,
    "originalPrice": 3626,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.9,
    "reviews": 606,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-14",
    "name": "Adidas Casual Sneakers Elite",
    "slug": "adidas-casual-sneakers-elite-adidas",
    "price": 3440,
    "originalPrice": 3440,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.4,
    "reviews": 417,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-15",
    "name": "HRX Round Neck T-Shirt Pro",
    "slug": "hrx-round-neck-t-shirt-pro",
    "price": 1330,
    "originalPrice": 1806,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.5,
    "reviews": 329,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "High-quality round neck t-shirt from HRX. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-16",
    "name": "Wildcraft Round Neck T-Shirt Ultra",
    "slug": "wildcraft-round-neck-t-shirt-ultra-wildcraft",
    "price": 870,
    "originalPrice": 1180,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.9,
    "reviews": 1384,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-17",
    "name": "Skechers Round Neck T-Shirt Deluxe",
    "slug": "skechers-round-neck-t-shirt-deluxe-skechers",
    "price": 800,
    "originalPrice": 904,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.6,
    "reviews": 152,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-18",
    "name": "Ray-Ban Round Neck T-Shirt Basic",
    "slug": "ray-ban-round-neck-t-shirt-basic-ray-ban",
    "price": 1270,
    "originalPrice": 1794,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.9,
    "reviews": 283,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-19",
    "name": "Ray-Ban Round Neck T-Shirt Plus",
    "slug": "ray-ban-round-neck-t-shirt-plus-ray-ban",
    "price": 1110,
    "originalPrice": 1671,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.9,
    "reviews": 1266,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-20",
    "name": "Skechers Round Neck T-Shirt Standard",
    "slug": "skechers-round-neck-t-shirt-standard-skechers",
    "price": 950,
    "originalPrice": 1300,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.5,
    "reviews": 1049,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-21",
    "name": "HRX Denim Jeans Premium",
    "slug": "hrx-denim-jeans-premium",
    "price": 2190,
    "originalPrice": 2708,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.5,
    "reviews": 724,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "High-quality denim jeans from HRX. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-22",
    "name": "H&M Denim Jeans Deluxe",
    "slug": "h-m-denim-jeans-deluxe-h-m",
    "price": 980,
    "originalPrice": 980,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.7,
    "reviews": 456,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-23",
    "name": "Puma Denim Jeans Elite",
    "slug": "puma-denim-jeans-elite-puma",
    "price": 940,
    "originalPrice": 940,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.3,
    "reviews": 765,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-24",
    "name": "Skechers Denim Jeans",
    "slug": "skechers-denim-jeans-skechers",
    "price": 870,
    "originalPrice": 870,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.9,
    "reviews": 1503,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-25",
    "name": "H&M Denim Jeans",
    "slug": "h-m-denim-jeans-h-m",
    "price": 1870,
    "originalPrice": 2917,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.4,
    "reviews": 1162,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-26",
    "name": "Tommy Hilfiger Formal Shirt Standard",
    "slug": "tommy-hilfiger-formal-shirt-standard",
    "price": 1130,
    "originalPrice": 1130,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.4,
    "reviews": 1002,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality formal shirt from Tommy Hilfiger. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-27",
    "name": "Roadster Formal Shirt Plus",
    "slug": "roadster-formal-shirt-plus-roadster",
    "price": 1150,
    "originalPrice": 1697,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.3,
    "reviews": 1059,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-28",
    "name": "Adidas Formal Shirt",
    "slug": "adidas-formal-shirt-adidas",
    "price": 1570,
    "originalPrice": 2431,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.8,
    "reviews": 837,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-29",
    "name": "Skechers Formal Shirt Deluxe",
    "slug": "skechers-formal-shirt-deluxe-skechers",
    "price": 1540,
    "originalPrice": 2180,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4,
    "reviews": 1135,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-30",
    "name": "Roadster Formal Shirt Premium",
    "slug": "roadster-formal-shirt-premium-roadster",
    "price": 1850,
    "originalPrice": 1850,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.3,
    "reviews": 1504,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-31",
    "name": "Levi's Leather Belt Elite",
    "slug": "levi-s-leather-belt-elite",
    "price": 350,
    "originalPrice": 350,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4,
    "reviews": 1913,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "High-quality leather belt from Levi's. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-32",
    "name": "HRX Leather Belt Basic",
    "slug": "hrx-leather-belt-basic-hrx",
    "price": 1070,
    "originalPrice": 1344,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.3,
    "reviews": 916,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium leather belt from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-33",
    "name": "Nike Leather Belt Plus",
    "slug": "nike-leather-belt-plus-nike",
    "price": 930,
    "originalPrice": 930,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3,
    "reviews": 1009,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-34",
    "name": "USPA Leather Belt Premium",
    "slug": "uspa-leather-belt-premium-uspa",
    "price": 940,
    "originalPrice": 940,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.1,
    "reviews": 717,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium leather belt from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-35",
    "name": "Wildcraft Leather Belt Elite",
    "slug": "wildcraft-leather-belt-elite-wildcraft",
    "price": 310,
    "originalPrice": 471,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.3,
    "reviews": 537,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-36",
    "name": "USPA Sports Cap Ultra",
    "slug": "uspa-sports-cap-ultra",
    "price": 210,
    "originalPrice": 210,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.1,
    "reviews": 216,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "High-quality sports cap from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-37",
    "name": "Puma Sports Cap",
    "slug": "puma-sports-cap-puma",
    "price": 480,
    "originalPrice": 573,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.1,
    "reviews": 541,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-38",
    "name": "Adidas Sports Cap",
    "slug": "adidas-sports-cap-adidas",
    "price": 470,
    "originalPrice": 645,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.2,
    "reviews": 548,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-39",
    "name": "H&M Sports Cap",
    "slug": "h-m-sports-cap-h-m",
    "price": 340,
    "originalPrice": 493,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.6,
    "reviews": 223,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium sports cap from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-40",
    "name": "H&M Sports Cap Ultra",
    "slug": "h-m-sports-cap-ultra-h-m",
    "price": 310,
    "originalPrice": 455,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3,
    "reviews": 769,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium sports cap from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-41",
    "name": "Tommy Hilfiger Wrist Watch Deluxe",
    "slug": "tommy-hilfiger-wrist-watch-deluxe",
    "price": 3910,
    "originalPrice": 3910,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.4,
    "reviews": 575,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "High-quality wrist watch from Tommy Hilfiger. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-42",
    "name": "Adidas Wrist Watch",
    "slug": "adidas-wrist-watch-adidas",
    "price": 2610,
    "originalPrice": 2610,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.5,
    "reviews": 1091,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-43",
    "name": "Adidas Wrist Watch Premium",
    "slug": "adidas-wrist-watch-premium-adidas",
    "price": 780,
    "originalPrice": 1057,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.7,
    "reviews": 1068,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-44",
    "name": "Ray-Ban Wrist Watch Elite",
    "slug": "ray-ban-wrist-watch-elite-ray-ban",
    "price": 4520,
    "originalPrice": 4520,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.8,
    "reviews": 996,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-45",
    "name": "Roadster Wrist Watch Deluxe",
    "slug": "roadster-wrist-watch-deluxe-roadster",
    "price": 4970,
    "originalPrice": 4970,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4,
    "reviews": 931,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-46",
    "name": "H&M Casual Shorts",
    "slug": "h-m-casual-shorts",
    "price": 1360,
    "originalPrice": 1710,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.3,
    "reviews": 1435,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "High-quality casual shorts from H&M. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-47",
    "name": "Nike Casual Shorts Ultra",
    "slug": "nike-casual-shorts-ultra-nike",
    "price": 1320,
    "originalPrice": 1690,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.8,
    "reviews": 823,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-48",
    "name": "Ray-Ban Casual Shorts Basic",
    "slug": "ray-ban-casual-shorts-basic-ray-ban",
    "price": 1320,
    "originalPrice": 1928,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.5,
    "reviews": 1470,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-49",
    "name": "Puma Casual Shorts Ultra",
    "slug": "puma-casual-shorts-ultra-puma",
    "price": 1070,
    "originalPrice": 1353,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.9,
    "reviews": 1292,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-50",
    "name": "Adidas Casual Shorts Basic",
    "slug": "adidas-casual-shorts-basic-adidas",
    "price": 1310,
    "originalPrice": 1310,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.7,
    "reviews": 1017,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-51",
    "name": "Levi's Casual Shorts Elite",
    "slug": "levi-s-casual-shorts-elite-levi-s",
    "price": 700,
    "originalPrice": 822,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.5,
    "reviews": 1060,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-52",
    "name": "Nike Winter Gloves Elite",
    "slug": "nike-winter-gloves-elite",
    "price": 310,
    "originalPrice": 310,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.7,
    "reviews": 220,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "High-quality winter gloves from Nike. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-53",
    "name": "Skechers Winter Gloves Pro",
    "slug": "skechers-winter-gloves-pro-skechers",
    "price": 700,
    "originalPrice": 700,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.8,
    "reviews": 845,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-54",
    "name": "H&M Winter Gloves Ultra",
    "slug": "h-m-winter-gloves-ultra-h-m",
    "price": 760,
    "originalPrice": 760,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.2,
    "reviews": 677,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-55",
    "name": "Nike Winter Gloves Pro",
    "slug": "nike-winter-gloves-pro-nike",
    "price": 450,
    "originalPrice": 450,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.7,
    "reviews": 1508,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-56",
    "name": "Levi's Winter Gloves Pro",
    "slug": "levi-s-winter-gloves-pro-levi-s",
    "price": 720,
    "originalPrice": 720,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.7,
    "reviews": 417,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-57",
    "name": "Levi's Sunglasses Pro",
    "slug": "levi-s-sunglasses-pro",
    "price": 1550,
    "originalPrice": 1550,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.3,
    "reviews": 1051,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "High-quality sunglasses from Levi's. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-58",
    "name": "Tommy Hilfiger Sunglasses Elite",
    "slug": "tommy-hilfiger-sunglasses-elite-tommy-hilfiger",
    "price": 780,
    "originalPrice": 1073,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.6,
    "reviews": 782,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-59",
    "name": "Wildcraft Sunglasses Ultra",
    "slug": "wildcraft-sunglasses-ultra-wildcraft",
    "price": 1430,
    "originalPrice": 1702,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.9,
    "reviews": 661,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-60",
    "name": "H&M Sunglasses Deluxe",
    "slug": "h-m-sunglasses-deluxe-h-m",
    "price": 2970,
    "originalPrice": 4121,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.2,
    "reviews": 397,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-61",
    "name": "Fossil Sunglasses Plus",
    "slug": "fossil-sunglasses-plus-fossil",
    "price": 2550,
    "originalPrice": 3345,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.6,
    "reviews": 713,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-62",
    "name": "Ray-Ban Sunglasses",
    "slug": "ray-ban-sunglasses-ray-ban",
    "price": 2270,
    "originalPrice": 3114,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.1,
    "reviews": 1474,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-63",
    "name": "Adidas Wallet RFID",
    "slug": "adidas-wallet-rfid",
    "price": 1710,
    "originalPrice": 1710,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 5,
    "reviews": 1157,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "High-quality wallet rfid from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-64",
    "name": "Zara Wallet RFID Basic",
    "slug": "zara-wallet-rfid-basic-zara",
    "price": 600,
    "originalPrice": 600,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.7,
    "reviews": 318,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-65",
    "name": "Levi's Wallet RFID Premium",
    "slug": "levi-s-wallet-rfid-premium-levi-s",
    "price": 1650,
    "originalPrice": 2245,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 5,
    "reviews": 1473,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-66",
    "name": "Fossil Wallet RFID Basic",
    "slug": "fossil-wallet-rfid-basic-fossil",
    "price": 1610,
    "originalPrice": 1858,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.9,
    "reviews": 944,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-67",
    "name": "Wildcraft Wallet RFID Standard",
    "slug": "wildcraft-wallet-rfid-standard-wildcraft",
    "price": 740,
    "originalPrice": 824,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.2,
    "reviews": 141,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-68",
    "name": "Adidas Wallet RFID Elite",
    "slug": "adidas-wallet-rfid-elite-adidas",
    "price": 970,
    "originalPrice": 1183,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.4,
    "reviews": 1044,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-69",
    "name": "Puma Wallet RFID Ultra",
    "slug": "puma-wallet-rfid-ultra-puma",
    "price": 440,
    "originalPrice": 645,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.1,
    "reviews": 743,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-1",
    "name": "Prestige Non-Stick Tawa Premium",
    "slug": "prestige-non-stick-tawa-premium",
    "price": 890,
    "originalPrice": 1093,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.1,
    "reviews": 1793,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "High-quality non-stick tawa from Prestige. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-2",
    "name": "Hawkins Non-Stick Tawa Standard",
    "slug": "hawkins-non-stick-tawa-standard-hawkins",
    "price": 980,
    "originalPrice": 980,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.5,
    "reviews": 820,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-3",
    "name": "Cello Non-Stick Tawa Standard",
    "slug": "cello-non-stick-tawa-standard-cello",
    "price": 1020,
    "originalPrice": 1494,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.2,
    "reviews": 754,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-4",
    "name": "Borosil Non-Stick Tawa Premium",
    "slug": "borosil-non-stick-tawa-premium-borosil",
    "price": 1290,
    "originalPrice": 1290,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.2,
    "reviews": 1402,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-5",
    "name": "Milton Non-Stick Tawa Pro",
    "slug": "milton-non-stick-tawa-pro-milton",
    "price": 320,
    "originalPrice": 454,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.2,
    "reviews": 1036,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-6",
    "name": "Prestige Non-Stick Tawa Standard",
    "slug": "prestige-non-stick-tawa-standard-prestige",
    "price": 770,
    "originalPrice": 770,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.4,
    "reviews": 551,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-7",
    "name": "Hawkins Non-Stick Tawa Pro",
    "slug": "hawkins-non-stick-tawa-pro-hawkins",
    "price": 590,
    "originalPrice": 590,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.3,
    "reviews": 1407,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-8",
    "name": "Borosil Microwave Safe Bowl Set Deluxe",
    "slug": "borosil-microwave-safe-bowl-set-deluxe",
    "price": 330,
    "originalPrice": 330,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 5,
    "reviews": 624,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality microwave safe bowl set from Borosil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-9",
    "name": "Signoraware Microwave Safe Bowl Set Pro",
    "slug": "signoraware-microwave-safe-bowl-set-pro-signoraware",
    "price": 590,
    "originalPrice": 703,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.9,
    "reviews": 296,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-10",
    "name": "Butterfly Microwave Safe Bowl Set Ultra",
    "slug": "butterfly-microwave-safe-bowl-set-ultra-butterfly",
    "price": 780,
    "originalPrice": 1001,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 5,
    "reviews": 1103,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-11",
    "name": "Prestige Microwave Safe Bowl Set Ultra",
    "slug": "prestige-microwave-safe-bowl-set-ultra-prestige",
    "price": 780,
    "originalPrice": 1240,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.6,
    "reviews": 1452,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-12",
    "name": "Prestige Microwave Safe Bowl Set Basic",
    "slug": "prestige-microwave-safe-bowl-set-basic-prestige",
    "price": 640,
    "originalPrice": 990,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.8,
    "reviews": 528,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-13",
    "name": "Signoraware Vegetable Chopper Elite",
    "slug": "signoraware-vegetable-chopper-elite",
    "price": 760,
    "originalPrice": 956,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4,
    "reviews": 1979,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "High-quality vegetable chopper from Signoraware. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-14",
    "name": "Pigeon Vegetable Chopper Deluxe",
    "slug": "pigeon-vegetable-chopper-deluxe-pigeon",
    "price": 770,
    "originalPrice": 853,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.7,
    "reviews": 1280,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-15",
    "name": "Cello Vegetable Chopper Plus",
    "slug": "cello-vegetable-chopper-plus-cello",
    "price": 470,
    "originalPrice": 702,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.5,
    "reviews": 239,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-16",
    "name": "Milton Vegetable Chopper Deluxe",
    "slug": "milton-vegetable-chopper-deluxe-milton",
    "price": 490,
    "originalPrice": 624,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.1,
    "reviews": 1397,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-17",
    "name": "Prestige Vegetable Chopper",
    "slug": "prestige-vegetable-chopper-prestige",
    "price": 680,
    "originalPrice": 756,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.7,
    "reviews": 1421,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-18",
    "name": "Vidiem Vegetable Chopper",
    "slug": "vidiem-vegetable-chopper-vidiem",
    "price": 790,
    "originalPrice": 1158,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4,
    "reviews": 1058,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-19",
    "name": "Borosil Vegetable Chopper Standard",
    "slug": "borosil-vegetable-chopper-standard-borosil",
    "price": 230,
    "originalPrice": 230,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.7,
    "reviews": 1028,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-20",
    "name": "Butterfly Spice Rack Premium",
    "slug": "butterfly-spice-rack-premium",
    "price": 710,
    "originalPrice": 710,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4,
    "reviews": 364,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "High-quality spice rack from Butterfly. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-21",
    "name": "Milton Spice Rack Pro",
    "slug": "milton-spice-rack-pro-milton",
    "price": 490,
    "originalPrice": 490,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.1,
    "reviews": 655,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-22",
    "name": "Cello Spice Rack Ultra",
    "slug": "cello-spice-rack-ultra-cello",
    "price": 360,
    "originalPrice": 473,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.2,
    "reviews": 1086,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-23",
    "name": "Butterfly Spice Rack Standard",
    "slug": "butterfly-spice-rack-standard-butterfly",
    "price": 740,
    "originalPrice": 740,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.8,
    "reviews": 1066,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-24",
    "name": "Vidiem Spice Rack Basic",
    "slug": "vidiem-spice-rack-basic-vidiem",
    "price": 390,
    "originalPrice": 390,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.7,
    "reviews": 617,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-25",
    "name": "Vidiem Spice Rack",
    "slug": "vidiem-spice-rack-vidiem",
    "price": 760,
    "originalPrice": 760,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.9,
    "reviews": 421,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-26",
    "name": "Cello Tumbler Glass Set Elite",
    "slug": "cello-tumbler-glass-set-elite",
    "price": 390,
    "originalPrice": 554,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.2,
    "reviews": 1707,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "High-quality tumbler glass set from Cello. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-27",
    "name": "Milton Tumbler Glass Set Deluxe",
    "slug": "milton-tumbler-glass-set-deluxe-milton",
    "price": 540,
    "originalPrice": 540,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.4,
    "reviews": 354,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-28",
    "name": "Prestige Tumbler Glass Set Standard",
    "slug": "prestige-tumbler-glass-set-standard-prestige",
    "price": 310,
    "originalPrice": 342,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.5,
    "reviews": 542,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-29",
    "name": "Milton Tumbler Glass Set Premium",
    "slug": "milton-tumbler-glass-set-premium-milton",
    "price": 520,
    "originalPrice": 723,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.1,
    "reviews": 544,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-30",
    "name": "Cello Tumbler Glass Set",
    "slug": "cello-tumbler-glass-set-cello",
    "price": 240,
    "originalPrice": 382,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.6,
    "reviews": 1155,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-31",
    "name": "Milton Kitchen Tongs Standard",
    "slug": "milton-kitchen-tongs-standard",
    "price": 360,
    "originalPrice": 517,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.9,
    "reviews": 1169,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality kitchen tongs from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-32",
    "name": "Hawkins Kitchen Tongs Basic",
    "slug": "hawkins-kitchen-tongs-basic-hawkins",
    "price": 320,
    "originalPrice": 320,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.9,
    "reviews": 1161,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-33",
    "name": "Wakefit Kitchen Tongs Pro",
    "slug": "wakefit-kitchen-tongs-pro-wakefit",
    "price": 160,
    "originalPrice": 209,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.5,
    "reviews": 1113,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-34",
    "name": "Milton Kitchen Tongs Pro",
    "slug": "milton-kitchen-tongs-pro-milton",
    "price": 280,
    "originalPrice": 407,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.5,
    "reviews": 548,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-35",
    "name": "Wakefit Dinner Plate Set",
    "slug": "wakefit-dinner-plate-set",
    "price": 950,
    "originalPrice": 950,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.8,
    "reviews": 748,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "High-quality dinner plate set from Wakefit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-36",
    "name": "Pigeon Dinner Plate Set Pro",
    "slug": "pigeon-dinner-plate-set-pro-pigeon",
    "price": 1100,
    "originalPrice": 1266,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.4,
    "reviews": 1276,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-37",
    "name": "Cello Dinner Plate Set",
    "slug": "cello-dinner-plate-set-cello",
    "price": 1010,
    "originalPrice": 1010,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4,
    "reviews": 1119,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-38",
    "name": "Hawkins Dinner Plate Set Deluxe",
    "slug": "hawkins-dinner-plate-set-deluxe-hawkins",
    "price": 1790,
    "originalPrice": 1790,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.1,
    "reviews": 1034,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-39",
    "name": "Wakefit Dinner Plate Set Pro",
    "slug": "wakefit-dinner-plate-set-pro-wakefit",
    "price": 730,
    "originalPrice": 824,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.5,
    "reviews": 328,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-40",
    "name": "Pigeon Storage Jar Set Deluxe",
    "slug": "pigeon-storage-jar-set-deluxe",
    "price": 520,
    "originalPrice": 520,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.6,
    "reviews": 344,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "High-quality storage jar set from Pigeon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-41",
    "name": "Butterfly Storage Jar Set Basic",
    "slug": "butterfly-storage-jar-set-basic-butterfly",
    "price": 500,
    "originalPrice": 500,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.8,
    "reviews": 1217,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-42",
    "name": "Vidiem Storage Jar Set Deluxe",
    "slug": "vidiem-storage-jar-set-deluxe-vidiem",
    "price": 770,
    "originalPrice": 1167,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.9,
    "reviews": 283,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-43",
    "name": "Milton Storage Jar Set Deluxe",
    "slug": "milton-storage-jar-set-deluxe-milton",
    "price": 500,
    "originalPrice": 608,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.5,
    "reviews": 1143,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-44",
    "name": "Vidiem Storage Jar Set",
    "slug": "vidiem-storage-jar-set-vidiem",
    "price": 300,
    "originalPrice": 365,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.2,
    "reviews": 691,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-45",
    "name": "Hawkins Storage Jar Set Elite",
    "slug": "hawkins-storage-jar-set-elite-hawkins",
    "price": 590,
    "originalPrice": 590,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.5,
    "reviews": 1297,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-46",
    "name": "Butterfly Storage Jar Set Elite",
    "slug": "butterfly-storage-jar-set-elite-butterfly",
    "price": 370,
    "originalPrice": 474,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4,
    "reviews": 1305,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-47",
    "name": "Pigeon Mop Floor Cleaner Plus",
    "slug": "pigeon-mop-floor-cleaner-plus",
    "price": 740,
    "originalPrice": 1139,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.7,
    "reviews": 385,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "High-quality mop floor cleaner from Pigeon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-48",
    "name": "Wakefit Mop Floor Cleaner Premium",
    "slug": "wakefit-mop-floor-cleaner-premium-wakefit",
    "price": 550,
    "originalPrice": 647,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.9,
    "reviews": 1022,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-49",
    "name": "Signoraware Mop Floor Cleaner Plus",
    "slug": "signoraware-mop-floor-cleaner-plus-signoraware",
    "price": 660,
    "originalPrice": 660,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.1,
    "reviews": 1213,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-50",
    "name": "Signoraware Mop Floor Cleaner Premium",
    "slug": "signoraware-mop-floor-cleaner-premium-signoraware",
    "price": 590,
    "originalPrice": 590,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.5,
    "reviews": 753,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-51",
    "name": "Milton Mop Floor Cleaner Pro",
    "slug": "milton-mop-floor-cleaner-pro-milton",
    "price": 650,
    "originalPrice": 650,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.8,
    "reviews": 1041,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-52",
    "name": "Wakefit Mop Floor Cleaner Standard",
    "slug": "wakefit-mop-floor-cleaner-standard-wakefit",
    "price": 610,
    "originalPrice": 856,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.1,
    "reviews": 700,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-53",
    "name": "Signoraware Clothes Hanger Set Plus",
    "slug": "signoraware-clothes-hanger-set-plus",
    "price": 100,
    "originalPrice": 100,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.6,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "High-quality clothes hanger set from Signoraware. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-54",
    "name": "Prestige Clothes Hanger Set",
    "slug": "prestige-clothes-hanger-set-prestige",
    "price": 390,
    "originalPrice": 390,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.9,
    "reviews": 1005,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-55",
    "name": "Borosil Clothes Hanger Set Deluxe",
    "slug": "borosil-clothes-hanger-set-deluxe-borosil",
    "price": 110,
    "originalPrice": 166,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.8,
    "reviews": 1249,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-56",
    "name": "Butterfly Clothes Hanger Set",
    "slug": "butterfly-clothes-hanger-set-butterfly",
    "price": 440,
    "originalPrice": 440,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.3,
    "reviews": 140,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-57",
    "name": "Cello Clothes Hanger Set",
    "slug": "cello-clothes-hanger-set-cello",
    "price": 120,
    "originalPrice": 146,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.2,
    "reviews": 322,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-58",
    "name": "Signoraware Clothes Hanger Set",
    "slug": "signoraware-clothes-hanger-set-signoraware",
    "price": 160,
    "originalPrice": 218,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.1,
    "reviews": 668,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-59",
    "name": "Prestige Door Mat Standard",
    "slug": "prestige-door-mat-standard",
    "price": 350,
    "originalPrice": 473,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.3,
    "reviews": 1906,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "High-quality door mat from Prestige. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-60",
    "name": "Butterfly Door Mat",
    "slug": "butterfly-door-mat-butterfly",
    "price": 190,
    "originalPrice": 277,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.5,
    "reviews": 841,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium door mat from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-61",
    "name": "Wakefit Door Mat Ultra",
    "slug": "wakefit-door-mat-ultra-wakefit",
    "price": 170,
    "originalPrice": 170,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.9,
    "reviews": 1473,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium door mat from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-62",
    "name": "Prestige Door Mat Deluxe",
    "slug": "prestige-door-mat-deluxe-prestige",
    "price": 420,
    "originalPrice": 420,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3,
    "reviews": 1225,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium door mat from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-63",
    "name": "Signoraware Door Mat Premium",
    "slug": "signoraware-door-mat-premium-signoraware",
    "price": 300,
    "originalPrice": 300,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.3,
    "reviews": 1480,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium door mat from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-64",
    "name": "Wakefit Door Mat Elite",
    "slug": "wakefit-door-mat-elite-wakefit",
    "price": 410,
    "originalPrice": 410,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.6,
    "reviews": 1188,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium door mat from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-65",
    "name": "Milton Cushion Cover Set Ultra",
    "slug": "milton-cushion-cover-set-ultra",
    "price": 550,
    "originalPrice": 550,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.1,
    "reviews": 1045,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "High-quality cushion cover set from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-66",
    "name": "Signoraware Cushion Cover Set Ultra",
    "slug": "signoraware-cushion-cover-set-ultra-signoraware",
    "price": 400,
    "originalPrice": 581,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.3,
    "reviews": 604,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-67",
    "name": "Pigeon Cushion Cover Set Elite",
    "slug": "pigeon-cushion-cover-set-elite-pigeon",
    "price": 320,
    "originalPrice": 320,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3,
    "reviews": 584,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-68",
    "name": "Signoraware Cushion Cover Set",
    "slug": "signoraware-cushion-cover-set-signoraware",
    "price": 610,
    "originalPrice": 800,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.2,
    "reviews": 1306,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-69",
    "name": "Cello Cushion Cover Set Deluxe",
    "slug": "cello-cushion-cover-set-deluxe-cello",
    "price": 520,
    "originalPrice": 718,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.5,
    "reviews": 634,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-70",
    "name": "Butterfly Cushion Cover Set Plus",
    "slug": "butterfly-cushion-cover-set-plus-butterfly",
    "price": 400,
    "originalPrice": 521,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.9,
    "reviews": 80,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-1",
    "name": "Oxford Fiction Bestseller Ultra",
    "slug": "oxford-fiction-bestseller-ultra",
    "price": 270,
    "originalPrice": 318,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4,
    "reviews": 790,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "High-quality fiction bestseller from Oxford. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-2",
    "name": "HarperCollins Fiction Bestseller Standard",
    "slug": "harpercollins-fiction-bestseller-standard-harpercollins",
    "price": 310,
    "originalPrice": 478,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.6,
    "reviews": 1174,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-3",
    "name": "Oxford Fiction Bestseller Deluxe",
    "slug": "oxford-fiction-bestseller-deluxe-oxford",
    "price": 400,
    "originalPrice": 400,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.3,
    "reviews": 1314,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-4",
    "name": "Scholastic Fiction Bestseller",
    "slug": "scholastic-fiction-bestseller-scholastic",
    "price": 400,
    "originalPrice": 533,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4,
    "reviews": 754,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-5",
    "name": "HarperCollins Fiction Bestseller Pro",
    "slug": "harpercollins-fiction-bestseller-pro-harpercollins",
    "price": 460,
    "originalPrice": 460,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.2,
    "reviews": 15,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-6",
    "name": "HarperCollins Self-Help Guide Pro",
    "slug": "harpercollins-self-help-guide-pro",
    "price": 600,
    "originalPrice": 751,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.8,
    "reviews": 896,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "High-quality self-help guide from HarperCollins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-7",
    "name": "Random House Self-Help Guide Plus",
    "slug": "random-house-self-help-guide-plus-random-house",
    "price": 280,
    "originalPrice": 325,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.2,
    "reviews": 1161,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-8",
    "name": "Aleph Self-Help Guide Basic",
    "slug": "aleph-self-help-guide-basic-aleph",
    "price": 260,
    "originalPrice": 299,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.5,
    "reviews": 1340,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-9",
    "name": "HarperCollins Self-Help Guide Premium",
    "slug": "harpercollins-self-help-guide-premium-harpercollins",
    "price": 570,
    "originalPrice": 815,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.5,
    "reviews": 1342,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-10",
    "name": "Simon & Schuster Self-Help Guide Ultra",
    "slug": "simon-schuster-self-help-guide-ultra-simon-schuster",
    "price": 470,
    "originalPrice": 470,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.9,
    "reviews": 1404,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-11",
    "name": "Simon & Schuster Indian History Book Pro",
    "slug": "simon-schuster-indian-history-book-pro",
    "price": 490,
    "originalPrice": 490,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.8,
    "reviews": 229,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality indian history book from Simon & Schuster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-12",
    "name": "Random House Indian History Book Pro",
    "slug": "random-house-indian-history-book-pro-random-house",
    "price": 840,
    "originalPrice": 960,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.5,
    "reviews": 691,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-13",
    "name": "Scholastic Indian History Book Premium",
    "slug": "scholastic-indian-history-book-premium-scholastic",
    "price": 340,
    "originalPrice": 397,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.4,
    "reviews": 1133,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-14",
    "name": "Random House Indian History Book Standard",
    "slug": "random-house-indian-history-book-standard-random-house",
    "price": 960,
    "originalPrice": 960,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.9,
    "reviews": 108,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-15",
    "name": "Puffin Indian History Book Standard",
    "slug": "puffin-indian-history-book-standard-puffin",
    "price": 710,
    "originalPrice": 710,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.3,
    "reviews": 1288,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-16",
    "name": "HarperCollins Indian History Book Pro",
    "slug": "harpercollins-indian-history-book-pro-harpercollins",
    "price": 740,
    "originalPrice": 740,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4,
    "reviews": 824,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium indian history book from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-17",
    "name": "Puffin Children Storybook Standard",
    "slug": "puffin-children-storybook-standard",
    "price": 450,
    "originalPrice": 450,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.6,
    "reviews": 852,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality children storybook from Puffin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-18",
    "name": "Puffin Children Storybook Deluxe",
    "slug": "puffin-children-storybook-deluxe-puffin",
    "price": 380,
    "originalPrice": 580,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.2,
    "reviews": 1434,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-19",
    "name": "Puffin Children Storybook Pro",
    "slug": "puffin-children-storybook-pro-puffin",
    "price": 220,
    "originalPrice": 312,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.5,
    "reviews": 1298,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-20",
    "name": "Penguin Children Storybook Premium",
    "slug": "penguin-children-storybook-premium-penguin",
    "price": 420,
    "originalPrice": 420,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.3,
    "reviews": 1061,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-21",
    "name": "Bloomsbury Children Storybook",
    "slug": "bloomsbury-children-storybook-bloomsbury",
    "price": 210,
    "originalPrice": 302,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.2,
    "reviews": 80,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-22",
    "name": "Puffin Cooking Recipe Book",
    "slug": "puffin-cooking-recipe-book",
    "price": 410,
    "originalPrice": 629,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.3,
    "reviews": 510,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "High-quality cooking recipe book from Puffin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-23",
    "name": "Simon & Schuster Cooking Recipe Book Premium",
    "slug": "simon-schuster-cooking-recipe-book-premium-simon-schuster",
    "price": 550,
    "originalPrice": 550,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.4,
    "reviews": 488,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-24",
    "name": "Puffin Cooking Recipe Book Basic",
    "slug": "puffin-cooking-recipe-book-basic-puffin",
    "price": 720,
    "originalPrice": 1094,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.8,
    "reviews": 296,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-25",
    "name": "Rupa Cooking Recipe Book",
    "slug": "rupa-cooking-recipe-book-rupa",
    "price": 360,
    "originalPrice": 360,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.5,
    "reviews": 639,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-26",
    "name": "Aleph Cooking Recipe Book Deluxe",
    "slug": "aleph-cooking-recipe-book-deluxe-aleph",
    "price": 430,
    "originalPrice": 508,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.3,
    "reviews": 514,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-27",
    "name": "HarperCollins Cooking Recipe Book Ultra",
    "slug": "harpercollins-cooking-recipe-book-ultra-harpercollins",
    "price": 640,
    "originalPrice": 640,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.9,
    "reviews": 372,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-28",
    "name": "Oxford Cooking Recipe Book Basic",
    "slug": "oxford-cooking-recipe-book-basic-oxford",
    "price": 760,
    "originalPrice": 865,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.9,
    "reviews": 1216,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-29",
    "name": "Scholastic Exam Guide Elite",
    "slug": "scholastic-exam-guide-elite",
    "price": 500,
    "originalPrice": 500,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.3,
    "reviews": 1218,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality exam guide from Scholastic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-30",
    "name": "Oxford Exam Guide Plus",
    "slug": "oxford-exam-guide-plus-oxford",
    "price": 330,
    "originalPrice": 500,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.9,
    "reviews": 567,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-31",
    "name": "Rupa Exam Guide",
    "slug": "rupa-exam-guide-rupa",
    "price": 420,
    "originalPrice": 475,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4,
    "reviews": 194,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-32",
    "name": "HarperCollins Exam Guide Elite",
    "slug": "harpercollins-exam-guide-elite-harpercollins",
    "price": 530,
    "originalPrice": 695,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.9,
    "reviews": 845,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium exam guide from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-33",
    "name": "Oxford Exam Guide Standard",
    "slug": "oxford-exam-guide-standard-oxford",
    "price": 450,
    "originalPrice": 640,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3,
    "reviews": 1109,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-34",
    "name": "Aleph Art Sketchbook Pro",
    "slug": "aleph-art-sketchbook-pro",
    "price": 400,
    "originalPrice": 555,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4,
    "reviews": 168,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "High-quality art sketchbook from Aleph. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "bo-35",
    "name": "Scholastic Art Sketchbook Premium",
    "slug": "scholastic-art-sketchbook-premium-scholastic",
    "price": 450,
    "originalPrice": 450,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.5,
    "reviews": 1191,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-36",
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
    "rating": 4.7,
    "reviews": 148,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-37",
    "name": "Simon & Schuster Art Sketchbook Standard",
    "slug": "simon-schuster-art-sketchbook-standard-simon-schuster",
    "price": 440,
    "originalPrice": 634,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.1,
    "reviews": 1017,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-38",
    "name": "Bloomsbury Art Sketchbook Deluxe",
    "slug": "bloomsbury-art-sketchbook-deluxe-bloomsbury",
    "price": 180,
    "originalPrice": 200,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4,
    "reviews": 1146,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-39",
    "name": "Scholastic Fountain Pen Standard",
    "slug": "scholastic-fountain-pen-standard",
    "price": 810,
    "originalPrice": 1033,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.9,
    "reviews": 1143,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "High-quality fountain pen from Scholastic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-40",
    "name": "Oxford Fountain Pen Pro",
    "slug": "oxford-fountain-pen-pro-oxford",
    "price": 310,
    "originalPrice": 310,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.5,
    "reviews": 676,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-41",
    "name": "Random House Fountain Pen Elite",
    "slug": "random-house-fountain-pen-elite-random-house",
    "price": 950,
    "originalPrice": 1284,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.2,
    "reviews": 539,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-42",
    "name": "HarperCollins Fountain Pen Elite",
    "slug": "harpercollins-fountain-pen-elite-harpercollins",
    "price": 1400,
    "originalPrice": 2215,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3,
    "reviews": 465,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-43",
    "name": "Bloomsbury Gift Wrapping Set Pro",
    "slug": "bloomsbury-gift-wrapping-set-pro",
    "price": 120,
    "originalPrice": 120,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.1,
    "reviews": 727,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "High-quality gift wrapping set from Bloomsbury. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-44",
    "name": "HarperCollins Gift Wrapping Set Pro",
    "slug": "harpercollins-gift-wrapping-set-pro-harpercollins",
    "price": 160,
    "originalPrice": 160,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.6,
    "reviews": 257,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-45",
    "name": "Penguin Gift Wrapping Set Ultra",
    "slug": "penguin-gift-wrapping-set-ultra-penguin",
    "price": 220,
    "originalPrice": 287,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.3,
    "reviews": 1371,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-46",
    "name": "Random House Gift Wrapping Set Plus",
    "slug": "random-house-gift-wrapping-set-plus-random-house",
    "price": 360,
    "originalPrice": 360,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.5,
    "reviews": 1045,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-1",
    "name": "BSN Skipping Rope Premium",
    "slug": "bsn-skipping-rope-premium",
    "price": 350,
    "originalPrice": 350,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.1,
    "reviews": 1779,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "High-quality skipping rope from BSN. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-2",
    "name": "Speed Skipping Rope Deluxe",
    "slug": "speed-skipping-rope-deluxe-speed",
    "price": 380,
    "originalPrice": 419,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.6,
    "reviews": 616,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-3",
    "name": "Decathlon Skipping Rope",
    "slug": "decathlon-skipping-rope-decathlon",
    "price": 340,
    "originalPrice": 340,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.4,
    "reviews": 616,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-4",
    "name": "Speed Skipping Rope Ultra",
    "slug": "speed-skipping-rope-ultra-speed",
    "price": 350,
    "originalPrice": 500,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.2,
    "reviews": 328,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-5",
    "name": "Fitkit Skipping Rope Elite",
    "slug": "fitkit-skipping-rope-elite-fitkit",
    "price": 370,
    "originalPrice": 443,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.3,
    "reviews": 84,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-6",
    "name": "Strauss Skipping Rope Plus",
    "slug": "strauss-skipping-rope-plus-strauss",
    "price": 380,
    "originalPrice": 602,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.8,
    "reviews": 513,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-7",
    "name": "Fitkit Push Up Stand Premium",
    "slug": "fitkit-push-up-stand-premium",
    "price": 850,
    "originalPrice": 850,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.2,
    "reviews": 1030,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "High-quality push up stand from Fitkit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-8",
    "name": "BSN Push Up Stand Standard",
    "slug": "bsn-push-up-stand-standard-bsn",
    "price": 400,
    "originalPrice": 485,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.7,
    "reviews": 805,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium push up stand from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-9",
    "name": "Puma Push Up Stand Ultra",
    "slug": "puma-push-up-stand-ultra-puma",
    "price": 540,
    "originalPrice": 652,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.2,
    "reviews": 134,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-10",
    "name": "Proff Push Up Stand Deluxe",
    "slug": "proff-push-up-stand-deluxe-proff",
    "price": 780,
    "originalPrice": 985,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.6,
    "reviews": 683,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-11",
    "name": "Strauss Push Up Stand Basic",
    "slug": "strauss-push-up-stand-basic-strauss",
    "price": 710,
    "originalPrice": 795,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.6,
    "reviews": 653,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-12",
    "name": "Strauss Push Up Stand Premium",
    "slug": "strauss-push-up-stand-premium-strauss",
    "price": 420,
    "originalPrice": 482,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.8,
    "reviews": 99,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-13",
    "name": "Decathlon Ab Roller Wheel Deluxe",
    "slug": "decathlon-ab-roller-wheel-deluxe",
    "price": 530,
    "originalPrice": 668,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.3,
    "reviews": 36,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "High-quality ab roller wheel from Decathlon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-14",
    "name": "Fitkit Ab Roller Wheel Basic",
    "slug": "fitkit-ab-roller-wheel-basic-fitkit",
    "price": 520,
    "originalPrice": 520,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.5,
    "reviews": 1291,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-15",
    "name": "Decathlon Ab Roller Wheel",
    "slug": "decathlon-ab-roller-wheel-decathlon",
    "price": 330,
    "originalPrice": 479,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.2,
    "reviews": 419,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-16",
    "name": "Fitkit Ab Roller Wheel",
    "slug": "fitkit-ab-roller-wheel-fitkit",
    "price": 580,
    "originalPrice": 680,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.4,
    "reviews": 932,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-17",
    "name": "Proff Ab Roller Wheel Premium",
    "slug": "proff-ab-roller-wheel-premium-proff",
    "price": 600,
    "originalPrice": 762,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.4,
    "reviews": 164,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-18",
    "name": "Adidas Ab Roller Wheel Elite",
    "slug": "adidas-ab-roller-wheel-elite-adidas",
    "price": 510,
    "originalPrice": 510,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.2,
    "reviews": 1091,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-19",
    "name": "Proff Hand Grip Strengthener Basic",
    "slug": "proff-hand-grip-strengthener-basic",
    "price": 340,
    "originalPrice": 340,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 5,
    "reviews": 1415,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "High-quality hand grip strengthener from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-20",
    "name": "Puma Hand Grip Strengthener Standard",
    "slug": "puma-hand-grip-strengthener-standard-puma",
    "price": 290,
    "originalPrice": 430,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4,
    "reviews": 616,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-21",
    "name": "Strauss Hand Grip Strengthener Plus",
    "slug": "strauss-hand-grip-strengthener-plus-strauss",
    "price": 180,
    "originalPrice": 256,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.2,
    "reviews": 1269,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-22",
    "name": "Adidas Hand Grip Strengthener Elite",
    "slug": "adidas-hand-grip-strengthener-elite-adidas",
    "price": 270,
    "originalPrice": 270,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.8,
    "reviews": 1051,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-23",
    "name": "Adidas Hand Grip Strengthener Premium",
    "slug": "adidas-hand-grip-strengthener-premium-adidas",
    "price": 230,
    "originalPrice": 287,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.1,
    "reviews": 1016,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-24",
    "name": "Puma Hand Grip Strengthener Plus",
    "slug": "puma-hand-grip-strengthener-plus-puma",
    "price": 220,
    "originalPrice": 220,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.6,
    "reviews": 434,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-25",
    "name": "Adidas Hand Grip Strengthener",
    "slug": "adidas-hand-grip-strengthener-adidas",
    "price": 190,
    "originalPrice": 228,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.6,
    "reviews": 542,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-26",
    "name": "Puma Tennis Ball Set Elite",
    "slug": "puma-tennis-ball-set-elite",
    "price": 600,
    "originalPrice": 797,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4,
    "reviews": 593,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "High-quality tennis ball set from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-27",
    "name": "Decathlon Tennis Ball Set Deluxe",
    "slug": "decathlon-tennis-ball-set-deluxe-decathlon",
    "price": 370,
    "originalPrice": 466,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4,
    "reviews": 44,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-28",
    "name": "Cosco Tennis Ball Set Elite",
    "slug": "cosco-tennis-ball-set-elite-cosco",
    "price": 570,
    "originalPrice": 886,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.5,
    "reviews": 38,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-29",
    "name": "Adidas Tennis Ball Set Deluxe",
    "slug": "adidas-tennis-ball-set-deluxe-adidas",
    "price": 230,
    "originalPrice": 280,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.1,
    "reviews": 1356,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-30",
    "name": "Cosco Tennis Ball Set",
    "slug": "cosco-tennis-ball-set-cosco",
    "price": 560,
    "originalPrice": 560,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.3,
    "reviews": 766,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-31",
    "name": "Puma Tennis Ball Set Premium",
    "slug": "puma-tennis-ball-set-premium-puma",
    "price": 510,
    "originalPrice": 510,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.1,
    "reviews": 1211,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-32",
    "name": "Fitkit Tennis Ball Set Deluxe",
    "slug": "fitkit-tennis-ball-set-deluxe-fitkit",
    "price": 390,
    "originalPrice": 515,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.8,
    "reviews": 414,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-33",
    "name": "Cosco Badminton Racket Standard",
    "slug": "cosco-badminton-racket-standard",
    "price": 560,
    "originalPrice": 772,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.6,
    "reviews": 1609,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality badminton racket from Cosco. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-34",
    "name": "Strauss Badminton Racket Pro",
    "slug": "strauss-badminton-racket-pro-strauss",
    "price": 1510,
    "originalPrice": 1510,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.7,
    "reviews": 1229,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-35",
    "name": "Decathlon Badminton Racket Standard",
    "slug": "decathlon-badminton-racket-standard-decathlon",
    "price": 1390,
    "originalPrice": 1390,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.9,
    "reviews": 1171,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-36",
    "name": "Puma Badminton Racket Premium",
    "slug": "puma-badminton-racket-premium-puma",
    "price": 1760,
    "originalPrice": 1760,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.1,
    "reviews": 628,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-37",
    "name": "Adidas Badminton Racket Standard",
    "slug": "adidas-badminton-racket-standard-adidas",
    "price": 1110,
    "originalPrice": 1110,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.8,
    "reviews": 241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-38",
    "name": "Adidas Cricket Bat Ultra",
    "slug": "adidas-cricket-bat-ultra",
    "price": 1260,
    "originalPrice": 1260,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.5,
    "reviews": 757,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "High-quality cricket bat from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-39",
    "name": "Adidas Cricket Bat Elite",
    "slug": "adidas-cricket-bat-elite-adidas",
    "price": 2750,
    "originalPrice": 3992,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.8,
    "reviews": 1165,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-40",
    "name": "Strauss Cricket Bat Deluxe",
    "slug": "strauss-cricket-bat-deluxe-strauss",
    "price": 2090,
    "originalPrice": 2090,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.5,
    "reviews": 640,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-41",
    "name": "Puma Cricket Bat Deluxe",
    "slug": "puma-cricket-bat-deluxe-puma",
    "price": 1130,
    "originalPrice": 1594,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.7,
    "reviews": 1317,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-42",
    "name": "Puma Cricket Bat",
    "slug": "puma-cricket-bat-puma",
    "price": 2100,
    "originalPrice": 2415,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.9,
    "reviews": 38,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-43",
    "name": "Nivia Cricket Bat Pro",
    "slug": "nivia-cricket-bat-pro-nivia",
    "price": 1400,
    "originalPrice": 1400,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.2,
    "reviews": 169,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-44",
    "name": "Proff Cricket Bat Deluxe",
    "slug": "proff-cricket-bat-deluxe-proff",
    "price": 2590,
    "originalPrice": 2590,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.2,
    "reviews": 1158,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-45",
    "name": "Speed Yoga Block Set Basic",
    "slug": "speed-yoga-block-set-basic",
    "price": 300,
    "originalPrice": 391,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.8,
    "reviews": 1003,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "High-quality yoga block set from Speed. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-46",
    "name": "BSN Yoga Block Set Deluxe",
    "slug": "bsn-yoga-block-set-deluxe-bsn",
    "price": 320,
    "originalPrice": 397,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.7,
    "reviews": 125,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-47",
    "name": "BSN Yoga Block Set",
    "slug": "bsn-yoga-block-set-bsn",
    "price": 530,
    "originalPrice": 788,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.4,
    "reviews": 323,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-48",
    "name": "Speed Yoga Block Set Ultra",
    "slug": "speed-yoga-block-set-ultra-speed",
    "price": 360,
    "originalPrice": 549,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.1,
    "reviews": 1436,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-49",
    "name": "Nivia Yoga Block Set Standard",
    "slug": "nivia-yoga-block-set-standard-nivia",
    "price": 530,
    "originalPrice": 530,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.2,
    "reviews": 1127,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-50",
    "name": "Decathlon Cycling Water Bottle Plus",
    "slug": "decathlon-cycling-water-bottle-plus",
    "price": 440,
    "originalPrice": 440,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.9,
    "reviews": 124,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "High-quality cycling water bottle from Decathlon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-51",
    "name": "BSN Cycling Water Bottle Elite",
    "slug": "bsn-cycling-water-bottle-elite-bsn",
    "price": 170,
    "originalPrice": 170,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.7,
    "reviews": 764,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-52",
    "name": "Puma Cycling Water Bottle Ultra",
    "slug": "puma-cycling-water-bottle-ultra-puma",
    "price": 340,
    "originalPrice": 417,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.3,
    "reviews": 895,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-53",
    "name": "Nivia Cycling Water Bottle Plus",
    "slug": "nivia-cycling-water-bottle-plus-nivia",
    "price": 310,
    "originalPrice": 433,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.6,
    "reviews": 255,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-54",
    "name": "Adidas Cycling Water Bottle Pro",
    "slug": "adidas-cycling-water-bottle-pro-adidas",
    "price": 400,
    "originalPrice": 400,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3,
    "reviews": 1415,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-55",
    "name": "Speed Cycling Water Bottle",
    "slug": "speed-cycling-water-bottle-speed",
    "price": 480,
    "originalPrice": 643,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.6,
    "reviews": 212,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-56",
    "name": "Puma Cycling Water Bottle Plus",
    "slug": "puma-cycling-water-bottle-plus-puma",
    "price": 430,
    "originalPrice": 430,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.5,
    "reviews": 882,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-1",
    "name": "Mamaearth Face Wash",
    "slug": "mamaearth-face-wash",
    "price": 190,
    "originalPrice": 190,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.8,
    "reviews": 510,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "High-quality face wash from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-2",
    "name": "Maybelline Face Wash Elite",
    "slug": "maybelline-face-wash-elite-maybelline",
    "price": 360,
    "originalPrice": 571,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.1,
    "reviews": 336,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium face wash from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-3",
    "name": "Wow Skin Science Face Wash Deluxe",
    "slug": "wow-skin-science-face-wash-deluxe-wow-skin-science",
    "price": 240,
    "originalPrice": 286,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.3,
    "reviews": 662,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium face wash from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-4",
    "name": "Minimalist Face Wash",
    "slug": "minimalist-face-wash-minimalist",
    "price": 350,
    "originalPrice": 505,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4,
    "reviews": 1450,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium face wash from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-5",
    "name": "Mamaearth Face Wash Basic",
    "slug": "mamaearth-face-wash-basic-mamaearth",
    "price": 170,
    "originalPrice": 245,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.8,
    "reviews": 279,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium face wash from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-6",
    "name": "Minimalist Face Wash Pro",
    "slug": "minimalist-face-wash-pro-minimalist",
    "price": 540,
    "originalPrice": 647,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.5,
    "reviews": 807,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium face wash from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-7",
    "name": "L'Oreal Moisturizer Premium",
    "slug": "l-oreal-moisturizer-premium",
    "price": 380,
    "originalPrice": 380,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.8,
    "reviews": 539,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "High-quality moisturizer from L'Oreal. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-8",
    "name": "Maybelline Moisturizer Standard",
    "slug": "maybelline-moisturizer-standard-maybelline",
    "price": 740,
    "originalPrice": 740,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.5,
    "reviews": 958,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-9",
    "name": "L'Oreal Moisturizer Ultra",
    "slug": "l-oreal-moisturizer-ultra-l-oreal",
    "price": 400,
    "originalPrice": 400,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 5,
    "reviews": 787,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-10",
    "name": "Lakme Moisturizer Deluxe",
    "slug": "lakme-moisturizer-deluxe-lakme",
    "price": 450,
    "originalPrice": 586,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.7,
    "reviews": 123,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-11",
    "name": "Wow Skin Science Moisturizer Elite",
    "slug": "wow-skin-science-moisturizer-elite-wow-skin-science",
    "price": 230,
    "originalPrice": 314,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.1,
    "reviews": 642,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-12",
    "name": "Plum Toner Ultra",
    "slug": "plum-toner-ultra",
    "price": 520,
    "originalPrice": 608,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.9,
    "reviews": 1295,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "High-quality toner from Plum. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-13",
    "name": "Plum Toner Standard",
    "slug": "plum-toner-standard-plum",
    "price": 290,
    "originalPrice": 290,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.6,
    "reviews": 655,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium toner from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-14",
    "name": "L'Oreal Toner Standard",
    "slug": "l-oreal-toner-standard-l-oreal",
    "price": 540,
    "originalPrice": 715,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.4,
    "reviews": 1102,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium toner from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-15",
    "name": "Lakme Toner Deluxe",
    "slug": "lakme-toner-deluxe-lakme",
    "price": 400,
    "originalPrice": 464,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.4,
    "reviews": 581,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium toner from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-16",
    "name": "Maybelline Toner",
    "slug": "maybelline-toner-maybelline",
    "price": 450,
    "originalPrice": 671,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.7,
    "reviews": 319,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium toner from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-17",
    "name": "Minimalist Eye Cream Standard",
    "slug": "minimalist-eye-cream-standard",
    "price": 500,
    "originalPrice": 733,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.9,
    "reviews": 1883,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "High-quality eye cream from Minimalist. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-18",
    "name": "L'Oreal Eye Cream Plus",
    "slug": "l-oreal-eye-cream-plus-l-oreal",
    "price": 710,
    "originalPrice": 710,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.5,
    "reviews": 900,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium eye cream from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-19",
    "name": "L'Oreal Eye Cream",
    "slug": "l-oreal-eye-cream-l-oreal",
    "price": 750,
    "originalPrice": 750,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.9,
    "reviews": 111,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium eye cream from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-20",
    "name": "Mamaearth Eye Cream Plus",
    "slug": "mamaearth-eye-cream-plus-mamaearth",
    "price": 810,
    "originalPrice": 951,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.9,
    "reviews": 99,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-21",
    "name": "Mamaearth Eye Cream Standard",
    "slug": "mamaearth-eye-cream-standard-mamaearth",
    "price": 320,
    "originalPrice": 463,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.1,
    "reviews": 72,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-22",
    "name": "L'Oreal Eye Cream Ultra",
    "slug": "l-oreal-eye-cream-ultra-l-oreal",
    "price": 720,
    "originalPrice": 1065,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.9,
    "reviews": 405,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium eye cream from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-23",
    "name": "Nykaa Eye Cream Plus",
    "slug": "nykaa-eye-cream-plus-nykaa",
    "price": 310,
    "originalPrice": 310,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.6,
    "reviews": 47,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-24",
    "name": "Mamaearth Shampoo Plus",
    "slug": "mamaearth-shampoo-plus",
    "price": 310,
    "originalPrice": 310,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.6,
    "reviews": 1531,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "High-quality shampoo from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-25",
    "name": "Lakme Shampoo Basic",
    "slug": "lakme-shampoo-basic-lakme",
    "price": 720,
    "originalPrice": 720,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.1,
    "reviews": 1132,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-26",
    "name": "Plum Shampoo Deluxe",
    "slug": "plum-shampoo-deluxe-plum",
    "price": 380,
    "originalPrice": 380,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.7,
    "reviews": 593,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-27",
    "name": "L'Oreal Shampoo Pro",
    "slug": "l-oreal-shampoo-pro-l-oreal",
    "price": 770,
    "originalPrice": 770,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.1,
    "reviews": 360,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium shampoo from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-28",
    "name": "Mamaearth Shampoo",
    "slug": "mamaearth-shampoo-mamaearth",
    "price": 580,
    "originalPrice": 919,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.3,
    "reviews": 893,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-29",
    "name": "Minimalist Shampoo Deluxe",
    "slug": "minimalist-shampoo-deluxe-minimalist",
    "price": 330,
    "originalPrice": 330,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.5,
    "reviews": 648,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-30",
    "name": "Maybelline Hair Oil Standard",
    "slug": "maybelline-hair-oil-standard",
    "price": 600,
    "originalPrice": 600,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.2,
    "reviews": 1741,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "High-quality hair oil from Maybelline. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-31",
    "name": "Maybelline Hair Oil Premium",
    "slug": "maybelline-hair-oil-premium-maybelline",
    "price": 560,
    "originalPrice": 560,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.4,
    "reviews": 1262,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-32",
    "name": "Lakme Hair Oil",
    "slug": "lakme-hair-oil-lakme",
    "price": 160,
    "originalPrice": 160,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.8,
    "reviews": 1160,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-33",
    "name": "L'Oreal Hair Oil Ultra",
    "slug": "l-oreal-hair-oil-ultra-l-oreal",
    "price": 490,
    "originalPrice": 760,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.5,
    "reviews": 1369,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium hair oil from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-34",
    "name": "Maybelline Hair Oil Plus",
    "slug": "maybelline-hair-oil-plus-maybelline",
    "price": 360,
    "originalPrice": 430,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.3,
    "reviews": 413,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-35",
    "name": "Maybelline Body Lotion Deluxe",
    "slug": "maybelline-body-lotion-deluxe",
    "price": 500,
    "originalPrice": 500,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.4,
    "reviews": 1165,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality body lotion from Maybelline. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-36",
    "name": "Mamaearth Body Lotion",
    "slug": "mamaearth-body-lotion-mamaearth",
    "price": 390,
    "originalPrice": 476,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.2,
    "reviews": 1108,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-37",
    "name": "Biotique Body Lotion Premium",
    "slug": "biotique-body-lotion-premium-biotique",
    "price": 550,
    "originalPrice": 550,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.1,
    "reviews": 848,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-38",
    "name": "The Derma Co Body Lotion Deluxe",
    "slug": "the-derma-co-body-lotion-deluxe-the-derma-co",
    "price": 380,
    "originalPrice": 380,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.1,
    "reviews": 782,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium body lotion from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-39",
    "name": "Nykaa Body Lotion Pro",
    "slug": "nykaa-body-lotion-pro-nykaa",
    "price": 630,
    "originalPrice": 630,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.8,
    "reviews": 267,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-40",
    "name": "Mamaearth Body Lotion Plus",
    "slug": "mamaearth-body-lotion-plus-mamaearth",
    "price": 520,
    "originalPrice": 520,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.3,
    "reviews": 483,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-41",
    "name": "Wow Skin Science Body Lotion",
    "slug": "wow-skin-science-body-lotion-wow-skin-science",
    "price": 690,
    "originalPrice": 847,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.3,
    "reviews": 795,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-42",
    "name": "Mamaearth Lipstick Elite",
    "slug": "mamaearth-lipstick-elite",
    "price": 330,
    "originalPrice": 330,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.4,
    "reviews": 933,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "High-quality lipstick from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-43",
    "name": "Biotique Lipstick Basic",
    "slug": "biotique-lipstick-basic-biotique",
    "price": 240,
    "originalPrice": 298,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.1,
    "reviews": 1293,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-44",
    "name": "Minimalist Lipstick Standard",
    "slug": "minimalist-lipstick-standard-minimalist",
    "price": 690,
    "originalPrice": 916,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.6,
    "reviews": 662,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-45",
    "name": "The Derma Co Lipstick Premium",
    "slug": "the-derma-co-lipstick-premium-the-derma-co",
    "price": 870,
    "originalPrice": 1368,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.6,
    "reviews": 1127,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium lipstick from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-46",
    "name": "Lakme Lipstick Deluxe",
    "slug": "lakme-lipstick-deluxe-lakme",
    "price": 510,
    "originalPrice": 700,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.8,
    "reviews": 548,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-47",
    "name": "Nykaa Lipstick Basic",
    "slug": "nykaa-lipstick-basic-nykaa",
    "price": 230,
    "originalPrice": 353,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.9,
    "reviews": 1019,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-48",
    "name": "Plum Lipstick Elite",
    "slug": "plum-lipstick-elite-plum",
    "price": 650,
    "originalPrice": 906,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 5,
    "reviews": 1133,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-49",
    "name": "Nykaa Kajal Standard",
    "slug": "nykaa-kajal-standard",
    "price": 390,
    "originalPrice": 466,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.7,
    "reviews": 162,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "High-quality kajal from Nykaa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-50",
    "name": "Plum Kajal Plus",
    "slug": "plum-kajal-plus-plum",
    "price": 300,
    "originalPrice": 300,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.1,
    "reviews": 1186,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium kajal from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-51",
    "name": "Maybelline Kajal Premium",
    "slug": "maybelline-kajal-premium-maybelline",
    "price": 350,
    "originalPrice": 517,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.6,
    "reviews": 834,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium kajal from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-52",
    "name": "Lakme Kajal Elite",
    "slug": "lakme-kajal-elite-lakme",
    "price": 290,
    "originalPrice": 290,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.9,
    "reviews": 125,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium kajal from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-53",
    "name": "Nykaa Kajal",
    "slug": "nykaa-kajal-nykaa",
    "price": 230,
    "originalPrice": 276,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.6,
    "reviews": 331,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium kajal from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-54",
    "name": "Plum Kajal Basic",
    "slug": "plum-kajal-basic-plum",
    "price": 120,
    "originalPrice": 120,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.9,
    "reviews": 1281,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium kajal from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-55",
    "name": "Minimalist Nail Polish Set Standard",
    "slug": "minimalist-nail-polish-set-standard",
    "price": 150,
    "originalPrice": 150,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.7,
    "reviews": 1894,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "High-quality nail polish set from Minimalist. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-56",
    "name": "Lakme Nail Polish Set",
    "slug": "lakme-nail-polish-set-lakme",
    "price": 350,
    "originalPrice": 467,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 464,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-57",
    "name": "The Derma Co Nail Polish Set",
    "slug": "the-derma-co-nail-polish-set-the-derma-co",
    "price": 140,
    "originalPrice": 177,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.5,
    "reviews": 194,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-58",
    "name": "Biotique Nail Polish Set Basic",
    "slug": "biotique-nail-polish-set-basic-biotique",
    "price": 140,
    "originalPrice": 174,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.3,
    "reviews": 459,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-59",
    "name": "Nykaa Nail Polish Set",
    "slug": "nykaa-nail-polish-set-nykaa",
    "price": 330,
    "originalPrice": 330,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.4,
    "reviews": 1433,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-60",
    "name": "Wow Skin Science Nail Polish Set Standard",
    "slug": "wow-skin-science-nail-polish-set-standard-wow-skin-science",
    "price": 360,
    "originalPrice": 573,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.6,
    "reviews": 60,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-1",
    "name": "Xiaomi Ultrabook Laptop Premium",
    "slug": "xiaomi-ultrabook-laptop-premium",
    "price": 56760,
    "originalPrice": 85285,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.7,
    "reviews": 1531,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "High-quality ultrabook laptop from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-2",
    "name": "Acer Ultrabook Laptop Standard",
    "slug": "acer-ultrabook-laptop-standard-acer",
    "price": 80310,
    "originalPrice": 117070,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.6,
    "reviews": 148,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-3",
    "name": "Acer Ultrabook Laptop",
    "slug": "acer-ultrabook-laptop-acer",
    "price": 46640,
    "originalPrice": 55102,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 5,
    "reviews": 609,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-4",
    "name": "Apple Ultrabook Laptop",
    "slug": "apple-ultrabook-laptop-apple",
    "price": 55500,
    "originalPrice": 86019,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.1,
    "reviews": 878,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-5",
    "name": "Lenovo Ultrabook Laptop Plus",
    "slug": "lenovo-ultrabook-laptop-plus-lenovo",
    "price": 45050,
    "originalPrice": 60212,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.4,
    "reviews": 949,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-6",
    "name": "MSI Gaming Laptop",
    "slug": "msi-gaming-laptop",
    "price": 133620,
    "originalPrice": 133620,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4,
    "reviews": 1780,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "High-quality gaming laptop from MSI. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-7",
    "name": "Dell Gaming Laptop Elite",
    "slug": "dell-gaming-laptop-elite-dell",
    "price": 92320,
    "originalPrice": 128314,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.8,
    "reviews": 527,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-8",
    "name": "Samsung Gaming Laptop Ultra",
    "slug": "samsung-gaming-laptop-ultra-samsung",
    "price": 103460,
    "originalPrice": 135758,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.7,
    "reviews": 942,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-9",
    "name": "HP Gaming Laptop Plus",
    "slug": "hp-gaming-laptop-plus-hp",
    "price": 143580,
    "originalPrice": 143580,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.7,
    "reviews": 748,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-10",
    "name": "Samsung Gaming Laptop Premium",
    "slug": "samsung-gaming-laptop-premium-samsung",
    "price": 130490,
    "originalPrice": 148339,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.1,
    "reviews": 1002,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-11",
    "name": "Microsoft Monitor 24-inch Pro",
    "slug": "microsoft-monitor-24-inch-pro",
    "price": 15180,
    "originalPrice": 18669,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.6,
    "reviews": 1944,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality monitor 24-inch from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-12",
    "name": "MSI Monitor 24-inch Ultra",
    "slug": "msi-monitor-24-inch-ultra-msi",
    "price": 19080,
    "originalPrice": 19080,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.7,
    "reviews": 359,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-13",
    "name": "Dell Monitor 24-inch Premium",
    "slug": "dell-monitor-24-inch-premium-dell",
    "price": 10760,
    "originalPrice": 16486,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3,
    "reviews": 989,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-14",
    "name": "ASUS Monitor 24-inch Pro",
    "slug": "asus-monitor-24-inch-pro-asus",
    "price": 13630,
    "originalPrice": 13630,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.7,
    "reviews": 1078,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-15",
    "name": "Microsoft Monitor 24-inch Premium",
    "slug": "microsoft-monitor-24-inch-premium-microsoft",
    "price": 10030,
    "originalPrice": 13347,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.9,
    "reviews": 471,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-16",
    "name": "Dell Monitor 24-inch",
    "slug": "dell-monitor-24-inch-dell",
    "price": 19770,
    "originalPrice": 28912,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.2,
    "reviews": 1089,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-17",
    "name": "HP Monitor 24-inch Plus",
    "slug": "hp-monitor-24-inch-plus-hp",
    "price": 20900,
    "originalPrice": 20900,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.3,
    "reviews": 968,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-18",
    "name": "Samsung Mechanical Keyboard Plus",
    "slug": "samsung-mechanical-keyboard-plus",
    "price": 1930,
    "originalPrice": 2781,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 730,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "High-quality mechanical keyboard from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-19",
    "name": "Lenovo Mechanical Keyboard Standard",
    "slug": "lenovo-mechanical-keyboard-standard-lenovo",
    "price": 5200,
    "originalPrice": 5926,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.1,
    "reviews": 579,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-20",
    "name": "Acer Mechanical Keyboard",
    "slug": "acer-mechanical-keyboard-acer",
    "price": 7390,
    "originalPrice": 11408,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.8,
    "reviews": 748,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-21",
    "name": "Acer Mechanical Keyboard Standard",
    "slug": "acer-mechanical-keyboard-standard-acer",
    "price": 7810,
    "originalPrice": 11987,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.1,
    "reviews": 1081,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-22",
    "name": "HP Mechanical Keyboard Pro",
    "slug": "hp-mechanical-keyboard-pro-hp",
    "price": 7240,
    "originalPrice": 11390,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.3,
    "reviews": 34,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-23",
    "name": "Samsung Mechanical Keyboard Pro",
    "slug": "samsung-mechanical-keyboard-pro-samsung",
    "price": 3700,
    "originalPrice": 4231,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.9,
    "reviews": 625,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-24",
    "name": "Dell Mechanical Keyboard Plus",
    "slug": "dell-mechanical-keyboard-plus-dell",
    "price": 3110,
    "originalPrice": 3486,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.4,
    "reviews": 243,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-25",
    "name": "ASUS External Hard Drive 1TB Elite",
    "slug": "asus-external-hard-drive-1tb-elite",
    "price": 4730,
    "originalPrice": 4730,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.3,
    "reviews": 328,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality external hard drive 1tb from ASUS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-26",
    "name": "Dell External Hard Drive 1TB Elite",
    "slug": "dell-external-hard-drive-1tb-elite-dell",
    "price": 5590,
    "originalPrice": 8599,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.7,
    "reviews": 676,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-27",
    "name": "Lenovo External Hard Drive 1TB Plus",
    "slug": "lenovo-external-hard-drive-1tb-plus-lenovo",
    "price": 3910,
    "originalPrice": 5223,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.1,
    "reviews": 90,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-28",
    "name": "Acer External Hard Drive 1TB Plus",
    "slug": "acer-external-hard-drive-1tb-plus-acer",
    "price": 4940,
    "originalPrice": 4940,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.7,
    "reviews": 89,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-29",
    "name": "HP External Hard Drive 1TB Deluxe",
    "slug": "hp-external-hard-drive-1tb-deluxe-hp",
    "price": 3870,
    "originalPrice": 3870,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.2,
    "reviews": 910,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-30",
    "name": "Samsung External Hard Drive 1TB Premium",
    "slug": "samsung-external-hard-drive-1tb-premium-samsung",
    "price": 5550,
    "originalPrice": 6751,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.7,
    "reviews": 431,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-31",
    "name": "MSI USB Mouse Deluxe",
    "slug": "msi-usb-mouse-deluxe",
    "price": 920,
    "originalPrice": 1244,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.6,
    "reviews": 2009,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "High-quality usb mouse from MSI. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-32",
    "name": "ASUS USB Mouse Basic",
    "slug": "asus-usb-mouse-basic-asus",
    "price": 600,
    "originalPrice": 825,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.5,
    "reviews": 812,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-33",
    "name": "Apple USB Mouse Ultra",
    "slug": "apple-usb-mouse-ultra-apple",
    "price": 790,
    "originalPrice": 1231,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.4,
    "reviews": 252,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-34",
    "name": "Lenovo USB Mouse Elite",
    "slug": "lenovo-usb-mouse-elite-lenovo",
    "price": 1270,
    "originalPrice": 1270,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.8,
    "reviews": 879,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-35",
    "name": "Apple USB Mouse Plus",
    "slug": "apple-usb-mouse-plus-apple",
    "price": 980,
    "originalPrice": 980,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.3,
    "reviews": 381,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-36",
    "name": "HP USB Mouse Standard",
    "slug": "hp-usb-mouse-standard-hp",
    "price": 1210,
    "originalPrice": 1454,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.8,
    "reviews": 1058,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-37",
    "name": "Apple USB Mouse Premium",
    "slug": "apple-usb-mouse-premium-apple",
    "price": 320,
    "originalPrice": 395,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.2,
    "reviews": 808,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-38",
    "name": "Microsoft Laptop Stand Plus",
    "slug": "microsoft-laptop-stand-plus",
    "price": 2400,
    "originalPrice": 3348,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.2,
    "reviews": 558,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "High-quality laptop stand from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-39",
    "name": "ASUS Laptop Stand Ultra",
    "slug": "asus-laptop-stand-ultra-asus",
    "price": 640,
    "originalPrice": 775,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.7,
    "reviews": 382,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-40",
    "name": "ASUS Laptop Stand Standard",
    "slug": "asus-laptop-stand-standard-asus",
    "price": 1060,
    "originalPrice": 1367,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.3,
    "reviews": 599,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-41",
    "name": "Apple Laptop Stand Pro",
    "slug": "apple-laptop-stand-pro-apple",
    "price": 1440,
    "originalPrice": 1624,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.2,
    "reviews": 441,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-42",
    "name": "MSI Laptop Stand Basic",
    "slug": "msi-laptop-stand-basic-msi",
    "price": 510,
    "originalPrice": 510,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3,
    "reviews": 662,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-43",
    "name": "HP Wireless Keyboard Deluxe",
    "slug": "hp-wireless-keyboard-deluxe",
    "price": 3000,
    "originalPrice": 3518,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.1,
    "reviews": 591,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "High-quality wireless keyboard from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-44",
    "name": "Samsung Wireless Keyboard Elite",
    "slug": "samsung-wireless-keyboard-elite-samsung",
    "price": 3620,
    "originalPrice": 3620,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.8,
    "reviews": 1097,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-45",
    "name": "Samsung Wireless Keyboard Plus",
    "slug": "samsung-wireless-keyboard-plus-samsung",
    "price": 3200,
    "originalPrice": 4400,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.3,
    "reviews": 1193,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-46",
    "name": "Apple Wireless Keyboard Plus",
    "slug": "apple-wireless-keyboard-plus-apple",
    "price": 1540,
    "originalPrice": 1540,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.2,
    "reviews": 1032,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-47",
    "name": "Dell Wireless Keyboard Deluxe",
    "slug": "dell-wireless-keyboard-deluxe-dell",
    "price": 2050,
    "originalPrice": 2050,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.2,
    "reviews": 491,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-48",
    "name": "Acer Wireless Keyboard",
    "slug": "acer-wireless-keyboard-acer",
    "price": 3170,
    "originalPrice": 4687,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.3,
    "reviews": 973,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-49",
    "name": "Samsung Laptop Bag Standard",
    "slug": "samsung-laptop-bag-standard",
    "price": 1630,
    "originalPrice": 1630,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.5,
    "reviews": 1582,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality laptop bag from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-50",
    "name": "Lenovo Laptop Bag Deluxe",
    "slug": "lenovo-laptop-bag-deluxe-lenovo",
    "price": 1060,
    "originalPrice": 1060,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.1,
    "reviews": 1490,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-51",
    "name": "Dell Laptop Bag Deluxe",
    "slug": "dell-laptop-bag-deluxe-dell",
    "price": 660,
    "originalPrice": 999,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.5,
    "reviews": 481,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-52",
    "name": "MSI Laptop Bag Deluxe",
    "slug": "msi-laptop-bag-deluxe-msi",
    "price": 1350,
    "originalPrice": 1350,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.5,
    "reviews": 739,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-53",
    "name": "Samsung Laptop Bag Premium",
    "slug": "samsung-laptop-bag-premium-samsung",
    "price": 1130,
    "originalPrice": 1522,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.7,
    "reviews": 1241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-54",
    "name": "Microsoft Laptop Bag Elite",
    "slug": "microsoft-laptop-bag-elite-microsoft",
    "price": 650,
    "originalPrice": 745,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.1,
    "reviews": 544,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-55",
    "name": "ASUS Cooling Pad Plus",
    "slug": "asus-cooling-pad-plus",
    "price": 1210,
    "originalPrice": 1210,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4,
    "reviews": 616,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "High-quality cooling pad from ASUS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-56",
    "name": "MSI Cooling Pad Basic",
    "slug": "msi-cooling-pad-basic-msi",
    "price": 1050,
    "originalPrice": 1529,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.3,
    "reviews": 387,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-57",
    "name": "Lenovo Cooling Pad Standard",
    "slug": "lenovo-cooling-pad-standard-lenovo",
    "price": 1450,
    "originalPrice": 1450,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 1036,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-58",
    "name": "Lenovo Cooling Pad Deluxe",
    "slug": "lenovo-cooling-pad-deluxe-lenovo",
    "price": 1220,
    "originalPrice": 1220,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.6,
    "reviews": 1010,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-59",
    "name": "Dell Cooling Pad Elite",
    "slug": "dell-cooling-pad-elite-dell",
    "price": 980,
    "originalPrice": 1561,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.9,
    "reviews": 1068,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-60",
    "name": "Samsung Cooling Pad Deluxe",
    "slug": "samsung-cooling-pad-deluxe-samsung",
    "price": 740,
    "originalPrice": 957,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.7,
    "reviews": 922,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-1",
    "name": "Maped A4 Notebook Pack Basic",
    "slug": "maped-a4-notebook-pack-basic",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.7,
    "reviews": 1435,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality a4 notebook pack from Maped. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-2",
    "name": "Linc A4 Notebook Pack Deluxe",
    "slug": "linc-a4-notebook-pack-deluxe-linc",
    "price": 280,
    "originalPrice": 434,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.1,
    "reviews": 44,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-3",
    "name": "Classmate A4 Notebook Pack Pro",
    "slug": "classmate-a4-notebook-pack-pro-classmate",
    "price": 420,
    "originalPrice": 565,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.8,
    "reviews": 1135,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-4",
    "name": "DOMS A4 Notebook Pack Deluxe",
    "slug": "doms-a4-notebook-pack-deluxe-doms",
    "price": 400,
    "originalPrice": 400,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.7,
    "reviews": 471,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-5",
    "name": "Classmate A4 Notebook Pack Deluxe",
    "slug": "classmate-a4-notebook-pack-deluxe-classmate",
    "price": 180,
    "originalPrice": 200,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.7,
    "reviews": 75,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-6",
    "name": "Camlin A4 Notebook Pack Deluxe",
    "slug": "camlin-a4-notebook-pack-deluxe-camlin",
    "price": 420,
    "originalPrice": 588,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.8,
    "reviews": 325,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-7",
    "name": "Maped Gel Pen Set Pro",
    "slug": "maped-gel-pen-set-pro",
    "price": 250,
    "originalPrice": 322,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.8,
    "reviews": 1401,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality gel pen set from Maped. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-8",
    "name": "Camlin Gel Pen Set Elite",
    "slug": "camlin-gel-pen-set-elite-camlin",
    "price": 300,
    "originalPrice": 453,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.7,
    "reviews": 898,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-9",
    "name": "DOMS Gel Pen Set Basic",
    "slug": "doms-gel-pen-set-basic-doms",
    "price": 240,
    "originalPrice": 240,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.1,
    "reviews": 142,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-10",
    "name": "Uniball Gel Pen Set Basic",
    "slug": "uniball-gel-pen-set-basic-uniball",
    "price": 210,
    "originalPrice": 236,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.3,
    "reviews": 671,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-11",
    "name": "Linc Gel Pen Set Premium",
    "slug": "linc-gel-pen-set-premium-linc",
    "price": 150,
    "originalPrice": 219,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.8,
    "reviews": 384,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-12",
    "name": "Uniball Pencil Box",
    "slug": "uniball-pencil-box",
    "price": 170,
    "originalPrice": 170,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.6,
    "reviews": 1153,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "High-quality pencil box from Uniball. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-13",
    "name": "DOMS Pencil Box Pro",
    "slug": "doms-pencil-box-pro-doms",
    "price": 220,
    "originalPrice": 286,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.6,
    "reviews": 351,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium pencil box from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-14",
    "name": "Parker Pencil Box Basic",
    "slug": "parker-pencil-box-basic-parker",
    "price": 220,
    "originalPrice": 332,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.9,
    "reviews": 1257,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-15",
    "name": "Staedtler Pencil Box Ultra",
    "slug": "staedtler-pencil-box-ultra-staedtler",
    "price": 160,
    "originalPrice": 231,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.9,
    "reviews": 206,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-16",
    "name": "Maped Pencil Box Elite",
    "slug": "maped-pencil-box-elite-maped",
    "price": 240,
    "originalPrice": 367,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.9,
    "reviews": 718,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-17",
    "name": "Camlin Pencil Box Premium",
    "slug": "camlin-pencil-box-premium-camlin",
    "price": 140,
    "originalPrice": 192,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.1,
    "reviews": 1416,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-18",
    "name": "DOMS Pencil Box Basic",
    "slug": "doms-pencil-box-basic-doms",
    "price": 180,
    "originalPrice": 221,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.3,
    "reviews": 868,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium pencil box from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-19",
    "name": "DOMS Highlighter Set Premium",
    "slug": "doms-highlighter-set-premium",
    "price": 200,
    "originalPrice": 278,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.3,
    "reviews": 1133,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "High-quality highlighter set from DOMS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-20",
    "name": "Uniball Highlighter Set Standard",
    "slug": "uniball-highlighter-set-standard-uniball",
    "price": 240,
    "originalPrice": 341,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.5,
    "reviews": 672,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-21",
    "name": "Navneet Highlighter Set",
    "slug": "navneet-highlighter-set-navneet",
    "price": 270,
    "originalPrice": 393,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.9,
    "reviews": 1279,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-22",
    "name": "Maped Highlighter Set",
    "slug": "maped-highlighter-set-maped",
    "price": 250,
    "originalPrice": 376,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.6,
    "reviews": 883,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-23",
    "name": "Staedtler Highlighter Set Standard",
    "slug": "staedtler-highlighter-set-standard-staedtler",
    "price": 270,
    "originalPrice": 327,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.5,
    "reviews": 889,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-24",
    "name": "Classmate Highlighter Set Premium",
    "slug": "classmate-highlighter-set-premium-classmate",
    "price": 260,
    "originalPrice": 333,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.2,
    "reviews": 1316,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-25",
    "name": "Navneet Geometry Box",
    "slug": "navneet-geometry-box",
    "price": 470,
    "originalPrice": 711,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.5,
    "reviews": 1551,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "High-quality geometry box from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-26",
    "name": "Navneet Geometry Box Basic",
    "slug": "navneet-geometry-box-basic-navneet",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.6,
    "reviews": 1198,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-27",
    "name": "Faber-Castell Geometry Box Plus",
    "slug": "faber-castell-geometry-box-plus-faber-castell",
    "price": 380,
    "originalPrice": 577,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.2,
    "reviews": 1062,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-28",
    "name": "Staedtler Geometry Box Plus",
    "slug": "staedtler-geometry-box-plus-staedtler",
    "price": 500,
    "originalPrice": 500,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.1,
    "reviews": 916,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-29",
    "name": "Navneet Geometry Box Premium",
    "slug": "navneet-geometry-box-premium-navneet",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.3,
    "reviews": 1210,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-30",
    "name": "Uniball Geometry Box Standard",
    "slug": "uniball-geometry-box-standard-uniball",
    "price": 440,
    "originalPrice": 440,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4,
    "reviews": 622,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-31",
    "name": "Staedtler Whiteboard Marker Set Ultra",
    "slug": "staedtler-whiteboard-marker-set-ultra",
    "price": 190,
    "originalPrice": 190,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.9,
    "reviews": 1901,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "High-quality whiteboard marker set from Staedtler. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-32",
    "name": "Linc Whiteboard Marker Set",
    "slug": "linc-whiteboard-marker-set-linc",
    "price": 250,
    "originalPrice": 306,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.1,
    "reviews": 511,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-33",
    "name": "Classmate Whiteboard Marker Set Pro",
    "slug": "classmate-whiteboard-marker-set-pro-classmate",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.2,
    "reviews": 332,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-34",
    "name": "Maped Whiteboard Marker Set Premium",
    "slug": "maped-whiteboard-marker-set-premium-maped",
    "price": 170,
    "originalPrice": 229,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4,
    "reviews": 192,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-35",
    "name": "Navneet Whiteboard Marker Set Basic",
    "slug": "navneet-whiteboard-marker-set-basic-navneet",
    "price": 260,
    "originalPrice": 375,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3,
    "reviews": 841,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-36",
    "name": "Classmate Whiteboard Marker Set Ultra",
    "slug": "classmate-whiteboard-marker-set-ultra-classmate",
    "price": 190,
    "originalPrice": 190,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.3,
    "reviews": 1426,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-37",
    "name": "Classmate Sticky Notes Pack Plus",
    "slug": "classmate-sticky-notes-pack-plus",
    "price": 110,
    "originalPrice": 155,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.2,
    "reviews": 1614,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "High-quality sticky notes pack from Classmate. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-38",
    "name": "Uniball Sticky Notes Pack Elite",
    "slug": "uniball-sticky-notes-pack-elite-uniball",
    "price": 80,
    "originalPrice": 117,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.7,
    "reviews": 701,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-39",
    "name": "Navneet Sticky Notes Pack Deluxe",
    "slug": "navneet-sticky-notes-pack-deluxe-navneet",
    "price": 190,
    "originalPrice": 190,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.8,
    "reviews": 659,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-40",
    "name": "Staedtler Sticky Notes Pack Deluxe",
    "slug": "staedtler-sticky-notes-pack-deluxe-staedtler",
    "price": 140,
    "originalPrice": 162,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.4,
    "reviews": 1470,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-41",
    "name": "Linc Sticky Notes Pack Deluxe",
    "slug": "linc-sticky-notes-pack-deluxe-linc",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.6,
    "reviews": 21,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-42",
    "name": "Classmate Sticky Notes Pack Elite",
    "slug": "classmate-sticky-notes-pack-elite-classmate",
    "price": 100,
    "originalPrice": 100,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.3,
    "reviews": 731,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-43",
    "name": "Camlin Sticky Notes Pack Premium",
    "slug": "camlin-sticky-notes-pack-premium-camlin",
    "price": 160,
    "originalPrice": 195,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.4,
    "reviews": 537,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-44",
    "name": "DOMS Paper Clips Set Elite",
    "slug": "doms-paper-clips-set-elite",
    "price": 60,
    "originalPrice": 73,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.9,
    "reviews": 1187,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "High-quality paper clips set from DOMS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-45",
    "name": "Staedtler Paper Clips Set Basic",
    "slug": "staedtler-paper-clips-set-basic-staedtler",
    "price": 40,
    "originalPrice": 56,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.3,
    "reviews": 552,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-46",
    "name": "Parker Paper Clips Set Elite",
    "slug": "parker-paper-clips-set-elite-parker",
    "price": 40,
    "originalPrice": 51,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3,
    "reviews": 572,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-47",
    "name": "Uniball Paper Clips Set Elite",
    "slug": "uniball-paper-clips-set-elite-uniball",
    "price": 80,
    "originalPrice": 80,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.8,
    "reviews": 882,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-48",
    "name": "Classmate Paper Clips Set Ultra",
    "slug": "classmate-paper-clips-set-ultra-classmate",
    "price": 80,
    "originalPrice": 80,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.2,
    "reviews": 366,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-49",
    "name": "Parker Paper Clips Set Pro",
    "slug": "parker-paper-clips-set-pro-parker",
    "price": 80,
    "originalPrice": 80,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.9,
    "reviews": 587,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-50",
    "name": "Maped Paper Clips Set Standard",
    "slug": "maped-paper-clips-set-standard-maped",
    "price": 80,
    "originalPrice": 80,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.1,
    "reviews": 1091,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-51",
    "name": "Linc Desk Organizer Premium",
    "slug": "linc-desk-organizer-premium",
    "price": 220,
    "originalPrice": 220,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.7,
    "reviews": 1764,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality desk organizer from Linc. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-52",
    "name": "DOMS Desk Organizer Elite",
    "slug": "doms-desk-organizer-elite-doms",
    "price": 700,
    "originalPrice": 834,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.6,
    "reviews": 387,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-53",
    "name": "Navneet Desk Organizer",
    "slug": "navneet-desk-organizer-navneet",
    "price": 520,
    "originalPrice": 807,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.4,
    "reviews": 65,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-54",
    "name": "Camlin Desk Organizer Ultra",
    "slug": "camlin-desk-organizer-ultra-camlin",
    "price": 720,
    "originalPrice": 1112,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.2,
    "reviews": 142,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-55",
    "name": "Parker Desk Organizer Premium",
    "slug": "parker-desk-organizer-premium-parker",
    "price": 710,
    "originalPrice": 1058,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.6,
    "reviews": 1407,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-56",
    "name": "Parker Desk Organizer Basic",
    "slug": "parker-desk-organizer-basic-parker",
    "price": 580,
    "originalPrice": 695,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.3,
    "reviews": 1152,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-57",
    "name": "Classmate File Folder Set Ultra",
    "slug": "classmate-file-folder-set-ultra",
    "price": 110,
    "originalPrice": 110,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.3,
    "reviews": 734,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality file folder set from Classmate. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-58",
    "name": "Camlin File Folder Set Deluxe",
    "slug": "camlin-file-folder-set-deluxe-camlin",
    "price": 210,
    "originalPrice": 299,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.4,
    "reviews": 1177,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-59",
    "name": "Linc File Folder Set",
    "slug": "linc-file-folder-set-linc",
    "price": 320,
    "originalPrice": 320,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.7,
    "reviews": 1271,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-60",
    "name": "Faber-Castell File Folder Set Premium",
    "slug": "faber-castell-file-folder-set-premium-faber-castell",
    "price": 130,
    "originalPrice": 130,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.3,
    "reviews": 1445,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-61",
    "name": "Staedtler File Folder Set Standard",
    "slug": "staedtler-file-folder-set-standard-staedtler",
    "price": 280,
    "originalPrice": 397,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.4,
    "reviews": 1495,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-62",
    "name": "Camlin File Folder Set Basic",
    "slug": "camlin-file-folder-set-basic-camlin",
    "price": 150,
    "originalPrice": 150,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.2,
    "reviews": 1089,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-63",
    "name": "Linc Calculator",
    "slug": "linc-calculator",
    "price": 810,
    "originalPrice": 810,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.6,
    "reviews": 899,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "High-quality calculator from Linc. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-64",
    "name": "Linc Calculator Pro",
    "slug": "linc-calculator-pro-linc",
    "price": 1400,
    "originalPrice": 1701,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4,
    "reviews": 1143,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium calculator from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-65",
    "name": "Navneet Calculator Pro",
    "slug": "navneet-calculator-pro-navneet",
    "price": 1350,
    "originalPrice": 1735,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.1,
    "reviews": 551,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium calculator from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-66",
    "name": "Faber-Castell Calculator Plus",
    "slug": "faber-castell-calculator-plus-faber-castell",
    "price": 220,
    "originalPrice": 293,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 5,
    "reviews": 933,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium calculator from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-67",
    "name": "Staedtler Stapler with Pins Pro",
    "slug": "staedtler-stapler-with-pins-pro",
    "price": 390,
    "originalPrice": 490,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.7,
    "reviews": 1846,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "High-quality stapler with pins from Staedtler. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-68",
    "name": "Uniball Stapler with Pins Basic",
    "slug": "uniball-stapler-with-pins-basic-uniball",
    "price": 220,
    "originalPrice": 220,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.8,
    "reviews": 1498,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-69",
    "name": "Classmate Stapler with Pins Basic",
    "slug": "classmate-stapler-with-pins-basic-classmate",
    "price": 140,
    "originalPrice": 140,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.5,
    "reviews": 276,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-70",
    "name": "DOMS Stapler with Pins Elite",
    "slug": "doms-stapler-with-pins-elite-doms",
    "price": 170,
    "originalPrice": 170,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.1,
    "reviews": 1409,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-71",
    "name": "Maped Stapler with Pins Deluxe",
    "slug": "maped-stapler-with-pins-deluxe-maped",
    "price": 160,
    "originalPrice": 196,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.6,
    "reviews": 582,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-72",
    "name": "DOMS Stapler with Pins Deluxe",
    "slug": "doms-stapler-with-pins-deluxe-doms",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.5,
    "reviews": 807,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from DOMS. Features cutting-edge technology and superior build quality.",
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

