"use client";

import Popover from "@/components/ui/popover.component";
import { AddressesModel } from "@/models/addresses/address.model";
import React from "react";
import { MdDeleteOutline, MdEditNote } from "react-icons/md";

function AddressListingComponent({
  addresses,
  onEdit,
  onDelete,
  onSetDefault,
}: {
  addresses: AddressesModel[] | null;
  onEdit: (
    address: AddressesModel | null
  ) => void;
  onDelete: (_id: string) => void;
  onSetDefault: (_id: string) => void;
}) {
  return (
    <>
      {addresses?.map((address) => (
        <div
          className="bg-white border rounded-lg p-6 flex justify-between items-center"
          key={address._id}
        >
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {address.name}
            </h2>
            <p className="text-gray-600 text-sm">{address.line1}</p>
            {address.line2 && (
              <p className="text-gray-600 text-sm">{address.line2}</p>
            )}

            <p className="text-gray-600 text-sm">{address.city}</p>
            <p className="text-gray-600 text-sm">
              {address.state} {`, ` + address.country} {`- ` + address.pincode}
            </p>

            <p className="text-gray-600 mt-2 font-medium text-sm">
              Mobile : {address.countryCode + " " + address.phone}
            </p>

            {address.isDefault ? (
              <div className="mt-4">
                <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium py-0.5 px-3 rounded-full">
                  Default Address
                </span>
              </div>
            ) : (
              <Popover
                position="top"
                content={<div>Are you sure to make it default address?</div>}
                onOk={() => address?._id && onSetDefault(address._id)}
              >
                <button className=" bg-yellow-600 text-white text-sm font-medium py-1 px-5 rounded-full mt-4">
                  Make it Default
                </button>
              </Popover>
            )}
          </div>

          <div className="space-x-4">
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="text-blue-500 hover:text-blue-600 "
                onClick={() => address?._id && onEdit(address)}
              >
                <MdEditNote className="text-3xl" />
              </button>

              <Popover
                position="left"
                content={<div>Are you sure to delete this address?</div>}
                onOk={() => address?._id && onDelete(address._id)}
              >
                <button className="text-red-500 hover:text-red-600 text-md">
                  <MdDeleteOutline className="text-2xl" />
                </button>
              </Popover>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default AddressListingComponent;
