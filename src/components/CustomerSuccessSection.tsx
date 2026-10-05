import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const CustomerSuccessSection: React.FC<{ onExploreRouter?: () => void }> = ({ onExploreRouter }) => {
  const outcomes = [
    'Stores opened on schedule',
    'Continuous POS operations',
    'Real-time inventory synchronization',
    'Reduced deployment costs',
    'Smooth transition to future failover connectivity',
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium text-blue-600 mb-3">Real-World Impact</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Customer Success Scenario
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            How enterprise retailers and critical infrastructure overcome connectivity delays with SkyMirr
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="p-6 sm:p-12 space-y-10">
            {/* Case Title */}
            <div className="pb-8 border-b border-slate-100">
              <p className="text-sm font-medium text-slate-400 mb-2">Case Study · Enterprise Retail</p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                Retail Expansion Without Connectivity Delays
              </h3>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              <div className="space-y-3 bg-canvas rounded-2xl p-6 border border-slate-200/70">
                <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  The Challenge
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A national retailer was opening ten new locations. Fiber installation delays threatened store launches, POS deployment, inventory synchronization, and staff onboarding.
                </p>
              </div>

              <div className="space-y-3 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  The SkyMirr Solution
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The retailer implemented <strong className="text-blue-950 font-semibold">Sky5G Routers</strong> as primary broadband gateways. Mesh Networking extended coverage across sales floors and warehouses, while <strong className="text-blue-950 font-semibold">MuLCAT® technology</strong> maintained stable connectivity during periods of heavy network usage.
                </p>
              </div>
            </div>

            {/* Business Outcomes */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900">Business Outcomes</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {outcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-slate-500">
                Hardware: Sky5G® Wireless Router (TCPA 117)
              </span>

              {onExploreRouter && (
                <button
                  onClick={onExploreRouter}
                  className="group inline-flex items-center gap-2 h-11 px-6 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <span>Explore Sky5G Technical Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};