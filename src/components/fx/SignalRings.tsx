import React from "react";

interface Props {
  className?: string;
  /** number of concentric waves */
  waves?: number;
  /** CSS colour for the strokes */
  color?: string;
}

/** Concentric rings that radiate outward like an antenna broadcasting. */
export const SignalRings: React.FC<Props> = ({
  className = "",
  waves = 4,
  color = "rgba(24,166,190,0.55)",
}) => (
  <div
    aria-hidden="true"
    className={`absolute pointer-events-none ${className}`}
    style={{ aspectRatio: "1 / 1" }}
  >
    {Array.from({ length: waves }).map((_, i) => (
      <span
        key={i}
        className="fx-ring absolute inset-0 rounded-full"
        style={{
          border: `1.5px solid ${color}`,
          animationDelay: `${(i * 5) / waves}s`,
        }}
      />
    ))}
    <span
      className="absolute left-1/2 top-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ background: color, boxShadow: `0 0 18px 4px ${color}` }}
    />
  </div>
);
