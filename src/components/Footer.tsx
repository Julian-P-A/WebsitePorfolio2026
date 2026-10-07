"use client";

import {
  FaInstagram,
  FaBehance,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { useLanguage } from "@/lib/i18n";
import { socials } from "@/lib/data";

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
        <div
          className="font-heading overflow-hidden whitespace-nowrap border-t-[1.5px] border-ink font-bold"
          style={{
            fontSize: "clamp(64px,14vw,220px)",
            lineHeight: 0.8,
            letterSpacing: "-.06em",
            paddingTop: 36,
          }}
        >
          Julian Pinzón.
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[.12em]"
          style={{ marginTop: 32 }}
        >
          <span>{t.footer.rights}</span>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full transition-transform hover:-rotate-[8deg]"
                style={{ background: "var(--ink)", color: "var(--lime)" }}
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
