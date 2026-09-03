/**
 * Hermanos Jota - Configuración Oficial de Tailwind CSS
 * Compartida para todo el sitio web (Home, Catálogo, Detalle de Producto, Contacto)
 */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#823b18",
        "primary-container": "#a0522d",
        "on-primary": "#ffffff",
        "on-primary-container": "#ffe1d6",
        "on-primary-fixed": "#360f00",
        "on-primary-fixed-variant": "#76320f",
        "primary-fixed": "#ffdbcd",
        "primary-fixed-dim": "#ffb596",
        "inverse-primary": "#ffb596",

        "secondary": "#486730",
        "secondary-container": "#c9eea9",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#4e6d36",
        "secondary-fixed": "#c9eea9",
        "secondary-fixed-dim": "#aed18f",
        "on-secondary-fixed": "#0b2000",
        "on-secondary-fixed-variant": "#314e1b",

        "tertiary": "#674b00",
        "tertiary-container": "#856200",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ffe4b4",
        "tertiary-fixed": "#ffdea1",
        "tertiary-fixed-dim": "#f2bf50",
        "on-tertiary-fixed": "#261900",
        "on-tertiary-fixed-variant": "#5c4300",

        "surface": "#fff8f3",
        "surface-dim": "#e6d8c5",
        "surface-bright": "#fff8f3",
        "surface-variant": "#efe0cd",
        "surface-tint": "#944925",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fff2e2",
        "surface-container": "#fbecd9",
        "surface-container-high": "#f5e6d3",
        "surface-container-highest": "#efe0cd",
        "on-surface": "#221a0f",
        "on-surface-variant": "#54433c",
        "inverse-surface": "#372f22",
        "inverse-on-surface": "#feefdb",

        "background": "#fff8f3",
        "on-background": "#221a0f",

        "outline": "#87736b",
        "outline-variant": "#dac1b8",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "gutter": "24px",
        "container-max": "1280px",
        "base": "8px"
      },
      fontFamily: {
        "sans": ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        "display": ["Playfair Display", "Georgia", "serif"],
        "label-sm": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-md": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "display-lg": ["Playfair Display", "serif"]
      },
      fontSize: {
        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "600" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
        "display-lg-mobile": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "display-lg": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      }
    }
  }
};
