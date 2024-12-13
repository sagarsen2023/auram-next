"use client";
import React, { useState } from "react";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";

function AddToCartSectionComponent() {
  const maxQuantity = 10;
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center gap-4 lg:w-2/3">
      {/* Increment and decrement quantity part */}
      <div className="flex justify-between w-36 gap-4 items-center p-1 border border-primary rounded-lg">
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
      <PrimaryButtonCOmponent>
        <RiShoppingCart2Fill className="mr-4 max-w-fit" />
        Add to cart
      </PrimaryButtonCOmponent>
    </div>
  );
}

export default AddToCartSectionComponent;
