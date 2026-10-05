import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "./useReducedMotion";

/* ------------------------------------------------------------------ */
/* Wireframe cube – rotates on all axes (pure CSS 3D)                  */
/* ------------------------------------------------------------------ */
export const WireCube: React.FC<{ size?: number; className?: string }> = ({
  size = 72,
  className = "",
}) => {
  const half = size / 2;
  const faces = [
    `rotateY(0deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ];
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size, perspective: 700 }}
    >
      <div className="fx-spin3d relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
        {faces.map((t, i) => (
          <span
            key={i}
            className="absolute inset-0"
            style={{
              transform: t,
              border: "1.5px solid rgba(145,214,227,0.75)",
              background:
                "linear-gradient(135deg, rgba(24,166,190,0.22), rgba(8,127,152,0.12))",
              backdropFilter: "blur(1px)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Folding panel – three hinged plates that fold and unfold like a     */
/* folding antenna / solar array                                        */
/* ------------------------------------------------------------------ */
export const FoldingPanel: React.FC<{
  plate?: number;
  height?: number;
  className?: string;
}> = ({ plate = 46, height = 110, className = "" }) => {
  const face: React.CSSProperties = {
    width: plate,
    height,
    border: "1.5px solid rgba(145,214,227,0.7)",
    background:
      "linear-gradient(160deg, rgba(24,166,190,0.30), rgba(8,127,152,0.14))",
    boxShadow: "inset 0 0 18px rgba(145,214,227,0.22)",
  };
  const hinge = (extra: React.CSSProperties = {}): React.CSSProperties => ({
    position: "absolute",
    left: "100%",
    top: 0,
    transformOrigin: "left center",
    transformStyle: "preserve-3d",
    ...extra,
  });
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{ perspective: 800, width: plate * 3, height }}
    >
      <div
        className="fx-tilt-slow relative"
        style={{ transformStyle: "preserve-3d", width: plate, height }}
      >
        <div style={{ ...face, position: "relative" }}>
          <div className="fx-fold-a" style={hinge()}>
            <div style={face}>
              <div className="fx-fold-b" style={hinge()}>
                <div style={face} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Small floating chips / hexagons that bob and rotate                 */
/* ------------------------------------------------------------------ */
export const FloatChip: React.FC<{
  size?: number;
  shape?: "square" | "ring" | "hex";
  delay?: number;
  className?: string;
}> = ({ size = 22, shape = "square", delay = 0, className = "" }) => {
  const base: React.CSSProperties = {
    width: size,
    height: size,
    animationDelay: `${delay}s`,
  };
  if (shape === "ring")
    return (
      <span
        aria-hidden="true"
        className={`fx-float-chip pointer-events-none rounded-full ${className}`}
        style={{ ...base, border: "2px solid rgba(145,214,227,0.65)" }}
      />
    );
  if (shape === "hex")
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`fx-float-chip pointer-events-none ${className}`}
        style={base}
      >
        <polygon
          points="12,2 21,7 21,17 12,22 3,17 3,7"
          fill="rgba(24,166,190,0.18)"
          stroke="rgba(145,214,227,0.85)"
          strokeWidth="1.5"
        />
      </svg>
    );
  return (
    <span
      aria-hidden="true"
      className={`fx-float-chip pointer-events-none rounded-md ${className}`}
      style={{
        ...base,
        background: "rgba(24,166,190,0.22)",
        border: "1.5px solid rgba(145,214,227,0.6)",
      }}
    />
  );
};

/* ------------------------------------------------------------------ */
/* Mouse-parallax wrapper: children drift opposite to the cursor       */
/* ------------------------------------------------------------------ */
export const ParallaxLayer: React.FC<{
  strength?: number;
  className?: string;
  children: React.ReactNode;
}> = ({ strength = 20, className = "", children }) => {
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const x = useTransform(sx, (v) => v * strength);
  const y = useTransform(sy, (v) => v * strength);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, mx, my]);

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
};
