export interface ItemParams {
  skip?: number;
  limit?: number;
  collections?: string | string[];
  itemCategory?: string | string[];
  goldPurity?: number | number[];
  sortBy?: string;
  minPrice?: number;
  maxPrice?: number;
}
