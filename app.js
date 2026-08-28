/**
 * Hermanos Jota - Mid-Century Modern Catalog Application
 */

const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Sillón 'Kierkegaard'",
    category: "asientos",
    material: "nogal",
    tags: ["edicion-limitada", "madera-maciza"],
    badge: { text: "NUEVO", class: "badge-nuevo" },
    desc: "Nogal macizo & Cuero trenzado",
    fullDesc: "Estructura en nogal macizo seleccionado con encastres tradicionales a espiga vista. Asiento y respaldo trenzados a mano en cuero vacuno curtido al vegetal de primera calidad.",
    price: 1450000,
    image: "https://images.unsplash.com/photo-1580481077111-2092c4314dcf?auto=format&fit=crop&w=800&q=80",
    swatches: ["#4A3326", "#93532C"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 2,
    title: "Mesa Baja 'Boreal'",
    category: "mesas",
    material: "roble",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Roble claro acabado a la cera",
    fullDesc: "Mesa de centro baja de líneas puras con terminación a la cera de abejas natural. Resalta la veta suave del roble y aporta calidez a espacios contemporáneos.",
    price: 890000,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    swatches: ["#C9A980"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 3,
    title: "Credenza 'Aalto'",
    category: "almacenaje",
    material: "nogal",
    tags: ["enchapados"],
    badge: { text: "AGOTADO", class: "badge-agotado" },
    desc: "Teca maciza & Detalles en latón",
    fullDesc: "Inspirada en el diseño escandinavo de los años 60. Puertas corredizas con tiradores forjados en latón envejecido y estantes interiores regulables.",
    price: 2100000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    swatches: ["#4A3326"],
    isFavorite: false,
    inStock: false
  },
  {
    id: 4,
    title: "Estantería 'Líneas'",
    category: "almacenaje",
    material: "ebano",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Fresno teñido oscuro",
    fullDesc: "Sistema modular vertical de proporciones armónicas. Los separadores asimétricos crean un juego rítmico ideal para exhibir libros y objetos de arte.",
    price: 1150000,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    swatches: ["#221E1C"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 5,
    title: "Silla 'Curva'",
    category: "asientos",
    material: "roble",
    tags: ["edicion-limitada", "madera-maciza"],
    badge: { text: "SUSTENTABLE", class: "badge-sustentable" },
    desc: "Haya curvada al vapor & Esterilla",
    fullDesc: "Estructura ligera moldeada con técnica de curvado al vapor. Respaldo tejido en esterilla natural francesa que ofrece flexibilidad ergonómica.",
    price: 420000,
    stockLabel: "±4 disp.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    swatches: ["#C9A980"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 6,
    title: "Mesa Comedor 'Patagonia'",
    category: "mesas",
    material: "nogal",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Lenga patagónica maciza, 2.4m",
    fullDesc: "Tablones enteros de lenga fueguina con canto natural preservado. Base robusta con ensambles ocultos capaz de alojar cómodamente a 10 comensales.",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
    swatches: ["#4A3326"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 7,
    title: "Butaca 'Nordic Lounge'",
    category: "asientos",
    material: "nogal",
    tags: ["enchapados", "edicion-limitada"],
    badge: { text: "NUEVO", class: "badge-nuevo" },
    desc: "Madera curvada & Tapizado Bouclé",
    fullDesc: "Diseño ergonómico con silueta envolvente, tapizado en bouclé texturado de lana virgen con base giratoria en madera lustrada.",
    price: 1280000,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
    swatches: ["#4A3326"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 8,
    title: "Mesa Auxiliar 'Totem'",
    category: "mesas",
    material: "ebano",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Ébano macizo torneado a mano",
    fullDesc: "Pieza escultórica torneada de un único bloque de madera. Funciona como mesa lateral o peana de apoyo para iluminación.",
    price: 680000,
    stockLabel: "2 disp.",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
    swatches: ["#221E1C"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 9,
    title: "Lámpara de Pie 'Arco 60'",
    category: "accesorios",
    material: "roble",
    tags: ["edicion-limitada"],
    badge: null,
    desc: "Brazo en roble & Pantalla lino",
    fullDesc: "Iluminación cálida y difusa con fuste de madera curvada y pantalla cónica de lino crudo tejida artesanalmente.",
    price: 540000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    swatches: ["#C9A980"],
    isFavorite: false,
    inStock: true
  }
];

// Application State
const state = {
  activeCategories: new Set(["asientos"]),
  activeMaterials: new Set(["nogal"]),
  activeTag: null,
  searchQuery: "",
  sortBy: "novedades",
  viewMode: "grid",
  currentPage: 1,
  itemsPerPage: 6,
  cart: [],
  favorites: new Set()
};

// Formatting Helper
function formatCurrency(num) {
  return "$ " + num.toLocaleString("es-AR");
}

// Show Toast Message
function showToast(message, icon = "✓") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Filter and Sort Products
function getFilteredProducts() {
  return PRODUCTS_DATA.filter(p => {
    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.desc.toLowerCase().includes(q);
      const matchMaterial = p.material.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchMaterial) return false;
    }

    // Categories (if any selected, must match)
    if (state.activeCategories.size > 0 && !state.activeCategories.has(p.category)) {
      return false;
    }

    // Materials (if any selected, must match)
    if (state.activeMaterials.size > 0 && !state.activeMaterials.has(p.material)) {
      return false;
    }

    // Quick tag
    if (state.activeTag && !p.tags.includes(state.activeTag)) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === "precio-asc") return a.price - b.price;
    if (state.sortBy === "precio-desc") return b.price - a.price;
    if (state.sortBy === "alfabetico") return a.title.localeCompare(b.title);
    return 0; // Default: 'novedades'
  });
}

// Render Products Grid
function renderCatalog() {
  const grid = document.getElementById("productsGrid");
  const filtered = getFilteredProducts();
  const totalCount = filtered.length;

  // Update counter
  document.getElementById("shownCount").textContent = Math.min(totalCount, state.itemsPerPage);
  document.getElementById("totalPiecesCount").textContent = totalCount;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-secondary);">
          No se encontraron piezas
        </p>
        <p style="font-size: 0.9rem;">Prueba modificando los filtros o realizando otra búsqueda.</p>
        <button onclick="resetFilters()" class="btn-secondary" style="margin-top: 1.5rem;">Limpiar Filtros</button>
      </div>
    `;
    renderPagination(0);
    return;
  }

  // Pagination slice
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + state.itemsPerPage);

  grid.className = `products-grid ${state.viewMode === 'list' ? 'list-view' : ''}`;
  grid.innerHTML = pageItems.map(item => {
    const isFav = state.favorites.has(item.id);
    const badgeHtml = item.badge 
      ? `<span class="card-badge ${item.badge.class}">${item.badge.text}</span>` 
      : '';
    
    const swatchesHtml = item.swatches ? item.swatches.map(color => 
      `<span class="color-dot" style="background-color: ${color};"></span>`
    ).join('') : '';

    const stockHtml = item.stockLabel 
      ? `<span class="stock-tag">${item.stockLabel}</span>` 
      : '';

    return `
      <article class="product-card" onclick="openProductModal(${item.id})">
        <div class="product-image-container">
          ${badgeHtml}
          <img src="${item.image}" alt="${item.title}" class="product-image" loading="lazy">
        </div>
        <div class="product-info">
          <div class="product-header-row">
            <h3 class="product-title">${item.title}</h3>
            <button class="favorite-btn ${isFav ? 'active' : ''}" 
                    title="Guardar en favoritos"
                    onclick="event.stopPropagation(); toggleFavorite(${item.id})">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
          <p class="product-desc">${item.desc}</p>
          <div class="product-footer-row">
            <span class="product-price">${formatCurrency(item.price)}</span>
            <div class="product-meta">
              ${swatchesHtml}
              ${stockHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  renderPagination(Math.ceil(totalCount / state.itemsPerPage));
}

// Render Pagination Controls
function renderPagination(totalPages) {
  const container = document.getElementById("paginationContainer");
  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = `
    <button class="page-btn" ${state.currentPage === 1 ? 'disabled' : ''} onclick="changePage(${state.currentPage - 1})">
      &lt;
    </button>
  `;

  for (let i = 1; i <= Math.min(3, totalPages); i++) {
    html += `
      <button class="page-btn ${state.currentPage === i ? 'active' : ''}" onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }

  if (totalPages > 4) {
    html += `<span class="page-ellipsis">...</span>`;
    html += `
      <button class="page-btn ${state.currentPage === totalPages ? 'active' : ''}" onclick="changePage(${totalPages})">
        ${totalPages}
      </button>
    `;
  } else if (totalPages === 4) {
    html += `
      <button class="page-btn ${state.currentPage === 4 ? 'active' : ''}" onclick="changePage(4)">
        4
      </button>
    `;
  }

  html += `
    <button class="page-btn" ${state.currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${state.currentPage + 1})">
      &gt;
    </button>
  `;

  container.innerHTML = html;
}

// Pagination handler
function changePage(page) {
  state.currentPage = page;
  renderCatalog();
  document.getElementById("catalogSection").scrollIntoView({ behavior: "smooth" });
}

// Toggle Favorite
function toggleFavorite(productId) {
  if (state.favorites.has(productId)) {
    state.favorites.delete(productId);
    showToast("Eliminado de tu lista de guardados", "♡");
  } else {
    state.favorites.add(productId);
    showToast("Guardado en tus favoritos", "♥");
  }
  renderCatalog();
}

// Open Product Details Modal
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("productModalContent");

  modalBody.innerHTML = `
    <div class="modal-product-layout">
      <img src="${product.image}" alt="${product.title}" class="modal-product-image">
      <div class="modal-product-details">
        <h2 class="modal-title" style="margin-bottom: 0.25rem;">${product.title}</h2>
        <p style="color: var(--accent-rust); font-weight: 600; font-size: 0.9rem;">${product.desc}</p>
        <div class="modal-price">${formatCurrency(product.price)}</div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${product.fullDesc}</p>
        <div class="modal-actions">
          <button class="btn-primary" onclick="addToCart(${product.id}); closeModal('productModal')">
            Agregar a Cotización
          </button>
          <button class="btn-secondary" onclick="openBespokeModal('${product.title}'); closeModal('productModal')">
            Personalizar
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
}

// Cart System
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.cart.push(product);
  document.getElementById("cartCount").textContent = state.cart.length;
  showToast(`"${product.title}" agregado a tu selección`, "🛒");
}

function openCartModal() {
  const modal = document.getElementById("cartModal");
  const listContainer = document.getElementById("cartItemsList");
  const totalAmountEl = document.getElementById("cartTotalAmount");

  if (state.cart.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
        <p>Tu selección de cotización está vacía.</p>
      </div>
    `;
    totalAmountEl.textContent = "$ 0";
  } else {
    const total = state.cart.reduce((acc, item) => acc + item.price, 0);
    totalAmountEl.textContent = formatCurrency(total);

    listContainer.innerHTML = state.cart.map((item, index) => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--bg-secondary);">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${item.image}" style="width: 48px; height: 48px; border-radius: 4px; object-fit: cover;">
          <div>
            <h4 style="font-size: 0.9rem; font-weight: 600;">${item.title}</h4>
            <span style="font-size: 0.8rem; color: var(--accent-rust);">${formatCurrency(item.price)}</span>
          </div>
        </div>
        <button onclick="removeFromCart(${index})" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.1rem;">&times;</button>
      </div>
    `).join('');
  }

  modal.classList.add("open");
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  document.getElementById("cartCount").textContent = state.cart.length;
  openCartModal();
}

// Bespoke Modal
function openBespokeModal(initialPiece = "") {
  const modal = document.getElementById("bespokeModal");
  if (initialPiece) {
    document.getElementById("bespokePieceInput").value = initialPiece;
  }
  modal.classList.add("open");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("open");
}

// Reset all filters
function resetFilters() {
  state.activeCategories.clear();
  state.activeMaterials.clear();
  state.activeTag = null;
  state.searchQuery = "";
  document.getElementById("searchInput").value = "";
  
  document.querySelectorAll(".filter-item").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".quick-tag-pill").forEach(el => el.classList.remove("active"));
  
  renderCatalog();
}

// Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Category checkbox filters
  document.querySelectorAll("[data-category]").forEach(el => {
    el.addEventListener("click", () => {
      const cat = el.getAttribute("data-category");
      if (state.activeCategories.has(cat)) {
        state.activeCategories.delete(cat);
        el.classList.remove("active");
      } else {
        state.activeCategories.add(cat);
        el.classList.add("active");
      }
      state.currentPage = 1;
      renderCatalog();
    });
  });

  // Material checkbox filters
  document.querySelectorAll("[data-material]").forEach(el => {
    el.addEventListener("click", () => {
      const mat = el.getAttribute("data-material");
      if (state.activeMaterials.has(mat)) {
        state.activeMaterials.delete(mat);
        el.classList.remove("active");
      } else {
        state.activeMaterials.add(mat);
        el.classList.add("active");
      }
      state.currentPage = 1;
      renderCatalog();
    });
  });

  // Quick tag pills
  document.querySelectorAll(".quick-tag-pill").forEach(el => {
    el.addEventListener("click", () => {
      const tag = el.getAttribute("data-tag");
      if (state.activeTag === tag) {
        state.activeTag = null;
        el.classList.remove("active");
      } else {
        document.querySelectorAll(".quick-tag-pill").forEach(p => p.classList.remove("active"));
        state.activeTag = tag;
        el.classList.add("active");
      }
      state.currentPage = 1;
      renderCatalog();
    });
  });

  // Search input & button
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  const performSearch = () => {
    state.searchQuery = searchInput.value.trim();
    state.currentPage = 1;
    renderCatalog();
  };

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") performSearch();
  });

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderCatalog();
  });

  // View toggle buttons
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");

  gridViewBtn.addEventListener("click", () => {
    state.viewMode = "grid";
    gridViewBtn.classList.add("active");
    listViewBtn.classList.remove("active");
    renderCatalog();
  });

  listViewBtn.addEventListener("click", () => {
    state.viewMode = "list";
    listViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
    renderCatalog();
  });

  // Bespoke form submission
  const bespokeForm = document.getElementById("bespokeForm");
  if (bespokeForm) {
    bespokeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("bespokeModal");
      showToast("Solicitud Bespoke recibida. Nos contactaremos a la brevedad.", "✨");
      bespokeForm.reset();
    });
  }

  // Initial render
  renderCatalog();
});
