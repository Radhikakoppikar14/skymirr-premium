import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Gauge, Radio, ShoppingCart, Wifi, X, ZoomIn } from "lucide-react";

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
.s5g-page .sm-prod-hero-title {
  margin: 0;
  color: #fff;
  font-size: clamp(2.6rem, 5vw, 4.75rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.025em;
  text-shadow: 0 2px 8px rgba(0,0,0,.35);
}
.s5g-page .sm-prod-hero-sub {
  margin-top: .75rem;
  max-width: 72rem;
  color: rgba(255,255,255,.96);
  font-size: clamp(1.15rem, 2.45vw, 2.375rem);
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: .015em;
  text-shadow: 0 2px 6px rgba(0,0,0,.4);
}
@media (max-width: 640px) {
  .s5g-page .sm-prod-hero-title { font-size: clamp(2rem, 9vw, 3rem); }
  .s5g-page .sm-prod-hero-sub { font-size: clamp(1rem, 4vw, 1.35rem); }
}
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
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}
.s5g-hero-shade {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(100deg, rgba(5, 43, 125, .82) 0%, rgba(14, 75, 166, .55) 58%, rgba(255, 106, 0, .24) 100%);
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
  transition: border-color 180ms ease, background-color 180ms ease;
}
.s5g-frame:hover {
  border-color: #1F4FD8;
  box-shadow: none !important;
  transform: none !important;
}
.s5g-shine {
  background: #1F4FD8;
  border: 1px solid #FF6A00;
  box-shadow: none !important;
  transition: background-color 180ms ease, border-color 180ms ease;
}
.s5g-shine:hover {
  background: #1741B8;
  transform: none !important;
  box-shadow: none !important;
}
.s5g-buy {
  background: #0B1F3A;
  border: 1px solid rgba(255, 106, 0, .7);
  box-shadow: none !important;
}
.s5g-pulse, .s5g-float, .s5g-floor, .s5g-zoom-ico { animation: none !important; }
.s5g-logo, .s5g-logo:hover {
  transition: color 180ms ease, border-color 180ms ease;
  transform: none !important;
}
.s5g-floor { display: none !important; }
/* Keep all text stable during scrolling: no scroll-triggered transforms or glitch effects. */
.s5g-word, .s5g-hero-eyebrow, .s5g-hero-sub, .s5g-rv, .s5g-rv-up, .s5g-rv-left, .s5g-rv-right, .s5g-rv-zoom, .s5g-rv.is-in {
  opacity: 1 !important;
  animation: none !important;
  transform: none !important;
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
  width: 100%;
  min-height: 52px;
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
  border-top: 3px solid #1F4FD8;
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

@keyframes s5g-section-enter {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.s5g-page .s5g-info-card {
  animation: none !important;
  transition: border-color 180ms ease, background-color 180ms ease;
}
.s5g-page .s5g-info-card:hover { border-color: #9DB5F7; }
.s5g-page button:not(.s5g-product-showcase) { transition: background-color 180ms ease, border-color 180ms ease; }
.s5g-page img, .s5g-page svg[role="img"] { transform: none !important; transition: none !important; }
@media (prefers-reduced-motion: reduce) {
  .s5g-page .s5g-info-card { animation: none !important; transition: none !important; }
  .s5g-page button { transition: none !important; }
}
@media (max-width: 767px) {
  .sky5g-hero { min-height: 300px; }
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

export const Sky5GDetailPage: React.FC<Sky5GDetailPageProps> = ({ onBack, onContact }) => {
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, src: "", title: "" });
  const open = (src: string, title: string) => setLightbox({ isOpen: true, src, title });
  const close = () => setLightbox((p) => ({ ...p, isOpen: false }));

  useEffect(() => {
    if (!lightbox.isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.isOpen]);

  return (
    <div className="s5g-page pdx-page relative isolate pt-[72px] pb-24 bg-white text-[#0B1F3A]">
      <style>{css}</style>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#FF6A00]/40 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#5B6B82] hover:text-[#1F4FD8] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 " />
            <span>Back to Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#5B6B82]">
            <span>CPEs</span>
            <span>/</span>
            <span className="text-[#1F4FD8] font-bold bg-[#E8F0FE] px-3 py-0.5 rounded-full tracking-wider">
              TCPA 117 (Sky5G® Router)
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
              <a
                href="https://www.bhphotovideo.com/c/search?q=skymirr"
                target="_blank"
                rel="noreferrer"
                className={btnPrimary}
              >
                Buy on B&amp;H <ShoppingCart className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

      {/* Sky5G hero: matches the Antennas banner dimensions, typography, and background video */}
      <section className="sm-prod-hero sky5g-hero relative isolate flex min-h-[260px] items-center overflow-hidden border-b-4 border-[#FF6A00] bg-[#0B1F3A] text-white sm:min-h-[360px] mb-8">
        <video
          className="s5g-hero-video absolute inset-0 z-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/slider2-1536x550.jpg"
          aria-hidden="true"
        >
          <source src="/assets/slider-background.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, rgba(5,43,125,.82) 0%, rgba(14,75,166,.55) 58%, rgba(255,106,0,.24) 100%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="sm-prod-hero-title">Sky5G Wireless Router</h1>
          <p className="sm-prod-hero-sub">Unleashing Reliable Connectivity Anywhere</p>
        </div>
      </section>

      {/* Product page: sidebar (downloads, reseller banner, buy online) + main content */}
      <div className="sky5g-content mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10">
          {/* ---------- Left sidebar ---------- */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <button type="button" className={sideBtn}>Download Datasheet</button>
            <button type="button" className={sideBtn}>Download Latest Firmware</button>
            <button type="button" className={sideBtn}>Quickstart Guide</button>
            <button type="button" className={sideBtn}>Customer FAQs</button>

            <a
              href="https://www.bhphotovideo.com/c/search?q=skymirr"
              target="_blank"
              rel="noreferrer"
              aria-label="Sky5G available from B&H Photo Video, an authorized SkyMirr reseller. Shop at B&H"
              className="block overflow-hidden rounded-2xl border border-[#FF6A00]/60"
            >
              <img src={`${IMG}/sky5g-bh-banner.png`} alt="Sky5G available from B&H Photo Video — Ready to Buy? Shop at B&H" className="block h-auto w-full" />
            </a>

            <div className="rounded-2xl border border-[#E1E7F0] bg-white p-4">
              <p className="flex items-center justify-center gap-2 border-b-2 border-[#1F4FD8] pb-3 text-center text-sm font-extrabold text-[#0B1F3A]">
                Buy Online <ShoppingCart className="h-4 w-4" />
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a href="https://www.amazon.com/s?k=skymirr" target="_blank" rel="noreferrer" aria-label="Search SkyMirr on Amazon" className="s5g-marketplace s5g-marketplace-amazon">
                  <svg viewBox="0 0 96 34" role="img" aria-label="Amazon" className="h-7 w-[76px]" fill="none"><text x="8" y="22" fontSize="23" fontWeight="700" fill="#172033" fontFamily="Arial, sans-serif">amazon</text><path d="M20 27 C37 34 61 33 77 25" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round"/><path d="M70 24 L78 24 L75 30" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="https://www.walmart.com/search?q=skymirr" target="_blank" rel="noreferrer" aria-label="Search SkyMirr on Walmart" className="s5g-marketplace s5g-marketplace-walmart">
                  <svg viewBox="0 0 112 28" role="img" aria-label="Walmart" className="h-6 w-[92px]"><text x="0" y="20" fontSize="19" fontWeight="700" fill="#0071CE" fontFamily="Arial, sans-serif">Walmart</text><g transform="translate(96 13)" fill="#FFC220"><rect x="-1.5" y="-7" width="3" height="6" rx="1.5"/><rect x="-1.5" y="1" width="3" height="6" rx="1.5"/><rect x="-7" y="-1.5" width="6" height="3" rx="1.5"/><rect x="1" y="-1.5" width="6" height="3" rx="1.5"/></g></svg>
                </a>
                <a href="https://www.digikey.com/en/supplier-centers/skymirr" target="_blank" rel="noreferrer" aria-label="Find SkyMirr on DigiKey" className="s5g-marketplace s5g-marketplace-digikey">
                  <svg viewBox="0 0 96 28" role="img" aria-label="DigiKey" className="h-6 w-[78px]"><text x="0" y="20" fontSize="20" fontWeight="800" fill="#CC0000" fontFamily="Arial, sans-serif">DigiKey</text></svg>
                </a>
                <a href="https://www.bhphotovideo.com/c/search?q=skymirr" target="_blank" rel="noreferrer" aria-label="Search SkyMirr at B&H" className="s5g-marketplace s5g-marketplace-bh">
                  <svg viewBox="0 0 54 28" role="img" aria-label="B&H Photo Video" className="h-6 w-[48px]"><text x="0" y="21" fontSize="21" fontWeight="900" fill="#D71920" fontFamily="Arial, sans-serif">B&amp;H</text></svg>
                </a>
              </div>
              <button type="button" onClick={onContact} className={`${sideBtn} mt-4 !py-3 !text-xs`}>
                Contact Skymirr For Bulk Purchase (MOQ: 10 Units)
              </button>
            </div>
          </aside>

          {/* ---------- Main content ---------- */}
          <main className="min-w-0 space-y-10">
            {/* Challenge + Solution */}
            <section className="grid grid-cols-1 gap-8 xl:grid-cols-12">
              <div className="space-y-8 xl:col-span-7">
                <div className="space-y-3">
                  <h2 className={h2}>The Challenge</h2>
                  <p className={body}>
                    In rugged landscapes and dense urban environments, millions struggle with slow, unstable internet.
                    Weak RF signals and limited fiber access create persistent connectivity gaps, restricting education,
                    commerce, and everyday life.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className={h2}>The Solution: SkyMirr Sky5G Router</h2>
                  <p className={body}>
                    Meet the SkyMirr Sky5G Router—engineered for businesses, communities, and users who demand fast,
                    resilient, and secure broadband. Fully certified on T-Mobile’s 5G network and T-Priority, Sky5G sets
                    a new standard for performance, even in locations where other routers can’t deliver.
                  </p>
                  <p className={body}>
                    Sky5G is a <strong className="text-[#0B1F3A]">CES2026 Innovation Award Honoree</strong>.
                  </p>
                </div>
              </div>

              {/* Product image + name */}
              <div className="xl:col-span-5">
                <div className="s5g-info-card flex flex-col items-center gap-5 sm:flex-row xl:flex-col">
                  <button
                    type="button"
                    onClick={() => open(`${IMG}/Sky5G_TCPA117_CES_awards_original_crop.png`, "Sky5G TCPA 117")}
                    aria-label="Open larger Sky5G TCPA 117 product image"
                    className="s5g-product-showcase relative flex w-full max-w-[320px] items-center justify-center overflow-hidden rounded-2xl border bg-white p-3"
                  >
                    <span className="absolute right-3 top-3 z-[2] rounded-full border border-[#FF6A00]/50 bg-white p-1.5 text-[#1F4FD8]">
                      <ZoomIn className="h-4 w-4" />
                    </span>
                    <img
                      src={`${IMG}/Sky5G_TCPA117_CES_awards_original_crop.png`}
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (!img.dataset.fallback) {
                          img.dataset.fallback = "1";
                          img.src = `${IMG}/sky5g-product-awards.png`;
                        }
                      }}
                      alt="Sky5G TCPA 117 router with CES 2026 Innovation Awards Honoree and IoT Innovator badges"
                      loading="eager"
                      decoding="async"
                      className="block h-auto w-full object-contain"
                    />
                  </button>
                  <div className="w-full">
                    <h3 className="text-xl font-extrabold text-[#0B1F3A]">Sky5G TCPA 117</h3>
                    <div className="mt-3 h-1 w-14 rounded-full bg-[#FF6A00]" />
                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#334155]">
                      5G Sub-6 /4G LTE Wireless Customer Premises Equipment/Router
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Superior Connectivity By Design (1) */}
            <section className="space-y-5">
              <h2 className={h2}>Superior Connectivity By Design</h2>
              <p className={body}>
                Unlike traditional routers where antennas are an afterthought, SkyMirr’s exclusive MuLCAT®
                antenna-first engineering puts signal strength and reliability front and center. Experience up to{" "}
                <strong className="text-[#0B1F3A]">42% farther reach to cell towers</strong>, enhanced indoor
                coverage, and consistently high speeds—even during network congestion or in remote locations.
              </p>
              <button
                type="button"
                onClick={() => open(`${IMG}/sky5g-diagram.png`, "Sky5G local Wi-Fi 7 to base station")}
                aria-label="Open larger Sky5G connectivity diagram"
                className="s5g-frame block w-full max-w-3xl overflow-hidden rounded-2xl bg-white p-3 sm:p-5"
              >
                <img
                  src={`${IMG}/sky5g-diagram.png`}
                  alt="Diagram: Sky5G router with local Wi-Fi 7 to printers, computers and appliances, linked by a 5G Sub6/4G LTE wireless link to a base station"
                  loading="lazy"
                  className="mx-auto block h-auto w-full"
                />
              </button>
              <ul className={ul}>
                {bullets.map((b) => {
                  const m = b.match(/^(42% farther reach|Up to 3\.4 Gbps|Twice the coverage area)(.*)$/);
                  return (
                    <li key={b}>
                      {m ? (<><strong>{m[1]}</strong>{m[2]}</>) : b}
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Superior Connectivity By Design (2) */}
            <section className="space-y-4">
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

            <section className="space-y-4">
              <h2 className={h2}>Key Benefits</h2>
              <ul className={ul}>
                <li><strong>2x Coverage Area:</strong> Connect more users and devices across broader spaces.</li>
                <li><strong>50% Power Savings:</strong> Lower energy consumption for cost-effective, sustainable operations.</li>
                <li><strong>Real-Time Optimization:</strong> Automatic adjustments keep your connection strong in tough conditions.</li>
              </ul>
            </section>

            {/* Certifications */}
            <section className="space-y-4">
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

            <section className="space-y-4">
              <h2 className={h2}>Technical Highlights</h2>
              <ul className={ul}>
                {technicalHighlights.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={h2}>Versatile Use Cases</h2>
              <ul className={ul}>
                {useCases.map(([t, d]) => (
                  <li key={t}><strong>{t}:</strong> {d}</li>
                ))}
              </ul>
            </section>

            <p className="border-t border-[#E1E7F0] pt-6 text-sm text-[#475569]">
              For detailed performance specifications and product datasheet, contact SkyMirr at{" "}
              <a href="mailto:sales@skymirr.com" className="font-bold text-[#FF6A00] underline-offset-4 hover:underline">
                sales@skymirr.com
              </a>
              .
            </p>
          </main>
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