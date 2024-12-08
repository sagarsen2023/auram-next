"use client";
import { SortFilterOptions } from "@/models/product-category-collections/sort-filter.model";
import Link from "next/link";
import React, { useState } from "react";

const SortByMenuComponent = ({
  sortOptions,
}: {
  sortOptions?: SortFilterOptions[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!sortOptions) return null;

  return (
    <div className="relative">
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="bg-white border w-36 px-4 py-2 border-primary hover:bg-primary hover:text-white hover:shadow-lg transition-colors duration-250"
        type="button"
        onClick={toggleDropdown}
      >
        Sort By
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
          {sortOptions.map((item, index) => (
            <li key={index} onClick={() => setIsOpen(false)}>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
