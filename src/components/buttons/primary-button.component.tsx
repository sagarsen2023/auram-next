"use client";
import React, { ReactNode } from "react";
import classNameMerger from "@/utils/class-name-merger";

function PrimaryButtonCOmponent({
  id,
  isLoading,
  className,
  children,
  onClick,
  loaderClassName,
  disabled,
}: {
  id?: string;
  disabled?: boolean;
  loaderClassName?: string;
  isLoading?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      id={id}
      className={classNameMerger(
        "bg-primary text-white w-full py-2 rounded-lg px-3 flex items-center justify-center hover:bg-gray-800 hover:shadow-lg disabled:opacity-30 transition-opacity duration-250",
        className
      )}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading && (
        <svg
          className={classNameMerger(
            "animate-spin h-5 w-5 mr-3",
            loaderClassName
          )}
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      )}{" "}
      {children}
    </button>
  );
}

export default PrimaryButtonCOmponent;
