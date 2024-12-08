import { AuramContactInfoApiResponse } from "@/models/contact/auram-contact-info.model";
import { CONTACT_INFO } from "./queryUrls";
import { fetchAPI } from "./config";

export const contactAPI = {
  getAuramContactInfo: async () =>
    fetchAPI.get<AuramContactInfoApiResponse>(CONTACT_INFO),
};
