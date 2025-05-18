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
  { label: "Sumqayıt şəhəri", value: "one" },
  { label: "Bakı şəhəri", value: "two" },
  { label: "Quba rayonu", value: "three" },
];
export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header top */}
      <div className="container relative z-50">
        <div className="flex justify-between items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] md:px-[28px] px-[18px] py-2 rounded-[25px] h-[45px] transition-all duration-500 ease-in-out mb-2">
          <nav>
            <ul className="hidden lg:flex gap-8 text-[14px]">
              <li>
                <Link
                  href="/"
                  className="custom-hover font-[700] dark:text-[#fff]"
                >
                  Kampaniyalar
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="custom-hover font-medium dark:text-[#fff]"
                >
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="custom-hover font-medium dark:text-[#fff]"
                >
                  Mağazalar
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="custom-hover font-medium dark:text-[#fff]"
                >
                  Aylıq ödəniş
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="custom-hover  font-medium dark:text-[#fff]"
                >
                  Digər
                </Link>
              </li>
            </ul>
            <LiaBarsSolid
              size={18}
              className="block lg:hidden text-[#3F3F3F] dark:text-[#fff]"
            />
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-normal text-[14px] underline dark:text-[#fff] hidden sm:block hover:text-[#EA2427] transition-all duration-500"
            >
              Əvvəlki versiyaya keçid
            </Link>
            <div className="relative w-[50px]" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex  items-center bg-transparent focus:outline-none transition-all duration-500 cursor-pointer dark:text-[#fff] text-[14px]"
              >
                {selectedLanguage.label}
                <ChevronDown size={20} />
              </button>

              <ul
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
                        ? "bg-[#2B2B2B] text-white font-bold"
                        : ""
                    }`}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={toggleDarkMode}
              className="w-16 h-8 rounded-full px-1 bg-[#333333] dark:bg-[#1A1A1A] relative transition-colors duration-500 cursor-pointer"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center
          transform transition-transform duration-500 absolute top-1 
          ${darkMode ? "translate-x-8" : "translate-x-0"}`}
              >
                {darkMode ? (
                  <Moon size={16} className="text-gray-800" />
                ) : (
                  <Sun size={16} className="text-yellow-500" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Header bottom */}
      <div
        className={`sticky top-0 z-40 bg-white dark:bg-[#1A1A1A] transition-all duration-500 ease-in-out ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center py-2 ">
            <Link
              href={"/"}
              className="relative min-w-[45px] min-h-[45px] sm:min-w-[50px] sm:min-h-[50px]"
            >
              <Image
                src="/images/logo.svg"
                alt="BakuElectronics Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            <button className="flex items-center justify-center gap-2 bg-[#333333] text-white min-w-[120px] min-h-[40px] sm:min-h-[50px] rounded-[25px] cursor-pointer mx-2 sm:text-[16px] text-[14px] font-bold">
              <span className="relative min-w-[16.01px] min-h-[16.01px] sm:min-w-[18px] sm:min-h-[18px]">
                <Image src="/icons/category.svg" alt="Category Icon" fill />
              </span>
              Kataloq
            </button>

            <form
              action=""
              className="flex items-center justify-between gap-5 bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] h-[40px] sm:h-[50px] xl:w-[523px] sm:w-[473px] w-[473px] py-[15px] px-[20px] transition-all duration-500 ease-in-out"
            >
              <input
                type="text"
                placeholder="Məhsul axtar......"
                className="w-full px-0 py-2 text-[14px] border-0 rounded-lg focus:outline-none dark:text-[#fff] dark:border-[#2B2B2B] placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:opacity-80"
              />
              <LuSearch size={18} className="dark:text-white text-[#3F3F3F]" />
            </form>

            <Dropdown
              options={options}
              onSelect={handleSelect}
              label="Bir seçim et"
            />

            <ul className="hidden md:flex gap-3 pl-2">
              <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
                <Link href={"/"}>
                  <LiaBalanceScaleSolid className="md:w-[25px] md:h-[25px]" />
                </Link>
              </li>
              <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
                <Link href={"/"}>
                  <LiaShoppingCartSolid className="md:w-[25px] md:h-[25px]" />
                </Link>
              </li>
              <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
                <Link href={"/"}>
                  <LiaHeart className="md:w-[25px] md:h-[25px]" />
                </Link>
              </li>
              <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white">
                <Link href={"/"}>
                  <LiaUserSolid className="md:w-[25px] md:h-[25px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
