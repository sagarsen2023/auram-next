import React from "react";
import BannerComponent from "@/components/home-components/banner.component";
import WelcomeLoader from "@/components/welcome-loader.component";
import CollectionComponent from "@/components/home-components/collection.component";
import NewArrivalComponent from "@/components/home-components/new-arrival.component";
import FeaturedItemComponent from "@/components/home-components/featured-items.component";
import ShippingInfoComponent from "@/components/shipping-info.component";
import ConnectWithUsComponent from "@/components/home-components/connect-with-us.component";

function Page() {
  const sectionClassNames = "max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8";

  return (
    <div>
      {/* This loader will display for the first time */}
      <WelcomeLoader />

      {/* Banner component with API integration */}
      <BannerComponent />

      {/* Collection */}
      <div className={`${sectionClassNames} bg-gray-50`}>
        <CollectionComponent />
      </div>

      {/* New Arrival and Featured Items */}
      <div className={`${sectionClassNames} space-y-5 pb-20`}>
        <NewArrivalComponent />
        <FeaturedItemComponent />
      </div>

      {/* Shipping Info */}
      <ShippingInfoComponent />

      {/* Connect with us */}
      <div className={sectionClassNames}>
        <ConnectWithUsComponent />
      </div>
    </div>
  );
}

export default Page;
