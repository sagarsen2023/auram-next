import React from "react";
import BannerComponent from "@/components/home-components/banner.component";
import WelcomeLoader from "@/components/welcome-loader.component";
import CollectionComponent from "@/components/home-components/collection.component";
import NewArrivalComponent from "@/components/home-components/new-arrival.component";
import FeaturedItemComponent from "@/components/home-components/featured-items.component";
import ShippingInfoComponent from "@/components/shipping-info.component";
import ConnectWithUsComponent from "@/components/home-components/connect-with-us.component";

function Page() {
  const sectionClassNames = "flex flex-col items-center w-full pb-5 lg:pb-14";
  const containerClassNames = "p-2 w-full lg:max-w-8xl";

  return (
    <div>
      {/* This loader will display for the first time */}
      <WelcomeLoader />

      {/* Banner component with API integration */}
      <BannerComponent />

      {/* Collection */}
      <div className={`${sectionClassNames} bg-gray-50`}>
        <div className={containerClassNames}>
          <CollectionComponent />
        </div>
      </div>

      <div className={sectionClassNames}>
        <div className={`${containerClassNames} flex flex-col gap-5`}>
          <NewArrivalComponent />
          <FeaturedItemComponent />
        </div>
      </div>

      <ShippingInfoComponent />

      <div className={sectionClassNames}>
        <div className={containerClassNames}>
          <ConnectWithUsComponent />
        </div>
      </div>
    </div>
  );
}

export default Page;
