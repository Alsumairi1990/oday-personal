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
import { GrCheckmark } from "react-icons/gr";

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';
import { passwordStrength } from 'check-password-strength';

import { registerUser } from '@/utils/authActions';
import { toast } from 'react-toastify';
import { Category, Service } from '@prisma/client';
import { addCategory } from '../_actions/Actions';
import SuccessMessage from './SuccessMessage';

const formSchema = z.object({
    category_name : z.string().min(4, "Service Name Must be at least 4 chars")
                          .max(45, "Service Name Must less than 45 chars"),
description : z.string().max(1000, "Service Title Must less than 1000 chars"),

})


type CategoryInput = Omit<Category, 'id' | 'slug' | 'userId' | 'image' | 'icon' | 'createdAt' | 'updatedAt'>;

type inputType = z.infer<typeof formSchema>;


const BasicInfo = () => {
    let rt:any={};
    const [category, setCategory] = useState<CategoryInput | null>(null); // Use Category type

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

  const transformToCategoryInput = (data: inputType): CategoryInput => {
    return {
      name: data.category_name,
      description: data.description,

      // Include other fields here if needed, or set default values
    };
  };
    
    
    const saveUser: SubmitHandler<inputType> = async (data)=>{
        const serviceData = data;
       
        const categoryData = transformToCategoryInput(data);
     
        try{
            // console.log(data);
           const categoryDa = await addCategory(categoryData);
           
           setCategory(categoryDa);
            console.log(rt.name)
        }catch(error){
            toast.error("sothing went wrong");
        }
    }
    
  return (
   <div className="w-full sm:w-11.8/12 max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white border border-gray-300 rounded-md">
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  ">
        <div className="grid grid-cols-1">
        {category &&
          <SuccessMessage categoryP={category}/>
        }
         

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="category_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Category Name</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('category_name')}  type="text" name="category_name" id="category_name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.category_name?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="description" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Categoty Description</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('description')}  type="text" name="description" id="description" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
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