import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, CheckCircle2, Mail, X } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const dialogRef = useRef<HTMLElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [mailDraft, setMailDraft] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    setSubmitted(false);
    setMailDraft("");
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const focusFrame = window.requestAnimationFrame(() => firstFieldRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(focusFrame);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0B1F3A]/65 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        aria-describedby="contact-popup-description"
        className="relative max-h-[min(90vh,760px)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#D7783B] bg-white p-6 text-[#0B1F3A] sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#D7783B] hover:bg-[#FFF3E9] hover:text-[#A84915]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-7 pr-12">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D7783B] bg-[#FFF3E9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#A84915]">
            <Mail className="h-3.5 w-3.5" />
            Contact SkyMirr
          </span>
          <h2 id="contact-popup-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let's talk about your project.
          </h2>
          <p id="contact-popup-description" className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
            Tell our team what you need and we'll connect you with the right SkyMirr specialist.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-[#D7783B] bg-[#FFF3E9] p-6 text-center" role="status">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[#BF541B]" />
            <h3 className="mt-3 text-lg font-bold">Thank you for reaching out.</h3>
            <p className="mt-1 text-sm text-slate-600">
              Your email app should open with the inquiry details. Send the draft to complete your request.
            </p>
            {mailDraft && (
              <a href={mailDraft} className="mt-2 inline-block text-sm font-semibold text-[#A84915] underline underline-offset-4">
                Open the email draft
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-xl bg-[#BF541B] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#A84915]"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              const values = new FormData(event.currentTarget);
              const subject = "SkyMirr project inquiry";
              const body = [
                `Name: ${values.get("name") ?? ""}`,
                `Work email: ${values.get("email") ?? ""}`,
                `Company: ${values.get("company") || "Not provided"}`,
                `Interest: ${values.get("interest") ?? ""}`,
                "",
                "Message:",
                `${values.get("message") ?? ""}`,
              ].join("\n");
              const draft = `mailto:sales@skymirr.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              setMailDraft(draft);
              setSubmitted(true);
              window.location.href = draft;
            }}
          >
            <label className="space-y-1.5 text-xs font-semibold text-slate-700">
              <span>Name</span>
              <input
                ref={firstFieldRef}
                name="name"
                type="text"
                autoComplete="name"
                required
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-[#0B1F3A] outline-none transition-colors focus:border-[#D7783B]"
              />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-slate-700">
              <span>Work email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-[#0B1F3A] outline-none transition-colors focus:border-[#D7783B]"
              />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-slate-700">
              <span>Company <span className="font-normal text-slate-500">(optional)</span></span>
              <input
                name="company"
                type="text"
                autoComplete="organization"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-[#0B1F3A] outline-none transition-colors focus:border-[#D7783B]"
              />
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-slate-700">
              <span>What are you interested in?</span>
              <select
                name="interest"
                defaultValue="Sub-6 Antennas"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-[#0B1F3A] outline-none transition-colors focus:border-[#D7783B]"
              >
                <option>Sub-6 Antennas</option>
                <option>Sky5G Routers</option>
                <option>Asset Trackers</option>
                <option>Custom RF Engineering</option>
                <option>Other</option>
              </select>
            </label>
            <label className="space-y-1.5 text-xs font-semibold text-slate-700 sm:col-span-2">
              <span>Message</span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-[#0B1F3A] outline-none transition-colors focus:border-[#D7783B]"
              />
            </label>
            <div className="flex flex-col-reverse items-start justify-between gap-3 pt-1 sm:col-span-2 sm:flex-row sm:items-center">
              <a href="mailto:sales@skymirr.com" className="text-xs font-medium text-slate-600 underline decoration-[#D7783B] underline-offset-4 hover:text-[#A84915]">
                Or email sales@skymirr.com
              </a>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#BF541B] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#A84915]"
              >
                Send inquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>,
    document.body
  );
};
