"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaHome, FaUser, FaCog, FaChartBar, FaEnvelope } from "react-icons/fa";

// Types
interface NavItem {
  icon: IconType;
  label: string;
  href: string;
  color?: string;
}

interface NavItemProps extends NavItem {
  isActive: boolean;
  onClick: (href: string) => void;
}

// NavItem Component
const NavItemComponent: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  href,
  color = "bg-yellow-600",
  isActive,
  onClick,
}) => (
  <Link
    href={href}
    onClick={() => onClick(href)}
    className={`
      group relative flex items-center py-3 px-4 
      transition-all duration-300 ease-in-out
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

    <span className="text-md font-bold ml-3 transition-all duration-300">
      {label}
    </span>
  </Link>
);

// Navigation Items
const NAV_ITEMS: NavItem[] = [
  {
    icon: FaHome,
    label: "Dashboard",
    href: "/my",
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

// Main Sidebar Component
const SidebarComponent = () => {
  const [activeItem, setActiveItem] = useState("/my");

  return (
    <>
      <div className="bg-white border border-gray-200 flex flex-col transition-all duration-100 ease-in-out w-72 z-10">
        <div className="flex items-center p-5 justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Sajal Jana</h2>
              <p className="text-xs text-gray-500">9800328275</p>
            </div>
          </div>
        </div>

        <nav className="flex-grow px-3 py-5 space-y-2">
          {NAV_ITEMS.map((item) => (
            <NavItemComponent
              key={item.href}
              {...item}
              isActive={activeItem === item.href}
              onClick={setActiveItem}
            />
          ))}
        </nav>
      </div>
    </>
  );
};

export default SidebarComponent;
