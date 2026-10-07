import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/site-url";

const seo = {
  es: {
    title: "Julian Pinzón — Diseñador UX/UI y desarrollador front-end",
    description:
      "Diseño interfaces y las programo. Portafolio de Julian Pinzón, diseñador UX/UI y desarrollador front-end.",
    openGraphLocale: "es_CO",
  },
  en: {
    title: "Julian Pinzón — UX/UI Designer & Front-end Developer",
    description:
      "I design and build interfaces. Explore the portfolio of Julian Pinzón, UX/UI designer and front-end developer.",
    openGraphLocale: "en_US",
  },
} as const;

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "es" && lang !== "en") notFound();

  const { title, description, openGraphLocale } = seo[lang];

  return {
    metadataBase: getSiteUrl(),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      locale: openGraphLocale,
      title,
      description,
    },
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
