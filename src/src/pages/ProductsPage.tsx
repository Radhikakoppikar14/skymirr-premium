import React, { useState, useMemo, useEffect } from "react";
import {
  Radio,
  Search,
  ArrowRight,
  Activity
} from "lucide-react";
import { CATALOG_ITEMS } from "../data/catalog";
import { ProductCard } from "../components/products/ProductCard";

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
];

export function ProductsPage({
  onOpenProductDetail,
  onNavigateDetail,
}: ProductsPageProps) {
  const urlParams = new URLSearchParams(window.location.search);
  const fromUrl = urlParams.get("cat");

  const [activeCategory, setActiveCategory] = useState<string>(
    fromUrl && categories.some((c) => c.id === fromUrl) && CATALOG_ITEMS[fromUrl] ? fromUrl : "cellular"
  );
  const [searchQuery, setSearchQuery] = useState("");

  // lets the header's Antennas menu switch category while this page is already open
  useEffect(() => {
    const on = (e: Event) => {
      const cat = (e as CustomEvent<{ cat: string }>).detail?.cat;
      if (cat && categories.some((c) => c.id === cat) && CATALOG_ITEMS[cat]) { setActiveCategory(cat); setSearchQuery(""); }
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
      {/* 1. HERO: slider background video + SkyMirr Antennas title       */}
      {/* ============================================================== */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
      />
      <section className="sm-prod-hero relative isolate overflow-hidden text-white mb-8">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/slider-background.mp4" type="video/mp4" />
        </video>
        {/* soft blue tint: lighter than the old navy, but not bright */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#143f7a]/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="sm-prod-hero-title">SkyMirr Antennas</h1>
          <p className="sm-prod-hero-sub">High-Performance Antenna Solutions for Every Connection</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">

        {/* ============================================================== */}
        {/* TOP CONTROL DECK: CATEGORY STRIP + SEARCH                      */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl border border-[#FF6A00]/50 p-4 sm:p-6 space-y-4">

          {/* Horizontal Category Switcher Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = (CATALOG_ITEMS[cat.id] ?? []).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#1F4FD8] text-white border border-[#FF6A00]"
                      : "bg-[#FFFFFF] text-[#5B6B82] border border-[#FF6A00]/50"
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
          <div className="pt-3 border-t border-[#FF6A00]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                className="w-full h-10 pl-10 pr-4 bg-[#FFFFFF] border border-[#FF6A00]/50 rounded-xl text-xs text-[#0b1f3a] outline-none focus:border-[#FF6A00]"
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
              showButton={item.id === "tamp-161"}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#FF6A00]/50 space-y-3">
            <p className="text-sm text-[#5B6B82]">
              No antenna modules match your filter query "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-[#FF6A00] underline-offset-4"
            >
              Clear search filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}