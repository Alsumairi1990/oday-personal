
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
import { Industry, Service } from '@prisma/client';
interface Props {
    service: Service;
    locale : string,
    messages : AbstractIntlMessages,
    
  }
const IndustryService = ({ service,locale,messages } : Props) => {
  const request = (messages as any).HomePage.requestindustry;
  const details = (messages as any).HomePage.details;
  const buy = (messages as any).Common.buy;
  return (
    
    <Link href={`/industries/${service.name_slug}`}  className=" relative border border-dashed border-orange-600 pt-3 pb-2 rounded-md bg-white dark:bg-[#111] ">
     {/* <div className="flex h-full  justify-center">
        {industry.image && industry.name && <img className='h-full' src={industry.image} alt={industry.name} />}
     </div> */}
        {locale == 'en' ? <div className=" h-full w-full flex flex-col items-center justify-center ">
            <div className="w-20 h-20">
            {service.icon && service.name && <img className='h-full' src={service.icon} alt={service.name} />}
            </div>
            <p className="text-gray-800 text-xl text-center mb-1 font-semibold dark:text-orange-500 ">{service.name}</p>
            {/* <p className="text-gray-200 text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-2 font-medium mb-4">{industry.description}</p> */}

        </div>
        : 
        <div className="font-arabic w-full flex flex-col h-full items-center justify-center ">
              <div className="w-20 h-20 mb-2">
                {/* {industry.icon} */}
            {service.icon && service.name && <img className='h-full' src={service.icon} alt={service.name} />}
            </div>
            <p className="text-gray-800 text-lg text-center font-bold dark:text-orange-500 mb-2">{service.nameAr}</p>
            {/* <p className="text-gray-200 text-sm   leading-6 px-2 dark:text-gray-100 line-clamp-1 font-medium mb-4">{industry.descriptionAr}</p> */}
        </div>
          }

    </Link>
  );
};

export default IndustryService;

