// lib/products.ts
export interface Product {
  id: number;
  slug: string;
  title: string;
  shortTitle?: string;
  logoText: string;
  logoBgColor: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  websiteUrl: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  features?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "mt-india",
    title: "MT India",
    shortTitle: "MT",
    logoText: "MT",
    logoBgColor: "#FF6B5B",
    heroTitle: "Built for booking travel",
    heroSubtitle: "About the platform",
    heroDescription: "Mytravely is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent. From hotels and boutique properties to alternative accommodations, Mytravely connects travellers with verified options across cities and regions—bringing ease, trust, and consistency to the booking experience.",
    websiteUrl: "https://mytravaly.com",
    features: ["Verified Properties", "Best Price Guarantee", "24/7 Support", "Easy Cancellation"]
  },
  {
    id: 2,
    slug: "hbc",
    title: "HBC",
    shortTitle: "HBC",
    logoText: "HB",
    logoBgColor: "#4A90E2",
    heroTitle: "Hospitality Business Core",
    heroSubtitle: "About the platform",
    heroDescription: "HBC is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent. From hotels and boutique properties to alternative accommodations, Mytravely connects travellers with verified options across cities and regions—bringing ease, trust, and consistency to the booking experience.",
    websiteUrl: "https://hbc.com",
    features: ["Central Management", "Revenue Analytics", "Channel Management", "Operations Hub"]
  },
  {
    id: 3,
    slug: "stayconfirm",
    title: "Stayconfirm",
    shortTitle: "SC",
    logoText: "SC",
    logoBgColor: "#50C878",
    heroTitle: "Confirm stays with confidence",
    heroSubtitle: "About the platform",
    heroDescription: "Stayconfirm is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent. From hotels and boutique properties to alternative accommodations, Mytravely connects travellers with verified options across cities and regions—bringing ease, trust, and consistency to the booking experience.",
    websiteUrl: "https://stayconfirm.com",
    features: ["Instant Confirmation", "Real-time Updates", "Best Rates", "Secure Payments"]
  },
  {
    id: 4,
    slug: "swoovo",
    title: "Swoovo",
    shortTitle: "SW",
    logoText: "SW",
    logoBgColor: "#9B59B6",
    heroTitle: "All of Travel, Covered",
    heroSubtitle: "Our ecosystem",
    heroDescription: "Swoovo is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent. From hotels and boutique properties to alternative accommodations, Mytravely connects travellers with verified options across cities and regions—bringing ease, trust, and consistency to the booking experience.",
    websiteUrl: "https://swoovo.com",
    features: ["Unified Dashboard", "Experience Booking", "Inventory Management", "Growth Analytics"]
  },
  {
    id: 5,
    slug: "unified-pms",
    title: "Unified PMS",
    shortTitle: "UP",
    logoText: "UP",
    logoBgColor: "#E67E22",
    heroTitle: "One PMS for modern hospitality",
    heroSubtitle: "About the platform",
    heroDescription: "Unified PMS is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent. From hotels and boutique properties to alternative accommodations, Mytravely connects travellers with verified options across cities and regions—bringing ease, trust, and consistency to the booking experience.",
    websiteUrl: "https://unifiedpms.com",
    features: ["Front Desk Management", "Housekeeping Module", "Rate Management", "Detailed Reports"]
  },
  {
    id: 6,
    slug: "mt-global",
    title: "MT Global",
    shortTitle: "MG",
    logoText: "MG",
    logoBgColor: "#E74C3C",
    heroTitle: "Global travel infrastructure",
    heroSubtitle: "About the platform",
    heroDescription: "MT Global is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent. From hotels and boutique properties to alternative accommodations, Mytravely connects travellers with verified options across cities and regions—bringing ease, trust, and consistency to the booking experience.",
    websiteUrl: "https://mtglobal.com",
    features: ["Global Distribution", "Cross-border Payments", "Multi-currency Support", "Enterprise API"]
  },
];