import { getProductsByCategory, getCategoryData } from "@/lib/api";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
interface ProductsProps {
  searchParams?: { category?: string };
}

export default async function Products({ searchParams }: ProductsProps) {
  const category = searchParams?.category ?? "";

  const [products, categories] = await Promise.all([
    getProductsByCategory(category),
    getCategoryData(),
  ]);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <div>
          <span
            style={{ fontFamily: "sf-italic" }}
            className="text-[#EA2427] text-[14px]"
          >
            Özəl təkliflər
          </span>
          <h2 className="text-[#3F3F3F] text-[24px] font-bold dark:text-white">
            Payız gəldi, şərtlər daha da sadələşdi!
          </h2>
        </div>
        <FilterBar
          selectedCategory={category}
          categories={categories.map((c) => c.title)}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
