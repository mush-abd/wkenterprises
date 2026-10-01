"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteContent";
import { Logo } from "@/components/Logo";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/95 backdrop-blur-md shadow-sm border-b border-brand-border/70 py-3.5"
          : "bg-brand-bg/80 backdrop-blur-sm border-b border-transparent py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-botanical transition-opacity hover:opacity-90"
            aria-label="Fortis Nutrition Home"
          >
            <Logo withTagline={true} />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Primary Navigation"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-brand-charcoal hover:text-brand-botanical rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-botanical"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#products"
              className="ml-4 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-brand-botanical hover:bg-brand-botanical-hover rounded-md shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-botanical"
            >
              Explore Products
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-charcoal hover:text-brand-botanical hover:bg-brand-warm-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-botanical"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-brand-border bg-brand-bg px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fade-in"
        >
          <div className="flex flex-col space-y-1">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-md text-base font-medium text-brand-charcoal hover:bg-brand-surface hover:text-brand-botanical transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-botanical"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#products"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold tracking-wide uppercase text-white bg-brand-botanical hover:bg-brand-botanical-hover rounded-md shadow-sm transition-colors"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
