
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  onView: () => void;
<<<<<<< HEAD
=======
  /** false = demo card: no hover effects, button does nothing */
  interactive?: boolean;
  /** show the "View Products" button (default true) */
  showButton?: boolean;
>>>>>>> ec859e7 (Update website)
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  subtitle,
  image,
  badge,
  onView,
<<<<<<< HEAD
}) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="bg-white rounded-3xl border border-[#E3D4BA] p-5 flex flex-col justify-between hover:border-[#4C8DF6] hover:shadow-[0_24px_50px_-20px_rgba(31,79,216,0.25)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6] opacity-0 group-hover:opacity-100 transition-opacity" />
      {badge && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-[#0B1F3A] to-[#0B1F3A] text-[#C9D6EE] text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest z-10 shadow-sm border border-[#4C8DF6]/20">
=======
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
<<<<<<< HEAD
        <span className="absolute top-3 right-3 bg-[#0B1F3A] text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest z-10 border border-[#FF6A00]">
>>>>>>> ec859e7 (Update website)
=======
        <span className="absolute right-3 top-3 z-10 rounded-full border border-[#FF6A00] bg-[#0B1F3A] px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white">
>>>>>>> 93189c4 (Update website)
          {badge}
        </span>
      )}

      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="h-40 bg-gradient-to-br from-[#FFFFFF] to-[#E8F0FE] rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-[#E3D4BA] relative group-hover:border-[#4C8DF6] transition-colors">
=======
        <div className="sm-product-image-frame h-40 bg-white rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-[#FF6A00]/60 relative shadow-none">
>>>>>>> ec859e7 (Update website)
=======
        {/* Static product image — no zoom or animation */}
        <div className="sm-product-image-frame relative mb-4 flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-[#FF6A00]/60 bg-white p-4 shadow-none">
>>>>>>> 93189c4 (Update website)
          {failed ? (
            <span className="text-center text-2xl font-black tracking-tight text-[#5B6B82]">
              {name}
            </span>
          ) : (
            <img
              src={image}
              alt={name}
<<<<<<< HEAD
              className="max-h-32 max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
=======
              className="max-h-32 max-w-full object-contain"
<<<<<<< HEAD
              style={{ transform: "none", scale: 1, transition: "none", animation: "none", filter: "none" }}
>>>>>>> ec859e7 (Update website)
=======
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
>>>>>>> 93189c4 (Update website)
              onError={() => setFailed(true)}
            />
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        <h3 className="font-black text-[#0b1f3a] text-lg tracking-tight group-hover:text-[#1F4FD8] transition-colors">
=======
        <h3 className="font-black text-[#0b1f3a] text-lg tracking-tight">
>>>>>>> ec859e7 (Update website)
=======

        <h3 className="text-lg font-black tracking-tight text-[#0B1F3A]">
>>>>>>> 93189c4 (Update website)
          {name}
        </h3>

        <p className="mt-2 line-clamp-3 text-xs font-normal leading-relaxed text-[#5B6B82]">
          {subtitle}
        </p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="pt-4 mt-5 border-t border-[#E3D4BA]">
        <button
          onClick={onView}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#0B1F3A] group-hover:from-[#1F4FD8] group-hover:to-[#4C8DF6] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer active:scale-95"
        >
          <span>View Products</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
=======
=======

>>>>>>> 93189c4 (Update website)
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
<<<<<<< HEAD
>>>>>>> ec859e7 (Update website)
=======
>>>>>>> 93189c4 (Update website)
