import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { ItemModel } from "@/models/product-category-collections/item.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import { itemAPI } from "@/services/product.service";

function extractKeyValuePairs(arr: string[]): {
  [key: string]: string | string[];
} {
  const result: { [key: string]: string | string[] } = {};
  arr.forEach((item) => {
    const [key, value] = item.split("%3D");
    if (result[key]) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  });
  return result;
}

export function generateSlugFromParams(params: ItemParams): string {
  const slug: string[] = [];
  if (params.sortBy) {
    slug.push(`sortBy=${params.sortBy}`);
  }
  if (params.collections) {
    if (Array.isArray(params.collections)) {
      params.collections.forEach((collection) => {
        slug.push(`collections=${collection}`);
      });
    }
  }
  if (params.goldPurity) {
    if (Array.isArray(params.goldPurity)) {
      params.goldPurity.forEach((purity) => {
        slug.push(`goldPurity=${purity}`);
      });
    }
  }
  if (params.minPrice) {
    slug.push(`minPrice=${params.minPrice}`);
  }
  if (params.maxPrice) {
    slug.push(`maxPrice=${params.maxPrice}`);
  }
  if (params.itemCategory) {
    if (Array.isArray(params.itemCategory)) {
      params.itemCategory.forEach((category) => {
        slug.push(`itemCategory=${category}`);
      });
    }
  }
  if (params.skip) {
    slug.push(`skip=${params.skip}`);
  }
  return slug.join("/");
}

export function getItemParams({ slug }: { slug?: string[] }): ItemParams {
  if (!slug) return {};

  const {
    skip,
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
    limit: 50,
    minPrice: minPrice ? parseInt(minPrice as string) : undefined,
    maxPrice: maxPrice ? parseInt(maxPrice as string) : undefined,
  };

  return itemParams;
}

export async function getItems({
  params,
}: {
  params: ItemParams;
}): Promise<ItemModel[] | null> {
  try {
    const response = await itemAPI.getAllItems(params);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getSortFilterOptions(): Promise<{
  sortOptions: SortFilterModel[] | null;
  filterOptions: SortFilterModel[] | null;
}> {
  try {
    const response = await itemAPI.getSortFilers();
    const data: SortFilterModel[] = response.data;

    const sortOptions: SortFilterModel[] = data?.filter(
      (option) => option.type === "sort"
    );
    const filterOptions = data?.filter((option) => option.type === "filter");
    return {
      sortOptions,
      filterOptions,
    };
  } catch (error) {
    console.error(error);
    return {
      sortOptions: null,
      filterOptions: null,
    };
  }
}
