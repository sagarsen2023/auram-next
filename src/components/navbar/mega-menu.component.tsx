"use client";

import React, { useEffect, useState } from "react";
import DefaultPageLoaderComponent from "../ui/default-page-loader.component";
import { itemAPI } from "@/services/item.service";
import { SortFilterModel } from "@/models/product-category-collections/sort-filter.model";

function MegaMenuComponent() {
  const [loading, setLoading] = useState(true);
  const [filterOptionData, setFilterOptionData] = useState<SortFilterModel[]>(
    []
  );

  useEffect(() => {
    setLoading(true);
    itemAPI
      .getSortFilers()
      .then((response) => {
        setFilterOptionData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(filterOptionData, "llll");
  }, []);

  if (loading) {
    return <DefaultPageLoaderComponent />;
  }

  return <div className="relative bg-white"></div>;
}

export default MegaMenuComponent;
