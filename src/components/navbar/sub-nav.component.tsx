import Link from "next/link";
import React from "react";

function SubNavComponent() {
  const linkClassNme = "relative group";
  const hoverEffect = "font--medium text-md tracking-wider uppercase ";
  const activeEffect =
    "absolute left-0 top-[-5px] h-[2px] w-0 bg-[#d3ba3b] z-[1] transition-all ease-out duration-500 group-hover:w-full";
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center gap-6 text-sm">
        <span>All</span>
        <span>Gold</span>
        <span>Silver</span>
        <span>Diamond</span>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <Link href="/products" className={linkClassNme}>
          <span className={hoverEffect}>PRODUCTS</span>
          <small className={activeEffect}></small>
        </Link>
        <Link href="/collections" className={linkClassNme}>
          <span className={hoverEffect}>COLLECTIONS</span>
          <small className={activeEffect}></small>
        </Link>
        <Link href="/bespoke" className={linkClassNme}>
          <span className={hoverEffect}>BESPOKE</span>
          <small className={activeEffect}></small>
        </Link>
        <Link href="/about" className={linkClassNme}>
          <span className={hoverEffect}>ABOUT US</span>
          <small className={activeEffect}></small>
        </Link>
        <Link href="/contact" className={linkClassNme}>
          <span className={hoverEffect}>CONTACT US</span>
          <small className={activeEffect}></small>
        </Link>
      </div>
    </div>
  );
}

export default SubNavComponent;
