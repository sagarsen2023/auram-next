"use client";

import { generateSlugFromParams } from "@/app/products/utils";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    const initialFilters = Object.entries(currentParams).flatMap(
      ([key, value]) =>
        Array.isArray(value)
          ? value.map((val) => ({ key, value: val }))
          : [{ key, value }]
    );
    console.log("initialFilters", initialFilters);
    setSelectedFilters(initialFilters);
  }, [currentParams]);

  function mergeFiltersToParams(
    currentParams: ItemParams,
    selectedFilters: { key: string; value: string | string[] }[]
  ): ItemParams {
    const filters = selectedFilters.reduce((acc, filter) => {
      const { key, value } = filter;
      if (acc[key]) {
        acc[key] = Array.isArray(acc[key])
          ? [...acc[key], value].flat()
          : [acc[key], value].flat();
      } else {
        acc[key] = Array.isArray(value) ? value : [value];
      }
      return acc;
    }, {} as Record<string, string[]>);

    return {
      ...currentParams,
      ...filters,
    };
  }

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        onClick={handleMenuOpen}
        className="lg:hidden bg-white border w-fit px-4 py-2 border-primary hover:bg-primary hover:text-white hover:shadow-lg transition-colors duration-250"
      >
        Filters
      </button>

      {/* Menu for mobile and tablet */}
      <div
        className={`fixed left-0 top-0 z-[99] w-full max-w-full bg-gray-50 dark:bg-black/50 h-screen px-4 py-10 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between w-full items-center mt-8 py-2 ">
          <h1 className="text-2xl font-bold">Apply Filters</h1>
          <div>
            <button onClick={() => router.push("/products")}>Clear</button>
            <button
              className="rounded-full bg-primary p-2 w-8 h-8 text-white "
              onClick={handleMenuOpen}
            >
              X
            </button>
          </div>
        </div>
        <div className="w-full h-[75%] overflow-scroll">
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
        <button
          onClick={() => {
            const mergedParams = mergeFiltersToParams(
              currentParams,
              selectedFilters
            );
            const newParams = generateSlugFromParams(mergedParams);
            router.push(`/products/${newParams}`);
            setMenuOpen(false);
          }}
          className="bg-primary text-white w-full py-2 rounded-lg mt-3"
        >
          Apply Filters
        </button>
      </div>
    </>
  );
}

export default FilterMenuComponent;
