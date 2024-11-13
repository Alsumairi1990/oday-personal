'use client'
import React, { useEffect, useState } from 'react';

import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
// import NavPanel from './NavPanel';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import NavPanel from './NavPanel';
import { AbstractIntlMessages } from 'next-intl';
import ServicesPanel from './ServicesPanel';
interface MenusDisplayProps {
    menusData: Record<number, MenuWithAllModels[]>,
    locale : string,
    messages : AbstractIntlMessages,
  }

const TopNav: React.FC<MenusDisplayProps> = ({ menusData,locale,messages }) => {
   const [visibleContent, setVisibleContent] = useState<boolean>(false);
useEffect(() => {
  if (typeof window === 'undefined') return;

  const handleClickOutside = (event:any) => {
   const menus = document.getElementsByClassName('parent-log-menu');
   const downMenus = document.getElementsByClassName('down-nav');

    if (event.target.closest('.parent-menu-btn ') !== null) {
      const prnt = event.target.closest('.parent-menu-pr');
      const menu = prnt.querySelector('.parent-log-menu');
      const downMenu = prnt.querySelector('.down-nav');

      if(menu && menu.classList.contains('hidden') && downMenu && downMenu.classList.contains('hidden') ){
        for (let i = 0; i < menus.length; i++) {
          menus[i].classList.add('hidden');
        }
        for (let i = 0; i < downMenus.length; i++) {
          downMenus[i].classList.add('hidden');
        }
        menu.classList.remove('hidden');
        downMenu.classList.remove('hidden');

      }
    //  else if(downMenu && downMenu.classList.contains('hidden')){
    //     for (let i = 0; i < downMenus.length; i++) {
    //       downMenus[i].classList.add('hidden');
    //     }
    //     downMenu.classList.remove('hidden');
    //   }
      else if(menu && !menu.classList.contains('hidden') && downMenu && !downMenu.classList.contains('hidden')){
        menu.classList.add('hidden');
        downMenu.classList.add('hidden');
      }
      // else if(downMenu && !downMenu.classList.contains('hidden')){
      //   downMenu.classList.add('hidden');
      // }
  }
  else if (event.target.closest('.parent-log-menu ') !== null) return;
  else {
  for(let menu of  Array.from(menus)){
    menu.classList.add('hidden');
     };
  for(let menu of  Array.from(downMenus)){
  menu.classList.add('hidden');
    };
  }
  };
  document.addEventListener('click', handleClickOutside);
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
});
const [activeLink, setActiveLink] = useState<string | null>(null); 
   const handleClick = (e:any) => {
    const nearestContent = e.currentTarget.closest('li').querySelector('.side-sub')
    if (nearestContent) {
      setVisibleContent(prevContent => prevContent === nearestContent ? false : nearestContent);
    }}
     const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
        <div className='flex max-sm:flex-col max-sm:mt-3 max-sm:gap-y-4 sm:justify-end rtl:pl-5 r w-full'>
            {Object.entries(menusData).map(([parentId, menus]) => {
            const parentMenu = menus.length > 0 ? menus[0].menuParent : null;
            return (
            <div key={parentId} className='flex max-sm:flex-col  parent-menu-pr'>
                <div className='parent-elm text-sm   relative flex items-center  px-2 rtl:font-arabic font-semibold text-gray-200'>
                  <span className="parent-menu-btn max-sm:text-gray-800 inline-flex w-full h-full items-center cursor-pointer">
                     {parentMenu?.titleAr || ''}
                  </span> 
                  <MdOutlineArrowDropDown className='text-2xl max-sm:rtl:ml-4 parent-arr text-gray-800 sm:text-gray-50' />
                  <span className="z-10  hidden down-nav absolute left-[40%] h-0 topdd-[30%] -bottom-6 border-l-[16px] border-r-[16px] border-b-[13px] border-l-transparent border-r-transparent border-b-white "></span>

                </div>

                <div className="parent-log-menu hidden border-b border-b-gray-300">
                <ServicesPanel menusData={menus} />
                </div>
                     {/* <div className='pl-3 w-full parent-log-menu hidden grid grid-cols-4 bg-white absolute top-20 left-0 z-50'>
                         <div className="sm:w-11/12 sm:px-4  sm:mx-auto ">
                        {menus.map(menu => (
                             <NavPanel menu={menu} locale={locale} messages={messages}  />
                        ))}
                         </div>
                        </div> */}
                    </div>
                    );
                })}
           </div>
        
   


  );
};

export default TopNav;
