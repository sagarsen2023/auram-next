"use client";
import { ItemParams } from "@/models/product-category-collections/item-params.model";
import { SortFilterOptions } from "@/models/product-category-collections/sort-filter.model";
import React, { useEffect, useState } from "react";
import { generateSlugFromParams } from "@/app/products/utils";
import Link from "next/link";

const SortByMenuComponent = ({
  currentParams,
  sortOptions,
}: {
  currentParams: ItemParams;
  sortOptions?: SortFilterOptions[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("Sort By");
  const [updatedSortOptions, setUpdatedSortOptions] = useState<
    SortFilterOptions[]
  >([]);

  useEffect(() => {
    if (sortOptions && currentParams.sortBy) {
      const selected = sortOptions.find(
        (option) => option.value === currentParams.sortBy
      );
      if (selected) {
        setSelectedOption(selected.label);
      }
    }

    if (sortOptions) {
      const newSortOptions = sortOptions.map((option) => {
        const updatedParams = { ...currentParams, sortBy: option.value };
        const link = `/products/${generateSlugFromParams(updatedParams)}`;
        return { ...option, link };
      });
      setUpdatedSortOptions(newSortOptions);
    }
  }, [sortOptions, currentParams]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!sortOptions) return null;

  return (
    <div className="relative">
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="bg-white border w-fit px-4 py-2 border-primary hover:bg-primary hover:text-white hover:shadow-lg transition-colors duration-250"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedOption}
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownDivider"
        className={`z-10 origin-left absolute top-50 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 transform ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDividerButton"
        >
          {updatedSortOptions.map((item, index) => (
            <li key={index}>
              <Link href={item.link?? ''}
                className={`block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                  currentParams.sortBy === item.value
                    ? "bg-gray-200 dark:bg-gray-600"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortByMenuComponent;
