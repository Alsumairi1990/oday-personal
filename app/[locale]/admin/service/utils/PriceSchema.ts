import { z } from "zod";

export const PriceSchema = z.object({
    amount: z.coerce.number().int().min(1),
    startPrice : z.coerce.number().int().min(1),
    median : z.coerce.number().int().min(1),
    currency : z.string(),
    discount : z.coerce.number().int().min(1),
    effectiveDate : z.coerce.date(),
    expiryDate : z.coerce.date(),
    description : z.string(),
    image: z.custom<File>((file) => {    
        return true;
      }, {
        message: "Invalid image file. Only JPEG, PNG, and GIF files are allowed, and must be less than 5MB."
      }),
  })