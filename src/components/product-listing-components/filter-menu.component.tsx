"use client";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";
import React, { useState } from "react";

function FilterMenuComponent({
  currentParams,
  filterOptions,
}: {
  currentParams: ItemParams;
  filterOptions: SortFilterModel[] | null;
}) {
  console.log("itemParams", currentParams);
  const [menuOpen, setMenuOpen] = useState(false);
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
            <button>Clear</button>
            <button className="rounded-full bg-primary p-2 w-8 h-8 text-white " onClick={handleMenuOpen}>X</button>
          </div>
        </div>
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
                    <input type="checkbox" id={item.value} />
                    <label htmlFor={item.value} className="ml-2">
                      {item.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No filters available</p>
        )}
      </div>
    </>
  );
}

export default FilterMenuComponent;
