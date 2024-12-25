"use client";
import PrimaryButtonCOmponent from "@/components/buttons/primary-button.component";
import TextInputComponent from "@/components/ui/form-inputs/text-input.component";
import React from "react";

function AddUpdateAddress() {
  return (
    <>
      <div className="w-full ">
        <div className="w-full min-w-full md:min-w-[750px] relative flex items-center justify-center p-6 overflow-hidden">
          <div className="relative z-10 w-full">
            <h3 className="text-2xl  font-bold mb-4">
              Add New / Update Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <TextInputComponent
                  label="Name  (Required)"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <TextInputComponent
                  label="Phone (Required)"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <TextInputComponent
                  label="Pincode  (Required)"
                  placeholder="Enter pincode"
                />
              </div>
              <div>
                <TextInputComponent
                  label="State (Required)"
                  placeholder="Enter state"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <TextInputComponent
                  label="City/Locality (Required)"
                  placeholder="Enter Locality"
                />
              </div>
              <div>
                <TextInputComponent
                  label="Country (Required)"
                  placeholder="Enter locality"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <TextInputComponent
                  label="Complete address including House No, Building, Street, Area (Required)"
                  placeholder="Enter address"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <TextInputComponent
                  label="Land Mark (Optional)"
                  placeholder="Enter.. "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <PrimaryButtonCOmponent>
                  {/* {loading ? "Sending..." : "Send Message"} */} Save /
                  Update Address
                </PrimaryButtonCOmponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUpdateAddress;
