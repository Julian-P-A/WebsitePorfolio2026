"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mx-auto"
      style={{ maxWidth: "var(--container-max)", padding: "120px var(--gutter)" }}
    >
      <div className="flex flex-col gap-[18px]">
        <Reveal>
          <span className="flex items-center gap-3.5 font-mono text-xs uppercase tracking-[.14em] text-paper-400">
            <span className="text-lime">({t.about.index})</span>
            {t.about.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-heading font-bold text-cream"
            style={{ fontSize: "var(--fs-d2)", lineHeight: 0.95, letterSpacing: "-.045em" }}
          >
            {t.about.title}{" "}
            <em className="italic-accent text-lime not-italic" style={{ fontSize: "1.05em" }}>
              {t.about.titleAccent}
            </em>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p
          className="font-heading font-normal text-cream"
          style={{
            marginTop: 36,
            maxWidth: 820,
            fontSize: "clamp(22px,2.4vw,32px)",
            lineHeight: 1.3,
            letterSpacing: "-.02em",
          }}
        >
          {t.about.bioPre}
          <span className="bg-lime px-[.15em] text-ink">{t.about.bioHighlight}</span>
          {t.about.bioPost}
        </p>
      </Reveal>

      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        style={{ marginTop: 64 }}
      >
        {t.about.skills.map((skill, i) => (
          <Reveal key={skill.title} delay={0.1 * i}>
            <div
              className="flex h-full flex-col gap-[18px] rounded-[24px] p-7"
              style={{
                minHeight: 280,
                background: skill.active ? "var(--lime)" : "var(--ink-soft)",
                color: skill.active ? "var(--ink)" : "var(--paper-200)",
                border: skill.active
                  ? "1.5px solid var(--ink)"
                  : "1px solid var(--border-subtle)",
              }}
            >
              <Reveal as="span" delay={0.1 * i + 0.1} className="inline-block font-mono text-xs opacity-70">({skill.n})</Reveal>
              <Reveal delay={0.1 * i + 0.18}>
                <h3
                  className="font-heading font-semibold"
                  style={{
                    fontSize: 28,
                    lineHeight: 1,
                    letterSpacing: "-.035em",
                    color: skill.active ? "var(--ink)" : "var(--cream)",
                  }}
                >
                  {skill.title}
                </h3>
              </Reveal>
              <Reveal delay={0.1 * i + 0.26} className="flex-1">
                <p className="font-sans text-[15px] leading-[1.5]">{skill.desc}</p>
              </Reveal>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tagIndex) => (
                  <Reveal
                    as="span"
                    key={tag}
                    delay={0.1 * i + 0.34 + tagIndex * 0.05}
                    className="inline-flex h-[30px] items-center rounded-full px-[13px] font-mono text-xs lowercase tracking-[.02em]"
                    style={{
                      border: skill.active
                        ? "1.5px solid rgba(13,13,11,.3)"
                        : "1.5px solid var(--border-default)",
                    }}
                  >
                    {tag}
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
