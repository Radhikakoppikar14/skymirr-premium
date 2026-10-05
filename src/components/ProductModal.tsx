import React, { useState } from "react";
import {
  X,
  Download,
  Check,
  ShieldCheck,
  Printer,
  ArrowRight,
  Cpu,
  Sparkles,
  Layers,
  FileText,
} from "lucide-react";
import { ProductSpec } from "../data/skymirrData";

interface ProductModalProps {
  product: ProductSpec | null;
  onClose: () => void;
  onRequestSample: (product: ProductSpec) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestSample,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!product) return null;

  const handleDownload = () => {
    if (product.datasheetUrl) {
      window.open(product.datasheetUrl, "_blank");
    }
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="datasheet-modal bg-white/95 backdrop-blur-3xl border border-slate-200/90 rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-slide-up">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 sm:p-8 flex items-center justify-between z-10 shadow-2xs">
          <div className="space-y-1">
            <span className="datasheet-accent inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[11px] font-mono text-blue-700 uppercase tracking-widest font-bold border border-blue-200">
              <Sparkles className="w-3 h-3 text-blue-600" />
              Technical Datasheet · {product.category.toUpperCase()}
            </span>
            <h3 className="text-2xl font-black text-slate-950 font-sans tracking-tight">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl text-slate-400 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="datasheet-content p-6 sm:p-8 space-y-8">
          
          {/* Summary Banner Bento */}
          <div className="datasheet-summary p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                Frequency Coverage
              </div>
              <div className="datasheet-accent text-base sm:text-lg font-black font-mono text-blue-700">
                {product.frequencyRange}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all cursor-pointer shadow-2xs hover:border-blue-400"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Datasheet Opened</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-blue-600" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => {
                  onClose();
                  onRequestSample(product);
                }}
                className="datasheet-request-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                <span>Request Sample</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-2 font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Product Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {/* Key Electrical & Mechanical Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-2.5 font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              Electrical &amp; Mechanical Parameters
            </h4>
            <div className="rounded-2xl border border-slate-200/90 overflow-hidden divide-y divide-slate-100 bg-white shadow-md">
              {product.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-4 text-xs sm:text-sm hover:bg-blue-50/40 transition-colors"
                >
                  <span className="text-slate-600 font-mono font-medium">
                    {item.label}
                  </span>
                  <span className="text-slate-950 font-mono text-right font-bold">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center p-4 text-xs sm:text-sm bg-slate-50/80 font-semibold">
                <span className="text-slate-700 font-mono">
                  Physical Dimensions &amp; Weight
                </span>
                <span className="text-slate-950 font-mono text-right font-bold">
                  {product.dimensions}
                </span>
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-2.5 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {product.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-700 shadow-2xs hover:border-blue-300 transition-colors"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-normal leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications and Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-2.5 font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Compliance &amp; Certifications
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {product.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-800 shadow-2xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 p-5 px-6 sm:px-8 flex items-center justify-between text-xs text-slate-500 z-10">
          <span className="font-mono text-[11px] font-semibold text-slate-600">
            SkyMirr Technologies · Melbourne, FL 32901
          </span>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-700 transition-colors cursor-pointer font-bold uppercase tracking-wider font-mono text-[11px]"
          >
            <Printer className="w-4 h-4" />
            <span>Print View</span>
          </button>
        </div>
      </div>
    </div>
  );
};