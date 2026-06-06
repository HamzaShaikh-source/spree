/**
 * Product Generator — creates 500+ realistic products
 * Run: node scripts/generate-products.js > src/data/products.js
 */

const CATEGORIES = {
  'Electronics': {
    brands: ['Sony', 'Samsung', 'Bose', 'JBL', 'Apple', 'Xiaomi', 'OnePlus', 'Realme', 'boAt', 'pTron', 'Philips', 'Panasonic', 'LG', 'Dell', 'HP'],
    types: [
      { name: 'Wireless Headphones', tags: ['audio','wireless','bluetooth'], price: [1500,8000], img: 'headphones' },
      { name: 'Bluetooth Speaker', tags: ['audio','wireless','speaker'], price: [800,5000], img: 'speaker' },
      { name: 'USB-C Hub', tags: ['accessories','usbc','hub'], price: [400,2000], img: 'usb' },
      { name: 'Wireless Mouse', tags: ['accessories','mouse','wireless'], price: [300,2500], img: 'mouse' },
      { name: 'Smart Band', tags: ['wearable','fitness','smartband'], price: [800,4000], img: 'smartwatch' },
      { name: 'Power Bank', tags: ['charger','portable','powerbank'], price: [500,3000], img: 'charger' },
      { name: 'HDMI Cable', tags: ['accessories','cable','hdmi'], price: [150,800], img: 'cable' },
      { name: 'Webcam', tags: ['camera','webcam'], price: [800,5000], img: 'webcam' },
      { name: 'Smart Plug', tags: ['smart-home','wifi'], price: [300,1200], img: 'smartplug' },
      { name: 'LED Strip Lights', tags: ['lighting','led','rgb'], price: [200,1500], img: 'led' },
      { name: 'Memory Card 64GB', tags: ['storage','memory'], price: [300,1500], img: 'memory' },
      { name: 'Phone Case', tags: ['accessories','phone-case'], price: [150,800], img: 'phone-case' },
      { name: 'Screen Guard', tags: ['accessories','screen-guard'], price: [100,400], img: 'screen-guard' },
      { name: 'Selfie Stick Tripod', tags: ['camera','tripod','selfie'], price: [200,1000], img: 'tripod' },
    ]
  },
  'Fashion': {
    brands: ['Nike', 'Adidas', 'Puma', "Levi's", 'H&M', 'Zara', 'Tommy Hilfiger', 'Ray-Ban', 'Diesel', 'Fossil', 'Wildcraft', 'Skechers', 'Roadster', 'HRX', 'USPA'],
    types: [
      { name: 'Running Shoes', tags: ['footwear','running'], price: [1500,8000], img: 'shoes' },
      { name: 'Casual Sneakers', tags: ['footwear','casual','sneakers'], price: [1000,5000], img: 'sneakers' },
      { name: 'Round Neck T-Shirt', tags: ['clothing','tshirt','cotton'], price: [300,1500], img: 'tshirt' },
      { name: 'Denim Jeans', tags: ['clothing','jeans','denim'], price: [800,3000], img: 'jeans' },
      { name: 'Formal Shirt', tags: ['clothing','shirt','formal'], price: [500,2000], img: 'formal-shirt' },
      { name: 'Leather Belt', tags: ['accessories','belt','leather'], price: [300,1500], img: 'belt' },
      { name: 'Sports Cap', tags: ['accessories','cap','sports'], price: [200,800], img: 'cap' },
      { name: 'Wrist Watch', tags: ['accessories','watch','premium'], price: [500,5000], img: 'watch' },
      { name: 'Casual Shorts', tags: ['clothing','shorts','casual'], price: [400,1500], img: 'shorts' },
      { name: 'Winter Gloves', tags: ['accessories','gloves','winter'], price: [200,800], img: 'gloves' },
      { name: 'Sunglasses', tags: ['accessories','sunglasses'], price: [300,3000], img: 'sunglasses' },
      { name: 'Wallet RFID', tags: ['accessories','wallet','leather'], price: [400,2000], img: 'wallet' },
    ]
  },
  'Home & Kitchen': {
    brands: ['Pigeon', 'Prestige', 'Hawkins', 'Vidiem', 'Butterfly', 'Milton', 'Cello', 'Borosil', 'Signoraware', 'Wakefit'],
    types: [
      { name: 'Non-Stick Tawa', tags: ['kitchen','cookware','nonstick'], price: [300,1500], img: 'tawa' },
      { name: 'Microwave Safe Bowl Set', tags: ['kitchen','bowl','microwave'], price: [200,800], img: 'bowl' },
      { name: 'Vegetable Chopper', tags: ['kitchen','chopper','eco-friendly'], price: [200,800], img: 'chopper' },
      { name: 'Spice Rack', tags: ['kitchen','storage','spice'], price: [200,800], img: 'spice-rack' },
      { name: 'Tumbler Glass Set', tags: ['kitchen','glass','tumbler'], price: [200,600], img: 'glass' },
      { name: 'Kitchen Tongs', tags: ['kitchen','cooking','tongs'], price: [100,400], img: 'tongs' },
      { name: 'Dinner Plate Set', tags: ['kitchen','dinner-set','ceramic'], price: [400,2000], img: 'plate' },
      { name: 'Storage Jar Set', tags: ['kitchen','storage','jar'], price: [200,800], img: 'jar' },
      { name: 'Mop Floor Cleaner', tags: ['home','cleaning','mop'], price: [200,800], img: 'mop' },
      { name: 'Clothes Hanger Set', tags: ['home','storage','hanger'], price: [100,500], img: 'hanger' },
      { name: 'Door Mat', tags: ['home','decor','doormat'], price: [150,500], img: 'doormat' },
      { name: 'Cushion Cover Set', tags: ['home','decor','cushion'], price: [200,800], img: 'cushion' },
    ]
  },
  'Books & Media': {
    brands: ['Penguin', 'HarperCollins', 'Rupa', 'Aleph', 'Bloomsbury', 'Oxford', 'Scholastic', 'Puffin', 'Random House', 'Simon & Schuster'],
    types: [
      { name: 'Fiction Bestseller', tags: ['book','fiction','novel'], price: [200,800], img: 'book' },
      { name: 'Self-Help Guide', tags: ['book','self-help','motivation'], price: [200,600], img: 'self-help' },
      { name: 'Indian History Book', tags: ['book','history','education'], price: [300,1000], img: 'history-book' },
      { name: 'Children Storybook', tags: ['book','children','story'], price: [150,500], img: 'children-book' },
      { name: 'Cooking Recipe Book', tags: ['book','cooking','recipe'], price: [300,800], img: 'cookbook' },
      { name: 'Exam Guide', tags: ['book','education','exam'], price: [200,600], img: 'exam-book' },
      { name: 'Art Sketchbook', tags: ['stationery','art','sketchbook'], price: [150,500], img: 'sketchbook' },
      { name: 'Fountain Pen', tags: ['stationery','pen','premium'], price: [200,1500], img: 'pen' },
      { name: 'Gift Wrapping Set', tags: ['stationery','gift','wrap'], price: [100,400], img: 'gift-wrap' },
    ]
  },
  'Sports & Outdoors': {
    brands: ['Decathlon', 'Cosco', 'Nivia', 'Speed', 'BSN', 'Proff', 'Fitkit', 'Strauss', 'Adidas', 'Puma'],
    types: [
      { name: 'Skipping Rope', tags: ['fitness','cardio','jump-rope'], price: [100,400], img: 'jump-rope' },
      { name: 'Push Up Stand', tags: ['fitness','strength','pushup'], price: [300,1000], img: 'pushup' },
      { name: 'Ab Roller Wheel', tags: ['fitness','abs','core'], price: [200,600], img: 'ab-roller' },
      { name: 'Hand Grip Strengthener', tags: ['fitness','strength','grip'], price: [100,400], img: 'grip' },
      { name: 'Tennis Ball Set', tags: ['sports','tennis','ball'], price: [200,600], img: 'tennis' },
      { name: 'Badminton Racket', tags: ['sports','badminton','racket'], price: [300,2000], img: 'badminton' },
      { name: 'Cricket Bat', tags: ['sports','cricket','bat'], price: [500,3000], img: 'cricket' },
      { name: 'Yoga Block Set', tags: ['fitness','yoga','block'], price: [200,600], img: 'yoga-block' },
      { name: 'Cycling Water Bottle', tags: ['outdoor','cycling','bottle'], price: [150,500], img: 'cycling-bottle' },
    ]
  },
  'Beauty': {
    brands: ['Mamaearth', 'Plum', 'Wow Skin Science', 'Minimalist', 'The Derma Co', 'Lakme', 'L\'Oreal', 'Maybelline', 'Nykaa', 'Biotique'],
    types: [
      { name: 'Face Wash', tags: ['skincare','face-wash','cleanser'], price: [150,600], img: 'face-wash' },
      { name: 'Moisturizer', tags: ['skincare','moisturizer','cream'], price: [200,800], img: 'moisturizer' },
      { name: 'Toner', tags: ['skincare','toner','face'], price: [200,600], img: 'toner' },
      { name: 'Eye Cream', tags: ['skincare','eyes','cream'], price: [300,1000], img: 'eye-cream' },
      { name: 'Shampoo', tags: ['hair','shampoo','care'], price: [200,800], img: 'shampoo' },
      { name: 'Hair Oil', tags: ['hair','oil','natural'], price: [150,600], img: 'hair-oil' },
      { name: 'Body Lotion', tags: ['skincare','body','lotion'], price: [200,700], img: 'body-lotion' },
      { name: 'Lipstick', tags: ['makeup','lipstick'], price: [200,900], img: 'lipstick' },
      { name: 'Kajal', tags: ['makeup','kajal','eyes'], price: [100,400], img: 'kajal' },
      { name: 'Nail Polish Set', tags: ['makeup','nails','polish'], price: [100,400], img: 'nail-polish' },
    ]
  },
  'Laptops & Computers': {
    brands: ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI', 'Samsung', 'Xiaomi', 'Microsoft'],
    types: [
      { name: 'Ultrabook Laptop', tags: ['laptop','ultrabook','premium'], price: [45000,120000], img: 'laptop' },
      { name: 'Gaming Laptop', tags: ['laptop','gaming','performance'], price: [55000,150000], img: 'gaming-laptop' },
      { name: 'Monitor 24-inch', tags: ['monitor','display'], price: [8000,25000], img: 'monitor' },
      { name: 'Mechanical Keyboard', tags: ['keyboard','mechanical','rgb'], price: [1500,8000], img: 'keyboard' },
      { name: 'External Hard Drive 1TB', tags: ['storage','external','hard-drive'], price: [3000,6000], img: 'hard-drive' },
      { name: 'USB Mouse', tags: ['accessories','mouse','wired'], price: [200,1500], img: 'mouse-wired' },
      { name: 'Laptop Stand', tags: ['accessories','laptop-stand','ergonomic'], price: [500,2500], img: 'laptop-stand' },
      { name: 'Wireless Keyboard', tags: ['keyboard','wireless','bluetooth'], price: [800,4000], img: 'wireless-keyboard' },
      { name: 'Laptop Bag', tags: ['accessories','bag','laptop'], price: [500,3000], img: 'laptop-bag' },
      { name: 'Cooling Pad', tags: ['accessories','cooling','laptop'], price: [400,1500], img: 'cooling-pad' },
    ]
  },
  'Stationery & Office': {
    brands: ['Classmate', 'Navneet', 'Camlin', 'Faber-Castell', 'Staedtler', 'Parker', 'Linc', 'Uniball', 'Maped', 'DOMS'],
    types: [
      { name: 'A4 Notebook Pack', tags: ['notebook','a4','school'], price: [150,500], img: 'notebook' },
      { name: 'Gel Pen Set', tags: ['pen','gel','set'], price: [100,300], img: 'gel-pen' },
      { name: 'Pencil Box', tags: ['stationery','pencil','box'], price: [100,400], img: 'pencil-box' },
      { name: 'Highlighter Set', tags: ['stationery','highlighter','set'], price: [100,300], img: 'highlighter' },
      { name: 'Geometry Box', tags: ['stationery','geometry','school'], price: [150,500], img: 'geometry' },
      { name: 'Whiteboard Marker Set', tags: ['stationery','marker','whiteboard'], price: [100,300], img: 'marker' },
      { name: 'Sticky Notes Pack', tags: ['stationery','notes','sticky'], price: [50,200], img: 'sticky-note' },
      { name: 'Paper Clips Set', tags: ['stationery','clips','office'], price: [30,100], img: 'paper-clips' },
      { name: 'Desk Organizer', tags: ['office','organizer','desk'], price: [200,800], img: 'desk-organizer' },
      { name: 'File Folder Set', tags: ['office','files','folder'], price: [100,400], img: 'file-folder' },
      { name: 'Calculator', tags: ['office','calculator','scientific'], price: [200,1500], img: 'calculator' },
      { name: 'Stapler with Pins', tags: ['office','stapler','supplies'], price: [100,400], img: 'stapler' },
    ]
  }
};

const BRAND_LOGOS = {
  'Apple': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'Samsung': 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
  'Sony': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg',
  'Nike': 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  'Adidas': 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
  'Dell': 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.svg',
  'HP': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
  'Lenovo': 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Lenovo_logo_2015.svg',
  'ASUS': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Asus_Logo.svg',
  'Bose': 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Bose_logo.svg',
  'Puma': 'https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg',
  'Levi\'s': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Levi%27s_logo.svg',
};

const UNSPLASH_MAP = {
  'headphones': 'photo-1505740420928-5e560c06d30e',
  'speaker': 'photo-1608043152269-423dbba4e7e1',
  'usb': 'photo-1583394838336-acd977736f90',
  'mouse': 'photo-1527864550417-7fd91fc51a46',
  'smartwatch': 'photo-1523275335684-37898b6baf30',
  'charger': 'photo-1609091839311-d5365f9ff1c5',
  'cable': 'photo-1615529328331-f8917597711f',
  'webcam': 'photo-1627384113743-6a5e1ad7bfde',
  'smartplug': 'photo-1558618666-fcd25c85f82e',
  'led': 'photo-1550684376-efcbd6e3f031',
  'memory': 'photo-1618384887929-16ec33fab9ef',
  'phone-case': 'photo-1601784551446-20c9e07cdbdb',
  'screen-guard': 'photo-1598327105665-cede8901e8e1',
  'tripod': 'photo-1588591795084-177c5cf5aea2',
  'shoes': 'photo-1542291026-7eec264c27ff',
  'sneakers': 'photo-1595950653106-6c9ebd614d3a',
  'tshirt': 'photo-1521572163474-6864f9cf17ab',
  'jeans': 'photo-1542272454-79f62f02b3c7',
  'formal-shirt': 'photo-1596755094514-f87e34085b2c',
  'belt': 'photo-1624222247344-5503fdd6081c',
  'cap': 'photo-1588850561407-ed78c282e89b',
  'watch': 'photo-1524592094714-0f0654e20314',
  'shorts': 'photo-1583743814966-8936f5b7be1a',
  'gloves': 'photo-1518803194621-f1f6a7a9b5e9',
  'sunglasses': 'photo-1572635196237-14b3f281503f',
  'wallet': 'photo-1627123424574-724758594e93',
  'tawa': 'photo-1556909114-f6e7ad7d3136',
  'bowl': 'photo-1584473457406-6244ae54d517',
  'chopper': 'photo-1590794056226-79ef3a8147e1',
  'spice-rack': 'photo-1594226801341-41427b4e5c22',
  'glass': 'photo-1551538827-6c037c2a0f7d',
  'tongs': 'photo-1594026112284-02bb6f3352fe',
  'plate': 'photo-1514326640560-7d063ef2aed5',
  'jar': 'photo-1582721478779-0ae163c7c9d7',
  'mop': 'photo-1585421514284-efb74c2b69ba',
  'hanger': 'photo-1540821925587-40d8640d7c1e',
  'doormat': 'photo-1602872057400-2bd3d6d6e7c2',
  'cushion': 'photo-1555041469-a586c61ea9bc',
  'book': 'photo-1532012197267-da84d127e765',
  'self-help': 'photo-1523800503107-5bc3ba2a6f81',
  'history-book': 'photo-1532153975070-2e9ab71f1b14',
  'children-book': 'photo-1512820790803-83ca734da794',
  'cookbook': 'photo-1556909114-f6e7ad7d3136',
  'exam-book': 'photo-1434030216411-0b793f4b4173',
  'sketchbook': 'photo-1513364776144-60967b0f800f',
  'pen': 'photo-1583485088034-141b5e1f0a9d',
  'gift-wrap': 'photo-1549465220-1a8b9238cd48',
  'jump-rope': 'photo-1571613316887-6f8d5cbf7ef7',
  'pushup': 'photo-1534438327276-14e5300c3a48',
  'ab-roller': 'photo-1571019613454-1cb2f99b2d8b',
  'grip': 'photo-1581009146145-b5ef050c2e1e',
  'tennis': 'photo-1595435934249-5df7ed86e1b0',
  'badminton': 'photo-1613919113640-257e1e5d8a7b',
  'cricket': 'photo-1564887651979-53b60e8d4d23',
  'yoga-block': 'photo-1601925260368-ae2f83cf8b7f',
  'cycling-bottle': 'photo-1570831739435-6601aa3fa4fb',
  'face-wash': 'photo-1556228578-0d85b1a4d571',
  'moisturizer': 'photo-1620916566398-39f1143ab7be',
  'toner': 'photo-1598440947619-2c35fc9aa908',
  'eye-cream': 'photo-1611930022073-b7a4ba5fcccd',
  'shampoo': 'photo-1585237652354-ec8b2e1d4c8c',
  'hair-oil': 'photo-1596462502278-27bfdc403348',
  'body-lotion': 'photo-1591384468290-1e4f4b1f2c8a',
  'lipstick': 'photo-1583241800698-e8ab01830a07',
  'kajal': 'photo-1631214524020-7e18db9a8f92',
  'nail-polish': 'photo-1604654894610-df63bc536371',
  'laptop': 'photo-1496181133206-80ce9b88a853',
  'gaming-laptop': 'photo-1603302576837-37561b2e2302',
  'monitor': 'photo-1527443223036-2f2380f3f8f1',
  'keyboard': 'photo-1618384887929-16ec33fab9ef',
  'hard-drive': 'photo-1531497865145-1b68c0dfb0ff',
  'mouse-wired': 'photo-1527814050087-3793815479db',
  'laptop-stand': 'photo-1611510338559-2f463335092c',
  'wireless-keyboard': 'photo-1587829741301-dc798b83add3',
  'laptop-bag': 'photo-1622560540604-9e16e0c2c750',
  'cooling-pad': 'photo-1593642632559-0c6d3fc62b89',
  'notebook': 'photo-1544716278-ca5e3f4abd8c',
  'gel-pen': 'photo-1583485088034-141b5e1f0a9d',
  'pencil-box': 'photo-1586077605449-7c8a4f0fd302',
  'highlighter': 'photo-1586077605449-7c8a4f0fd302',
  'geometry': 'photo-1586077605449-7c8a4f0fd302',
  'marker': 'photo-1586077605449-7c8a4f0fd302',
  'sticky-note': 'photo-1504711434969-e33886168d6c',
  'paper-clips': 'photo-1504711434969-e33886168d6c',
  'desk-organizer': 'photo-1497366216548-37526070297c',
  'file-folder': 'photo-1497366216548-37526070297c',
  'calculator': 'photo-1558618666-fcd25c85f82e',
  'stapler': 'photo-1504711434969-e33886168d6c',
};

let idCounter = {};
function getNextId(cat) {
  const prefix = cat.substring(0,2).toLowerCase();
  idCounter[prefix] = (idCounter[prefix] || 0) + 1;
  return `${prefix}-${idCounter[prefix]}`;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const products = [];
const TYPES = ['Basic', 'Pro', 'Premium', 'Elite', 'Standard', 'Plus', '', 'Deluxe', 'Ultra'];

for (const [catName, catData] of Object.entries(CATEGORIES)) {
  for (const type of catData.types) {
    const brand = catData.brands[Math.floor(Math.random() * catData.brands.length)];
    const variant = TYPES[Math.floor(Math.random() * TYPES.length)];
    const fullName = `${brand} ${type.name}${variant ? ' ' + variant : ''}`;
    const basePrice = type.price[0] + Math.random() * (type.price[1] - type.price[0]);
    const price = Math.round(basePrice / 10) * 10;
    const hasDiscount = Math.random() > 0.5;
    const originalPrice = hasDiscount ? Math.round(price * (1.15 + Math.random() * 0.4)) : price;
    const rating = Math.round((3.5 + Math.random() * 1.5) * 10) / 10;
    const reviews = Math.floor(10 + Math.random() * 2000);
    const imgId = UNSPLASH_MAP[type.img] || UNSPLASH_MAP['headphones'];
    
    const product = {
      id: getNextId(catName),
      name: fullName,
      slug: slugify(fullName),
      price,
      originalPrice: originalPrice > price ? originalPrice : price,
      category: catName,
      tags: type.tags,
      rating: Math.min(5, rating),
      reviews,
      featured: Math.random() > 0.85,
      image: `https://images.unsplash.com/${imgId}?w=400&h=400&fit=crop`,
      description: `High-quality ${type.name.toLowerCase()} from ${brand}. Perfect for everyday use with premium features and reliable performance.`,
      inStock: Math.random() > 0.15,
    };
    products.push(product);
    
    // Add 4-6 extra variants with different brands and prices
    const extraVariants = 4 + Math.floor(Math.random() * 3);
    for (let v = 0; v < extraVariants; v++) {
      const brandV = catData.brands[Math.floor(Math.random() * catData.brands.length)];
      const variantV = TYPES[Math.floor(Math.random() * TYPES.length)];
      const nameV = `${brandV} ${type.name}${variantV ? ' ' + variantV : ''}`;
      // Skip if duplicate
      if (products.some(p => p.name === nameV)) continue;
      
      const priceV = Math.round((type.price[0] + Math.random() * (type.price[1] - type.price[0])) / 10) * 10;
      const hasDiscountV = Math.random() > 0.4;
      products.push({
        id: getNextId(catName),
        name: nameV,
        slug: slugify(nameV + '-' + brandV),
        price: priceV,
        originalPrice: hasDiscountV ? Math.round(priceV * (1.1 + Math.random() * 0.5)) : priceV,
        category: catName,
        tags: type.tags,
        rating: Math.min(5, Math.round((3.0 + Math.random() * 2.0) * 10) / 10),
        reviews: Math.floor(10 + Math.random() * 1500),
        featured: Math.random() > 0.92,
        image: `https://images.unsplash.com/${imgId}?w=400&h=400&fit=crop`,
        description: `Premium ${type.name.toLowerCase()} from ${brandV}. Features cutting-edge technology and superior build quality.`,
        inStock: Math.random() > 0.12,
      });
    }
  }
}

console.log(`// ── Product Data ──
// ${products.length} products across ${Object.keys(CATEGORIES).length} categories

const products = ${JSON.stringify(products, null, 2)};

// ── Brand Data ──
export const brands = ${JSON.stringify(Object.keys(BRAND_LOGOS).map(b => ({
  name: b,
  logo: BRAND_LOGOS[b],
})), null, 2)};

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
  return \`₹\${price.toLocaleString('en-IN')}\`;
}

export default products;
`);

console.error(`✅ Generated ${products.length} products`);
