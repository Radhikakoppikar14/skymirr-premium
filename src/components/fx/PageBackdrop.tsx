import React from "react";

interface PageBackdropProps {
  /** Kept for backwards compatibility – every page now uses the same banner image. */
  variant?: "default" | "illustration";
}

/* Top-of-page background for ALL inner pages: /public/images/downloaded/banner.jpg */
export const PageBackdrop: React.FC<PageBackdropProps> = () => (
  <div aria-hidden="true" className="hz-bg page-art-backdrop">
    <img className="page-art-backdrop-image" src="/images/downloaded/banner.jpg" alt="" />
    <div className="page-art-backdrop-shade" />
  </div>
);
