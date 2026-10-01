export interface NavItem {
  label: string;
  href: string;
}

export interface BrandPrinciple {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: "bioavailability" | "clean-label" | "transparent-sources";
}

export interface ProductItem {
  id: string;
  name: string;
  formulationCategory: string;
  packSize?: string;
  classification?: string;
  badges?: string[];
  description: string;
  amazonUrl?: string;
  imageUrl?: string;
  altText: string;
  isPlaceholder?: boolean;
}

export interface CompanyDetails {
  legalName: string;
  parentRelationship: string;
  introduction: string;
  gstin?: string;
  addressLabel: string;
  address: string;
  email: string;
  phone?: string;
  businessHours?: string;
  licenseDetails?: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    eyebrow: string;
    headline: string;
    description: string;
    taglineList: string[];
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  approach: {
    sectionHeading: string;
    sectionIntro: string;
    principles: BrandPrinciple[];
  };
  productsSection: {
    heading: string;
    subheading: string;
    items: ProductItem[];
  };
  company: CompanyDetails;
  navigation: NavItem[];
}
