import BaseApiResponse from "../common/base-api-response.model";

export interface ContactUsParams {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  whatsapp: string;
  message: string;
  subject?: string;
  type: "contact" | "bespoke";
}

export interface ContactFormResponse extends BaseApiResponse {
  status: boolean;
  data: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    whatsapp: string;
    message: string;
    subject: string;
    type: string;
    isContacted: boolean;
  };
}
