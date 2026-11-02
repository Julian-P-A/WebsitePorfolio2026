# Portfolio 2026 — Julian Pinzón

Portafolio personal desarrollado con **Next.js, React y TypeScript**, enfocado en presentar mi trabajo como **Diseñador UX/UI y Desarrollador Front-end**.

El proyecto combina diseño de interfaces, desarrollo web moderno, animaciones e interacciones para ofrecer una experiencia visual atractiva, intuitiva y adaptable a diferentes dispositivos.

## Tecnologías utilizadas

- **Next.js 16** — Framework para desarrollo web con React.
- **React 19** — Construcción de interfaces basadas en componentes.
- **TypeScript** — Desarrollo con tipado estático.
- **Tailwind CSS 4** — Estilización y diseño responsive.
- **Framer Motion** — Animaciones y transiciones.
- **Lenis** — Smooth scrolling.
- **Lucide React** — Iconografía.
- **Web3Forms** — Integración del formulario de contacto.
- **Vercel Analytics** — Analítica del sitio web.

## Características

- Diseño responsive para dispositivos móviles, tablets y escritorio.
- Interfaz disponible en español e inglés.
- Sección de proyectos con filtros interactivos.
- Presentación de habilidades y experiencia profesional.
- Animaciones y efectos de interacción.
- Formulario de contacto con validación.
- Optimización SEO mediante metadatos y Open Graph.
- Integración con Vercel Analytics.
- Componentes reutilizables y estructura modular.

## Proyectos destacados

El portafolio presenta una selección de trabajos relacionados con diseño UX/UI, desarrollo front-end y productos digitales.

Entre ellos:

- **TuMiniu:** plataforma SaaS para menús digitales.
- **Sisteviajes:** sitio web para una agencia de viajes personalizados.
- **Elixir Parfum:** comercio electrónico de perfumería.
- **Mercado:** proyecto de diseño UX/UI.

Cada proyecto presenta información sobre las tecnologías utilizadas, su categoría y, cuando está disponible, un enlace al sitio web.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Julian-P-A/WebsitePorfolio2026.git
```

### 2. Acceder al directorio

```bash
cd WebsitePorfolio2026
```

### 3. Instalar dependencias

```bash
npm ci
```

### 4. Configurar variables de entorno

Crear un archivo `.env.local` a partir de `.env.example` y configurar la clave de Web3Forms para habilitar el formulario de contacto:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_clave
```

### 5. Ejecutar el proyecto

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

La página principal redirige a `/es`. La versión en inglés está disponible en `/en`.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la compilación de producción |
| `npm run start` | Ejecuta la versión de producción |
| `npm run lint` | Ejecuta ESLint |

## Estructura del proyecto

```text
WebsitePorfolio2026/
├── public/
│   ├── fonts/
│   └── images/
├── src/
│   ├── app/
│   │   ├── [lang]/
│   │   ├── globals.css
│   │   └── fonts.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Work.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   └── lib/
│       ├── data.ts
│       ├── i18n.tsx
│       └── site-url.ts
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Despliegue

El proyecto puede desplegarse en **Vercel**, utilizando su integración con Next.js.

Para habilitar el formulario de contacto en producción, es necesario configurar `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` en las variables de entorno y realizar un nuevo despliegue.

## Autor

**Julian Pinzón**

Diseñador UX/UI & Desarrollador Front-end.

- [GitHub](https://github.com/Julian-P-A)
- [LinkedIn](https://www.linkedin.com/in/julianjcpa/)
- [Behance](https://www.behance.net/julianariza3)

---

Desarrollado como mi portafolio profesional para 2026, integrando diseño, tecnología y experiencia de usuario.
