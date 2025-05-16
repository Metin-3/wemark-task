import { Feature } from "@/types/feature";


export async function getFeatures(): Promise<Feature[]> {
  const res = await fetch(`https://api.b-e.az/task/features`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch features");

  const data: Feature[] = await res.json();
  return data;
}
