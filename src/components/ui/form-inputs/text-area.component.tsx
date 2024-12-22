import React from "react";

function TextAreaComponent({
  label,
  id,
  placeholder,
  error,
  rows = 4,
  ...rest
}: {
  label?: string;
  id?: string;
  placeholder?: string;
  error?: string;
  rows?: number;
}) {
  return (
    <>
      {label && (
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={`w-full px-3 py-2 border border-gray-300 active:outline-none ${
          error
            ? "border-red-400 focus:border-secondary"
            : "focus:border-secondary"
        } rounded-md shadow-sm focus:outline-none focus:ring-0`}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}

export default TextAreaComponent;
