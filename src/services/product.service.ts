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
  getAllItems: async () => fetchAPI.get<ItemApiResponse>(ITEM_URL),
};
