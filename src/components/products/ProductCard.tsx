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
    <div className="bg-white rounded-3xl border border-[#E3D4BA] p-5 flex flex-col justify-between hover:border-[#4C8DF6] hover:shadow-[0_24px_50px_-20px_rgba(31,79,216,0.25)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F4FD8] to-[#4C8DF6] opacity-0 group-hover:opacity-100 transition-opacity" />
      {badge && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-[#0B1F3A] to-[#0B1F3A] text-[#C9D6EE] text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest z-10 shadow-sm border border-[#4C8DF6]/20">
          {badge}
        </span>
      )}
      <div>
        <div className="h-40 bg-gradient-to-br from-[#FFFFFF] to-[#E8F0FE] rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-[#E3D4BA] relative group-hover:border-[#4C8DF6] transition-colors">
          {failed ? (
            <span className="text-2xl font-black tracking-tight text-[#5B6B82]">
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
        <h3 className="font-black text-[#0b1f3a] text-lg tracking-tight group-hover:text-[#1F4FD8] transition-colors">
          {name}
        </h3>
        <p className="text-xs text-[#5B6B82] mt-2 line-clamp-3 font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
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
