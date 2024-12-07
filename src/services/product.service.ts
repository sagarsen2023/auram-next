import CollectionApiResponse from "@/models/product-category-collections/collection.model";
import { fetchAPI } from "./config";
import {
  COLLECTION_URL,
  FEATURED_PRODUCTS_URL,
  LATEST_PRODUCTS_URL,
} from "./queryUrls";
import ItemApiResponse from "@/models/product-category-collections/item.model";

export const collectionAPI = {
  getAllCollections: async () =>
    fetchAPI.get<CollectionApiResponse>(COLLECTION_URL),
};

export const productAPI = {
  getFeaturedProducts: async () =>
    fetchAPI.get<ItemApiResponse>(FEATURED_PRODUCTS_URL),
  getLatestProducts: async () =>
    fetchAPI.get<ItemApiResponse>(LATEST_PRODUCTS_URL),
};
