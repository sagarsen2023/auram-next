"use client";

import BaseContactForm from "@/components/base-contact-form/base-contact-form.component";
import Link from "next/link";
import React from "react";
import { FiPhoneMissed } from "react-icons/fi";
import { IoMailOutline, IoMapOutline } from "react-icons/io5";

function Page() {
  return (
    <>
      <div className="max-w-6xl mx-auto pt-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Get in Touch with Us
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 px-4 lg:px-0">
        <div className="bg-white border rounded-lg p-6 text-center  mb-2">
          <IoMailOutline className="mx-auto text-gray-800 w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold uppercase text-gray-800 mb-2">
            Email
          </h3>
          <p className="text-gray-600 mb-2">Send us an email</p>
          <Link
            href="mailto:support@example.com"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            support@example.com
          </Link>
        </div>

        <div className="bg-white border rounded-lg p-6 text-center  mb-2">
          <IoMapOutline className="mx-auto text-gray-800 w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold uppercase text-gray-800 mb-2">
            Address
          </h3>
          <p className="text-gray-600 mb-2">Visit our office</p>
          <p className="text-gray-700 font-medium">
            123 Tech Lane, Innovation City
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 text-center  mb-2">
          <div className="flex justify-center items-center mb-4 space-x-3">
            <FiPhoneMissed className="text-gray-800 w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold uppercase text-gray-800 mb-2">
            Contact
          </h3>
          <p className="text-gray-600 mb-2">Phone & WhatsApp</p>
          <div className="space-y-2">
            <Link
              href="tel:+15551234567"
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              (555) 123-4567
            </Link>
            <Link
              href="https://wa.me/15551234567"
              className="block text-green-600 hover:text-green-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              (555) 123-4567
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8">
          <div className="bg-gray-50 border rounded-lg p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <BaseContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
