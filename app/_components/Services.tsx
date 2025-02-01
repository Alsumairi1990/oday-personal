
import React from 'react';
import Link from 'next/link'
import { Category, PageSection } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import Image from 'next/image';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
interface Props {
  categories : Category[],
  meta : PageSection
}
const Services = async ({categories,meta}:Props) => {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  const categoryDetails = (messages as any).HomePage.categoryDetails;
  const categoryEnq = (messages as any).HomePage.categoryEnq;
 
  return (

      <div className="flex flex-col sm:py-8  dark:bg-[#080808]">
        <div className="p-1 w-11.7/12 sm:w-11/12 mx-auto max-sm:pt-6">
        {locale == 'en' ? <h2 className="sm:text-3xl text-lg text-center px-8 mb-6 text-blue-700 dark:text-white font-semibold">{meta.title}</h2>
          : <h2 className="sm:text-3xl text-log font-arabic rtl:font-bold rtl:mb-3 text-center px-8 mb-6 text-blue-700 dark:text-white font-normal">{meta.titleAr}</h2>
          }
          {locale == 'en' ? <p className="sm:text-base text-md text-gray-600 dark:text-gray-300 text-center leading-6 py-0 px-2 sm:px-8">{meta.desc}</p>
          :<p className="sm:text-base text-md  font-arabic rtl:text-gray-700 text-gray-600 dark:text-gray-300 text-center leading-6 py-0 px-2 sm:px-8">{meta.descAr}</p>
          }
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-8 sm:gap-8 mt-8">
         {categories && categories.map((service) => (
               <div className=" sm:p-2 flex flex-col justify-centersm :pt-6 border shadow-lg dark:shadow-0 border-gray-300 bg-white dark:bg-[#111] dark:max-sm:bg-[#171717] rounded-xl dark:border-gray-600 ">
               <div className="pt-3 sm:pt-1  w-20 sm:w-24  overflow-hidden   dark:bg-[#080808] rounded-xl  px-1  flex items-center mx-auto ">
                {service.image && 
                   <Image 
                   src={service.image}
                   height={300}
                   width={300}
                   alt={service.name}
                   className='w-full mx-auto rounded-t-md sm:rounded-md'
                   />
                    }
               </div>
               <div className="sm:p2 mt-2 sm:mt-3 text-center">    
                 {locale == 'en' ? <h2 className="text-base sm:text-xl capitalize sm:uppercase font-semibold text-orange-500 dark:text-[#ca82ef]">{service.name} </h2>
                 :  <h2 className="text-md font-arabic rtl:font-bold  sm:rtl:mb-2 rtl:mb-1.5 text-center px-3 mb-2 sm:mb-6 text-gray-800 dark:text-white font-semibold">{service.nameAr}</h2>
                  }
                  {locale == 'en' ? <p className="text-sm leading-[22px] text-gray-500 dark:text-gray-300 text-center sm:leading-6 line-clamp-4 mt-1.5 sm:mt-3 sm:px-3">{service.description}</p>
                  :<p className="text-sm font-arabic rtl:text-gray-700 text-gray-600 dark:text-gray-300 text-center sm:leading-6 leading-6 line-clamp-3 px-3">{service.descriptionAr}</p>
                  }
                 <div className="p-1 flex flex-col sm:flex-row justify-around mt-4 mb-1">
                   <Link href={`/services/categories/${service.slug}`} className='px-2 sm:px-4 py-1 sm:py-1.5 rtl:font-arabic flex items-center justify-center border dark:border-[0.13rem] bg-gray-50 border-gray-100 dark:bg-[#00ba35] dark:border-[#00ba35] rounded text-gray-600 dark:text-black font-semibold text-sm' style={{borderRadius:'36px 67px'}} >{categoryDetails} 
                   <span className="ml-2 rtl:mr-2 rtl:-rotate-90">
                   <MdOutlineKeyboardArrowLeft className='text-lg text-gray-500' />
                       </span>
                   </Link>
                 </div>
               </div>
             </div>

         ))}

        </div>
        <div className="my-8 flex justify-center relative " >
          {
            locale == "en" ? (
              <Link
              href={"/services/categories"}
                className="capitalize text-gray-700 z-10 px-2.5 rounded py-1.5 font-semibold bg-gray-100 "
              >
                {meta.more}{" "}
              </Link>
            ) : (
              <Link
                href={"/services/categories"}
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
        
        </div>
       
      </div>
      
  );
};

export default Services;