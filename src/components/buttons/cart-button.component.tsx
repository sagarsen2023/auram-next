"use client";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

// TODO: Add total cart count
// TODO: Add cart page redirection link

function CartButtonComponent() {
  return (
    <button className="relative">
      <div className=" absolute -top-2 -right-1 text-[10px] bg-white rounded-full border border-black w-4 h-4 flex items-center justify-center">
        0
      </div>
      <MdOutlineShoppingCart className="text-2xl" />
    </button>
  );
}

export default CartButtonComponent;
