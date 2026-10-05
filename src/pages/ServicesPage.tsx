import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Cpu,
  Settings,
  ShieldCheck,
  Activity,
  Radio,
  Clock,
  MapPin,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

export const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"antenna" | "consulting" | "chamber" | "carrier">("antenna");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serviceType: "Custom Antenna Design",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    {
      id: "antenna",
      title: "Custom Antenna Design Services",
      shortTitle: "Antenna Design",
      icon: <Cpu className="w-5 h-5 text-[#087F98]" />,
      tagline: "Tailored Sub-6, IoT, and Wearable Antenna Systems",
      description:
        "SkyMirr delivers rapid, high-performance custom antenna design services that help device makers, OEMs, and system integrators solve complex connectivity challenges fast. Whether you're developing a next-gen IoT solution, enhancing a wireless medical device, or optimizing signal performance in rugged environments, our expert engineering team tailors RF solutions to your exact specifications. From concept to prototype, SkyMirr turns ideas into tested, ready-to-integrate antenna solutions with speed, precision, and unmatched technical support.",
      deliverables: [
        "Full 3D electromagnetic CAD simulation & tuning",
        "Prototypes with verified S11, VSWR, and radiation efficiency",
        "Enclosure & ground plane optimization for embedded layouts",
        "Custom cable, connector, and PCB transition integration",
      ],
      turnaround: "Rapid Prototype in 2-3 Weeks",
    },
    {
      id: "consulting",
      title: "System-Level RF Consulting",
      shortTitle: "RF Consulting",
      icon: <Settings className="w-5 h-5 text-[#087F98]" />,
      tagline: "Holistic Device Architecture & Interference Elimination",
      description:
        "In addition to antenna design, SkyMirr offers specialized consulting on system-level design to ensure seamless integration and peak performance across your wireless device architecture. We work with your team to optimize RF pathways, reduce interference, improve energy efficiency, and align antenna placement with mechanical and thermal constraints. Whether you're refining an existing product or launching a new platform, our engineers bring deep experience in embedded systems, wireless standards, and certification requirements to accelerate development and reduce costly redesigns.",
      deliverables: [
        "Noise floor mitigation & co-existence analysis",
        "Thermal & mechanical constraint co-design",
        "Antenna placement & decoupling strategy",
        "Power amplifier matching & receiver sensitivity audit",
      ],
      turnaround: "Direct Engineering Access",
    },
    {
      id: "chamber",
      title: "3D Spherical Anechoic Chamber Testing",
      shortTitle: "Chamber Testing",
      icon: <Radio className="w-5 h-5 text-[#087F98]" />,
      tagline: "Over-the-Air (OTA) Radiated Performance Verification",
      description:
        "Our Incheon R&D center houses full 3D spherical anechoic chambers capable of precision Total Radiated Power (TRP) and Total Isotropic Sensitivity (TIS) characterization across 600 MHz to 6000 MHz. Gain full visibility into directional radiation patterns before submitting devices to official carrier testing.",
      deliverables: [
        "Full 360° spherical 2D and 3D radiation gain plots",
        "TRP / TIS carrier pre-test qualification",
        "Passive S-parameter port-to-port isolation reports",
        "Fine-tuning recommendations from senior RF fellows",
      ],
      turnaround: "Test Reports Within 48 Hours",
    },
    {
      id: "carrier",
      title: "Carrier & Pre-Certification Compliance",
      shortTitle: "Pre-Certification",
      icon: <ShieldCheck className="w-5 h-5 text-[#087F98]" />,
      tagline: "PTCRB, FCC, AT&T, and T-Mobile First-Time Pass Assurance",
      description:
        "Avoid multi-month delays and expensive redesigns. SkyMirr guides your product through strict PTCRB, FCC, CE, AT&T, and T-Mobile certification requirements with pre-compliance diagnostics and tuning.",
      deliverables: [
        "Carrier OTA qualification gap analysis",
        "FCC Part 15 / SAR compliance consultation",
        "Carrier priority queuing verification (e.g. T-Priority)",
        "Documentation & lab submission management",
      ],
      turnaround: "First-Pass Certification Rate >95%",
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#F8FCFD] text-[#152C39] overflow-x-hidden relative">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#051C24] via-[#073340] to-[#051C24] text-white py-16 sm:py-24">
        
        {/* Live Electromagnetic Sinusoidal Wave Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.016}
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
            <span>Custom RF Engineering &amp; Consulting</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Design &amp; Consulting Services
            </h1>
            <p className="text-base sm:text-lg text-[#D7EEF3] leading-relaxed font-normal">
              From concept to chamber-tested prototype, SkyMirr delivers rapid custom antenna design and system-level RF consulting to help innovators build smarter, connected products faster.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#D7EEF3]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#91D6E3]" />
              <span>Response Within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#91D6E3]" />
              <span>Full 3D Spherical Chamber In-House</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. INTERACTIVE SERVICE WORKBENCH                                */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* Service Category Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-2.5 rounded-3xl border border-[#DFEAF0] shadow-xl">
          {services.map((svc) => {
            const isActive = svc.id === activeTab;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveTab(svc.id as any)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? "bg-[#087F98] text-white shadow-md shadow-[#087F98]/30 -translate-y-0.5"
                    : "hover:bg-[#EAF6F9] text-[#627784] hover:text-[#152C39]"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#087F98]"}>
                  {svc.icon}
                </span>
                <span className="text-xs font-bold font-sans tracking-wide">
                  {svc.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Stage */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DFEAF0] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Description & Deliverables (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087F98]">
                {currentService.turnaround}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#152C39] font-sans">
                {currentService.title}
              </h2>
              <p className="text-xs font-mono text-[#18A6BE] font-bold">
                {currentService.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#627784] leading-relaxed">
              {currentService.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-[#152C39] uppercase tracking-wider block">
                Scope &amp; Deliverables Included:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FCFD] border border-[#DFEAF0]">
                    <CheckCircle2 className="w-4 h-4 text-[#087F98] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#152C39] font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Engineering Intake Form (Span 5) */}
          <div className="lg:col-span-5 bg-[#F8FCFD] rounded-2xl p-6 sm:p-8 border border-[#DFEAF0] shadow-inner space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#087F98] bg-[#EAF6F9] px-3 py-1 rounded-full border border-[#91D6E3]/40 inline-block mb-2">
                Engineering Desk
              </span>
              <h3 className="text-xl font-black text-[#152C39]">
                Request an RF Consultation
              </h3>
              <p className="text-xs text-[#627784] mt-1">
                Melbourne, FL engineering desk responds within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-[#152C39]">
                  Inquiry Received
                </h4>
                <p className="text-xs text-[#627784]">
                  An application engineer will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#087F98] hover:underline block mx-auto cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-[#152C39] font-bold block">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-10 px-3 bg-white border border-[#DFEAF0] rounded-xl outline-none focus:border-[#087F98] text-[#152C39]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-[#152C39] font-bold block">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-10 px-3 bg-white border border-[#DFEAF0] rounded-xl outline-none focus:border-[#087F98] text-[#152C39]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#152C39] font-bold block">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="corporate@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 bg-white border border-[#DFEAF0] rounded-xl outline-none focus:border-[#087F98] text-[#152C39]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#152C39] font-bold block">Requirements / Frequencies</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Target bands (e.g. 600-6000MHz), PCB constraints, enclosure details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-white border border-[#DFEAF0] rounded-xl outline-none focus:border-[#087F98] text-[#152C39] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#087F98] to-[#18A6BE] hover:from-[#065A6C] hover:to-[#087F98] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>

        </div>

      </section>

    </div>
  );
};
