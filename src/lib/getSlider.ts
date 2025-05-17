import { SliderItem } from "@/types/slider";

export async function getSliders(): Promise<SliderItem[]> {
  const res = await fetch("https://api.b-e.az/task/big-sliders", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch sliders");
  }

  const data: SliderItem[] = await res.json();

  return data.map((item, index) => ({
    ...item,
    id: index, // Unikal id (əgər backend-də yoxdursa)
    alt: `Slider ${index + 1}`, // Sadə alt text
  }));
}
