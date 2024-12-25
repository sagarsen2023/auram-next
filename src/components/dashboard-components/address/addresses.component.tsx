"use client";

import ModalComponent from "@/components/ui/modal.component";
import React, { useEffect, useState } from "react";
import AddUpdateAddress from "./add-update-address.component";
import { AddressesModel } from "@/models/addresses/address.model";
import DefaultPageLoaderComponent from "@/components/ui/default-page-loader.component";
import addressesAPI from "@/services/address.service";
import AddressListingComponent from "./address-card";

function MyAddresses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddressModalState = React.useCallback(
    () => setIsModalOpen((prev) => !prev),
    []
  );

  const [loading, setLoading] = useState(true);
  const [addressesData, setAddressesData] = useState<AddressesModel[] | null>(
    null
  );

  useEffect(() => {
    setLoading(true);
    addressesAPI
      .fetchAllAddresses()
      .then((response) => {
        setAddressesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DefaultPageLoaderComponent />;
  }

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

      <AddressListingComponent addresses={addressesData} />

      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleAddressModalState}
        size="2xl"
      >
        <AddUpdateAddress />
      </ModalComponent>
    </>
  );
}

export default MyAddresses;
