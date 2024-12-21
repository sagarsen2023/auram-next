import BaseApiResponse from "../common/base-api-response.model";
import CustomerModel from "../common/customer-model";

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
    customer: CustomerModel;
  };
}
