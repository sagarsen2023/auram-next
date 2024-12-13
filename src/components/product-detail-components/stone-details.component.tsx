import { StoneDetails } from "@/models/product-category-collections/item.model";
import firstLetterCapitalize from "@/utils/first-letter-capitalize";
import priceFormatter from "@/utils/price-formatter";
import React from "react";

function StoneDetailsComponent({
  stoneDetails,
}: {
  stoneDetails: StoneDetails[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      {stoneDetails.map((stone) => (
        <div
          key={stone._id}
          className="p-3 border-secondary border-[0.5px] shadow-md bg-secondary/5 rounded-lg"
        >
          <div className="flex justify-between items-center">
            <p className="font-bold">
              {firstLetterCapitalize(stone.type)}{" "}
              <span className="font-semibold">{stone.weight}g</span>
            </p>
            <p>{priceFormatter(stone.amount ?? 0)}</p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: stone.description ?? "" }} />
        </div>
      ))}
    </div>
  );
}

export default StoneDetailsComponent;
