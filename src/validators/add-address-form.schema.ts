import * as z from "zod";

export const addressFormSchema = z.object({
  name: z.string().nonempty({ message: "Please enter your name" }),
  countryCode: z.string().nonempty({ message: "Please enter valid code" }),
  phone: z
    .string({ message: "Please enter valid phone number" })
    .min(10)
    .max(10),
  pincode: z.string().nonempty({ message: "Please enter valid pincode" }),
  state: z.string().nonempty({
    message: "Please enter the state name",
  }),
  city: z.string().nonempty({
    message: "Please enter your city /locatily",
  }),
  country: z.string().nonempty({
    message: "Please enter your city /locatily",
  }),
  line1: z.string().nonempty({
    message: "Please enter your address",
  }),
  line2: z.string().optional(),
});

export type AddressFormType = z.infer<typeof addressFormSchema>;
