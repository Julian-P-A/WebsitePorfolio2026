"use client";

import {
  FaInstagram,
  FaBehance,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { socials } from "@/lib/data";
import { Reveal } from "./Reveal";

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", href: socials.instagram },
  { icon: FaBehance, label: "Behance", href: socials.behance },
  { icon: FaXTwitter, label: "Twitter/X", href: socials.twitter },
  { icon: FaLinkedinIn, label: "LinkedIn", href: socials.linkedin },
  { icon: FaGithub, label: "GitHub", href: socials.github },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer data-theme="dark" style={{ background: "var(--lime)", color: "var(--ink)" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: "var(--container-max)", padding: "0 var(--gutter) 32px" }}
      >
        <Reveal>
          <div
            className="font-heading overflow-hidden whitespace-nowrap border-t-[1.5px] border-ink font-bold"
            style={{
              fontSize: "var(--fs-footer)",
              lineHeight: 0.8,
              letterSpacing: "-.06em",
              paddingTop: 36,
            }}
          >
            Julian Pinzón.
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[.12em]"
        >
          <Reveal as="span" delay={0.22} className="inline-flex items-center gap-1.5">
            {t.footer.rights}
            <Heart className="h-3 w-3" fill="var(--ink)" />
          </Reveal>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, label, href }, i) => (
              <Reveal as="span" key={label} delay={0.3 + i * 0.07} className="inline-flex">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full transition-transform hover:-rotate-[8deg]"
                style={{ background: "var(--ink)", color: "var(--lime)" }}
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
