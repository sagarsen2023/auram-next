"use client";

import React, { useEffect, useState } from "react";
import { generateSlugFromParams } from "@/app/products/utils";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import { useRouter } from "next/navigation";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import { getInitialFilters, mergeFiltersToParams } from "./utils";

function FilterSideBarComponent({
  currentParams,
  filterOptions,
}: {
  currentParams: ItemParams;
  filterOptions: SortFilterModel[] | null;
}) {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<
    { key: string; value: string | string[] }[]
  >([]);

  useEffect(() => {
    const initialFilters = getInitialFilters(currentParams);
    setSelectedFilters(initialFilters);
  }, [currentParams]);

  function handleApplyFilters() {
    const mergedParams = mergeFiltersToParams(currentParams, selectedFilters);
    const newParams = generateSlugFromParams(mergedParams);
    router.push(`/products/${newParams}`);
  }

  return (
    <div className="hidden lg:block w-96 bg-gray-50 dark:bg-black/50 h-fit shadow-lg -mt-20">
      <div className="flex justify-between w-full items-center pt-3 ">
        <h1 className="text-2xl font-bold">Apply Filters</h1>
        {/* <PrimaryButtonCOmponent
          className="p-2 h-8"
          onClick={() => router.push("/products")}
        >
          Clear
        </PrimaryButtonCOmponent> */}
      </div>
      <div className="w-full overflow-scroll">
        {filterOptions && filterOptions.length > 0 ? (
          filterOptions.map((filter, index) => (
            <div key={index} className="mb-6">
              <h2 className="font-bold text-lg mb-2">{filter.label}</h2>
              <ul className="space-y-2">
                {filter.data?.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm pl-3 flex items-center"
                  >
                    <input
                      className="w-6 h-6 accent-black text-white checked:bg-black border-gray-300 rounded cursor-pointer transition-all duration-500"
                      type="checkbox"
                      id={item.value}
                      checked={selectedFilters.some(
                        (selected) =>
                          selected.key === filter.field &&
                          selected.value === item.value
                      )}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedFilters([
                            ...selectedFilters,
                            { key: filter.field, value: item.value },
                          ]);
                        } else {
                          setSelectedFilters(
                            selectedFilters.filter(
                              (selected) =>
                                !(
                                  selected.key === filter.field &&
                                  selected.value === item.value
                                )
                            )
                          );
                        }
                      }}
                    />
                    <label htmlFor={item.value} className="ml-2">
                      {item.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500 py-10">
            No filters available
          </p>
        )}
      </div>
      <PrimaryButtonCOmponent onClick={handleApplyFilters} className="my-2">
        Apply Filters
      </PrimaryButtonCOmponent>
    </div>
  );
}

export default FilterSideBarComponent;
