import React from "react";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import parallx from "../../../public/images/parallx.jpg";

function ShippingInfoComponent() {
  const shippingInfo = [
    {
      icon: (
        <TbTruckDelivery
          className="group-hover:-translate-y-5 transition-all duration-500 text-5xl"
          style={{ strokeWidth: 1 }}
        />
      ),
      title: "SHIPPING WORLDWIDE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, earum?",
    },
    {
      icon: (
        <TbTruckReturn
          className="group-hover:-translate-y-5 transition-all duration-500 text-5xl"
          style={{ strokeWidth: 1 }}
        />
      ),
      title: "30 DAYS RETURN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, earum?",
    },
    {
      icon: (
        <RiSecurePaymentLine
          className="group-hover:-translate-y-5 transition-all duration-500 text-5xl"
          style={{ strokeWidth: 0.5 }}
        />
      ),
      title: "SECURE PAYMENT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, earum?",
    },
  ];
  return (
    <div
      className=" bg-fixed px-6 py-12 flex flex-col lg:flex-row md:px-36 md:py-24 justify-center items-center select-none gap-10"
      style={{ backgroundImage: `url(${parallx.src})` }}
    >
      {shippingInfo.map((info, index) => (
        <div
          key={index}
          className="text-white group w-full flex flex-col justify-center items-center text-center gap-2"
        >
          <div className="border-b w-fit">{info.icon}</div>
          <p className="mt-2 md:text-xl">{info.title}</p>
          <p className="text-sm md:w-96 md:text-lg">{info.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ShippingInfoComponent;
