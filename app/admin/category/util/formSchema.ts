import { z } from "zod";

export const formSchema = z.object({
  
    category_name : z.string().min(4, "Service Name Must be at least 4 chars")
                          .max(45, "Service Name Must less than 45 chars"),
description : z.string().max(1000, "Service Title Must less than 1000 chars"),
// image: imageSchema.refine(file => file.size > 0, "Required"),
// icon: imageSchema.refine(file => file.size > 0, "Required"),
// image: z.instanceof(File, { message: "Required" })
image: z.custom<FileList>((file) => {
  // if (!(file instanceof File)) {
  //   return false;
  // }

  
  return true;
}, {
  message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
}),

icon: z.custom<FileList>((file) => {
  // if (!(file instanceof File)) {
  //   return false;
  // }
 
  return true;
}, {
  message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
})


})