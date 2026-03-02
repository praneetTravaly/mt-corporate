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
    heroTitle: "Build a Scalable Travel Revenue Engine",
    heroSubtitle: "About the platform",
    heroDescription: "MT Gateway provides creators and independent agents with access to global inventory, customizable markups, instant confirmations via E-Cash, and transparent earnings control — eliminating contract dependency and payment delays. Built for the decentralized travel economy.",
    websiteUrl: "https://mytravaly.com/",
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
