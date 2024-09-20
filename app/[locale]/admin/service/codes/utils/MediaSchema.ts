import { z } from "zod";

export const MeidaSchema = z.object({
    image: z.custom<File>((file) => {    
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),
    icon: z.custom<File>((file) => {    
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),
    
  })