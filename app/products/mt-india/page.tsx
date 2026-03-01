// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/app/constants/products";
import ProductHero from "../components/layout/ProductHero";
import OtherBusinesses from "../components/layout/OtherBusinesses";
import Footer from "@/app/components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export default async function ProductPage() {
  const product = {
    id: 1,
    slug: "mt-india",
    title: "MT India",
    shortTitle: "MT",
    logoText: "MT",
    logoBgColor: "#FF6B5B",
    heroTitle: "Built for booking travel",
    heroSubtitle: "About the platform",
    heroDescription: "Mytravely is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent.",
    websiteUrl: "https://www.mytravaly.in/",
    features: ["Verified Properties", "Best Price Guarantee", "24/7 Support", "Easy Cancellation"]
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
