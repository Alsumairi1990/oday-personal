'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
interface Props {
    locale : string,
    messages : AbstractIntlMessages

}
function PackagesPanel({locale,messages}:Props) {
  
  const preview = (messages as any).HomePage.workPreview;
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
    <div className="w-11.3/12 py-6 rounded  mx-auto flex flex-wrap  px-4 relative  bg-no-repeat bg-center bg-cover -z-0"  style={{backgroundImage: `url(${img})`}}>
       <div className="sm:flex-30 flex max-sm:mb-3">
        <div className="p-1 flex items-center">
          <img src={logo} className='w-20' alt="subscription" />
          <div className="bg-gray-50 flex items-center mt-7 px-2 rounded-l-md -mr-2">
            <span className="text-gray-900 font-bold font-arabic inline-flex py-2"> باقات الاشتراك
            </span>
          </div>
        </div>
        
       </div>
       <div className="sm:flex-40 grid grid-cols-3 gap-x-2">
           <div className=" bg-[#293347] flex flex-col items-center rounded border border-[#6a707e] ">
             <div className="p-2 py-4">
               <span className="text-white font-arabic text-lg font-bold pb-2">  الباقة الاساسية </span>
             </div>
             <div className="p-1 bg-[#4a5162] w-full text-center">
               <span className="text-white font-bold">  2097  </span>
             </div>
           </div>
           <div className=" bg-[#293347] flex flex-col items-center rounded border border-[#6a707e] ">
             <div className="p-2 py-4">
               <span className="text-white font-arabic text-lg font-bold pb-2">  الباقة الاحترافية </span>
             </div>
             <div className="p-1 bg-[#4a5162] w-full text-center">
               <span className="text-white font-bold">  8765  </span>
             </div>
           </div>
           <div className=" bg-[#293347] flex flex-col items-center rounded border border-[#6a707e] ">
             <div className="p-2 py-4">
               <span className="text-white font-arabic text-lg font-bold pb-2">  الباقة المتقدمة </span>
             </div>
             <div className="p-1 bg-[#4a5162] w-full text-center">
               <span className="text-white font-bold">  12876  </span>
             </div>
           </div>
       </div>
       <div className="flex-100 sm:flex-30 flex items-center justify-center">
            <Link href="/plans/categories" className="py-1.5 text-center px-5 max-sm:mt-4 max-sm:w-full rounded-md  h-fit" style={{background:'linear-gradient(0deg, #981c45, #e91818)'}}>
               <span className="text-white font-arabic text-base font-bold pb-2" >  المـــزيد  </span>
             </Link>
       </div>
     </div>
  )
}

export default PackagesPanel