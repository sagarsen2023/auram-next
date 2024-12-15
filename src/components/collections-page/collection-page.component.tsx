import React, { Suspense } from "react";
import { collectionAPI } from "@/services/item.service";
import Image from "next/image";
import imageValidator from "@/utils/image-validator";
import Link from "next/link";
import DefaultPageLoaderComponent from "../ui/default-page-loader.component";

async function CollectionsPageComponent() {
  const response = await collectionAPI.getAllCollections();
  const collectionData = response.data ?? [];

  return (
    <Suspense fallback={<DefaultPageLoaderComponent />}>
      <div className="max-w-6xl mx-auto  pt-2 px-4 lg:px-0">
        <div className="relative overflow-hidden">
          {collectionData?.map((collection, index) =>
            index % 2 === 0 ? (
              <div
                className="flex relative mb-[30px] overflow-hidden clear-both flex-wrap"
                key={collection._id}
              >
                <div className="md:w-1/2 w-full md:max-w-1/2 max-w-full relative">
                  <Link href={`/products/collections=${collection._id}`}>
                    <Image
                      src={imageValidator(collection.verticalImage?.path)}
                      alt={collection.title}
                      width={800}
                      height={1000}
                      className="h-auto max-w-full md:inline-block hidden"
                    />
                    <Image
                      src={imageValidator(collection.horizontalImage?.path)}
                      alt={collection.title}
                      width={1000}
                      height={500}
                      className="h-auto max-w-full md:hidden inline-block "
                    />
                  </Link>
                </div>
                <div className="md:w-1/2 w-full md:max-w-1/2 max-w-full relative">
                  <div
                    className="h-[100%] md:h-[80%] p-[25px] flex items-center relative "
                    style={{ backgroundColor: collection.colorCode }}
                  >
                    <div
                      className="relative px-4 py-4 md:py-12"
                      style={{ color: collection.textColor }}
                    >
                      <h3 className="mb-2 md:mb-8 text-4xl md:text-6xl uppercase font-light">
                        {collection.title}
                      </h3>
                      <p className="text-xl md:text-3xl tracking-[7px] mb-[20px] font-light uppercase">
                        Collection
                      </p>
                      <Link
                        href={`/products/collections=${collection._id}`}
                        className="tracking-[3px] text-white cursor-pointer text-base font-normal leading-[45px] relative no-underline uppercase transition-all duration-200 inline-block btn-2 hover:no-underline group"
                      >
                        <p className="flex items-center">
                          <small style={{ color: collection.textColor }}>
                            View Products
                          </small>{" "}
                          <svg
                            className="transition-all duration-200 ml-[5px] group-hover:ml-[10px]"
                            width="23"
                            height="8"
                            viewBox="0 0 23 8"
                            fill={collection.textColor}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.48657 3.33917C1.21043 3.33917 0.986572 3.56303 0.986572 3.83917C0.986572 4.11531 1.21043 4.33917 1.48657 4.33917V3.33917ZM22.4416 4.19273C22.6368 3.99746 22.6368 3.68088 22.4416 3.48562L19.2596 0.303638C19.0643 0.108376 18.7477 0.108376 18.5525 0.303638C18.3572 0.498901 18.3572 0.815483 18.5525 1.01075L21.3809 3.83917L18.5525 6.6676C18.3572 6.86286 18.3572 7.17944 18.5525 7.37471C18.7477 7.56997 19.0643 7.56997 19.2596 7.37471L22.4416 4.19273ZM1.48657 4.33917H22.088V3.33917H1.48657V4.33917Z"
                              fill={collection.textColor}
                            />
                          </svg>
                        </p>

                        <span
                          className="transition-all duration-200 h-[1px] absolute top-[0] w-0 l-[-50%] group-hover:w-full"
                          style={{ backgroundColor: collection.textColor }}
                        ></span>
                        <span
                          className="transition-all duration-200 h-[1px] absolute bottom-[0] w-0 l-[-50%] group-hover:w-full"
                          style={{ backgroundColor: collection.textColor }}
                        ></span>
                      </Link>
                    </div>
                    <span className="absolute z-9 bottom-[-100px] left-[5px] hidden md:block">
                      <svg
                        width="46"
                        height="85"
                        viewBox="0 0 46 85"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38.4867 68.9376C41.8114 65.6799 45.1806 61.7751 45.1806 56.6654C45.1806 53.4107 43.8877 50.2892 41.5862 47.9877C39.2847 45.6863 36.1632 44.3933 32.9085 44.3933C28.9814 44.3933 26.2146 45.509 22.8676 48.8559C19.5207 45.509 16.7539 44.3933 12.8268 44.3933C9.57205 44.3933 6.45058 45.6863 4.14911 47.9877C1.84764 50.2892 0.554688 53.4107 0.554688 56.6654C0.554688 61.7974 3.90163 65.7022 7.24858 68.9376L22.8676 84.5566L38.4867 68.9376Z"
                          fill={collection.colorCode}
                          fillOpacity="0.6"
                        />
                        <circle
                          cx="22.9855"
                          cy="38.0094"
                          r="6.38391"
                          fill={collection.colorCode}
                        />
                        <path
                          d="M22.9863 0.41333V32.6066"
                          stroke={collection.colorCode}
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex relative mb-[30px] overflow-hidden clear-both flex-wrap"
                key={collection._id}
              >
                <div className=" w-full max-w-full relative">
                  <Link href={`/products/collections=${collection._id}`}>
                    <Image
                      src={imageValidator(collection.horizontalImage?.path)}
                      alt={collection.title}
                      width={1000}
                      height={500}
                      className="h-auto max-w-full inline-block "
                    />
                  </Link>
                </div>
                <div
                  className="w-[100%] md:w-[80%] ml-0 md:ml-[20%] p-[20px_30px] md:p-[50px_70px] relative mt-[0px] md:mt-[-80px] z-9"
                  style={{ backgroundColor: collection.colorCode }}
                >
                  <div
                    className="relative px-4 py-4 md:p-12"
                    style={{ color: collection.textColor }}
                  >
                    <h3 className="mb-2 md:mb-8 text-4xl md:text-6xl uppercase font-light">
                      {collection.title}
                    </h3>
                    <p className="text-xl md:text-3xl tracking-[7px] mb-[20px] font-light uppercase">
                      Collection
                    </p>
                    <Link
                      href={`/products/collections=${collection._id}`}
                      className="tracking-[3px] text-white cursor-pointer text-base font-normal leading-[45px] relative no-underline uppercase transition-all duration-200 inline-block btn-2 hover:no-underline group"
                    >
                      <p className="flex items-center">
                        <small style={{ color: collection.textColor }}>
                          View Products
                        </small>{" "}
                        <svg
                          className="transition-all duration-200 ml-[5px] group-hover:ml-[10px]"
                          width="23"
                          height="8"
                          viewBox="0 0 23 8"
                          fill={collection.textColor}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.48657 3.33917C1.21043 3.33917 0.986572 3.56303 0.986572 3.83917C0.986572 4.11531 1.21043 4.33917 1.48657 4.33917V3.33917ZM22.4416 4.19273C22.6368 3.99746 22.6368 3.68088 22.4416 3.48562L19.2596 0.303638C19.0643 0.108376 18.7477 0.108376 18.5525 0.303638C18.3572 0.498901 18.3572 0.815483 18.5525 1.01075L21.3809 3.83917L18.5525 6.6676C18.3572 6.86286 18.3572 7.17944 18.5525 7.37471C18.7477 7.56997 19.0643 7.56997 19.2596 7.37471L22.4416 4.19273ZM1.48657 4.33917H22.088V3.33917H1.48657V4.33917Z"
                            fill={collection.textColor}
                          />
                        </svg>
                      </p>

                      <span
                        className="transition-all duration-200 h-[1px] absolute top-[0] w-0 l-[-50%] group-hover:w-full"
                        style={{ backgroundColor: collection.textColor }}
                      ></span>
                      <span
                        className="transition-all duration-200 h-[1px] absolute bottom-[0] w-0 l-[-50%] group-hover:w-full"
                        style={{ backgroundColor: collection.textColor }}
                      ></span>
                    </Link>
                  </div>
                  <span className="absolute z-9 bottom-[0px] left-[-50px] hidden md:block">
                    <svg
                      width="46"
                      height="85"
                      viewBox="0 0 46 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.4867 68.9376C41.8114 65.6799 45.1806 61.7751 45.1806 56.6654C45.1806 53.4107 43.8877 50.2892 41.5862 47.9877C39.2847 45.6863 36.1632 44.3933 32.9085 44.3933C28.9814 44.3933 26.2146 45.509 22.8676 48.8559C19.5207 45.509 16.7539 44.3933 12.8268 44.3933C9.57205 44.3933 6.45058 45.6863 4.14911 47.9877C1.84764 50.2892 0.554688 53.4107 0.554688 56.6654C0.554688 61.7974 3.90163 65.7022 7.24858 68.9376L22.8676 84.5566L38.4867 68.9376Z"
                        fill={collection.colorCode}
                        fillOpacity="0.6"
                      />
                      <circle
                        cx="22.9855"
                        cy="38.0094"
                        r="6.38391"
                        fill={collection.colorCode}
                      />
                      <path
                        d="M22.9863 0.41333V32.6066"
                        stroke={collection.colorCode}
                      />
                    </svg>
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default CollectionsPageComponent;
