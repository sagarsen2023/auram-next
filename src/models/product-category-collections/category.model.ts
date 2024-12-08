import BaseApiResponse from "../common/base-api-response.model";
import MediaResponse from "../common/media-response.model";

export interface CategoryItem {
  _id: string;
  title: string;
  media?: MediaResponse;
  status: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export default interface CategoryResponse extends BaseApiResponse {
  status: boolean;
  totalCount: number;
  data: CategoryItem[];
}
