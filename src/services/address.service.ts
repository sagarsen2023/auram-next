import { fetchAPI } from "./config";
import AllAddressApiResponse from "@/models/addresses/address.model";
import { MY_ADDRESSES_URL } from "./queryUrls";

const addressesAPI = {
  fetchAllAddresses: async () =>
    fetchAPI.get<AllAddressApiResponse>(MY_ADDRESSES_URL),
};
export default addressesAPI;
