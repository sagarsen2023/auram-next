import { AuramContactInfoApiResponse } from "@/models/contact/auram-contact-info.model";
import { CONTACT_INFO, CONTACT_US_URL } from "./queryUrls";
import { fetchAPI } from "./config";
import {
  ContactFormResponse,
  ContactUsParams,
} from "@/models/contact/contact-us.model";

export const contactAPI = {
  getAuramContactInfo: async () =>
    fetchAPI.get<AuramContactInfoApiResponse>(CONTACT_INFO),
  contactUs: async (data: ContactUsParams) =>
    fetchAPI.post<ContactFormResponse>(CONTACT_US_URL, data),
};
