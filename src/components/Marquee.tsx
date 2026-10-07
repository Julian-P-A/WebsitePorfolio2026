"use client";

import { useLanguage } from "@/lib/i18n";

const SIZE = 52;

export function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div
      className="overflow-hidden border-y-[1.5px] border-ink bg-lime text-ink"
      style={{ transform: "rotate(-2deg)" }}
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-heading inline-flex items-center whitespace-nowrap font-bold uppercase"
            style={{
              gap: SIZE * 0.45,
              paddingInline: SIZE * 0.225,
              paddingBlock: SIZE * 0.28,
              fontSize: SIZE,
              lineHeight: 1,
              letterSpacing: "-.04em",
            }}
          >
            {item}
            <span style={{ fontSize: SIZE * 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
