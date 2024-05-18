import { z } from "zod";


const createUserZodSchema = z.object({
    body: z.object({
      firstName: z.string({
        required_error:"First name is required"
      }),
      lastName: z.string({
        required_error:"First name is required"
      }),
      phone: z.string({
        required_error:"Phone name is required"
      }),
      email: z.string({
        required_error:"Email is required"
      }),
      password: z.string({
        required_error:"Password is Required"
      }),
    }),
  });
  
  export const UserValidation = {
    createUserZodSchema,
  };