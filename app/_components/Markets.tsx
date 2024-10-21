
import React from 'react';
import hero from '@/public/images/hero.jpg';
import PanelSearch from './SearchPanel';
import { Category, HeroSection, Service, ServiceCategory } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import { AbstractIntlMessages } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { LuArrowRight } from 'react-icons/lu';
import { MarketWithModels } from '../[locale]/admin/market/_utils/MarketWithModels';
interface Props {
  markets : MarketWithModels[],
  locale : string,
  messages : AbstractIntlMessages
}
const Markets = async ({markets,locale,messages}:Props) => {
    const img1 = "/images/market.webp";
    const m1 = "/market/images/saudi-3.jpg";
    const m2 = "/market/images/malaysia-4.jpg";
    const m3 = "/market/images/yemen-1.jpg";
    const sFlag = "/market/icons/sadu-flag.png";
    const mFlag = "/market/icons/malaysia-flag.png";
    const yFlag = "/market/icons/yemen-flag.png";
    const title = (messages as any).Common.loctaionTitle;
    const subTitle = (messages as any).Common.locationSubTitle;


  return (

    <div className="w-full " >  
    <div className=" m-h-lvh sm:h-[30rem] justify-center pb-4 sm:pb-0 pt-8 flex  px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${img1})`}}>
      <div className="">
      <div className="flex flex-col gap-y-2 items-center mb-5">
      <h2 className="text-gray-50 rtl:font-arabic text-2xl font-semibold">m {markets.length}--{title}</h2>
      <p className="text-md text-gray-100 rtl:font-arabic ">{subTitle}</p>
      </div>
      <div className="grid grid-cols-1  mx-auto sm:grid-cols-3 sm:w-11/12 gap-6 pb-5">
          <div className="p-0.5 sm:h-80  relative flex items-center justify-center border border-gray-500 rounded-md">
                 
                  <Image 
                      src={m1}
                      height={400}
                      width={400}
                      alt="Product Image"
                      className='w-full h-full mx-auto rounded-t-md sm:rounded-md'
                      />

                <div className="absolute w-full h-full sm:w-7/12 sm:h-3/4 flex items-center justify-center flex-col bg-[#111111ad] sm:bg-[#111111c9] border border-white rounded-md">
                   <div className="w-10 sm:w-14">
                   <Image 
                      src={sFlag}
                      height={100}
                      width={100}
                      alt="Product Image"
                      className='mx-auto border-2 border-white  rounded-full p-0.5'
                      />
                   </div>
                 
                  <Link href="/markets/saudi-arabia" className="text-gray-100 sm:text-lg rtl:font-arabic border-b border-gray-300 px-2 py-1 rtl:font-bold">السعودية</Link>
                  <div className="p- flex gap-2 justify-center flex-wrap mt-4">
                    <div className="flex rounded px-2 gap-x-1 py-1 text-sm bg-gray-100 text-gray-800 items-center">
                      <Link href={`/markets/saudi-arabia/services/`} className=' capitalize '>products</Link>
                      <LuArrowRight className='text-base rtl:rotate-1 text-gray-800 ' />
                    </div>
                    <div className="flex rounded px-2 gap-x-1 py-1 text-sm bg-gray-100 text-gray-800 items-center">
                      <Link href={`/markets/saudi-arabia/services/`} className=' capitalize '>Works</Link>
                      <LuArrowRight className='text-base text-gray-800 ' />
                    </div>
                    <div className="flex rounded px-2 gap-x-1 py-1 text-sm bg-gray-100 text-gray-800 items-center">
                      <Link href={`/markets/saudi-arabia/services/`} className=' capitalize '>Services</Link>
                      <LuArrowRight className='text-base text-gray-800 ' />
                    </div>
                    <div className="flex rounded px-2 gap-x-1 py-1 text-sm bg-gray-100 text-gray-800 items-center">
                      <Link href={`/markets/saudi-arabia/services/`} className=' capitalize '>categories</Link>
                      <LuArrowRight className='text-base text-gray-800 ' />
                    </div>
                    

                  </div>
                  </div> 
                       
                        
          </div>
          <div className="p-0.5 sm:h-80 overflow-hidden h-40 relative flex items-center justify-center border border-gray-500 rounded-md">
               <Image 
                      src={m2}
                      height={800}
                      width={800}
                      alt="Product Image"
                      className='w-full  mx-auto rounded-t-md sm:rounded-md'
                      />

                <div className="absolute">
                  <h2 className="text-gray-100 text-lg rtl:font-arabic border-2 border-gray-300 px-2 py-1 rounded bg-gray-800">ماليزيا</h2>
                  </div>      
                        
          </div>
          <div className="p-0.5 sm:h-80 h-40 overflow-hidden relative flex items-center justify-center border border-gray-500 rounded-md">
               <Image 
                      src={m3}
                      height={800}
                      width={800}
                      alt="Product Image"
                      className='w-full  mx-auto rounded-t-md sm:rounded-md'
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