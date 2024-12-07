import { CollectionItem } from "@/models/product-category-collections/collection.model";
import imageValidator from "@/utils/image-validator";
import Image from "next/image";
import React from "react";

function CollectionCardComponent({
  collection,
}: {
  collection: CollectionItem;
}) {
  return (
    <div>
      <div className="relative w-full h-auto aspect-square">
        <Image
          src={imageValidator(collection.verticalImage?.path)}
          alt="collection image"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default CollectionCardComponent;
