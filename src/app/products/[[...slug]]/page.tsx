import React, { Suspense } from "react";
import { getItemParams, getItems, getSortFilterOptions } from "../utils";
import DefaultLoaderComponent from "@/components/default-loader.component";
import ProductCardComponent from "@/components/cards/product-card.component";
import DualLineComponent from "@/components/ui/dual-line.component";
import SortByMenuComponent from "@/components/product-listing-components/sort-by-menu.component";
import FilterMenuComponent from "@/components/product-listing-components/filter-menu.component";
import FilterSideBarComponent from "@/components/product-listing-components/filter-sidebar.component";

async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const slug = (await params).slug;
  const itemParams = getItemParams({ slug });
  const itemData = await getItems({
    params: itemParams,
  });
  const { sortOptions, filterOptions } = await getSortFilterOptions();

  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center -mt-10">
          <DefaultLoaderComponent />
        </div>
      }
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Heading Part */}
        <div className="flex justify-center flex-col gap-3 w-full pb-6">
          <h1 className="font-[500] text-center text-2xl">
            Our Elegant Products
          </h1>
          <DualLineComponent />
        </div>

        {/* Sort and filter Menu */}
        <div className="flex justify-between lg:justify-end items-center w-full my-3">
          <FilterMenuComponent
            currentParams={itemParams}
            filterOptions={filterOptions}
          />
          {sortOptions && sortOptions.length > 0 && (
            <SortByMenuComponent
              currentParams={itemParams}
              sortOptions={sortOptions[0].values}
            />
          )}
        </div>

        {/* All Products Part */}
        <div className="lg:flex gap-5 items-start w-full h-full">
          <FilterSideBarComponent
            currentParams={itemParams}
            filterOptions={filterOptions}
          />
          <div className="w-full">
            {itemData && itemData.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itemData.map((item) => (
                  <ProductCardComponent key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <div>No Products to display</div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
