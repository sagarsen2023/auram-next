export interface LoginParams {
  countryCode: string;
  phone?: string;
  type: "PHONE" | "EMAIL";
  email?: string;
}

export interface OtpVerificationParams extends LoginParams {
  otp: string;
}

export interface RegistrationParams {
  registrationId: string;
  email: string;
  phone: string;
  honorific: "Mr" | "Mrs" | "Ms";
  fullName: string;
  whatsapp?: string;
  gender: "male" | "female" | "other";
  dob: string;
  dateOfAnniversary?: string;
}
