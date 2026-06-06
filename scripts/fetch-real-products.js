/**
 * Fetch real products from DummyJSON API and save as static data
 * These are real products with actual matching product photos
 * Run: node scripts/fetch-real-products.js > src/data/products.js
 */

const CATEGORY_MAP = {
  'beauty': 'Beauty',
  'fragrances': 'Beauty', 
  'skincare': 'Beauty',
  'groceries': 'Home & Kitchen',
  'home-decoration': 'Home & Kitchen',
  'kitchen-accessories': 'Home & Kitchen',
  'furniture': 'Home & Kitchen',
  'electronics': 'Electronics',
  'smartphones': 'Electronics',
  'laptops': 'Laptops & Computers',
  'tablets': 'Laptops & Computers',
  'mobile-accessories': 'Electronics',
  'computer-accessories': 'Laptops & Computers',
  'laptop-accessories': 'Laptops & Computers',
  'womens-dresses': 'Fashion',
  'womens-shoes': 'Fashion',
  'womens-watches': 'Fashion',
  'womens-bags': 'Fashion',
  'womens-jewellery': 'Fashion',
  'mens-shirts': 'Fashion',
  'mens-shoes': 'Fashion',
  'mens-watches': 'Fashion',
  'sports-accessories': 'Sports & Outdoors',
  'sunglasses': 'Fashion',
  'vehicle': 'Sports & Outdoors',
  'motorcycle': 'Sports & Outdoors',
  't-shirts': 'Fashion',
  'tops': 'Fashion',
};

const CATEGORY_ICONS = {
  'Beauty': '💄', 'Home & Kitchen': '🏠', 'Electronics': '📱',
  'Laptops & Computers': '💻', 'Fashion': '👕', 'Sports & Outdoors': '🏃',
};

async function fetchAllProducts() {
  const allProducts = [];
  let skip = 0;
  const limit = 30;
  let total = 0;

  do {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    total = data.total;
    allProducts.push(...data.products);
    skip += limit;
  } while (skip < total);

  return allProducts;
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

async function main() {
  const apiProducts = await fetchAllProducts();

  const products = apiProducts.map((p, i) => {
    const category = CATEGORY_MAP[p.category] || 'Electronics';
    const priceInr = Math.round(p.price * 85); // Convert USD to INR approx
    const originalPrice = Math.round(priceInr * (1 + (p.discountPercentage || 0) / 100));
    
    return {
      id: `p-${i + 1}`,
      name: p.title,
      slug: slugify(p.title + '-' + p.brand),
      price: priceInr,
      originalPrice: Math.max(priceInr, originalPrice),
      category,
      tags: [...(p.tags || []), p.category.replace('-', ' ')],
      rating: p.rating || 4.0,
      reviews: p.reviews?.length || Math.floor(Math.random() * 500 + 10),
      featured: i < 12,
      image: p.thumbnail,
      description: p.description || `High-quality ${p.title} from ${p.brand || 'top brand'}.`,
      inStock: (p.stock || 10) > 0,
      brand: p.brand || '',
    };
  });

  // Output the JS file
  console.log(`// ── Real Products from DummyJSON ──
// ${products.length} products across multiple categories with real matching images

const products = ${JSON.stringify(products, null, 2)};

// ── Helpers ──
export function getProductById(id) { return products.find(p => p.id === id) || null; }
export function getProductBySlug(slug) { return products.find(p => p.slug === slug) || null; }
export function getFeaturedProducts() { return products.filter(p => p.featured); }
export function getProductsByCategory(category) { return products.filter(p => p.category === category); }
export function getCategories() { return [...new Set(products.map(p => p.category))]; }
export function getBrands() { return [...new Set(products.filter(p => p.brand).map(p => p.brand))].slice(0, 20).map(name => ({ name })); }
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
}

main().catch(console.error);
