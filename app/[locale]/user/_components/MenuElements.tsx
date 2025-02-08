'use client'
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
import { MenuWithAllModels } from '../../admin/setting/left-nav/_utils/MenuWithAllModels';
import MenuElement from './MenuElement';
interface Props {
   menusData: MenuWithAllModels[],
   slug : String,
   locale : string,
   messages : AbstractIntlMessages,
   
}
const MenuElements = ({menusData,slug,locale,messages}:Props) => {
  return (
    <div className="mt-1 w-full px-2 flex flex-col " >
    {/* <span className="absolute inline-block w-4 h-4 top-[-.5rem] sm:right-28 sm:mr-4 sm:rotate-45"></span> */}
    <div className="sm:px-1 flex flex-col">
       <div className="">
       <div className="ltr:sm:pl-1 rtl:sm:pr-1 " >
       {menusData.map((element) => (
                  <MenuElement  element={element} locale={locale} messages={messages} />
               ))}
       </div>
       </div>
    </div>
 </div>
  );
};

export default MenuElements;