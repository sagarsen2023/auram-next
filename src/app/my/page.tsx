import React from "react";

import SidebarComponent from "@/components/dashboard-components/sidebar/sidebar.component";
import MyAddresses from "@/components/dashboard-components/address/addresses.component";
import MyProfile from "@/components/dashboard-components/profile/profile.component";
import DeleteAccount from "@/components/dashboard-components/delete-account/delete-account.component";

const DashBoard = () => {
  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="px-6 py-6 w-full lg:max-w-8xl mx-auto">
          <div className="flex min-w-screen flex-wrap gap-6 ">
            <SidebarComponent />
            <div className="flex-1 bg-white p-6 border border-gray-200 space-y-4">
              <MyAddresses />
              <MyProfile />
              <DeleteAccount />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
