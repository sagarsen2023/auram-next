export interface ItemParams {
  skip?: number;
  limit?: number;
  collections?: string | string[];
  itemCategory?: string | string[];
  goldPurity?: number | number[];
  sortBy?: "priceAsc" | "priceDesc";
  minPrice?: number;
  maxPrice?: number;
}
