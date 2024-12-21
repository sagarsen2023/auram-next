import * as z from "zod";

export const RegistrationSchema = z.object({
  registrationId: z.string(),
  email: z.string().email(),
  phone: z.string(),
  honorific: z.enum(["Mr", "Mrs", "Ms"]),
  fullName: z.string(),
  whatsapp: z.string().optional(),
  gender: z.enum(["male", "female", "other"]),
  dob: z.string(),
  dateOfAnniversary: z.string().optional(),
});

export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;
