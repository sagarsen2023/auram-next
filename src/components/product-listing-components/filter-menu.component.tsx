"use client";

import { generateSlugFromParams } from "@/app/products/utils";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaXmark } from "react-icons/fa6";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";
import { getInitialFilters, mergeFiltersToParams } from "./utils";

function FilterMenuComponent({
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const initialFilters = getInitialFilters(currentParams);
    setSelectedFilters(initialFilters);
  }, [currentParams]);

  function handleFilterChange(filterType: string, value: string) {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = prevFilters.filter(
        (filter) => !(filter.key === filterType && filter.value === value)
      );
      if (updatedFilters.length === prevFilters.length) {
        updatedFilters.push({ key: filterType, value });
      }
      return updatedFilters;
    });
  }

  function handleApplyFilters() {
    const mergedParams = mergeFiltersToParams(selectedFilters);
    const newParams = generateSlugFromParams(mergedParams);
    router.push(`/products/${newParams}`);
    setMenuOpen(false);
  }

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <PrimaryButtonCOmponent
        onClick={handleMenuOpen}
        className="lg:hidden bg-white border w-fit px-4 py-2 text-primary border-primary hover:bg-primary hover:text-white hover:shadow-lg transition-colors duration-250"
      >
        Filters
      </PrimaryButtonCOmponent>

      {/* Menu for mobile and tablet */}
      <div
        className={`fixed left-0 top-0 z-[99] w-full max-w-full bg-gray-50 dark:bg-black/50 h-screen px-4 py-10 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between w-full items-center mt-8 py-2 ">
          <h1 className="text-2xl font-bold">Apply Filters</h1>
          <div className="flex items-center gap-2">
            <PrimaryButtonCOmponent
              className="p-2  h-8"
              onClick={() => router.push("/products")}
            >
              Clear
            </PrimaryButtonCOmponent>
            <button
              className="rounded-full bg-primary p-2 w-8 h-8 text-white "
              onClick={handleMenuOpen}
            >
              <FaXmark />
            </button>
          </div>
        </div>
        <div className="w-full h-[80%] overflow-scroll">
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
                        onChange={() => {
                          handleFilterChange(filter.field, item.value);
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
    </>
  );
}

export default FilterMenuComponent;
