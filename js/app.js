/**
 * Hermanos Jota - Catálogo Oficial de Productos (2026)
 */

const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Aparador Uspallata",
    category: "almacenaje",
    material: "nogal",
    tags: ["madera-maciza", "edicion-limitada"],
    badge: { text: "NUEVO", class: "badge-nuevo" },
    desc: "Aparador de seis puertas en nogal sostenible con tiradores en acabado latón.",
    fullDesc: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    specs: {
      medidas: "180 × 45 × 75 cm",
      materiales: "Nogal macizo FSC®, herrajes de latón",
      acabado: "Aceite natural ecológico",
      peso: "68 kg",
      capacidad: "6 compartimentos interiores"
    },
    price: 2350000,
    image: "assets/images/aparador-uspallata.png",
    swatches: ["#4A3326", "#D4A437"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 2,
    title: "Biblioteca Recoleta",
    category: "almacenaje",
    material: "roble",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Sistema modular con estructura Sage Green y repisas en roble claro.",
    fullDesc: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    specs: {
      medidas: "100 × 35 × 200 cm",
      materiales: "Estructura de acero, estantes de roble",
      acabado: "Laca mate ecológica",
      capacidad: "45 kg por estante",
      modulares: "5 estantes ajustables"
    },
    price: 1680000,
    image: "assets/images/biblioteca-recoleta.png",
    swatches: ["#87A96B", "#C9A980"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 3,
    title: "Butaca Mendoza",
    category: "asientos",
    material: "nogal",
    tags: ["edicion-limitada"],
    badge: null,
    desc: "Butaca tapizada en bouclé Dusty Rose con base en madera maciza.",
    fullDesc: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    specs: {
      medidas: "80 × 75 × 85 cm",
      materiales: "Guatambú macizo, tela bouclé",
      acabado: "Cera vegetal, tapizado premium",
      tapizado: "Repelente al agua y manchas",
      confort: "Espuma alta densidad"
    },
    price: 890000,
    image: "assets/images/butaca-mendoza.png",
    swatches: ["#C47A6D", "#4A3326"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 4,
    title: "Sillón Copacabana",
    category: "asientos",
    material: "nogal",
    tags: ["edicion-limitada", "madera-maciza"],
    badge: { text: "NUEVO", class: "badge-nuevo" },
    desc: "Sillón lounge en cuero cognac con base giratoria Burnt Sienna.",
    fullDesc: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    specs: {
      medidas: "90 × 85 × 95 cm",
      materiales: "Cuero curtido vegetal, acero pintado",
      acabado: "Cuero anilina premium",
      rotacion: "360° silenciosa y suave",
      garantia: "10 años en estructura"
    },
    price: 1450000,
    image: "assets/images/sillon-copacabana.png",
    swatches: ["#A0522D", "#4A3326"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 5,
    title: "Mesa de Centro Araucaria",
    category: "mesas",
    material: "nogal",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Sobre circular de mármol Patagonia y base escultural en nogal.",
    fullDesc: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    specs: {
      medidas: "90 × 90 × 45 cm",
      materiales: "Sobre de mármol Patagonia, patas de nogal",
      acabado: "Mármol pulido, aceite natural en madera",
      peso: "42 kg",
      cargaMaxima: "25 kg distribuidos"
    },
    price: 1120000,
    image: "assets/images/mesa-centro-araucaria.png",
    swatches: ["#F5E6D3", "#4A3326"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 6,
    title: "Mesa de Noche Aconcagua",
    category: "almacenaje",
    material: "roble",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Cajón oculto con cierre suave y repisa inferior en roble FSC®.",
    fullDesc: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    specs: {
      medidas: "45 × 35 × 60 cm",
      materiales: "Roble macizo FSC®, herrajes soft-close",
      acabado: "Barniz mate de poliuretano",
      almacenamiento: "1 cajón + repisa inferior",
      caracteristicas: "Cajón con cierre suave"
    },
    price: 520000,
    image: "assets/images/mesa-noche-aconcagua.png",
    swatches: ["#C9A980"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 7,
    title: "Sofá Patagonia",
    category: "asientos",
    material: "ebano",
    tags: ["edicion-limitada", "madera-maciza"],
    badge: { text: "SUSTENTABLE", class: "badge-sustentable" },
    desc: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con base de madera.",
    fullDesc: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    specs: {
      medidas: "220 × 90 × 80 cm",
      estructura: "Madera de eucalipto certificada FSC®",
      tapizado: "Lino 100% natural premium",
      relleno: "Espuma HR + plumón reciclado",
      sostenibilidad: "Materiales 100% reciclables"
    },
    price: 2890000,
    image: "assets/images/sofa-patagonia.png",
    swatches: ["#87A96B", "#F5E6D3"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 8,
    title: "Mesa Comedor Pampa",
    category: "mesas",
    material: "roble",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Mesa extensible en roble macizo con tablero biselado (6 a 10 comensales).",
    fullDesc: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    specs: {
      medidas: "160-240 × 90 × 75 cm",
      materiales: "Roble macizo FSC®, mecanismo alemán",
      acabado: "Aceite-cera natural",
      capacidad: "6-10 comensales",
      extension: "Sistema de mariposa central"
    },
    price: 3200000,
    image: "assets/images/mesa-comedor-pampa.png",
    swatches: ["#C9A980", "#A0522D"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 9,
    title: "Sillas Córdoba",
    category: "asientos",
    material: "nogal",
    tags: ["madera-maciza"],
    badge: null,
    desc: "Set de cuatro sillas apilables en contrachapado de nogal y acero Sage Green.",
    fullDesc: "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    specs: {
      medidas: "45 × 52 × 80 cm (cada una)",
      materiales: "Contrachapado nogal, tubo de acero",
      acabado: "Laca mate, pintura epoxi",
      apilables: "Hasta 6 sillas",
      incluye: "Set de 4 sillas"
    },
    price: 780000,
    stockLabel: "x4 disp.",
    image: "assets/images/sillas-cordoba.png",
    swatches: ["#4A3326", "#87A96B"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 10,
    title: "Escritorio Costa",
    category: "mesas",
    material: "roble",
    tags: ["enchapados"],
    badge: null,
    desc: "Escritorio compacto con cajón organizador y pasacables en bambú laminado.",
    fullDesc: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    specs: {
      medidas: "120 × 60 × 75 cm",
      materiales: "Bambú laminado, herrajes ocultos",
      acabado: "Laca mate resistente",
      almacenamiento: "1 cajón con organizador",
      cables: "Pasacables integrado"
    },
    price: 1250000,
    image: "assets/images/escritorio-costa.png",
    swatches: ["#C9A980", "#4A3326"],
    isFavorite: false,
    inStock: true
  },
  {
    id: 11,
    title: "Silla de Trabajo Belgrano",
    category: "asientos",
    material: "ebano",
    tags: ["edicion-limitada"],
    badge: { text: "SUSTENTABLE", class: "badge-sustentable" },
    desc: "Silla ergonómica regulable con respaldo de malla transpirable y tejido reciclado.",
    fullDesc: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    specs: {
      medidas: "60 × 60 × 90-100 cm",
      materiales: "Malla técnica, tejido reciclado",
      acabado: "Base cromada, tapizado premium",
      regulacion: "Altura + inclinación respaldo",
      certificacion: "Ergonomía europea EN 1335"
    },
    price: 490000,
    image: "assets/images/silla-trabajo-belgrano.png",
    swatches: ["#221E1C", "#87A96B"],
    isFavorite: false,
    inStock: true
  }
];

// LocalStorage para Carrito
const CART_STORAGE_KEY = "hnosj_cart";

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed.map(item => ({
          title: item.title || "",
          price: Number(item.price) || 0,
          quantity: Math.max(1, parseInt(item.quantity, 10) || 1),
          image: item.image || ""
        }));
      }
    }
  } catch (e) {
    console.error("Error al cargar carrito desde localStorage:", e);
  }
  return [];
}

function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch (e) {
    console.error("Error al guardar carrito en localStorage:", e);
  }
}

// App State
const state = {
  activeCategories: new Set(["asientos"]),
  activeMaterials: new Set(["nogal"]),
  activeTag: null,
  searchQuery: "",
  sortBy: "novedades",
  viewMode: "grid",
  currentPage: 1,
  itemsPerPage: 6,
  cart: loadCartFromStorage(),
  favorites: new Set()
};

const getAssetPath = (path) => {
  if (!path) return '';
  const isHtmlFolder = window.location.pathname.includes('/html/') || window.location.pathname.includes('\\html\\') || window.location.pathname.endsWith('/html') || window.location.pathname.endsWith('\\html');
  return isHtmlFolder ? '../' + path : path;
};

const getPagePath = (path) => {
  if (!path) return '';
  const isHtmlFolder = window.location.pathname.includes('/html/') || window.location.pathname.includes('\\html\\') || window.location.pathname.endsWith('/html') || window.location.pathname.endsWith('\\html');
  return isHtmlFolder ? path : 'html/' + path;
};

// ==========================================
// PIEZAS DESTACADAS (PÁGINA DE INICIO)
// ==========================================
const FEATURED_PRODUCTS = [
  {
    id: 101,
    catalogId: 9, // Sillas Córdoba
    title: 'Silla "Otoño"',
    materialBadge: "Roble Macizo",
    price: 450000,
    priceFormatted: "$450.000",
    finish: "Acabado en cera de abejas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCABaF6bgYwg48RyLq2b_2sAUizYvZD5T_yPurNRn5A0F_rxtalkYv6ckj8Yi08QPCIkeiiVLBJVetXNuXi47RxnbspsaB2j7ouht-6YSKeLQwAjM6a8JCrsEsa5r0IKd4TAdJi9Xey0yePudtFJq5LwyKKNdkaK0OeIWlwgLw0Cl6Ln2eC4KT7Fhxrs_fFP1gjioNljt94JSoHM0MYXi-KkWEkg3cSQH5U90viL16UBXmwBdCKx5rg",
    isOffsetDesktop: false
  },
  {
    id: 102,
    catalogId: 5, // Mesa de Centro Araucaria
    title: 'Mesa Lateral "Eco"',
    materialBadge: "Nogal & Ratán",
    price: 280000,
    priceFormatted: "$280.000",
    finish: "Aceite de Tung natural",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqFIUQBx8tWll-sGLEFpOT_9HHHb6rtydegXDd3R8cuMaW6wLAGQrWcMc7PtfBjdqwyVWmWeyp_7BSTI97xr0r-HnTrF37ZSI9ZoIjww_iNVY_zkFfIgYtBrYEgP2aVOtvmYGt2r3gQSOHYhbXJWeSqmi-NONZ4rRojDewdow95yrwk6XzGP3xmBm9sfF4b1k21FTbSaiazxtclDpxDj8FW4YBIFHoPcNVsWVZOno73oSWzuEaUe9C",
    isOffsetDesktop: false
  },
  {
    id: 103,
    catalogId: 3, // Butaca Mendoza
    title: 'Sillón "Luz"',
    materialBadge: "Fresno Nativo",
    price: 890000,
    priceFormatted: "$890.000",
    finish: "Laca al agua mate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdrxanOI82RTSGHVmp78Brr0sQuVl5eEZWAadvw1lOA8sugzHmX9h-c8Mp0XMcon4XD_N3nGKzGZjHtkVBzmcIijxVUTnEx4iQ_ZZSKF2SLD1PalAx2AyvE6hnfcAbV2q9gKQTKVv0miFXeiqv2QITiw2sj9f2AqhzcEFqG70uW7CMEVODnlbBrFhXDZ-R3xZMQRRZHDqwIw6rrC1dphIQ6bahErY0DQWDvCYuHAZ1RMxZQ8ExxNrM",
    isOffsetDesktop: true
  },
  {
    id: 104,
    catalogId: 10, // Escritorio Costa
    title: 'Escritorio "Trazo"',
    materialBadge: "Cerezo Sólido",
    price: 1150000,
    priceFormatted: "$1.150.000",
    finish: "Aceite de lino",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAemkwymiTenFdRmTK4jTCxcYKcHrEWrqlkg9ew7m5eSnVl2v4zm75P8GF5h39QtQEUfxs5HL05TTSjw--SqEnBQgIerM6AJFmnL3vCiINRIssAtG7aMA9osA4lhqZQQ7VkQyjwSlFxtL6n-yYw8yrzqEmRjoHZLA7T_ZDpGFBy6LjP57TnLk4JKC6bmcaDfVUy25V5nyFO0v3n6CxJp40MxikIT_6F9C4aO7tRtUNDkAbI6VKHSMFI",
    isOffsetDesktop: true
  }
];

/**
 * Carga asíncrona y renderizado dinámico vía DOM de productos destacados
 */
async function loadFeaturedProducts() {
  const container = document.getElementById("featuredProductsContainer");
  if (!container) return;

  // 1. Mostrar estado de carga asíncrono (Skeleton loader)
  container.innerHTML = Array(4).fill(0).map(() => `
    <div class="snap-start shrink-0 w-[78vw] sm:w-[260px] md:w-auto flex flex-col bg-surface-container-low rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div class="aspect-[4/5] bg-surface-dim/60"></div>
      <div class="p-6 flex flex-col gap-3">
        <div class="h-6 bg-surface-dim/70 rounded w-3/4"></div>
        <div class="h-4 bg-surface-dim/50 rounded w-1/2"></div>
      </div>
    </div>
  `).join('');

  // 2. Carga asíncrona simulada con setTimeout / async-await
  await new Promise(resolve => setTimeout(resolve, 350));

  // 3. Renderizado dinámico vía DOM con interactividad
  container.innerHTML = "";

  FEATURED_PRODUCTS.forEach((prod) => {
    const isFav = state.favorites.has(prod.id);
    const card = document.createElement("article");
    card.className = `group flex flex-col bg-surface-container-low rounded-2xl md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 snap-start shrink-0 w-[78vw] sm:w-[260px] md:w-auto cursor-pointer ${prod.isOffsetDesktop ? 'lg:mt-8' : ''}`;

    card.innerHTML = `
      <div class="relative aspect-[4/5] overflow-hidden bg-surface-dim">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="${prod.image}" alt="${prod.title}" loading="lazy"/>
        <div class="absolute top-4 right-4 bg-secondary/15 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm backdrop-blur-sm shadow-sm font-medium">
          ${prod.materialBadge}
        </div>
        <button type="button" class="btn-feat-fav absolute top-4 left-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center text-primary shadow-sm transition-transform active:scale-90 hover:bg-surface" aria-label="Guardar en favoritos">
          <span class="material-symbols-outlined text-[19px]">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
      </div>
      <div class="p-5 md:p-6 flex flex-col gap-3 flex-grow">
        <div class="flex justify-between items-start gap-2">
          <h3 class="font-headline-md text-headline-md text-on-surface leading-tight text-lg md:text-xl font-semibold">${prod.title}</h3>
          <span class="font-label-md text-label-md text-primary font-bold whitespace-nowrap">${prod.priceFormatted}</span>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 text-sm mt-auto">
          <span class="material-symbols-outlined text-[16px] text-outline">format_paint</span>
          ${prod.finish}
        </p>
      </div>
    `;

    // 4. Interactividad con addEventListener (Favoritos)
    const favBtn = card.querySelector(".btn-feat-fav");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const icon = favBtn.querySelector("span");
      if (state.favorites.has(prod.id)) {
        state.favorites.delete(prod.id);
        icon.textContent = "favorite_border";
        showToast(`Removido de favoritos: ${prod.title}`, "♡");
      } else {
        state.favorites.add(prod.id);
        icon.textContent = "favorite";
        showToast(`Añadido a favoritos: ${prod.title}`, "♥");
      }
    });

    // Interactividad con addEventListener (Navegación al detalle del catálogo)
    card.addEventListener("click", () => {
      window.location.href = `${getPagePath('producto.html')}?id=${prod.catalogId}`;
    });

    container.appendChild(card);
  });
}

function formatCurrency(num) {
  return "$ " + num.toLocaleString("es-AR");
}

function showToast(message, icon = "✓") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
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

function getFilteredProducts() {
  return PRODUCTS_DATA.filter(p => {
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.desc.toLowerCase().includes(q);
      const matchMaterial = p.material.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchMaterial) return false;
    }
    if (state.activeCategories.size > 0 && !state.activeCategories.has(p.category)) {
      return false;
    }
    if (state.activeMaterials.size > 0 && !state.activeMaterials.has(p.material)) {
      return false;
    }
    if (state.activeTag && !p.tags.includes(state.activeTag)) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === "precio-asc") return a.price - b.price;
    if (state.sortBy === "precio-desc") return b.price - a.price;
    if (state.sortBy === "alfabetico") return a.title.localeCompare(b.title);
    return 0;
  });
}

function renderCatalog() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  const filtered = getFilteredProducts();
  const totalCount = filtered.length;

  const shownCountEl = document.getElementById("shownCount");
  const totalPiecesCountEl = document.getElementById("totalPiecesCount");
  if (shownCountEl) shownCountEl.textContent = Math.min(totalCount, state.itemsPerPage);
  if (totalPiecesCountEl) totalPiecesCountEl.textContent = totalCount;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16 text-on-surface-variant">
        <p class="font-headline-md text-headline-md mb-2 text-on-surface">No se encontraron piezas</p>
        <p class="font-body-md text-body-md mb-6">Prueba modificando los filtros o realizando otra búsqueda.</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-primary text-on-primary rounded font-label-md">Limpiar Filtros</button>
      </div>
    `;
    renderPagination(0);
    return;
  }

  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + state.itemsPerPage);

  grid.innerHTML = pageItems.map(item => {
    const isFav = state.favorites.has(item.id);
    const badgeHtml = item.badge
      ? `<div class="absolute top-4 left-4 ${item.badge.class === 'badge-nuevo' ? 'bg-secondary/90' : 'bg-secondary/90'} backdrop-blur text-on-secondary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">${item.badge.text}</div>`
      : '';

    const swatchesHtml = item.swatches ? item.swatches.map(color =>
      `<div class="w-4 h-4 rounded-full shadow-sm" style="background-color: ${color};" title="Muestra"></div>`
    ).join('') : '';

    const stockHtml = item.stockLabel
      ? `<span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">${item.stockLabel}</span>`
      : '';

    return `
      <div class="group flex flex-col h-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div class="relative aspect-[4/5] overflow-hidden bg-surface-container">
          <img class="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" alt="${item.title}" src="${getAssetPath(item.image)}"/>
          ${badgeHtml}
          <div class="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
            <a href="${getPagePath('producto.html')}?id=${item.id}" class="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">visibility</span> Ver Detalle
            </a>
          </div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex items-start justify-between mb-2">
            <a href="${getPagePath('producto.html')}?id=${item.id}" class="hover:text-primary transition-colors flex-1 mr-2">
              <h2 class="font-headline-md text-headline-md text-on-surface line-clamp-1">${item.title}</h2>
            </a>
            <button onclick="toggleFavorite(${item.id})" class="${isFav ? 'text-primary' : 'text-on-surface-variant hover:text-primary'} transition-colors">
              <span class="material-symbols-outlined">${isFav ? 'favorite' : 'favorite_border'}</span>
            </button>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">${item.desc}</p>
          <div class="flex items-center justify-between mt-auto">
            <span class="font-headline-md text-headline-md text-primary">${formatCurrency(item.price)}</span>
            <div class="flex items-center gap-1.5">
              ${swatchesHtml}
              ${stockHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  renderPagination(Math.ceil(totalCount / state.itemsPerPage));
}

function renderPagination(totalPages) {
  const container = document.getElementById("paginationContainer");
  if (!container) return;
  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = `
    <button class="w-10 h-10 flex items-center justify-center rounded bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors shadow-sm disabled:opacity-50" ${state.currentPage === 1 ? 'disabled' : ''} onclick="changePage(${state.currentPage - 1})">
      <span class="material-symbols-outlined">chevron_left</span>
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button class="w-10 h-10 flex items-center justify-center rounded ${state.currentPage === i ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary'} font-label-md shadow-sm transition-colors" onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }

  html += `
    <button class="w-10 h-10 flex items-center justify-center rounded bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors shadow-sm disabled:opacity-50" ${state.currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${state.currentPage + 1})">
      <span class="material-symbols-outlined">chevron_right</span>
    </button>
  `;

  container.innerHTML = html;
}

function changePage(page) {
  state.currentPage = page;
  renderCatalog();
  document.getElementById("catalogSection").scrollIntoView({ behavior: "smooth" });
}

function toggleFavorite(productId) {
  if (state.favorites.has(productId)) {
    state.favorites.delete(productId);
    showToast("Eliminado de guardados", "♡");
  } else {
    state.favorites.add(productId);
    showToast("Guardado en favoritos", "♥");
  }
  renderCatalog();
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("productModalContent");
  if (!modal || !modalContent) return;

  let specsHtml = "";
  if (product.specs) {
    specsHtml = `
      <div class="mt-4 p-4 bg-surface-container rounded-lg space-y-2 text-sm">
        ${Object.entries(product.specs).map(([k, v]) => `
          <div class="flex justify-between border-b border-outline-variant/30 pb-1">
            <span class="capitalize text-on-surface-variant font-medium">${k}:</span>
            <span class="text-on-surface font-semibold">${v}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="bg-surface-container p-6 rounded-xl flex items-center justify-center">
        <img src="${getAssetPath(product.image)}" alt="${product.title}" class="max-h-72 object-contain"/>
      </div>
      <div>
        <h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">${product.title}</h2>
        <p class="font-headline-md text-primary font-bold mb-3">${formatCurrency(product.price)}</p>
        <p class="font-body-md text-on-surface-variant leading-relaxed mb-4">${product.fullDesc}</p>
        ${specsHtml}
        <div class="mt-6 flex gap-3">
          <button onclick="addToCart('${product.title}', ${product.price}); closeModal('productModal')" class="flex-1 py-3 bg-primary text-on-primary font-label-md rounded shadow hover:bg-primary-container transition-colors">
            Agregar a Cotización
          </button>
          <button onclick="openBespokeModal('${product.title}'); closeModal('productModal')" class="px-5 py-3 bg-surface-container text-on-surface font-label-md rounded border border-outline-variant hover:border-primary transition-colors">
            Personalizar
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function updateCartCounter() {
  const totalCount = (state.cart || []).reduce((acc, item) => acc + (item.quantity || 1), 0);
  const badges = document.querySelectorAll("#cartCount, .cart-count-badge");
  badges.forEach(badge => {
    badge.textContent = totalCount;
  });
}

function addToCart(title, price, quantity = 1, image = "") {
  if (!state.cart) state.cart = [];
  const cleanTitle = (title || "").trim();
  const qty = Math.max(1, parseInt(quantity, 10) || 1);
  const numPrice = Number(price) || 0;

  const existingItem = state.cart.find(
    item => item.title && item.title.trim().toLowerCase() === cleanTitle.toLowerCase()
  );

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + qty;
    if (!existingItem.image && image) existingItem.image = image;
  } else {
    state.cart.push({
      title: cleanTitle,
      price: numPrice,
      quantity: qty,
      image: image || ""
    });
  }

  saveCartToStorage();
  updateCartCounter();
  showToast(`"${cleanTitle}" agregado a tu cotización`, "🛒");
}

function updateCartItemQuantity(index, delta) {
  if (!state.cart || !state.cart[index]) return;
  const newQty = (state.cart[index].quantity || 1) + delta;
  if (newQty <= 0) {
    removeFromCart(index);
  } else {
    state.cart[index].quantity = newQty;
    saveCartToStorage();
    updateCartCounter();
    openCartModal();
  }
}

function removeFromCart(index) {
  if (!state.cart || !state.cart[index]) return;
  const item = state.cart[index];
  state.cart.splice(index, 1);
  saveCartToStorage();
  updateCartCounter();
  openCartModal();
  showToast(`"${item.title}" eliminado de la cotización`, "🗑️");
}

function removeItemFromCart(index) {
  removeFromCart(index);
}

function openCartModal() {
  const modal = document.getElementById("cartModal");
  const listContainer = document.getElementById("cartItemsList");
  const totalAmountEl = document.getElementById("cartTotalAmount");
  if (!modal || !listContainer) return;

  if (!state.cart || state.cart.length === 0) {
    listContainer.innerHTML = `<p class="text-center py-6 text-on-surface-variant text-sm">Tu lista de cotización está vacía.</p>`;
    if (totalAmountEl) totalAmountEl.textContent = "$ 0";
  } else {
    const total = state.cart.reduce((acc, item) => acc + ((item.price || 0) * (item.quantity || 1)), 0);
    if (totalAmountEl) totalAmountEl.textContent = formatCurrency(total);

    listContainer.innerHTML = state.cart.map((item, idx) => {
      const qty = item.quantity || 1;
      const subtotal = (item.price || 0) * qty;
      return `
        <div class="flex items-center justify-between py-3 border-b border-surface-variant/60 gap-3">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <p class="font-semibold text-on-surface text-sm leading-tight">${item.title}</p>
              <span class="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-bold bg-primary/10 text-primary">
                x${qty}
              </span>
            </div>
            <div class="flex items-center gap-2 mt-1">
              <p class="text-xs text-primary font-bold">${formatCurrency(subtotal)}</p>
              ${qty > 1 ? `<span class="text-[11px] text-on-surface-variant font-normal">(${formatCurrency(item.price)} c/u)</span>` : ''}
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <div class="flex items-center border border-outline-variant rounded-md overflow-hidden bg-surface-container">
              <button type="button" onclick="updateCartItemQuantity(${idx}, -1)" class="w-7 h-7 flex items-center justify-center text-sm font-bold text-on-surface hover:bg-surface-variant transition-colors" title="Disminuir" aria-label="Disminuir cantidad">-</button>
              <span class="w-7 text-center text-xs font-semibold select-none">${qty}</span>
              <button type="button" onclick="updateCartItemQuantity(${idx}, 1)" class="w-7 h-7 flex items-center justify-center text-sm font-bold text-on-surface hover:bg-surface-variant transition-colors" title="Aumentar" aria-label="Aumentar cantidad">+</button>
            </div>
            <button type="button" onclick="removeFromCart(${idx})" class="text-on-surface-variant hover:text-primary text-xl p-1 transition-colors leading-none" title="Eliminar" aria-label="Eliminar producto">&times;</button>
          </div>
        </div>
      `;
    }).join('');
  }

  modal.classList.remove("hidden");
}

function closeCartModal() {
  closeModal('cartModal');
}

function submitQuoteRequest() {
  if (!state.cart || state.cart.length === 0) {
    showToast("Tu lista de cotización está vacía", "⚠️");
    return;
  }
  closeModal('cartModal');
  showToast("Cotización enviada a Hermanos Jota. Nos contactaremos a la brevedad.", "✓");
  state.cart = [];
  saveCartToStorage();
  updateCartCounter();
}

function openBespokeModal(initialPiece = "") {
  const modal = document.getElementById("bespokeModal");
  if (initialPiece) {
    const input = document.getElementById("bespokePieceInput");
    if (input) input.value = initialPiece;
  }
  if (modal) modal.classList.remove("hidden");
}

function closeBespokeModal() {
  const modal = document.getElementById("bespokeModal");
  if (modal) modal.classList.add("hidden");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("hidden");
}

function resetFilters() {
  state.activeCategories.clear();
  state.activeMaterials.clear();
  state.activeTag = null;
  state.searchQuery = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  document.querySelectorAll(".filter-cat").forEach(el => el.checked = false);
  document.querySelectorAll(".filter-mat").forEach(el => el.checked = false);
  document.querySelectorAll(".quick-tag").forEach(el => el.classList.remove("bg-primary", "text-on-primary"));
  renderCatalog();
}

document.addEventListener("DOMContentLoaded", () => {
  // Category checkboxes
  document.querySelectorAll(".filter-cat").forEach(el => {
    el.addEventListener("change", () => {
      const cat = el.getAttribute("data-category");
      if (el.checked) state.activeCategories.add(cat);
      else state.activeCategories.delete(cat);
      state.currentPage = 1;
      renderCatalog();
    });
  });

  // Material checkboxes
  document.querySelectorAll(".filter-mat").forEach(el => {
    el.addEventListener("change", () => {
      const mat = el.getAttribute("data-material");
      if (el.checked) state.activeMaterials.add(mat);
      else state.activeMaterials.delete(mat);
      state.currentPage = 1;
      renderCatalog();
    });
  });

  // Quick tags
  document.querySelectorAll(".quick-tag").forEach(el => {
    el.addEventListener("click", () => {
      const tag = el.getAttribute("data-tag");
      if (state.activeTag === tag) {
        state.activeTag = null;
        el.classList.remove("bg-primary", "text-on-primary");
      } else {
        document.querySelectorAll(".quick-tag").forEach(p => p.classList.remove("bg-primary", "text-on-primary"));
        state.activeTag = tag;
        el.classList.add("bg-primary", "text-on-primary");
      }
      state.currentPage = 1;
      renderCatalog();
    });
  });

  // Search input & button
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  if (searchInput && searchBtn) {
    const doSearch = () => {
      state.searchQuery = searchInput.value.trim();
      state.currentPage = 1;
      renderCatalog();
    };
    searchBtn.addEventListener("click", doSearch);
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") doSearch();
    });
  }

  // Sort select
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const v = e.target.value;
      if (v.includes("Menor")) state.sortBy = "precio-asc";
      else if (v.includes("Mayor")) state.sortBy = "precio-desc";
      else if (v.includes("Nombre")) state.sortBy = "alfabetico";
      else state.sortBy = "novedades";
      renderCatalog();
    });
  }

  // Formulario de contacto (contacto.html)
  const contactForm = document.getElementById("contact-form");
  const successBanner = document.getElementById("success-banner");
  const closeSuccessBtn = document.getElementById("close-success");
  if (contactForm && successBanner) {
    let autoHideTimer = null;
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      successBanner.classList.remove("-translate-y-full");
      contactForm.reset();
      if (autoHideTimer) clearTimeout(autoHideTimer);
      autoHideTimer = setTimeout(() => {
        successBanner.classList.add("-translate-y-full");
      }, 5000);
    });

    if (closeSuccessBtn) {
      closeSuccessBtn.addEventListener("click", () => {
        if (autoHideTimer) clearTimeout(autoHideTimer);
        successBanner.classList.add("-translate-y-full");
      });
    }
  }

  // Mobile Menu Drawer Interactivity
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");
  const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");
  const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");

  if (mobileMenuBtn && mobileMenuDrawer) {
    const openMenu = () => {
      mobileMenuDrawer.classList.remove("-translate-x-full");
      if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    };
    const closeMenu = () => {
      mobileMenuDrawer.classList.add("-translate-x-full");
      if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };

    mobileMenuBtn.addEventListener("click", openMenu);
    if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener("click", closeMenu);
    if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener("click", closeMenu);

    // Close menu when clicking drawer links
    mobileMenuDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }

  // Inicializar productos destacados (Inicio) y catálogo
  loadFeaturedProducts();
  renderCatalog();
  updateCartCounter();
});

