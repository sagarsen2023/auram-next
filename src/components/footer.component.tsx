import { AuramContactInfoModel } from "@/models/contact/auram-contact-info.model";
import { CollectionItem } from "@/models/product-category-collections/collection.model";
import { contactAPI } from "@/services/contact.service";
import { collectionAPI } from "@/services/item.service";
import Link from "next/link";
import React from "react";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

async function FooterComponent() {
  const sectionClassName = "flex flex-col items-center w-full";
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
  // TODO: Replace with actual links
  const informationData = [
    {
      title: "About Us",
      href: "/",
    },
    {
      title: "Delivery Information",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
    {
      title: "Terms & Conditions",
      href: "/",
    },
    {
      title: "Site Map",
      href: "/",
    },
  ];
  const extrasData = [
    {
      title: "Contact us",
      href: "/",
    },
    {
      title: "Returns",
      href: "/",
    },
    {
      title: "Specials",
      href: "/",
    },
    {
      title: "Brands",
      href: "/",
    },
    {
      title: "Gift Vouchers",
      href: "/",
    },
    {
      title: "Affiliates",
      href: "/",
    },
  ];
  let collectionData: CollectionItem[] = [];
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
    const collectionResponse = await collectionAPI.getAllCollections();
    collectionData = collectionResponse?.data ?? [];
    const contactInfoResponse = await contactAPI.getAuramContactInfo();
    contactInfoData = contactInfoResponse.data;
  } catch {
    console.error("Error fetching collections");
  }

  return (
    <>
      {/* Testimonial Part */}
      <footer className="w-full bg-gray-100 flex flex-col items-center justify-center gap-5 lg:h-[30rem] border-b-2 border-gray-300">
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
        {/* More sections */}
        <div className="w-full lg:max-w-8xl grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-4 lg:h-full">
          {/* Collection Info */}
          <div className={`${sectionClassName}`}>
            <h1 className="pb-2 mb-2 border-b-2 border-secondary w-fit">
              Collections
            </h1>
            {collectionData?.map((collection) => (
              <Link key={collection._id} href={"/"}>
                <p className="py-1 lg:py-1.5 text-sm">{collection.title}</p>
              </Link>
            ))}
          </div>
          {/* Information */}
          <div className={`${sectionClassName}`}>
            <h1 className="pb-2 mb-2 border-b-2 border-secondary w-fit">
              Information
            </h1>
            {informationData.map((info) => (
              <Link key={info.title} href={info.href}>
                <p className="py-1 lg:py-1.5 text-sm">{info.title}</p>
              </Link>
            ))}
          </div>
          {/* Extras */}
          <div className={`${sectionClassName}`}>
            <h1 className="pb-2 mb-2 border-b-2 border-secondary w-fit">
              Extras
            </h1>
            {extrasData.map((extra) => (
              <Link key={extra.title} href={extra.href}>
                <p className="py-1 lg:py-1.5 text-sm">{extra.title}</p>
              </Link>
            ))}
          </div>
          {/* Contact Info */}
          <div
            className={`${sectionClassName} bg-gray-200 -mt-5 lg:h-[24.5rem]`}
          >
            <h1 className="mt-5 pb-2 mb-2 border-b-2 border-secondary w-fit">
              Contact Us
            </h1>
            {contactInfoData?.email && (
              <div className="flex items-center gap-2">
                <IoMailSharp className="" />
                <Link href={`mailto:${contactInfoData.email}`}>
                  <p className="py-1 lg:py-1.5 text-sm">
                    {contactInfoData.email}
                  </p>
                </Link>
              </div>
            )}
            {contactInfoData?.phone && (
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="" />
                <p className="py-1 lg:py-1.5 text-sm">
                  {contactInfoData.phone}
                </p>
              </div>
            )}
            {contactInfoData?.whatsapp && (
              <div className="flex items-center gap-2">
                <FaWhatsapp className="" />
                <Link href={`https://wa.me/${contactInfoData.whatsapp}`}>
                  <p className="py-1 lg:py-1.5 text-sm">
                    {contactInfoData.whatsapp}
                  </p>
                </Link>
              </div>
            )}
            {contactInfoData?.address && (
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="" />
                <p className="py-1 lg:py-1.5 text-sm">
                  {contactInfoData.address}
                </p>
              </div>
            )}
          </div>
        </div>
      </footer>

      {/* Social Icon and copyright */}
      <footer className="w-full bg-gray-100 flex flex-col items-center justify-center gap-5 py-5">
        <div className="flex items-center gap-5">
          {contactInfoData?.facebook && (
            <Link href={contactInfoData?.facebook}>
              <FaFacebook className="text-2xl" />
            </Link>
          )}
          {contactInfoData?.instagram && (
            <Link href={contactInfoData?.instagram}>
              <FaInstagram className="text-2xl" />
            </Link>
          )}
          {contactInfoData?.linkedin && (
            <Link href={contactInfoData?.linkedin}>
              <FaLinkedin className="text-2xl" />
            </Link>
          )}
          {contactInfoData?.twitter && (
            <Link href={contactInfoData?.twitter}>
              <FaTwitter className="text-2xl" />
            </Link>
          )}
          {contactInfoData?.youtube && (
            <Link href={contactInfoData?.youtube}>
              <FaYoutube className="text-2xl" />
            </Link>
          )}
          {contactInfoData?.whatsapp && (
            <Link href={`https://wa.me/${contactInfoData?.whatsapp}`}>
              <FaWhatsapp className="text-2xl" />
            </Link>
          )}
          {contactInfoData?.email && (
            <Link href={`mailto:${contactInfoData?.email}`}>
              <FaEnvelope className="text-2xl" />
            </Link>
          )}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Auram. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default FooterComponent;
