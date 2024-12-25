import imageValidator from "@/utils/image-validator";
import React from "react";
import getRandomTagline from "@/constants/jewelry-taglines";
import { ItemModel } from "@/models/common/item.model";

function CollectionHeaderComponent({ itemData }: { itemData?: ItemModel }) {
  if (!itemData) return null;
  const bgImage = imageValidator(itemData.thumbnail?.path ?? "");
  const randomTagLine = getRandomTagline();
  return (
    <div
      className="w-full h-36 sm:h-44 lg:h-64 xl:h-72 rounded-lg bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-start flex-col gap-3 w-full h-full px-6 lg:px-12 text-white top-0 left-0 rounded-lg bg-black/30">
        <h1 className="font-[500] text-center text-2xl lg:text-3xl">
          Our Elegant Products
        </h1>
        <p className="text-center lg:hidden">{randomTagLine}</p>
        <div
          className="text-left hidden lg:block lg:w-2/3"
          dangerouslySetInnerHTML={{ __html: itemData.itemDescription ?? "" }}
        />
      </div>
    </div>
  );
}

export default CollectionHeaderComponent;
