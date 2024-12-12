import * as z from "zod";

export const baseContactFormSchema = z.object({
  name: z.string().nonempty({ message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter valid email" }),
  phone: z
    .string({ message: "Please enter valid phone number" })
    .min(10)
    .max(10),
  whatsapp: z.string().optional(),
  subject: z.string().nonempty({
    message: "Please enter the subject",
  }),
  message: z.string().nonempty({
    message: "Please enter your message",
  }),
});

export type BaseContactFormType = z.infer<typeof baseContactFormSchema>;
