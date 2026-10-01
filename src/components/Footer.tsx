import React from "react";
import { siteConfig } from "@/config/siteContent";
import { Logo } from "@/components/Logo";

export const Footer: React.FC = () => {
  const { company, navigation } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-stone-300 pt-16 pb-12 border-t border-brand-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-700/60">
          {/* Column 1: Brand & Parent Company Statement */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-stone-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-emerald-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v18" />
                  <path d="M12 8c2.5-2.5 5.5-2 7 0-1.5 2.5-4.5 2.5-7 0Z" />
                  <path d="M12 14c-2.5-2.5-5.5-2-7 0 1.5 2.5 4.5 2.5 7 0Z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                FORTIS <span className="font-light text-emerald-400">NUTRITION</span>
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              A modern supplement initiative focused on bioavailability, clean labels, and
              transparent sourcing.
            </p>

            <div className="inline-block px-3 py-1 rounded bg-stone-800/80 border border-stone-700 text-xs text-stone-300">
              A brand of <span className="text-white font-medium">{company.legalName}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Contact Links */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              Corporate Office
            </h4>
            <div className="space-y-2 text-sm text-stone-400">
              <p className="text-stone-300 font-medium">{company.legalName}</p>
              <p className="leading-snug">{company.address}</p>
              <p className="pt-2">
                <a
                  href={`mailto:${company.email}`}
                  className="text-emerald-400 hover:underline"
                >
                  {company.email}
                </a>
              </p>
              {company.phone && (
                <p>
                  <a
                    href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-stone-200 transition-colors"
                  >
                    {company.phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} Fortis Nutrition. A brand of {company.legalName}. All rights reserved.</p>
          <p className="text-stone-500 text-center md:text-right max-w-md">
            Informational brand showcase. Dietary supplements are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};
