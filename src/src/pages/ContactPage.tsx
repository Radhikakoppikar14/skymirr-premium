import React, { useState } from "react";
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
                </button>
              </form>
            )}
          </div>

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
