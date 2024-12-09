import React from "react";

function DualLineComponent() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 group">
      <div className="bg-primary w-24 h-0.5 rounded-lg mr-5 group-hover:translate-x-5 duration-200" />
      <div className="bg-primary w-24 h-0.5 rounded-lg ml-5 group-hover:-translate-x-5 duration-200" />
    </div>
  );
}

export default DualLineComponent;
