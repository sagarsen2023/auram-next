import React, { Suspense } from "react";
import { getItemParams, getItems } from "../utils";
import DefaultLoaderComponent from "@/components/default-loader.component";
import ProductCardComponent from "@/components/cards/product-card.component";

async function Page({ params }: { params: { slug?: string[] } }) {
  const { slug } = await params;
  const itemParams = getItemParams({ slug });
  console.log(itemParams);
  const itemData = await getItems();
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center -mt-10">
          <DefaultLoaderComponent />
        </div>
      }
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {itemData && itemData.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {itemData.map((item) => (
              <ProductCardComponent key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div>No Products to display</div>
        )}
      </div>
    </Suspense>
  );
}

export default Page;
