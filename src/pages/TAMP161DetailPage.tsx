import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ShoppingCart, X, ZoomIn } from "lucide-react";

interface TAMP161DetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
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
            <span>Back to All Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B82]">
            <span>Antennas</span>
            <span>/</span>
            <span className="text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-0.5 rounded-full tracking-wider">
              TAMP161
            </span>
          </div>
        </div>
      </div>

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
                4G LTE / 5G External MIMO Broadband High Performing Omnidirectional Antenna Module
              </h2>
            </div>

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
              <a
                href="https://www.amazon.com/s?k=skymirr"
                target="_blank"
                rel="noreferrer"
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
              </p>
            </div>
          </div>

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
            </ul>
          </div>
        </div>

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
                </tbody>
              </table>
            </div>
          </div>

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
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="pt-6 flex justify-center">
              <img src={lightbox.src} alt={lightbox.title} className="max-w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
