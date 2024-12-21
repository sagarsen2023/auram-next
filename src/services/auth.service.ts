import {
  LoginParams,
  OtpVerificationParams,
} from "@/models/auth/auth-params.model";
import { fetchAPI } from "./config";
import { SEND_OTP_URL, VERIFY_OTP_URL } from "./queryUrls";
import { GetOtpResponse } from "@/models/auth/auth-response.model";

export const authAPI = {
  sendOtp: async (data: LoginParams) =>
    await fetchAPI.post<GetOtpResponse>(SEND_OTP_URL, data),
  verifyOtp: async (data: OtpVerificationParams) =>
    await fetchAPI.post(VERIFY_OTP_URL, data),
};
