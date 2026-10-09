import React, { useRef, useEffect, useState } from "react";

interface SpectrumProps {
  className?: string;
  bandsCount?: number;
  highlightBand?: string;
}

export const LiveSpectrumVisualizer: React.FC<SpectrumProps> = ({
  className = "w-full h-24",
  bandsCount = 28,
  highlightBand,
}) => {
  const [activePreset, setActivePreset] = useState<"sub6" | "mimo" | "wifi7">("sub6");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let tick = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initial bar heights and peak values
    const bars = Array.from({ length: bandsCount }).map((_, i) => ({
      height: 0.2 + Math.random() * 0.6,
      target: 0.3 + Math.random() * 0.7,
      peak: 0.8,
      peakHold: 10,
      freq: 600 + Math.round((i / bandsCount) * 5400),
    }));

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      tick++;

      const barWidth = Math.max(3, (w - (bandsCount - 1) * 3) / bandsCount);
      const gap = 3;

      bars.forEach((bar, i) => {
        // Randomly adjust target heights to simulate dynamic carrier traffic
        if (tick % 8 === 0 || Math.random() < 0.08) {
          const centerBias = 1 - Math.abs(i - bandsCount * 0.45) / (bandsCount * 0.5);
          bar.target = Math.max(0.12, Math.min(0.96, Math.random() * 0.75 + centerBias * 0.25));
        }

        // Smooth easing toward target
        bar.height += (bar.target - bar.height) * 0.18;

        // Peak tracking
        if (bar.height > bar.peak) {
          bar.peak = bar.height;
          bar.peakHold = 15;
        } else if (bar.peakHold > 0) {
          bar.peakHold--;
        } else {
          bar.peak = Math.max(bar.height, bar.peak - 0.02);
        }

        const bh = bar.height * (h - 10);
        const x = i * (barWidth + gap);
        const y = h - bh;

        // Gradient bar
        const grad = ctx.createLinearGradient(0, h, 0, y);
        grad.addColorStop(0, "rgba(31,79,216, 0.4)");
        grad.addColorStop(0.6, "rgba(76,141,246, 0.8)");
        grad.addColorStop(1, "rgba(76,141,246, 0.95)");

        ctx.fillStyle = grad;
        ctx.fillRect(x, y, barWidth, bh);

        // Peak indicator dot
        const peakY = h - bar.peak * (h - 10) - 2;
        ctx.fillStyle = "#4C8DF6";
        ctx.fillRect(x, Math.max(0, peakY), barWidth, 2);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [bandsCount, activePreset]);

  return (
    <div className={`flex flex-col bg-[#0B1F3A]/90 rounded-2xl p-4 border border-[#4C8DF6]/30 shadow-inner ${className}`}>
      <div className="flex items-center justify-between pb-2 mb-1 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4C8DF6] animate-ping" />
          <span className="text-[#4C8DF6] font-bold">LIVE RF SPECTRUM</span>
          <span className="text-[#C9D6EE]/60 text-[10px]">600 MHz – 6.0 GHz</span>
        </div>
        <div className="flex items-center gap-1.5">
          {(["sub6", "mimo", "wifi7"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActivePreset(mode)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all cursor-pointer ${
                activePreset === mode
                  ? "bg-[#4C8DF6] text-white shadow-sm"
                  : "bg-white/5 text-[#C9D6EE]/70 hover:bg-white/10"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
      <canvas ref={canvasRef} className="w-full h-20" />
      <div className="flex justify-between items-center pt-1.5 text-[9px] font-mono text-[#C9D6EE]/60">
        <span>600 MHz (B71)</span>
        <span>2.4 GHz ISM</span>
        <span>3.5 GHz (C-Band)</span>
        <span>5.8 GHz</span>
        <span>6.0 GHz (Wi-Fi 7)</span>
      </div>
    </div>
  );
};
