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
import CartPricingDetailsComponent from "@/components/cart-components/cart-pricing-details.component";
import DualLineComponent from "@/components/ui/dual-line.component";

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [cartResponse, setCartResponse] = useState<CartResponse | null>(null);
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

  const deleteItem = async (itemId: string) => {
    try {
      setLoading(true);
      const response = await cartAPI.deleteCartItem(itemId);
      if (!response.error) {
        fetchCartData();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to delete item");
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
      <div className="flex justify-center items-center flex-col gap-3 mt-2 mb-4">
        <span className="text-2xl font-bold">Cart</span>
        <DualLineComponent />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CartItemListingComponent
          cartResponse={cartResponse}
          onQuantityChange={addOrRemoveItem}
          onDelete={deleteItem}
        />
        <CartPricingDetailsComponent cartResponse={cartResponse} />
      </div>
    </div>
  );
}

export default Page;
