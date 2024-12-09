"use client";
import { isFirstVisitAtom } from "@/hooks/useJotai";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import welcome from "../../public/images/welcome.png";
import auramLogo from "../../public/images/auram-logo.png"

export default function WelcomeLoader() {
  const [isFirstVisit, setIsFirstVisit] = useAtom(isFirstVisitAtom);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isFirstVisit) {
      // Add 'no-scroll' class to the body
      document.body.classList.add("no-scroll");

      const animationTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, 2200);

      const removalTimeout = setTimeout(() => {
        setIsFirstVisit(false);
        document.body.classList.remove("no-scroll"); // Remove 'no-scroll'
      }, 3200);

      return () => {
        clearTimeout(animationTimeout);
        clearTimeout(removalTimeout);
        document.body.classList.remove("no-scroll");
      };
    }
  }, [isFirstVisit, setIsFirstVisit]);

  if (!isFirstVisit) return null;

  return (
    <section
      className={`fixed inset-0 h-screen w-screen flex items-center justify-center bg-white bg-cover bg-center z-[999999] ${
        isAnimating
          ? "-translate-y-full transition-transform duration-500 ease-in-out"
          : ""
      }`}
      style={{ backgroundImage: `url(${welcome.src})` }}
    >
      <div className="absolute inset-0 bg-pink-100 opacity-0 animate-increase-width z-[99999]"></div>
      <div className="relative p-6 text-center z-[1000000]">
        <div className="mb-10 w-48 sm:w-72 lg:w-full h-auto aspect-square">
          <Image src={auramLogo} alt="aurum" width={350} height={350} />
        </div>
      </div>
    </section>
  );
}
