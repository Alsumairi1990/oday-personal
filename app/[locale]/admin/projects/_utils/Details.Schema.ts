import { z } from "zod";
const ProjectStatusEnum = z.enum([
    'PLANNED',
    'IN_PROGRESS',
    'COMPLETED',
    'ON_HOLD',
    'CANCELLED',
  ]);

export const DetailsSchema = z.object({
    status : ProjectStatusEnum.optional(),
    startDate : z.coerce.date().optional(),  
    endDate : z.coerce.date().optional(), 
    budget : z.coerce.number().int().optional(),
  })