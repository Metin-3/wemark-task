import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeContext } from "@/context/ThemeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baku Electronics",
  description: "E-commerce platform for electronics products",
  icons: {
    icon: "https://img.b-e.az/media/logo/baku-electronics-logo_QJeQcxF.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#1A1A1A] duration-500 transition-all ease-in-out`}
      >
        <ThemeContext>{children}</ThemeContext>
      </body>
    </html>
  );
}
