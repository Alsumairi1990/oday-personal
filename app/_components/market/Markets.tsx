
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { MarketWithModels } from '../../../app/[locale]/admin/market/_utils/MarketWithModels';
import { LuArrowRight } from 'react-icons/lu';
interface Props {
  markets : MarketWithModels[],
  locale : string,
  messages : AbstractIntlMessages
}
const Markets = async ({markets,locale,messages}:Props) => {
      const img1 = "/images/market.webp";
    
    const title = (messages as any).Common.loctaionTitle;
    const subTitle = (messages as any).Common.locationSubTitle;  
    const marketDetails = (messages as any).Common.marketDetails;
  return (

    <div className="w-full " >  
    <div className=" m-h-lvh sm:h-[30rem] justify-center pb-4 sm:pb-0 pt-8 flex  px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${img1})`}}>
      <div className="">
      <div className="flex flex-col gap-y-2 items-center mb-5">
      <h2 className="text-gray-50 rtl:font-arabic text-2xl font-semibold">{title}</h2>
      <p className="text-md text-gray-100 rtl:font-arabic ">{subTitle}</p>
      </div>
      <div className="grid grid-cols-1  mx-auto sm:grid-cols-3 sm:w-11/12 gap-6 pb-5">
          {markets.map((market)=> (
             <div className="p-0.5 sm:h-80 h-52 overflow-hidden relative flex items-center justify-center border border-gray-500 rounded-md">
                <Image 
                    src={market.image}
                    height={400}
                    width={400}
                    alt="Product Image"
                    className='w-full h-full mx-auto rounded-t-md sm:rounded-md'
                    />
              <div className="absolute w-full h-full sm:w-7/12 sm:h-3/4 flex items-center justify-center flex-col bg-[#1111118e] sm:bg-[#111111c9] border border-white rounded-md">
                <div className="w-10 sm:w-14">
                <Image 
                    src={market.icon}
                    height={100}
                    width={100}
                    alt="Product Image"
                    className='mx-auto border-2 border-white  rounded-full p-0.5'
                    />
                </div>
                <div className="text-center">
                    {locale === 'en' ? 
                    <>
                    <Link href="/markets/saudi-arabia" className="text-gray-100 sm:text-lg rtl:font-arabic border-b border-gray-300 px-2 py-1 rtl:font-bold">{market.name}</Link>
                    <div className=" flex gap-2 justify-center flex-wrap mt-4">
                      {market.marketPages.map((page)=> (
                        <div className="flex rounded px-2 gap-x-1 py-1  text-sm bg-gray-100 text-gray-800 items-center">
                        <Link href={`/markets/saudi-arabia/services/`} className=' capitalize '>{page.mrPage.name}</Link>
                        <LuArrowRight className='text-base rtl:rotate-1 text-gray-800 ' />
                      </div>
                      ))}
                    </div>
                    </>
                    :
                      <>
                      <Link href="/markets/saudi-arabia" className="text-gray-100 sm:text-lg rtl:font-arabic border-b border-gray-300 px-2 py-1 rtl:font-bold">{market.nameAr}</Link>
                    <div className="p- flex gap-2 justify-center flex-wrap mt-4">
                    {market.marketPages.map((page)=> (
                        <div className="flex rounded px-1 gap-x-1 py-1 text-sm bg-gray-100 text-gray-800 items-center">
                        <LuArrowRight className='text-base rtl:rotate-1 text-gray-800 ' />
                        <Link href={page.url!} className='font-arabic capitalize '>{page.mrPage.nameAr}</Link>
                        
                      </div>
                      ))}
                    </div>
                    </>
                    }
                </div>
                <div className="mt-4 flex justify-center relative w-full" >
                     
                          <Link
                          href={`/markets/${market.location}`}
                            className="capitalize rtl:font-arabic border z-20 
                            relative after:content[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:border-y-[15px] after:border-l-[25px] after:border-r-[0px] after:border-y-transparent after:-right-[25px]  
                            before:content[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:border-y-[15px] before:border-r-[25px] before:border-l-[0px] before:border-y-transparent before:-left-[25px] 
                             border-orange-600 text-gray-50 text-sm px-2.5 rounded-md py-1.5 font-semibold bg-orange-600 "
                          >
                            {marketDetails}
                          </Link>
                        
                      
                      <span className="h-[0.1rem] w-full bg-gray-300 dark:bg-gray-800 absolute z-10 top-4">
                      </span>
                  </div>
                        
                </div>       
          </div>

          ))}
          
      </div>
      </div>
       </div>
    </div>
  


  );
};
export default Markets;