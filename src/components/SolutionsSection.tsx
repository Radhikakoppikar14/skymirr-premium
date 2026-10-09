import React, { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Home, Truck, GraduationCap, Factory } from "lucide-react";

interface SolutionsSectionProps {
  onSelectApplication?: (title: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectApplication,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const applications = [
    {
      id: "residential",
      title: "RESIDENTIAL",
      category: "Fixed Wireless Broadband",
      icon: <Home className="w-4 h-4" />,
      subtitle: "High-speed Fixed Wireless Access for suburban & rural homes",
      description: "Delivers carrier-grade broadband to single-family homes and rural communities where fiber is cost-prohibitive. Provides high penetration through modern construction materials and wide coverage up to a 311 ft radius.",
      image: "/images/Residential1.jpg",
      stat: "311 ft Radius",
      metricLabel: "Indoor Coverage",
      tagline: "Suburban & Rural Coverage",
      features: [
        "Eliminates suburban signal dropouts",
        "Carrier-grade 3.4 Gbps Sub-6 NR capacity",
        "Wi-Fi 7 tri-band whole-home streaming",
      ],
    },
    {
      id: "logistics",
      title: "LOGISTICS",
      category: "Supply Chain Telemetry",
      icon: <Truck className="w-4 h-4" />,
      subtitle: "Real-time intermodal tracking, temperature & shock monitoring",
      description: "Continuous real-time visibility across cold-chain, maritime containers, rail, and over-the-road trailers. Automatically triggers instant alarms if cargo tilts, experiences impact, or leaves geofenced routes.",
      image: "/images/logistics1-1.jpg",
      stat: "Multi-Sensor IoT",
      metricLabel: "Telemetry Suite",
      tagline: "Cold-Chain & Freight Security",
      features: [
        "Barometric vertical Z-axis shelf positioning",
        "Trailer Wi-Fi mesh sensor redundancy",
        "Under 2-minute theft recovery notification",
      ],
    },
    {
      id: "educational",
      title: "EDUCATIONAL",
      category: "Campus Infrastructure",
      icon: <GraduationCap className="w-4 h-4" />,
      subtitle: "Campus-wide Wi-Fi 7 density and distance-learning continuity",
      description: "High-density multi-user wireless engineered for universities, schools, and research auditoriums. Effortlessly handles up to 512 concurrent students and faculty devices per node with ultra-low latency.",
      image: "/images/Educational1.jpg",
      stat: "512 Clients/Node",
      metricLabel: "Active Concurrency",
      tagline: "High-Density Multi-User",
      features: [
        "Zero-throttle simultaneous video calls",
        "Secure VLAN segmentation for faculty & guests",
        "Seamless roaming across multiple buildings",
      ],
    },
    {
      id: "industrial",
      title: "INDUSTRIAL",
      category: "Automation & SCADA",
      icon: <Factory className="w-4 h-4" />,
      subtitle: "Heavy machinery, robotics, SCADA & warehouse automation",
      description: "Ruggedized connectivity built for automated warehouses, smart factories, energy grids, and mining sites. Withstands extreme vibrations, high electromagnetic noise, and harsh chemical environments.",
      image: "/images/Industrial1.jpg",
      stat: "IP69K Ruggedized",
      metricLabel: "Environmental Rating",
      tagline: "Harsh Environment SCADA",
      features: [
        "Continuous 24/7 telemetry uptime",
        "High port isolation & RF noise immunity",
        "Dual failsafe backup firmware images",
      ],
    },
  ];

  const current = applications[activeIndex];

  // Warm the browser cache for every sector photo so switching tabs is instant
  useEffect(() => {
    applications.forEach((a) => {
      const img = new Image();
      img.decoding = "async";
      img.src = a.image;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section
      id="applications"
      className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-[#E3D4BA] text-[#0b1f3a] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-[500px] h-[500px] bg-[#4C8DF6]/8 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E3D4BA] pb-8">
          <div className="space-y-3 max-w-none">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1F4FD8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F4FD8] animate-ping" />
              04 &middot; Field Implementations
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-[#0b1f3a]">
              Mission-Critical Applications.
            </h2>

            <p className="text-sm sm:text-base lg:whitespace-nowrap text-[#5B6B82] leading-relaxed font-normal">
              Turnkey connectivity deployed across residential, supply chain, educational, and industrial infrastructures.
            </p>
          </div>
        </div>

        {/* HORIZONTAL SECTOR SELECTOR TABS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" data-no-motion data-sa-skip>
          {applications.map((app, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={app.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                data-no-motion
                data-sa-skip
                onClick={() => setActiveIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? "bg-[#1F4FD8] text-white border-[#1F4FD8] shadow-md shadow-[#1F4FD8]/30 -translate-y-0.5"
                    : "bg-white text-[#5B6B82] hover:text-[#0b1f3a] hover:bg-[#E8F0FE] border-[#E3D4BA]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? "text-white" : "text-[#1F4FD8]"}>
                    {app.icon}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    {app.title}
                  </span>
                </div>
                <span className={`text-[10px] font-mono ${isActive ? "text-[#C9D6EE]" : "text-[#5B6B82]"}`}>
                  0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* MISSION CONTROL APPLICATION DOSSIER (Split Canvas) */}
        <div className="bg-white rounded-3xl border border-[#E3D4BA] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-500 hover:border-[#4C8DF6]">
          
          {/* Left Column: Visual Deployment Viewport (100% Crisp Frame, ZERO Ambient Background Image) */}
          <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto min-h-[340px] sm:min-h-[440px] bg-[#0B1F3A] overflow-hidden flex items-center justify-center">
            {/* Main Deployment Photograph (Properly Framed) */}
            <img
              key={`main-${current.id}`}
              src={current.image}
              alt={current.title}
              data-no-motion
              decoding="async"
              fetchPriority="high"
              className="animate-fade-in relative z-10 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            
            {/* Live Animated Radar & Network Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-12 bg-[radial-gradient(ellipse_at_top_right,rgba(76,141,246,0.18),transparent_60%)]"
            />

            {/* Scrim Overlay */}
            <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/35 to-transparent pointer-events-none" />

            {/* In-Photo Telemetry Pill HUD */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-20">
              <span className="text-xs font-mono uppercase tracking-widest text-[#4C8DF6] font-bold bg-[#0B1F3A]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#4C8DF6]/40 shadow-sm">
                {current.category}
              </span>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-black font-sans block text-white drop-shadow-md">
                  {current.stat}
                </span>
                <span className="text-[10px] font-mono text-[#C9D6EE]">
                  {current.metricLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Dossier & Specifications */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-white">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
                    Deployment Sector &middot; {current.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1f3a] font-sans leading-tight">
                  {current.subtitle}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold text-[#0b1f3a] uppercase tracking-wider block">
                  Field Capabilities:
                </span>
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F4FD8] shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Trigger Row */}
            <div className="pt-6 border-t border-[#E3D4BA] flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => onSelectApplication && onSelectApplication(current.title)}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1F4FD8] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                <span>Consult Deployment Services</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#5B6B82]">
                <ShieldCheck className="w-4 h-4 text-[#1F4FD8]" />
                <span>Enterprise Verified</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};