import React, { useEffect, useState } from "react";
import { BookOpen, Activity, LineChart, X, ZoomIn } from "lucide-react";
import { ANTENNA_DETAILS } from "../data/antennaDetails";
import { SectionHead, spot } from "./products/SectionHead";

export const normAntennaKey = (s: string) => s.replace(/[^a-z0-9]/gi, "").toLowerCase();
const norm = normAntennaKey;

const SubHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="pd-sub">{children}</h3>
);

const Figure: React.FC<{ title: string; src: string; wide?: boolean; onOpen: (f: { title: string; src: string }) => void }> = ({
  title,
  src,
  wide,
  onOpen,
}) => {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <figure
      onMouseMove={spot}
      onClick={() => onOpen({ title, src })}
      className={`pd-fig pd-spot-card ${wide ? "md:col-span-2" : ""}`}
    >
      <figcaption className="pd-fig-cap">
        <span>{title}</span>
        <ZoomIn className="h-4 w-4" aria-hidden="true" />
      </figcaption>
      <div className="pd-fig-body">
        <img src={src} alt={title} loading="lazy" onError={() => setOk(false)} />
      </div>
    </figure>
  );
};

export const AntennaRichSections: React.FC<{ id: string; name: string }> = ({ id, name }) => {
  const d = ANTENNA_DETAILS[norm(id)] || ANTENNA_DETAILS[norm(name)];
  const [lightbox, setLightbox] = useState<{ title: string; src: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  if (!d) return null;

  return (
    <>
      <section id="introduction" className="scroll-mt-36 space-y-6 pt-4">
        <SectionHead icon={BookOpen} title="Overview" kicker={name} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div onMouseMove={spot} className="pd-panel pd-spot-card space-y-6">
            {d.intro && (
              <div>
                <SubHead>Introduction</SubHead>
                {d.intro.map((t) => (
                  <p key={t} className="mb-2 text-sm leading-relaxed text-slate-600">{t}</p>
                ))}
              </div>
            )}
            {d.application && (
              <div>
                <SubHead>Application</SubHead>
                {d.applicationList ? (
                  <ul className="pd-ul">{d.application.map((t) => <li key={t}>{t}</li>)}</ul>
                ) : (
                  d.application.map((t) => (
                    <p key={t} className="mb-2 text-sm leading-relaxed text-slate-600">{t}</p>
                  ))
                )}
              </div>
            )}
            {d.conditions && (
              <div>
                <SubHead>Operating Conditions</SubHead>
                <ul className="pd-ul">{d.conditions.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            )}
          </div>

          {d.features && (
            <div onMouseMove={spot} className="pd-panel pd-spot-card">
              <SubHead>{d.featuresTitle || "Features and Benefits"}</SubHead>
              <ul className="pd-ul pd-ul-lg">{d.features.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          )}
        </div>
      </section>

      {d.tables && (
        <section id="performance" className="scroll-mt-36 space-y-6 pt-12">
          <SectionHead icon={Activity} title="Performance" kicker={name} />
          {d.tables.map((t, i) => (
            <div key={i} className="space-y-3">
              {t.title && <SubHead>{t.title}</SubHead>}
              <div className="pd-table">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max border-collapse text-xs sm:text-sm">
                    <tbody>
                      {t.rows.map((row, r) => (
                        <tr key={r} className={!t.kv && r === 0 ? "pd-tr-head" : "pd-tr"}>
                          {row.map((c, ci) => {
                            const head = ci === 0 || (!t.kv && r === 0);
                            const Tag = !t.kv && r === 0 ? "th" : "td";
                            return (
                              <Tag
                                key={ci}
                                className={`px-4 py-3 ${head ? "text-left font-semibold" : "text-center font-mono"} ${
                                  t.kv && ci === 1 ? "!text-left" : ""
                                } ${ci === 0 && !(!t.kv && r === 0) ? "pd-td-key" : ""}`}
                              >
                                {c}
                              </Tag>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {d.images && (
        <section id="charts" className="scroll-mt-36 space-y-6 pt-12">
          <SectionHead icon={LineChart} title="Measurements" kicker={name} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {d.images.map((im) => (
              <Figure key={im.src} {...im} onOpen={setLightbox} />
            ))}
          </div>
        </section>
      )}

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-lg animate-fade-in cursor-zoom-out sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-slide-up relative flex max-h-[90vh] w-full max-w-5xl cursor-default flex-col rounded-[28px] bg-white p-5 shadow-2xl sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm font-bold text-slate-900">{lightbox.title}</span>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="cursor-pointer rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto pt-5">
              <img src={lightbox.src} alt={lightbox.title} className="max-h-[70vh] w-auto max-w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};