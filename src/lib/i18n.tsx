"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

export type Locale = "es" | "en";

export interface Dictionary {
  nav: {
    work: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    location: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3Pre: string;
    titleLine3Accent: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  marquee: string[];
  work: {
    index: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    filters: { value: "all" | "ux" | "front" | "ds"; label: string }[];
    imagePlaceholder: string;
    projectLabel: string;
    visitSite: string;
    ctaTitle: string;
    ctaAccent: string;
    ctaLabel: string;
  };
  about: {
    index: string;
    eyebrow: string;
    title: string;
    titleAccent: string;
    bioPre: string;
    bioHighlight: string;
    bioPost: string;
    skills: {
      n: string;
      title: string;
      desc: string;
      tags: string[];
      active?: boolean;
    }[];
  };
  contact: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    copyTooltip: string;
    formName: string;
    formNamePh: string;
    formEmail: string;
    formEmailPh: string;
    formEmailError: string;
    formRequiredError: string;
    formSendError: string;
    formSetupError: string;
    formBudget: string;
    formBudgetPh: string;
    budgetOptions: string[];
    formProject: string;
    formProjectPh: string;
    consent: string;
    consentRequired: string;
    submit: string;
    sending: string;
    toastTitle: string;
    toastMessage: string;
  };
  footer: {
    rights: string;
  };
}

export const dictionary: Record<Locale, Dictionary> = {
  es: {
    nav: {
      work: "Trabajo",
      about: "Sobre mí",
      contact: "Contacto",
      cta: "Hablemos",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      badge: "Disponible · Oct 2026",
      location: "Colombia — remoto",
      titleLine1: "Diseño",
      titleLine2: "interfaces",
      titleLine3Pre: "y las",
      titleLine3Accent: "programo.",
      paragraph:
        "Diseñador UX/UI & desarrollador front-end. Llevo ideas del research al último pixel en producción.",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Ver trabajo",
    },
    marquee: ["Diseño UX/UI", "Front-end", "Design systems", "Prototipado", "Motion"],
    work: {
      index: "01",
      eyebrow: "Trabajo seleccionado",
      title: "Cosas que",
      titleAccent: "he construido",
      description:
        "Una selección de productos donde diseñé la experiencia y escribí el código. Cada uno tiene su caso de estudio.",
      filters: [
        { value: "all", label: "Todo" },
        { value: "ux", label: "UX/UI" },
        { value: "front", label: "Front-end" },
        { value: "ds", label: "Design systems" },
      ],
      imagePlaceholder: "imagen del proyecto",
      projectLabel: "Proyecto",
      visitSite: "Visitar sitio",
      ctaTitle: "¿Construimos algo",
      ctaAccent: "juntos?",
      ctaLabel: "Hablemos",
    },
    about: {
      index: "02",
      eyebrow: "Sobre mí",
      title: "Mitad diseño,",
      titleAccent: "mitad código.",
      bioPre: "Llevo 7 años entre Figma y el editor. Me gusta el punto exacto donde una buena idea ",
      bioHighlight: "se vuelve real",
      bioPost: ", y cuidar ese paso es mi trabajo.",
      skills: [
        {
          n: "01",
          title: "UI/UX",
          desc: "Entrevistas, research y prototipos que se convierten en interfaces con carácter. Todo el proceso, un mismo panel.",
          tags: ["figma", "research", "prototipos"],
          active: true,
        },
        {
          n: "02",
          title: "Front-end",
          desc: "Del Figma al navegador sin perder nada por el camino. Rápido y accesible.",
          tags: ["react", "typescript", "css"],
        },
        {
          n: "03",
          title: "Design systems",
          desc: "Tokens, componentes y documentación que escalan con tu equipo, cada vez con más IA en el flujo.",
          tags: ["tokens", "storybook", "ia"],
        },
        {
          n: "04",
          title: "Automatización",
          desc: "Scripts y flujos que quitan el trabajo repetitivo, para enfocarme en lo que de verdad importa.",
          tags: ["scripts", "n8n", "ci/cd"],
        },
      ],
    },
    contact: {
      index: "03",
      eyebrow: "Contacto",
      title: "¿Hablamos?",
      description: "Cuéntame qué estás construyendo. Respondo en 24–48 h, siempre.",
      copyTooltip: "Copiar email",
      formName: "Nombre",
      formNamePh: "Ada Lovelace",
      formEmail: "Email",
      formEmailPh: "ada@correo.com",
      formEmailError: "Revisa el formato del email",
      formRequiredError: "Escribe tu nombre y cuéntame sobre el proyecto.",
      formSendError: "No se pudo enviar. Inténtalo de nuevo o escríbeme al correo de la izquierda.",
      formSetupError: "El formulario aún no está configurado. Escríbeme al correo de la izquierda.",
      formBudget: "Presupuesto",
      formBudgetPh: "Elige un rango",
      budgetOptions: ["< 500 USD", "500–1k USD", "1–3k USD", "3k+ USD"],
      formProject: "Proyecto",
      formProjectPh: "Tengo una idea…",
      consent: "Acepto la política de privacidad",
      consentRequired: "Marca la casilla para poder enviar",
      submit: "Enviar",
      sending: "Enviando…",
      toastTitle: "¡Mensaje enviado!",
      toastMessage: "Te respondo en 24–48 h.",
    },
    footer: {
      rights: "© 2026 — Diseñado y desarrollado con",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
      cta: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Available · Oct 2026",
      location: "Colombia — remote",
      titleLine1: "I design",
      titleLine2: "interfaces",
      titleLine3Pre: "and I",
      titleLine3Accent: "build them.",
      paragraph:
        "UX/UI designer & front-end developer. I take ideas from research all the way to production.",
      ctaPrimary: "Let's talk",
      ctaSecondary: "See my work",
    },
    marquee: ["UX/UI design", "Front-end", "Design systems", "Prototyping", "Motion"],
    work: {
      index: "01",
      eyebrow: "Selected work",
      title: "Things I've",
      titleAccent: "built",
      description:
        "A selection of products where I designed the experience and wrote the code. Each one has its own case study.",
      filters: [
        { value: "all", label: "All" },
        { value: "ux", label: "UX/UI" },
        { value: "front", label: "Front-end" },
        { value: "ds", label: "Design systems" },
      ],
      imagePlaceholder: "project image",
      projectLabel: "Project",
      visitSite: "Visit site",
      ctaTitle: "Shall we build something",
      ctaAccent: "together?",
      ctaLabel: "Let's talk",
    },
    about: {
      index: "02",
      eyebrow: "About me",
      title: "Half design,",
      titleAccent: "half code.",
      bioPre: "I've spent 7 years between Figma and the editor. I like the exact point where a good idea ",
      bioHighlight: "becomes real",
      bioPost: ", and taking care of that step is my job.",
      skills: [
        {
          n: "01",
          title: "UI/UX",
          desc: "Interviews, research and prototypes that turn into interfaces with character. The whole process, one panel.",
          tags: ["figma", "research", "prototypes"],
          active: true,
        },
        {
          n: "02",
          title: "Front-end",
          desc: "From Figma to the browser without losing anything along the way. Fast and accessible.",
          tags: ["react", "typescript", "css"],
        },
        {
          n: "03",
          title: "Design systems",
          desc: "Tokens, components and documentation that scale with your team, with a bit more AI in the workflow every time.",
          tags: ["tokens", "storybook", "ai"],
        },
        {
          n: "04",
          title: "Automation",
          desc: "Scripts and workflows that remove repetitive work, so I can focus on what actually matters.",
          tags: ["scripts", "n8n", "ci/cd"],
        },
      ],
    },
    contact: {
      index: "03",
      eyebrow: "Contact",
      title: "Let's talk?",
      description: "Tell me what you're building. I reply within 24–48 h, always.",
      copyTooltip: "Copy email",
      formName: "Name",
      formNamePh: "Ada Lovelace",
      formEmail: "Email",
      formEmailPh: "ada@email.com",
      formEmailError: "Check the email format",
      formRequiredError: "Enter your name and tell me about the project.",
      formSendError: "The message could not be sent. Try again or email me using the address on the left.",
      formSetupError: "The form is not configured yet. Please email me using the address on the left.",
      formBudget: "Budget",
      formBudgetPh: "Choose a range",
      budgetOptions: ["< $500", "$500–1k", "$1–3k", "$3k +"],
      formProject: "Project",
      formProjectPh: "I have an idea…",
      consent: "I agree to the privacy policy",
      consentRequired: "Check the box to send",
      submit: "Send",
      sending: "Sending…",
      toastTitle: "Message sent!",
      toastMessage: "I'll reply within 24–48 h.",
    },
    footer: {
      rights: "© 2026 — Designed and developed with",
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const value = useMemo(
    () => ({ locale, t: dictionary[locale] }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
