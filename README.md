# Mueblería Hermanos Jota

Sitio web oficial y catálogo interactivo de **Mueblería Hermanos Jota**, una marca de diseño y fabricación de muebles de autor inspirada en la estética atemporal de los años 60, la artesanía sostenible y las maderas nobles argentinas.

Desarrollado como una aplicación web front-end nativa (**Vanilla Web Architecture**), sin dependencias complejas de build ni frameworks pesados, garantizando alto rendimiento, accesibilidad y máxima compatibilidad.

---

## 👥 Integrantes del Equipo

* **Alexis Fernando Rojas**
* **Emanuel Ramirez**
* **Julian Muiños**
* **Santino Marchesini**

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico**:
  * Uso estricto de elementos estructurales y de sección (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
  * Formularios accesibles con asociación programática de `<label>` y `<input>`/`<textarea>`.
  * Cumplimiento de estándares de accesibilidad **WCAG 2.1 AA** (textos alternativos `alt`, atributos WAI-ARIA `role="dialog"`, `aria-modal="true"`, `aria-live="polite"`, `aria-hidden="true"` para iconografía decorativa, viewport escalable sin bloqueo de zoom).
* **CSS3 & Tailwind CSS (vía CDN con configuración personalizada)**:
  * Arquitectura de diseño **Mobile-First** con escalabilidad fluida hacia tablets y escritorios (`sm:`, `md:`, `lg:`, `xl:`).
  * Paleta cromática corporativa personalizada inspirada en tonos tierra y maderas nobles.
  * Flexbox y CSS Grid para diagramaciones complejas y adaptables.
* **JavaScript Vanilla (ES6+)**:
  * Manipulación eficiente del DOM mediante `document.createElement`, `innerHTML` y templates dinámicos.
  * Carga asíncrona simulada con `async/await` y `setTimeout` acompañada de *skeleton loaders*.
  * Manejo reactivo de eventos mediante `addEventListener`.
  * Validación robusta del lado del cliente para formularios con saneamiento de entradas (`trim()`), expresiones regulares para correos electrónicos y feedback visual inmediato por campo.
  * Persistencia de estado en el navegador a través de la API `localStorage`.
* **Google Fonts**:
  * *Playfair Display*: Tipografía serif clásica para encabezados y acentos editoriales.
  * *Inter*: Tipografía sans-serif moderna de alta legibilidad para textos de cuerpo y componentes de interfaz.
* **Google Material Symbols**:
  * Iconografía oficial integrada para controles de usuario, navegación y retroalimentación contextual.

---

## 🚀 Descripción de Funcionalidades

### 1. Página de Inicio (`index.html`)
* **Header & Navegación**:
  * Logotipo vectorial corporativo en SVG.
  * Navegación principal de escritorio y menú lateral *Drawer* adaptable para dispositivos móviles.
  * Contador sincronizado de cotización/carrito en tiempo real.
* **Hero Banner Principal**:
  * Imagen de gran impacto, propuesta de valor de marca y botón de llamada a la acción hacia el catálogo.
* **Productos Destacados Dinámicos**:
  * Renderizado reactivo desde JavaScript (`loadFeaturedProducts()`).
  * Simulación de carga asíncrona (`async/await` + `setTimeout`) con animaciones de carga pulsantes (*skeletons*).
  * Tarjetas interactivas con badges de materiales y enlace directo a la ficha de detalle.
* **Sección de Sostenibilidad y Artesanía**:
  * Presentación de sellos de origen responsable, reforestación y acabados ecológicos.
* **Footer Estandarizado**:
  * Información completa de showroom, horarios de atención (incluyendo sábados), redes sociales y canales de contacto.

### 2. Catálogo Interactivo de Productos (`html/catalogo.html`)
* **Grilla y Lista de Tarjetas de Productos**:
  * Consumo centralizado de datos desde `PRODUCTS_DATA` en `js/app.js`.
  * Alternancia dinámica de vista entre **Cuadrícula (Grid View)** y **Lista Detallada (List View)**.
* **Buscador en Tiempo Real**:
  * Búsqueda por texto que evalúa título, descripción y tipo de material.
  * Normalización con NFD para búsqueda insensible a acentos y tildes (ej. *"sillon"* encuentra *"Sillón Copacabana"*).
* **Filtros Combinables**:
  * Filtro múltiple por categorías (*Asientos, Mesas, Almacenaje*).
  * Filtro múltiple por materiales (*Nogal, Roble Claro, Ébano*).
  * Botones de filtrado rápido por etiquetas (*Madera Maciza, Edición Limitada, Enchapados*).
* **Ordenamiento Dinámico**:
  * Por menor precio, mayor precio, novedades y orden alfabético.
* **Paginación y Manejo de Estados**:
  * Control interactivo de páginas calculadas dinámicamente según resultados activos.
  * Mensaje de estado vacío amigable con botón para restablecer filtros.

### 3. Detalle de Producto (`html/producto.html`)
* **Carga Dinámica mediante Parámetro URL**:
  * Obtención y renderizado de la pieza seleccionada mediante query param `?id=X`.
* **Presentación Visual y Descriptiva**:
  * Fotografía en alta resolución con contenedor adaptado y comportamiento sticky en escritorio.
  * Título, precio formateado en pesos argentinos (`$ ARS`), facilidades de pago y descripción detallada del concepto de diseño.
* **Detalles Técnicos y de Fabricación**:
  * Tabla semántica con especificaciones exactas (dimensiones, peso, capacidad).
  * Acordeones interactivos con información de cuidados y técnicas de ensamble artesanal.
* **Botón "Añadir al Carrito"**:
  * Interacción directa que incorpora la unidad a la cotización con confirmación visual mediante notificaciones *Toast*.

### 4. Página de Contacto y Showroom (`html/contacto.html`)
* **Información de Showroom & Casa Taller**:
  * Dirección física, horarios semanales y de sábados, enlaces directos a canales digitales y WhatsApp.
* **Formulario de Contacto**:
  * Campos obligatorios: Nombre Completo, Correo Electrónico y Mensaje.
* **Validación Robusta en Cliente (JS)**:
  * Verificación de campos sin espacios en blanco (`trim()`).
  * Validación estricta de estructura de email con Regex.
  * Control de longitud mínima de caracteres.
  * Indicadores visuales de error con bordes rojos, mensajes textuales debajo de cada campo y atributos de accesibilidad `aria-invalid`.
* **Mensaje de Éxito Dinámico en el DOM**:
  * Banner superior deslizante con animación Tailwind (`#success-banner`).
  * Auto-cierre temporizado y opción de cierre manual, con compatibilidad para lectores de pantalla (`role="status"`, `aria-live="polite"`).

### 5. Carrito de Cotización Persistente
* **Modal Global de Cotización (`#cartModal`)**:
  * Accesible desde cualquier página del sitio a través del icono en el encabezado o drawer móvil.
* **Control Integral de Ítems**:
  * Incremento y decremento de cantidades mediante controles integrados (+ / -).
  * Eliminación individual de productos.
  * Cálculo y actualización automática de subtotales y precio total estimado.
* **Persistencia Local**:
  * Almacenamiento seguro en `localStorage` (`hnosj_cart`), preservando los productos seleccionados al navegar o recargar la página.
* **Badge Contador Reactivo**:
  * Sincronización instantánea de la cantidad total de piezas en los indicadores del header y menú móvil.

---

## 📂 Estructura de Carpetas

```text
muebleria-hnosj/
├── assets/
│   └── images/               # Recursos gráficos, fotografías y logotipo SVG
├── css/
│   └── styles.css            # Estilos personalizados, animaciones y tokens CSS
├── html/
│   ├── catalogo.html         # Catálogo interactivo con buscador y filtros
│   ├── contacto.html         # Formulario de contacto y datos de showroom
│   └── producto.html         # Detalle de producto con carga dinámica
├── js/
│   ├── app.js                # Lógica de la aplicación, datos, carrito y validaciones
│   └── tailwind-config.js    # Configuración de colores, fuentes y medidas Tailwind
├── index.html                # Página principal (Home)
└── README.md                 # Documentación técnica del proyecto
```

---

## 🎨 Paleta de Colores Corporativa

| Token | Valor Hex | Aplicación |
| :--- | :--- | :--- |
| **`primary`** | `#823b18` | Color principal de marca, llamadas a la acción y precios |
| **`primary-container`** | `#a0522d` | Variantes de interacción, estados hover y fondos activos |
| **`secondary`** | `#486730` | Acentos naturales, badges y elementos de confirmación |
| **`surface`** | `#fff8f3` | Fondo principal cálido y luminoso |
| **`surface-container`**| `#f5eee7` | Contenedores secundarios, cards y áreas agrupadas |
| **`on-surface`** | `#221a0f` | Tipografía principal y encabezados de máximo contraste |
| **`on-surface-variant`**| `#54433c`| Textos descriptivos, subtítulos e información secundaria |