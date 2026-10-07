"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function Toast({
  open,
  title,
  message,
  onClose,
}: {
  open: boolean;
  title: string;
  message?: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {open && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="flex w-[380px] max-w-[90vw] items-start gap-3.5 rounded-2xl border-[1.5px] border-ink bg-cream p-4 text-ink"
            style={{ boxShadow: "5px 5px 0 var(--lime)" }}
          >
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full border-[1.5px] border-ink bg-lime">
              <Check className="h-[15px] w-[15px]" />
            </span>
            <div className="flex flex-1 flex-col gap-1">
              <strong className="font-sans text-[15px] font-semibold leading-tight">
                {title}
              </strong>
              {message && (
                <span className="font-sans text-sm text-ink/70">{message}</span>
              )}
            </div>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={onClose}
              className="p-0.5 text-ink/60"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
