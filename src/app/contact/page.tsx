import BaseContactForm from "@/components/base-contact-form";
import ContactInformationComponent from "@/components/contact-components/contact-information.components";
import React from "react";

function Page() {
  return (
    <>
      <div className="max-w-6xl mx-auto pt-10 pb-4">
        <h1
          className="relative pt-2 pb-10 text-center text-[34px] font-normal 
           before:absolute before:bottom-[22px] before:left-[calc(50%-50px)] 
           before:block before:h-0.5 before:w-[80px] before:bg-black
           after:absolute after:bottom-[15px] after:right-[calc(50%-50px)] 
           after:block after:h-0.5 after:w-[80px] after:bg-black"
        >
          Get in Touch with Us
        </h1>
      </div>

      <ContactInformationComponent />
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8">
          <div className="bg-gray-50 border rounded-lg p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <BaseContactForm type="contact" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
