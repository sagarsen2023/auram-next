"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

// TODO: Add total cart count

function CartButtonComponent() {
  const router = useRouter();
  return (
    <button
      className="relative"
      onClick={() => router.push("/cart")}
      aria-label="Cart"
    >
      <div className=" absolute -top-3 -right-2 text-[12px] bg-white font-medium rounded-full border border-gray-300 w-5 h-5 flex items-center justify-center">
        0
      </div>
      <IoCartOutline className="text-2xl" />
    </button>
  );
}

export default CartButtonComponent;
