import React, { useRef, useEffect } from "react";

interface LiveWaveCanvasProps {
  frequency?: number;
  amplitude?: number;
  speed?: number;
  colorScheme?: "cyan" | "deepCyan" | "electric";
  interactive?: boolean;
  className?: string;
  showParticles?: boolean;
}

export const LiveWaveCanvas: React.FC<LiveWaveCanvasProps> = ({
  frequency = 0.012,
  amplitude = 28,
  speed = 0.025,
  colorScheme = "cyan",
  interactive = true,
  className = "w-full h-full",
  showParticles = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    // Color paletting for electromagnetic waves
    const colors =
      colorScheme === "cyan"
        ? {
            wave1: "rgba(76,141,246, 0.45)",
            wave2: "rgba(76,141,246, 0.35)",
            wave3: "rgba(31,79,216, 0.25)",
            glow: "#4C8DF6",
            particles: "rgba(76,141,246, 0.6)",
          }
        : colorScheme === "electric"
        ? {
            wave1: "rgba(76,141,246, 0.5)",
            wave2: "rgba(76,141,246, 0.3)",
            wave3: "rgba(76,141,246, 0.25)",
            glow: "#4C8DF6",
            particles: "rgba(76,141,246, 0.6)",
          }
        : {
            wave1: "rgba(31,79,216, 0.45)",
            wave2: "rgba(76,141,246, 0.35)",
            wave3: "rgba(11,31,58, 0.3)",
            glow: "#1F4FD8",
            particles: "rgba(76,141,246, 0.6)",
          };

    // Electromagnetic wave packet particles
    const particleCount = showParticles ? 36 : 0;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random(),
      speed: 0.0006 + Math.random() * 0.0012,
      size: 1.5 + Math.random() * 2.5,
      alpha: 0.2 + Math.random() * 0.6,
      waveOffset: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      step += speed;

      const centerY = height / 2;
      const mouse = mouseRef.current;

      // Draw 3 layered waves (Carrier wave, modulation wave, harmonic wave)
      const waveConfigs = [
        {
          freq: frequency * 0.8,
          amp: amplitude * 0.9,
          phase: step * 0.85,
          color: colors.wave1,
          lineWidth: 2.2,
        },
        {
          freq: frequency * 1.3,
          amp: amplitude * 0.7,
          phase: -step * 1.1 + Math.PI / 4,
          color: colors.wave2,
          lineWidth: 1.8,
        },
        {
          freq: frequency * 0.5,
          amp: amplitude * 1.2,
          phase: step * 0.6 + Math.PI / 2,
          color: colors.wave3,
          lineWidth: 1.5,
        },
      ];

      waveConfigs.forEach((cfg) => {
        ctx.beginPath();
        ctx.lineWidth = cfg.lineWidth;
        ctx.strokeStyle = cfg.color;

        for (let x = 0; x <= width; x += 4) {
          // Base electromagnetic sinusoidal calculation
          let y =
            centerY +
            Math.sin(x * cfg.freq + cfg.phase) * cfg.amp +
            Math.cos(x * (cfg.freq * 0.5) + step * 0.4) * (cfg.amp * 0.3);

          // Reactive mouse ripple effect
          if (mouse.active) {
            const dx = x - mouse.x;
            const dist = Math.abs(dx);
            if (dist < 180) {
              const influence = Math.cos((dist / 180) * (Math.PI / 2));
              y += Math.sin(dist * 0.06 - step * 2) * (cfg.amp * 0.7) * influence;
            }
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Render traveling electromagnetic pulse packets (photons / RF energy nodes)
      if (showParticles) {
        particles.forEach((p) => {
          p.x += p.speed;
          if (p.x > 1) p.x = 0;

          const px = p.x * width;
          const py =
            centerY +
            Math.sin(px * frequency * 0.8 + step * 0.85 + p.waveOffset) *
              (amplitude * 0.9);

          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = colors.particles;
          ctx.shadowColor = colors.glow;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [frequency, amplitude, speed, colorScheme, interactive, showParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto ${className}`}
      style={{ display: "block" }}
    />
  );
};
