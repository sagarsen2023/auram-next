import CollectionApiResponse from "@/models/product-category-collections/collection.model";
import { fetchAPI } from "./config";
import {
  COLLECTION_URL,
  FEATURED_ITEMS_URL,
  ITEM_URL,
  LATEST_ITEMS_URL,
  SORT_FILTERS_URL,
} from "./queryUrls";
import ItemApiResponse from "@/models/product-category-collections/item.model";
import { SortFilterApiResponse } from "@/models/product-category-collections/sort-filter.model";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import queryParamsFormatter from "@/utils/queryParamsFormatter";

export const collectionAPI = {
  getAllCollections: async () =>
    fetchAPI.get<CollectionApiResponse>(COLLECTION_URL),
};

export const itemAPI = {
  getFeaturedItems: async () =>
    fetchAPI.get<ItemApiResponse>(FEATURED_ITEMS_URL),
  getLatestItems: async () => fetchAPI.get<ItemApiResponse>(LATEST_ITEMS_URL),
  getSortFilers: async () =>
    fetchAPI.get<SortFilterApiResponse>(SORT_FILTERS_URL),
  getAllItems: async (params: ItemParams) => {
    const queryString = queryParamsFormatter({
      skip: params.skip,
      limit: params.limit,
      sortBy: params.sortBy,
      collections: params.collections,
      itemCategory: params.itemCategory,
      goldPurity: params.goldPurity,
      gender: params.gender,
      priceRange: [params.minPrice, params.maxPrice],
    });
    return fetchAPI.get<ItemApiResponse>(`${ITEM_URL}?${queryString}`);
  },
  getItemDetails: async (id: string) =>
    fetchAPI.get<ItemApiResponse>(`${ITEM_URL}/${id}`),
};