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
  activeCategories: new Set(),
  activeMaterials: new Set(),
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
    catalogId: 1, // Aparador Uspallata
    title: "Aparador Uspallata",
    materialBadge: "Nogal FSC®",
    price: 2350000,
    priceFormatted: "$ 2.350.000",
    finish: "Aceite natural ecológico",
    image: "assets/images/aparador-uspallata.png"
  },
  {
    id: 102,
    catalogId: 4, // Sillón Copacabana
    title: "Sillón Copacabana",
    materialBadge: "Cuero Cognac",
    price: 1450000,
    priceFormatted: "$ 1.450.000",
    finish: "Cuero curtido vegetal",
    image: "assets/images/sillon-copacabana.png"
  },
  {
    id: 103,
    catalogId: 5, // Mesa de Centro Araucaria
    title: "Mesa de Centro Araucaria",
    materialBadge: "Mármol Patagonia",
    price: 1120000,
    priceFormatted: "$ 1.120.000",
    finish: "Mármol y patas de nogal",
    image: "assets/images/mesa-centro-araucaria.png"
  },
  {
    id: 104,
    catalogId: 3, // Butaca Mendoza
    title: "Butaca Mendoza",
    materialBadge: "Bouclé Dusty Rose",
    price: 890000,
    priceFormatted: "$ 890.000",
    finish: "Guatambú y tela bouclé",
    image: "assets/images/butaca-mendoza.png"
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
    const card = document.createElement("article");
    card.className = "group flex flex-col h-full bg-surface-container-low rounded-2xl md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 snap-start shrink-0 w-[78vw] sm:w-[260px] md:w-auto cursor-pointer";

    card.innerHTML = `
      <div class="relative aspect-[4/5] overflow-hidden bg-surface-container flex items-center justify-center">
        <img class="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out" src="${getAssetPath(prod.image)}" alt="${prod.title}" loading="lazy"/>
        <div class="absolute top-4 right-4 bg-secondary/15 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm backdrop-blur-sm shadow-sm font-medium">
          ${prod.materialBadge}
        </div>
      </div>
      <div class="p-5 md:p-6 flex flex-col gap-3 flex-grow">
        <div class="flex justify-between items-start gap-2">
          <h3 class="font-headline-md text-headline-md text-on-surface leading-tight text-lg md:text-xl font-semibold">${prod.title}</h3>
          <span class="font-label-md text-label-md text-primary font-bold whitespace-nowrap">${prod.priceFormatted}</span>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 text-sm mt-auto">
          <span class="material-symbols-outlined text-[16px] text-outline" aria-hidden="true">format_paint</span>
          ${prod.finish}
        </p>
      </div>
    `;

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
      const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const q = normalize(state.searchQuery);
      const matchTitle = normalize(p.title).includes(q);
      const matchDesc = normalize(p.desc).includes(q);
      const matchMaterial = normalize(p.material).includes(q);
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
    if (state.sortBy === "alfabetico") return a.title.localeCompare(b.title, "es", { sensitivity: "base" });
    if (state.sortBy === "novedades") {
      const aIsNew = a.badge && a.badge.text === "NUEVO" ? 1 : 0;
      const bIsNew = b.badge && b.badge.text === "NUEVO" ? 1 : 0;
      if (aIsNew !== bIsNew) return bIsNew - aIsNew;
      return a.id - b.id;
    }
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

  // Actualizar estado visual de los botones de vista
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewListBtn = document.getElementById("viewListBtn");
  if (viewGridBtn && viewListBtn) {
    if (state.viewMode === "list") {
      viewListBtn.classList.add("text-primary");
      viewListBtn.classList.remove("text-on-surface-variant");
      viewGridBtn.classList.remove("text-primary");
      viewGridBtn.classList.add("text-on-surface-variant");
    } else {
      viewGridBtn.classList.add("text-primary");
      viewGridBtn.classList.remove("text-on-surface-variant");
      viewListBtn.classList.remove("text-primary");
      viewListBtn.classList.add("text-on-surface-variant");
    }
  }

  if (state.viewMode === "list") {
    grid.className = "flex flex-col gap-6";
    grid.innerHTML = pageItems.map(item => {
      const badgeHtml = item.badge
        ? `<div class="absolute top-4 left-4 ${item.badge.class === 'badge-nuevo' ? 'bg-secondary/90' : 'bg-green-700/90'} backdrop-blur text-on-secondary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">${item.badge.text}</div>`
        : '';

      const swatchesHtml = item.swatches ? item.swatches.map(color =>
        `<div class="w-4 h-4 rounded-full shadow-sm" style="background-color: ${color};" title="Muestra"></div>`
      ).join('') : '';

      const stockHtml = item.stockLabel
        ? `<span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">${item.stockLabel}</span>`
        : '';

      const medidasHtml = item.specs && item.specs.medidas
        ? `<span class="inline-flex items-center gap-1.5 bg-surface-container/70 text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-body-sm"><span class="material-symbols-outlined text-[15px] text-primary" aria-hidden="true">straighten</span>${item.specs.medidas}</span>`
        : '';

      const materialesHtml = item.specs && item.specs.materiales
        ? `<span class="inline-flex items-center gap-1.5 bg-surface-container/70 text-on-surface-variant px-2.5 py-1 rounded-md text-xs font-body-sm"><span class="material-symbols-outlined text-[15px] text-primary" aria-hidden="true">forest</span>${item.specs.materiales}</span>`
        : '';

      return `
        <a href="${getPagePath('producto.html')}?id=${item.id}" class="group flex flex-col sm:flex-row bg-surface-container-lowest rounded-2xl md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer border border-outline-variant/20">
          <div class="relative w-full sm:w-64 md:w-72 aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden bg-surface-container flex items-center justify-center p-6">
            <img class="w-full h-full max-h-56 object-contain group-hover:scale-105 transition-transform duration-700 ease-out" alt="${item.title}" src="${getAssetPath(item.image)}" loading="lazy"/>
            ${badgeHtml}
          </div>
          <div class="p-5 md:p-6 flex flex-col justify-between flex-grow">
            <div>
              <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <h2 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors text-xl md:text-2xl font-semibold">${item.title}</h2>
                <span class="font-headline-md text-headline-md text-primary font-bold text-xl md:text-2xl whitespace-nowrap">${formatCurrency(item.price)}</span>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">${item.desc}</p>
              <div class="flex flex-wrap items-center gap-2 mb-4">
                <span class="bg-surface-container/80 text-primary font-semibold px-2.5 py-1 rounded-md text-xs uppercase tracking-wider font-label-sm">${item.category}</span>
                <span class="bg-surface-container/80 text-on-surface-variant px-2.5 py-1 rounded-md text-xs capitalize font-label-sm">${item.material}</span>
                ${medidasHtml}
                ${materialesHtml}
              </div>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-outline-variant/30 mt-auto">
              <div class="flex items-center gap-2">
                ${swatchesHtml}
                ${stockHtml}
              </div>
              <span class="inline-flex items-center gap-1 font-label-md text-sm text-primary font-semibold group-hover:translate-x-1 transition-transform">
                Ver detalle <span class="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
              </span>
            </div>
          </div>
        </a>
      `;
    }).join('');
  } else {
    grid.className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12";
    grid.innerHTML = pageItems.map(item => {
      const badgeHtml = item.badge
        ? `<div class="absolute top-4 left-4 ${item.badge.class === 'badge-nuevo' ? 'bg-secondary/90' : 'bg-green-700/90'} backdrop-blur text-on-secondary font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">${item.badge.text}</div>`
        : '';

      const swatchesHtml = item.swatches ? item.swatches.map(color =>
        `<div class="w-4 h-4 rounded-full shadow-sm" style="background-color: ${color};" title="Muestra"></div>`
      ).join('') : '';

      const stockHtml = item.stockLabel
        ? `<span class="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">${item.stockLabel}</span>`
        : '';

      return `
        <a href="${getPagePath('producto.html')}?id=${item.id}" class="group flex flex-col h-full bg-surface-container-lowest rounded-2xl md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
          <div class="relative aspect-[4/5] overflow-hidden bg-surface-container flex items-center justify-center">
            <img class="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out" alt="${item.title}" src="${getAssetPath(item.image)}" loading="lazy"/>
            ${badgeHtml}
          </div>
          <div class="p-5 md:p-6 flex flex-col flex-grow">
            <div class="flex items-start justify-between mb-2">
              <h2 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-1 text-lg md:text-xl font-semibold">${item.title}</h2>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">${item.desc}</p>
            <div class="flex items-center justify-between mt-auto">
              <span class="font-headline-md text-headline-md text-primary font-bold">${formatCurrency(item.price)}</span>
              <div class="flex items-center gap-1.5">
                ${swatchesHtml}
                ${stockHtml}
              </div>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

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
      <span class="material-symbols-outlined" aria-hidden="true">chevron_left</span>
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
      <span class="material-symbols-outlined" aria-hidden="true">chevron_right</span>
    </button>
  `;

  container.innerHTML = html;
}

function changePage(page) {
  state.currentPage = page;
  renderCatalog();
  document.getElementById("catalogSection")?.scrollIntoView({ behavior: "smooth" });
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
      if (v === "precio-asc" || v.includes("Menor")) {
        state.sortBy = "precio-asc";
      } else if (v === "precio-desc" || v.includes("Mayor")) {
        state.sortBy = "precio-desc";
      } else if (v === "alfabetico" || v.includes("Nombre") || v.includes("A-Z")) {
        state.sortBy = "alfabetico";
      } else {
        state.sortBy = "novedades";
      }
      state.currentPage = 1;
      renderCatalog();
    });
  }

  // View mode toggle (grid vs list)
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewListBtn = document.getElementById("viewListBtn");
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener("click", () => {
      if (state.viewMode !== "grid") {
        state.viewMode = "grid";
        renderCatalog();
      }
    });
    viewListBtn.addEventListener("click", () => {
      if (state.viewMode !== "list") {
        state.viewMode = "list";
        renderCatalog();
      }
    });
  }

  // Formulario de contacto (contacto.html)
  const contactForm = document.getElementById("contact-form");
  const successBanner = document.getElementById("success-banner");
  const closeSuccessBtn = document.getElementById("close-success");
  if (contactForm && successBanner) {
    let autoHideTimer = null;

    // Helper: show field error
    function showFieldError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorSpan = document.getElementById(fieldId + "-error");
      if (field) {
        field.classList.add("border-red-500");
        field.classList.remove("border-outline-variant");
        field.setAttribute("aria-invalid", "true");
      }
      if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.remove("hidden");
      }
    }

    // Helper: clear field error
    function clearFieldError(fieldId) {
      const field = document.getElementById(fieldId);
      const errorSpan = document.getElementById(fieldId + "-error");
      if (field) {
        field.classList.remove("border-red-500");
        field.classList.add("border-outline-variant");
        field.removeAttribute("aria-invalid");
      }
      if (errorSpan) {
        errorSpan.textContent = "";
        errorSpan.classList.add("hidden");
      }
    }

    // Validate form fields
    function validateContactForm() {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = true;

      // Validate name
      if (!name || name.value.trim().length === 0) {
        showFieldError("name", "Por favor, ingresá tu nombre completo.");
        isValid = false;
      } else if (name.value.trim().length < 2) {
        showFieldError("name", "El nombre debe tener al menos 2 caracteres.");
        isValid = false;
      } else {
        clearFieldError("name");
      }

      // Validate email
      if (!email || email.value.trim().length === 0) {
        showFieldError("email", "Por favor, ingresá tu correo electrónico.");
        isValid = false;
      } else if (!emailRegex.test(email.value.trim())) {
        showFieldError("email", "Por favor, ingresá un correo electrónico válido.");
        isValid = false;
      } else {
        clearFieldError("email");
      }

      // Validate message
      if (!message || message.value.trim().length === 0) {
        showFieldError("message", "Por favor, escribí tu mensaje.");
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showFieldError("message", "El mensaje debe tener al menos 10 caracteres.");
        isValid = false;
      } else {
        clearFieldError("message");
      }

      return isValid;
    }

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!validateContactForm()) return;

      successBanner.classList.remove("-translate-y-full");
      contactForm.reset();
      clearFieldError("name");
      clearFieldError("email");
      clearFieldError("message");
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

