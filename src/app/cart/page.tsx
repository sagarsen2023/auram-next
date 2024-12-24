"use client";

import BreadCrumbComponent, {
  BreadCrumbComponentProps,
} from "@/components/ui/breadcrumb.component";
import { CartResponse } from "@/models/cart/cart-response.model";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import cartAPI from "@/services/cart.service";
import DefaultPageLoaderComponent from "@/components/ui/default-page-loader.component";
import CartItemListingComponent from "@/components/cart-components/cart-item-listing.component";

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [cartResponse, setCartResponse] = useState<CartResponse | null>(null);
  // const [cartData, setCartData] = useState<CartData | null>(null);
  const breadcrumbs: BreadCrumbComponentProps[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cart",
    },
  ];

  const fetchCartData = async () => {
    try {
      setLoading(true);
      const response = await cartAPI.getCartData();
      if (!response.error) {
        setCartResponse(response);
        // setCartData(response.data);
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to fetch cart data");
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const addOrRemoveItem = async (itemId: string, change: number) => {
    console.log("itemId", itemId);
    console.log("change", change);
    try {
      setLoading(true);
      const response = await cartAPI.addToCart({
        itemId,
        quantity: change,
      });
      if (!response.error) {
        setCartResponse(response);
        fetchCartData();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to add or remove item");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <DefaultPageLoaderComponent />;
  }

  return (
    <div className={`base-page`}>
      <BreadCrumbComponent breadCrumbItems={breadcrumbs} />
      <div className="text-2xl font-bold mt-3 mb-4">Cart</div>
      <div>
        <CartItemListingComponent
          cartResponse={cartResponse}
          onQuantityChange={addOrRemoveItem}
        />
      </div>
    </div>
  );
}

export default Page;
