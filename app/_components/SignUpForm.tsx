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
import PasswordStrengthCheck from './PasswordStrengthCheck';
import { registerUser } from '@/utils/authActions';
import { toast } from 'react-toastify';
const formSchema = z.object({
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

type inputType = z.infer<typeof formSchema>;


const SignUpForm = () => {
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
    const [isVisiable,setIsVisiable] = useState(false);
    const [isVisiableConf,setIsVisiableConf] = useState(false);
    const [passStrength,setPassStrength] = useState(0);
    // const toggleVisible = () => setIsVisiable(prev => !prev);
    const toggleVisible = () => {setIsVisiable((prev) => !prev)}
    const toggleVisibleConif = () => {setIsVisiableConf((prev) => !prev)}
    const saveUser: SubmitHandler<inputType> = async (data)=>{
        const user = data;
        try{
            const result = await registerUser(user)
            console.log("sucess");
            toast.success("successfully data added")

        }catch(error){
            toast.error("sothing went wrong");
        }
    }
    // useEffect(()=>{
    //     setPassStrength(passwordStrength(watch().password).id);
    // }, [watch().password]);

    useEffect(() => {
        setPassStrength(passwordStrength(watch().password).id);
      }, [watch().password]);
    
  return (
   <div className="max-w-[400px] w-full  m-auto p-6 bg-white dark:bg-black-100 border dark:border-gray-800 shadow-md dark:sha0dow-gray-800 rounded-md">
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  ">
        <div className="grid grid-cols-1">
        
         

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="user_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">User Name</label>
                    <div className="flex items-center w-full">
                        <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                        <FaUserTie className='text-gray-500'/>
                        </span>
                        <div className="relative flex w-full">
                        <input   {...register('user_name')} type="text" name="user_name" id="user_name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md rounded-l-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="first nanme" required />
                        
                        </div>
                        
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.user_name?.message} </span>
            </div>

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

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="user_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Phone No</label>
                    <div className="flex items-center w-full">
                        <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                        <FaPhoneAlt className='text-lg text-gray-500'/>
                        </span>
                        <div className="relative flex w-full">
                        <input {...register('phone')} type="text" name="phone" id="email" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md rounded-l-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="phone number" required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.phone?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="password" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Password</label>
                    <div className="flex items-center w-full">
                        <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                        <RiLockPasswordFill className='text-lg text-gray-500'/>
                        </span>
                        <div className="relative flex items-center border h-10  w-full">
                        <input {...register('password')} type={isVisiable? "text" : "password"} name="password" id="password" className="block pl-2 px-0 pt-1 z-0 w-full text-sm text-gray-900 bg-transparent  rounded-md rounded-l-none focus-within:!border-orange-500  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder="*********" required />
                         {isVisiable ? <FaEye className='mr-2' onClick={toggleVisible} /> : <FaRegEyeSlash className='mr-2' onClick={toggleVisible} /> }
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors?.password?.message} </span>
                    <div className="mt-1">
                     <PasswordStrengthCheck passStrength ={passStrength}  />
                    </div>
            </div>
            
            

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="confirmed_password" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Confirmed Password</label>
                    <div className="flex items-center w-full">
                        <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                        <RiLockPasswordFill className='text-lg text-gray-500' />
                        </span>
                        <div className="relative flex items-center border h-10  w-full">
                        <input {...register('confirmed_password')} type={isVisiableConf? "text" : "password"} name="confirmed_password" id="confirmed_password" className="block pl-2 px-0 pt-1 z-0 w-full text-sm text-gray-900 bg-transparent  rounded-md rounded-l-none focus-within:!border-orange-500  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder="*********" required />
                         {isVisiableConf ? <FaEye className='mr-2' onClick={toggleVisibleConif}/> : <FaRegEyeSlash className='mr-2' onClick={toggleVisibleConif}/> }
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.confirmed_password?.message} </span>
            </div>

            

           


            {/* <div className="mb-4 ">
                <label className="font-medium relative text-md text-gray-600 dark:text-gray-200" htmlFor="name">Name : </label>
                <input id="name" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-150 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="user name" />
                
            </div> */}
            {/* <div className="mb-4">
                <label className="font-medium text-md text-gray-600 dark:text-gray-200" htmlFor="LoginEmail">Email Address:</label>
                <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-150 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="name@example.com" />
            </div>
            <div className="mb-4">
                <label className="font-medium text-md text-gray-600 dark:text-gray-200" htmlFor="LoginPassword">Password:</label>
                <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-150 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Password:" />
            </div> */}
            <div className="flex items-center mb-4">
                    <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="accept" />
                    <label className="form-checkbox-label dark:text-slate-400" htmlFor="accept">I Accept <a href="" className="text-violet-600">Terms And Condition</a></label>
                </div>
            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
            <div className="text-center">
                <span className="text-slate-400 me-2">Already have an account ? </span> <a href="login.html" className="text-black dark:text-white font-bold">Sign in</a>
            </div>
        </div>
    </form>
   </div>
  );
};

export default SignUpForm;