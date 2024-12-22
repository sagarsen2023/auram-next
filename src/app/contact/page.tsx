import BaseContactForm from "@/components/base-contact-form";
import ContactCards from "@/components/contact-information.components";
import React from "react";

function Page() {
  return (
    <>
      <div className="max-w-6xl mx-auto pt-10 pb-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Get in Touch with Us
        </h1>
      </div>

      <ContactCards />
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
