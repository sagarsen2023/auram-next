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
      const timeout = setTimeout(() => {
        setIsAnimating(true); // Start slide-up animation
        setTimeout(() => setIsFirstVisit(false), 1000); // Remove after animation ends
      }, 2200);

      return () => clearTimeout(timeout);
    }
  }, [isFirstVisit, setIsFirstVisit]);

  if (!isFirstVisit) return null;

  return (
    <section
      className={`h-screen w-screen flex items-center justify-center bg-white bg-cover bg-center absolute z-[99999] no-doc-scroll ${
        isAnimating ? "animate-slide-up" : ""
      }`}
      style={{ backgroundImage: `url(${welcome.src})` }}
    >
      <div className="absolute w-full h-full bg-pink-100 opacity-0 animate-increase-width z-3"></div>
      <div className="relative p-6 text-center z-5">
        <div className="mb-10">
          <Image src={auramLogoWithText} alt="aurum" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
