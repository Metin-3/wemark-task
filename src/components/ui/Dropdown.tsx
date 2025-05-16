"use client";

import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  label?: string;
};

export default function Dropdown({
  options,
  onSelect,
  label = "Select",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative hidden lg:block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] h-[50px] lg:w-[253px] py-[15px] px-[20px] cursor-pointer text-[#2B2B2B] dark:text-white transition-all duration-500 ease-in-out"
      >
        {selected ? selected.label : label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2  rounded-[12px] shadow-lg bg-[#F5F5F5] dark:bg-[#2B2B2B] ring-opacity-5 w-[253px] px-2 transition-all duration-500 ease-in-out">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className="w-full text-left px-4 py-3 text-sm hover:bg-[#2B2B2B] dark:hover:bg-[#1A1A1A] hover:text-white cursor-pointer rounded-[12px] duration-200 transition-all ease-in-out text-[#2B2B2B] dark:text-white"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
