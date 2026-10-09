import React, { useState } from "react";
import { PageBackdrop } from "../components/fx/PageBackdrop";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

interface BlogPost {
  id: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const BlogsPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "blog-1",
      title:
        "SkyMirr Expands Its Antenna Portfolio With New High-Performance 4G/5G And Wi-Fi Solutions",
      image: "/images/blogs/skymirr-next-gen-antennas.jpg",
      date: "September 2026",
      readTime: "4 min read",
      excerpt:
        "As wireless connectivity continues to evolve, antenna performance remains a critical foundation for delivering reliable coverage, higher throughput, and consistent network performance. From 5G broadband and Fixed Wireless...",
      content:
        "As wireless connectivity continues to evolve, antenna performance remains a critical foundation for delivering reliable coverage, higher throughput, and consistent network performance. From 5G broadband and Fixed Wireless Access (FWA) to high-density Wi-Fi 7 environments, next-generation connected devices require sophisticated RF antenna design.\n\nSkyMirr’s newly expanded antenna portfolio introduces high-efficiency, multi-band solutions that address today’s most demanding deployment environments. Powered by proprietary MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), these antennas overcome common RF challenges such as port-to-port interference, radiation degradation in compact form factors, and signal fading at cell boundaries.\n\nKey additions include the flagship TAMP161 4G/5G MIMO Broadband Omnidirectional Module, the high-gain TAMP154 Directional Panel for rural fixed wireless access, and the versatile TAMP159 Wi-Fi 6E/7 external antenna offering wideband coverage across 2.4 GHz, 5 GHz, and 6 GHz spectrums.",
    },
    {
      id: "blog-2",
      title:
        "Antenna-First Design: Why Real-World 5G Performance Starts At The RF Layer",
      image: "/images/blogs/blog-antenna1.jpg",
      date: "January 2026",
      readTime: "6 min read",
      excerpt:
        "SkyMirr's Sky5G CPE platform was developed with a simple engineering premise: In real-world wireless deployments, performance is often limited not by the modem or software stack, but by the antenna subsystem.",
      content:
        "In modern wireless engineering, device manufacturers often spend millions integrating the fastest baseband silicon and newest modem chipsets, only to package them with compromised off-the-shelf antenna elements tucked into tight enclosures.\n\nAt SkyMirr, we believe in 'Antenna-First Design.' The fundamental laws of electromagnetics govern signal propagation: no software algorithm or modem optimization can recover signal energy lost at the antenna interface.\n\nBy designing the antenna geometry and coupling mechanisms simultaneously with the enclosure, circuit trace routing, and thermal dissipators, SkyMirr achieves unmatched isolation (>25 dB) and efficiency (>85%) across 600 MHz to 6000 MHz. The result is the Sky5G router reaching cell towers up to 42% farther than conventional CPEs.",
    },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#FFFFFF] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* Executive Hero Command Deck */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A] text-white py-16 sm:py-24">
        <PageBackdrop />
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
            <span>Insights &amp; Innovation</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Technical Blogs
            </h1>
            <p className="text-base sm:text-lg text-[#C9D6EE] leading-relaxed font-normal">
              Technical papers, antenna-first engineering insights, and RF industry breakthroughs from the SkyMirr engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3D4BA] shadow-xl hover:shadow-2xl hover:border-[#4C8DF6] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#0B1F3A] p-4 flex items-center justify-center border border-[#E3D4BA]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="max-h-48 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#5B6B82]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1F4FD8]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1F4FD8]" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-[#0b1f3a] leading-snug group-hover:text-[#1F4FD8] transition-colors">
                {post.title}
              </h2>

              <p className="text-xs text-[#5B6B82] line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setSelectedPost(post)}
                className="w-full py-3 rounded-xl bg-[#FFFFFF] hover:bg-[#E8F0FE] border border-[#E3D4BA] text-[#1F4FD8] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Read Full Technical Blog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Reader Modal */}
      {selectedPost && (
        <div
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1F3A]/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full border border-[#E3D4BA] animate-in zoom-in-95 duration-200"
          >
            {/* Header (close X removed) */}
            <div className="flex items-center gap-4 p-6 border-b border-[#E3D4BA] bg-[#FFFFFF] text-xs font-mono text-[#5B6B82]">
              <span>{selectedPost.date}</span>
              <span>&middot;</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto sm-scroll">
              <h2 className="text-xl sm:text-2xl font-black text-[#0b1f3a] leading-tight">
                {selectedPost.title}
              </h2>

              <div className="rounded-2xl bg-[#0B1F3A] p-4 flex items-center justify-center">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="max-h-60 w-auto object-contain rounded-xl"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5B6B82] leading-relaxed whitespace-pre-line font-normal">
                {selectedPost.content}
              </div>
            </div>

            <div className="p-4 px-6 bg-[#FFFFFF] border-t border-[#E3D4BA] flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 rounded-xl bg-[#1F4FD8] hover:bg-[#1F4FD8] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};