"use client";

import MediaResponse from "@/models/common/media-response.model";
import imageValidator from "@/utils/image-validator";
import Image from "next/image";
import React, { useState } from "react";

function ImageViewerComponent({ medias }: { medias: MediaResponse[] }) {
  const [currentImage, setCurrentImage] = useState<MediaResponse | null>(
    medias[0]
  );
  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-10">
      {/* Main Image Part */}
      <div className="relative w-full h-auto aspect-square">
        <Image
          src={imageValidator(currentImage?.path)}
          alt="product-image"
          fill
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      {/* All Images Part */}
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:w-56 lg:h-auto">
        {medias.map((media) => (
          <div
            key={media._id}
            className="cursor-pointer relative w-full aspect-square lg:aspect-auto"
            onClick={() => setCurrentImage(media)}
          >
            <Image
              src={imageValidator(media.path)}
              alt="product-image"
              fill
              className={`object-cover rounded-md p-0.5 border ${
                media._id === currentImage?._id
                  ? "border-primary"
                  : "border-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageViewerComponent;
