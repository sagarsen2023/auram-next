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
    <div className="flex justify-center shadow-md fixed w-full">
      <div className="w-full lg:max-w-8xl flex justify-between items-center p-2">
        <Image
          src={auramLogoWithText}
          alt="Auram Logo with text"
          className="w-auto h-12 lg:h-16"
        />
        {/* <ThemeSwitchButtonComponent /> */}
        <div className="flex items-center gap-4 text-2xl">
          <div className="hidden md:flex gap-6 items-center font-[300] text-[14px] mr-8">
            <span>PRODUCTS</span>
            <span>COLLECTIONS</span>
            <span>BESPOKE</span>
            <span>ABOUT US</span>
            <span>CONTACT US</span>
          </div>

          <CartButtonComponent />
          <CiMenuFries className="md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;
