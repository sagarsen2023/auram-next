"use client";
import TextInputComponent from "@/components/base-contact-form/text-input.component";
import PrimaryButtonCOmponent from "@/components/buttons/primary-button.component";
import React from "react";

const MyProfile = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold text-gray-800">Edit Details</h1>
      </div>
      <div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <TextInputComponent
                label="First Name (Required)"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <TextInputComponent
                label="Last Name (Required)"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <TextInputComponent
                label="Phone (Required)"
                placeholder="Enter your phone number"
              />
              <div className="absolute top-10 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <TextInputComponent
                label="Alternate Phone (Optional)"
                placeholder="Enter your alternate phone number"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <TextInputComponent
                label="Email (Optional)"
                placeholder="Enter your email"
              />
              <div className="absolute top-10 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <TextInputComponent
                label="WhatsApp (Optional)"
                placeholder="Enter your WhatsApp number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <TextInputComponent
                label="Date of Birth (Optional)"
                placeholder="Enter your DOB"
              />
            </div>
            <div>
              <TextInputComponent
                label="Date of Marrige Aniversery (Optional)"
                placeholder="Date of Marrige Aniversery"
              />
            </div>
          </div>

          <div className="text-center">
            <PrimaryButtonCOmponent>
              {/* {loading ? "Sending..." : "Send Message"} */} Update Profile
            </PrimaryButtonCOmponent>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyProfile;
