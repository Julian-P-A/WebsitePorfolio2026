export type Project = {
  id: string;
  index: string;
  title: string;
  coverImage?: string;
  coverAlt?: { es: string; en: string };
  coverSubtitle?: { es: string; en: string };
  coverVariant?: "floating-browser";
  url?: string;
  category?: string | { es: string; en: string };
  year?: number;
  tags: string[];
  color: "cobalt" | "flame" | "lime" | "lilac";
  aspect: string;
  cats: ("ux" | "front" | "ds")[];
};

export const projects: Project[] = [
  {
    id: "tuminiu",
    index: "01",
    title: "TuMiniu",
    coverImage: "/images/tuminiu-hero.webp",
    coverAlt: {
      es: "Vista previa de un menú digital en TuMiniu",
      en: "Preview of a digital menu in TuMiniu",
    },
    coverSubtitle: {
      es: "Menú digital para restaurantes",
      en: "Digital menu for restaurants",
    },
    url: "https://www.tuminiu.com/",
    category: { es: "SaaS · menús digitales", en: "SaaS · digital menus" },
    year: 2026,
    tags: ["UX/UI", "Next.js", "React", "Supabase", "Cloudflare R2"],
    color: "cobalt",
    aspect: "4/5",
    cats: ["ux", "front"],
  },
  {
    id: "sisteviajes",
    index: "02",
    title: "Sisteviajes",
    coverImage: "/images/sisteviajes-browser.webp",
    coverAlt: {
      es: "Captura del sitio de Sisteviajes en una ventana de navegador",
      en: "Screenshot of the Sisteviajes website in a browser window",
    },
    coverSubtitle: {
      es: "Agencia de viajes personalizados",
      en: "Personalized travel agency",
    },
    coverVariant: "floating-browser",
    url: "https://www.sisteviajes.com/",
    category: { es: "Web · agencia de viajes", en: "Web · travel agency" },
    year: 2026,
    tags: ["Next.js", "React", "Tailwind", "Framer Motion", "Sanity"],
    color: "flame",
    aspect: "4/3",
    cats: ["front"],
  },
  {
    id: "elixir-parfum",
    index: "03",
    title: "Elixir Parfum",
    coverImage: "/images/elixir-parfum-preview.webp",
    coverAlt: {
      es: "Vista de la tienda de Elixir Parfum con su colección de fragancias",
      en: "Preview of the Elixir Parfum store and its fragrance collection",
    },
    coverSubtitle: {
      es: "E-commerce headless de perfumería",
      en: "Headless fragrance e-commerce",
    },
    coverVariant: "floating-browser",
    url: "https://www.elixirparfumcolombia.com/",
    category: { es: "E-commerce · perfumería", en: "E-commerce · fragrances" },
    year: 2026,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "WooCommerce", "WPGraphQL"],
    color: "lime",
    aspect: "4/3",
    cats: ["front"],
  },
  {
    id: "mercado",
    index: "04",
    title: "Mercado",
    category: "E-commerce · UX/UI",
    year: 2024,
    tags: ["figma", "a11y", "testing"],
    color: "lilac",
    aspect: "4/5",
    cats: ["ux"],
  },
];

export const contactEmail = "julian.jcpa@gmail.com";

export const socials = {
  instagram: "https://instagram.com/julian.c.ariz/",
  behance: "https://www.behance.net/julianariza3",
  twitter: "https://x.com/Julian_c_ariz",
  linkedin: "https://www.linkedin.com/in/julianjcpa/",
  github: "https://github.com/Julian-P-A",
};
