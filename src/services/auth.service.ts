import {
  LoginParams,
  OtpVerificationParams,
} from "@/models/auth/auth-params.model";
import { fetchAPI } from "./config";
import { REGISTRATION_URL, SEND_OTP_URL, VERIFY_OTP_URL } from "./queryUrls";
import {
  GetOtpResponse,
  RegistrationResponse,
  VerifyOtpResponse,
} from "@/models/auth/auth-response.model";
import { RegistrationSchemaType } from "@/validators/auth.schema";

export const authAPI = {
  sendOtp: async (data: LoginParams) =>
    await fetchAPI.post<GetOtpResponse>(SEND_OTP_URL, data),
  verifyOtp: async (data: OtpVerificationParams) =>
    await fetchAPI.post<VerifyOtpResponse>(VERIFY_OTP_URL, data),
  registerCustomer: async (data: RegistrationSchemaType) =>
    await fetchAPI.post<RegistrationResponse>(REGISTRATION_URL, data),
};
