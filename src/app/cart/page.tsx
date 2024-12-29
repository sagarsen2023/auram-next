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
import NoDataComponent from "@/components/ui/no-data.component";
import Link from "next/link";
import PrimaryButtonCOmponent from "@/components/buttons/primary-button.component";

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [cartItemNumber, setCartItemNumber] = useState<number>(0);
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
        setCartItemNumber(response?.data.items.length);
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
        <h1
          className="relative py-10 text-center text-[34px] font-normal 
           before:absolute before:bottom-[22px] before:left-[calc(50%-50px)] 
           before:block before:h-0.5 before:w-[80px] before:bg-black
           after:absolute after:bottom-[15px] after:right-[calc(50%-50px)] 
           after:block after:h-0.5 after:w-[80px] after:bg-black"
        >
          Cart
        </h1>
      </div>
      {cartItemNumber > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CartItemListingComponent
            cartResponse={cartResponse}
            onQuantityChange={addOrRemoveItem}
            onDelete={deleteItem}
          />
          <CartPricingDetailsComponent cartResponse={cartResponse} />
        </div>
      ) : (
        <>
          <div className="mx-auto w-full max-w-[800px]">
            <NoDataComponent />
            <Link href={"/products"}>
              <PrimaryButtonCOmponent>Browse Products</PrimaryButtonCOmponent>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
