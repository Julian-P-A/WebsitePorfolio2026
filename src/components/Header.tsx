"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const router = useRouter();
  const { t, locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  const otherLocalePath = locale === "es" ? "/en" : "/es";

  const links: { id: string; label: string }[] = [
    { id: "work", label: t.nav.work },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className="fixed inset-x-0 top-3 z-50"
      style={{ padding: "0 var(--gutter)" }}
    >
      <nav
        className="relative z-10 mr-auto flex h-14 items-center justify-between gap-6 rounded-full border border-border-subtle pl-[22px] pr-2.5 backdrop-blur-xl"
        style={{
          maxWidth: "min(750px, calc(var(--container-max) - 2 * var(--gutter)))",
          background: "var(--glass-bg)",
        }}
      >
        <motion.a
          {...enter(0)}
          href="#home"
          className="font-heading whitespace-nowrap text-lg font-bold tracking-[-.03em] text-cream"
        >
          Julian Pinzón<span className="text-lime">.</span>
        </motion.a>

        <div className="hidden flex-wrap gap-7 md:flex">
          {links.map((l, i) => (
            <Fragment key={l.id}>
              <motion.a
                {...enter(0.08 + i * 0.08)}
                href={`#${l.id}`}
                className="inline-flex items-baseline gap-1.5 font-sans text-sm font-medium text-paper-400 transition-colors hover:text-cream"
              >
                <span className="font-mono text-[10px] text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </motion.a>
            </Fragment>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <motion.a
            {...enter(0.32)}
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
          </motion.a>

          <motion.a
            {...enter(0.4)}
            href="#contact"
            className="group hidden h-[34px] items-center gap-2.5 rounded-full border border-ink bg-lime px-3.5 font-sans text-[13px] font-semibold text-ink transition-shadow hover:shadow-[3px_3px_0_var(--ink)] sm:inline-flex"
          >
            {t.nav.cta}
            <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:rotate-45" />
          </motion.a>

          <motion.button
            {...enter(0.4)}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-full border border-border-default text-cream md:hidden"
          >
            {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </motion.button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 flex flex-col items-center justify-center gap-10 bg-ink/98 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={() => setMenuOpen(false)}
            className="flex items-baseline gap-2.5 font-heading text-3xl font-bold text-cream"
          >
            <span className="font-mono text-sm text-lime">
              {String(i + 1).padStart(2, "0")}
            </span>
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 inline-flex h-12 items-center gap-2.5 rounded-full border border-ink bg-lime px-6 font-sans text-base font-semibold text-ink"
        >
          {t.nav.cta}
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
