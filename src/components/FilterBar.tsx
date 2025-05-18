"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  selectedCategory?: string;
  categories: string[];
}

export default function FilterBar({ selectedCategory, categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [savedScroll, setSavedScroll] = useState(0);

  const handleClick = (category?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setSavedScroll(window.scrollY);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    window.scrollTo(0, savedScroll);
  }, [savedScroll]);
  return (
    <div
      style={{ fontFamily: "sf-italic" }}
      className="flex gap-3 md:gap-7 h-[45px] justify-center items-center overflow-x-auto  bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[25px] px-4 duration-500 transition-all ease-in-out"
    >
      <button
        onClick={() => handleClick(undefined)}
        className={`custom-hover cursor-pointer py-2 text-[11px] sm:text-[14px] duration-500 transition-all ease-in-out ${
          !selectedCategory
            ? " dark:text-white text-[#2B2B2B] font-bold"
            : "dark:text-gray-300 text-[#2B2B2B] font-medium"
        }`}
      >
        Hamısı
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`custom-hover cursor-pointer py-2 text-[11px] md:text-[14px] whitespace-nowrap duration-500 transition-all ease-in-out ${
            selectedCategory === cat
              ? " dark:text-white text-[#2B2B2B] font-bold"
              : " dark:text-gray-300 text-[#2B2B2B] font-medium"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
