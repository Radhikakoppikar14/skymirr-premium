import React, { useState } from "react";
import { ArrowRight, Layers, Radio, Cpu, CheckCircle2, Sparkles, ChevronRight } from "lucide-react";

interface ProductsCatalogProps {
  onSelectCategory?: (category: string) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  onSelectCategory,
}) => {
  const [selectedDivisionIndex, setSelectedDivisionIndex] = useState(0);

  const products = [
    {
      id: "antennas",
      title: "ANTENNAS",
      division: "RF Component Division",
      subtitle: "SkyBlade™ Sub-6 Ultra-Broadband & MIMO Elements",
      description: "Engineered with proprietary MuLCAT™ positive-coupling resonance. Designed to deliver continuous radiation efficiency >80% across 600 MHz to 6000 MHz without dead frequency bands or parasitic detuning.",
      image: "/images/antennas-new.jpg",
      count: "8 Models Available",
      icon: <Radio className="w-5 h-5 text-[#4C8DF6]" />,
      highlights: ["600–6000 MHz Continuous", ">80% Peak Efficiency", "Low PIM & High Isolation"],
      actionLabel: "Explore Antenna Catalog",
    },
    {
      id: "routers",
      title: "5G ROUTERS",
      division: "Gateway Systems Division",
      subtitle: "Sky5G® TCPA 117 — CES 2026 Honoree & Wi-Fi 7",
      description: "Dual-carrier certified fixed wireless CPE router engineered for rural broadband, enterprise failover, and FirstNet/T-Priority public safety priority queuing. Reaches cell towers up to 42% farther than standard gateways.",
      image: "/images/5g-routers.jpg",
      count: "T-Mobile & AT&T Certified",
      icon: <Cpu className="w-5 h-5 text-[#4C8DF6]" />,
      highlights: ["Wi-Fi 7 Tri-Band (4x4)", "3.4 Gbps Sub-6 NR", "Up to 512 Active Clients"],
      actionLabel: "Explore Sky5G Gateway",
    },
    {
      id: "trackers",
      title: "ASSET TRACKERS",
      division: "IoT Telemetry Division",
      subtitle: "LIPA122 Real-Time Multi-Sensor Telemetry",
      description: "Zero-compromise real-time supply chain monitoring. Incorporates barometric Z-axis shelf positioning, trailer Wi-Fi mesh networking, and sub-2-minute rapid cargo recovery alerting.",
      image: "/images/asset-trackers-2.jpg",
      count: "GPS + Cellular IoT",
      icon: <Layers className="w-5 h-5 text-[#4C8DF6]" />,
      highlights: ["Barometric Z-Axis Height", "Cargo Wi-Fi Mesh", "2-Min Rapid Recovery Alert"],
      actionLabel: "Explore Asset Trackers",
    },
  ];

  const current = products[selectedDivisionIndex];

  const handleSelect = (id: string) => {
    if (onSelectCategory) onSelectCategory(id);
  };

  return (
    <section
      id="products"
      className="py-24 sm:py-32 bg-[#0B1F3A] text-white relative isolate overflow-hidden"
    >
      {/* Background Electromagnetic Wave Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/4 -z-10 w-[600px] h-[450px] bg-[radial-gradient(circle,rgba(76,141,246,0.18),transparent_70%)] blur-3xl animate-pulse [animation-duration:8s]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 -z-10 w-[500px] h-[350px] bg-[radial-gradient(circle,rgba(31,79,216,0.22),transparent_70%)] blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#4C8DF6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C8DF6] animate-ping" />
              03 &middot; Hardware Portfolio
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-white">
              Products Built Antenna-First.
            </h2>

            <p className="text-sm sm:text-base text-[#C9D6EE] leading-relaxed font-normal">
              Proprietary antenna-first engineering across three dedicated hardware divisions delivering sustained RF performance.
            </p>
          </div>

          {/* Division Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {products.map((p, idx) => {
              const isSelected = idx === selectedDivisionIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedDivisionIndex(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#4C8DF6] text-white shadow-lg shadow-[#4C8DF6]/30"
                      : "bg-[#0B1F3A] hover:bg-white/10 text-[#C9D6EE] border border-[#4C8DF6]/25"
                  }`}
                >
                  {p.icon}
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ASYMMETRIC DIVISION SPOTLIGHT SHOWCASE */}
        <div data-pop-grid className="bg-[#0B1F3A] rounded-3xl border border-[#4C8DF6]/30 p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(11,31,58,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Technical Narrative & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#4C8DF6] font-bold">
                {current.division} &middot; {current.count}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white font-sans">
                {current.subtitle}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#C9D6EE] leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4C8DF6] block">
                Key Performance Pillars:
              </span>
              {current.highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#4C8DF6] shrink-0" />
                  <span className="font-medium">{hl}</span>
                </div>
              ))}
            </div>

            {/* Action Trigger */}
            <div className="pt-4">
              <button
                onClick={() => handleSelect(current.id)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4C8DF6] to-[#1F4FD8] hover:from-[#4C8DF6] hover:to-[#4C8DF6] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>{current.actionLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Hardware Studio Pedestal (100% Crisp Containment, ZERO Background Image) */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              data-tilt
              onClick={() => handleSelect(current.id)}
              className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0B1F3A] to-[#0B1F3A] border border-[#4C8DF6]/35 flex items-center justify-center p-6 cursor-pointer group shadow-2xl"
            >
              {/* Live Animated Electromagnetic Rings - NO background image */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30"
              >
                <div className="w-[300px] h-[300px] rounded-full border border-[#4C8DF6]/50 animate-ping [animation-duration:6s]" />
                <div className="absolute w-[200px] h-[200px] rounded-full border border-[#4C8DF6]/40" />
                <div className="absolute w-[100px] h-[100px] rounded-full border border-[#4C8DF6]/30" />
              </div>

              {/* Main Crisp Hardware Cutout */}
              <img
                src={current.image}
                alt={current.title}
                className="relative z-10 max-h-64 max-w-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
              />

              {/* Holographic Radar Scanline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-15 bg-[linear-gradient(180deg,transparent_0%,rgba(76,141,246,0.14)_50%,transparent_100%)] bg-[length:100%_200%] animate-[scan_5s_linear_infinite]"
              />

              <div className="absolute bottom-4 right-4 z-20">
                <span className="text-[11px] font-mono font-bold text-[#4C8DF6] bg-[#0B1F3A]/95 px-3 py-1.5 rounded-full border border-[#4C8DF6]/50 flex items-center gap-1.5 shadow-lg group-hover:bg-[#4C8DF6] group-hover:text-white transition-colors">
                  <span>View Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Note: Bottom 3-card switcher removed as requested */}
      </div>
    </section>
  );
};