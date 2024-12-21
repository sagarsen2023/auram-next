"use client";

import React from "react";
import TextInputComponent from "../base-contact-form/text-input.component";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import Link from "next/link";

function LoginComponent() {
  return (
    <div className="w-full flex items-center justify-center bg-white p-12">
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
  );
}

export default LoginComponent;
