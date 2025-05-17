import { Product } from "@/types/product";
import { ShoppingCart, Heart, Scale, MessageCircleMore } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-[10px] sm:rounded-[24px] sm:w-[288px] w-[160px] h-[243px] sm:h-[380px] mt-10 p-2 sm:p-4 shadow hover:shadow-md transition bg-[#F5F5F5] dark:bg-[#2B2B2B] text-[#2B2B2B] dark:text-white">
      <div className="flex items-center justify-center relative bottom-[53px] bg-white rounded-[10px] sm:rounded-[20px] sm:w-[248px] sm:h-[218px] w-[138px] h-[120px] overflow-hidden border-[1px] border-[#EDEDED] m-auto">
        <div className="flex items-center justify-between w-full absolute top-1 sm:top-2 px-2">
          {product.discount > 0 && (
            <span className="bg-[#EA2427] text-white text-[8px] sm:text-[10px] flex justify-center items-center  rounded-[10px] sm:w-[50px] w-[33px] sm:h-[30px] h-[20px] font-bold">
              -{product.discount}%
            </span>
          )}
          <button className="w-[25px] sm:w-[42px] h-[20px] sm:h-[32px] rounded-[32px] shadow-xl cursor-pointer flex items-center justify-center text-[#3F3F3F]">
            <Scale className="w-[11px] h-[11px] sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full sm:h-40 h-21 object-contain"
        />
      </div>

      {/* <div> */}
      <div className="relative bottom-[40px] sm:bottom-[35px]">
        <div className="hidden sm:flex items-center text-sm text-[#3F3F3F] dark:text-white pb-2 text-[10px]">
          <span className="text-[#EA2427]">
            ★{" "}
            <span className="text-[#3F3F3F] dark:text-white">
              {product.rate}
            </span>
          </span>
          <span className="ml-2 flex items-center gap-1 text-[10px]">
            <MessageCircleMore size={16} />
            {product.reviewCount} Rəy
          </span>
        </div>
        <p className="custom-line-clamp text-[#3F3F3F] dark:text-white text-[12px] sm:text-[14px]">
          {product.name}
        </p>
      </div>

      <div className="flex gap-2 items-end relative bottom-[30px] sm:bottom-[25px]">
        <div>
          <span className="text-gray-400 line-through text-[10px] sm:text-[14px]">
            {product.perMonth?.price} ₼
          </span>
          <div className="text-[12px] sm:text-[20px] font-semibold">
            {product.price} ₼
          </div>
        </div>
        <span className="block border h-8 sm:h-12 border-[#DEDEDE]"></span>
        <div>
          <span className="text-gray-400 text-[10px] sm:text-[14px]">
            {" "}
            {product.perMonth?.month} ay
          </span>{" "}
          <div className="text-[12px] sm:text-[20px] font-semibold">
            {product.perMonth?.price} ₼
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between relative bottom-[8px] sm:bottom-[10px]">
        <button className=" flex items-center justify-center gap-2 sm:gap-7 hover:bg-[#EA2427] text-[#3F3F3F] hover:text-white rounded-[12px] sm:py-2 bg-[#E1E1E1] transition-all duration-500 cursor-pointer dark:bg-[#3F3F3F] dark:text-white w-[96px] h-[35px] sm:w-[195px] sm:h-[45px] text-[12px] sm:text-[14px]">
          <ShoppingCart className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
          Səbətə at
        </button>
        <button className="sm:ml-2 cursor-pointer rounded-[12px] bg-[#E1E1E1] text-[#3F3F3F] hover:text-white hover:bg-[#EA2427] transition-all duration-500 dark:bg-[#3F3F3F] dark:text-white w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] flex justify-center items-center">
          <Heart className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px]" />
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}
