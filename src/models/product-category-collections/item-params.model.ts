export interface ItemParams {
  skip?: number;
  limit?: number;
  collections?: string | string[];
  itemCategory?: string | string[];
  gender?: string | string[];
  goldPurity?: string | string[];
  metalType?: string | string[];
  sortBy?: string;
  minPrice?: number;
  maxPrice?: number;
}
