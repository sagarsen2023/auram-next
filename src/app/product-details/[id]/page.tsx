import { basePageClassNames } from "@/constants/universal-css";
import React, { Suspense } from "react";
import { fetchItemDetails } from "../utils";
import ImageViewerComponent from "@/components/product-detail-components/image-viewer.component";
import ItemDetailsAndPricing from "@/components/product-detail-components/item-details-and-pricing.component";
import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import DefaultPageLoaderComponent from "@/components/ui/default-page-loader.component";
import AddToCartSectionComponent from "@/components/product-detail-components/add-to-cart-section.component";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const itemData = (await fetchItemDetails(id)).data;
  console.log("itemData", itemData);
  const breadcrumbs: BreadCrumbComponentProps[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: itemData.itemName,
    },
  ];
  return (
    <Suspense fallback={<DefaultPageLoaderComponent />}>
      <div className={`${basePageClassNames}`}>
        <BreadCrumbComponent breadCrumbItems={breadcrumbs} />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
          {/* Component to view images */}
          <ImageViewerComponent medias={itemData.itemMedia ?? []} />
          <div className="space-y-4">
            {/* Item details and pricing */}
            <ItemDetailsAndPricing item={itemData} />
            {/* Item Add to cart */}
            {/* TODO: Send item data to manage cart */}
            <AddToCartSectionComponent />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Page;
