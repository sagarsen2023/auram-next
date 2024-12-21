"use client";

import {
  registrationSchema,
  RegistrationSchemaType,
} from "@/validators/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextInputComponent from "../ui/form-inputs/text-input.component";
import PrimaryButtonComponent from "../buttons/primary-button.component";
import SelectComponent, {
  SelectOption,
} from "../ui/form-inputs/select.component";
import DatePickerComponent from "../ui/form-inputs/date-picker.component";

function RegistrationComponent() {
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

  const HonorificOptions: SelectOption[] = [
    {
      label: "Mr",
      value: "Mr",
    },
    {
      label: "Mrs",
      value: "Mrs",
    },
    {
      label: "Ms",
      value: "Ms",
    },
  ];
  const methods = useForm<RegistrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = methods;

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  const onSubmit = (data: RegistrationSchemaType) => {
    console.log("data", data);
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
          <TextInputComponent
            label="Phone"
            placeholder="Enter your phone number"
            {...register("phone")}
            error={errors.phone?.message}
          />
          <div className="flex gap-3">
            <SelectComponent
              label="Select Honorific"
              menu={HonorificOptions}
              onChange={(item) =>
                setValue(
                  "honorific",
                  item.value as RegistrationSchemaType["honorific"]
                )
              }
              error={errors.honorific?.message}
            />
            <SelectComponent
              label="Select Gender"
              menu={genderOptions}
              onChange={(item) =>
                setValue(
                  "gender",
                  item.value as RegistrationSchemaType["gender"]
                )
              }
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
              onChange={(date) => setValue("dob", date ?? new Date())}
              placeholder="Choose a date"
              error={errors.dob?.message}
            />

            <DatePickerComponent
              label="Select Date of Anniversary"
              selected={
                watch("dateOfAnniversary")
                  ? new Date(
                      watch("dateOfAnniversary") as string | number | Date
                    )
                  : null
              }
              onChange={(date) =>
                setValue("dateOfAnniversary", date ?? new Date())
              }
              placeholder="Choose a date"
              error={errors.dateOfAnniversary?.message}
            />
          </div>
        </div>

        <PrimaryButtonComponent onClick={handleSubmit(onSubmit)}>
          Register
        </PrimaryButtonComponent>
      </FormProvider>
    </div>
  );
}

export default RegistrationComponent;
