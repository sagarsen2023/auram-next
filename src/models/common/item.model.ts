import { CategoryItem } from "../product-category-collections/category.model";
import { CollectionItem } from "../product-category-collections/collection.model";
import MediaResponse from "./media-response.model";

export interface StoneDetails {
  _id: string;
  type: string;
  weight: string;
  amount: number | null;
  description: string;
}

export interface MetalRateDetails {
  _id: string;
  metalDetails: string;
  rate: number;
}

export interface ItemModel {
  _id: string;
  itemName: string;
  itemDescription?: string;
  itemCategory?: CategoryItem;
  itemMedia?: MediaResponse[];
  thumbnail: MediaResponse;
  goldPurity?: string;
  itemSpecification?: string;
  height?: string;
  width?: string;
  makingCharge?: number;
  itemSKU?: string;
  slug?: string;
  gender?: string;
  stoneDetails?: StoneDetails[];
  collections?: CollectionItem[];
  metalType?: string;
  itemWeight?: number;
  withGstPrice?: number;
  withoutGstPrice?: number;
  finalPrice?: number;
  metalRateDetails?: MetalRateDetails;
  hoverImage: MediaResponse;
  grossWeight?: number;
  isFeatured: boolean;
  isAddedToCart?: boolean;
}
