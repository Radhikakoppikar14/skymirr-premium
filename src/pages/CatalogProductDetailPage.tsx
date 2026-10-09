import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  X,
  ZoomIn,
} from "lucide-react";
import { ProductSpec } from "../data/skymirrData";
import { AntennaRichSections, normAntennaKey } from "../components/AntennaRichSections";
import { ANTENNA_DETAILS } from "../data/antennaDetails";
import { SectionHead, spot } from "../components/products/SectionHead";

interface CatalogProductDetailPageProps {
  product: ProductSpec;
  onBack: () => void;
  onContact: () => void;
}

export const CatalogProductDetailPage: React.FC<
  CatalogProductDetailPageProps
> = ({ product, onBack, onContact }) => {
  const [modalImageOpen, setModalImageOpen] = useState(false);
  const handleStageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((x - 0.5) * 14).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(-(y - 0.5) * 12).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  };
  const handleStageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    ["--rx", "--ry", "--mx", "--my"].forEach((p) => el.style.removeProperty(p));
  };
  const isAntenna = product.category === "antenna" || product.id === "maep103";

  const rich = isAntenna
    ? ANTENNA_DETAILS[normAntennaKey(product.id)] || ANTENNA_DETAILS[normAntennaKey(product.name)]
    : undefined;

  const detailLinks = [
    { id: "overview", label: "Overview", visible: true },
    { id: "technology", label: "Technology", visible: !!product.frequencyRange },
    { id: "features", label: "Features", visible: product.keyFeatures.length > 0 },
    { id: "specifications", label: "Specifications", visible: product.specs.length > 0 || !!product.dimensions },
    {
      id: "applications",
      label: "Applications",
      visible: product.applications.length > 0 || product.certifications.length > 0,
    },
    { id: "introduction", label: "Details", visible: !!rich },
    { id: "performance", label: "Performance", visible: !!rich?.tables },
    { id: "charts", label: "Measurements", visible: !!rich?.images },
  ].filter((link) => link.visible);

  const [activeId, setActiveId] = useState("overview");
  const [headerHidden, setHeaderHidden] = useState(false);

  // scroll-spy: highlight the section currently in the reading band
  useEffect(() => {
    if (!isAntenna) return;
    const ids = detailLinks.map((l) => l.id).filter((id) => id !== "technology");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    const t = window.setTimeout(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }, 300);
    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [product.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // the site header slides away while reading; keep the section nav glued to the top edge
  useEffect(() => {
    const h = document.querySelector("header");
    if (!h) return;
    const sync = () => setHeaderHidden(h.hasAttribute("data-hidden"));
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(h, { attributes: true, attributeFilter: ["data-hidden"] });
    return () => mo.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-white pb-24 pt-[72px] text-slate-950">
      {/* Live page background */}
      <div aria-hidden="true" className="pd-page-bg">
        <span /><span /><span />
      </div>

      {/* Top Navigation Bar */}
      <div className="pd-topbar relative z-20 px-4 py-3 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="pd-back group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Products</span>
          </button>
          <div className="flex items-center gap-2 text-right text-xs font-mono text-slate-500">
            <span className="uppercase tracking-wider">{product.category}</span>
            <span>/</span>
            <span className="rounded-full bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6] px-3 py-1 font-bold text-white tracking-wider shadow-[0_8px_18px_-8px_rgba(31,79,216,0.8)]">
              {product.badge || product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Section Navigation with scroll-spy */}
      {isAntenna && (
        <nav
          aria-label="Antenna product details"
          style={{ top: headerHidden ? 0 : 72 }}
          className="pd-nav sticky z-30 px-4 py-2.5 sm:px-8"
        >
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto scrollbar-none">
            {detailLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  aria-current={active ? "true" : undefined}
                  onClick={() => {
                    setActiveId(link.id);
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`pd-nav-btn ${active ? "is-active" : ""}`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </nav>
      )}

      <main className="relative z-10 mx-auto max-w-7xl space-y-14 px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        {/* ========================================================
            OVERVIEW & HERO SECTION (Clickable Zoomable Image)
            ======================================================== */}
        <div className="pd-frame">
        <section
          id="overview"
          className="pd-hero scroll-mt-36 relative overflow-clip bg-white rounded-[32px] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* live background: drifting glows + dotted grid */}
          <div aria-hidden="true" className="pd-hero-glow" />

          <div className="relative z-10 space-y-6 lg:col-span-7">
            <div className="space-y-4">
              <div className="pd-pill inline-flex items-center gap-2.5 rounded-full border border-[#E3D4BA] bg-[#E8F0FE] px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
                <span className="pd-live" aria-hidden="true" />
                <span>{product.category} Specification</span>
              </div>

              <h1 className="pd-title text-4xl sm:text-6xl font-black font-sans tracking-tight leading-[1.05]">
                {product.name}
              </h1>

              <p className="pd-tagline text-sm sm:text-lg font-semibold leading-snug font-sans">
                {product.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed font-normal max-w-xl">
              {product.description}
            </p>

            {/* Quick Metrics Bar */}
            <div
              id="technology"
              className="scroll-mt-36 grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2"
            >
              {product.frequencyRange && (
                <div className="pd-metric border-[#E3D4BA] bg-gradient-to-br from-white to-[#E8F0FE] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#5B6B82] font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#1F4FD8]" />
                    Technology Range
                  </div>
                  <div className="font-mono text-sm font-black text-[#0b1f3a]">
                    {product.frequencyRange}
                  </div>
                </div>
              )}
              {product.dimensions && (
                <div className="pd-metric border-[#E3D4BA] bg-gradient-to-br from-white to-[#E8F0FE] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#5B6B82] font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#1F4FD8]" />
                    Dimensions &amp; Weight
                  </div>
                  <div className="font-mono text-sm font-black text-[#0b1f3a]">
                    {product.dimensions}
                  </div>
                </div>
              )}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pd-shimmer relative overflow-clip inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6] hover:from-[#0B1F3A] hover:to-[#1F4FD8] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(31,79,216,0.3)] transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Datasheet</span>
                </a>
              )}
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#E3D4BA] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b1f3a] transition-all hover:border-[#4C8DF6] hover:bg-[#E8F0FE] cursor-pointer shadow-2xs hover:-translate-y-0.5"
              >
                <span>Request Sample</span>
                <ArrowUpRight className="h-4 w-4 text-[#1F4FD8]" />
              </button>
            </div>
          </div>

          {/* Live product stage: rings, orbit, scan line, floating + tilting product */}
          <div className="relative z-10 flex justify-center lg:col-span-5">
            <div
              onClick={() => setModalImageOpen(true)}
              onMouseMove={handleStageMove}
              onMouseLeave={handleStageLeave}
              role="button"
              tabIndex={0}
              aria-label={`Zoom ${product.name} image`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setModalImageOpen(true);
              }}
              className="pd-stage no-lift relative w-full min-h-[340px] sm:min-h-[430px] rounded-[28px] overflow-clip cursor-zoom-in"
            >
              <div aria-hidden="true" className="pd-spot" />
              <div aria-hidden="true" className="pd-rings">
                <span /><span /><span />
              </div>
              <div aria-hidden="true" className="pd-orbit"><i /></div>
              <div aria-hidden="true" className="pd-orbit pd-orbit-2"><i /></div>
              <div aria-hidden="true" className="pd-scan" />
              {[...Array(7)].map((_, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="pd-spark"
                  style={{ left: `${10 + i * 12}%`, animationDelay: `${i * 0.9}s`, animationDuration: `${6 + (i % 3) * 2}s` }}
                />
              ))}

              <div className="pd-float">
                <div className="pd-tilt">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="pd-img max-h-72 w-auto max-w-full object-contain"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="pd-ground" />

              {/* floating info chips (real product data only) */}
              {product.frequencyRange && (
                <div className="pd-chip pd-chip-a" aria-hidden="true">
                  <Cpu className="h-3.5 w-3.5 text-[#1F4FD8]" />
                  <span>{product.frequencyRange}</span>
                </div>
              )}
              <div className="pd-chip pd-chip-b" aria-hidden="true">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1F4FD8]" />
                <span>{product.badge || product.name}</span>
              </div>

              <div className="pd-zoom absolute top-4 right-4 z-20 flex items-center gap-2 rounded-xl bg-[#0B1F3A]/80 px-3 py-2 text-[11px] font-bold text-white backdrop-blur">
                <ZoomIn className="w-4 h-4" />
                <span className="pd-zoom-text">Click to zoom</span>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* ========================================================
            KEY ENGINEERING FEATURES
            ======================================================== */}
        {product.keyFeatures.length > 0 && (
          <section id="features" className="scroll-mt-36 space-y-7">
            <SectionHead icon={Sparkles} title="Key Engineering Features" kicker={product.name} />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.keyFeatures.map((feature, i) => (
                <div
                  key={feature}
                  onMouseMove={spot}
                  className={`pd-feat pd-spot-card ${i === 0 ? "pd-feat-hero sm:col-span-2" : ""}`}
                >
                  <span className="pd-feat-icon" aria-hidden="true">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            PERFORMANCE SPECIFICATIONS TABLE
            ======================================================== */}
        {product.specs.length > 0 && (
          <section id="specifications" className="scroll-mt-36 space-y-7">
            <SectionHead
              icon={Cpu}
              title="Performance Specifications Matrix"
              kicker={product.name}
              right={
                <span className="pd-badge">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Verified Datasheet
                </span>
              }
            />

            <div className="pd-table">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="pd-tr-head text-xs uppercase tracking-wider">
                      <th className="py-4 px-6 font-bold w-1/3">Parameter</th>
                      <th className="py-4 px-6 font-bold w-2/3">Specification Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm font-sans">
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="pd-tr">
                        <td className="py-4 px-6 pd-td-key">
                          <span className="inline-flex items-center gap-2.5">
                            <span className="pd-dot" />
                            {spec.label}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-mono font-bold text-slate-950">{spec.value}</td>
                      </tr>
                    ))}
                    {product.dimensions && (
                      <tr className="pd-tr">
                        <td className="py-4 px-6 pd-td-key">
                          <span className="inline-flex items-center gap-2.5">
                            <span className="pd-dot pd-dot-alt" />
                            Dimensions &amp; Weight
                          </span>
                        </td>
                        <td className="py-4 px-6 font-mono font-bold text-slate-950">{product.dimensions}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            APPLICATIONS & CERTIFICATIONS
            ======================================================== */}
        {(product.applications.length > 0 || product.certifications.length > 0) && (
          <section id="applications" className="scroll-mt-36 grid grid-cols-1 gap-6 md:grid-cols-2">
            {product.applications.length > 0 && (
              <div onMouseMove={spot} className="pd-panel pd-spot-card space-y-5">
                <div className="pd-panel-head">
                  <span className="pd-sec-icon" aria-hidden="true"><Layers className="h-5 w-5" /></span>
                  <h2 className="pd-panel-title">Target Applications</h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.applications.map((application) => (
                    <span key={application} className="pd-tag">{application}</span>
                  ))}
                </div>
              </div>
            )}

            {product.certifications.length > 0 && (
              <div onMouseMove={spot} className="pd-panel pd-spot-card space-y-5">
                <div className="pd-panel-head">
                  <span className="pd-sec-icon" aria-hidden="true"><ShieldCheck className="h-5 w-5" /></span>
                  <h2 className="pd-panel-title">Compliance &amp; Certifications</h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.certifications.map((certification) => (
                    <span key={certification} className="pd-tag pd-tag-ok">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {certification}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {isAntenna && (
          <div className="pt-2">
            <AntennaRichSections id={product.id} name={product.name} />
          </div>
        )}
      </main>

      {/* ========================================================
          FULLSCREEN LIGHTBOX IMAGE ZOOM MODAL
          ======================================================== */}
      {modalImageOpen && product.image && (
        <div
          onClick={() => setModalImageOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0B1F3A]/85 backdrop-blur-lg animate-fade-in cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-3xl rounded-[32px] overflow-hidden shadow-2xl max-w-4xl w-full p-8 sm:p-12 border border-[#E3D4BA] animate-slide-up flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between pb-6 border-b border-[#E3D4BA]">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
                {product.name} — High Resolution Preview
              </span>
              <button
                onClick={() => setModalImageOpen(false)}
                className="p-2.5 rounded-xl text-[#5B6B82] hover:text-[#0b1f3a] hover:bg-[#E8F0FE] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-10 flex items-center justify-center max-h-[70vh] w-full">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[60vh] max-w-full object-contain drop-shadow-xl"
              />
            </div>

            <div className="w-full pt-4 border-t border-[#E3D4BA] text-center">
              <button
                onClick={() => setModalImageOpen(false)}
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