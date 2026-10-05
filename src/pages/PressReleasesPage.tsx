import React, { useState } from "react";
import { Calendar, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

interface PressItem {
  id: string;
  title: string;
  date: string;
  image: string;
  isLogoThumb?: boolean;
  excerpt: string;
  content: string;
}

interface PressReleasesPageProps {
  onNavigateBlog?: () => void;
}

export const PressReleasesPage: React.FC<PressReleasesPageProps> = ({ onNavigateBlog }) => {
  const [selectedItem, setSelectedItem] = useState<PressItem | null>(null);

  const items: PressItem[] = [
    {
      id: "pr-ces2026",
      title: "SkyMirr To Showcase Breakthrough Wireless Technologies At CES 2026",
      date: "December 29, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL — December 29, 2025— SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas.",
      content:
        "MELBOURNE, FL — December 29, 2025 — SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas.\n\nAttendees will have the opportunity to see SkyMirr's award-winning Sky5G Router, the SkyBlade™ antenna series, and live spherical anechoic chamber test demonstrations showing how MuLCAT® positive coupling control eliminates blind spots in commercial and industrial IoT deployments.",
    },
    {
      id: "pr-tmobile",
      title: "SkyMirr's Sky5G Router Achieves Certification On T-Mobile's Network And T-Priority",
      date: "December 11, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL — December 11, 2025 SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network.",
      content:
        "MELBOURNE, FL — December 11, 2025 SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network and T-Priority mission-critical public safety services.\n\nThis certification guarantees seamless compatibility, priority queuing, and verified low-latency performance for enterprise, rural, and first-responder deployments across North America.",
    },
    {
      id: "pr-ces-honoree",
      title: "SkyMirr's Sky5G™ Wireless Router Named CES 2026 Innovation Awards® Honoree",
      date: "November 6, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL November 6, 2025 SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Honoree.",
      content:
        "MELBOURNE, FL — November 6, 2025 SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Innovation Awards Honoree.\n\nThe CTA jury commended SkyMirr's internal antenna array which delivers 42% farther reach to cell towers and 2x coverage area compared to typical competitive CPE gateways.",
    },
    {
      id: "pr-mwc",
      title: "SkyMirr Launches Sky5G Router At MWC — Setting A New Standard For 5G Connectivity",
      date: "March 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
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
      excerpt:
        "MELBOURNE, FL — January 2025 — SkyMirr, Inc. announced the successful closing of a $7.3 Million Series A financing round led by Solyco Capital.",
      content:
        "MELBOURNE, FL — January 2025 — SkyMirr, Inc. announced the successful closing of a $7.3 Million Series A financing round led by Solyco Capital. The funding supports the expansion of SkyMirr's automated manufacturing facilities in Bac Ninh, Vietnam and Incheon, Korea, and accelerates commercial deployments of the Sky5G router and SkyTracker IoT platform with Tier-1 carriers and enterprise partners.",
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#F8FCFD] text-[#152C39] overflow-x-hidden relative">
      
      {/* Executive Hero Command Deck */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#051C24] via-[#073340] to-[#051C24] text-white py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.015}
            amplitude={28}
            speed={0.02}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#18a6be_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#083846] border border-[#18A6BE]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#91D6E3]">
            <Sparkles className="w-3.5 h-3.5 text-[#91D6E3] animate-pulse" />
            <span>Official Dispatches</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Press Releases
            </h1>
            <p className="text-base sm:text-lg text-[#D7EEF3] leading-relaxed font-normal">
              Official corporate announcements, carrier certifications, and technological milestones from SkyMirr.
            </p>
          </div>

          {onNavigateBlog && (
            <div className="pt-1">
              <button
                onClick={onNavigateBlog}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#91D6E3] hover:text-white underline cursor-pointer"
              >
                <span>Explore Technical Blogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-3xl border border-[#DFEAF0] shadow-xl overflow-hidden hover:border-[#18A6BE] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="relative aspect-[16/10] bg-[#06242E] p-4 flex items-center justify-center overflow-hidden border-b border-[#DFEAF0]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-40 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#8A9BA4]">
                  <Calendar className="w-3.5 h-3.5 text-[#087F98]" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-[#152C39] leading-snug group-hover:text-[#087F98] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#627784] line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#087F98] uppercase font-mono group-hover:translate-x-1 transition-transform">
                <span>Read Full Dispatch</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#06242E]/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full border border-[#DFEAF0] animate-in zoom-in-95 duration-200"
          >
            {/* Header (close X removed) */}
            <div className="p-6 border-b border-[#DFEAF0] bg-[#F8FCFD]">
              <span className="text-xs font-mono text-[#8A9BA4]">
                {selectedItem.date}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto sm-scroll">
              <h2 className="text-xl sm:text-2xl font-black text-[#152C39] leading-tight">
                {selectedItem.title}
              </h2>

              <div className="rounded-2xl bg-[#06242E] p-4 flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-56 w-auto object-contain rounded-xl"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#475E6C] leading-relaxed whitespace-pre-line font-normal">
                {selectedItem.content}
              </div>
            </div>

            <div className="p-4 px-6 bg-[#F8FCFD] border-t border-[#DFEAF0] flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-[#087F98] hover:bg-[#065A6C] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Release
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};