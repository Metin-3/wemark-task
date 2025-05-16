import { Product } from '@/types/product';

export interface CategoryData {
  title: string;
  products: Product[];
}

export async function getCategoryData(): Promise<CategoryData[]> {
  const res = await fetch('https://api.b-e.az/task/special-offer', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductsByCategory(category?: string): Promise<Product[]> {
  const allCategories = await getCategoryData();
  if (!category) {
    return allCategories.flatMap(c => c.products);
  }

  const matched = allCategories.find(c => c.title === category);
  return matched ? matched.products : [];
}
