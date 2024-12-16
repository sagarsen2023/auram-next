"use client";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";

// TODO: Add total cart count

function CartButtonComponent() {
  const router = useRouter();
  return (
    <button
      className="relative"
      onClick={() => router.push("/cart")}
      aria-label="Cart"
    >
      <div className=" absolute -top-2 -right-1 text-[10px] bg-white rounded-full border border-black w-4 h-4 flex items-center justify-center">
        0
      </div>
      <MdOutlineShoppingCart className="text-2xl" />
    </button>
  );
}

export default CartButtonComponent;
