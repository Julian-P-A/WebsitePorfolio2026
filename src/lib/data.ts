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
    id: "pulso",
    index: "03",
    title: "Pulso DS",
    category: "Design system",
    year: 2025,
    tags: ["tokens", "react", "storybook"],
    color: "lime",
    aspect: "4/3",
    cats: ["ds"],
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
