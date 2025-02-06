'use client'
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
import { MenuWithAllModels } from '../../admin/setting/left-nav/_utils/MenuWithAllModels';
import MenuElement from './MenuElement';
interface Props {
   menusData: MenuWithAllModels[],
   locale : string,
   messages : AbstractIntlMessages,
   
}
const MenuElements = ({menusData,locale,messages}:Props) => {
  return (
    <div className="mt-3 top-[4.5rem] z-10  right-0 w-full border-t border-t-orange-500  px-2 py-3 flex flex-col " >
    {/* <span className="absolute inline-block w-4 h-4 top-[-.5rem] sm:right-28 sm:mr-4 sm:rotate-45"></span> */}
    <div className="sm:px-6 py-0.5 flex flex-col">
       <div className="">
       <div className="sm:pl-5 " >
       {menusData.map((categoryService) => (
                  <MenuElement  serviceCategory={categoryService} locale={locale} messages={messages} />
               ))}
       </div>
       </div>
    </div>
 </div>
  );
};

export default MenuElements;