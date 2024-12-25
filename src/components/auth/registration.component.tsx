"use client";

import {
  registrationSchema,
  RegistrationSchemaType,
} from "@/validators/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextInputComponent from "../ui/form-inputs/text-input.component";
import PrimaryButtonComponent from "../buttons/primary-button.component";
import SelectComponent, {
  SelectOption,
} from "../ui/form-inputs/select.component";
import DatePickerComponent from "../ui/form-inputs/date-picker.component";
import { countryCodeOptions } from "@/constants/generic-select-options";
import { authAPI } from "@/services/auth.service";
import { toast } from "sonner";
import { setAuthToken, setUserData } from "@/utils/token-store";

function RegistrationComponent({
  countryCode,
  phone,
  onComplete,
}: {
  countryCode: string;
  phone: string;
  onComplete?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const genderOptions: SelectOption[] = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "Others",
    },
  ];

  const honorificOptions: SelectOption[] = [
    {
      label: "Mr",
      value: "Mr.",
    },
    {
      label: "Mrs",
      value: "Mrs.",
    },
    {
      label: "Ms",
      value: "Ms.",
    },
  ];
  const methods = useForm<RegistrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    watch,
  } = methods;

  useEffect(() => {
    setValue("registrationId", localStorage.getItem("registrationId") ?? "");
    setValue("countryCode", countryCode);
    setValue("phone", phone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: RegistrationSchemaType) => {
    localStorage.removeItem("registrationId");
    try {
      setLoading(true);
      const response = await authAPI.registerCustomer(data);
      if (response.error) {
        throw new Error("Something went wrong");
      }
      setAuthToken(response.data.token);
      setUserData(response.data.customer);
      toast.success("Registration successful");
      if (onComplete) {
        onComplete();
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-3 mb-4">
          <TextInputComponent
            label="Full Name"
            placeholder="Enter your full name"
            {...register("fullName")}
            error={errors.fullName?.message}
          />
          <TextInputComponent
            label="Email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors.email?.message}
          />
          <div className="md:flex gap-3">
            <div className="w-2/5">
              <SelectComponent
                value={countryCodeOptions.find(
                  (item) => item.value === countryCode
                )}
                label="Country Code"
                placeholder="Country Code"
                menu={countryCodeOptions}
                disabled
                error={errors.countryCode?.message}
              />
            </div>
            <div className="w-full">
              <TextInputComponent
                label="Phone"
                placeholder="Enter your phone number"
                {...register("phone")}
                disabled
                error={errors.phone?.message}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <SelectComponent
              label="Select Honorific"
              menu={honorificOptions}
              onChange={(item) => {
                setValue(
                  "honorific",
                  item.value as RegistrationSchemaType["honorific"]
                );
                setError("honorific", {
                  type: "manual",
                  message: "",
                });
              }}
              error={errors.honorific?.message}
            />
            <SelectComponent
              label="Select Gender"
              menu={genderOptions}
              onChange={(item) => {
                setValue(
                  "gender",
                  item.value as RegistrationSchemaType["gender"]
                );
                setError("gender", {
                  type: "manual",
                  message: "",
                });
              }}
              error={errors.gender?.message}
            />
          </div>

          <TextInputComponent
            label="Whatsapp"
            placeholder="Enter your whatsapp number"
            {...register("whatsapp")}
            error={errors.whatsapp?.message}
          />

          {/* dob and  dateOfAnniversary selector */}
          <div className="flex gap-3">
            <DatePickerComponent
              label="Date of Birth"
              selected={watch("dob") ? new Date(watch("dob")) : null}
              onChange={(date) =>
                setValue(
                  "dob",
                  Array.isArray(date) ? date[0] : date ?? new Date()
                )
              }
              error={errors.dob?.message}
            />

            <DatePickerComponent
              label="Date of Anniversary"
              selected={
                watch("dateOfAnniversary")
                  ? new Date(
                      watch("dateOfAnniversary") as string | number | Date
                    )
                  : null
              }
              onChange={(date) =>
                setValue(
                  "dateOfAnniversary",
                  Array.isArray(date) ? date[0] : date ?? new Date()
                )
              }
              error={errors.dateOfAnniversary?.message}
            />
          </div>
        </div>

        <PrimaryButtonComponent
          isLoading={loading}
          disabled={loading}
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </PrimaryButtonComponent>
      </FormProvider>
    </div>
  );
}

export default RegistrationComponent;
