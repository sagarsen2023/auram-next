"use client";

import Image from "next/image";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import auramLogoWithText from "../../../public/images/auram-logo-with-text.webp";
import CartButtonComponent from "../buttons/cart-button.component";
// import dynamic from "next/dynamic";
// const ThemeSwitchButtonComponent = dynamic(
//   () => import("../buttons/theme-switch-button.component"),
//   { ssr: false }
// );

function NavBarComponent() {
  return (
    <div className="flex justify-between items-center p-2 shadow-md">
      <Image
        src={auramLogoWithText}
        alt="Auram Logo with text"
        className="w-auto h-12"
      />
      {/* <ThemeSwitchButtonComponent /> */}
      <div className="flex items-center gap-4 text-2xl">
        <CartButtonComponent />
        <CiMenuFries />
      </div>
    </div>
  );
}

export default NavBarComponent;
