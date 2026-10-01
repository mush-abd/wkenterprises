import React from "react";

interface LogoProps {
  className?: string;
  withTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", withTagline = false }) => {
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Brand Wordmark matching confirmed packaging: Fortis ● NUTRITION */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-2xl font-serif font-medium tracking-tight text-brand-charcoal">
            Fortis
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-brand-botanical inline-block mt-0.5" />
        </div>
        <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-brand-botanical leading-tight mt-0.5">
          NUTRITION
        </span>
        {withTagline && (
          <span className="text-[9px] tracking-wider uppercase text-brand-charcoal-muted font-medium mt-0.5">
            A brand of WK Enterprises
          </span>
        )}
      </div>
    </div>
  );
};
