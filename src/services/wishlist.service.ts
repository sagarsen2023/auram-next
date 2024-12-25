import { getAuthToken } from "@/utils/token-store";
import { fetchAPI } from "./config";
import { WISHLIST_URL } from "./queryUrls";
import { AddToWishlistResponse } from "@/models/widhlist/wishlist-response.model";

export const wishlistAPI = {
  addToWishList: async (productId: string) => {
    return await fetchAPI.post<AddToWishlistResponse>(
      WISHLIST_URL,
      {
        item: productId,
      },
      {
        headers: {
          authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  },
};

export default wishlistAPI;
