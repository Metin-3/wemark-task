import { Product } from "@/types/product";
import { ShoppingCart, Heart, Scale, MessageCircleMore } from "lucide-react";
import Image from "next/image";
// import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className=" rounded-[24px] w-[288px] mt-6 p-4 shadow hover:shadow-md transition bg-[#F5F5F5] dark:bg-[#2B2B2B] text-[#2B2B2B] dark:text-white">
      <div className="flex items-center justify-center relative bottom-[45px] bg-white rounded-[20px] max-[248px] h-[218px] border-[1px] border-[#EDEDED]">
        <div className="flex items-center justify-between w-full absolute top-2 left-2">
          {product.discount > 0 && (
            <span className="bg-[#EA2427] text-white text-[10px] px-[12px] py-[7px] rounded-[10px]">
              -{product.discount}%
            </span>
          )}
          <button className="w-[42px] h-[32px] rounded-[32px] shadow-xl cursor-pointer flex items-center justify-center text-[#3F3F3F] mr-4">
            <Scale />
          </button>
        </div>

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-40 object-contain"
        />
      </div>

      <div>
        <div className="relative bottom-[23px]">
          <div className="flex items-center text-sm text-[#3F3F3F] dark:text-white pb-2">
            <span className="text-[#EA2427]">
              ★{" "}
              <span className="text-[#3F3F3F] dark:text-white">
                {product.rate}
              </span>
            </span>
            <span className="ml-2 flex items-center gap-1">
              <MessageCircleMore size={16} />
              {product.reviewCount} Rəy
            </span>
          </div>
          <p className="text-[#3F3F3F] dark:text-white text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            {product.name}
          </p>
        </div>

        <div className="flex gap-2 items-end mt-2">
          <div>
            <span className="text-gray-400 line-through text-sm">
              {product.perMonth?.price} ₼
            </span>
            <div className="text-[20px] font-semibold">{product.price} ₼</div>
          </div>
          <span className="block border h-12 border-[#DEDEDE]"></span>
          <div>
            <span className="text-gray-400 text-sm">
              {" "}
              {product.perMonth?.month} ay
            </span>{" "}
            <div className="text-[20px] font-semibold">
              {product.perMonth?.price} ₼
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="flex-1 flex items-center justify-center gap-7 hover:bg-[#EA2427] text-[#3F3F3F] hover:text-white rounded-[12px] py-2 bg-[#E1E1E1] transition-all duration-500 cursor-pointer dark:bg-[#3F3F3F] dark:text-white">
            <ShoppingCart size={18} />
            Səbətə əlavə et
          </button>
          <button className="ml-2 p-2 cursor-pointer rounded-[12px] bg-[#E1E1E1] text-[#3F3F3F] hover:text-white hover:bg-[#EA2427] transition-all duration-500 dark:bg-[#3F3F3F] dark:text-white">
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
}
