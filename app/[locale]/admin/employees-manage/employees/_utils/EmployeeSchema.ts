import validator from "validator";
import { z } from "zod";

export const EmployeeSchema = z.object({
    user_name : z.string().min(4, "User Name Must be at least 4 chars")
                          .max(45, "User Name Must less than 45 chars")
                          .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
                          
    email : z.string().email("Pleaz enter valid email"),
    phone : z.string().refine(validator.isMobilePhone, "Pleas Enter Valid Phone number"),
    password : z.string()
                 .min(8,"Password must be at least 8 ")
                 .max(40,"Password must be less than 40 "),
    confirmed_password : z.string()
    .min(8,"Password must be at least 8 ")
    .max(40,"Password must be less than 40 ")
}).refine(data => data.password == data.confirmed_password, {
    message : "Password and Confirmed password dosn't match",
    path : ["confirmed_password"]
});