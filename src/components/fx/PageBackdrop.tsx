import React from "react";

interface PageBackdropProps {
  /** Kept for backwards compatibility – every page uses the same hero background. */
  variant?: "default" | "illustration";
}

/* Hero background for ALL inner pages: same looping video + soft blue tint
   as the Products page banner (/public/assets/slider-background.mp4). */
export const PageBackdrop: React.FC<PageBackdropProps> = () => (
  <div aria-hidden="true" className="hz-bg page-art-backdrop">
    <video
      className="page-art-backdrop-video"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/assets/slider-background.mp4" type="video/mp4" />
    </video>
    <div className="page-art-backdrop-tint" />
  </div>
);
