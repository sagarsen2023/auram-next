import { ItemParams } from "@/models/product-category-collections/item-params.model";
import ItemApiResponse from "@/models/product-category-collections/item.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import { itemAPI } from "@/services/item.service";

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
  if (params.metalType) {
    if (Array.isArray(params.metalType)) {
      params.metalType.forEach((purity) => {
        slug.push(`metalType=${purity}`);
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
  if (params.gender) {
    if (Array.isArray(params.gender)) {
      params.gender.forEach((category) => {
        slug.push(`gender=${category}`);
      });
    }
  }
  if (params.skip) {
    slug.push(`skip=${params.skip}`);
  }
  if (params.limit) {
    slug.push(`limit=${params.limit}`);
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
    gender,
    metalType,
    limit,
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
      ? goldPurity
      : goldPurity
      ? [goldPurity]
      : undefined,
    metalType: Array.isArray(metalType)
      ? metalType
      : metalType
      ? [metalType]
      : undefined,
    gender: Array.isArray(gender) ? gender : gender ? [gender] : undefined,
    skip: skip ? skip.toString() : undefined,
    limit: limit ? limit.toString() : undefined,
    minPrice: minPrice ? minPrice.toString() : undefined,
    maxPrice: maxPrice ? maxPrice.toString() : undefined,
  };

  return itemParams;
}

export async function getItems({
  params,
}: {
  params: ItemParams;
}): Promise<ItemApiResponse | null> {
  try {
    const response = await itemAPI.getAllItems(params);
    return response;
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
