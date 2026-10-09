import React, { useState } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  Sparkles,
  ZoomIn,
  AlertTriangle
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

interface SkyTrackerDetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export const SkyTrackerDetailPage: React.FC<SkyTrackerDetailPageProps> = ({
  onBack,
  onContact,
}) => {
  const [activeMode, setActiveMode] = useState<"normal" | "recovery">("normal");
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

  const sensorSpecs = [
    { label: "Temperature", value: "-20°C to +50°C", note: "Continuous cold-chain integrity" },
    { label: "Humidity", value: "0% to 100% RH", note: "Moisture & condensation monitoring" },
    { label: "Impact / G-Forces", value: "0.1g to +10g", note: "Shock, drop & collision alerts" },
    { label: "Weight", value: "0 to 2,000 kg", note: "Pallet load sensor integration" },
    { label: "Gyroscope", value: "X / Y / Z Axes", note: "Tilt, tip-over & roll detection" },
    { label: "Barometric Altitude", value: "±3 ft (Z-Axis)", note: "Vertical shelf-level warehouse tracking" },
    { label: "GNSS Positioning", value: "~10 ft Accuracy", note: "Global outdoor satellite positioning" },
    { label: "Event Response", value: "< 2 Minutes", note: "Immediate tamper & theft dispatch" },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-[#E3D4BA] py-3.5 px-4 sm:px-8 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#5B6B82] hover:text-[#1F4FD8] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B82]">
            <span className="hidden sm:inline">IoT Hardware</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#E3D4BA]">
              SkyTracker (LIPA122)
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-14 sm:py-20">
        <PageBackdrop />
        
        {/* Live Electromagnetic Sinusoidal Wave Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.018}
            amplitude={28}
            speed={0.022}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#4C8DF6_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#4C8DF6]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#4C8DF6]">
            <Sparkles className="w-3.5 h-3.5 text-[#4C8DF6] animate-pulse" />
            <span>Industrial IoT Asset Tracking &middot; Multi-Sensor Suite</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                SkyTracker (LIPA122)
              </h1>
              <p className="text-base sm:text-lg text-[#C9D6EE] leading-relaxed font-normal max-w-2xl">
                Real-time IoT cargo visibility, barometric vertical Z-axis shelf positioning, and automated tamper alerts for high-value logistics and cold-chain supply.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://skymirr.com/wp-content/uploads/2026/02/SkyTracker-Data-Sheet-final.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4C8DF6] to-[#1F4FD8] hover:from-[#4C8DF6] hover:to-[#4C8DF6] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Datasheet (PDF)</span>
                </a>
                <button
                  onClick={onContact}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer backdrop-blur-md"
                >
                  <span>Request Enterprise Evaluation</span>
                </button>
              </div>
            </div>

            {/* Quick KPI Dock */}
            <div className="lg:col-span-4 bg-[#0B1F3A]/85 p-6 rounded-3xl border border-[#4C8DF6]/30 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[#4C8DF6] font-bold">STATUS</span>
                <span className="text-[#1F4FD8] font-bold">● ACTIVE MONITORING</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#C9D6EE]/70">Z-Axis Accuracy:</span>
                <span className="text-white font-bold">±3 Feet (Shelf-Level)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#C9D6EE]/70">Alert Latency:</span>
                <span className="text-white font-bold">&lt; 2 Minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#C9D6EE]/70">RF Bands:</span>
                <span className="text-white font-bold">600/700 MHz + Wi-Fi Mesh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#C9D6EE]/70">Sensors:</span>
                <span className="text-white font-bold">8 Dedicated Channels</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. HARDWARE PEDESTAL & NETWORK ARCHITECTURE STAGE               */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: LIPA122 Hardware Showcase (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3D4BA]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F4FD8] font-bold">
                  Hardware Model: LIPA122
                </span>
                <h3 className="text-xl font-black text-[#0b1f3a]">
                  Industrial Multi-Sensor Hardware Unit
                </h3>
              </div>
              <span className="text-xs font-mono text-[#1F4FD8] bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#E3D4BA] font-bold">
                IP67 Rated
              </span>
            </div>

            {/* Hardware Viewport (100% Crisp, ZERO Background Image) */}
            <div
              onClick={() => openLightbox("/images/asset_trackers/at2.jpg", "SkyTracker LIPA122 Hardware Unit")}
              className="relative w-full aspect-[16/11] rounded-2xl bg-gradient-to-b from-[#0B1F3A] to-[#0B1F3A] p-6 flex items-center justify-center cursor-pointer group overflow-hidden border border-[#4C8DF6]/30 shadow-inner"
            >
              {/* Radar pulse rings (Live effect, NOT image) */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-[260px] h-[260px] rounded-full border border-[#4C8DF6]/40 animate-ping [animation-duration:6s]" />
                <div className="absolute w-[180px] h-[180px] rounded-full border border-[#4C8DF6]/30" />
              </div>

              <img
                src="/images/asset_trackers/at2.jpg"
                alt="SkyTracker LIPA122 Hardware Unit"
                className="relative z-10 max-h-56 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />

              <div className="absolute bottom-3 right-3 z-20">
                <span className="text-[10px] font-mono font-bold text-[#4C8DF6] bg-[#0B1F3A]/90 px-3 py-1 rounded-full border border-[#4C8DF6]/40 flex items-center gap-1 shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to zoom</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Rugged all-in-one industrial casing with high-gain internal 600/700 MHz antenna elements, integrated Li-ion power pack, and magnetic chassis mount options.
            </p>
          </div>

          {/* Right Column: Network Topology Viewport (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3D4BA]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F4FD8] font-bold">
                  Network Architecture
                </span>
                <h3 className="text-xl font-black text-[#0b1f3a]">
                  GPS + Wi-Fi Mesh + 4G LTE System
                </h3>
              </div>
              <span className="text-xs font-mono text-[#1F4FD8] bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#E3D4BA] font-bold">
                End-to-End
              </span>
            </div>

            {/* Topology Diagram Viewport */}
            <div
              onClick={() => openLightbox("/images/asset_trackers/at1.jpg", "SkyTracker Network Topology: GPS + Wi-Fi Mesh + 4G LTE")}
              className="relative w-full aspect-[16/11] rounded-2xl bg-[#0B1F3A] p-4 flex items-center justify-center cursor-pointer group overflow-hidden border border-[#4C8DF6]/30 shadow-inner"
            >
              <img
                src="/images/asset_trackers/at1.jpg"
                alt="SkyTracker Network Diagram"
                className="max-h-56 w-auto max-w-full object-contain rounded-xl bg-white p-2 group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-3 right-3 z-20">
                <span className="text-[10px] font-mono font-bold text-[#4C8DF6] bg-[#0B1F3A]/90 px-3 py-1 rounded-full border border-[#4C8DF6]/40 flex items-center gap-1 shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to zoom</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5B6B82] leading-relaxed">
              Maintains unbroken telemetry even inside metal trailers by forming an autonomous Wi-Fi mesh between cargo pallets and the primary gateway uplink.
            </p>
          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. DUAL-MODE OPERATION CONSOLE: NORMAL VS RECOVERY             */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E3D4BA] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
              02 &middot; Dual-Mode Telemetry
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f3a] font-sans">
              Normal Logistics vs Active Cargo Recovery Mode
            </h2>
          </div>

          <div className="inline-flex rounded-xl p-1 bg-white border border-[#E3D4BA] shadow-sm">
            <button
              onClick={() => setActiveMode("normal")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeMode === "normal"
                  ? "bg-[#1F4FD8] text-white shadow-sm"
                  : "text-[#5B6B82] hover:text-[#0b1f3a]"
              }`}
            >
              Normal Logistics Mode
            </button>
            <button
              onClick={() => setActiveMode("recovery")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeMode === "recovery"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-[#5B6B82] hover:text-[#0b1f3a]"
              }`}
            >
              Active Recovery Mode
            </button>
          </div>
        </div>

        {activeMode === "normal" ? (
          /* Normal Logistics Mode View */
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D4BA] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[#1F4FD8] uppercase tracking-wider bg-[#E8F0FE] px-3.5 py-1 rounded-full border border-[#E3D4BA] inline-block">
                ● Normal Logistics Mode Active
              </span>
              <h3 className="text-2xl font-black text-[#0b1f3a]">
                Continuous Location &amp; Environmental Streaming
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                Achieve seamless, continuous visibility of both location and cargo condition. Minimize spoilage, damage, and uncertainty for high-value pharmaceuticals, electronics, and perishable goods.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "On-demand check-ins and scheduled periodic beaconing",
                  "Continuous battery conservation via sleep-wake algorithms",
                  "Multi-node pallet sensor data aggregation",
                  "Geofence route corridor tracking across interstate corridors",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              onClick={() => openLightbox("/images/asset_trackers/normal-mode.jpg", "Normal Logistics Mode: Continuous Multi-Node Tracking")}
              className="lg:col-span-6 bg-[#0B1F3A] rounded-2xl p-4 flex items-center justify-center cursor-pointer group border border-[#E3D4BA]"
            >
              <img
                src="/images/asset_trackers/normal-mode.jpg"
                alt="Normal Logistics Mode"
                className="max-h-64 w-auto object-contain rounded-xl bg-white p-2 group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>
        ) : (
          /* Recovery Mode View */
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3D4BA] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[#1F4FD8] uppercase tracking-wider bg-rose-50 px-3.5 py-1 rounded-full border border-[#E3D4BA] inline-block">
                ● Active Cargo Recovery Mode
              </span>
              <h3 className="text-2xl font-black text-[#0b1f3a]">
                Sub-2-Minute Alert Response &amp; Theft Intervention
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                Activate rapid response during critical events. If boxes detach from pallets or pallets leave the trailer without authorization, SkyTracker instantly triggers high-frequency beaconing and alerts depot security.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "Instant alert within ~2 minutes of geofence breach",
                  "High-frequency GPS pinging mode for rapid location recovery",
                  "Box separation detection via wireless mesh proximity",
                  "Door opening & light exposure exception alerts",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#0b1f3a]">
                    <AlertTriangle className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div
                onClick={() => openLightbox("/images/asset_trackers/recovery-mode1.jpg", "Recovery Mode Alert Notification")}
                className="bg-[#0B1F3A] rounded-2xl p-3 flex items-center justify-center cursor-pointer group border border-[#E3D4BA]"
              >
                <img
                  src="/images/asset_trackers/recovery-mode1.jpg"
                  alt="Recovery Alert Notification"
                  className="max-h-52 w-auto object-contain rounded-xl bg-white p-1.5 group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div
                onClick={() => openLightbox("/images/asset_trackers/recovery-mode2.jpg", "Predictive Route & Geofence Security")}
                className="bg-[#0B1F3A] rounded-2xl p-3 flex items-center justify-center cursor-pointer group border border-[#E3D4BA]"
              >
                <img
                  src="/images/asset_trackers/recovery-mode2.jpg"
                  alt="Route Security"
                  className="max-h-52 w-auto object-contain rounded-xl bg-white p-1.5 group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

      </section>

      {/* ============================================================== */}
      {/* 4. COMPREHENSIVE SENSOR COVERAGE SPECIFICATION TABLE          */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E3D4BA] pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
              03 &middot; Telemetry Specs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f3a]">
              Comprehensive Sensor Suite &amp; Parameters
            </h2>
          </div>
          <span className="text-xs font-mono text-[#1F4FD8] bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#E3D4BA] font-bold">
            8 Integrated Channels
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sensorSpecs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E3D4BA] shadow-sm hover:border-[#4C8DF6] transition-all space-y-1.5"
            >
              <span className="text-[10px] font-mono text-[#5B6B82] uppercase font-bold block">
                {spec.label}
              </span>
              <span className="text-lg font-black font-mono text-[#1F4FD8] block">
                {spec.value}
              </span>
              <span className="text-xs text-[#5B6B82] block font-normal">
                {spec.note}
              </span>
            </div>
          ))}
        </div>

        {/* Dimension & Battery Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#E3D4BA] flex items-center justify-between text-xs font-mono">
            <span className="text-[#5B6B82]">Physical Dimensions:</span>
            <span className="font-bold text-[#0b1f3a]">4.8 x 3.2 x 0.75 in (122 x 82 x 19 mm)</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#E3D4BA] flex items-center justify-between text-xs font-mono">
            <span className="text-[#5B6B82]">Battery &amp; Mounting:</span>
            <span className="font-bold text-[#0b1f3a]">Rechargeable Li-Ion + Magnetic Mount</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. LIGHTBOX MODAL                                              */}
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
            {/* Header (close X removed) */}
            <div className="p-4 px-6 border-b border-[#E3D4BA] bg-[#FFFFFF]">
              <h3 className="text-sm sm:text-base font-bold text-[#0b1f3a]">
                {lightbox.title}
              </h3>
            </div>

            <div className="p-6 bg-[#FFFFFF] flex items-center justify-center max-h-[70vh] overflow-auto sm-scroll">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain rounded-xl bg-white p-3 shadow-sm border border-[#E3D4BA]"
              />
            </div>

            <div className="p-4 px-6 bg-[#FFFFFF] border-t border-[#E3D4BA] flex items-center justify-between text-xs text-[#5B6B82]">
              <span className="font-mono text-[11px]">SkyMirr IoT &middot; SkyTracker Hardware Platform</span>
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