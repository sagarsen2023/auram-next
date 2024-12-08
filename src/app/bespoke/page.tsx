"use client";
import DefaultLoaderComponent from "@/components/default-loader.component";
import Image from "next/image";

import React, { Suspense } from "react";
import aboutImage from "../../../public/images/about.webp";

function Bespoke() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-full flex justify-center h-56 items-center">
            <DefaultLoaderComponent />
          </div>
        }
      >
        <div className="max-w-6xl mx-auto pt-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Bespoke - Embrace your individuality
          </h1>
        </div>

        <div className="px-2 py-6 w-full lg:max-w-8xl mx-auto">
          <div className="container mx-auto px-4 pt-8 pb-2">
            <div className="grid  md:grid-cols-[50%_50%] gap-8 ">
              <div className="relative">
                <Image
                  src={aboutImage}
                  alt="About"
                  className="w-auto max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-3">
                <div className="border-l-4 border-gray-500 pl-4  text-2xl text-gray-700">
                  It’s your story, a very special memory piece, designed
                  especially for you.
                </div>
                <h3 className="text-2xl font-bold text-gray-800 pt-3">
                  What is bespoke jewellery
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  At its core, bespoke jewellery allows you to create a piece
                  from very beginning. It is created from your idea with our
                  expertise - it’s inspired by your tastes, adapted to your
                  lifestyle, and accommodating to your budget.Something just for
                  you that says a bit about who you are.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 my-4">
                  Road map to craft your jewel
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Auram invites you to the back stage, here you are in charge.
                  In collaboration of our master artisans, you can create your
                  own design and participate in every minute little detailing of
                  the your jewellery . And for us there is no greater joy than
                  to see you smile once you wear a product that is uniquely
                  yours.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  what we really need you to know about the value of bespoke is
                  a bespoke piece isn’t just a piece of jewellery, it is a
                  journey, and that journey is all about you!should never go to
                  assembly-line production.{" "}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Love to be part of your life story.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We adore listening to my clients talk about their lives,
                  learning about their pasts and feel very privileged to have
                  been chose to be a part of their future.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  So, if you’re still pondering as to whether bespoke is for you
                  – go for it! You will find your experience to be memorable,
                  fun, relaxed, informative, and most importantly the piece you
                  create is just what you were always looking for.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8">
            <div className="bg-gray-50 border rounded-lg p-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                Message Us Describing Your Requirements
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

export default Bespoke;
