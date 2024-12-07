import React from "react";
import BannerComponent from "@/components/home-components/banner.component";
import WelcomeLoader from "@/components/welcome-loader.component";

function Page() {
  return (
    <div>
      <WelcomeLoader />
      <BannerComponent />
    </div>
  );
}

export default Page;
