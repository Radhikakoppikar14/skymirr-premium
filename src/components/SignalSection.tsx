import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Activity,
  Radio,
  CheckCircle2,
<<<<<<< HEAD
  Cpu,
  Sparkles,
  Sliders,
  Maximize2
=======
>>>>>>> ec859e7 (Update website)
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
<<<<<<< HEAD
  const [frequencyParam, setFrequencyParam] = useState(2.4); // GHz
=======
  const [frequencyParam, setFrequencyParam] = useState(2.4);
>>>>>>> ec859e7 (Update website)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const capabilities = [
    {
      id: "mulcat",
      icon: <Radio className="w-5 h-5 text-[#1F4FD8]" />,
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
      icon: <Zap className="w-5 h-5 text-[#1F4FD8]" />,
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
      icon: <Activity className="w-5 h-5 text-[#1F4FD8]" />,
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
      icon: <ShieldCheck className="w-5 h-5 text-[#1F4FD8]" />,
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

<<<<<<< HEAD
  // Interactive Live RF Oscilloscope Simulation
=======
>>>>>>> ec859e7 (Update website)
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

<<<<<<< HEAD
      // Technical oscilloscope reticle grid
=======
>>>>>>> ec859e7 (Update website)
      ctx.strokeStyle = "rgba(76,141,246, 0.15)";
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

<<<<<<< HEAD
      // Center baseline
=======
>>>>>>> ec859e7 (Update website)
      ctx.strokeStyle = "rgba(76,141,246, 0.3)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const cy = h / 2;
      const freqMultiplier = (frequencyParam / 2.4) * 0.025;

      if (waveformMode === "mulcat") {
<<<<<<< HEAD
        // Constructive Positive Coupling: Superposition of two phase-matched waves multiplying amplitude
=======
>>>>>>> ec859e7 (Update website)
        ctx.beginPath();
        ctx.strokeStyle = "#4C8DF6";
        ctx.lineWidth = 2.8;
        ctx.shadowColor = "#4C8DF6";
        ctx.shadowBlur = 8;

        for (let x = 0; x < w; x++) {
          const waveA = Math.sin(x * freqMultiplier + step * 0.05);
<<<<<<< HEAD
          const waveB = Math.sin(x * freqMultiplier + step * 0.05 + 0.15); // Positive in-phase coupling
=======
          const waveB = Math.sin(x * freqMultiplier + step * 0.05 + 0.15);
>>>>>>> ec859e7 (Update website)
          const y = cy + (waveA + waveB) * 22;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

<<<<<<< HEAD
        // Radiating envelope
=======
>>>>>>> ec859e7 (Update website)
        ctx.beginPath();
        ctx.strokeStyle = "rgba(76,141,246, 0.4)";
        ctx.lineWidth = 1.2;
        for (let x = 0; x < w; x++) {
          const y = cy + Math.cos(x * (freqMultiplier * 0.5) - step * 0.03) * 16;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else if (waveformMode === "sine") {
<<<<<<< HEAD
        // Standard Pure Sinusoidal Carrier
=======
>>>>>>> ec859e7 (Update website)
        ctx.beginPath();
        ctx.strokeStyle = "#1F4FD8";
        ctx.lineWidth = 2.4;
        for (let x = 0; x < w; x++) {
          const y = cy + Math.sin(x * freqMultiplier + step * 0.04) * 28;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else if (waveformMode === "qam5g") {
<<<<<<< HEAD
        // 5G NR QAM modulated digital wave bursts
=======
>>>>>>> ec859e7 (Update website)
        ctx.beginPath();
        ctx.strokeStyle = "#4C8DF6";
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
<<<<<<< HEAD
        // MIMO Orthogonal Spatial Streams (Two separate colored out-of-phase streams)
=======
>>>>>>> ec859e7 (Update website)
        ctx.beginPath();
        ctx.strokeStyle = "#4C8DF6";
        ctx.lineWidth = 2;
        for (let x = 0; x < w; x++) {
          const y = cy + Math.sin(x * freqMultiplier + step * 0.05) * 24;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#4C8DF6";
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
<<<<<<< HEAD
    <section className="py-24 sm:py-32 bg-[#FFFFFF] text-[#0b1f3a] border-t border-[#E3D4BA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION HEADER & CHAPTER ANNOUNCEMENT */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1F4FD8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F4FD8] animate-ping" />
=======
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-[#FFFFFF] text-[#0b1f3a] border-t border-[#E3D4BA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1F4FD8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD4401] animate-ping" />
>>>>>>> ec859e7 (Update website)
              01 &middot; RF Core Innovation
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-sans text-[#0b1f3a]">
              {SKYMIRR_TAGLINES.signal}{" "}
<<<<<<< HEAD
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6]">
=======
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F4FD8] to-[#FD4401]">
>>>>>>> ec859e7 (Update website)
                Without Compromise.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed font-normal">
              {SKYMIRR_TAGLINES.signalSub}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#5B6B82]">MuLCAT™ Spectrum:</span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#E8F0FE] border border-[#4C8DF6]/40 text-xs font-mono font-bold text-[#1F4FD8] shadow-sm">
              600–6000 MHz Continuous
            </span>
          </div>
        </div>

<<<<<<< HEAD
        {/* INTERACTIVE RF WORKBENCH ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 5 Columns: Capability Selection Tabs */}
=======
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
>>>>>>> ec859e7 (Update website)
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
                        ? "bg-white border-[#4C8DF6] shadow-[0_15px_30px_-10px_rgba(31,79,216,0.2)] translate-x-1"
                        : "bg-white/60 hover:bg-white border-[#E3D4BA] text-[#5B6B82] hover:border-[#4C8DF6]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? "bg-[#E8F0FE] border-[#4C8DF6] text-[#1F4FD8]"
                            : "bg-[#FFFFFF] border-[#E3D4BA] text-[#5B6B82]"
                        }`}
                      >
                        {cap.icon}
                      </div>
<<<<<<< HEAD

=======
>>>>>>> ec859e7 (Update website)
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono uppercase font-bold text-[#1F4FD8] block">
                          {cap.badge}
                        </span>
                        <h3 className="text-sm font-bold text-[#0b1f3a] truncate font-sans">
                          {cap.title}
                        </h3>
                      </div>
                    </div>
<<<<<<< HEAD

=======
>>>>>>> ec859e7 (Update website)
                    <div className="text-right shrink-0 ml-3">
                      <span className="text-xs font-mono font-bold text-[#1F4FD8] bg-[#E8F0FE] px-2.5 py-1 rounded-full border border-[#E3D4BA]">
                        {cap.stat}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

<<<<<<< HEAD
            {/* Quick Consultation Trigger */}
=======
>>>>>>> ec859e7 (Update website)
            <div className="pt-2">
              <button
                onClick={onNavigateTechnology}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0B1F3A] to-[#0B1F3A] hover:from-[#1F4FD8] hover:to-[#4C8DF6] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>Read MuLCAT™ Engineering Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

<<<<<<< HEAD
          {/* Right 7 Columns: Deep-Dive Viewport with Live Canvas Wave Generator */}
=======
>>>>>>> ec859e7 (Update website)
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E3D4BA] shadow-xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3D4BA] pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1F4FD8] block">
                    {current.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f3a] font-sans mt-0.5">
                    {current.title}
                  </h3>
                </div>
<<<<<<< HEAD

=======
>>>>>>> ec859e7 (Update website)
                <div className="text-right">
                  <span className="text-2xl font-black font-mono text-[#1F4FD8] block">
                    {current.stat}
                  </span>
                  <span className="text-[10px] font-mono text-[#5B6B82]">
                    Measured Gain
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed font-normal">
                {current.desc}
              </p>

<<<<<<< HEAD
              {/* Technical Specifications Breakdown */}
=======
>>>>>>> ec859e7 (Update website)
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono font-bold text-[#0b1f3a] uppercase tracking-wider block">
                  Engineering Architecture:
                </span>
                {current.techSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* LIVE RF OSCILLOSCOPE MONITOR & INTERACTIVE CONTROLS */}
=======
>>>>>>> ec859e7 (Update website)
            <div className="pt-4 border-t border-[#E3D4BA] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4C8DF6] animate-ping" />
                  <span className="font-bold text-[#0b1f3a]">Live Resonance Oscilloscope</span>
                </div>

<<<<<<< HEAD
                {/* Waveform Selector */}
=======
>>>>>>> ec859e7 (Update website)
                <div className="flex items-center gap-1 bg-[#E8F0FE] p-1 rounded-lg border border-[#E3D4BA]">
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
                          ? "bg-[#1F4FD8] text-white shadow-xs"
                          : "text-[#5B6B82] hover:text-[#0b1f3a]"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Canvas Waveform Viewport */}
=======
>>>>>>> ec859e7 (Update website)
              <div className="relative w-full h-32 rounded-2xl bg-[#0B1F3A] overflow-hidden border border-[#4C8DF6]/30 flex items-center justify-center shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={128}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-3 text-[10px] font-mono text-[#4C8DF6] bg-[#0B1F3A]/85 px-2 py-0.5 rounded border border-[#4C8DF6]/30 shadow-xs">
                  {current.metricDetail}
                </div>
                <div className="absolute top-2 left-3 text-[10px] font-mono text-[#C9D6EE]/70">
                  FREQ: {frequencyParam.toFixed(1)} GHz &middot; MODE: {waveformMode.toUpperCase()}
                </div>
              </div>

<<<<<<< HEAD
              {/* Frequency Tuning Slider */}
=======
>>>>>>> ec859e7 (Update website)
              <div className="flex items-center justify-between gap-4 pt-1 text-[11px] font-mono text-[#5B6B82]">
                <span>TUNE RF FREQUENCY:</span>
                <input
                  type="range"
                  min="0.6"
                  max="6.0"
                  step="0.2"
                  value={frequencyParam}
                  onChange={(e) => setFrequencyParam(parseFloat(e.target.value))}
                  className="flex-1 accent-[#1F4FD8] cursor-pointer"
                />
                <span className="font-bold text-[#1F4FD8]">{frequencyParam.toFixed(1)} GHz</span>
              </div>
            </div>
<<<<<<< HEAD

          </div>

        </div>

        {/* QUANTITATIVE PROOF METRIC PEDESTALS (4 Elevated Pillars) */}
        <div className="space-y-6 pt-10 border-t border-[#E3D4BA]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
=======
          </div>
        </div>

        <div className="space-y-6 pt-10 border-t border-[#E3D4BA]">
          <div data-sa-skip className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
>>>>>>> ec859e7 (Update website)
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1F4FD8] font-bold">
                02 &middot; Quantitative Rigor
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0b1f3a] font-sans tracking-tight">
                Engineering Proven in the Field.
              </h3>
            </div>
            <p className="text-xs text-[#5B6B82] font-mono max-w-sm">
              Tested against traditional high-loss decoupling systems across commercial IoT deployments.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {proofMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D4BA] shadow-sm hover:shadow-xl hover:border-[#4C8DF6] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
=======
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {proofMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D4BA] shadow-sm hover:shadow-xl hover:border-[#4C8DF6] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-w-0"
>>>>>>> ec859e7 (Update website)
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#5B6B82] uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#1F4FD8] tracking-tight block mt-2">
                    {item.value}
                  </span>
                </div>
                <p className="text-xs text-[#5B6B82] mt-3 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> ec859e7 (Update website)
