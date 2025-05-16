import { FeaturesSection } from "@/components/FeaturesSection";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Products from "@/components/Products";
import { getFeatures } from "@/lib/getFeatures";

interface PageProps {
  searchParams?: { category?: string };
}

export default async function Home({ searchParams }: PageProps) {
  const features = await getFeatures();

  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <FeaturesSection features={features} />
        <Products searchParams={searchParams ?? {}} />
      </main>
    </>
  );
}
