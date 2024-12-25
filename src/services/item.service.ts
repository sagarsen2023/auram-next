import CollectionApiResponse from "@/models/product-category-collections/collection.model";
import { fetchAPI } from "./config";
import {
  COLLECTION_URL,
  FEATURED_ITEMS_URL,
  ITEM_URL,
  LATEST_ITEMS_URL,
  SORT_FILTERS_URL,
} from "./queryUrls";
import ItemApiResponse, {
  ItemDetailsResponse,
} from "@/models/product-category-collections/item-response.model";
import { SortFilterApiResponse } from "@/models/product-category-collections/sort-filter.model";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { generateQueryStringWithSortFilter } from "@/utils/sort-filter";

export const collectionAPI = {
  getAllCollections: async () =>
    fetchAPI.get<CollectionApiResponse>(COLLECTION_URL),
};

export const itemAPI = {
  getFeaturedItems: async (token?: string) =>
    fetchAPI.get<ItemApiResponse>(FEATURED_ITEMS_URL, {
      next: {
        revalidate: 60,
      },
      headers: token ? { authorization: `Bearer ${token}` } : {},
    }),
  getLatestItems: async (token?: string) =>
    fetchAPI.get<ItemApiResponse>(LATEST_ITEMS_URL, {
      next: {
        revalidate: 60,
      },
      headers: token ? { authorization: `Bearer ${token}` } : {},
    }),
  getSortFilers: async () =>
    fetchAPI.get<SortFilterApiResponse>(SORT_FILTERS_URL, {
      next: {
        revalidate: 120,
      },
    }),
  getAllItems: async ({
    params,
    token,
  }: {
    params: ItemParams;
    token?: string;
  }) => {
    const queryString = generateQueryStringWithSortFilter(params);
    return fetchAPI.get<ItemApiResponse>(`${ITEM_URL}?${queryString}`, {
      headers: token ? { authorization: `Bearer ${token}` } : {},
    });
  },
  getItemDetails: async (id: string, token?: string) =>
    fetchAPI.get<ItemDetailsResponse>(`${ITEM_URL}/${id}`, {
      headers: token ? { authorization: `Bearer ${token}` } : {},
    }),
};
