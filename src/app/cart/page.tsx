import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import React from "react";

function Page() {
  const breadcrumbs: BreadCrumbComponentProps[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cart",
    },
  ];
  return (
    <div className={`base-page`}>
      <BreadCrumbComponent breadCrumbItems={breadcrumbs} />
    </div>
  );
}

export default Page;
