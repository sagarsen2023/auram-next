export interface ItemParams {
  skip?: number;
  limit?: number;
  collections?: string;
  itemCategory?: string;
  goldPurity?: number;
  sortBy?: "priceAsc" | "priceDesc";
  // Following line is added to implement priceRange filter
  [key: string]: string | number | undefined;
}
