import * as z from "zod";

export const registrationSchema = z.object({
  //   registrationId: z.string(),
  email: z.string().email({ message: "Enter valid email" }),
  phone: z.string().min(10, { message: "Enter valid mobile number" }),
  honorific: z.enum(["Mr", "Mrs", "Ms"]),
  fullName: z.string().min(3, { message: "Minimum 3 characters required" }),
  whatsapp: z.string().optional(),
  gender: z.enum(["male", "female", "other"]),
  dob: z.string(),
  dateOfAnniversary: z.string().optional(),
});

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;