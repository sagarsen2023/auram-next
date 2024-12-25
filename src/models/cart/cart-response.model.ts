import BaseApiResponse from "../common/base-api-response.model";
import CustomerModel from "../common/customer-model";
import { ItemModel } from "../common/item.model";


export interface CartItem {
  quantity: number;
  _id: string;
  cartId: string;
  itemId: ItemModel;
  itemCopy: ItemModel;
  customerId: CustomerModel;
  createdAt: string;
  updatedAt: string;
  taxAmount: number;
}

export interface CartData {
  _id: string;
  customerId: string;
  createdAt: string;
  updatedAt: string;
  items: CartItem[];
  totalDiscount: number;
  totalItems: number;
  totalTaxableAmount: number;
  finalCartPrice: number;
  totalTaxAmount: number;
  roundOffValue: number;
}

export interface CartResponse extends BaseApiResponse {
  data: CartData;
}
