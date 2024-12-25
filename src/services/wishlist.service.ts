import { getAuthToken } from "@/utils/token-store";
import { fetchAPI } from "./config";
import { WISHLIST_URL } from "./queryUrls";
import { AddToWishlistResponse } from "@/models/wishlist/wishlist-response.model";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import queryParamsFormatter from "@/utils/queryParamsFormatter";

export const wishlistAPI = {
  getWishList: async ({ params }: { params: ItemParams }) => {
    const queryString = queryParamsFormatter(params);
    return await fetchAPI.get<AddToWishlistResponse>(
      `${WISHLIST_URL}?${queryString}`,
      {
        headers: {
          authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  },
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
  removeFromWishList: async (productId: string) => {
    return await fetchAPI.delete<AddToWishlistResponse>(
      `${WISHLIST_URL}/${productId}`,
      {
        headers: {
          authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  },
};

export default wishlistAPI;
