import BaseApiResponse from "../common/base-api-response.model";
import UserResponse from "../common/user-response.model";

export interface AddressesModel {
  _id: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
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

export default interface AllAddressApiResponse extends BaseApiResponse {
  status: boolean;
  totalCount: number;
  data: AddressesModel[];
}
