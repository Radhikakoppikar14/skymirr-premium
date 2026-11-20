import React, { useRef, useEffect, useState } from "react";

interface Target {
  id: string;
  name: string;
  angle: number; // in radians
  distance: number; // normalized 0 to 1
  band: string;
  signalStrength: number; // -30 to -90 dBm
}

export const LiveRadarScope: React.FC<{
  className?: string;
  activeBand?: string;
  onSelectTarget?: (target: Target) => void;
}> = ({ className = "w-64 h-64", activeBand, onSelectTarget }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<Target | null>(null);

  const targets: Target[] = [
    { id: "att-5g", name: "AT&T 5G NR (n77)", angle: 0.65, distance: 0.72, band: "3.7 GHz", signalStrength: -58 },
    { id: "tmobile-sub6", name: "T-Mobile Sub-6 (n41)", angle: 2.1, distance: 0.58, band: "2.5 GHz", signalStrength: -62 },
    { id: "cband-mimo", name: "MIMO Array #1", angle: 3.8, distance: 0.85, band: "3.5 GHz", signalStrength: -49 },
    { id: "wifi7-triband", name: "Wi-Fi 7 Tri-Band", angle: 5.2, distance: 0.38, band: "6 GHz", signalStrength: -44 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    let animationFrameId: number;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(cx, cy) - 12;

      ctx.clearRect(0, 0, w, h);

      // Radar dark background circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(11,31,58, 0.95)";
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(76,141,246, 0.4)";
      ctx.stroke();

      // Concentric range rings
      const rings = [0.25, 0.5, 0.75, 1.0];
      rings.forEach((rRatio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * rRatio, 0, Math.PI * 2);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(76,141,246, 0.2)";
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "rgba(76,141,246, 0.25)";
      ctx.stroke();

      // Degree tick marks
      for (let deg = 0; deg < 360; deg += 30) {
        const rad = (deg * Math.PI) / 180;
        const x1 = cx + Math.cos(rad) * (radius - 5);
        const y1 = cy + Math.sin(rad) * (radius - 5);
        const x2 = cx + Math.cos(rad) * radius;
        const y2 = cy + Math.sin(rad) * radius;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = "rgba(76,141,246, 0.5)";
        ctx.stroke();
      }

      // Sweep gradient sector (radar beam)
      angle += 0.035;
      if (angle >= Math.PI * 2) angle = 0;

      const sweepGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      sweepGradient.addColorStop(0, "rgba(76,141,246, 0)");
      sweepGradient.addColorStop(1, "rgba(76,141,246, 0.22)");

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.45, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGradient;
      ctx.fill();

      // Leading sharp sweep beam
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(76,141,246, 0.9)";
      ctx.shadowColor = "#4C8DF6";
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.restore();

      // Target blips
      targets.forEach((tgt) => {
        const tx = cx + Math.cos(tgt.angle) * (radius * tgt.distance);
        const ty = cy + Math.sin(tgt.angle) * (radius * tgt.distance);

        // Calculate proximity of sweep to target for echo brightening
        const diff = (angle - tgt.angle + Math.PI * 2) % (Math.PI * 2);
        const isIlluminated = diff < 0.6;
        const alpha = isIlluminated ? 0.95 : 0.45;

        ctx.beginPath();
        ctx.arc(tx, ty, isIlluminated ? 4.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(143,211,236, ${alpha})`;
        ctx.shadowColor = "#4C8DF6";
        ctx.shadowBlur = isIlluminated ? 10 : 3;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (isIlluminated) {
          ctx.beginPath();
          ctx.arc(tx, ty, 8, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(76,141,246, 0.6)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <div className="relative rounded-full p-1 bg-gradient-to-b from-[#4C8DF6]/40 via-transparent to-[#1F4FD8]/30 shadow-[0_0_25px_rgba(76,141,246,0.25)] border border-[#4C8DF6]/30">
        <canvas
          ref={canvasRef}
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-full cursor-pointer"
          onClick={() => {
            const next = targets[(targets.indexOf(selectedTarget || targets[0]) + 1) % targets.length];
            setSelectedTarget(next);
            onSelectTarget?.(next);
          }}
        />
        {/* Center RF Core Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#4C8DF6] shadow-[0_0_12px_#4C8DF6] animate-pulse pointer-events-none" />
      </div>

      <div className="mt-2.5 flex items-center justify-between w-full px-2 text-[10px] font-mono text-[#C9D6EE]/90">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4C8DF6] animate-ping" />
          <span>RADAR SWEEP: 360°</span>
        </span>
        <span className="text-[#4C8DF6] font-bold">SUB-6 / C-BAND</span>
      </div>
    </div>
  );
};
