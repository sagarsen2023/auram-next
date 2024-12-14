import React from "react";

import CollectionsPageComponent from "@/components/collections-page/collection-page.component";
function Page() {
  return (
    <>
      <div className="max-w-6xl mx-auto pt-6">
        <h1
          className="relative py-10 text-center text-[34px] font-normal 
           before:absolute before:bottom-[22px] before:left-[calc(50%-50px)] 
           before:block before:h-0.5 before:w-[80px] before:bg-black
           after:absolute after:bottom-[15px] after:right-[calc(50%-50px)] 
           after:block after:h-0.5 after:w-[80px] after:bg-black"
        >
          Collections
        </h1>
      </div>
      <CollectionsPageComponent />
    </>
  );
}

export default Page;
