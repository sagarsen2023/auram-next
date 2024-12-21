import Link from "next/link";
import React from "react";

function SubNavComponent() {
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
          <span>PRODUCTS</span>
        </Link>
        <Link href="/collections">
          <span>COLLECTIONS</span>
        </Link>
        <Link href="/bespoke">
          <span>BESPOKE</span>
        </Link>
        <Link href="/about">
          <span>ABOUT US</span>
        </Link>
        <Link href="/contact">
          <span>CONTACT US</span>
        </Link>
      </div>
    </div>
  );
}

export default SubNavComponent;
