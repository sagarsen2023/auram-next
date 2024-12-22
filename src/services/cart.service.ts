import { fetchAPI } from "./config";
import { ADD_TO_CART_URL } from "./queryUrls";

const cartAPI = {
  addToCart: async ({
    itemId,
    quantity,
  }: {
    itemId: string;
    quantity: number;
  }) => {
    return await fetchAPI.post(
      ADD_TO_CART_URL,
      { itemId, quantity },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },
};

export default cartAPI;
