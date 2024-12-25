import BaseApiResponse from "../common/base-api-response.model";
import CustomerModel from "../common/customer-model";
import { ItemModel } from "../common/item.model";

export interface AddToWishlistResponse extends BaseApiResponse {
  data: {
    _id: string;
    user: string;
    item: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface WishlistModel {
  _id: string;
  customerId: CustomerModel;
  item: ItemModel;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface WishlistItemResponse extends BaseApiResponse {
  totalCount: number;
  data: WishlistModel[];
}
