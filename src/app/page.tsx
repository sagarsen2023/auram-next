import React from "react";
import BannerComponent from "@/components/home-components/banner.component";
import WelcomeLoader from "@/components/welcome-loader.component";
import CollectionComponent from "@/components/home-components/collection.component";

function Page() {
  return (
    <div>
      {/* This loader will display fpr the first time */}
      <WelcomeLoader />

      {/* Banner component with API integration */}
      <BannerComponent />

      {/* Collection and Items */}
      <div className="flex flex-col justify-center items-center w-full bg-gray-50">
        <div className="p-2 w-full lg:max-w-7xl flex flex-col">
          <CollectionComponent />
        </div>
      </div>
    </div>
  );
}

export default Page;
