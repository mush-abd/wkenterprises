import React from "react";
import { siteConfig } from "@/config/siteContent";
import {
  Building2,
  Mail,
  Phone,
  Clock,
  MapPin,
  FileText,
  Shield,
  ArrowUpRight,
} from "lucide-react";

export const CompanyAbout: React.FC = () => {
  const { company } = siteConfig;

  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 lg:py-28 bg-brand-surface/30 border-b border-brand-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-botanical mb-3 font-sans">
            Corporate Governance
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal tracking-tight leading-[1.18] mb-4">
            {company.parentRelationship}
          </h2>
          <p className="text-lg text-brand-charcoal-muted leading-relaxed font-sans">
            {company.introduction}
          </p>
        </div>

        {/* Editorial Information Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Stewardship & Standards Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-brand-border shadow-xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-botanical-subtle border border-brand-botanical-border flex items-center justify-center text-brand-botanical">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-brand-charcoal">
                    {company.legalName}
                  </h3>
                  <p className="text-xs text-brand-charcoal-muted uppercase tracking-wider">
                    Brand Steward & Operations
                  </p>
                </div>
              </div>

              <p className="text-sm text-brand-charcoal-light leading-relaxed">
                Fortis Nutrition operates under the corporate stewardship of {company.legalName}.
                Our operational mandate is centered on transparency, strict compliance with national
                nutritional regulations, and ethical supply chains.
              </p>

              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-charcoal-muted">
                <span>Consumer Brand: Fortis Nutrition</span>
                <span className="font-mono">Est. 2024</span>
              </div>
            </div>

            {/* Regulatory & License Information (Rendered only if supplied) */}
            {company.licenseDetails && (
              <div className="bg-brand-warm-cream/70 rounded-2xl p-6 border border-brand-border/70 flex items-start gap-4">
                <FileText className="w-5 h-5 text-brand-botanical mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Compliance & Licensing
                  </h4>
                  <p className="text-xs text-brand-charcoal-muted leading-relaxed">
                    {company.licenseDetails}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Verified Corporate & Contact Directory */}
          <div id="contact" className="scroll-mt-24 lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-brand-border shadow-xs space-y-6">
              <div className="border-b border-brand-border/60 pb-4">
                <h3 className="text-xl font-serif font-medium text-brand-charcoal">
                  Direct Company Contact & Registered Credentials
                </h3>
                <p className="text-xs text-brand-charcoal-muted mt-1">
                  Official inquiries, regulatory correspondence, and trade relations
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Legal Entity */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal-muted">
                    <Building2 className="w-4 h-4 text-brand-botanical" />
                    <span>Legal Entity Name</span>
                  </div>
                  <p className="text-sm font-medium text-brand-charcoal pl-6">
                    {company.legalName}
                  </p>
                </div>

                {/* GSTIN */}
                {company.gstin && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal-muted">
                      <FileText className="w-4 h-4 text-brand-botanical" />
                      <span>GSTIN / Tax ID</span>
                    </div>
                    <p className="text-sm font-mono font-medium text-brand-charcoal pl-6 tracking-wide">
                      {company.gstin}
                    </p>
                  </div>
                )}

                {/* Email Address with Clickable Link */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal-muted">
                    <Mail className="w-4 h-4 text-brand-botanical" />
                    <span>Official Email</span>
                  </div>
                  <div className="pl-6">
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm font-medium text-brand-botanical hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-botanical rounded"
                    >
                      {company.email}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone Number with Clickable Link */}
                {company.phone && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal-muted">
                      <Phone className="w-4 h-4 text-brand-botanical" />
                      <span>Direct Telephone</span>
                    </div>
                    <div className="pl-6">
                      <a
                        href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-sm font-medium text-brand-charcoal hover:text-brand-botanical transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-botanical rounded"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Business Hours */}
                {company.businessHours && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal-muted">
                      <Clock className="w-4 h-4 text-brand-botanical" />
                      <span>Operating Hours</span>
                    </div>
                    <p className="text-sm text-brand-charcoal-light pl-6">
                      {company.businessHours}
                    </p>
                  </div>
                )}

                {/* Business Address */}
                <div className="space-y-1.5 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-charcoal-muted">
                    <MapPin className="w-4 h-4 text-brand-botanical" />
                    <span>{company.addressLabel}</span>
                  </div>
                  <p className="text-sm text-brand-charcoal-light pl-6 leading-relaxed">
                    {company.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
