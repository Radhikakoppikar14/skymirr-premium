import React, { useEffect, useRef, useState } from "react";

interface Props { prefix?: string; value: number; suffix?: string; duration?: number }

/* Counts from 0 to `value` once, when scrolled into view. Skips animation for reduced motion. */
export const CountUp: React.FC<Props> = ({ prefix = "", value, suffix = "", duration = 900 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? value : 0,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || n === value) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span ref={ref}>{prefix}{n}{suffix}</span>;
};
