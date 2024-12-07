import React from "react";
import BannerComponent from "@/components/home-components/banner.component";
import WelcomeLoader from "@/components/welcome-loader.component";
import CollectionComponent from "@/components/home-components/collection.component";
import NewArrivalComponent from "@/components/home-components/new-arrival.component";

function Page() {
  return (
    <div>
      {/* This loader will display fpr the first time */}
      <WelcomeLoader />

      {/* Banner component with API integration */}
      <BannerComponent />

      {/* Collection */}
      <div className="flex flex-col justify-center items-center w-full bg-gray-50 pb-5 lg:pb-14">
        <div className="p-2 w-full lg:max-w-8xl">
          <CollectionComponent />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full pb-5 lg:pb-14">
        <div className="p-2 w-full lg:max-w-8xl flex flex-col">
          <NewArrivalComponent />
        </div>
      </div>
    </div>
  );
}

export default Page;
