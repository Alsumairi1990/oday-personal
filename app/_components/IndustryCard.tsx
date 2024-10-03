
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
import { Industry } from '@prisma/client';
interface Props {
    industry: Industry;
    locale : string,
    messages : AbstractIntlMessages,
    
  }
const IndustryCard = ({ industry,locale,messages } : Props) => {
  const request = (messages as any).HomePage.requestindustry;
  const details = (messages as any).HomePage.details;
  const buy = (messages as any).Common.buy;
  return (
    
    <div className=" relative h-72 border-b border-b-gray-700 ">
     <div className="flex h-full  justify-center">
        {industry.image && industry.name && <img className='h-full' src={industry.image} alt={industry.name} />}
     </div>
        {locale == 'en' ? <div className="absolute h-full top-0 left-0 w-full flex flex-col items-center justify-center ">
            <div className="w-14">
            {industry.icon && industry.name && <img className='h-full' src={industry.icon} alt={industry.name} />}
            </div>
            <p className="text-gray-100 text-xl mb-1 font-semibold dark:text-orange-500 ">{industry.name}</p>
            <p className="text-gray-200 text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-2 font-medium mb-4">{industry.description}</p>
            {/* <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{buy}</a>
            </div>
            <div className="flex items-center bg-gray-200 px-2 py-1 mx-auto justify-center border  border-gray-300 rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{details}</a>
            </div> */}
        </div>
        : 
        <div className="font-arabic absolute top-0 left-0 w-full flex flex-col h-full items-center justify-center ">
              <div className="w-14 mb-2">
                {/* {industry.icon} */}
            {industry.icon && industry.name && <img className='h-full' src={industry.icon} alt={industry.name} />}
            </div>
            <p className="text-gray-100 text-lg font-bold dark:text-orange-500 mb-2">{industry.nameAr}</p>
            <p className="text-gray-200 text-sm   leading-6 px-2 dark:text-gray-100 line-clamp-1 font-medium mb-4">{industry.descriptionAr}</p>
            {/* <div className="flex px-3 gap-x-3 justify-center border-t border-t-gray-200 pt-3">
             <div className="py-1 px-2 text-center bg-orange-600 border border-orange-600 rounded-md">
              <Link href="/industry" className="text-base rtl:font-arabic rtl:text-sm rtl:font-bold text-white">{buy}</Link>
             </div>
             <div className="py-1 px-2 text-center border bg-gray-50 rounded-md">
              <Link href="/industry" className="text-base rtl:font-arabic rtl:font-semibold rtl:text-sm"> {details}</Link>
             </div>
           </div> */}
        </div>
          }

    </div>
  );
};

export default IndustryCard;

