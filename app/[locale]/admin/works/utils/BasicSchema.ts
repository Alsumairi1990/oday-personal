import { z } from "zod";

export const BasicSchema = z.object({
    description: z.string().min(1),
    title : z.string().min(1),
    highlights : z.string(),
    client : z.string(),
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
    // imageUrls : z.custom<FileList>((file) => {
    //   return true;
    // }, {
    //   message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    // }),
    
    // additionalImages :  z.custom<FileList>((file) => {
    //   return true;
    // }, {
    //   message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    // }),

  

 
 
