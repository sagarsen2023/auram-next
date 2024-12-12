import { itemAPI } from "@/services/item.service";

export async function fetchItemDetails(id: string) {
  return await itemAPI.getItemDetails(id);
}
