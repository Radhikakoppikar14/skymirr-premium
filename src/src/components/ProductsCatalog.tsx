import React, { useState } from "react";
import { ArrowRight, Layers, Radio, Cpu, CheckCircle2, ChevronRight } from "lucide-react";

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
    },
    {
      id: "trackers",
      title: "ASSET TRACKERS",
      division: "SkyTracker",
      subtitle: "SkyTracker (LIPA122): Unmatched Real-Time IoT Asset Tracking",
      description: "A real-time IoT asset tracker for cargo visibility and control, designed to work in difficult RF environments such as trailers, warehouses and remote yards. It continuously monitors detailed sensor information and sends alerts when unexpected changes occur.",
      image: "/images/asset-trackers-2.jpg",
      count: "Real-Time IoT Tracking",
      icon: <Layers className="w-4 h-4" />,
      highlights: ["Normal Logistics & Recovery modes", "Barometric shelf-level tracking", "Temperature, humidity, impact & GNSS"],
      actionLabel: "Explore SkyTracker",
    },
  ];

  const current = products[selectedDivisionIndex];

  const handleSelect = (id: string) => {
    if (onSelectCategory) onSelectCategory(id);
  };

  return (
    <section
      id="products"
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
              Proprietary antenna-first engineering across three dedicated hardware divisions delivering sustained RF performance.
            </p>
          </div>

          {/* Division Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {products.map((p, idx) => {
              const isSelected = idx === selectedDivisionIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedDivisionIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                    isSelected
                      ? "bg-[#FD4401] text-white border-[#FD4401]"
                      : "bg-white hover:bg-[#FFF3E9] text-slate-700 border-slate-200 hover:border-[#FD4401]"
                  }`}
                >
                  <span className={isSelected ? "text-white" : "text-[#1F4FD8]"}>{p.icon}</span>
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Division Spotlight Card */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Narrative & Features */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#1F4FD8] font-bold">
                {current.division} &middot; {current.count}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1F3A] font-sans">
                {current.subtitle}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.description}
            </p>

            {/* Highlights List */}
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
              </button>
            </div>
          </div>

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
                  <span>View Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};