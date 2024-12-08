import BaseApiResponse from "../common/base-api-response.model";

export interface SortFilterApiResponse extends BaseApiResponse {
  status: boolean;
  data: SortFilterModel[];
}

export interface SortFilterModel {
  lebel?: string;
  field: string;
  type: "sort" | "filter";
  values?: Value[];
  label?: string;
  data?: Value[];
}

export interface Value {
  label: string;
  value: string;
}
