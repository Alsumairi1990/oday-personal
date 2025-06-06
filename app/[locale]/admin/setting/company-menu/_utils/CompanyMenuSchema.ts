import { z } from "zod";
export const CompanyMenuSchema = z.object({
  name: z.string(),
  nameAr: z.string(),
  url : z.string(),
  title: z.string(),
  titleAr: z.string(),
  description: z.string(),
  descriptionAr: z.string(),
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

});
