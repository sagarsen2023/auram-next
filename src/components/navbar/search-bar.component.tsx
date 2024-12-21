import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchBarComponent() {
  return (
    <div
      className="flex justify-center"
      style={{
        width: "50%",
      }}
    >
      <div className="border px-3 border-gray-400 rounded-md flex items-center w-full max-w-3xl">
        <CiSearch className="text-2xl text-gray-400 mr-2" />
        <input
          placeholder="Search for products"
          type="text"
          className="w-full bg-transparent px-3 py-2 outline-none rounded-md focus:ring-0 placeholder:font-thin"
          style={{ border: "none", boxShadow: "none" }}
        />
      </div>
    </div>
  );
}

export default SearchBarComponent;
