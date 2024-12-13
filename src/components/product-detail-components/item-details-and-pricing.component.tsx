import { ItemModel } from "@/models/product-category-collections/item.model";
import firstLetterCapitalize from "@/utils/first-letter-capitalize";
import priceFormatter from "@/utils/price-formatter";
import React from "react";

function ItemDetailsAndPricing({ item }: { item: ItemModel }) {
  return (
    <div className="space-y-4">
      {/* Item name */}
      <h3 className="text-2xl font-semibold">{item.itemName}</h3>
      {/* Item price */}
      <p className="font-bold text-xl">
        {priceFormatter(item.finalPrice ?? 0)}{" "}
      </p>
      {/* Item description */}
      <div dangerouslySetInnerHTML={{ __html: item.itemDescription ?? "" }} />
      {/* A short details */}
      <div className="flex justify-between text-center p-4 lg:w-2/3 bg-secondary/20 rounded-lg">
        <div>
          <p className="font-semibold">Gender</p>
          <p>{firstLetterCapitalize(item?.gender ?? "Unisex")}</p>
        </div>
        <div>
          <p className="font-semibold">Metal Type</p>
          <p>{firstLetterCapitalize(item?.metalType ?? "")}</p>
        </div>
        <div>
          <p className="font-semibold">Weight</p>
          <p>{item?.itemWeight} g</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsAndPricing;
