import BaseApiResponse from "../common/base-api-response.model";

export interface SortFilterApiResponse extends BaseApiResponse {
  status: boolean;
  data: SortFilterModel[];
}

export interface SortFilterModel {
  lebel?: string;
  field: string;
  type: "sort" | "filter";
  values?: SortFilterOptions[];
}

export interface SortFilterOptions {
  label: string;
  value: string;
  link?: string;
}
