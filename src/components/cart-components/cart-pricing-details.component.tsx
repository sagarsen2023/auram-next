"use client";

import React from "react";
import { CartResponse } from "@/models/cart/cart-response.model";
import priceFormatter from "@/utils/price-formatter";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";

function CartPricingDetailsComponent({
  cartResponse,
}: {
  cartResponse: CartResponse | null;
}) {
  if (!cartResponse?.data) {
    return <div>No pricing details available.</div>;
  }

  const {
    totalItems,
    totalDiscount,
    totalTaxableAmount,
    totalTaxAmount,
    finalCartPrice,
    roundOffValue,
  } = cartResponse.data;

  return (
    <div className="p-4 border-2 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Price Details</h2>

      <div className="flex justify-between mb-2">
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Total Taxable Amount:</span>
        <span>{priceFormatter(totalTaxableAmount)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Total Tax Amount:</span>
        <span>{priceFormatter(totalTaxAmount)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Total Discount:</span>
        <span>{priceFormatter(totalDiscount)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Round Off:</span>
        <span>{priceFormatter(roundOffValue)}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-bold">
        <span>Final Price:</span>
        <span>{priceFormatter(finalCartPrice)}</span>
      </div>

      <PrimaryButtonCOmponent className="mt-4">
        Proceed to Checkout
      </PrimaryButtonCOmponent>
    </div>
  );
}

export default CartPricingDetailsComponent;
