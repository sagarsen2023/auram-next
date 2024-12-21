import BaseApiResponse from "../common/base-api-response.model";

export interface GetOtpResponse extends BaseApiResponse {
  data: {
    success: boolean;
    message: string;
  };
}

export interface VerifyOtpResponse extends BaseApiResponse {
  data: {
    isNewUser: boolean;
    token: string;
    registrationId: string | null;
    customer: {
      status: "ACTIVE" | "INACTIVE" | string;
      _id: string;
      email: string;
      phone: string;
      honorific: string | null;
      fullName: string;
      whatsapp: string | null;
      gender: "male" | "female" | "other" | string;
      dob: string | null;
      dateOfAnniversary: string | null;
      countryCode: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}
