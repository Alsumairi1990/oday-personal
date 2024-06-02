"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { forgotPassword } from "@/utils/authActions";






const FormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),

  });

type InputType = z.infer<typeof FormSchema>;
const ForgetPassword = () => {
    

   
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<InputType>({
        resolver: zodResolver(FormSchema),
      });

      const onSubmit: SubmitHandler<InputType> = async (data) => {
          try {
                  const result = await forgotPassword(data.email);
                  if (result) toast.success("Reset password link was sent to your email.");
                
                } catch (e) {
                  console.log(e);
                  toast.error("Something went wrong!");
                }
          
      }


    return(
    <div className="">
     <form onSubmit={handleSubmit(onSubmit)} className="text-start z-40  ">
        <div className="grid grid-cols-1">
        
            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="user_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Email Address</label>
                    <div className="flex items-center w-full">
                        <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                        <MdMarkEmailUnread className='text-lg text-gray-500'/>
                        </span>
                        <div className="relative flex w-full">
                        <input {...register('email')} type="email"  name="email" id="email" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md rounded-l-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="example@gmail.com" required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.email?.message} </span>
            </div>


            
            

            <div className="mb-4">
                <button type="submit" disabled={isSubmitting} className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" >  {isSubmitting ? 
                <div className="flex items-center pl-2">
                    <AiOutlineLoading3Quarters />
                    <span className="text-md ml-2">Submitting... </span>
                </div>
                : "Submit"} </button>
            </div>
           
        </div>
    </form>
   </div>
    )
}
export default ForgetPassword;