import Link from "next/link";
import React from "react";

export interface BreadCrumbComponentProps {
  name: string;
  link?: string;
}

function BreadCrumbComponent({
  breadCrumbItems,
}: {
  breadCrumbItems: BreadCrumbComponentProps[];
}) {
  return (
    <div className="">
      {breadCrumbItems.map((item, index) => (
        <span key={index} className={index === 0 ? "font-bold" : ""}>
          <Link href={item.link ?? ""} className="hover:underline">
            {item.name}
          </Link>
          {index < breadCrumbItems.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default BreadCrumbComponent;
