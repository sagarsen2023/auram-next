import React from "react";
import { MdHourglassEmpty } from "react-icons/md";

function NoDataComponent() {
  return (
    <div className="w-full text-center px-5 py-10 border border-gray-200 rounded-sm mt-2 mb-4 bg-slate-50">
      <div>
        <MdHourglassEmpty className="text-5xl text-secondary mx-auto " />
      </div>
      <h3 className="font-semibold my-2 text-2xl">No data to display</h3>
      <p className="text-gray-600 text-md">
        Sorry. No data found for the page or your action.
      </p>
    </div>
  );
}

export default NoDataComponent;
