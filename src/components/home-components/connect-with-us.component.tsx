import React from "react";
import contactUsImage from "../../../public/images/contact us.png";
import Image from "next/image";

function ConnectWithUsComponent() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-4">
      <div className="relative w-80 sm:w-96 md:w-[26rem] lg:w-[35rem] h-auto aspect-square">
        <Image
          src={contactUsImage}
          alt="Contact Us"
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center lg:w-1/2">
        <p className="text-lg font-[700] lg:text-4xl lg:leading-[50px]">
          CREATES LASTING MEMORIES OF EACH OCCASION
        </p>
        <p className="mt-3 text-lg lg:text-xl lg:leading-relaxed text-balance">
          Get instant helpful resources about anything on the go, easily
          implement secure money transfer solutions, boost your daily
          efficiency, connect to other app users and create your own Travosy
          network, and much more with just a few taps. commodo consequat. Duis
          aute irure.
        </p>
        <button className="px-5 mt-5 py-2 bg-gray-600 text-gray-200 hover:bg-primary hover:shadow-md hover:scale-105 transition-all duration-300">
          Connect with us
        </button>
      </div>
    </div>
  );
}

export default ConnectWithUsComponent;
