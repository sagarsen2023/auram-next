import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import DefaultLoaderComponent from "@/components/ui/default-loader.component";
import React, { Suspense } from "react";

async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const slug = (await params).slug;
  console.log("slug", slug);
  const breadcrumbs: BreadCrumbComponentProps[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Wishlist",
    },
  ];
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center -mt-10">
          <DefaultLoaderComponent />
        </div>
      }
    >
      <div className="base-page">
        {/* BreadCrumb */}
        <BreadCrumbComponent breadCrumbItems={breadcrumbs} />
      </div>
    </Suspense>
  );
}

export default Page;
