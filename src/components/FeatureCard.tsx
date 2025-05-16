import Image from "next/image";

interface FeatureCardProps {
  iconUrl: string;
  title: string;
  subtitle: string;
}

export const FeatureCard = ({ iconUrl, title, subtitle }: FeatureCardProps) => {
  return (
    <div
      style={{ fontFamily: "sf-italic" }}
      className="bg-[#F5F5F5] dark:bg-[#2B2B2B] lg:rounded-[24px] rounded-[12.26px] p-4 flex flex-col items-start gap-2 w-full sm:w-auto "
    >
      <div className="text-[8px] w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] flex justify-center items-center bg-[#E1E1E1] dark:bg-[#676767] lg:rounded-[15.8px] rounded-[8.07px] text-[#333333] dark:text-[#fff]">
        <Image src={iconUrl} alt={title} width={25} height={25} className="object-cover" />
      </div>
      <h3 className="font-semibold text-[14px] lg:text-[24px] text-[#333333] dark:text-[#fff]">
        {title}
      </h3>
      <p className="text-[12px] lg:text-[16px] text-[#333333] dark:text-[#fff]">
        {subtitle}
      </p>
    </div>
  );
};

// components/FeatureCard.tsx
// import Image from "next/image";

// interface FeatureCardProps {
//   iconUrl: string;
//   title: string;
//   subtitle: string;
// }

// export const FeatureCard = ({ iconUrl, title, subtitle }: FeatureCardProps) => {
//   return (
//     <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm h-full">
//       <div className="mb-3">
//         <Image src={iconUrl} alt={title} width={48} height={48} />
//       </div>
//       <h3 className="text-base font-semibold">{title}</h3>
//       <p className="text-sm text-gray-600">{subtitle}</p>
//     </div>
//   );
// };
