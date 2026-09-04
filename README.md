# Mueblería Hermanos Jota - Sitio Web Oficial

Sitio web e-commerce y catálogo digital para **Mueblería Hermanos Jota**, marca de muebles de autor con inspiración en el diseño de los años 60, artesanía sostenible y maderas nobles.

Este proyecto está desarrollado íntegramente como una aplicación web front-end nativa (Vanilla), sin dependencias complejas ni procesos de compilación (build steps), lista para ejecutarse directamente en cualquier navegador o servidor estático.

---

## 📂 Estructura del Proyecto

La organización real de directorios y archivos es la siguiente:

```text
muebleria-hnosj/
├── assets/
│   └── images/               # Fotografías de productos y logotipo vectorial (SVG)
├── css/
│   └── styles.css            # Estilos globales, variables CSS y ajustes personalizados
├── html/
│   ├── catalogo.html         # Catálogo completo con buscador, filtros y paginación
│   ├── contacto.html         # Formulario de contacto, ubicación y canales de atención
│   └── producto.html         # Vista de detalle de producto dinámico (vía query param ?id=X)
├── js/
│   └── app.js                # Lógica principal, datos de productos, carrito y persistencia
├── .gitignore
├── index.html                # Página principal (Home con productos destacados)
└── README.md
```

---

## 🛠 Tecnologías Utilizadas

* **HTML5 Semántico**: Estructura accesible y optimizada para SEO en todas las páginas.
* **Tailwind CSS (vía CDN)**: Framework utilitario cargado de forma dinámica con paleta de colores corporativa y tipografías extendidas en el encabezado (`tailwind.config`).
* **Vanilla JavaScript (ES6+)**:
  * Renderizado reactivo del catálogo y detalle de productos vía DOM.
  * Simulación de carga asíncrona mediante *skeleton loaders*.
  * Gestión de estado del carrito de cotización.
  * Persistencia en el navegador mediante `localStorage`.
  * Control del menú desplegable (*drawer*) y barra de navegación móvil.
* **Google Fonts**:
  * `Playfair Display`: Tipografía serif clásica para encabezados y acentos editoriales.
  * `Inter`: Tipografía sans-serif de alta legibilidad para interfaces y descripciones.
* **Material Symbols Outlined**: Conjunto de iconografía oficial de Google para navegación y botones de acción.

---

## 🚀 Funcionalidades Implementadas

### 1. Página Principal (`index.html`)
* **Hero Editorial**: Propuesta de valor de la marca.
* **Productos Destacados**: Carga asíncrona simulada con *skeleton loader* y renderizado dinámico desde JavaScript con navegación directa al detalle.
* **Secciones de Marca**: Filosofía de diseño, maderas seleccionadas y garantía artesanal.
* **Navegación Móvil Adaptada**: Drawer lateral deslizable y barra de acceso rápido inferior (*bottom navigation*).

### 2. Catálogo Interactivo (`html/catalogo.html`)
* **Buscador en tiempo real**: Filtrado por texto (título, descripción o material).
* **Filtros combinables**:
  * Por categoría (*almacenaje, asientos, mesas*).
  * Por tipo de madera (*nogal, roble, etc.*).
  * Etiquetas rápidas (*edición limitada, madera maciza*).
* **Ordenamiento**: Por menor precio, mayor precio, novedades o alfabético.
* **Paginación dinámica**: Control de páginas con conteo de piezas encontradas y botón para reiniciar filtros cuando no hay coincidencias.

### 3. Ficha de Detalle de Producto (`html/producto.html`)
* **Carga dinámica por URL**: Lee el parámetro `?id=` para obtener y mostrar la información técnica, fotos y precios de la pieza seleccionada.
* **Especificaciones técnicas**: Medidas, materiales certificados, acabados y capacidades.
* **Selector de cantidades y agregado al carrito**: Permite agregar múltiples unidades al carrito de cotización.

### 4. Carrito de Cotización Flotante (`#cartModal`)
* **Gestor de presupuesto**: Accesible desde el encabezado en cualquier página.
* **Control de unidades**: Sumar (+), restar (-) o eliminar ítems individuales.
* **Cálculo de subtotales y totales**: Formato de moneda local (`es-AR`).
* **Persistencia local**: Guarda los productos en `localStorage` (`muebleria_cart`) para mantener la cotización activa entre recargas y navegación.
* **Notificaciones Toast**: Alertas emergentes no bloqueantes al agregar, modificar o enviar cotizaciones.

### 5. Asesoramiento y Contacto
* **Página de Contacto (`html/contacto.html`)**: Horarios de taller, dirección del showroom, formulario integral de consultas y enlaces directos a canales de atención y WhatsApp.

---

## 🎨 Identidad Visual y Paleta de Colores

El sistema de diseño utiliza tonos cálidos y orgánicos que evocan la madera, la tierra y el trabajo artesanal:

| Nombre Token | Color Hex | Uso Principal |
| :--- | :--- | :--- |
| **`primary`** | `#823b18` | Acentos principales, botones primarios y precios destacados |
| **`primary-container`** | `#a0522d` | Estados hover y fondos complementarios |
| **`secondary`** | `#486730` | Verde oliva para badges, etiquetas y estados secundarios |
| **`surface`** | `#fff8f3` | Fondo base cálido con textura crema |
| **`on-surface`** | `#221a0f` | Títulos y tipografía de alto contraste |
| **`on-surface-variant`**| `#54433c` | Textos secundarios y descripciones |

---

## ⚙️ Configuración y Ejecución Local

No se requiere instalación de Node.js ni gestores de paquetes (`npm` / `yarn`).

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/emanuelrz/muebleria-hnosj.git
   cd muebleria-hnosj
   ```

2. **Abrir en el navegador**:
   * Puedes abrir directamente el archivo `index.html` en tu navegador de preferencia.
   * **Recomendado para desarrollo**: Utilizar una extensión de servidor estático local (como **Live Server** en Visual Studio Code) para garantizar la correcta navegación entre rutas relativas (`index.html` en la raíz y subpáginas en `/html/`).

---

## 📄 Licencia

Este proyecto es propiedad de **Mueblería Hermanos Jota**. Desarrollado con fines comerciales y de exhibición digital.