// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/app/constants/products";
import ProductHero from "../components/layout/ProductHero";
import OtherBusinesses from "../components/layout/OtherBusinesses";
import Footer from "@/app/components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export default async function ProductPage() {
  const product = {
    id: 4,
    slug: "swoovo",
    title: "Swoovo",
    shortTitle: "SW",
    logoText: "SW",
    logoBgColor: "#9B59B6",
    heroTitle: "Intelligent Supply. Optimized Margins.",
    heroSubtitle: "Our ecosystem",
    heroDescription: "Swoovo is a high-performance supply intelligence engine that aggregates, normalizes, and optimizes hotel inventory across global sources. Built for OTAs and enterprise travel platforms, it enhances rate competitiveness, improves conversion efficiency, and enables scalable expansion into new markets — without operational complexity.",
    websiteUrl: "https://mt-swoovo.onrender.com/",
    features: ["Unified Dashboard", "Experience Booking", "Inventory Management", "Growth Analytics"]
  }

  return (
    <main>
      <Navbar product={product}/>
      <ProductHero product={product} />
      <OtherBusinesses currentProductSlug={product.slug} />
      <Footer />
    </main>
  );
}

// Generate static paths for all products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}
