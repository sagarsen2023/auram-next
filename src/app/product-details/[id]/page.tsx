import { basePageClassNames } from "@/constants/universal-css";
import React from "react";
import { fetchItemDetails } from "../utils";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const itemData = await fetchItemDetails(id);
  console.log("itemData", itemData);
  return <div className={`${basePageClassNames}`}>{id}</div>;
}

export default Page;
