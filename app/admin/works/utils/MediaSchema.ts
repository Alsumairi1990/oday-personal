import { z } from "zod";

export const MediaSchema = z.object({
   
    imageUrls : z.custom<FileList>((file) => {
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),
    
    additionalImages :  z.custom<File>((file) => {
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }),

  })