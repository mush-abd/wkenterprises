import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Products } from "@/components/Products";
import { CompanyAbout } from "@/components/CompanyAbout";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Single-Page Content Flow */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero & Opening Brand Showcase */}
        <Hero />

        {/* Section 2: Our Approach: Three Brand Principles */}
        <Approach />

        {/* Section 3: Products Grid Showcase */}
        <Products />

        {/* Section 4: About WK Enterprises & Contact Details */}
        <CompanyAbout />
      </main>

      {/* Section 5: Footer */}
      <Footer />
    </>
  );
}
