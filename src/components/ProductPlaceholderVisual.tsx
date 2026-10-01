import React from "react";
import Image from "next/image";

interface ProductPlaceholderVisualProps {
  imageUrl?: string;
  altText: string;
  productName: string;
  isPlaceholder?: boolean;
}

export const ProductPlaceholderVisual: React.FC<ProductPlaceholderVisualProps> = ({
  imageUrl,
  altText,
  productName,
  isPlaceholder = true,
}) => {
  if (imageUrl) {
    return (
      <div className="relative w-full aspect-[4/5] bg-stone-50 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-brand-border/60">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    );
  }

  // Tasteful, neutral development placeholder respecting bottle proportions
  return (
    <div className="relative w-full aspect-[4/5] rounded-xl bg-gradient-to-b from-stone-100/90 via-stone-50 to-stone-100/70 border border-brand-border/70 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group">
      {/* Subtle background coordinate grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#151816 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Minimalist neutral packaging silhouette */}
      <div className="relative z-10 w-28 h-44 border-2 border-stone-300/80 rounded-2xl flex flex-col items-center justify-between p-3 bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
        {/* Cap */}
        <div className="w-14 h-4 bg-stone-200/90 rounded-sm border border-stone-300/70 -mt-5" />

        {/* Minimal label outline */}
        <div className="w-full flex-1 my-2 border border-dashed border-stone-300 rounded p-2 flex flex-col justify-center items-center gap-1.5 bg-stone-50/50">
          <div className="w-8 h-1 bg-brand-botanical/40 rounded-full" />
          <div className="w-14 h-1 bg-stone-300 rounded-full" />
          <div className="w-10 h-1 bg-stone-200 rounded-full" />
          <div className="w-6 h-1 bg-stone-200 rounded-full" />
        </div>

        {/* Base */}
        <div className="w-16 h-1 bg-stone-200 rounded-full" />
      </div>

      {/* Development indicator */}
      <div className="relative z-10 mt-5 space-y-1">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-brand-warm-sand text-brand-charcoal-light border border-stone-300/70">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-botanical/60 animate-pulse" />
          Asset Pending Confirmation
        </span>
        <p className="text-xs text-brand-charcoal-muted max-w-[200px] leading-tight mx-auto">
          Packaging asset container
        </p>
      </div>

      {/* Aspect Ratio Preservation Note */}
      <div className="absolute bottom-2 right-3 text-[10px] text-stone-400 font-mono">
        4:5 contain-fit
      </div>
    </div>
  );
};
