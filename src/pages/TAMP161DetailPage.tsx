import React, { useState } from "react";
<<<<<<< HEAD
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
=======
import { ArrowLeft, ArrowRight, ShoppingCart, X, ZoomIn } from "lucide-react";
>>>>>>> ec859e7 (Update website)

interface TAMP161DetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
<<<<<<< HEAD
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
=======
}

/* ---------- Data (from the TAMP161 datasheet) ---------- */
const IMG = "/images/tamp161";

const radiationPatterns = [
  { title: "Radiation Pattern ANT_1", src: `${IMG}/radiation-pattern1.jpg` },
  { title: "Radiation Pattern ANT_4", src: `${IMG}/radiation-pattern4.jpg` },
  { title: "Radiation Pattern ANT_2", src: `${IMG}/radiation-pattern2.jpg` },
  { title: "Radiation pattern ANT_3", src: `${IMG}/radiation-pattern3.jpg` },
];

const isolationCharts = [
  { title: "ANT1↔ANT2", src: "/images/isolation-1-2.jpg" },
  { title: "ANT1↔ANT3", src: "/images/isolation-1-3.jpg" },
  { title: "ANT1↔ANT4", src: "/images/isolation-1-4.jpg" },
  { title: "ANT2↔ANT3", src: "/images/isolation-2-3.jpg" },
  { title: "ANT2↔ANT4", src: "/images/isolation-2-4.jpg" },
  { title: "ANT3↔ANT4", src: "/images/isolation-3-4.jpg" },
];

const cableLoss = [
  ["617MHz", "-0.33", "-0.61"],
  ["960MHz", "-0.42", "-0.77"],
  ["1710MHz", "-0.55", "-1.05"],
  ["2690MHz", "-0.71", "-1.34"],
  ["3300MHz", "-0.84", "-1.54"],
  ["5000MHz", "-1.03", "-1.95"],
  ["5150MHz", "-1.07", "-2.04"],
  ["5925MHz", "-1.11", "-2.12"],
];

const lowFreq = [617, 699, 746, 824, 894, 960];
const midFreq = [1710, 1850, 1950, 2170, 2305, 2360, 2496, 2690, 3300, 3400, 3600, 3800, 4200, 4400, 5000, 5150, 5925];

interface GainBlock {
  ant: string;
  freq: number[];
  eff: number[];
  gain: number[];
  rowSpan?: number;
}

const gainBlocks: GainBlock[] = [
  {
    ant: "ANT 1",
    freq: lowFreq,
    eff: [79.3, 89.9, 77.0, 78.8, 85.2, 68.6],
    gain: [1.9, 2.8, 3.8, 4.1, 4.3, 4.3],
  },
  {
    ant: "ANT 1",
    freq: midFreq,
    eff: [74.1, 62.1, 60.5, 71.0, 52.9, 60.3, 75.2, 77.2, 79.8, 64.9, 77.9, 61.5, 69.2, 60.3, 60.6, 59.7, 84.5],
    gain: [3.6, 3.5, 3.0, 4.2, 2.3, 2.6, 4.8, 3.7, 3.4, 2.6, 2.3, 3.3, 4.4, 3.3, 4.5, 4.2, 5.8],
  },
  {
    ant: "ANT 2",
    freq: midFreq,
    eff: [74.8, 67.7, 69.4, 93.8, 53.1, 62.6, 73.5, 65.8, 86.0, 62.5, 71.2, 60.1, 79.8, 65.7, 74.4, 75.2, 74.8],
    gain: [3.5, 3.2, 3.2, 3.7, 1.8, 2.2, 2.5, 1.9, 4.1, 2.2, 3.4, 2.4, 4.2, 3.8, 5.1, 4.8, 4.4],
  },
  {
    ant: "ANT 3",
    freq: midFreq,
    eff: [60.4, 69.3, 63.1, 82.8, 50.4, 59.5, 70.6, 64.8, 85.7, 62.3, 72.0, 61.2, 79.0, 67.4, 67.3, 68.5, 83.3],
    gain: [3.2, 3.1, 2.9, 3.6, 1.6, 1.9, 2.5, 2.1, 3.8, 2.4, 3.1, 2.5, 4.4, 4.3, 5.4, 4.7, 4.7],
  },
  {
    ant: "ANT 4",
    freq: lowFreq,
    eff: [84.6, 96.3, 80.4, 89.6, 85.0, 66.2],
    gain: [2.6, 3.0, 2.4, 3.7, 4.2, 3.2],
  },
  {
    ant: "ANT 4",
    freq: midFreq,
    eff: [69.5, 57.8, 66.2, 76.0, 52.5, 61.2, 74.7, 77.9, 79.9, 66.9, 79.2, 63.9, 68.2, 67.7, 63.3, 61.0, 82.1],
    gain: [3.9, 2.9, 3.9, 6.5, 2.3, 3.3, 4.2, 3.8, 3.1, 2.3, 2.8, 3.0, 4.9, 3.9, 4.2, 3.7, 5.9],
  },
];

/* ---------- Shared style tokens (site palette) ---------- */
const card = "bg-white rounded-3xl border border-[#4C8DF6]";
const cardPad = `${card} p-6 sm:p-8`;
const h3 = "text-sm font-black uppercase tracking-widest text-[#1F4FD8] font-mono";
const btnPrimary =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#1F4FD8] text-white text-xs font-bold uppercase tracking-wider cursor-pointer";

export const TAMP161DetailPage: React.FC<TAMP161DetailPageProps> = ({ onBack, onContact }) => {
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, src: "", title: "" });

  const open = (src: string, title: string) => setLightbox({ isOpen: true, src, title });
  const close = () => setLightbox((p) => ({ ...p, isOpen: false }));

  return (
    <div className="tamp161-detail pt-[72px] pb-24 bg-white text-[#0B1F3A]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E3D4BA] py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#5B6B82] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
>>>>>>> ec859e7 (Update website)
            <span>Back to All Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B82]">
            <span>Antennas</span>
            <span>/</span>
<<<<<<< HEAD
            <span className="text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-0.5 rounded-full tracking-wider border border-[#E3D4BA]">
=======
            <span className="text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-0.5 rounded-full tracking-wider">
>>>>>>> ec859e7 (Update website)
              TAMP161
            </span>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-14">
        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] text-[#1F4FD8] text-xs font-mono font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#1F4FD8]" />
                <span>Now Available</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-[#1F4FD8] tracking-tight leading-tight">
                TAMP161
              </h1>

              <h2 className="text-base sm:text-xl font-semibold text-[#0B1F3A] leading-snug">
>>>>>>> ec859e7 (Update website)
                4G LTE / 5G External MIMO Broadband High Performing Omnidirectional Antenna Module
              </h2>
            </div>

<<<<<<< HEAD
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

=======
            <p className="text-sm text-[#5B6B82] leading-relaxed">
              The TAMP161 is a high-efficiency MIMO Omnidirectional Antenna module engineered to support the full
              spectrum of 4G LTE and 5G Sub-6 frequencies, including the critical 600 MHz band. Featuring 2×2 and 4×4
              MIMO support, high isolation, up to 6 dBi peak gain, and up to 90% efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                ["Efficiency", "90% Efficiency"],
                ["Frequency", "600-6000 MHz"],
                ["Size", "190 x 140 x 22.5 mm"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-[#4C8DF6] bg-white p-4 text-center">
                  <div className="text-[10px] font-bold text-[#5B6B82] uppercase font-mono">{k}</div>
                  <div className="text-sm font-black text-[#1F4FD8] font-mono mt-1">{v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button onClick={onContact} className={btnPrimary}>
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onContact} className={btnPrimary}>
                <span>Pre-order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
>>>>>>> ec859e7 (Update website)
              <a
                href="https://www.amazon.com/s?k=skymirr"
                target="_blank"
                rel="noreferrer"
<<<<<<< HEAD
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
=======
                className={btnPrimary}
              >
                <span>Buy Online</span>
                <ShoppingCart className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="https://www.amazon.com/s?k=skymirr"
                target="_blank"
                rel="noreferrer"
                aria-label="Buy at Amazon"
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-white border border-[#FF6A00]/50"
              >
                <img src={`${IMG}/amazon-buy.png`} alt="Amazon" className="h-7 w-auto object-contain" />
              </a>
              <span
                aria-label="D&H"
                className="inline-flex items-center px-4 py-2 rounded-2xl bg-white border border-[#FF6A00]/50"
              >
                <svg viewBox="0 0 60 36" className="h-7 w-auto" role="img" aria-label="D&H">
                  <rect width="60" height="36" rx="3" fill="#D71920" />
                  <text
                    x="30"
                    y="25"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontWeight="700"
                    fontSize="19"
                    fill="#fff"
                  >
                    D&amp;H
                  </text>
                </svg>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => open(`${IMG}/tamp161.png`, "TAMP161 External MIMO Antenna Module")}
              className={`${card} relative w-full p-8 flex items-center justify-center min-h-[320px] cursor-zoom-in`}
            >
              <span className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#E8F0FE] text-[#1F4FD8]">
                <ZoomIn className="w-5 h-5" />
              </span>
              <img
                src={`${IMG}/tamp161.png`}
                alt="TAMP161 External MIMO Antenna"
                className="max-h-80 w-auto object-contain"
                decoding="async"
              />
            </button>
          </div>
        </div>

        {/* ================= INTRO / FEATURES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className={`${cardPad} space-y-6`}>
            <div className="space-y-3">
              <h3 className={h3}>Introduction</h3>
              <p className="text-sm text-[#0B1F3A] leading-relaxed">
                The TAMP161 is a MIMO Omnidirectional Antenna module supporting entire 4G LTE and 5G sub6 bands,
                including the very low 600 MHz band, with high radiation performance and isolation. It supports 2×2
                MIMO at the low bands and 4×4 MIMO in mid/high bands. It can be used for advanced wireless
                communication devices or systems.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className={h3}>Application</h3>
              <p className="text-sm text-[#0B1F3A] leading-loose">
                The TAMP161 is ideal for 4G/5G routers, gateways, and connected devices requiring stable, wideband
                MIMO performance. Common applications include{" "}
                {["Enterprise and Home Networking", "Industrial IoT", "Logistics and Asset Tracking", "Transportation Systems"].map(
                  (t) => (
                    <React.Fragment key={t}>
                      <strong className="bg-[#E8F0FE] text-[#0B1F3A] px-1.5 rounded">{t}</strong>,{" "}
                    </React.Fragment>
                  )
                )}
                and <strong className="bg-[#E8F0FE] text-[#0B1F3A] px-1.5 rounded">CPE Deployments</strong>. Designed
                for indoor use, it provides dependable connectivity wherever strong, multi-band RF performance is
                required.
>>>>>>> ec859e7 (Update website)
              </p>
            </div>
          </div>

<<<<<<< HEAD
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
=======
          <div className={`${cardPad} space-y-4`}>
            <h3 className={h3}>Features and Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#0B1F3A] marker:text-[#1F4FD8]">
              <li>High Efficiency MIMO Omnidirectional Antenna Module Covering ALL 4G LTE and 5G Sub 6 Bands</li>
              <li>
                Powered by MuLCAT<sup>TM</sup> Technology
              </li>
              <li>
                Operating frequency
                <div className="mt-1 space-y-0.5">
                  <div>Ant 1: 5G Main (617 ~ 5925MHz), White</div>
                  <div>Ant 2: 5G Aux (1710 ~ 5925MHz), Red</div>
                  <div>Ant 3: 5G Aux (1710 ~ 5925MHz), Red</div>
                  <div>Ant 4: 5G Main (617 ~ 5925MHz), White</div>
                </div>
              </li>
              <li>Supports 4×4 MIMO at 1710~6000MHz</li>
              <li>Supports 2×2 MIMO at 600~960MHz</li>
              <li>High Peak Gain up to 6 dBi</li>
              <li>High Efficiency up to 90%</li>
              <li>RoHS Compliance</li>
              <li>Antenna Size: 190 x 140 x 22.5 mm</li>
              <li>Cable length: 0.5m</li>
              <li>Connector: SMA (male)</li>
              <li>Packaging: Available in a box along with cables</li>
>>>>>>> ec859e7 (Update website)
            </ul>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* ================= CABLE LOSS + DIMENSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className={cardPad}>
            <h3 className="text-sm font-black text-[#1F4FD8] font-mono mb-4">LMR195 Cable loss</h3>
            <div className="overflow-hidden rounded-xl border border-[#E3D4BA]">
              <table className="w-full text-xs font-mono">
                <thead className="bg-[#1F4FD8] text-white">
                  <tr>
                    <th className="p-3 text-left font-bold">Frequency</th>
                    <th className="p-3 text-left font-bold">Loss for 1m cable (dB)</th>
                    <th className="p-3 text-left font-bold">Loss for 2m cable (dB)</th>
                  </tr>
                </thead>
                <tbody className="text-[#0B1F3A]">
                  {cableLoss.map(([f, a, b], i) => (
                    <tr key={f} className={i % 2 ? "bg-[#F4F8FF]" : "bg-white"}>
                      <td className="p-3">{f}</td>
                      <td className="p-3">{a}</td>
                      <td className="p-3">{b}</td>
                    </tr>
                  ))}
>>>>>>> ec859e7 (Update website)
                </tbody>
              </table>
            </div>
          </div>

<<<<<<< HEAD
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
=======
          <button
            type="button"
            onClick={() => open(`${IMG}/dimensions.jpg`, "Dimension (unit: mm)")}
            className={`${cardPad} text-left cursor-zoom-in flex flex-col`}
          >
            <h3 className="text-xl font-black text-[#1F4FD8] mb-4">Dimension (unit: mm)</h3>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={`${IMG}/dimensions.jpg`}
                alt="TAMP161 dimensions (mm)"
                className="w-full max-h-[420px] object-contain"
                decoding="async"
              />
            </div>
          </button>
        </div>

        {/* ================= CATALOG BANNER ================= */}
        <div className="rounded-2xl border border-[#E3D4BA] bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-black text-[#0B1F3A]">Looking for some other Antenna?</h4>
            <p className="text-xs text-[#5B6B82] mt-1">
              Download the Master Product Catalog to see complete Antenna offerings.
            </p>
          </div>
          <button type="button" className={`${btnPrimary} shrink-0`}>
            Download Catalog
          </button>
        </div>

        {/* ================= PERFORMANCE ================= */}
        <div className="space-y-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1F4FD8] text-center tracking-tight">Performance</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <button
              type="button"
              onClick={() => open(`${IMG}/161-vswr.jpg`, "VSWR")}
              className={`${cardPad} text-left cursor-zoom-in`}
            >
              <img src={`${IMG}/161-vswr.jpg`} alt="TAMP161 VSWR" className="w-full h-auto object-contain" decoding="async" />
            </button>
            <button
              type="button"
              onClick={() => open(`${IMG}/161-efficiency.jpg`, "Efficiency and Peak Gain")}
              className={`${cardPad} text-left cursor-zoom-in`}
            >
              <img
                src={`${IMG}/161-efficiency.jpg`}
                alt="TAMP161 Efficiency and Peak Gain"
                className="w-full h-auto object-contain"
                decoding="async"
              />
            </button>
          </div>

          {/* Isolation */}
          <div className="space-y-5">
            <h3 className={h3}>Antenna Isolation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isolationCharts.map((c) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => open(c.src, `Antenna Isolation ${c.title}`)}
                  className={`${card} p-4 cursor-zoom-in`}
                >
                  <img src={c.src} alt={`Isolation ${c.title}`} className="w-full h-auto object-contain" decoding="async" />
                </button>
              ))}
            </div>
          </div>

          {/* Radiation patterns */}
          <div className="space-y-5">
            <h3 className={h3}>Radiation Patterns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {radiationPatterns.map((p) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => open(p.src, p.title)}
                  className={`${card} p-4 cursor-zoom-in`}
                >
                  <img src={p.src} alt={p.title} className="w-full h-auto object-contain" decoding="async" />
                </button>
              ))}
            </div>
          </div>

          {/* Peak gain / efficiency tables */}
          <div className="space-y-5">
            <h3 className={h3}>Peak Gain/Efficiency</h3>
            <div className="space-y-5">
              {gainBlocks.map((b, i) => (
                <div key={i} className="overflow-x-auto rounded-xl border border-[#4C8DF6] bg-white">
                  <table className="w-full text-xs font-mono text-center border-collapse">
                    <tbody className="text-[#0B1F3A]">
                      <tr className="bg-[#E8F0FE] text-[#1F4FD8] font-bold">
                        <td rowSpan={3} className="p-3 border-r border-[#4C8DF6]/40 font-black text-sm whitespace-nowrap">
                          {b.ant}
                        </td>
                        <td className="p-2.5 text-right whitespace-nowrap">Frequency [MHz]</td>
                        {b.freq.map((f) => (
                          <td key={f} className="p-2.5">{f}</td>
                        ))}
                      </tr>
                      <tr className="border-t border-[#E3D4BA]">
                        <td className="p-2.5 text-right whitespace-nowrap font-semibold">Efficiency [%]</td>
                        {b.eff.map((v, j) => (
                          <td key={j} className="p-2.5">{v.toFixed(1)}</td>
                        ))}
                      </tr>
                      <tr className="border-t border-[#E3D4BA] bg-[#F4F8FF]">
                        <td className="p-2.5 text-right whitespace-nowrap font-semibold">Peak Gain [dBi]</td>
                        {b.gain.map((v, j) => (
                          <td key={j} className="p-2.5">{v.toFixed(1)}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox (full-resolution view) */}
      {lightbox.isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0B1F3A]/85 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-auto p-6 sm:p-8 border border-[#4C8DF6]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E3D4BA]">
              <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A]">{lightbox.title}</h3>
              <button
                onClick={close}
                aria-label="Close"
                className="p-2 rounded-xl text-[#5B6B82] cursor-pointer"
>>>>>>> ec859e7 (Update website)
              >
                <X className="w-5 h-5" />
              </button>
            </div>
<<<<<<< HEAD

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
=======
            <div className="pt-6 flex justify-center">
              <img src={lightbox.src} alt={lightbox.title} className="max-w-full h-auto object-contain" />
>>>>>>> ec859e7 (Update website)
            </div>
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> ec859e7 (Update website)
