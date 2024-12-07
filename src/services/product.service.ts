import CollectionApiResponse from "@/models/product-category-collections/collection.model";
import { fetchAPI } from "./config";
import { COLLECTION_URL } from "./queryUrls";

export const collectionAPI = {
  getAllCollections: async () =>
    fetchAPI.get<CollectionApiResponse>(COLLECTION_URL),
};
