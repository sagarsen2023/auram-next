import BannerApiResponse from "@/models/banner/banner-response.model";
import { fetchAPI } from "./config";
import { BANNER_URL } from "./queryUrls";

const homeAPI = {
  fetchBanner: async () => fetchAPI.get<BannerApiResponse>(BANNER_URL),
};
export default homeAPI;
