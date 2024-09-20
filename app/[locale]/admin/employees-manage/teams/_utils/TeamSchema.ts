import { z } from "zod";

export const TeamSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(1),
    status: z.string().min(1),
    icon: z.custom<File>((file) => {    
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),
    image: z.custom<File>((file) => {    
        return true;
      }, {
        message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
      }),
    
  })