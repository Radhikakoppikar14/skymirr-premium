import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface LatestTickerProps {
  onOpenLatest: () => void;
}

const STORIES = [
  "SkyMirr Sky5G Router Achieves AT&T Certification",
  "Introducing SkyMirr's Next Generation Antennas – Powered by MuLCAT® Technology",
  "SkyMirr Expands Its Antenna Portfolio with New High-Performance 4G/5G and Wi-Fi Solutions",
  "Antenna-First Design: Why Real-World 5G Performance Starts at the RF Layer",
];

const ROTATION_INTERVAL_MS = 2000;

export const LatestTicker: React.FC<LatestTickerProps> = ({ onOpenLatest }) => {
  const [activeStory, setActiveStory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveStory((current) => (current + 1) % STORIES.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <div className="latest-ticker-band px-4 py-3 sm:px-6 sm:py-4">
      <button
        type="button"
        onClick={onOpenLatest}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        className="latest-ticker-pill mx-auto flex min-h-12 w-full max-w-6xl items-center gap-2.5 sm:gap-4 rounded-full border border-[#FD4401] bg-white/10 px-3.5 py-2.5 sm:px-5 text-left text-[#D6E2F2] transition-colors duration-200 hover:border-[#FF8A5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FD4401] focus-visible:outline-offset-2"
        aria-label={`Open latest news: ${STORIES[activeStory]}`}
        title={STORIES[activeStory]}
      >
        <span className="latest-ticker-dot h-3 w-3 shrink-0 rounded-full bg-[#FF8A5C]" aria-hidden="true" />
        <span className="shrink-0 text-sm sm:text-base font-bold text-white">Latest</span>
        <span className="h-5 w-px shrink-0 bg-[#FD4401]/60" aria-hidden="true" />
        <span
          key={activeStory}
          className="latest-ticker-headline min-w-0 flex-1 truncate text-sm sm:text-base font-semibold text-[#FF8A5C]"
          aria-live="off"
        >
          {STORIES[activeStory]}
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#FF8A5C]" aria-hidden="true" />
      </button>
    </div>
  );
};