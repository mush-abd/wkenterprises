import { SiteConfig } from "@/types";

/**
 * Central Configuration for Fortis Nutrition & WK Enterprises
 * 
 * Verified against product packaging labels and WK Enterprises corporate credentials.
 */
export const siteConfig: SiteConfig = {
  brand: {
    name: "Fortis Nutrition",
    eyebrow: "FORTIS NUTRITION",
    headline: "Whole body health starts in the gut.",
    description:
      "Research-backed supplements built around bioavailability, purposeful ingredients, and transparent sources to support whole body health through the gut microbiome and beyond.",
    taglineList: ["Bioavailability", "Clean Labels", "Transparent Sources"],
    primaryCtaText: "Explore Our Products",
    secondaryCtaText: "Our Approach",
  },

  approach: {
    sectionHeading: "Better nutrition starts with better decisions.",
    sectionIntro:
      "Our approach considers how ingredients are formulated, why they are included, and how clearly that information is shared.",
    principles: [
      {
        id: "bioavailability",
        number: "01",
        title: "Bioavailability",
        tagline: "Formulation matters.",
        description:
          "Ingredient form and delivery approach are evaluated alongside raw ingredient selection. From multi-strain microbiological complexes (such as our 75 Billion CFU 3-in-1 synbiotic formulation) to high-potency standardized botanical extracts (such as 97% Berberine HCL), compounds are selected for physiological affinity and absorption.",
        highlights: [
          "Targeted compound selection optimized for digestive affinity",
          "Delivery methods matched to compound stability (e.g. synergistic Pre+Pro+Postbiotic delivery)",
          "Honest, evidence-informed formulation without unnecessary overages",
        ],
        icon: "bioavailability",
      },
      {
        id: "clean-labels",
        number: "02",
        title: "Clean Labels",
        tagline: "Every ingredient should have a clear purpose.",
        description:
          "We prioritize purposeful formulation and understandable ingredient information. Our products prominently declare dietary standards—including certified Vegan, Gluten-Free, Non-GMO, and Gelatin-Free formulations with clear nutraceutical classifications.",
        highlights: [
          "Clean formulas: 100% Vegan, Gluten-Free, Non-GMO, and Gelatin-Free variants",
          "Straightforward labeling that respects consumer discernment",
          "Explicit disclosure of active potency, CFU counts, and standardized extract percentages",
        ],
        icon: "clean-label",
      },
      {
        id: "transparent-sources",
        number: "03",
        title: "Transparent Sources",
        tagline: "Know what goes into your supplement.",
        description:
          "We believe in communicating ingredient identity, provenance, and the precise functional role of every compound. Quality starts with open accountability across every stage of the formulation lifecycle.",
        highlights: [
          "Clear disclosure of botanical and bioactive compounds (Berberine HCL, Ashwagandha, Shatavari)",
          "Rigorous material verification, strain identification, and quality custody",
          "Batch integrity backed by WK Enterprises quality governance",
        ],
        icon: "transparent-sources",
      },
    ],
  },

  productsSection: {
    heading: "Discover Fortis Nutrition.",
    subheading:
      "Formulations crafted with purposeful ingredients, verified potency, and clean nutraceutical standards.",
    items: [
      {
        id: "fortis-pre-pro-postbiotics",
        name: "India's First 3-in-1 Pre + Pro + Postbiotics",
        formulationCategory: "Microbiome & Immune Complex",
        classification: "Nutraceutical",
        packSize: "60 Capsules • 75 Billion CFU • 10 Strains",
        badges: ["75 Billion CFU", "10 Strains", "Digestive Health", "Immune Support", "Balanced Gut"],
        description:
          "Synergistic 3-in-1 microbiome formulation delivering 75 Billion CFU across 10 targeted strains. Combines Prebiotics for bacterial nourishment, gut-friendly Probiotics for intestinal balance, and bio-active Postbiotics for immune and digestive resilience.",
        amazonUrl: undefined, // Add confirmed Amazon URL when ready to enable "Shop on Amazon"
        imageUrl: "/products/pre-pro-postbiotics.jpg",
        altText: "Fortis Nutrition 3-in-1 Pre + Pro + Postbiotics bottle and packaging box",
        isPlaceholder: false,
      },
      {
        id: "fortis-berberine-hcl",
        name: "HCL+ Berberine (97% Purity)",
        formulationCategory: "Metabolic & Glucose Balance",
        classification: "Nutraceutical",
        packSize: "60 Capsules • 1100 mg",
        badges: ["97% Purity", "1100 mg", "Metabolism Boost", "Gut Health", "Glucose Balance", "Vegan", "Gluten Free", "Non GMO"],
        description:
          "Standardized high-purity Berberine HCL (97% purity, 1100mg) engineered for metabolism acceleration, gut microbiome balance, and glucose regulation. 100% Vegan, Gluten-Free, Non-GMO, and Gelatin-Free.",
        amazonUrl: undefined,
        imageUrl: "/products/berberine-hcl.jpg",
        altText: "Fortis Nutrition HCL+ Berberine 97% 1100mg 60 capsules bottle",
        isPlaceholder: false,
      },
      {
        id: "fortis-liver-detox",
        name: "Herbal Liver Detox",
        formulationCategory: "Herbal Hepatic Cleansing Matrix",
        classification: "Nutraceutical",
        packSize: "60 Capsules",
        badges: ["Toxin Flush", "Fatty Liver Support", "Bloating Relief", "Vegan", "Gluten Free", "Non GMO"],
        description:
          "Targeted herbal nutraceutical formulated for toxin flush, fatty liver support, and bloating relief. Clean label certified: 100% Vegan, Gluten-Free, Non-GMO, and Cruelty-Free.",
        amazonUrl: undefined,
        imageUrl: "/products/liver-detox.jpg",
        altText: "Fortis Nutrition Herbal Liver Detox 60 capsules bottle",
        isPlaceholder: false,
      },
      {
        id: "fortis-bone-joint",
        name: "Bone + Joint Support",
        formulationCategory: "Cartilage & Skeletal Mobility",
        classification: "Nutraceutical",
        packSize: "60 Count",
        badges: ["Joint Nourishment", "Stronger Bones", "Cartilage Support", "Vegan", "Gelatin Free", "Gluten Free"],
        description:
          "Comprehensive nutraceutical formula engineered for joint nourishment, stronger bones, and cartilage maintenance. Formulated in easy-to-absorb black capsules with zero gelatin, gluten-free, and non-GMO.",
        amazonUrl: undefined,
        imageUrl: "/products/bone-joint-support.jpg",
        altText: "Fortis Nutrition Bone + Joint Support 60 capsules bottle with softgels",
        isPlaceholder: false,
      },
      {
        id: "neutra-fortis-collagen-super-roots",
        name: "Neutra Fortis Super Roots (5 Types of Collagen)",
        formulationCategory: "Multi-Collagen & Ayurvedic Botanical Powder",
        classification: "Dietary Supplement",
        packSize: "200 g Net Qty",
        badges: ["Type I, II, III & IV Collagen", "Ashwagandha & Shatavari", "Hyaluronic Acid", "Biotin & Vit D", "Watermelon Flavor"],
        description:
          "Multi-type collagen complex incorporating Type I, Type II, Type III, and Type IV collagen peptides, synergized with time-honored Ayurvedic Super Roots (Ashwagandha & Shatavari), Hyaluronic Acid, Vitamin E, Vitamin D, and Biotin for holistic vitality.",
        amazonUrl: undefined,
        imageUrl: "/products/collagen-super-roots.jpg",
        altText: "Neutra Fortis Super Roots Collagen 200g container with watermelon slice",
        isPlaceholder: false,
      },
    ],
  },

  company: {
    legalName: "WK Enterprises",
    parentRelationship: "The company behind Fortis Nutrition.",
    introduction:
      "WK Enterprises is the enterprise and corporate steward behind Fortis Nutrition, guiding disciplined sourcing, rigorous manufacturing governance, and transparent nutritional formulations.",
    addressLabel: "Registered Business Address",
    address: "Nafees Plaza, Baroli Road, Aligarh - 202001, Uttar Pradesh (09), India",
    gstin: "09EVOPK9980C2ZU",
    email: "mehethescienceman@gmail.com",
    phone: "+91 74548 97335",
    businessHours: "Monday – Saturday, 9:30 AM – 6:30 PM IST",
    licenseDetails: "Registered Enterprise under GSTIN: 09EVOPK9980C2ZU • Uttar Pradesh (09) Jurisdiction",
  },

  navigation: [
    { label: "Our Approach", href: "#approach" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
