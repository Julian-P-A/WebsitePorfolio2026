"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "./Reveal";

const colorVar: Record<Project["color"], string> = {
  cobalt: "var(--cobalt)",
  flame: "var(--flame)",
  lime: "var(--lime)",
  lilac: "var(--lilac)",
};

function ProjectCardView({
  project,
  className,
  delay,
  priority,
}: { project: Project; className?: string; delay: number; priority: boolean }) {
  const { t, locale } = useLanguage();
  const category = typeof project.category === "string"
    ? project.category
    : project.category?.[locale] ?? t.work.projectLabel;

  return (
    <div className={`group flex flex-col gap-4 ${className ?? ""}`}>
      <Reveal delay={delay}>
        <div
          className="relative overflow-hidden rounded-[24px] border border-border-subtle"
          style={{ aspectRatio: project.aspect, background: colorVar[project.color] }}
        >
        {project.coverImage && project.coverSubtitle && (
          <div className={`absolute z-10 flex flex-col gap-1.5 ${project.coverVariant === "floating-browser" ? "right-[7%] top-[7%] items-end text-right sm:top-[18%]" : "left-5 top-[18%] sm:left-7"}`}>
            <Reveal as="span" delay={delay + 0.05} className="font-heading text-[26px] font-bold leading-none tracking-[-.05em] text-cream sm:text-[34px]">
              {project.title}<span className="text-lime">.</span>
            </Reveal>
            <Reveal as="span" delay={delay + 0.08} className={`font-mono text-[10px] font-medium uppercase leading-[1.45] tracking-[.12em] text-cream/85 sm:text-xs ${project.coverVariant === "floating-browser" ? "max-w-[230px]" : "max-w-[165px] sm:max-w-[230px]"}`}>
              {project.coverSubtitle[locale]}
            </Reveal>
          </div>
        )}
        {project.coverVariant === "floating-browser" && project.coverImage ? (
          <div className="absolute inset-0 translate-y-[32%] sm:translate-y-[25%]">
            <Image
              src={project.coverImage}
              alt={project.coverAlt?.[locale] ?? ""}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={priority}
              unoptimized
              className="scale-[1.2] object-contain transition-transform duration-500 group-hover:scale-[1.26]"
            />
          </div>
        ) : project.coverImage ? (
          <>
            <div className={project.coverSubtitle
              ? "absolute -bottom-[4%] right-[2%] h-[78%] w-[74%]"
              : "absolute inset-0"}
            >
              <Image
                src={project.coverImage}
                alt={project.coverAlt?.[locale] ?? ""}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={priority}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
          </>
        ) : (
          <div className="grain-overlay absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[.14em] text-[rgba(13,13,11,.55)]">
              {t.work.imagePlaceholder}
            </span>
          </div>
        )}
        <Reveal as="span" delay={delay + 0.06} className="absolute left-4 top-4 z-10 rounded-full bg-ink px-2.5 py-[7px] font-mono text-[11px] font-medium text-cream">
          {project.index}
        </Reveal>
        <span className="pointer-events-none absolute bottom-4 right-4 z-10 grid h-14 w-14 scale-[.4] place-items-center rounded-full border-[1.5px] border-ink bg-lime text-ink opacity-0 rotate-[-45deg] transition-all duration-300 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
          <ArrowUpRight className="h-6 w-6" />
        </span>
        {project.url && (
          <a
            className="absolute inset-0 z-20 focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-lime"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.work.visitSite}: ${project.title}`}
          />
        )}
        </div>
      </Reveal>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <Reveal delay={delay + 0.1}>
          <h3
            className="font-heading font-semibold text-cream"
            style={{ fontSize: 26, lineHeight: 1.05, letterSpacing: "-.035em" }}
          >
            {project.title}
          </h3>
        </Reveal>
        <Reveal as="span" delay={delay + 0.14} className="inline-block font-mono text-xs text-paper-400 sm:whitespace-nowrap sm:text-right">
          {category}{project.year ? ` — ${project.year}` : ""}
        </Reveal>
      </div>

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <Reveal
              as="span"
              key={tag}
              delay={delay + 0.18 + Math.min(i, 3) * 0.03}
              className="inline-flex h-[30px] items-center rounded-full border-[1.5px] border-border-default px-[13px] font-mono text-xs lowercase tracking-[.02em] text-cream"
            >
              {tag}
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

export function Work() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<"all" | "ux" | "front" | "ds">("all");

  const counts = useMemo(() => {
    const c = { all: projects.length, ux: 0, front: 0, ds: 0 };
    projects.forEach((p) => {
      p.cats.forEach((cat) => { c[cat]++; });
    });
    return c;
  }, []);

  const filtered = useMemo(
    () => projects.filter((p) => filter === "all" || p.cats.includes(filter)),
    [filter]
  );

  return (
    <section
      id="work"
      className="mx-auto"
      style={{ maxWidth: "var(--container-max)", padding: "110px var(--gutter) 40px" }}
    >
      <header className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div className="flex flex-col gap-[18px]">
          <Reveal>
            <span className="flex items-center gap-3.5 font-mono text-xs uppercase tracking-[.14em] text-paper-400">
              <span className="text-lime">({t.work.index})</span>
              {t.work.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading font-bold text-cream"
              style={{ fontSize: "var(--fs-d2)", lineHeight: 0.95, letterSpacing: "-.045em" }}
            >
              {t.work.title}{" "}
              <em className="italic-accent text-lime not-italic" style={{ fontSize: "1.05em" }}>
                {t.work.titleAccent}
              </em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-[440px] font-sans text-[17px] leading-[1.55] text-paper-200">
            {t.work.description}
          </p>
        </Reveal>
      </header>

      <Reveal delay={0.25}>
        <div
          className="mt-11 grid w-full grid-cols-2 gap-1 rounded-[24px] border-[1.5px] border-border-default p-1 sm:inline-flex sm:w-auto sm:rounded-full"
        >
          {t.work.filters.map((f, i) => {
            const on = f.value === filter;
            return (
              <Reveal as="span" key={f.value} delay={0.32 + i * 0.08} className="inline-flex">
                <button
                  onClick={() => setFilter(f.value)}
                  className="inline-flex h-9 items-center gap-1 rounded-full px-2 font-sans text-[13px] font-medium transition-colors sm:gap-2 sm:px-4 sm:text-sm"
                  style={{
                    background: on ? "var(--cream)" : "transparent",
                    color: on ? "var(--ink)" : "var(--paper-400)",
                  }}
                >
                  {f.label}
                  <span className="font-mono text-[10px] opacity-70">
                    {String(counts[f.value]).padStart(2, "0")}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-14 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={false}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)", transition: { duration: 0.2, delay: 0 } }}
              transition={{ layout: { duration: reduceMotion ? 0 : 0.35 } }}
            >
              <ProjectCardView
                project={project}
                delay={Math.min(i, 3) * 0.08}
                priority={i < 2}
                className={i % 2 === 1 ? "md:mt-20" : undefined}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-24 grid grid-cols-1 items-center gap-8 pt-14 md:grid-cols-[1fr_1.4fr] md:gap-12">
          <div className="flex md:order-1">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-ink bg-lime px-6 font-sans text-[15px] font-semibold text-ink transition-shadow hover:shadow-[3px_3px_0_var(--ink)]"
            >
              {t.work.ctaLabel}
              <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:rotate-45" />
            </a>
          </div>
          <h3
            className="font-heading font-bold text-cream md:order-2 md:text-right"
            style={{ fontSize: "var(--fs-d2)", lineHeight: 0.95, letterSpacing: "-.045em" }}
          >
            {t.work.ctaTitle}{" "}
            <em className="italic-accent text-lime not-italic" style={{ fontSize: "1.05em" }}>
              {t.work.ctaAccent}
            </em>
          </h3>
        </div>
      </Reveal>
    </section>
  );
}
