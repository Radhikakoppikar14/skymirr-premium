import React, { useState } from "react";
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
    <div className="pt-20 sm:pt-24 pb-24 bg-[#F8FCFD] text-[#152C39] overflow-x-hidden relative">
      
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-[#DFEAF0] py-3.5 px-4 sm:px-8 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#627784] hover:text-[#087F98] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A9BA4]">
            <span className="hidden sm:inline">IoT Hardware</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#087F98] font-bold bg-[#EAF6F9] px-3 py-1 rounded-full border border-[#D7EEF3]">
              SkyTracker (LIPA122)
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#051C24] via-[#073340] to-[#051C24] text-white py-14 sm:py-20">
        
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
          <div className="absolute inset-0 bg-[radial-gradient(#18a6be_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#083846] border border-[#18A6BE]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#91D6E3]">
            <Sparkles className="w-3.5 h-3.5 text-[#91D6E3] animate-pulse" />
            <span>Industrial IoT Asset Tracking &middot; Multi-Sensor Suite</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                SkyTracker (LIPA122)
              </h1>
              <p className="text-base sm:text-lg text-[#D7EEF3] leading-relaxed font-normal max-w-2xl">
                Real-time IoT cargo visibility, barometric vertical Z-axis shelf positioning, and automated tamper alerts for high-value logistics and cold-chain supply.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://skymirr.com/wp-content/uploads/2026/02/SkyTracker-Data-Sheet-final.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#18A6BE] to-[#087F98] hover:from-[#91D6E3] hover:to-[#18A6BE] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
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
            <div className="lg:col-span-4 bg-[#06242E]/85 p-6 rounded-3xl border border-[#18A6BE]/30 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[#91D6E3] font-bold">STATUS</span>
                <span className="text-emerald-400 font-bold">● ACTIVE MONITORING</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#D7EEF3]/70">Z-Axis Accuracy:</span>
                <span className="text-white font-bold">±3 Feet (Shelf-Level)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#D7EEF3]/70">Alert Latency:</span>
                <span className="text-white font-bold">&lt; 2 Minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#D7EEF3]/70">RF Bands:</span>
                <span className="text-white font-bold">600/700 MHz + Wi-Fi Mesh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#D7EEF3]/70">Sensors:</span>
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
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#DFEAF0] shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#DFEAF0]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#087F98] font-bold">
                  Hardware Model: LIPA122
                </span>
                <h3 className="text-xl font-black text-[#152C39]">
                  Industrial Multi-Sensor Hardware Unit
                </h3>
              </div>
              <span className="text-xs font-mono text-[#087F98] bg-[#EAF6F9] px-3 py-1 rounded-full border border-[#D7EEF3] font-bold">
                IP67 Rated
              </span>
            </div>

            {/* Hardware Viewport (100% Crisp, ZERO Background Image) */}
            <div
              onClick={() => openLightbox("/images/asset_trackers/at2.jpg", "SkyTracker LIPA122 Hardware Unit")}
              className="relative w-full aspect-[16/11] rounded-2xl bg-gradient-to-b from-[#06242E] to-[#083846] p-6 flex items-center justify-center cursor-pointer group overflow-hidden border border-[#18A6BE]/30 shadow-inner"
            >
              {/* Radar pulse rings (Live effect, NOT image) */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-[260px] h-[260px] rounded-full border border-[#18A6BE]/40 animate-ping [animation-duration:6s]" />
                <div className="absolute w-[180px] h-[180px] rounded-full border border-[#91D6E3]/30" />
              </div>

              <img
                src="/images/asset_trackers/at2.jpg"
                alt="SkyTracker LIPA122 Hardware Unit"
                className="relative z-10 max-h-56 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />

              <div className="absolute bottom-3 right-3 z-20">
                <span className="text-[10px] font-mono font-bold text-[#91D6E3] bg-[#06242E]/90 px-3 py-1 rounded-full border border-[#18A6BE]/40 flex items-center gap-1 shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to zoom</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-[#627784] leading-relaxed">
              Rugged all-in-one industrial casing with high-gain internal 600/700 MHz antenna elements, integrated Li-ion power pack, and magnetic chassis mount options.
            </p>
          </div>

          {/* Right Column: Network Topology Viewport (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#DFEAF0] shadow-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#DFEAF0]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#087F98] font-bold">
                  Network Architecture
                </span>
                <h3 className="text-xl font-black text-[#152C39]">
                  GPS + Wi-Fi Mesh + 4G LTE System
                </h3>
              </div>
              <span className="text-xs font-mono text-[#087F98] bg-[#EAF6F9] px-3 py-1 rounded-full border border-[#D7EEF3] font-bold">
                End-to-End
              </span>
            </div>

            {/* Topology Diagram Viewport */}
            <div
              onClick={() => openLightbox("/images/asset_trackers/at1.jpg", "SkyTracker Network Topology: GPS + Wi-Fi Mesh + 4G LTE")}
              className="relative w-full aspect-[16/11] rounded-2xl bg-[#06242E] p-4 flex items-center justify-center cursor-pointer group overflow-hidden border border-[#18A6BE]/30 shadow-inner"
            >
              <img
                src="/images/asset_trackers/at1.jpg"
                alt="SkyTracker Network Diagram"
                className="max-h-56 w-auto max-w-full object-contain rounded-xl bg-white p-2 group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-3 right-3 z-20">
                <span className="text-[10px] font-mono font-bold text-[#91D6E3] bg-[#06242E]/90 px-3 py-1 rounded-full border border-[#18A6BE]/40 flex items-center gap-1 shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to zoom</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-[#627784] leading-relaxed">
              Maintains unbroken telemetry even inside metal trailers by forming an autonomous Wi-Fi mesh between cargo pallets and the primary gateway uplink.
            </p>
          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. DUAL-MODE OPERATION CONSOLE: NORMAL VS RECOVERY             */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DFEAF0] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087F98]">
              02 &middot; Dual-Mode Telemetry
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#152C39] font-sans">
              Normal Logistics vs Active Cargo Recovery Mode
            </h2>
          </div>

          <div className="inline-flex rounded-xl p-1 bg-white border border-[#DFEAF0] shadow-sm">
            <button
              onClick={() => setActiveMode("normal")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeMode === "normal"
                  ? "bg-[#087F98] text-white shadow-sm"
                  : "text-[#627784] hover:text-[#152C39]"
              }`}
            >
              Normal Logistics Mode
            </button>
            <button
              onClick={() => setActiveMode("recovery")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeMode === "recovery"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-[#627784] hover:text-[#152C39]"
              }`}
            >
              Active Recovery Mode
            </button>
          </div>
        </div>

        {activeMode === "normal" ? (
          /* Normal Logistics Mode View */
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DFEAF0] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[#087F98] uppercase tracking-wider bg-[#EAF6F9] px-3.5 py-1 rounded-full border border-[#D7EEF3] inline-block">
                ● Normal Logistics Mode Active
              </span>
              <h3 className="text-2xl font-black text-[#152C39]">
                Continuous Location &amp; Environmental Streaming
              </h3>
              <p className="text-xs sm:text-sm text-[#627784] leading-relaxed">
                Achieve seamless, continuous visibility of both location and cargo condition. Minimize spoilage, damage, and uncertainty for high-value pharmaceuticals, electronics, and perishable goods.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "On-demand check-ins and scheduled periodic beaconing",
                  "Continuous battery conservation via sleep-wake algorithms",
                  "Multi-node pallet sensor data aggregation",
                  "Geofence route corridor tracking across interstate corridors",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#152C39]">
                    <CheckCircle2 className="w-4 h-4 text-[#087F98] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              onClick={() => openLightbox("/images/asset_trackers/normal-mode.jpg", "Normal Logistics Mode: Continuous Multi-Node Tracking")}
              className="lg:col-span-6 bg-[#06242E] rounded-2xl p-4 flex items-center justify-center cursor-pointer group border border-[#DFEAF0]"
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
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-rose-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200 inline-block">
                ● Active Cargo Recovery Mode
              </span>
              <h3 className="text-2xl font-black text-[#152C39]">
                Sub-2-Minute Alert Response &amp; Theft Intervention
              </h3>
              <p className="text-xs sm:text-sm text-[#627784] leading-relaxed">
                Activate rapid response during critical events. If boxes detach from pallets or pallets leave the trailer without authorization, SkyTracker instantly triggers high-frequency beaconing and alerts depot security.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "Instant alert within ~2 minutes of geofence breach",
                  "High-frequency GPS pinging mode for rapid location recovery",
                  "Box separation detection via wireless mesh proximity",
                  "Door opening & light exposure exception alerts",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#152C39]">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div
                onClick={() => openLightbox("/images/asset_trackers/recovery-mode1.jpg", "Recovery Mode Alert Notification")}
                className="bg-[#06242E] rounded-2xl p-3 flex items-center justify-center cursor-pointer group border border-[#DFEAF0]"
              >
                <img
                  src="/images/asset_trackers/recovery-mode1.jpg"
                  alt="Recovery Alert Notification"
                  className="max-h-52 w-auto object-contain rounded-xl bg-white p-1.5 group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <div
                onClick={() => openLightbox("/images/asset_trackers/recovery-mode2.jpg", "Predictive Route & Geofence Security")}
                className="bg-[#06242E] rounded-2xl p-3 flex items-center justify-center cursor-pointer group border border-[#DFEAF0]"
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DFEAF0] pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087F98]">
              03 &middot; Telemetry Specs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#152C39]">
              Comprehensive Sensor Suite &amp; Parameters
            </h2>
          </div>
          <span className="text-xs font-mono text-[#087F98] bg-[#EAF6F9] px-3 py-1 rounded-full border border-[#D7EEF3] font-bold">
            8 Integrated Channels
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sensorSpecs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#DFEAF0] shadow-sm hover:border-[#18A6BE] transition-all space-y-1.5"
            >
              <span className="text-[10px] font-mono text-[#8A9BA4] uppercase font-bold block">
                {spec.label}
              </span>
              <span className="text-lg font-black font-mono text-[#087F98] block">
                {spec.value}
              </span>
              <span className="text-xs text-[#627784] block font-normal">
                {spec.note}
              </span>
            </div>
          ))}
        </div>

        {/* Dimension & Battery Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#DFEAF0] flex items-center justify-between text-xs font-mono">
            <span className="text-[#627784]">Physical Dimensions:</span>
            <span className="font-bold text-[#152C39]">4.8 x 3.2 x 0.75 in (122 x 82 x 19 mm)</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#DFEAF0] flex items-center justify-between text-xs font-mono">
            <span className="text-[#627784]">Battery &amp; Mounting:</span>
            <span className="font-bold text-[#152C39]">Rechargeable Li-Ion + Magnetic Mount</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. LIGHTBOX MODAL                                              */}
      {/* ============================================================== */}
      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#06242E]/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-[#DFEAF0]"
          >
            {/* Header (close X removed) */}
            <div className="p-4 px-6 border-b border-[#DFEAF0] bg-[#F8FCFD]">
              <h3 className="text-sm sm:text-base font-bold text-[#152C39]">
                {lightbox.title}
              </h3>
            </div>

            <div className="p-6 bg-[#F8FCFD] flex items-center justify-center max-h-[70vh] overflow-auto sm-scroll">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain rounded-xl bg-white p-3 shadow-sm border border-[#DFEAF0]"
              />
            </div>

            <div className="p-4 px-6 bg-[#F8FCFD] border-t border-[#DFEAF0] flex items-center justify-between text-xs text-[#627784]">
              <span className="font-mono text-[11px]">SkyMirr IoT &middot; SkyTracker Hardware Platform</span>
              <button
                onClick={closeLightbox}
                className="px-4 py-2 rounded-xl bg-[#087F98] hover:bg-[#065A6C] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
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