import validator from "validator";
import { z } from "zod";

export const BasicInfoSchema = z.object({
    first_name : z.string().min(4, "First Name Must be at least 4 chars")
                          .max(45, "First Name Must less than 45 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    last_name : z.string().min(4, "Last Name Must be at least 4 chars")
                          .max(45, "Last Name Must less than 45 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    bio : z.string().min(4, "Bio  Must be at least 4 chars")
                          .max(5000, "Bio  Must less than 5000 chars"),
    sex : z.string(),
    maritalStatus : z.string(),
    dateOfBirth : z.coerce.date(),
    // phone : z.string().refine(validator.isMobilePhone, "Pleas Enter Valid Phone number"),
});