import React, { useEffect, useRef, useState } from "react";
import { COMPANY_INFO } from "../../data/skymirrData";

/* Modern layered background (hero + inner pages):
   1. slider artwork, blurred, slowly drifting and cross-fading with the slide
   2. soft morphing mesh-gradient glows in the brand blues
   3. dot grid that lights up around the cursor (spotlight)
   4. huge outlined slogan drifting slowly (fills the space without clutter)
   5. fine film grain + bottom horizon glow
   Calm by design: no lines or particles crossing the content. */
export const SLIDE_BG = ["/images/slider2.jpg", "/images/slider1.jpg", "/images/our-products-768x473.png"];

export const SlideBackdrop: React.FC<{ index?: number; cycleMs?: number }> = ({ index, cycleMs = 7000 }) => {
  const [auto, setAuto] = useState(0);
  const host = useRef<HTMLDivElement>(null);
  const controlled = typeof index === "number";

  useEffect(() => {
    if (controlled) return;
    const t = setInterval(() => setAuto((p) => (p + 1) % SLIDE_BG.length), cycleMs);
    return () => clearInterval(t);
  }, [controlled, cycleMs]);

  // cursor spotlight (pointer devices only)
  useEffect(() => {
    const el = host.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const on = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener("pointermove", on, { passive: true });
    return () => { window.removeEventListener("pointermove", on); cancelAnimationFrame(raf); };
  }, []);

  const active = controlled ? (index as number) : auto;

  return (
    <div ref={host} aria-hidden="true" className="hz-bg sb">
      {SLIDE_BG.map((src, i) => (
        <img key={src} src={src} alt="" className="sb-img" data-active={i === active || undefined} data-alt={i % 2 || undefined} />
      ))}
      <div className="sb-shade" />
      <div className="sb-mesh"><i /><i /><i /><i /></div>
      <div className="sb-marq">
        {[0, 1].map((row) => (
          <div key={row} className="sb-marq-row" data-row={row}>
            {Array.from({ length: 8 }).map((_, n) => <span key={n}>{COMPANY_INFO.slogan}</span>)}
          </div>
        ))}
      </div>
      <div className="sb-grain" />
      <div className="hz-vignette" />
    </div>
  );
};