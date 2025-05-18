import { FeaturesSection } from "@/components/FeaturesSection";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Products from "@/components/Products";
import { getFeatures } from "@/lib/getFeatures";
import { getSliders } from "@/lib/getSlider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({ searchParams }: any) {
  const features = await getFeatures();
  const banners = await getSliders();
  const category =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : undefined;
  return (
    <>
      <Header />
      <main>
        <HeroCarousel banners={banners} />
        <FeaturesSection features={features} />
        <Products
          searchParams={{
            category,
          }}
        />
      </main>
    </>
  );
}
