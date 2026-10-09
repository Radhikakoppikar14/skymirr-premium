import React, { useState } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import {
  Sparkles,
  Linkedin,
  ChevronRight,
  Users,
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  bullets?: string[];
  text?: string;
  fullBio: string;
  category: "management" | "advisory";
  highlight?: string;
}

export const TeamPage: React.FC = () => {
  const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "management" | "advisory">("all");

  const managementTeam: TeamMember[] = [
    {
      name: "ERIC (YOUNGMIN) JO, PH.D.",
      role: "CEO & CO-FOUNDER",
      photo: "/images/team/eric-bio-new.png",
      linkedin: "https://www.linkedin.com/in/youngmin-jo-phd/",
      category: "management",
      highlight: "Over 35 Fundamental RF Patents & Samsung Alum",
      bullets: [
        "25 yr experience in RF, AI, Wireless",
        "Global VP in Taoglas",
        "CTO/CEO in SkyCross",
        "Engineer in Samsung Electronics",
        "Adjunct professor, Korea University",
        "Over 35 patents",
        "Ph.D. in Electrical Engineering from Florida Tech",
      ],
      fullBio:
        "Dr. Youngmin Jo is the visionary Co-Founder and CEO of SkyMirr, Inc. With more than 25 years of pioneering leadership in RF engineering, electromagnetic positive coupling, and wireless systems, he previously served as Global VP of Taoglas and Chief Technology Officer / CEO at SkyCross. He began his distinguished career as a key research engineer at Samsung Electronics and holds over 35 fundamental patents in multi-band antenna design and beam-forming technologies.",
    },
    {
      name: "CHRISTOPHER MORTON, PH.D.",
      role: "BOARD CHAIRMAN & CO-FOUNDER",
      photo: "/images/team/christopher-bio.png",
      linkedin: "https://www.linkedin.com/in/chris-morton-89b2b916/",
      category: "management",
      highlight: "Co-Founder of MeshNetworks (Acquired by Motorola)",
      bullets: [
        "30 yr experience in Wireless, IT, Display",
        "Partner in Orchid Black",
        "Co-founder in Nanophotonica",
        "Co-founder in MeshNetworks",
        "Ph.D. in Communication Systems from University of Pennsylvania",
      ],
      fullBio:
        "Dr. Christopher Morton brings three decades of executive leadership, deep tech venture scaling, and telecom governance to SkyMirr. A Partner at Orchid Black, he was the Co-Founder of MeshNetworks (pioneers of mobile ad-hoc networking, acquired by Motorola) and Co-Founder of Nanophotonica. He holds a Ph.D. in Communication Systems from the University of Pennsylvania.",
    },
    {
      name: "KERRY GREER",
      role: "CSO AND CO-FOUNDER",
      photo: "/images/team/kerry-new.png",
      linkedin: "https://www.linkedin.com/in/the-kerry-greer/",
      category: "management",
      highlight: "Former VP Product Dev at Globalstar & L3Harris",
      bullets: [
        "30 yr experience in Wireless, RF",
        "VP Product Dev in Globalstar",
        "Director in L3Harris, VP in SkyCross",
        "VP in ACR Electronics",
        "Over 10 patents",
        "MBA and MSEE from University of Florida",
      ],
      fullBio:
        "Kerry Greer possesses 30 years of premier wireless hardware development experience. As Co-Founder and Chief Strategy Officer of SkyMirr, he previously spearheaded engineering as VP of Product Development at Globalstar, Director of Engineering at L3Harris, and VP of Engineering at SkyCross. He holds an MBA and MSEE from the University of Florida with more than 10 patents.",
    },
    {
      name: "NATASHA TAMASKAR, PH.D.",
      role: "CHIEF REVENUE OFFICER",
      photo: "/images/team/nathasha.png",
      linkedin: "https://www.linkedin.com/in/natashatamaskar/",
      category: "management",
      highlight: "Global Telecoms '50 Women to Watch' & Radisys SVP",
      bullets: [
        "20+ years of experience in wireless, telecom, AI and security",
        "SVP & Head of Business Strategy and Global Marketing at Radisys, a Jio Platforms Company",
        "VP of Cloud Strategy & Marketing at GENBAND/Kandy.io",
        "Global Telecoms Business '50 Women to Watch' and Analytics Insights '10 Most Influential Women in Technology.'",
        "Ph.D. in Computational Physics from Kent State University and MIT Certification in Applied Generative AI for Digital Transformation.",
      ],
      fullBio:
        "Dr. Natasha Tamaskar brings over 20 years of international telecom and enterprise growth leadership to SkyMirr as Chief Revenue Officer. She previously served as SVP and Head of Business Strategy & Global Marketing at Radisys (a Jio Platforms Company) and VP of Cloud Strategy & Marketing at GENBAND/Kandy.io. Recognized in Global Telecoms Business '50 Women to Watch,' she earned her Ph.D. in Computational Physics from Kent State University.",
    },
  ];

  const boardAdvisors: TeamMember[] = [
    {
      name: "ALEX WISSNER-GROSS, PH.D.",
      role: "Advisory Board Member",
      photo: "/images/team/alex-bio.png",
      linkedin: "https://www.linkedin.com/in/alexwg/",
      category: "advisory",
      highlight: "Harvard Ph.D., MIT Alum, Advised 27 Tech Companies",
      bullets: [
        "Investor & software developer, has advised and invested in 27 tech companies with a combined valuation of over $850 million.",
        "Contributing author of the New York Times Bestseller, 'This Idea Must Die,' and the Amazon #1 New Release, 'What to Think About Machines That Think.'",
        "Ph.D. in Physics from Harvard University and S.B. in ECE from MIT.",
      ],
      fullBio:
        "Dr. Alex Wissner-Gross is an award-winning computer scientist, entrepreneur, investor, and educator. He has founded and advised 27 high-growth technology companies valued at over $850M. A fellow at Harvard's Institute for Applied Computational Science, he completed his Ph.D. in Physics at Harvard University and dual S.B. degrees in Computer Science and Mathematics at MIT.",
    },
    {
      name: "DONNA HAMLIN, PH.D.",
      role: "INDEPENDENT BOARD DIRECTOR",
      photo: "/images/team/donna-bio.png",
      linkedin: "https://www.linkedin.com/in/global-board-services/",
      category: "advisory",
      highlight: "CEO of Boardwise, Advised Boards across 40 Countries",
      bullets: [
        "Award-winning developer of CASCADE® and Board Bona Fide® software management tools.",
        "Founder of Boardwise, Inc.",
        "Adjunct professor, Rensselaer Polytechnic Institute",
        "Ph.D. and M.S. in Business from Rensselaer Polytechnic Institute",
      ],
      fullBio:
        "Dr. Donna Hamlin is an internationally recognized expert in board governance, strategy, and corporate development. The CEO and Founder of Boardwise, Inc., she has advised public, private, and governmental boards across 40 countries and taught corporate leadership at Rensselaer Polytechnic Institute.",
    },
    {
      name: "YOSHIOKI CHIKA",
      role: "Advisory Board Member",
      photo: "/images/team/yoshi-bio.png",
      linkedin: "https://www.linkedin.com/in/yoshioki-chika/",
      category: "advisory",
      highlight: "Former VP at SoftBank, KDDI & Sprint Advisor",
      bullets: [
        "Telecommunication/ Mobile Expert with World-wide recognition",
        "Board member in Metcom",
        "Biz Advisor in Sprint",
        "VP in Softbank",
        "VP in DDI Pocket",
        "Manager in KDDI",
        "BA in Physics from Ibaraki University.",
      ],
      fullBio:
        "Yoshioki Chika is an icon of the global wireless and cellular ecosystem. With foundational senior executive tenures as Vice President at SoftBank, VP at DDI Pocket, Executive Manager at KDDI, and Business Advisor at Sprint, he brings invaluable international carrier alignment to SkyMirr.",
    },
    {
      name: "DAVID CARRIER",
      role: "Advisory Board Member",
      photo: "/images/team/david-bio.png",
      linkedin: "https://www.linkedin.com/in/david-p-carrier-650a2429/",
      category: "advisory",
      highlight: "Founder & President of QuantumFlo, Inc.",
      bullets: [
        "Global leader of manufacturing, Biz Dev and CEO training",
        "Founder and President of Quantumflo, Inc. a leader in advanced packaged pump systems",
        "Advisory board chairman in GrowFL",
        "BS in Business Administration from U of South Florida.",
      ],
      fullBio:
        "David Carrier is a recognized industrial manufacturing authority, business developer, and leadership mentor. The Founder and President of QuantumFlo, Inc., he has built high-precision fluid and electromechanical engineering systems.",
    },
    {
      name: "GREG KHACHATRIAN",
      role: "Board Director",
      photo: "/images/team/Greg-Khachatrian.png",
      linkedin: "https://www.linkedin.com/in/greg-khachatrian-13a4791/",
      category: "advisory",
      highlight: "Steered >$1B in Aggregate Enterprise Transactions",
      text:
        "Greg has 18+ years of leadership, finance and accounting, strategic and operational experience in the gaming, leisure and hospitality industry. As a corporate executive he has completed transactions over $1B in aggregate value.",
      fullBio:
        "Greg Khachatrian has over 18 years of executive leadership, corporate finance, debt restructuring, and capital formation experience. Having successfully steered transactions totaling over $1 Billion in aggregate enterprise value, he provides vital fiduciary rigor and capital structure optimization for SkyMirr.",
    },
  ];

  const allMembers = [...managementTeam, ...boardAdvisors];
  const displayedMembers =
    activeTab === "all"
      ? allMembers
      : activeTab === "management"
      ? managementTeam
      : boardAdvisors;

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-16 sm:py-24">
        <PageBackdrop />
        
        {/* Live Electromagnetic Wave Canvas */}
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
            <span>Executive Leadership &amp; Board Governance</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Team &amp; Leadership
            </h1>
            <p className="text-base sm:text-lg text-[#C9D6EE] leading-relaxed font-normal">
              Industry pioneers with decades of leadership at Samsung, Taoglas, Motorola, Globalstar, SoftBank, Harvard, and MIT steering the future of antenna-first wireless.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. DIRECTORY FILTER TABS & PROFILES GRID                       */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* Category Tabs */}
        <div className="bg-white p-2.5 rounded-3xl border border-[#E3D4BA] shadow-xl flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 px-3 text-xs font-mono font-bold text-[#0b1f3a] uppercase">
            <Users className="w-4 h-4 text-[#1F4FD8]" />
            <span>Leadership Council</span>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: "all", label: `All Profiles (${allMembers.length})` },
              { id: "management", label: `Executive Officers (${managementTeam.length})` },
              { id: "advisory", label: `Board & Advisors (${boardAdvisors.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#1F4FD8] text-white shadow-md shadow-[#1F4FD8]/20"
                    : "text-[#5B6B82] hover:text-[#0b1f3a] hover:bg-[#E8F0FE]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#E3D4BA] shadow-xl overflow-hidden hover:border-[#4C8DF6] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Pedestal (100% Crisp, ZERO Background Image) */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-[#E8F0FE] to-[#FFFFFF] p-6 flex items-center justify-center border-b border-[#E3D4BA] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="max-h-56 w-auto max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(11,31,58,0.18)] group-hover:scale-105 transition-transform duration-500"
                  />
                  {member.highlight && (
                    <div className="absolute bottom-2.5 inset-x-3 text-center">
                      <span className="text-[10px] font-mono text-[#1F4FD8] font-bold bg-white/95 px-2.5 py-1 rounded-full border border-[#E3D4BA] shadow-xs">
                        {member.highlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Profile Information */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F4FD8] font-bold">
                      {member.role}
                    </span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-[#5B6B82] hover:text-[#1F4FD8] hover:bg-[#E8F0FE] transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-lg font-black text-[#0b1f3a] font-sans">
                    {member.name}
                  </h3>

                  {member.bullets && (
                    <ul className="space-y-1.5 pt-1 text-xs text-[#5B6B82]">
                      {member.bullets.slice(0, 3).map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4C8DF6] shrink-0 mt-1.5" />
                          <span className="leading-tight">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {member.text && (
                    <p className="text-xs text-[#5B6B82] line-clamp-3 leading-relaxed">
                      {member.text}
                    </p>
                  )}
                </div>
              </div>

              {/* View Full Dossier Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedBio(member)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FFFFFF] hover:bg-[#E8F0FE] border border-[#E3D4BA] text-[#1F4FD8] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Full Executive Bio</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. EXECUTIVE DOSSIER MODAL                                     */}
      {/* ============================================================== */}
      {selectedBio && (
        <div
          onClick={() => setSelectedBio(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1F3A]/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-[#E3D4BA] animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header (close X removed) */}
            <div className="p-6 border-b border-[#E3D4BA] bg-[#FFFFFF]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1F4FD8] font-bold">
                {selectedBio.role}
              </span>
              <h3 className="text-xl font-black text-[#0b1f3a]">
                {selectedBio.name}
              </h3>
            </div>

            {/* Modal Content (sm-scroll = slim scrollbar without arrow buttons) */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto sm-scroll">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#E8F0FE] p-2 flex items-center justify-center shrink-0 border border-[#E3D4BA]">
                  <img
                    src={selectedBio.photo}
                    alt={selectedBio.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs text-[#5B6B82] font-medium leading-relaxed">
                    {selectedBio.highlight}
                  </div>
                  <a
                    href={selectedBio.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1F4FD8] hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>View LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#E3D4BA]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0b1f3a]">
                  Biography &amp; Industry Track Record:
                </h4>
                <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                  {selectedBio.fullBio}
                </p>
              </div>

              {selectedBio.bullets && (
                <div className="space-y-2 pt-2 border-t border-[#E3D4BA]">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0b1f3a]">
                    Key Career Milestones &amp; Credentials:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#5B6B82]">
                    {selectedBio.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F4FD8] shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="p-4 px-6 bg-[#FFFFFF] border-t border-[#E3D4BA] flex justify-end">
              <button
                onClick={() => setSelectedBio(null)}
                className="px-5 py-2.5 rounded-xl bg-[#1F4FD8] hover:bg-[#1F4FD8] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};