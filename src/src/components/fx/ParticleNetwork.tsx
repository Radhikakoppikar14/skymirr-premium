import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./useReducedMotion";

interface Props {
  /** RGB triplet, e.g. "134,174,250" */
  rgb?: string;
  /** nodes per 10,000 px² of area */
  density?: number;
  /** max distance (px) at which two nodes get linked */
  linkDistance?: number;
  className?: string;
}

/**
 * Drifting node-and-link network (IoT / mesh feel).
 * Nodes lean toward the cursor, pause when off-screen or tab hidden, and
 * render one static frame under prefers-reduced-motion.
 */
export const ParticleNetwork: React.FC<Props> = ({
  rgb = "24,166,190",
  density = 0.55,
  linkDistance = 130,
  className = "",
}) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      raf = 0,
      visible = true;
    const mouse = { x: -9999, y: -9999 };
    type N = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: N[] = [];

    const seed = () => {
      const count = Math.min(90, Math.round((w * h) / 10000 * density));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          const dx = mouse.x - n.x,
            dy = mouse.y - n.y,
            d = Math.hypot(dx, dy);
          if (d < 160 && d > 1) {
            n.x += (dx / d) * 0.35;
            n.y += (dy / d) * 0.35;
          }
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},0.75)`;
        ctx.fill();
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDistance) {
            ctx.strokeStyle = `rgba(${rgb},${(1 - d / linkDistance) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      if (visible && !document.hidden) draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(parent);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    if (reduced) draw();
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [rgb, density, linkDistance, reduced]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};
