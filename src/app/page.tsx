import React from "react";
import BannerComponent from "@/components/home-components/banner.component";
import WelcomeLoader from "@/components/welcome-loader.component";
import CollectionComponent from "@/components/home-components/collection.component";

function Page() {
  return (
    <div>
      <WelcomeLoader />
      <BannerComponent />
      <CollectionComponent />
    </div>
  );
}

export default Page;
