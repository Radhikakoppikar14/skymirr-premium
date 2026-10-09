import React, { useCallback, useEffect, useState } from "react";
import { COMPANY_INFO } from "../../data/skymirrData";

type Phase = "show" | "out" | "gone";

/* Page-load logo reveal. Total run time ~1.1 s, skippable by click / key / button,
   shown once per browser session, never shown with prefers-reduced-motion. */
export const IntroLoader: React.FC = () => {
  const [phase, setPhase] = useState<Phase>(() => {
    if (typeof window === "undefined") return "gone";
    try {
      if (sessionStorage.getItem("sm-intro")) return "gone";
    } catch { /* storage blocked: just play it */ }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "gone";
    return "show";
  });

  const skip = useCallback(() => setPhase((p) => (p === "show" ? "out" : p)), []);

  useEffect(() => {
    if (phase === "gone") return;
    try { sessionStorage.setItem("sm-intro", "1"); } catch { /* ignore */ }
    const t1 = window.setTimeout(skip, 850);
    const t2 = window.setTimeout(() => setPhase("gone"), phase === "out" ? 260 : 1100);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip(); };
    window.addEventListener("keydown", onKey);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); window.removeEventListener("keydown", onKey); };
  }, [phase, skip]);

  if (phase === "gone") return null;

  return (
    <div className="sm-intro" data-phase={phase} onClick={skip} role="presentation">
      <div className="sm-intro-glow" aria-hidden="true" />
      <img src={COMPANY_INFO.logo} alt="SkyMirr" className="sm-intro-logo" />
      <span className="sm-intro-bar" aria-hidden="true" />
      <button type="button" className="sm-intro-skip" onClick={skip}>Skip</button>
    </div>
  );
};
