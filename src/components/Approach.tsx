import React from "react";
import { siteConfig } from "@/config/siteContent";
import { Sparkles, Layers, Compass, CheckCircle2 } from "lucide-react";

export const Approach: React.FC = () => {
  const { approach } = siteConfig;

  // Understated icons mapped to principles
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "bioavailability":
        return <Layers className="w-5 h-5 text-brand-botanical" strokeWidth={1.75} />;
      case "clean-label":
        return <Sparkles className="w-5 h-5 text-brand-botanical" strokeWidth={1.75} />;
      case "transparent-sources":
        return <Compass className="w-5 h-5 text-brand-botanical" strokeWidth={1.75} />;
      default:
        return <Layers className="w-5 h-5 text-brand-botanical" strokeWidth={1.75} />;
    }
  };

  return (
    <section
      id="approach"
      className="scroll-mt-20 py-20 lg:py-28 bg-brand-surface/40 border-b border-brand-border/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-botanical mb-3 font-sans">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal tracking-tight leading-[1.18] mb-6">
            {approach.sectionHeading}
          </h2>
          <p className="text-lg sm:text-xl text-brand-charcoal-muted leading-relaxed font-sans">
            {approach.sectionIntro}
          </p>
        </div>

        {/* Varied Editorial Composition for the Three Principles */}
        <div className="space-y-12 lg:space-y-16">
          {approach.principles.map((principle, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={principle.id}
                className="relative bg-white/90 rounded-2xl p-8 sm:p-12 lg:p-14 border border-brand-border shadow-xs hover:border-brand-botanical-border transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Column 1: Principle Identifier & Tagline */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-botanical-subtle border border-brand-botanical-border/70 text-brand-botanical text-sm font-semibold">
                          {principle.number}
                        </span>
                        <div className="p-2 rounded-lg bg-stone-50 border border-stone-200">
                          {renderIcon(principle.icon)}
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-medium text-brand-charcoal mb-3">
                        {principle.title}
                      </h3>

                      <blockquote className="text-xl sm:text-2xl italic font-serif text-brand-botanical font-normal border-l-2 border-brand-botanical pl-4 my-4">
                        “{principle.tagline}”
                      </blockquote>
                    </div>

                    <div className="hidden lg:block pt-6">
                      <span className="text-xs uppercase tracking-wider text-brand-charcoal-muted/80 font-mono">
                        Fortis Principle • {principle.id.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Detailed Explanation and Core Commitments */}
                  <div
                    className={`lg:col-span-7 flex flex-col space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <p className="text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-sans">
                      {principle.description}
                    </p>

                    <div className="bg-brand-warm-cream/50 rounded-xl p-5 sm:p-6 border border-brand-border/60">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal-muted mb-3 font-sans">
                        Guiding Considerations
                      </h4>
                      <ul className="space-y-2.5">
                        {principle.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-3 text-sm text-brand-charcoal-light leading-snug"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-botanical mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
