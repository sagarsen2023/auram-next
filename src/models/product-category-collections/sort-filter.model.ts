import BaseApiResponse from "../common/base-api-response.model";

export interface SortFilterApiResponse extends BaseApiResponse {
  status: boolean;
  data: SortFilterModel[];
}

export interface SortFilterModel {
  label?: string;
  field: string;
  type: "sort" | "filter";
  // Following part for sorting
  data?: SortFilterOptions[];
  // Following part for filtering
  values?: SortFilterOptions[];
}

export interface SortFilterOptions {
  label: string;
  value: string;
  link?: string;
}
