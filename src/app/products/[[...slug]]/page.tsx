import React, { Suspense } from "react";
import {
  getItemParams,
  getSortFilterOptions,
} from "@/utils/sort-filter";
import DefaultLoaderComponent from "@/components/ui/default-loader.component";
import SortByMenuComponent from "@/components/sort-filter-components/sort-by-menu.component";
import FilterMenuComponent from "@/components/sort-filter-components/filter-menu.component";
import CollectionHeaderComponent from "@/components/product-listing-components/collection-header.component";
import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import ProductListingComponent from "@/components/product-listing-components";
import { getAuthToken } from "@/utils/cookie-store";
import { getItems } from "../utils";

async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const slug = (await params).slug;
  const itemParams = getItemParams({ slug });
  const itemData = await getItems({
    params: itemParams,
  });
  const { sortOptions, filterOptions } = await getSortFilterOptions();
  const token = await getAuthToken();

  const breadCrumbs: BreadCrumbComponentProps[] = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
  ];

  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center -mt-10">
          <DefaultLoaderComponent />
        </div>
      }
    >
      <div className={`base-page space-y-2`}>
        {/* BreadCrumb */}
        <BreadCrumbComponent breadCrumbItems={breadCrumbs} />

        {/* Collection details with image part */}
        <CollectionHeaderComponent itemData={itemData?.data?.[0]} />

        {/* Sort and filter Menu */}
        <div className="flex justify-between lg:hidden items-center w-full my-3">
          {filterOptions && filterOptions.length > 0 && (
            <FilterMenuComponent
              sortFor="/products"
              currentParams={itemParams}
              filterOptions={filterOptions}
            />
          )}
          {sortOptions && sortOptions.length > 0 && (
            <SortByMenuComponent
              sortFor="/products"
              currentParams={itemParams}
              sortOptions={sortOptions[0].values}
            />
          )}
        </div>

        {/* All Products Part */}
        <ProductListingComponent
          token={token}
          totalCount={itemData?.totalCount ?? 0}
          itemParams={itemParams}
          sortOptions={sortOptions}
          filterOptions={filterOptions}
          initialItemData={itemData?.data ?? []}
        />
      </div>
    </Suspense>
  );
}

export default Page;
