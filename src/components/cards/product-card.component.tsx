"use client";

import { ItemModel } from "@/models/product-category-collections/item.model";
import cartAPI from "@/services/cart.service";
import imageValidator from "@/utils/image-validator";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import { getAuthToken } from "@/utils/token-store";
import { useRouter } from "next/navigation";

function ProductCardComponent({ item }: { item: ItemModel }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(item.isAddedToCart);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    const token = getAuthToken();
    if (!token) {
      toast.error("Please login to add to cart");
      return;
    }
    if (isAddedToCart) {
      router.push("/cart");
      return;
    }
    try {
      setLoading(true);
      const response = await cartAPI.addToCart({
        itemId: item._id,
        quantity: 1,
      });
      if (response.error) {
        throw new Error();
      }
      setIsAddedToCart(true);
      toast.success("Item added to cart");
    } catch {
      toast.error("Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Link
      href={`/product-details/${item.slug}`}
      className="hover:shadow-lg transition-all duration-300 border rounded-md flex flex-col gap-4 justify-between group hover:bg-gray-100 overflow-hidden"
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
        <PrimaryButtonCOmponent
          disabled={loading}
          isLoading={loading}
          onClick={handleAddToCart}
          className={`w-fit rounded-3xl px-4 py-2 transition-colors duration-300 ${
            isAddedToCart
              ? "bg-secondary text-white border-2 border-secondary"
              : "bg-transparent text-primary border-2 border-secondary group-hover:bg-secondary group-hover:text-white"
          }`}
        >
          {isAddedToCart ? "View in cart" : "Add to cart"}
        </PrimaryButtonCOmponent>
      </div>
    </Link>
  );
}

export default ProductCardComponent;
