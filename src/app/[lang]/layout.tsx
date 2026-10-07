import { notFound } from "next/navigation";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Geist,
  JetBrains_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { LanguageProvider, type Locale } from "@/lib/i18n";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
    <html
      lang={lang}
      className={`${bricolage.variable} ${instrumentSerif.variable} ${geist.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper-200 font-sans">
        <SmoothScroll />
        <Cursor />
        <LanguageProvider locale={lang}>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
