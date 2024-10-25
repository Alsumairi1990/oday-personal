
import { PageSection, Service } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';
interface Props {
  services:Service[],
  meta : PageSection
}
const ServicesFull = async ({services,meta}:Props) => {

  const locale = await getLocale();
  const messages = await getMessages({ locale });
  return (

      <div className="flex flex-col sm:py-8  dark:bg-[#080808]">
        <div className="p-1 w-11/12 mx-auto">
        {locale == 'en' ? <h2 className="text-3xl text-center px-8 mb-6 text-blue-700 dark:text-white font-semibold">{meta.title}</h2>
        : <h2 className="text-3xl font-arabic rtl:font-bold text-center px-8 mb-3 text-blue-700 dark:text-white font-normal">{meta.titleAr}</h2>
        }

        {locale == 'en' ? <p className="text-base text-gray-600 dark:text-gray-300 text-center leading-7 px-8">{meta.desc}</p>
        :<p className="text-base font-arabic rtl:text-gray-700 text-gray-600 dark:text-gray-300 text-center leading-7 px-8">{meta.descAr}</p>
         }
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-x-5 gap-y-8 mt-8">
          {services && services.map((service) => (
              <Link  href={`/services/${service.name_slug}`} className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-600 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
              <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-24  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              {service.icon && <img className='w-full mx-auto' src={service.icon} alt="" />}
              </div>
              <div className="sm:p2 mt-1 text-center">
                {locale == 'en' ? <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">{service.name}</h2>             
                   : <h2 className="text-base sm:text-base font-arabic capitalize sm:capitalize font-semibold ">{service.nameAr}</h2>
                   }
             </div>
              </Link>

         ))}
          
        </div>
        <div className="mt-8 flex justify-center relative " >
          {
            locale == "en" ? (
              <Link
                href={"/services"}
                className="capitalize text-gray-700 z-10 px-2.5 rounded py-1.5 font-semibold bg-gray-100 "
              >
                {meta.more}{" "}
              </Link>
            ) : (
              <Link
                href={"/services"}
                className="capitalize font-arabic border z-10 
                relative after:content[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:border-y-[18px] after:border-l-[30px] after:border-r-[0px] after:border-y-transparent after:-right-[30px]  
                before:content[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:border-y-[18px] before:border-r-[30px] before:border-l-[0px] before:border-y-transparent before:-left-[30px]  border-orange-600 text-gray-50 text-md px-2.5 rounded-md py-1.5 font-semibold bg-orange-600 "
              >
                {meta.moreAr}{" "}
              </Link>
            )
          }
            <span className="h-[0.1rem] w-full bg-gray-300 dark:bg-gray-800 absolute z-0 top-4">
            </span>
        </div>
        {/* <div className="mt-8 flex justify-center">
        {locale == 'en' ? 
                   <Link href={'/services'} className="capitalize text-gray-700  px-2.5 rounded py-1.5 font-semibold bg-gray-100 ">{meta.more} </Link>

                  : <Link href={'/services'} className="capitalize font-arabic border border-gray-200 text-gray-700  px-2.5 rounded py-1.5 font-semibold bg-gray-100 "> {meta.moreAr} </Link> 
                  }
        </div> */}
        </div>
      </div>
      
  );
};

export default ServicesFull;