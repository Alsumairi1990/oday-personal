
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
import { Feature } from '@prisma/client';
interface Props {
    feature: Feature;
    locale : string,
    messages : AbstractIntlMessages,
    
  }
const FeatureCard = ({ feature,locale,messages } : Props) => {
  const request = (messages as any).HomePage.requestindustry;
  const details = (messages as any).HomePage.details;
  const buy = (messages as any).Common.buy;
  return (
    
    <div  className=" relative border shadow-md pt-3 max-sm:mt-3 rounded-md bg-white dark:bg-[#111] ">
   
        {locale == 'en' ? <div className=" h-full w-full flex flex-col items-center justify-center ">
            
            <p className="text-gray-800 text-xl text-center mb-1 font-semibold dark:text-orange-500 ">{feature.title}</p>
            <p className="text-gray-800 text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-2 font-medium mb-4">{feature.desc}</p>

        </div>
        : 
        <div className="font-arabic w-full flex flex-col h-full  items-center justify-center ">
                <span className="absolute max-sm:hidden inline-block h-[18px] -top-[5px] w-[18px] -left-1  bg-[#f77a40] border-4 border-white rounded-full outline-dashed outline-1 outline-[#f77a40] "></span>
        <span className="absolute sm:hidden inline-block h-[18px] -top-[5px] w-[18px] -left-1  bg-[#f77a40] border-4 border-white rounded-full outline-dashed outline-1 outline-[#f77a40]  before:content-[''] before:w-[2px] before:h-[44px] before:border-l before:border-dashed before:border-[#f77a40] before:absolute before:top-[-29px] z-10 before:left-[-14px] before:rotate-[127deg] before:z-10"></span>
            <p className="text-gray-800 text-base sm:text-lg text-center font-bold dark:text-orange-500 mb-2">{feature.titleAr}</p>
            <p className="text-gray-800 text-sm leading-6 px-2 dark:text-gray-100 line-clamp-2 font-medium mb-4">{feature.descAr}</p>
        </div>
          }

    </div>
  );
};

export default FeatureCard;

