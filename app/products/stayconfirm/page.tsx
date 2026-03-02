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
    heroTitle: "Own the Relationship. Protect the Margin.",
    heroSubtitle: "About the platform",
    heroDescription: "StayConfirm empowers hotels to capture direct bookings through secure, real-time availability and multi-currency checkout. With automated settlements, intelligent refund management, and conversion-focused booking flows, hotels regain control of distribution and profitability.",
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
