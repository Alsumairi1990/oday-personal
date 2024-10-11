import { z } from "zod";

export const EducationSchema = z.object({
    degree : z.string().min(4, "Job Must be at least 2 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    institution : z.string().min(2, "Employment Type Must be at least 4 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    yearOfPassing : z.string(),
    specialization : z.string(),

});