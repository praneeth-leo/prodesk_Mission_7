// schemas/validationSchema.js

import { z } from "zod";

const name = z
  .string()
  .min(1, "This field is required")
  .max(50, "Too long");

const dob = z
  .string()
  .min(1, "Date of birth is required");

const email = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email");

const password = z
  .string()
  .min(8, "Password must be at least 8 characters");

export const formSchema = z
  .object({
    firstName: name,
    lastName: name,
    dob: dob,

    email: email,

    password: password,

    confirmPassword: z.string()
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"]
      });
    }
  });

// helper: fields per step
export const stepFields = {
  1: ["firstName", "lastName", "dob"],
  2: ["email", "password", "confirmPassword"],
  3: []
};