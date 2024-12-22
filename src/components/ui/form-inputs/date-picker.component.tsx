import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import type { DatePickerProps as ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps
  extends Omit<ReactDatePickerProps, "onChange" | "selectsRange"> {
  label?: string;
  error?: string;
  onChange(
    date: Date | null,
    event?: React.SyntheticEvent<unknown> | undefined
  ): void;
}

function DatePickerComponent({
  label,
  error,
  dateFormat = "dd/MM/yyyy",
  selected,
  onChange,
}: DatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <ReactDatePicker
          selected={selected}
          onChange={onChange}
          dateFormat={dateFormat}
          placeholderText="dd/mm/yyyy"
          customInput={
            <input
              ref={inputRef}
              type="text"
              onFocus={handleFocus}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-secondary ${
                error ? "border-red-400" : ""
              } disabled:opacity-50 disabled:bg-gray-100 disabled:border-gray-300`}
            />
          }
        />
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default DatePickerComponent;
