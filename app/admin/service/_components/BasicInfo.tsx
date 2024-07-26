"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaUserTie } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import validator from 'validator';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';
import { passwordStrength } from 'check-password-strength';

import { registerUser } from '@/utils/authActions';
import { toast } from 'react-toastify';
import { Service } from '@prisma/client';
import { BasicServiceInfo } from '../utils/BasicServiceInfo';
const formSchema = z.object({
    service_name : z.string().min(4, "Service Name Must be at least 4 chars")
                          .max(45, "Service Name Must less than 45 chars"),
    title : z.string().max(45, "Service Title Must less than 45 chars"),
                          // .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
                          

})


interface Props {
  addBasicForm: (value: BasicServiceInfo) => void
  }

type inputType = z.infer<typeof formSchema>;


const BasicInfo = ({addBasicForm}:Props) => {
    // const {register,handleSubmit,reset,control,formState:{errors}} = useForm<inputType>({
    //     resolver: zodResolver(formSchema)
    // });
     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(formSchema),
  });
    
    
    const saveUser: SubmitHandler<inputType> = async (data)=>{
        const serviceData = data;
        
        try{
          
            addBasicForm(serviceData);
          



        }catch(error){
            toast.error("sothing went wrong");
        }
    }
    // useEffect(()=>{
    //     setPassStrength(passwordStrength(watch().password).id);
    // }, [watch().password]);

    // useEffect(() => {
    //     setPassStrength(passwordStrength(watch().password).id);
    //   }, [watch().password]);
    
  return (
   <div className="w-full max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white dark:bg-black-100 dark:border dark:border-gray-800  rounded-md">
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  ">
        <div className="grid grid-cols-1">
        
         

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="service_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Service Name</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('service_name')}  type="text" name="service_name" id="service_name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.service_name?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="title" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Title</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('title')}  type="text" name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Service Title ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
            </div>

            




 
            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
           
        </div>
    </form>
   </div>
  );
};

export default BasicInfo;