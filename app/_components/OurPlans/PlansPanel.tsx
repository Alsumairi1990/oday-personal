'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import { FaArtstation } from 'react-icons/fa';
import { IoCalendarClear } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';
interface Props {
    locale : string,
    messages : AbstractIntlMessages

}
function PlansPanel({locale,messages}:Props) {
  
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;

  // const img1 = "/plans-media/images/packages.jpg"
  // const img2 = "/plans-media/images/packages.jpg"
 
  const logo = "/plans-media/images/plan-logo1.webp"
  const [isMobile, setIsMobile] = useState(false);
  const img = isMobile
  ? "/plans-media/images/plan-mob1.webp"
  : "/plans-media/images/packages.jpg";
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial screen size
    handleResize();

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
    <div className="flex w-fit px-4 gap-x-4 rounded-[7rem] bg-gray-50 py-[9px] border border-gray-300 my-3  mx-auto justify-center">
      <button type='button'
       className="p-2 rounded-3xl text-md font-medium text-white  border  relative text-foreground text-center bg-red-500  border-red-500"
       >
        Web Deveopment
        <span className="z-10 absolute left-[40%] top-1/2 -bottom-6 border-l-[20px] border-r-[20px] border-b-[13px] border-l-transparent border-r-transparent border-b-red-600 "></span>
      </button>
      <button type='button'
       className="p-2 hover:bg-red-500 rounded-3xl text-md font-medium text-gray-800 bg-white border relative text-foreground text-center bg-background  border-gray-300"
       >
        Hraphic Design
        <span className="z-10 hidden absolute left-[40%] top-1/2 -bottom-6 border-l-[20px] border-r-[20px] border-b-[13px] border-l-transparent border-r-transparent border-b-red-600 "></span>
      </button>


    </div>
    <div className="w-11.3/12 pt-9 pb-6 rounded  mx-auto rtl:font-arabic flex flex-wrap  px-4 relative  bg-no-repeat bg-center bg-cover -z-0"  style={{backgroundImage: `url(${img})`}}>
       <div className="sm:flex-30 flex max-sm:mb-3">
        <div className="p-1 flex items-center">
          <img src={logo} className='w-20' alt="subscription" />
          <div className="bg-gray-50 flex items-center mt-7 px-2 rounded-l-md relative -mr-2">
            <span className="text-gray-900 font-bold font-arabic inline-flex py-2"> باقات الاشتراك
            </span>
          </div>
        </div>
        
       </div>
       <div className="sm:flex-40 grid grid-cols-3 gap-x-2">
           <div className=" bg-[#293347] flex flex-col relative items-center rounded border border-[#6a707e] ">
             <span className="absolute -top-6 items-center justify-center  rounded-full border bg-[#293347] inline-flex h-10 w-10 bcg-[rgba(31,41,55,0.5)] border-[#6a707e]">
              <FaArtstation className='text-white text-xl' />
              </span>
              
             <div className="px-2 pt-5 pb-4">
               <span className="text-white font-arabic text-lg font-bold pb-2">  الباقة الاساسية </span>
             </div>
             <div className="p-1 bg-[#4a5162] w-full text-center">
               <span className="text-white font-bold">  2097$  </span>
             </div>
             <div className="p-2  w-full text-center border-t border-t-[#6a707e]">
               <span className="text-whie inline-flex py-0.5 text-sm border border-orange-400 rounded-md text-orange-400 justify-center w-full font-bold"> {request}   </span>
             </div>
           </div>
           <div className=" bg-[#293347] flex flex-col items-center rounded border relative border-[#6a707e] ">
              <span className="absolute -top-6 items-center justify-center  rounded-full border bg-[#293347] inline-flex h-10 w-10 bcg-[rgba(31,41,55,0.5)] border-[#6a707e]">
               <IoCalendarClear className='text-white text-xl' />
              </span>
             <div className="px-2 py-5 pb-4">
               <span className="text-white font-arabic text-lg font-bold pb-2">  الباقة الاحترافية </span>
             </div>
             <div className="p-1 bg-[#4a5162] w-full text-center">
               <span className="text-white font-bold">  8765$  </span>
             </div>
             <div className="p-2  w-full text-center border-t border-t-[#6a707e]">
               <span className="text-whie inline-flex py-0.5 text-sm border border-orange-400 rounded-md text-orange-400 justify-center w-full font-bold"> {request}   </span>
             </div>
           </div>
           <div className=" bg-[#293347] flex flex-col items-center relative rounded border border-[#6a707e] ">
              <span className="absolute -top-6 items-center justify-center  rounded-full border bg-[#293347] inline-flex h-10 w-10 bcg-[rgba(31,41,55,0.5)] border-[#6a707e]">
               <BiSolidOffer className='text-white text-xl' />
              </span>
             <div className="px-2 pt-5 pb-4">
               <span className="text-white font-arabic text-lg font-bold pb-2">  الباقة المتقدمة </span>
             </div>
             <div className="p-1 bg-[#4a5162] w-full text-center">
               <span className="text-white font-bold">  12876$  </span>
             </div>
             <div className="p-2  w-full text-center border-t border-t-[#6a707e]">
               <span className="text-whie inline-flex py-0.5 text-sm border border-orange-400 rounded-md text-orange-400 justify-center w-full font-bold"> {request}   </span>
             </div>
           </div>
       </div>
       <div className="flex-100 sm:flex-30 flex items-center justify-center">
            <Link href="/plans/categories" className="py-1.5 text-center px-5 max-sm:mt-4 max-sm:w-full rounded-md  h-fit" style={{background:'linear-gradient(0deg, #981c45, #e91818)'}}>
               <span className="text-white font-arabic text-base font-bold pb-2" >  المـــزيد  </span>
             </Link>
       </div>
     </div>
     </>
  )
}

export default PlansPanel