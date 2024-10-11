import { z } from "zod";

export const TestimonialSchema = z.object({
    title: z.string(),
    content: z.string(),
    verified : z.string(),  
    published : z.string(), 
    videoContent : z.string(),
    rating : z.coerce.number().int(),
    image: z.custom<File>((file) => {    
        return true;
      }, {
        message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
      }),
  })

  