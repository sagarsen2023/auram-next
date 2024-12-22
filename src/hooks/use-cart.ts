"use client";

import { ItemModel } from "@/models/product-category-collections/item.model";
import cartAPI from "@/services/cart.service";

const useCart = {
  addToCart: ({ item, quantity }: { item: ItemModel; quantity: number }) => {
    cartAPI.addToCart({ itemId: item._id, quantity });
  },
};

export default useCart;
