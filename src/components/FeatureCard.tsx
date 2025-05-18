import Image from "next/image";

interface FeatureCardProps {
  iconUrl: string;
  title: string;
  subtitle: string;
}

export const FeatureCard = ({ iconUrl, title, subtitle }: FeatureCardProps) => {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#2B2B2B] lg:rounded-[24px] rounded-[12.26px] p-2 md:p-6 flex flex-col items-start md:max-w-[588px] md:min-h-[186px] min-h-[94.98px] min-w-[159.84px] first:ml-0 last:mr-0">
      <div className="relative text-[8px] w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex justify-center items-center bg-[#E1E1E1] dark:bg-[#676767] md:rounded-[15.8px] rounded-[8.07px] text-[#333333] dark:text-[#fff]">
        <Image
          src={iconUrl}
          alt={title}
          width={50}
          height={50}
          className="object-contain p-[5px] md:p-[13px]"
        />
      </div>
      <h3 className="font-semibold text-[14px] md:text-[24px] text-[#333333] dark:text-[#fff] pt-3 md:pt-4">
        {title}
      </h3>
      <p className="text-[12px] md:text-[16px] text-[#333333] opacity-75 dark:text-[#fff]">
        {subtitle}
      </p>
    </div>
  );
};
