"use client";

import React, { useState } from "react";
import TextInputComponent from "../base-contact-form/text-input.component";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import Link from "next/link";
import { toast } from "sonner";
import { LoginParams } from "@/models/auth/auth-params.model";
import { authAPI } from "@/services/auth.service";

function LoginComponent() {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState<{
    emailOrPhone: string | null;
    otp: string | null;
  }>({
    emailOrPhone: null,
    otp: null,
  });
  const [currentState, setCurrentState] = useState<
    "email-or-phone-input" | "otp-input"
  >("email-or-phone-input");

  const getOtp = async () => {
    const isEmail = /\S+@\S+\.\S+/.test(credentials.emailOrPhone ?? "");
    let isPhone = /^\d{10}$/.test(credentials.emailOrPhone ?? "");
    if (!isEmail) {
      isPhone = /^\d{10}$/.test(credentials.emailOrPhone ?? "");
      if (!isPhone) {
        toast.error("Invalid phone number or email");
        return;
      }
    }
    const formData: LoginParams = {
      countryCode: "91",
      phone: isPhone ? credentials.emailOrPhone ?? "" : "",
      type: isEmail ? "EMAIL" : "PHONE",
      email: isEmail ? credentials.emailOrPhone ?? "" : "",
    };
    try {
      setLoading(true);
      const response = await authAPI.sendOtp(formData);
      if (!response.data.success) {
        toast.error(
          response.data.message ??
            "Something went wrong! Check your email or phone number"
        );
        return;
      }
      setCurrentState("otp-input");
      toast.success(response.data.message);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
    toast.success(`OTP sent to your ${isEmail ? "email" : "phone"}`);
  };

  const handleButtonClick = () => {
    if (currentState === "email-or-phone-input") {
      getOtp();
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-white p-12">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Auram!
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your phone number to get started
          </p>
        </div>

        <div className="">
          <div>
            <TextInputComponent
              label="Phone Number or Email"
              placeholder="Enter your phone number or email"
              disabled={currentState !== "email-or-phone-input"}
              onChange={(e) => {
                setCredentials({
                  ...credentials,
                  emailOrPhone: e.target.value,
                });
              }}
            />
          </div>
          <div className="mt-4">
            <PrimaryButtonCOmponent
              disabled={loading}
              isLoading={loading}
              onClick={handleButtonClick}
            >
              Request OTP
            </PrimaryButtonCOmponent>
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
      </div>
    </div>
  );
}

export default LoginComponent;
