import { AuramContactInfoModel } from "@/models/contact/auram-contact-info.model";
import { contactAPI } from "@/services/contact.service";
import Link from "next/link";
import React from "react";
import { FiPhoneMissed } from "react-icons/fi";
import { IoMailOutline, IoMapOutline } from "react-icons/io5";

async function ContactCards() {
  let contactInfoData: AuramContactInfoModel = {
    _id: "",
    address: "",
    whatsapp: "",
    email: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    phone: "",
    twitter: "",
    youtube: "",
  };
  try {
    const contactInfoResponse = await contactAPI.getAuramContactInfo();
    contactInfoData = contactInfoResponse.data;
  } catch {
    console.error("Error fetching contact info");
  }

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 px-4 lg:px-0">
        {contactInfoData?.email && (
          <div className="bg-white border rounded-lg p-6 text-center  mb-2">
            <IoMailOutline className="mx-auto text-gray-800 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold uppercase text-gray-800 mb-2">
              Email
            </h3>
            <p className="text-gray-600 mb-2">Send us an email</p>
            <Link
              href={`mailto:${contactInfoData.email}`}
              className="text-yellow-600 hover:text-yellow-600 font-medium"
            >
              {contactInfoData.email}
            </Link>
          </div>
        )}

        {contactInfoData?.address && (
          <div className="bg-white border rounded-lg p-6 text-center  mb-2">
            <IoMapOutline className="mx-auto text-gray-800 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold uppercase text-gray-800 mb-2">
              Address
            </h3>
            <p className="text-gray-600 mb-2">Visit our office</p>
            <p className="text-gray-700 font-medium">
              {contactInfoData?.address}
            </p>
          </div>
        )}

        {contactInfoData?.phone && (
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
                href={`tel:91${contactInfoData.phone}`}
                className="block text-gray-700 hover:text-gray-600 font-medium"
              >
                +91 {contactInfoData?.phone}
              </Link>
              <Link
                href={`https://wa.me/91${contactInfoData.whatsapp}`}
                className="block text-yellow-600 hover:text-yellow-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 {contactInfoData.whatsapp}
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ContactCards;
