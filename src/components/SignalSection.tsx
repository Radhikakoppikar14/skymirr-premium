import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Activity,
  Radio,
  CheckCircle2,
  Cpu,
  Sparkles,
  Sliders,
  Maximize2
} from "lucide-react";
import { SKYMIRR_TAGLINES } from "../data/skymirrData";

interface SignalSectionProps {
  onNavigateTechnology?: () => void;
}

type WaveformMode = "mulcat" | "sine" | "qam5g" | "mimo";

export const SignalSection: React.FC<SignalSectionProps> = ({
  onNavigateTechnology,
}) => {
  const [selectedCapIndex, setSelectedCapIndex] = useState(0);
  const [waveformMode, setWaveformMode] = useState<WaveformMode>("mulcat");
  const [frequencyParam, setFrequencyParam] = useState(2.4); // GHz
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const capabilities = [
    {
      id: "mulcat",
      icon: <Radio className="w-5 h-5 text-[#087F98]" />,
      badge: "Proprietary Resonance",
      title: "MuLCAT™ Positive Coupling",
      tagline: "Constructive Multi-Layer Electromagnetic Coupling",
      desc: "Harnesses constructive mutual electromagnetic resonance across compact multi-band arrays. Rather than treating coupling between antenna elements as parasitic loss, MuLCAT™ controls the phase relationships to multiply effective radiating aperture.",
      stat: "+65% Gain",
      metricDetail: ">65% higher forward gain compared to standard omni arrays",
      techSpecs: [
        "Constructive dielectric resonator phase alignment",
        "Continuous resonance across 600 MHz to 6000 MHz",
        "Eliminates lossy isolation chokes and physical spacing waste",
      ],
    },
    {
      id: "reach",
      icon: <Zap className="w-5 h-5 text-[#087F98]" />,
      badge: "Fringe Propagation",
      title: "Extreme 5G Tower Reach",
      tagline: "Carrier-Grade Edge Cell Connection Integrity",
      desc: "Maintains carrier-grade gigabit throughput up to 42% farther into rural and fringe cells where traditional consumer CPE routers drop to zero-service conditions.",
      stat: "+42% Range",
      metricDetail: "Verified 42% farther tower connection reach in rural field tests",
      techSpecs: [
        "Maintains RSRP / SINR links below -118 dBm sensitivity",
        "High-sensitivity front-end low-noise amplifier matching",
        "Carrier validated for rural broadband & suburban fringe zones",
      ],
    },
    {
      id: "bandwidth",
      icon: <Activity className="w-5 h-5 text-[#087F98]" />,
      badge: "Continuous Spectrum",
      title: "Full Bandwidth Coverage",
      tagline: "True Global Sub-6 Ultra-Wideband Resonance",
      desc: "Continuous radiation efficiency >80% from 600 MHz to 6000 MHz without band gaps, dead frequency notches, or impedance jumps.",
      stat: ">80% Eff.",
      metricDetail: ">80% average radiation efficiency across entire Sub-6 spectrum",
      techSpecs: [
        "Unbroken 600–6000 MHz multi-band frequency resonance",
        "Superior VSWR < 2.0:1 across all global cellular bands",
        "Low PIM performance for dense multi-carrier environments",
      ],
    },
    {
      id: "carrier",
      icon: <ShieldCheck className="w-5 h-5 text-[#087F98]" />,
      badge: "Tier-1 Compliance",
      title: "Carrier Certified Rigor",
      tagline: "Mission-Critical Public Safety & Enterprise Compliance",
      desc: "Certified on AT&T, T-Mobile, and T-Priority networks for public safety and enterprise. Thoroughly tested for strict over-the-air (OTA) radiated power and sensitivity standards.",
      stat: "Tier-1 Ready",
      metricDetail: "Passed rigorous carrier PTCRB & FCC certification suites",
      techSpecs: [
        "T-Priority public safety priority queuing compatibility",
        "AT&T enterprise business wireless certification",
        "T-Mobile 5G nationwide Ultra Capacity band verification",
      ],
    },
  ];

  const current = capabilities[selectedCapIndex];

  const proofMetrics = [
    {
      label: "Tower Edge Reach",
      value: "+42%",
      desc: "Extended coverage beyond typical cell boundaries",
    },
    {
      label: "Peak Sub-6 Speeds",
      value: "3.4 Gbps",
      desc: "Multi-gigabit throughput across 5G NR channels",
    },
    {
      label: "Concurrent Clients",
      value: "512",
      desc: "Tri-band Wi-Fi 7 enterprise client capacity",
    },
    {
      label: "Indoor Radius",
      value: "311 ft",
      desc: "Continuous indoor spherical penetration",
    },
  ];

  // Interactive Live RF Oscilloscope Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let step = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Technical oscilloscope reticle grid
      ctx.strokeStyle = "rgba(24, 166, 190, 0.15)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 35) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 24) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center baseline
      ctx.strokeStyle = "rgba(145, 214, 227, 0.3)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const cy = h / 2;
      const freqMultiplier = (frequencyParam / 2.4) * 0.025;

      if (waveformMode === "mulcat") {
        // Constructive Positive Coupling: Superposition of two phase-matched waves multiplying amplitude
        ctx.beginPath();
        ctx.strokeStyle = "#18A6BE";
        ctx.lineWidth = 2.8;
        ctx.shadowColor = "#18A6BE";
        ctx.shadowBlur = 8;

        for (let x = 0; x < w; x++) {
          const waveA = Math.sin(x * freqMultiplier + step * 0.05);
          const waveB = Math.sin(x * freqMultiplier + step * 0.05 + 0.15); // Positive in-phase coupling
          const y = cy + (waveA + waveB) * 22;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Radiating envelope
        ctx.beginPath();
        ctx.strokeStyle = "rgba(145, 214, 227, 0.4)";
        ctx.lineWidth = 1.2;
        for (let x = 0; x < w; x++) {
          const y = cy + Math.cos(x * (freqMultiplier * 0.5) - step * 0.03) * 16;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else if (waveformMode === "sine") {
        // Standard Pure Sinusoidal Carrier
        ctx.beginPath();
        ctx.strokeStyle = "#087F98";
        ctx.lineWidth = 2.4;
        for (let x = 0; x < w; x++) {
          const y = cy + Math.sin(x * freqMultiplier + step * 0.04) * 28;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else if (waveformMode === "qam5g") {
        // 5G NR QAM modulated digital wave bursts
        ctx.beginPath();
        ctx.strokeStyle = "#38BDF8";
        ctx.lineWidth = 2.2;
        for (let x = 0; x < w; x++) {
          const bitIndex = Math.floor((x + step * 4) / 40);
          const amp = bitIndex % 2 === 0 ? 32 : 14;
          const y = cy + Math.sin(x * freqMultiplier * 1.5) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else {
        // MIMO Orthogonal Spatial Streams (Two separate colored out-of-phase streams)
        ctx.beginPath();
        ctx.strokeStyle = "#18A6BE";
        ctx.lineWidth = 2;
        for (let x = 0; x < w; x++) {
          const y = cy + Math.sin(x * freqMultiplier + step * 0.05) * 24;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#91D6E3";
        ctx.lineWidth = 2;
        for (let x = 0; x < w; x++) {
          const y = cy + Math.cos(x * freqMultiplier - step * 0.05) * 24;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      step++;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [selectedCapIndex, waveformMode, frequencyParam]);

  return (
    <section className="py-24 sm:py-32 bg-[#F8FCFD] text-[#152C39] border-t border-[#DFEAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION HEADER & CHAPTER ANNOUNCEMENT */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#087F98]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087F98] animate-ping" />
              01 &middot; RF Core Innovation
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-sans text-[#152C39]">
              {SKYMIRR_TAGLINES.signal}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#087F98] to-[#18A6BE]">
                Without Compromise.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#627784] leading-relaxed font-normal">
              {SKYMIRR_TAGLINES.signalSub}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8A9BA4]">MuLCAT™ Spectrum:</span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#EAF6F9] border border-[#91D6E3]/40 text-xs font-mono font-bold text-[#087F98] shadow-sm">
              600–6000 MHz Continuous
            </span>
          </div>
        </div>

        {/* INTERACTIVE RF WORKBENCH ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 5 Columns: Capability Selection Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              {capabilities.map((cap, idx) => {
                const isSelected = idx === selectedCapIndex;
                return (
                  <div
                    key={cap.id}
                    onClick={() => setSelectedCapIndex(idx)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-white border-[#18A6BE] shadow-[0_15px_30px_-10px_rgba(8,127,152,0.2)] translate-x-1"
                        : "bg-white/60 hover:bg-white border-[#DFEAF0] text-[#627784] hover:border-[#91D6E3]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? "bg-[#EAF6F9] border-[#18A6BE] text-[#087F98]"
                            : "bg-[#F8FCFD] border-[#DFEAF0] text-[#627784]"
                        }`}
                      >
                        {cap.icon}
                      </div>

                      <div className="min-w-0">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#087F98] block">
                          {cap.badge}
                        </span>
                        <h3 className="text-sm font-bold text-[#152C39] truncate font-sans">
                          {cap.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-3">
                      <span className="text-xs font-mono font-bold text-[#087F98] bg-[#EAF6F9] px-2.5 py-1 rounded-full border border-[#D7EEF3]">
                        {cap.stat}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation Trigger */}
            <div className="pt-2">
              <button
                onClick={onNavigateTechnology}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#073746] to-[#075568] hover:from-[#087F98] hover:to-[#18A6BE] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>Read MuLCAT™ Engineering Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 7 Columns: Deep-Dive Viewport with Live Canvas Wave Generator */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DFEAF0] shadow-xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DFEAF0] pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087F98] block">
                    {current.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#152C39] font-sans mt-0.5">
                    {current.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-black font-mono text-[#087F98] block">
                    {current.stat}
                  </span>
                  <span className="text-[10px] font-mono text-[#8A9BA4]">
                    Measured Gain
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#627784] leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* Technical Specifications Breakdown */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono font-bold text-[#152C39] uppercase tracking-wider block">
                  Engineering Architecture:
                </span>
                {current.techSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#152C39]">
                    <CheckCircle2 className="w-4 h-4 text-[#087F98] shrink-0" />
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE RF OSCILLOSCOPE MONITOR & INTERACTIVE CONTROLS */}
            <div className="pt-4 border-t border-[#DFEAF0] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#18A6BE] animate-ping" />
                  <span className="font-bold text-[#152C39]">Live Resonance Oscilloscope</span>
                </div>

                {/* Waveform Selector */}
                <div className="flex items-center gap-1 bg-[#F0F7FA] p-1 rounded-lg border border-[#DFEAF0]">
                  {(
                    [
                      { id: "mulcat", label: "MuLCAT™" },
                      { id: "sine", label: "Carrier" },
                      { id: "qam5g", label: "5G QAM" },
                      { id: "mimo", label: "2x2 MIMO" },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setWaveformMode(m.id)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all cursor-pointer ${
                        waveformMode === m.id
                          ? "bg-[#087F98] text-white shadow-xs"
                          : "text-[#627784] hover:text-[#152C39]"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Canvas Waveform Viewport */}
              <div className="relative w-full h-32 rounded-2xl bg-[#06242E] overflow-hidden border border-[#18A6BE]/30 flex items-center justify-center shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={128}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-3 text-[10px] font-mono text-[#91D6E3] bg-[#06242E]/85 px-2 py-0.5 rounded border border-[#18A6BE]/30 shadow-xs">
                  {current.metricDetail}
                </div>
                <div className="absolute top-2 left-3 text-[10px] font-mono text-[#D7EEF3]/70">
                  FREQ: {frequencyParam.toFixed(1)} GHz &middot; MODE: {waveformMode.toUpperCase()}
                </div>
              </div>

              {/* Frequency Tuning Slider */}
              <div className="flex items-center justify-between gap-4 pt-1 text-[11px] font-mono text-[#627784]">
                <span>TUNE RF FREQUENCY:</span>
                <input
                  type="range"
                  min="0.6"
                  max="6.0"
                  step="0.2"
                  value={frequencyParam}
                  onChange={(e) => setFrequencyParam(parseFloat(e.target.value))}
                  className="flex-1 accent-[#087F98] cursor-pointer"
                />
                <span className="font-bold text-[#087F98]">{frequencyParam.toFixed(1)} GHz</span>
              </div>
            </div>

          </div>

        </div>

        {/* QUANTITATIVE PROOF METRIC PEDESTALS (4 Elevated Pillars) */}
        <div className="space-y-6 pt-10 border-t border-[#DFEAF0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#087F98] font-bold">
                02 &middot; Quantitative Rigor
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#152C39] font-sans tracking-tight">
                Engineering Proven in the Field.
              </h3>
            </div>
            <p className="text-xs text-[#8A9BA4] font-mono max-w-sm">
              Tested against traditional high-loss decoupling systems across commercial IoT deployments.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {proofMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DFEAF0] shadow-sm hover:shadow-xl hover:border-[#18A6BE] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#8A9BA4] uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#087F98] tracking-tight block mt-2">
                    {item.value}
                  </span>
                </div>
                <p className="text-xs text-[#627784] mt-3 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
