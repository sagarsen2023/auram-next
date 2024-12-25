"use client";

import { CartItem, CartResponse } from "@/models/cart/cart-response.model";
import imageValidator from "@/utils/image-validator";
import priceFormatter from "@/utils/price-formatter";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import PrimaryButtonComponent from "../buttons/primary-button.component";
import { FaMinus, FaPlus, FaXmark } from "react-icons/fa6";
import Link from "next/link";

function CartItemListingComponent({
  cartResponse,
  onQuantityChange,
  onDelete,
}: {
  cartResponse: CartResponse | null;
  onQuantityChange: (itemId: string, change: number) => void;
  onDelete: (itemId: string) => void;
}) {
  const { data: cartData } = cartResponse ?? {};
  const [items, setItems] = useState<CartItem[] | undefined>(cartData?.items);

  useEffect(() => {
    setItems(cartData?.items);
  }, [cartData]);

  const handleQuantityChange = (itemId: string, change: number) => {
    if (!items) return;

    const updatedItems = items.map((item) => {
      if (item.itemId._id === itemId) {
        const newQuantity = Math.max(1, item.quantity + change);
        onQuantityChange(itemId, newQuantity);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setItems(updatedItems);
  };

  return (
    <div className="border-2 rounded-xl p-4 space-y-2">
      {items?.map((item) => (
        <div
          key={item._id}
          className="border-[0.3px] border-secondary/60 rounded-xl p-2 relative"
        >
          <button
            className="absolute top-2 right-2 text-red-500"
            onClick={() => onDelete(item.itemId._id)}
          >
            <FaXmark />
          </button>
          <div className="flex items-start gap-4 pr-5">
            <Link href={`/product-details/${item.itemId._id}`}>
              <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={imageValidator(item.itemId?.thumbnail?.path)}
                  alt={item.itemId.itemName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 96px) 100vw, 96px"
                />
              </div>
            </Link>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-bold truncate">
                {item.itemCopy.itemName}
              </p>
              <p>{priceFormatter(item.itemCopy.finalPrice ?? 0)}</p>
              <div className="flex items-center gap-2 mt-2">
                <PrimaryButtonComponent
                  className="h-8 w-8"
                  onClick={() => handleQuantityChange(item.itemId._id, -1)}
                  disabled={item.quantity <= 1}
                >
                  <FaMinus />
                </PrimaryButtonComponent>
                <span className="w-8 text-center">{item.quantity}</span>
                <PrimaryButtonComponent
                  className="h-8 w-8"
                  onClick={() => handleQuantityChange(item.itemId._id, 1)}
                >
                  <FaPlus />
                </PrimaryButtonComponent>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItemListingComponent;
