import { ItemModel } from "@/models/product-category-collections/item.model";
import { itemAPI } from "@/services/product.service";
import React, { Suspense } from "react";
import ProductCardComponent from "../cards/product-card.component";
import DefaultLoaderComponent from "../default-loader.component";

async function NewArrivalComponent() {
  let items: ItemModel[] = [];
  try {
    const response = await itemAPI.getLatestItems();
    items = response.data.slice(0, 4) ?? [];
  } catch (error) {
    console.log(error);
  }
  return (
    <Suspense
      fallback={
        <div className="w-full flex justify-center h-56 items-center">
          <DefaultLoaderComponent />
        </div>
      }
    >
      <div>
        <div className="pt-10 lg:pt-16 lg:pb-5 text-center">
          <p className="text-sm lg:text-xl">NEW ARRIVALS</p>
          <p className="text-xl lg:text-3xl font-[600] mt-2">
            STAND OUT IN STYLE
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {items.map((item) => (
            <ProductCardComponent key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default NewArrivalComponent;