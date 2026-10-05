import React from "react";

/**
 * Decor layer for every inner-page banner (aria-hidden, click-through).
 * Engineering grid, two drifting light orbs, a slow conic "radar" sweep,
 * a few signal dots and a glowing bottom edge. CSS lives in fx.css (.bfx-*).
 */
export const BannerFX: React.FC = () => (
  <div aria-hidden="true" className="bfx pointer-events-none absolute inset-0 overflow-hidden">
    <div className="bfx-grid" />
    <div className="bfx-orb bfx-orb-a" />
    <div className="bfx-orb bfx-orb-b" />
    <div className="bfx-radar" />
    <span className="bfx-dot" style={{ left: "12%", top: "28%", animationDelay: "0s" }} />
    <span className="bfx-dot" style={{ left: "84%", top: "22%", animationDelay: "1.4s" }} />
    <span className="bfx-dot" style={{ left: "70%", top: "72%", animationDelay: "2.6s" }} />
    <span className="bfx-dot" style={{ left: "24%", top: "76%", animationDelay: "3.8s" }} />
    <div className="bfx-edge" />
  </div>
);