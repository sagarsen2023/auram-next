import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

export const LeftButtonComponent = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick} className="rounded-full bg-white border-2 p-4 ">
      <FaAngleLeft />
    </button>
  );
};

export const RightButtonComponent = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className="rounded-full bg-white border-2 p-4" onClick={onClick}>
      <FaAngleLeft className="rotate-180" />
    </button>
  );
};
