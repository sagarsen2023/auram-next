"use client";

import wishlistAPI from "@/services/wishlist.service";
import imageValidator from "@/utils/image-validator";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import { FaTrash } from "react-icons/fa6";
import { WishlistModel } from "@/models/wishlist/wishlist-response.model";

function ProductCartInWishListComponent({
  wishlistItem,
}: {
  wishlistItem: WishlistModel;
}) {
  const { item } = wishlistItem;
  const [loading, setLoading] = useState(false);

  const handleRemoveFromWishList = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await wishlistAPI.removeFromWishList(wishlistItem._id);
      if (response.error) {
        throw new Error();
      }
      toast.success("Item removed from wishlist");
    } catch {
      toast.error("Failed to remove from wishlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hover:shadow-lg transition-all duration-300 border rounded-md flex flex-col gap-4 justify-between group hover:bg-gray-100 overflow-hidden">
      {/* Item image and title */}
      <div className="w-full">
        <div className="relative w-full h-[18rem] overflow-hidden">
          <Image
            src={imageValidator(item.thumbnail?.path)}
            alt={item.itemName}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-125 rounded-md"
          />
          <button
            onClick={handleRemoveFromWishList}
            disabled={loading}
            className="absolute top-2 right-2 text-lg text-secondary bg-white border-secondary border p-1.5 rounded-full shadow-md hover:scale-110 transition-all duration-200 disabled:opacity-50"
          >
            <FaTrash />
          </button>
        </div>
        <div className="px-4 md:px-6 pb-4 md:pb-6 md:mt-4">
          <p className="text-xl font-[700] mt-2">{item.itemName}</p>
          <div
            className="mt-2 text-base tracking-normal text-gray-500"
            dangerouslySetInnerHTML={{
              __html: `${item.itemDescription
                ?.split(" ")
                .slice(0, 15)
                .join(" ")} ${
                (item.itemDescription?.split(" ").length ?? 0) > 12 ? "..." : ""
              }`,
            }}
          />
        </div>
      </div>
      {/* Pricing */}
      <div className="px-4 md:px-6 pb-4 md:pb-6">
        <p className="text-lg font-bold tracking-widest mb-2">
          {priceFormatter(item.finalPrice ?? 0)}
        </p>
        <Link
          href={`/product-details/${item.slug}`}
          className="text-secondary font-semibold hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCartInWishListComponent;
