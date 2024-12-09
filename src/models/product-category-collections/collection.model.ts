import BaseApiResponse from "../common/base-api-response.model";
import MediaResponse from "../common/media-response.model";
import UserResponse from "../common/user-response.model";

export interface CollectionItem {
  _id: string;
  title: string;
  description: string;
  media?: MediaResponse[];
  status: boolean;
  verticalImage?: MediaResponse;
  horizontalImage?: MediaResponse;
  slug: string;
  colorCode: string;
  textColor: string;
  createdBy: UserResponse | string;
  updatedBy: UserResponse | string;
  createdAt: string;
  updatedAt: string;
}

export default interface CollectionApiResponse extends BaseApiResponse {
  status: boolean;
  totalCount: number;
  data?: CollectionItem[];
}
