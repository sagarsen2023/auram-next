import { CollectionItem } from "@/models/product-category-collections/collection.model";
import imageValidator from "@/utils/image-validator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CollectionCardComponent({
  collection,
}: {
  collection: CollectionItem;
}) {
  return (
    <Link href={`/products/collections=${collection._id}`}>
      <div className="py-6">
        <div className="relative w-full h-[28rem] lg:h-[23rem] aspect-square rounded-lg hover:shadow-lg hover:bg-white transition-all duration-300">
          <Image
            src={imageValidator(collection.verticalImage?.path)}
            alt="collection image"
            fill
            className="p-4 object-cover peer"
          />
          <button className="absolute bg-white py-4 bottom-0 shadow-lg left-1/2 -translate-x-1/2 w-56 text-center z-0 peer-hover:bottom-8 transition-all duration-500">
            {collection.title}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default CollectionCardComponent;
