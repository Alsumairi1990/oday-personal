import React from 'react'
import { getLocale, getMessages } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { WorksFrontData } from '@/app/[locale]/admin/works/utils/WorksFrontData';
import { AbstractIntlMessages } from 'next-intl';
import { Offer } from '@prisma/client';
interface Props {
    locale : string,
    messages : AbstractIntlMessages

}
async function PackagesPanel({locale,messages}:Props) {
  
  const preview = (messages as any).HomePage.workPreview;
  const img = "/plans-media/images/packages.jpg"
  const logo = "/plans-media/images/plan-logo1.webp"


  return (
    <div className="w-11.3/12 py-6 rounded  mx-auto flex flex-wrap  px-4 relative  bg-no-repeat bg-center bg-cover -z-0"  style={{backgroundImage: `url(${img})`}}>
       <div className="sm:flex-30 flex ">
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
       <div className="sm:flex-30 flex items-center justify-center">
            <div className="py-1.5 px-5 max-sm:mt-4 rounded-md  h-fit" style={{background:'linear-gradient(0deg, #981c45, #e91818)'}}>
               <span className="text-white font-arabic text-base font-bold pb-2" >  المـــزيد  </span>
             </div>
       </div>
     </div>
  )
}

export default PackagesPanel