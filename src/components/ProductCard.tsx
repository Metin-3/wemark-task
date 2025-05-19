import { Product } from "@/types/product";
import { ShoppingCart, Heart, Scale, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-[10px] sm:rounded-[24px] sm:min-w-[288px] sm:min-h-[380px] min-w-[160px] min-h-[243px]  mt-10 p-2 sm:p-5 shadow hover:shadow-md bg-[#F5F5F5] dark:bg-[#2B2B2B] text-[#2B2B2B] dark:text-white duration-500 transition-all ease-in-out">
      <div className="flex items-center justify-center relative bottom-[35px] sm:bottom-[50px] bg-white rounded-[10px] sm:rounded-[20px] sm:min-w-[248px] sm:min-h-[218px] min-w-[138px] min-h-[120px] overflow-hidden border-[1px] border-[#EDEDED] m-auto">
        <div
          className={`flex items-center justify-between  w-full absolute top-1 sm:top-2 px-2 ${
            product.discount <= 0 ||
            product.discount === null ||
            product.discount === undefined
              ? "flex-row-reverse"
              : "flex-row"
          }`}
        >
          {product.discount > 0 && (
            <span className="bg-[#EA2427] text-white text-[8px] sm:text-[10px] flex justify-center items-center  rounded-[10px] sm:w-[50px] w-[33px] sm:h-[30px] h-[20px] font-bold">
              -{product.discount}%
            </span>
          )}
          <button className="w-[25px] sm:w-[42px] h-[20px] sm:h-[32px] rounded-[32px] shadow-xl cursor-pointer flex items-center justify-center text-[#3F3F3F] hover:bg-[#ffc5c6] hover:text-[#EA2427] transition-all duration-300">
            <Scale className="w-[11px] h-[11px] sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full sm:h-40 h-21 object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative bottom-[26px] sm:bottom-[35px] ">
        <div className="hidden sm:flex items-center gap-2 text-[#3F3F3F] dark:text-white pb-2">
          <span className="text-[#EA2427] flex items-center gap-1">
            <TiStarFullOutline size={18} />{" "}
            <span className="text-[#3F3F3F] dark:text-white duration-500 transition-all ease-in-out text-[13px]">
              {product.rate}
            </span>
          </span>
          <span className="ml-2 flex items-center gap-1 text-[13px] duration-500 transition-all ease-in-out">
            <MessageCircleMore size={16} />
            {product.reviewCount} Rəy
          </span>
        </div>
        <p className="custom-line-clamp text-[#3F3F3F] dark:text-white text-[12px] sm:text-[14px] h-[35px] sm:h-[45px] duration-500 transition-all ease-in-out">
          {product.name}
        </p>
      </div>

      <div className="flex gap-2 items-end relative bottom-[21px] sm:bottom-[25px] pt-2">
        <div className="flex flex-col gap-0">
          <span className="text-gray-400 line-through text-[10px] sm:text-[14px]">
            {product.perMonth?.price} ₼
          </span>
          <div className="text-[12px] sm:text-[20px] font-semibold">
            {product.price} ₼
          </div>
        </div>
        <span className="block border h-8 sm:h-11 border-[#DEDEDE]"></span>
        <div className="flex flex-col gap-0">
          <span className="text-gray-400 text-[10px] sm:text-[14px]">
            {" "}
            {product.perMonth?.month} ay
          </span>{" "}
          <div className="text-[12px] sm:text-[20px] font-semibold">
            {product.perMonth?.price} ₼
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-0 justify-between relative bottom-[5px] sm:bottom-[5px]">
        <button className=" flex items-center justify-center gap-2 sm:gap-7 hover:bg-[#EA2427] text-[#3F3F3F] hover:text-white rounded-[12px] sm:py-2 bg-[#E1E1E1] transition-all duration-500 cursor-pointer dark:bg-[#3F3F3F] dark:text-white min-w-[96px] w-full h-[35px] sm:min-w-[195px] sm:h-[45px] text-[12px] sm:text-[14px]">
          <ShoppingCart className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
          Səbətə at
        </button>
        <button className="sm:ml-2 cursor-pointer rounded-[12px] bg-[#E1E1E1] text-[#3F3F3F] hover:text-white hover:bg-[#EA2427] transition-all duration-500 dark:bg-[#3F3F3F] dark:text-white min-w-[35px] min-h-[35px] sm:min-w-[45px] sm:min-h-[45px] flex justify-center items-center">
          <Heart className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
        </button>
      </div>
    </div>
  );
}
