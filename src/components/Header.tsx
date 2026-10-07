"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const router = useRouter();
  const { t, locale } = useLanguage();
  const otherLocalePath = locale === "es" ? "/en" : "/es";

  const links: { id: string; label: string }[] = [
    { id: "work", label: t.nav.work },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <div
      className="fixed inset-x-0 top-4 z-50"
      style={{ padding: "0 var(--gutter)" }}
    >
      <nav
        className="mx-auto flex h-16 items-center justify-between gap-6 rounded-full border border-border-subtle pl-[22px] pr-2.5 backdrop-blur-xl"
        style={{
          maxWidth: "calc(var(--container-max) - 2 * var(--gutter))",
          background: "var(--glass-bg)",
        }}
      >
        <a
          href="#home"
          className="font-heading whitespace-nowrap text-lg font-bold tracking-[-.03em] text-cream"
        >
          Julian Pinzón<span className="text-lime">.</span>
        </a>

        <div className="hidden flex-wrap gap-7 md:flex">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="inline-flex items-baseline gap-1.5 font-sans text-sm font-medium text-paper-400 transition-colors hover:text-cream"
            >
              <span className="font-mono text-[10px] text-lime">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <a
            href={otherLocalePath}
            onClick={(event) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              ) {
                return;
              }

              event.preventDefault();
              router.push(
                `${otherLocalePath}${window.location.search}${window.location.hash}`
              );
            }}
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
            className="relative flex h-7 w-[58px] items-center rounded-full border border-border-default font-mono text-[10px] font-medium"
          >
            <motion.span
              className="absolute h-[22px] w-7 rounded-full bg-lime"
              animate={{ x: locale === "es" ? 2 : 27 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <span
              className={`z-10 flex-1 text-center transition-colors ${
                locale === "es" ? "text-ink" : "text-paper-400"
              }`}
            >
              ES
            </span>
            <span
              className={`z-10 flex-1 text-center transition-colors ${
                locale === "en" ? "text-ink" : "text-paper-400"
              }`}
            >
              EN
            </span>
          </a>

          <a
            href="#contact"
            className="group hidden h-[34px] items-center gap-2.5 rounded-full border border-ink bg-lime px-3.5 font-sans text-[13px] font-semibold text-ink transition-shadow hover:shadow-[3px_3px_0_var(--ink)] sm:inline-flex"
          >
            {t.nav.cta}
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </nav>
    </div>
  );
}
