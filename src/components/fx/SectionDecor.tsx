import React from "react";
import { FloatChip } from "./FloatingObjects";

interface Props {
  children: React.ReactNode;
  /** which side the large blob sits on */
  side?: "left" | "right";
  className?: string;
}

/**
 * Wraps a LIGHT section and floats soft blue/indigo glows and a few outlined
 * shapes over it. Children are untouched; decor is aria-hidden and click-through.
 */
export const SectionDecor: React.FC<Props> = ({ children, side = "right", className = "" }) => (
  <div className={`relative isolate overflow-hidden ${className}`}>
    {/* decor sits BEHIND the content so it can never dot or tint text, cards or images */}
    <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="fx-wash" />
      <svg className="fx-waves" viewBox="0 0 1440 220" preserveAspectRatio="none">
        <path className="fx-wave fx-wave-a" d="M0 120 C 120 60 240 60 360 120 S 600 180 720 120 S 960 60 1080 120 S 1320 180 1440 120 S 1680 60 1800 120 S 2040 180 2160 120" />
        <path className="fx-wave fx-wave-b" d="M0 140 C 120 190 240 190 360 140 S 600 90 720 140 S 960 190 1080 140 S 1320 90 1440 140 S 1680 190 1800 140 S 2040 90 2160 140" />
      </svg>
      <span className="fx-orbit" />
      <div className="fx-hairline" />
      <div className="fx-dots absolute inset-0" />
      <div className="fx-streak" />
      <span
        data-scroll-speed="0.05"
        className={`fx-blob absolute w-[420px] h-[420px] rounded-full ${side === "right" ? "-right-40 top-10" : "-left-40 top-10"}`}
        style={{ background: "radial-gradient(circle, rgba(24,166,190,0.15), transparent 65%)" }}
      />
      <span
        data-scroll-speed="-0.04"
        className={`fx-blob-b absolute w-[360px] h-[360px] rounded-full ${side === "right" ? "-left-32 bottom-10" : "-right-32 bottom-10"}`}
        style={{ background: "radial-gradient(circle, rgba(8,127,152,0.13), transparent 65%)" }}
      />
      <div className="hidden md:block">
        <FloatChip shape="ring" size={22} className={`absolute top-24 ${side === "right" ? "right-[6%]" : "left-[6%]"} !border-[#18A6BE]/60`} />
        <FloatChip shape="hex" size={26} delay={1.6} className={`absolute bottom-32 ${side === "right" ? "left-[5%]" : "right-[5%]"} opacity-75 [&_polygon]:!stroke-[#087F98]`} />
        <FloatChip shape="square" size={14} delay={2.8} className="absolute top-1/2 right-[3%] !border-[#18A6BE]/60 !bg-[#D7EEF3]/40" />
      </div>
    </div>
    <div className="relative z-[1]">{children}</div>
  </div>
);