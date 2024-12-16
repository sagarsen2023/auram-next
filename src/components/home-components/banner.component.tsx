"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import DefaultPageLoaderComponent from "../ui/default-page-loader.component";

function BannerComponent() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [bannerData, setBannerData] = useState<BannerModel[]>([]);

  useEffect(() => {
    setLoading(true);
    homeAPI
      .fetchBanner()
      .then((response) => {
        setBannerData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DefaultPageLoaderComponent />;
  }

  return (
    <div className="relative bg-white">
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
        autoplay={{ delay: 3000 }}
        // grabCursor={false}
        loop={true}
        // scrollbar={{ draggable: true }}
      >
        {bannerData?.map((banner, index) => (
          <SwiperSlide key={banner._id}>
            <div
              className={`relative w-full h-[23rem] md:h-[30rem] lg:h-screen flex items-center`}
            >
              <Image
                src={`${IMAGE_URL}/${banner.image.path}`}
                alt="Picture of the author"
                fill
                className="object-cover z-10"
              />
              <div
                className={`hidden lg:absolute z-20 w-full h-full lg:flex items-center text-black ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`w-full h-full mb-20 flex ${
                      index % 2 === 0
                        ? "justify-end lg:pr-64 xl:pr-72"
                        : "justify-start lg:pl-64 xl:pl-72"
                    }`}
                  >
                    <div className="text-center lg:w-1/3 flex flex-col gap-2 font-[300] items-center">
                      <h1 className="lg:text-[2rem] xl:text-[3rem]">
                        {banner.title}
                      </h1>
                      <p className="text-lg xl:text-xl">{banner.subTitle}</p>
                      <p className="text-lg xl:text-xl leading-relaxed">
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
            <div className="text-center space-y-2 py-3 lg:hidden">
              <p className="text-3xl">{banner.title}</p>
              <p className="text-lg font-[300]">{banner.subTitle}</p>
              <p className="">{banner.description}</p>
              <button
                className="w-fit px-3 py-2 my-2 hover:border-t hover:border-b hover:border-gray-600 transition-all duration-150"
                onClick={() => {
                  router.push(banner.link);
                }}
              >
                {banner.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerComponent;
