
import React from 'react';

import { Service } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
interface ServiceProps {
    service: Service;
    locale : string,
    messages : AbstractIntlMessages,
  }
const ServiceCol = ({ service,locale,messages } : ServiceProps) => {
  const request = (messages as any).HomePage.requestService;
  const details = (messages as any).HomePage.details;
  return (
    <div className="flex-100 sm:flex-20 py-2">
    <div className=" py-3 text-center rounded-md shadow-xl border border-gray-200">
     <div className="flex px-2  justify-center">
        {service.image && <img src={service.image} alt={service.name} />}
     </div>
        {locale == 'en' ? <div className="mt-1.5 ">
            <p className="text-gray-800 text-xl mb-1 font-semibold dark:text-orange-500 ">{service.name}</p>
            <p className="text-gray-500 text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-5 font-medium mb-4">{service.description}</p>
            <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{request}</a>
            </div>
            <div className="flex items-center bg-gray-200 px-2 py-1 mx-auto justify-center border  border-gray-300 rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{details}</a>
            </div>
        </div>
        : 
        <div className="mt-1.5 font-arabic ">
            <p className="text-gray-800 text-lg font-bold dark:text-orange-500 mb-2">{service.nameAr}</p>
            <p className="text-gray-500 text-sm tracking-8  leading-7 px-1.5 dark:text-gray-100 line-clamp-5 font-medium mb-4">{service.descriptionAr}</p>
            <div className="flex px-3 gap-x-3 justify-center border-t border-t-gray-200 pt-3">
             <div className="py-1 px-2 text-center bg-orange-600 border border-orange-600 rounded-md">
              <Link href="/service" className="text-base rtl:font-arabic rtl:text-sm rtl:font-bold text-white">{request}</Link>
             </div>
             <div className="py-1 px-2 text-center border bg-gray-50 rounded-md">
              <Link href="/service" className="text-base rtl:font-arabic rtl:font-semibold rtl:text-sm"> {details}</Link>
             </div>
           </div>
        </div>
          }

    </div>
    </div>
  );
};

export default ServiceCol;

