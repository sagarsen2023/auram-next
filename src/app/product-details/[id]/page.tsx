import { basePageClassNames } from "@/constants/universal-css";
import React, { Suspense } from "react";
import { fetchItemDetails } from "../utils";
import DefaultLoaderComponent from "@/components/ui/default-loader.component";
import ImageViewerComponent from "@/components/product-detail-components/image-viewer.component";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const itemData = (await fetchItemDetails(id)).data;
  console.log("itemData", itemData);
  return (
    <Suspense fallback={<DefaultLoaderComponent />}>
      <div className={`${basePageClassNames}`}>
        <ImageViewerComponent medias={itemData.itemMedia ?? []} />
      </div>
      ;
    </Suspense>
  );
}

export default Page;
