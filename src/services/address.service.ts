import { fetchAPI } from "./config";
import {
  AddAddressFormResponse,
  AddAddressParams,
  AllAddressApiResponse,
} from "@/models/addresses/address.model";
import { getAuthToken } from "@/utils/token-store";
import { ADDRESSES_URL, SET_DEFAULT_ADDRESS_URL } from "./queryUrls";

const addressesAPI = {
  fetchAllAddresses: async () => {
    return await fetchAPI.get<AllAddressApiResponse>(ADDRESSES_URL, {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    });
  },
  deleteAddressItem: async (addressId: string) => {
    return await fetchAPI.delete<AllAddressApiResponse>(
      `${ADDRESSES_URL}/${addressId}`,
      {
        headers: {
          authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  },

  setDefault: async (addressId: string) => {
    return await fetchAPI.put<AllAddressApiResponse>(
      `${SET_DEFAULT_ADDRESS_URL}/${addressId}`,
      {
        headers: {
          authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  },
  addUpdateAddress: async (data: AddAddressParams) =>
    fetchAPI.post<AddAddressFormResponse>(ADDRESSES_URL, data, {
      headers: {
        authorization: `Bearer ${getAuthToken()}`,
      },
    }),
};
export default addressesAPI;
