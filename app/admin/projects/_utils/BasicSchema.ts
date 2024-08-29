import { z } from "zod";
const ProjectStatusEnum = z.enum([
    'PLANNED',
    'IN_PROGRESS',
    'COMPLETED',
    'ON_HOLD',
    'CANCELLED',
  ]);

export const BasicSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    status : ProjectStatusEnum.optional(),
    startDate : z.coerce.date().optional(),  
    endDate : z.coerce.date().optional(), 
    budget : z.coerce.number().int().optional(),
    priority : z.string().optional(),
    progress : z.coerce.number().int().optional(),
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