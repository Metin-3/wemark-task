"use client";

import { useDarkMode } from "@/context/ThemeContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Dropdown from "./ui/Dropdown";
import {
  LiaBalanceScaleSolid,
  LiaBarsSolid,
  LiaHeart,
  LiaShoppingCartSolid,
  LiaUserSolid,
} from "react-icons/lia";
import { LuSearch } from "react-icons/lu";

type Language = {
  code: string;
  label: string;
};

type Option = {
  label: string;
  value: string;
};

const languages: Language[] = [
  { code: "en", label: "En" },
  { code: "az", label: "Az" },
  { code: "tr", label: "Ru" },
];

const options: Option[] = [
  { label: "Option 1", value: "one" },
  { label: "Option 2", value: "two" },
  { label: "Option 3", value: "three" },
];
export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    console.log("Selected option:", option);
  };

  return (
    <header>
      <div className="container">
        {/* Header top */}
        <div className="flex justify-between items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] md:px-[34px] px-[18px] py-2 rounded-[25px] h-[45px] transition-all duration-500 ease-in-out">
          <nav>
            <ul className="hidden md:flex gap-4 text-[14px]">
              <li>
                <Link
                  href="/"
                  style={{ fontFamily: "sf-italic" }}
                  className="font-[700] dark:text-[#fff]"
                >
                  Kampaniyalar
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  style={{ fontFamily: "sf-italic" }}
                  className="font-medium dark:text-[#fff]"
                >
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  style={{ fontFamily: "sf-italic" }}
                  className="font-medium dark:text-[#fff]"
                >
                  Mağazalar
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  style={{ fontFamily: "sf-italic" }}
                  className="font-medium dark:text-[#fff]"
                >
                  Aylıq ödəniş
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  style={{ fontFamily: "sf-italic" }}
                  className="font-medium dark:text-[#fff]"
                >
                  Digər
                </Link>
              </li>
            </ul>
            <LiaBarsSolid
              size={18}
              className="block md:hidden text-[#3F3F3F] dark:text-[#fff]"
            />
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              style={{ fontFamily: "sf-italic" }}
              className="font-normal text-[14px] underline dark:text-[#fff] hidden sm:block"
            >
              Əvvəlki versiyaya keçid
            </Link>
            <div className="relative w-[50px]" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                style={{ fontFamily: "sf-italic" }}
                className="w-full flex  items-center bg-transparent focus:outline-none transition-all duration-500 cursor-pointer dark:text-[#fff]"
              >
                {selectedLanguage.label}
                <ChevronDown className="font-[7px]" />
              </button>

              <ul
                style={{ fontFamily: "sf-italic" }}
                className={`absolute z-10 mt-1 w-full bg-white border dark:bg-[#1A1A1A] border-gray-200 dark:border-[#2B2B2B] rounded-md shadow-lg transition transform duration-200 ease-out dark:text-[#fff] ${
                  open
                    ? "scale-100 opacity-100 pointer-events-auto"
                    : "scale-95 opacity-0 pointer-events-none"
                }`}
              >
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setOpen(false);
                      console.log("Selected language:", lang.code);
                    }}
                    className={`px-4 py-2 text-[14px] font-bold cursor-pointer ${
                      selectedLanguage.code === lang.code
                        ? "bg-[#2B2B2B] font-bold"
                        : ""
                    }`}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => toggleDarkMode()}
              className={`w-16 h-8 rounded-full flex items-center px-1 transition-all duration-300 cursor-pointer ${
                darkMode
                  ? "bg-[#1A1A1A] justify-end"
                  : "bg-[#333333] justify-start"
              }`}
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                {darkMode ? (
                  <Moon size={16} className="text-gray-800" />
                ) : (
                  <Sun size={16} className="text-yellow-500" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Header bottom */}
        <div className="flex justify-between items-center py-2">
          <Link
            href={"/"}
            className="relative w-[45px] h-[45px] sm:w-[50px] sm:h-[50px]"
          >
            <Image
              src="/images/logo.svg"
              alt="BakuElectronics Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <button
            style={{ fontFamily: "sf-italic" }}
            className="flex items-center justify-center gap-2 bg-[#333333] text-white w-[130px] h-[40px] sm:h-[50px] rounded-[25px] cursor-pointer mx-2 sm:text-[16px] text-[14px] font-bold"
          >
            <span className="w-[16.01px] h-[16.01px] sm:w-[18px] sm:h-[18px]">
              <Image
                src="/icons/category.svg"
                alt="Category Icon"
                width={18}
                height={18}
              />
            </span>
            Kataloq
          </button>

          <form
            action=""
            className="flex items-center justify-between gap-5 bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] h-[40px] sm:h-[50px] xl:w-[523px] sm:w-[223px] max-w-[1973px] py-[15px] px-[20px] transition-all duration-500 ease-in-out"
          >
            <input
              type="text"
              placeholder="Axtarış..."
              className="w-full px-4 py-2 text-[14px] border-0 rounded-lg focus:outline-none dark:text-[#fff] dark:border-[#2B2B2B]"
            />
            <LuSearch size={18} className="dark:text-white text-[#3F3F3F]" />
          </form>

          <Dropdown
            options={options}
            onSelect={handleSelect}
            label="Bir seçim et"
          />

          <ul className="hidden md:flex gap-3">
            <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
              <Link href={"/"}>
                <LiaBalanceScaleSolid size={18} />
              </Link>
            </li>
            <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
              <Link href={"/"}>
                <LiaShoppingCartSolid size={18} />
              </Link>
            </li>
            <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
              <Link href={"/"}>
                <LiaHeart size={18} />
              </Link>
            </li>
            <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
              <Link href={"/"}>
                <LiaUserSolid size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
