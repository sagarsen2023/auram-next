import { fetchAPI } from "./config";
import { AllAddressApiResponse } from "@/models/addresses/address.model";
import { DELETE_ADDRESS_ITEM_URL, MY_ADDRESSES_URL } from "./queryUrls";
import { getAuthToken } from "@/utils/token-store";

const addressesAPI = {
  fetchAllAddresses: async () => {
    return await fetchAPI.get<AllAddressApiResponse>(MY_ADDRESSES_URL, {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    });
  },
  deleteCartItem: async (addressId: string) => {
    return await fetchAPI.delete<AllAddressApiResponse>(
      `${DELETE_ADDRESS_ITEM_URL}/${addressId}`,
      {
        headers: {
          authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  },
};
export default addressesAPI;
