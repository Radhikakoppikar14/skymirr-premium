import React, { useState, useMemo, useEffect } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import {
  Sparkles,
  Radio,
  Layers,
  Cpu,
  Globe,
  Zap,
  Search,
  Download,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Activity
} from "lucide-react";
import { CATALOG_ITEMS } from "../data/catalog";
import { ProductCard } from "../components/products/ProductCard";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";
import { DatasheetList } from "../components/sm/DatasheetList";

interface ProductsPageProps {
  onOpenProductDetail?: (productId: string) => void;
  onContactSales?: () => void;
  onNavigateDetail?: (detail: string) => void;
}

const categories = [
  {
    id: "cellular",
    label: "Cellular 3G/4G/5G",
    desc: "Ultra-wideband Sub-6 MIMO and cellular antennas engineered for sustained multi-gigabit throughput.",
    icon: <Radio className="w-4 h-4" />,
  },
  {
    id: "wifi",
    label: "Wi-Fi 6E / 7",
    desc: "Tri-band 2.4/5/6 GHz high-concurrency internal and external Wi-Fi antenna modules.",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    id: "fpcb",
    label: "FPCB Flexible",
    desc: "High-flexibility printed circuit antennas for compact wearables, drones, and tight enclosures.",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    id: "embedded",
    label: "Embedded IoT",
    desc: "Ultra-compact embedded telemetry and remote monitoring antennas with high isolation.",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: "gnss",
    label: "GNSS & GPS",
    desc: "High-precision multi-constellation GPS/GLONASS/Galileo/BeiDou positioning antennas.",
    icon: <Globe className="w-4 h-4" />,
  },
  {
    id: "customized",
    label: "Custom Antenna",
    desc: "Tailored custom electromagnetic antenna geometries developed to client mechanical constraints.",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: "chip",
    label: "Chip Antennas",
    desc: "Surface-mount miniature ceramic chip antennas for high-density SMD board assembly.",
    icon: <Cpu className="w-4 h-4" />,
  },
];

export function ProductsPage({
  onOpenProductDetail,
  onNavigateDetail,
}: ProductsPageProps) {
  const urlParams = new URLSearchParams(window.location.search);
  const fromUrl = urlParams.get("cat");

  const [activeCategory, setActiveCategory] = useState<string>(
    fromUrl && CATALOG_ITEMS[fromUrl] ? fromUrl : "cellular"
  );
  const [searchQuery, setSearchQuery] = useState("");

  // lets the header's Antennas menu switch category while this page is already open
  useEffect(() => {
    const on = (e: Event) => {
      const cat = (e as CustomEvent<{ cat: string }>).detail?.cat;
      if (cat && CATALOG_ITEMS[cat]) { setActiveCategory(cat); setSearchQuery(""); }
    };
    window.addEventListener("sm:category", on);
    return () => window.removeEventListener("sm:category", on);
  }, []);

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    window.history.replaceState({}, "", `/products?cat=${id}`);
  };

  const currentCategoryObj = categories.find((c) => c.id === activeCategory);
  const rawItems = CATALOG_ITEMS[activeCategory] || [];

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return rawItems;
    const q = searchQuery.toLowerCase();
    return rawItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
    );
  }, [rawItems, searchQuery]);

  const handleViewProduct = (item: { id: string; detailRoute?: string }) => {
    if (item.detailRoute && onNavigateDetail)
      return onNavigateDetail(item.detailRoute);
    if (onOpenProductDetail) return onOpenProductDetail(item.id);
    window.location.hash = `#/product-detail/${encodeURIComponent(item.id)}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-20 sm:pt-24 pb-28 bg-[#FFFFFF] text-[#0b1f3a] min-h-screen relative overflow-hidden font-sans">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-14 sm:py-20 mb-8">
        <PageBackdrop />
        
        {/* Live Electromagnetic Wave Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.016}
            amplitude={28}
            speed={0.02}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#4C8DF6]/40 text-xs font-mono uppercase tracking-widest text-[#4C8DF6] font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#4C8DF6]" />
            <span>Hardware Engineering Catalog</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Antenna Modules &amp; Systems
              </h1>
              <p className="text-[#C9D6EE] text-sm sm:text-base font-normal leading-relaxed">
                Continuous 600–6000 MHz coverage, low PIM, and positive-coupling MuLCAT™ resonance across commercial and industrial form factors.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#C9D6EE]">
              <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20">
                8+ Antenna Series
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#4C8DF6]/25 border border-[#4C8DF6]/40 text-[#4C8DF6] font-bold">
                Carrier Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* ============================================================== */}
        {/* FEATURED SPOTLIGHT: SKYTRACKER (LIPA122) & SKY5G ROUTER        */}
        {/* ============================================================== */}
        <div data-pop-grid className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Spotlight Card 1: SkyTracker (LIPA122) */}
          <div
            onClick={() => onNavigateDetail?.("tracker-detail")}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl hover:border-[#4C8DF6] hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#E8F0FE] border border-[#E3D4BA] text-[10px] font-mono uppercase font-bold text-[#1F4FD8]">
                  Featured IoT Hardware
                </span>
                <span className="text-xs font-mono text-[#4C8DF6] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View SkyTracker Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0B1F3A] p-3 flex items-center justify-center shrink-0 border border-[#4C8DF6]/30">
                  <img
                    src="/images/asset-trackers-2.jpg"
                    alt="SkyTracker LIPA122"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-black text-[#0b1f3a] group-hover:text-[#1F4FD8] transition-colors">
                    SkyTracker (LIPA122)
                  </h3>
                  <p className="text-xs text-[#5B6B82] line-clamp-2 leading-relaxed">
                    Real-time multi-sensor asset tracking with barometric Z-axis shelf positioning and sub-2-minute rapid cargo recovery alerting.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-mono text-[#1F4FD8] font-bold">
                    <span>GPS + Wi-Fi Mesh</span>
                    <span>&middot;</span>
                    <span>Z-Axis ±3ft</span>
                    <span>&middot;</span>
                    <span>IP67</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spotlight Card 2: Sky5G CPE Gateway */}
          <div
            onClick={() => onNavigateDetail?.("sky5g-router")}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl hover:border-[#4C8DF6] hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#E8F0FE] border border-[#E3D4BA] text-[10px] font-mono uppercase font-bold text-[#1F4FD8]">
                  Carrier-Certified Flagship
                </span>
                <span className="text-xs font-mono text-[#4C8DF6] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Sky5G Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0B1F3A] p-3 flex items-center justify-center shrink-0 border border-[#4C8DF6]/30">
                  <img
                    src="/images/slider1.jpg"
                    alt="Sky5G Gateway"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-black text-[#0b1f3a] group-hover:text-[#1F4FD8] transition-colors">
                    Sky5G Sub-6 Router
                  </h3>
                  <p className="text-xs text-[#5B6B82] line-clamp-2 leading-relaxed">
                    Flagship 5G CPE router engineered for rural broadband, enterprise failover, and FirstNet priority with MuLCAT™ internal arrays.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-mono text-[#1F4FD8] font-bold">
                    <span>AT&amp;T &amp; T-Mobile Certified</span>
                    <span>&middot;</span>
                    <span>3.4 Gbps Sub-6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* TOP CONTROL DECK: CATEGORY STRIP + SEARCH                      */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl border border-[#E3D4BA] p-4 sm:p-6 shadow-sm space-y-4">
          
          {/* Horizontal Category Switcher Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = (CATALOG_ITEMS[cat.id] ?? []).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#1F4FD8] text-white shadow-md shadow-[#1F4FD8]/30 -translate-y-0.5"
                      : "bg-[#FFFFFF] hover:bg-[#E8F0FE] text-[#5B6B82] hover:text-[#0b1f3a] border border-[#E3D4BA]"
                  }`}
                >
                  <span className={isActive ? "text-white" : "text-[#1F4FD8]"}>
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-[#E3D4BA] text-[#5B6B82]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Filter Bar */}
          <div className="pt-3 border-t border-[#E3D4BA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#5B6B82] font-medium">
              Showing{" "}
              <strong className="text-[#0b1f3a]">
                {filteredItems.length} modules
              </strong>{" "}
              in {currentCategoryObj?.label}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search models, bands, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl text-xs text-[#0b1f3a] outline-none focus:border-[#1F4FD8]"
              />
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div data-pop-grid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              subtitle={item.subtitle}
              image={item.image}
              badge={item.badge}
              onView={() => handleViewProduct(item)}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E3D4BA] space-y-3">
            <p className="text-sm text-[#5B6B82]">
              No antenna modules match your filter query "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-[#1F4FD8] hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}


        {/* Datasheet downloads (built from existing datasheetUrl values) */}
        <section className="sm-ds-section" aria-labelledby="sm-ds-title">
          <h2 id="sm-ds-title" className="sm-ds-title">Datasheets</h2>
          <DatasheetList />
        </section>
      </div>
    </div>
  );
}