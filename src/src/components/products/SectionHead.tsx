import React from "react";
import type { LucideIcon } from "lucide-react";

/** Pointer spotlight: sets --mx/--my on the hovered element (used by .pd-spot-card). */
export const spot = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};

interface Props {
  icon: LucideIcon;
  title: string;
  kicker?: string;
  right?: React.ReactNode;
}

/** Shared heading for every section on a product detail page. */
export const SectionHead: React.FC<Props> = ({ icon: Icon, title, kicker, right }) => (
  <div className="pd-sec-head">
    <div className="pd-sec-icon" aria-hidden="true">
      <Icon className="h-5 w-5" />
    </div>
    <div className="min-w-0 flex-1">
      {kicker && <p className="pd-sec-kicker">{kicker}</p>}
      <h2 className="pd-sec-title">{title}</h2>
    </div>
    {right}
  </div>
);