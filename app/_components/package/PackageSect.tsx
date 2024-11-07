'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import { FaArtstation } from 'react-icons/fa';
import { IoCalendarClear } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';
import { Package } from '@prisma/client';
import PackageCard from '../OurPlans/PackageCard';
import { PackageForFront } from '@/app/[locale]/admin/packages/_utils/PackageForFront';
interface Props {
    packagesData : PackageForFront[],
    locale : string,
    messages : AbstractIntlMessages

}
function PlansPanel({packagesData,locale,messages}:Props) {
  
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
    <div className="w-11.3/12 grid sm:grid-cols-3 rtl:font-arabic  px-4 ">
         {packagesData &&
            packagesData.map((packageData)=> (
                <PackageCard packageData={packageData}   locale={locale} messages={messages} />
            ))
         }
     </div>
     </>
  )
}

export default PlansPanel