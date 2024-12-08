export interface ItemParams {
  skip?: number;
  limit?: number;
  collections?: string;
  itemCategory?: string;
  goldPurity?: number;
  sortBy?: "priceAsc" | "priceDesc";
  minPrice?: number;
  maxPrice?: number;
}
