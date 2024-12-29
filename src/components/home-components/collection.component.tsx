"use client";
import React, { useEffect, useState } from "react";
import DefaultLoaderComponent from "../ui/default-loader.component";
import { collectionAPI } from "@/services/item.service";
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
      setCollectionData(response?.data ?? []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCollection();
  }, []);

  if (loading)
    return (
      <div className="flex w-full justify-center items-center h-screen -mt-20">
        <DefaultLoaderComponent />
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="pt-10 lg:pt-16 lg:pb-5 text-center">
        <p className="text-sm lg:text-xl tracking-[2px] md:tracking-[5px]">WE&apos;VE GOT EVERYTHING YOU NEED</p>
        <p className="text-xl lg:text-3xl font-[600] mt-2 tracking-[2px]">
          DISCOVER OUR COLLECTION
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 4,
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
        {collectionData?.map((collection) => (
          <SwiperSlide key={collection._id}>
            <CollectionCardComponent collection={collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CollectionComponent;
