import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { WishlistItemResponse } from "@/models/wishlist/wishlist-response.model";
import wishlistAPI from "@/services/wishlist.service";
import { getAuthToken } from "@/utils/cookie-store";

export const fetchWishlist = async ({
  params,
}: {
  params: ItemParams;
}): Promise<WishlistItemResponse | null> => {
  try {
    const token = await getAuthToken();
    const response = await wishlistAPI.getWishList({ params, token });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
