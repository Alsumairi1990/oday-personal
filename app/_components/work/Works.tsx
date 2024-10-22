
import React from 'react';
import { PageSection } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import { WorksFrontData } from '@/app/[locale]/admin/works/utils/WorksFrontData';
import MarketWorkCard from './MarketWorkCard';

interface Props{
    works : WorksFrontData[],
    meta :PageSection
}
const Works = async ({works,meta}:Props) => {
const elements = ['element1','element2']
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  const filterAdd = (messages as any).HomePage.filterAdd;
  const categoryOption = (messages as any).HomePage.workCategoryOption;
  const location = (messages as any).HomePage.MarketLocation;
  const latestWork = (messages as any).HomePage.latestWork; 
  return (
   <div className="my-8 w-full bg-gray-100 dark:bg-[#161616] dark:border darke:border-gray-800">
    <div className="flex items-center justify-center">
        <span className="w-8">
        <svg  width="100%" height="100%" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color fill-orange-500"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className='fill-fuchsia-500'></path></svg>
        </span>
        <span className="text-fuchsia-500 font-semibold text-sm rtl:font-arabic rtl:text-sm  uppercase mx-2">{latestWork}</span>
        <span className="w-8 rotate-180">
        <svg  width="100%" height="100%" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color fill-orange-500"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className='fill-fuchsia-500'></path></svg>
        </span>
    </div>
    <div className="mt-2 flex justify-center">
        {locale == 'en' ?<h2 className="text-2xl capitalize text-gray-700 dark:text-gray-200 font-semibold">
         {meta.title}
        </h2>
        :<h2 className="text-2xl font-arabic capitalize text-gray-700 dark:text-gray-200 font-semibold">
            {meta.titleAr}
           </h2>
        }
       
    </div>
   
    <div className='grid grid-cols w-11/12 mx-auto sm:grid-cols-3 px-0 mt-6 py-4 gap-6'>
       {works && works.map((work)=>(
        <MarketWorkCard work={work} />
       ))
    }
    </div>
   </div>
  );
};

export default Works;