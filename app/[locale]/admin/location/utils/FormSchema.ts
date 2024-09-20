import { z } from "zod";

export const formSchema = z.object({
    country: z.string().min(3),
    city: z.string().min(3),
    image: z.custom<File>((file) => {    
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),
  })