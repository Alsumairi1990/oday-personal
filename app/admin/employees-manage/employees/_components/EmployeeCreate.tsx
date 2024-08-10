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
import PasswordStrengthCheck from '@/app/_components/PasswordStrengthCheck';
import { EmployeeSchema } from '../_utils/EmployeeSchema';
import { LuAlertOctagon } from 'react-icons/lu';
import { Span } from 'next/dist/trace';


type inputType = z.infer<typeof EmployeeSchema>;
const SignUpForm = () => {

     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(EmployeeSchema),
  });
    const [isVisiable,setIsVisiable] = useState(false);
    const [isVisiableConf,setIsVisiableConf] = useState(false);
    const [passStrength,setPassStrength] = useState(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSucess] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const toggleVisible = () => {setIsVisiable((prev) => !prev)}
    const toggleVisibleConif = () => {setIsVisiableConf((prev) => !prev)}
    const saveUser: SubmitHandler<inputType> = async (data)=>{
        const user = {
            ...data,
            role : 'admin'
        }
        try{
            setLoading(true);
            const result = await registerUser(user)
            console.log("sucess");
            setLoading(false);
            setSucess(true);
            setError('');
            toast.success("successfully data added")

        }catch(error:any){
            toast.error("sothing went wrong");
            setLoading(false);
            setError(error.message)
        }
    }

    useEffect(() => {
        setPassStrength(passwordStrength(watch().password).id);
      }, [watch().password]);
    
  return (
   <div className="max-w-[400px] w-full relative max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white dark:bg-black-100 border dark:border-gray-800 shadow-md dark:sha0dow-gray-800 rounded-md">
      {loading && (
        <div
          className=" w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className="loader-2 w-4"></div>
        </div>
      )}
        {error && (
                  <div className="py-3 my-1 border-t border-t-gray-300 flex items-center">
                    <LuAlertOctagon className="text-gray-500 mr-2 text-xl" />
                    <span className="text-red-400 text-md">{error}</span>
                  </div>
                )}
                {success && <span className='text-green-500 text-md capitalize'>sucess</span>
                }
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