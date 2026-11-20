import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface HeroProps {
  onExploreProducts: () => void;
  onExploreTechnology: () => void;
  onNavigateDetail?: (detail: string) => void;
}

interface SlideData {
  id: string;
  kicker: string;
  titleLine1: React.ReactNode;
  titleLine2?: React.ReactNode;
  titleLine3?: React.ReactNode;
  subtitle?: string;
  body?: string;
  badges?: string[];
  productImage: string;
  productAlt: string;
  ctaText: string;
  target: "products" | "sky5g-router";
}

const SLIDES: SlideData[] = [
  {
    id: "slide-sky5g",
    kicker: "WE JUST ACHIEVED ANOTHER MILESTONE",
    titleLine1: <><span className="text-[#8DB4FF]">Sky5G</span> is now</>,
    titleLine2: "AT&T certified",
    body: "With AT&T and T-Mobile certification, SkyMirr gives customers greater choice — and trusted performance and reliability.",
    badges: ["GREATER CONNECTIVITY", "GREATER POSSIBILITIES"],
    productImage: "/images/hero-sky5g-router.png",
    productAlt: "Sky5G wireless router",
    ctaText: "SHOP NOW",
    target: "sky5g-router",
  },
  {
    id: "slide-antennas",
    kicker: "INTRODUCING",
    titleLine1: "SKYMIRR'S",
    titleLine2: "NEXT-GENERATION",
    titleLine3: <span className="text-[#FD4401]">ANTENNAS</span>,
    subtitle: "POWERED BY MuLCAT TECHNOLOGY",
    productImage: "/images/hero-tamp161-antenna.png",
    productAlt: "SkyMirr TAMP161 antenna unit",
    ctaText: "SHOP NOW",
    target: "products",
  },
];

const AUTO_SLIDE_MS = 6500;

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onNavigateDetail,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = SLIDES.length;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide((index + total) % total);
    },
    [total]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, AUTO_SLIDE_MS);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleCtaClick = (target: "products" | "sky5g-router") => {
    if (target === "sky5g-router" && onNavigateDetail) {
      onNavigateDetail("sky5g-router");
    } else {
      onExploreProducts();
    }
  };

  return (
    <div
      className="sky-hero relative w-full overflow-hidden bg-[#071226] select-none text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="SkyMirr featured highlights"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/slider-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071226]/85 via-[#071226]/45 to-transparent md:from-[#071226]/70 md:via-transparent md:to-transparent" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#071226]/80 via-[#071226]/30 to-transparent" />
      </div>

      <div className="sky-hero-track relative z-10 grid w-full">
        {SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              className={`sky-hero-slide relative col-start-1 row-start-1 w-full min-h-[430px] sm:min-h-[460px] md:min-h-[510px] lg:min-h-[550px] flex items-start transition-opacity duration-700 ease-in-out ${
                isActive
                  ? "z-10 opacity-100 delay-300"
                  : "z-0 opacity-0 pointer-events-none delay-0"
              }`}
              aria-hidden={!isActive}
            >
              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:pr-[42vw] lg:px-12 lg:pr-[45vw] pt-20 pb-16 sm:pt-24 sm:pb-20">
                <div className="max-w-xl lg:max-w-2xl space-y-3.5 sm:space-y-4 text-left">
                  <div className="inline-block">
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#FF8A5C] font-sans">
                      {item.kicker}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-white leading-[1.08]">
                    <div className="block">{item.titleLine1}</div>
                    {item.titleLine2 && <div className="block">{item.titleLine2}</div>}
                    {item.titleLine3 && <div className="block">{item.titleLine3}</div>}
                  </h1>

                  {item.subtitle && (
                    <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-slate-200 uppercase font-sans">
                      {item.subtitle}
                    </p>
                  )}

                  {item.body && (
                    <p className="text-xs sm:text-sm md:text-base text-slate-200/95 leading-relaxed max-w-lg font-normal">
                      {item.body}
                    </p>
                  )}

                  {item.badges && (
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-[11px] sm:text-xs font-semibold text-[#8DB4FF] uppercase tracking-wider font-mono">
                      {item.badges.map((badge, bIdx) => (
                        <span key={bIdx} className="flex items-center gap-2">
                          {bIdx > 0 && <span className="text-white/40">|</span>}
                          <span>{badge}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 sm:pt-4">
                    <button
                      type="button"
                      onClick={() => handleCtaClick(item.target)}
                      tabIndex={isActive ? 0 : -1}
                      className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1F4FD8] hover:bg-[#1743BA] text-white border border-transparent hover:border-[#FF8A5C] transition-colors duration-300 cursor-pointer"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`sky-hero-media absolute inset-y-0 right-2 sm:right-6 md:right-4 flex items-end pb-4 md:items-center md:pb-0 justify-center pointer-events-none ${
                  isActive ? "z-20" : "z-0"
                } w-[52%] ${
                  index === 0
                    ? "md:w-[42%] lg:w-[44%]"
                    : "md:w-[35%] lg:w-[38%]"
                }`}
              >
                <img
                  src={item.productImage}
                  alt={item.productAlt}
                  loading="eager"
                  draggable={false}
                  className={`sky-hero-img w-full object-contain object-center transition-[transform,opacity] duration-[900ms] ease-out h-[45%] ${
                    index === 0 ? "md:h-[65%] lg:h-[70%]" : "md:h-[55%] lg:h-[60%]"
                  } ${
                    isActive
                      ? "opacity-100 translate-x-0 scale-100 delay-300"
                      : "opacity-0 translate-x-8 scale-95 delay-0"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-3">
        <div className="flex items-center gap-2 mr-2" role="tablist" aria-label="Slides">
          {SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => goToSlide(dotIdx)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
                dotIdx === currentSlide
                  ? "bg-[#4C8DF6]"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
              aria-selected={dotIdx === currentSlide}
              role="tab"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={prevSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1F4FD8] hover:bg-[#1743BA] text-white border border-white/25 hover:border-[#FF8A5C] flex items-center justify-center transition-colors duration-300 cursor-pointer backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1F4FD8] hover:bg-[#1743BA] text-white border border-white/25 hover:border-[#FF8A5C] flex items-center justify-center transition-colors duration-300 cursor-pointer backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};