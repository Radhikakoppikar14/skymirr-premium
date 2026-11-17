
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  onView: () => void;
  /** false = demo card: no hover effects, button does nothing */
  interactive?: boolean;
  /** show the "View Products" button (default true) */
  showButton?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  subtitle,
  image,
  badge,
  onView,
  interactive = true,
  showButton = true,
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="sm-product-card no-lift relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#FF6A00]/55 bg-white p-5 shadow-none">
      <style>{`
        .sm-product-card,
        .sm-product-card:hover,
        .sm-product-image-frame,
        .sm-product-image-frame:hover {
          box-shadow: none !important;
          transform: none !important;
          animation: none !important;
        }

        .sm-product-image-frame img,
        .sm-product-image-frame:hover img,
        .sm-product-card:hover img {
          transform: none !important;
          scale: 1 !important;
          transition: none !important;
          animation: none !important;
          filter: none !important;
          will-change: auto !important;
        }

        .sm-product-image-frame {
          overflow: hidden;
        }
      `}</style>

      {badge && (
        <span className="absolute right-3 top-3 z-10 rounded-full border border-[#FF6A00] bg-[#0B1F3A] px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white">
          {badge}
        </span>
      )}

      <div>
        {/* Static product image — no zoom or animation */}
        <div className="sm-product-image-frame relative mb-4 flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-[#FF6A00]/60 bg-white p-4 shadow-none">
          {failed ? (
            <span className="text-center text-2xl font-black tracking-tight text-[#5B6B82]">
              {name}
            </span>
          ) : (
            <img
              src={image}
              alt={name}
              className="max-h-32 max-w-full object-contain"
              loading="lazy"
              draggable={false}
              style={{
                transform: "none",
                scale: 1,
                transition: "none",
                animation: "none",
                filter: "none",
                willChange: "auto",
              }}
              onError={() => setFailed(true)}
            />
          )}
        </div>

        <h3 className="text-lg font-black tracking-tight text-[#0B1F3A]">
          {name}
        </h3>

        <p className="mt-2 line-clamp-3 text-xs font-normal leading-relaxed text-[#5B6B82]">
          {subtitle}
        </p>
      </div>

      {showButton && (
        <div className="mt-5 border-t border-[#FF6A00]/30 pt-4">
          <button
            type="button"
            onClick={interactive ? onView : undefined}
            disabled={!interactive}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#1F4FD8] bg-[#1F4FD8] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            <span>View Products</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
