"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaUserTie } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import validator from 'validator';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { passwordStrength } from 'check-password-strength';
import PasswordStrengthCheck from './PasswordStrengthCheck';
import { registerUser } from '@/utils/authActions';
import { toast } from 'react-toastify';
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
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

interface Props{
    callbackUrl? : String,
    locale : String,
    messages : AbstractIntlMessages,
}

const SignUpForm = (props : Props) => {
    // const {register,handleSubmit,reset,control,formState:{errors}} = useForm<inputType>({
    //     resolver: zodResolver(formSchema)
    // });
    const [ registerResult , setRegisterResult] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error , setError] = useState<string>('');
    const password = (props.messages as any).Common.password;
    const email = (props.messages as any).Common.email;
    const registerNew = (props.messages as any).Common.register;
    const signIn = (props.messages as any).Common.signIn;
    const userName = (props.messages as any).Common.UserName;
    const phoneNo = (props.messages as any).Common.phoneNo;
    const confirmedPassword = (props.messages as any).Common.confirmedPassword;
    const accept = (props.messages as any).Common.accept;
    const termsCondition = (props.messages as any).Common.termsCondition;   
    const alreadyAccount = (props.messages as any).Common.alreadyAccount;   



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
        // const user = data;
        setLoading(true);
        const user = {
            ...data,
            role : 'user'
        }
        try{
            const result = await registerUser(user);
            if(result === 'success'){
                setRegisterResult(true)
            }
           setLoading(false)

        }catch(error){
            setLoading(false);
        }
    }
    // useEffect(()=>{
    //     setPassStrength(passwordStrength(watch().password).id);
    // }, [watch().password]);

    useEffect(() => {
        setPassStrength(passwordStrength(watch().password).id);
      }, [watch().password]);
    
  return (
   <div className="max-w-[400px]  w-full relative max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white dark:bg-black-100 border dark:border-gray-800 shadow-md dark:sha0dow-gray-800 rounded-md">
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  ">
        <div className="grid grid-cols-1">
        
           {registerResult && <div className="w-full left-0 top-0 fixed h-full flex justify-center items-center z-20  bg-[#00000077]" >
                <div className="p-1 w-11.5/12 sm:w-5/12 rounded-md border bg-white border-gray-300 ">
                <div className="py-1.5 flex items-center bg-gray-100 text-gray-700 mb-2">
                    <span className="p"> Register prcoess</span> 
                    <span  onClick={() => { setRegisterResult(false); }} className="ltr:ml-auto rtl:mr-auto pr-1.5"><IoMdClose className='text-2xl text-gray-600' /></span> 
                </div>
                <div className="my-4">
                    <p className="text-green-500 mb-3 font-semibold text-sm">
                    You have successfull register , pleas check your email for vervication
                </p>
                </div>  
                <Link href={`/auth/signin`} className="p1 my-3">
                  <span
                  className="p-1.5 border border-white px-2 bg-orange-500 text-white rounded-md">got to signin page</span> 
                </Link>
            </div>
           </div>}
             {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
                
            
           <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="user_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">{userName}</label>
                    <div className="flex items-center w-full">
                       <span className=" border bg-gray-100 ltr:border-r-0 ltr:rounded-l-md rtl:border-l-0 rtl:rounded-r-md border-gray-300 h-10 flex items-center px-2">
                         <FaUserTie className='text-gray-500'/>
                        </span>
                        <div className="relative flex w-full">
                        <input   {...register('user_name')} type="text" name="user_name" id="user_name" className="block ltr:pl-2 rtl:pr-2 ltr:rounded-l-none rtl:rounded-r-none h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder={userName} required />
                        
                        </div>
                        
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.user_name?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="user_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">{email}</label>
                    <div className="flex items-center w-full">
                       <span className=" border bg-gray-100 ltr:border-r-0 ltr:rounded-l-md rtl:border-l-0 rtl:rounded-r-md border-gray-300 h-10 flex items-center px-2">
                       <MdMarkEmailUnread className='text-lg text-gray-500'/>
                        </span>
                        <div className="relative flex w-full">
                        <input {...register('email')} type="email"  name="email" id="email" className="block ltr:pl-2 rtl:pr-2 ltr:rounded-l-none rtl:rounded-r-none h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="example@gmail.com" required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.email?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="user_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">{phoneNo}</label>
                    <div className="flex items-center w-full">
                        <span className=" border bg-gray-100 ltr:border-r-0 ltr:rounded-l-md rtl:border-l-0 rtl:rounded-r-md border-gray-300 h-10 flex items-center px-2">
                          <FaPhoneAlt className='text-lg text-gray-500'/>
                        </span>
                        <div className="relative flex w-full">
                        <input {...register('phone')} type="text" name="phone" id="email" className="block ltr:pl-2 rtl:pr-2 ltr:rounded-l-none rtl:rounded-r-none h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="9832434" required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.phone?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="password" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">{password}</label>
                    <div className="flex items-center w-full">
                       <span className=" border bg-gray-100 ltr:border-r-0 ltr:rounded-l-md rtl:border-l-0 rtl:rounded-r-md border-gray-300 h-10 flex items-center px-2">
                         <RiLockPasswordFill className='text-lg text-gray-500'/>
                          </span>
                        <div className="relative flex items-center border h-10  w-full">
                        <input {...register('password')} type={isVisiable? "text" : "password"} name="password" id="password" className="block pl-2 px-0 pt-1 z-0 w-full text-sm text-gray-900 bg-transparent  rounded-md rounded-l-none focus-within:!border-orange-500  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder="*********" required />
                         {isVisiable ? <FaEye className='mr-2' onClick={toggleVisible} /> : <FaRegEyeSlash className='ltr:mr-2 rtl:ml-2' onClick={toggleVisible} /> }
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors?.password?.message} </span>
                    <div className="mt-1">
                     <PasswordStrengthCheck passStrength ={passStrength}  />
                    </div>
            </div>
            
            

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="confirmed_password" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">{confirmedPassword}</label>
                    <div className="flex items-center w-full">
                       <span className=" border bg-gray-100 ltr:border-r-0 ltr:rounded-l-md rtl:border-l-0 rtl:rounded-r-md border-gray-300 h-10 flex items-center px-2">
                       <RiLockPasswordFill className='text-lg text-gray-500' />
                        </span>
                        <div className="relative flex items-center border h-10  w-full">
                        <input {...register('confirmed_password')} type={isVisiableConf? "text" : "password"} name="confirmed_password" id="confirmed_password" className="block pl-2 px-0 pt-1 z-0 w-full text-sm text-gray-900 bg-transparent  rounded-md rounded-l-none focus-within:!border-orange-500  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder="*********" required />
                         {isVisiableConf ? <FaEye className='mr-2' onClick={toggleVisibleConif}/> : <FaRegEyeSlash className='ltr:mr-2 rtl:ml-2' onClick={toggleVisibleConif}/> }
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.confirmed_password?.message} </span>
            </div>

            
            <div className="flex items-center mb-4">
                    <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="accept" />
                    <label className="form-checkbox-label dark:text-slate-400" htmlFor="accept">{accept} <a href="" className="text-violet-600">{termsCondition}</a></label>
                </div>
            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
            <div className="text-center">
                <span className="text-slate-400 me-2">{alreadyAccount}? </span> <a href="login.html" className="text-black dark:text-white font-bold">Sign in</a>
            </div>
        </div>
    </form>
   </div>
  );
};

export default SignUpForm;