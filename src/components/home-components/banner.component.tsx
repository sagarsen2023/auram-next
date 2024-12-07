"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  A11y,
  Autoplay,
  Navigation,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import { BannerModel } from "@/models/banner/banner-response.model";
import homeAPI from "@/services/home.service";
import Image from "next/image";
import { IMAGE_URL } from "@/services/queryUrls";
import { useRouter } from "next/navigation";

function BannerComponent() {
  const router = useRouter();
  const [bannerData, setBannerData] = useState<BannerModel[]>([]);
  const [delayAnimation, setDelayAnimation] = useState(10000);

  useEffect(() => {
    setTimeout(() => {
      setDelayAnimation(3000);
    }, 5000);
  });

  useEffect(() => {
    homeAPI
      .fetchBanner()
      .then((response) => {
        setBannerData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={1}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={false}
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
        Autoplay,
      ]}
      autoplay={{ delay: delayAnimation }}
      grabCursor={false}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      {bannerData.map((banner, index) => (
        <SwiperSlide key={banner._id}>
          <div className={`relative w-full h-screen flex items-center`}>
            <Image
              src={`${IMAGE_URL}/${banner.image.path}`}
              alt="Picture of the author"
              fill
              className="object-cover z-10"
            />
            <div
              className={`absolute z-20 w-full h-full flex items-center text-black ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <div className="text-center">
                <div
                  className={`w-full h-full mb-20 flex ${
                    index % 2 === 0
                      ? "justify-end pr-80"
                      : "justify-start pl-80"
                  }`}
                >
                  <div className="text-center w-1/3 flex flex-col gap-2 font-[300] items-center">
                    <h1 className="text-[100px] leading-[100px]">
                      {banner.title}
                    </h1>
                    <p className="text-xl">{banner.subTitle}</p>
                    <p className="text-[22px] leading-relaxed">
                      {banner.description}
                    </p>
                    <button
                      className="w-fit px-3 py-2 my-2 hover:border-t hover:border-b hover:border-gray-600 transition-all duration-150"
                      onClick={() => {
                        router.push(banner.link);
                      }}
                    >
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerComponent;
