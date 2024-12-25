import BaseApiResponse from "../common/base-api-response.model";
import { ItemModel } from "../common/item.model";

export default interface ItemApiResponse extends BaseApiResponse {
  status: boolean;
  totalCount: number;
  data: ItemModel[];
}

export interface ItemDetailsResponse extends BaseApiResponse {
  status: boolean;
  data: ItemModel;
}
