import React from "react";
import SidebarComponent from "@/components/dashboard-components/sidebar/sidebar.component";
import MyAddresses from "@/components/dashboard-components/address/addresses.component";
import MyProfile from "@/components/dashboard-components/profile/profile.component";
import DeleteAccount from "@/components/dashboard-components/delete-account/delete-account.component";
import DashboardComponent from "@/components/dashboard-components";

const DashBoard = async ({
  params,
}: {
  params: Promise<{
    slug?: ["profile" | "addresses" | "delete-account" | "dashboard" | ""];
  }>;
}) => {
  const { slug } = await params;

  return (
    <div className="w-full bg-gray-50">
      <div className="px-6 py-6 w-full lg:max-w-8xl mx-auto">
        <div className="flex min-w-screen flex-wrap gap-6 ">
          <SidebarComponent activeComponentKey={slug ? slug[0] : "dashboard"} />
          <div className="flex-1 bg-white p-6 border border-gray-200 space-y-4">
            {(!slug || slug[0] === "dashboard") && <DashboardComponent />}
            {slug && slug[0] === "profile" && <MyProfile />}
            {slug && slug[0] === "addresses" && <MyAddresses />}
            {slug && slug[0] === "delete-account" && <DeleteAccount />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
