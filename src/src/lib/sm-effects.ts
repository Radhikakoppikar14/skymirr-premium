/**
 * SkyMirr interaction effects (presentation only, no text/data touched).
 *  - cursor-following spotlight border-glow on cards (auto-tags small bordered cards on first hover)
 *  - 3D tilt on [data-tilt]
 *  - magnetic pull on .sm-magnetic / .sm-cta buttons
 * One delegated pointermove listener. Fine-pointer devices only; skipped for reduced motion.
 */
export function initSmEffects() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const CARD = '[class*="rounded-2xl"][class*="border"],[class*="rounded-3xl"][class*="border"],.sm-spot';
  const MAGNET = ".sm-magnetic,.sm-cta";
  let raf = 0;

  const onMove = (e: PointerEvent) => {
    const t = e.target as HTMLElement | null;
    if (!t || !t.closest) return;
    const x = e.clientX, y = e.clientY;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;

      /* spotlight */
      const card = t.closest<HTMLElement>(CARD);
      if (card) {
        if (!card.classList.contains("sm-spot") && !card.dataset.smSkip) {
          const r0 = card.getBoundingClientRect();
          const small = r0.width <= 620 && r0.height <= 700;
          const placed = getComputedStyle(card).position !== "static";
          if (small && placed && !card.closest("form,[role='dialog'],header")) card.classList.add("sm-spot", "sm-card");
          else card.dataset.smSkip = "1";
        }
        if (card.classList.contains("sm-spot")) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${x - r.left}px`);
          card.style.setProperty("--my", `${y - r.top}px`);
        }
      }

      /* tilt */
      const tilt = t.closest<HTMLElement>("[data-tilt]");
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (x - r.left) / r.width - 0.5, py = (y - r.top) / r.height - 0.5;
        tilt.style.setProperty("--ry", `${(px * 8).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-py * 8).toFixed(2)}deg`);
      }

      /* magnetic */
      const mag = t.closest<HTMLElement>(MAGNET);
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = (x - (r.left + r.width / 2)) * 0.22, dy = (y - (r.top + r.height / 2)) * 0.3;
        mag.style.setProperty("--tx", `${Math.max(-8, Math.min(8, dx)).toFixed(1)}px`);
        mag.style.setProperty("--ty", `${Math.max(-6, Math.min(6, dy)).toFixed(1)}px`);
      }
    });
  };

  const onOut = (e: PointerEvent) => {
    const from = e.target as HTMLElement | null;
    if (!from || !from.closest) return;
    const to = e.relatedTarget as Node | null;
    const tilt = from.closest<HTMLElement>("[data-tilt]");
    if (tilt && !(to && tilt.contains(to))) { tilt.style.setProperty("--rx", "0deg"); tilt.style.setProperty("--ry", "0deg"); }
    const mag = from.closest<HTMLElement>(MAGNET);
    if (mag && !(to && mag.contains(to))) { mag.style.setProperty("--tx", "0px"); mag.style.setProperty("--ty", "0px"); }
  };

  document.addEventListener("pointermove", onMove, { passive: true });
  document.addEventListener("pointerout", onOut, { passive: true });
}
