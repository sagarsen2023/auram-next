"use client";
import {
  BaseContactFormType,
  baseContactFormSchema,
} from "@/validators/base-contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import TextInputComponent from "./text-input.component";
import TextAreaComponent from "./text-area.component";

function BaseContactForm() {
  const methods = useForm<BaseContactFormType>({
    resolver: zodResolver(baseContactFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: BaseContactFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <TextInputComponent
              label="Full Name (Required)"
              error={errors.name?.message}
              {...register("name")}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <TextInputComponent
              label="Email (Required)"
              error={errors.email?.message}
              {...register("email")}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {" "}
          <div>
            <TextInputComponent
              label="Phone (Required)"
              error={errors.phone?.message}
              {...register("phone")}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <TextInputComponent
              label="WhatsApp (Required)"
              error={errors.whatsapp?.message}
              {...register("whatsapp")}
              placeholder="Enter your WhatsApp number"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {" "}
          <div>
            <TextInputComponent
              label="Subject (Required)"
              error={errors.subject?.message}
              {...register("subject")}
              placeholder="Enter your subject"
            />
          </div>
        </div>
        <div className="">
          <TextAreaComponent
            label="Message (Required)"
            {...register("message")}
            error={errors.message?.message}
            placeholder="Enter your message"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full max-w-lg bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-yellow-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-yellow-400"
          >
            Send Message
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default BaseContactForm;
