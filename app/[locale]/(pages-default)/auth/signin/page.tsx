import SignInForm from "@/app/_components/SigninFrom";
import { getLocale, getMessages } from "next-intl/server";

import Link from 'next/link'

interface Props{
  searchParams:{
    callbackUrl? : String
  }
}
export default async function SigninPage({searchParams}: Props) {
  console.log("serach param"+searchParams)
   const imageBg = '/images/hero.webp';
   const image2 = '/images/col1min.png';
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  const signIn = (messages as any).Common.signIn;
  const loginDesc = (messages as any).Common.loginDesc;
  const sam = (messages as any).Common.sam;
  const whySignIn = (messages as any).Common.whySignIn;
  const whyReason1 = (messages as any).Common.whyReason1;
  const whyReason2 = (messages as any).Common.whyReason2;
  const whyReason3 = (messages as any).Common.whyReason3;
  const whyReason4 = (messages as any).Common.whyReason4;
    return (

      <div className="flex fixed top-0 left-0 h-full w-full rtl:font-arabic items-center  justify-center bg-no-repeat bg-center bg-cover  z-[60]"  style={{backgroundImage:`url(${imageBg})`}}>
        <div className="absolute top-0 z-[80]  left-0 w-full  h-full bg-[#000000e0]  " ></div>
        <div className="flex items-center w-11/12 sm:w-7/12 flex-wrap justify-center z-[90] bg-white dark:bg-card border border-gray-600 rounded-xl">
         <div className="flex-100 sm:flex-40 max-sm:hidden ltr:border-r rtl:border-l border-b-gray-200">
         <div className="img-loginOuter flex flex-col"  >
                    <div className="font-semibold flex-10 capitalize flex items-center text-2xl pl-2 pt-3">
                      <h1 className="font-semibold text-blue-700 mr-1" >{sam}</h1>
                    </div>
                    <div className="flex  justify-center mt-2">
                        <img className="w-72 max-w-full  mx-auto max-full" src={image2} alt="" />
                    </div>
                    <div className="px-4 flex-70 flex flex-col items-center mb-4 ">
                        <h1 className="text-2xl font-semibold mb-2 text-pink-700">{whySignIn}</h1>
                        <div className="flex w-full text-gray-500 text-sm flex-col gap-3 justify-between">
                            <span className="flex-30 px-3 py-1 rounded-md border border-gray-200  font-semibold">{whyReason1}</span>
                            <span className="flex-30 px-3 py-1 rounded-md border border-gray-200 font-semibold">{whyReason2}</span>
                            <span className="flex-30 px-3 py-1 rounded-md border border-gray-200  font-semibold"> {whyReason3}</span>
                            <span className="flex-30 px-3 py-1 rounded-md border border-gray-200 font-semibold"> {whyReason4}</span>
                        </div> 
                    </div> 
                </div>
        </div>
        <div className="flex-100 sm:flex-60 flex flex-col items-  justify-center">
        <div className="w-full max-w-full sm:w-9/12 sm:max-w-full py-4 m-auto p-6  borfder dark:bofrder-gray-800 sfhadow-md dark:sha0dow-gray-800 rounded-md">
              <div className="mt-2 mb-4 flex flex-col items-center text-center">
                  <span className="flex sm:mb-4 ">
                      <svg className="h-14 w-14 " viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="512" cy="512" r="512" className="fill-[#112e51]"/>
                      <path d="m458.15 617.7 18.8-107.3a56.94 56.94 0 0 1 35.2-101.9V289.4h-145.2a56.33 56.33 0 0 0-56.3 56.3v275.8a33.94 33.94 0 0 0 3.4 15c12.2 24.6 60.2 103.7 197.9 164.5V622.1a313.29 313.29 0 0 1-53.8-4.4zM656.85 289h-144.9v119.1a56.86 56.86 0 0 1 35.7 101.4l18.8 107.8A320.58 320.58 0 0 1 512 622v178.6c137.5-60.5 185.7-139.9 197.9-164.5a33.94 33.94 0 0 0 3.4-15V345.5a56 56 0 0 0-16.4-40 56.76 56.76 0 0 0-40.05-16.5z" className="fill-white"/>
                      </svg>
                  </span>
                  <h1 className="text-lg  font-bold  ">{signIn}</h1> 
                  <p className="text-sm text-gray-500">{loginDesc}</p>
              </div>
             <SignInForm callbackUrl={searchParams.callbackUrl} locale={locale} messages={messages}/> 
             <div className="text-center ">
                <Link href="/" className={` text-md sm:text-md text-gray-600 flex items-center pl-1 sm:pl-4 pr-2 font-medium`} >  Register </Link>

              </div>
        </div>
        </div> 
        </div>
      </div>
    )
  }
  
  
 