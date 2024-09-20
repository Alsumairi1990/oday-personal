import { z } from "zod";


export const ClientSchema = z.object({
    name: z.string().min(1),
    contactPerson: z.string().min(1),
    email : z.string().email(), 
    phone : z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Invalid phone number format",
      }),
    address : z.string().optional(),
    companyName : z.string().optional(),
    website : z.string().optional(),
    industry :z.string().optional(),
    notes : z.string().optional(),
    billingAddress : z.string().optional(),
    billingEmail : z.string().email().optional(),
    taxId : z.string().optional(),
    image: z.custom<File>((file) => {    
      return true;
    }, {
      message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
    }).optional(),
   
  })