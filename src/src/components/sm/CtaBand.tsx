import React from "react";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "../../data/skymirrData";

/* Big CTA band: navy -> royal gradient, radar rings, magnetic primary button.
   Heading + eyebrow reuse existing company copy. */
export const CtaBand: React.FC<{ onContact: () => void }> = ({ onContact }) => (
  <section className="sm-ctaband no-reveal" aria-labelledby="sm-cta-title">
    <svg className="sm-ctaband-rings" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      {[80, 150, 220, 290].map((r, i) => (
        <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="currentColor" strokeWidth="1" style={{ animationDelay: `${i * 0.6}s` }} />
      ))}
    </svg>
    <div className="sm-ctaband-inner">
      <p className="sm-eyebrow">{COMPANY_INFO.slogan}</p>
      <h2 id="sm-cta-title">{COMPANY_INFO.whenConnect}</h2>
      <div className="sm-ctaband-actions">
        <button type="button" className="sm-btn sm-btn-light sm-magnetic" onClick={onContact}>
          <span>Contact Us</span><ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);
