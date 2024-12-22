"use client";
import ModalComponent from "@/components/ui/modal.component";
import React, { useState } from "react";
import { MdDeleteOutline, MdEditNote } from "react-icons/md";
import AddUpdateAddress from "./add-update-address.comonent";
function MyAddresses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddressModalState = React.useCallback(
    () => setIsModalOpen((prev) => !prev),
    []
  );
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold text-gray-800">Saved Addresses</h1>
        <button
          onClick={handleAddressModalState}
          className="bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded hover:bg-slate-900"
        >
          Add new address
        </button>
      </div>
      <div className="bg-white border rounded-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">Sajal Jana</h2>
          <p className="text-gray-600 text-sm">
            Module 206 , Webel IT Park Tower 1, BN 4, Sector 5
          </p>
          <p className="text-gray-600 text-sm">Bidhan Nagar</p>
          <p className="text-gray-600 text-sm">Kolkata - 700091</p>
          <p className="text-gray-600 text-sm">West Bengal</p>
          <p className="text-gray-600 mt-2 font-medium text-sm">
            Mobile : 9800328275
          </p>
          <p className="text-gray-600 font-medium text-sm">
            Email : sajaljana4@gmail.com
          </p>
          <div className="mt-4">
            <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium py-0.5 px-3 rounded-full">
              Default Address
            </span>
          </div>
        </div>

        <div className="space-x-4">
          <div className="flex justify-end gap-3 mt-4">
            <button className="text-blue-500 hover:text-blue-600 ">
              <MdEditNote className="text-3xl" />
            </button>
            <button className="text-red-500 hover:text-red-600 text-md">
              <MdDeleteOutline className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">Sajal Jana</h2>
          <p className="text-gray-600 text-sm">
            Module 206 , Webel IT Park Tower 1, BN 4, Sector 5
          </p>
          <p className="text-gray-600 text-sm">Bidhan Nagar</p>
          <p className="text-gray-600 text-sm">Kolkata - 700091</p>
          <p className="text-gray-600 text-sm">West Bengal</p>
          <p className="text-gray-600 mt-2 font-medium text-sm">
            Mobile : 9800328275
          </p>
          <p className="text-gray-600 font-medium text-sm">
            Email : sajaljana4@gmail.com
          </p>
          <button className=" bg-yellow-600 text-white text-sm font-medium py-1 px-5 rounded-full mt-4">
            Make it Default Address
          </button>
        </div>

        <div className="space-x-4">
          <div className="flex justify-end gap-3 mt-4">
            <button className="text-blue-500 hover:text-blue-600 ">
              <MdEditNote className="text-3xl" />
            </button>
            <button className="text-red-500 hover:text-red-600 text-md">
              <MdDeleteOutline className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleAddressModalState}
        size="2xl"
      >
        {/* <AuthWrapper onComplete={handleAddressModalState} /> */}
        <AddUpdateAddress />
      </ModalComponent>
    </>
  );
}

export default MyAddresses;
