"use client";

import { useDarkMode } from "@/context/ThemeContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Dropdown from "./ui/Dropdown";
import {
  LiaAngleDoubleRightSolid,
  LiaBalanceScaleSolid,
  LiaBarsSolid,
  LiaHeart,
  LiaShoppingCartSolid,
  LiaTimesSolid,
  LiaUserSolid,
} from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
  fontWeight?: string;
}

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

const navLinks: NavLink[] = [
  { label: "Kampaniyalar", href: "/", fontWeight: "font-[700]" },
  { label: "Xidmətlər", href: "/xidmetler", fontWeight: "font-medium" },
  { label: "Mağazalar", href: "/magazalar", fontWeight: "font-medium" },
  { label: "Aylıq ödəniş", href: "/odenis", fontWeight: "font-medium" },
  { label: "Digər", href: "/diger", fontWeight: "font-medium" },
];
export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    console.log(option);
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
        <div className="flex justify-between items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] md:px-[28px] px-[18px] py-1 sm:py-2 rounded-[25px] sm:h-[45px] h-[40px] transition-all duration-500 ease-in-out sm:mb-2 sm:mt-0 mt-1">
          <nav>
            {/* Desktop menu */}
            <ul className="hidden lg:flex gap-8 text-[14px]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`custom-hover duration-500 transition-all ease-in-out ${
                        link.fontWeight
                      } ${
                        isActive
                          ? "font-[700] text-[#333333] dark:text-white"
                          : "text-gray-400"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              className="flex lg:hidden text-[#3F3F3F] dark:text-[#fff] w-[20px] h-[11.76px] items-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <LiaBarsSolid size={24} />
            </button>

            {/* Mobile menu */}
            <div
              className={`fixed top-0 right-0 h-screen w-full sm:w-2/4 bg-white dark:bg-[#1A1A1A] shadow-lg transform transition-transform duration-300 ease-in-out z-50
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#333333] dark:border-[#333333]">
                <div className="flex items-center gap-2">
                  <Image
                    src="./images/logo.svg"
                    alt="Baku Electronics Logo"
                    width={25}
                    height={25}
                  />
                  <h2 className="text-lg font-semibold text-[#333333] dark:text-white">
                    Baku Electronics
                  </h2>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="text-gray-800 dark:text-white hover:text-red-500 transition-colors duration-200"
                >
                  <LiaTimesSolid size={24} />
                </button>
              </div>

              <ul className="flex flex-col mt-4 gap-3 px-6 text-[16px]">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex justify-between items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-2xl px-2 py-3 ${
                          isActive
                            ? "font-bold text-[#333333] dark:text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                        <LiaAngleDoubleRightSolid
                          size={16}
                          className="inline-block text-[#3F3F3F] dark:text-[#fff]"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {isOpen && (
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden opacity-65"
              />
            )}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-normal text-[14px] underline dark:text-[#fff] hidden sm:block hover:text-[#EA2427] transition-all duration-500"
            >
              Əvvəlki versiyaya keçid
            </Link>
            <div className="relative w-[40px]" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex  items-center bg-transparent focus:outline-none transition-all duration-500 cursor-pointer dark:text-[#fff] text-[14px]"
              >
                {selectedLanguage.label}
                <ChevronDown size={20} />
              </button>

              <ul
                className={`absolute z-10 mt-1 w-full bg-white border-none dark:bg-[#1A1A1A] border-gray-200 dark:border-[#2B2B2B] rounded-md shadow-xl transition transform duration-200 ease-out dark:text-[#fff] ${
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
                    className={`px-3 py-2 text-[14px] font-bold cursor-pointer ${
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
              className="sm:w-[54px] sm:h-[30px] w-[46px] h-[25.76px] rounded-full px-1 bg-[#333333] dark:bg-[#1A1A1A] relative transition-colors duration-500 cursor-pointer flex items-center"
            >
              <div
                className={`sm:w-[24px] sm:h-[24px] w-[20.24px] h-[20.24px] bg-white rounded-full shadow-md flex items-center justify-center
          transform transition-transform duration-500 absolute 
          ${darkMode ? "translate-x-5" : "translate-x-0"}`}
              >
                {darkMode ? (
                  <Moon size={16} className="text-[#333333]" />
                ) : (
                  <Sun size={16} className="text-[#333333]" />
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

            <button className="flex items-center justify-center gap-2 bg-[#333333] text-white min-w-[100px] min-h-[40px] sm:min-h-[50px] sm:min-w-[120px] rounded-[25px] cursor-pointer mx-2 sm:text-[16px] text-[14px] font-bold hover:opacity-85 transition-all duration-500">
              <span className="relative min-w-[16.01px] min-h-[16.01px] sm:min-w-[18px] sm:min-h-[18px]">
                <Image src="/icons/category.svg" alt="Category Icon" fill />
              </span>
              Kataloq
            </button>

            <form
              action="#"
              className="flex items-center justify-between gap-5 bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-[12px] h-[40px] sm:h-[50px] xl:w-[723px] sm:w-[473px] w-[473px] py-[15px] px-[20px] transition-all duration-500 ease-in-out sm:mx-2"
            >
              <input
                type="text"
                placeholder="Məhsul axtar......"
                className="w-full px-0 py-2 text-[14px] border-0 rounded-lg focus:outline-none dark:text-[#fff] dark:border-[#2B2B2B] placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:opacity-80 duration-500 transition-all ease-in-out"
              />
              <LuSearch
                size={18}
                className="dark:text-white text-[#3F3F3F] duration-500 transition-all ease-in-out"
              />
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
              <li className="w-[50px] h-[50px] bg-[#F5F5F5] rounded-[12px] flex justify-center items-center border-[1px] hover:border-[#EA2427] border-transparent duration-500 transition-all dark:bg-[#2B2B2B] dark:text-white relative">
                <Link href={"/"}>
                  <LiaShoppingCartSolid className="md:w-[25px] md:h-[25px]" />
                </Link>
                <span className="absolute -top-[4px] -right-2 w-[23.71px h-[16px] bg-[#EA2427] rounded-[18.44px] text-[10.54px] text-white p-[5px] flex justify-center items-center">
                  4+
                </span>
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
