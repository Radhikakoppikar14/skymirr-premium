import React, { useState } from "react";
<<<<<<< HEAD
import { ArrowRight, Layers, Radio, Cpu, CheckCircle2, Sparkles, ChevronRight } from "lucide-react";
=======
import { ArrowRight, Layers, Radio, Cpu, CheckCircle2, ChevronRight } from "lucide-react";
>>>>>>> ec859e7 (Update website)

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
<<<<<<< HEAD
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
=======
      division: "Cellular, Wi-Fi, FPCB, GNSS & NFC",
      subtitle: "High-Performance Antenna Solutions for Every Connection",
      description: "Antenna modules for 4G LTE, 5G and Wi-Fi 6E/7 networks, including the TAMP 161 MIMO omnidirectional module for 4G LTE and 5G Sub-6 bands, the TAMP 154 high-gain directional module, and an NFC antenna for embedded healthcare devices.",
      image: "/images/antennas-new.jpg",
      count: "30 Models Available",
      icon: <Radio className="w-4 h-4" />,
      highlights: ["Cellular 4G LTE / 5G", "Wi-Fi 6E / 7", "GNSS, FPCB & NFC options"],
      actionLabel: "Explore Antennas",
    },
    {
      id: "routers",
      title: "ROUTERS",
      division: "CPEs / Modules",
      subtitle: "Sky5G Router (TCPA 117)",
      description: "SkyMirr redefines connectivity with its groundbreaking Sky5G Router, a 5G Sub-6 and 4G LTE wireless CPE and router offering fast internet speeds and broad coverage.",
      image: "/images/5g-routers.jpg",
      count: "AT&T Certified",
      icon: <Cpu className="w-4 h-4" />,
      highlights: ["5G Sub-6 & 4G LTE", "AT&T Network Certification", "CES 2026 Innovation Awards Honoree"],
      actionLabel: "Explore Sky5G Router",
>>>>>>> ec859e7 (Update website)
    },
    {
      id: "trackers",
      title: "ASSET TRACKERS",
<<<<<<< HEAD
      division: "IoT Telemetry Division",
      subtitle: "LIPA122 Real-Time Multi-Sensor Telemetry",
      description: "Zero-compromise real-time supply chain monitoring. Incorporates barometric Z-axis shelf positioning, trailer Wi-Fi mesh networking, and sub-2-minute rapid cargo recovery alerting.",
      image: "/images/asset-trackers-2.jpg",
      count: "GPS + Cellular IoT",
      icon: <Layers className="w-5 h-5 text-[#4C8DF6]" />,
      highlights: ["Barometric Z-Axis Height", "Cargo Wi-Fi Mesh", "2-Min Rapid Recovery Alert"],
      actionLabel: "Explore Asset Trackers",
=======
      division: "SkyTracker",
      subtitle: "SkyTracker (LIPA122): Unmatched Real-Time IoT Asset Tracking",
      description: "A real-time IoT asset tracker for cargo visibility and control, designed to work in difficult RF environments such as trailers, warehouses and remote yards. It continuously monitors detailed sensor information and sends alerts when unexpected changes occur.",
      image: "/images/asset-trackers-2.jpg",
      count: "Real-Time IoT Tracking",
      icon: <Layers className="w-4 h-4" />,
      highlights: ["Normal Logistics & Recovery modes", "Barometric shelf-level tracking", "Temperature, humidity, impact & GNSS"],
      actionLabel: "Explore SkyTracker",
>>>>>>> ec859e7 (Update website)
    },
  ];

  const current = products[selectedDivisionIndex];

  const handleSelect = (id: string) => {
    if (onSelectCategory) onSelectCategory(id);
  };

  return (
    <section
      id="products"
<<<<<<< HEAD
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
=======
      className="py-16 sm:py-24 bg-[#FFFFFF] text-[#0B1F3A] border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1F4FD8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD4401]" />
              OUR PRODUCTS
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-sans text-[#0B1F3A]">
              Products Built Antenna-First.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
>>>>>>> ec859e7 (Update website)
              Proprietary antenna-first engineering across three dedicated hardware divisions delivering sustained RF performance.
            </p>
          </div>

          {/* Division Selector Tabs */}
<<<<<<< HEAD
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
=======
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
>>>>>>> ec859e7 (Update website)
            {products.map((p, idx) => {
              const isSelected = idx === selectedDivisionIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedDivisionIndex(idx)}
<<<<<<< HEAD
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#4C8DF6] text-white shadow-lg shadow-[#4C8DF6]/30"
                      : "bg-[#0B1F3A] hover:bg-white/10 text-[#C9D6EE] border border-[#4C8DF6]/25"
                  }`}
                >
                  {p.icon}
=======
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                    isSelected
                      ? "bg-[#FD4401] text-white border-[#FD4401]"
                      : "bg-white hover:bg-[#FFF3E9] text-slate-700 border-slate-200 hover:border-[#FD4401]"
                  }`}
                >
                  <span className={isSelected ? "text-white" : "text-[#1F4FD8]"}>{p.icon}</span>
>>>>>>> ec859e7 (Update website)
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

<<<<<<< HEAD
        {/* ASYMMETRIC DIVISION SPOTLIGHT SHOWCASE */}
        <div data-pop-grid className="bg-[#0B1F3A] rounded-3xl border border-[#4C8DF6]/30 p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(11,31,58,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Technical Narrative & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#4C8DF6] font-bold">
                {current.division} &middot; {current.count}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white font-sans">
=======
        {/* Division Spotlight Card */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Narrative & Features */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#1F4FD8] font-bold">
                {current.division} &middot; {current.count}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1F3A] font-sans">
>>>>>>> ec859e7 (Update website)
                {current.subtitle}
              </h3>
            </div>

<<<<<<< HEAD
            <p className="text-sm sm:text-base text-[#C9D6EE] leading-relaxed font-normal">
=======
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
>>>>>>> ec859e7 (Update website)
              {current.description}
            </p>

            {/* Highlights List */}
<<<<<<< HEAD
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
=======
            <div className="space-y-2.5 pt-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1F4FD8] block">
                Key Performance Pillars:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                    <span className="font-medium">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Trigger with subtle orange accent highlight */}
            <div className="pt-2">
              <button
                onClick={() => handleSelect(current.id)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1F4FD8] hover:bg-[#0075FF] text-white text-xs font-bold uppercase tracking-wider border border-transparent hover:border-[#FF9A66] transition-all duration-300 cursor-pointer"
              >
                <span>{current.actionLabel}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:text-[#FF9A66] group-hover:translate-x-0.5 transition-all" />
>>>>>>> ec859e7 (Update website)
              </button>
            </div>
          </div>

<<<<<<< HEAD
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
=======
          {/* Right Column: Hardware Studio Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onClick={() => handleSelect(current.id)}
              className="relative w-full aspect-[16/11] rounded-xl overflow-hidden bg-white border border-slate-200 cursor-pointer group hover:border-[#1F4FD8] transition-all duration-300"
            >
              {/* Product Hardware image */}
              <img
                src={current.image}
                alt={current.title}
                className="absolute inset-0 z-10 h-full w-full object-cover"
              />

              <div className="absolute bottom-3 right-3 z-20">
                <span className="text-[11px] font-mono font-semibold text-[#FD4401] bg-[#FFF3E9] px-3 py-1.5 rounded-lg border border-[#FD4401]/30 flex items-center gap-1 group-hover:border-[#FD4401] transition-colors">
>>>>>>> ec859e7 (Update website)
                  <span>View Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

        </div>

<<<<<<< HEAD
        {/* Note: Bottom 3-card switcher removed as requested */}
=======
>>>>>>> ec859e7 (Update website)
      </div>
    </section>
  );
};