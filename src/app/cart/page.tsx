import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import { basePageClassNames } from "@/constants/universal-css";
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
    <div className={`${basePageClassNames}`}>
      <BreadCrumbComponent breadCrumbItems={breadcrumbs} />
    </div>
  );
}

export default Page;
