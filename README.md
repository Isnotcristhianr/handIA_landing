# Hand IA - Landing Page

🖐️ **El Futuro en tus Manos** - Landing page para la aplicación Hand IA que combina la sabiduría ancestral de la quiromancia con inteligencia artificial avanzada.

![Hand IA Logo](public/logo/logo.png)

## 📖 Descripción

Hand IA es una innovadora aplicación que utiliza inteligencia artificial para analizar las líneas de la palma de tu mano, combinando tradiciones milenarias con tecnología de vanguardia. Esta landing page presenta las características principales de la aplicación y permite a los usuarios conocer más sobre el producto.

## ✨ Características

- **Diseño Moderno**: Interface limpia y elegante con gradientes y efectos glassmorphism
- **Responsive**: Optimizada para todos los dispositivos (móvil, tablet, desktop)
- **Animaciones Suaves**: Efectos de hover y transiciones fluidas
- **Mockup Interactivo**: Muestra real de la aplicación en funcionamiento
- **Secciones Completas**: Hero, características, cómo funciona, CTA y footer

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[Vue.js](https://vuejs.org/)** - Componentes interactivos
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilos utilitarios
- **[Lucide Vue](https://lucide.dev/)** - Iconos modernos
- **Vite** - Build tool rápido

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview

# Comandos de Astro
npm run astro ...
```

## 📁 Estructura del Proyecto

```
handIA_landing/
├── public/
│   ├── favicon.svg
│   ├── hand-icon.svg
│   ├── logo/
│   │   ├── logo.png
│   │   ├── logo_dark.png
│   │   └── logo_rbg.png
│   └── mockup/
│       └── demo.jpeg
├── src/
│   ├── components/
│   │   ├── CTASection.vue
│   │   ├── FeaturesSection.vue
│   │   ├── FooterSection.vue
│   │   ├── HeroSection.vue
│   │   ├── HowItWorksSection.vue
│   │   └── NavBar.vue
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── style.css
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## 🎨 Componentes Principales

### HeroSection.vue
- Título principal con gradientes
- Botones de CTA
- Mockup interactivo del teléfono

### FeaturesSection.vue
- Características destacadas de la aplicación
- Cards con iconos y descripciones

### HowItWorksSection.vue
- Proceso paso a paso de cómo funciona la app

### CTASection.vue
- Llamada a la acción final
- Botones de descarga

### NavBar.vue
- Navegación responsive
- Logo y enlaces de secciones

### FooterSection.vue
- Información de contacto y links importantes

## 🎯 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- **Primary**: Tonos púrpura/violeta para gradientes
- **Secondary**: Colores complementarios
- **Glass**: Efectos de transparencia

### Tipografías
- **Headings**: Font weight bold/black para títulos
- **Body**: Text normal para contenido

### Animaciones
- `animate-fade-in`: Entrada suave
- `animate-float`: Efecto flotante
- `animate-pulse`: Pulsación
- `animate-ping`: Ondas expansivas

## 📱 Responsive Design

La landing está optimizada para:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

## 🚀 Deployment

### Build de producción
```bash
npm run build
```

### Despliegue recomendado
- **Vercel** (recomendado para Astro)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## 📄 Licencia

Este proyecto es privado y confidencial. Todos los derechos reservados.

## 🤝 Contribución

Este es un proyecto privado. Para contribuciones, contacta al equipo de desarrollo.

---

**Hand IA** - Descubre los secretos ocultos en las líneas de tu mano 🔮
