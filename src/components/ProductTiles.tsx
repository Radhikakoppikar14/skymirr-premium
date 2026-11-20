import React, { useEffect, useRef, useState } from "react";

interface ProductTilesProps {
  onSelect?: (id: "antennas" | "routers" | "trackers") => void;
}

const TILES = [
  { id: "antennas" as const, label: "ANTENNAS", image: "/images/antennas-new.png" },
  { id: "routers" as const, label: "5G ROUTERS", image: "/images/5g-routers-new.png" },
  { id: "trackers" as const, label: "ASSET TRACKERS", image: "/images/asset-trackers-new.png" },
];

/* Typewriter: types the text out letter by letter once `start` is true. */
const useTyping = (text: string, start: boolean, speed = 90, delay = 0) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(text.length); return; }
    let i = 0;
    let iv = 0;
    const t = window.setTimeout(() => {
      iv = window.setInterval(() => {
        i += 1;
        setN(i);
        if (i >= text.length) window.clearInterval(iv);
      }, speed);
    }, delay);
    return () => { window.clearTimeout(t); window.clearInterval(iv); };
  }, [start, text, speed, delay]);
  return { shown: text.slice(0, n), done: n >= text.length };
};

const Typed: React.FC<{ text: string; start: boolean; speed?: number; delay?: number }> = ({ text, start, speed, delay }) => {
  const { shown, done } = useTyping(text, start, speed, delay);
  return (
    <>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={`sm-type-caret${done ? " is-done" : ""}`} />
    </>
  );
};

export const ProductTiles: React.FC<ProductTilesProps> = ({ onSelect }) => {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStart(true); io.disconnect(); } },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="sm-tiles" aria-labelledby="sm-tiles-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="sm-tiles-title" className="sm-tiles-title" data-no-motion data-sa-skip>
          <Typed text="PRODUCTS" start={start} speed={110} />
        </h2>
        <div className="sm-tiles-grid">
          {TILES.map((tile) => (
            <button
              key={tile.id}
              type="button"
              className="sm-tile"
              onClick={() => onSelect?.(tile.id)}
              aria-label={tile.label}
            >
              <img src={tile.image} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};