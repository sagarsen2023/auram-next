export interface GetOtpResponse {
    error: boolean;
    status: boolean;
    statusCode: number;
    responseTimestamp: string;
    data: {
      success: boolean;
      message: string;
    };
  }
  