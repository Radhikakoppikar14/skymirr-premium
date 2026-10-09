import React, { useState } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Building2,
  Globe,
  Radio
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    product: "Sub-6 Antennas",
    region: "North America",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const productOptions = [
    "Sub-6 Antennas",
    "Sky5G CPE Gateway",
    "Asset Trackers (LIPA122)",
    "Custom RF Engineering",
    "3D Chamber Testing",
  ];

  const regionOptions = [
    "North America",
    "Europe & EMEA",
    "Asia-Pacific (APAC)",
    "Latin America",
    "Global Deployment",
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-16 sm:py-24">
        <PageBackdrop />
        
        {/* Live Electromagnetic Sinusoidal Wave Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.015}
            amplitude={28}
            speed={0.02}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A] border border-[#4C8DF6]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#4C8DF6]">
            <Sparkles className="w-3.5 h-3.5 text-[#4C8DF6] animate-pulse" />
            <span>Global RF Solutions Desk</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Contact SkyMirr
            </h1>
            <p className="text-base sm:text-lg text-[#C9D6EE] leading-relaxed font-normal">
              Connect directly with our senior RF engineering specialists, sales directors, and global support facilities in North America and Asia.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. DIRECT CONTACT CHANNELS                                     */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-[#E3D4BA] shadow-xl hover:border-[#4C8DF6] transition-all flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#E8F0FE] text-[#1F4FD8] border border-[#E3D4BA] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#5B6B82]">
                Enterprise Sales
              </span>
              <a
                href="mailto:sales@skymirr.com"
                className="text-base font-bold text-[#1F4FD8] hover:underline block font-mono mt-0.5"
              >
                sales@skymirr.com
              </a>
              <span className="text-[11px] text-[#5B6B82] block mt-0.5">OEM &amp; volume purchase</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E3D4BA] shadow-xl hover:border-[#4C8DF6] transition-all flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#E8F0FE] text-[#1F4FD8] border border-[#E3D4BA] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#5B6B82]">
                Engineering Support
              </span>
              <a
                href="mailto:support@skymirr.com"
                className="text-base font-bold text-[#0b1f3a] hover:text-[#1F4FD8] hover:underline block font-mono mt-0.5"
              >
                support@skymirr.com
              </a>
              <span className="text-[11px] text-[#5B6B82] block mt-0.5">Integration &amp; chamber tests</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E3D4BA] shadow-xl hover:border-[#4C8DF6] transition-all flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#E8F0FE] text-[#1F4FD8] border border-[#E3D4BA] shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#5B6B82]">
                Direct Line
              </span>
              <a
                href="tel:321-393-1039"
                className="text-base font-bold text-[#0b1f3a] hover:text-[#1F4FD8] block font-mono mt-0.5"
              >
                321-393-1039
              </a>
              <span className="text-[11px] text-[#5B6B82] block mt-0.5">Mon–Fri, 9am–5pm EST</span>
            </div>
          </div>

        </div>

        {/* INTAKE FORM & GLOBAL OFFICES SPLIT VIEW */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3D4BA] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1F4FD8]">
                Direct RFQ &amp; Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f3a] font-sans">
                Tell Us About Your Wireless Project
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B82]">
                Our Melbourne, FL engineering desk assigns an RF specialist within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#E8F0FE] border border-[#E3D4BA] text-center space-y-3 animate-in fade-in duration-200">
                <CheckCircle2 className="w-12 h-12 text-[#1F4FD8] mx-auto" />
                <h4 className="text-lg font-bold text-[#0b1f3a]">
                  Inquiry Submitted Successfully
                </h4>
                <p className="text-xs text-[#5B6B82] max-w-md mx-auto">
                  Thank you! An engineer has been notified and will contact you via email at {formData.email || "your provided address"}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#1F4FD8] hover:underline pt-2 cursor-pointer block mx-auto"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#0b1f3a] block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl outline-none focus:border-[#1F4FD8] text-[#0b1f3a]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#0b1f3a] block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl outline-none focus:border-[#1F4FD8] text-[#0b1f3a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#0b1f3a] block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Wireless Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl outline-none focus:border-[#1F4FD8] text-[#0b1f3a]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#0b1f3a] block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl outline-none focus:border-[#1F4FD8] text-[#0b1f3a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#0b1f3a] block">
                      Product or Solution Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl outline-none focus:border-[#1F4FD8] text-[#0b1f3a] cursor-pointer"
                    >
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono uppercase font-bold text-[#0b1f3a] block">
                      Deployment Region
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl outline-none focus:border-[#1F4FD8] text-[#0b1f3a] cursor-pointer"
                    >
                      {regionOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase font-bold text-[#0b1f3a] block">
                    Message / Specifications *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Frequency ranges, enclosure dimensions, target carriers (AT&T, T-Mobile), or project timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 bg-[#FFFFFF] border border-[#E3D4BA] rounded-xl outline-none focus:border-[#1F4FD8] text-[#0b1f3a] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6] hover:from-[#1F4FD8] hover:to-[#1F4FD8] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message to Engineering Desk</span>
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Global Campus Addresses (Span 5) */}
          <div className="lg:col-span-5 space-y-6 bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E3D4BA]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#1F4FD8]">
                Worldwide Operations
              </span>
              <h3 className="text-xl font-black text-[#0b1f3a] mt-1">
                Global Campus Locations
              </h3>
            </div>

            <div className="space-y-4">
              {/* Melbourne HQ */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3D4BA] space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1F4FD8]">
                  <MapPin className="w-4 h-4 text-[#4C8DF6]" />
                  <span>Melbourne, Florida (Global HQ)</span>
                </div>
                <p className="text-xs text-[#5B6B82] pl-6 leading-relaxed">
                  Americas commercial desk, corporate governance, and systems architecture.
                </p>
              </div>

              {/* Incheon R&D */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3D4BA] space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1F4FD8]">
                  <MapPin className="w-4 h-4 text-[#4C8DF6]" />
                  <span>Incheon, Korea (R&amp;D Center)</span>
                </div>
                <p className="text-xs text-[#5B6B82] pl-6 leading-relaxed">
                  Full 3D spherical anechoic testing chamber and core RF simulation laboratory.
                </p>
              </div>

              {/* Bac Ninh Vietnam */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3D4BA] space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1F4FD8]">
                  <MapPin className="w-4 h-4 text-[#4C8DF6]" />
                  <span>Bac Ninh, Vietnam (Manufacturing)</span>
                </div>
                <p className="text-xs text-[#5B6B82] pl-6 leading-relaxed">
                  Automated mass production tooling, molding, stamping, and SCM testing facilities.
                </p>
              </div>

              {/* Taipei Taiwan */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3D4BA] space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1F4FD8]">
                  <MapPin className="w-4 h-4 text-[#4C8DF6]" />
                  <span>Taipei, Taiwan (Logistics)</span>
                </div>
                <p className="text-xs text-[#5B6B82] pl-6 leading-relaxed">
                  Strategic component sourcing, connector assembly, and carrier distribution.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1F3A] text-[#C9D6EE] text-xs font-mono border border-[#4C8DF6]/30 flex items-center justify-between">
              <span>Avg Response Time:</span>
              <span className="text-[#4C8DF6] font-bold">&lt; 24 Hours Guaranteed</span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};