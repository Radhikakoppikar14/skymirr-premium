import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, ShieldCheck, Play, ArrowUpRight } from "lucide-react";
import { PARTNERS_DATA } from "../data/skymirrData";

interface PartnersSectionProps {
  onExploreProducts?: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onExploreProducts,
}) => {
  const onlineScrollRef = useRef<HTMLDivElement>(null);
  const distScrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"retail" | "carriers">("retail");

  const scrollLeftOnline = () => {
    onlineScrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };
  const scrollRightOnline = () => {
    onlineScrollRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  const scrollLeftDist = () => {
    distScrollRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };
  const scrollRightDist = () => {
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
    "w-9 h-9 rounded-xl hover:bg-[#EAF6F9] text-[#627784] hover:text-[#087F98] flex items-center justify-center transition-colors cursor-pointer border border-[#DFEAF0] bg-white shadow-2xs";

  return (
    <div className="space-y-0">
      
      {/* ========================================================
          PART 1: TAKE A CLOSER LOOK — LAB DEMO VIDEO THEATER
          ======================================================== */}
      <section
        id="demo-video"
        className="relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-[#073746] via-[#075568] to-[#102B3B] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: High-Definition Video Player in Studio Bezel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden border-2 border-[#18A6BE]/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#073746]">
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
                <span className="px-3 py-1 rounded-full bg-[#073746]/90 backdrop-blur-md text-[10px] font-mono font-bold text-[#91D6E3] uppercase tracking-wider border border-[#18A6BE]/40 shadow-sm">
                  Songdo 3D Chamber Testing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Context & Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073746] text-[#D7EEF3] border border-[#18A6BE]/40 text-[11px] font-mono uppercase tracking-[0.2em] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#91D6E3]" />
              05 &middot; R&amp;D Laboratory
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans leading-tight">
              TAKE A CLOSER LOOK....
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#D7EEF3] leading-relaxed font-normal">
              <p>
                For decades, wireless engineers fought antenna coupling as a destructive parasite that causes return loss, detuning, and signal cancellation. SkyMirr inverted the paradigm.
              </p>
              <p>
                <strong className="text-white font-bold">MuLCAT® uses positive electromagnetic coupling</strong> through proprietary multi-layer dielectric resonator geometries. Rather than isolating elements with bulky chokes or lossy shielding, MuLCAT® constructively aligns the phase of adjacent fields to amplify radiation efficiency and multiply usable bandwidth.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#91D6E3]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#18A6BE]" />
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
        className="py-24 sm:py-32 bg-[#F8FCFD] border-t border-[#DFEAF0] text-[#152C39]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DFEAF0] pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#087F98]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087F98] animate-ping" />
                06 &middot; Global Ecosystem
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-sans text-[#152C39]">
                Trusted by Leaders &amp; Global Networks.
              </h2>

              <p className="text-sm sm:text-base text-[#627784] leading-relaxed font-normal">
                SkyMirr RF hardware and antenna systems are stocked by premier industrial distributors and certified across Tier-1 carriers worldwide.
              </p>
            </div>

            {/* Tab switch between Online Retailers & Carrier Networks */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("retail")}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "retail"
                    ? "bg-[#087F98] text-white shadow-md shadow-[#087F98]/20"
                    : "bg-white text-[#627784] hover:text-[#152C39] border border-[#DFEAF0]"
                }`}
              >
                Online Retailers
              </button>
              <button
                onClick={() => setActiveTab("carriers")}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "carriers"
                    ? "bg-[#087F98] text-white shadow-md shadow-[#087F98]/20"
                    : "bg-white text-[#627784] hover:text-[#152C39] border border-[#DFEAF0]"
                }`}
              >
                Carrier &amp; Regional
              </button>
            </div>
          </div>

          {/* Partner Showcase Strip */}
          {activeTab === "retail" ? (
            <div className="bg-white rounded-3xl border border-[#DFEAF0] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase text-[#152C39] font-mono tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#087F98]" />
                    Direct Online Retailers &amp; Catalog Distributors
                  </h3>
                  <span className="text-xs text-[#8A9BA4]">Direct inventory with verified overnight shipping</span>
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
                className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2"
              >
                {PARTNERS_DATA.online.map((partner, idx) => (
                  <a
                    key={idx}
                    href={getPartnerUrl(partner.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-48 sm:w-56 shrink-0 flex flex-col items-center justify-center p-6 h-32 bg-[#F8FCFD] rounded-2xl border border-[#DFEAF0] hover:border-[#18A6BE] hover:shadow-md transition-all group select-none cursor-pointer"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 w-auto max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#8A9BA4] mt-3 group-hover:text-[#087F98] transition-colors font-bold">
                      <span>{partner.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#DFEAF0] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase text-[#152C39] font-mono tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#18A6BE]" />
                    Carrier &amp; Regional Distribution Networks
                  </h3>
                  <span className="text-xs text-[#8A9BA4]">Global enterprise logistics &amp; integration</span>
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
                className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2"
              >
                {PARTNERS_DATA.distributors.map((dist, idx) => (
                  <div
                    key={idx}
                    className="w-48 sm:w-56 shrink-0 flex flex-col items-center justify-center p-6 h-32 bg-[#F8FCFD] rounded-2xl border border-[#DFEAF0] hover:border-[#18A6BE] hover:shadow-md transition-all group select-none"
                  >
                    <img
                      src={dist.logo}
                      alt={dist.name}
                      className="max-h-12 w-auto max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A9BA4] mt-3 font-bold">
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
      <section className="py-24 sm:py-32 bg-white border-t border-[#DFEAF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#087F98]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087F98]" />
              07 &middot; Complete Hardware Lineup
            </div>

            <h2 className="text-3xl sm:text-5xl uppercase font-black tracking-tight leading-[1.05] text-[#152C39] font-sans">
              Explore Our Portfolio.
            </h2>

            <p className="text-sm sm:text-base text-[#627784] leading-relaxed max-w-md font-normal">
              Explore our complete portfolio of ultra-wideband external connectorized antennas, carrier-certified 5G FWA gateways, and real-time asset telemetry trackers.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 h-13 px-8 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#087F98] to-[#18A6BE] hover:from-[#075568] hover:to-[#087F98] shadow-[0_12px_28px_-10px_rgba(8,127,152,0.5)] cursor-pointer hover:-translate-y-0.5 transition-all"
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
                className="relative max-h-80 w-auto object-contain drop-shadow-[0_20px_35px_rgba(7,55,70,0.18)] transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
