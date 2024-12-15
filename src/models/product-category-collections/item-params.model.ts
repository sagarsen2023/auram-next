export interface ItemParams {
  skip?: string;
  limit?: string;
  collections?: string | string[];
  itemCategory?: string | string[];
  gender?: string | string[];
  goldPurity?: string | string[];
  metalType?: string | string[];
  sortBy?: string;
  minPrice?: string;
  maxPrice?: string;
}
