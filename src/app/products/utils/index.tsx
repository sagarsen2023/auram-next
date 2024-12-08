import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { ItemModel } from "@/models/product-category-collections/item.model";
import { itemAPI } from "@/services/product.service";

function extractKeyValuePairs(arr: string[]): {
  [key: string]: string | string[];
} {
  const result: { [key: string]: string | string[] } = {};
  arr.forEach((item) => {
    const [key, value] = item.split("%3D");
    if (result[key]) {
      if (Array.isArray(result[key])) {
        (result[key] as string[]).push(value);
      } else {
        result[key] = [result[key] as string, value];
      }
    } else {
      result[key] = value;
    }
  });
  return result;
}

export function getItemParams({ slug }: { slug?: string[] }): ItemParams {
  if (!slug) return {};

  const {
    skip,
    limit,
    sortBy,
    collections,
    goldPurity,
    minPrice,
    maxPrice,
    itemCategory,
  } = extractKeyValuePairs(slug);

  const itemParams: ItemParams = {
    sortBy: sortBy as ItemParams["sortBy"],
    collections: Array.isArray(collections)
      ? collections
      : collections
      ? [collections]
      : undefined,
    itemCategory: Array.isArray(itemCategory)
      ? itemCategory
      : itemCategory
      ? [itemCategory]
      : undefined,
    goldPurity: Array.isArray(goldPurity)
      ? goldPurity.map((value) => parseInt(value))
      : goldPurity
      ? [parseInt(goldPurity)]
      : undefined,
    skip: skip ? parseInt(skip as string) : undefined,
    limit: limit ? parseInt(limit as string) : undefined,
    minPrice: minPrice ? parseInt(minPrice as string) : undefined,
    maxPrice: maxPrice ? parseInt(maxPrice as string) : undefined,
  };

  return itemParams;
}

export async function getItems(): Promise<ItemModel[] | null> {
  try {
    const response = await itemAPI.getAllItems();
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
