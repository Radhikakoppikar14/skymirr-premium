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
    <>
      <style>{`
        /* Product photography must remain completely static on hover. */
        .sm-product-image-frame img,
        .sm-product-image-frame:hover img,
        .sm-product-card:hover img {
          transform: none !important;
          scale: 1 !important;
          transition: none !important;
          animation: none !important;
          filter: none !important;
        }
        .sm-product-card,
        .sm-product-image-frame {
          box-shadow: none !important;
        }
      `}</style>
      <div
      className="sm-product-card no-lift bg-white rounded-3xl border border-[#FF6A00]/55 p-5 flex flex-col justify-between relative overflow-hidden shadow-none"
    >
      {badge && (
        <span className="absolute top-3 right-3 bg-[#0B1F3A] text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest z-10 border border-[#FF6A00]">
>>>>>>> ec859e7 (Update website)
          {badge}
        </span>
      )}
      <div>
<<<<<<< HEAD
        <div className="h-40 bg-gradient-to-br from-[#FFFFFF] to-[#E8F0FE] rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-[#E3D4BA] relative group-hover:border-[#4C8DF6] transition-colors">
=======
        <div className="sm-product-image-frame h-40 bg-white rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-[#FF6A00]/60 relative shadow-none">
>>>>>>> ec859e7 (Update website)
          {failed ? (
            <span className="text-2xl font-black tracking-tight text-[#5B6B82]">
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
              style={{ transform: "none", scale: 1, transition: "none", animation: "none", filter: "none" }}
>>>>>>> ec859e7 (Update website)
              onError={() => setFailed(true)}
            />
          )}
        </div>
<<<<<<< HEAD
        <h3 className="font-black text-[#0b1f3a] text-lg tracking-tight group-hover:text-[#1F4FD8] transition-colors">
=======
        <h3 className="font-black text-[#0b1f3a] text-lg tracking-tight">
>>>>>>> ec859e7 (Update website)
          {name}
        </h3>
        <p className="text-xs text-[#5B6B82] mt-2 line-clamp-3 font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
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
      {showButton && (
        <div className="pt-4 mt-5 border-t border-[#FF6A00]/30">
          <button
            onClick={interactive ? onView : undefined}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-[#1F4FD8] text-white text-xs font-bold uppercase tracking-wider border border-[#1F4FD8] cursor-pointer"
          >
            <span>View Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
      </div>
    </>
  );
};
>>>>>>> ec859e7 (Update website)
