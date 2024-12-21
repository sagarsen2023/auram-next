import BaseApiResponse from "../common/base-api-response.model";

export interface GetOtpResponse extends BaseApiResponse {
    status: boolean;
    data: {
      success: boolean;
      message: string;
    };
  }
  