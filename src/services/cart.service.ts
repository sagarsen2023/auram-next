import { CartResponse } from "@/models/cart/cart-response";
import { fetchAPI } from "./config";
import { ADD_TO_CART_URL, GET_CART_URL } from "./queryUrls";
import { getAuthToken } from "@/utils/token-store";

const cartAPI = {
  addToCart: async ({
    itemId,
    quantity,
  }: {
    itemId: string;
    quantity: number;
  }) => {
    return await fetchAPI.post<CartResponse>(
      ADD_TO_CART_URL,
      { itemId, quantity },
      {
        headers: {
          authorization: `Bearer ${getAuthToken()})}`,
        },
      }
    );
  },
  getCartData: async () => {
    return await fetchAPI.get<CartResponse>(GET_CART_URL, {
      headers: {
        authorization: `Bearer ${getAuthToken()})}`,
      },
    });
  },
};

export default cartAPI;