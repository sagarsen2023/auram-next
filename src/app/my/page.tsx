"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaHome, FaUser, FaCog, FaChartBar, FaEnvelope } from "react-icons/fa";
import { MdDeleteOutline, MdEditNote } from "react-icons/md";

import TextInputComponent from "@/components/base-contact-form/text-input.component";
import PrimaryButtonCOmponent from "@/components/buttons/primary-button.component";

interface NavItem {
  icon: IconType;
  label: string;
  href: string;
  color?: string;
}

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("/dashboard");

  const NAV_ITEMS: NavItem[] = [
    {
      icon: FaHome,
      label: "Dashboard",
      href: "/dashboard",
      color: "bg-yellow-600",
    },
    {
      icon: FaUser,
      label: "Profile",
      href: "/profile",
      color: "bg-yellow-600",
    },
    {
      icon: FaChartBar,
      label: "Analytics",
      href: "/analytics",
      color: "bg-yellow-600",
    },
    {
      icon: FaEnvelope,
      label: "Messages",
      href: "/messages",
      color: "bg-yellow-600",
    },
    {
      icon: FaCog,
      label: "Settings",
      href: "/settings",
      color: "bg-yellow-600",
    },
  ];

  const NavItem: React.FC<NavItem> = ({
    icon: Icon,
    label,
    href,
    color = "bg-yellow-600",
  }) => {
    const isActive = activeItem === href;

    return (
      <Link
        href={href}
        onClick={() => setActiveItem(href)}
        className={`
          group relative flex items-center py-3 px-4 
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "justify-center" : "space-x-4"}
          ${isActive ? "text-gray-700" : "text-gray-500 hover:text-gray-700"}
        `}
      >
        {isActive && (
          <span
            className={`
              absolute left-0 top-0 bottom-0 w-1 
              ${color} rounded-r-lg
              animate-pulse-subtle
            `}
          />
        )}

        <div
          className={`
            ${isActive ? color : "bg-gray-100"}
            w-10 h-10
            flex items-center justify-center rounded-xl
            
          `}
        >
          <Icon
            className={`
              w-5 h-5 
              ${isActive ? "text-white" : "text-gray-600"}
              transition-all duration-300 ease-in-out
            group-hover:scale-110 group-hover:rotate-6
            `}
          />
        </div>

        <span
          className={`
              text-md 
             font-bold
              transition-all duration-300
            `}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <>
      <div className="w-full bg-gray-50">
        <div className="px-6 py-6 w-full lg:max-w-8xl mx-auto">
          <div className="flex min-w-screen flex-wrap gap-6 ">
            <div
              className={`
     bg-white border border-gray-200 
     flex flex-col 
    transition-all duration-100 ease-in-out
    w-72 z-10
  `}
            >
              <div
                className={`
      flex items-center p-5 
      justify-between
    `}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="
            w-12 h-12 rounded-full  bg-gray-200
          "
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Sajal Jana
                    </h2>
                    <p className="text-xs text-gray-500">9800328275</p>
                  </div>
                </div>
              </div>

              <nav className="flex-grow px-3 py-5 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </nav>
            </div>
            <div className="flex-1 bg-white p-6 border border-gray-200 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-bold text-gray-800">
                  Saved Addresses
                </h1>
                <button className="bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded hover:bg-slate-900">
                  Add new address
                </button>
              </div>
              <div className="bg-white border rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    Sajal Jana
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Module 206 , Webel IT Park Tower 1, BN 4, Sector 5
                  </p>
                  <p className="text-gray-600 text-sm">Bidhan Nagar</p>
                  <p className="text-gray-600 text-sm">Kolkata - 700091</p>
                  <p className="text-gray-600 text-sm">West Bengal</p>
                  <p className="text-gray-600 mt-2 font-medium text-sm">
                    Mobile : 9800328275
                  </p>
                  <p className="text-gray-600 font-medium text-sm">
                    Email : sajaljana4@gmail.com
                  </p>
                </div>

                <div className="space-x-4">
                  <div>
                    <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium py-0.5 px-3 rounded-full ml-6">
                      Default Address
                    </span>
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    <button className="text-blue-500 hover:text-blue-600 ">
                      <MdEditNote className="text-3xl" />
                    </button>
                    <button className="text-red-500 hover:text-red-600 text-md">
                      <MdDeleteOutline className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white border rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    Sajal Jana
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Module 206 , Webel IT Park Tower 1, BN 4, Sector 5
                  </p>
                  <p className="text-gray-600 text-sm">Bidhan Nagar</p>
                  <p className="text-gray-600 text-sm">Kolkata - 700091</p>
                  <p className="text-gray-600 text-sm">West Bengal</p>
                  <p className="text-gray-600 mt-2 font-medium text-sm">
                    Mobile : 9800328275
                  </p>
                  <p className="text-gray-600 font-medium text-sm">
                    Email : sajaljana4@gmail.com
                  </p>
                </div>

                <div className="space-x-4">
                  <div className="flex justify-end gap-3 mt-4">
                    <button className="text-blue-500 hover:text-blue-600 ">
                      <MdEditNote className="text-3xl" />
                    </button>
                    <button className="text-red-500 hover:text-red-600 text-md">
                      <MdDeleteOutline className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50">
        <div className="px-6 py-6 w-full lg:max-w-8xl mx-auto">
          <div className="flex min-w-screen flex-wrap gap-6 ">
            <div
              className={`
     bg-white border border-gray-200 
     flex flex-col 
    transition-all duration-100 ease-in-out
    w-72 z-10
  `}
            >
              <div
                className={`
      flex items-center p-5 
      justify-between
    `}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="
            w-12 h-12 rounded-full  bg-gray-200
          "
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Sajal Jana
                    </h2>
                    <p className="text-xs text-gray-500">9800328275</p>
                  </div>
                </div>
              </div>

              <nav className="flex-grow px-3 py-5 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </nav>
            </div>
            <div className="flex-1 bg-white p-6 border border-gray-200 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-bold text-gray-800">
                  Edit Details
                </h1>
              </div>
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <TextInputComponent
                        label="First Name (Required)"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <TextInputComponent
                        label="Last Name (Required)"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <TextInputComponent
                        label="Phone (Required)"
                        placeholder="Enter your phone number"
                      />
                      <div className="absolute top-10 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="green"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <TextInputComponent
                        label="Alternate Phone (Optional)"
                        placeholder="Enter your alternate phone number"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <TextInputComponent
                        label="Email (Optional)"
                        placeholder="Enter your email"
                      />
                      <div className="absolute top-10 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="green"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <TextInputComponent
                        label="WhatsApp (Optional)"
                        placeholder="Enter your WhatsApp number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <TextInputComponent
                        label="Date of Birth (Optional)"
                        placeholder="Enter your DOB"
                      />
                    </div>
                    <div>
                      <TextInputComponent
                        label="Date of Marrige Aniversery (Optional)"
                        placeholder="Date of Marrige Aniversery"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <PrimaryButtonCOmponent>
                      {/* {loading ? "Sending..." : "Send Message"} */} Update
                      Profile
                    </PrimaryButtonCOmponent>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50">
        <div className="px-6 py-6 w-full lg:max-w-8xl mx-auto">
          <div className="flex min-w-screen flex-wrap gap-6 ">
            <div
              className={`
     bg-white border border-gray-200 
     flex flex-col 
    transition-all duration-100 ease-in-out
    w-72 z-10
  `}
            >
              <div
                className={`
      flex items-center p-5 
      justify-between
    `}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="
            w-12 h-12 rounded-full  bg-gray-200
          "
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Sajal Jana
                    </h2>
                    <p className="text-xs text-gray-500">9800328275</p>
                  </div>
                </div>
              </div>

              <nav className="flex-grow px-3 py-5 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </nav>
            </div>
            <div className="flex-1 bg-white p-6 border border-gray-200 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-bold text-gray-800">
                  Delete Account
                </h1>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete your account? This action is
                irreversible and all your data will be permanently removed.
              </p>
              <ul className="space-y-3 list-disc list-inside text-gray-900 font-semibold">
                <li>
                  You'll lose your order history, saved details, Myntra Credit,
                  MynCash, SuperCoins and all other coupons and benefits.
                </li>
                <p className="font-normal pl-5">
                  Any account related benefits will be forfeited once the
                  account is deleted and will no longer be available to you. You
                  cannot recover the same. However, you can always create a new
                  account. By deleting your account, you acknowledge you have
                  read our Privacy Policy.
                </p>
                <li>
                  Any pending orders, exchanges, returns or refunds will no
                  longer be accessible via your account.
                </li>
                <li>
                  Myntra may not extend New User coupon if an account is created
                  with the same mobile number or email id.
                </li>
                <li>
                  Myntra may refuse or delay deletion in case there are any
                  pending grievances related to orders, shipments, cancellations
                  or any other services offered by Myntra.
                </li>
                <li>
                  Myntra may retain certain data for legitimate reasons such as
                  security, fraud prevention, future abuse, regulatory
                  compliance including exercise of legal rights or comply with
                  legal orders under applicable laws.
                </li>
              </ul>
              <div className="mb-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-600 rounded border-gray-300 focus:ring-red-500"
                  />
                  <span className="text-gray-600">
                    I understand the consequences of deleting my account.
                  </span>
                </label>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <button
                  disabled
                  className="w-1/2 opacity-20 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition cursor-not-allowed"
                >
                  Delete Account anuway
                </button>
                <button className="w-1/2 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition ">
                  Kepp Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
