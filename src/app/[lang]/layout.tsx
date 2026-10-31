import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { LanguageProvider, type Locale } from "@/lib/i18n";
import { ClientEffects } from "@/components/ClientEffects";

const locales: Locale[] = ["es", "en"];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (lang !== "es" && lang !== "en") notFound();

  return (
    <html lang={lang} className="h-full antialiased">
      <head>
        <link
          rel="preload"
          href="/fonts/bricolage-grotesque-latin-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-latin-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-paper-200 font-sans">
        <ClientEffects />
        <LanguageProvider locale={lang}>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
