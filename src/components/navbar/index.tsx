"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiHeart, CiMenuFries, CiUser } from "react-icons/ci";
import auramLogoWithText from "../../../public/images/auram-logo-with-text.webp";
import CartButtonComponent from "../buttons/cart-button.component";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import ModalComponent from "../ui/modal.component";
import AuthWrapper from "../auth/auth-wrapper.component";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchBarComponent from "./search-bar.component";
import SubNavComponent from "./sub-nav.component";
import CustomerModel from "@/models/common/customer-model";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
// import dynamic from "next/dynamic";
// const ThemeSwitchButtonComponent = dynamic(
//   () => import("../components/buttons/theme-switch-button.component"),
//   { ssr: false }
// );

function NavBarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const handleModalState = React.useCallback(
    () => setIsModalOpen((prev) => !prev),
    []
  );

  useEffect(() => {
    const userData: CustomerModel = JSON.parse(
      localStorage.getItem("userData") ?? "{}"
    );
    setUserName(userData.fullName);
  }, [isModalOpen]);

  return (
    <>
      <div className="shadow-md fixed w-full z-[9999]">
        <div className="flex justify-center bg-white">
          <div className="w-full px-4 lg:max-w-8xl flex justify-between items-center p-2">
            {/* Auram Logo */}

            <Link href="/">
              <Image
                src={auramLogoWithText}
                alt="Auram Logo with text"
                className="w-auto h-12 lg:h-16"
              />
            </Link>

            {/* Search Bar */}
            <SearchBarComponent />

            {/* Other redirection */}
            <div className="flex items-center gap-4 text-2xl">
              <div className="hidden md:flex gap-6 items-center font-[300] text-[14px] mr-8">
                {userName ? (
                  <span>{userName}</span>
                ) : (
                  <button onClick={handleModalState}>
                    <CiUser className="text-2xl" />
                  </button>
                )}
                <button>
                  <CiHeart className="text-2xl" />
                </button>
                <button>
                  <IoIosNotificationsOutline className="text-2xl" />
                </button>

                <CartButtonComponent />
              </div>
              {/* Menu Toggler */}
              <div
                className={`transition-all duration-500 ${
                  menuOpen ? "rotate-180" : "rotate-0"
                } `}
              >
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
        <div className="w-full bg-white/80 border-t backdrop-blur-xl justify-center hidden md:flex">
          <div className="w-full px-4 lg:max-w-8xl p-2">
            <SubNavComponent />
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
            <Link href="/products" onClick={() => setMenuOpen(false)}>
              <span>PRODUCTS</span>
            </Link>
            <Link href="/collections">
              <span>COLLECTIONS</span>
            </Link>
            <Link href="/bespoke">
              <span>BESPOKE</span>
            </Link>
            <Link href="/about">
              <span>ABOUT US</span>
            </Link>
            <Link href="/contact">
              <span>CONTACT US</span>
            </Link>
          </div>

          <div>
            <div className="flex gap-4 items-center mt-8">
              <PrimaryButtonCOmponent onClick={handleModalState}>
                <CiUser className="text-2xl" />
              </PrimaryButtonCOmponent>
              <PrimaryButtonCOmponent>
                <CiHeart className="text-2xl" />
              </PrimaryButtonCOmponent>
              <PrimaryButtonCOmponent>
                <IoIosNotificationsOutline className="text-2xl" />
              </PrimaryButtonCOmponent>
              <CartButtonComponent />
            </div>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleModalState}
        size="3xl"
      >
        <AuthWrapper onComplete={handleModalState} />
      </ModalComponent>
    </>
  );
}

export default NavBarComponent;
