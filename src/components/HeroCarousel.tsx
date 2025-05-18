"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SliderItem } from "@/types/slider";
import Link from "next/link";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute xl:-right-5 -right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
  >
    <ArrowRight className="text-[#EA2427] w-[14.69px] h-[14.69px] md:w-[24.49px] md:h-[24.49px]" />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute xl:-left-4 -left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
  >
    <ArrowLeft className="text-[#EA2427] w-[14.69px] h-[14.69px] md:w-[24.49px] md:h-[24.49px]" />
  </div>
);

interface HeroCarouselProps {
  banners: SliderItem[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ banners }) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="container overflow-hidden">
      <div className="relative rounded-[35px] pt-[10px]">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative w-full max-w-[100vw]  lg:max-w-[923px] aspect-[923/520] min-h-[200px] mx-auto overflow-hidden rounded-[35px] lg:mr-3"
            >
              <Link href={banner.button_url}>
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  width={923}
                  height={520}
                  className="object-cover h-5/5 rounded-[35px] px-2"
                  priority
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroCarousel;
