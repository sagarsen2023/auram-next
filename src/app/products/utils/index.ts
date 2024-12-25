import { ItemParams } from "@/models/product-category-collections/item-params.model";
import ItemApiResponse from "@/models/product-category-collections/item.model";
import { itemAPI } from "@/services/item.service";

export async function getItems({
  params,
  token,
}: {
  params: ItemParams;
  token?: string;
}): Promise<ItemApiResponse | null> {
  try {
    const response = await itemAPI.getAllItems({ params, token });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
