"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-1 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
    >
      <ArrowRight className="text-red-500" />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-1 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
    >
      <ArrowLeft className="text-red-500" />
    </div>
  );
};

const HeroCarousel = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const banners = [
    {
      id: 1,
      image: "/images/be-carousel.png",
      alt: "Yeni sayt və tətbiq",
    },
    {
      id: 2,
      image: "/images/apple-carousel.png",
      alt: "Yeni iPhone",
    },
  ];

  return (
    <div className="container">
      <div className="relative w-full rounded-[35px] overflow-hidden pt-6">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className=" overflow-hidden rounded-[35px]">
              <Image
                src={banner.image}
                alt={banner.alt}
                width={1200}
                height={520}
                className="w-full h-[188px] sm:h-[350px] lg:h-[520px] object-cover md:object-cover"
                priority
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroCarousel;
