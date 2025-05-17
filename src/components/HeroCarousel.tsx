// "use client";

// import Slider from "react-slick";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// interface ArrowProps {
//   className?: string;
//   style?: React.CSSProperties;
//   onClick?: () => void;
// }
// const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="absolute sm:-right-6 -right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
//     >
//       <ArrowRight className="text-red-500" />
//     </div>
//   );
// };

// const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="absolute sm:-left-6 -left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
//     >
//       <ArrowLeft className="text-red-500" />
//     </div>
//   );
// };

// const HeroCarousel = () => {
//   const settings = {
//     className: "slider variable-width",
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     variableWidth: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           variableWidth: false,
//         },
//       },
//     ],
//   };

//   const banners = [
//     {
//       id: 1,
//       image: "/images/be-carousel.png",
//       alt: "Yeni sayt və tətbiq",
//     },
//     {
//       id: 2,
//       image: "/images/apple-carousel.png",
//       alt: "Yeni iPhone",
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="relative rounded-[35px]  pt-6 px-4">
//         {/* <div className="slider-container"> */}
//         <Slider {...settings}>
//           {banners.map((banner) => (
//             <div key={banner.id} className="overflow-hidden rounded-[35px] mr-4">
//               <Image
//                 src={banner.image}
//                 alt={banner.alt}
//                 width={923}
//                 height={520}
//                 className="w-[335px] h-[188px] md:lg-[350px] lg:h-[520px] lg:w-[923px] rounded-[35px] object-cover sm:object-cover m-auto"
//                 priority
//               />
//             </div>
//           ))}
//         </Slider>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;

// components/HeroCarousel.tsx
"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SliderItem } from "@/types/slider";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute sm:-right-6 -right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
  >
    <ArrowRight className="text-red-500" />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute sm:-left-5 -left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[8px] md:rounded-[12px] shadow-md"
  >
    <ArrowLeft className="text-red-500" />
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
        breakpoint: 640,
        settings: {
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="relative rounded-[35px] pt-[21px] px-4">
        {/* <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="overflow-hidden rounded-[35px]"
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 923px"
                className="w-full max-h-[523px] rounded-[20px] object-cover mr-4"
                priority
              />
            </div>
          ))}
        </Slider> */}

        {/* <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="overflow-hidden rounded-[25px] px-2 max-w-[95%] md:max-w-[700px] lg:max-w-[923px] mx-auto"
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 923px"
                className="w-full h-auto rounded-[25px] object-cover"
                priority
              />
            </div>
          ))}
        </Slider> */}

        <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative w-full max-w-[95vw] md:max-w-[700px] lg:max-w-[923px] aspect-[923/520] min-h-[200px] mx-auto overflow-hidden rounded-[35px] mr-8"
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                width={923}
                height={523}
                className="object-cover h-5/5 rounded-[35px]"
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
