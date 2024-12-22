import React from "react";
import BannerComponent from "@/components/home-components/banner.component";
import WelcomeLoader from "@/components/ui/welcome-loader.component";
import CollectionComponent from "@/components/home-components/collection.component";
import NewArrivalComponent from "@/components/home-components/new-arrival.component";
import FeaturedItemComponent from "@/components/home-components/featured-items.component";
import ShippingInfoComponent from "@/components/home-components/shipping-info.component";
import ConnectWithUsComponent from "@/components/home-components/connect-with-us.component";

function Page() {
  return (
    <div>
      {/* This loader will display for the first time */}
      <WelcomeLoader />

      {/* Banner component with API integration */}
      <BannerComponent />

      {/* Collection */}
      <div className="w-full flex-col items-center bg-gray-50">
        <div className={`base-section`}>
          <CollectionComponent />
        </div>
      </div>

      {/* New Arrival and Featured Items */}
      <div className={`base-section space-y-5 pb-20`}>
        <NewArrivalComponent />
        <FeaturedItemComponent />
      </div>

      {/* Shipping Info */}
      <ShippingInfoComponent />

      {/* Connect with us */}
      <div className="base-section">
        <ConnectWithUsComponent />
      </div>
    </div>
  );
}

export default Page;
