import BaseApiResponse from "../common/base-api-response.model";
import UserResponse from "../common/user-response.model";

export interface AddressesModel {
  _id: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  isDefault: boolean;
  status: boolean;
  isDeleted: boolean;
  countryCode: string;
  phone: string;
  name: string;
  createdBy: UserResponse;
  updatedBy?: UserResponse;
  createdAt: string;
  updatedAt: string;
}

export interface AllAddressApiResponse extends BaseApiResponse {
  totalCount: number;
  data: AddressesModel[];
}

export interface SingleAddressApiResponse extends BaseApiResponse {
  totalCount: number;
  data: AddressesModel;
}
