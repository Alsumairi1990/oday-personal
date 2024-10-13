
import React from 'react';
import hero from '@/public/images/hero.jpg';
import PanelSearch from './SearchPanel';
import { Category, HeroSection, Service, ServiceCategory } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';
import Image from 'next/image';
interface Props {
  locale : string,
  messages : AbstractIntlMessages
}
const Markets = async ({locale,messages}:Props) => {
    const img1 = "/images/market.webp";
    const m1 = "/market/market-1.webp";
    const m2 = "/market/market2.webp";
    const m3 = "/market/market3.webp";
    const title = (messages as any).Common.loctaionTitle;
    const subTitle = (messages as any).Common.locationSubTitle;


  return (

    <div className="w-full " >  
    <div className=" m-h-lvh sm:h-[30rem] justify-center pb-4 sm:pb-0 pt-8 flex  px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${img1})`}}>
      <div className="">
      <div className="flex flex-col gap-y-2 items-center mb-5">
      <h2 className="text-gray-50 rtl:font-arabic text-2xl font-semibold">{title}</h2>
      <p className="text-md text-gray-100 rtl:font-arabic ">{subTitle}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:w-full gap-6 pb-5">
          <div className="p-0.5 sm:h-80 h-40 relative flex items-center justify-center border border-gray-500 rounded-md">
               <Image 
                      src={m1}
                      height={250}
                      width={250}
                      alt="Product Image"
                      className='w-full h-full mx-auto rounded-t-md sm:rounded-md'
                      />

                <div className="absolute">
                  <h2 className="text-gray-100 text-lg rtl:font-arabic border-2 border-gray-300 px-2 py-1 rounded bg-gray-800">السعودية</h2>
                  </div>      
                        
          </div>
          <div className="p-0.5 sm:h-80 h-40 relative flex items-center justify-center border border-gray-500 rounded-md">
               <Image 
                      src={m2}
                      height={250}
                      width={250}
                      alt="Product Image"
                      className='w-full h-full mx-auto rounded-t-md sm:rounded-md'
                      />

                <div className="absolute">
                  <h2 className="text-gray-100 text-lg rtl:font-arabic border-2 border-gray-300 px-2 py-1 rounded bg-gray-800">ماليزيا</h2>
                  </div>      
                        
          </div>
          <div className="p-0.5 sm:h-80 h-40 relative flex items-center justify-center border border-gray-500 rounded-md">
               <Image 
                      src={m3}
                      height={250}
                      width={250}
                      alt="Product Image"
                      className='w-full h-full mx-auto rounded-t-md sm:rounded-md'
                      />

                <div className="absolute">
                  <h2 className="text-gray-100 text-lg rtl:font-arabic border-2 border-gray-300 px-2 py-1 rounded bg-gray-800">اليمـن</h2>
                  </div>      
                        
          </div>
      </div>
      </div>
       </div>
    </div>
  


  );
};

export default Markets;