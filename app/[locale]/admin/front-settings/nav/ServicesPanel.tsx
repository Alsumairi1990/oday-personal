'use client'
import React from 'react';
import {serviceCategories} from '@/app/utils/ServiceCategories'
import CategoryElements from './NavElements';
import { MenuWithAllModels } from '../../setting/left-nav/_utils/MenuWithAllModels';
import { AbstractIntlMessages } from 'next-intl';
import NavElements from './NavElements';
interface Props {
   menusData: MenuWithAllModels[],
   locale : string,
   messages : AbstractIntlMessages,
   
}
const ServicesPanel = ({menusData,locale,messages}:Props) => {
   const imagePath = '/images/10.png';
  return (
    <div className="sm:absolute max-sm:mt-3 top-[4.5rem] z-10 bg-white right-0 w-full border-t border-t-orange-500  px-2 py-3 flex flex-col " >
    {/* <span className="absolute inline-block w-4 h-4 bg-white top-[-.5rem] sm:right-28 sm:mr-4 sm:rotate-45"></span> */}
    <div className="sm:px-6 py-0.5 grid sm:grid-cols-5">
       <div className="col-start-1 col-span-4">
       <div className="sm:pl-5 max-sm:grid grid-cols-1 sm:grid-cols-1 sm:columns-3 gap-4 sm:gap-10 " >
       {menusData.map((categoryService) => (
                  <NavElements  serviceCategory={categoryService} locale={locale} messages={messages} />
               ))}
       </div>
       </div>
       <div className="p-2 max-sm:hidden rounded-md" style={{background: 'rgba(226, 235, 247, 0.41)'}}>
          <h2 className="text-xl text-gray-800 font-semibold px-3 pt-4">Find Out Best Course and Top Collages </h2>
          <img src={imagePath} alt="My Image" />
       </div>
    </div>
 </div>
  );
};

export default ServicesPanel;