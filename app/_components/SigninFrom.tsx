// "use client"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { z } from "zod";
// import { useEffect } from 'react'
// import { MdMarkEmailUnread } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { FaEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { signIn , useSession} from "next-auth/react";
// import { toast } from "react-toastify";
// import { AbstractIntlMessages } from "next-intl";



// interface Props{
//     callbackUrl? : String,
//     locale : String,
//     messages : AbstractIntlMessages,
// }

// const FormSchema = z.object({
//     email: z.string().email("Please enter a valid email address"),
//     password: z.string({
//       required_error: "Please enter your password",
//     }),
//   });

// type InputType = z.infer<typeof FormSchema>;
// const SignInForm = (props : Props) => {
//     const router = useRouter();
//    const { data: session } = useSession();
//    const password = (props.messages as any).Common.password;
//    const email = (props.messages as any).Common.email;
//    const registerNew = (props.messages as any).Common.register;
//    const sign_in = (props.messages as any).Common.signIn;
//     const [isVisiable,setIsVisiable] = useState(false);
//     const toggleVisible = () => {setIsVisiable((prev) => !prev)}

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//       } = useForm<InputType>({
//         resolver: zodResolver(FormSchema),
//       });

//      useEffect(() => {
//                       document.body.style.overflow = '';

//           }, []);


//       const onSubmit: SubmitHandler<InputType> = async (data) => {
//         console.log("-------------------  start of signin form -------------");
//         const result = await signIn('credentials',{
//             redirect: false,
//             username : data.email,
//             password : data.password
//         })
//         if (!result?.ok) {
//             toast.error(result?.error);
//             return;
//           }
//           const handleSessionUpdate = async () => {
//             // Wait for session update
//             await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust timeout as needed
//             if (session) {
//               console.log(session.user.role); // Access user data only if session is available
//             } else {
//               console.log("Session not yet updated");
//             }
//             console.log("-------------------  before toast of user role-------------");
//             toast.success("Welcome To Oday Platfrom " + session!.user.role);
//             console.log("-------------------urlback" + props.callbackUrl);
//             console.log("################## User Role " + session!.user.email + "#########################");
//             router.push("/admin/home");
//           };
        
//           handleSessionUpdate(); // Call the callback function
//       }

       
//     return(
//     <div className="">
//      <form onSubmit={handleSubmit(onSubmit)} className="text-start z-40  ">
//         <div className="grid grid-cols-1">
//             <div className=" flex flex-col z-0 w-full mb-5 group">
//                     <label htmlFor="user_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">{email}</label>
//                     <div className="flex items-center w-full">
//                         <span className=" border bg-gray-100 ltr:border-r-0 ltr:rounded-l-md rtl:border-l-0 rtl:rounded-r-md border-gray-300 h-10 flex items-center px-2">
//                         <MdMarkEmailUnread className='text-lg text-gray-500'/>
//                         </span>
//                         <div className="relative flex w-full">
//                         <input {...register('email')} type="email"  name="email" id="email" className="block ltr:pl-2 rtl:pr-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md ltr:rounded-l-none rtl:rounded-r-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="example@gmail.com" required />
//                         </div>
//                     </div> 
//                     <span className="text-red-400 text-xs mt-2">{errors.email?.message} </span>
//             </div>
//             <div className=" flex flex-col z-0 w-full mb-5 group">
//                     <label htmlFor="password" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">{password}</label>
//                     <div className="flex items-center w-full">
//                         <span className=" border bg-gray-100 ltr:border-r-0 ltr:rounded-l-md rtl:border-l-0 rtl:rounded-r-md border-gray-300 h-10 flex items-center px-2">
//                         <RiLockPasswordFill className='text-lg text-gray-500'/>
//                         </span>
//                         <div className="relative flex items-center border border-gray-300 ltr:rounded-r-md rtl:rounded-l-md h-10   w-full">
//                         <input {...register('password')} type={isVisiable? "text" : "password"} name="password" id="password" className="block ltr:pl-2 rtl:pr-2 px-0 pt-1 z-0 w-full text-sm text-gray-900 bg-transparent  rounded-md rounded-l-none focus-within:!border-orange-500  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder="*********" required />
//                          {isVisiable ? <FaEye className='mr-2' onClick={toggleVisible} /> : <FaRegEyeSlash className='ltr:mr-2 rtl:ml-2' onClick={toggleVisible} /> }
//                         </div>
//                     </div> 
//                     <span className="text-red-400 text-xs mt-2">{errors?.password?.message} </span> 
//             </div>

//             <div className="mb-4">
//                 <button type="submit" disabled={isSubmitting} className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" >  {isSubmitting ? 
//                 <div className="flex items-center pl-2">
//                     <AiOutlineLoading3Quarters />
//                     <span className="text-md ml-2">{sign_in} ... </span>
//                 </div>
//                 : "Sign In"} </button>
//             </div>
           
//         </div>
//     </form>
//    </div>
//     )
// }
// export default SignInForm

'use client'
import { useSession, signIn } from "next-auth/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface Props {
  callbackUrl?: String;
  locale: string;
  messages: any;
}

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter your password",
  }),
});

type InputType = z.infer<typeof FormSchema>;

const SignInForm = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const password = props.messages.Common.password;
  const email = props.messages.Common.email;
  const sign_in = props.messages.Common.signIn;
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible((prev) => !prev);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    console.log("-------------------  start of signin form -------------");
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    });

    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }

    // Handle session update
    if (session) {
      toast.success("Welcome to Oday Platform " + session.user.role);
      router.push("/admin/home");
    }
  };

  const handleGoogleLogin = async () => {
    const result = await signIn("google", { redirect: false });
    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }
    // Handle successful Google login (you can redirect or perform other actions here)
    if (session) {
      toast.success("Welcome to Oday Platform " + session.user.role);
      router.push("/admin/home");
    }
  };

  useEffect(() => {
    document.body.style.overflow = '';
  }, []);

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="text-start z-40">
        <div className="grid grid-cols-1">
          {/* Email Field */}
          <div className="flex flex-col z-0 w-full mb-5 group">
            <label htmlFor="email" className="font-medium mb-3 text-sm text-gray-500 dark:text-gray-400">
              {email}
            </label>
            <div className="flex items-center w-full">
              <span className="border bg-gray-100 border-gray-300 h-10 flex items-center px-2">
                <MdMarkEmailUnread className="text-lg text-gray-500" />
              </span>
              <div className="relative flex w-full">
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="block w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>
            <span className="text-red-400 text-xs mt-2">{errors.email?.message}</span>
          </div>

          {/* Password Field */}
          <div className="flex flex-col z-0 w-full mb-5 group">
            <label htmlFor="password" className="font-medium mb-3 text-sm text-gray-500 dark:text-gray-400">
              {password}
            </label>
            <div className="flex items-center w-full">
              <span className="border bg-gray-100 border-gray-300 h-10 flex items-center px-2">
                <RiLockPasswordFill className="text-lg text-gray-500" />
              </span>
              <div className="relative flex items-center border border-gray-300 h-10 w-full">
                <input
                  {...register("password")}
                  type={isVisible ? "text" : "password"}
                  id="password"
                  className="block w-full text-sm text-gray-900 bg-transparent border rounded-md focus-within:border-orange-500 peer"
                  placeholder="*********"
                  required
                />
                {isVisible ? (
                  <FaEye className="mr-2" onClick={toggleVisible} />
                ) : (
                  <FaRegEyeSlash className="ltr:mr-2 rtl:ml-2" onClick={toggleVisible} />
                )}
              </div>
            </div>
            <span className="text-red-400 text-xs mt-2">{errors?.password?.message}</span>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn py-2.5 bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full"
            >
              {isSubmitting ? (
                <div className="flex items-center pl-2">
                  <AiOutlineLoading3Quarters />
                  <span className="text-md ml-2">{sign_in} ...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Google Sign In Button */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn py-2.5 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
