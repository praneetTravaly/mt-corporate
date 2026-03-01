// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/app/constants/products";
import ProductHero from "../components/layout/ProductHero";
import OtherBusinesses from "../components/layout/OtherBusinesses";
import Footer from "@/app/components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export default async function ProductPage() {
  const product = {
    id: 6,
    slug: "mt-global",
    title: "MT Global",
    shortTitle: "MG",
    logoText: "MG",
    logoBgColor: "#E74C3C",
    heroTitle: "Global travel infrastructure",
    heroSubtitle: "About the platform",
    heroDescription: "MT Global is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent.",
    websiteUrl: "https://mtglobal.com",
    features: ["Global Distribution", "Cross-border Payments", "Multi-currency Support", "Enterprise API"]
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
