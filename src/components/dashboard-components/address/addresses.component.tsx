"use client";

import React, { useEffect, useState } from "react";
import { AddressesModel } from "@/models/addresses/address.model";
import DefaultPageLoaderComponent from "@/components/ui/default-page-loader.component";
import addressesAPI from "@/services/address.service";
import AddressListingComponent from "./address-card";
import { toast } from "sonner";
import AddUpdateAddressModalComponent from "./add-update-address-modal.component";

function MyAddresses() {
  const [loading, setLoading] = useState(true);
  const [addressesData, setAddressesData] = useState<AddressesModel[] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<AddressesModel | null>(
    null
  );
  const handleAddressModalState = () => {
    setIsModalOpen((prev) => !prev);
    setSelectedAddress(null);
  };

  const fetchAddressData = async () => {
    try {
      setLoading(true);
      const response = await addressesAPI.fetchAllAddresses();
      if (!response.error) {
        setAddressesData(response.data);
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to fetch address data");
    } finally {
      setLoading(false);
    }
  };

  const deleteAddress = async (addressId: string) => {
    try {
      setLoading(true);
      const response = await addressesAPI.deleteAddressItem(addressId);
      if (!response.error) {
        fetchAddressData();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to delete address");
    } finally {
      setLoading(false);
    }
  };

  const setDefaultAddress = async (addressId: string) => {
    try {
      setLoading(true);
      const response = await addressesAPI.setDefault(addressId);
      if (!response.error) {
        fetchAddressData();
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to update as default address");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

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

      <AddressListingComponent
        onEdit={(address) => {
          setSelectedAddress(address);
          setIsModalOpen(true);
        }}
        addresses={addressesData}
        onDelete={deleteAddress}
        onSetDefault={setDefaultAddress}
      />

      <AddUpdateAddressModalComponent
        isOpen={isModalOpen}
        onClose={handleAddressModalState}
        addressForUpdate={selectedAddress}
      />
    </>
  );
}

export default MyAddresses;
