// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/app/constants/products";
import ProductHero from "../components/layout/ProductHero";
import OtherBusinesses from "../components/layout/OtherBusinesses";
import Footer from "@/app/components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export default async function ProductPage() {
  const product = {
    id: 5,
    slug: "unified-pms",
    title: "Unified PMS",
    shortTitle: "UP",
    logoText: "UP",
    logoBgColor: "#E67E22",
    heroTitle: "Operational Control, Without Complexity",
    heroSubtitle: "About the platform",
    heroDescription: "A unified cloud-based PMS designed to streamline reservations, inventory management, staff coordination, and guest lifecycle management — across single properties and multi-unit portfolios. Automation reduces friction. Intelligence improves performance.",
    websiteUrl: "https://unifiedpms.com",
    features: ["Front Desk Management", "Housekeeping Module", "Rate Management", "Detailed Reports"]
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
