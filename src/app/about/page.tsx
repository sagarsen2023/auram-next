import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/images/about.webp";

function Page() {
  return (
    <>
      <div className="px-2 py-6 w-full lg:max-w-8xl mx-auto">
        <div className="container mx-auto px-4 py-10">
        <h1
          className="relative pb-12 text-center text-[34px] font-normal 
           before:absolute before:bottom-[22px] before:left-[calc(50%-50px)] 
           before:block before:h-0.5 before:w-[80px] before:bg-black
           after:absolute after:bottom-[15px] after:right-[calc(50%-50px)] 
           after:block after:h-0.5 after:w-[80px] after:bg-black"
        >
          Unveiling Our Journey: The History of Aurum
        </h1>
          <div className="border-l-4 border-blue-500 pl-4 italic text-xl text-gray-700 mb-6">
            Beauty is an experience, nothing else. It is not a fixed pattern or
            an arrangement of features. It is something felt, a glow, or a
            communicated sense of fineness.”
            <span className="block text-base mt-2 text-gray-500">
              - D. H. Lawrence
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 ">
            <div className="space-y-4">
             

              <p className="text-lg text-gray-600 leading-relaxed">
                Jewellery is more than just stone and metal, it is an emotion.
                Looking at the mirror, twirling around, when your ornaments
                complement your outfit perfectly. It is an infectious
                feelings.That is the sole purpose of Auram, because for us there
                is no greater joy than to see that joy on your face.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The idea of Auram was birthed with the thought of familiarity.
                Auram wants you to wear not only a piece of jewel but a piece of
                you. The rich heritage of Indian artisans blended with your
                unique preferences will bring forth a jewellery that is uniquely
                yours, familiar to you.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our PATH TO JEWELRY MAKING WASN’T LINEAR. We didn’t go to
                traditional arts school, or coming from any artistic background.
                Designs grew very naturally, very organically for us. One thing
                we do have is extremely individualistic taste, and we believe
                everyone should have the opportunity to be able to employ their
                own taste and preferences.We learned that jewelry can transport
                you through time and space, creating irreplaceable bonds between
                people, moments and memories. So We believe jewellery should
                never go to assembly-line production.{" "}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                So here in Auram we crafted each piece with the earnest passion
                and love to create some thing that is truly yours
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aurum has chosen the path of being a witness, we crave to
                witness the moments of your life, mark them in gold and cherish
                them forever.
              </p>
            </div>
            <div className="relative">
              <Image
                src={aboutImage}
                alt="About"
                className="w-auto max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
