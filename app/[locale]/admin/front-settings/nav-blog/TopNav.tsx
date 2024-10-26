'use client'
import React, { useEffect, useState } from 'react';

import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
import { MenuWithModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithModels';
import { getAdminLeftMenuElements } from '@/app/_components/admin/common/Actions';
import NavMenuElem from '@/app/_components/admin/nav/NavMenuElem';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import NavPanel from './NavPanel';
interface MenusDisplayProps {
    menusData: Record<number, MenuWithAllModels[]>;
  }

const TopNav: React.FC<MenusDisplayProps> = ({ menusData }) => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/manager2.png';
   const [visibleContent, setVisibleContent] = useState<boolean>(false);
   const [navElement, setNavElement] = useState<MenuWithModels[]>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string>('');

useEffect(() => {
  const handleClickOutside = (event:any) => {
   const menus = document.getElementsByClassName('log-menu');
    if (event.target.closest('.menu-btn ') !== null) {
      const prnt = event.target.closest('.menu-pr');
      const menu = prnt.querySelector('.log-menu');
      if(menu && menu.classList.contains('sm:hidden')){
        for (let i = 0; i < menus.length; i++) {
          menus[i].classList.add('sm:hidden');
        }
        menu.classList.remove('sm:hidden');
      }
      else if(menu && !menu.classList.contains('sm:hidden')){
        menu.classList.add('sm:hidden');
      }
  }
  else if (event.target.closest('.log-menu ') !== null) return;
  else {
  for(let menu of  Array.from(menus)){
    menu.classList.add('sm:hidden');
    
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
    const nearestContent = e.currentTarget.closest('li').querySelector('.side-sub');

    if (nearestContent) {
      setVisibleContent(prevContent => prevContent === nearestContent ? false : nearestContent);
    }}
     const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
        
        <div className='flex lrt:justify-end '>
            {Object.entries(menusData).map(([parentId, menus]) => {
            const parentMenu = menus.length > 0 ? menus[0].menuParent : null;
            return (
            <div key={parentId} className='flex menu-pr'>
                <div className='parent-elm text-md flex items-center gap-x-1 ltr:pr-3 rtl:pl-3 rtl:font-arabic font-semibold text-gray-800 dark:text-gray-200'>
                  <span className="menu-btn cursor-pointer">
                     {parentMenu?.titleAr || ''}
                  </span> 
                  <MdOutlineArrowDropDown className='text-xl parent-arr text-gray-800 dark:text-gray-50' />
                </div>
                     <div className='pl-3 w-full log-menu sm:hidden grid grid-cols-4 bg-white absolute top-20 left-0 z-50'>
                        {menus.map(menu => (
                             <NavPanel menu={menu}  />
                        ))}
                        </div>
                    </div>
                    );
                })}
           </div>
        
   


  );
};

export default TopNav;
