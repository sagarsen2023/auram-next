import FilterMenuComponent from "@/components/sort-filter-components/filter-menu.component";
import SortByMenuComponent from "@/components/sort-filter-components/sort-by-menu.component";
import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import DefaultLoaderComponent from "@/components/ui/default-loader.component";
// import { getAuthToken } from "@/utils/cookie-store";
import { getItemParams, getSortFilterOptions } from "@/utils/sort-filter";
import React, { Suspense } from "react";

async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const slug = (await params).slug;
  const { sortOptions, filterOptions } = await getSortFilterOptions();
  // const token = await getAuthToken();
  const itemParams = getItemParams({ slug });
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
        {/* Sort and filter Menu */}
        <div className="flex justify-between lg:hidden items-center w-full my-3">
          {filterOptions && filterOptions.length > 0 && (
            <FilterMenuComponent
              sortFor="/wishlist"
              currentParams={itemParams}
              filterOptions={filterOptions}
            />
          )}
          {sortOptions && sortOptions.length > 0 && (
            <SortByMenuComponent
              sortFor="/wishlist"
              currentParams={itemParams}
              sortOptions={sortOptions[0].values}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
