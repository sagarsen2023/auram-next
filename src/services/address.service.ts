import { fetchAPI } from "./config";
import { AllAddressApiResponse } from "@/models/addresses/address.model";

import { getAuthToken } from "@/utils/token-store";
import { ADDRESSES_URL } from "./queryUrls";

const addressesAPI = {
  fetchAllAddresses: async () => {
    return await fetchAPI.get<AllAddressApiResponse>(ADDRESSES_URL, {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    });
  },
  deleteCartItem: async (addressId: string) => {
    return await fetchAPI.delete<AllAddressApiResponse>(
      `${ADDRESSES_URL}/${addressId}`,
      {
        headers: {
          authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  },
};
export default addressesAPI;
