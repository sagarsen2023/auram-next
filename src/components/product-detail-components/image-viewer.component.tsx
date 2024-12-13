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
    <div>
      <div className="relative w-full h-auto aspect-square">
        <Image
          src={imageValidator(currentImage?.path)}
          alt="product-image"
          fill
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        {medias.map((media) => (
          <div
            key={media._id}
            className="cursor-pointer relative w-full h-auto aspect-square"
            onClick={() => setCurrentImage(media)}
          >
            <Image
              src={imageValidator(media.path)}
              alt="product-image"
              fill
              className={`object-cover w-20 h-20 rounded-md p-0.5 border ${
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
