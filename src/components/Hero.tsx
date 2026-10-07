"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Marquee } from "./Marquee";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col"
      style={{ paddingTop: "var(--hero-pad-top)", paddingBottom: "var(--hero-pad-bottom)" }}
    >
      <div className="flex flex-1 items-center">
        <div
          className="mx-auto grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]"
          style={{ maxWidth: "var(--container-max)", padding: "0 var(--gutter)" }}
        >
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="hero-enter inline-flex h-7 items-center gap-2 rounded-full border border-border-subtle bg-ink-soft pl-2.5 pr-3 font-mono text-[11px] font-medium uppercase tracking-[.08em] text-cream"
                style={{ animationDelay: "0.48s" }}
              >
                <span className="relative h-2 w-2 rounded-full bg-lime shadow-[0_0_0_3px_rgba(214,255,92,.25)]">
                  <span className="absolute inset-0 animate-ds-pulse rounded-full bg-lime" />
                </span>
                {t.hero.badge}
              </span>
              <span
                className="hero-enter font-mono text-[11px] font-medium uppercase tracking-[.14em] text-paper-400"
                style={{ animationDelay: "0.56s" }}
              >
                {t.hero.location}
              </span>
            </div>

            <h1
              className="font-heading font-bold text-cream"
              style={{
                fontSize: "var(--fs-hero)",
                lineHeight: 0.86,
                letterSpacing: "-.055em",
              }}
            >
              <span className="hero-enter block" style={{ animationDelay: "0.64s" }}>
                {t.hero.titleLine1}
              </span>
              <span className="hero-enter block" style={{ animationDelay: "0.72s" }}>
                {t.hero.titleLine2}
              </span>
              <span className="hero-enter block" style={{ animationDelay: "0.8s" }}>
                {t.hero.titleLine3Pre}{" "}
                <em
                  className="italic-accent text-lime not-italic"
                  style={{ fontSize: "1.02em", letterSpacing: "-.03em" }}
                >
                  {t.hero.titleLine3Accent}
                </em>
              </span>
            </h1>
          </div>

          <div className="flex w-full max-w-[var(--hero-portrait-w)] flex-col gap-[22px] pb-[18px] lg:w-[var(--hero-portrait-w)]">
            <div
              className="hero-portrait-enter relative overflow-hidden rounded-[24px] border-[1.5px] border-ink bg-flame"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                boxShadow: "6px 6px 0 var(--lime)",
                animationDelay: "0.9s",
              }}
            >
              <Image
                src="/images/profile.png"
                alt="Julian Pinzón"
                fill
                sizes="(min-width: 1024px) 300px, 60vw"
                priority
                className="object-cover"
              />
            </div>

            <p
              className="hero-enter font-sans text-[17px] leading-[1.5] text-paper-200"
              style={{ animationDelay: "1s" }}
            >
              {t.hero.paragraph}
            </p>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="#contact"
                className="hero-enter group inline-flex h-11 items-center gap-2.5 rounded-full border border-ink bg-lime px-4 font-sans text-[15px] font-semibold text-ink transition-shadow hover:shadow-[3px_3px_0_var(--ink)]"
                style={{ animationDelay: "1.1s" }}
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#work"
                className="hero-enter inline-flex h-11 items-center rounded-full border-[1.5px] border-cream/60 px-4 font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-cream hover:text-ink"
                style={{ animationDelay: "1.2s" }}
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-enter overflow-hidden"
        style={{ marginTop: "var(--hero-marquee-gap)", paddingBlock: "1.5vh", animationDelay: "1.3s" }}
      >
        <Marquee />
      </div>
    </section>
  );
}
