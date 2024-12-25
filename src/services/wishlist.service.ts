import { getAuthToken } from "@/utils/token-store";
import { fetchAPI } from "./config";
import { WISHLIST_URL } from "./queryUrls";
import {
  AddToWishlistResponse,
  WishlistItemResponse,
} from "@/models/wishlist/wishlist-response.model";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import queryParamsFormatter from "@/utils/queryParamsFormatter";

export const wishlistAPI = {
  // ? Following API call is happening from server side
  getWishList: async ({
    params,
    token,
  }: {
    params: ItemParams;
    token?: string;
  }) => {
    const queryString = queryParamsFormatter(params);
    return await fetchAPI.get<WishlistItemResponse>(
      `${WISHLIST_URL}?${queryString}`,
      {
        headers: token ? { authorization: `Bearer ${token}` } : {},
      }
    );
  },
  // ? Following API call is happening from client side
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
  // ? Following API call is happening from client side
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
