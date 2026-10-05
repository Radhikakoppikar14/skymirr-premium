import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  onView: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  subtitle,
  image,
  badge,
  onView,
}) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="bg-white rounded-3xl border border-[#DFEAF0] p-5 flex flex-col justify-between hover:border-[#18A6BE] hover:shadow-[0_24px_50px_-20px_rgba(8,127,152,0.25)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#087F98] to-[#18A6BE] opacity-0 group-hover:opacity-100 transition-opacity" />
      {badge && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-[#073746] to-[#075568] text-[#D7EEF3] text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest z-10 shadow-sm border border-[#18A6BE]/20">
          {badge}
        </span>
      )}
      <div>
        <div className="h-40 bg-gradient-to-br from-[#F8FCFD] to-[#EAF6F9] rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-[#DFEAF0] relative group-hover:border-[#91D6E3] transition-colors">
          {failed ? (
            <span className="text-2xl font-black tracking-tight text-[#8A9BA4]">
              {name}
            </span>
          ) : (
            <img
              src={image}
              alt={name}
              className="max-h-32 max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
              onError={() => setFailed(true)}
            />
          )}
        </div>
        <h3 className="font-black text-[#152C39] text-lg tracking-tight group-hover:text-[#087F98] transition-colors">
          {name}
        </h3>
        <p className="text-xs text-[#627784] mt-2 line-clamp-3 font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
      <div className="pt-4 mt-5 border-t border-[#DFEAF0]">
        <button
          onClick={onView}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#073746] to-[#075568] group-hover:from-[#087F98] group-hover:to-[#18A6BE] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer active:scale-95"
        >
          <span>View Products</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
