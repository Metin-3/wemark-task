import { FeaturesSection } from "@/components/FeaturesSection";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Products from "@/components/Products";
import { getFeatures } from "@/lib/getFeatures";

export default async function Home({ searchParams }: any) {
  const features = await getFeatures();

  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <FeaturesSection features={features} />
        <Products
          searchParams={{
            category:
              typeof searchParams?.category === "string"
                ? searchParams.category
                : undefined,
          }}
        />
      </main>
    </>
  );
}
