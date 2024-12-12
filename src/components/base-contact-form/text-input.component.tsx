import React from "react";

function TextInputComponent({
  label,
  id,
  name,
  required = false,
  placeholder,
  type = "text",
  error,
  ...rest
}: {
  label?: string;
  id?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  error?: string;
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
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-300 active:outline-none ${
          error
            ? "border-red-400 focus:border-secondary"
            : "focus:border-secondary"
        } rounded-md shadow-sm focus:outline-none focus:ring-0`}
        {...rest}
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </>
  );
}

export default TextInputComponent;
