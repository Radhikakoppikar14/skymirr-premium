import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ShieldCheck, Play, ArrowUpRight } from "lucide-react";
import { PARTNERS_DATA } from "../data/skymirrData";

interface PartnersSectionProps {
  onExploreProducts?: () => void;
}


/* Endless, gentle auto-scroll for a logo strip. The strip renders its logos twice, so when the
   first set has fully passed we jump back by exactly one set (seamless loop). Pauses on hover,
   touch, keyboard focus and briefly after the arrow buttons; manual scrolling still works.
   Does nothing under prefers-reduced-motion. */
const MARQUEE_PX_PER_SEC = 38;
const MARQUEE_MASK = "linear-gradient(90deg, transparent 0, #000 4%, #000 96%, transparent 100%)";

function useMarquee(ref: React.RefObject<HTMLDivElement | null>, resumeKey: string) {
  const paused = useRef(false);
  const holdUntil = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft;
    let onScreen = true;

    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; });
    io.observe(el);

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const half = el.scrollWidth / 2;
      if (!paused.current && onScreen && !document.hidden && now > holdUntil.current && half > el.clientWidth) {
        pos += (MARQUEE_PX_PER_SEC * dt) / 1000;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      } else {
        pos = el.scrollLeft; // follow manual / arrow scrolling so resuming never jumps
        if (half > 0 && pos >= half) { pos -= half; el.scrollLeft = pos; }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [ref, resumeKey]);

  return {
    hold: (ms = 1600) => { holdUntil.current = performance.now() + ms; },
    handlers: {
      onMouseEnter: () => { paused.current = true; },
      onMouseLeave: () => { paused.current = false; },
      onTouchStart: () => { paused.current = true; },
      onTouchEnd: () => { holdUntil.current = performance.now() + 1500; paused.current = false; },
      onFocus: () => { paused.current = true; },
      onBlur: () => { paused.current = false; },
    },
  };
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onExploreProducts,
}) => {
  const onlineScrollRef = useRef<HTMLDivElement>(null);
  const distScrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"retail" | "carriers">("retail");
  const onlineMarquee = useMarquee(onlineScrollRef, activeTab);
  const distMarquee = useMarquee(distScrollRef, activeTab);

  const scrollLeftOnline = () => {
    onlineMarquee.hold();
    onlineScrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };
  const scrollRightOnline = () => {
    onlineMarquee.hold();
    onlineScrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  const scrollLeftDist = () => {
    distMarquee.hold();
    distScrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };
  const scrollRightDist = () => {
    distMarquee.hold();
    distScrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  const getPartnerUrl = (name: string): string => {
    const lower = name.toLowerCase();
    if (lower.includes("amazon")) return "https://www.amazon.com/s?k=skymirr";
    if (lower.includes("digikey")) return "https://www.digikey.com/en/supplier-centers/skymirr";
    if (lower.includes("walmart")) return "https://www.walmart.com/search?q=skymirr";
    return "#";
  };

  const smallArrow =
    "w-9 h-9 rounded-xl hover:bg-[#E8F0FE] text-[#5B6B82] hover:text-[#1F4FD8] flex items-center justify-center transition-colors cursor-pointer border border-[#E3D4BA] bg-white shadow-2xs";

  return (
    <div className="space-y-0">
      
      {/* ========================================================
          PART 1: TAKE A CLOSER LOOK — LAB DEMO VIDEO THEATER
          ======================================================== */}
      <section
        id="demo-video"
        className="relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: High-Definition Video Player in Studio Bezel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden border-2 border-[#4C8DF6]/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#0B1F3A]">
              <video
                controls
                poster="/images/disocver-skymirr.jpg"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://skymirr.com/wp-content/uploads/2026/01/Discover_SkyMirr.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="absolute top-3 left-3 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#0B1F3A]/90 backdrop-blur-md text-[10px] font-mono font-bold text-[#4C8DF6] uppercase tracking-wider border border-[#4C8DF6]/40 shadow-sm">
                  Songdo 3D Chamber Testing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Context & Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] text-[#C9D6EE] border border-[#4C8DF6]/40 text-[11px] font-mono uppercase tracking-[0.2em] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#4C8DF6]" />
              05 &middot; R&amp;D Laboratory
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans leading-tight">
              TAKE A CLOSER LOOK....
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#C9D6EE] leading-relaxed font-normal">
              <p>
                For decades, wireless engineers fought antenna coupling as a destructive parasite that causes return loss, detuning, and signal cancellation. SkyMirr inverted the paradigm.
              </p>
              <p>
                <strong className="text-white font-bold">MuLCAT® uses positive electromagnetic coupling</strong> through proprietary multi-layer dielectric resonator geometries. Rather than isolating elements with bulky chokes or lossy shielding, MuLCAT® constructively aligns the phase of adjacent fields to amplify radiation efficiency and multiply usable bandwidth.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#4C8DF6]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4C8DF6]" />
                <span>Songdo 3D Spherical Facility</span>
              </div>
              <span className="text-white/30">•</span>
              <span>Full 3D Spherical Anechoic Chamber</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          PART 2: GLOBAL PARTNERS & CERTIFIED DISTRIBUTION
          ======================================================== */}
      <section
        id="partners"
        className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-[#E3D4BA] text-[#0b1f3a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E3D4BA] pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1F4FD8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F4FD8] animate-ping" />
                06 &middot; Global Ecosystem
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-sans text-[#0b1f3a]">
                Trusted by Leaders &amp; Global Networks.
              </h2>

              <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed font-normal">
                SkyMirr RF hardware and antenna systems are stocked by premier industrial distributors and certified across Tier-1 carriers worldwide.
              </p>
            </div>

            {/* Tab switch between Online Retailers & Carrier Networks */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("retail")}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "retail"
                    ? "bg-[#1F4FD8] text-white shadow-md shadow-[#1F4FD8]/20"
                    : "bg-white text-[#5B6B82] hover:text-[#0b1f3a] border border-[#E3D4BA]"
                }`}
              >
                Online Retailers
              </button>
              <button
                onClick={() => setActiveTab("carriers")}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "carriers"
                    ? "bg-[#1F4FD8] text-white shadow-md shadow-[#1F4FD8]/20"
                    : "bg-white text-[#5B6B82] hover:text-[#0b1f3a] border border-[#E3D4BA]"
                }`}
              >
                Carrier &amp; Regional
              </button>
            </div>
          </div>

          {/* Partner Showcase Strip */}
          {activeTab === "retail" ? (
            <div className="bg-white rounded-3xl border border-[#E3D4BA] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase text-[#0b1f3a] font-mono tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1F4FD8]" />
                    Direct Online Retailers &amp; Catalog Distributors
                  </h3>
                  <span className="text-xs text-[#5B6B82]">Direct inventory with verified overnight shipping</span>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={scrollLeftOnline} className={smallArrow} aria-label="Scroll left partners">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={scrollRightOnline} className={smallArrow} aria-label="Scroll right partners">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div
                ref={onlineScrollRef}
                {...onlineMarquee.handlers}
                style={{ maskImage: MARQUEE_MASK, WebkitMaskImage: MARQUEE_MASK }}
                className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2"
              >
                {[...PARTNERS_DATA.online, ...PARTNERS_DATA.online].map((partner, idx) => (
                  <a
                    key={idx}
                    href={getPartnerUrl(partner.name)}
                    target="_blank"
                    rel="noreferrer"
                    aria-hidden={idx >= PARTNERS_DATA.online.length || undefined}
                    tabIndex={idx >= PARTNERS_DATA.online.length ? -1 : undefined}
                    className="w-48 sm:w-56 shrink-0 flex flex-col items-center justify-center p-6 h-32 bg-[#FFFFFF] rounded-2xl border border-[#E3D4BA] hover:border-[#4C8DF6] hover:shadow-md transition-all group select-none cursor-pointer"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 w-auto max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#5B6B82] mt-3 group-hover:text-[#1F4FD8] transition-colors font-bold">
                      <span>{partner.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#E3D4BA] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase text-[#0b1f3a] font-mono tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4C8DF6]" />
                    Carrier &amp; Regional Distribution Networks
                  </h3>
                  <span className="text-xs text-[#5B6B82]">Global enterprise logistics &amp; integration</span>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={scrollLeftDist} className={smallArrow} aria-label="Scroll left distributors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={scrollRightDist} className={smallArrow} aria-label="Scroll right distributors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div
                ref={distScrollRef}
                {...distMarquee.handlers}
                style={{ maskImage: MARQUEE_MASK, WebkitMaskImage: MARQUEE_MASK }}
                className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2"
              >
                {[...PARTNERS_DATA.distributors, ...PARTNERS_DATA.distributors].map((dist, idx) => (
                  <div
                    key={idx}
                    aria-hidden={idx >= PARTNERS_DATA.distributors.length || undefined}
                    className="w-48 sm:w-56 shrink-0 flex flex-col items-center justify-center p-6 h-32 bg-[#FFFFFF] rounded-2xl border border-[#E3D4BA] hover:border-[#4C8DF6] hover:shadow-md transition-all group select-none"
                  >
                    <img
                      src={dist.logo}
                      alt={dist.name}
                      className="max-h-12 w-auto max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5B6B82] mt-3 font-bold">
                      {dist.region}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          PART 3: EXPLORE OUR PORTFOLIO — MASTER LINEUP BANNER
          ======================================================== */}
      <section className="py-24 sm:py-32 bg-white border-t border-[#E3D4BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1F4FD8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F4FD8]" />
              07 &middot; Complete Hardware Lineup
            </div>

            <h2 className="text-3xl sm:text-5xl uppercase font-black tracking-tight leading-[1.05] text-[#0b1f3a] font-sans">
              Explore Our Portfolio.
            </h2>

            <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed max-w-md font-normal">
              Explore our complete portfolio of ultra-wideband external connectorized antennas, carrier-certified 5G FWA gateways, and real-time asset telemetry trackers.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 h-13 px-8 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6] hover:from-[#0B1F3A] hover:to-[#1F4FD8] shadow-[0_12px_28px_-10px_rgba(31,79,216,0.5)] cursor-pointer hover:-translate-y-0.5 transition-all"
              >
                <span>See our available products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full flex justify-center py-6">
              <img
                src="/images/our-products.png"
                alt="SkyMirr Full Product Lineup"
                className="relative max-h-80 w-auto object-contain drop-shadow-[0_20px_35px_rgba(11,31,58,0.18)] transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};