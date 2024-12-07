import { ItemModel } from "@/models/product-category-collections/item.model";
import imageValidator from "@/utils/image-validator";
import Image from "next/image";
import React from "react";

function ProductCardComponent({ item }: { item: ItemModel }) {
  return (
    <div className="hover:shadow-lg transition-all duration-300 p-2">
      <div className="relative w-full h-[22rem] overflow-hidden group">
        <Image
          src={imageValidator(item.thumbnail?.path)}
          alt={item.itemName}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-125"
        />
      </div>
      <div className="text-center space-y-2">
        <p className="text-sm lg:text-base font-[500] mt-2">{item.itemName}</p>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: `${item.itemDescription
              ?.split(" ")
              .slice(0, 12)
              .join(" ")}...`,
          }}
        />
        <p className="text-sm lg:text-base font-[500] mt-2">
          ₹{item.finalPrice}
        </p>
      </div>
    </div>
  );
}

export default ProductCardComponent;
