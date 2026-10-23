<<<<<<< HEAD
import React, { useState } from "react";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  Radio,
  Wifi,
  Sparkles,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  ZoomIn
} from "lucide-react";
=======
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Gauge, Radio, ShoppingCart, Wifi, X, ZoomIn } from "lucide-react";
>>>>>>> ec859e7 (Update website)

interface Sky5GDetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

<<<<<<< HEAD
export const Sky5GDetailPage: React.FC<Sky5GDetailPageProps> = ({
  onBack,
  onContact,
}) => {
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

  const bullets = [
    "42% farther reach to cell towers",
    "Up to 3.4 Gbps download speeds",
    "Twice the coverage area compared to standard solutions",
    "Reliable indoor penetration for homes and businesses",
    "Resilient performance at the network edge and rural sites",
    "Optimized for any environment—rural environments, highways, or bustling cities",
  ];

  const technicalHighlights = [
    "4x4 MIMO 5G architecture",
    "Full FR1 band support (600 MHz - 6 GHz)",
    "Wi-Fi 7 (4x4 MU-MIMO tri-band)",
    "Supports up to 512 simultaneous devices",
    "311 ft Wi-Fi coverage radius",
    "2.5 Gbps LAN / WAN ethernet ports",
    "VPN: IPSEC, SSL, WireGuard built-in",
    "TR-069 remote management protocol",
    "Dual firmware images & auto-recovery failsafe",
    "Optional external SMA antenna ports for high-gain arrays",
  ];

  const useCases = [
    {
      title: "Rural Areas",
      desc: "Small offices, farms, community centers, schools",
    },
    {
      title: "Professional Offices",
      desc: "Cloud apps, VoIP & video, multi-device networks",
    },
    {
      title: "Retail & Restaurants",
      desc: "POS uptime, guest/staff Wi-Fi, digital signage, security cameras",
    },
    {
      title: "Public Safety",
      desc: "Mobile command, emergency operations, disaster recovery, EOC backup",
    },
    {
      title: "Construction & Field Services",
      desc: "Portable broadband, trailer connectivity, project uploads, inspections",
    },
  ];

  return (
    <div className="pdx-page pt-[72px] pb-24 bg-[#FFFFFF] text-[#0b1f3a] animate-fade-in relative overflow-hidden">
      
      {/* Background Floating Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#4C8DF6]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#4C8DF6]/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Breadcrumb Bar */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-[#E3D4BA] py-4 px-4 sm:px-8 relative z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#5B6B82] hover:text-[#1F4FD8] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B82]">
            <span>CPEs</span>
            <span>/</span>
            <span className="text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-0.5 rounded-full tracking-wider border border-[#E3D4BA]">
              TCPA 117 (Sky5G® Router)
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10 space-y-12 pdx-flow">
        
        {/* ========================================================
            HERO HEADER & QUICK ACTIONS
            ======================================================== */}
        <div className="pdx-hero">
          <div className="pdx-hero-head flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] border border-[#E3D4BA] text-[11px] font-mono uppercase tracking-[0.25em] text-[#1F4FD8] font-bold backdrop-blur-md shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#4C8DF6] animate-pulse" />
                Flagship Wireless Gateway
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-[#0b1f3a] tracking-tight font-sans">
                Sky5G Wireless Router
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#1F4FD8] font-sans">
                Unleashing Reliable Connectivity Anywhere
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://skymirr.com/wp-content/uploads/2025/12/SkyMirr-Data-Sheet-TCPA117.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#1F4FD8] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>Datasheet</span>
                <Download className="w-4 h-4" />
              </a>
=======
const IMG = "/images";

/* ---------- Palette (taken from the project's index.css / premium.css) ----------
   navy  #0B1F3A   blue  #1F4FD8   sky  #4C8DF6   ice  #E8F0FE
   muted #5B6B82   line  #E3D4BA   light-cyan #7FD3FF   buy-red #D71920            */

const sideBtn =
  "s5g-shine relative overflow-hidden w-full inline-flex items-center justify-center px-5 py-4 rounded-full bg-gradient-to-r from-[#0B1F3A] to-[#1F4FD8] text-white text-sm font-extrabold text-center border border-[#FF6A00] shadow-none transition-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#4C8DF6]/40 cursor-pointer";

const h2 = "s5g-h2 relative text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B1F3A] font-sans";
const body = "text-base sm:text-lg text-[#475569] leading-[1.8]";
const ul = "s5g-list list-disc pl-5 space-y-2 text-sm text-[#0B1F3A]/90 marker:text-[#1F4FD8]";

const bullets = [
  "42% farther reach to cell towers",
  "Up to 3.4 Gbps download speeds",
  "Twice the coverage area compared to standard solutions",
  "Reliable indoor penetration for homes and businesses",
  "Resilient performance at the network edge and rural sites",
  "Optimized for any environment—rural environments, highways, or bustling cities",
];

const technicalHighlights = [
  "4×4 MIMO 5G",
  "Full FR1 band support (600 MHz–6 GHz)",
  "Wi-Fi 7 (4×4 MU-MIMO)",
  "Supports up to 512 devices",
  "311 ft Wi-Fi radius",
  "2.5 Gbps LAN/WAN",
  "VPN: IPSec, SSL, WireGuard",
  "TR-069 remote management",
  "Dual firmware images & auto-recovery",
  "Optional external SMA antenna ports",
];

const useCases = [
  ["Rural Areas", "Small offices, farms, community centers, schools"],
  ["Professional Offices", "Cloud apps, VoIP & video, multi-device networks"],
  ["Retail & Restaurants", "POS uptime, guest/staff Wi-Fi, digital signage, security cameras"],
  ["Public Safety", "Mobile command, emergency operations, disaster recovery, EOC backup"],
  ["Construction & Field Services", "Portable broadband, trailer connectivity, project uploads, inspections"],
];

/* ---------- Static section wrapper: no scroll or entrance animation ---------- */
type Variant = "up" | "left" | "right" | "zoom";

const Reveal: React.FC<{
  as?: React.ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}> = ({ as: Tag = "div", className = "", children }) => (
  <Tag className={className}>{children}</Tag>
);

/* ---------- Scoped styles / keyframes ---------- */
const css = `
.s5g-page {
  --orange: #FF6A00;
  --blue: #1F4FD8;
  color: #0B1F3A;
  background: #fff;
}
.s5g-bg { display: none; }
.s5g-hero-img { display: none; }
.s5g-hero-video {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.s5g-hero-shade {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(100deg, rgba(7, 35, 102, .88) 0%, rgba(15, 67, 150, .68) 58%, rgba(31, 79, 216, .24) 100%);
}
.s5g-hero-orange-glow, .s5g-hero-glow, .s5g-waves, .s5g-hero-line { display: none; }
.s5g-orange-accent { color: #FF6A00; }
.s5g-orange-line { background: #FF6A00; }
.s5g-main {
  border-color: rgba(255, 106, 0, .42);
  box-shadow: none !important;
}
.s5g-frame {
  border: 1px solid rgba(255, 106, 0, .65);
  box-shadow: none !important;
  transform: none !important;
  transition: none !important;
}
.s5g-frame:hover {
  border-color: #FF6A00;
  box-shadow: none !important;
  transform: none !important;
}
.s5g-shine {
  background: #1F4FD8;
  border: 1px solid #FF6A00;
  box-shadow: none !important;
  transition: none !important;
}
.s5g-shine:hover {
  background: #1F4FD8;
  transform: none !important;
  box-shadow: none !important;
}
.s5g-buy {
  background: #0B1F3A;
  border: 1px solid rgba(255, 106, 0, .7);
  animation: none !important;
  box-shadow: none !important;
}
.s5g-pulse { animation: none !important; }
.s5g-logo, .s5g-logo:hover {
  transition: none !important;
  transform: none !important;
}
.s5g-float, .s5g-floor, .s5g-zoom-ico { animation: none !important; }
.s5g-floor { display: none !important; }
.s5g-word, .s5g-hero-eyebrow, .s5g-hero-sub {
  opacity: 1 !important;
  animation: none !important;
}
.s5g-rv, .s5g-rv-up, .s5g-rv-left, .s5g-rv-right, .s5g-rv-zoom, .s5g-rv.is-in {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
  will-change: auto !important;
}
.s5g-h2 { padding-bottom: .65rem; }
.s5g-h2::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 54px;
  height: 3px;
  border-radius: 3px;
  background: #FF6A00;
  transform: none !important;
  transition: none !important;
}
.s5g-list li {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
}
.s5g-list li:hover { color: inherit; }
.s5g-shine::after, .s5g-shine:hover::after { display: none !important; animation: none !important; }
.s5g-fade, .s5g-pop { animation: none !important; }

/* Balanced SkyMirr palette: blue is primary, orange is the accent */
.s5g-info-card {
  border-color: #D8E2F3;
  border-top-color: #1F4FD8;
}
.s5g-info-card:nth-child(even) {
  border-top-color: #FF6A00;
}
.s5g-product-showcase {
  border-color: #1F4FD8;
}
.s5g-product-showcase::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 4px;
  background: linear-gradient(90deg, #1F4FD8 0%, #1F4FD8 68%, #FF6A00 68%, #FF6A00 100%);
}
.s5g-marketplace {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid #DCE3ED;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 7px 12px;
  color: #0B1F3A;
  text-decoration: none;
  box-shadow: none !important;
  transition: none !important;
}
.s5g-marketplace:hover {
  border-color: #FF6A00;
  transform: none !important;
  box-shadow: none !important;
}
.s5g-marketplace-amazon { color: #111827; }

.s5g-marketplace-walmart { color: #0071CE; }
.s5g-marketplace-digikey { color: #CC0000; }
.s5g-marketplace-bh { color: #D71920; }
.s5g-info-card {
  min-width: 0;
  border: 1px solid #E2E8F0;
  border-top: 3px solid #FF6A00;
  border-radius: 1.5rem;
  background: #FFFFFF;
  padding: 1.5rem;
  box-shadow: none !important;
}
@media (min-width: 640px) {
  .s5g-info-card { padding: 2rem; }
}
.s5g-page .s5g-h2 { color: #0B1F3A !important; }
.s5g-page .s5g-list,
.s5g-page .s5g-list li { color: #475569 !important; }
.s5g-page .s5g-list strong,
.s5g-page .s5g-list b { color: #334155 !important; }
.s5g-page .s5g-list li::marker { color: #FF6A00; }
.s5g-product-showcase {
  box-shadow: none !important;
  transform: none !important;
  transition: none !important;
}
.s5g-product-showcase:hover {
  box-shadow: none !important;
  transform: none !important;
  border-color: #FF6A00;
}
.s5g-product-showcase img {
  transform: none !important;
  transition: none !important;
  filter: none !important;
}
/* ---------- Scroll-triggered glitch text (banner) ---------- */
.s5g-glitch { position: relative; display: block; }
.s5g-glitch::before,
.s5g-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  background: transparent;
}
.s5g-glitch::before { color: #FF6A00 !important; }
.s5g-glitch::after  { color: #00B7FF !important; }
.s5g-glitch.is-glitching {
  animation: s5g-jitter .38s steps(2, end) infinite !important;
}
.s5g-glitch.is-glitching::before {
  opacity: .9;
  transform: translate(-3px, 0);
  animation: s5g-slice-a .45s steps(1, end) infinite;
}
.s5g-glitch.is-glitching::after {
  opacity: .9;
  transform: translate(3px, 0);
  animation: s5g-slice-b .5s steps(1, end) infinite;
}
@keyframes s5g-jitter {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-2px, 1px); }
  50%  { transform: translate(2px, -1px); }
  75%  { transform: translate(-1px, -1px); }
  100% { transform: translate(0, 0); }
}
@keyframes s5g-slice-a {
  0%   { clip-path: inset(8% 0 78% 0); }
  20%  { clip-path: inset(52% 0 30% 0); }
  40%  { clip-path: inset(24% 0 60% 0); }
  60%  { clip-path: inset(70% 0 8% 0); }
  80%  { clip-path: inset(38% 0 44% 0); }
  100% { clip-path: inset(4% 0 86% 0); }
}
@keyframes s5g-slice-b {
  0%   { clip-path: inset(62% 0 20% 0); }
  20%  { clip-path: inset(10% 0 74% 0); }
  40%  { clip-path: inset(46% 0 38% 0); }
  60%  { clip-path: inset(18% 0 66% 0); }
  80%  { clip-path: inset(78% 0 6% 0); }
  100% { clip-path: inset(34% 0 52% 0); }
}
@media (max-width: 767px) {
  .sky5g-content { padding-top: 1.5rem; }
}
@media (prefers-reduced-motion: reduce) {
  .s5g-page *, .s5g-page *::before, .s5g-page *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
`;

const heroTitle = "Sky5G Wireless Router";
const heroSubtitle = "Unleashing Reliable Connectivity Anywhere";

/* Glitch text: RGB-split slices + jitter, switched on only while the page scrolls. */
const GlitchText: React.FC<{
  as?: React.ElementType;
  text: string;
  className?: string;
}> = ({ as: Tag = "span", text, className = "" }) => (
  <Tag className={`s5g-glitch ${className}`} data-text={text}>
    {text}
  </Tag>
);

function useScrollGlitch(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(root.querySelectorAll<HTMLElement>(".s5g-glitch"));
    let timer: number | undefined;

    const onScroll = () => {
      // only glitch while the banner is actually on screen
      if (root.getBoundingClientRect().bottom < 0) return;
      targets.forEach((t) => t.classList.add("is-glitching"));
      window.clearTimeout(timer);
      timer = window.setTimeout(() => targets.forEach((t) => t.classList.remove("is-glitching")), 380);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, [rootRef]);
}

const heroChips = [
  { icon: <Gauge className="h-3.5 w-3.5" />, text: "Up to 3.4 Gbps" },
  { icon: <Radio className="h-3.5 w-3.5" />, text: "4×4 MIMO 5G" },
  { icon: <Wifi className="h-3.5 w-3.5" />, text: "Wi-Fi 7 (4×4 MU-MIMO)" },
  { icon: <ArrowRight className="h-3.5 w-3.5 -rotate-45" />, text: "42% farther reach" },
];

const btnPrimary =
  "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6] px-4 py-2.5 text-xs font-bold text-white transition-all hover:from-[#0B1F3A] hover:to-[#1F4FD8] shadow-xs cursor-pointer";

/* Network diagram: Sky5G router -> local devices over Wi-Fi 7, and 5G/4G link to a base station */
const Sky5GDiagram: React.FC = () => {
  const navy = "#1F2F9E";
  const dev = (x: number, y: number, children: React.ReactNode) => (
    <g transform={`translate(${x - 22} ${y - 28})`} stroke={navy} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="#fff">
      {children}
    </g>
  );
  const printer = (
    <>
      <rect x="12" y="2" width="20" height="14" />
      <rect x="3" y="16" width="38" height="20" rx="3" />
      <rect x="12" y="30" width="20" height="14" />
      <path d="M8 23 H14" />
    </>
  );
  const tower = (
    <>
      <rect x="9" y="2" width="26" height="52" rx="2" />
      <rect x="14" y="8" width="16" height="5" />
      <circle cx="22" cy="42" r="3" />
    </>
  );
  const laptop = (
    <>
      <rect x="8" y="12" width="28" height="22" rx="2" />
      <path d="M2 38 H42 L38 42 H6 Z" />
    </>
  );
  const fridge = (
    <>
      <rect x="9" y="0" width="26" height="58" rx="2" />
      <path d="M9 22 H35 M14 8 V16 M14 28 V38" />
    </>
  );
  const monitor = (
    <>
      <rect x="1" y="8" width="42" height="30" rx="2" />
      <path d="M22 38 V48 M12 48 H32" />
    </>
  );
  const oven = (
    <>
      <rect x="3" y="12" width="38" height="36" rx="3" />
      <rect x="10" y="22" width="24" height="16" />
      <path d="M10 6 H12 M20 6 H22 M30 6 H32" />
    </>
  );
  const arrows = [
    [284, 142, 214, 96],
    [270, 162, 128, 142],
    [270, 186, 128, 212],
    [290, 214, 202, 266],
    [336, 142, 406, 96],
    [350, 162, 474, 142],
    [350, 186, 474, 212],
    [330, 214, 414, 266],
  ];
  return (
    <div
      role="img"
      aria-label="Diagram: the Sky5G router shares Wi-Fi 7 with local devices and connects over a 5G Sub-6 / 4G LTE wireless link to a base station"
      className="s5g-frame w-full overflow-hidden rounded-2xl bg-white p-2 sm:p-4"
    >
      <svg viewBox="0 0 960 350" className="block h-auto w-full" xmlns="http://www.w3.org/2000/svg" fontFamily="Poppins, Arial, sans-serif">
        <defs>
          <marker id="s5gArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 Z" fill={navy} />
          </marker>
        </defs>

        {arrows.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={navy} strokeWidth="2" markerEnd="url(#s5gArr)" />
        ))}

        {dev(190, 68, printer)}
        {dev(100, 140, tower)}
        {dev(100, 215, laptop)}
        {dev(170, 295, fridge)}
        {dev(430, 68, printer)}
        {dev(500, 135, tower)}
        {dev(500, 215, monitor)}
        {dev(430, 295, oven)}

        {/* Router */}
        <g stroke={navy} strokeWidth="2.6" strokeLinejoin="round" fill="#fff">
          <rect x="272" y="134" width="76" height="84" rx="6" />
          <rect x="284" y="146" width="52" height="40" rx="3" fill="#EEF2FF" />
          <path d="M284 198 H336 M284 206 H336" strokeWidth="2" />
        </g>
        <text x="310" y="90" textAnchor="middle" fontSize="15" fontWeight="700" fill={navy}>LOCAL</text>
        <text x="310" y="112" textAnchor="middle" fontSize="15" fontWeight="700" fill={navy}>WiFi7</text>
        <text x="310" y="262" textAnchor="middle" fontSize="15" fontWeight="700" fill={navy}>Sky5G</text>

        {/* Wireless link */}
        <line x1="566" y1="175" x2="790" y2="175" stroke={navy} strokeWidth="2.2" markerStart="url(#s5gArr)" markerEnd="url(#s5gArr)" />
        <text x="678" y="148" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0B1F3A">5G Sub6/4G LTE</text>
        <path d="M610 156 H746" stroke={navy} strokeWidth="1.5" />
        <text x="678" y="202" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0B1F3A">Wireless Link</text>

        {/* Base station */}
        <g stroke="#FF6A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M852 128 L822 238 M852 128 L882 238 M834 196 H870 M840 170 H864 M845 150 H859" />
          <path d="M834 196 L870 238 M870 196 L834 238 M840 170 L864 196 M864 170 L840 196" strokeWidth="2" />
          <circle cx="852" cy="116" r="5" fill="#FF6A00" />
          <path d="M836 104 Q826 116 836 128 M868 104 Q878 116 868 128" />
          <path d="M826 94 Q811 116 826 138 M878 94 Q893 116 878 138" />
        </g>
        <text x="852" y="268" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0B1F3A">BASE</text>
        <text x="852" y="288" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0B1F3A">STATION</text>
      </svg>
    </div>
  );
};

export const Sky5GDetailPage: React.FC<Sky5GDetailPageProps> = ({ onBack, onContact }) => {
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, src: "", title: "" });
  const open = (src: string, title: string) => setLightbox({ isOpen: true, src, title });
  const close = () => setLightbox((p) => ({ ...p, isOpen: false }));
  const bannerRef = useRef<HTMLElement>(null);
  useScrollGlitch(bannerRef);

  useEffect(() => {
    if (!lightbox.isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.isOpen]);

  return (
    <div className="s5g-page pdx-page relative isolate pt-[72px] pb-24 bg-white text-[#0B1F3A]">
      <style>{css}</style>

      {/* Banner — same layout as the antenna product pages, with scroll-glitch text */}
      <section ref={bannerRef} className="bg-[#E8F0FE] pb-10 pt-10 sm:pt-[72px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
          <div className="space-y-5">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-blue-600 hover:underline cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                CPEs
              </button>
              <span aria-hidden="true">/</span>
              <span className="text-blue-600">TCPA 117 (Sky5G® Router)</span>
            </nav>

            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-bold text-blue-700 border border-blue-200">
              Now Available
            </span>
            <GlitchText
              as="h1"
              text={heroTitle}
              className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
            />
            <GlitchText
              as="p"
              text={heroSubtitle}
              className="text-base font-semibold text-slate-800"
            />
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              5G Sub-6 /4G LTE Wireless Customer Premises Equipment/Router
            </p>

            <ul className="flex flex-wrap gap-3">
              {heroChips.map((c) => (
                <li
                  key={c.text}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  <span className="text-blue-600">{c.icon}</span>
                  {c.text}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button type="button" onClick={onContact} className={btnPrimary}>
                Contact Us Now <ArrowRight className="h-3.5 w-3.5" />
              </button>
>>>>>>> ec859e7 (Update website)
              <a
                href="https://www.bhphotovideo.com/c/search?q=skymirr"
                target="_blank"
                rel="noreferrer"
<<<<<<< HEAD
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0B1F3A] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>Shop at B&H</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E8F0FE] hover:bg-[#E8F0FE] text-[#0b1f3a] text-xs font-bold uppercase tracking-wider transition-all border border-[#E3D4BA] cursor-pointer hover:-translate-y-0.5"
              >
                <span>Bulk Order</span>
              </button>
            </div>
          </div>

          {/* Hardware Highlight Banner */}
          <div 
            onClick={() => openLightbox("/images/tcpa117/TCPA-117-new.png", "Sky5G TCPA 117 Router")}
            className="pdx-hero-visual bg-gradient-to-br from-[#FFFFFF] to-[#E8F0FE] rounded-2xl p-6 sm:p-8 border border-[#E3D4BA] flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer group hover:border-[#4C8DF6] transition-all shadow-inner"
          >
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-mono text-[#1F4FD8] uppercase font-bold bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#E3D4BA]">
                Hardware Model TCPA 117
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0b1f3a] font-sans group-hover:text-[#1F4FD8] transition-colors">
                5G Sub-6 / 4G LTE CPE Gateway
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B82] max-w-xl font-normal leading-relaxed">
                Features internal MuLCAT™ antenna array, Wi-Fi 7 tri-band connectivity, and enterprise routing. Click to inspect high-resolution product preview.
              </p>
            </div>
            <div className="relative shrink-0">
              <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#0b1f3a]/10 text-[#0b1f3a] group-hover:bg-[#1F4FD8] group-hover:text-white transition-colors">
                <ZoomIn className="w-4 h-4" />
              </div>
              <img
                src="/images/tcpa117/TCPA-117-new.png"
                alt="Sky5G TCPA 117 Router"
                className="max-h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            CHALLENGE & SOLUTION BENTO GRID
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-[#E3D4BA] space-y-3 shadow-xl">
            <h3 className="text-xs font-bold text-[#1F4FD8] uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4C8DF6] shadow-[0_0_8px_rgba(76,141,246,0.5)]" />
              The Challenge
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed font-normal">
              In rugged landscapes and dense urban environments, millions struggle with slow, unstable internet. Weak RF signals and limited fiber access create persistent connectivity gaps, restricting education, commerce, and everyday life.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] rounded-[32px] p-6 sm:p-8 text-white space-y-4 shadow-xl border border-[#4C8DF6]/30">
            <h3 className="text-xs font-bold text-[#4C8DF6] uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4C8DF6] shadow-[0_0_8px_rgba(76,141,246,0.6)]" />
              The Solution: SkyMirr Sky5G
            </h3>
            <p className="text-xs sm:text-sm text-[#C9D6EE] leading-relaxed font-normal">
              Engineered for businesses, communities, and users who demand fast, resilient, and secure broadband. Certified on <strong className="text-white font-semibold">T-Mobile's 5G network and T-Priority</strong> for mission-critical reliability.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold font-mono border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>CES 2026 Innovation Award Honoree</span>
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            SUPERIOR CONNECTIVITY & TOPOLOGY
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-[#E3D4BA] shadow-xl space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1f3a] tracking-tight font-sans">
              Superior Connectivity By Design
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6B82] mt-3 leading-relaxed font-normal">
              Unlike traditional routers where antennas are an afterthought, SkyMirr's exclusive <strong className="text-[#0b1f3a] font-semibold">MuLCAT® antenna-first engineering</strong> puts signal strength and reliability front and center. Experience up to <strong className="text-[#0b1f3a] font-semibold">42% farther reach to cell towers</strong>, enhanced indoor coverage, and consistently high speeds.
            </p>
          </div>

          {/* Topology Image with Zoom */}
          <div
            onClick={() =>
              openLightbox(
                "/images/tcpa117/wireless-link.jpg",
                "Sky5G Wireless Link Architecture"
              )
            }
            className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E3D4BA] shadow-inner cursor-pointer group hover:border-[#4C8DF6] transition-all"
          >
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0b1f3a] mb-4">
              <span>Wireless Link Architecture: Device ↔ Sky5G ↔ Base Station</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#1F4FD8] font-semibold group-hover:translate-x-0.5 transition-transform">
                <ZoomIn className="w-4 h-4" />
                <span>Click to zoom</span>
              </span>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src="/images/tcpa117/wireless-link.jpg"
                alt="Wireless Link Diagram"
                className="max-h-72 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          </div>

          {/* Key Bullets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bullets.map((b, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] text-xs sm:text-sm font-normal text-[#0b1f3a] shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            TECH HIGHLIGHTS & MULCAT CARDS
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-[#E3D4BA] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0b1f3a] font-mono">
              <Radio className="w-4 h-4 text-[#1F4FD8]" />
              <span>MuLCAT® Antenna System</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed font-normal">
              AI-driven, real-time optimization ensures peak performance and extends connectivity to challenging areas without upgrading carrier plans.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-[#E3D4BA] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0b1f3a] font-mono">
              <Wifi className="w-4 h-4 text-[#1F4FD8]" />
              <span>Wi-Fi 7 Tri-Band Integration</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed font-normal">
              Delivers seamless, high-speed connections for streaming, remote work, and online learning across up to 512 concurrent users.
            </p>
          </div>
        </div>

        {/* ========================================================
            CARRIER CERTIFICATIONS
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-[#E3D4BA] shadow-xl space-y-6">
          <h4 className="text-xs font-bold text-[#0b1f3a] uppercase tracking-widest font-mono">
            Sky5G Certified Network Ecosystem
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] space-y-2">
              <div className="text-sm font-bold text-[#0b1f3a] font-sans flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F4FD8]" />
                T-Mobile 5G
              </div>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Delivering fast speeds, broad coverage, and enterprise-grade reliability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] space-y-2">
              <div className="text-sm font-bold text-[#0b1f3a] font-sans flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B1F3A]" />
                T-Priority Public Safety
              </div>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Elevated network access, priority queuing, and hardened reliability for first responders, police, fire, and EMS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] space-y-2">
              <div className="text-sm font-bold text-[#0b1f3a] font-sans flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F4FD8]" />
                AT&amp;T Network
              </div>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                Delivering reliable 5G connectivity on the AT&amp;T network for business and remote locations.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            TECHNICAL HIGHLIGHTS CHECKLIST
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-[#E3D4BA] shadow-xl space-y-6">
          <h4 className="text-xs font-bold text-[#0b1f3a] uppercase tracking-widest font-mono flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#1F4FD8]" />
            Technical Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {technicalHighlights.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] text-xs font-semibold text-[#0b1f3a] shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            VERSATILE INDUSTRY USE CASES
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-[#E3D4BA] shadow-xl space-y-6">
          <h4 className="text-xs font-bold text-[#0b1f3a] uppercase tracking-widest font-mono">
            Versatile Industry Use Cases
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E3D4BA] space-y-2 shadow-2xs"
              >
                <span className="text-xs font-bold font-sans uppercase tracking-wider block text-[#1F4FD8]">
                  {uc.title}
                </span>
                <span className="text-xs text-[#5B6B82] font-normal block leading-relaxed">
                  {uc.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Retail Partners Footer Bar inside Page */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[24px] p-6 border border-[#E3D4BA] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#0b1f3a] uppercase tracking-wider">
              Available Retailers:
            </span>
            <div className="flex items-center gap-3">
              <a href="https://www.amazon.com/s?k=skymirr" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/tcpa117/amazon-buy.png" alt="Amazon" className="h-5 object-contain" />
              </a>
              <a href="https://www.digikey.com/en/supplier-centers/skymirr" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/tcpa117/digikey-buy.png" alt="DigiKey" className="h-5 object-contain" />
              </a>
              <a href="https://www.walmart.com/search?q=skymirr" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/tcpa117/wallmart-buy.png" alt="Walmart" className="h-5 object-contain" />
              </a>
            </div>
          </div>
          <button
            onClick={onContact}
            className="text-xs font-bold font-mono uppercase tracking-wider text-[#1F4FD8] hover:text-[#0B1F3A] transition-colors"
          >
            Need custom deployment assistance? Contact Support →
          </button>
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
            {/* Header (close X removed) */}
            <div className="w-full pb-6 border-b border-[#E3D4BA]">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
                {lightbox.title} — High Resolution Preview
              </span>
            </div>

            <div className="py-10 flex items-center justify-center max-h-[70vh] w-full">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain drop-shadow-xl rounded-2xl bg-[#FFFFFF] p-3 border border-[#E3D4BA]"
              />
            </div>

            <div className="w-full pt-4 border-t border-[#E3D4BA] text-center">
              <button
                onClick={closeLightbox}
                className="px-8 py-3 rounded-xl bg-[#1F4FD8] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Close Preview
              </button>
            </div>
=======
                className={btnPrimary}
              >
                Buy on B&amp;H <ShoppingCart className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="flex min-h-[16rem] items-center justify-center bg-white rounded-3xl p-8 border border-[#0B1F3A] shadow-sm">
            <img
              src={`${IMG}/Sky5G_TCPA117_CES_awards_original_crop.png`}
              alt="Sky5G TCPA 117 Router"
              className="max-h-72 w-auto max-w-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Overview: sidebar (downloads + where to buy) on the left, product content on the right */}
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          {/* ---------- Left sidebar ---------- */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="grid grid-cols-1 gap-3">
              <button type="button" className={`${sideBtn} !py-3 !text-sm`}>Download Latest Firmware</button>
              <button type="button" className={`${sideBtn} !py-3 !text-sm`}>Quickstart Guide</button>
              <button type="button" className={`${sideBtn} !py-3 !text-sm`}>Customer FAQs</button>
            </div>

            {/* B&H promo */}
            <div className="overflow-hidden rounded-2xl border border-[#FF6A00]/60 bg-[#1B2FD0] px-5 py-7 text-center text-white">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border-2 border-white/90 px-4 py-1.5 text-lg font-extrabold">
                <Wifi className="h-4 w-4 rotate-90 text-[#35E0FF]" />
                Sky5G
                <Wifi className="h-4 w-4 -rotate-90 text-[#35E0FF]" />
              </span>
              <p className="mt-5 text-sm font-semibold text-white">Available from</p>
              <p className="mt-1 text-2xl font-black leading-tight text-[#35E0FF]">B&amp;H Photo Video</p>
              <p className="mt-1 text-sm font-semibold text-white">an authorized SkyMirr reseller.</p>
              <p className="mt-5 text-2xl font-black text-white">Ready to Buy?</p>
              <a
                href="https://www.bhphotovideo.com/c/search?q=skymirr"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#E5121B] px-6 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white"
              >
                Shop at B&amp;H <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Buy online */}
            <div className="rounded-2xl border border-[#FF6A00]/60 bg-white p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#0B1F3A]">
                Buy online <ShoppingCart className="ml-1 inline h-3.5 w-3.5" />
              </p>
              <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://www.amazon.com/s?k=skymirr"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Search SkyMirr on Amazon"
                      className="s5g-marketplace s5g-marketplace-amazon"
                    >
                      <svg viewBox="0 0 96 34" role="img" aria-label="Amazon" className="h-7 w-[76px]" fill="none">
                        <text x="8" y="22" fontSize="23" fontWeight="700" fill="#172033" fontFamily="Arial, sans-serif">amazon</text>
                        <path d="M20 27 C37 34 61 33 77 25" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round"/>
                        <path d="M70 24 L78 24 L75 30" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.walmart.com/search?q=skymirr"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Search SkyMirr on Walmart"
                      className="s5g-marketplace s5g-marketplace-walmart"
                    >
                      <svg viewBox="0 0 112 28" role="img" aria-label="Walmart" className="h-6 w-[92px]">
                        <text x="0" y="20" fontSize="19" fontWeight="700" fill="#0071CE" fontFamily="Arial, sans-serif">Walmart</text>
                        <g transform="translate(96 13)" fill="#FFC220">
                          <rect x="-1.5" y="-7" width="3" height="6" rx="1.5"/>
                          <rect x="-1.5" y="1" width="3" height="6" rx="1.5"/>
                          <rect x="-7" y="-1.5" width="6" height="3" rx="1.5"/>
                          <rect x="1" y="-1.5" width="6" height="3" rx="1.5"/>
                          <rect x="-5.7" y="-5.7" width="3" height="6" rx="1.5" transform="rotate(-45 -4.2 -2.7)"/>
                          <rect x="2.7" y="1.7" width="3" height="6" rx="1.5" transform="rotate(-45 4.2 4.7)"/>
                        </g>
                      </svg>
                    </a>
                    <a
                      href="https://www.digikey.com/en/supplier-centers/skymirr"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Find SkyMirr on DigiKey"
                      className="s5g-marketplace s5g-marketplace-digikey"
                    >
                      <svg viewBox="0 0 96 28" role="img" aria-label="DigiKey" className="h-6 w-[78px]">
                        <text x="0" y="20" fontSize="20" fontWeight="800" fill="#CC0000" fontFamily="Arial, sans-serif">DigiKey</text>
                      </svg>
                    </a>
                    <a
                      href="https://www.bhphotovideo.com/c/search?q=skymirr"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Search SkyMirr at B&H"
                      className="s5g-marketplace s5g-marketplace-bh"
                    >
                      <svg viewBox="0 0 54 28" role="img" aria-label="B&H Photo Video" className="h-6 w-[48px]">
                        <text x="0" y="21" fontSize="21" fontWeight="900" fill="#D71920" fontFamily="Arial, sans-serif">B&amp;H</text>
                      </svg>
                    </a>
              </div>
              <button type="button" onClick={onContact} className={`${sideBtn} mt-4 !py-3 !text-xs`}>
                Contact Skymirr For Bulk Purchase (MOQ: 10 Units)
              </button>
            </div>
          </aside>

          {/* ---------- Right content ---------- */}
          <div className="min-w-0 space-y-6">
            {/* Product header */}
            <section className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
              <button
                type="button"
                onClick={() => open(`${IMG}/Sky5G_TCPA117_CES_awards_original_crop.png`, "Sky5G TCPA 117")}
                aria-label="Open larger Sky5G TCPA 117 product image"
                className="s5g-product-showcase relative flex min-h-[260px] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-[#FF6A00]/70 bg-white p-5 sm:p-8"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1F4FD8] via-[#1F4FD8] to-[#FF6A00]" />
                <span className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-[#FF6A00]/50 bg-white p-2 text-[#1F4FD8]">
                  <ZoomIn className="h-4 w-4" />
                </span>
                <img
                  src={`${IMG}/Sky5G_TCPA117_CES_awards_original_crop.png`}
                  alt="Sky5G TCPA 117 Router"
                  loading="eager"
                  decoding="async"
                  className="relative z-[1] block h-auto max-h-[360px] w-full max-w-[460px] object-contain"
                />
              </button>

              <div className="flex flex-col justify-center rounded-[1.75rem] border border-[#E1E7F0] bg-[#F7F9FC] p-6 sm:p-8">
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#EAF0FF] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1F4FD8]">
                  SkyMirr · 5G Connectivity
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1F3A] sm:text-4xl">Sky5G TCPA 117</h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-[#FF6A00]" />
                <p className="mt-5 text-base font-semibold leading-relaxed text-[#334155] sm:text-lg">
                  5G Sub-6 /4G LTE Wireless Customer Premises Equipment/Router
                </p>
                <div className="mt-6 border-t border-[#DCE3ED] pt-5">
                  <p className="text-sm font-semibold text-[#64748B]">For detailed performance specifications and product datasheet, contact SkyMirr at</p>
                  <a href="mailto:sales@skymirr.com" className="mt-2 inline-block font-bold text-[#1F4FD8] underline-offset-4 hover:underline">
                    sales@skymirr.com
                  </a>
                  .
                </div>
              </div>
            </section>

            {/* Product information — same copy, structured as cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          <section className="s5g-info-card space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">01 / The problem</p>
            <h2 className={h2}>The Challenge</h2>
            <p className={body}>
              In rugged landscapes and dense urban environments, millions struggle with slow, unstable internet. Weak
              RF signals and limited fiber access create persistent connectivity gaps, restricting education,
              commerce, and everyday life.
            </p>
          </section>

          <section className="s5g-info-card space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">02 / The solution</p>
            <h2 className={h2}>The Solution: SkyMirr Sky5G Router</h2>
            <p className={body}>
              Meet the SkyMirr Sky5G Router—engineered for businesses, communities, and users who demand fast,
              resilient, and secure broadband. Fully certified on T-Mobile’s 5G network and T-Priority, Sky5G sets a
              new standard for performance, even in locations where other routers can’t deliver.
            </p>
            <p className={body}>
              Sky5G is a <strong className="text-[#0B1F3A]">CES2026 Innovation Award Honoree</strong>.
            </p>
          </section>

          <section className="s5g-info-card space-y-4 md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">03 / Product engineering</p>
            <h2 className={h2}>Superior Connectivity By Design</h2>
            <p className={body}>
              Unlike traditional routers where antennas are an afterthought, SkyMirr’s exclusive MuLCAT®
              antenna-first engineering puts signal strength and reliability front and center. Experience up to{" "}
              <strong className="text-[#0B1F3A]">42% farther reach to cell towers</strong>, enhanced indoor coverage,
              and consistently high speeds—even during network congestion or in remote locations.
            </p>
            <Sky5GDiagram />
            <ul className={ul}>
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </section>

          <section className="s5g-info-card space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">04 / Core technology</p>
            <h2 className={h2}>Superior Connectivity By Design</h2>
            <ul className={ul}>
              <li>
                <strong>MuLCAT® Antenna:</strong> AI-driven, real-time optimization ensures peak performance and
                extends connectivity to challenging areas without upgrading carrier networks.
              </li>
              <li>
                <strong>Wi-Fi 7 Integration:</strong> Delivers seamless, high-speed connections for streaming, remote
                work, and online learning.
              </li>
            </ul>
          </section>

          <section className="s5g-info-card space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">05 / Benefits</p>
            <h2 className={h2}>Key Benefits</h2>
            <ul className={ul}>
              <li><strong>2x Coverage Area:</strong> Connect more users and devices across broader spaces.</li>
              <li><strong>50% Power Savings:</strong> Lower energy consumption for cost-effective, sustainable operations.</li>
              <li><strong>Real-Time Optimization:</strong> Automatic adjustments keep your connection strong in tough conditions.</li>
            </ul>
          </section>

          <section className="s5g-info-card space-y-4 md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">06 / Network compatibility</p>
            <p className={body}>Sky5G is certified for</p>
            <ul className={ul}>
              <li>
                <strong>T-Mobile’s Standard 5G Network</strong>—delivering fast speeds, broad coverage, and
                enterprise-grade reliability.
              </li>
              <li>
                <strong>T-Priority</strong>- where mission-critical users enjoy elevated network access, priority
                queuing during congestion, hardened connections for public safety, and enhanced reliability for first
                responders and emergency services. It is approved for use by: Police, Fire, EMS, emergency operations,
                public works, school districts, utility and infrastructure agencies.
              </li>
              <li>
                <strong>AT&amp;T’s standard 5G network</strong> - delivering reliable 5G connectivity on the AT&amp;T
                network for business, mobile, and connectivity-challenged environments.
              </li>
            </ul>
          </section>

          <section className="s5g-info-card space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">07 / Specifications</p>
            <h2 className={h2}>Technical Highlights</h2>
            <ul className={`${ul} s5g-cols`}>
              {technicalHighlights.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </section>

          <section className="s5g-info-card space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">08 / Applications</p>
            <h2 className={h2}>Versatile Use Cases</h2>
            <ul className={ul}>
              {useCases.map(([t, d]) => (
                <li key={t}><strong>{t}:</strong> {d}</li>
              ))}
            </ul>
          </section>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && (
        <div
          onClick={close}
          className="s5g-fade fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0B1F3A]/85 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="s5g-pop relative bg-white rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-auto p-6 sm:p-8 border border-[#4C8DF6]"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E3D4BA]">
              <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A]">{lightbox.title}</h3>
              <button
                onClick={close}
                aria-label="Close"
                className="p-2 rounded-xl text-[#5B6B82] hover:bg-[#E8F0FE] hover:text-[#1F4FD8] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="pt-6 flex justify-center">
              <img src={lightbox.src} alt={lightbox.title} className="max-w-full h-auto object-contain" />
            </div>
>>>>>>> ec859e7 (Update website)
          </div>
        </div>
      )}
    </div>
  );
};