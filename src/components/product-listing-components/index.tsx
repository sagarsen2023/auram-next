"use client";

import React, { useState } from "react";
import FilterSideBarComponent from "../sort-filter-components/filter-sidebar.component";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import ProductCardComponent from "../cards/product-card.component";
import SortByMenuComponent from "../sort-filter-components/sort-by-menu.component";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { MdOutlineReadMore } from "react-icons/md";
import { GiDiamonds, GiStrikingDiamonds } from "react-icons/gi";
import { getItems } from "@/app/products/utils";
import { ItemModel } from "@/models/common/item.model";
import NoDataComponent from "../ui/no-data.component";
const getRandomTagline = dynamic(() => import("@/constants/jewelry-taglines"), {
  ssr: false,
});

function ProductListingComponent({
  token,
  totalCount,
  itemParams,
  filterOptions,
  sortOptions,
  initialItemData,
}: {
  totalCount: number;
  token: string | undefined;
  itemParams: ItemParams;
  filterOptions: SortFilterModel[] | null;
  sortOptions: SortFilterModel[] | null;
  initialItemData: ItemModel[] | null;
}) {
  const [loading, setLoading] = useState(false);
  const [itemData, setItemData] = useState(initialItemData);
  const RandomTaglineComponent = getRandomTagline;
  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const response = await getItems({
        params: {
          ...itemParams,
          skip: itemData?.length.toString(),
          limit: "24",
        },
        token,
      });
      setItemData((prev) => [...(prev || []), ...(response?.data || [])]);
    } catch {
      toast.error("Error loading more products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:flex gap-5 items-start w-full h-full">
      <FilterSideBarComponent
        sortFor="/products"
        currentParams={itemParams}
        filterOptions={filterOptions}
      />
      <div className="w-full">
        {itemData && itemData.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-full w-full justify-between items-center hidden lg:flex mt-2">
              <p className="text-xl flex items-center gap-3">
                <GiDiamonds /> <RandomTaglineComponent /> <GiStrikingDiamonds />
              </p>
              {sortOptions && sortOptions.length > 0 && (
                <SortByMenuComponent
                  sortFor="/products"
                  currentParams={itemParams}
                  sortOptions={sortOptions[0].values}
                />
              )}
            </div>

            {itemData.map((item) => (
              <ProductCardComponent key={item._id} item={item} />
            ))}
            <div className="col-span-full w-full justify-center items-center flex">
              <PrimaryButtonCOmponent
                isLoading={loading}
                className="w-fit"
                disabled={itemData.length === totalCount}
                onClick={handleLoadMore}
              >
                <MdOutlineReadMore className="mr-3" />
                Load More Products
              </PrimaryButtonCOmponent>
            </div>
          </div>
        ) : (
          <NoDataComponent />
        )}
      </div>
    </div>
  );
}

export default ProductListingComponent;
