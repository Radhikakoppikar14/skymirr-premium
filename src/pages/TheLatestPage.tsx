import React, { useState } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  Search,
  ChevronRight
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

interface LatestItem {
  id: string;
  title: string;
  date: string;
  image: string;
  isLogoThumb?: boolean;
  excerpt: string;
  content: string;
  category: "press" | "blog";
  badge: string;
}

export const TheLatestPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<LatestItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "press" | "blog">("all");
  const [articleQuery, setArticleQuery] = useState("");

  const items: LatestItem[] = [
    {
      id: "pr-ces2026",
      title: "SkyMirr To Showcase Breakthrough Wireless Technologies At CES 2026",
      date: "December 29, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      category: "press",
      badge: "Press Release",
      excerpt:
        "MELBOURNE, FL — December 29, 2025 — SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas.",
      content:
        "MELBOURNE, FL — December 29, 2025 — SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas.\n\nAttendees will have the opportunity to see SkyMirr's award-winning Sky5G Router, the SkyBlade™ antenna series, and live spherical anechoic chamber test demonstrations showing how MuLCAT® positive coupling control eliminates blind spots in commercial and industrial IoT deployments.",
    },
    {
      id: "pr-tmobile",
      title: "SkyMirr's Sky5G Router Achieves Certification On T-Mobile's Network And T-Priority",
      date: "December 11, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      category: "press",
      badge: "Carrier Certification",
      excerpt:
        "MELBOURNE, FL — December 11, 2025 — SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network.",
      content:
        "MELBOURNE, FL — December 11, 2025 — SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network and T-Priority mission-critical public safety services.\n\nThis certification guarantees seamless compatibility, priority queuing, and verified low-latency performance for enterprise, rural, and first-responder deployments across North America.",
    },
    {
      id: "pr-ces-honoree",
      title: "SkyMirr's Sky5G™ Wireless Router Named CES 2026 Innovation Awards® Honoree",
      date: "November 6, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      category: "press",
      badge: "Industry Honor",
      excerpt:
        "MELBOURNE, FL — November 6, 2025 — SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Honoree.",
      content:
        "MELBOURNE, FL — November 6, 2025 — SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Innovation Awards Honoree.\n\nThe CTA jury commended SkyMirr's internal antenna array which delivers 42% farther reach to cell towers and 2x coverage area compared to typical competitive CPE gateways.",
    },
    {
      id: "pr-mwc",
      title: "SkyMirr Launches Sky5G Router At MWC — Setting A New Standard For 5G Connectivity",
      date: "March 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      category: "press",
      badge: "Global Launch",
      excerpt:
        "BARCELONA — Mobile World Congress — SkyMirr today launched its flagship Sky5G Router (TCPA 117), setting a new benchmark for 5G fixed wireless broadband and mobile gateway performance.",
      content:
        "BARCELONA — Mobile World Congress — SkyMirr today launched its flagship Sky5G Router (TCPA 117), setting a new benchmark for 5G fixed wireless broadband and mobile gateway performance. Leveraging proprietary MuLCAT® electromagnetic positive coupling control, the router delivers unprecedented signal gain across 600 MHz to 6 GHz without bulky external antenna poles.",
    },
    {
      id: "pr-skyblade",
      title: "SkyMirr Introduces SkyBlade, The World's First True Global 5G Ultra-Wideband Antenna",
      date: "March 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      category: "press",
      badge: "Product Release",
      excerpt:
        "MELBOURNE, FL — March 2025 — SkyMirr announced the commercial release of the SkyBlade™ antenna family, including the TAMP161, TAMP154, and TAMP141.",
      content:
        "MELBOURNE, FL — March 2025 — SkyMirr announced the commercial release of the SkyBlade™ antenna family, including the TAMP161, TAMP154, and TAMP141. Designed as a universal drop-in antenna for enterprise cellular gateways and connected vehicles, SkyBlade delivers an industry-first continuous radiation efficiency >80% across the entire 600 MHz to 6000 MHz spectrum.",
    },
    {
      id: "pr-series-a",
      title: "SkyMirr Secures $7.3M Series A Investment Led By Solyco Capital",
      date: "January 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      category: "press",
      badge: "Corporate Growth",
      excerpt:
        "MELBOURNE, FL — January 2025 — SkyMirr, Inc. announced the successful closing of a $7.3 Million Series A financing round led by Solyco Capital.",
      content:
        "MELBOURNE, FL — January 2025 — SkyMirr, Inc. announced the successful closing of a $7.3 Million Series A financing round led by Solyco Capital. The funding supports the expansion of SkyMirr's automated manufacturing facilities in Bac Ninh, Vietnam and Incheon, Korea, and accelerates commercial deployments of the Sky5G router and SkyTracker IoT platform with Tier-1 carriers and enterprise partners.",
    },
    {
      id: "blog-ai-iot",
      title: "Applying AI-Driven Wireless Technology In IoT for Energy, Biomedical, and Communications",
      date: "November 2025",
      image: "/images/blogs/ai-driven1.jpg",
      isLogoThumb: false,
      category: "blog",
      badge: "Technical Blog",
      excerpt:
        "Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices communicating wirelessly.",
      content:
        "Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices equipped with sensors as well as data integration and management software, communicating with each other, often wirelessly.\n\nHowever, real-world deployment challenges persist in hostile electromagnetic environments: utility sub-stations with massive metallic interference, deep indoor commercial basements, and mobile freight containers.\n\nSkyMirr applies positive coupling control principles and machine-learning tuning to dynamically adapt antenna impedance matching in real time. This ensures stable packet delivery, minimal battery drain, and continuous sensor reporting across smart grid metering, continuous patient biosensors, and cold-chain asset telemetry.",
    },
    {
      id: "blog-mulcat",
      title: "SkyMirr Introduces Patent-Pending Multi-Layer Coupling Controlled Antenna Technology",
      date: "November 2025",
      image: "/images/blogs/Patent-Pending-Multi-Layer1.jpg",
      isLogoThumb: false,
      category: "blog",
      badge: "Whitepaper",
      excerpt:
        "Existing RF technology lacks the capability to meet IoT demands overall. Traditional antenna engineering treated mutual coupling between tightly packed radiation elements as parasitic.",
      content:
        "Traditional antenna engineering has long treated mutual coupling between tightly packed radiation elements as a detrimental parasitic effect to be minimized through physical separation or lossy decoupling networks. In compact 5G routers and mobile IoT devices, this physical separation is impossible.\n\nDr. Eric (Youngmin) Jo and the SkyMirr R&D team overturned this dogma by developing MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology). Instead of fighting mutual coupling, MuLCAT utilizes controlled multi-layer electromagnetic resonance to constructively couple radiating elements.\n\nThis delivers greater than 100% operational bandwidth, up to 92% increase in recognition distance, and more than 65% higher forward gain without increasing device form factor.",
    },
    {
      id: "blog-biotech",
      title: "Pioneering the Next Frontier of Wireless Healthcare and Biosensor Connectivity",
      date: "October 2025",
      image: "/images/blogs/blog-antenna1.jpg",
      isLogoThumb: false,
      category: "blog",
      badge: "Healthcare RF",
      excerpt:
        "Wireless medical telemetry demands micro-scale antennas capable of reliable low-power transmission through human tissue attenuation.",
      content:
        "Wireless medical telemetry demands micro-scale antennas capable of reliable low-power transmission through human tissue attenuation and noisy hospital RF environments.\n\nSkyMirr's compact sub-6 antennas utilize specialized dielectric matching to counteract detuning caused by body proximity, ensuring continuous vital sign streaming without signal dropouts.",
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === "all" ? true : item.category === activeFilter;
    const matchesQuery =
      articleQuery.trim() === ""
        ? true
        : (item.title + item.excerpt + item.content)
            .toLowerCase()
            .includes(articleQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-16 sm:py-24">
        <PageBackdrop />
        
        {/* Live Electromagnetic Wave Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.015}
            amplitude={28}
            speed={0.02}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#4C8DF6_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#4C8DF6]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#4C8DF6]">
            <Sparkles className="w-3.5 h-3.5 text-[#4C8DF6] animate-pulse" />
            <span>Corporate Newsroom &middot; Dispatches &amp; Insights</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              The Latest From SkyMirr
            </h1>
            <p className="text-base sm:text-lg text-[#C9D6EE] leading-relaxed font-normal">
              Official press releases, carrier certification announcements, engineering whitepapers, and wireless industry thought leadership.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. NEWSROOM CONTROLS: SEARCH & CATEGORY FILTER TABS            */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-10">
        
        <div className="bg-white p-3 rounded-3xl border border-[#E3D4BA] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
            {[
              { id: "all", label: `All Dispatches (${items.length})` },
              { id: "press", label: "Press Releases" },
              { id: "blog", label: "Technical Blogs" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? "bg-[#1F4FD8] text-white shadow-md shadow-[#1F4FD8]/20"
                    : "text-[#5B6B82] hover:text-[#0b1f3a] hover:bg-[#E8F0FE]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#5B6B82] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search news, topics, awards..."
              value={articleQuery}
              onChange={(e) => setArticleQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl text-xs text-[#0b1f3a] outline-none focus:border-[#1F4FD8]"
            />
          </div>

        </div>

        {/* Featured Top Dispatch (if All is active and no query) */}
        {activeFilter === "all" && !articleQuery && (
          <div
            onClick={() => setSelectedItem(items[0])}
            className="bg-white rounded-3xl border border-[#E3D4BA] shadow-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group hover:border-[#4C8DF6] transition-all"
          >
            <div className="lg:col-span-4 bg-[#0B1F3A] rounded-2xl p-6 flex items-center justify-center aspect-[16/10]">
              <img
                src={items[0].image}
                alt={items[0].title}
                className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#1F4FD8]">
                <span className="px-3 py-1 rounded-full bg-[#E8F0FE] border border-[#E3D4BA] font-bold">
                  {items[0].badge}
                </span>
                <span>{items[0].date}</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-[#0b1f3a] font-sans group-hover:text-[#1F4FD8] transition-colors">
                {items[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed line-clamp-3">
                {items[0].excerpt}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#1F4FD8] uppercase font-mono">
                <span>Read Full Press Dispatch</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-3xl border border-[#E3D4BA] shadow-xl overflow-hidden hover:border-[#4C8DF6] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Clean Frame (ZERO Background Image) */}
                <div className="relative aspect-[16/10] bg-[#0B1F3A] p-4 flex items-center justify-center overflow-hidden border-b border-[#E3D4BA]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-40 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold text-white bg-[#1F4FD8]/90 px-2.5 py-1 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#5B6B82]">
                    <Calendar className="w-3.5 h-3.5 text-[#1F4FD8]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0b1f3a] leading-snug group-hover:text-[#1F4FD8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5B6B82] line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F4FD8] uppercase font-mono group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. ARTICLE READER MODAL                                        */}
      {/* ============================================================== */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1F3A]/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full border border-[#E3D4BA] animate-in zoom-in-95 duration-200"
          >
            {/* Header (close X removed) */}
            <div className="flex items-center gap-3 p-6 border-b border-[#E3D4BA] bg-[#FFFFFF]">
              <span className="text-xs font-mono font-bold text-[#1F4FD8] bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#E3D4BA]">
                {selectedItem.badge}
              </span>
              <span className="text-xs font-mono text-[#5B6B82]">
                {selectedItem.date}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto sm-scroll">
              <h2 className="text-xl sm:text-2xl font-black text-[#0b1f3a] leading-tight">
                {selectedItem.title}
              </h2>

              <div className="rounded-2xl bg-[#0B1F3A] p-4 flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-56 w-auto object-contain rounded-xl"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5B6B82] leading-relaxed whitespace-pre-line font-normal">
                {selectedItem.content}
              </div>
            </div>

            <div className="p-4 px-6 bg-[#FFFFFF] border-t border-[#E3D4BA] flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-[#1F4FD8] hover:bg-[#1F4FD8] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Dispatch
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};