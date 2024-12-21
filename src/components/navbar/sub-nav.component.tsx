import Link from "next/link";
import React from "react";

function SubNavComponent() {
  const hoverEffect = "hover:border-b-2 border-secondary duration-300";
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center gap-6 text-sm">
        <span>All</span>
        <span>Gold</span>
        <span>Silver</span>
        <span>Diamond</span>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <Link href="/products">
          <span className={hoverEffect}>PRODUCTS</span>
        </Link>
        <Link href="/collections">
          <span className={hoverEffect}>COLLECTIONS</span>
        </Link>
        <Link href="/bespoke">
          <span className={hoverEffect}>BESPOKE</span>
        </Link>
        <Link href="/about">
          <span className={hoverEffect}>ABOUT US</span>
        </Link>
        <Link href="/contact">
          <span className={hoverEffect}>CONTACT US</span>
        </Link>
      </div>
    </div>
  );
}

export default SubNavComponent;
