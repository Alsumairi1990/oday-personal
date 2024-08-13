import validator from "validator";
import { z } from "zod";

export const EmploymentSchema = z.object({
    jobTitle : z.string().min(4, "Job Must be at least 2 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    employmentType : z.string().min(2, "Employment Type Must be at least 4 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    reportsTo : z.string(),
    salary : z.coerce.number().int(),
    yearsOfExperience : z.coerce.number().int(),
    dateOfJoining : z.coerce.date(),

});