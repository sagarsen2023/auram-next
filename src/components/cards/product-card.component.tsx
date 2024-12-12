import { ItemModel } from "@/models/product-category-collections/item.model";
import imageValidator from "@/utils/image-validator";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCardComponent({ item }: { item: ItemModel }) {
  return (
    <Link
      href={`/product-details/${item._id}`}
      className="hover:shadow-lg transition-all duration-300 border rounded-md flex flex-col gap-4 justify-between group hover:bg-gray-100"
    >
      {/* Item image, title and description */}
      <div className="w-full">
        <div className="relative w-full h-[22rem] overflow-hidden">
          <Image
            src={imageValidator(item.thumbnail?.path)}
            alt={item.itemName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-125 rounded-md"
          />{" "}
        </div>

        <div className="px-4 md:px-6 pb-4 md:pb-6 md:mt-4">
          <p className="text-xl font-[700] mt-2">{item.itemName}</p>
          <div
            className="mt-2 text-base tracking-normal text-gray-500"
            dangerouslySetInnerHTML={{
              __html: `${item.itemDescription
                ?.split(" ")
                .slice(0, 15)
                .join(" ")}${
                (item.itemDescription?.split(" ").length ?? 0) > 12 ? "..." : ""
              }`,
            }}
          />
        </div>
      </div>

      {/* Pricing and add to cart button */}
      <div className="px-4 md:px-6 pb-4 md:pb-6">
        <p className="text-lg font-bold tracking-widest mb-2">
          {priceFormatter(item.finalPrice ?? 0)}
        </p>

        <button className="flex justify-center items-center rounded-3xl border-2 border-secondary px-4 py-2 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCardComponent;
