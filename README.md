# Plomería y Electricidad Sánchez — Landing Page & Aplicación Web

![Plomería y Electricidad Sánchez](https://lh3.googleusercontent.com/aida-public/AB6AXuDpWlO1Sn1BN4y0zsF4u6lHpmZTSLuMcv1HSmF0xGtHUVVkHXir7ebpRrdnaPdMrIodkgCD4SpnutgL56yUYQkZsZkSTOV5CsU-Jw7N5ZrnmhXZ40pmh2uxlxYiXLUmspUlY-oa0JjwYYUy5MTnRLgyISqiuOUqDHAdoFOrvQbIl3hYCyrYe_s2RCgxzMEFHOS-LdgZaquAhvn8YxdO-SgUG4_53KavfWWO1Z4CcL0ochhKNNiebdFu79vqBGh-jaaQxSY)

Landing page profesional y moderna para **Plomería y Electricidad Sánchez**, negocio con más de 15 años de experiencia brindando servicios especializados y atención de emergencias 24/7 en San Diego Churubusco, Coyoacán y toda la Ciudad de México.

---

## 📋 Descripción del Proyecto

Este sitio web está codificado con una arquitectura modular, limpia, accesible (WCAG 2.1) y 100% responsive (`mobile-first`), optimizado para conversión inmediata vía WhatsApp y llamadas telefónicas. Implementa fidelidad visual exacta con el sistema de diseño **Workshop Professionalism**, logrando un equilibrio entre autoridad corporativa corporativo-moderna y un tacto cálido artesanal.

### ✨ Características Principales
- **Barra de Navegación Fija (Sticky Nav):** Efecto *Glassmorphism* (`backdrop-blur-md`), transición de sombra al hacer scroll y menú móvil (*drawer*) deslizable desde la derecha con soporte para teclado y gestos.
- **Botones de Conversión Directa (CTAs):** Integración completa con API de WhatsApp con mensajes predefinidos para emergencias y botón flotante (*FAB*) con anillo pulsante (*pulse-ring*) y tooltip informativo.
- **Mapa Interactivo Embebido:** iframe nativo de Google Maps configurado en escala de grises por defecto que transiciona suavemente a todo color al interactuar (`filter: grayscale`).
- **Animaciones de Revelado Suave (Scroll Reveal):** Despliegue dinámico de secciones utilizando `IntersectionObserver` de alta eficiencia.
- **Acordeón de Preguntas Frecuentes (FAQ):** Componente interactivo `<details>`/`<summary>` modular con animaciones y contraste visual en estado activo.
- **SEO y Datos Estructurados:** Etiquetas Open Graph completas, meta descripción local y esquema **JSON-LD** (`LocalBusiness`, `Plumber`, `Electrician`) para indexación óptima en motores de búsqueda.

---

## 🛠 Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura optimizada para accesibilidad (`aria-labels`, roles, encabezados jerárquicos).
- **Tailwind CSS (CDN custom configuration):** Configuración precisa de tokens de color, tipografía y formas (`container-queries`, `forms`).
- **Vanilla JavaScript (`main.js`):** Sin dependencias pesadas, manejo nativo del DOM para eventos, intersección, drawer móvil y navegación suave (`scroll-smooth`).
- **Google Fonts:**
  - `Source Serif 4` (Títulos e identidad visual corporativa)
  - `Manrope` (Cuerpo de texto y etiquetas técnicas legibles)
- **Material Symbols Outlined:** Iconografía vectorial de alta legibilidad.

---

## 📁 Estructura del Repositorio

```text
PlomeriayElectricidadsanchez/
├── index.html              # Página principal (Entry point 100% funcional)
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos custom (Glassmorphism, animaciones, mapas, texturas)
│   └── js/
│       └── main.js         # Lógica interactiva (Sticky nav, mobile drawer, scroll reveal)
├── README.md               # Documentación general del proyecto
└── .gitignore              # Configuración de exclusiones de Git
```

---

## 🚀 Cómo Desplegar

El sitio no requiere un proceso de compilación complejo (*zero-build step*) ya que utiliza Tailwind en tiempo de ejecución junto con CSS y JS nativos modularizados.

### 1. GitHub Pages (Recomendado)
1. Sube los archivos a la rama `main` en la carpeta raíz (`/`).
2. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
3. En **Source**, selecciona `Deploy from a branch`, elige la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**. Tu sitio estará en vivo en pocos segundos en `https://<usuario>.github.io/PlomeriayElectricidadsanchez/`.

### 2. Netlify / Vercel
1. Conecta tu repositorio de GitHub con Netlify o Vercel.
2. Deja el comando de compilación (`Build Command`) en blanco.
3. El directorio de salida (`Output / Publish Directory`) es la raíz (`.`).
4. Haz clic en **Deploy**.

---

## 📍 Datos Reales de Contacto del Negocio

- **Nombre Comercial:** Plomería y Electricidad Sánchez
- **Especialidades:** Plomería Residencial e Industrial, Electricidad Certificada
- **Dirección Física:** Calz. Gral. Anaya 220-interior 7, San Diego Churubusco, Coyoacán, 04120 Ciudad de México, CDMX
- **Teléfono Directo:** [55 6005 4779](tel:+525560054779)
- **WhatsApp Urgencias 24/7:** [+52 55 6005 4779](https://wa.me/525560054779?text=Hola,%20vi%20su%20página%20web%20y%20tengo%20una%20emergencia%20de%20plomería/electricidad)
- **Correo Electrónico:** [sanchez.plomeros@gmail.com](mailto:sanchez.plomeros@gmail.com)
- **Facebook Oficial:** [Plomería y Electricidad Sánchez](https://www.facebook.com/PlomeriayElectricidadSanchez/)
- **Google Maps:** [Ver Ubicación en Maps](https://maps.app.goo.gl/gEVf4vDnbQiYVtP28)
- **Confianza Local:** Más de 32 familias y empresas en Coyoacán respaldan nuestro trabajo.

---

## 🎨 Créditos de Diseño

El sistema de diseño implementado es **Workshop Professionalism**, caracterizado por su precisión estructural, alta legibilidad en situaciones de emergencia y paleta de colores corporativa (`Deep Navy #002869`, `Golden Yellow #755b00 / #fccc38`, `White Tile Patterns` y superficies en grises limpios).
