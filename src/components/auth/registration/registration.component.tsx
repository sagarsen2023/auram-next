"use client";
import TextInputComponent from "@/components/base-contact-form/text-input.component";
import PrimaryButtonCOmponent from "@/components/buttons/primary-button.component";
import Link from "next/link";
import React from "react";

import { FaRegHeart } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";

function RegistrationComponent() {
  return (
    <>
      <div className=" flex">
        <div
          className="w-1/2 relative bg-gray-100 
                      flex items-center justify-center p-12  overflow-hidden"
        >
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
                <p className="text-xl font-bold ">100% Secure</p>
                <p className="text-sm">Private Registration</p>
              </div>
              <div className="bg-white/30 p-4 rounded-lg text-center">
                <FaRegHeart
                  className="mx-auto mb-2 text-yellow-600"
                  size={36}
                />
                <p className="text-xl font-bold ">Personalized</p>
                <p className="text-sm ">Curated Collections</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-white p-12">
          <div className="w-full max-w-md">
            <div className=" mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome to Auram!
              </h2>
              <p className="text-gray-600 mt-2">
                Enter your phone number to get started
              </p>
            </div>

            <form className="space-y-4">
              <div className="">
                <div>
                  <TextInputComponent
                    label="Phone Number (Required)"
                    placeholder="Enter 10 digit mobile number"
                  />
                </div>
                <div className="mt-4">
                  <PrimaryButtonCOmponent>Request OTP</PrimaryButtonCOmponent>
                </div>

                <p className="text-gray-600 mt-6">
                  By continuing, I agree to{" "}
                  <Link href={""} className="text-yellow-600">
                    Terms of Use
                  </Link>{" "}
                  &{" "}
                  <Link href={""} className="text-yellow-600">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationComponent;
