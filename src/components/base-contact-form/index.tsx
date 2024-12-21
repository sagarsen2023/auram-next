"use client";

import {
  BaseContactFormType,
  baseContactFormSchema,
} from "@/validators/base-contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import TextInputComponent from "../ui/form-inputs/text-input.component";
import TextAreaComponent from "../ui/form-inputs/text-area.component";
import { contactAPI } from "@/services/contact.service";
import { ContactUsParams } from "@/models/contact/contact-us.model";
import { toast } from "sonner";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";

function BaseContactForm({ type }: { type: "bespoke" | "contact" }) {
  const [loading, setLoading] = useState(false);

  const methods = useForm<BaseContactFormType>({
    resolver: zodResolver(baseContactFormSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: BaseContactFormType) => {
    try {
      setLoading(true);
      const response = await contactAPI.contactUs({
        ...data,
        whatsapp: data.whatsapp ?? "",
        countryCode: "91",
        type: type as ContactUsParams["type"],
      });
      if (response.error) {
        throw new Error("Something went wrong");
      }
      toast.success("Message sent successfully. We will contact you soon.");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
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
              label="WhatsApp (Optional)"
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
          <PrimaryButtonCOmponent isLoading={loading}>
            {loading ? "Sending..." : "Send Message"}
          </PrimaryButtonCOmponent>
        </div>
      </form>
    </FormProvider>
  );
}

export default BaseContactForm;
