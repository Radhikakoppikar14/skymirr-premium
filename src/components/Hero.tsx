import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { LATEST_NEWS, COMPANY_INFO } from "../data/skymirrData";
import { usePrefersReducedMotion } from "./fx/useReducedMotion";
import { SlideBackdrop } from "./fx/SlideBackdrop";

interface HeroProps {
  onExploreProducts: () => void;
  onExploreTechnology: () => void;
  onNavigateDetail?: (detail: string) => void;
}

const SLIDES = [
  { id: "slider-1", title: "SkyMirr's Next-Generation Antennas", image: "/images/slider2.jpg", target: "products" },
  { id: "slider-2", title: "Sky5G is now AT&T certified", image: "/images/slider1.jpg", target: "sky5g-router" },
  { id: "slider-3", title: "Our Products", image: "/images/our-products-768x473.png", target: "products" },
];
const SLIDE_MS = 6500;

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onExploreTechnology, onNavigateDetail }) => {
  const [slide, setSlide] = useState(0);
  const [news, setNews] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = SLIDES.length;

  const go = useCallback((d: number) => setSlide((p) => (p + d + total) % total), [total]);

  useEffect(() => {
    if (!reduced || paused) return;
    const t = setInterval(() => go(1), SLIDE_MS);
    return () => clearInterval(t);
  }, [reduced, paused, go]);

  useEffect(() => {
    const t = setInterval(() => setNews((p) => (p + 1) % LATEST_NEWS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const open = (target: string) => {
    if (target === "sky5g-router" && onNavigateDetail) onNavigateDetail("sky5g-router");
    else onExploreProducts();
  };

  // 3D tilt on the banner stage (pointer devices only)
  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== "mouse" || !stage.current) return;
    const r = stage.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    stage.current.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    stage.current.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
    stage.current.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    stage.current.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
  };
  const onLeave = () => {
    setPaused(false);
    stage.current?.style.setProperty("--rx", "0deg");
    stage.current?.style.setProperty("--ry", "0deg");
  };

  const item = LATEST_NEWS[news] ?? LATEST_NEWS[0];
  const words = SLIDES[slide].title.split(" ");

  return (
    <section className="hz no-reveal" data-no-motion>
      <SlideBackdrop index={slide} />

      <div className="hz-wrap hz-split">
        {/* Left: text */}
        <div className="hz-copy">
          <a href={item?.link || "#"} target="_blank" rel="noreferrer" className="hz-chip">
            <i aria-hidden="true" />
            <b>Latest</b>
            <span key={news} className="hz-chip-text">{item?.title}</span>
            <ArrowUpRight aria-hidden="true" />
          </a>

          <h1 key={slide} className="hz-title" aria-live="polite">
            {words.map((wd, i) => (
              <span key={i} className="hz-word" style={{ ["--i" as string]: i }}>{wd}&nbsp;</span>
            ))}
          </h1>

          <p key={`s${slide}`} className="hz-sub">{COMPANY_INFO.tagline}</p>

          <div className="hz-actions">
            <button type="button" className="hz-btn hz-btn-primary sm-magnetic" onClick={onExploreProducts}>
              <span>Explore product catalog</span><ArrowRight aria-hidden="true" />
            </button>
            <button type="button" className="hz-btn hz-btn-ghost" onClick={onExploreTechnology}>
              <span>Our technology</span>
            </button>
          </div>

          <div className="hz-nav" role="tablist" aria-label="Slides">
            <button type="button" className="hz-arrow" onClick={() => go(-1)} aria-label="Previous slide"><ChevronLeft /></button>
            <button type="button" className="hz-arrow" onClick={() => go(1)} aria-label="Next slide"><ChevronRight /></button>
          </div>
        </div>

        {/* Right: media */}
        <div
          ref={stage}
          className="hz-stage"
          onPointerMove={onMove}
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={onLeave}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current; touchX.current = null;
            if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
          }}
        >
          <div className="hz-stack" aria-hidden="true" />
          <div className="hz-frame">
            {SLIDES.map((sl, i) => (
              <button
                type="button"
                key={sl.id}
                className="hz-slide"
                data-active={i === slide || undefined}
                aria-hidden={i !== slide}
                tabIndex={i === slide ? 0 : -1}
                onClick={() => open(sl.target)}
                aria-label={sl.title}
              >
                <img className="hz-bgimg" src={sl.image} alt="" aria-hidden="true" />
                <img className="hz-fgimg" src={sl.image} alt={i === slide ? sl.title : ""} loading={i === 0 ? "eager" : "lazy"} />
              </button>
            ))}
            <span className="hz-sheen" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};