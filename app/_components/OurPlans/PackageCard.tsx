
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import { Package, Plan } from '@prisma/client';
import { PackageForFront } from '@/app/[locale]/admin/packages/_utils/PackageForFront';
import { MdOutlineDone } from 'react-icons/md';
interface ServiceProps {
    packageData: PackageForFront,
    locale : string,
    messages : AbstractIntlMessages,
  }
const PackageCard = ({ packageData,locale,messages } : ServiceProps) => {
  const request = (messages as any).HomePage.requestService;
  const details = (messages as any).HomePage.details;


  


  return (
    <div className="bg-gray-100 border border-gray-300 rounded-xl shadow-xl dark:bg-[#151515] pb-5">
        <div className="bg-black-150 rounded-2xl flex flex-col justify-center items-center">
            <div className=" py-4 bg-[#151318] w-full rounded-t-xl border border-gray-500" >
                {locale === 'en' ? <div>
                  <p className="text-white text-xl text-center  font-semibold px-4">{packageData.name}<span className="text-[#ff7900] mt-2 text-md block">: 30,000 </span><span className="text-[#ff7900] block text-sm">Sam Company LDT </span></p>
                  <p className="relative text-center before:content-[''] before:absolute before:top-[50%] before:left-0 before:w-[104px] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-white after:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[104px] after:h-px after:bg-gradient-to-l after:from-transparent after:via-white after:to-white"><span className="text-white text-md px-4 pt-4">Finder Tool</span></p>
                  <p className="text-gray-300 text-bxs text-center">University Rank finder tool</p>
                </div>:
                <div className='font-arabic'>
                <p className="text-white text-2xl text-center  font-semibold px-4">{packageData.nameAr}<span className="text-[#ff7900] mt-2 text-2xl block">{packageData.price.toString()}$</span></p>
                <p className="relative text-center before:content-[''] before:absolute before:top-[50%] before:left-0 before:w-[104px] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-white after:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[104px] after:h-px after:bg-gradient-to-l after:from-transparent after:via-white after:to-white"><span className="text-white text-md px-4 pt-4">{packageData.name}</span></p>
               
              </div>
                }
            </div>
         </div>
    <div className=" rounded-b-md  px-3 ">
     <div className="flex px-2 pt-4 sm:h-44 justify-center">
        {packageData.image && <img src={packageData.image} className='w-10/12 mx-auto border border-gray-300 h-full rounded-lg ' alt={packageData.name} />}
     </div>
        {locale == 'en' ? <div className="mt-1.5 ">
            <p className="text-gray-800 text-xl mb-1 text-center font-semibold dark:text-orange-500 ">{packageData.name}</p>
            <p className="text-gray-700  text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-5 font-medium mb-4">{packageData.description}</p>
            <div className="">
                <span className="text-gray-900 text-md font-semibold">Features : </span>
                <p className="text-sm text-gray-700 leading-6">{packageData.name}</p>
             </div>
            <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{request}</a>
            </div>
            <div className="flex items-center bg-gray-200 px-2 py-1 mx-auto justify-center border  border-gray-300 rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{details}</a>
            </div>
        </div>
        : 
        <div className="mt-1.5 font-arabic ">
            <p className="text-gray-800 text-lg font-bold text-center dark:text-orange-500 mb-">{packageData.nameAr}</p>
            <p className="text-gray-700 text-sm tracking-8  leading-7 px-1.5 dark:text-gray-100 line-clamp-3 font-medium mb-4">{packageData.descriptionAr}</p>
            <div className="flex flex-col p-2">
              {packageData.features.length > 0 && 
               packageData.features.map((featuter)=> (
                <div className="py-2.5 flex gap-x-2 items-center border-b border-b-gray-200">
                  <span className={`inline-flex items-center  justify-center h-6 w-6 rounded-full border  ${featuter.included?'bg-[#00a8c6] border-[#00a8c6]' : 'bg-gray-400 border-gray-400'} `}>
                  <MdOutlineDone className="text-white text-base " />
                  </span>
                  {featuter.feature && <span className="text-md font-semibold text-gray800 dark:text-white">{featuter.feature.valueAr}</span> }
                </div>
               ))
              }
            </div>
            <div className="flex px-3 gap-x-3 justify-center border-t border-t-gray-200 pt-3">
             <div className="py-1 px-2 text-center bg-orange-600 border border-orange-600 rounded-md">
              <Link href="/service" className="text-base rtl:font-arabic rtl:text-sm rtl:font-bold text-white">{request}</Link>
             </div>
             <div className="py-1 px-2 text-center border bg-gray-50 rounded-md">
              <Link href={`/packageDatas/${packageData.slug}`} className="text-base rtl:font-arabic rtl:font-semibold rtl:text-sm"> {details}</Link>
             </div>
           </div>
        </div>
          }

    </div>
    </div>
  );
};

export default PackageCard;

