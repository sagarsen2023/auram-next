import * as z from "zod";

export const registrationSchema = z.object({
  registrationId: z.string(),
  email: z.string().email({ message: "Enter valid email" }),
  phone: z.string().min(10, { message: "Enter valid mobile number" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  honorific: z.enum(["Mr", "Mrs", "Ms"], {
    message: "Honorific is required",
  }),
  fullName: z.string().min(3, { message: "Minimum 3 characters required" }),
  whatsapp: z.string().optional(),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required",
  }),
  dob: z.date(),
  dateOfAnniversary: z.date().optional(),
});

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;
