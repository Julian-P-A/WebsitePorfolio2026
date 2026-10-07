"use client";

import { useState, type FormEvent } from "react";
import { Copy, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contactEmail } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Toast } from "./Toast";

const EMAIL_RE = /.+@.+\..+/;

export function Contact() {
  const { t, locale } = useLanguage();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [project, setProject] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [toastOn, setToastOn] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch {
      // clipboard not available, ignore
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending || !consent) return;
    setSubmitError("");
    if (!EMAIL_RE.test(email.trim())) {
      setError(t.contact.formEmailError);
      return;
    }
    setError("");
    if (!name.trim() || !project.trim()) {
      setSubmitError(t.contact.formRequiredError);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitError(t.contact.formSetupError);
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Nuevo mensaje desde el portafolio de Julian Pinzón",
          from_name: "Julian Pinzón — Portafolio",
          name: name.trim(),
          email: email.trim(),
          ...(budget ? { budget } : {}),
          message: project.trim(),
          language: locale,
          botcheck: false,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || result.success !== true) throw new Error("Web3Forms submission failed");

      setName("");
      setEmail("");
      setBudget("");
      setProject("");
      setConsent(false);
      setToastOn(true);
      setTimeout(() => setToastOn(false), 4000);
    } catch {
      setSubmitError(t.contact.formSendError);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" data-theme="dark">
      <div
        className="mx-auto rounded-t-[36px]"
        style={{ background: "var(--lime)", color: "var(--ink)" }}
      >
        <div
          className="mx-auto grid grid-cols-1 gap-16 md:grid-cols-2"
          style={{
            maxWidth: "var(--container-max)",
            padding: "110px var(--gutter) 80px",
          }}
        >
          <Reveal className="flex flex-col gap-7">
            <span className="font-mono text-xs uppercase tracking-[.14em]">
              ({t.contact.index}) {t.contact.eyebrow}
            </span>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "var(--fs-d1)", lineHeight: 0.88, letterSpacing: "-.055em" }}
            >
              {t.contact.title.replace("?", "")}
              <em className="italic-accent not-italic">?</em>
            </h2>
            <p className="max-w-[420px] font-sans text-lg leading-[1.5]">
              {t.contact.description}
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href={`mailto:${contactEmail}`}
                className="font-heading font-semibold tracking-[-.02em] text-ink"
                style={{ fontSize: 22 }}
              >
                {contactEmail}
              </a>
              <span className="group relative inline-flex">
                <button
                  type="button"
                  onClick={handleCopy}
                  onMouseEnter={() => setTooltipOpen(true)}
                  onMouseLeave={() => setTooltipOpen(false)}
                  aria-label={t.contact.copyTooltip}
                  className="grid h-10 w-10 place-items-center rounded-full border-[1.5px] transition-transform hover:-rotate-[8deg]"
                  style={{ borderColor: "rgba(13,13,11,.3)" }}
                >
                  <Copy className="h-[17px] w-[17px]" />
                </button>
                <span
                  className="pointer-events-none absolute left-1/2 whitespace-nowrap rounded-lg bg-ink px-2.5 py-[7px] font-mono text-[11px] text-lime transition-all"
                  style={{
                    bottom: "calc(100% + 10px)",
                    transform: `translateX(-50%) translateY(${tooltipOpen ? 0 : 4}px)`,
                    opacity: tooltipOpen ? 1 : 0,
                  }}
                >
                  {t.contact.copyTooltip}
                </span>
              </span>
            </div>
          </Reveal>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-[24px] bg-ink p-9 text-cream"
            style={{ boxShadow: "8px 8px 0 var(--ink)", outline: "1.5px solid var(--ink)" }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[.14em] text-paper-400">
                  {t.contact.formName}
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.formNamePh}
                  className="h-[52px] border-0 border-b-[1.5px] border-border-default bg-transparent font-sans text-xl tracking-[-.01em] outline-none placeholder:text-paper-400/60 focus:border-lime"
                />
              </label>
              <label className="flex flex-col gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[.14em] text-paper-400">
                  {t.contact.formEmail}
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder={t.contact.formEmailPh}
                  className="h-[52px] border-0 border-b-[1.5px] bg-transparent font-sans text-xl tracking-[-.01em] outline-none placeholder:text-paper-400/60 focus:border-lime"
                  style={{ borderBottomColor: error ? "#E5372B" : undefined }}
                />
                {error && (
                  <span className="font-sans text-[13px]" style={{ color: "#E5372B" }}>
                    {error}
                  </span>
                )}
              </label>
            </div>

            <label className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] uppercase tracking-[.14em] text-paper-400">
                {t.contact.formBudget}
              </span>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="h-[52px] cursor-pointer border-0 border-b-[1.5px] border-border-default bg-transparent font-sans text-xl outline-none focus:border-lime"
              >
                <option value="" disabled className="bg-ink">
                  {t.contact.formBudgetPh}
                </option>
                {t.contact.budgetOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-ink">
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] uppercase tracking-[.14em] text-paper-400">
                {t.contact.formProject}
              </span>
              <textarea
                required
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder={t.contact.formProjectPh}
                rows={3}
                className="resize-y border-0 border-b-[1.5px] border-border-default bg-transparent py-3 font-sans text-xl leading-[1.45] outline-none placeholder:text-paper-400/60 focus:border-lime"
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <label className="inline-flex items-center gap-3 font-sans text-[15px]">
                <span className="relative inline-flex">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="absolute h-0 w-0 opacity-0"
                  />
                  <span
                    className="grid h-[22px] w-[22px] flex-none place-items-center rounded-[6px] text-ink transition-all"
                    style={{
                      border: `1.5px solid ${consent ? "var(--lime)" : "var(--border-default)"}`,
                      background: consent ? "var(--lime)" : "transparent",
                    }}
                  >
                    {consent && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6 9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </span>
                {t.contact.consent}
              </label>

              <button
                type="submit"
                disabled={!consent || isSending}
                aria-busy={isSending}
                className="inline-flex h-11 items-center gap-2.5 rounded-full border border-ink bg-lime px-5 font-sans text-[15px] font-semibold text-ink transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isSending ? t.contact.sending : t.contact.submit}
                <ArrowRight className="h-[18px] w-[18px]" />
              </button>
            </div>
            {submitError && (
              <p role="alert" className="font-sans text-sm text-[#FF8575]">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>

      <Toast
        open={toastOn}
        title={t.contact.toastTitle}
        message={t.contact.toastMessage}
        onClose={() => setToastOn(false)}
      />
    </section>
  );
}
