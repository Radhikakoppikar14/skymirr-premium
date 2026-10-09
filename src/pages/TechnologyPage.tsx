import React, { useState } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  ZoomIn,
  X,
  Radio,
  Sliders,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Layers,
  ArrowRight
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export const TechnologyPage: React.FC = () => {
  const [couplingMode, setCouplingMode] = useState<"positive" | "parasitic">("positive");
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

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK WITH LIVE WAVE ANIMATIONS       */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-16 sm:py-24">
        <PageBackdrop />
        
        {/* Live Electromagnetic Sinusoidal Wave Canvas (NO background image) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-50">
          <LiveWaveCanvas
            frequency={couplingMode === "positive" ? 0.022 : 0.009}
            amplitude={couplingMode === "positive" ? 36 : 14}
            speed={0.025}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#4C8DF6]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#4C8DF6]">
            <Sparkles className="w-3.5 h-3.5 text-[#4C8DF6] animate-pulse" />
            <span>RF Core Innovation &middot; Patents Pending</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              MuLCAT™ Technology
            </h1>
            <p className="text-base sm:text-lg text-[#C9D6EE] leading-relaxed font-normal">
              Multi-Layer Coupling Controlled Antenna Technology (Patents &amp; Trademarks Pending). Transforming mutual antenna coupling from destructive interference into constructive radiated power.
            </p>
          </div>

          {/* Interactive Coupling Comparison Switcher */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#C9D6EE]/70 uppercase">
              Simulate Physics:
            </span>
            <div className="inline-flex rounded-xl p-1 bg-[#0B1F3A] border border-[#4C8DF6]/30">
              <button
                onClick={() => setCouplingMode("positive")}
                className={`px-4 py-2 rounded-lg text-xs font-bold font-mono uppercase transition-all cursor-pointer ${
                  couplingMode === "positive"
                    ? "bg-[#4C8DF6] text-white shadow-md shadow-[#4C8DF6]/40"
                    : "text-[#C9D6EE]/60 hover:text-white"
                }`}
              >
                MuLCAT™ Positive Coupling
              </button>
              <button
                onClick={() => setCouplingMode("parasitic")}
                className={`px-4 py-2 rounded-lg text-xs font-bold font-mono uppercase transition-all cursor-pointer ${
                  couplingMode === "parasitic"
                    ? "bg-[#1F4FD8] text-white shadow-md"
                    : "text-[#C9D6EE]/60 hover:text-white"
                }`}
              >
                Conventional Parasitic Coupling
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CORE ARCHITECTURAL COMPARISON MATRIX                        */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card A: Why Now? */}
          <div className="bg-white rounded-3xl p-8 border border-[#E3D4BA] shadow-xl hover:border-[#4C8DF6] transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F0FE] text-[#1F4FD8] flex items-center justify-center shrink-0 border border-[#E3D4BA]">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#1F4FD8] tracking-widest block">
                  Industry Imperative
                </span>
                <h3 className="text-xl font-black text-[#0b1f3a]">
                  Why Now?
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
              Recent 5G ramp-up in Terrestrial Communication, Satellite communication service launches, and new Wireless Healthcare systems all require significantly higher performing, trustworthy RF technology than existing legacy solutions can deliver.
            </p>
          </div>

          {/* Card B: What is MuLCAT? */}
          <div className="bg-white rounded-3xl p-8 border border-[#E3D4BA] shadow-xl hover:border-[#4C8DF6] transition-all space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F0FE] text-[#1F4FD8] flex items-center justify-center shrink-0 border border-[#E3D4BA]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#1F4FD8] tracking-widest block">
                  Fundamental Breakthrough
                </span>
                <h3 className="text-xl font-black text-[#0b1f3a]">
                  What is MuLCAT™?
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
              MuLCAT™ (Multi-Layer Coupling Controlled Antenna Technology) improves RF device performance significantly by controlling mutual couplings between electromagnetic elements, turning what used to be destructive interference into multiplied radiating aperture.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. HIGH-RESOLUTION ENGINEERING BLUEPRINTS WORKBENCH            */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E3D4BA] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
              01 &middot; Technical Schematics
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f3a] font-sans">
              Patented Architecture &amp; Field Schematics
            </h2>
          </div>
          <span className="text-xs font-mono text-[#5B6B82]">
            Click any schematic to open 4K inspection lightbox
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Blueprint 1: MuLCAT Technology (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3D4BA]">
              <div>
                <h3 className="text-base font-bold text-[#0b1f3a]">
                  MuLCAT™ Core Resonance Blueprint
                </h3>
                <span className="text-[10px] font-mono text-[#1F4FD8] uppercase font-bold">
                  Patent &amp; Trademark Pending
                </span>
              </div>
              <span className="text-xs font-mono bg-[#E8F0FE] text-[#1F4FD8] px-2.5 py-1 rounded-full border border-[#E3D4BA]">
                FIG. 01
              </span>
            </div>

            <div
              onClick={() => openLightbox("/images/mulcat.jpg", "MuLCAT Technology Architecture Diagram")}
              className="relative w-full rounded-2xl bg-[#0B1F3A] p-4 flex items-center justify-center cursor-pointer group overflow-hidden border border-[#4C8DF6]/30 shadow-inner"
            >
              <img
                src="/images/mulcat.jpg"
                alt="MuLCAT Technology Architecture Diagram"
                className="max-h-72 w-auto max-w-full object-contain rounded-xl bg-white p-2 group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="p-3 rounded-2xl bg-white text-[#1F4FD8] shadow-xl">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Demonstrates controlled dielectric resonance coupling across multi-layer array geometry, multiplying effective forward aperture while retaining compact enclosure volume.
            </p>
          </div>

          {/* Blueprint 2: Compact Antenna for Wireless Health & Terrestrial Comm (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3D4BA]">
              <div>
                <h3 className="text-base font-bold text-[#0b1f3a]">
                  Wireless Health &amp; Terrestrial Comm Array
                </h3>
                <span className="text-[10px] font-mono text-[#1F4FD8] uppercase font-bold">
                  Compact Form Factor Integration
                </span>
              </div>
              <span className="text-xs font-mono bg-[#E8F0FE] text-[#1F4FD8] px-2.5 py-1 rounded-full border border-[#E3D4BA]">
                FIG. 02
              </span>
            </div>

            <div
              onClick={() => openLightbox("/images/technology2.jpg", "MuLCAT Compact Ant for Wireless Health & Terrestrial Comm")}
              className="relative w-full rounded-2xl bg-[#0B1F3A] p-4 flex items-center justify-center cursor-pointer group overflow-hidden border border-[#4C8DF6]/30 shadow-inner"
            >
              <img
                src="/images/technology2.jpg"
                alt="MuLCAT Compact Ant for Wireless Health & Terrestrial Comm"
                className="max-h-72 w-auto max-w-full object-contain rounded-xl bg-white p-2 group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="p-3 rounded-2xl bg-white text-[#1F4FD8] shadow-xl">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Benchmarked for wearable medical transceivers, IoT asset telemetry, and high-concurrency 5G edge gateways requiring continuous spherical radiation patterns.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. QUANTIFIED PERFORMANCE GAINS (Empirical Rigor)              */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
            02 &middot; Proven Benchmarks
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0b1f3a]">
            MuLCAT™ Performance Multiplication
          </h2>
          <p className="text-xs sm:text-sm text-[#5B6B82]">
            Empirical gains measured against commercial legacy decoupling systems in 3D anechoic chambers.
          </p>
        </div>

        {/* 3 Prominent Stat Pedestals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-[#E3D4BA] shadow-xl text-center space-y-3 hover:-translate-y-1 transition-transform">
            <span className="text-4xl sm:text-6xl font-black font-mono text-[#1F4FD8] block">
              &gt;100%
            </span>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0b1f3a]">
              Operational Bandwidth
            </h4>
            <p className="text-xs text-[#5B6B82]">
              Continuous Sub-6 resonance without frequency dropouts or efficiency notches.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1F4FD8] to-[#4C8DF6] text-white rounded-3xl p-8 shadow-xl text-center space-y-3 hover:-translate-y-1 transition-transform">
            <span className="text-4xl sm:text-6xl font-black font-mono text-white block">
              &gt;92%
            </span>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9D6EE]">
              Recognition Distance
            </h4>
            <p className="text-xs text-[#E8F0FE]">
              Farther signal capture threshold in fringe IoT and terrestrial cellular networks.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E3D4BA] shadow-xl text-center space-y-3 hover:-translate-y-1 transition-transform">
            <span className="text-4xl sm:text-6xl font-black font-mono text-[#1F4FD8] block">
              &gt;65%
            </span>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0b1f3a]">
              Forward Radiated Gain
            </h4>
            <p className="text-xs text-[#5B6B82]">
              Multiplied radiated aperture efficiency through in-phase electromagnetic coupling.
            </p>
          </div>
        </div>

        {/* 3 Industry Impact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-[#E3D4BA] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1F4FD8] uppercase">
              <CheckCircle2 className="w-4 h-4 text-[#4C8DF6]" />
              <span>Terrestrial Wireless</span>
            </div>
            <p className="text-xs text-[#5B6B82]">
              Terrestrial cellular connectivity can be improved significantly even in dense urban and fringe rural sectors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E3D4BA] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1F4FD8] uppercase">
              <CheckCircle2 className="w-4 h-4 text-[#4C8DF6]" />
              <span>Healthcare Biosensors</span>
            </div>
            <p className="text-xs text-[#5B6B82]">
              Wireless healthcare devices improve continuous biological data transmission distance without bulky antennas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E3D4BA] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1F4FD8] uppercase">
              <CheckCircle2 className="w-4 h-4 text-[#4C8DF6]" />
              <span>AI-Adaptive Tuning</span>
            </div>
            <p className="text-xs text-[#5B6B82]">
              Machine-learning algorithms can be adopted to dynamically optimize phase-coupling based on environmental conditions.
            </p>
          </div>
        </div>

        {/* Decades of Experience Pedigree Banner */}
        <div className="rounded-3xl bg-[#0B1F3A] text-white p-8 sm:p-10 border border-[#4C8DF6]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase font-bold text-[#4C8DF6] tracking-widest">
              Decades of Engineering Experience
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Over 100 Million RF Products Shipped Globally
            </h3>
            <p className="text-xs text-[#C9D6EE] max-w-xl">
              SkyMirr's core team has designed hundreds of antennas over decades for global Tier-1 OEMs. MuLCAT™ is the culmination of this continuous innovation.
            </p>
          </div>

          <div className="italic text-xs text-[#4C8DF6] bg-white/10 p-4 rounded-2xl border border-white/10 max-w-sm text-center">
            "Whether It Be Radio, LAN, Or Otherwise, An Antenna Is Extremely Important." —{" "}
            <a href="https://www.pimfg.com/" target="_blank" rel="noreferrer" className="underline font-bold text-white">
              PIMFG.com
            </a>
          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* 5. LIGHTBOX MODAL FOR BLUEPRINTS                               */}
      {/* ============================================================== */}
      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1F3A]/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-[#E3D4BA]"
          >
            <div className="p-4 px-6 border-b border-[#E3D4BA] bg-[#FFFFFF]">
  <h3 className="text-sm sm:text-base font-bold text-[#0b1f3a] font-sans">
    {lightbox.title}
  </h3>
</div>

            <div className="p-6 bg-[#FFFFFF] flex items-center justify-center max-h-[70vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain rounded-xl bg-white p-3 shadow-sm border border-[#E3D4BA]"
              />
            </div>

            <div className="p-4 px-6 bg-[#FFFFFF] border-t border-[#E3D4BA] flex items-center justify-between text-xs text-[#5B6B82]">
              <span className="font-mono text-[11px]">SkyMirr Technologies &middot; Patents &amp; Trademarks Pending</span>
              <button
                onClick={closeLightbox}
                className="px-4 py-2 rounded-xl bg-[#1F4FD8] hover:bg-[#1F4FD8] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};