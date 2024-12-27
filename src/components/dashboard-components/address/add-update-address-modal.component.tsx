"use client";
import PrimaryButtonCOmponent from "@/components/buttons/primary-button.component";
import TextAreaComponent from "@/components/ui/form-inputs/text-area.component";
import TextInputComponent from "@/components/ui/form-inputs/text-input.component";
import ModalComponent from "@/components/ui/modal.component";
import { AddressesModel } from "@/models/addresses/address.model";
import addressesAPI from "@/services/address.service";
import {
  addressFormSchema,
  AddressFormType,
} from "@/validators/add-address-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

function AddUpdateAddressModalComponent({
  isOpen,
  onClose,
  addressForUpdate,
}: {
  isOpen: boolean;
  onClose: () => void;
  addressForUpdate: AddressesModel | null;
}) {
  const [loading, setLoading] = useState(false);

  const methods = useForm<AddressFormType>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: addressForUpdate || {},
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    if (addressForUpdate) {
      reset(addressForUpdate);
    } else {
      reset({});
      setValue("countryCode", "91");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  const onSubmit = async (data: AddressFormType) => {
    try {
      setLoading(true);
      let response;
      if (addressForUpdate) {
        response = await addressesAPI.updateAddress(data, addressForUpdate._id);
      } else {
        response = await addressesAPI.addAddress(data);
      }
      if (response.error) {
        throw new Error("Something went wrong");
      }
      toast.success("Address added successfully.");
      onClose();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose} size="2xl">
      <div className="w-full">
        <div className="w-full min-w-full md:min-w-[750px] relative flex items-center justify-center p-6 overflow-hidden">
          <div className="relative z-10 w-full">
            <h3 className="text-2xl  font-bold mb-4">
              Add New / Update Address
            </h3>
            <FormProvider {...methods}>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <TextInputComponent
                      label="Name  (Required)"
                      placeholder="Enter name"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                  </div>
                  <div>
                    {" "}
                    <TextInputComponent
                      label="Phone (Required)"
                      placeholder="Enter your phone number"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <TextInputComponent
                      label="Pincode  (Required)"
                      placeholder="Enter pincode"
                      error={errors.pincode?.message}
                      {...register("pincode")}
                    />
                  </div>
                  <div>
                    <TextInputComponent
                      label="State (Required)"
                      placeholder="Enter state"
                      error={errors.state?.message}
                      {...register("state")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <TextInputComponent
                      label="City/Locality (Required)"
                      placeholder="Enter Locality"
                      error={errors.city?.message}
                      {...register("city")}
                    />
                  </div>
                  <div>
                    <TextInputComponent
                      label="Country (Required)"
                      placeholder="Enter country"
                      error={errors.country?.message}
                      {...register("country")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <TextAreaComponent
                      rows={2}
                      label="Complete address including House No, Building, Street, Area (Required)"
                      placeholder="Enter address"
                      error={errors.line1?.message}
                      {...register("line1")}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <TextAreaComponent
                      rows={2}
                      label="Land Mark (Optional)"
                      placeholder="Enter.. "
                      error={errors.line2?.message}
                      {...register("line2")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <PrimaryButtonCOmponent isLoading={loading}>
                      {loading
                        ? "Saving Address..."
                        : addressForUpdate
                        ? "Update Address"
                        : "Add Address"}
                    </PrimaryButtonCOmponent>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </ModalComponent>
  );
}

export default AddUpdateAddressModalComponent;
