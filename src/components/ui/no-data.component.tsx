import React from "react";
import { MdHourglassEmpty } from "react-icons/md";

interface ModalProps {
  title?: string;
  description?: string;
}

const NoDataComponent: React.FC<ModalProps> = ({
  title = "No data to display",
  description = "Sorry. No data found for the page or your action.",
}) => {
  return (
    <div className="w-full text-center px-5 py-10 border border-gray-200 rounded-sm mt-2 mb-4 bg-slate-50">
      <div>
        <MdHourglassEmpty className="text-5xl text-secondary mx-auto " />
      </div>
      <h3 className="font-semibold my-2 text-2xl">{title}</h3>
      <p className="text-gray-600 text-md">{description}</p>
    </div>
  );
};

export default NoDataComponent;
