import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function TextInputComponent({
  label,
  type = "text",
  error,
  ...rest
}: TextInputProps) {
  return (
    <div>
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
        className={`w-full px-3 py-2 border border-gray-300 active:outline-none ${
          error
            ? "border-red-400 focus:border-secondary"
            : "focus:border-secondary"
        } 
        disabled:opacity-50 disabled:bg-gray-100 disabled:border-gray-300
        rounded-md shadow-sm focus:outline-none focus:ring-0`}
        {...rest}
      />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default TextInputComponent;
