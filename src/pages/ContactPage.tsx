import React, { useState } from "react";
<<<<<<< HEAD
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
=======
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageBackdrop } from "../components/fx/PageBackdrop";

type ContactForm = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  product: string;
  region: string;
  message: string;
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

const locations = [
  {
    name: "Melbourne, Florida (Global HQ)",
    detail:
      "Americas commercial desk, corporate governance, and systems architecture.",
  },
  {
    name: "Incheon, Korea (R&D Center)",
    detail:
      "Full 3D spherical anechoic testing chamber and core RF simulation laboratory.",
  },
  {
    name: "Bac Ninh, Vietnam (Manufacturing)",
    detail:
      "Automated mass production tooling, molding, stamping, and SCM testing facilities.",
  },
  {
    name: "Taipei, Taiwan (Logistics)",
    detail:
      "Strategic component sourcing, connector assembly, and carrier distribution.",
  },
];

const initialForm: ContactForm = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  product: productOptions[0],
  region: regionOptions[0],
  message: "",
};

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [emailDraftOpened, setEmailDraftOpened] = useState(false);

  const updateField = (field: keyof ContactForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Wireless project inquiry: ${formData.product}`;
    const body = [
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Company: ${formData.company || "Not provided"}`,
      `Work email: ${formData.email}`,
      `Product or solution: ${formData.product}`,
      `Deployment region: ${formData.region}`,
      "",
      "Project details:",
      formData.message,
    ].join("\n");
    const mailto = `mailto:support@skymirr.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setEmailDraftOpened(true);
    window.location.href = mailto;
  };

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <PageBackdrop variant="illustration" />
        <div className="contact-hero__ambience" aria-hidden="true" />
        <div className="contact-hero__inner">
          <div className="contact-hero__badge">
            <Sparkles aria-hidden="true" />
            <span>Global RF Solutions Desk</span>
          </div>
          <h1 id="contact-hero-title">Contact SkyMirr</h1>
          <p>
            Connect directly with our senior RF engineering specialists, sales directors, and global support facilities in North America and Asia.
          </p>
        </div>
      </section>

      <div className="contact-page__shell">
        <section className="contact-page__channels" aria-label="Contact channels" data-pop-grid>
          <article className="contact-channel">
            <span className="contact-channel__icon" aria-hidden="true">
              <Mail />
            </span>
            <div className="contact-channel__copy">
              <span className="contact-channel__eyebrow">Enterprise Sales</span>
              <a className="contact-channel__link" href="mailto:sales@skymirr.com">
                sales@skymirr.com
              </a>
              <span className="contact-channel__detail">OEM &amp; volume purchase</span>
            </div>
          </article>

          <article className="contact-channel contact-channel--featured">
            <span className="contact-channel__icon" aria-hidden="true">
              <ShieldCheck />
            </span>
            <div className="contact-channel__copy">
              <span className="contact-channel__eyebrow">Engineering Support</span>
              <a className="contact-channel__link" href="mailto:support@skymirr.com">
                support@skymirr.com
              </a>
              <span className="contact-channel__detail">Integration &amp; chamber tests</span>
            </div>
          </article>

          <article className="contact-channel">
            <span className="contact-channel__icon" aria-hidden="true">
              <Phone />
            </span>
            <div className="contact-channel__copy">
              <span className="contact-channel__eyebrow">Direct Line</span>
              <a className="contact-channel__link" href="tel:+13213931039">
                321-393-1039
              </a>
              <span className="contact-channel__detail">Mon–Fri, 9am–5pm EST</span>
            </div>
          </article>
        </section>

        <section className="contact-page__panel" aria-label="Project inquiry and global offices" data-pop-grid>
          <div className="contact-form-column">
            <div className="contact-form-heading">
              <span className="contact-eyebrow">Direct RFQ &amp; Consultation</span>
              <h2>Tell Us About Your Wireless Project</h2>
              <p>Our Melbourne, FL engineering desk assigns an RF specialist within 24 hours.</p>
            </div>

            {emailDraftOpened ? (
              <div className="contact-confirmation" role="status" aria-live="polite">
                <CheckCircle2 aria-hidden="true" />
                <div>
                  <h3>Your inquiry is ready to send</h3>
                  <p>
                    Your email app should open with the project details addressed to support@skymirr.com.
                    If it did not open, you can email the team directly.
                  </p>
                  <a href="mailto:support@skymirr.com">Email engineering support</a>
                </div>
                <button
                  className="contact-confirmation__again"
                  type="button"
                  onClick={() => setEmailDraftOpened(false)}
                >
                  Edit inquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label className="contact-field">
                    <span>First name <b aria-hidden="true">*</b></span>
                    <input
                      autoComplete="given-name"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={(event) => updateField("firstName", event.target.value)}
                      placeholder="Jane"
                    />
                  </label>
                  <label className="contact-field">
                    <span>Last name <b aria-hidden="true">*</b></span>
                    <input
                      autoComplete="family-name"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={(event) => updateField("lastName", event.target.value)}
                      placeholder="Smith"
                    />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label className="contact-field">
                    <span>Company / organization</span>
                    <input
                      autoComplete="organization"
                      name="company"
                      value={formData.company}
                      onChange={(event) => updateField("company", event.target.value)}
                      placeholder="Acme Wireless Corp"
                    />
                  </label>
                  <label className="contact-field">
                    <span>Work email <b aria-hidden="true">*</b></span>
                    <input
                      autoComplete="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="jane@company.com"
                    />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label className="contact-field">
                    <span>Product or solution interest</span>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={(event) => updateField("product", event.target.value)}
                    >
                      {productOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                  <label className="contact-field">
                    <span>Deployment region</span>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={(event) => updateField("region", event.target.value)}
                    >
                      {regionOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="contact-field contact-field--message">
                  <span>Message / specifications <b aria-hidden="true">*</b></span>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Frequency ranges, enclosure dimensions, target carriers (AT&T, T-Mobile), or project timeline..."
                    rows={3}
                  />
                </label>

                <button className="contact-form__submit" type="submit">
                  <Send aria-hidden="true" />
                  <span>Send message to engineering desk</span>
>>>>>>> ec859e7 (Update website)
                </button>
              </form>
            )}
          </div>

<<<<<<< HEAD
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
=======
          <aside className="contact-locations" aria-labelledby="contact-locations-title">
            <div className="contact-locations__heading">
              <span className="contact-eyebrow">Worldwide Operations</span>
              <h2 id="contact-locations-title">Global Campus Locations</h2>
            </div>

            <ul className="contact-locations__list">
              {locations.map((location) => (
                <li className="contact-location" key={location.name}>
                  <MapPin aria-hidden="true" />
                  <div>
                    <h3>{location.name}</h3>
                    <p>{location.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact-response-time">
              <span>Avg. response time</span>
              <strong>&lt; 24 hours guaranteed</strong>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};
>>>>>>> ec859e7 (Update website)
