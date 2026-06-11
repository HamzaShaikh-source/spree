// Global App State
const state = {
  cart: JSON.parse(localStorage.getItem('spree_cart')) || [],
  orders: JSON.parse(localStorage.getItem('spree_orders')) || [
    {
      id: "SPREE-84920",
      date: "May 24, 2026",
      status: "Delivered",
      total: 1250,
      items: [
        {
          id: "wool-trench",
          name: "The Archetype Trench",
          price: 1250,
          quantity: 1,
          size: "M",
          color: "Sand Beige",
          image: "./assets/product_trench.png"
        }
      ]
    }
  ],
  profile: JSON.parse(localStorage.getItem('spree_profile')) || {
    name: "Dr. A. Shaikh",
    email: "a.shaikh@university.edu",
    phone: "+44 20 7946 0958",
    address: "12 Kensington Palace Gardens",
    city: "London",
    postcode: "W8 4QQ",
    country: "United Kingdom",
    cardName: "Dr A Shaikh",
    cardNumber: "**** **** **** 4820",
    cardExpiry: "09/29"
  },
  activeFilters: {
    category: [],
    color: [],
    size: [],
    price: ""
  },
  sortBy: "featured"
};

// Save state to localStorage helper
function saveState() {
  localStorage.setItem('spree_cart', JSON.stringify(state.cart));
  localStorage.setItem('spree_orders', JSON.stringify(state.orders));
  localStorage.setItem('spree_profile', JSON.stringify(state.profile));
}

// Router Mapping
const routes = {
  '/': renderHome,
  '/browse': renderBrowse,
  '/product/:id': renderProductDetails,
  '/checkout': renderCheckout,
  '/profile': renderProfile,
  '/brands': renderBrands,
  '/editorial': renderEditorial
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initCartDrawer();
  initRouter();
  updateCartBadge();
});

// Router Engine
function initRouter() {
  const router = () => {
    const hash = window.location.hash || '#/';
    
    // Parse path and route params
    let path = hash.slice(1); // remove '#'
    let match = null;
    let renderFunc = null;
    let routeParams = {};

    // Check query parameters in URL
    const queryIdx = path.indexOf('?');
    let queryString = '';
    if (queryIdx !== -1) {
      queryString = path.slice(queryIdx + 1);
      path = path.slice(0, queryIdx);
    }

    // Match patterns like /product/:id
    for (const routePattern in routes) {
      const patternParts = routePattern.split('/');
      const pathParts = path.split('/');

      if (patternParts.length === pathParts.length) {
        let isMatch = true;
        const params = {};

        for (let i = 0; i < patternParts.length; i++) {
          if (patternParts[i].startsWith(':')) {
            const paramName = patternParts[i].slice(1);
            params[paramName] = pathParts[i];
          } else if (patternParts[i] !== pathParts[i]) {
            isMatch = false;
            break;
          }
        }

        if (isMatch) {
          match = routePattern;
          renderFunc = routes[routePattern];
          routeParams = params;
          break;
        }
      }
    }

    if (!renderFunc) {
      // Fallback to Home
      window.location.hash = '#/';
      return;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Update active state in Navigation Links
    updateNavActiveState(path);

    // Call render with route params and query string
    renderFunc(routeParams, queryString);
  };

  window.addEventListener('hashchange', router);
  router(); // Run on initial load
}

function updateNavActiveState(path) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  if (path === '/' || path === '') {
    document.getElementById('nav-home')?.classList.add('active');
  } else if (path.startsWith('/browse')) {
    document.getElementById('nav-browse')?.classList.add('active');
  } else if (path.startsWith('/brands')) {
    document.getElementById('nav-brands')?.classList.add('active');
  } else if (path.startsWith('/editorial')) {
    document.getElementById('nav-editorial')?.classList.add('active');
  }
}

// Cart Drawer Controller
function initCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const openBtn = document.getElementById('nav-cart-btn');
  const closeBtn = document.getElementById('cart-drawer-close');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  openBtn.addEventListener('click', () => {
    renderCartItems();
    backdrop.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    backdrop.classList.remove('open');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('open');
    }
  });

  checkoutBtn.addEventListener('click', () => {
    if (state.cart.length === 0) return;
    backdrop.classList.remove('open');
    window.location.hash = '#/checkout';
  });
}

function updateCartBadge() {
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  const badge = document.getElementById('cart-count-badge');
  if (badge) badge.textContent = count;
}

function addToCart(product, size, color) {
  const existingItemIndex = state.cart.findIndex(
    item => item.product.id === product.id && 
            item.selectedSize === size && 
            item.selectedColor.name === color.name
  );

  if (existingItemIndex !== -1) {
    state.cart[existingItemIndex].quantity += 1;
  } else {
    state.cart.push({
      product,
      quantity: 1,
      selectedSize: size,
      selectedColor: color
    });
  }

  saveState();
  updateCartBadge();
  
  // Show side cart drawer automatically on add
  renderCartItems();
  document.getElementById('cart-drawer-backdrop').classList.add('open');
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `<div class="cart-empty-message">Your shopping bag is empty.</div>`;
    subtotalEl.textContent = "$0.00";
    return;
  }

  let subtotal = 0;
  let html = '';

  state.cart.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;

    html += `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.product.images[0]}" alt="${item.product.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-meta">
            <h3 class="cart-item-title">${item.product.name}</h3>
            <div class="cart-item-submeta">
              Size: ${item.selectedSize} &nbsp;|&nbsp; Color: ${item.selectedColor.name}
            </div>
          </div>
          <div class="cart-item-bottom">
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn decrease-qty" data-index="${index}">−</button>
              <span class="cart-qty-val">${item.quantity}</span>
              <button class="cart-qty-btn increase-qty" data-index="${index}">+</button>
            </div>
            <div class="cart-item-price">$${itemTotal.toLocaleString()}</div>
          </div>
          <div style="text-align: right; margin-top: 0.25rem;">
            <span class="cart-item-remove" data-index="${index}">Remove</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  subtotalEl.textContent = `$${subtotal.toLocaleString()}`;

  // Add event listeners for quantity control and removal
  container.querySelectorAll('.increase-qty').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index);
      state.cart[idx].quantity += 1;
      saveState();
      updateCartBadge();
      renderCartItems();
    });
  });

  container.querySelectorAll('.decrease-qty').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index);
      if (state.cart[idx].quantity > 1) {
        state.cart[idx].quantity -= 1;
      } else {
        state.cart.splice(idx, 1);
      }
      saveState();
      updateCartBadge();
      renderCartItems();
    });
  });

  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index);
      state.cart.splice(idx, 1);
      saveState();
      updateCartBadge();
      renderCartItems();
    });
  });
}

// ----------------------------------------------------
// PAGE RENDERERS
// ----------------------------------------------------

// 1. HOME PAGE
function renderHome() {
  const app = document.getElementById('app-content');
  if (!app) return;

  app.innerHTML = `
    <!-- Editorial Minimalist Hero -->
    <section class="home-hero">
      <div class="hero-img-container">
        <img src="./assets/editorial_hero.png" alt="High Fashion Editorial Banner">
      </div>
      <div class="hero-content">
        <span class="hero-tag">Summer / Autumn Curation</span>
        <h1 class="hero-title">The New<br><span class="editorial-title">Minimalism</span></h1>
        <p class="hero-desc">An exploration of structural form, rich natural materials, and quiet luxury. Shot against brutalist architecture.</p>
        <a href="#/browse" class="btn-primary">Explore Curation</a>
      </div>
    </section>

    <!-- Editorial Discovery Grid -->
    <section class="section-container" style="background: var(--surface-lowest);">
      <div class="section-hdr">
        <div class="section-title-wrap">
          <span class="metadata-label">Vol. IV / Editorial Hub</span>
          <h2 class="section-title">The Curator's Log</h2>
        </div>
        <a href="#/editorial" class="btn-tertiary">Read Magazine</a>
      </div>
      
      <div class="discovery-grid">
        <!-- Panel 1: Large Asymmetric -->
        <div class="discovery-item col-8">
          <div class="discovery-img-wrap aspect-wide">
            <img src="./assets/product_trench.png" alt="Brutalist styling">
          </div>
          <div class="discovery-caption">
            <span class="metadata-label">Trend Report</span>
            <h3 class="discovery-title">Architectural Silhouettes in Heavy Wool</h3>
            <p class="discovery-description">Tailoring that mirrors modern geometry. Discover outerwear that offers structure, protection, and unparalleled comfort for the urban wanderer.</p>
            <a href="#/product/wool-trench" class="btn-tertiary" style="width: fit-content;">Shop The Trench</a>
          </div>
        </div>

        <!-- Panel 2: Side Grid Small -->
        <div class="discovery-item col-4">
          <div class="discovery-img-wrap">
            <img src="./assets/product_dress.png" alt="Fluid Silk drape">
          </div>
          <div class="discovery-caption">
            <span class="metadata-label">Styling Guide</span>
            <h3 class="discovery-title">The Liquid Drape</h3>
            <p class="discovery-description">A bias-cut exploration. How mulberry silk moves with the body, capturing light and reflecting shadows.</p>
            <a href="#/product/silk-slip-dress" class="btn-tertiary" style="width: fit-content;">View Slip Dress</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Luxury Boutique collections shelf (featured items) -->
    <section class="section-container collections-shelf">
      <div class="section-hdr">
        <div class="section-title-wrap">
          <span class="metadata-label">Featured Pieces</span>
          <h2 class="section-title">The Core Closet</h2>
        </div>
        <a href="#/browse" class="btn-secondary">Shop All</a>
      </div>

      <div class="boutique-grid" id="featured-products-container">
        <!-- Rendered dynamically -->
      </div>
    </section>
  `;

  // Render the featured products
  const featuredContainer = document.getElementById('featured-products-container');
  if (featuredContainer) {
    const featured = PRODUCTS.filter(p => p.featured);
    featuredContainer.innerHTML = featured.map(product => `
      <div class="boutique-card" onclick="window.location.hash = '#/product/${product.id}'">
        <div class="boutique-img-wrap">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="boutique-info">
          <span class="boutique-brand">${product.brand}</span>
          <h3 class="boutique-name">${product.name}</h3>
          <div class="boutique-price">$${product.price.toLocaleString()}</div>
        </div>
      </div>
    `).join('');
  }
}

// 2. BROWSE CATALOG PAGE
function renderBrowse(params, queryString) {
  const app = document.getElementById('app-content');
  if (!app) return;

  // Read category query if provided
  let initialCategory = "";
  if (queryString) {
    const qParams = new URLSearchParams(queryString);
    initialCategory = qParams.get('category') || "";
    if (initialCategory && !state.activeFilters.category.includes(initialCategory)) {
      state.activeFilters.category = [initialCategory];
    }
  }

  app.innerHTML = `
    <section class="section-container" style="background: var(--surface-lowest); padding-top: 4rem;">
      <div class="section-title-wrap" style="margin-bottom: 3rem;">
        <span class="metadata-label">Storefront</span>
        <h1 class="section-title">The Curation Catalog</h1>
      </div>

      <div class="catalog-layout">
        <!-- Filters Sidebar -->
        <aside class="filter-panel">
          
          <!-- Category Filter -->
          <div class="filter-group">
            <h3 class="filter-group-title">Categories</h3>
            <div class="filter-options">
              ${["Outerwear", "Dresses", "Bags", "Knitwear", "Tailoring", "Accessories"].map(cat => `
                <label class="filter-checkbox-label">
                  <input type="checkbox" class="filter-category" value="${cat}" ${state.activeFilters.category.includes(cat) ? 'checked' : ''}>
                  ${cat}
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Color Filter -->
          <div class="filter-group">
            <h3 class="filter-group-title">Colors</h3>
            <div class="color-options">
              ${[
                { name: "Beige", hex: "#d5c3b1" },
                { name: "Black", hex: "#111111" },
                { name: "Brown", hex: "#3d2a1c" },
                { name: "Gold", hex: "#e5c060" },
                { name: "White", hex: "#f9f8f6" }
              ].map(col => `
                <label class="color-dot-label" title="${col.name}">
                  <input type="checkbox" class="filter-color" value="${col.name}" ${state.activeFilters.color.includes(col.name) ? 'checked' : ''}>
                  <span class="color-dot" style="background-color: ${col.hex};"></span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Size Filter -->
          <div class="filter-group">
            <h3 class="filter-group-title">Sizes</h3>
            <div class="size-options">
              ${["XXS", "XS", "S", "M", "L", "XL", "O/S"].map(size => `
                <label class="size-btn-label">
                  <input type="checkbox" class="filter-size" value="${size}" ${state.activeFilters.size.includes(size) ? 'checked' : ''}>
                  <span class="size-btn">${size}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Price Filter -->
          <div class="filter-group">
            <h3 class="filter-group-title">Price Limit</h3>
            <div class="filter-options">
              ${["Under $500", "$500 - $1000", "Over $1000"].map(range => `
                <label class="filter-checkbox-label">
                  <input type="radio" name="price-limit" class="filter-price" value="${range}" ${state.activeFilters.price === range ? 'checked' : ''}>
                  ${range}
                </label>
              `).join('')}
              <label class="filter-checkbox-label">
                <input type="radio" name="price-limit" class="filter-price" value="" ${state.activeFilters.price === "" ? 'checked' : ''}>
                Show All Prices
              </label>
            </div>
          </div>

        </aside>

        <!-- Product Grid Content -->
        <div class="catalog-content">
          <div class="catalog-header">
            <div class="catalog-count" id="catalog-count-label">Showing 0 pieces</div>
            <div>
              <select class="sort-select" id="catalog-sort">
                <option value="featured" ${state.sortBy === 'featured' ? 'selected' : ''}>Sort: Featured</option>
                <option value="price-low" ${state.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price-high" ${state.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>Sort: Top Rated</option>
              </select>
            </div>
          </div>

          <div class="product-grid" id="catalog-grid">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach event handlers for filtering/sorting
  const grid = document.getElementById('catalog-grid');
  const countLabel = document.getElementById('catalog-count-label');

  const applyFilters = () => {
    // Collect selected filters
    state.activeFilters.category = Array.from(document.querySelectorAll('.filter-category:checked')).map(el => el.value);
    state.activeFilters.color = Array.from(document.querySelectorAll('.filter-color:checked')).map(el => el.value);
    state.activeFilters.size = Array.from(document.querySelectorAll('.filter-size:checked')).map(el => el.value);
    
    const priceRadio = document.querySelector('.filter-price:checked');
    state.activeFilters.price = priceRadio ? priceRadio.value : "";
    state.sortBy = document.getElementById('catalog-sort').value;

    let filtered = [...PRODUCTS];

    // Category filter
    if (state.activeFilters.category.length > 0) {
      filtered = filtered.filter(p => state.activeFilters.category.includes(p.category));
    }

    // Color filter
    if (state.activeFilters.color.length > 0) {
      filtered = filtered.filter(p => p.colors.some(c => state.activeFilters.color.some(sc => c.name.includes(sc))));
    }

    // Size filter
    if (state.activeFilters.size.length > 0) {
      filtered = filtered.filter(p => p.sizes.some(s => state.activeFilters.size.includes(s)));
    }

    // Price filter
    if (state.activeFilters.price) {
      if (state.activeFilters.price === "Under $500") {
        filtered = filtered.filter(p => p.price < 500);
      } else if (state.activeFilters.price === "$500 - $1000") {
        filtered = filtered.filter(p => p.price >= 500 && p.price <= 1000);
      } else if (state.activeFilters.price === "Over $1000") {
        filtered = filtered.filter(p => p.price > 1000);
      }
    }

    // Sorting
    if (state.sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Render cards
    countLabel.textContent = `Showing ${filtered.length} piece${filtered.length === 1 ? '' : 's'}`;
    
    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; padding: 4rem; text-align: center; font-family: var(--font-headline); font-style: italic; color: var(--color-secondary);">No pieces match your current filters.</div>`;
      return;
    }

    grid.innerHTML = filtered.map(product => `
      <div class="product-card" onclick="window.location.hash = '#/product/${product.id}'">
        <div class="product-img-wrap">
          ${product.featured ? `<span class="badge-tertiary">Limited Curation</span>` : ''}
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="product-info">
          <div class="product-meta">
            <span class="product-brand">${product.brand}</span>
            <span class="product-price">$${product.price.toLocaleString()}</span>
          </div>
          <h2 class="product-name">${product.name}</h2>
        </div>
      </div>
    `).join('');
  };

  // Bind change events
  document.querySelectorAll('.filter-category, .filter-color, .filter-size, .filter-price').forEach(el => {
    el.addEventListener('change', applyFilters);
  });
  document.getElementById('catalog-sort').addEventListener('change', applyFilters);

  // Trigger initial filter application
  applyFilters();
}

// 3. PRODUCT DETAILS PAGE
function renderProductDetails(params) {
  const productId = params.id;
  const product = PRODUCTS.find(p => p.id === productId);
  const app = document.getElementById('app-content');
  if (!app) return;

  if (!product) {
    app.innerHTML = `
      <div class="section-container" style="text-align: center;">
        <h1 class="section-title">Piece Not Found</h1>
        <p style="margin-top: 1rem;"><a href="#/browse" class="btn-primary">Return to Catalog</a></p>
      </div>
    `;
    return;
  }

  // Pre-select first size and color
  let selectedSize = product.sizes[0];
  let selectedColor = product.colors[0];

  app.innerHTML = `
    <section class="product-detail-layout" style="background: var(--surface-lowest);">
      <!-- Gallery Column -->
      <div class="detail-gallery">
        <div class="detail-main-img">
          <img id="main-product-img" src="${product.images[0]}" alt="${product.name}">
        </div>
      </div>

      <!-- Sticky Info Panel Column -->
      <div class="detail-panel">
        <div class="detail-header">
          <span class="detail-brand">${product.brand}</span>
          <h1 class="detail-title">${product.name}</h1>
          <div class="detail-price">$${product.price.toLocaleString()}</div>
        </div>

        <p class="detail-desc">${product.description}</p>

        <div class="detail-options">
          <!-- Size Selector -->
          <div>
            <div class="option-title">
              Size <span class="option-selection-value" id="selected-size-label">${selectedSize}</span>
            </div>
            <div class="size-options">
              ${product.sizes.map(size => `
                <label class="size-btn-label">
                  <input type="radio" name="detail-size" class="detail-size-radio" value="${size}" ${size === selectedSize ? 'checked' : ''}>
                  <span class="size-btn">${size}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Color Selector -->
          <div style="${product.colors.length <= 1 ? 'display:none;' : ''}">
            <div class="option-title">
              Color <span class="option-selection-value" id="selected-color-label">${selectedColor.name}</span>
            </div>
            <div class="color-options">
              ${product.colors.map((col, idx) => `
                <label class="color-dot-label" title="${col.name}">
                  <input type="radio" name="detail-color" class="detail-color-radio" value="${idx}" ${idx === 0 ? 'checked' : ''}>
                  <span class="color-dot" style="background-color: ${col.hex};"></span>
                </label>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn-primary" id="add-to-bag-btn">Add to Shopping Bag</button>
          <a href="#/browse" class="btn-secondary" style="text-align: center;">Back to Catalog</a>
        </div>

        <!-- Accordions -->
        <div class="detail-accordions">
          <div class="accordion-item active" id="acc-details">
            <div class="accordion-hdr">
              <span>Details & Fit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acc-chevron"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="accordion-content" style="max-height: 500px;">
              <ul>
                ${product.details.map(det => `<li>${det}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="accordion-item" id="acc-shipping">
            <div class="accordion-hdr">
              <span>Shipping & Returns</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="acc-chevron"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="accordion-content">
              <p>We offer complimentary worldwide carbon-neutral express shipping on all orders. Returns can be requested within 14 days of delivery. Custom duties are included in our price.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;

  // Attach event handlers for size selection
  const sizeRadios = document.querySelectorAll('.detail-size-radio');
  const sizeLabel = document.getElementById('selected-size-label');
  sizeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedSize = e.target.value;
      if (sizeLabel) sizeLabel.textContent = selectedSize;
    });
  });

  // Attach event handlers for color selection
  const colorRadios = document.querySelectorAll('.detail-color-radio');
  const colorLabel = document.getElementById('selected-color-label');
  colorRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const idx = parseInt(e.target.value);
      selectedColor = product.colors[idx];
      if (colorLabel) colorLabel.textContent = selectedColor.name;
    });
  });

  // Add to Cart Button logic
  document.getElementById('add-to-bag-btn').addEventListener('click', () => {
    addToCart(product, selectedSize, selectedColor);
  });

  // Accordion Toggles
  document.querySelectorAll('.accordion-hdr').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const item = hdr.parentElement;
      const isAct = item.classList.contains('active');
      
      // Close all first
      document.querySelectorAll('.accordion-item').forEach(ac => {
        ac.classList.remove('active');
        const content = ac.querySelector('.accordion-content');
        if (content) content.style.maxHeight = '0';
      });

      if (!isAct) {
        item.classList.add('active');
        const content = item.querySelector('.accordion-content');
        if (content) content.style.maxHeight = '500px';
      }
    });
  });
}

// 4. CHECKOUT PAGE
function renderCheckout() {
  const app = document.getElementById('app-content');
  if (!app) return;

  if (state.cart.length === 0) {
    app.innerHTML = `
      <div class="section-container" style="text-align: center;">
        <h1 class="section-title">Empty Shopping Bag</h1>
        <p style="margin-top: 1rem;"><a href="#/browse" class="btn-primary">Return to Catalog</a></p>
      </div>
    `;
    return;
  }

  const subtotal = state.cart.reduce((tot, item) => tot + item.product.price * item.quantity, 0);
  const delivery = 0; // complimentary shipping
  const grandTotal = subtotal + delivery;

  app.innerHTML = `
    <section class="checkout-layout">
      <!-- Checkout Forms -->
      <div class="checkout-forms">
        <h1 class="section-title" style="font-size: 2.8rem; margin-bottom: 1rem;">Complete Purchase</h1>

        <form id="checkout-form" onsubmit="event.preventDefault();">
          
          <!-- Delivery Address -->
          <div class="checkout-section" style="margin-bottom: 4rem;">
            <h2 class="checkout-section-title">01 &nbsp; Delivery Details</h2>
            <div class="form-grid">
              <div class="form-group form-col-2">
                <label class="form-label" for="chk-name">Full Name</label>
                <input type="text" class="form-input" id="chk-name" value="${state.profile.name}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="chk-email">Email Address</label>
                <input type="email" class="form-input" id="chk-email" value="${state.profile.email}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="chk-phone">Phone Number</label>
                <input type="text" class="form-input" id="chk-phone" value="${state.profile.phone}" required>
              </div>
              <div class="form-group form-col-2">
                <label class="form-label" for="chk-address">Address Line 1</label>
                <input type="text" class="form-input" id="chk-address" value="${state.profile.address}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="chk-city">City</label>
                <input type="text" class="form-input" id="chk-city" value="${state.profile.city}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="chk-postcode">Postcode / ZIP</label>
                <input type="text" class="form-input" id="chk-postcode" value="${state.profile.postcode}" required>
              </div>
              <div class="form-group form-col-2">
                <label class="form-label" for="chk-country">Country</label>
                <input type="text" class="form-input" id="chk-country" value="${state.profile.country}" required>
              </div>
            </div>
          </div>

          <!-- Payment Details -->
          <div class="checkout-section">
            <h2 class="checkout-section-title">02 &nbsp; Payment Details</h2>
            <div class="form-grid">
              <div class="form-group form-col-2">
                <label class="form-label" for="chk-cardname">Cardholder Name</label>
                <input type="text" class="form-input" id="chk-cardname" value="${state.profile.cardName}" required>
              </div>
              <div class="form-group form-col-2">
                <label class="form-label" for="chk-cardnum">Card Number</label>
                <input type="text" class="form-input" id="chk-cardnum" placeholder="xxxx xxxx xxxx xxxx" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="chk-cardexp">Expiry Date</label>
                <input type="text" class="form-input" id="chk-cardexp" placeholder="MM/YY" value="${state.profile.cardExpiry}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="chk-cardcvc">CVC Security Code</label>
                <input type="text" class="form-input" id="chk-cardcvc" placeholder="xxx" required>
              </div>
            </div>
          </div>

        </form>
      </div>

      <!-- Checkout Summary Column -->
      <aside class="checkout-summary-panel">
        <h2 class="checkout-summary-title">Order Summary</h2>
        
        <div class="checkout-summary-list">
          ${state.cart.map(item => `
            <div class="checkout-summary-item">
              <span class="checkout-summary-item-name">${item.product.name} × ${item.quantity}</span>
              <span class="checkout-summary-item-price">$${(item.product.price * item.quantity).toLocaleString()}</span>
            </div>
          `).join('')}
        </div>

        <div class="checkout-summary-totals">
          <div class="checkout-summary-row">
            <span class="checkout-summary-label">Subtotal</span>
            <span class="checkout-summary-val">$${subtotal.toLocaleString()}</span>
          </div>
          <div class="checkout-summary-row">
            <span class="checkout-summary-label">Complimentary Shipping</span>
            <span class="checkout-summary-val">$0.00</span>
          </div>
          <div class="checkout-summary-row" style="margin-top: 1rem;">
            <span class="checkout-summary-label grand">Order Total</span>
            <span class="checkout-summary-val grand">$${grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <button type="submit" form="checkout-form" class="btn-primary checkout-submit-btn" id="submit-purchase-btn">Pay $${grandTotal.toLocaleString()}</button>
      </aside>
    </section>
  `;

  // Attach Order Submission handler
  document.getElementById('submit-purchase-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Save profile updates from checkout
    state.profile.name = document.getElementById('chk-name').value;
    state.profile.email = document.getElementById('chk-email').value;
    state.profile.phone = document.getElementById('chk-phone').value;
    state.profile.address = document.getElementById('chk-address').value;
    state.profile.city = document.getElementById('chk-city').value;
    state.profile.postcode = document.getElementById('chk-postcode').value;
    state.profile.country = document.getElementById('chk-country').value;
    state.profile.cardName = document.getElementById('chk-cardname').value;
    
    const cardInput = document.getElementById('chk-cardnum').value;
    state.profile.cardNumber = "**** **** **** " + cardInput.slice(-4);
    state.profile.cardExpiry = document.getElementById('chk-cardexp').value;

    // Show simulated checkout loading overlay
    app.innerHTML = `
      <div class="success-screen">
        <div class="success-icon" style="background-color: var(--surface-container); color: var(--color-primary);">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 2s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
        </div>
        <h2 class="success-title">Authenticating...</h2>
        <p class="success-desc">Connecting to secure banking gate. Please do not close this window.</p>
      </div>
      <style>
        @keyframes spin { 100% { transform: rotate(360deg); } }
      </style>
    `;

    setTimeout(() => {
      // Create Order in state
      const orderId = "SPREE-" + Math.floor(10000 + Math.random() * 90000);
      const today = new Date();
      const dateString = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      const newOrder = {
        id: orderId,
        date: dateString,
        status: "Processing Delivery",
        total: grandTotal,
        items: state.cart.map(item => ({
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          size: item.selectedSize,
          color: item.selectedColor.name,
          image: item.product.images[0]
        }))
      };

      state.orders.unshift(newOrder); // Add to beginning
      state.cart = []; // Empty cart
      
      saveState();
      updateCartBadge();

      // Show Thank You success screen
      app.innerHTML = `
        <div class="success-screen">
          <div class="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 class="success-title">Thank You</h2>
          <p class="success-desc">Your order has been validated and accepted. A curator will compile your collection shortly.</p>
          
          <div class="success-meta">
            <span>Order Reference: <strong>${orderId}</strong></span>
            <span>Date: ${dateString}</span>
          </div>

          <div style="margin-top: 1rem; display: flex; gap: 1rem;">
            <a href="#/profile" class="btn-primary">View Dashboard</a>
            <a href="#/" class="btn-secondary">Return Home</a>
          </div>
        </div>
      `;
    }, 1500);
  });
}

// 5. USER PROFILE DASHBOARD
function renderProfile() {
  const app = document.getElementById('app-content');
  if (!app) return;

  app.innerHTML = `
    <section class="section-container" style="background: var(--surface-lowest); padding-top: 4rem;">
      <div class="section-title-wrap" style="margin-bottom: 3rem;">
        <span class="metadata-label">Account Hub</span>
        <h1 class="section-title">The Curator's Dashboard</h1>
      </div>

      <div class="profile-layout">
        <!-- Sidebar -->
        <aside class="profile-sidebar">
          <button class="profile-nav-btn active" id="prof-btn-details">Profile Details</button>
          <button class="profile-nav-btn" id="prof-btn-orders">Order Archives</button>
        </aside>

        <!-- Main Content -->
        <div class="profile-content" id="profile-main-content">
          <!-- Rendered dynamically -->
        </div>
      </div>
    </section>
  `;

  const sidebarDetails = document.getElementById('prof-btn-details');
  const sidebarOrders = document.getElementById('prof-btn-orders');
  const contentArea = document.getElementById('profile-main-content');

  const renderDetailsTab = () => {
    sidebarDetails.classList.add('active');
    sidebarOrders.classList.remove('active');

    contentArea.innerHTML = `
      <div class="profile-card">
        <h2 class="profile-card-title">Personal Information</h2>
        <div class="profile-info-grid">
          <div class="profile-info-block">
            <span class="metadata-label">Name</span>
            <div class="profile-info-val">${state.profile.name}</div>
          </div>
          <div class="profile-info-block">
            <span class="metadata-label">Email</span>
            <div class="profile-info-val">${state.profile.email}</div>
          </div>
          <div class="profile-info-block">
            <span class="metadata-label">Contact Number</span>
            <div class="profile-info-val">${state.profile.phone}</div>
          </div>
        </div>
      </div>

      <div class="profile-card">
        <h2 class="profile-card-title">Default Delivery Curation</h2>
        <div class="profile-info-grid">
          <div class="profile-info-block" style="grid-column: span 2;">
            <span class="metadata-label">Address</span>
            <div class="profile-info-val">${state.profile.address}</div>
          </div>
          <div class="profile-info-block">
            <span class="metadata-label">City</span>
            <div class="profile-info-val">${state.profile.city}</div>
          </div>
          <div class="profile-info-block">
            <span class="metadata-label">Postcode / ZIP</span>
            <div class="profile-info-val">${state.profile.postcode}</div>
          </div>
          <div class="profile-info-block">
            <span class="metadata-label">Country</span>
            <div class="profile-info-val">${state.profile.country}</div>
          </div>
        </div>
      </div>

      <div class="profile-card">
        <h2 class="profile-card-title">Saved Payment Options</h2>
        <div class="profile-info-grid">
          <div class="profile-info-block">
            <span class="metadata-label">Method</span>
            <div class="profile-info-val" style="display: flex; align-items: center; gap: 0.5rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              Mastercard (${state.profile.cardNumber})
            </div>
          </div>
          <div class="profile-info-block">
            <span class="metadata-label">Expires</span>
            <div class="profile-info-val">${state.profile.cardExpiry}</div>
          </div>
        </div>
      </div>
    `;
  };

  const renderOrdersTab = () => {
    sidebarDetails.classList.remove('active');
    sidebarOrders.classList.add('active');

    if (state.orders.length === 0) {
      contentArea.innerHTML = `
        <div class="profile-card" style="text-align: center;">
          <h2 class="profile-card-title">No Orders Placed</h2>
          <p class="detail-desc" style="margin-bottom: 2rem;">You haven't commissioned any collections from us yet.</p>
          <p><a href="#/browse" class="btn-primary">Browse Curation</a></p>
        </div>
      `;
      return;
    }

    contentArea.innerHTML = `
      <div class="order-list">
        ${state.orders.map(order => `
          <div class="order-item">
            <div class="order-header">
              <div class="order-meta-info">
                <div class="order-meta-block">
                  <span class="metadata-label">Reference</span>
                  <div style="font-weight: 600;">${order.id}</div>
                </div>
                <div class="order-meta-block">
                  <span class="metadata-label">Commission Date</span>
                  <div>${order.date}</div>
                </div>
                <div class="order-meta-block">
                  <span class="metadata-label">Amount</span>
                  <div>$${order.total.toLocaleString()}</div>
                </div>
              </div>
              <div>
                <span class="order-status">${order.status}</span>
              </div>
            </div>

            <div class="order-products">
              ${order.items.map(item => `
                <div class="order-product-row">
                  <div class="order-product-img">
                    <img src="${item.image}" alt="${item.name}">
                  </div>
                  <div class="order-product-details">
                    <h3 class="order-product-name">${item.name}</h3>
                    <div class="order-product-spec">
                      Size: ${item.size} &nbsp;|&nbsp; Color: ${item.color} &nbsp;|&nbsp; Qty: ${item.quantity}
                    </div>
                  </div>
                  <div style="margin-left: auto; font-family: var(--font-label); font-weight: 500;">
                    $${(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  };

  sidebarDetails.addEventListener('click', renderDetailsTab);
  sidebarOrders.addEventListener('click', renderOrdersTab);

  // Initial tab loading
  renderDetailsTab();
}

// 6. BRAND DIRECTORY PAGE
function renderBrands() {
  const app = document.getElementById('app-content');
  if (!app) return;

  app.innerHTML = `
    <section class="brand-dir-layout" style="background: var(--surface-lowest);">
      <div class="section-title-wrap">
        <span class="metadata-label">Archival Logs</span>
        <h1 class="section-title" style="font-size: 3.2rem;">The Designer Directory</h1>
      </div>

      <!-- Designer Highlights -->
      <div class="brand-highlights">
        <div class="brand-highlight-card">
          <div class="brand-highlight-img">
            <img src="./assets/product_trench.png" alt="L'Atelier Spree styling" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="brand-highlight-info">
            <span class="metadata-label">Design House In Focus</span>
            <h2 class="brand-highlight-name">L'Atelier Spree</h2>
            <p class="brand-highlight-desc">Modern structural outer-garments designed in Paris and tailored in Biella, Italy. Known for double-breasted woolen drapes and organic horn button closures.</p>
            <a href="#/browse?category=Outerwear" class="btn-primary" style="width: fit-content;">Explore Collection</a>
          </div>
        </div>

        <div class="brand-highlight-card">
          <div class="brand-highlight-img">
            <img src="./assets/product_dress.png" alt="Maison d'Art atelier" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div class="brand-highlight-info">
            <span class="metadata-label">Design House In Focus</span>
            <h2 class="brand-highlight-name">Maison d'Art</h2>
            <p class="brand-highlight-desc">Meticulous bias-cut specialists working entirely in organic mulberry silk twills. Championing the delicate, fluid movement of fabric against body contours.</p>
            <a href="#/browse?category=Dresses" class="btn-primary" style="width: fit-content;">Explore Collection</a>
          </div>
        </div>
      </div>

      <!-- Alphabetical Index -->
      <div class="brand-az-index" id="az-index-bar">
        ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(l => `<span class="brand-az-letter" data-letter="${l}">${l}</span>`).join('')}
      </div>

      <!-- Brand alphabetical groups -->
      <div class="brand-list-section">
        
        <div class="brand-group-row" id="brand-group-L">
          <div class="brand-group-letter">L</div>
          <div class="brand-group-items">
            <a href="#/browse" class="brand-item-link">L'Atelier Spree</a>
            <a href="#/browse" class="brand-item-link">Lemaire Studio</a>
            <a href="#/browse" class="brand-item-link">Loro Piana</a>
          </div>
        </div>

        <div class="brand-group-row" id="brand-group-M">
          <div class="brand-group-letter">M</div>
          <div class="brand-group-items">
            <a href="#/browse" class="brand-item-link">Maison d'Art</a>
            <a href="#/browse" class="brand-item-link">Margiela Archive</a>
            <a href="#/browse" class="brand-item-link">Minimalist Form</a>
          </div>
        </div>

        <div class="brand-group-row" id="brand-group-N">
          <div class="brand-group-letter">N</div>
          <div class="brand-group-items">
            <a href="#/browse" class="brand-item-link">Nordic Atelier</a>
            <a href="#/browse" class="brand-item-link">Nili Lotan</a>
          </div>
        </div>

        <div class="brand-group-row" id="brand-group-S">
          <div class="brand-group-letter">S</div>
          <div class="brand-group-items">
            <a href="#/browse" class="brand-item-link">Studio Spree</a>
            <a href="#/browse" class="brand-item-link">Sienna Form</a>
          </div>
        </div>

      </div>
    </section>
  `;

  // Alphabet scroll binding
  document.querySelectorAll('.brand-az-letter').forEach(letterBtn => {
    letterBtn.addEventListener('click', (e) => {
      const letter = e.target.dataset.letter;
      const targetEl = document.getElementById(`brand-group-${letter}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

// 7. EDITORIAL DISCOVERY HUB PAGE
function renderEditorial() {
  const app = document.getElementById('app-content');
  if (!app) return;

  app.innerHTML = `
    <section class="editorial-hub" style="background: var(--surface-lowest);">
      <div class="section-title-wrap">
        <span class="metadata-label">Spree Journal</span>
        <h1 class="section-title" style="font-size: 3.5rem;">The Editorial Journal</h1>
      </div>

      <!-- Featured Story -->
      <article class="editorial-featured-article">
        <div class="featured-article-img">
          <img src="./assets/editorial_hero.png" alt="Summer Edit">
        </div>
        <div class="featured-article-info">
          <span class="metadata-label">Vol. IV / Cover Story</span>
          <h2 class="featured-article-title">The Philosophy of Form</h2>
          <p class="featured-article-snippet">How design houses are shifting away from heavy branding back towards sculptural patterns, structural materials, and timeless tones. A deep dive with L'Atelier Spree.</p>
          <a href="#/browse" class="btn-primary" style="width: fit-content;">Shop The Story Collection</a>
        </div>
      </article>

      <!-- Editorial Grid -->
      <div class="editorial-grid">
        <div class="editorial-card">
          <div class="editorial-card-img">
            <img src="./assets/product_dress.png" alt="Silk Editorial">
          </div>
          <span class="metadata-label">Design & Textiles</span>
          <h3 class="editorial-card-title">Fluid Geometry</h3>
          <p class="editorial-card-desc">The structural challenge of building lightweight clothing that falls beautifully. We analyze bias-cuts, seam styling, and the natural elasticity of mulberry fibers.</p>
          <a href="#/product/silk-slip-dress" class="btn-tertiary" style="width: fit-content;">Read Essay</a>
        </div>

        <div class="editorial-card">
          <div class="editorial-card-img">
            <img src="./assets/product_trench.png" alt="Brutalist Architecture">
          </div>
          <span class="metadata-label">Architecture</span>
          <h3 class="editorial-card-title">Brutalist Textures</h3>
          <p class="editorial-card-desc">Exploring how concrete patterns and severe lines interact with soft cashmere and structural wool coats. Our visual team shoots in London's concrete landmarks.</p>
          <a href="#/product/wool-trench" class="btn-tertiary" style="width: fit-content;">View Photo Gallery</a>
        </div>

        <div class="editorial-card">
          <div class="editorial-card-img">
            <img src="./assets/product_bag.png" alt="Florence Craft">
          </div>
          <span class="metadata-label">Artisan Studies</span>
          <h3 class="editorial-card-title">Architectural Leather</h3>
          <p class="editorial-card-desc">A study of Florence's vegetable-tanning workshops. We follow the creation of sculptural handbags from raw calfskin hides to polished final models.</p>
          <a href="#/product/leather-bag" class="btn-tertiary" style="width: fit-content;">Read Interview</a>
        </div>
      </div>
    </section>
  `;
}
