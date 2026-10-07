"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { CSSProperties, FormEventHandler, ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  onSubmit,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "form";
  onSubmit?: FormEventHandler<HTMLFormElement>;
  style?: CSSProperties;
}) {
  const reduceMotion = useReducedMotion();
  const props = {
    className,
    style,
    initial: reduceMotion ? false : "hidden",
    whileInView: reduceMotion ? undefined : "visible",
    viewport: { once: true, amount: 0.2 },
    custom: reduceMotion ? 0 : delay,
    variants: reduceMotion ? undefined : variants,
  } as const;

  if (as === "form") {
    return <motion.form {...props} onSubmit={onSubmit}>{children}</motion.form>;
  }

  const Component = motion[as];
  return <Component {...props}>{children}</Component>;
}
