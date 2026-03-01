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
    heroTitle: "Hospitality Business Core",
    heroSubtitle: "About the platform",
    heroDescription: "HBC is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent.",
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
