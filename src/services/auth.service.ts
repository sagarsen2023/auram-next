import {
  LoginParams,
  OtpVerificationParams,
} from "@/models/auth/auth-params.model";
import { fetchAPI } from "./config";
import {
  REGISTRATION_URL,
  SEND_OTP_URL,
  SET_TOKEN_URL,
  VERIFY_OTP_URL,
} from "./queryUrls";
import {
  GetOtpResponse,
  RegistrationResponse,
  VerifyOtpResponse,
} from "@/models/auth/auth-response.model";
import { RegistrationSchemaType } from "@/validators/auth.schema";

async function setToken(token: string) {
  try {
    const response = await fetch(SET_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    console.log("Token set", response);
  } catch {
    throw new Error("Token set failed");
  }
}

export const authAPI = {
  sendOtp: async (data: LoginParams) =>
    await fetchAPI.post<GetOtpResponse>(SEND_OTP_URL, data),
  verifyOtp: async (data: OtpVerificationParams) => {
    const response = await fetchAPI.post<VerifyOtpResponse>(
      VERIFY_OTP_URL,
      data
    );
    if (response.error) {
      throw new Error("Login failed");
    }
    const token = response.data.token;
    setToken(token);
    return response;
  },
  registerCustomer: async (data: RegistrationSchemaType) => {
    const response = await fetchAPI.post<RegistrationResponse>(
      REGISTRATION_URL,
      data
    );
    if (response.error) {
      throw new Error("Registration failed");
    }
    const token = response.data.token;
    setToken(token);
    return response;
  },
};
