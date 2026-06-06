// ── Product Data ──
// 513 products across 8 categories

const products = [
  {
    "id": "el-1",
    "name": "Philips Wireless Headphones Ultra",
    "slug": "philips-wireless-headphones-ultra",
    "price": 6680,
    "originalPrice": 6680,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.3,
    "reviews": 1980,
    "featured": false,
    "image": "https://picsum.photos/seed/philips-wireless-headphones-ultra/400/400",
    "description": "High-quality wireless headphones from Philips. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-2",
    "name": "Apple Wireless Headphones Plus",
    "slug": "apple-wireless-headphones-plus-apple",
    "price": 2480,
    "originalPrice": 3806,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.5,
    "reviews": 1021,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-wireless-headphones-plus-apple/400/400",
    "description": "Premium wireless headphones from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-3",
    "name": "pTron Wireless Headphones Deluxe",
    "slug": "ptron-wireless-headphones-deluxe-ptron",
    "price": 5640,
    "originalPrice": 8857,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.4,
    "reviews": 713,
    "featured": false,
    "image": "https://picsum.photos/seed/ptron-wireless-headphones-deluxe-ptron/400/400",
    "description": "Premium wireless headphones from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-4",
    "name": "Dell Wireless Headphones",
    "slug": "dell-wireless-headphones-dell",
    "price": 2370,
    "originalPrice": 3517,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4,
    "reviews": 1064,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-wireless-headphones-dell/400/400",
    "description": "Premium wireless headphones from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-5",
    "name": "Xiaomi Wireless Headphones Plus",
    "slug": "xiaomi-wireless-headphones-plus-xiaomi",
    "price": 7310,
    "originalPrice": 8282,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.5,
    "reviews": 541,
    "featured": false,
    "image": "https://picsum.photos/seed/xiaomi-wireless-headphones-plus-xiaomi/400/400",
    "description": "Premium wireless headphones from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-6",
    "name": "JBL Wireless Headphones Elite",
    "slug": "jbl-wireless-headphones-elite-jbl",
    "price": 5840,
    "originalPrice": 5840,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.9,
    "reviews": 383,
    "featured": false,
    "image": "https://picsum.photos/seed/jbl-wireless-headphones-elite-jbl/400/400",
    "description": "Premium wireless headphones from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-7",
    "name": "Philips Bluetooth Speaker Premium",
    "slug": "philips-bluetooth-speaker-premium",
    "price": 4810,
    "originalPrice": 6938,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.2,
    "reviews": 1726,
    "featured": false,
    "image": "https://picsum.photos/seed/philips-bluetooth-speaker-premium/400/400",
    "description": "High-quality bluetooth speaker from Philips. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-8",
    "name": "OnePlus Bluetooth Speaker Premium",
    "slug": "oneplus-bluetooth-speaker-premium-oneplus",
    "price": 2870,
    "originalPrice": 4410,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.1,
    "reviews": 152,
    "featured": false,
    "image": "https://picsum.photos/seed/oneplus-bluetooth-speaker-premium-oneplus/400/400",
    "description": "Premium bluetooth speaker from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-9",
    "name": "Realme Bluetooth Speaker",
    "slug": "realme-bluetooth-speaker-realme",
    "price": 4590,
    "originalPrice": 6325,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.9,
    "reviews": 425,
    "featured": true,
    "image": "https://picsum.photos/seed/realme-bluetooth-speaker-realme/400/400",
    "description": "Premium bluetooth speaker from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-10",
    "name": "HP Bluetooth Speaker",
    "slug": "hp-bluetooth-speaker-hp",
    "price": 4370,
    "originalPrice": 4370,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 3.1,
    "reviews": 760,
    "featured": false,
    "image": "https://picsum.photos/seed/hp-bluetooth-speaker-hp/400/400",
    "description": "Premium bluetooth speaker from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-11",
    "name": "boAt Bluetooth Speaker Ultra",
    "slug": "boat-bluetooth-speaker-ultra-boat",
    "price": 4790,
    "originalPrice": 7196,
    "category": "Electronics",
    "tags": [
      "audio",
      "wireless",
      "speaker"
    ],
    "rating": 4.2,
    "reviews": 799,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-bluetooth-speaker-ultra-boat/400/400",
    "description": "Premium bluetooth speaker from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-12",
    "name": "OnePlus USB-C Hub Deluxe",
    "slug": "oneplus-usb-c-hub-deluxe",
    "price": 1570,
    "originalPrice": 2387,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.9,
    "reviews": 1214,
    "featured": false,
    "image": "https://picsum.photos/seed/oneplus-usb-c-hub-deluxe/400/400",
    "description": "High-quality usb-c hub from OnePlus. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-13",
    "name": "Apple USB-C Hub",
    "slug": "apple-usb-c-hub-apple",
    "price": 690,
    "originalPrice": 690,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.2,
    "reviews": 1349,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-usb-c-hub-apple/400/400",
    "description": "Premium usb-c hub from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-14",
    "name": "Philips USB-C Hub",
    "slug": "philips-usb-c-hub-philips",
    "price": 880,
    "originalPrice": 1344,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.5,
    "reviews": 946,
    "featured": false,
    "image": "https://picsum.photos/seed/philips-usb-c-hub-philips/400/400",
    "description": "Premium usb-c hub from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-15",
    "name": "Realme USB-C Hub Elite",
    "slug": "realme-usb-c-hub-elite-realme",
    "price": 1380,
    "originalPrice": 1535,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.4,
    "reviews": 699,
    "featured": false,
    "image": "https://picsum.photos/seed/realme-usb-c-hub-elite-realme/400/400",
    "description": "Premium usb-c hub from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-16",
    "name": "JBL USB-C Hub Elite",
    "slug": "jbl-usb-c-hub-elite-jbl",
    "price": 450,
    "originalPrice": 675,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 3.3,
    "reviews": 437,
    "featured": false,
    "image": "https://picsum.photos/seed/jbl-usb-c-hub-elite-jbl/400/400",
    "description": "Premium usb-c hub from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-17",
    "name": "Philips USB-C Hub Pro",
    "slug": "philips-usb-c-hub-pro-philips",
    "price": 1830,
    "originalPrice": 2921,
    "category": "Electronics",
    "tags": [
      "accessories",
      "usbc",
      "hub"
    ],
    "rating": 4.8,
    "reviews": 483,
    "featured": false,
    "image": "https://picsum.photos/seed/philips-usb-c-hub-pro-philips/400/400",
    "description": "Premium usb-c hub from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-18",
    "name": "Bose Wireless Mouse",
    "slug": "bose-wireless-mouse",
    "price": 1530,
    "originalPrice": 1530,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.6,
    "reviews": 453,
    "featured": false,
    "image": "https://picsum.photos/seed/bose-wireless-mouse/400/400",
    "description": "High-quality wireless mouse from Bose. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-19",
    "name": "Apple Wireless Mouse Premium",
    "slug": "apple-wireless-mouse-premium-apple",
    "price": 520,
    "originalPrice": 520,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.8,
    "reviews": 316,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-wireless-mouse-premium-apple/400/400",
    "description": "Premium wireless mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-20",
    "name": "Panasonic Wireless Mouse",
    "slug": "panasonic-wireless-mouse-panasonic",
    "price": 1080,
    "originalPrice": 1595,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.3,
    "reviews": 870,
    "featured": false,
    "image": "https://picsum.photos/seed/panasonic-wireless-mouse-panasonic/400/400",
    "description": "Premium wireless mouse from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-21",
    "name": "Apple Wireless Mouse Basic",
    "slug": "apple-wireless-mouse-basic-apple",
    "price": 2120,
    "originalPrice": 2120,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 3.7,
    "reviews": 1214,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-wireless-mouse-basic-apple/400/400",
    "description": "Premium wireless mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-22",
    "name": "Philips Wireless Mouse Standard",
    "slug": "philips-wireless-mouse-standard-philips",
    "price": 1200,
    "originalPrice": 1200,
    "category": "Electronics",
    "tags": [
      "accessories",
      "mouse",
      "wireless"
    ],
    "rating": 4.2,
    "reviews": 963,
    "featured": false,
    "image": "https://picsum.photos/seed/philips-wireless-mouse-standard-philips/400/400",
    "description": "Premium wireless mouse from Philips. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-23",
    "name": "Xiaomi Smart Band Deluxe",
    "slug": "xiaomi-smart-band-deluxe",
    "price": 3000,
    "originalPrice": 3941,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.6,
    "reviews": 716,
    "featured": false,
    "image": "https://picsum.photos/seed/xiaomi-smart-band-deluxe/400/400",
    "description": "High-quality smart band from Xiaomi. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-24",
    "name": "Panasonic Smart Band Pro",
    "slug": "panasonic-smart-band-pro-panasonic",
    "price": 2340,
    "originalPrice": 2802,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.5,
    "reviews": 778,
    "featured": false,
    "image": "https://picsum.photos/seed/panasonic-smart-band-pro-panasonic/400/400",
    "description": "Premium smart band from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-25",
    "name": "Realme Smart Band Premium",
    "slug": "realme-smart-band-premium-realme",
    "price": 3640,
    "originalPrice": 3640,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.8,
    "reviews": 324,
    "featured": false,
    "image": "https://picsum.photos/seed/realme-smart-band-premium-realme/400/400",
    "description": "Premium smart band from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-26",
    "name": "LG Smart Band Deluxe",
    "slug": "lg-smart-band-deluxe-lg",
    "price": 2360,
    "originalPrice": 3448,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.5,
    "reviews": 761,
    "featured": false,
    "image": "https://picsum.photos/seed/lg-smart-band-deluxe-lg/400/400",
    "description": "Premium smart band from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-27",
    "name": "LG Smart Band Pro",
    "slug": "lg-smart-band-pro-lg",
    "price": 2490,
    "originalPrice": 3456,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 4.1,
    "reviews": 1105,
    "featured": false,
    "image": "https://picsum.photos/seed/lg-smart-band-pro-lg/400/400",
    "description": "Premium smart band from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-28",
    "name": "Samsung Smart Band",
    "slug": "samsung-smart-band-samsung",
    "price": 1960,
    "originalPrice": 2861,
    "category": "Electronics",
    "tags": [
      "wearable",
      "fitness",
      "smartband"
    ],
    "rating": 3.2,
    "reviews": 233,
    "featured": false,
    "image": "https://picsum.photos/seed/samsung-smart-band-samsung/400/400",
    "description": "Premium smart band from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-29",
    "name": "OnePlus Power Bank Pro",
    "slug": "oneplus-power-bank-pro",
    "price": 780,
    "originalPrice": 1048,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.9,
    "reviews": 260,
    "featured": false,
    "image": "https://picsum.photos/seed/oneplus-power-bank-pro/400/400",
    "description": "High-quality power bank from OnePlus. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-30",
    "name": "boAt Power Bank Standard",
    "slug": "boat-power-bank-standard-boat",
    "price": 2330,
    "originalPrice": 2330,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.8,
    "reviews": 626,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-power-bank-standard-boat/400/400",
    "description": "Premium power bank from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-31",
    "name": "LG Power Bank",
    "slug": "lg-power-bank-lg",
    "price": 1080,
    "originalPrice": 1439,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.3,
    "reviews": 1237,
    "featured": false,
    "image": "https://picsum.photos/seed/lg-power-bank-lg/400/400",
    "description": "Premium power bank from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-32",
    "name": "Xiaomi Power Bank Ultra",
    "slug": "xiaomi-power-bank-ultra-xiaomi",
    "price": 2820,
    "originalPrice": 3123,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.9,
    "reviews": 1261,
    "featured": true,
    "image": "https://picsum.photos/seed/xiaomi-power-bank-ultra-xiaomi/400/400",
    "description": "Premium power bank from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-33",
    "name": "Bose Power Bank",
    "slug": "bose-power-bank-bose",
    "price": 600,
    "originalPrice": 600,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 3.2,
    "reviews": 1200,
    "featured": false,
    "image": "https://picsum.photos/seed/bose-power-bank-bose/400/400",
    "description": "Premium power bank from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-34",
    "name": "JBL Power Bank Elite",
    "slug": "jbl-power-bank-elite-jbl",
    "price": 1650,
    "originalPrice": 1650,
    "category": "Electronics",
    "tags": [
      "charger",
      "portable",
      "powerbank"
    ],
    "rating": 4.1,
    "reviews": 110,
    "featured": false,
    "image": "https://picsum.photos/seed/jbl-power-bank-elite-jbl/400/400",
    "description": "Premium power bank from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-35",
    "name": "boAt HDMI Cable Basic",
    "slug": "boat-hdmi-cable-basic",
    "price": 460,
    "originalPrice": 621,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4,
    "reviews": 957,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-hdmi-cable-basic/400/400",
    "description": "High-quality hdmi cable from boAt. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-36",
    "name": "LG HDMI Cable Plus",
    "slug": "lg-hdmi-cable-plus-lg",
    "price": 280,
    "originalPrice": 280,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.9,
    "reviews": 178,
    "featured": false,
    "image": "https://picsum.photos/seed/lg-hdmi-cable-plus-lg/400/400",
    "description": "Premium hdmi cable from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-37",
    "name": "pTron HDMI Cable Ultra",
    "slug": "ptron-hdmi-cable-ultra-ptron",
    "price": 770,
    "originalPrice": 908,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 5,
    "reviews": 676,
    "featured": false,
    "image": "https://picsum.photos/seed/ptron-hdmi-cable-ultra-ptron/400/400",
    "description": "Premium hdmi cable from pTron. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-38",
    "name": "Panasonic HDMI Cable Deluxe",
    "slug": "panasonic-hdmi-cable-deluxe-panasonic",
    "price": 750,
    "originalPrice": 919,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 3.8,
    "reviews": 780,
    "featured": false,
    "image": "https://picsum.photos/seed/panasonic-hdmi-cable-deluxe-panasonic/400/400",
    "description": "Premium hdmi cable from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-39",
    "name": "boAt HDMI Cable Premium",
    "slug": "boat-hdmi-cable-premium-boat",
    "price": 430,
    "originalPrice": 430,
    "category": "Electronics",
    "tags": [
      "accessories",
      "cable",
      "hdmi"
    ],
    "rating": 4.2,
    "reviews": 1056,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-hdmi-cable-premium-boat/400/400",
    "description": "Premium hdmi cable from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-40",
    "name": "Apple Webcam Premium",
    "slug": "apple-webcam-premium",
    "price": 3870,
    "originalPrice": 3870,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.3,
    "reviews": 1739,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-webcam-premium/400/400",
    "description": "High-quality webcam from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-41",
    "name": "Sony Webcam Basic",
    "slug": "sony-webcam-basic-sony",
    "price": 4990,
    "originalPrice": 6194,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4.1,
    "reviews": 773,
    "featured": false,
    "image": "https://picsum.photos/seed/sony-webcam-basic-sony/400/400",
    "description": "Premium webcam from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-42",
    "name": "Samsung Webcam Standard",
    "slug": "samsung-webcam-standard-samsung",
    "price": 3280,
    "originalPrice": 4859,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.4,
    "reviews": 221,
    "featured": false,
    "image": "https://picsum.photos/seed/samsung-webcam-standard-samsung/400/400",
    "description": "Premium webcam from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-43",
    "name": "Sony Webcam Pro",
    "slug": "sony-webcam-pro-sony",
    "price": 1090,
    "originalPrice": 1610,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 3.3,
    "reviews": 1238,
    "featured": false,
    "image": "https://picsum.photos/seed/sony-webcam-pro-sony/400/400",
    "description": "Premium webcam from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-44",
    "name": "HP Webcam",
    "slug": "hp-webcam-hp",
    "price": 3630,
    "originalPrice": 3630,
    "category": "Electronics",
    "tags": [
      "camera",
      "webcam"
    ],
    "rating": 4,
    "reviews": 628,
    "featured": false,
    "image": "https://picsum.photos/seed/hp-webcam-hp/400/400",
    "description": "Premium webcam from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-45",
    "name": "Philips Smart Plug Pro",
    "slug": "philips-smart-plug-pro",
    "price": 710,
    "originalPrice": 710,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4,
    "reviews": 314,
    "featured": false,
    "image": "https://picsum.photos/seed/philips-smart-plug-pro/400/400",
    "description": "High-quality smart plug from Philips. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "el-46",
    "name": "LG Smart Plug Premium",
    "slug": "lg-smart-plug-premium-lg",
    "price": 980,
    "originalPrice": 980,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4.6,
    "reviews": 1483,
    "featured": false,
    "image": "https://picsum.photos/seed/lg-smart-plug-premium-lg/400/400",
    "description": "Premium smart plug from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-47",
    "name": "LG Smart Plug Elite",
    "slug": "lg-smart-plug-elite-lg",
    "price": 1050,
    "originalPrice": 1612,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.9,
    "reviews": 176,
    "featured": false,
    "image": "https://picsum.photos/seed/lg-smart-plug-elite-lg/400/400",
    "description": "Premium smart plug from LG. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-48",
    "name": "Panasonic Smart Plug Elite",
    "slug": "panasonic-smart-plug-elite-panasonic",
    "price": 750,
    "originalPrice": 912,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 3.6,
    "reviews": 750,
    "featured": false,
    "image": "https://picsum.photos/seed/panasonic-smart-plug-elite-panasonic/400/400",
    "description": "Premium smart plug from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-49",
    "name": "Apple Smart Plug Ultra",
    "slug": "apple-smart-plug-ultra-apple",
    "price": 730,
    "originalPrice": 1053,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 4,
    "reviews": 1024,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-smart-plug-ultra-apple/400/400",
    "description": "Premium smart plug from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-50",
    "name": "Xiaomi Smart Plug Ultra",
    "slug": "xiaomi-smart-plug-ultra-xiaomi",
    "price": 450,
    "originalPrice": 450,
    "category": "Electronics",
    "tags": [
      "smart-home",
      "wifi"
    ],
    "rating": 5,
    "reviews": 823,
    "featured": false,
    "image": "https://picsum.photos/seed/xiaomi-smart-plug-ultra-xiaomi/400/400",
    "description": "Premium smart plug from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-51",
    "name": "Philips LED Strip Lights",
    "slug": "philips-led-strip-lights",
    "price": 1230,
    "originalPrice": 1621,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4,
    "reviews": 1452,
    "featured": false,
    "image": "https://picsum.photos/seed/philips-led-strip-lights/400/400",
    "description": "High-quality led strip lights from Philips. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-52",
    "name": "boAt LED Strip Lights Premium",
    "slug": "boat-led-strip-lights-premium-boat",
    "price": 860,
    "originalPrice": 978,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 921,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-led-strip-lights-premium-boat/400/400",
    "description": "Premium led strip lights from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-53",
    "name": "boAt LED Strip Lights Pro",
    "slug": "boat-led-strip-lights-pro-boat",
    "price": 490,
    "originalPrice": 729,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.2,
    "reviews": 292,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-led-strip-lights-pro-boat/400/400",
    "description": "Premium led strip lights from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-54",
    "name": "JBL LED Strip Lights Basic",
    "slug": "jbl-led-strip-lights-basic-jbl",
    "price": 590,
    "originalPrice": 734,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.2,
    "reviews": 225,
    "featured": false,
    "image": "https://picsum.photos/seed/jbl-led-strip-lights-basic-jbl/400/400",
    "description": "Premium led strip lights from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-55",
    "name": "Panasonic LED Strip Lights Deluxe",
    "slug": "panasonic-led-strip-lights-deluxe-panasonic",
    "price": 610,
    "originalPrice": 610,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 3.5,
    "reviews": 572,
    "featured": false,
    "image": "https://picsum.photos/seed/panasonic-led-strip-lights-deluxe-panasonic/400/400",
    "description": "Premium led strip lights from Panasonic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-56",
    "name": "Realme LED Strip Lights Standard",
    "slug": "realme-led-strip-lights-standard-realme",
    "price": 820,
    "originalPrice": 820,
    "category": "Electronics",
    "tags": [
      "lighting",
      "led",
      "rgb"
    ],
    "rating": 4.7,
    "reviews": 1201,
    "featured": false,
    "image": "https://picsum.photos/seed/realme-led-strip-lights-standard-realme/400/400",
    "description": "Premium led strip lights from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-57",
    "name": "OnePlus Memory Card 64GB Basic",
    "slug": "oneplus-memory-card-64gb-basic",
    "price": 630,
    "originalPrice": 810,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4,
    "reviews": 1487,
    "featured": true,
    "image": "https://picsum.photos/seed/oneplus-memory-card-64gb-basic/400/400",
    "description": "High-quality memory card 64gb from OnePlus. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-58",
    "name": "Dell Memory Card 64GB Basic",
    "slug": "dell-memory-card-64gb-basic-dell",
    "price": 920,
    "originalPrice": 1242,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3,
    "reviews": 423,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-memory-card-64gb-basic-dell/400/400",
    "description": "Premium memory card 64gb from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "el-59",
    "name": "Bose Memory Card 64GB Plus",
    "slug": "bose-memory-card-64gb-plus-bose",
    "price": 630,
    "originalPrice": 776,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 4.6,
    "reviews": 395,
    "featured": false,
    "image": "https://picsum.photos/seed/bose-memory-card-64gb-plus-bose/400/400",
    "description": "Premium memory card 64gb from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-60",
    "name": "Sony Memory Card 64GB Standard",
    "slug": "sony-memory-card-64gb-standard-sony",
    "price": 790,
    "originalPrice": 1008,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3.7,
    "reviews": 618,
    "featured": false,
    "image": "https://picsum.photos/seed/sony-memory-card-64gb-standard-sony/400/400",
    "description": "Premium memory card 64gb from Sony. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-61",
    "name": "boAt Memory Card 64GB Elite",
    "slug": "boat-memory-card-64gb-elite-boat",
    "price": 960,
    "originalPrice": 1494,
    "category": "Electronics",
    "tags": [
      "storage",
      "memory"
    ],
    "rating": 3,
    "reviews": 214,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-memory-card-64gb-elite-boat/400/400",
    "description": "Premium memory card 64gb from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-62",
    "name": "boAt Phone Case Basic",
    "slug": "boat-phone-case-basic",
    "price": 300,
    "originalPrice": 300,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.7,
    "reviews": 449,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-phone-case-basic/400/400",
    "description": "High-quality phone case from boAt. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-63",
    "name": "Dell Phone Case Pro",
    "slug": "dell-phone-case-pro-dell",
    "price": 610,
    "originalPrice": 681,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 4.4,
    "reviews": 709,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-phone-case-pro-dell/400/400",
    "description": "Premium phone case from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-64",
    "name": "Dell Phone Case Standard",
    "slug": "dell-phone-case-standard-dell",
    "price": 440,
    "originalPrice": 682,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.8,
    "reviews": 801,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-phone-case-standard-dell/400/400",
    "description": "Premium phone case from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-65",
    "name": "HP Phone Case Ultra",
    "slug": "hp-phone-case-ultra-hp",
    "price": 180,
    "originalPrice": 226,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.1,
    "reviews": 1195,
    "featured": false,
    "image": "https://picsum.photos/seed/hp-phone-case-ultra-hp/400/400",
    "description": "Premium phone case from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-66",
    "name": "Apple Phone Case Basic",
    "slug": "apple-phone-case-basic-apple",
    "price": 340,
    "originalPrice": 507,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.4,
    "reviews": 109,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-phone-case-basic-apple/400/400",
    "description": "Premium phone case from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-67",
    "name": "boAt Phone Case Pro",
    "slug": "boat-phone-case-pro-boat",
    "price": 650,
    "originalPrice": 864,
    "category": "Electronics",
    "tags": [
      "accessories",
      "phone-case"
    ],
    "rating": 3.3,
    "reviews": 245,
    "featured": false,
    "image": "https://picsum.photos/seed/boat-phone-case-pro-boat/400/400",
    "description": "Premium phone case from boAt. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-68",
    "name": "Sony Screen Guard Premium",
    "slug": "sony-screen-guard-premium",
    "price": 260,
    "originalPrice": 260,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4,
    "reviews": 1637,
    "featured": false,
    "image": "https://picsum.photos/seed/sony-screen-guard-premium/400/400",
    "description": "High-quality screen guard from Sony. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-69",
    "name": "Realme Screen Guard Premium",
    "slug": "realme-screen-guard-premium-realme",
    "price": 320,
    "originalPrice": 320,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.5,
    "reviews": 929,
    "featured": false,
    "image": "https://picsum.photos/seed/realme-screen-guard-premium-realme/400/400",
    "description": "Premium screen guard from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-70",
    "name": "OnePlus Screen Guard Standard",
    "slug": "oneplus-screen-guard-standard-oneplus",
    "price": 360,
    "originalPrice": 535,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.5,
    "reviews": 218,
    "featured": false,
    "image": "https://picsum.photos/seed/oneplus-screen-guard-standard-oneplus/400/400",
    "description": "Premium screen guard from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-71",
    "name": "Realme Screen Guard Standard",
    "slug": "realme-screen-guard-standard-realme",
    "price": 120,
    "originalPrice": 133,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 4.2,
    "reviews": 304,
    "featured": false,
    "image": "https://picsum.photos/seed/realme-screen-guard-standard-realme/400/400",
    "description": "Premium screen guard from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-72",
    "name": "Bose Screen Guard Basic",
    "slug": "bose-screen-guard-basic-bose",
    "price": 320,
    "originalPrice": 320,
    "category": "Electronics",
    "tags": [
      "accessories",
      "screen-guard"
    ],
    "rating": 3.5,
    "reviews": 795,
    "featured": false,
    "image": "https://picsum.photos/seed/bose-screen-guard-basic-bose/400/400",
    "description": "Premium screen guard from Bose. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-73",
    "name": "Dell Selfie Stick Tripod Plus",
    "slug": "dell-selfie-stick-tripod-plus",
    "price": 710,
    "originalPrice": 901,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.3,
    "reviews": 1838,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-selfie-stick-tripod-plus/400/400",
    "description": "High-quality selfie stick tripod from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "el-74",
    "name": "Apple Selfie Stick Tripod Premium",
    "slug": "apple-selfie-stick-tripod-premium-apple",
    "price": 990,
    "originalPrice": 1499,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.1,
    "reviews": 213,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-selfie-stick-tripod-premium-apple/400/400",
    "description": "Premium selfie stick tripod from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-75",
    "name": "Dell Selfie Stick Tripod Deluxe",
    "slug": "dell-selfie-stick-tripod-deluxe-dell",
    "price": 820,
    "originalPrice": 1040,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.4,
    "reviews": 214,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-selfie-stick-tripod-deluxe-dell/400/400",
    "description": "Premium selfie stick tripod from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-76",
    "name": "JBL Selfie Stick Tripod Plus",
    "slug": "jbl-selfie-stick-tripod-plus-jbl",
    "price": 330,
    "originalPrice": 380,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.1,
    "reviews": 1207,
    "featured": false,
    "image": "https://picsum.photos/seed/jbl-selfie-stick-tripod-plus-jbl/400/400",
    "description": "Premium selfie stick tripod from JBL. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-77",
    "name": "HP Selfie Stick Tripod Ultra",
    "slug": "hp-selfie-stick-tripod-ultra-hp",
    "price": 590,
    "originalPrice": 723,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 3.2,
    "reviews": 443,
    "featured": false,
    "image": "https://picsum.photos/seed/hp-selfie-stick-tripod-ultra-hp/400/400",
    "description": "Premium selfie stick tripod from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-78",
    "name": "Realme Selfie Stick Tripod Premium",
    "slug": "realme-selfie-stick-tripod-premium-realme",
    "price": 660,
    "originalPrice": 660,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.7,
    "reviews": 882,
    "featured": false,
    "image": "https://picsum.photos/seed/realme-selfie-stick-tripod-premium-realme/400/400",
    "description": "Premium selfie stick tripod from Realme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "el-79",
    "name": "OnePlus Selfie Stick Tripod Basic",
    "slug": "oneplus-selfie-stick-tripod-basic-oneplus",
    "price": 300,
    "originalPrice": 393,
    "category": "Electronics",
    "tags": [
      "camera",
      "tripod",
      "selfie"
    ],
    "rating": 4.9,
    "reviews": 389,
    "featured": false,
    "image": "https://picsum.photos/seed/oneplus-selfie-stick-tripod-basic-oneplus/400/400",
    "description": "Premium selfie stick tripod from OnePlus. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-1",
    "name": "Tommy Hilfiger Running Shoes Ultra",
    "slug": "tommy-hilfiger-running-shoes-ultra",
    "price": 5800,
    "originalPrice": 8309,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.3,
    "reviews": 1772,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-running-shoes-ultra/400/400",
    "description": "High-quality running shoes from Tommy Hilfiger. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-2",
    "name": "Tommy Hilfiger Running Shoes Plus",
    "slug": "tommy-hilfiger-running-shoes-plus-tommy-hilfiger",
    "price": 3580,
    "originalPrice": 3580,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.1,
    "reviews": 1215,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-running-shoes-plus-tommy-hilfiger/400/400",
    "description": "Premium running shoes from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-3",
    "name": "Fossil Running Shoes",
    "slug": "fossil-running-shoes-fossil",
    "price": 3590,
    "originalPrice": 4986,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.3,
    "reviews": 730,
    "featured": false,
    "image": "https://picsum.photos/seed/fossil-running-shoes-fossil/400/400",
    "description": "Premium running shoes from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-4",
    "name": "Tommy Hilfiger Running Shoes Premium",
    "slug": "tommy-hilfiger-running-shoes-premium-tommy-hilfiger",
    "price": 6620,
    "originalPrice": 6620,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.2,
    "reviews": 124,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-running-shoes-premium-tommy-hilfiger/400/400",
    "description": "Premium running shoes from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-5",
    "name": "Skechers Running Shoes Basic",
    "slug": "skechers-running-shoes-basic-skechers",
    "price": 6630,
    "originalPrice": 8589,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 3.9,
    "reviews": 804,
    "featured": false,
    "image": "https://picsum.photos/seed/skechers-running-shoes-basic-skechers/400/400",
    "description": "Premium running shoes from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-6",
    "name": "Nike Running Shoes",
    "slug": "nike-running-shoes-nike",
    "price": 2800,
    "originalPrice": 2800,
    "category": "Fashion",
    "tags": [
      "footwear",
      "running"
    ],
    "rating": 4.6,
    "reviews": 225,
    "featured": false,
    "image": "https://picsum.photos/seed/nike-running-shoes-nike/400/400",
    "description": "Premium running shoes from Nike. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-7",
    "name": "Roadster Casual Sneakers Pro",
    "slug": "roadster-casual-sneakers-pro",
    "price": 3190,
    "originalPrice": 3868,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.6,
    "reviews": 927,
    "featured": false,
    "image": "https://picsum.photos/seed/roadster-casual-sneakers-pro/400/400",
    "description": "High-quality casual sneakers from Roadster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-8",
    "name": "HRX Casual Sneakers Deluxe",
    "slug": "hrx-casual-sneakers-deluxe-hrx",
    "price": 3420,
    "originalPrice": 3420,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.4,
    "reviews": 624,
    "featured": false,
    "image": "https://picsum.photos/seed/hrx-casual-sneakers-deluxe-hrx/400/400",
    "description": "Premium casual sneakers from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-9",
    "name": "Levi's Casual Sneakers Ultra",
    "slug": "levi-s-casual-sneakers-ultra-levi-s",
    "price": 3420,
    "originalPrice": 4012,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 5,
    "reviews": 1026,
    "featured": false,
    "image": "https://picsum.photos/seed/levi-s-casual-sneakers-ultra-levi-s/400/400",
    "description": "Premium casual sneakers from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-10",
    "name": "H&M Casual Sneakers Standard",
    "slug": "h-m-casual-sneakers-standard-h-m",
    "price": 3950,
    "originalPrice": 5662,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.9,
    "reviews": 818,
    "featured": false,
    "image": "https://picsum.photos/seed/h-m-casual-sneakers-standard-h-m/400/400",
    "description": "Premium casual sneakers from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-11",
    "name": "Diesel Casual Sneakers Deluxe",
    "slug": "diesel-casual-sneakers-deluxe-diesel",
    "price": 3480,
    "originalPrice": 4871,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 4.1,
    "reviews": 519,
    "featured": false,
    "image": "https://picsum.photos/seed/diesel-casual-sneakers-deluxe-diesel/400/400",
    "description": "Premium casual sneakers from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-12",
    "name": "H&M Casual Sneakers Premium",
    "slug": "h-m-casual-sneakers-premium-h-m",
    "price": 3480,
    "originalPrice": 4401,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual",
      "sneakers"
    ],
    "rating": 3.1,
    "reviews": 383,
    "featured": false,
    "image": "https://picsum.photos/seed/h-m-casual-sneakers-premium-h-m/400/400",
    "description": "Premium casual sneakers from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-13",
    "name": "Ray-Ban Round Neck T-Shirt Premium",
    "slug": "ray-ban-round-neck-t-shirt-premium",
    "price": 700,
    "originalPrice": 700,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.2,
    "reviews": 371,
    "featured": false,
    "image": "https://picsum.photos/seed/ray-ban-round-neck-t-shirt-premium/400/400",
    "description": "High-quality round neck t-shirt from Ray-Ban. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-14",
    "name": "Levi's Round Neck T-Shirt",
    "slug": "levi-s-round-neck-t-shirt-levi-s",
    "price": 520,
    "originalPrice": 802,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3,
    "reviews": 435,
    "featured": false,
    "image": "https://picsum.photos/seed/levi-s-round-neck-t-shirt-levi-s/400/400",
    "description": "Premium round neck t-shirt from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-15",
    "name": "Tommy Hilfiger Round Neck T-Shirt Elite",
    "slug": "tommy-hilfiger-round-neck-t-shirt-elite-tommy-hilfiger",
    "price": 660,
    "originalPrice": 990,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3.9,
    "reviews": 315,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-round-neck-t-shirt-elite-tommy-hilfiger/400/400",
    "description": "Premium round neck t-shirt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-16",
    "name": "USPA Round Neck T-Shirt Standard",
    "slug": "uspa-round-neck-t-shirt-standard-uspa",
    "price": 1450,
    "originalPrice": 1801,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 4.5,
    "reviews": 1397,
    "featured": false,
    "image": "https://picsum.photos/seed/uspa-round-neck-t-shirt-standard-uspa/400/400",
    "description": "Premium round neck t-shirt from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-17",
    "name": "HRX Round Neck T-Shirt Ultra",
    "slug": "hrx-round-neck-t-shirt-ultra-hrx",
    "price": 560,
    "originalPrice": 560,
    "category": "Fashion",
    "tags": [
      "clothing",
      "tshirt",
      "cotton"
    ],
    "rating": 3,
    "reviews": 642,
    "featured": false,
    "image": "https://picsum.photos/seed/hrx-round-neck-t-shirt-ultra-hrx/400/400",
    "description": "Premium round neck t-shirt from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-18",
    "name": "Puma Denim Jeans Pro",
    "slug": "puma-denim-jeans-pro",
    "price": 2570,
    "originalPrice": 3307,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.7,
    "reviews": 315,
    "featured": false,
    "image": "https://picsum.photos/seed/puma-denim-jeans-pro/400/400",
    "description": "High-quality denim jeans from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-19",
    "name": "Wildcraft Denim Jeans Ultra",
    "slug": "wildcraft-denim-jeans-ultra-wildcraft",
    "price": 1210,
    "originalPrice": 1210,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.1,
    "reviews": 994,
    "featured": false,
    "image": "https://picsum.photos/seed/wildcraft-denim-jeans-ultra-wildcraft/400/400",
    "description": "Premium denim jeans from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-20",
    "name": "USPA Denim Jeans Pro",
    "slug": "uspa-denim-jeans-pro-uspa",
    "price": 1490,
    "originalPrice": 1813,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4.9,
    "reviews": 1054,
    "featured": false,
    "image": "https://picsum.photos/seed/uspa-denim-jeans-pro-uspa/400/400",
    "description": "Premium denim jeans from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-21",
    "name": "Ray-Ban Denim Jeans Ultra",
    "slug": "ray-ban-denim-jeans-ultra-ray-ban",
    "price": 2440,
    "originalPrice": 3398,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 3.5,
    "reviews": 692,
    "featured": false,
    "image": "https://picsum.photos/seed/ray-ban-denim-jeans-ultra-ray-ban/400/400",
    "description": "Premium denim jeans from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-22",
    "name": "Adidas Denim Jeans Pro",
    "slug": "adidas-denim-jeans-pro-adidas",
    "price": 1680,
    "originalPrice": 2035,
    "category": "Fashion",
    "tags": [
      "clothing",
      "jeans",
      "denim"
    ],
    "rating": 4,
    "reviews": 669,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-denim-jeans-pro-adidas/400/400",
    "description": "Premium denim jeans from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-23",
    "name": "HRX Formal Shirt Premium",
    "slug": "hrx-formal-shirt-premium",
    "price": 890,
    "originalPrice": 1315,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.1,
    "reviews": 1719,
    "featured": false,
    "image": "https://picsum.photos/seed/hrx-formal-shirt-premium/400/400",
    "description": "High-quality formal shirt from HRX. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-24",
    "name": "Tommy Hilfiger Formal Shirt Standard",
    "slug": "tommy-hilfiger-formal-shirt-standard-tommy-hilfiger",
    "price": 1540,
    "originalPrice": 1540,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.1,
    "reviews": 437,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-formal-shirt-standard-tommy-hilfiger/400/400",
    "description": "Premium formal shirt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-25",
    "name": "Roadster Formal Shirt Ultra",
    "slug": "roadster-formal-shirt-ultra-roadster",
    "price": 1330,
    "originalPrice": 1478,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 4.5,
    "reviews": 1274,
    "featured": false,
    "image": "https://picsum.photos/seed/roadster-formal-shirt-ultra-roadster/400/400",
    "description": "Premium formal shirt from Roadster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-26",
    "name": "Ray-Ban Formal Shirt Basic",
    "slug": "ray-ban-formal-shirt-basic-ray-ban",
    "price": 1690,
    "originalPrice": 1690,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.6,
    "reviews": 278,
    "featured": true,
    "image": "https://picsum.photos/seed/ray-ban-formal-shirt-basic-ray-ban/400/400",
    "description": "Premium formal shirt from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-27",
    "name": "Ray-Ban Formal Shirt Elite",
    "slug": "ray-ban-formal-shirt-elite-ray-ban",
    "price": 1470,
    "originalPrice": 2249,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shirt",
      "formal"
    ],
    "rating": 3.5,
    "reviews": 39,
    "featured": false,
    "image": "https://picsum.photos/seed/ray-ban-formal-shirt-elite-ray-ban/400/400",
    "description": "Premium formal shirt from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-28",
    "name": "Tommy Hilfiger Leather Belt",
    "slug": "tommy-hilfiger-leather-belt",
    "price": 730,
    "originalPrice": 730,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.8,
    "reviews": 1212,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-leather-belt/400/400",
    "description": "High-quality leather belt from Tommy Hilfiger. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-29",
    "name": "Ray-Ban Leather Belt Deluxe",
    "slug": "ray-ban-leather-belt-deluxe-ray-ban",
    "price": 1380,
    "originalPrice": 1929,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.8,
    "reviews": 769,
    "featured": false,
    "image": "https://picsum.photos/seed/ray-ban-leather-belt-deluxe-ray-ban/400/400",
    "description": "Premium leather belt from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-30",
    "name": "Tommy Hilfiger Leather Belt Ultra",
    "slug": "tommy-hilfiger-leather-belt-ultra-tommy-hilfiger",
    "price": 490,
    "originalPrice": 780,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.2,
    "reviews": 667,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-leather-belt-ultra-tommy-hilfiger/400/400",
    "description": "Premium leather belt from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-31",
    "name": "Wildcraft Leather Belt Deluxe",
    "slug": "wildcraft-leather-belt-deluxe-wildcraft",
    "price": 1320,
    "originalPrice": 1514,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 3.5,
    "reviews": 933,
    "featured": false,
    "image": "https://picsum.photos/seed/wildcraft-leather-belt-deluxe-wildcraft/400/400",
    "description": "Premium leather belt from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-32",
    "name": "HRX Leather Belt Deluxe",
    "slug": "hrx-leather-belt-deluxe-hrx",
    "price": 750,
    "originalPrice": 893,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.4,
    "reviews": 416,
    "featured": false,
    "image": "https://picsum.photos/seed/hrx-leather-belt-deluxe-hrx/400/400",
    "description": "Premium leather belt from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-33",
    "name": "Diesel Leather Belt Premium",
    "slug": "diesel-leather-belt-premium-diesel",
    "price": 570,
    "originalPrice": 744,
    "category": "Fashion",
    "tags": [
      "accessories",
      "belt",
      "leather"
    ],
    "rating": 4.4,
    "reviews": 885,
    "featured": false,
    "image": "https://picsum.photos/seed/diesel-leather-belt-premium-diesel/400/400",
    "description": "Premium leather belt from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-34",
    "name": "Tommy Hilfiger Sports Cap Ultra",
    "slug": "tommy-hilfiger-sports-cap-ultra",
    "price": 420,
    "originalPrice": 420,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.8,
    "reviews": 1651,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-sports-cap-ultra/400/400",
    "description": "High-quality sports cap from Tommy Hilfiger. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-35",
    "name": "USPA Sports Cap Plus",
    "slug": "uspa-sports-cap-plus-uspa",
    "price": 410,
    "originalPrice": 537,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.5,
    "reviews": 22,
    "featured": false,
    "image": "https://picsum.photos/seed/uspa-sports-cap-plus-uspa/400/400",
    "description": "Premium sports cap from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-36",
    "name": "Diesel Sports Cap",
    "slug": "diesel-sports-cap-diesel",
    "price": 280,
    "originalPrice": 348,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.4,
    "reviews": 1410,
    "featured": false,
    "image": "https://picsum.photos/seed/diesel-sports-cap-diesel/400/400",
    "description": "Premium sports cap from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-37",
    "name": "Tommy Hilfiger Sports Cap Deluxe",
    "slug": "tommy-hilfiger-sports-cap-deluxe-tommy-hilfiger",
    "price": 600,
    "originalPrice": 600,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 4.5,
    "reviews": 1327,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-sports-cap-deluxe-tommy-hilfiger/400/400",
    "description": "Premium sports cap from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-38",
    "name": "USPA Sports Cap Deluxe",
    "slug": "uspa-sports-cap-deluxe-uspa",
    "price": 590,
    "originalPrice": 590,
    "category": "Fashion",
    "tags": [
      "accessories",
      "cap",
      "sports"
    ],
    "rating": 3.8,
    "reviews": 573,
    "featured": false,
    "image": "https://picsum.photos/seed/uspa-sports-cap-deluxe-uspa/400/400",
    "description": "Premium sports cap from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-39",
    "name": "Roadster Wrist Watch Deluxe",
    "slug": "roadster-wrist-watch-deluxe",
    "price": 3130,
    "originalPrice": 4209,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4,
    "reviews": 1881,
    "featured": false,
    "image": "https://picsum.photos/seed/roadster-wrist-watch-deluxe/400/400",
    "description": "High-quality wrist watch from Roadster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-40",
    "name": "USPA Wrist Watch Plus",
    "slug": "uspa-wrist-watch-plus-uspa",
    "price": 1660,
    "originalPrice": 1901,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.6,
    "reviews": 1285,
    "featured": false,
    "image": "https://picsum.photos/seed/uspa-wrist-watch-plus-uspa/400/400",
    "description": "Premium wrist watch from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-41",
    "name": "Diesel Wrist Watch Premium",
    "slug": "diesel-wrist-watch-premium-diesel",
    "price": 3680,
    "originalPrice": 3680,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.4,
    "reviews": 911,
    "featured": false,
    "image": "https://picsum.photos/seed/diesel-wrist-watch-premium-diesel/400/400",
    "description": "Premium wrist watch from Diesel. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-42",
    "name": "Puma Wrist Watch Premium",
    "slug": "puma-wrist-watch-premium-puma",
    "price": 720,
    "originalPrice": 1002,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.5,
    "reviews": 916,
    "featured": false,
    "image": "https://picsum.photos/seed/puma-wrist-watch-premium-puma/400/400",
    "description": "Premium wrist watch from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-43",
    "name": "Puma Wrist Watch Plus",
    "slug": "puma-wrist-watch-plus-puma",
    "price": 3470,
    "originalPrice": 4909,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 4.8,
    "reviews": 559,
    "featured": false,
    "image": "https://picsum.photos/seed/puma-wrist-watch-plus-puma/400/400",
    "description": "Premium wrist watch from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-44",
    "name": "Zara Wrist Watch Plus",
    "slug": "zara-wrist-watch-plus-zara",
    "price": 3260,
    "originalPrice": 4540,
    "category": "Fashion",
    "tags": [
      "accessories",
      "watch",
      "premium"
    ],
    "rating": 3.5,
    "reviews": 227,
    "featured": false,
    "image": "https://picsum.photos/seed/zara-wrist-watch-plus-zara/400/400",
    "description": "Premium wrist watch from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-45",
    "name": "Puma Casual Shorts Elite",
    "slug": "puma-casual-shorts-elite",
    "price": 590,
    "originalPrice": 590,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.9,
    "reviews": 1335,
    "featured": false,
    "image": "https://picsum.photos/seed/puma-casual-shorts-elite/400/400",
    "description": "High-quality casual shorts from Puma. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-46",
    "name": "Levi's Casual Shorts Standard",
    "slug": "levi-s-casual-shorts-standard-levi-s",
    "price": 980,
    "originalPrice": 980,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.4,
    "reviews": 251,
    "featured": false,
    "image": "https://picsum.photos/seed/levi-s-casual-shorts-standard-levi-s/400/400",
    "description": "Premium casual shorts from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-47",
    "name": "HRX Casual Shorts Ultra",
    "slug": "hrx-casual-shorts-ultra-hrx",
    "price": 610,
    "originalPrice": 799,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.9,
    "reviews": 1201,
    "featured": false,
    "image": "https://picsum.photos/seed/hrx-casual-shorts-ultra-hrx/400/400",
    "description": "Premium casual shorts from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-48",
    "name": "Levi's Casual Shorts Basic",
    "slug": "levi-s-casual-shorts-basic-levi-s",
    "price": 1340,
    "originalPrice": 1563,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.8,
    "reviews": 1396,
    "featured": false,
    "image": "https://picsum.photos/seed/levi-s-casual-shorts-basic-levi-s/400/400",
    "description": "Premium casual shorts from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-49",
    "name": "H&M Casual Shorts Standard",
    "slug": "h-m-casual-shorts-standard-h-m",
    "price": 480,
    "originalPrice": 480,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.2,
    "reviews": 195,
    "featured": true,
    "image": "https://picsum.photos/seed/h-m-casual-shorts-standard-h-m/400/400",
    "description": "Premium casual shorts from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-50",
    "name": "Fossil Casual Shorts Basic",
    "slug": "fossil-casual-shorts-basic-fossil",
    "price": 830,
    "originalPrice": 1282,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 4.9,
    "reviews": 492,
    "featured": false,
    "image": "https://picsum.photos/seed/fossil-casual-shorts-basic-fossil/400/400",
    "description": "Premium casual shorts from Fossil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-51",
    "name": "HRX Casual Shorts Premium",
    "slug": "hrx-casual-shorts-premium-hrx",
    "price": 410,
    "originalPrice": 410,
    "category": "Fashion",
    "tags": [
      "clothing",
      "shorts",
      "casual"
    ],
    "rating": 3.1,
    "reviews": 419,
    "featured": false,
    "image": "https://picsum.photos/seed/hrx-casual-shorts-premium-hrx/400/400",
    "description": "Premium casual shorts from HRX. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-52",
    "name": "Adidas Winter Gloves Elite",
    "slug": "adidas-winter-gloves-elite",
    "price": 390,
    "originalPrice": 390,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.6,
    "reviews": 1048,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-winter-gloves-elite/400/400",
    "description": "High-quality winter gloves from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-53",
    "name": "Puma Winter Gloves Premium",
    "slug": "puma-winter-gloves-premium-puma",
    "price": 560,
    "originalPrice": 560,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.4,
    "reviews": 969,
    "featured": false,
    "image": "https://picsum.photos/seed/puma-winter-gloves-premium-puma/400/400",
    "description": "Premium winter gloves from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-54",
    "name": "Adidas Winter Gloves Standard",
    "slug": "adidas-winter-gloves-standard-adidas",
    "price": 270,
    "originalPrice": 421,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.1,
    "reviews": 213,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-winter-gloves-standard-adidas/400/400",
    "description": "Premium winter gloves from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "fa-55",
    "name": "Tommy Hilfiger Winter Gloves Pro",
    "slug": "tommy-hilfiger-winter-gloves-pro-tommy-hilfiger",
    "price": 740,
    "originalPrice": 1084,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.7,
    "reviews": 1358,
    "featured": true,
    "image": "https://picsum.photos/seed/tommy-hilfiger-winter-gloves-pro-tommy-hilfiger/400/400",
    "description": "Premium winter gloves from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-56",
    "name": "Skechers Winter Gloves Premium",
    "slug": "skechers-winter-gloves-premium-skechers",
    "price": 290,
    "originalPrice": 443,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 3.6,
    "reviews": 530,
    "featured": false,
    "image": "https://picsum.photos/seed/skechers-winter-gloves-premium-skechers/400/400",
    "description": "Premium winter gloves from Skechers. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-57",
    "name": "Tommy Hilfiger Winter Gloves Deluxe",
    "slug": "tommy-hilfiger-winter-gloves-deluxe-tommy-hilfiger",
    "price": 730,
    "originalPrice": 945,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.5,
    "reviews": 1435,
    "featured": true,
    "image": "https://picsum.photos/seed/tommy-hilfiger-winter-gloves-deluxe-tommy-hilfiger/400/400",
    "description": "Premium winter gloves from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-58",
    "name": "USPA Winter Gloves Pro",
    "slug": "uspa-winter-gloves-pro-uspa",
    "price": 370,
    "originalPrice": 370,
    "category": "Fashion",
    "tags": [
      "accessories",
      "gloves",
      "winter"
    ],
    "rating": 4.4,
    "reviews": 170,
    "featured": true,
    "image": "https://picsum.photos/seed/uspa-winter-gloves-pro-uspa/400/400",
    "description": "Premium winter gloves from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-59",
    "name": "USPA Sunglasses Standard",
    "slug": "uspa-sunglasses-standard",
    "price": 2890,
    "originalPrice": 2890,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.3,
    "reviews": 1118,
    "featured": false,
    "image": "https://picsum.photos/seed/uspa-sunglasses-standard/400/400",
    "description": "High-quality sunglasses from USPA. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "fa-60",
    "name": "Levi's Sunglasses Standard",
    "slug": "levi-s-sunglasses-standard-levi-s",
    "price": 2410,
    "originalPrice": 3073,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.8,
    "reviews": 111,
    "featured": false,
    "image": "https://picsum.photos/seed/levi-s-sunglasses-standard-levi-s/400/400",
    "description": "Premium sunglasses from Levi's. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-61",
    "name": "Wildcraft Sunglasses Premium",
    "slug": "wildcraft-sunglasses-premium-wildcraft",
    "price": 1890,
    "originalPrice": 1890,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 4.7,
    "reviews": 616,
    "featured": false,
    "image": "https://picsum.photos/seed/wildcraft-sunglasses-premium-wildcraft/400/400",
    "description": "Premium sunglasses from Wildcraft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-62",
    "name": "Tommy Hilfiger Sunglasses Standard",
    "slug": "tommy-hilfiger-sunglasses-standard-tommy-hilfiger",
    "price": 810,
    "originalPrice": 810,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 3.2,
    "reviews": 1286,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-sunglasses-standard-tommy-hilfiger/400/400",
    "description": "Premium sunglasses from Tommy Hilfiger. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-63",
    "name": "Zara Sunglasses Deluxe",
    "slug": "zara-sunglasses-deluxe-zara",
    "price": 2590,
    "originalPrice": 3088,
    "category": "Fashion",
    "tags": [
      "accessories",
      "sunglasses"
    ],
    "rating": 5,
    "reviews": 616,
    "featured": true,
    "image": "https://picsum.photos/seed/zara-sunglasses-deluxe-zara/400/400",
    "description": "Premium sunglasses from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-64",
    "name": "Tommy Hilfiger Wallet RFID Basic",
    "slug": "tommy-hilfiger-wallet-rfid-basic",
    "price": 820,
    "originalPrice": 1164,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4,
    "reviews": 532,
    "featured": false,
    "image": "https://picsum.photos/seed/tommy-hilfiger-wallet-rfid-basic/400/400",
    "description": "High-quality wallet rfid from Tommy Hilfiger. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "fa-65",
    "name": "H&M Wallet RFID",
    "slug": "h-m-wallet-rfid-h-m",
    "price": 1640,
    "originalPrice": 1956,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.4,
    "reviews": 519,
    "featured": false,
    "image": "https://picsum.photos/seed/h-m-wallet-rfid-h-m/400/400",
    "description": "Premium wallet rfid from H&M. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-66",
    "name": "Zara Wallet RFID Deluxe",
    "slug": "zara-wallet-rfid-deluxe-zara",
    "price": 1480,
    "originalPrice": 1897,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 4.3,
    "reviews": 669,
    "featured": false,
    "image": "https://picsum.photos/seed/zara-wallet-rfid-deluxe-zara/400/400",
    "description": "Premium wallet rfid from Zara. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-67",
    "name": "Ray-Ban Wallet RFID Ultra",
    "slug": "ray-ban-wallet-rfid-ultra-ray-ban",
    "price": 1420,
    "originalPrice": 1420,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.5,
    "reviews": 1014,
    "featured": true,
    "image": "https://picsum.photos/seed/ray-ban-wallet-rfid-ultra-ray-ban/400/400",
    "description": "Premium wallet rfid from Ray-Ban. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "fa-68",
    "name": "USPA Wallet RFID",
    "slug": "uspa-wallet-rfid-uspa",
    "price": 510,
    "originalPrice": 743,
    "category": "Fashion",
    "tags": [
      "accessories",
      "wallet",
      "leather"
    ],
    "rating": 3.7,
    "reviews": 309,
    "featured": false,
    "image": "https://picsum.photos/seed/uspa-wallet-rfid-uspa/400/400",
    "description": "Premium wallet rfid from USPA. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-1",
    "name": "Pigeon Non-Stick Tawa Ultra",
    "slug": "pigeon-non-stick-tawa-ultra",
    "price": 310,
    "originalPrice": 310,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.4,
    "reviews": 1378,
    "featured": false,
    "image": "https://picsum.photos/seed/pigeon-non-stick-tawa-ultra/400/400",
    "description": "High-quality non-stick tawa from Pigeon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-2",
    "name": "Milton Non-Stick Tawa Pro",
    "slug": "milton-non-stick-tawa-pro-milton",
    "price": 910,
    "originalPrice": 1266,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.1,
    "reviews": 1497,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-non-stick-tawa-pro-milton/400/400",
    "description": "Premium non-stick tawa from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-3",
    "name": "Pigeon Non-Stick Tawa Pro",
    "slug": "pigeon-non-stick-tawa-pro-pigeon",
    "price": 450,
    "originalPrice": 579,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.6,
    "reviews": 55,
    "featured": false,
    "image": "https://picsum.photos/seed/pigeon-non-stick-tawa-pro-pigeon/400/400",
    "description": "Premium non-stick tawa from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-4",
    "name": "Wakefit Non-Stick Tawa Pro",
    "slug": "wakefit-non-stick-tawa-pro-wakefit",
    "price": 1270,
    "originalPrice": 1794,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4.9,
    "reviews": 171,
    "featured": false,
    "image": "https://picsum.photos/seed/wakefit-non-stick-tawa-pro-wakefit/400/400",
    "description": "Premium non-stick tawa from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-5",
    "name": "Butterfly Non-Stick Tawa",
    "slug": "butterfly-non-stick-tawa-butterfly",
    "price": 500,
    "originalPrice": 500,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 3.3,
    "reviews": 1295,
    "featured": false,
    "image": "https://picsum.photos/seed/butterfly-non-stick-tawa-butterfly/400/400",
    "description": "Premium non-stick tawa from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-6",
    "name": "Pigeon Non-Stick Tawa Basic",
    "slug": "pigeon-non-stick-tawa-basic-pigeon",
    "price": 1370,
    "originalPrice": 1885,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cookware",
      "nonstick"
    ],
    "rating": 4,
    "reviews": 761,
    "featured": false,
    "image": "https://picsum.photos/seed/pigeon-non-stick-tawa-basic-pigeon/400/400",
    "description": "Premium non-stick tawa from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-7",
    "name": "Vidiem Microwave Safe Bowl Set Basic",
    "slug": "vidiem-microwave-safe-bowl-set-basic",
    "price": 360,
    "originalPrice": 529,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.4,
    "reviews": 636,
    "featured": false,
    "image": "https://picsum.photos/seed/vidiem-microwave-safe-bowl-set-basic/400/400",
    "description": "High-quality microwave safe bowl set from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-8",
    "name": "Milton Microwave Safe Bowl Set Premium",
    "slug": "milton-microwave-safe-bowl-set-premium-milton",
    "price": 570,
    "originalPrice": 570,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.1,
    "reviews": 1003,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-microwave-safe-bowl-set-premium-milton/400/400",
    "description": "Premium microwave safe bowl set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-9",
    "name": "Wakefit Microwave Safe Bowl Set Plus",
    "slug": "wakefit-microwave-safe-bowl-set-plus-wakefit",
    "price": 410,
    "originalPrice": 550,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.6,
    "reviews": 809,
    "featured": false,
    "image": "https://picsum.photos/seed/wakefit-microwave-safe-bowl-set-plus-wakefit/400/400",
    "description": "Premium microwave safe bowl set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-10",
    "name": "Milton Microwave Safe Bowl Set Basic",
    "slug": "milton-microwave-safe-bowl-set-basic-milton",
    "price": 770,
    "originalPrice": 770,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.9,
    "reviews": 763,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-microwave-safe-bowl-set-basic-milton/400/400",
    "description": "Premium microwave safe bowl set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-11",
    "name": "Milton Microwave Safe Bowl Set Standard",
    "slug": "milton-microwave-safe-bowl-set-standard-milton",
    "price": 280,
    "originalPrice": 360,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 4.1,
    "reviews": 1253,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-microwave-safe-bowl-set-standard-milton/400/400",
    "description": "Premium microwave safe bowl set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-12",
    "name": "Signoraware Microwave Safe Bowl Set Plus",
    "slug": "signoraware-microwave-safe-bowl-set-plus-signoraware",
    "price": 460,
    "originalPrice": 525,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "bowl",
      "microwave"
    ],
    "rating": 3.9,
    "reviews": 888,
    "featured": false,
    "image": "https://picsum.photos/seed/signoraware-microwave-safe-bowl-set-plus-signoraware/400/400",
    "description": "Premium microwave safe bowl set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-13",
    "name": "Butterfly Vegetable Chopper Deluxe",
    "slug": "butterfly-vegetable-chopper-deluxe",
    "price": 600,
    "originalPrice": 759,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.9,
    "reviews": 1729,
    "featured": false,
    "image": "https://picsum.photos/seed/butterfly-vegetable-chopper-deluxe/400/400",
    "description": "High-quality vegetable chopper from Butterfly. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-14",
    "name": "Butterfly Vegetable Chopper Standard",
    "slug": "butterfly-vegetable-chopper-standard-butterfly",
    "price": 260,
    "originalPrice": 377,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.1,
    "reviews": 1432,
    "featured": false,
    "image": "https://picsum.photos/seed/butterfly-vegetable-chopper-standard-butterfly/400/400",
    "description": "Premium vegetable chopper from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-15",
    "name": "Butterfly Vegetable Chopper Plus",
    "slug": "butterfly-vegetable-chopper-plus-butterfly",
    "price": 450,
    "originalPrice": 527,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 4.8,
    "reviews": 1118,
    "featured": false,
    "image": "https://picsum.photos/seed/butterfly-vegetable-chopper-plus-butterfly/400/400",
    "description": "Premium vegetable chopper from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-16",
    "name": "Signoraware Vegetable Chopper",
    "slug": "signoraware-vegetable-chopper-signoraware",
    "price": 750,
    "originalPrice": 1171,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.6,
    "reviews": 1302,
    "featured": false,
    "image": "https://picsum.photos/seed/signoraware-vegetable-chopper-signoraware/400/400",
    "description": "Premium vegetable chopper from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-17",
    "name": "Borosil Vegetable Chopper",
    "slug": "borosil-vegetable-chopper-borosil",
    "price": 580,
    "originalPrice": 580,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.4,
    "reviews": 363,
    "featured": false,
    "image": "https://picsum.photos/seed/borosil-vegetable-chopper-borosil/400/400",
    "description": "Premium vegetable chopper from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-18",
    "name": "Cello Vegetable Chopper Basic",
    "slug": "cello-vegetable-chopper-basic-cello",
    "price": 200,
    "originalPrice": 307,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "chopper",
      "eco-friendly"
    ],
    "rating": 3.4,
    "reviews": 1122,
    "featured": false,
    "image": "https://picsum.photos/seed/cello-vegetable-chopper-basic-cello/400/400",
    "description": "Premium vegetable chopper from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-19",
    "name": "Hawkins Spice Rack Deluxe",
    "slug": "hawkins-spice-rack-deluxe",
    "price": 730,
    "originalPrice": 730,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.9,
    "reviews": 759,
    "featured": false,
    "image": "https://picsum.photos/seed/hawkins-spice-rack-deluxe/400/400",
    "description": "High-quality spice rack from Hawkins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-20",
    "name": "Borosil Spice Rack Elite",
    "slug": "borosil-spice-rack-elite-borosil",
    "price": 730,
    "originalPrice": 1079,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.1,
    "reviews": 391,
    "featured": false,
    "image": "https://picsum.photos/seed/borosil-spice-rack-elite-borosil/400/400",
    "description": "Premium spice rack from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-21",
    "name": "Cello Spice Rack Ultra",
    "slug": "cello-spice-rack-ultra-cello",
    "price": 420,
    "originalPrice": 420,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.3,
    "reviews": 42,
    "featured": false,
    "image": "https://picsum.photos/seed/cello-spice-rack-ultra-cello/400/400",
    "description": "Premium spice rack from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-22",
    "name": "Wakefit Spice Rack Elite",
    "slug": "wakefit-spice-rack-elite-wakefit",
    "price": 440,
    "originalPrice": 440,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 3.5,
    "reviews": 436,
    "featured": true,
    "image": "https://picsum.photos/seed/wakefit-spice-rack-elite-wakefit/400/400",
    "description": "Premium spice rack from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-23",
    "name": "Hawkins Spice Rack Plus",
    "slug": "hawkins-spice-rack-plus-hawkins",
    "price": 670,
    "originalPrice": 990,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "spice"
    ],
    "rating": 4.1,
    "reviews": 434,
    "featured": false,
    "image": "https://picsum.photos/seed/hawkins-spice-rack-plus-hawkins/400/400",
    "description": "Premium spice rack from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-24",
    "name": "Pigeon Tumbler Glass Set Standard",
    "slug": "pigeon-tumbler-glass-set-standard",
    "price": 320,
    "originalPrice": 320,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.5,
    "reviews": 307,
    "featured": false,
    "image": "https://picsum.photos/seed/pigeon-tumbler-glass-set-standard/400/400",
    "description": "High-quality tumbler glass set from Pigeon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-25",
    "name": "Pigeon Tumbler Glass Set Plus",
    "slug": "pigeon-tumbler-glass-set-plus-pigeon",
    "price": 210,
    "originalPrice": 210,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.5,
    "reviews": 491,
    "featured": false,
    "image": "https://picsum.photos/seed/pigeon-tumbler-glass-set-plus-pigeon/400/400",
    "description": "Premium tumbler glass set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-26",
    "name": "Vidiem Tumbler Glass Set Ultra",
    "slug": "vidiem-tumbler-glass-set-ultra-vidiem",
    "price": 250,
    "originalPrice": 250,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3.4,
    "reviews": 673,
    "featured": false,
    "image": "https://picsum.photos/seed/vidiem-tumbler-glass-set-ultra-vidiem/400/400",
    "description": "Premium tumbler glass set from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-27",
    "name": "Prestige Tumbler Glass Set Deluxe",
    "slug": "prestige-tumbler-glass-set-deluxe-prestige",
    "price": 570,
    "originalPrice": 883,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3,
    "reviews": 270,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-tumbler-glass-set-deluxe-prestige/400/400",
    "description": "Premium tumbler glass set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-28",
    "name": "Prestige Tumbler Glass Set",
    "slug": "prestige-tumbler-glass-set-prestige",
    "price": 350,
    "originalPrice": 350,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 3,
    "reviews": 321,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-tumbler-glass-set-prestige/400/400",
    "description": "Premium tumbler glass set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-29",
    "name": "Butterfly Tumbler Glass Set Standard",
    "slug": "butterfly-tumbler-glass-set-standard-butterfly",
    "price": 310,
    "originalPrice": 357,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "glass",
      "tumbler"
    ],
    "rating": 4.8,
    "reviews": 1335,
    "featured": false,
    "image": "https://picsum.photos/seed/butterfly-tumbler-glass-set-standard-butterfly/400/400",
    "description": "Premium tumbler glass set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-30",
    "name": "Signoraware Kitchen Tongs",
    "slug": "signoraware-kitchen-tongs",
    "price": 380,
    "originalPrice": 589,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.5,
    "reviews": 681,
    "featured": false,
    "image": "https://picsum.photos/seed/signoraware-kitchen-tongs/400/400",
    "description": "High-quality kitchen tongs from Signoraware. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-31",
    "name": "Milton Kitchen Tongs Premium",
    "slug": "milton-kitchen-tongs-premium-milton",
    "price": 330,
    "originalPrice": 330,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.5,
    "reviews": 106,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-kitchen-tongs-premium-milton/400/400",
    "description": "Premium kitchen tongs from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-32",
    "name": "Borosil Kitchen Tongs Ultra",
    "slug": "borosil-kitchen-tongs-ultra-borosil",
    "price": 280,
    "originalPrice": 403,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 3.6,
    "reviews": 1336,
    "featured": false,
    "image": "https://picsum.photos/seed/borosil-kitchen-tongs-ultra-borosil/400/400",
    "description": "Premium kitchen tongs from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-33",
    "name": "Vidiem Kitchen Tongs Premium",
    "slug": "vidiem-kitchen-tongs-premium-vidiem",
    "price": 330,
    "originalPrice": 501,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4,
    "reviews": 536,
    "featured": false,
    "image": "https://picsum.photos/seed/vidiem-kitchen-tongs-premium-vidiem/400/400",
    "description": "Premium kitchen tongs from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-34",
    "name": "Wakefit Kitchen Tongs Plus",
    "slug": "wakefit-kitchen-tongs-plus-wakefit",
    "price": 310,
    "originalPrice": 467,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "cooking",
      "tongs"
    ],
    "rating": 4.3,
    "reviews": 1261,
    "featured": false,
    "image": "https://picsum.photos/seed/wakefit-kitchen-tongs-plus-wakefit/400/400",
    "description": "Premium kitchen tongs from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-35",
    "name": "Hawkins Dinner Plate Set Basic",
    "slug": "hawkins-dinner-plate-set-basic",
    "price": 1960,
    "originalPrice": 3011,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.7,
    "reviews": 1098,
    "featured": false,
    "image": "https://picsum.photos/seed/hawkins-dinner-plate-set-basic/400/400",
    "description": "High-quality dinner plate set from Hawkins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-36",
    "name": "Pigeon Dinner Plate Set Basic",
    "slug": "pigeon-dinner-plate-set-basic-pigeon",
    "price": 1430,
    "originalPrice": 2153,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.2,
    "reviews": 619,
    "featured": false,
    "image": "https://picsum.photos/seed/pigeon-dinner-plate-set-basic-pigeon/400/400",
    "description": "Premium dinner plate set from Pigeon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-37",
    "name": "Prestige Dinner Plate Set Basic",
    "slug": "prestige-dinner-plate-set-basic-prestige",
    "price": 410,
    "originalPrice": 592,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.6,
    "reviews": 748,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-dinner-plate-set-basic-prestige/400/400",
    "description": "Premium dinner plate set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-38",
    "name": "Signoraware Dinner Plate Set Deluxe",
    "slug": "signoraware-dinner-plate-set-deluxe-signoraware",
    "price": 1900,
    "originalPrice": 2807,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.8,
    "reviews": 1194,
    "featured": true,
    "image": "https://picsum.photos/seed/signoraware-dinner-plate-set-deluxe-signoraware/400/400",
    "description": "Premium dinner plate set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-39",
    "name": "Milton Dinner Plate Set",
    "slug": "milton-dinner-plate-set-milton",
    "price": 1530,
    "originalPrice": 1530,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 3.3,
    "reviews": 412,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-dinner-plate-set-milton/400/400",
    "description": "Premium dinner plate set from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-40",
    "name": "Prestige Dinner Plate Set Deluxe",
    "slug": "prestige-dinner-plate-set-deluxe-prestige",
    "price": 1490,
    "originalPrice": 1490,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "dinner-set",
      "ceramic"
    ],
    "rating": 4.4,
    "reviews": 1062,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-dinner-plate-set-deluxe-prestige/400/400",
    "description": "Premium dinner plate set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-41",
    "name": "Pigeon Storage Jar Set",
    "slug": "pigeon-storage-jar-set",
    "price": 600,
    "originalPrice": 725,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.9,
    "reviews": 1214,
    "featured": true,
    "image": "https://picsum.photos/seed/pigeon-storage-jar-set/400/400",
    "description": "High-quality storage jar set from Pigeon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-42",
    "name": "Butterfly Storage Jar Set",
    "slug": "butterfly-storage-jar-set-butterfly",
    "price": 380,
    "originalPrice": 464,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.5,
    "reviews": 1062,
    "featured": false,
    "image": "https://picsum.photos/seed/butterfly-storage-jar-set-butterfly/400/400",
    "description": "Premium storage jar set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-43",
    "name": "Borosil Storage Jar Set Basic",
    "slug": "borosil-storage-jar-set-basic-borosil",
    "price": 400,
    "originalPrice": 519,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 3.5,
    "reviews": 703,
    "featured": false,
    "image": "https://picsum.photos/seed/borosil-storage-jar-set-basic-borosil/400/400",
    "description": "Premium storage jar set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-44",
    "name": "Prestige Storage Jar Set Pro",
    "slug": "prestige-storage-jar-set-pro-prestige",
    "price": 790,
    "originalPrice": 1207,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.9,
    "reviews": 1433,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-storage-jar-set-pro-prestige/400/400",
    "description": "Premium storage jar set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-45",
    "name": "Butterfly Storage Jar Set Ultra",
    "slug": "butterfly-storage-jar-set-ultra-butterfly",
    "price": 370,
    "originalPrice": 586,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.7,
    "reviews": 84,
    "featured": false,
    "image": "https://picsum.photos/seed/butterfly-storage-jar-set-ultra-butterfly/400/400",
    "description": "Premium storage jar set from Butterfly. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-46",
    "name": "Cello Storage Jar Set Premium",
    "slug": "cello-storage-jar-set-premium-cello",
    "price": 550,
    "originalPrice": 550,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 4.1,
    "reviews": 223,
    "featured": false,
    "image": "https://picsum.photos/seed/cello-storage-jar-set-premium-cello/400/400",
    "description": "Premium storage jar set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-47",
    "name": "Cello Storage Jar Set Pro",
    "slug": "cello-storage-jar-set-pro-cello",
    "price": 210,
    "originalPrice": 318,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen",
      "storage",
      "jar"
    ],
    "rating": 5,
    "reviews": 1113,
    "featured": false,
    "image": "https://picsum.photos/seed/cello-storage-jar-set-pro-cello/400/400",
    "description": "Premium storage jar set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-48",
    "name": "Signoraware Mop Floor Cleaner Elite",
    "slug": "signoraware-mop-floor-cleaner-elite",
    "price": 580,
    "originalPrice": 881,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.9,
    "reviews": 2003,
    "featured": true,
    "image": "https://picsum.photos/seed/signoraware-mop-floor-cleaner-elite/400/400",
    "description": "High-quality mop floor cleaner from Signoraware. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "ho-49",
    "name": "Milton Mop Floor Cleaner",
    "slug": "milton-mop-floor-cleaner-milton",
    "price": 760,
    "originalPrice": 760,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.7,
    "reviews": 1099,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-mop-floor-cleaner-milton/400/400",
    "description": "Premium mop floor cleaner from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-50",
    "name": "Vidiem Mop Floor Cleaner Plus",
    "slug": "vidiem-mop-floor-cleaner-plus-vidiem",
    "price": 390,
    "originalPrice": 390,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.2,
    "reviews": 43,
    "featured": false,
    "image": "https://picsum.photos/seed/vidiem-mop-floor-cleaner-plus-vidiem/400/400",
    "description": "Premium mop floor cleaner from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-51",
    "name": "Prestige Mop Floor Cleaner",
    "slug": "prestige-mop-floor-cleaner-prestige",
    "price": 400,
    "originalPrice": 627,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.5,
    "reviews": 153,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-mop-floor-cleaner-prestige/400/400",
    "description": "Premium mop floor cleaner from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-52",
    "name": "Milton Mop Floor Cleaner Deluxe",
    "slug": "milton-mop-floor-cleaner-deluxe-milton",
    "price": 440,
    "originalPrice": 625,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 4.5,
    "reviews": 790,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-mop-floor-cleaner-deluxe-milton/400/400",
    "description": "Premium mop floor cleaner from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-53",
    "name": "Vidiem Mop Floor Cleaner",
    "slug": "vidiem-mop-floor-cleaner-vidiem",
    "price": 440,
    "originalPrice": 497,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "cleaning",
      "mop"
    ],
    "rating": 3.6,
    "reviews": 669,
    "featured": false,
    "image": "https://picsum.photos/seed/vidiem-mop-floor-cleaner-vidiem/400/400",
    "description": "Premium mop floor cleaner from Vidiem. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-54",
    "name": "Hawkins Clothes Hanger Set Plus",
    "slug": "hawkins-clothes-hanger-set-plus",
    "price": 220,
    "originalPrice": 220,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4.2,
    "reviews": 1018,
    "featured": false,
    "image": "https://picsum.photos/seed/hawkins-clothes-hanger-set-plus/400/400",
    "description": "High-quality clothes hanger set from Hawkins. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-55",
    "name": "Prestige Clothes Hanger Set Basic",
    "slug": "prestige-clothes-hanger-set-basic-prestige",
    "price": 410,
    "originalPrice": 410,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.4,
    "reviews": 429,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-clothes-hanger-set-basic-prestige/400/400",
    "description": "Premium clothes hanger set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-56",
    "name": "Prestige Clothes Hanger Set Premium",
    "slug": "prestige-clothes-hanger-set-premium-prestige",
    "price": 140,
    "originalPrice": 205,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.1,
    "reviews": 673,
    "featured": false,
    "image": "https://picsum.photos/seed/prestige-clothes-hanger-set-premium-prestige/400/400",
    "description": "Premium clothes hanger set from Prestige. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-57",
    "name": "Signoraware Clothes Hanger Set Ultra",
    "slug": "signoraware-clothes-hanger-set-ultra-signoraware",
    "price": 170,
    "originalPrice": 244,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.1,
    "reviews": 1108,
    "featured": false,
    "image": "https://picsum.photos/seed/signoraware-clothes-hanger-set-ultra-signoraware/400/400",
    "description": "Premium clothes hanger set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-58",
    "name": "Borosil Clothes Hanger Set Standard",
    "slug": "borosil-clothes-hanger-set-standard-borosil",
    "price": 470,
    "originalPrice": 470,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 4,
    "reviews": 647,
    "featured": false,
    "image": "https://picsum.photos/seed/borosil-clothes-hanger-set-standard-borosil/400/400",
    "description": "Premium clothes hanger set from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-59",
    "name": "Hawkins Clothes Hanger Set",
    "slug": "hawkins-clothes-hanger-set-hawkins",
    "price": 400,
    "originalPrice": 400,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "storage",
      "hanger"
    ],
    "rating": 3.7,
    "reviews": 36,
    "featured": false,
    "image": "https://picsum.photos/seed/hawkins-clothes-hanger-set-hawkins/400/400",
    "description": "Premium clothes hanger set from Hawkins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-60",
    "name": "Vidiem Door Mat Ultra",
    "slug": "vidiem-door-mat-ultra",
    "price": 160,
    "originalPrice": 160,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.7,
    "reviews": 1135,
    "featured": true,
    "image": "https://picsum.photos/seed/vidiem-door-mat-ultra/400/400",
    "description": "High-quality door mat from Vidiem. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-61",
    "name": "Cello Door Mat Pro",
    "slug": "cello-door-mat-pro-cello",
    "price": 160,
    "originalPrice": 160,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.5,
    "reviews": 116,
    "featured": false,
    "image": "https://picsum.photos/seed/cello-door-mat-pro-cello/400/400",
    "description": "Premium door mat from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-62",
    "name": "Borosil Door Mat Basic",
    "slug": "borosil-door-mat-basic-borosil",
    "price": 250,
    "originalPrice": 250,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.3,
    "reviews": 179,
    "featured": false,
    "image": "https://picsum.photos/seed/borosil-door-mat-basic-borosil/400/400",
    "description": "Premium door mat from Borosil. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-63",
    "name": "Signoraware Door Mat Basic",
    "slug": "signoraware-door-mat-basic-signoraware",
    "price": 270,
    "originalPrice": 419,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 3.6,
    "reviews": 608,
    "featured": false,
    "image": "https://picsum.photos/seed/signoraware-door-mat-basic-signoraware/400/400",
    "description": "Premium door mat from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-64",
    "name": "Milton Door Mat Basic",
    "slug": "milton-door-mat-basic-milton",
    "price": 350,
    "originalPrice": 470,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "doormat"
    ],
    "rating": 4.3,
    "reviews": 1261,
    "featured": false,
    "image": "https://picsum.photos/seed/milton-door-mat-basic-milton/400/400",
    "description": "Premium door mat from Milton. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-65",
    "name": "Borosil Cushion Cover Set Standard",
    "slug": "borosil-cushion-cover-set-standard",
    "price": 630,
    "originalPrice": 917,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.6,
    "reviews": 1858,
    "featured": false,
    "image": "https://picsum.photos/seed/borosil-cushion-cover-set-standard/400/400",
    "description": "High-quality cushion cover set from Borosil. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "ho-66",
    "name": "Signoraware Cushion Cover Set Basic",
    "slug": "signoraware-cushion-cover-set-basic-signoraware",
    "price": 610,
    "originalPrice": 675,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.1,
    "reviews": 1404,
    "featured": false,
    "image": "https://picsum.photos/seed/signoraware-cushion-cover-set-basic-signoraware/400/400",
    "description": "Premium cushion cover set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-67",
    "name": "Wakefit Cushion Cover Set Ultra",
    "slug": "wakefit-cushion-cover-set-ultra-wakefit",
    "price": 400,
    "originalPrice": 449,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4,
    "reviews": 648,
    "featured": true,
    "image": "https://picsum.photos/seed/wakefit-cushion-cover-set-ultra-wakefit/400/400",
    "description": "Premium cushion cover set from Wakefit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-68",
    "name": "Cello Cushion Cover Set Deluxe",
    "slug": "cello-cushion-cover-set-deluxe-cello",
    "price": 770,
    "originalPrice": 989,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.7,
    "reviews": 995,
    "featured": false,
    "image": "https://picsum.photos/seed/cello-cushion-cover-set-deluxe-cello/400/400",
    "description": "Premium cushion cover set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "ho-69",
    "name": "Cello Cushion Cover Set Plus",
    "slug": "cello-cushion-cover-set-plus-cello",
    "price": 420,
    "originalPrice": 420,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 4.7,
    "reviews": 1112,
    "featured": false,
    "image": "https://picsum.photos/seed/cello-cushion-cover-set-plus-cello/400/400",
    "description": "Premium cushion cover set from Cello. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "ho-70",
    "name": "Signoraware Cushion Cover Set Ultra",
    "slug": "signoraware-cushion-cover-set-ultra-signoraware",
    "price": 370,
    "originalPrice": 370,
    "category": "Home & Kitchen",
    "tags": [
      "home",
      "decor",
      "cushion"
    ],
    "rating": 3.4,
    "reviews": 1183,
    "featured": false,
    "image": "https://picsum.photos/seed/signoraware-cushion-cover-set-ultra-signoraware/400/400",
    "description": "Premium cushion cover set from Signoraware. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-1",
    "name": "Aleph Fiction Bestseller",
    "slug": "aleph-fiction-bestseller",
    "price": 620,
    "originalPrice": 620,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4,
    "reviews": 160,
    "featured": false,
    "image": "https://picsum.photos/seed/aleph-fiction-bestseller/400/400",
    "description": "High-quality fiction bestseller from Aleph. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-2",
    "name": "Oxford Fiction Bestseller Plus",
    "slug": "oxford-fiction-bestseller-plus-oxford",
    "price": 560,
    "originalPrice": 560,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.5,
    "reviews": 780,
    "featured": false,
    "image": "https://picsum.photos/seed/oxford-fiction-bestseller-plus-oxford/400/400",
    "description": "Premium fiction bestseller from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-3",
    "name": "Aleph Fiction Bestseller Plus",
    "slug": "aleph-fiction-bestseller-plus-aleph",
    "price": 460,
    "originalPrice": 687,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.2,
    "reviews": 1345,
    "featured": false,
    "image": "https://picsum.photos/seed/aleph-fiction-bestseller-plus-aleph/400/400",
    "description": "Premium fiction bestseller from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-4",
    "name": "Random House Fiction Bestseller Standard",
    "slug": "random-house-fiction-bestseller-standard-random-house",
    "price": 460,
    "originalPrice": 703,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 4.1,
    "reviews": 908,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-fiction-bestseller-standard-random-house/400/400",
    "description": "Premium fiction bestseller from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-5",
    "name": "Penguin Fiction Bestseller Deluxe",
    "slug": "penguin-fiction-bestseller-deluxe-penguin",
    "price": 700,
    "originalPrice": 700,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.7,
    "reviews": 299,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-fiction-bestseller-deluxe-penguin/400/400",
    "description": "Premium fiction bestseller from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-6",
    "name": "Penguin Fiction Bestseller Plus",
    "slug": "penguin-fiction-bestseller-plus-penguin",
    "price": 290,
    "originalPrice": 290,
    "category": "Books & Media",
    "tags": [
      "book",
      "fiction",
      "novel"
    ],
    "rating": 3.9,
    "reviews": 1442,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-fiction-bestseller-plus-penguin/400/400",
    "description": "Premium fiction bestseller from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-7",
    "name": "Oxford Self-Help Guide",
    "slug": "oxford-self-help-guide",
    "price": 510,
    "originalPrice": 510,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.4,
    "reviews": 367,
    "featured": false,
    "image": "https://picsum.photos/seed/oxford-self-help-guide/400/400",
    "description": "High-quality self-help guide from Oxford. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-8",
    "name": "Oxford Self-Help Guide Pro",
    "slug": "oxford-self-help-guide-pro-oxford",
    "price": 500,
    "originalPrice": 684,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.2,
    "reviews": 1253,
    "featured": false,
    "image": "https://picsum.photos/seed/oxford-self-help-guide-pro-oxford/400/400",
    "description": "Premium self-help guide from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-9",
    "name": "Penguin Self-Help Guide Standard",
    "slug": "penguin-self-help-guide-standard-penguin",
    "price": 300,
    "originalPrice": 300,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.5,
    "reviews": 503,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-self-help-guide-standard-penguin/400/400",
    "description": "Premium self-help guide from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-10",
    "name": "Bloomsbury Self-Help Guide Pro",
    "slug": "bloomsbury-self-help-guide-pro-bloomsbury",
    "price": 440,
    "originalPrice": 440,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.9,
    "reviews": 1221,
    "featured": false,
    "image": "https://picsum.photos/seed/bloomsbury-self-help-guide-pro-bloomsbury/400/400",
    "description": "Premium self-help guide from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-11",
    "name": "Aleph Self-Help Guide Pro",
    "slug": "aleph-self-help-guide-pro-aleph",
    "price": 210,
    "originalPrice": 266,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 4.8,
    "reviews": 1487,
    "featured": false,
    "image": "https://picsum.photos/seed/aleph-self-help-guide-pro-aleph/400/400",
    "description": "Premium self-help guide from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-12",
    "name": "Random House Self-Help Guide",
    "slug": "random-house-self-help-guide-random-house",
    "price": 240,
    "originalPrice": 310,
    "category": "Books & Media",
    "tags": [
      "book",
      "self-help",
      "motivation"
    ],
    "rating": 3.2,
    "reviews": 744,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-self-help-guide-random-house/400/400",
    "description": "Premium self-help guide from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-13",
    "name": "Rupa Indian History Book Premium",
    "slug": "rupa-indian-history-book-premium",
    "price": 350,
    "originalPrice": 350,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.9,
    "reviews": 137,
    "featured": false,
    "image": "https://picsum.photos/seed/rupa-indian-history-book-premium/400/400",
    "description": "High-quality indian history book from Rupa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-14",
    "name": "Oxford Indian History Book Basic",
    "slug": "oxford-indian-history-book-basic-oxford",
    "price": 460,
    "originalPrice": 460,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.4,
    "reviews": 1368,
    "featured": false,
    "image": "https://picsum.photos/seed/oxford-indian-history-book-basic-oxford/400/400",
    "description": "Premium indian history book from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-15",
    "name": "Random House Indian History Book Pro",
    "slug": "random-house-indian-history-book-pro-random-house",
    "price": 590,
    "originalPrice": 864,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.7,
    "reviews": 869,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-indian-history-book-pro-random-house/400/400",
    "description": "Premium indian history book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-16",
    "name": "Rupa Indian History Book Basic",
    "slug": "rupa-indian-history-book-basic-rupa",
    "price": 680,
    "originalPrice": 767,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 4.1,
    "reviews": 1386,
    "featured": false,
    "image": "https://picsum.photos/seed/rupa-indian-history-book-basic-rupa/400/400",
    "description": "Premium indian history book from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-17",
    "name": "Random House Indian History Book Plus",
    "slug": "random-house-indian-history-book-plus-random-house",
    "price": 600,
    "originalPrice": 917,
    "category": "Books & Media",
    "tags": [
      "book",
      "history",
      "education"
    ],
    "rating": 3.9,
    "reviews": 1292,
    "featured": true,
    "image": "https://picsum.photos/seed/random-house-indian-history-book-plus-random-house/400/400",
    "description": "Premium indian history book from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-18",
    "name": "Simon & Schuster Children Storybook Elite",
    "slug": "simon-schuster-children-storybook-elite",
    "price": 450,
    "originalPrice": 450,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.8,
    "reviews": 1721,
    "featured": false,
    "image": "https://picsum.photos/seed/simon-schuster-children-storybook-elite/400/400",
    "description": "High-quality children storybook from Simon & Schuster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-19",
    "name": "Rupa Children Storybook Premium",
    "slug": "rupa-children-storybook-premium-rupa",
    "price": 450,
    "originalPrice": 693,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4,
    "reviews": 353,
    "featured": false,
    "image": "https://picsum.photos/seed/rupa-children-storybook-premium-rupa/400/400",
    "description": "Premium children storybook from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-20",
    "name": "Aleph Children Storybook Deluxe",
    "slug": "aleph-children-storybook-deluxe-aleph",
    "price": 460,
    "originalPrice": 706,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.2,
    "reviews": 818,
    "featured": false,
    "image": "https://picsum.photos/seed/aleph-children-storybook-deluxe-aleph/400/400",
    "description": "Premium children storybook from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-21",
    "name": "Oxford Children Storybook Elite",
    "slug": "oxford-children-storybook-elite-oxford",
    "price": 330,
    "originalPrice": 407,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.3,
    "reviews": 839,
    "featured": false,
    "image": "https://picsum.photos/seed/oxford-children-storybook-elite-oxford/400/400",
    "description": "Premium children storybook from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-22",
    "name": "Penguin Children Storybook Elite",
    "slug": "penguin-children-storybook-elite-penguin",
    "price": 240,
    "originalPrice": 378,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.8,
    "reviews": 425,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-children-storybook-elite-penguin/400/400",
    "description": "Premium children storybook from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-23",
    "name": "Simon & Schuster Children Storybook Ultra",
    "slug": "simon-schuster-children-storybook-ultra-simon-schuster",
    "price": 370,
    "originalPrice": 370,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 4.3,
    "reviews": 1509,
    "featured": false,
    "image": "https://picsum.photos/seed/simon-schuster-children-storybook-ultra-simon-schuster/400/400",
    "description": "Premium children storybook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-24",
    "name": "HarperCollins Children Storybook Deluxe",
    "slug": "harpercollins-children-storybook-deluxe-harpercollins",
    "price": 350,
    "originalPrice": 350,
    "category": "Books & Media",
    "tags": [
      "book",
      "children",
      "story"
    ],
    "rating": 3.8,
    "reviews": 1073,
    "featured": false,
    "image": "https://picsum.photos/seed/harpercollins-children-storybook-deluxe-harpercollins/400/400",
    "description": "Premium children storybook from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-25",
    "name": "Bloomsbury Cooking Recipe Book Elite",
    "slug": "bloomsbury-cooking-recipe-book-elite",
    "price": 690,
    "originalPrice": 690,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.9,
    "reviews": 1786,
    "featured": false,
    "image": "https://picsum.photos/seed/bloomsbury-cooking-recipe-book-elite/400/400",
    "description": "High-quality cooking recipe book from Bloomsbury. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-26",
    "name": "Puffin Cooking Recipe Book Deluxe",
    "slug": "puffin-cooking-recipe-book-deluxe-puffin",
    "price": 580,
    "originalPrice": 780,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.7,
    "reviews": 691,
    "featured": false,
    "image": "https://picsum.photos/seed/puffin-cooking-recipe-book-deluxe-puffin/400/400",
    "description": "Premium cooking recipe book from Puffin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-27",
    "name": "Bloomsbury Cooking Recipe Book Basic",
    "slug": "bloomsbury-cooking-recipe-book-basic-bloomsbury",
    "price": 440,
    "originalPrice": 440,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.4,
    "reviews": 1361,
    "featured": false,
    "image": "https://picsum.photos/seed/bloomsbury-cooking-recipe-book-basic-bloomsbury/400/400",
    "description": "Premium cooking recipe book from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-28",
    "name": "Penguin Cooking Recipe Book Standard",
    "slug": "penguin-cooking-recipe-book-standard-penguin",
    "price": 580,
    "originalPrice": 580,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.7,
    "reviews": 780,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-cooking-recipe-book-standard-penguin/400/400",
    "description": "Premium cooking recipe book from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-29",
    "name": "Scholastic Cooking Recipe Book",
    "slug": "scholastic-cooking-recipe-book-scholastic",
    "price": 490,
    "originalPrice": 742,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 4.4,
    "reviews": 449,
    "featured": false,
    "image": "https://picsum.photos/seed/scholastic-cooking-recipe-book-scholastic/400/400",
    "description": "Premium cooking recipe book from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-30",
    "name": "Rupa Cooking Recipe Book",
    "slug": "rupa-cooking-recipe-book-rupa",
    "price": 440,
    "originalPrice": 440,
    "category": "Books & Media",
    "tags": [
      "book",
      "cooking",
      "recipe"
    ],
    "rating": 3.4,
    "reviews": 599,
    "featured": false,
    "image": "https://picsum.photos/seed/rupa-cooking-recipe-book-rupa/400/400",
    "description": "Premium cooking recipe book from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-31",
    "name": "Oxford Exam Guide",
    "slug": "oxford-exam-guide",
    "price": 490,
    "originalPrice": 490,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 3.7,
    "reviews": 1674,
    "featured": true,
    "image": "https://picsum.photos/seed/oxford-exam-guide/400/400",
    "description": "High-quality exam guide from Oxford. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-32",
    "name": "Bloomsbury Exam Guide Basic",
    "slug": "bloomsbury-exam-guide-basic-bloomsbury",
    "price": 370,
    "originalPrice": 412,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.5,
    "reviews": 1353,
    "featured": false,
    "image": "https://picsum.photos/seed/bloomsbury-exam-guide-basic-bloomsbury/400/400",
    "description": "Premium exam guide from Bloomsbury. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-33",
    "name": "Aleph Exam Guide Pro",
    "slug": "aleph-exam-guide-pro-aleph",
    "price": 320,
    "originalPrice": 320,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.9,
    "reviews": 749,
    "featured": false,
    "image": "https://picsum.photos/seed/aleph-exam-guide-pro-aleph/400/400",
    "description": "Premium exam guide from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-34",
    "name": "Simon & Schuster Exam Guide Elite",
    "slug": "simon-schuster-exam-guide-elite-simon-schuster",
    "price": 320,
    "originalPrice": 320,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.5,
    "reviews": 1000,
    "featured": true,
    "image": "https://picsum.photos/seed/simon-schuster-exam-guide-elite-simon-schuster/400/400",
    "description": "Premium exam guide from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-35",
    "name": "Random House Exam Guide Premium",
    "slug": "random-house-exam-guide-premium-random-house",
    "price": 320,
    "originalPrice": 418,
    "category": "Books & Media",
    "tags": [
      "book",
      "education",
      "exam"
    ],
    "rating": 4.7,
    "reviews": 886,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-exam-guide-premium-random-house/400/400",
    "description": "Premium exam guide from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-36",
    "name": "Puffin Art Sketchbook Ultra",
    "slug": "puffin-art-sketchbook-ultra",
    "price": 200,
    "originalPrice": 242,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.6,
    "reviews": 1163,
    "featured": true,
    "image": "https://picsum.photos/seed/puffin-art-sketchbook-ultra/400/400",
    "description": "High-quality art sketchbook from Puffin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-37",
    "name": "Aleph Art Sketchbook Deluxe",
    "slug": "aleph-art-sketchbook-deluxe-aleph",
    "price": 460,
    "originalPrice": 460,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.8,
    "reviews": 1292,
    "featured": false,
    "image": "https://picsum.photos/seed/aleph-art-sketchbook-deluxe-aleph/400/400",
    "description": "Premium art sketchbook from Aleph. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-38",
    "name": "Penguin Art Sketchbook Deluxe",
    "slug": "penguin-art-sketchbook-deluxe-penguin",
    "price": 370,
    "originalPrice": 370,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.8,
    "reviews": 393,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-art-sketchbook-deluxe-penguin/400/400",
    "description": "Premium art sketchbook from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-39",
    "name": "Simon & Schuster Art Sketchbook Standard",
    "slug": "simon-schuster-art-sketchbook-standard-simon-schuster",
    "price": 230,
    "originalPrice": 230,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3,
    "reviews": 1218,
    "featured": false,
    "image": "https://picsum.photos/seed/simon-schuster-art-sketchbook-standard-simon-schuster/400/400",
    "description": "Premium art sketchbook from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-40",
    "name": "Random House Art Sketchbook",
    "slug": "random-house-art-sketchbook-random-house",
    "price": 210,
    "originalPrice": 312,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.4,
    "reviews": 1451,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-art-sketchbook-random-house/400/400",
    "description": "Premium art sketchbook from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-41",
    "name": "Random House Art Sketchbook Standard",
    "slug": "random-house-art-sketchbook-standard-random-house",
    "price": 410,
    "originalPrice": 472,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 4.6,
    "reviews": 405,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-art-sketchbook-standard-random-house/400/400",
    "description": "Premium art sketchbook from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "bo-42",
    "name": "Oxford Art Sketchbook Elite",
    "slug": "oxford-art-sketchbook-elite-oxford",
    "price": 350,
    "originalPrice": 546,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "art",
      "sketchbook"
    ],
    "rating": 3.9,
    "reviews": 594,
    "featured": false,
    "image": "https://picsum.photos/seed/oxford-art-sketchbook-elite-oxford/400/400",
    "description": "Premium art sketchbook from Oxford. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-43",
    "name": "Rupa Fountain Pen Deluxe",
    "slug": "rupa-fountain-pen-deluxe",
    "price": 370,
    "originalPrice": 463,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4,
    "reviews": 285,
    "featured": false,
    "image": "https://picsum.photos/seed/rupa-fountain-pen-deluxe/400/400",
    "description": "High-quality fountain pen from Rupa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-44",
    "name": "Scholastic Fountain Pen Deluxe",
    "slug": "scholastic-fountain-pen-deluxe-scholastic",
    "price": 1190,
    "originalPrice": 1326,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.6,
    "reviews": 1035,
    "featured": false,
    "image": "https://picsum.photos/seed/scholastic-fountain-pen-deluxe-scholastic/400/400",
    "description": "Premium fountain pen from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-45",
    "name": "Penguin Fountain Pen Basic",
    "slug": "penguin-fountain-pen-basic-penguin",
    "price": 710,
    "originalPrice": 1044,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.2,
    "reviews": 898,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-fountain-pen-basic-penguin/400/400",
    "description": "Premium fountain pen from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-46",
    "name": "Scholastic Fountain Pen Basic",
    "slug": "scholastic-fountain-pen-basic-scholastic",
    "price": 340,
    "originalPrice": 340,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 3.6,
    "reviews": 1079,
    "featured": false,
    "image": "https://picsum.photos/seed/scholastic-fountain-pen-basic-scholastic/400/400",
    "description": "Premium fountain pen from Scholastic. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-47",
    "name": "Penguin Fountain Pen Plus",
    "slug": "penguin-fountain-pen-plus-penguin",
    "price": 410,
    "originalPrice": 410,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "pen",
      "premium"
    ],
    "rating": 4.1,
    "reviews": 1095,
    "featured": false,
    "image": "https://picsum.photos/seed/penguin-fountain-pen-plus-penguin/400/400",
    "description": "Premium fountain pen from Penguin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-48",
    "name": "Simon & Schuster Gift Wrapping Set Elite",
    "slug": "simon-schuster-gift-wrapping-set-elite",
    "price": 150,
    "originalPrice": 232,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.8,
    "reviews": 450,
    "featured": true,
    "image": "https://picsum.photos/seed/simon-schuster-gift-wrapping-set-elite/400/400",
    "description": "High-quality gift wrapping set from Simon & Schuster. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "bo-49",
    "name": "Random House Gift Wrapping Set Standard",
    "slug": "random-house-gift-wrapping-set-standard-random-house",
    "price": 340,
    "originalPrice": 461,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.8,
    "reviews": 761,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-gift-wrapping-set-standard-random-house/400/400",
    "description": "Premium gift wrapping set from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-50",
    "name": "Rupa Gift Wrapping Set Deluxe",
    "slug": "rupa-gift-wrapping-set-deluxe-rupa",
    "price": 150,
    "originalPrice": 228,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.9,
    "reviews": 382,
    "featured": false,
    "image": "https://picsum.photos/seed/rupa-gift-wrapping-set-deluxe-rupa/400/400",
    "description": "Premium gift wrapping set from Rupa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-51",
    "name": "HarperCollins Gift Wrapping Set Premium",
    "slug": "harpercollins-gift-wrapping-set-premium-harpercollins",
    "price": 330,
    "originalPrice": 330,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.8,
    "reviews": 614,
    "featured": false,
    "image": "https://picsum.photos/seed/harpercollins-gift-wrapping-set-premium-harpercollins/400/400",
    "description": "Premium gift wrapping set from HarperCollins. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-52",
    "name": "Random House Gift Wrapping Set Elite",
    "slug": "random-house-gift-wrapping-set-elite-random-house",
    "price": 400,
    "originalPrice": 400,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4.7,
    "reviews": 514,
    "featured": false,
    "image": "https://picsum.photos/seed/random-house-gift-wrapping-set-elite-random-house/400/400",
    "description": "Premium gift wrapping set from Random House. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "bo-53",
    "name": "Simon & Schuster Gift Wrapping Set Ultra",
    "slug": "simon-schuster-gift-wrapping-set-ultra-simon-schuster",
    "price": 270,
    "originalPrice": 319,
    "category": "Books & Media",
    "tags": [
      "stationery",
      "gift",
      "wrap"
    ],
    "rating": 4,
    "reviews": 202,
    "featured": false,
    "image": "https://picsum.photos/seed/simon-schuster-gift-wrapping-set-ultra-simon-schuster/400/400",
    "description": "Premium gift wrapping set from Simon & Schuster. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-1",
    "name": "BSN Skipping Rope Pro",
    "slug": "bsn-skipping-rope-pro",
    "price": 180,
    "originalPrice": 180,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 4.2,
    "reviews": 1628,
    "featured": false,
    "image": "https://picsum.photos/seed/bsn-skipping-rope-pro/400/400",
    "description": "High-quality skipping rope from BSN. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-2",
    "name": "Speed Skipping Rope Ultra",
    "slug": "speed-skipping-rope-ultra-speed",
    "price": 300,
    "originalPrice": 300,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.5,
    "reviews": 22,
    "featured": false,
    "image": "https://picsum.photos/seed/speed-skipping-rope-ultra-speed/400/400",
    "description": "Premium skipping rope from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-3",
    "name": "Cosco Skipping Rope",
    "slug": "cosco-skipping-rope-cosco",
    "price": 380,
    "originalPrice": 380,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.6,
    "reviews": 81,
    "featured": false,
    "image": "https://picsum.photos/seed/cosco-skipping-rope-cosco/400/400",
    "description": "Premium skipping rope from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-4",
    "name": "Proff Skipping Rope Premium",
    "slug": "proff-skipping-rope-premium-proff",
    "price": 260,
    "originalPrice": 260,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3,
    "reviews": 314,
    "featured": false,
    "image": "https://picsum.photos/seed/proff-skipping-rope-premium-proff/400/400",
    "description": "Premium skipping rope from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-5",
    "name": "Cosco Skipping Rope Pro",
    "slug": "cosco-skipping-rope-pro-cosco",
    "price": 180,
    "originalPrice": 180,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.6,
    "reviews": 567,
    "featured": false,
    "image": "https://picsum.photos/seed/cosco-skipping-rope-pro-cosco/400/400",
    "description": "Premium skipping rope from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-6",
    "name": "Nivia Skipping Rope Pro",
    "slug": "nivia-skipping-rope-pro-nivia",
    "price": 250,
    "originalPrice": 250,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "cardio",
      "jump-rope"
    ],
    "rating": 3.2,
    "reviews": 986,
    "featured": false,
    "image": "https://picsum.photos/seed/nivia-skipping-rope-pro-nivia/400/400",
    "description": "Premium skipping rope from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-7",
    "name": "Strauss Push Up Stand Ultra",
    "slug": "strauss-push-up-stand-ultra",
    "price": 740,
    "originalPrice": 740,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.3,
    "reviews": 1187,
    "featured": false,
    "image": "https://picsum.photos/seed/strauss-push-up-stand-ultra/400/400",
    "description": "High-quality push up stand from Strauss. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-8",
    "name": "Cosco Push Up Stand Premium",
    "slug": "cosco-push-up-stand-premium-cosco",
    "price": 490,
    "originalPrice": 618,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.6,
    "reviews": 1022,
    "featured": false,
    "image": "https://picsum.photos/seed/cosco-push-up-stand-premium-cosco/400/400",
    "description": "Premium push up stand from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-9",
    "name": "Puma Push Up Stand Pro",
    "slug": "puma-push-up-stand-pro-puma",
    "price": 650,
    "originalPrice": 650,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 3.7,
    "reviews": 1206,
    "featured": true,
    "image": "https://picsum.photos/seed/puma-push-up-stand-pro-puma/400/400",
    "description": "Premium push up stand from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-10",
    "name": "Strauss Push Up Stand Pro",
    "slug": "strauss-push-up-stand-pro-strauss",
    "price": 510,
    "originalPrice": 510,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.2,
    "reviews": 601,
    "featured": false,
    "image": "https://picsum.photos/seed/strauss-push-up-stand-pro-strauss/400/400",
    "description": "Premium push up stand from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-11",
    "name": "Speed Push Up Stand Ultra",
    "slug": "speed-push-up-stand-ultra-speed",
    "price": 470,
    "originalPrice": 470,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.2,
    "reviews": 833,
    "featured": false,
    "image": "https://picsum.photos/seed/speed-push-up-stand-ultra-speed/400/400",
    "description": "Premium push up stand from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-12",
    "name": "Speed Push Up Stand Premium",
    "slug": "speed-push-up-stand-premium-speed",
    "price": 440,
    "originalPrice": 585,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "pushup"
    ],
    "rating": 4.9,
    "reviews": 449,
    "featured": false,
    "image": "https://picsum.photos/seed/speed-push-up-stand-premium-speed/400/400",
    "description": "Premium push up stand from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-13",
    "name": "Adidas Ab Roller Wheel Premium",
    "slug": "adidas-ab-roller-wheel-premium",
    "price": 240,
    "originalPrice": 299,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.6,
    "reviews": 580,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-ab-roller-wheel-premium/400/400",
    "description": "High-quality ab roller wheel from Adidas. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-14",
    "name": "Strauss Ab Roller Wheel Standard",
    "slug": "strauss-ab-roller-wheel-standard-strauss",
    "price": 560,
    "originalPrice": 733,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.7,
    "reviews": 913,
    "featured": false,
    "image": "https://picsum.photos/seed/strauss-ab-roller-wheel-standard-strauss/400/400",
    "description": "Premium ab roller wheel from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-15",
    "name": "Fitkit Ab Roller Wheel Premium",
    "slug": "fitkit-ab-roller-wheel-premium-fitkit",
    "price": 270,
    "originalPrice": 270,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.6,
    "reviews": 793,
    "featured": false,
    "image": "https://picsum.photos/seed/fitkit-ab-roller-wheel-premium-fitkit/400/400",
    "description": "Premium ab roller wheel from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-16",
    "name": "BSN Ab Roller Wheel Standard",
    "slug": "bsn-ab-roller-wheel-standard-bsn",
    "price": 250,
    "originalPrice": 391,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 4.7,
    "reviews": 212,
    "featured": false,
    "image": "https://picsum.photos/seed/bsn-ab-roller-wheel-standard-bsn/400/400",
    "description": "Premium ab roller wheel from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-17",
    "name": "Adidas Ab Roller Wheel Plus",
    "slug": "adidas-ab-roller-wheel-plus-adidas",
    "price": 270,
    "originalPrice": 270,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.3,
    "reviews": 76,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-ab-roller-wheel-plus-adidas/400/400",
    "description": "Premium ab roller wheel from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-18",
    "name": "BSN Ab Roller Wheel Elite",
    "slug": "bsn-ab-roller-wheel-elite-bsn",
    "price": 500,
    "originalPrice": 662,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "abs",
      "core"
    ],
    "rating": 3.4,
    "reviews": 1051,
    "featured": false,
    "image": "https://picsum.photos/seed/bsn-ab-roller-wheel-elite-bsn/400/400",
    "description": "Premium ab roller wheel from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-19",
    "name": "Speed Hand Grip Strengthener",
    "slug": "speed-hand-grip-strengthener",
    "price": 250,
    "originalPrice": 250,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.7,
    "reviews": 494,
    "featured": false,
    "image": "https://picsum.photos/seed/speed-hand-grip-strengthener/400/400",
    "description": "High-quality hand grip strengthener from Speed. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-20",
    "name": "Fitkit Hand Grip Strengthener Deluxe",
    "slug": "fitkit-hand-grip-strengthener-deluxe-fitkit",
    "price": 230,
    "originalPrice": 230,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.6,
    "reviews": 228,
    "featured": false,
    "image": "https://picsum.photos/seed/fitkit-hand-grip-strengthener-deluxe-fitkit/400/400",
    "description": "Premium hand grip strengthener from Fitkit. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-21",
    "name": "BSN Hand Grip Strengthener Deluxe",
    "slug": "bsn-hand-grip-strengthener-deluxe-bsn",
    "price": 130,
    "originalPrice": 206,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 4.9,
    "reviews": 677,
    "featured": false,
    "image": "https://picsum.photos/seed/bsn-hand-grip-strengthener-deluxe-bsn/400/400",
    "description": "Premium hand grip strengthener from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-22",
    "name": "Proff Hand Grip Strengthener Ultra",
    "slug": "proff-hand-grip-strengthener-ultra-proff",
    "price": 280,
    "originalPrice": 377,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.6,
    "reviews": 805,
    "featured": false,
    "image": "https://picsum.photos/seed/proff-hand-grip-strengthener-ultra-proff/400/400",
    "description": "Premium hand grip strengthener from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-23",
    "name": "Cosco Hand Grip Strengthener Standard",
    "slug": "cosco-hand-grip-strengthener-standard-cosco",
    "price": 200,
    "originalPrice": 309,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.7,
    "reviews": 211,
    "featured": false,
    "image": "https://picsum.photos/seed/cosco-hand-grip-strengthener-standard-cosco/400/400",
    "description": "Premium hand grip strengthener from Cosco. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-24",
    "name": "Adidas Hand Grip Strengthener",
    "slug": "adidas-hand-grip-strengthener-adidas",
    "price": 310,
    "originalPrice": 426,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "strength",
      "grip"
    ],
    "rating": 3.7,
    "reviews": 641,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-hand-grip-strengthener-adidas/400/400",
    "description": "Premium hand grip strengthener from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-25",
    "name": "Speed Tennis Ball Set Ultra",
    "slug": "speed-tennis-ball-set-ultra",
    "price": 550,
    "originalPrice": 550,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.5,
    "reviews": 496,
    "featured": true,
    "image": "https://picsum.photos/seed/speed-tennis-ball-set-ultra/400/400",
    "description": "High-quality tennis ball set from Speed. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-26",
    "name": "Decathlon Tennis Ball Set Premium",
    "slug": "decathlon-tennis-ball-set-premium-decathlon",
    "price": 370,
    "originalPrice": 370,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.5,
    "reviews": 1436,
    "featured": false,
    "image": "https://picsum.photos/seed/decathlon-tennis-ball-set-premium-decathlon/400/400",
    "description": "Premium tennis ball set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-27",
    "name": "Adidas Tennis Ball Set Standard",
    "slug": "adidas-tennis-ball-set-standard-adidas",
    "price": 580,
    "originalPrice": 580,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.8,
    "reviews": 1043,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-tennis-ball-set-standard-adidas/400/400",
    "description": "Premium tennis ball set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-28",
    "name": "BSN Tennis Ball Set Deluxe",
    "slug": "bsn-tennis-ball-set-deluxe-bsn",
    "price": 430,
    "originalPrice": 510,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 3.2,
    "reviews": 753,
    "featured": false,
    "image": "https://picsum.photos/seed/bsn-tennis-ball-set-deluxe-bsn/400/400",
    "description": "Premium tennis ball set from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-29",
    "name": "Adidas Tennis Ball Set Premium",
    "slug": "adidas-tennis-ball-set-premium-adidas",
    "price": 580,
    "originalPrice": 685,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "tennis",
      "ball"
    ],
    "rating": 4.4,
    "reviews": 1096,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-tennis-ball-set-premium-adidas/400/400",
    "description": "Premium tennis ball set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-30",
    "name": "Nivia Badminton Racket Basic",
    "slug": "nivia-badminton-racket-basic",
    "price": 1500,
    "originalPrice": 1962,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.5,
    "reviews": 632,
    "featured": false,
    "image": "https://picsum.photos/seed/nivia-badminton-racket-basic/400/400",
    "description": "High-quality badminton racket from Nivia. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-31",
    "name": "Proff Badminton Racket Deluxe",
    "slug": "proff-badminton-racket-deluxe-proff",
    "price": 450,
    "originalPrice": 681,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 4.9,
    "reviews": 132,
    "featured": false,
    "image": "https://picsum.photos/seed/proff-badminton-racket-deluxe-proff/400/400",
    "description": "Premium badminton racket from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-32",
    "name": "BSN Badminton Racket Standard",
    "slug": "bsn-badminton-racket-standard-bsn",
    "price": 640,
    "originalPrice": 640,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.8,
    "reviews": 788,
    "featured": false,
    "image": "https://picsum.photos/seed/bsn-badminton-racket-standard-bsn/400/400",
    "description": "Premium badminton racket from BSN. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-33",
    "name": "Puma Badminton Racket Premium",
    "slug": "puma-badminton-racket-premium-puma",
    "price": 1110,
    "originalPrice": 1110,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.6,
    "reviews": 1167,
    "featured": false,
    "image": "https://picsum.photos/seed/puma-badminton-racket-premium-puma/400/400",
    "description": "Premium badminton racket from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-34",
    "name": "Decathlon Badminton Racket Ultra",
    "slug": "decathlon-badminton-racket-ultra-decathlon",
    "price": 1680,
    "originalPrice": 2327,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.6,
    "reviews": 1227,
    "featured": false,
    "image": "https://picsum.photos/seed/decathlon-badminton-racket-ultra-decathlon/400/400",
    "description": "Premium badminton racket from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-35",
    "name": "Decathlon Badminton Racket Premium",
    "slug": "decathlon-badminton-racket-premium-decathlon",
    "price": 1390,
    "originalPrice": 1390,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "badminton",
      "racket"
    ],
    "rating": 3.2,
    "reviews": 342,
    "featured": false,
    "image": "https://picsum.photos/seed/decathlon-badminton-racket-premium-decathlon/400/400",
    "description": "Premium badminton racket from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-36",
    "name": "Proff Cricket Bat Deluxe",
    "slug": "proff-cricket-bat-deluxe",
    "price": 2090,
    "originalPrice": 2718,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.8,
    "reviews": 1913,
    "featured": false,
    "image": "https://picsum.photos/seed/proff-cricket-bat-deluxe/400/400",
    "description": "High-quality cricket bat from Proff. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-37",
    "name": "Speed Cricket Bat Plus",
    "slug": "speed-cricket-bat-plus-speed",
    "price": 780,
    "originalPrice": 780,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.1,
    "reviews": 212,
    "featured": false,
    "image": "https://picsum.photos/seed/speed-cricket-bat-plus-speed/400/400",
    "description": "Premium cricket bat from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-38",
    "name": "Speed Cricket Bat Premium",
    "slug": "speed-cricket-bat-premium-speed",
    "price": 1880,
    "originalPrice": 2205,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 4.2,
    "reviews": 722,
    "featured": false,
    "image": "https://picsum.photos/seed/speed-cricket-bat-premium-speed/400/400",
    "description": "Premium cricket bat from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-39",
    "name": "Decathlon Cricket Bat Basic",
    "slug": "decathlon-cricket-bat-basic-decathlon",
    "price": 660,
    "originalPrice": 863,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.2,
    "reviews": 420,
    "featured": false,
    "image": "https://picsum.photos/seed/decathlon-cricket-bat-basic-decathlon/400/400",
    "description": "Premium cricket bat from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-40",
    "name": "Proff Cricket Bat Premium",
    "slug": "proff-cricket-bat-premium-proff",
    "price": 2600,
    "originalPrice": 3608,
    "category": "Sports & Outdoors",
    "tags": [
      "sports",
      "cricket",
      "bat"
    ],
    "rating": 3.1,
    "reviews": 111,
    "featured": true,
    "image": "https://picsum.photos/seed/proff-cricket-bat-premium-proff/400/400",
    "description": "Premium cricket bat from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-41",
    "name": "Fitkit Yoga Block Set",
    "slug": "fitkit-yoga-block-set",
    "price": 560,
    "originalPrice": 816,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4,
    "reviews": 1535,
    "featured": false,
    "image": "https://picsum.photos/seed/fitkit-yoga-block-set/400/400",
    "description": "High-quality yoga block set from Fitkit. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "sp-42",
    "name": "Adidas Yoga Block Set",
    "slug": "adidas-yoga-block-set-adidas",
    "price": 440,
    "originalPrice": 522,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3.5,
    "reviews": 1122,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-yoga-block-set-adidas/400/400",
    "description": "Premium yoga block set from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-43",
    "name": "Speed Yoga Block Set",
    "slug": "speed-yoga-block-set-speed",
    "price": 570,
    "originalPrice": 703,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.1,
    "reviews": 498,
    "featured": true,
    "image": "https://picsum.photos/seed/speed-yoga-block-set-speed/400/400",
    "description": "Premium yoga block set from Speed. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-44",
    "name": "Nivia Yoga Block Set Pro",
    "slug": "nivia-yoga-block-set-pro-nivia",
    "price": 390,
    "originalPrice": 390,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.6,
    "reviews": 1331,
    "featured": true,
    "image": "https://picsum.photos/seed/nivia-yoga-block-set-pro-nivia/400/400",
    "description": "Premium yoga block set from Nivia. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-45",
    "name": "Decathlon Yoga Block Set Standard",
    "slug": "decathlon-yoga-block-set-standard-decathlon",
    "price": 500,
    "originalPrice": 578,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 3,
    "reviews": 734,
    "featured": false,
    "image": "https://picsum.photos/seed/decathlon-yoga-block-set-standard-decathlon/400/400",
    "description": "Premium yoga block set from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-46",
    "name": "Proff Yoga Block Set Elite",
    "slug": "proff-yoga-block-set-elite-proff",
    "price": 400,
    "originalPrice": 400,
    "category": "Sports & Outdoors",
    "tags": [
      "fitness",
      "yoga",
      "block"
    ],
    "rating": 4.1,
    "reviews": 116,
    "featured": false,
    "image": "https://picsum.photos/seed/proff-yoga-block-set-elite-proff/400/400",
    "description": "Premium yoga block set from Proff. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-47",
    "name": "Decathlon Cycling Water Bottle Ultra",
    "slug": "decathlon-cycling-water-bottle-ultra",
    "price": 200,
    "originalPrice": 264,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 3.9,
    "reviews": 1204,
    "featured": false,
    "image": "https://picsum.photos/seed/decathlon-cycling-water-bottle-ultra/400/400",
    "description": "High-quality cycling water bottle from Decathlon. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "sp-48",
    "name": "Strauss Cycling Water Bottle Premium",
    "slug": "strauss-cycling-water-bottle-premium-strauss",
    "price": 330,
    "originalPrice": 509,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.3,
    "reviews": 967,
    "featured": false,
    "image": "https://picsum.photos/seed/strauss-cycling-water-bottle-premium-strauss/400/400",
    "description": "Premium cycling water bottle from Strauss. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "sp-49",
    "name": "Puma Cycling Water Bottle",
    "slug": "puma-cycling-water-bottle-puma",
    "price": 310,
    "originalPrice": 388,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.1,
    "reviews": 1161,
    "featured": false,
    "image": "https://picsum.photos/seed/puma-cycling-water-bottle-puma/400/400",
    "description": "Premium cycling water bottle from Puma. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-50",
    "name": "Decathlon Cycling Water Bottle Pro",
    "slug": "decathlon-cycling-water-bottle-pro-decathlon",
    "price": 500,
    "originalPrice": 500,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.2,
    "reviews": 1380,
    "featured": false,
    "image": "https://picsum.photos/seed/decathlon-cycling-water-bottle-pro-decathlon/400/400",
    "description": "Premium cycling water bottle from Decathlon. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "sp-51",
    "name": "Adidas Cycling Water Bottle Deluxe",
    "slug": "adidas-cycling-water-bottle-deluxe-adidas",
    "price": 190,
    "originalPrice": 190,
    "category": "Sports & Outdoors",
    "tags": [
      "outdoor",
      "cycling",
      "bottle"
    ],
    "rating": 4.8,
    "reviews": 1380,
    "featured": false,
    "image": "https://picsum.photos/seed/adidas-cycling-water-bottle-deluxe-adidas/400/400",
    "description": "Premium cycling water bottle from Adidas. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-1",
    "name": "L'Oreal Face Wash Elite",
    "slug": "l-oreal-face-wash-elite",
    "price": 370,
    "originalPrice": 553,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.7,
    "reviews": 732,
    "featured": false,
    "image": "https://picsum.photos/seed/l-oreal-face-wash-elite/400/400",
    "description": "High-quality face wash from L'Oreal. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-2",
    "name": "Lakme Face Wash",
    "slug": "lakme-face-wash-lakme",
    "price": 430,
    "originalPrice": 559,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.3,
    "reviews": 103,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-face-wash-lakme/400/400",
    "description": "Premium face wash from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-3",
    "name": "Wow Skin Science Face Wash Basic",
    "slug": "wow-skin-science-face-wash-basic-wow-skin-science",
    "price": 580,
    "originalPrice": 751,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.6,
    "reviews": 963,
    "featured": false,
    "image": "https://picsum.photos/seed/wow-skin-science-face-wash-basic-wow-skin-science/400/400",
    "description": "Premium face wash from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-4",
    "name": "L'Oreal Face Wash Basic",
    "slug": "l-oreal-face-wash-basic-l-oreal",
    "price": 190,
    "originalPrice": 190,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.4,
    "reviews": 805,
    "featured": false,
    "image": "https://picsum.photos/seed/l-oreal-face-wash-basic-l-oreal/400/400",
    "description": "Premium face wash from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-5",
    "name": "Mamaearth Face Wash Deluxe",
    "slug": "mamaearth-face-wash-deluxe-mamaearth",
    "price": 360,
    "originalPrice": 360,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.7,
    "reviews": 1397,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-face-wash-deluxe-mamaearth/400/400",
    "description": "Premium face wash from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-6",
    "name": "Plum Face Wash Deluxe",
    "slug": "plum-face-wash-deluxe-plum",
    "price": 190,
    "originalPrice": 267,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 3.4,
    "reviews": 1440,
    "featured": false,
    "image": "https://picsum.photos/seed/plum-face-wash-deluxe-plum/400/400",
    "description": "Premium face wash from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-7",
    "name": "Mamaearth Face Wash Standard",
    "slug": "mamaearth-face-wash-standard-mamaearth",
    "price": 330,
    "originalPrice": 436,
    "category": "Beauty",
    "tags": [
      "skincare",
      "face-wash",
      "cleanser"
    ],
    "rating": 4.7,
    "reviews": 695,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-face-wash-standard-mamaearth/400/400",
    "description": "Premium face wash from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-8",
    "name": "L'Oreal Moisturizer Basic",
    "slug": "l-oreal-moisturizer-basic",
    "price": 320,
    "originalPrice": 320,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.8,
    "reviews": 1287,
    "featured": false,
    "image": "https://picsum.photos/seed/l-oreal-moisturizer-basic/400/400",
    "description": "High-quality moisturizer from L'Oreal. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-9",
    "name": "Mamaearth Moisturizer",
    "slug": "mamaearth-moisturizer-mamaearth",
    "price": 790,
    "originalPrice": 974,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.4,
    "reviews": 251,
    "featured": true,
    "image": "https://picsum.photos/seed/mamaearth-moisturizer-mamaearth/400/400",
    "description": "Premium moisturizer from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-10",
    "name": "Lakme Moisturizer Pro",
    "slug": "lakme-moisturizer-pro-lakme",
    "price": 300,
    "originalPrice": 464,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.1,
    "reviews": 319,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-moisturizer-pro-lakme/400/400",
    "description": "Premium moisturizer from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-11",
    "name": "L'Oreal Moisturizer Elite",
    "slug": "l-oreal-moisturizer-elite-l-oreal",
    "price": 550,
    "originalPrice": 676,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 4.2,
    "reviews": 438,
    "featured": true,
    "image": "https://picsum.photos/seed/l-oreal-moisturizer-elite-l-oreal/400/400",
    "description": "Premium moisturizer from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-12",
    "name": "Mamaearth Moisturizer Elite",
    "slug": "mamaearth-moisturizer-elite-mamaearth",
    "price": 200,
    "originalPrice": 246,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.9,
    "reviews": 208,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-moisturizer-elite-mamaearth/400/400",
    "description": "Premium moisturizer from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-13",
    "name": "Wow Skin Science Moisturizer Basic",
    "slug": "wow-skin-science-moisturizer-basic-wow-skin-science",
    "price": 560,
    "originalPrice": 617,
    "category": "Beauty",
    "tags": [
      "skincare",
      "moisturizer",
      "cream"
    ],
    "rating": 3.3,
    "reviews": 306,
    "featured": false,
    "image": "https://picsum.photos/seed/wow-skin-science-moisturizer-basic-wow-skin-science/400/400",
    "description": "Premium moisturizer from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-14",
    "name": "Biotique Toner Ultra",
    "slug": "biotique-toner-ultra",
    "price": 380,
    "originalPrice": 380,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.8,
    "reviews": 705,
    "featured": false,
    "image": "https://picsum.photos/seed/biotique-toner-ultra/400/400",
    "description": "High-quality toner from Biotique. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-15",
    "name": "Mamaearth Toner Basic",
    "slug": "mamaearth-toner-basic-mamaearth",
    "price": 380,
    "originalPrice": 584,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 5,
    "reviews": 608,
    "featured": true,
    "image": "https://picsum.photos/seed/mamaearth-toner-basic-mamaearth/400/400",
    "description": "Premium toner from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-16",
    "name": "Nykaa Toner Deluxe",
    "slug": "nykaa-toner-deluxe-nykaa",
    "price": 590,
    "originalPrice": 590,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.5,
    "reviews": 1240,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-toner-deluxe-nykaa/400/400",
    "description": "Premium toner from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-17",
    "name": "Lakme Toner Premium",
    "slug": "lakme-toner-premium-lakme",
    "price": 320,
    "originalPrice": 370,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 4.6,
    "reviews": 1480,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-toner-premium-lakme/400/400",
    "description": "Premium toner from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-18",
    "name": "Mamaearth Toner",
    "slug": "mamaearth-toner-mamaearth",
    "price": 230,
    "originalPrice": 230,
    "category": "Beauty",
    "tags": [
      "skincare",
      "toner",
      "face"
    ],
    "rating": 3.7,
    "reviews": 1412,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-toner-mamaearth/400/400",
    "description": "Premium toner from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-19",
    "name": "Lakme Eye Cream Plus",
    "slug": "lakme-eye-cream-plus",
    "price": 820,
    "originalPrice": 977,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.7,
    "reviews": 1877,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-eye-cream-plus/400/400",
    "description": "High-quality eye cream from Lakme. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "be-20",
    "name": "Nykaa Eye Cream Standard",
    "slug": "nykaa-eye-cream-standard-nykaa",
    "price": 360,
    "originalPrice": 360,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.9,
    "reviews": 430,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-eye-cream-standard-nykaa/400/400",
    "description": "Premium eye cream from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-21",
    "name": "Wow Skin Science Eye Cream Deluxe",
    "slug": "wow-skin-science-eye-cream-deluxe-wow-skin-science",
    "price": 820,
    "originalPrice": 1193,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.3,
    "reviews": 984,
    "featured": false,
    "image": "https://picsum.photos/seed/wow-skin-science-eye-cream-deluxe-wow-skin-science/400/400",
    "description": "Premium eye cream from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-22",
    "name": "L'Oreal Eye Cream",
    "slug": "l-oreal-eye-cream-l-oreal",
    "price": 550,
    "originalPrice": 610,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.5,
    "reviews": 839,
    "featured": false,
    "image": "https://picsum.photos/seed/l-oreal-eye-cream-l-oreal/400/400",
    "description": "Premium eye cream from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-23",
    "name": "Maybelline Eye Cream Deluxe",
    "slug": "maybelline-eye-cream-deluxe-maybelline",
    "price": 550,
    "originalPrice": 550,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 4.4,
    "reviews": 578,
    "featured": false,
    "image": "https://picsum.photos/seed/maybelline-eye-cream-deluxe-maybelline/400/400",
    "description": "Premium eye cream from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-24",
    "name": "Lakme Eye Cream Deluxe",
    "slug": "lakme-eye-cream-deluxe-lakme",
    "price": 820,
    "originalPrice": 820,
    "category": "Beauty",
    "tags": [
      "skincare",
      "eyes",
      "cream"
    ],
    "rating": 3.1,
    "reviews": 1156,
    "featured": true,
    "image": "https://picsum.photos/seed/lakme-eye-cream-deluxe-lakme/400/400",
    "description": "Premium eye cream from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-25",
    "name": "The Derma Co Shampoo Basic",
    "slug": "the-derma-co-shampoo-basic",
    "price": 290,
    "originalPrice": 290,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4,
    "reviews": 451,
    "featured": false,
    "image": "https://picsum.photos/seed/the-derma-co-shampoo-basic/400/400",
    "description": "High-quality shampoo from The Derma Co. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-26",
    "name": "Mamaearth Shampoo",
    "slug": "mamaearth-shampoo-mamaearth",
    "price": 780,
    "originalPrice": 780,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 3.7,
    "reviews": 780,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-shampoo-mamaearth/400/400",
    "description": "Premium shampoo from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-27",
    "name": "Minimalist Shampoo Elite",
    "slug": "minimalist-shampoo-elite-minimalist",
    "price": 200,
    "originalPrice": 200,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.3,
    "reviews": 1485,
    "featured": false,
    "image": "https://picsum.photos/seed/minimalist-shampoo-elite-minimalist/400/400",
    "description": "Premium shampoo from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-28",
    "name": "Wow Skin Science Shampoo Elite",
    "slug": "wow-skin-science-shampoo-elite-wow-skin-science",
    "price": 440,
    "originalPrice": 440,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.8,
    "reviews": 751,
    "featured": false,
    "image": "https://picsum.photos/seed/wow-skin-science-shampoo-elite-wow-skin-science/400/400",
    "description": "Premium shampoo from Wow Skin Science. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-29",
    "name": "Mamaearth Shampoo Premium",
    "slug": "mamaearth-shampoo-premium-mamaearth",
    "price": 460,
    "originalPrice": 460,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.7,
    "reviews": 424,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-shampoo-premium-mamaearth/400/400",
    "description": "Premium shampoo from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-30",
    "name": "Lakme Shampoo",
    "slug": "lakme-shampoo-lakme",
    "price": 440,
    "originalPrice": 440,
    "category": "Beauty",
    "tags": [
      "hair",
      "shampoo",
      "care"
    ],
    "rating": 4.7,
    "reviews": 1458,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-shampoo-lakme/400/400",
    "description": "Premium shampoo from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-31",
    "name": "Nykaa Hair Oil",
    "slug": "nykaa-hair-oil",
    "price": 280,
    "originalPrice": 280,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.2,
    "reviews": 118,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-hair-oil/400/400",
    "description": "High-quality hair oil from Nykaa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-32",
    "name": "Minimalist Hair Oil Ultra",
    "slug": "minimalist-hair-oil-ultra-minimalist",
    "price": 560,
    "originalPrice": 691,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.6,
    "reviews": 1310,
    "featured": false,
    "image": "https://picsum.photos/seed/minimalist-hair-oil-ultra-minimalist/400/400",
    "description": "Premium hair oil from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-33",
    "name": "Biotique Hair Oil Pro",
    "slug": "biotique-hair-oil-pro-biotique",
    "price": 380,
    "originalPrice": 447,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 4.8,
    "reviews": 727,
    "featured": false,
    "image": "https://picsum.photos/seed/biotique-hair-oil-pro-biotique/400/400",
    "description": "Premium hair oil from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-34",
    "name": "Maybelline Hair Oil Basic",
    "slug": "maybelline-hair-oil-basic-maybelline",
    "price": 230,
    "originalPrice": 230,
    "category": "Beauty",
    "tags": [
      "hair",
      "oil",
      "natural"
    ],
    "rating": 3.8,
    "reviews": 855,
    "featured": false,
    "image": "https://picsum.photos/seed/maybelline-hair-oil-basic-maybelline/400/400",
    "description": "Premium hair oil from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-35",
    "name": "Maybelline Body Lotion",
    "slug": "maybelline-body-lotion",
    "price": 340,
    "originalPrice": 340,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.9,
    "reviews": 817,
    "featured": false,
    "image": "https://picsum.photos/seed/maybelline-body-lotion/400/400",
    "description": "High-quality body lotion from Maybelline. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-36",
    "name": "Nykaa Body Lotion Plus",
    "slug": "nykaa-body-lotion-plus-nykaa",
    "price": 620,
    "originalPrice": 936,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.2,
    "reviews": 542,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-body-lotion-plus-nykaa/400/400",
    "description": "Premium body lotion from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-37",
    "name": "Nykaa Body Lotion Pro",
    "slug": "nykaa-body-lotion-pro-nykaa",
    "price": 480,
    "originalPrice": 580,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.3,
    "reviews": 1071,
    "featured": true,
    "image": "https://picsum.photos/seed/nykaa-body-lotion-pro-nykaa/400/400",
    "description": "Premium body lotion from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-38",
    "name": "Plum Body Lotion Basic",
    "slug": "plum-body-lotion-basic-plum",
    "price": 230,
    "originalPrice": 230,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.2,
    "reviews": 911,
    "featured": false,
    "image": "https://picsum.photos/seed/plum-body-lotion-basic-plum/400/400",
    "description": "Premium body lotion from Plum. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-39",
    "name": "Nykaa Body Lotion Standard",
    "slug": "nykaa-body-lotion-standard-nykaa",
    "price": 680,
    "originalPrice": 680,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 3.4,
    "reviews": 580,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-body-lotion-standard-nykaa/400/400",
    "description": "Premium body lotion from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-40",
    "name": "Lakme Body Lotion Deluxe",
    "slug": "lakme-body-lotion-deluxe-lakme",
    "price": 480,
    "originalPrice": 581,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.1,
    "reviews": 1156,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-body-lotion-deluxe-lakme/400/400",
    "description": "Premium body lotion from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-41",
    "name": "The Derma Co Body Lotion Deluxe",
    "slug": "the-derma-co-body-lotion-deluxe-the-derma-co",
    "price": 280,
    "originalPrice": 326,
    "category": "Beauty",
    "tags": [
      "skincare",
      "body",
      "lotion"
    ],
    "rating": 4.7,
    "reviews": 991,
    "featured": false,
    "image": "https://picsum.photos/seed/the-derma-co-body-lotion-deluxe-the-derma-co/400/400",
    "description": "Premium body lotion from The Derma Co. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-42",
    "name": "Wow Skin Science Lipstick Ultra",
    "slug": "wow-skin-science-lipstick-ultra",
    "price": 280,
    "originalPrice": 280,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 5,
    "reviews": 397,
    "featured": false,
    "image": "https://picsum.photos/seed/wow-skin-science-lipstick-ultra/400/400",
    "description": "High-quality lipstick from Wow Skin Science. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-43",
    "name": "Maybelline Lipstick Basic",
    "slug": "maybelline-lipstick-basic-maybelline",
    "price": 430,
    "originalPrice": 523,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.1,
    "reviews": 245,
    "featured": false,
    "image": "https://picsum.photos/seed/maybelline-lipstick-basic-maybelline/400/400",
    "description": "Premium lipstick from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-44",
    "name": "Mamaearth Lipstick Standard",
    "slug": "mamaearth-lipstick-standard-mamaearth",
    "price": 830,
    "originalPrice": 1245,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.5,
    "reviews": 515,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-lipstick-standard-mamaearth/400/400",
    "description": "Premium lipstick from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-45",
    "name": "L'Oreal Lipstick Ultra",
    "slug": "l-oreal-lipstick-ultra-l-oreal",
    "price": 530,
    "originalPrice": 623,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.1,
    "reviews": 348,
    "featured": false,
    "image": "https://picsum.photos/seed/l-oreal-lipstick-ultra-l-oreal/400/400",
    "description": "Premium lipstick from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-46",
    "name": "Maybelline Lipstick Premium",
    "slug": "maybelline-lipstick-premium-maybelline",
    "price": 610,
    "originalPrice": 827,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 5,
    "reviews": 16,
    "featured": false,
    "image": "https://picsum.photos/seed/maybelline-lipstick-premium-maybelline/400/400",
    "description": "Premium lipstick from Maybelline. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-47",
    "name": "Lakme Lipstick Basic",
    "slug": "lakme-lipstick-basic-lakme",
    "price": 300,
    "originalPrice": 300,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 3.4,
    "reviews": 1217,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-lipstick-basic-lakme/400/400",
    "description": "Premium lipstick from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-48",
    "name": "Nykaa Lipstick Plus",
    "slug": "nykaa-lipstick-plus-nykaa",
    "price": 870,
    "originalPrice": 1162,
    "category": "Beauty",
    "tags": [
      "makeup",
      "lipstick"
    ],
    "rating": 4.4,
    "reviews": 1354,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-lipstick-plus-nykaa/400/400",
    "description": "Premium lipstick from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-49",
    "name": "Nykaa Kajal Ultra",
    "slug": "nykaa-kajal-ultra",
    "price": 290,
    "originalPrice": 352,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.7,
    "reviews": 1178,
    "featured": true,
    "image": "https://picsum.photos/seed/nykaa-kajal-ultra/400/400",
    "description": "High-quality kajal from Nykaa. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-50",
    "name": "Nykaa Kajal Deluxe",
    "slug": "nykaa-kajal-deluxe-nykaa",
    "price": 220,
    "originalPrice": 337,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.5,
    "reviews": 1354,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-kajal-deluxe-nykaa/400/400",
    "description": "Premium kajal from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-51",
    "name": "Minimalist Kajal Deluxe",
    "slug": "minimalist-kajal-deluxe-minimalist",
    "price": 170,
    "originalPrice": 170,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.1,
    "reviews": 617,
    "featured": false,
    "image": "https://picsum.photos/seed/minimalist-kajal-deluxe-minimalist/400/400",
    "description": "Premium kajal from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-52",
    "name": "Lakme Kajal Ultra",
    "slug": "lakme-kajal-ultra-lakme",
    "price": 200,
    "originalPrice": 221,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 3.9,
    "reviews": 875,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-kajal-ultra-lakme/400/400",
    "description": "Premium kajal from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-53",
    "name": "Mamaearth Kajal Standard",
    "slug": "mamaearth-kajal-standard-mamaearth",
    "price": 340,
    "originalPrice": 391,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.8,
    "reviews": 968,
    "featured": false,
    "image": "https://picsum.photos/seed/mamaearth-kajal-standard-mamaearth/400/400",
    "description": "Premium kajal from Mamaearth. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-54",
    "name": "Nykaa Kajal Standard",
    "slug": "nykaa-kajal-standard-nykaa",
    "price": 200,
    "originalPrice": 303,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4,
    "reviews": 431,
    "featured": false,
    "image": "https://picsum.photos/seed/nykaa-kajal-standard-nykaa/400/400",
    "description": "Premium kajal from Nykaa. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-55",
    "name": "L'Oreal Kajal Plus",
    "slug": "l-oreal-kajal-plus-l-oreal",
    "price": 160,
    "originalPrice": 218,
    "category": "Beauty",
    "tags": [
      "makeup",
      "kajal",
      "eyes"
    ],
    "rating": 4.5,
    "reviews": 622,
    "featured": true,
    "image": "https://picsum.photos/seed/l-oreal-kajal-plus-l-oreal/400/400",
    "description": "Premium kajal from L'Oreal. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-56",
    "name": "The Derma Co Nail Polish Set Plus",
    "slug": "the-derma-co-nail-polish-set-plus",
    "price": 140,
    "originalPrice": 140,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 1553,
    "featured": false,
    "image": "https://picsum.photos/seed/the-derma-co-nail-polish-set-plus/400/400",
    "description": "High-quality nail polish set from The Derma Co. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "be-57",
    "name": "Lakme Nail Polish Set Basic",
    "slug": "lakme-nail-polish-set-basic-lakme",
    "price": 210,
    "originalPrice": 276,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 85,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-nail-polish-set-basic-lakme/400/400",
    "description": "Premium nail polish set from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "be-58",
    "name": "Minimalist Nail Polish Set Basic",
    "slug": "minimalist-nail-polish-set-basic-minimalist",
    "price": 110,
    "originalPrice": 139,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.7,
    "reviews": 1322,
    "featured": false,
    "image": "https://picsum.photos/seed/minimalist-nail-polish-set-basic-minimalist/400/400",
    "description": "Premium nail polish set from Minimalist. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-59",
    "name": "Biotique Nail Polish Set Deluxe",
    "slug": "biotique-nail-polish-set-deluxe-biotique",
    "price": 250,
    "originalPrice": 250,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 3.9,
    "reviews": 711,
    "featured": false,
    "image": "https://picsum.photos/seed/biotique-nail-polish-set-deluxe-biotique/400/400",
    "description": "Premium nail polish set from Biotique. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-60",
    "name": "Lakme Nail Polish Set Elite",
    "slug": "lakme-nail-polish-set-elite-lakme",
    "price": 400,
    "originalPrice": 480,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 4.1,
    "reviews": 1042,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-nail-polish-set-elite-lakme/400/400",
    "description": "Premium nail polish set from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "be-61",
    "name": "Lakme Nail Polish Set Ultra",
    "slug": "lakme-nail-polish-set-ultra-lakme",
    "price": 200,
    "originalPrice": 317,
    "category": "Beauty",
    "tags": [
      "makeup",
      "nails",
      "polish"
    ],
    "rating": 5,
    "reviews": 200,
    "featured": false,
    "image": "https://picsum.photos/seed/lakme-nail-polish-set-ultra-lakme/400/400",
    "description": "Premium nail polish set from Lakme. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-1",
    "name": "MSI Ultrabook Laptop",
    "slug": "msi-ultrabook-laptop",
    "price": 65290,
    "originalPrice": 82053,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.5,
    "reviews": 1832,
    "featured": false,
    "image": "https://picsum.photos/seed/msi-ultrabook-laptop/400/400",
    "description": "High-quality ultrabook laptop from MSI. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-2",
    "name": "Lenovo Ultrabook Laptop Basic",
    "slug": "lenovo-ultrabook-laptop-basic-lenovo",
    "price": 77040,
    "originalPrice": 77040,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.5,
    "reviews": 894,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-ultrabook-laptop-basic-lenovo/400/400",
    "description": "Premium ultrabook laptop from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-3",
    "name": "Microsoft Ultrabook Laptop Elite",
    "slug": "microsoft-ultrabook-laptop-elite-microsoft",
    "price": 90410,
    "originalPrice": 138499,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3,
    "reviews": 1381,
    "featured": false,
    "image": "https://picsum.photos/seed/microsoft-ultrabook-laptop-elite-microsoft/400/400",
    "description": "Premium ultrabook laptop from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-4",
    "name": "Apple Ultrabook Laptop Basic",
    "slug": "apple-ultrabook-laptop-basic-apple",
    "price": 51450,
    "originalPrice": 73212,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.6,
    "reviews": 901,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-ultrabook-laptop-basic-apple/400/400",
    "description": "Premium ultrabook laptop from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-5",
    "name": "Acer Ultrabook Laptop Pro",
    "slug": "acer-ultrabook-laptop-pro-acer",
    "price": 105270,
    "originalPrice": 166829,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 3.9,
    "reviews": 305,
    "featured": true,
    "image": "https://picsum.photos/seed/acer-ultrabook-laptop-pro-acer/400/400",
    "description": "Premium ultrabook laptop from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-6",
    "name": "Dell Ultrabook Laptop Standard",
    "slug": "dell-ultrabook-laptop-standard-dell",
    "price": 49090,
    "originalPrice": 65876,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "ultrabook",
      "premium"
    ],
    "rating": 4.9,
    "reviews": 1000,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-ultrabook-laptop-standard-dell/400/400",
    "description": "Premium ultrabook laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-7",
    "name": "Acer Gaming Laptop Basic",
    "slug": "acer-gaming-laptop-basic",
    "price": 56030,
    "originalPrice": 56030,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.8,
    "reviews": 1505,
    "featured": false,
    "image": "https://picsum.photos/seed/acer-gaming-laptop-basic/400/400",
    "description": "High-quality gaming laptop from Acer. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "la-8",
    "name": "Dell Gaming Laptop Basic",
    "slug": "dell-gaming-laptop-basic-dell",
    "price": 135310,
    "originalPrice": 178829,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.6,
    "reviews": 998,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-gaming-laptop-basic-dell/400/400",
    "description": "Premium gaming laptop from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-9",
    "name": "Samsung Gaming Laptop Deluxe",
    "slug": "samsung-gaming-laptop-deluxe-samsung",
    "price": 148320,
    "originalPrice": 148320,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.7,
    "reviews": 326,
    "featured": false,
    "image": "https://picsum.photos/seed/samsung-gaming-laptop-deluxe-samsung/400/400",
    "description": "Premium gaming laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-10",
    "name": "Samsung Gaming Laptop",
    "slug": "samsung-gaming-laptop-samsung",
    "price": 56750,
    "originalPrice": 56750,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.2,
    "reviews": 1403,
    "featured": false,
    "image": "https://picsum.photos/seed/samsung-gaming-laptop-samsung/400/400",
    "description": "Premium gaming laptop from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-11",
    "name": "MSI Gaming Laptop Plus",
    "slug": "msi-gaming-laptop-plus-msi",
    "price": 93000,
    "originalPrice": 134220,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 3.9,
    "reviews": 415,
    "featured": false,
    "image": "https://picsum.photos/seed/msi-gaming-laptop-plus-msi/400/400",
    "description": "Premium gaming laptop from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-12",
    "name": "HP Gaming Laptop Premium",
    "slug": "hp-gaming-laptop-premium-hp",
    "price": 129080,
    "originalPrice": 129080,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.7,
    "reviews": 918,
    "featured": false,
    "image": "https://picsum.photos/seed/hp-gaming-laptop-premium-hp/400/400",
    "description": "Premium gaming laptop from HP. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-13",
    "name": "ASUS Gaming Laptop Standard",
    "slug": "asus-gaming-laptop-standard-asus",
    "price": 104430,
    "originalPrice": 123571,
    "category": "Laptops & Computers",
    "tags": [
      "laptop",
      "gaming",
      "performance"
    ],
    "rating": 4.9,
    "reviews": 960,
    "featured": true,
    "image": "https://picsum.photos/seed/asus-gaming-laptop-standard-asus/400/400",
    "description": "Premium gaming laptop from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-14",
    "name": "Lenovo Monitor 24-inch Deluxe",
    "slug": "lenovo-monitor-24-inch-deluxe",
    "price": 21680,
    "originalPrice": 27262,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.3,
    "reviews": 1050,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-monitor-24-inch-deluxe/400/400",
    "description": "High-quality monitor 24-inch from Lenovo. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-15",
    "name": "Xiaomi Monitor 24-inch",
    "slug": "xiaomi-monitor-24-inch-xiaomi",
    "price": 15200,
    "originalPrice": 15200,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.6,
    "reviews": 1128,
    "featured": false,
    "image": "https://picsum.photos/seed/xiaomi-monitor-24-inch-xiaomi/400/400",
    "description": "Premium monitor 24-inch from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-16",
    "name": "ASUS Monitor 24-inch Pro",
    "slug": "asus-monitor-24-inch-pro-asus",
    "price": 20280,
    "originalPrice": 23791,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.5,
    "reviews": 498,
    "featured": false,
    "image": "https://picsum.photos/seed/asus-monitor-24-inch-pro-asus/400/400",
    "description": "Premium monitor 24-inch from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-17",
    "name": "Apple Monitor 24-inch Elite",
    "slug": "apple-monitor-24-inch-elite-apple",
    "price": 8750,
    "originalPrice": 13851,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 3.7,
    "reviews": 127,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-monitor-24-inch-elite-apple/400/400",
    "description": "Premium monitor 24-inch from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-18",
    "name": "Microsoft Monitor 24-inch",
    "slug": "microsoft-monitor-24-inch-microsoft",
    "price": 24230,
    "originalPrice": 24230,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.9,
    "reviews": 773,
    "featured": false,
    "image": "https://picsum.photos/seed/microsoft-monitor-24-inch-microsoft/400/400",
    "description": "Premium monitor 24-inch from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-19",
    "name": "Samsung Monitor 24-inch Plus",
    "slug": "samsung-monitor-24-inch-plus-samsung",
    "price": 15290,
    "originalPrice": 15290,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.4,
    "reviews": 12,
    "featured": false,
    "image": "https://picsum.photos/seed/samsung-monitor-24-inch-plus-samsung/400/400",
    "description": "Premium monitor 24-inch from Samsung. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-20",
    "name": "Microsoft Monitor 24-inch Basic",
    "slug": "microsoft-monitor-24-inch-basic-microsoft",
    "price": 19650,
    "originalPrice": 25046,
    "category": "Laptops & Computers",
    "tags": [
      "monitor",
      "display"
    ],
    "rating": 4.5,
    "reviews": 14,
    "featured": false,
    "image": "https://picsum.photos/seed/microsoft-monitor-24-inch-basic-microsoft/400/400",
    "description": "Premium monitor 24-inch from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-21",
    "name": "Dell Mechanical Keyboard Standard",
    "slug": "dell-mechanical-keyboard-standard",
    "price": 2010,
    "originalPrice": 2010,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 4.7,
    "reviews": 1090,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-mechanical-keyboard-standard/400/400",
    "description": "High-quality mechanical keyboard from Dell. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-22",
    "name": "Dell Mechanical Keyboard Premium",
    "slug": "dell-mechanical-keyboard-premium-dell",
    "price": 4530,
    "originalPrice": 7000,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.5,
    "reviews": 257,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-mechanical-keyboard-premium-dell/400/400",
    "description": "Premium mechanical keyboard from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-23",
    "name": "ASUS Mechanical Keyboard Basic",
    "slug": "asus-mechanical-keyboard-basic-asus",
    "price": 2060,
    "originalPrice": 2636,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.9,
    "reviews": 183,
    "featured": false,
    "image": "https://picsum.photos/seed/asus-mechanical-keyboard-basic-asus/400/400",
    "description": "Premium mechanical keyboard from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-24",
    "name": "Apple Mechanical Keyboard Plus",
    "slug": "apple-mechanical-keyboard-plus-apple",
    "price": 1820,
    "originalPrice": 1820,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.9,
    "reviews": 153,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-mechanical-keyboard-plus-apple/400/400",
    "description": "Premium mechanical keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-25",
    "name": "Lenovo Mechanical Keyboard Standard",
    "slug": "lenovo-mechanical-keyboard-standard-lenovo",
    "price": 2080,
    "originalPrice": 2080,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.8,
    "reviews": 520,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-mechanical-keyboard-standard-lenovo/400/400",
    "description": "Premium mechanical keyboard from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-26",
    "name": "Dell Mechanical Keyboard Deluxe",
    "slug": "dell-mechanical-keyboard-deluxe-dell",
    "price": 7900,
    "originalPrice": 11579,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "mechanical",
      "rgb"
    ],
    "rating": 3.4,
    "reviews": 661,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-mechanical-keyboard-deluxe-dell/400/400",
    "description": "Premium mechanical keyboard from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-27",
    "name": "Apple External Hard Drive 1TB Plus",
    "slug": "apple-external-hard-drive-1tb-plus",
    "price": 5580,
    "originalPrice": 5580,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.8,
    "reviews": 393,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-external-hard-drive-1tb-plus/400/400",
    "description": "High-quality external hard drive 1tb from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-28",
    "name": "Dell External Hard Drive 1TB Pro",
    "slug": "dell-external-hard-drive-1tb-pro-dell",
    "price": 4930,
    "originalPrice": 6746,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.9,
    "reviews": 866,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-external-hard-drive-1tb-pro-dell/400/400",
    "description": "Premium external hard drive 1tb from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-29",
    "name": "Lenovo External Hard Drive 1TB Standard",
    "slug": "lenovo-external-hard-drive-1tb-standard-lenovo",
    "price": 5630,
    "originalPrice": 5630,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.1,
    "reviews": 1273,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-external-hard-drive-1tb-standard-lenovo/400/400",
    "description": "Premium external hard drive 1tb from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-30",
    "name": "Lenovo External Hard Drive 1TB Elite",
    "slug": "lenovo-external-hard-drive-1tb-elite-lenovo",
    "price": 5330,
    "originalPrice": 5330,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 3.1,
    "reviews": 862,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-external-hard-drive-1tb-elite-lenovo/400/400",
    "description": "Premium external hard drive 1tb from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-31",
    "name": "ASUS External Hard Drive 1TB Plus",
    "slug": "asus-external-hard-drive-1tb-plus-asus",
    "price": 5050,
    "originalPrice": 5050,
    "category": "Laptops & Computers",
    "tags": [
      "storage",
      "external",
      "hard-drive"
    ],
    "rating": 4.3,
    "reviews": 682,
    "featured": true,
    "image": "https://picsum.photos/seed/asus-external-hard-drive-1tb-plus-asus/400/400",
    "description": "Premium external hard drive 1tb from ASUS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-32",
    "name": "Acer USB Mouse Elite",
    "slug": "acer-usb-mouse-elite",
    "price": 850,
    "originalPrice": 1145,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.2,
    "reviews": 349,
    "featured": false,
    "image": "https://picsum.photos/seed/acer-usb-mouse-elite/400/400",
    "description": "High-quality usb mouse from Acer. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-33",
    "name": "Microsoft USB Mouse Deluxe",
    "slug": "microsoft-usb-mouse-deluxe-microsoft",
    "price": 430,
    "originalPrice": 613,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.2,
    "reviews": 1283,
    "featured": false,
    "image": "https://picsum.photos/seed/microsoft-usb-mouse-deluxe-microsoft/400/400",
    "description": "Premium usb mouse from Microsoft. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-34",
    "name": "HP USB Mouse Elite",
    "slug": "hp-usb-mouse-elite-hp",
    "price": 520,
    "originalPrice": 645,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.4,
    "reviews": 922,
    "featured": true,
    "image": "https://picsum.photos/seed/hp-usb-mouse-elite-hp/400/400",
    "description": "Premium usb mouse from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-35",
    "name": "MSI USB Mouse Standard",
    "slug": "msi-usb-mouse-standard-msi",
    "price": 950,
    "originalPrice": 950,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4.8,
    "reviews": 343,
    "featured": false,
    "image": "https://picsum.photos/seed/msi-usb-mouse-standard-msi/400/400",
    "description": "Premium usb mouse from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-36",
    "name": "Apple USB Mouse Premium",
    "slug": "apple-usb-mouse-premium-apple",
    "price": 460,
    "originalPrice": 689,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "mouse",
      "wired"
    ],
    "rating": 4,
    "reviews": 714,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-usb-mouse-premium-apple/400/400",
    "description": "Premium usb mouse from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-37",
    "name": "Microsoft Laptop Stand Deluxe",
    "slug": "microsoft-laptop-stand-deluxe",
    "price": 1250,
    "originalPrice": 1849,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.6,
    "reviews": 1375,
    "featured": false,
    "image": "https://picsum.photos/seed/microsoft-laptop-stand-deluxe/400/400",
    "description": "High-quality laptop stand from Microsoft. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-38",
    "name": "HP Laptop Stand Ultra",
    "slug": "hp-laptop-stand-ultra-hp",
    "price": 1880,
    "originalPrice": 2894,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.1,
    "reviews": 530,
    "featured": true,
    "image": "https://picsum.photos/seed/hp-laptop-stand-ultra-hp/400/400",
    "description": "Premium laptop stand from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-39",
    "name": "Dell Laptop Stand",
    "slug": "dell-laptop-stand-dell",
    "price": 1590,
    "originalPrice": 1590,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 3.3,
    "reviews": 111,
    "featured": false,
    "image": "https://picsum.photos/seed/dell-laptop-stand-dell/400/400",
    "description": "Premium laptop stand from Dell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-40",
    "name": "Lenovo Laptop Stand Deluxe",
    "slug": "lenovo-laptop-stand-deluxe-lenovo",
    "price": 2310,
    "originalPrice": 3021,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 5,
    "reviews": 1360,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-laptop-stand-deluxe-lenovo/400/400",
    "description": "Premium laptop stand from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-41",
    "name": "HP Laptop Stand Plus",
    "slug": "hp-laptop-stand-plus-hp",
    "price": 1100,
    "originalPrice": 1100,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "laptop-stand",
      "ergonomic"
    ],
    "rating": 4.6,
    "reviews": 116,
    "featured": false,
    "image": "https://picsum.photos/seed/hp-laptop-stand-plus-hp/400/400",
    "description": "Premium laptop stand from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-42",
    "name": "Samsung Wireless Keyboard Elite",
    "slug": "samsung-wireless-keyboard-elite",
    "price": 1030,
    "originalPrice": 1030,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.7,
    "reviews": 1157,
    "featured": false,
    "image": "https://picsum.photos/seed/samsung-wireless-keyboard-elite/400/400",
    "description": "High-quality wireless keyboard from Samsung. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-43",
    "name": "HP Wireless Keyboard Premium",
    "slug": "hp-wireless-keyboard-premium-hp",
    "price": 1190,
    "originalPrice": 1190,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.9,
    "reviews": 1411,
    "featured": false,
    "image": "https://picsum.photos/seed/hp-wireless-keyboard-premium-hp/400/400",
    "description": "Premium wireless keyboard from HP. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-44",
    "name": "Lenovo Wireless Keyboard Plus",
    "slug": "lenovo-wireless-keyboard-plus-lenovo",
    "price": 2300,
    "originalPrice": 3583,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.4,
    "reviews": 1376,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-wireless-keyboard-plus-lenovo/400/400",
    "description": "Premium wireless keyboard from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-45",
    "name": "Xiaomi Wireless Keyboard Pro",
    "slug": "xiaomi-wireless-keyboard-pro-xiaomi",
    "price": 2550,
    "originalPrice": 3717,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.5,
    "reviews": 1124,
    "featured": false,
    "image": "https://picsum.photos/seed/xiaomi-wireless-keyboard-pro-xiaomi/400/400",
    "description": "Premium wireless keyboard from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-46",
    "name": "MSI Wireless Keyboard Premium",
    "slug": "msi-wireless-keyboard-premium-msi",
    "price": 2710,
    "originalPrice": 2710,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 4.8,
    "reviews": 528,
    "featured": false,
    "image": "https://picsum.photos/seed/msi-wireless-keyboard-premium-msi/400/400",
    "description": "Premium wireless keyboard from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-47",
    "name": "Apple Wireless Keyboard",
    "slug": "apple-wireless-keyboard-apple",
    "price": 1190,
    "originalPrice": 1190,
    "category": "Laptops & Computers",
    "tags": [
      "keyboard",
      "wireless",
      "bluetooth"
    ],
    "rating": 3.3,
    "reviews": 1318,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-wireless-keyboard-apple/400/400",
    "description": "Premium wireless keyboard from Apple. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-48",
    "name": "MSI Laptop Bag Plus",
    "slug": "msi-laptop-bag-plus",
    "price": 2840,
    "originalPrice": 3812,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 462,
    "featured": true,
    "image": "https://picsum.photos/seed/msi-laptop-bag-plus/400/400",
    "description": "High-quality laptop bag from MSI. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-49",
    "name": "MSI Laptop Bag Basic",
    "slug": "msi-laptop-bag-basic-msi",
    "price": 1140,
    "originalPrice": 1671,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.4,
    "reviews": 1278,
    "featured": false,
    "image": "https://picsum.photos/seed/msi-laptop-bag-basic-msi/400/400",
    "description": "Premium laptop bag from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "la-50",
    "name": "Acer Laptop Bag Standard",
    "slug": "acer-laptop-bag-standard-acer",
    "price": 1320,
    "originalPrice": 2061,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 4.2,
    "reviews": 785,
    "featured": false,
    "image": "https://picsum.photos/seed/acer-laptop-bag-standard-acer/400/400",
    "description": "Premium laptop bag from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-51",
    "name": "Lenovo Laptop Bag Standard",
    "slug": "lenovo-laptop-bag-standard-lenovo",
    "price": 2630,
    "originalPrice": 2630,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "bag",
      "laptop"
    ],
    "rating": 3.9,
    "reviews": 454,
    "featured": false,
    "image": "https://picsum.photos/seed/lenovo-laptop-bag-standard-lenovo/400/400",
    "description": "Premium laptop bag from Lenovo. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-52",
    "name": "Apple Cooling Pad Pro",
    "slug": "apple-cooling-pad-pro",
    "price": 1370,
    "originalPrice": 1370,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.4,
    "reviews": 214,
    "featured": false,
    "image": "https://picsum.photos/seed/apple-cooling-pad-pro/400/400",
    "description": "High-quality cooling pad from Apple. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "la-53",
    "name": "Acer Cooling Pad Pro",
    "slug": "acer-cooling-pad-pro-acer",
    "price": 480,
    "originalPrice": 752,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.6,
    "reviews": 568,
    "featured": false,
    "image": "https://picsum.photos/seed/acer-cooling-pad-pro-acer/400/400",
    "description": "Premium cooling pad from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-54",
    "name": "Acer Cooling Pad Deluxe",
    "slug": "acer-cooling-pad-deluxe-acer",
    "price": 920,
    "originalPrice": 920,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.1,
    "reviews": 1130,
    "featured": false,
    "image": "https://picsum.photos/seed/acer-cooling-pad-deluxe-acer/400/400",
    "description": "Premium cooling pad from Acer. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-55",
    "name": "Xiaomi Cooling Pad Basic",
    "slug": "xiaomi-cooling-pad-basic-xiaomi",
    "price": 750,
    "originalPrice": 750,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.9,
    "reviews": 1225,
    "featured": false,
    "image": "https://picsum.photos/seed/xiaomi-cooling-pad-basic-xiaomi/400/400",
    "description": "Premium cooling pad from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-56",
    "name": "Xiaomi Cooling Pad Plus",
    "slug": "xiaomi-cooling-pad-plus-xiaomi",
    "price": 1140,
    "originalPrice": 1666,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 3.8,
    "reviews": 305,
    "featured": false,
    "image": "https://picsum.photos/seed/xiaomi-cooling-pad-plus-xiaomi/400/400",
    "description": "Premium cooling pad from Xiaomi. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "la-57",
    "name": "MSI Cooling Pad Premium",
    "slug": "msi-cooling-pad-premium-msi",
    "price": 1290,
    "originalPrice": 2044,
    "category": "Laptops & Computers",
    "tags": [
      "accessories",
      "cooling",
      "laptop"
    ],
    "rating": 4.9,
    "reviews": 880,
    "featured": false,
    "image": "https://picsum.photos/seed/msi-cooling-pad-premium-msi/400/400",
    "description": "Premium cooling pad from MSI. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-1",
    "name": "DOMS A4 Notebook Pack Basic",
    "slug": "doms-a4-notebook-pack-basic",
    "price": 250,
    "originalPrice": 361,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.1,
    "reviews": 1702,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-a4-notebook-pack-basic/400/400",
    "description": "High-quality a4 notebook pack from DOMS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-2",
    "name": "Maped A4 Notebook Pack Standard",
    "slug": "maped-a4-notebook-pack-standard-maped",
    "price": 350,
    "originalPrice": 350,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4,
    "reviews": 678,
    "featured": false,
    "image": "https://picsum.photos/seed/maped-a4-notebook-pack-standard-maped/400/400",
    "description": "Premium a4 notebook pack from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-3",
    "name": "Staedtler A4 Notebook Pack Deluxe",
    "slug": "staedtler-a4-notebook-pack-deluxe-staedtler",
    "price": 180,
    "originalPrice": 180,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.4,
    "reviews": 1201,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-a4-notebook-pack-deluxe-staedtler/400/400",
    "description": "Premium a4 notebook pack from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-4",
    "name": "Navneet A4 Notebook Pack Premium",
    "slug": "navneet-a4-notebook-pack-premium-navneet",
    "price": 480,
    "originalPrice": 480,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 4.5,
    "reviews": 1467,
    "featured": true,
    "image": "https://picsum.photos/seed/navneet-a4-notebook-pack-premium-navneet/400/400",
    "description": "Premium a4 notebook pack from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-5",
    "name": "Staedtler A4 Notebook Pack Premium",
    "slug": "staedtler-a4-notebook-pack-premium-staedtler",
    "price": 220,
    "originalPrice": 314,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3,
    "reviews": 650,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-a4-notebook-pack-premium-staedtler/400/400",
    "description": "Premium a4 notebook pack from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-6",
    "name": "Staedtler A4 Notebook Pack",
    "slug": "staedtler-a4-notebook-pack-staedtler",
    "price": 320,
    "originalPrice": 353,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.9,
    "reviews": 1349,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-a4-notebook-pack-staedtler/400/400",
    "description": "Premium a4 notebook pack from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-7",
    "name": "Parker A4 Notebook Pack",
    "slug": "parker-a4-notebook-pack-parker",
    "price": 400,
    "originalPrice": 400,
    "category": "Stationery & Office",
    "tags": [
      "notebook",
      "a4",
      "school"
    ],
    "rating": 3.4,
    "reviews": 162,
    "featured": false,
    "image": "https://picsum.photos/seed/parker-a4-notebook-pack-parker/400/400",
    "description": "Premium a4 notebook pack from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-8",
    "name": "Camlin Gel Pen Set Elite",
    "slug": "camlin-gel-pen-set-elite",
    "price": 120,
    "originalPrice": 120,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.9,
    "reviews": 795,
    "featured": false,
    "image": "https://picsum.photos/seed/camlin-gel-pen-set-elite/400/400",
    "description": "High-quality gel pen set from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-9",
    "name": "Staedtler Gel Pen Set Premium",
    "slug": "staedtler-gel-pen-set-premium-staedtler",
    "price": 160,
    "originalPrice": 179,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.7,
    "reviews": 26,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-gel-pen-set-premium-staedtler/400/400",
    "description": "Premium gel pen set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-10",
    "name": "Camlin Gel Pen Set Premium",
    "slug": "camlin-gel-pen-set-premium-camlin",
    "price": 190,
    "originalPrice": 214,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.6,
    "reviews": 1082,
    "featured": true,
    "image": "https://picsum.photos/seed/camlin-gel-pen-set-premium-camlin/400/400",
    "description": "Premium gel pen set from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-11",
    "name": "DOMS Gel Pen Set Pro",
    "slug": "doms-gel-pen-set-pro-doms",
    "price": 180,
    "originalPrice": 180,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.4,
    "reviews": 1165,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-gel-pen-set-pro-doms/400/400",
    "description": "Premium gel pen set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-12",
    "name": "Navneet Gel Pen Set Premium",
    "slug": "navneet-gel-pen-set-premium-navneet",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.8,
    "reviews": 1107,
    "featured": false,
    "image": "https://picsum.photos/seed/navneet-gel-pen-set-premium-navneet/400/400",
    "description": "Premium gel pen set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-13",
    "name": "Parker Gel Pen Set Pro",
    "slug": "parker-gel-pen-set-pro-parker",
    "price": 160,
    "originalPrice": 247,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.1,
    "reviews": 1104,
    "featured": false,
    "image": "https://picsum.photos/seed/parker-gel-pen-set-pro-parker/400/400",
    "description": "Premium gel pen set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-14",
    "name": "Parker Gel Pen Set Elite",
    "slug": "parker-gel-pen-set-elite-parker",
    "price": 280,
    "originalPrice": 280,
    "category": "Stationery & Office",
    "tags": [
      "pen",
      "gel",
      "set"
    ],
    "rating": 4.9,
    "reviews": 145,
    "featured": false,
    "image": "https://picsum.photos/seed/parker-gel-pen-set-elite-parker/400/400",
    "description": "Premium gel pen set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-15",
    "name": "Linc Pencil Box Standard",
    "slug": "linc-pencil-box-standard",
    "price": 180,
    "originalPrice": 180,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.8,
    "reviews": 1610,
    "featured": false,
    "image": "https://picsum.photos/seed/linc-pencil-box-standard/400/400",
    "description": "High-quality pencil box from Linc. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-16",
    "name": "Classmate Pencil Box Plus",
    "slug": "classmate-pencil-box-plus-classmate",
    "price": 130,
    "originalPrice": 196,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.4,
    "reviews": 1475,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-pencil-box-plus-classmate/400/400",
    "description": "Premium pencil box from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-17",
    "name": "Faber-Castell Pencil Box",
    "slug": "faber-castell-pencil-box-faber-castell",
    "price": 210,
    "originalPrice": 303,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.8,
    "reviews": 1044,
    "featured": false,
    "image": "https://picsum.photos/seed/faber-castell-pencil-box-faber-castell/400/400",
    "description": "Premium pencil box from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-18",
    "name": "Staedtler Pencil Box Ultra",
    "slug": "staedtler-pencil-box-ultra-staedtler",
    "price": 120,
    "originalPrice": 120,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.5,
    "reviews": 574,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-pencil-box-ultra-staedtler/400/400",
    "description": "Premium pencil box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-19",
    "name": "Classmate Pencil Box Ultra",
    "slug": "classmate-pencil-box-ultra-classmate",
    "price": 320,
    "originalPrice": 320,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.2,
    "reviews": 910,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-pencil-box-ultra-classmate/400/400",
    "description": "Premium pencil box from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-20",
    "name": "Uniball Pencil Box Premium",
    "slug": "uniball-pencil-box-premium-uniball",
    "price": 360,
    "originalPrice": 532,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 3.1,
    "reviews": 1499,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-pencil-box-premium-uniball/400/400",
    "description": "Premium pencil box from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-21",
    "name": "Uniball Pencil Box Deluxe",
    "slug": "uniball-pencil-box-deluxe-uniball",
    "price": 190,
    "originalPrice": 218,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "pencil",
      "box"
    ],
    "rating": 4.4,
    "reviews": 560,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-pencil-box-deluxe-uniball/400/400",
    "description": "Premium pencil box from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-22",
    "name": "DOMS Highlighter Set Elite",
    "slug": "doms-highlighter-set-elite",
    "price": 200,
    "originalPrice": 248,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.9,
    "reviews": 121,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-highlighter-set-elite/400/400",
    "description": "High-quality highlighter set from DOMS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-23",
    "name": "Uniball Highlighter Set",
    "slug": "uniball-highlighter-set-uniball",
    "price": 300,
    "originalPrice": 446,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.2,
    "reviews": 170,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-highlighter-set-uniball/400/400",
    "description": "Premium highlighter set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-24",
    "name": "Staedtler Highlighter Set",
    "slug": "staedtler-highlighter-set-staedtler",
    "price": 260,
    "originalPrice": 395,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.3,
    "reviews": 13,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-highlighter-set-staedtler/400/400",
    "description": "Premium highlighter set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-25",
    "name": "Staedtler Highlighter Set Pro",
    "slug": "staedtler-highlighter-set-pro-staedtler",
    "price": 210,
    "originalPrice": 239,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.8,
    "reviews": 916,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-highlighter-set-pro-staedtler/400/400",
    "description": "Premium highlighter set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-26",
    "name": "Linc Highlighter Set",
    "slug": "linc-highlighter-set-linc",
    "price": 220,
    "originalPrice": 307,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4,
    "reviews": 760,
    "featured": false,
    "image": "https://picsum.photos/seed/linc-highlighter-set-linc/400/400",
    "description": "Premium highlighter set from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-27",
    "name": "Parker Highlighter Set Elite",
    "slug": "parker-highlighter-set-elite-parker",
    "price": 290,
    "originalPrice": 290,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 3.8,
    "reviews": 160,
    "featured": false,
    "image": "https://picsum.photos/seed/parker-highlighter-set-elite-parker/400/400",
    "description": "Premium highlighter set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-28",
    "name": "DOMS Highlighter Set Plus",
    "slug": "doms-highlighter-set-plus-doms",
    "price": 170,
    "originalPrice": 170,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "highlighter",
      "set"
    ],
    "rating": 4.4,
    "reviews": 1175,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-highlighter-set-plus-doms/400/400",
    "description": "Premium highlighter set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-29",
    "name": "Camlin Geometry Box Deluxe",
    "slug": "camlin-geometry-box-deluxe",
    "price": 210,
    "originalPrice": 262,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.1,
    "reviews": 25,
    "featured": false,
    "image": "https://picsum.photos/seed/camlin-geometry-box-deluxe/400/400",
    "description": "High-quality geometry box from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-30",
    "name": "Staedtler Geometry Box",
    "slug": "staedtler-geometry-box-staedtler",
    "price": 460,
    "originalPrice": 460,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 3.6,
    "reviews": 974,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-geometry-box-staedtler/400/400",
    "description": "Premium geometry box from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-31",
    "name": "Camlin Geometry Box Basic",
    "slug": "camlin-geometry-box-basic-camlin",
    "price": 240,
    "originalPrice": 240,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.2,
    "reviews": 1208,
    "featured": false,
    "image": "https://picsum.photos/seed/camlin-geometry-box-basic-camlin/400/400",
    "description": "Premium geometry box from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-32",
    "name": "Linc Geometry Box Pro",
    "slug": "linc-geometry-box-pro-linc",
    "price": 150,
    "originalPrice": 150,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.2,
    "reviews": 215,
    "featured": false,
    "image": "https://picsum.photos/seed/linc-geometry-box-pro-linc/400/400",
    "description": "Premium geometry box from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-33",
    "name": "Maped Geometry Box Basic",
    "slug": "maped-geometry-box-basic-maped",
    "price": 370,
    "originalPrice": 440,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "geometry",
      "school"
    ],
    "rating": 4.9,
    "reviews": 978,
    "featured": true,
    "image": "https://picsum.photos/seed/maped-geometry-box-basic-maped/400/400",
    "description": "Premium geometry box from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-34",
    "name": "Navneet Whiteboard Marker Set Plus",
    "slug": "navneet-whiteboard-marker-set-plus",
    "price": 200,
    "originalPrice": 200,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.2,
    "reviews": 1539,
    "featured": false,
    "image": "https://picsum.photos/seed/navneet-whiteboard-marker-set-plus/400/400",
    "description": "High-quality whiteboard marker set from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-35",
    "name": "Navneet Whiteboard Marker Set Standard",
    "slug": "navneet-whiteboard-marker-set-standard-navneet",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.1,
    "reviews": 202,
    "featured": false,
    "image": "https://picsum.photos/seed/navneet-whiteboard-marker-set-standard-navneet/400/400",
    "description": "Premium whiteboard marker set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-36",
    "name": "Uniball Whiteboard Marker Set Pro",
    "slug": "uniball-whiteboard-marker-set-pro-uniball",
    "price": 140,
    "originalPrice": 140,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.7,
    "reviews": 79,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-whiteboard-marker-set-pro-uniball/400/400",
    "description": "Premium whiteboard marker set from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-37",
    "name": "Navneet Whiteboard Marker Set Elite",
    "slug": "navneet-whiteboard-marker-set-elite-navneet",
    "price": 260,
    "originalPrice": 260,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.3,
    "reviews": 455,
    "featured": false,
    "image": "https://picsum.photos/seed/navneet-whiteboard-marker-set-elite-navneet/400/400",
    "description": "Premium whiteboard marker set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-38",
    "name": "Classmate Whiteboard Marker Set Basic",
    "slug": "classmate-whiteboard-marker-set-basic-classmate",
    "price": 260,
    "originalPrice": 260,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.8,
    "reviews": 250,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-whiteboard-marker-set-basic-classmate/400/400",
    "description": "Premium whiteboard marker set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-39",
    "name": "DOMS Whiteboard Marker Set Standard",
    "slug": "doms-whiteboard-marker-set-standard-doms",
    "price": 290,
    "originalPrice": 290,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 4.7,
    "reviews": 297,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-whiteboard-marker-set-standard-doms/400/400",
    "description": "Premium whiteboard marker set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-40",
    "name": "DOMS Whiteboard Marker Set Elite",
    "slug": "doms-whiteboard-marker-set-elite-doms",
    "price": 130,
    "originalPrice": 166,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "marker",
      "whiteboard"
    ],
    "rating": 3.8,
    "reviews": 789,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-whiteboard-marker-set-elite-doms/400/400",
    "description": "Premium whiteboard marker set from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-41",
    "name": "Camlin Sticky Notes Pack Ultra",
    "slug": "camlin-sticky-notes-pack-ultra",
    "price": 150,
    "originalPrice": 199,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.6,
    "reviews": 1672,
    "featured": false,
    "image": "https://picsum.photos/seed/camlin-sticky-notes-pack-ultra/400/400",
    "description": "High-quality sticky notes pack from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-42",
    "name": "Classmate Sticky Notes Pack Basic",
    "slug": "classmate-sticky-notes-pack-basic-classmate",
    "price": 100,
    "originalPrice": 100,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.7,
    "reviews": 1166,
    "featured": true,
    "image": "https://picsum.photos/seed/classmate-sticky-notes-pack-basic-classmate/400/400",
    "description": "Premium sticky notes pack from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-43",
    "name": "DOMS Sticky Notes Pack Premium",
    "slug": "doms-sticky-notes-pack-premium-doms",
    "price": 70,
    "originalPrice": 80,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 3.7,
    "reviews": 1079,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-sticky-notes-pack-premium-doms/400/400",
    "description": "Premium sticky notes pack from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-44",
    "name": "Uniball Sticky Notes Pack Pro",
    "slug": "uniball-sticky-notes-pack-pro-uniball",
    "price": 130,
    "originalPrice": 130,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.2,
    "reviews": 1049,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-sticky-notes-pack-pro-uniball/400/400",
    "description": "Premium sticky notes pack from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-45",
    "name": "Camlin Sticky Notes Pack Standard",
    "slug": "camlin-sticky-notes-pack-standard-camlin",
    "price": 70,
    "originalPrice": 92,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "notes",
      "sticky"
    ],
    "rating": 4.3,
    "reviews": 1392,
    "featured": false,
    "image": "https://picsum.photos/seed/camlin-sticky-notes-pack-standard-camlin/400/400",
    "description": "Premium sticky notes pack from Camlin. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-46",
    "name": "Camlin Paper Clips Set Premium",
    "slug": "camlin-paper-clips-set-premium",
    "price": 100,
    "originalPrice": 100,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.4,
    "reviews": 1363,
    "featured": false,
    "image": "https://picsum.photos/seed/camlin-paper-clips-set-premium/400/400",
    "description": "High-quality paper clips set from Camlin. Perfect for everyday use with premium features and reliable performance.",
    "inStock": false
  },
  {
    "id": "st-47",
    "name": "Classmate Paper Clips Set Ultra",
    "slug": "classmate-paper-clips-set-ultra-classmate",
    "price": 70,
    "originalPrice": 70,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.4,
    "reviews": 836,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-paper-clips-set-ultra-classmate/400/400",
    "description": "Premium paper clips set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-48",
    "name": "Navneet Paper Clips Set Elite",
    "slug": "navneet-paper-clips-set-elite-navneet",
    "price": 70,
    "originalPrice": 70,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.8,
    "reviews": 244,
    "featured": false,
    "image": "https://picsum.photos/seed/navneet-paper-clips-set-elite-navneet/400/400",
    "description": "Premium paper clips set from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-49",
    "name": "Faber-Castell Paper Clips Set",
    "slug": "faber-castell-paper-clips-set-faber-castell",
    "price": 70,
    "originalPrice": 80,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.4,
    "reviews": 293,
    "featured": false,
    "image": "https://picsum.photos/seed/faber-castell-paper-clips-set-faber-castell/400/400",
    "description": "Premium paper clips set from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-50",
    "name": "Classmate Paper Clips Set Pro",
    "slug": "classmate-paper-clips-set-pro-classmate",
    "price": 60,
    "originalPrice": 60,
    "category": "Stationery & Office",
    "tags": [
      "stationery",
      "clips",
      "office"
    ],
    "rating": 4.7,
    "reviews": 1050,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-paper-clips-set-pro-classmate/400/400",
    "description": "Premium paper clips set from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-51",
    "name": "Parker Desk Organizer Elite",
    "slug": "parker-desk-organizer-elite",
    "price": 620,
    "originalPrice": 939,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.2,
    "reviews": 1860,
    "featured": false,
    "image": "https://picsum.photos/seed/parker-desk-organizer-elite/400/400",
    "description": "High-quality desk organizer from Parker. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-52",
    "name": "DOMS Desk Organizer Plus",
    "slug": "doms-desk-organizer-plus-doms",
    "price": 700,
    "originalPrice": 700,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.7,
    "reviews": 1272,
    "featured": false,
    "image": "https://picsum.photos/seed/doms-desk-organizer-plus-doms/400/400",
    "description": "Premium desk organizer from DOMS. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-53",
    "name": "Classmate Desk Organizer Deluxe",
    "slug": "classmate-desk-organizer-deluxe-classmate",
    "price": 230,
    "originalPrice": 230,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.6,
    "reviews": 197,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-desk-organizer-deluxe-classmate/400/400",
    "description": "Premium desk organizer from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-54",
    "name": "Staedtler Desk Organizer Deluxe",
    "slug": "staedtler-desk-organizer-deluxe-staedtler",
    "price": 410,
    "originalPrice": 503,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.2,
    "reviews": 789,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-desk-organizer-deluxe-staedtler/400/400",
    "description": "Premium desk organizer from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-55",
    "name": "Maped Desk Organizer Standard",
    "slug": "maped-desk-organizer-standard-maped",
    "price": 200,
    "originalPrice": 246,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4.6,
    "reviews": 741,
    "featured": false,
    "image": "https://picsum.photos/seed/maped-desk-organizer-standard-maped/400/400",
    "description": "Premium desk organizer from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-56",
    "name": "Uniball Desk Organizer Elite",
    "slug": "uniball-desk-organizer-elite-uniball",
    "price": 450,
    "originalPrice": 573,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 3.3,
    "reviews": 445,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-desk-organizer-elite-uniball/400/400",
    "description": "Premium desk organizer from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-57",
    "name": "Uniball Desk Organizer Deluxe",
    "slug": "uniball-desk-organizer-deluxe-uniball",
    "price": 760,
    "originalPrice": 841,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "organizer",
      "desk"
    ],
    "rating": 4,
    "reviews": 698,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-desk-organizer-deluxe-uniball/400/400",
    "description": "Premium desk organizer from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-58",
    "name": "Navneet File Folder Set Plus",
    "slug": "navneet-file-folder-set-plus",
    "price": 290,
    "originalPrice": 290,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.1,
    "reviews": 677,
    "featured": true,
    "image": "https://picsum.photos/seed/navneet-file-folder-set-plus/400/400",
    "description": "High-quality file folder set from Navneet. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-59",
    "name": "Parker File Folder Set Basic",
    "slug": "parker-file-folder-set-basic-parker",
    "price": 300,
    "originalPrice": 300,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.8,
    "reviews": 1099,
    "featured": false,
    "image": "https://picsum.photos/seed/parker-file-folder-set-basic-parker/400/400",
    "description": "Premium file folder set from Parker. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-60",
    "name": "Maped File Folder Set Standard",
    "slug": "maped-file-folder-set-standard-maped",
    "price": 180,
    "originalPrice": 260,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.6,
    "reviews": 540,
    "featured": false,
    "image": "https://picsum.photos/seed/maped-file-folder-set-standard-maped/400/400",
    "description": "Premium file folder set from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-61",
    "name": "Staedtler File Folder Set Elite",
    "slug": "staedtler-file-folder-set-elite-staedtler",
    "price": 300,
    "originalPrice": 300,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 4.1,
    "reviews": 35,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-file-folder-set-elite-staedtler/400/400",
    "description": "Premium file folder set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-62",
    "name": "Staedtler File Folder Set",
    "slug": "staedtler-file-folder-set-staedtler",
    "price": 220,
    "originalPrice": 312,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "files",
      "folder"
    ],
    "rating": 3.8,
    "reviews": 259,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-file-folder-set-staedtler/400/400",
    "description": "Premium file folder set from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-63",
    "name": "DOMS Calculator Basic",
    "slug": "doms-calculator-basic",
    "price": 250,
    "originalPrice": 303,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.6,
    "reviews": 1578,
    "featured": true,
    "image": "https://picsum.photos/seed/doms-calculator-basic/400/400",
    "description": "High-quality calculator from DOMS. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-64",
    "name": "Classmate Calculator Ultra",
    "slug": "classmate-calculator-ultra-classmate",
    "price": 1360,
    "originalPrice": 2154,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.1,
    "reviews": 937,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-calculator-ultra-classmate/400/400",
    "description": "Premium calculator from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-65",
    "name": "Staedtler Calculator Plus",
    "slug": "staedtler-calculator-plus-staedtler",
    "price": 1010,
    "originalPrice": 1377,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.9,
    "reviews": 1041,
    "featured": false,
    "image": "https://picsum.photos/seed/staedtler-calculator-plus-staedtler/400/400",
    "description": "Premium calculator from Staedtler. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-66",
    "name": "Navneet Calculator Deluxe",
    "slug": "navneet-calculator-deluxe-navneet",
    "price": 540,
    "originalPrice": 540,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4.3,
    "reviews": 631,
    "featured": false,
    "image": "https://picsum.photos/seed/navneet-calculator-deluxe-navneet/400/400",
    "description": "Premium calculator from Navneet. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-67",
    "name": "Faber-Castell Calculator Plus",
    "slug": "faber-castell-calculator-plus-faber-castell",
    "price": 700,
    "originalPrice": 857,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.9,
    "reviews": 161,
    "featured": false,
    "image": "https://picsum.photos/seed/faber-castell-calculator-plus-faber-castell/400/400",
    "description": "Premium calculator from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-68",
    "name": "Maped Calculator Ultra",
    "slug": "maped-calculator-ultra-maped",
    "price": 1350,
    "originalPrice": 1999,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 3.3,
    "reviews": 776,
    "featured": false,
    "image": "https://picsum.photos/seed/maped-calculator-ultra-maped/400/400",
    "description": "Premium calculator from Maped. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-69",
    "name": "Linc Calculator Premium",
    "slug": "linc-calculator-premium-linc",
    "price": 620,
    "originalPrice": 897,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "calculator",
      "scientific"
    ],
    "rating": 4,
    "reviews": 183,
    "featured": false,
    "image": "https://picsum.photos/seed/linc-calculator-premium-linc/400/400",
    "description": "Premium calculator from Linc. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-70",
    "name": "Maped Stapler with Pins",
    "slug": "maped-stapler-with-pins",
    "price": 160,
    "originalPrice": 160,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.5,
    "reviews": 583,
    "featured": true,
    "image": "https://picsum.photos/seed/maped-stapler-with-pins/400/400",
    "description": "High-quality stapler with pins from Maped. Perfect for everyday use with premium features and reliable performance.",
    "inStock": true
  },
  {
    "id": "st-71",
    "name": "Faber-Castell Stapler with Pins Pro",
    "slug": "faber-castell-stapler-with-pins-pro-faber-castell",
    "price": 140,
    "originalPrice": 182,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.6,
    "reviews": 909,
    "featured": false,
    "image": "https://picsum.photos/seed/faber-castell-stapler-with-pins-pro-faber-castell/400/400",
    "description": "Premium stapler with pins from Faber-Castell. Features cutting-edge technology and superior build quality.",
    "inStock": false
  },
  {
    "id": "st-72",
    "name": "Classmate Stapler with Pins Basic",
    "slug": "classmate-stapler-with-pins-basic-classmate",
    "price": 210,
    "originalPrice": 210,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 3.9,
    "reviews": 1245,
    "featured": false,
    "image": "https://picsum.photos/seed/classmate-stapler-with-pins-basic-classmate/400/400",
    "description": "Premium stapler with pins from Classmate. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-73",
    "name": "Uniball Stapler with Pins Deluxe",
    "slug": "uniball-stapler-with-pins-deluxe-uniball",
    "price": 100,
    "originalPrice": 116,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.6,
    "reviews": 727,
    "featured": false,
    "image": "https://picsum.photos/seed/uniball-stapler-with-pins-deluxe-uniball/400/400",
    "description": "Premium stapler with pins from Uniball. Features cutting-edge technology and superior build quality.",
    "inStock": true
  },
  {
    "id": "st-74",
    "name": "Linc Stapler with Pins Premium",
    "slug": "linc-stapler-with-pins-premium-linc",
    "price": 330,
    "originalPrice": 330,
    "category": "Stationery & Office",
    "tags": [
      "office",
      "stapler",
      "supplies"
    ],
    "rating": 4.6,
    "reviews": 695,
    "featured": false,
    "image": "https://picsum.photos/seed/linc-stapler-with-pins-premium-linc/400/400",
    "description": "Premium stapler with pins from Linc. Features cutting-edge technology and superior build quality.",
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

