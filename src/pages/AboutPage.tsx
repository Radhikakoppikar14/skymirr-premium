import React, { useState } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import {
  Sparkles,
  Factory,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Globe,
  Award,
  Maximize2,
  X,
  Building2,
  Cpu,
  ArrowRight
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export const AboutPage: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
  });

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const trustedLogos = [
    { name: "Walmart", img: "/images/about/wallmart.jpg" },
    { name: "DigiKey", img: "/images/about/digikey.jpg" },
    { name: "Amazon", img: "/images/about/amazon.jpg" },
    { name: "ePlus", img: "/images/about/eplus.jpg" },
    { name: "T-Mobile", img: "/images/about/tmobile.jpg" },
    { name: "Verizon", img: "/images/about/verizon.jpg" },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-16 sm:py-24">
        <PageBackdrop />
        
        {/* Live Electromagnetic Sinusoidal Wave Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.014}
            amplitude={30}
            speed={0.02}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#4C8DF6_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#4C8DF6]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#4C8DF6]">
            <Sparkles className="w-3.5 h-3.5 text-[#4C8DF6] animate-pulse" />
            <span>Corporate Mission &amp; Infrastructure</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              About SkyMirr
            </h1>
            <p className="text-base sm:text-lg text-[#C9D6EE] leading-relaxed font-normal">
              Unlocking powerful wireless performance through custom antenna solutions, positive-coupling electromagnetic physics, and global manufacturing infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#C9D6EE]">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#4C8DF6]" />
              <span>North America &middot; Korea &middot; Vietnam &middot; Taiwan</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#4C8DF6]" />
              <span>&gt;100 Million RF Devices Shipped</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CORPORATE NARRATIVE & TEAM SHOWCASE STAGE                   */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3D4BA] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f3a] font-sans">
                Help innovators build smarter, more connected products—faster.
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
              <p>
                At SkyMirr, we specialize in unlocking powerful wireless performance through custom antenna solutions and system-level RF consulting. From embedded 5G and asset tracker modules to rugged IoT, surveillance, and industrial applications, we design antennas and RF devices that meet real-world demands.
              </p>
              <p>
                Our engineering team moves fast, solving signal challenges with precision while reducing time-to-market and improving product performance. Whether you need a fully custom design or tuning and integration support, we deliver tested, ready-to-use solutions that work in the field, not just on paper.
              </p>
              <p>
                Our deep antenna expertise powers our high-performing devices like 5G routers and asset trackers—where reliable connectivity isn't optional. We engineer solutions with the entire system architecture in mind: board layout, enclosure dynamics, signal isolation, and power efficiency.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1F3A] text-[#C9D6EE] font-mono text-xs font-bold border border-[#4C8DF6]/30 text-center">
              "At SkyMirr, we don't just make antennas—we connect the world."
            </div>
          </div>

          {/* Right Column: Showcase Photograph Frame (Span 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => openLightbox("/images/about/aboutus.jpg", "SkyMirr Engineering Team at Showcase")}
              className="relative w-full rounded-2xl overflow-hidden border border-[#E3D4BA] bg-[#0B1F3A] cursor-pointer group shadow-xl p-3"
            >
              <img
                src="/images/about/aboutus.jpg"
                alt="SkyMirr Team at Showcase"
                className="w-full h-auto object-contain rounded-xl group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="p-3 rounded-2xl bg-white text-[#1F4FD8] shadow-xl">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#4C8DF6] text-center mt-2.5">
                SkyMirr Engineering &amp; Operations Team
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. GLOBAL OPERATIONS & MANUFACTURING CAMPUSES                   */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E3D4BA] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
              01 &middot; Global Footprint
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f3a] font-sans">
              Engineering, Testing &amp; Mass Production Facilities
            </h2>
          </div>
          <span className="text-xs font-mono text-[#5B6B82]">
            Incheon, Korea &middot; Bac Ninh, Vietnam &middot; Melbourne, FL &middot; Taipei, Taiwan
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Facility 1: Incheon, Korea R&D */}
          <div className="bg-white rounded-3xl p-8 border border-[#E3D4BA] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#E8F0FE] border border-[#4C8DF6]/40 text-xs font-mono font-bold text-[#1F4FD8] uppercase">
                  Incheon R&amp;D Center
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#5B6B82]">
                  <MapPin className="w-4 h-4 text-[#1F4FD8]" />
                  <span>Incheon, Korea</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#0b1f3a]">
                R&amp;D &amp; Anechoic Testing Capability
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                Initial R&amp;D and rapid product prototyping capability is fully operational with complete spherical testing suites.
              </p>

              <div className="space-y-2 pt-1">
                {[
                  "Full 3D spherical anechoic test chamber",
                  "Multi-port network analyzers & spectrum analyzers",
                  "High-precision RF multi-meters and calibration benches",
                  "Rapid prototyping & antenna tuning work benches",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chamber Photo */}
            <div
              onClick={() => openLightbox("/images/about/Picture3.jpg", "Full 3D Anechoic Test Chamber — Incheon, Korea")}
              className="relative rounded-2xl overflow-hidden border border-[#E3D4BA] h-52 bg-[#0B1F3A] cursor-pointer group shadow-inner"
            >
              <img
                src="/images/about/Picture3.jpg"
                alt="Full 3D Anechoic Chamber"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#0B1F3A]/85 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 shadow-md">
                <Maximize2 className="w-3.5 h-3.5 text-[#4C8DF6]" />
                <span>Inspect Incheon Chamber</span>
              </div>
            </div>
          </div>

          {/* Facility 2: Bac Ninh, Vietnam Mass Production */}
          <div className="bg-white rounded-3xl p-8 border border-[#E3D4BA] shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-[#E8F0FE] border border-[#4C8DF6]/40 text-xs font-mono font-bold text-[#1F4FD8] uppercase">
                  Vietnam Production Plant
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#5B6B82]">
                  <MapPin className="w-4 h-4 text-[#1F4FD8]" />
                  <span>Bac Ninh, Vietnam</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#0b1f3a]">
                Mass Production — Locked and Loaded
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                Contract manufacturing facilities in place in Vietnam and Korea with full end-to-end supply chain management.
              </p>

              <div className="space-y-2 pt-1">
                {[
                  "Plastic molding & precision tooling",
                  "Metal stamping & automated PCB placement",
                  "Cable & connector RF harnesses",
                  "Final assembly, 100% inspection, and active RMA system",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vietnam Production Photos */}
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => openLightbox("/images/about/Picture4.jpg", "Mass Production Assembly Line — Bac Ninh, Vietnam")}
                className="relative rounded-2xl overflow-hidden border border-[#E3D4BA] h-52 bg-[#0B1F3A] cursor-pointer group shadow-inner"
              >
                <img
                  src="/images/about/Picture4.jpg"
                  alt="Production Assembly Line"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-[#0B1F3A]/85 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-[#4C8DF6]" />
                  <span>Assembly</span>
                </div>
              </div>

              <div
                onClick={() => openLightbox("/images/about/Picture5.png", "Absorber Chamber Verification — Bac Ninh, Vietnam")}
                className="relative rounded-2xl overflow-hidden border border-[#E3D4BA] h-52 bg-[#0B1F3A] cursor-pointer group shadow-inner"
              >
                <img
                  src="/images/about/Picture5.png"
                  alt="Chamber Fixture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-[#0B1F3A]/85 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-[#4C8DF6]" />
                  <span>Chamber</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. CARRIER & GLOBAL CUSTOMER TRUST WALL                        */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
            02 &middot; Ecosystem Trust
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f3a]">
            Global Customers We Have Served
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6B82]">
            Trusted by the world's leading enterprise retailers, distributors, and telecom carriers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustedLogos.map((cust, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E3D4BA] shadow-sm hover:border-[#4C8DF6] hover:shadow-md transition-all flex flex-col items-center justify-center h-28 group"
            >
              <img
                src={cust.img}
                alt={cust.name}
                className="max-h-12 w-auto max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-[10px] font-mono text-[#5B6B82] mt-2 font-bold uppercase">
                {cust.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1F3A]/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-[#E3D4BA]"
          >
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#E3D4BA] bg-[#FFFFFF]">
              <h3 className="text-sm sm:text-base font-bold text-[#0b1f3a]">
                {lightbox.title}
              </h3>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-xl text-[#5B6B82] hover:text-[#0b1f3a] hover:bg-[#E8F0FE] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#FFFFFF] flex items-center justify-center max-h-[70vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain rounded-xl bg-white p-3 shadow-sm border border-[#E3D4BA]"
              />
            </div>

            <div className="p-4 px-6 bg-[#FFFFFF] border-t border-[#E3D4BA] flex items-center justify-between text-xs text-[#5B6B82]">
              <span className="font-mono text-[11px]">SkyMirr Technologies Facilities</span>
              <button
                onClick={closeLightbox}
                className="px-4 py-2 rounded-xl bg-[#1F4FD8] hover:bg-[#1F4FD8] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};