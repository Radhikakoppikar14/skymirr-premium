import React from "react";
import { ParticleNetwork } from "./ParticleNetwork";
import { SignalRings } from "./SignalRings";
import { ParallaxLayer } from "./FloatingObjects";
import { LiveWaveCanvas } from "./LiveWaveCanvas";

const STARS = [
  { x: "6%", y: "20%", d: "0s" },
  { x: "14%", y: "62%", d: "1.2s" },
  { x: "23%", y: "34%", d: "2.4s" },
  { x: "33%", y: "78%", d: "0.6s" },
  { x: "41%", y: "18%", d: "3.1s" },
  { x: "52%", y: "56%", d: "1.8s" },
  { x: "61%", y: "30%", d: "4.0s" },
  { x: "69%", y: "72%", d: "0.3s" },
  { x: "77%", y: "16%", d: "2.9s" },
  { x: "86%", y: "48%", d: "1.5s" },
  { x: "92%", y: "80%", d: "3.6s" },
  { x: "96%", y: "26%", d: "0.9s" },
];

/**
 * 100% Live Animated RF Backdrop (NO background images).
 * Features real-time particle network, sinusoidal electromagnetic wave canvas,
 * dynamic aurora fields, and holographic RF sweep rings.
 */
export const HeroBackdrop: React.FC = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 -z-[1] overflow-hidden pointer-events-none"
  >
    {/* Clean dark cyber RF background with gradient - ZERO images */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#0B1F3A]" />

    {/* Live Electromagnetic Sinusoidal Wave Canvas */}
    <div className="absolute inset-0 opacity-70">
      <LiveWaveCanvas
        frequency={0.015}
        amplitude={32}
        speed={0.02}
        colorScheme="cyan"
        interactive={false}
        showParticles={true}
      />
    </div>

    {/* Live Aurora Energy Fields */}
    <div className="fx-aurora fx-aurora-a" />
    <div className="fx-aurora fx-aurora-b" />
    <div className="fx-aurora fx-aurora-c" />

    {/* Sweeping Light Beams */}
    <div className="fx-beam fx-beam-a" />
    <div className="fx-beam fx-beam-b" />

    {/* Perspective Grid Floor */}
    <div className="fx-floor" />

    {/* Twinkling RF Photon Nodes */}
    <div className="fx-stars">
      {STARS.map((st, i) => (
        <span
          key={i}
          className="fx-star"
          style={{ left: st.x, top: st.y, animationDelay: st.d }}
        />
      ))}
      <span className="fx-shoot" style={{ left: "8%", top: "12%" }} />
      <span
        className="fx-shoot"
        style={{ left: "46%", top: "6%", animationDelay: "4.5s" }}
      />
    </div>

    {/* Real-time interactive Particle Network */}
    <ParticleNetwork />

    {/* Parallax Signal Rings */}
    <ParallaxLayer strength={-26} className="absolute inset-0">
      <SignalRings
        className="w-[760px] max-w-[90vw] -right-52 -top-60"
        waves={4}
      />
      <SignalRings
        className="w-[520px] max-w-[70vw] -left-44 bottom-[-250px]"
        waves={3}
        color="rgba(76,141,246,0.45)"
      />
    </ParallaxLayer>

    {/* Vignette fade */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_55%,rgba(11,31,58,0.65)_100%)]" />
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1F3A] to-transparent" />
  </div>
);
