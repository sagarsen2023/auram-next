"use client";

import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import LoginComponent from "./login.component";

function AuthWrapper({ onComplete }: { onComplete?: () => void }) {
  return (
    <div className="md:flex">
      <div className="w-full relative bg-gray-100 flex items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-yellow-500 rotate-45 rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-300 rotate-45 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-md">
          <h3 className="text-3xl font-serif font-bold mb-4 ">
            Eternal Elegance Awaits
          </h3>
          <p className="text-lg mb-6 ">
            Unlock a world of exquisite jewelry and personalized collections
            that tell your unique story.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/30 p-4 rounded-lg text-center">
              <IoLockClosedOutline
                className="mx-auto mb-2 text-yellow-600"
                size={36}
              />
              <p className="text-sm md:text-lg xl:text-xl font-bold">
                100% Secure
              </p>
              <p className="text-sm">Private Registration</p>
            </div>
            <div className="bg-white/30 p-4 rounded-lg text-center">
              <FaRegHeart className="mx-auto mb-2 text-yellow-600" size={36} />
              <p className="text-sm md:text-lg xl:text-xl font-bold">
                Personalized
              </p>
              <p className="text-sm ">Curated Collections</p>
            </div>
          </div>
        </div>
      </div>
      <LoginComponent onComplete={onComplete} />
    </div>
  );
}

export default AuthWrapper;
