// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/app/constants/products';
import ProductHero from './components/layout/ProductHero';
import OtherBusinesses from './components/layout/OtherBusinesses';
import Footer from '@/app/components/layout/Footer';

interface ProductPageProps {
  params: Promise<{ slug: string }>; // ✅ params is a Promise
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params; // ✅ Await the params Promise
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
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