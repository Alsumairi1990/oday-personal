
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
        : <h2 className="text-3xl font-arabic rtl:font-bold text-center px-8 mb-6 text-blue-700 dark:text-white font-normal">{meta.titleAr}</h2>
        }

        {locale == 'en' ? <p className="text-base text-gray-600 dark:text-gray-300 text-center leading-7 px-8">{meta.desc}</p>
        :<p className="text-base font-arabic rtl:text-gray-700 text-gray-600 dark:text-gray-300 text-center leading-7 px-8">{meta.descAr}</p>
         }
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-x-5 gap-y-8 mt-8">
          {services && services.map((service) => (
              <Link  href="/services/servi-1" className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
              <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              {service.image && <img className='w-full mx-auto' src={service.image} alt="" />}
              </div>
              <div className="sm:p2 mt-1 text-center">
                <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">{service.name}</h2>             
              </div>
              </Link>

         ))}



{/* 
          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_3}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Logo design</h2>             
            </div>
          </a>  
          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_4}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">flyer design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_5}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Brochure design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_6}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Mobile design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_7}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold  ">label design</h2>             
            </div>
          </a>

         


          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_8}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">T-Shirt Design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_9}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">bag and toat design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_10}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">flyer design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_11}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Resume design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_12}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold  ">Magazine design</h2>             
            </div>
          </a> */}
          
        </div>
        <div className="flex justify-center mt-8">
          <span className="text-xl inline-block px-3 py-1 text-white bg-orange-500 rounded border border-gray-100 capitalize">Show More</span>
        </div>



        </div>
       
      </div>
      
  );
};

export default ServicesFull;