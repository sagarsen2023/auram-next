import BaseApiResponse from "../common/base-api-response.model";
import MediaResponse from "../common/media-response.model";
import UserResponse from "../common/user-response.model";

export interface BannerModel {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  image: MediaResponse;
  link: string;
  buttonText: string;
  createdBy: UserResponse;
  updatedBy?: UserResponse;
  createdAt: string;
  updatedAt: string;
}

export default interface BannerApiResponse extends BaseApiResponse {
  status: boolean;
  totalCount: number;
  data: BannerModel[];
}
