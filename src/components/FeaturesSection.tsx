// import { FeatureCard } from "./FeatureCard";
// import { PackageCheck, RotateCw, CalendarClock, Wallet } from "lucide-react";

// export const FeaturesSection = () => {
//   const features = [
//     {
//       icon: <PackageCheck size={24} />,
//       title: "Sürətli çatdırılma",
//       subtitle: "24 saat ərzində",
//     },
//     {
//       icon: <RotateCw size={24} />,
//       title: "30 günə qaytarma",
//       subtitle: "Lorem ipsum dolor",
//     },
//     {
//       icon: <CalendarClock size={24} />,
//       title: "İndi al sonra ödə",
//       subtitle: "3 ay sonra ödəməyə başla",
//     },
//     {
//       icon: <Wallet size={24} />,
//       title: "Qapıda ödəmə",
//       subtitle: "24 saat ərzində",
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 px-4">
//         {features.map((item, index) => (
//           <FeatureCard
//             key={index}
//             icon={item.icon}
//             title={item.title}
//             subtitle={item.subtitle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// components/FeaturesSection.tsx

"use client";

import { Feature } from "@/types/feature";
import { FeatureCard } from "./FeatureCard";

interface Props {
  features: Feature[];
}

export const FeaturesSection = ({ features }: Props) => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 px-4">
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
