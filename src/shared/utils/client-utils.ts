import * as z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(1, {
    message: "Full name is required.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Please enter a valid email address.",
    }),
  // only numbers
  phoneNumber: z
    .string()
    .min(1, {
      message: "Phone number is required.",
    })
    .regex(/^\d+$/, {
      message: "Only numbers are allowed.",
    }),
  comments: z.string().min(1, {
    message: "Comments are required.",
  }),
});
