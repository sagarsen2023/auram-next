"use client";
import DefaultLoaderComponent from "@/components/default-loader.component";

import React, { Suspense } from "react";
import { FiPhoneMissed } from "react-icons/fi";
import { IoMailOutline, IoMapOutline } from "react-icons/io5";

function ContactUS() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-full flex justify-center h-56 items-center">
            <DefaultLoaderComponent />
          </div>
        }
      >
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
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              support@example.com
            </a>
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
              <a
                href="tel:+15551234567"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                (555) 123-4567
              </a>
              <a
                href="https://wa.me/15551234567"
                className="block text-green-600 hover:text-green-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8">
            <div className="bg-gray-50 border rounded-lg p-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {" "}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name (Required)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                      placeholder="Your Name"
                    />
                  </div>{" "}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address (Required)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {" "}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                      placeholder="9875641230"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                  {" "}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject (Required)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message (Required)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                      placeholder="Write your message here..."
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full max-w-lg bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-yellow-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default ContactUS;
