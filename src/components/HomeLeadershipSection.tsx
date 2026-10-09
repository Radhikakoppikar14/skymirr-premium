import React, { useState } from 'react';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { LEADERSHIP_TEAM } from '../data/skymirrData';

interface HomeLeadershipSectionProps {
  onViewAllTeam?: () => void;
}

export const HomeLeadershipSection: React.FC<HomeLeadershipSectionProps> = ({ onViewAllTeam }) => {
  const [showAll, setShowAll] = useState(false);

  // Exact LinkedIn profile mapping from live skymirr.com
  const linkedinMap: Record<string, string> = {
    "Dr. Eric (Youngmin) Jo, Ph.D.": "https://www.linkedin.com/in/youngmin-jo-phd/",
    "Christopher Morton, Ph.D.": "https://www.linkedin.com/in/chris-morton-89b2b916/",
    "Kerry Greer, MSEE, MBA": "https://www.linkedin.com/in/the-kerry-greer/",
    "Frank (Tae Ho) Son, Ph.D.": "https://www.linkedin.com/in/taeho-son-11b845ba/",
    "Carl Lee, MSEE": "https://www.linkedin.com/in/carl-%ED%9D%AC%EC%9E%AC-lee-30a6b05b/",
    "Dr. Donna Hamlin, Ph.D.": "https://www.linkedin.com/in/global-board-services/",
    "Don Hawley": "https://www.linkedin.com/in/donlhawley/",
    "Alex Wissner-Gross, Ph.D.": "https://www.linkedin.com/in/alexwg/",
    "Yoshioki Chika": "https://www.linkedin.com/in/yoshioki-chika/",
    "David Carrier": "https://www.linkedin.com/in/david-p-carrier-650a2429/",
    "Natasha Tamaskar, Ph.D.": "https://www.linkedin.com/in/natashatamaskar/",
    "Mark Banish": "https://www.linkedin.com/in/mbanish/",
    "Greg Khachatrian": "https://www.linkedin.com/in/greg-khachatrian-13a4791/",
  };

  const photoMap: Record<string, string> = {
    "Dr. Eric (Youngmin) Jo, Ph.D.": "/images/team/eric-bio-new.png",
    "Christopher Morton, Ph.D.": "/images/team/christopher-bio.png",
    "Kerry Greer, MSEE, MBA": "/images/team/kerry-new.png",
    "Natasha Tamaskar, Ph.D.": "/images/team/nathasha.png",
    "Greg Khachatrian": "/images/team/Greg-Khachatrian.png",
    "David Carrier": "/images/team/david-bio.png",
    "Yoshioki Chika": "/images/team/yoshi-bio.png",
    "Alex Wissner-Gross, Ph.D.": "/images/team/alex-bio.png",
    "Dr. Donna Hamlin, Ph.D.": "/images/team/donna-bio.png",
  };

  const displayedMembers = showAll ? LEADERSHIP_TEAM : LEADERSHIP_TEAM.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 bg-[#E8F0FE] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-50 px-3.5 py-1 rounded-full">
            Leadership & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-sans">
            TEAM & LEADERSHIP
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
            World-class telecommunications executives, academic researchers, and operations veterans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {displayedMembers.map((member, idx) => {
            const photoUrl = photoMap[member.name];
            const linkedinUrl = linkedinMap[member.name] || "https://www.linkedin.com/company/skymirr-inc/";

            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(76,141,246,0.08)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {photoUrl ? (
                      <img
                        src={photoUrl}
                        alt={member.name}
                        className="w-16 h-16 rounded-2xl object-cover border border-slate-200/80 shadow-2xs shrink-0"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 font-bold flex items-center justify-center text-sm shrink-0">
                        {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                    )}

                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                      aria-label={`LinkedIn for ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-tight font-sans">
                    {member.name}
                  </h3>
                  <h4 className="text-xs font-semibold text-blue-700 mt-1 mb-3">
                    {member.role}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 font-normal">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View LinkedIn Profile
                  </a>
                  <span className="text-[10px] text-slate-400 font-mono">
                    SkyMirr
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Toggle Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => {
              if (onViewAllTeam && !showAll) {
                onViewAllTeam();
              } else {
                setShowAll(!showAll);
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 text-xs font-bold border border-slate-200/80 transition-all cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>{showAll ? 'Show Fewer Members' : `View All ${LEADERSHIP_TEAM.length} Board & Leadership Members`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};