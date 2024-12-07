"use client";
import React, { useEffect, useState } from "react";
import DefaultLoaderComponent from "../default-loader.component";
import { collectionAPI } from "@/services/product.service";
import { CollectionItem } from "@/models/product-category-collections/collection.model";
import CollectionCardComponent from "../cards/collection-card.component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
  Autoplay,
} from "swiper/modules";

function CollectionComponent() {
  const [loading, setLoading] = useState(true);
  const [collectionData, setCollectionData] = useState<CollectionItem[]>([]);
  const fetchCollection = async () => {
    try {
      const response = await collectionAPI.getAllCollections();
      setCollectionData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCollection();
  }, []);

  if (loading) return <DefaultLoaderComponent />;
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="pt-10 text-center">
        <p className="text-sm">WE&apos;VE GOT EVERYTHING YOU NEED</p>
        <p className="text-xl font-[700] mt-2">DISCOVER OUR COLLECTION</p>
      </div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 1,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
          1280: {
            width: 1280,
            slidesPerView: 3,
          },
          1366: {
            width: 1366,
            slidesPerView: 4,
          },
          1680: {
            width: 1680,
            slidesPerView: 5,
          },
          1920: {
            width: 1920,
            slidesPerView: 6,
          },
        }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCreative,
          Autoplay,
        ]}
        autoplay={{ delay: 4000 }}
        className="w-full"
        loop
      >
        {collectionData.map((collection) => (
          <SwiperSlide key={collection._id}>
            <CollectionCardComponent collection={collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CollectionComponent;
