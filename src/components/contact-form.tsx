"use client";
import React from "react";

function ContactForm() {
  return (
    <>
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
    </>
  );
}

export default ContactForm;
