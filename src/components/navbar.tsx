"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import auramLogoWithText from "../../public/images/auram-logo-with-text.webp";
import CartButtonComponent from "./buttons/cart-button.component";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
// import dynamic from "next/dynamic";
// const ThemeSwitchButtonComponent = dynamic(
//   () => import("../components/buttons/theme-switch-button.component"),
//   { ssr: false }
// );

function NavBarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center shadow-md fixed w-full bg-white dark:bg-black z-[9999]">
        <div className="w-full px-4 lg:px-0 lg:max-w-8xl flex justify-between items-center p-2  bg-white dark:bg-black dark:text-black">
          <Link href="/">
            <Image
              src={auramLogoWithText}
              alt="Auram Logo with text"
              className="w-auto h-12 lg:h-16"
            />
          </Link>
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
            {/* Menu Toggler */}
            <div className={`transition-all duration-500 ${menuOpen ? "rotate-180" : "rotate-0"} `}>
              {menuOpen ? (
                <FaXmark
                  className="md:hidden"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                />
              ) : (
                <CiMenuFries
                  className="md:hidden"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed border-4 z-[999] w-full max-w-full backdrop-blur-xl bg-white/60 dark:bg-black/50 h-screen px-4 py-10 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 no-doc-scroll" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex flex-col gap-6 items-center font-[300] text-[14px] mt-16">
            <span>PRODUCTS</span>
            <span>COLLECTIONS</span>
            <span>BESPOKE</span>
            <span>ABOUT US</span>
            <span>CONTACT US</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarComponent;
