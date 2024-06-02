"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";


import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';
import { passwordStrength } from 'check-password-strength';
import PasswordStrengthCheck from './PasswordStrengthCheck';
import { registerUser, resetPassword } from '@/utils/authActions';
import { toast } from 'react-toastify';
interface Props {
    jwtUserId: string;
  }
const formSchema = z.object({
    
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


const ResetPasswordForm = ({ jwtUserId }: Props) => {
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
         try {
      const result = await resetPassword(jwtUserId, data.password);
      if (result === "success")
        toast.success("Your password has been reset successfully!");
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
    }
    // useEffect(()=>{
    //     setPassStrength(passwordStrength(watch().password).id);
    // }, [watch().password]);

    useEffect(() => {
        setPassStrength(passwordStrength(watch().password).id);
      }, [watch().password]);
      ResetPasswordForm
  return (
   <div className="max-w-[400px] w-full max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white dark:bg-black-100 border dark:border-gray-800 shadow-md dark:sha0dow-gray-800 rounded-md">
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  ">
        <div className="grid grid-cols-1">
        
        
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

 
            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
           
        </div>
    </form>
   </div>
  );
};

export default ResetPasswordForm;