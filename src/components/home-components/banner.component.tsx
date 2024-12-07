"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function BannerHomePage({ bannerData }: any) {
  const [delayanimation, setDelayAnimation] = useState(10000);
  useEffect(() => {
    setTimeout(() => {
      setDelayAnimation(3000);
    }, 5000);
  });

  return (
    <div className="flex flex-wrap items-center relative min-h-[calc(100vh-100px)]">
      <div className="flex-1 p-4">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: delayanimation }}
          effect="coverflow"
        >
          {bannerData.map((banner: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-b from-gray-700 to-gray-300 p-5 min-h-screen bg-cover">
                <h2 className="text-black text-6xl capitalize font-light">
                  {banner.title}
                </h2>
                <h5 className="text-black uppercase font-light tracking-wide">
                  {banner.subtitle}
                </h5>
                <p className="text-black text-lg font-light tracking-wide mt-6 leading-relaxed">
                  {banner.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex-1 p-4">{/* Add any additional content here */}</div>
    </div>
  );
}
