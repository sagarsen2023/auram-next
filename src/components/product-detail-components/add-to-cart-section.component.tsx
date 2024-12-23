"use client";
import React, { useState } from "react";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";
import cartAPI from "@/services/cart.service";
import { toast } from "sonner";
import { getAuthToken } from "@/utils/token-store";

function AddToCartSectionComponent({ itemId }: { itemId: string }) {
  const maxQuantity = 10;
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = async () => {
    const token = getAuthToken();
    if (!token) {
      toast.error("Please login to add to cart");
      return;
    }
    try {
      setLoading(true);
      const response = await cartAPI.addToCart({
        itemId,
        quantity,
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
    <div className="flex flex-col items-start gap-4 lg:w-2/3">
      {/* Increment and decrement quantity part */}
      <div className="flex justify-between w-36 gap-4 items-center p-1 border-[0.5px] border-gray-400 rounded-lg">
        <PrimaryButtonCOmponent
          disabled={quantity < 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          <FaMinus />
        </PrimaryButtonCOmponent>
        <span className="">{quantity}</span>
        <PrimaryButtonCOmponent
          disabled={quantity >= maxQuantity}
          onClick={() => setQuantity(quantity + 1)}
        >
          <FaPlus />
        </PrimaryButtonCOmponent>
      </div>

      {/* Add to cart button */}
      <PrimaryButtonCOmponent
        isLoading={loading}
        disabled={loading}
        onClick={handleAddToCart}
        className={`${
          isAddedToCart
            ? "bg-transparent text-primary border-2 border-secondary hover:bg-transparent"
            : ""
        }`}
      >
        <RiShoppingCart2Fill className="mr-4 max-w-fit" />
        {isAddedToCart ? "Already in cart" : "Add to cart"}
      </PrimaryButtonCOmponent>
    </div>
  );
}

export default AddToCartSectionComponent;
