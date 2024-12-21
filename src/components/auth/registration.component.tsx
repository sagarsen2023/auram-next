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

function RegistrationComponent() {
  const methods = useForm<RegistrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        <div>
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
          <TextInputComponent
            label="Honorific"
            placeholder="Enter your honorific"
            {...register("honorific")}
            error={errors.honorific?.message}
          />
          <TextInputComponent
            label="Whatsapp"
            placeholder="Enter your whatsapp number"
            {...register("whatsapp")}
            error={errors.whatsapp?.message}
          />
          <TextInputComponent
            label="Date of Birth"
            placeholder="Enter your date of birth"
            {...register("dob")}
            error={errors.dob?.message}
          />
          <PrimaryButtonComponent onClick={handleSubmit(onSubmit)}>
            Register
          </PrimaryButtonComponent>
        </div>
      </FormProvider>
    </div>
  );
}

export default RegistrationComponent;
