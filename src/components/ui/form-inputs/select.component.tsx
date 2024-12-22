"use client";

import React, { useState, useEffect, useRef } from "react";
import classNameMerger from "@/utils/class-name-merger";

export interface SelectOption {
  label: string;
  value: string;
}

const SelectComponent = ({
  label,
  menu,
  onChange,
  error,
  buttonClassName,
  disabled,
  placeholder,
}: {
  label?: string;
  menu: SelectOption[];
  onChange: (item: SelectOption) => void;
  error?: string;
  buttonClassName?: string;
  disabled?: boolean;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectOption | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: SelectOption) => {
    setSelectedItem(item);
    onChange(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <button
        type="button"
        className={classNameMerger(
          buttonClassName,
          `relative w-full px-3 py-2 border border-gray-300 text-left ${
            error
              ? "border-red-400 focus:border-secondary"
              : "focus:border-secondary"
          } rounded-md shadow-sm disabled:opacity-50 disabled:bg-gray-100 disabled:border-gray-300`
        )}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className="block truncate">
          {selectedItem ? selectedItem.label : placeholder ?? "Select an option" }
        </span>
      </button>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {menu.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-orange-50"
              onClick={() => handleSelect(item)}
            >
              <span className="block truncate">{item.label}</span>
              {selectedItem?.value === item.value && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-secondary">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
