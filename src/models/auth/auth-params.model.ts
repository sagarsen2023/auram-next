export interface LoginParams {
  countryCode: string;
  phone?: string;
  type: "PHONE" | "EMAIL";
  email?: string;
}

export interface OtpVerificationParams extends LoginParams {
  otp: string;
}
