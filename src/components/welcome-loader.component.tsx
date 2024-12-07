"use client";
import { isFirstVisitAtom } from "@/hooks/useJotai";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import welcome from "../../public/images/welcome.png";
import auramLogoWithText from "../../public/images/auram-logo-with-text.webp";

export default function WelcomeLoader() {
  const [isFirstVisit, setIsFirstVisit] = useAtom(isFirstVisitAtom);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isFirstVisit) {
      const animationTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, 2200);

      const removalTimeout = setTimeout(() => {
        setIsFirstVisit(false);
      }, 3200);

      return () => {
        clearTimeout(animationTimeout);
        clearTimeout(removalTimeout);
      };
    }
  }, [isFirstVisit, setIsFirstVisit]);

  if (!isFirstVisit) return null;

  return (
    <section
      className={`-mt-16 lg:-mt-20 h-screen w-screen flex items-center justify-center bg-white bg-cover bg-center relative z-[999999] no-doc-scroll ${
        isAnimating ? "-translate-y-full transition-all duration-500" : ""
      }`}
      style={{ backgroundImage: `url(${welcome.src})` }}
    >
      <div className="absolute w-full h-full bg-pink-100 opacity-0 animate-increase-width z-[9999]"></div>
      <div className="relative p-6 text-center z-[99999]">
        <div className="mb-10">
          <Image src={auramLogoWithText} alt="aurum" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
