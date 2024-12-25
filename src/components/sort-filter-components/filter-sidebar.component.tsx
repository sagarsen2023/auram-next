"use client";

import React, { useEffect, useState } from "react";
import { generateSlugFromParams } from "@/utils/sort-filter";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import { useRouter } from "next/navigation";
import { getInitialFilters, mergeFiltersToParams } from "./utils";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import { FaXmark } from "react-icons/fa6";

function FilterSideBarComponent({
  sortFor,
  currentParams,
  filterOptions,
}: {
  sortFor: "/products" | "/wishlist";
  currentParams: ItemParams;
  filterOptions: SortFilterModel[] | null;
}) {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<
    { key: string; value: string | string[] }[]
  >([]);
  const [mergedParams, setMergedParams] = useState<ItemParams | null>(null);

  useEffect(() => {
    const initialFilters = getInitialFilters(currentParams);
    setSelectedFilters(initialFilters);
  }, [currentParams]);

  useEffect(() => {
    if (mergedParams) {
      const newParams = generateSlugFromParams(mergedParams);
      router.push(`${sortFor}/${newParams}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mergedParams, router]);

  function handleFilterChange(filterType: string, value: string) {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = prevFilters.filter(
        (filter) => !(filter.key === filterType && filter.value === value)
      );
      if (updatedFilters.length === prevFilters.length) {
        updatedFilters.push({ key: filterType, value });
      }
      setMergedParams(mergeFiltersToParams(updatedFilters));
      return updatedFilters;
    });
  }

  return (
    <div className="hidden lg:block w-[26rem] dark:bg-black/50 h-full shadow-lg px-4 border-t border-secondary/30 rounded-md">
      <div className="flex justify-between w-full items-center pt-3 mb-3">
        <h1 className="text-2xl font-bold">Apply Filters</h1>
        <PrimaryButtonCOmponent
          className="p-2 w-fit h-8"
          onClick={() => router.push(sortFor)}
        >
          Clear
          <FaXmark />
        </PrimaryButtonCOmponent>
      </div>
      <div className="w-full">
        {filterOptions && filterOptions.length > 0 ? (
          filterOptions.map((filter, index) => (
            <div key={index} className="mb-6">
              <h2 className="font-bold text-[15px] w-fit border-b border-primary pb-1 mb-3">
                {filter.label?.toUpperCase()}
              </h2>
              <ul className="space-y-2 text-sm font-thin">
                {filter.data?.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm pl-3 flex items-center cursor-pointer"
                  >
                    <input
                      className="h-4 w-4 outline-none ring-0 checked:ring-0 active:ring-0 focus:ring-0 checked:bg-secondary transition-all duration-200 checked:hover:bg-secondary rounded-[4px]"
                      type="checkbox"
                      id={`${item.label}${item.value}`}
                      checked={selectedFilters.some(
                        (selected) =>
                          selected.key === filter.field &&
                          selected.value === item.value
                      )}
                      onChange={() => {
                        handleFilterChange(filter.field, item.value);
                      }}
                    />
                    <label
                      htmlFor={`${item.label}${item.value}`}
                      className="ml-2 cursor-pointer"
                    >
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
    </div>
  );
}

export default FilterSideBarComponent;
