import React, { Suspense } from "react";
import { fetchItemDetails } from "../utils";
import ImageViewerComponent from "@/components/product-detail-components/image-viewer.component";
import ItemDetailsAndPricing from "@/components/product-detail-components/item-details-and-pricing.component";
import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import DefaultPageLoaderComponent from "@/components/ui/default-page-loader.component";
import AddToCartSectionComponent from "@/components/product-detail-components/add-to-cart-section.component";
import StoneAndPricingDetailsComponent from "@/components/product-detail-components/stone-and-pricing-details.component";
import MediaResponse from "@/models/common/media-response.model";
import TalkToAnExpertComponent from "@/components/product-detail-components/talk-to-expert.component";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const itemData = (await fetchItemDetails(id)).data;
  const {
    stoneDetails,
    finalPrice,
    withGstPrice,
    withoutGstPrice,
    makingCharge,
  } = itemData;
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
  const allItemImages: MediaResponse[] = [
    ...(itemData?.thumbnail ? [itemData.thumbnail] : []),
    ...(itemData?.itemMedia ?? []),
    ...(itemData?.hoverImage ? [itemData.hoverImage] : []),
  ];
  return (
    <Suspense fallback={<DefaultPageLoaderComponent />}>
      <div className={"base-page"}>
        <BreadCrumbComponent breadCrumbItems={breadcrumbs} />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
          {/* Component to view images */}
          <div>
            <ImageViewerComponent medias={allItemImages ?? []} />
          </div>
          <div className="space-y-4">
            {/* Item details and pricing */}
            <ItemDetailsAndPricing item={itemData} />
            {/* Item Add to cart */}
            <AddToCartSectionComponent itemId={itemData._id} />
          </div>
        </div>
        {/* Stone Pricing Details */}
        <div className="w-full my-2 lg:my-5 space-y-4 lg:space-y-8">
          {stoneDetails && (
            <StoneAndPricingDetailsComponent
              makingCharge={makingCharge ?? 0}
              finalPrice={finalPrice ?? 0}
              withGstPrice={withGstPrice ?? 0}
              withoutGstPrice={withoutGstPrice ?? 0}
              stoneDetails={stoneDetails}
            />
          )}
          <TalkToAnExpertComponent />
        </div>
        {/* Talk to an expert */}
      </div>
    </Suspense>
  );
}

export default Page;
