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
    heroTitle: "All of Travel, Covered",
    heroSubtitle: "Our ecosystem",
    heroDescription: "Swoovo is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent.",
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
