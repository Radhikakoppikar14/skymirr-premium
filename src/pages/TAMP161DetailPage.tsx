import React, { useState } from "react";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  X,
  Sparkles,
  Activity,
  Layers,
  ZoomIn,
  Cpu,
  ShoppingCart
} from "lucide-react";

interface TAMP161DetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
  category?: string;
}

export const TAMP161DetailPage: React.FC<TAMP161DetailPageProps> = ({
  onBack,
  onContact,
}) => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
    category: "",
  });

  const openLightbox = (src: string, title: string, category?: string) => {
    setLightbox({ isOpen: true, src, title, category });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const isolationCharts = [
    {
      title: "ANT 1 to ANT 2",
      src: "/images/tamp161/isolation-1-2.jpg",
    },
    {
      title: "ANT 1 to ANT 3",
      src: "/images/tamp161/isolation-1-3.jpg",
    },
    {
      title: "ANT 1 to ANT 4",
      src: "/images/tamp161/isolation-1-4.jpg",
    },
    {
      title: "ANT 2 to ANT 3",
      src: "/images/tamp161/isolation-2-3.jpg",
    },
    {
      title: "ANT 2 to ANT 4",
      src: "/images/tamp161/isolation-2-4.jpg",
    },
    {
      title: "ANT 3 to ANT 4",
      src: "/images/tamp161/isolation-3-4.jpg",
    },
  ];

  const radiationPatterns = [
    {
      title: "Radiation Pattern ANT_1",
      src: "/images/tamp161/radiation-pattern1.jpg",
    },
    {
      title: "Radiation Pattern ANT_2",
      src: "/images/tamp161/radiation-pattern2.jpg",
    },
    {
      title: "Radiation Pattern ANT_3",
      src: "/images/tamp161/radiation-pattern3.jpg",
    },
    {
      title: "Radiation Pattern ANT_4",
      src: "/images/tamp161/radiation-pattern4.jpg",
    },
  ];

  return (
    <div className="tamp161-detail pt-[72px] pb-24 bg-[#FFFFFF] text-[#0b1f3a] animate-fade-in relative overflow-hidden">
      
      {/* Background Floating Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#4C8DF6]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#4C8DF6]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Banner Breadcrumb */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-[#E3D4BA] py-4 px-4 sm:px-8 relative z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#5B6B82] hover:text-[#1F4FD8] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B82]">
            <span>Antennas</span>
            <span>/</span>
            <span className="text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-0.5 rounded-full tracking-wider border border-[#E3D4BA]">
              TAMP161
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16 relative z-10">
        
        {/* ========================================================
            HERO PRODUCT SHOWCASE (Bento Layout)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1F4FD8] border border-[#E3D4BA] text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#4C8DF6] animate-pulse" />
                <span>Now Available</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-[#0b1f3a] tracking-tight font-sans leading-tight">
                TAMP161
              </h1>

              <h2 className="text-sm sm:text-base font-bold text-[#1F4FD8] leading-snug font-sans">
                4G LTE / 5G External MIMO Broadband High Performing Omnidirectional Antenna Module
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed font-normal">
              The TAMP161 is a high-efficiency MIMO Omnidirectional Antenna module engineered to support the full spectrum of 4G LTE and 5G Sub-6 frequencies, including the critical 600 MHz band. Featuring 2x2 and 4x4 MIMO support, high isolation (&gt;25 dB), up to 6 dBi peak gain, and up to 90% peak efficiency.
            </p>

            {/* 3 Metric Pill Blocks */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-white/90 backdrop-blur-xl border border-[#E3D4BA] rounded-2xl p-4 text-center transition-all duration-300 shadow-sm hover:border-[#4C8DF6]">
                <div className="text-[10px] font-bold text-[#5B6B82] uppercase font-mono">
                  Efficiency
                </div>
                <div className="text-sm sm:text-base font-black text-[#1F4FD8] font-mono mt-1">
                  90% Peak
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-xl border border-[#E3D4BA] rounded-2xl p-4 text-center transition-all duration-300 shadow-sm hover:border-[#4C8DF6]">
                <div className="text-[10px] font-bold text-[#5B6B82] uppercase font-mono">
                  Spectrum
                </div>
                <div className="text-sm sm:text-base font-black text-[#1F4FD8] font-mono mt-1">
                  600–6000 MHz
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-xl border border-[#E3D4BA] rounded-2xl p-4 text-center transition-all duration-300 shadow-sm hover:border-[#4C8DF6]">
                <div className="text-[10px] font-bold text-[#5B6B82] uppercase font-mono">
                  Dimensions
                </div>
                <div className="text-xs sm:text-sm font-black text-[#0b1f3a] font-mono mt-1">
                  190 x 140 mm
                </div>
              </div>
            </div>

            {/* Action Buttons & Badges */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={onContact}
                className="px-7 py-3.5 rounded-2xl bg-[#1F4FD8] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(31,79,216,0.3)] cursor-pointer hover:-translate-y-0.5"
              >
                Contact Us Now
              </button>

              <a
                href="https://skymirr.com/wp-content/uploads/2026/06/TAMP161.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FFFFFF] text-[#0b1f3a] text-xs font-bold uppercase tracking-wider transition-all border border-[#E3D4BA] shadow-sm hover:border-[#4C8DF6] cursor-pointer hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#1F4FD8]" />
                <span>Datasheet</span>
              </a>

              <a
                href="https://www.digikey.com/en/supplier-centers/skymirr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#E8F0FE] hover:bg-[#E3D4BA] text-[#0B1F3A] text-xs font-bold uppercase tracking-wider transition-all border border-[#E3D4BA] cursor-pointer hover:-translate-y-0.5 shadow-2xs"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>DigiKey</span>
              </a>

              <a
                href="https://www.amazon.com/s?k=skymirr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center p-2 px-4 rounded-2xl bg-white hover:bg-[#FFFFFF] border border-[#E3D4BA] shadow-sm transition-all hover:scale-105"
              >
                <img
                  src="/images/tamp161/amazon-buy.png"
                  alt="Buy at Amazon"
                  className="h-5 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Product Image with Lightbox Zoom */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => openLightbox("/images/tamp161/tamp161.png", "TAMP161 External MIMO Antenna Module", "Hardware Specification")}
              className="relative group bg-white/90 backdrop-blur-3xl rounded-[32px] p-8 border border-[#E3D4BA] shadow-2xl hover:border-[#4C8DF6] transition-all duration-500 w-full max-md flex items-center justify-center cursor-pointer min-h-[320px]"
            >
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-[#0b1f3a]/10 text-[#0b1f3a] group-hover:bg-[#1F4FD8] group-hover:text-white transition-colors">
                <ZoomIn className="w-5 h-5" />
              </div>
              <img
                src="/images/tamp161/tamp161.png"
                alt="TAMP161 External MIMO Antenna"
                className="max-h-72 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute bottom-4 left-6 text-xs font-mono text-[#5B6B82] font-semibold bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#E3D4BA]">
                TAMP161 (190 x 140 mm)
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            INTRODUCTION & APPLICATIONS & FEATURES BENTO
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-[#E3D4BA]">
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] space-y-3 shadow-xl">
              <h3 className="text-xs font-bold text-[#1F4FD8] uppercase tracking-widest font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4C8DF6]" />
                Introduction
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed font-normal">
                The TAMP161 is a MIMO Omnidirectional Antenna module supporting 4G LTE and 5G Sub-6 bands, with superior gain and isolation. It supports 2x2 MIMO at the low band and 4x4 MIMO in mid/high bands. Engineered with MuLCAT™ positive coupling control for advanced cellular routers and CPE gateways.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] space-y-3 shadow-xl">
              <h3 className="text-xs font-bold text-[#1F4FD8] uppercase tracking-widest font-mono flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#4C8DF6]" />
                Target Applications
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed font-normal">
                Ideal for 4G/5G routers, gateways, and connected devices requiring stable, wide-band MIMO performance. Common deployments include Enterprise and Home Networking, Industrial IoT, Logistics, Transportation Systems, and CPE Gateways.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] space-y-4 shadow-xl">
            <h3 className="text-xs font-bold text-[#1F4FD8] uppercase tracking-widest font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#4C8DF6]" />
              Features and Benefits
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#0b1f3a]">
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0 mt-0.5" />
                <span className="font-normal">High Efficiency MIMO Omnidirectional Antenna Module covering ALL 4G LTE and 5G Sub-6 Bands</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0 mt-0.5" />
                <span className="font-normal">Powered by MuLCAT™ Technology (Positive Coupling Resonance)</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0 mt-0.5" />
                <span className="font-normal">Antenna Elements: Ant 1 (5G Main), Ant 2 (Aux), Ant 3 (Aux), Ant 4 (Main)</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0 mt-0.5" />
                <span className="font-normal">High Port-to-Port Isolation &gt; 25 dB across entire spectrum</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0 mt-0.5" />
                <span className="font-normal">High Peak Gain up to 6 dBi &amp; Peak Efficiency up to 90%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================
            PERFORMANCE SECTION (VSWR & Efficiency Charts)
            ======================================================== */}
        <div className="space-y-10 pt-12 border-t border-[#E3D4BA]">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3.5 py-1 rounded-full border border-[#E3D4BA]">
              Chamber Measurement Data
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-sans">
              Performance Characteristics
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B82] font-medium">
              Measured in calibrated 3D spherical anechoic chambers across all Sub-6 bands. Click any chart to zoom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VSWR Chart */}
            <div
              onClick={() =>
                openLightbox(
                  "/images/tamp161/161-vswr.jpg",
                  "TAMP161 VSWR vs Frequency Curve",
                  "Voltage Standing Wave Ratio"
                )
              }
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl hover:shadow-2xl hover:border-[#4C8DF6] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-[#E3D4BA] pb-3 mb-4">
                <span className="text-xs font-bold text-[#0b1f3a] font-mono uppercase tracking-wider">
                  VSWR Characteristic
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#1F4FD8] font-semibold group-hover:translate-x-0.5 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to zoom</span>
                </span>
              </div>
              <div className="h-64 sm:h-72 flex items-center justify-center overflow-hidden bg-[#FFFFFF] rounded-2xl p-4 border border-[#E3D4BA] shadow-inner">
                <img
                  src="/images/tamp161/161-vswr.jpg"
                  alt="TAMP161 VSWR"
                  className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-4 text-xs text-[#5B6B82] text-center font-mono">
                Continuous VSWR &lt; 2.5:1 across 617 - 5925 MHz
              </div>
            </div>

            {/* Efficiency & Peak Gain Chart */}
            <div
              onClick={() =>
                openLightbox(
                  "/images/tamp161/161-efficiency.jpg",
                  "TAMP161 Radiation Efficiency & Peak Gain",
                  "Gain & Efficiency Measurement"
                )
              }
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl hover:shadow-2xl hover:border-[#4C8DF6] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-[#E3D4BA] pb-3 mb-4">
                <span className="text-xs font-bold text-[#0b1f3a] font-mono uppercase tracking-wider">
                  Efficiency &amp; Peak Gain
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#1F4FD8] font-semibold group-hover:translate-x-0.5 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to zoom</span>
                </span>
              </div>
              <div className="h-64 sm:h-72 flex items-center justify-center overflow-hidden bg-[#FFFFFF] rounded-2xl p-4 border border-[#E3D4BA] shadow-inner">
                <img
                  src="/images/tamp161/161-efficiency.jpg"
                  alt="TAMP161 Efficiency and Peak Gain"
                  className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-4 text-xs text-[#5B6B82] text-center font-mono">
                Efficiency up to 90%, peak gain up to 6 dBi
              </div>
            </div>
          </div>

          {/* ========================================================
              ANTENNA ISOLATION (6-Chart Grid)
              ======================================================== */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#E3D4BA] pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#0b1f3a] uppercase font-sans">
                  Antenna Isolation
                </h3>
                <p className="text-xs text-[#5B6B82] font-medium">
                  Inter-port isolation curves between all four 5G MIMO elements (&gt; 25 dB)
                </p>
              </div>
              <span className="text-xs font-mono text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-1 rounded-full hidden sm:inline-block border border-[#E3D4BA]">
                Inter-element &gt; 25 dB
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {isolationCharts.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    openLightbox(item.src, item.title, "Inter-Port Isolation")
                  }
                  className="bg-white/90 backdrop-blur-2xl rounded-3xl p-5 border border-[#E3D4BA] shadow-xl hover:shadow-2xl hover:border-[#4C8DF6] transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#0b1f3a] font-mono mb-3">
                    <span>{item.title}</span>
                    <ZoomIn className="w-3.5 h-3.5 text-[#5B6B82] group-hover:text-[#1F4FD8] transition-colors" />
                  </div>
                  <div className="h-44 sm:h-48 bg-[#FFFFFF] rounded-2xl p-3 flex items-center justify-center overflow-hidden border border-[#E3D4BA] shadow-inner">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              3D RADIATION PATTERNS (4-Chart Row)
              ======================================================== */}
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-[#E3D4BA] pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#0b1f3a] uppercase font-sans">
                  3D Radiation Patterns
                </h3>
                <p className="text-xs text-[#5B6B82] font-medium">
                  3D spherical radiation field across low, mid, and high 5G Sub-6 bands
                </p>
              </div>
              <span className="text-xs font-mono text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-1 rounded-full hidden sm:inline-block border border-[#E3D4BA]">
                Omnidirectional 360°
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {radiationPatterns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    openLightbox(item.src, item.title, "3D Radiation Pattern")
                  }
                  className="bg-white/90 backdrop-blur-2xl rounded-3xl p-5 border border-[#E3D4BA] shadow-xl hover:shadow-2xl hover:border-[#4C8DF6] transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#0b1f3a] font-mono mb-3">
                    <span>{item.title}</span>
                    <ZoomIn className="w-3.5 h-3.5 text-[#5B6B82] group-hover:text-[#1F4FD8] transition-colors" />
                  </div>
                  <div className="h-40 sm:h-48 bg-[#FFFFFF] rounded-2xl p-3 flex items-center justify-center overflow-hidden border border-[#E3D4BA] shadow-inner">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              PEAK GAIN / EFFICIENCY MATRIX TABLE (Professional Datasheet Look)
              ======================================================== */}
          <div className="space-y-6 pt-6">
            <div className="border-b border-[#E3D4BA] pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-[#0b1f3a] uppercase font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#1F4FD8]" />
                  Peak Gain / Efficiency Matrix Table
                </h3>
                <p className="text-xs text-[#5B6B82] font-medium mt-0.5">
                  Full RF performance across all primary global 4G LTE and 5G NR channels
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#5B6B82] bg-white px-3 py-1 rounded-full border border-[#E3D4BA] shadow-2xs">
                Verified Datasheet
              </span>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-[#E3D4BA] shadow-xl bg-white/90 backdrop-blur-2xl">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-5 font-bold">Element</th>
                    <th className="py-4 px-5 font-bold">Metric</th>
                    <th className="py-4 px-5 font-medium">617-698 MHz</th>
                    <th className="py-4 px-5 font-medium">698-960 MHz</th>
                    <th className="py-4 px-5 font-medium">1710-2170 MHz</th>
                    <th className="py-4 px-5 font-medium">2300-2690 MHz</th>
                    <th className="py-4 px-5 font-medium">3300-4200 MHz</th>
                    <th className="py-4 px-5 font-medium">4400-5000 MHz</th>
                    <th className="py-4 px-5 font-medium">5150-5925 MHz</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E3D4BA] font-mono text-[#0b1f3a] text-xs">
                  <tr className="hover:bg-[#E8F0FE] transition-colors bg-white">
                    <td className="py-4 px-5 font-bold text-[#1F4FD8]">ANT 1 (Main)</td>
                    <td className="py-4 px-5 text-[#5B6B82] font-semibold">Efficiency (%)</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">68%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">74%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">82%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">88%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">90%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">84%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">78%</td>
                  </tr>
                  <tr className="hover:bg-[#E8F0FE] transition-colors bg-[#FFFFFF]">
                    <td className="py-4 px-5 font-bold text-[#1F4FD8]">ANT 1 (Main)</td>
                    <td className="py-4 px-5 text-[#5B6B82] font-semibold">Peak Gain (dBi)</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">3.2</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">3.8</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">4.5</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">5.2</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">6.0</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">5.5</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">4.8</td>
                  </tr>
                  <tr className="hover:bg-[#E8F0FE] transition-colors bg-white">
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">ANT 2 (Aux)</td>
                    <td className="py-4 px-5 text-[#5B6B82] font-semibold">Efficiency (%)</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">65%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">70%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">79%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">85%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">88%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">82%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">76%</td>
                  </tr>
                  <tr className="hover:bg-[#E8F0FE] transition-colors bg-[#FFFFFF]">
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">ANT 2 (Aux)</td>
                    <td className="py-4 px-5 text-[#5B6B82] font-semibold">Peak Gain (dBi)</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">3.0</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">3.5</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">4.2</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">5.0</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">5.8</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">5.2</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">4.6</td>
                  </tr>
                  <tr className="hover:bg-[#E8F0FE] transition-colors bg-white">
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">ANT 3 (Aux)</td>
                    <td className="py-4 px-5 text-[#5B6B82] font-semibold">Efficiency (%)</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">66%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">72%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">81%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">86%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">89%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">83%</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">77%</td>
                  </tr>
                  <tr className="hover:bg-[#E8F0FE] transition-colors bg-[#FFFFFF]">
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">ANT 4 (Main)</td>
                    <td className="py-4 px-5 text-[#5B6B82] font-semibold">Peak Gain (dBi)</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">3.2</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">3.8</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">4.5</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">5.2</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">6.0</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">5.5</td>
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">4.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================================================
              CABLE LOSS & MECHANICAL DIMENSIONS
              ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            {/* LMR195 Cable Loss Table */}
            <div className="space-y-4 bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl">
              <div className="border-b border-[#E3D4BA] pb-3">
                <h4 className="text-sm font-bold text-[#0b1f3a] font-mono uppercase tracking-wider">
                  LMR195 Cable Loss Table
                </h4>
                <p className="text-[11px] text-[#5B6B82] font-medium mt-0.5">
                  Loss metrics per cable length for standard 0.5m CFD200 / LMR195 pigtail
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#E3D4BA] shadow-2xs">
                <table className="w-full text-xs font-mono">
                  <thead className="bg-[#FFFFFF] text-[11px] text-[#0b1f3a] uppercase font-bold">
                    <tr>
                      <th className="p-3.5 text-left">Frequency</th>
                      <th className="p-3.5 text-right">Loss for 0.5m (dB)</th>
                      <th className="p-3.5 text-right">Loss for 1.0m (dB)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E3D4BA] text-[#0b1f3a]">
                    <tr className="hover:bg-[#E8F0FE]">
                      <td className="p-3.5 font-medium">617 MHz</td>
                      <td className="p-3.5 text-right text-[#1F4FD8] font-bold">-0.33 dB</td>
                      <td className="p-3.5 text-right text-[#5B6B82]">-0.65 dB</td>
                    </tr>
                    <tr className="hover:bg-[#E8F0FE]">
                      <td className="p-3.5 font-medium">960 MHz</td>
                      <td className="p-3.5 text-right text-[#1F4FD8] font-bold">-0.42 dB</td>
                      <td className="p-3.5 text-right text-[#5B6B82]">-0.77 dB</td>
                    </tr>
                    <tr className="hover:bg-[#E8F0FE]">
                      <td className="p-3.5 font-medium">1710 MHz</td>
                      <td className="p-3.5 text-right text-[#1F4FD8] font-bold">-0.58 dB</td>
                      <td className="p-3.5 text-right text-[#5B6B82]">-1.08 dB</td>
                    </tr>
                    <tr className="hover:bg-[#E8F0FE]">
                      <td className="p-3.5 font-medium">2690 MHz</td>
                      <td className="p-3.5 text-right text-[#1F4FD8] font-bold">-0.74 dB</td>
                      <td className="p-3.5 text-right text-[#5B6B82]">-1.38 dB</td>
                    </tr>
                    <tr className="hover:bg-[#E8F0FE]">
                      <td className="p-3.5 font-medium">3800 MHz</td>
                      <td className="p-3.5 text-right text-[#1F4FD8] font-bold">-0.91 dB</td>
                      <td className="p-3.5 text-right text-[#5B6B82]">-1.70 dB</td>
                    </tr>
                    <tr className="hover:bg-[#E8F0FE]">
                      <td className="p-3.5 font-medium">5925 MHz</td>
                      <td className="p-3.5 text-right text-[#1F4FD8] font-bold">-1.18 dB</td>
                      <td className="p-3.5 text-right text-[#5B6B82]">-2.22 dB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dimension Schematic Graphic */}
            <div
              onClick={() =>
                openLightbox(
                  "/images/tamp161/dimensions.jpg",
                  "TAMP161 Mechanical Outline & Dimensions",
                  "Mechanical Engineering"
                )
              }
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl hover:shadow-2xl hover:border-[#4C8DF6] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-[#E3D4BA] pb-3">
                <div>
                  <h4 className="text-sm font-bold text-[#0b1f3a] font-mono uppercase tracking-wider">
                    Dimension Schematic (Unit: mm)
                  </h4>
                  <p className="text-[11px] text-[#5B6B82] font-medium">
                    190.00 mm x 140.00 mm x 22.50 mm
                  </p>
                </div>
                <ZoomIn className="w-4 h-4 text-[#5B6B82] group-hover:text-[#1F4FD8] transition-colors" />
              </div>

              <div className="h-48 sm:h-56 flex items-center justify-center p-4 bg-[#FFFFFF] rounded-2xl my-4 overflow-hidden border border-[#E3D4BA] shadow-inner">
                <img
                  src="/images/tamp161/dimensions.jpg"
                  alt="TAMP161 Dimensions Diagram"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              <span className="text-[10px] font-mono text-center text-[#5B6B82]">
                Click diagram for full engineering drawing
              </span>
            </div>

          </div>
        </div>

        {/* ========================================================
            DOWNLOAD MASTER CATALOG BANNER
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-[#E3D4BA] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-base sm:text-lg font-black text-[#0b1f3a] font-sans tracking-tight">
              Looking for other antenna configurations?
            </h4>
            <p className="text-xs sm:text-sm text-[#5B6B82] mt-1 font-normal">
              Download the Master Product Catalog to explore complete antenna offerings across global 4G, 5G Sub-6, and Wi-Fi 7.
            </p>
          </div>
          <a
            href="https://skymirr.com/wp-content/uploads/2026/06/TAMP161.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#1F4FD8] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(31,79,216,0.3)] shrink-0 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Download Catalog</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ========================================================
          FULLSCREEN LIGHTBOX IMAGE ZOOM MODAL
          ======================================================== */}
      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0B1F3A]/85 backdrop-blur-lg animate-fade-in cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-3xl rounded-[32px] overflow-hidden shadow-2xl max-w-4xl w-full p-8 sm:p-12 border border-[#E3D4BA] animate-slide-up flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between pb-6 border-b border-[#E3D4BA]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
                  {lightbox.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#0b1f3a] mt-0.5 font-sans">
                  {lightbox.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-xl text-[#5B6B82] hover:text-[#0b1f3a] hover:bg-[#E8F0FE] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-10 flex items-center justify-center max-h-[70vh] w-full">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain drop-shadow-xl rounded-2xl bg-[#FFFFFF] p-3 border border-[#E3D4BA]"
              />
            </div>

            <div className="w-full pt-4 border-t border-[#E3D4BA] text-center flex items-center justify-between">
              <span className="font-mono text-xs text-[#5B6B82]">
                SkyMirr Anechoic Chamber Test Data
              </span>
              <button
                onClick={closeLightbox}
                className="px-8 py-3 rounded-xl bg-[#1F4FD8] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
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
