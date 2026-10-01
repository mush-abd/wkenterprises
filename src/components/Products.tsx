import React from "react";
import { siteConfig } from "@/config/siteContent";
import { ProductPlaceholderVisual } from "@/components/ProductPlaceholderVisual";
import { ExternalLink, Package, ShieldCheck } from "lucide-react";

export const Products: React.FC = () => {
  const { productsSection } = siteConfig;

  return (
    <section
      id="products"
      className="scroll-mt-20 py-20 lg:py-28 bg-brand-bg border-b border-brand-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-botanical mb-3 font-sans">
            Product Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal tracking-tight leading-[1.18] mb-4">
            {productsSection.heading}
          </h2>
          <p className="text-lg text-brand-charcoal-muted leading-relaxed font-sans">
            {productsSection.subheading}
          </p>
        </div>

        {/* Responsive Product Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsSection.items.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl border border-brand-border/80 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-botanical-border transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Visual Container (Strict contain fitting, 4:5 ratio) */}
              <div className="p-4 bg-stone-50/70 border-b border-brand-border/50">
                <ProductPlaceholderVisual
                  imageUrl={product.imageUrl}
                  altText={product.altText}
                  productName={product.name}
                  isPlaceholder={product.isPlaceholder}
                />
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Category & Classification Badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-brand-botanical-subtle text-brand-botanical border border-brand-botanical-border/50">
                      {product.formulationCategory}
                    </span>

                    {product.classification && (
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium text-stone-600 bg-stone-100 uppercase tracking-wider">
                        {product.classification}
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-xl font-serif font-medium text-brand-charcoal leading-snug">
                    {product.name}
                  </h3>

                  {/* Pack Size */}
                  {product.packSize && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-stone-600">
                      <Package className="w-3.5 h-3.5 text-brand-botanical" />
                      <span>{product.packSize}</span>
                    </div>
                  )}

                  {/* Verified Attribute Highlights from Packaging */}
                  {product.badges && product.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {product.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-brand-surface text-brand-charcoal-light border border-brand-border/70"
                        >
                          <span className="w-1 h-1 rounded-full bg-brand-botanical" />
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Verified Description */}
                  <p className="text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed font-sans pt-1">
                    {product.description}
                  </p>
                </div>

                {/* Optional Purchase Link: Render ONLY if amazonUrl is present */}
                {product.amazonUrl ? (
                  <div className="pt-3 border-t border-brand-border/50">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#FF9900] hover:bg-[#e88b00] text-gray-900 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
                    >
                      <span>Shop on Amazon</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between text-[11px] text-brand-charcoal-muted/70">
                    <span className="inline-flex items-center gap-1 text-emerald-800 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-botanical" />
                      Authentic Formulation
                    </span>
                    <span className="font-mono text-[10px]">WK Enterprises</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
