import { ItemModel } from "@/models/product-category-collections/item.model";
import imageValidator from "@/utils/image-validator";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import React from "react";

function ProductCardComponent({ item }: { item: ItemModel }) {
  return (
    <div className="hover:shadow-lg transition-all duration-300 p-2 border rounded-md text-center flex flex-col gap-4 justify-between items-center">
      {/* Item image, title and description */}
      <div className="w-full">
        <div className="relative w-full h-[22rem] overflow-hidden group">
          <Image
            src={imageValidator(item.thumbnail?.path)}
            alt={item.itemName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-125 rounded-md"
          />{" "}
        </div>

        <div>
          <p className="text-sm lg:text-base font-[700] mt-2">
            {item.itemName}
          </p>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: `${item.itemDescription
                ?.split(" ")
                .slice(0, 12)
                .join(" ")}${
                (item.itemDescription?.split(" ").length ?? 0) > 12 ? "..." : ""
              }`,
            }}
          />
        </div>
      </div>

      {/* Pricing and add to cart button */}
      <div>
        <p className="text-sm lg:text-base font-[500] mb-2">
          {priceFormatter(item.finalPrice ?? 0)}
        </p>

        <button className="flex justify-center items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCardComponent;
