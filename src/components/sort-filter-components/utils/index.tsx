import { ItemParams } from "@/models/product-category-collections/item-params.model";

export function mergeFiltersToParams(
  selectedFilters: { key: string; value: string | string[] }[]
): ItemParams {
  return selectedFilters.reduce((acc, filter) => {
    const { key, value } = filter;
    if (acc[key]) {
      acc[key] = Array.isArray(acc[key])
        ? [...acc[key], value].flat()
        : [acc[key], value].flat();
    } else {
      acc[key] = Array.isArray(value) ? value : [value];
    }
    return acc;
  }, {} as Record<string, string[]>);
}

export function getInitialFilters(
  currentParams: ItemParams
): { key: string; value: string | string[] }[] {
  const initialFilters = Object.entries(currentParams).flatMap(([key, value]) =>
    Array.isArray(value)
      ? value.map((val) => ({ key, value: val }))
      : [{ key, value }]
  );
  return initialFilters;
}
