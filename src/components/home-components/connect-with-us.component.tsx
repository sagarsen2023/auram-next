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
        <h3 className="text-md font-[600] lg:text-3xl lg:leading-[50px] tracking-wider">
          CREATES LASTING MEMORIES OF EACH OCCASION
        </h3>
        <p className="mt-3 text-lg lg:text-xl lg:leading-relaxed text-balance font-light">
          Get instant helpful resources about anything on the go, easily
          implement secure money transfer solutions, boost your daily
          efficiency, connect to other app users and create your own Travosy
          network, and much more with just a few taps. commodo consequat. Duis
          aute irure.
        </p>
        <button className="px-10 mt-5 py-3 bg-gray-700 text-gray-100 hover:bg-primary hover:shadow-md transition-all duration-300 rounded-full">
          Connect with us
        </button>
      </div>
    </div>
  );
}

export default ConnectWithUsComponent;
