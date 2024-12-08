import React from "react";
import { FaGlobe } from "react-icons/fa";

function FooterComponent() {
  const testimonials = [
    {
      icon: <FaGlobe />,
      title: "100% Satisfaction",
      description: "If your are unable.",
    },
    {
      icon: <FaGlobe />,
      title: "100% Satisfaction",
      description: "If your are unable.",
    },
    {
      icon: <FaGlobe />,
      title: "100% Satisfaction",
      description: "If your are unable.",
    },
    {
      icon: <FaGlobe />,
      title: "100% Satisfaction",
      description: "If your are unable.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 flex justify-center">
      <div className="w-full lg:max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                index === 3 && "bg-gray-200"
              } px-4 py-5 flex items-center justify-center border-b-2 group`}
            >
              <div className="border-b border-secondary">
                <FaGlobe className="text-3xl pb-1 text-secondary group-hover:-translate-y-3 duration-300" />
              </div>
              <div className="w-full text-center">
                <h2 className="font-[600]">{testimonial.title}</h2>
                <p className="text-sm">{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
