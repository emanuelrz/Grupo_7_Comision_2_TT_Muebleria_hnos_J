# Muebleria Hnos Jota - Sitio Web Oficial

Bienvenido al E-commerce de **Muebleria Hnos Jota**. Este repositorio contiene el código fuente del sitio web oficial, desarrollado con HTML, Tailwind CSS y JavaScript Vanilla.

## 📂 Estructura del Proyecto

El sitio sigue una arquitectura modular y escalable. La estructura de directorios es la siguiente:

```
muebleria-hnosj/
├── assets/
│   ├── css/       # Estilos globales y de marca
│   │   └── styles.css
│   ├── images/    # Recursos visuales (imágenes, logos, iconos)
│   │   ├── brand/
│   │   ├── products/
│   │   └── ui/
│   └── js/        # Lógica de la aplicación
│       └── app.js
├── html/
│   ├── _modules/  # Componentes reutilizables (header, footer, etc.)
│   ├── _sections/ # Secciones dinámicas del sitio
│   ├── catalogo.html
│   ├── checkout.html
│   ├── contacto.html
│   ├── index.html     # Home
│   └── producto.html  # Detalle del producto
├── .gitignore
└── README.md
```

## 🛠 Tecnología Utilizada

El proyecto está construido utilizando tecnologías modernas de desarrollo web front-end:

*   **HTML5**: Estructura semántica del sitio.
*   **Tailwind CSS**:
    *   Framework CSS utilitario para estilos rápidos y responsivos.
    *   Configuración de marca personalizada (`tailwind.config`).
*   **JavaScript Vanilla**:
    *   Lógica de navegación y estado de la aplicación.
    *   Gestión de carrito de cotización.
    *   Validación de formularios.
    *   Integración con APIs (WhatsApp, Google Sheets).
*   **Google Fonts**: Tipografías `Inter` y `Playfair Display` para una identidad visual premium.

## 🚀 Características Principales

*   **Catálogo de Productos**: Visualización de muebles con detalles técnicos.
*   **Carrito de Cotización** (Checkout): Gestión de productos seleccionados para cotización.
*   **Consultor en Línea**: Interacción con IA y generación de mensajes a WhatsApp.
*   **Persistencia de Estado**:
    *   Uso de `localStorage` para guardar carrito y favoritos.
    *   Sincronización con Google Sheets (API).

## 📂 Directorios Clave

### `assets/`
Contiene todos los recursos estáticos y dinámicos del proyecto.

*   **`css/styles.css`**:
    *   Definición de la paleta de colores corporativa.
    *   Variables CSS y estilos base.
    *   Clases utilitarias para componentes (botones, inputs, modales).
*   **`images/`**:
    *   `brand/`: Logo y elementos de identidad visual.
    *   `products/`: Imágenes de alta calidad de los muebles.
    *   `ui/`: Iconos y gráficos auxiliares.
*   **`js/app.js`**:
    *   Controlador principal de la aplicación.
    *   Manejo de rutas y renderizado de secciones.
    *   Gestión del estado global.

### `html/`
Estructura del sitio web.

*   **`index.html`**: Página de inicio con productos destacados y propuesta de valor.
*   **`catalogo.html`**: Listado completo de productos con filtros y paginación.
*   **`producto.html`**: Detalle de un producto específico con especificaciones técnicas.
*   **`checkout.html`**: Proceso de cotización con formulario y validación.
*   **`contacto.html`**: Formulario de contacto con integración a Google Sheets.
*   **`_modules/`**:
    *   `header.html`: Cabecera con navegación responsiva.
    *   `footer.html`: Pie de página con enlaces y redes sociales.
    *   `consultor-modal.html`: Componente de chat con IA.
    *   `carrito-modal.html`: Carrito de cotización flotante.
*   **`_sections/`**:
    *   `hero.html`: Sección principal de la home.
    *   `destacados.html`: Productos destacados del catálogo.
    *   `servicios.html`: Beneficios y propuesta de valor.
    *   `acerca-de.html`: Información sobre la empresa.
    *   `contacto-form.html`: Formulario de contacto.

## ⚙️ Configuración y Uso

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-del-repositorio>
    cd muebleria-hnosj
    ```

2.  **Ejecutar el proyecto**:
    Puedes abrir cualquiera de los archivos HTML directamente en tu navegador. Para una mejor experiencia de desarrollo, se recomienda usar una extensión como "Live Server" en VS Code.

## 🔌 Integraciones

*   **Google Sheets API**: Utilizada para enviar datos de formularios de contacto y cotizaciones a una hoja de cálculo compartida.
*   **Gemini API**: Integración con modelos de IA para respuestas inteligentes del consultor en línea.
*   **WhatsApp API**: Generación de mensajes pre-llenados para contacto directo con la empresa.

## 🎨 Paleta de Colores y Tipografía

El sitio utiliza una paleta de colores cálida y elegante, inspirada en la madera y la artesanía:

*   **Primary**: `#823b18` (Marrón-Naranja cálido)
*   **Secondary**: `#486730` (Verde Olivo)
*   **Surface**: `#fff8f3` (Blanco Crema)
*   **Typography**: `Inter` (Sans-serif para UI) y `Playfair Display` (Serif para títulos).

## 📄 Licencia

Este proyecto es propiedad de Muebleria Hnos Jota y su uso está sujeto a los términos y condiciones establecidos por la empresa.