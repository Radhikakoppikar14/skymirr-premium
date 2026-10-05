import React from "react";
import { Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#073746] text-[#D7EEF3] border-t border-[#18A6BE]/25 relative isolate overflow-hidden">
      {/* Subtle ambient gradient mesh for depth */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -z-10 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_top_right,rgba(24,166,190,0.18),transparent_70%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(8,127,152,0.15),transparent_70%)] pointer-events-none"
      />

      {/* Main Top Footer Section: 4-Column Corporate Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Socials (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#/" className="inline-block group focus-visible:outline-none">
              <img
                src="/images/about/SkyMirr-new-logo-footer.png"
                alt="SkyMirr BE AMAZED"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/skymirr-logo-3d.png";
                }}
              />
            </a>

            <p className="text-xs sm:text-sm text-[#D7EEF3]/90 leading-relaxed font-normal max-w-sm">
              Pioneering antenna-first RF engineering, MuLCAT™ positive-coupling resonance, carrier-certified 5G gateways, and real-time asset telemetry for mission-critical operations.
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#91D6E3]">
                FIND US ON SOCIAL MEDIA
              </div>

              {/* Refined Circular Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/skymirr_inc/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#18A6BE] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/skymirr/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#18A6BE] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@skymirr"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#18A6BE] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href="https://twitter.com/skymirr_inc"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#18A6BE] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr X"
                >
                  <span className="font-bold text-xs">𝕏</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#91D6E3]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal">
              <li>
                <a href="#/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#/products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#/technology" className="hover:text-white transition-colors">Technology</a>
              </li>
              <li>
                <a href="#/services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#/the-latest" className="hover:text-white transition-colors">The Latest</a>
              </li>
              <li>
                <a href="#/about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#/team" className="hover:text-white transition-colors">Team &amp; Leadership</a>
              </li>
              <li>
                <a href="#/contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hardware Portfolios (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#91D6E3]">
              Hardware Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal">
              <li>
                <a href="#/tamp-161" className="hover:text-white transition-colors block">
                  TAMP161 External MIMO
                </a>
              </li>
              <li>
                <a href="#/sky5g-router" className="hover:text-white transition-colors block">
                  Sky5G® TCPA 117 Router
                </a>
              </li>
              <li>
                <a href="#/tracker-detail" className="hover:text-white transition-colors block">
                  SkyTracker LIPA122
                </a>
              </li>
              <li>
                <a href="#/products" className="hover:text-white transition-colors block">
                  Sub-6 Antennas Catalog
                </a>
              </li>
              <li>
                <a href="#/services" className="hover:text-white transition-colors block">
                  Custom RF Design Services
                </a>
              </li>
              <li>
                <a href="#/press-releases" className="hover:text-white transition-colors block">
                  Press Releases &amp; Awards
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters & Direct Contact (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#91D6E3]">
              Headquarters
            </h4>
            
            <div className="space-y-2">
              <div>
                <a
                  href="tel:321-393-1039"
                  className="text-xl sm:text-2xl font-black text-white hover:text-[#91D6E3] transition-colors tracking-tight block"
                >
                  321-393-1039
                </a>
              </div>

              <div>
                <a
                  href="mailto:sales@skymirr.com"
                  className="text-xs sm:text-sm font-semibold text-[#91D6E3] hover:text-white transition-colors block"
                >
                  sales@skymirr.com
                </a>
              </div>

              <div className="text-xs text-[#8A9BA4] leading-relaxed pt-2 font-normal">
                <p>SkyMirr Technologies Inc.</p>
                <p>930 S. Harbor City Blvd</p>
                <p>Suite 403</p>
                <p>Melbourne, FL 32901</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-[#8A9BA4] uppercase tracking-wider block">
                Authorized Retailers
              </span>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#D7EEF3]">
                <a href="https://www.amazon.com/s?k=skymirr" target="_blank" rel="noreferrer" className="hover:text-white underline">Amazon</a>
                <span>&middot;</span>
                <a href="https://www.digikey.com/en/supplier-centers/skymirr" target="_blank" rel="noreferrer" className="hover:text-white underline">DigiKey</a>
                <span>&middot;</span>
                <a href="https://www.walmart.com/search?q=skymirr" target="_blank" rel="noreferrer" className="hover:text-white underline">Walmart</a>
                <span>&middot;</span>
                <a href="https://www.bhphotovideo.com/c/search?q=skymirr" target="_blank" rel="noreferrer" className="hover:text-white underline">B&amp;H Photo</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Deep Navy Copyright Bar */}
      <div className="bg-[#102B3B] text-[#8A9BA4] text-xs py-4 text-center border-t border-[#18A6BE]/15">
        <p className="font-medium tracking-wide">
          SkyMirr &copy; 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
