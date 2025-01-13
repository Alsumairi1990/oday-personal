
import React from 'react';

import { Client} from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
interface clientProps {
    client: Client;
    locale : string,
    messages : AbstractIntlMessages,
    category? : CategoryForFront
  }
const ClientCard = ({ client,locale,messages,category } : clientProps) => {
  const request = (messages as any).HomePage.requestclient;
  const details = (messages as any).HomePage.details;
 
  return (
    <div className="  flex items-center bg-white justify-center  text-center p-2 py-3.5 rounded-md shadow-xl border border-gray-200">
        {client.image  && <img src={client.image} className='max-h-full ' alt={client.name!} />}
        {/* {locale == 'en' ? <div className="mt-1.5 ">
            <p className="text-gray-800 text-xl mb-1 font-semibold dark:text-orange-500 ">{client.name}</p>
            <p className="text-gray-500 text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-5 font-medium mb-4">{client.description}</p>
            <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{request}</a>
            </div>
            <div className="flex items-center bg-gray-200 px-2 py-1 mx-auto justify-center border  border-gray-300 rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{details}</a>
            </div>
        </div>
        : 
        <div className="mt-1.5 font-arabic ">
            <p className="text-gray-800 text-lg font-bold dark:text-orange-500 mb-2">{client.nameAr}</p>
            <p className="text-gray-500 text-sm tracking-8  leading-7 px-1.5 dark:text-gray-100 line-clamp-5 font-medium mb-4">{client.descriptionAr}</p>
            <div className="flex px-3 gap-x-3 justify-center border-t border-t-gray-200 pt-3">
             <div className="py-1 px-2 text-center bg-orange-600 border border-orange-600 rounded-md">
              <Link href="/client" className="text-base rtl:font-arabic rtl:text-sm rtl:font-bold text-white">{request}</Link>
             </div>
             <div className="py-1 px-2 text-center border bg-gray-50 rounded-md">
              <Link href="/client" className="text-base rtl:font-arabic rtl:font-semibold rtl:text-sm"> {details}</Link>
             </div>
           </div>
        </div>
          } */}
    </div>
  );
};

export default ClientCard;