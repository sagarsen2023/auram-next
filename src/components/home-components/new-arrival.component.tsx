import { itemAPI } from "@/services/item.service";
import React, { Suspense } from "react";
import ProductCardComponent from "../cards/product-card.component";
import DefaultLoaderComponent from "../ui/default-loader.component";
import { getAuthToken } from "@/utils/cookie-store";
import { ItemModel } from "@/models/common/item.model";

async function NewArrivalComponent() {
  const token = await getAuthToken();
  let items: ItemModel[] = [];
  try {
    const response = await itemAPI.getLatestItems(token);
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
          <p className="text-sm lg:text-xl tracking-[2px] md:tracking-[5px]">NEW ARRIVALS</p>
          <p className="text-xl lg:text-3xl font-[600] mt-2 tracking-[2px]">
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
