// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/app/constants/products";
import ProductHero from "../components/layout/ProductHero";
import OtherBusinesses from "../components/layout/OtherBusinesses";
import Footer from "@/app/components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export default async function ProductPage() {
  const product = {
    id: 2,
    slug: "hbc",
    title: "HBC",
    shortTitle: "HBC",
    logoText: "HB",
    logoBgColor: "#4A90E2",
    heroTitle: "Predict. Optimize. Lead.",
    heroSubtitle: "About the platform",
    heroDescription: "HBC leverages AI-driven forecasting, automated pricing intelligence, and performance analytics to empower hospitality leaders with real-time decision clarity. From demand prediction to operational efficiency, every insight is designed to increase profitability and strategic control.",
    websiteUrl: "https://hbc.mytravaly.com/",
    features: ["Central Management", "Revenue Analytics", "Channel Management", "Operations Hub"]
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
