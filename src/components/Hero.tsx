import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteContent";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const { brand } = siteConfig;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-border/40">
      {/* Subtle organic ambient gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-botanical-subtle/70 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Statement & Introduction */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-botanical-subtle border border-brand-botanical-border text-brand-botanical text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-botanical" />
              {brand.eyebrow}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-brand-charcoal tracking-tight leading-[1.12]">
              {brand.headline}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-brand-charcoal-muted leading-relaxed max-w-xl font-sans">
              {brand.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-brand-botanical hover:bg-brand-botanical-hover shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-botanical group"
              >
                <span>{brand.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#approach"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-brand-charcoal bg-brand-warm-cream hover:bg-brand-warm-sand border border-brand-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-botanical"
              >
                {brand.secondaryCtaText}
              </a>
            </div>

            {/* Restrained line beneath the introduction */}
            <div className="pt-4 border-t border-brand-border/60 w-full">
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-medium text-brand-charcoal-muted tracking-wide">
                <span>Bioavailability</span>
                <span className="mx-2.5 text-brand-botanical" aria-hidden="true">
                  •
                </span>
                <span>Clean Labels</span>
                <span className="mx-2.5 text-brand-botanical" aria-hidden="true">
                  •
                </span>
                <span>Transparent Sources</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Composition Showcase */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg bg-white rounded-2xl p-3 sm:p-4 border border-brand-border shadow-md group">
              <div className="relative w-full aspect-square sm:aspect-[1/1] rounded-xl overflow-hidden bg-stone-100 flex items-center justify-center border border-stone-200/80">
                <Image
                  src="/products/hero-composition.jpg"
                  alt="Fortis Nutrition Whole Body Health supplement composition showcase"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              {/* Minimal caption */}
              <div className="mt-3.5 flex items-center justify-between w-full text-xs text-brand-charcoal-muted px-2">
                <span className="inline-flex items-center gap-1.5 font-medium text-brand-charcoal">
                  <Sparkles className="w-3.5 h-3.5 text-brand-botanical" />
                  Fortis Nutrition Product Composition
                </span>
                <span className="font-mono text-[11px] text-stone-500">WK Enterprises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
