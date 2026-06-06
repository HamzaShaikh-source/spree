// ── Product Data ──
// 524 products across 8 categories

const products = [
  {
    "id": "el-1",
    "name": "pTron Wireless Headphones Ultra",
    "slug": "ptron-wireless-headphones-ultra",
    "price": 4510,
    "originalPrice": 5210,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.3,
    "reviews": 370,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "High-quality wireless headphones from pTron. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-2",
    "name": "Bose Wireless Headphones Standard",
    "slug": "bose-wireless-headphones-standard-bose",
    "price": 7660,
    "originalPrice": 11905,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.5,
    "reviews": 1352,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-3",
    "name": "Bose Wireless Headphones",
    "slug": "bose-wireless-headphones-bose",
    "price": 5440,
    "originalPrice": 8019,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.6,
    "reviews": 985,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-4",
    "name": "Realme Wireless Headphones Plus",
    "slug": "realme-wireless-headphones-plus-realme",
    "price": 4510,
    "originalPrice": 5032,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.4,
    "reviews": 795,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium wireless headphones from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-5",
    "name": "Realme Bluetooth Speaker Plus",
    "slug": "realme-bluetooth-speaker-plus",
    "price": 2810,
    "originalPrice": 3635,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.2,
    "reviews": 1627,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "High-quality bluetooth speaker from Realme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-6",
    "name": "LG Bluetooth Speaker Premium",
    "slug": "lg-bluetooth-speaker-premium-lg",
    "price": 4900,
    "originalPrice": 6155,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 5,
    "reviews": 1331,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-7",
    "name": "pTron Bluetooth Speaker Plus",
    "slug": "ptron-bluetooth-speaker-plus-ptron",
    "price": 2200,
    "originalPrice": 3439,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.8,
    "reviews": 1191,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-8",
    "name": "boAt Bluetooth Speaker Ultra",
    "slug": "boat-bluetooth-speaker-ultra-boat",
    "price": 1880,
    "originalPrice": 1880,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.1,
    "reviews": 577,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-9",
    "name": "Dell Bluetooth Speaker Ultra",
    "slug": "dell-bluetooth-speaker-ultra-dell",
    "price": 2890,
    "originalPrice": 2890,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.4,
    "reviews": 324,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-10",
    "name": "Philips Bluetooth Speaker Ultra",
    "slug": "philips-bluetooth-speaker-ultra-philips",
    "price": 1090,
    "originalPrice": 1328,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.7,
    "reviews": 1313,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium bluetooth speaker from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-11",
    "name": "Sony USB-C Hub Pro",
    "slug": "sony-usb-c-hub-pro",
    "price": 480,
    "originalPrice": 598,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.5,
    "reviews": 1671,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "High-quality usb-c hub from Sony. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-12",
    "name": "Realme USB-C Hub Deluxe",
    "slug": "realme-usb-c-hub-deluxe-realme",
    "price": 780,
    "originalPrice": 780,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4,
    "reviews": 1470,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-13",
    "name": "Philips USB-C Hub Deluxe",
    "slug": "philips-usb-c-hub-deluxe-philips",
    "price": 500,
    "originalPrice": 500,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.3,
    "reviews": 804,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-14",
    "name": "OnePlus USB-C Hub Plus",
    "slug": "oneplus-usb-c-hub-plus-oneplus",
    "price": 1130,
    "originalPrice": 1609,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.8,
    "reviews": 1332,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-15",
    "name": "boAt USB-C Hub Ultra",
    "slug": "boat-usb-c-hub-ultra-boat",
    "price": 1520,
    "originalPrice": 2017,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.8,
    "reviews": 436,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-16",
    "name": "Samsung USB-C Hub Basic",
    "slug": "samsung-usb-c-hub-basic-samsung",
    "price": 1740,
    "originalPrice": 1740,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.7,
    "reviews": 510,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-17",
    "name": "boAt USB-C Hub Standard",
    "slug": "boat-usb-c-hub-standard-boat",
    "price": 1420,
    "originalPrice": 1844,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.9,
    "reviews": 1106,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium usb-c hub from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-18",
    "name": "Bose Wireless Mouse Premium",
    "slug": "bose-wireless-mouse-premium",
    "price": 2340,
    "originalPrice": 3242,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.7,
    "reviews": 1193,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    "description": "High-quality wireless mouse from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-19",
    "name": "Panasonic Wireless Mouse Plus",
    "slug": "panasonic-wireless-mouse-plus-panasonic",
    "price": 1540,
    "originalPrice": 2025,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.1,
    "reviews": 823,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-20",
    "name": "JBL Wireless Mouse",
    "slug": "jbl-wireless-mouse-jbl",
    "price": 650,
    "originalPrice": 650,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 5,
    "reviews": 1471,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-21",
    "name": "LG Wireless Mouse Pro",
    "slug": "lg-wireless-mouse-pro-lg",
    "price": 930,
    "originalPrice": 930,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.4,
    "reviews": 257,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-22",
    "name": "LG Wireless Mouse Ultra",
    "slug": "lg-wireless-mouse-ultra-lg",
    "price": 2020,
    "originalPrice": 2753,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.9,
    "reviews": 1231,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-23",
    "name": "JBL Wireless Mouse Pro",
    "slug": "jbl-wireless-mouse-pro-jbl",
    "price": 680,
    "originalPrice": 878,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.5,
    "reviews": 247,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium wireless mouse from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-24",
    "name": "Panasonic Smart Band Pro",
    "slug": "panasonic-smart-band-pro",
    "price": 2680,
    "originalPrice": 2680,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.9,
    "reviews": 217,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595079676336-1536f5b1a98b?w=400&h=400&fit=crop",
    "description": "High-quality smart band from Panasonic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-25",
    "name": "Panasonic Smart Band Standard",
    "slug": "panasonic-smart-band-standard-panasonic",
    "price": 2930,
    "originalPrice": 3461,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.1,
    "reviews": 676,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium smart band from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-26",
    "name": "Xiaomi Smart Band Premium",
    "slug": "xiaomi-smart-band-premium-xiaomi",
    "price": 1020,
    "originalPrice": 1020,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4,
    "reviews": 1230,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "Premium smart band from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-27",
    "name": "Realme Smart Band Standard",
    "slug": "realme-smart-band-standard-realme",
    "price": 990,
    "originalPrice": 1526,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.2,
    "reviews": 1486,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium smart band from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-28",
    "name": "Realme Smart Band Pro",
    "slug": "realme-smart-band-pro-realme",
    "price": 2810,
    "originalPrice": 2810,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.1,
    "reviews": 1317,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium smart band from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-29",
    "name": "Samsung Smart Band Pro",
    "slug": "samsung-smart-band-pro-samsung",
    "price": 3230,
    "originalPrice": 3230,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.2,
    "reviews": 622,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium smart band from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-30",
    "name": "Philips Smart Band Standard",
    "slug": "philips-smart-band-standard-philips",
    "price": 2610,
    "originalPrice": 2610,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.6,
    "reviews": 1011,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium smart band from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-31",
    "name": "Panasonic Power Bank Basic",
    "slug": "panasonic-power-bank-basic",
    "price": 600,
    "originalPrice": 866,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.8,
    "reviews": 448,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "High-quality power bank from Panasonic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-32",
    "name": "Dell Power Bank Premium",
    "slug": "dell-power-bank-premium-dell",
    "price": 2740,
    "originalPrice": 3965,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.4,
    "reviews": 758,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium power bank from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-33",
    "name": "Samsung Power Bank Plus",
    "slug": "samsung-power-bank-plus-samsung",
    "price": 2940,
    "originalPrice": 2940,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.5,
    "reviews": 951,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium power bank from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-34",
    "name": "Philips Power Bank Pro",
    "slug": "philips-power-bank-pro-philips",
    "price": 1150,
    "originalPrice": 1150,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.4,
    "reviews": 499,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium power bank from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-35",
    "name": "HP Power Bank Deluxe",
    "slug": "hp-power-bank-deluxe-hp",
    "price": 720,
    "originalPrice": 720,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.8,
    "reviews": 776,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "Premium power bank from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-36",
    "name": "Xiaomi Power Bank Plus",
    "slug": "xiaomi-power-bank-plus-xiaomi",
    "price": 1550,
    "originalPrice": 2053,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.3,
    "reviews": 428,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium power bank from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-37",
    "name": "Samsung HDMI Cable Elite",
    "slug": "samsung-hdmi-cable-elite",
    "price": 610,
    "originalPrice": 610,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.6,
    "reviews": 1490,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=400&h=400&fit=crop",
    "description": "High-quality hdmi cable from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-38",
    "name": "HP HDMI Cable Deluxe",
    "slug": "hp-hdmi-cable-deluxe-hp",
    "price": 610,
    "originalPrice": 785,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.5,
    "reviews": 1360,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-39",
    "name": "boAt HDMI Cable",
    "slug": "boat-hdmi-cable-boat",
    "price": 190,
    "originalPrice": 190,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.7,
    "reviews": 1426,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-40",
    "name": "Xiaomi HDMI Cable Deluxe",
    "slug": "xiaomi-hdmi-cable-deluxe-xiaomi",
    "price": 700,
    "originalPrice": 1109,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.7,
    "reviews": 1140,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-41",
    "name": "Realme HDMI Cable Standard",
    "slug": "realme-hdmi-cable-standard-realme",
    "price": 790,
    "originalPrice": 1175,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.3,
    "reviews": 750,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium hdmi cable from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-42",
    "name": "Dell Webcam Plus",
    "slug": "dell-webcam-plus",
    "price": 1630,
    "originalPrice": 1630,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4,
    "reviews": 986,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "High-quality webcam from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-43",
    "name": "Dell Webcam",
    "slug": "dell-webcam-dell",
    "price": 4170,
    "originalPrice": 6450,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.3,
    "reviews": 437,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614251055886-29acd3b1a2b3?w=400&h=400&fit=crop",
    "description": "Premium webcam from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-44",
    "name": "Sony Webcam Elite",
    "slug": "sony-webcam-elite-sony",
    "price": 1030,
    "originalPrice": 1030,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.4,
    "reviews": 876,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium webcam from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-45",
    "name": "pTron Webcam",
    "slug": "ptron-webcam-ptron",
    "price": 1280,
    "originalPrice": 1280,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.8,
    "reviews": 957,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium webcam from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-46",
    "name": "Realme Webcam Plus",
    "slug": "realme-webcam-plus-realme",
    "price": 880,
    "originalPrice": 880,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.5,
    "reviews": 147,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "Premium webcam from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-47",
    "name": "Apple Smart Plug Plus",
    "slug": "apple-smart-plug-plus",
    "price": 570,
    "originalPrice": 570,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.7,
    "reviews": 1747,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "High-quality smart plug from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-48",
    "name": "JBL Smart Plug Plus",
    "slug": "jbl-smart-plug-plus-jbl",
    "price": 1180,
    "originalPrice": 1870,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.8,
    "reviews": 1038,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium smart plug from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-49",
    "name": "LG Smart Plug Basic",
    "slug": "lg-smart-plug-basic-lg",
    "price": 360,
    "originalPrice": 436,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4,
    "reviews": 919,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium smart plug from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-50",
    "name": "Realme Smart Plug Ultra",
    "slug": "realme-smart-plug-ultra-realme",
    "price": 940,
    "originalPrice": 940,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.6,
    "reviews": 1174,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-51",
    "name": "Realme Smart Plug Standard",
    "slug": "realme-smart-plug-standard-realme",
    "price": 1190,
    "originalPrice": 1387,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.1,
    "reviews": 1486,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "Premium smart plug from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-52",
    "name": "Philips LED Strip Lights Deluxe",
    "slug": "philips-led-strip-lights-deluxe",
    "price": 1480,
    "originalPrice": 1480,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.6,
    "reviews": 1903,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "High-quality led strip lights from Philips. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-53",
    "name": "JBL LED Strip Lights Standard",
    "slug": "jbl-led-strip-lights-standard-jbl",
    "price": 1460,
    "originalPrice": 1716,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.8,
    "reviews": 596,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-54",
    "name": "JBL LED Strip Lights Plus",
    "slug": "jbl-led-strip-lights-plus-jbl",
    "price": 940,
    "originalPrice": 1286,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 1280,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-55",
    "name": "Realme LED Strip Lights Premium",
    "slug": "realme-led-strip-lights-premium-realme",
    "price": 240,
    "originalPrice": 240,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 1078,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-56",
    "name": "Panasonic LED Strip Lights Basic",
    "slug": "panasonic-led-strip-lights-basic-panasonic",
    "price": 500,
    "originalPrice": 560,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.8,
    "reviews": 879,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-57",
    "name": "Dell LED Strip Lights Plus",
    "slug": "dell-led-strip-lights-plus-dell",
    "price": 1240,
    "originalPrice": 1588,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.6,
    "reviews": 1141,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    "description": "Premium led strip lights from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-58",
    "name": "Bose Memory Card 64GB Plus",
    "slug": "bose-memory-card-64gb-plus",
    "price": 890,
    "originalPrice": 890,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.9,
    "reviews": 1867,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598803661568-1da6ba6e50f7?w=400&h=400&fit=crop",
    "description": "High-quality memory card 64gb from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-59",
    "name": "Realme Memory Card 64GB",
    "slug": "realme-memory-card-64gb-realme",
    "price": 1420,
    "originalPrice": 2036,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.4,
    "reviews": 1123,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-60",
    "name": "boAt Memory Card 64GB Standard",
    "slug": "boat-memory-card-64gb-standard-boat",
    "price": 380,
    "originalPrice": 380,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.5,
    "reviews": 411,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-61",
    "name": "Sony Memory Card 64GB",
    "slug": "sony-memory-card-64gb-sony",
    "price": 1440,
    "originalPrice": 2268,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.7,
    "reviews": 389,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-62",
    "name": "Samsung Memory Card 64GB Ultra",
    "slug": "samsung-memory-card-64gb-ultra-samsung",
    "price": 480,
    "originalPrice": 715,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.3,
    "reviews": 174,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-63",
    "name": "Bose Memory Card 64GB Deluxe",
    "slug": "bose-memory-card-64gb-deluxe-bose",
    "price": 520,
    "originalPrice": 733,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.8,
    "reviews": 806,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-64",
    "name": "Xiaomi Memory Card 64GB Elite",
    "slug": "xiaomi-memory-card-64gb-elite-xiaomi",
    "price": 1300,
    "originalPrice": 1787,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.9,
    "reviews": 338,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium memory card 64gb from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-65",
    "name": "Apple Phone Case Elite",
    "slug": "apple-phone-case-elite",
    "price": 310,
    "originalPrice": 413,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.1,
    "reviews": 1835,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "High-quality phone case from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-66",
    "name": "LG Phone Case",
    "slug": "lg-phone-case-lg",
    "price": 720,
    "originalPrice": 939,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.4,
    "reviews": 827,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium phone case from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-67",
    "name": "Xiaomi Phone Case",
    "slug": "xiaomi-phone-case-xiaomi",
    "price": 400,
    "originalPrice": 552,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.8,
    "reviews": 910,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1579947432563-8f0f8b8a3f2c?w=400&h=400&fit=crop",
    "description": "Premium phone case from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-68",
    "name": "Realme Phone Case Premium",
    "slug": "realme-phone-case-premium-realme",
    "price": 500,
    "originalPrice": 500,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.1,
    "reviews": 347,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium phone case from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-69",
    "name": "Philips Phone Case Elite",
    "slug": "philips-phone-case-elite-philips",
    "price": 650,
    "originalPrice": 758,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.3,
    "reviews": 1102,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium phone case from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-70",
    "name": "Philips Phone Case Basic",
    "slug": "philips-phone-case-basic-philips",
    "price": 250,
    "originalPrice": 306,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.4,
    "reviews": 284,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "Premium phone case from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-71",
    "name": "Xiaomi Screen Guard Premium",
    "slug": "xiaomi-screen-guard-premium",
    "price": 320,
    "originalPrice": 320,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.7,
    "reviews": 482,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "High-quality screen guard from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-72",
    "name": "Realme Screen Guard",
    "slug": "realme-screen-guard-realme",
    "price": 170,
    "originalPrice": 241,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.3,
    "reviews": 133,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-73",
    "name": "HP Screen Guard Basic",
    "slug": "hp-screen-guard-basic-hp",
    "price": 370,
    "originalPrice": 370,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.1,
    "reviews": 155,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium screen guard from HP. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-74",
    "name": "HP Screen Guard Deluxe",
    "slug": "hp-screen-guard-deluxe-hp",
    "price": 320,
    "originalPrice": 442,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.8,
    "reviews": 1400,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium screen guard from HP. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-75",
    "name": "Apple Screen Guard Deluxe",
    "slug": "apple-screen-guard-deluxe-apple",
    "price": 160,
    "originalPrice": 160,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.2,
    "reviews": 871,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-76",
    "name": "Sony Screen Guard Elite",
    "slug": "sony-screen-guard-elite-sony",
    "price": 280,
    "originalPrice": 280,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.3,
    "reviews": 1021,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "Premium screen guard from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-77",
    "name": "Bose Selfie Stick Tripod Plus",
    "slug": "bose-selfie-stick-tripod-plus",
    "price": 440,
    "originalPrice": 440,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.3,
    "reviews": 1018,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "High-quality selfie stick tripod from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-78",
    "name": "pTron Selfie Stick Tripod Elite",
    "slug": "ptron-selfie-stick-tripod-elite-ptron",
    "price": 710,
    "originalPrice": 961,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.4,
    "reviews": 657,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-79",
    "name": "LG Selfie Stick Tripod Standard",
    "slug": "lg-selfie-stick-tripod-standard-lg",
    "price": 260,
    "originalPrice": 260,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.7,
    "reviews": 746,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-80",
    "name": "pTron Selfie Stick Tripod Basic",
    "slug": "ptron-selfie-stick-tripod-basic-ptron",
    "price": 600,
    "originalPrice": 600,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.2,
    "reviews": 916,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-81",
    "name": "LG Selfie Stick Tripod Deluxe",
    "slug": "lg-selfie-stick-tripod-deluxe-lg",
    "price": 370,
    "originalPrice": 415,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4,
    "reviews": 865,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from LG. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-82",
    "name": "Apple Selfie Stick Tripod Basic",
    "slug": "apple-selfie-stick-tripod-basic-apple",
    "price": 1000,
    "originalPrice": 1264,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.5,
    "reviews": 950,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium selfie stick tripod from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-1",
    "name": "Zara Running Shoes Pro",
    "slug": "zara-running-shoes-pro",
    "price": 4890,
    "originalPrice": 6962,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.7,
    "reviews": 1915,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "High-quality running shoes from Zara. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-2",
    "name": "Wildcraft Running Shoes Pro",
    "slug": "wildcraft-running-shoes-pro-wildcraft",
    "price": 5040,
    "originalPrice": 7121,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.6,
    "reviews": 1049,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-3",
    "name": "Puma Running Shoes Basic",
    "slug": "puma-running-shoes-basic-puma",
    "price": 1810,
    "originalPrice": 2341,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.8,
    "reviews": 1241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-4",
    "name": "Wildcraft Running Shoes Elite",
    "slug": "wildcraft-running-shoes-elite-wildcraft",
    "price": 7320,
    "originalPrice": 10298,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.9,
    "reviews": 163,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-5",
    "name": "Nike Running Shoes Standard",
    "slug": "nike-running-shoes-standard-nike",
    "price": 4160,
    "originalPrice": 4160,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.7,
    "reviews": 1273,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-6",
    "name": "Adidas Running Shoes Premium",
    "slug": "adidas-running-shoes-premium-adidas",
    "price": 2500,
    "originalPrice": 3495,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.4,
    "reviews": 1065,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium running shoes from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-7",
    "name": "Wildcraft Casual Sneakers",
    "slug": "wildcraft-casual-sneakers",
    "price": 1040,
    "originalPrice": 1270,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.4,
    "reviews": 80,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "High-quality casual sneakers from Wildcraft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-8",
    "name": "Levi's Casual Sneakers Elite",
    "slug": "levi-s-casual-sneakers-elite-levi-s",
    "price": 2150,
    "originalPrice": 3197,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.1,
    "reviews": 995,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-9",
    "name": "Fossil Casual Sneakers Pro",
    "slug": "fossil-casual-sneakers-pro-fossil",
    "price": 3200,
    "originalPrice": 3591,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 5,
    "reviews": 858,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-10",
    "name": "Diesel Casual Sneakers Standard",
    "slug": "diesel-casual-sneakers-standard-diesel",
    "price": 2270,
    "originalPrice": 3077,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.4,
    "reviews": 220,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559561853-084c1d5c76f2?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-11",
    "name": "Zara Casual Sneakers",
    "slug": "zara-casual-sneakers-zara",
    "price": 4180,
    "originalPrice": 4180,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.3,
    "reviews": 778,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-12",
    "name": "Skechers Casual Sneakers",
    "slug": "skechers-casual-sneakers-skechers",
    "price": 3130,
    "originalPrice": 3976,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.5,
    "reviews": 173,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    "description": "Premium casual sneakers from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-13",
    "name": "H&M Round Neck T-Shirt",
    "slug": "h-m-round-neck-t-shirt",
    "price": 1410,
    "originalPrice": 1680,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.8,
    "reviews": 1865,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "High-quality round neck t-shirt from H&M. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-14",
    "name": "HRX Round Neck T-Shirt Ultra",
    "slug": "hrx-round-neck-t-shirt-ultra-hrx",
    "price": 1300,
    "originalPrice": 1799,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.9,
    "reviews": 369,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-15",
    "name": "Puma Round Neck T-Shirt",
    "slug": "puma-round-neck-t-shirt-puma",
    "price": 1480,
    "originalPrice": 1480,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.5,
    "reviews": 1043,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-16",
    "name": "Roadster Round Neck T-Shirt Ultra",
    "slug": "roadster-round-neck-t-shirt-ultra-roadster",
    "price": 790,
    "originalPrice": 790,
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
    "description": "Premium round neck t-shirt from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-17",
    "name": "Wildcraft Round Neck T-Shirt Ultra",
    "slug": "wildcraft-round-neck-t-shirt-ultra-wildcraft",
    "price": 1100,
    "originalPrice": 1100,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.9,
    "reviews": 1073,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-18",
    "name": "Fossil Round Neck T-Shirt Basic",
    "slug": "fossil-round-neck-t-shirt-basic-fossil",
    "price": 450,
    "originalPrice": 450,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.2,
    "reviews": 236,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551698618-1dfe5facc98d?w=400&h=400&fit=crop",
    "description": "Premium round neck t-shirt from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-19",
    "name": "Roadster Denim Jeans Basic",
    "slug": "roadster-denim-jeans-basic",
    "price": 2710,
    "originalPrice": 2710,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.8,
    "reviews": 1750,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    "description": "High-quality denim jeans from Roadster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-20",
    "name": "H&M Denim Jeans",
    "slug": "h-m-denim-jeans-h-m",
    "price": 2820,
    "originalPrice": 3872,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 5,
    "reviews": 1319,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599733589046-10c7f0f8e3e6?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-21",
    "name": "USPA Denim Jeans Premium",
    "slug": "uspa-denim-jeans-premium-uspa",
    "price": 2940,
    "originalPrice": 2940,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.9,
    "reviews": 1141,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-22",
    "name": "Ray-Ban Denim Jeans Basic",
    "slug": "ray-ban-denim-jeans-basic-ray-ban",
    "price": 2180,
    "originalPrice": 2180,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 5,
    "reviews": 855,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-23",
    "name": "USPA Denim Jeans",
    "slug": "uspa-denim-jeans-uspa",
    "price": 2260,
    "originalPrice": 3474,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.6,
    "reviews": 1161,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "Premium denim jeans from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-24",
    "name": "Wildcraft Formal Shirt",
    "slug": "wildcraft-formal-shirt",
    "price": 1160,
    "originalPrice": 1160,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.3,
    "reviews": 1013,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality formal shirt from Wildcraft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-25",
    "name": "Nike Formal Shirt",
    "slug": "nike-formal-shirt-nike",
    "price": 1580,
    "originalPrice": 1999,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.5,
    "reviews": 1147,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-26",
    "name": "Diesel Formal Shirt Deluxe",
    "slug": "diesel-formal-shirt-deluxe-diesel",
    "price": 1070,
    "originalPrice": 1070,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.5,
    "reviews": 678,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-27",
    "name": "Zara Formal Shirt Plus",
    "slug": "zara-formal-shirt-plus-zara",
    "price": 990,
    "originalPrice": 990,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.1,
    "reviews": 602,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-28",
    "name": "Adidas Formal Shirt Pro",
    "slug": "adidas-formal-shirt-pro-adidas",
    "price": 1520,
    "originalPrice": 2142,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.9,
    "reviews": 411,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium formal shirt from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-29",
    "name": "Nike Leather Belt Plus",
    "slug": "nike-leather-belt-plus",
    "price": 1240,
    "originalPrice": 1704,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.7,
    "reviews": 352,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "High-quality leather belt from Nike. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-30",
    "name": "Tommy Hilfiger Leather Belt Pro",
    "slug": "tommy-hilfiger-leather-belt-pro-tommy-hilfiger",
    "price": 370,
    "originalPrice": 370,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.6,
    "reviews": 460,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-31",
    "name": "Diesel Leather Belt Elite",
    "slug": "diesel-leather-belt-elite-diesel",
    "price": 730,
    "originalPrice": 1000,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.5,
    "reviews": 239,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-32",
    "name": "Adidas Leather Belt Pro",
    "slug": "adidas-leather-belt-pro-adidas",
    "price": 890,
    "originalPrice": 1281,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.8,
    "reviews": 777,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596020792280-2a7d0c6d9a9b?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-33",
    "name": "Tommy Hilfiger Leather Belt Premium",
    "slug": "tommy-hilfiger-leather-belt-premium-tommy-hilfiger",
    "price": 380,
    "originalPrice": 380,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.8,
    "reviews": 542,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-34",
    "name": "Ray-Ban Leather Belt Plus",
    "slug": "ray-ban-leather-belt-plus-ray-ban",
    "price": 1140,
    "originalPrice": 1514,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.9,
    "reviews": 852,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564135625956-9054b4b6b26c?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-35",
    "name": "Adidas Leather Belt Premium",
    "slug": "adidas-leather-belt-premium-adidas",
    "price": 310,
    "originalPrice": 310,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.8,
    "reviews": 588,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium leather belt from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-36",
    "name": "USPA Sports Cap Elite",
    "slug": "uspa-sports-cap-elite",
    "price": 340,
    "originalPrice": 446,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.2,
    "reviews": 762,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595209776413-48ce7f47b0a2?w=400&h=400&fit=crop",
    "description": "High-quality sports cap from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-37",
    "name": "USPA Sports Cap Pro",
    "slug": "uspa-sports-cap-pro-uspa",
    "price": 250,
    "originalPrice": 250,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.4,
    "reviews": 1215,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599733589046-10c7f0f8e3e6?w=400&h=400&fit=crop",
    "description": "Premium sports cap from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-38",
    "name": "USPA Sports Cap Premium",
    "slug": "uspa-sports-cap-premium-uspa",
    "price": 410,
    "originalPrice": 574,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.7,
    "reviews": 1248,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599593736570-48e0fc7e36f0?w=400&h=400&fit=crop",
    "description": "Premium sports cap from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-39",
    "name": "Adidas Sports Cap Standard",
    "slug": "adidas-sports-cap-standard-adidas",
    "price": 310,
    "originalPrice": 310,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.7,
    "reviews": 619,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-40",
    "name": "Puma Sports Cap Standard",
    "slug": "puma-sports-cap-standard-puma",
    "price": 400,
    "originalPrice": 400,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.1,
    "reviews": 911,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-41",
    "name": "H&M Sports Cap Standard",
    "slug": "h-m-sports-cap-standard-h-m",
    "price": 460,
    "originalPrice": 594,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.4,
    "reviews": 662,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium sports cap from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-42",
    "name": "Tommy Hilfiger Sports Cap Basic",
    "slug": "tommy-hilfiger-sports-cap-basic-tommy-hilfiger",
    "price": 620,
    "originalPrice": 620,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.1,
    "reviews": 575,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    "description": "Premium sports cap from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-43",
    "name": "Roadster Wrist Watch",
    "slug": "roadster-wrist-watch",
    "price": 4480,
    "originalPrice": 4480,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.8,
    "reviews": 413,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    "description": "High-quality wrist watch from Roadster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-44",
    "name": "Ray-Ban Wrist Watch",
    "slug": "ray-ban-wrist-watch-ray-ban",
    "price": 3910,
    "originalPrice": 5708,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.6,
    "reviews": 77,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-45",
    "name": "Ray-Ban Wrist Watch Plus",
    "slug": "ray-ban-wrist-watch-plus-ray-ban",
    "price": 3760,
    "originalPrice": 5209,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.8,
    "reviews": 1043,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-46",
    "name": "Zara Wrist Watch",
    "slug": "zara-wrist-watch-zara",
    "price": 2150,
    "originalPrice": 2150,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.3,
    "reviews": 548,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-47",
    "name": "Wildcraft Wrist Watch Basic",
    "slug": "wildcraft-wrist-watch-basic-wildcraft",
    "price": 3000,
    "originalPrice": 3819,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.8,
    "reviews": 631,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-48",
    "name": "Levi's Wrist Watch Deluxe",
    "slug": "levi-s-wrist-watch-deluxe-levi-s",
    "price": 4090,
    "originalPrice": 4711,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.4,
    "reviews": 1293,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium wrist watch from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-49",
    "name": "Zara Casual Shorts Pro",
    "slug": "zara-casual-shorts-pro",
    "price": 680,
    "originalPrice": 1054,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.5,
    "reviews": 1534,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "High-quality casual shorts from Zara. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-50",
    "name": "H&M Casual Shorts Standard",
    "slug": "h-m-casual-shorts-standard-h-m",
    "price": 900,
    "originalPrice": 1139,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4,
    "reviews": 1038,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-51",
    "name": "Wildcraft Casual Shorts Plus",
    "slug": "wildcraft-casual-shorts-plus-wildcraft",
    "price": 590,
    "originalPrice": 741,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.6,
    "reviews": 1352,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-52",
    "name": "Fossil Casual Shorts Basic",
    "slug": "fossil-casual-shorts-basic-fossil",
    "price": 1080,
    "originalPrice": 1636,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.2,
    "reviews": 1288,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-53",
    "name": "HRX Casual Shorts Pro",
    "slug": "hrx-casual-shorts-pro-hrx",
    "price": 1420,
    "originalPrice": 1597,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3,
    "reviews": 547,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-54",
    "name": "Fossil Casual Shorts Ultra",
    "slug": "fossil-casual-shorts-ultra-fossil",
    "price": 930,
    "originalPrice": 930,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.6,
    "reviews": 298,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium casual shorts from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-55",
    "name": "Skechers Winter Gloves Plus",
    "slug": "skechers-winter-gloves-plus",
    "price": 710,
    "originalPrice": 710,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.9,
    "reviews": 660,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "High-quality winter gloves from Skechers. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-56",
    "name": "Diesel Winter Gloves",
    "slug": "diesel-winter-gloves-diesel",
    "price": 590,
    "originalPrice": 818,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.1,
    "reviews": 1204,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-57",
    "name": "Diesel Winter Gloves Plus",
    "slug": "diesel-winter-gloves-plus-diesel",
    "price": 570,
    "originalPrice": 570,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.4,
    "reviews": 581,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-58",
    "name": "Zara Winter Gloves Plus",
    "slug": "zara-winter-gloves-plus-zara",
    "price": 570,
    "originalPrice": 570,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.6,
    "reviews": 755,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-59",
    "name": "Skechers Winter Gloves Elite",
    "slug": "skechers-winter-gloves-elite-skechers",
    "price": 750,
    "originalPrice": 750,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.7,
    "reviews": 67,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-60",
    "name": "Wildcraft Winter Gloves Standard",
    "slug": "wildcraft-winter-gloves-standard-wildcraft",
    "price": 650,
    "originalPrice": 964,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.2,
    "reviews": 186,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium winter gloves from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-61",
    "name": "Roadster Sunglasses Premium",
    "slug": "roadster-sunglasses-premium",
    "price": 2680,
    "originalPrice": 4007,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4,
    "reviews": 464,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "High-quality sunglasses from Roadster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-62",
    "name": "Roadster Sunglasses Pro",
    "slug": "roadster-sunglasses-pro-roadster",
    "price": 2220,
    "originalPrice": 3052,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.5,
    "reviews": 87,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-63",
    "name": "HRX Sunglasses",
    "slug": "hrx-sunglasses-hrx",
    "price": 2040,
    "originalPrice": 2040,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.2,
    "reviews": 260,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-64",
    "name": "Roadster Sunglasses Standard",
    "slug": "roadster-sunglasses-standard-roadster",
    "price": 1620,
    "originalPrice": 1795,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4,
    "reviews": 1293,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-65",
    "name": "Zara Sunglasses Elite",
    "slug": "zara-sunglasses-elite-zara",
    "price": 2690,
    "originalPrice": 2690,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.6,
    "reviews": 49,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium sunglasses from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-66",
    "name": "Skechers Wallet RFID Premium",
    "slug": "skechers-wallet-rfid-premium",
    "price": 500,
    "originalPrice": 738,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.1,
    "reviews": 955,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "High-quality wallet rfid from Skechers. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-67",
    "name": "Skechers Wallet RFID Pro",
    "slug": "skechers-wallet-rfid-pro-skechers",
    "price": 780,
    "originalPrice": 780,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3,
    "reviews": 1104,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-68",
    "name": "Diesel Wallet RFID Standard",
    "slug": "diesel-wallet-rfid-standard-diesel",
    "price": 810,
    "originalPrice": 1174,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.2,
    "reviews": 633,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-69",
    "name": "Adidas Wallet RFID Basic",
    "slug": "adidas-wallet-rfid-basic-adidas",
    "price": 1950,
    "originalPrice": 2350,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.5,
    "reviews": 546,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-70",
    "name": "Ray-Ban Wallet RFID Basic",
    "slug": "ray-ban-wallet-rfid-basic-ray-ban",
    "price": 490,
    "originalPrice": 619,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.3,
    "reviews": 1266,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "Premium wallet rfid from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-1",
    "name": "Signoraware Non-Stick Tawa Plus",
    "slug": "signoraware-non-stick-tawa-plus",
    "price": 740,
    "originalPrice": 740,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.6,
    "reviews": 121,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "High-quality non-stick tawa from Signoraware. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-2",
    "name": "Milton Non-Stick Tawa Pro",
    "slug": "milton-non-stick-tawa-pro-milton",
    "price": 1100,
    "originalPrice": 1100,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.4,
    "reviews": 340,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-3",
    "name": "Borosil Non-Stick Tawa",
    "slug": "borosil-non-stick-tawa-borosil",
    "price": 1480,
    "originalPrice": 1480,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.1,
    "reviews": 575,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-4",
    "name": "Prestige Non-Stick Tawa Basic",
    "slug": "prestige-non-stick-tawa-basic-prestige",
    "price": 1060,
    "originalPrice": 1060,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.4,
    "reviews": 663,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-5",
    "name": "Pigeon Non-Stick Tawa Elite",
    "slug": "pigeon-non-stick-tawa-elite-pigeon",
    "price": 1130,
    "originalPrice": 1130,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.3,
    "reviews": 806,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium non-stick tawa from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-6",
    "name": "Vidiem Microwave Safe Bowl Set Elite",
    "slug": "vidiem-microwave-safe-bowl-set-elite",
    "price": 420,
    "originalPrice": 420,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.6,
    "reviews": 20,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "High-quality microwave safe bowl set from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-7",
    "name": "Vidiem Microwave Safe Bowl Set Deluxe",
    "slug": "vidiem-microwave-safe-bowl-set-deluxe-vidiem",
    "price": 540,
    "originalPrice": 540,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.4,
    "reviews": 1127,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-8",
    "name": "Butterfly Microwave Safe Bowl Set Elite",
    "slug": "butterfly-microwave-safe-bowl-set-elite-butterfly",
    "price": 630,
    "originalPrice": 821,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.3,
    "reviews": 470,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-9",
    "name": "Borosil Microwave Safe Bowl Set Ultra",
    "slug": "borosil-microwave-safe-bowl-set-ultra-borosil",
    "price": 480,
    "originalPrice": 688,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.7,
    "reviews": 17,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595079676336-1536f5b1a98b?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-10",
    "name": "Hawkins Microwave Safe Bowl Set Pro",
    "slug": "hawkins-microwave-safe-bowl-set-pro-hawkins",
    "price": 540,
    "originalPrice": 667,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.2,
    "reviews": 860,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-11",
    "name": "Butterfly Microwave Safe Bowl Set Basic",
    "slug": "butterfly-microwave-safe-bowl-set-basic-butterfly",
    "price": 770,
    "originalPrice": 891,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.9,
    "reviews": 346,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "Premium microwave safe bowl set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-12",
    "name": "Butterfly Vegetable Chopper Plus",
    "slug": "butterfly-vegetable-chopper-plus",
    "price": 300,
    "originalPrice": 401,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4,
    "reviews": 1188,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "High-quality vegetable chopper from Butterfly. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-13",
    "name": "Milton Vegetable Chopper Plus",
    "slug": "milton-vegetable-chopper-plus-milton",
    "price": 500,
    "originalPrice": 702,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 5,
    "reviews": 1005,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-14",
    "name": "Cello Vegetable Chopper",
    "slug": "cello-vegetable-chopper-cello",
    "price": 620,
    "originalPrice": 923,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.5,
    "reviews": 180,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-15",
    "name": "Prestige Vegetable Chopper Basic",
    "slug": "prestige-vegetable-chopper-basic-prestige",
    "price": 430,
    "originalPrice": 616,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.6,
    "reviews": 1494,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-16",
    "name": "Hawkins Vegetable Chopper",
    "slug": "hawkins-vegetable-chopper-hawkins",
    "price": 590,
    "originalPrice": 742,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.1,
    "reviews": 140,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-17",
    "name": "Butterfly Vegetable Chopper Pro",
    "slug": "butterfly-vegetable-chopper-pro-butterfly",
    "price": 240,
    "originalPrice": 277,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.2,
    "reviews": 581,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-18",
    "name": "Butterfly Vegetable Chopper Premium",
    "slug": "butterfly-vegetable-chopper-premium-butterfly",
    "price": 430,
    "originalPrice": 430,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.7,
    "reviews": 1246,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium vegetable chopper from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-19",
    "name": "Borosil Spice Rack Premium",
    "slug": "borosil-spice-rack-premium",
    "price": 340,
    "originalPrice": 340,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.8,
    "reviews": 1108,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "High-quality spice rack from Borosil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-20",
    "name": "Wakefit Spice Rack Pro",
    "slug": "wakefit-spice-rack-pro-wakefit",
    "price": 670,
    "originalPrice": 788,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.7,
    "reviews": 671,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-21",
    "name": "Signoraware Spice Rack",
    "slug": "signoraware-spice-rack-signoraware",
    "price": 670,
    "originalPrice": 670,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.8,
    "reviews": 496,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-22",
    "name": "Hawkins Spice Rack Premium",
    "slug": "hawkins-spice-rack-premium-hawkins",
    "price": 640,
    "originalPrice": 954,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.7,
    "reviews": 511,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-23",
    "name": "Borosil Spice Rack Plus",
    "slug": "borosil-spice-rack-plus-borosil",
    "price": 590,
    "originalPrice": 590,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.1,
    "reviews": 1110,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-24",
    "name": "Vidiem Spice Rack Deluxe",
    "slug": "vidiem-spice-rack-deluxe-vidiem",
    "price": 510,
    "originalPrice": 709,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.1,
    "reviews": 18,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-25",
    "name": "Milton Spice Rack Standard",
    "slug": "milton-spice-rack-standard-milton",
    "price": 470,
    "originalPrice": 694,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.4,
    "reviews": 1483,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium spice rack from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-26",
    "name": "Signoraware Tumbler Glass Set",
    "slug": "signoraware-tumbler-glass-set",
    "price": 470,
    "originalPrice": 559,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.7,
    "reviews": 574,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "High-quality tumbler glass set from Signoraware. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-27",
    "name": "Borosil Tumbler Glass Set Plus",
    "slug": "borosil-tumbler-glass-set-plus-borosil",
    "price": 410,
    "originalPrice": 410,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.2,
    "reviews": 1026,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-28",
    "name": "Wakefit Tumbler Glass Set Pro",
    "slug": "wakefit-tumbler-glass-set-pro-wakefit",
    "price": 460,
    "originalPrice": 460,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.3,
    "reviews": 323,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1614251055886-29acd3b1a2b3?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-29",
    "name": "Prestige Tumbler Glass Set Deluxe",
    "slug": "prestige-tumbler-glass-set-deluxe-prestige",
    "price": 420,
    "originalPrice": 420,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.7,
    "reviews": 1149,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-30",
    "name": "Hawkins Tumbler Glass Set Pro",
    "slug": "hawkins-tumbler-glass-set-pro-hawkins",
    "price": 340,
    "originalPrice": 340,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 5,
    "reviews": 507,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium tumbler glass set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-31",
    "name": "Vidiem Kitchen Tongs",
    "slug": "vidiem-kitchen-tongs",
    "price": 340,
    "originalPrice": 405,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4,
    "reviews": 293,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "High-quality kitchen tongs from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-32",
    "name": "Cello Kitchen Tongs Basic",
    "slug": "cello-kitchen-tongs-basic-cello",
    "price": 310,
    "originalPrice": 447,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.8,
    "reviews": 196,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-33",
    "name": "Milton Kitchen Tongs Premium",
    "slug": "milton-kitchen-tongs-premium-milton",
    "price": 110,
    "originalPrice": 110,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.7,
    "reviews": 10,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-34",
    "name": "Milton Kitchen Tongs",
    "slug": "milton-kitchen-tongs-milton",
    "price": 120,
    "originalPrice": 189,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.1,
    "reviews": 1172,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-35",
    "name": "Signoraware Kitchen Tongs Deluxe",
    "slug": "signoraware-kitchen-tongs-deluxe-signoraware",
    "price": 220,
    "originalPrice": 286,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 5,
    "reviews": 551,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium kitchen tongs from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-36",
    "name": "Vidiem Dinner Plate Set Ultra",
    "slug": "vidiem-dinner-plate-set-ultra",
    "price": 520,
    "originalPrice": 720,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.9,
    "reviews": 1430,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "High-quality dinner plate set from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-37",
    "name": "Butterfly Dinner Plate Set",
    "slug": "butterfly-dinner-plate-set-butterfly",
    "price": 1280,
    "originalPrice": 1280,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.7,
    "reviews": 573,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-38",
    "name": "Pigeon Dinner Plate Set Deluxe",
    "slug": "pigeon-dinner-plate-set-deluxe-pigeon",
    "price": 750,
    "originalPrice": 899,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4,
    "reviews": 564,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-39",
    "name": "Signoraware Dinner Plate Set Basic",
    "slug": "signoraware-dinner-plate-set-basic-signoraware",
    "price": 1280,
    "originalPrice": 1280,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.2,
    "reviews": 303,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-40",
    "name": "Wakefit Dinner Plate Set Ultra",
    "slug": "wakefit-dinner-plate-set-ultra-wakefit",
    "price": 1130,
    "originalPrice": 1493,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4,
    "reviews": 516,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium dinner plate set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-41",
    "name": "Milton Storage Jar Set Premium",
    "slug": "milton-storage-jar-set-premium",
    "price": 210,
    "originalPrice": 243,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.9,
    "reviews": 944,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "High-quality storage jar set from Milton. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-42",
    "name": "Butterfly Storage Jar Set Elite",
    "slug": "butterfly-storage-jar-set-elite-butterfly",
    "price": 700,
    "originalPrice": 1060,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.7,
    "reviews": 182,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-43",
    "name": "Signoraware Storage Jar Set Pro",
    "slug": "signoraware-storage-jar-set-pro-signoraware",
    "price": 370,
    "originalPrice": 567,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.9,
    "reviews": 1283,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598803661568-1da6ba6e50f7?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-44",
    "name": "Wakefit Storage Jar Set Deluxe",
    "slug": "wakefit-storage-jar-set-deluxe-wakefit",
    "price": 670,
    "originalPrice": 757,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.8,
    "reviews": 237,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-45",
    "name": "Borosil Storage Jar Set Standard",
    "slug": "borosil-storage-jar-set-standard-borosil",
    "price": 530,
    "originalPrice": 733,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.6,
    "reviews": 1491,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-46",
    "name": "Prestige Storage Jar Set Ultra",
    "slug": "prestige-storage-jar-set-ultra-prestige",
    "price": 210,
    "originalPrice": 238,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.3,
    "reviews": 473,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium storage jar set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-47",
    "name": "Wakefit Mop Floor Cleaner Ultra",
    "slug": "wakefit-mop-floor-cleaner-ultra",
    "price": 720,
    "originalPrice": 720,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.7,
    "reviews": 1859,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "High-quality mop floor cleaner from Wakefit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-48",
    "name": "Butterfly Mop Floor Cleaner Standard",
    "slug": "butterfly-mop-floor-cleaner-standard-butterfly",
    "price": 790,
    "originalPrice": 1154,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.6,
    "reviews": 977,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-49",
    "name": "Pigeon Mop Floor Cleaner",
    "slug": "pigeon-mop-floor-cleaner-pigeon",
    "price": 610,
    "originalPrice": 759,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.4,
    "reviews": 1188,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-50",
    "name": "Pigeon Mop Floor Cleaner Elite",
    "slug": "pigeon-mop-floor-cleaner-elite-pigeon",
    "price": 630,
    "originalPrice": 1001,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.8,
    "reviews": 948,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-51",
    "name": "Cello Mop Floor Cleaner",
    "slug": "cello-mop-floor-cleaner-cello",
    "price": 650,
    "originalPrice": 852,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.2,
    "reviews": 1049,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-52",
    "name": "Pigeon Mop Floor Cleaner Standard",
    "slug": "pigeon-mop-floor-cleaner-standard-pigeon",
    "price": 390,
    "originalPrice": 603,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.7,
    "reviews": 179,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1579947432563-8f0f8b8a3f2c?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-53",
    "name": "Borosil Mop Floor Cleaner",
    "slug": "borosil-mop-floor-cleaner-borosil",
    "price": 750,
    "originalPrice": 750,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.3,
    "reviews": 1154,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium mop floor cleaner from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-54",
    "name": "Cello Clothes Hanger Set Plus",
    "slug": "cello-clothes-hanger-set-plus",
    "price": 460,
    "originalPrice": 460,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.6,
    "reviews": 1582,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "High-quality clothes hanger set from Cello. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-55",
    "name": "Prestige Clothes Hanger Set Standard",
    "slug": "prestige-clothes-hanger-set-standard-prestige",
    "price": 270,
    "originalPrice": 319,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.7,
    "reviews": 916,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-56",
    "name": "Butterfly Clothes Hanger Set Deluxe",
    "slug": "butterfly-clothes-hanger-set-deluxe-butterfly",
    "price": 430,
    "originalPrice": 577,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.6,
    "reviews": 893,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-57",
    "name": "Pigeon Clothes Hanger Set Ultra",
    "slug": "pigeon-clothes-hanger-set-ultra-pigeon",
    "price": 290,
    "originalPrice": 290,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4,
    "reviews": 433,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-58",
    "name": "Butterfly Clothes Hanger Set Elite",
    "slug": "butterfly-clothes-hanger-set-elite-butterfly",
    "price": 330,
    "originalPrice": 330,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.3,
    "reviews": 749,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-59",
    "name": "Hawkins Clothes Hanger Set Basic",
    "slug": "hawkins-clothes-hanger-set-basic-hawkins",
    "price": 280,
    "originalPrice": 280,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.5,
    "reviews": 859,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-60",
    "name": "Cello Clothes Hanger Set Ultra",
    "slug": "cello-clothes-hanger-set-ultra-cello",
    "price": 280,
    "originalPrice": 335,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.3,
    "reviews": 84,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium clothes hanger set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-61",
    "name": "Vidiem Door Mat",
    "slug": "vidiem-door-mat",
    "price": 250,
    "originalPrice": 250,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.4,
    "reviews": 894,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "High-quality door mat from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-62",
    "name": "Cello Door Mat Standard",
    "slug": "cello-door-mat-standard-cello",
    "price": 460,
    "originalPrice": 697,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.5,
    "reviews": 1361,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "Premium door mat from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-63",
    "name": "Prestige Door Mat Plus",
    "slug": "prestige-door-mat-plus-prestige",
    "price": 190,
    "originalPrice": 190,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.5,
    "reviews": 504,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium door mat from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-64",
    "name": "Cello Door Mat Deluxe",
    "slug": "cello-door-mat-deluxe-cello",
    "price": 340,
    "originalPrice": 340,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.5,
    "reviews": 1116,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium door mat from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-65",
    "name": "Cello Door Mat Ultra",
    "slug": "cello-door-mat-ultra-cello",
    "price": 270,
    "originalPrice": 341,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.1,
    "reviews": 34,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "Premium door mat from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-66",
    "name": "Hawkins Door Mat Deluxe",
    "slug": "hawkins-door-mat-deluxe-hawkins",
    "price": 410,
    "originalPrice": 410,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.6,
    "reviews": 1266,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium door mat from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-67",
    "name": "Vidiem Door Mat Deluxe",
    "slug": "vidiem-door-mat-deluxe-vidiem",
    "price": 420,
    "originalPrice": 496,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.2,
    "reviews": 1247,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium door mat from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-68",
    "name": "Borosil Cushion Cover Set Deluxe",
    "slug": "borosil-cushion-cover-set-deluxe",
    "price": 520,
    "originalPrice": 660,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.9,
    "reviews": 331,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "High-quality cushion cover set from Borosil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-69",
    "name": "Wakefit Cushion Cover Set Deluxe",
    "slug": "wakefit-cushion-cover-set-deluxe-wakefit",
    "price": 240,
    "originalPrice": 240,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.8,
    "reviews": 496,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-70",
    "name": "Vidiem Cushion Cover Set Pro",
    "slug": "vidiem-cushion-cover-set-pro-vidiem",
    "price": 300,
    "originalPrice": 300,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.9,
    "reviews": 43,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-71",
    "name": "Wakefit Cushion Cover Set Basic",
    "slug": "wakefit-cushion-cover-set-basic-wakefit",
    "price": 600,
    "originalPrice": 776,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.8,
    "reviews": 1110,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-72",
    "name": "Butterfly Cushion Cover Set Ultra",
    "slug": "butterfly-cushion-cover-set-ultra-butterfly",
    "price": 430,
    "originalPrice": 430,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.7,
    "reviews": 1351,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-73",
    "name": "Vidiem Cushion Cover Set Standard",
    "slug": "vidiem-cushion-cover-set-standard-vidiem",
    "price": 360,
    "originalPrice": 360,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.5,
    "reviews": 1347,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-74",
    "name": "Butterfly Cushion Cover Set Plus",
    "slug": "butterfly-cushion-cover-set-plus-butterfly",
    "price": 720,
    "originalPrice": 720,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.7,
    "reviews": 1377,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium cushion cover set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-1",
    "name": "Penguin Fiction Bestseller Standard",
    "slug": "penguin-fiction-bestseller-standard",
    "price": 620,
    "originalPrice": 620,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.9,
    "reviews": 49,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality fiction bestseller from Penguin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-2",
    "name": "Rupa Fiction Bestseller Pro",
    "slug": "rupa-fiction-bestseller-pro-rupa",
    "price": 360,
    "originalPrice": 569,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.6,
    "reviews": 658,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-3",
    "name": "Penguin Fiction Bestseller Plus",
    "slug": "penguin-fiction-bestseller-plus-penguin",
    "price": 430,
    "originalPrice": 430,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.9,
    "reviews": 57,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559561853-084c1d5c76f2?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-4",
    "name": "Oxford Fiction Bestseller Ultra",
    "slug": "oxford-fiction-bestseller-ultra-oxford",
    "price": 420,
    "originalPrice": 524,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4,
    "reviews": 1300,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-5",
    "name": "Rupa Fiction Bestseller Standard",
    "slug": "rupa-fiction-bestseller-standard-rupa",
    "price": 240,
    "originalPrice": 240,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.5,
    "reviews": 856,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-6",
    "name": "Random House Fiction Bestseller Elite",
    "slug": "random-house-fiction-bestseller-elite-random-house",
    "price": 480,
    "originalPrice": 480,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.3,
    "reviews": 453,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium fiction bestseller from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-7",
    "name": "Simon & Schuster Self-Help Guide Standard",
    "slug": "simon-schuster-self-help-guide-standard",
    "price": 360,
    "originalPrice": 360,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.7,
    "reviews": 1453,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "High-quality self-help guide from Simon & Schuster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-8",
    "name": "Simon & Schuster Self-Help Guide Deluxe",
    "slug": "simon-schuster-self-help-guide-deluxe-simon-schuster",
    "price": 430,
    "originalPrice": 553,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.1,
    "reviews": 1417,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-9",
    "name": "Aleph Self-Help Guide Pro",
    "slug": "aleph-self-help-guide-pro-aleph",
    "price": 560,
    "originalPrice": 840,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.1,
    "reviews": 425,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-10",
    "name": "HarperCollins Self-Help Guide Basic",
    "slug": "harpercollins-self-help-guide-basic-harpercollins",
    "price": 560,
    "originalPrice": 811,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.3,
    "reviews": 772,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-11",
    "name": "Bloomsbury Self-Help Guide Basic",
    "slug": "bloomsbury-self-help-guide-basic-bloomsbury",
    "price": 590,
    "originalPrice": 942,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.1,
    "reviews": 1226,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551698618-1dfe5facc98d?w=400&h=400&fit=crop",
    "description": "Premium self-help guide from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-12",
    "name": "Bloomsbury Indian History Book",
    "slug": "bloomsbury-indian-history-book",
    "price": 610,
    "originalPrice": 610,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.5,
    "reviews": 1270,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    "description": "High-quality indian history book from Bloomsbury. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-13",
    "name": "Scholastic Indian History Book Pro",
    "slug": "scholastic-indian-history-book-pro-scholastic",
    "price": 740,
    "originalPrice": 1076,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.9,
    "reviews": 587,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599733589046-10c7f0f8e3e6?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-14",
    "name": "Random House Indian History Book Pro",
    "slug": "random-house-indian-history-book-pro-random-house",
    "price": 950,
    "originalPrice": 950,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.1,
    "reviews": 1241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-15",
    "name": "Penguin Indian History Book Standard",
    "slug": "penguin-indian-history-book-standard-penguin",
    "price": 600,
    "originalPrice": 871,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.9,
    "reviews": 287,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-16",
    "name": "Bloomsbury Indian History Book Deluxe",
    "slug": "bloomsbury-indian-history-book-deluxe-bloomsbury",
    "price": 600,
    "originalPrice": 600,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.9,
    "reviews": 1325,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "Premium indian history book from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-17",
    "name": "HarperCollins Children Storybook",
    "slug": "harpercollins-children-storybook",
    "price": 390,
    "originalPrice": 587,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.3,
    "reviews": 640,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "High-quality children storybook from HarperCollins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-18",
    "name": "Simon & Schuster Children Storybook",
    "slug": "simon-schuster-children-storybook-simon-schuster",
    "price": 380,
    "originalPrice": 420,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.6,
    "reviews": 414,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-19",
    "name": "Oxford Children Storybook Ultra",
    "slug": "oxford-children-storybook-ultra-oxford",
    "price": 300,
    "originalPrice": 427,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.7,
    "reviews": 1067,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-20",
    "name": "Puffin Children Storybook Basic",
    "slug": "puffin-children-storybook-basic-puffin",
    "price": 450,
    "originalPrice": 669,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.3,
    "reviews": 369,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-21",
    "name": "Simon & Schuster Children Storybook Basic",
    "slug": "simon-schuster-children-storybook-basic-simon-schuster",
    "price": 170,
    "originalPrice": 170,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.5,
    "reviews": 569,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium children storybook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-22",
    "name": "HarperCollins Children Storybook Ultra",
    "slug": "harpercollins-children-storybook-ultra-harpercollins",
    "price": 280,
    "originalPrice": 280,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.5,
    "reviews": 1344,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium children storybook from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-23",
    "name": "Penguin Cooking Recipe Book Premium",
    "slug": "penguin-cooking-recipe-book-premium",
    "price": 300,
    "originalPrice": 300,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.6,
    "reviews": 618,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop",
    "description": "High-quality cooking recipe book from Penguin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-24",
    "name": "Puffin Cooking Recipe Book Elite",
    "slug": "puffin-cooking-recipe-book-elite-puffin",
    "price": 590,
    "originalPrice": 938,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.1,
    "reviews": 1506,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-25",
    "name": "Random House Cooking Recipe Book Elite",
    "slug": "random-house-cooking-recipe-book-elite-random-house",
    "price": 690,
    "originalPrice": 690,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.1,
    "reviews": 241,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596020792280-2a7d0c6d9a9b?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-26",
    "name": "Aleph Cooking Recipe Book Pro",
    "slug": "aleph-cooking-recipe-book-pro-aleph",
    "price": 530,
    "originalPrice": 777,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.6,
    "reviews": 1297,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-27",
    "name": "HarperCollins Cooking Recipe Book Ultra",
    "slug": "harpercollins-cooking-recipe-book-ultra-harpercollins",
    "price": 410,
    "originalPrice": 410,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.7,
    "reviews": 789,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564135625956-9054b4b6b26c?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-28",
    "name": "Random House Cooking Recipe Book Ultra",
    "slug": "random-house-cooking-recipe-book-ultra-random-house",
    "price": 670,
    "originalPrice": 670,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.9,
    "reviews": 754,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-29",
    "name": "Simon & Schuster Cooking Recipe Book Pro",
    "slug": "simon-schuster-cooking-recipe-book-pro-simon-schuster",
    "price": 710,
    "originalPrice": 710,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.6,
    "reviews": 404,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595209776413-48ce7f47b0a2?w=400&h=400&fit=crop",
    "description": "Premium cooking recipe book from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-30",
    "name": "HarperCollins Exam Guide",
    "slug": "harpercollins-exam-guide",
    "price": 500,
    "originalPrice": 641,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.5,
    "reviews": 1745,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599733589046-10c7f0f8e3e6?w=400&h=400&fit=crop",
    "description": "High-quality exam guide from HarperCollins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "bo-31",
    "name": "Oxford Exam Guide Plus",
    "slug": "oxford-exam-guide-plus-oxford",
    "price": 350,
    "originalPrice": 442,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.4,
    "reviews": 893,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599593736570-48e0fc7e36f0?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-32",
    "name": "HarperCollins Exam Guide Elite",
    "slug": "harpercollins-exam-guide-elite-harpercollins",
    "price": 590,
    "originalPrice": 652,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.7,
    "reviews": 1212,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium exam guide from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-33",
    "name": "Rupa Exam Guide Standard",
    "slug": "rupa-exam-guide-standard-rupa",
    "price": 210,
    "originalPrice": 335,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.5,
    "reviews": 808,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-34",
    "name": "Penguin Exam Guide",
    "slug": "penguin-exam-guide-penguin",
    "price": 390,
    "originalPrice": 390,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4,
    "reviews": 194,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-35",
    "name": "Simon & Schuster Exam Guide",
    "slug": "simon-schuster-exam-guide-simon-schuster",
    "price": 210,
    "originalPrice": 330,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.3,
    "reviews": 650,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-36",
    "name": "Bloomsbury Exam Guide Ultra",
    "slug": "bloomsbury-exam-guide-ultra-bloomsbury",
    "price": 500,
    "originalPrice": 699,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.5,
    "reviews": 1440,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    "description": "Premium exam guide from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-37",
    "name": "Rupa Art Sketchbook Basic",
    "slug": "rupa-art-sketchbook-basic",
    "price": 170,
    "originalPrice": 170,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.6,
    "reviews": 1232,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "High-quality art sketchbook from Rupa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-38",
    "name": "Puffin Art Sketchbook Basic",
    "slug": "puffin-art-sketchbook-basic-puffin",
    "price": 340,
    "originalPrice": 340,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.6,
    "reviews": 1446,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-39",
    "name": "Simon & Schuster Art Sketchbook Plus",
    "slug": "simon-schuster-art-sketchbook-plus-simon-schuster",
    "price": 220,
    "originalPrice": 347,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.6,
    "reviews": 1342,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-40",
    "name": "HarperCollins Art Sketchbook Elite",
    "slug": "harpercollins-art-sketchbook-elite-harpercollins",
    "price": 290,
    "originalPrice": 395,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.3,
    "reviews": 511,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-41",
    "name": "Bloomsbury Art Sketchbook",
    "slug": "bloomsbury-art-sketchbook-bloomsbury",
    "price": 280,
    "originalPrice": 341,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.6,
    "reviews": 1226,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-42",
    "name": "Aleph Art Sketchbook Pro",
    "slug": "aleph-art-sketchbook-pro-aleph",
    "price": 170,
    "originalPrice": 191,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.5,
    "reviews": 997,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium art sketchbook from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-43",
    "name": "Bloomsbury Fountain Pen",
    "slug": "bloomsbury-fountain-pen",
    "price": 320,
    "originalPrice": 320,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.7,
    "reviews": 999,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "High-quality fountain pen from Bloomsbury. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-44",
    "name": "HarperCollins Fountain Pen Standard",
    "slug": "harpercollins-fountain-pen-standard-harpercollins",
    "price": 290,
    "originalPrice": 348,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.4,
    "reviews": 442,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-45",
    "name": "HarperCollins Fountain Pen Basic",
    "slug": "harpercollins-fountain-pen-basic-harpercollins",
    "price": 890,
    "originalPrice": 1185,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.9,
    "reviews": 666,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-46",
    "name": "HarperCollins Fountain Pen",
    "slug": "harpercollins-fountain-pen-harpercollins",
    "price": 270,
    "originalPrice": 320,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.1,
    "reviews": 306,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-47",
    "name": "Oxford Fountain Pen",
    "slug": "oxford-fountain-pen-oxford",
    "price": 1480,
    "originalPrice": 2285,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.4,
    "reviews": 645,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-48",
    "name": "Simon & Schuster Fountain Pen Basic",
    "slug": "simon-schuster-fountain-pen-basic-simon-schuster",
    "price": 380,
    "originalPrice": 438,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.7,
    "reviews": 150,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-49",
    "name": "HarperCollins Fountain Pen Deluxe",
    "slug": "harpercollins-fountain-pen-deluxe-harpercollins",
    "price": 1440,
    "originalPrice": 1812,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.4,
    "reviews": 874,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium fountain pen from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-50",
    "name": "Scholastic Gift Wrapping Set Premium",
    "slug": "scholastic-gift-wrapping-set-premium",
    "price": 140,
    "originalPrice": 217,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.4,
    "reviews": 1858,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "High-quality gift wrapping set from Scholastic. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-51",
    "name": "Bloomsbury Gift Wrapping Set",
    "slug": "bloomsbury-gift-wrapping-set-bloomsbury",
    "price": 220,
    "originalPrice": 255,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 3.9,
    "reviews": 1001,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-52",
    "name": "Scholastic Gift Wrapping Set Pro",
    "slug": "scholastic-gift-wrapping-set-pro-scholastic",
    "price": 140,
    "originalPrice": 222,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.1,
    "reviews": 1093,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-53",
    "name": "Puffin Gift Wrapping Set Plus",
    "slug": "puffin-gift-wrapping-set-plus-puffin",
    "price": 270,
    "originalPrice": 411,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.5,
    "reviews": 643,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-54",
    "name": "Scholastic Gift Wrapping Set Standard",
    "slug": "scholastic-gift-wrapping-set-standard-scholastic",
    "price": 260,
    "originalPrice": 402,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.3,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium gift wrapping set from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-1",
    "name": "BSN Skipping Rope Premium",
    "slug": "bsn-skipping-rope-premium",
    "price": 170,
    "originalPrice": 170,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4,
    "reviews": 629,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "High-quality skipping rope from BSN. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-2",
    "name": "Decathlon Skipping Rope Standard",
    "slug": "decathlon-skipping-rope-standard-decathlon",
    "price": 130,
    "originalPrice": 178,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.3,
    "reviews": 1181,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-3",
    "name": "Nivia Skipping Rope Pro",
    "slug": "nivia-skipping-rope-pro-nivia",
    "price": 300,
    "originalPrice": 300,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.4,
    "reviews": 585,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-4",
    "name": "Proff Skipping Rope Deluxe",
    "slug": "proff-skipping-rope-deluxe-proff",
    "price": 360,
    "originalPrice": 510,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.6,
    "reviews": 781,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-5",
    "name": "Cosco Skipping Rope Pro",
    "slug": "cosco-skipping-rope-pro-cosco",
    "price": 150,
    "originalPrice": 199,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3,
    "reviews": 1317,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-6",
    "name": "Cosco Skipping Rope Standard",
    "slug": "cosco-skipping-rope-standard-cosco",
    "price": 250,
    "originalPrice": 279,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.9,
    "reviews": 1375,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-7",
    "name": "Fitkit Skipping Rope Plus",
    "slug": "fitkit-skipping-rope-plus-fitkit",
    "price": 390,
    "originalPrice": 390,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.1,
    "reviews": 1198,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "Premium skipping rope from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-8",
    "name": "Decathlon Push Up Stand Plus",
    "slug": "decathlon-push-up-stand-plus",
    "price": 650,
    "originalPrice": 650,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.4,
    "reviews": 1076,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "High-quality push up stand from Decathlon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-9",
    "name": "Puma Push Up Stand Elite",
    "slug": "puma-push-up-stand-elite-puma",
    "price": 470,
    "originalPrice": 470,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.2,
    "reviews": 364,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-10",
    "name": "Proff Push Up Stand Plus",
    "slug": "proff-push-up-stand-plus-proff",
    "price": 440,
    "originalPrice": 595,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.6,
    "reviews": 1344,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-11",
    "name": "Speed Push Up Stand Pro",
    "slug": "speed-push-up-stand-pro-speed",
    "price": 670,
    "originalPrice": 866,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.9,
    "reviews": 379,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-12",
    "name": "Adidas Push Up Stand Elite",
    "slug": "adidas-push-up-stand-elite-adidas",
    "price": 810,
    "originalPrice": 810,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.1,
    "reviews": 809,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-13",
    "name": "BSN Push Up Stand Deluxe",
    "slug": "bsn-push-up-stand-deluxe-bsn",
    "price": 890,
    "originalPrice": 1210,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.1,
    "reviews": 209,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium push up stand from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-14",
    "name": "Strauss Push Up Stand Basic",
    "slug": "strauss-push-up-stand-basic-strauss",
    "price": 890,
    "originalPrice": 1292,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.6,
    "reviews": 513,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium push up stand from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-15",
    "name": "Proff Ab Roller Wheel Basic",
    "slug": "proff-ab-roller-wheel-basic",
    "price": 280,
    "originalPrice": 280,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.8,
    "reviews": 655,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "High-quality ab roller wheel from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-16",
    "name": "Proff Ab Roller Wheel Premium",
    "slug": "proff-ab-roller-wheel-premium-proff",
    "price": 560,
    "originalPrice": 704,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.6,
    "reviews": 795,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-17",
    "name": "Proff Ab Roller Wheel Elite",
    "slug": "proff-ab-roller-wheel-elite-proff",
    "price": 330,
    "originalPrice": 502,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.9,
    "reviews": 193,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-18",
    "name": "Adidas Ab Roller Wheel Plus",
    "slug": "adidas-ab-roller-wheel-plus-adidas",
    "price": 470,
    "originalPrice": 624,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.4,
    "reviews": 941,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595079676336-1536f5b1a98b?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-19",
    "name": "Speed Ab Roller Wheel Elite",
    "slug": "speed-ab-roller-wheel-elite-speed",
    "price": 390,
    "originalPrice": 503,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.3,
    "reviews": 458,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-20",
    "name": "Proff Ab Roller Wheel Deluxe",
    "slug": "proff-ab-roller-wheel-deluxe-proff",
    "price": 300,
    "originalPrice": 300,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.7,
    "reviews": 931,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-21",
    "name": "Cosco Ab Roller Wheel Standard",
    "slug": "cosco-ab-roller-wheel-standard-cosco",
    "price": 230,
    "originalPrice": 259,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.5,
    "reviews": 604,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium ab roller wheel from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-22",
    "name": "Speed Hand Grip Strengthener Standard",
    "slug": "speed-hand-grip-strengthener-standard",
    "price": 320,
    "originalPrice": 485,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.8,
    "reviews": 497,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "High-quality hand grip strengthener from Speed. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-23",
    "name": "Decathlon Hand Grip Strengthener Ultra",
    "slug": "decathlon-hand-grip-strengthener-ultra-decathlon",
    "price": 190,
    "originalPrice": 190,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.2,
    "reviews": 805,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-24",
    "name": "Cosco Hand Grip Strengthener Elite",
    "slug": "cosco-hand-grip-strengthener-elite-cosco",
    "price": 140,
    "originalPrice": 140,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.9,
    "reviews": 225,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-25",
    "name": "Adidas Hand Grip Strengthener Ultra",
    "slug": "adidas-hand-grip-strengthener-ultra-adidas",
    "price": 370,
    "originalPrice": 431,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.5,
    "reviews": 1019,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-26",
    "name": "Proff Hand Grip Strengthener Basic",
    "slug": "proff-hand-grip-strengthener-basic-proff",
    "price": 130,
    "originalPrice": 147,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.1,
    "reviews": 779,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-27",
    "name": "BSN Hand Grip Strengthener Ultra",
    "slug": "bsn-hand-grip-strengthener-ultra-bsn",
    "price": 160,
    "originalPrice": 197,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.9,
    "reviews": 546,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-28",
    "name": "Proff Hand Grip Strengthener Deluxe",
    "slug": "proff-hand-grip-strengthener-deluxe-proff",
    "price": 150,
    "originalPrice": 229,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.3,
    "reviews": 618,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium hand grip strengthener from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-29",
    "name": "Proff Tennis Ball Set Pro",
    "slug": "proff-tennis-ball-set-pro",
    "price": 500,
    "originalPrice": 500,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.9,
    "reviews": 1059,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "High-quality tennis ball set from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-30",
    "name": "Decathlon Tennis Ball Set Deluxe",
    "slug": "decathlon-tennis-ball-set-deluxe-decathlon",
    "price": 210,
    "originalPrice": 317,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.5,
    "reviews": 1481,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-31",
    "name": "Cosco Tennis Ball Set Plus",
    "slug": "cosco-tennis-ball-set-plus-cosco",
    "price": 210,
    "originalPrice": 312,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.6,
    "reviews": 1434,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-32",
    "name": "Proff Tennis Ball Set",
    "slug": "proff-tennis-ball-set-proff",
    "price": 590,
    "originalPrice": 854,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.6,
    "reviews": 1119,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-33",
    "name": "BSN Tennis Ball Set Premium",
    "slug": "bsn-tennis-ball-set-premium-bsn",
    "price": 490,
    "originalPrice": 490,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.7,
    "reviews": 327,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-34",
    "name": "Cosco Tennis Ball Set Ultra",
    "slug": "cosco-tennis-ball-set-ultra-cosco",
    "price": 250,
    "originalPrice": 250,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.3,
    "reviews": 1326,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium tennis ball set from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-35",
    "name": "Puma Badminton Racket Plus",
    "slug": "puma-badminton-racket-plus",
    "price": 1280,
    "originalPrice": 1280,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.9,
    "reviews": 1032,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "High-quality badminton racket from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-36",
    "name": "Cosco Badminton Racket Plus",
    "slug": "cosco-badminton-racket-plus-cosco",
    "price": 340,
    "originalPrice": 397,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.8,
    "reviews": 789,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-37",
    "name": "Nivia Badminton Racket",
    "slug": "nivia-badminton-racket-nivia",
    "price": 1470,
    "originalPrice": 1905,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.8,
    "reviews": 464,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614251055886-29acd3b1a2b3?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-38",
    "name": "Proff Badminton Racket Standard",
    "slug": "proff-badminton-racket-standard-proff",
    "price": 1050,
    "originalPrice": 1376,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.7,
    "reviews": 458,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-39",
    "name": "Strauss Badminton Racket Deluxe",
    "slug": "strauss-badminton-racket-deluxe-strauss",
    "price": 1340,
    "originalPrice": 1340,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.3,
    "reviews": 624,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium badminton racket from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-40",
    "name": "Cosco Cricket Bat Ultra",
    "slug": "cosco-cricket-bat-ultra",
    "price": 1230,
    "originalPrice": 1460,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.6,
    "reviews": 1022,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "High-quality cricket bat from Cosco. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-41",
    "name": "Decathlon Cricket Bat Elite",
    "slug": "decathlon-cricket-bat-elite-decathlon",
    "price": 750,
    "originalPrice": 1186,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.5,
    "reviews": 13,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-42",
    "name": "Speed Cricket Bat Premium",
    "slug": "speed-cricket-bat-premium-speed",
    "price": 1780,
    "originalPrice": 2286,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.5,
    "reviews": 923,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-43",
    "name": "Proff Cricket Bat Standard",
    "slug": "proff-cricket-bat-standard-proff",
    "price": 1330,
    "originalPrice": 1330,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.7,
    "reviews": 1184,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-44",
    "name": "Cosco Cricket Bat",
    "slug": "cosco-cricket-bat-cosco",
    "price": 920,
    "originalPrice": 1188,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4,
    "reviews": 599,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-45",
    "name": "Fitkit Cricket Bat Deluxe",
    "slug": "fitkit-cricket-bat-deluxe-fitkit",
    "price": 2830,
    "originalPrice": 4080,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.3,
    "reviews": 22,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-46",
    "name": "BSN Cricket Bat Pro",
    "slug": "bsn-cricket-bat-pro-bsn",
    "price": 2890,
    "originalPrice": 2890,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.2,
    "reviews": 323,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "Premium cricket bat from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-47",
    "name": "Puma Yoga Block Set Pro",
    "slug": "puma-yoga-block-set-pro",
    "price": 560,
    "originalPrice": 659,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.9,
    "reviews": 185,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "High-quality yoga block set from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-48",
    "name": "Puma Yoga Block Set Plus",
    "slug": "puma-yoga-block-set-plus-puma",
    "price": 420,
    "originalPrice": 420,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.7,
    "reviews": 562,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-49",
    "name": "Speed Yoga Block Set Ultra",
    "slug": "speed-yoga-block-set-ultra-speed",
    "price": 560,
    "originalPrice": 560,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.9,
    "reviews": 800,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-50",
    "name": "Puma Yoga Block Set Ultra",
    "slug": "puma-yoga-block-set-ultra-puma",
    "price": 360,
    "originalPrice": 469,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3,
    "reviews": 659,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-51",
    "name": "Fitkit Yoga Block Set Pro",
    "slug": "fitkit-yoga-block-set-pro-fitkit",
    "price": 540,
    "originalPrice": 540,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.6,
    "reviews": 971,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-52",
    "name": "Speed Yoga Block Set Pro",
    "slug": "speed-yoga-block-set-pro-speed",
    "price": 420,
    "originalPrice": 519,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.5,
    "reviews": 695,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598803661568-1da6ba6e50f7?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-53",
    "name": "Strauss Yoga Block Set Elite",
    "slug": "strauss-yoga-block-set-elite-strauss",
    "price": 480,
    "originalPrice": 610,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.8,
    "reviews": 1496,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium yoga block set from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-54",
    "name": "Proff Cycling Water Bottle Elite",
    "slug": "proff-cycling-water-bottle-elite",
    "price": 180,
    "originalPrice": 180,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.8,
    "reviews": 896,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "High-quality cycling water bottle from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-55",
    "name": "BSN Cycling Water Bottle",
    "slug": "bsn-cycling-water-bottle-bsn",
    "price": 330,
    "originalPrice": 408,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.6,
    "reviews": 566,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-56",
    "name": "Adidas Cycling Water Bottle Basic",
    "slug": "adidas-cycling-water-bottle-basic-adidas",
    "price": 410,
    "originalPrice": 410,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.5,
    "reviews": 941,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-57",
    "name": "Fitkit Cycling Water Bottle Elite",
    "slug": "fitkit-cycling-water-bottle-elite-fitkit",
    "price": 230,
    "originalPrice": 312,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.6,
    "reviews": 1181,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-58",
    "name": "Fitkit Cycling Water Bottle Pro",
    "slug": "fitkit-cycling-water-bottle-pro-fitkit",
    "price": 170,
    "originalPrice": 170,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.2,
    "reviews": 104,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-59",
    "name": "Adidas Cycling Water Bottle Deluxe",
    "slug": "adidas-cycling-water-bottle-deluxe-adidas",
    "price": 470,
    "originalPrice": 697,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3,
    "reviews": 910,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-60",
    "name": "Cosco Cycling Water Bottle Standard",
    "slug": "cosco-cycling-water-bottle-standard-cosco",
    "price": 320,
    "originalPrice": 320,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.3,
    "reviews": 1335,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium cycling water bottle from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-1",
    "name": "Mamaearth Face Wash Standard",
    "slug": "mamaearth-face-wash-standard",
    "price": 390,
    "originalPrice": 390,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.1,
    "reviews": 462,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1579947432563-8f0f8b8a3f2c?w=400&h=400&fit=crop",
    "description": "High-quality face wash from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-2",
    "name": "Nykaa Face Wash Standard",
    "slug": "nykaa-face-wash-standard-nykaa",
    "price": 280,
    "originalPrice": 363,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.2,
    "reviews": 992,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "Premium face wash from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-3",
    "name": "Biotique Face Wash",
    "slug": "biotique-face-wash-biotique",
    "price": 300,
    "originalPrice": 300,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.6,
    "reviews": 1098,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium face wash from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-4",
    "name": "Biotique Face Wash Standard",
    "slug": "biotique-face-wash-standard-biotique",
    "price": 180,
    "originalPrice": 267,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.7,
    "reviews": 374,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "Premium face wash from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-5",
    "name": "Wow Skin Science Face Wash Standard",
    "slug": "wow-skin-science-face-wash-standard-wow-skin-science",
    "price": 170,
    "originalPrice": 170,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.2,
    "reviews": 624,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium face wash from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-6",
    "name": "Nykaa Face Wash Plus",
    "slug": "nykaa-face-wash-plus-nykaa",
    "price": 250,
    "originalPrice": 310,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.6,
    "reviews": 871,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium face wash from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-7",
    "name": "Maybelline Face Wash Premium",
    "slug": "maybelline-face-wash-premium-maybelline",
    "price": 440,
    "originalPrice": 440,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.5,
    "reviews": 304,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium face wash from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-8",
    "name": "Plum Moisturizer Plus",
    "slug": "plum-moisturizer-plus",
    "price": 670,
    "originalPrice": 890,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.7,
    "reviews": 1495,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "High-quality moisturizer from Plum. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-9",
    "name": "Nykaa Moisturizer Standard",
    "slug": "nykaa-moisturizer-standard-nykaa",
    "price": 610,
    "originalPrice": 610,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.2,
    "reviews": 1074,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-10",
    "name": "L'Oreal Moisturizer Pro",
    "slug": "l-oreal-moisturizer-pro-l-oreal",
    "price": 410,
    "originalPrice": 535,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.2,
    "reviews": 964,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-11",
    "name": "Lakme Moisturizer Deluxe",
    "slug": "lakme-moisturizer-deluxe-lakme",
    "price": 600,
    "originalPrice": 600,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.6,
    "reviews": 1221,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-12",
    "name": "Plum Moisturizer Pro",
    "slug": "plum-moisturizer-pro-plum",
    "price": 500,
    "originalPrice": 773,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4,
    "reviews": 463,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-13",
    "name": "Lakme Moisturizer Pro",
    "slug": "lakme-moisturizer-pro-lakme",
    "price": 410,
    "originalPrice": 568,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 5,
    "reviews": 1412,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium moisturizer from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-14",
    "name": "Biotique Toner Elite",
    "slug": "biotique-toner-elite",
    "price": 220,
    "originalPrice": 220,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4,
    "reviews": 385,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "High-quality toner from Biotique. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-15",
    "name": "Minimalist Toner Plus",
    "slug": "minimalist-toner-plus-minimalist",
    "price": 520,
    "originalPrice": 748,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.8,
    "reviews": 1173,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium toner from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-16",
    "name": "L'Oreal Toner Ultra",
    "slug": "l-oreal-toner-ultra-l-oreal",
    "price": 510,
    "originalPrice": 510,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.2,
    "reviews": 1344,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium toner from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-17",
    "name": "Wow Skin Science Toner Plus",
    "slug": "wow-skin-science-toner-plus-wow-skin-science",
    "price": 300,
    "originalPrice": 343,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.7,
    "reviews": 189,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium toner from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-18",
    "name": "Lakme Toner",
    "slug": "lakme-toner-lakme",
    "price": 460,
    "originalPrice": 722,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.1,
    "reviews": 924,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=400&h=400&fit=crop",
    "description": "Premium toner from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-19",
    "name": "Lakme Toner Basic",
    "slug": "lakme-toner-basic-lakme",
    "price": 480,
    "originalPrice": 567,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.2,
    "reviews": 1107,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium toner from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-20",
    "name": "Wow Skin Science Toner Basic",
    "slug": "wow-skin-science-toner-basic-wow-skin-science",
    "price": 530,
    "originalPrice": 844,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.4,
    "reviews": 931,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium toner from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-21",
    "name": "Maybelline Eye Cream Ultra",
    "slug": "maybelline-eye-cream-ultra",
    "price": 760,
    "originalPrice": 914,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.8,
    "reviews": 1093,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "High-quality eye cream from Maybelline. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-22",
    "name": "Lakme Eye Cream Ultra",
    "slug": "lakme-eye-cream-ultra-lakme",
    "price": 930,
    "originalPrice": 930,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.2,
    "reviews": 857,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-23",
    "name": "Lakme Eye Cream Plus",
    "slug": "lakme-eye-cream-plus-lakme",
    "price": 480,
    "originalPrice": 531,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.4,
    "reviews": 543,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-24",
    "name": "Nykaa Eye Cream Deluxe",
    "slug": "nykaa-eye-cream-deluxe-nykaa",
    "price": 990,
    "originalPrice": 1197,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.7,
    "reviews": 1306,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-25",
    "name": "L'Oreal Eye Cream Plus",
    "slug": "l-oreal-eye-cream-plus-l-oreal",
    "price": 780,
    "originalPrice": 780,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.9,
    "reviews": 823,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium eye cream from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-26",
    "name": "Wow Skin Science Eye Cream Deluxe",
    "slug": "wow-skin-science-eye-cream-deluxe-wow-skin-science",
    "price": 900,
    "originalPrice": 1214,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.9,
    "reviews": 374,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559561853-084c1d5c76f2?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-27",
    "name": "Mamaearth Eye Cream Basic",
    "slug": "mamaearth-eye-cream-basic-mamaearth",
    "price": 890,
    "originalPrice": 1378,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.8,
    "reviews": 669,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium eye cream from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-28",
    "name": "Mamaearth Shampoo Elite",
    "slug": "mamaearth-shampoo-elite",
    "price": 610,
    "originalPrice": 610,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.8,
    "reviews": 1993,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    "description": "High-quality shampoo from Mamaearth. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-29",
    "name": "L'Oreal Shampoo Elite",
    "slug": "l-oreal-shampoo-elite-l-oreal",
    "price": 760,
    "originalPrice": 886,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.2,
    "reviews": 499,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium shampoo from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-30",
    "name": "Maybelline Shampoo Standard",
    "slug": "maybelline-shampoo-standard-maybelline",
    "price": 310,
    "originalPrice": 359,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4,
    "reviews": 1363,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-31",
    "name": "Mamaearth Shampoo Pro",
    "slug": "mamaearth-shampoo-pro-mamaearth",
    "price": 460,
    "originalPrice": 460,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.4,
    "reviews": 617,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-32",
    "name": "Mamaearth Shampoo Deluxe",
    "slug": "mamaearth-shampoo-deluxe-mamaearth",
    "price": 310,
    "originalPrice": 464,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.2,
    "reviews": 1182,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-33",
    "name": "Nykaa Shampoo",
    "slug": "nykaa-shampoo-nykaa",
    "price": 470,
    "originalPrice": 633,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.1,
    "reviews": 858,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium shampoo from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-34",
    "name": "Biotique Hair Oil Basic",
    "slug": "biotique-hair-oil-basic",
    "price": 220,
    "originalPrice": 328,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.6,
    "reviews": 1030,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551698618-1dfe5facc98d?w=400&h=400&fit=crop",
    "description": "High-quality hair oil from Biotique. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-35",
    "name": "Lakme Hair Oil Ultra",
    "slug": "lakme-hair-oil-ultra-lakme",
    "price": 550,
    "originalPrice": 791,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 5,
    "reviews": 640,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-36",
    "name": "Nykaa Hair Oil Deluxe",
    "slug": "nykaa-hair-oil-deluxe-nykaa",
    "price": 530,
    "originalPrice": 530,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4,
    "reviews": 349,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599733589046-10c7f0f8e3e6?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-37",
    "name": "The Derma Co Hair Oil Deluxe",
    "slug": "the-derma-co-hair-oil-deluxe-the-derma-co",
    "price": 340,
    "originalPrice": 340,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.7,
    "reviews": 1474,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium hair oil from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-38",
    "name": "Wow Skin Science Hair Oil Basic",
    "slug": "wow-skin-science-hair-oil-basic-wow-skin-science",
    "price": 450,
    "originalPrice": 565,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.8,
    "reviews": 1057,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "Premium hair oil from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-39",
    "name": "L'Oreal Body Lotion Plus",
    "slug": "l-oreal-body-lotion-plus",
    "price": 520,
    "originalPrice": 520,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.7,
    "reviews": 1610,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "High-quality body lotion from L'Oreal. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-40",
    "name": "Minimalist Body Lotion Basic",
    "slug": "minimalist-body-lotion-basic-minimalist",
    "price": 280,
    "originalPrice": 280,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.9,
    "reviews": 963,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-41",
    "name": "Biotique Body Lotion Pro",
    "slug": "biotique-body-lotion-pro-biotique",
    "price": 340,
    "originalPrice": 464,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.2,
    "reviews": 1138,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-42",
    "name": "Mamaearth Body Lotion Premium",
    "slug": "mamaearth-body-lotion-premium-mamaearth",
    "price": 510,
    "originalPrice": 772,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4,
    "reviews": 130,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-43",
    "name": "Nykaa Body Lotion Plus",
    "slug": "nykaa-body-lotion-plus-nykaa",
    "price": 400,
    "originalPrice": 400,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.9,
    "reviews": 377,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium body lotion from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-44",
    "name": "L'Oreal Body Lotion Deluxe",
    "slug": "l-oreal-body-lotion-deluxe-l-oreal",
    "price": 230,
    "originalPrice": 230,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3,
    "reviews": 1339,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium body lotion from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-45",
    "name": "Wow Skin Science Lipstick Premium",
    "slug": "wow-skin-science-lipstick-premium",
    "price": 510,
    "originalPrice": 510,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.8,
    "reviews": 32,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "High-quality lipstick from Wow Skin Science. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-46",
    "name": "L'Oreal Lipstick Standard",
    "slug": "l-oreal-lipstick-standard-l-oreal",
    "price": 230,
    "originalPrice": 230,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.1,
    "reviews": 45,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop",
    "description": "Premium lipstick from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-47",
    "name": "Nykaa Lipstick Ultra",
    "slug": "nykaa-lipstick-ultra-nykaa",
    "price": 810,
    "originalPrice": 810,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.6,
    "reviews": 1407,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-48",
    "name": "Mamaearth Lipstick Elite",
    "slug": "mamaearth-lipstick-elite-mamaearth",
    "price": 390,
    "originalPrice": 390,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3,
    "reviews": 1145,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596020792280-2a7d0c6d9a9b?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-49",
    "name": "Plum Lipstick Plus",
    "slug": "plum-lipstick-plus-plum",
    "price": 810,
    "originalPrice": 1024,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.4,
    "reviews": 251,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "description": "Premium lipstick from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-50",
    "name": "Minimalist Kajal Plus",
    "slug": "minimalist-kajal-plus",
    "price": 320,
    "originalPrice": 320,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4,
    "reviews": 1358,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1564135625956-9054b4b6b26c?w=400&h=400&fit=crop",
    "description": "High-quality kajal from Minimalist. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-51",
    "name": "Plum Kajal Elite",
    "slug": "plum-kajal-elite-plum",
    "price": 190,
    "originalPrice": 229,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.8,
    "reviews": 1085,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop",
    "description": "Premium kajal from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-52",
    "name": "Biotique Kajal Ultra",
    "slug": "biotique-kajal-ultra-biotique",
    "price": 260,
    "originalPrice": 303,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.4,
    "reviews": 1466,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595209776413-48ce7f47b0a2?w=400&h=400&fit=crop",
    "description": "Premium kajal from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-53",
    "name": "Maybelline Kajal Basic",
    "slug": "maybelline-kajal-basic-maybelline",
    "price": 100,
    "originalPrice": 147,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.8,
    "reviews": 1066,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599733589046-10c7f0f8e3e6?w=400&h=400&fit=crop",
    "description": "Premium kajal from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-54",
    "name": "Lakme Kajal Standard",
    "slug": "lakme-kajal-standard-lakme",
    "price": 320,
    "originalPrice": 475,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.6,
    "reviews": 1351,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599593736570-48e0fc7e36f0?w=400&h=400&fit=crop",
    "description": "Premium kajal from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-55",
    "name": "Mamaearth Kajal Premium",
    "slug": "mamaearth-kajal-premium-mamaearth",
    "price": 130,
    "originalPrice": 147,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.2,
    "reviews": 1396,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    "description": "Premium kajal from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-56",
    "name": "Plum Kajal Ultra",
    "slug": "plum-kajal-ultra-plum",
    "price": 250,
    "originalPrice": 331,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.4,
    "reviews": 1208,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    "description": "Premium kajal from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-57",
    "name": "Wow Skin Science Nail Polish Set Elite",
    "slug": "wow-skin-science-nail-polish-set-elite",
    "price": 380,
    "originalPrice": 577,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.9,
    "reviews": 1803,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop",
    "description": "High-quality nail polish set from Wow Skin Science. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-58",
    "name": "Plum Nail Polish Set Plus",
    "slug": "plum-nail-polish-set-plus-plum",
    "price": 100,
    "originalPrice": 100,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.2,
    "reviews": 1205,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-59",
    "name": "Wow Skin Science Nail Polish Set Plus",
    "slug": "wow-skin-science-nail-polish-set-plus-wow-skin-science",
    "price": 320,
    "originalPrice": 454,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.4,
    "reviews": 1057,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-60",
    "name": "Mamaearth Nail Polish Set Ultra",
    "slug": "mamaearth-nail-polish-set-ultra-mamaearth",
    "price": 280,
    "originalPrice": 328,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.2,
    "reviews": 906,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-61",
    "name": "Wow Skin Science Nail Polish Set Standard",
    "slug": "wow-skin-science-nail-polish-set-standard-wow-skin-science",
    "price": 110,
    "originalPrice": 129,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.2,
    "reviews": 834,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    "description": "Premium nail polish set from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-1",
    "name": "Dell Ultrabook Laptop",
    "slug": "dell-ultrabook-laptop",
    "price": 70000,
    "originalPrice": 70000,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.9,
    "reviews": 456,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "High-quality ultrabook laptop from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-2",
    "name": "Dell Ultrabook Laptop Elite",
    "slug": "dell-ultrabook-laptop-elite-dell",
    "price": 79930,
    "originalPrice": 89770,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.8,
    "reviews": 375,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-3",
    "name": "Lenovo Ultrabook Laptop Ultra",
    "slug": "lenovo-ultrabook-laptop-ultra-lenovo",
    "price": 118230,
    "originalPrice": 131253,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.7,
    "reviews": 67,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1540821925587-40d8640d7c1e?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-4",
    "name": "MSI Ultrabook Laptop Ultra",
    "slug": "msi-ultrabook-laptop-ultra-msi",
    "price": 106710,
    "originalPrice": 106710,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.2,
    "reviews": 20,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-5",
    "name": "Xiaomi Ultrabook Laptop Plus",
    "slug": "xiaomi-ultrabook-laptop-plus-xiaomi",
    "price": 70170,
    "originalPrice": 104994,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.9,
    "reviews": 939,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium ultrabook laptop from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-6",
    "name": "Samsung Gaming Laptop",
    "slug": "samsung-gaming-laptop",
    "price": 93260,
    "originalPrice": 138285,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.7,
    "reviews": 1239,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    "description": "High-quality gaming laptop from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-7",
    "name": "ASUS Gaming Laptop Standard",
    "slug": "asus-gaming-laptop-standard-asus",
    "price": 56820,
    "originalPrice": 56820,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.3,
    "reviews": 1184,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-8",
    "name": "MSI Gaming Laptop Premium",
    "slug": "msi-gaming-laptop-premium-msi",
    "price": 129660,
    "originalPrice": 129660,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.6,
    "reviews": 1211,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-9",
    "name": "Xiaomi Gaming Laptop Basic",
    "slug": "xiaomi-gaming-laptop-basic-xiaomi",
    "price": 64620,
    "originalPrice": 90853,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.9,
    "reviews": 1040,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-10",
    "name": "Microsoft Gaming Laptop Pro",
    "slug": "microsoft-gaming-laptop-pro-microsoft",
    "price": 111590,
    "originalPrice": 111590,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.3,
    "reviews": 174,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-11",
    "name": "HP Gaming Laptop Standard",
    "slug": "hp-gaming-laptop-standard-hp",
    "price": 89410,
    "originalPrice": 141738,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.1,
    "reviews": 678,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-12",
    "name": "Dell Gaming Laptop Deluxe",
    "slug": "dell-gaming-laptop-deluxe-dell",
    "price": 130460,
    "originalPrice": 130460,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.6,
    "reviews": 1203,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    "description": "Premium gaming laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-13",
    "name": "Microsoft Monitor 24-inch Elite",
    "slug": "microsoft-monitor-24-inch-elite",
    "price": 12750,
    "originalPrice": 14664,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.2,
    "reviews": 1837,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "High-quality monitor 24-inch from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-14",
    "name": "Acer Monitor 24-inch Elite",
    "slug": "acer-monitor-24-inch-elite-acer",
    "price": 24490,
    "originalPrice": 24490,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.3,
    "reviews": 1382,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-15",
    "name": "Lenovo Monitor 24-inch Plus",
    "slug": "lenovo-monitor-24-inch-plus-lenovo",
    "price": 19780,
    "originalPrice": 19780,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.4,
    "reviews": 1050,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-16",
    "name": "Apple Monitor 24-inch Standard",
    "slug": "apple-monitor-24-inch-standard-apple",
    "price": 21050,
    "originalPrice": 21050,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4,
    "reviews": 194,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-17",
    "name": "Lenovo Monitor 24-inch Elite",
    "slug": "lenovo-monitor-24-inch-elite-lenovo",
    "price": 20130,
    "originalPrice": 31800,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.4,
    "reviews": 1224,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-18",
    "name": "MSI Monitor 24-inch Deluxe",
    "slug": "msi-monitor-24-inch-deluxe-msi",
    "price": 21410,
    "originalPrice": 32249,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.4,
    "reviews": 377,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-19",
    "name": "Dell Monitor 24-inch Plus",
    "slug": "dell-monitor-24-inch-plus-dell",
    "price": 18040,
    "originalPrice": 26913,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4,
    "reviews": 1364,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1531497865145-1b68c0dfb0ff?w=400&h=400&fit=crop",
    "description": "Premium monitor 24-inch from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-20",
    "name": "Xiaomi Mechanical Keyboard Standard",
    "slug": "xiaomi-mechanical-keyboard-standard",
    "price": 7190,
    "originalPrice": 7190,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.3,
    "reviews": 1275,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    "description": "High-quality mechanical keyboard from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-21",
    "name": "Acer Mechanical Keyboard",
    "slug": "acer-mechanical-keyboard-acer",
    "price": 3420,
    "originalPrice": 5036,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.9,
    "reviews": 1361,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-22",
    "name": "Xiaomi Mechanical Keyboard Pro",
    "slug": "xiaomi-mechanical-keyboard-pro-xiaomi",
    "price": 3320,
    "originalPrice": 4286,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.4,
    "reviews": 984,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-23",
    "name": "Dell Mechanical Keyboard Standard",
    "slug": "dell-mechanical-keyboard-standard-dell",
    "price": 3110,
    "originalPrice": 3110,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.6,
    "reviews": 339,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-24",
    "name": "Lenovo Mechanical Keyboard Basic",
    "slug": "lenovo-mechanical-keyboard-basic-lenovo",
    "price": 6280,
    "originalPrice": 8819,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.3,
    "reviews": 1026,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium mechanical keyboard from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-25",
    "name": "Samsung External Hard Drive 1TB Deluxe",
    "slug": "samsung-external-hard-drive-1tb-deluxe",
    "price": 4900,
    "originalPrice": 7411,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.2,
    "reviews": 1217,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop",
    "description": "High-quality external hard drive 1tb from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-26",
    "name": "Dell External Hard Drive 1TB Plus",
    "slug": "dell-external-hard-drive-1tb-plus-dell",
    "price": 3320,
    "originalPrice": 5212,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.5,
    "reviews": 245,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-27",
    "name": "ASUS External Hard Drive 1TB",
    "slug": "asus-external-hard-drive-1tb-asus",
    "price": 3210,
    "originalPrice": 3636,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.2,
    "reviews": 779,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-28",
    "name": "HP External Hard Drive 1TB",
    "slug": "hp-external-hard-drive-1tb-hp",
    "price": 3850,
    "originalPrice": 5351,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.6,
    "reviews": 1204,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-29",
    "name": "HP External Hard Drive 1TB Basic",
    "slug": "hp-external-hard-drive-1tb-basic-hp",
    "price": 3120,
    "originalPrice": 4448,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.4,
    "reviews": 1031,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&h=400&fit=crop",
    "description": "Premium external hard drive 1tb from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-30",
    "name": "Dell USB Mouse Ultra",
    "slug": "dell-usb-mouse-ultra",
    "price": 890,
    "originalPrice": 1376,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.3,
    "reviews": 378,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "High-quality usb mouse from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-31",
    "name": "Xiaomi USB Mouse Elite",
    "slug": "xiaomi-usb-mouse-elite-xiaomi",
    "price": 1060,
    "originalPrice": 1060,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.3,
    "reviews": 1004,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586077605449-7c8a4f0fd302?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-32",
    "name": "Samsung USB Mouse Ultra",
    "slug": "samsung-usb-mouse-ultra-samsung",
    "price": 770,
    "originalPrice": 770,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 3.4,
    "reviews": 630,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-33",
    "name": "Apple USB Mouse Basic",
    "slug": "apple-usb-mouse-basic-apple",
    "price": 430,
    "originalPrice": 638,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 5,
    "reviews": 579,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-34",
    "name": "ASUS USB Mouse Pro",
    "slug": "asus-usb-mouse-pro-asus",
    "price": 430,
    "originalPrice": 627,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.1,
    "reviews": 1104,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595079676336-1536f5b1a98b?w=400&h=400&fit=crop",
    "description": "Premium usb mouse from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-35",
    "name": "HP Laptop Stand Ultra",
    "slug": "hp-laptop-stand-ultra",
    "price": 2090,
    "originalPrice": 3098,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.7,
    "reviews": 315,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
    "description": "High-quality laptop stand from HP. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-36",
    "name": "Microsoft Laptop Stand Deluxe",
    "slug": "microsoft-laptop-stand-deluxe-microsoft",
    "price": 1500,
    "originalPrice": 1500,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.9,
    "reviews": 1177,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-37",
    "name": "ASUS Laptop Stand Premium",
    "slug": "asus-laptop-stand-premium-asus",
    "price": 1390,
    "originalPrice": 1390,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.4,
    "reviews": 46,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627384113743-6a5e1ad7bfde?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-38",
    "name": "MSI Laptop Stand Pro",
    "slug": "msi-laptop-stand-pro-msi",
    "price": 1760,
    "originalPrice": 2435,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.2,
    "reviews": 1002,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-39",
    "name": "ASUS Laptop Stand Plus",
    "slug": "asus-laptop-stand-plus-asus",
    "price": 1590,
    "originalPrice": 1590,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.7,
    "reviews": 909,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    "description": "Premium laptop stand from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-40",
    "name": "Microsoft Wireless Keyboard Basic",
    "slug": "microsoft-wireless-keyboard-basic",
    "price": 2810,
    "originalPrice": 2810,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.1,
    "reviews": 73,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "description": "High-quality wireless keyboard from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-41",
    "name": "Acer Wireless Keyboard Ultra",
    "slug": "acer-wireless-keyboard-ultra-acer",
    "price": 2090,
    "originalPrice": 2383,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4,
    "reviews": 34,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-42",
    "name": "Apple Wireless Keyboard Elite",
    "slug": "apple-wireless-keyboard-elite-apple",
    "price": 3400,
    "originalPrice": 5070,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.3,
    "reviews": 693,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-43",
    "name": "Acer Wireless Keyboard Elite",
    "slug": "acer-wireless-keyboard-elite-acer",
    "price": 2560,
    "originalPrice": 3444,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.9,
    "reviews": 1009,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-44",
    "name": "MSI Wireless Keyboard Ultra",
    "slug": "msi-wireless-keyboard-ultra-msi",
    "price": 840,
    "originalPrice": 840,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.3,
    "reviews": 293,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-45",
    "name": "HP Wireless Keyboard Standard",
    "slug": "hp-wireless-keyboard-standard-hp",
    "price": 3040,
    "originalPrice": 4097,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.6,
    "reviews": 897,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1529699211955-0340e2a0f9d1?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-46",
    "name": "Samsung Wireless Keyboard Premium",
    "slug": "samsung-wireless-keyboard-premium-samsung",
    "price": 3850,
    "originalPrice": 4837,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.2,
    "reviews": 1326,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium wireless keyboard from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-47",
    "name": "Dell Laptop Bag Deluxe",
    "slug": "dell-laptop-bag-deluxe",
    "price": 2050,
    "originalPrice": 3061,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.6,
    "reviews": 603,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=400&h=400&fit=crop",
    "description": "High-quality laptop bag from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-48",
    "name": "Microsoft Laptop Bag",
    "slug": "microsoft-laptop-bag-microsoft",
    "price": 900,
    "originalPrice": 900,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.7,
    "reviews": 452,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1b0?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-49",
    "name": "Lenovo Laptop Bag Deluxe",
    "slug": "lenovo-laptop-bag-deluxe-lenovo",
    "price": 2660,
    "originalPrice": 3474,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.6,
    "reviews": 1016,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1527443223036-2f2380f3f8f1?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-50",
    "name": "HP Laptop Bag Basic",
    "slug": "hp-laptop-bag-basic-hp",
    "price": 570,
    "originalPrice": 704,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.9,
    "reviews": 1357,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-51",
    "name": "HP Laptop Bag Standard",
    "slug": "hp-laptop-bag-standard-hp",
    "price": 1030,
    "originalPrice": 1030,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 5,
    "reviews": 587,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    "description": "Premium laptop bag from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-52",
    "name": "Dell Cooling Pad Elite",
    "slug": "dell-cooling-pad-elite",
    "price": 580,
    "originalPrice": 788,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.4,
    "reviews": 1993,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    "description": "High-quality cooling pad from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-53",
    "name": "Microsoft Cooling Pad",
    "slug": "microsoft-cooling-pad-microsoft",
    "price": 680,
    "originalPrice": 680,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 1500,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614251055886-29acd3b1a2b3?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-54",
    "name": "MSI Cooling Pad",
    "slug": "msi-cooling-pad-msi",
    "price": 450,
    "originalPrice": 655,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.7,
    "reviews": 1371,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-55",
    "name": "Dell Cooling Pad Pro",
    "slug": "dell-cooling-pad-pro-dell",
    "price": 990,
    "originalPrice": 1201,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.6,
    "reviews": 603,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-56",
    "name": "Dell Cooling Pad Standard",
    "slug": "dell-cooling-pad-standard-dell",
    "price": 1020,
    "originalPrice": 1297,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.9,
    "reviews": 758,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518803194621-f1f6a7a9b5e9?w=400&h=400&fit=crop",
    "description": "Premium cooling pad from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-1",
    "name": "Maped A4 Notebook Pack Pro",
    "slug": "maped-a4-notebook-pack-pro",
    "price": 490,
    "originalPrice": 611,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.8,
    "reviews": 893,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    "description": "High-quality a4 notebook pack from Maped. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-2",
    "name": "Maped A4 Notebook Pack Elite",
    "slug": "maped-a4-notebook-pack-elite-maped",
    "price": 450,
    "originalPrice": 513,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.4,
    "reviews": 347,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-3",
    "name": "Uniball A4 Notebook Pack Premium",
    "slug": "uniball-a4-notebook-pack-premium-uniball",
    "price": 180,
    "originalPrice": 180,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.8,
    "reviews": 337,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-4",
    "name": "Classmate A4 Notebook Pack Premium",
    "slug": "classmate-a4-notebook-pack-premium-classmate",
    "price": 470,
    "originalPrice": 470,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.7,
    "reviews": 649,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1546868871-af0de0ae72c4?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-5",
    "name": "Parker A4 Notebook Pack",
    "slug": "parker-a4-notebook-pack-parker",
    "price": 380,
    "originalPrice": 598,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3,
    "reviews": 1465,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=400&fit=crop",
    "description": "Premium a4 notebook pack from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-6",
    "name": "Camlin Gel Pen Set Pro",
    "slug": "camlin-gel-pen-set-pro",
    "price": 210,
    "originalPrice": 320,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 3.6,
    "reviews": 447,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop",
    "description": "High-quality gel pen set from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-7",
    "name": "DOMS Gel Pen Set Plus",
    "slug": "doms-gel-pen-set-plus-doms",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.9,
    "reviews": 925,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-8",
    "name": "Camlin Gel Pen Set Standard",
    "slug": "camlin-gel-pen-set-standard-camlin",
    "price": 160,
    "originalPrice": 218,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.1,
    "reviews": 1080,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-9",
    "name": "Camlin Gel Pen Set Ultra",
    "slug": "camlin-gel-pen-set-ultra-camlin",
    "price": 190,
    "originalPrice": 190,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.5,
    "reviews": 715,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-10",
    "name": "DOMS Gel Pen Set Premium",
    "slug": "doms-gel-pen-set-premium-doms",
    "price": 260,
    "originalPrice": 260,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.3,
    "reviews": 757,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1613919113640-257e1e5d8a7b?w=400&h=400&fit=crop",
    "description": "Premium gel pen set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-11",
    "name": "Classmate Pencil Box Ultra",
    "slug": "classmate-pencil-box-ultra",
    "price": 380,
    "originalPrice": 505,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.6,
    "reviews": 536,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    "description": "High-quality pencil box from Classmate. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-12",
    "name": "Parker Pencil Box Pro",
    "slug": "parker-pencil-box-pro-parker",
    "price": 140,
    "originalPrice": 157,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.4,
    "reviews": 853,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598803661568-1da6ba6e50f7?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-13",
    "name": "Uniball Pencil Box Ultra",
    "slug": "uniball-pencil-box-ultra-uniball",
    "price": 170,
    "originalPrice": 236,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.3,
    "reviews": 1251,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1583485088034-141b5e1f0a9d?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-14",
    "name": "Navneet Pencil Box Deluxe",
    "slug": "navneet-pencil-box-deluxe-navneet",
    "price": 280,
    "originalPrice": 280,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.4,
    "reviews": 416,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-15",
    "name": "Staedtler Pencil Box",
    "slug": "staedtler-pencil-box-staedtler",
    "price": 300,
    "originalPrice": 371,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.3,
    "reviews": 471,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "description": "Premium pencil box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-16",
    "name": "Navneet Highlighter Set Basic",
    "slug": "navneet-highlighter-set-basic",
    "price": 180,
    "originalPrice": 180,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.7,
    "reviews": 1348,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1564887651979-53b60e8d4d23?w=400&h=400&fit=crop",
    "description": "High-quality highlighter set from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-17",
    "name": "DOMS Highlighter Set Elite",
    "slug": "doms-highlighter-set-elite-doms",
    "price": 210,
    "originalPrice": 264,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.4,
    "reviews": 451,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-18",
    "name": "Staedtler Highlighter Set",
    "slug": "staedtler-highlighter-set-staedtler",
    "price": 120,
    "originalPrice": 169,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.6,
    "reviews": 482,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-19",
    "name": "DOMS Highlighter Set Deluxe",
    "slug": "doms-highlighter-set-deluxe-doms",
    "price": 220,
    "originalPrice": 220,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.1,
    "reviews": 564,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-20",
    "name": "Classmate Highlighter Set Standard",
    "slug": "classmate-highlighter-set-standard-classmate",
    "price": 280,
    "originalPrice": 419,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.9,
    "reviews": 808,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-21",
    "name": "Maped Highlighter Set Premium",
    "slug": "maped-highlighter-set-premium-maped",
    "price": 300,
    "originalPrice": 300,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4,
    "reviews": 1058,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1579947432563-8f0f8b8a3f2c?w=400&h=400&fit=crop",
    "description": "Premium highlighter set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-22",
    "name": "Parker Geometry Box Elite",
    "slug": "parker-geometry-box-elite",
    "price": 480,
    "originalPrice": 709,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.9,
    "reviews": 295,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    "description": "High-quality geometry box from Parker. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-23",
    "name": "DOMS Geometry Box Basic",
    "slug": "doms-geometry-box-basic-doms",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.1,
    "reviews": 1409,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "Premium geometry box from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-24",
    "name": "Navneet Geometry Box Premium",
    "slug": "navneet-geometry-box-premium-navneet",
    "price": 430,
    "originalPrice": 605,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.3,
    "reviews": 254,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1584473457406-6244ae54d517?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-25",
    "name": "Uniball Geometry Box Basic",
    "slug": "uniball-geometry-box-basic-uniball",
    "price": 440,
    "originalPrice": 553,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.1,
    "reviews": 419,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-26",
    "name": "Staedtler Geometry Box Elite",
    "slug": "staedtler-geometry-box-elite-staedtler",
    "price": 340,
    "originalPrice": 340,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.4,
    "reviews": 763,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-27",
    "name": "Linc Geometry Box Ultra",
    "slug": "linc-geometry-box-ultra-linc",
    "price": 380,
    "originalPrice": 528,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.5,
    "reviews": 717,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop",
    "description": "Premium geometry box from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-28",
    "name": "Maped Whiteboard Marker Set Standard",
    "slug": "maped-whiteboard-marker-set-standard",
    "price": 130,
    "originalPrice": 130,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.9,
    "reviews": 1890,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    "description": "High-quality whiteboard marker set from Maped. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-29",
    "name": "DOMS Whiteboard Marker Set Basic",
    "slug": "doms-whiteboard-marker-set-basic-doms",
    "price": 200,
    "originalPrice": 200,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.9,
    "reviews": 777,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-30",
    "name": "Parker Whiteboard Marker Set Elite",
    "slug": "parker-whiteboard-marker-set-elite-parker",
    "price": 110,
    "originalPrice": 110,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.9,
    "reviews": 1064,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-31",
    "name": "Camlin Whiteboard Marker Set Premium",
    "slug": "camlin-whiteboard-marker-set-premium-camlin",
    "price": 150,
    "originalPrice": 222,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.9,
    "reviews": 415,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1582721478779-0ae163c7c9d7?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-32",
    "name": "Camlin Whiteboard Marker Set Standard",
    "slug": "camlin-whiteboard-marker-set-standard-camlin",
    "price": 160,
    "originalPrice": 237,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.5,
    "reviews": 1340,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1624222247344-5503fdd6081c?w=400&h=400&fit=crop",
    "description": "Premium whiteboard marker set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-33",
    "name": "Camlin Sticky Notes Pack Plus",
    "slug": "camlin-sticky-notes-pack-plus",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.7,
    "reviews": 820,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    "description": "High-quality sticky notes pack from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-34",
    "name": "Classmate Sticky Notes Pack Standard",
    "slug": "classmate-sticky-notes-pack-standard-classmate",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.5,
    "reviews": 232,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-35",
    "name": "Uniball Sticky Notes Pack Pro",
    "slug": "uniball-sticky-notes-pack-pro-uniball",
    "price": 150,
    "originalPrice": 195,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.9,
    "reviews": 536,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-36",
    "name": "Staedtler Sticky Notes Pack Plus",
    "slug": "staedtler-sticky-notes-pack-plus-staedtler",
    "price": 110,
    "originalPrice": 124,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.5,
    "reviews": 1342,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-37",
    "name": "Linc Sticky Notes Pack Plus",
    "slug": "linc-sticky-notes-pack-plus-linc",
    "price": 100,
    "originalPrice": 100,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.8,
    "reviews": 155,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400&h=400&fit=crop",
    "description": "Premium sticky notes pack from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-38",
    "name": "Staedtler Paper Clips Set Deluxe",
    "slug": "staedtler-paper-clips-set-deluxe",
    "price": 70,
    "originalPrice": 93,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 5,
    "reviews": 1153,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=400&h=400&fit=crop",
    "description": "High-quality paper clips set from Staedtler. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-39",
    "name": "DOMS Paper Clips Set Standard",
    "slug": "doms-paper-clips-set-standard-doms",
    "price": 50,
    "originalPrice": 50,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.3,
    "reviews": 785,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585237652354-ec8b2e1d4c8c?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-40",
    "name": "Uniball Paper Clips Set Plus",
    "slug": "uniball-paper-clips-set-plus-uniball",
    "price": 90,
    "originalPrice": 90,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.6,
    "reviews": 490,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-41",
    "name": "Parker Paper Clips Set Plus",
    "slug": "parker-paper-clips-set-plus-parker",
    "price": 80,
    "originalPrice": 119,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.2,
    "reviews": 258,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1622560540604-9e16e0c2c750?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-42",
    "name": "Classmate Paper Clips Set Deluxe",
    "slug": "classmate-paper-clips-set-deluxe-classmate",
    "price": 80,
    "originalPrice": 80,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.8,
    "reviews": 32,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551538827-6c037c2a0f7d?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-43",
    "name": "Staedtler Paper Clips Set Pro",
    "slug": "staedtler-paper-clips-set-pro-staedtler",
    "price": 80,
    "originalPrice": 128,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 3.3,
    "reviews": 820,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602872057400-2bd3d6d6e7c2?w=400&h=400&fit=crop",
    "description": "Premium paper clips set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-44",
    "name": "Camlin Desk Organizer Ultra",
    "slug": "camlin-desk-organizer-ultra",
    "price": 410,
    "originalPrice": 410,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.6,
    "reviews": 1264,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    "description": "High-quality desk organizer from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-45",
    "name": "Uniball Desk Organizer Ultra",
    "slug": "uniball-desk-organizer-ultra-uniball",
    "price": 250,
    "originalPrice": 336,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.3,
    "reviews": 40,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-46",
    "name": "Camlin Desk Organizer Basic",
    "slug": "camlin-desk-organizer-basic-camlin",
    "price": 760,
    "originalPrice": 1039,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.6,
    "reviews": 146,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559561853-084c1d5c76f2?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-47",
    "name": "Staedtler Desk Organizer Basic",
    "slug": "staedtler-desk-organizer-basic-staedtler",
    "price": 410,
    "originalPrice": 410,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.6,
    "reviews": 940,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-48",
    "name": "Maped Desk Organizer Premium",
    "slug": "maped-desk-organizer-premium-maped",
    "price": 380,
    "originalPrice": 468,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.5,
    "reviews": 787,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-49",
    "name": "Camlin Desk Organizer Plus",
    "slug": "camlin-desk-organizer-plus-camlin",
    "price": 380,
    "originalPrice": 461,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.8,
    "reviews": 775,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
    "description": "Premium desk organizer from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-50",
    "name": "DOMS File Folder Set Pro",
    "slug": "doms-file-folder-set-pro",
    "price": 290,
    "originalPrice": 408,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4,
    "reviews": 919,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    "description": "High-quality file folder set from DOMS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-51",
    "name": "Faber-Castell File Folder Set",
    "slug": "faber-castell-file-folder-set-faber-castell",
    "price": 250,
    "originalPrice": 250,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.9,
    "reviews": 415,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-52",
    "name": "DOMS File Folder Set Ultra",
    "slug": "doms-file-folder-set-ultra-doms",
    "price": 200,
    "originalPrice": 276,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.1,
    "reviews": 1231,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    "description": "Premium file folder set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-53",
    "name": "Parker File Folder Set Elite",
    "slug": "parker-file-folder-set-elite-parker",
    "price": 120,
    "originalPrice": 155,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.5,
    "reviews": 573,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-54",
    "name": "Staedtler File Folder Set Plus",
    "slug": "staedtler-file-folder-set-plus-staedtler",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.6,
    "reviews": 1091,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1551698618-1dfe5facc98d?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-55",
    "name": "Staedtler File Folder Set Standard",
    "slug": "staedtler-file-folder-set-standard-staedtler",
    "price": 220,
    "originalPrice": 340,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3,
    "reviews": 467,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    "description": "Premium file folder set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-56",
    "name": "Staedtler Calculator",
    "slug": "staedtler-calculator",
    "price": 1490,
    "originalPrice": 1799,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.9,
    "reviews": 735,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1599733589046-10c7f0f8e3e6?w=400&h=400&fit=crop",
    "description": "High-quality calculator from Staedtler. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-57",
    "name": "Navneet Calculator Plus",
    "slug": "navneet-calculator-plus-navneet",
    "price": 350,
    "originalPrice": 390,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.5,
    "reviews": 337,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=400&fit=crop",
    "description": "Premium calculator from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-58",
    "name": "Classmate Calculator Basic",
    "slug": "classmate-calculator-basic-classmate",
    "price": 790,
    "originalPrice": 790,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4,
    "reviews": 325,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    "description": "Premium calculator from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-59",
    "name": "Faber-Castell Calculator Deluxe",
    "slug": "faber-castell-calculator-deluxe-faber-castell",
    "price": 230,
    "originalPrice": 230,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.3,
    "reviews": 814,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    "description": "Premium calculator from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-60",
    "name": "Parker Calculator Ultra",
    "slug": "parker-calculator-ultra-parker",
    "price": 690,
    "originalPrice": 690,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.7,
    "reviews": 990,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    "description": "Premium calculator from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-61",
    "name": "Parker Calculator Plus",
    "slug": "parker-calculator-plus-parker",
    "price": 1370,
    "originalPrice": 1370,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.4,
    "reviews": 896,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop",
    "description": "Premium calculator from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-62",
    "name": "Faber-Castell Stapler with Pins Ultra",
    "slug": "faber-castell-stapler-with-pins-ultra",
    "price": 120,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.7,
    "reviews": 1895,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop",
    "description": "High-quality stapler with pins from Faber-Castell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-63",
    "name": "Uniball Stapler with Pins Plus",
    "slug": "uniball-stapler-with-pins-plus-uniball",
    "price": 340,
    "originalPrice": 340,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.8,
    "reviews": 1373,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-64",
    "name": "Classmate Stapler with Pins Ultra",
    "slug": "classmate-stapler-with-pins-ultra-classmate",
    "price": 200,
    "originalPrice": 264,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.5,
    "reviews": 1399,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1591384468290-1e4f4b1f2c8a?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-65",
    "name": "Linc Stapler with Pins Standard",
    "slug": "linc-stapler-with-pins-standard-linc",
    "price": 280,
    "originalPrice": 280,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.1,
    "reviews": 1023,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-66",
    "name": "Maped Stapler with Pins Deluxe",
    "slug": "maped-stapler-with-pins-deluxe-maped",
    "price": 300,
    "originalPrice": 300,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.9,
    "reviews": 1326,
    "featured": false,
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-67",
    "name": "Classmate Stapler with Pins Elite",
    "slug": "classmate-stapler-with-pins-elite-classmate",
    "price": 220,
    "originalPrice": 340,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.5,
    "reviews": 293,
    "featured": true,
    "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    "description": "Premium stapler with pins from Classmate. Features cutting-edge technology and superior build quality.",
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

