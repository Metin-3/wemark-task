"use client";

import { Feature } from "@/types/feature";
import { FeatureCard } from "./FeatureCard";

interface Props {
  features: Feature[];
}

export const FeaturesSection = ({ features }: Props) => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 py-[21px]">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            iconUrl={item.icon}
            title={item.title}
            subtitle={item.description}
          />
        ))}
      </div>
    </div>
  );
};
