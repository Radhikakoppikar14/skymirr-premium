import React from "react";
import { WireCube, FoldingPanel, FloatChip, ParallaxLayer } from "./FloatingObjects";

/**
 * Floating 3D objects that straddle the slider's corners.
 * Purely decorative: pointer-events are off, hidden on small screens.
 */
export const HeroFloaters: React.FC = () => (
  <div aria-hidden="true" className="hidden lg:block absolute inset-0 z-30 pointer-events-none">
    <ParallaxLayer strength={34} className="absolute inset-0">
      <div className="fx-bob absolute -top-7 -right-6">
        <WireCube size={64} />
      </div>
      <div className="fx-bob-slow absolute -bottom-9 -left-8">
        <FoldingPanel plate={40} height={92} />
      </div>
    </ParallaxLayer>
    <ParallaxLayer strength={-18} className="absolute inset-0">
      <FloatChip shape="hex" size={30} className="absolute top-[14%] -left-9" />
      <FloatChip shape="ring" size={18} delay={1.2} className="absolute top-[58%] -right-8" />
      <FloatChip shape="square" size={16} delay={2.4} className="absolute bottom-[10%] -right-5" />
      <FloatChip shape="hex" size={20} delay={3.1} className="absolute -top-6 left-[38%]" />
    </ParallaxLayer>
  </div>
);
