import { StoneDetails } from "@/models/product-category-collections/item.model";
import firstLetterCapitalize from "@/utils/first-letter-capitalize";
import priceFormatter from "@/utils/price-formatter";
import React from "react";
import { RiPokerDiamondsFill } from "react-icons/ri";

function StoneAndPricingDetailsComponent({
  makingCharge,
  finalPrice,
  withGstPrice,
  withoutGstPrice,
  stoneDetails,
}: {
  makingCharge: number;
  finalPrice: number;
  withGstPrice: number;
  withoutGstPrice: number;
  stoneDetails: StoneDetails[];
}) {
  const otherCharges = [
    {
      type: "Price Without Tax",
      amount: priceFormatter(withoutGstPrice),
    },
    {
      type: "Tax",
      amount: priceFormatter(withGstPrice - withoutGstPrice),
    },
    {
      type: "Making Charges",
      amount: priceFormatter(makingCharge),
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold my-3">Price Breakup</h1>
      <div className="w-full bg-secondary/5 p-4 lg:px-8 border-[0.2px] lg:text-lg border-secondary rounded-lg">
        <div className="grid grid-cols-3 gap-5 text-lg font-bold mb-1 w-full">
          <p className="text-left border-b border-secondary pb-1 justify-self-start">
            Stone Type
          </p>
          <p className="text-center border-b border-secondary pb-1 justify-self-center">
            Weight
          </p>
          <p className="text-right border-b border-secondary pb-1 justify-self-end">
            Price
          </p>
        </div>
        {stoneDetails.map((stone, index) => (
          <div key={index} className="grid grid-cols-3 my-2">
            <p className="text-left flex items-center gap-1 font-bold">
              <RiPokerDiamondsFill /> {firstLetterCapitalize(stone.type ?? "")}
            </p>
            <p className="text-center">{stone.weight ?? "-"}g</p>
            <p className="text-right">{priceFormatter(stone.amount ?? 0)}</p>
          </div>
        ))}
        <div className="border-t border-secondary pt-1">
          {otherCharges.map((charge, index) => (
            <div key={index} className="grid grid-cols-2 my-2">
              <p className="text-left flex items-center gap-1 font-bold">
                {charge.type}
              </p>
              <p className="text-right">{charge.amount}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 my-2 border-t border-secondary pt-2">
          <p className="text-left flex items-center gap-1 font-bold">Total</p>
          <p className="text-right font-bold">{priceFormatter(finalPrice)}</p>
        </div>
      </div>
    </>
  );
}

export default StoneAndPricingDetailsComponent;
