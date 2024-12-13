import React from "react";
import DefaultLoaderComponent from "./default-loader.component";

function DefaultPageLoaderComponent() {
  return (
    <div className="w-full flex flex-col justify-center h-[95vh] items-center gap-3">
      <DefaultLoaderComponent />
      <p>
        <span className="animate-pulse font-bold">Loading...</span>
      </p>
    </div>
  );
}

export default DefaultPageLoaderComponent;
