/**
 * Hermanos Jota - Configuración Oficial de Tailwind CSS
 * Basado en el Manual de Marca Oficial (Buenos Aires · 2026)
 */

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta Oficial del Manual de Marca (Página 05)
        "siena-tostado": "#A0522D",
        "siena-tostado-hover": "#863F1E",
        "siena-tostado-light": "#F7EFE9",

        "verde-salvia": "#87A96B",
        "verde-salvia-bg": "#EFF5EC",
        "verde-salvia-dark": "#628248",

        "alabastro-calido": "#F5E6D3",
        "alabastro-light": "#FAF4EC",
        "alabastro-tint": "#FCFAF7",

        "vara-de-oro": "#D4A437",
        "vara-de-oro-light": "#FBF6EC",

        "rosa-polvoriento": "#C47A6D",
        "rosa-polvoriento-light": "#F9EFEB",

        // Mapeo semántico del sistema
        "primary": "#A0522D",
        "primary-hover": "#863F1E",
        "primary-container": "#863F1E",
        "on-primary": "#ffffff",
        "on-primary-container": "#ffe1d6",
        "on-primary-fixed-variant": "#76320f",

        "secondary": "#87A96B",
        "secondary-hover": "#628248",
        "secondary-container": "#EFF5EC",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#314e1b",

        "tertiary": "#D4A437",
        "tertiary-container": "#FBF6EC",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#5c4300",

        "surface": "#FCFAF7",
        "surface-dim": "#F5E6D3",
        "surface-bright": "#FCFAF7",
        "surface-variant": "#FAF4EC",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#FAF4EC",
        "surface-container": "#F5E6D3",
        "surface-container-high": "#EFE0CD",
        "surface-container-highest": "#E8D9C8",

        "on-surface": "#26201B",
        "on-surface-variant": "#5E534B",
        "outline": "#8E8278",
        "outline-variant": "#E8D9C8",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a"
      },
      letterSpacing: {
        "brand-title": "0.1em",
        "brand-cta": "0.08em",
        "brand-caption": "0.02em"
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
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.08em", "fontWeight": "500" }],
        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "display-lg-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "0.08em", "fontWeight": "700" }],
        "display-lg": ["52px", { "lineHeight": "60px", "letterSpacing": "0.1em", "fontWeight": "700" }]
      }
    }
  }
};
