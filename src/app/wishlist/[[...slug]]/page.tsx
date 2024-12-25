import React from "react";

async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const slug = (await params).slug;
  console.log(slug);
  return <div className="base-page">Page</div>;
}

export default Page;
