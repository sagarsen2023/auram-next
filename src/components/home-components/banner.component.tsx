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
        // autoplay={{ delay: 3000 }}
        loop={true}
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
                        ? "justify-end lg:pr-20 xl:pr-30"
                        : "justify-start lg:pl-20 xl:pl-30"
                    }`}
                  >
                    <div className="text-center lg:w-2/5 flex flex-col gap-2 font-[300] items-center">
                      <h1 className="lg:text-[3rem] xl:text-[3rem]">
                        {banner.title}
                      </h1>

                      {banner.subTitle && (
                        <p className="text-lg xl:text-xl tracking-wide">{banner.subTitle}</p>
                      )}

                      <p className="text-lg xl:text-xl">
                        <span className="leading-[1.8]">
                          {banner.description}
                        </span>
                      </p>
                      <button
                        className="tracking-[3px] text-white cursor-pointer text-lg font-normal leading-[45px] relative no-underline uppercase transition-all duration-200 inline-block btn-2 hover:no-underline group mt-4"
                        onClick={() => {
                          router.push(banner.link);
                        }}
                      >
                        <p className="flex items-center">
                          <small style={{ color: "#000000" }}>
                            {banner.buttonText}
                          </small>{" "}
                          <svg
                            className="transition-all duration-200 ml-[5px] "
                            width="23"
                            height="8"
                            viewBox="0 0 23 8"
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.48657 3.33917C1.21043 3.33917 0.986572 3.56303 0.986572 3.83917C0.986572 4.11531 1.21043 4.33917 1.48657 4.33917V3.33917ZM22.4416 4.19273C22.6368 3.99746 22.6368 3.68088 22.4416 3.48562L19.2596 0.303638C19.0643 0.108376 18.7477 0.108376 18.5525 0.303638C18.3572 0.498901 18.3572 0.815483 18.5525 1.01075L21.3809 3.83917L18.5525 6.6676C18.3572 6.86286 18.3572 7.17944 18.5525 7.37471C18.7477 7.56997 19.0643 7.56997 19.2596 7.37471L22.4416 4.19273ZM1.48657 4.33917H22.088V3.33917H1.48657V4.33917Z"
                              fill="#000000"
                            />
                          </svg>
                        </p>

                        <span
                          className="transition-all duration-200 h-[1px] absolute top-[0] w-0 left-0 group-hover:w-full"
                          style={{ backgroundColor: "#000000" }}
                        ></span>
                        <span
                          className="transition-all duration-200 h-[1px] absolute bottom-[0] w-0 left-0 group-hover:w-full"
                          style={{ backgroundColor: "#000000" }}
                        ></span>
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
