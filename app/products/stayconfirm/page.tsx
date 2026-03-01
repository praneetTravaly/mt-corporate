// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/app/constants/products";
import ProductHero from "../components/layout/ProductHero";
import OtherBusinesses from "../components/layout/OtherBusinesses";
import Footer from "@/app/components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export default async function ProductPage() {
  const product = {
    id: 3,
    slug: "stayconfirm",
    title: "Stayconfirm",
    shortTitle: "SC",
    logoText: "SC",
    logoBgColor: "#50C878",
    heroTitle: "Confirm stays with confidence",
    heroSubtitle: "About the platform",
    heroDescription: "Stayconfirm is a travel booking platform designed to make discovering and booking stays simple, reliable, and transparent.",
    websiteUrl: "https://stayconfirm.com",
    features: ["Instant Confirmation", "Real-time Updates", "Best Rates", "Secure Payments"]
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
