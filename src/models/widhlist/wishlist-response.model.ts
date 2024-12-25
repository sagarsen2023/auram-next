import BaseApiResponse from "../common/base-api-response.model";

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
