'use client'
import React,{useEffect} from 'react';
import { BiChip } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";
import { BiLogoCodepen } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi2";
import { HiBoltSlash } from "react-icons/hi2";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import { MdOutlineArrowDropDown, MdOutlineCastForEducation } from "react-icons/md";
import Link from 'next/link';
import { BiBasketball } from "react-icons/bi";
import { AbstractIntlMessages } from 'next-intl';
import { MenuWithAllModels } from '../../admin/setting/left-nav/_utils/MenuWithAllModels';
import MenuElements from './MenuElements';
interface Props {
    slug : String,
    menusData: Record<number, MenuWithAllModels[]>,
    locale : string,
    messages : AbstractIntlMessages
}

const UserSidNav = ({slug,menusData,locale,messages}:Props) => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/manager2.png';
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
      else if(menu && !menu.classList.contains('hidden') && downMenu && !downMenu.classList.contains('hidden')){
        menu.classList.add('hidden');
        downMenu.classList.add('hidden');
      }
      
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
  return (
    <div className="relative">
<div id="userLeft" className="fixed max-sm:hidden top-14 z-50  h-full ltr:left-0 rtl:right-0 max-sm:w-7/12  sm:w-[240px] " style={{transition: 'width 0.5s ease-in-out' }}>
<div className="h-full overflow-y-hidden overflow-x-hidden bg-cover bg-[#051118] bg-blend-multiply " style={{backgroundImage: `url(${imagePath})`}} >


    <div className="pt-4 pb-3 px-3 border-b border-b-gray-800">
       <div className="user-profile-panel bg-[#f9f9f9] rounded-xl  flex items-center ">
            <div className="flex-20">
               <img className="user-avatar bg-gray-100 w-8 rounded-xl p-0.5 h-8 max-w-full" src={imagePath2} id="imge"  alt=""   />
            </div>
            <div className="user-content flex-80 pl-2">
               <p className="text-sm font-semibold text-gray-800"> Ahmed </p>
               <div className="flex items-center">
                <span className="text-sm mr-1 text-gray-800">Subscriber |</span>
                <span className="status-user-admin text-green-500 text-sm"><span className="online-status"></span>online</span>
                </div>

            </div>
        </div>
    </div>


    <div className="side-content pt-2  h-[calc(100%_-_10rem)] overflow-y-auto overflow-x-hidden">
        <div className='flex flex-col mt-3  sm:justify-end ltr:pl-2 rtl:pr-2 w-full'>
            {Object.entries(menusData).map(([parentId, menus]) => {
            const parentMenu = menus.length > 0 ? menus[0].menuParent : null;
            return (
            <div key={parentId} className='flex flex-col  parent-menu-pr py-2.5 border-b border-gray-700'>
                <div className='parent-elm text-sm   relative flex items-center  px-2 font-semibold text-gray-200'>
                  {locale === 'en' ?<span className="parent-menu-btn mtext-gray-800 inline-flex w-full h-full items-center cursor-pointer">
                     {parentMenu?.title || ''}
                  </span> 
                    :<span className="parent-menu-btn text-gray-50 inline-flex w-full h-full items-center cursor-pointer">
                     {parentMenu?.titleAr || ''}
                  </span> }
                  <MdOutlineArrowDropDown className='text-2xl rtl:ml-4 parent-arr text-gray-300' />
                  <span className="z-20  hidden down-nav absolute left-[40%] h-0 topdd-[30%] -bottom-6  "></span>

                </div>

                <div className="parent-log-menu hidden ">
                  <MenuElements menusData={menus}slug={slug} locale={locale} messages={messages} />
                </div>
                   
                    </div>
                    );
                })}
           </div>
        {/*  <ul className="p-1 pl-0 whitespace-nowrap" >
            <div className="pl-1">
                <span className="text-md text-gray-300 font-normal capitalize">Services :</span>
            </div>
           <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                 <Link href="/user/profile" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded" >
                    <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <BiBasketball className="text-xl text-white" />
                    </span>
                        User Profile
                      

                </Link>
                <ul className="side-sub font-normal text-[.9rem]  pt-1 ml-[1.8rem] hidden border-l border-gray-400 mb-2">
                    <li className="pl-6 py-[3px] relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-gray-400 after:left-0 after:top-4">
                        <a href="/admin/university-manage" className="pl-3 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[9px] after:rounded">Manage  </a>
                    </li>
                    <li className="pl-6 py-[3px] relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-gray-400 after:left-0 after:top-4">
                        <a href="/admin/university-create" className="pl-3 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[9px] after:rounded">Create New </a>
                    </li>
                    <li className="pl-6  py-[3px] relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-gray-400 after:left-0 after:top-4">
                        <a href="" className="pl-3 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[9px] after:rounded">Rankings </a>
                    </li>
                </ul>
            </li>

            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/user/projects" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <BiChip className="text-xl text-white" />
                    </span>
                        Projects
                 
                </Link>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/scholarship-manage" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Manage </a>
                    </li>
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/scholarship/create" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Create New </a>
                    </li>
                    <li className="pl-6  py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Rankings </a>
                    </li>
                </ul>
            </li>

            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <a  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <BiLayer className="text-xl text-white" />
                    </span>
                        Service provided
                   
                </a>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exams-manage" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Manage </a>
                    </li>
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/create" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Create New </a>
                    </li>
                    <li className="pl-6  py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/display" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Display All </a>
                    </li>
                </ul>
            </li>

            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <a  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Ranking Systems
                    
                </a>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exams-manage" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Manage </a>
                    </li>
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/create" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">New Rank </a>
                    </li>
                    <li className="pl-6  py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/display" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Display All </a>
                    </li>
                </ul>
            </li>
         
            <li className="side-item-btn py-0 pl-1 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/user/billing" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <HiAcademicCap className="text-xl text-white" />
                    </span>
                        Billing- Palnse
                    
                </Link>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exams-manage" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Manage </a>
                    </li>
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/create" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Create Programne </a>
                    </li>
                    <li className="pl-6  py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/display" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Display All </a>
                    </li>
                </ul>
            </li>


           <li className="side-item-btn py-0 pl-1 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <a  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <HiBoltSlash className="text-xl text-white" />
                    </span>
                        Disciplines
                  
                </a>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exams-manage" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Manage </a>
                    </li>
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/create" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Create Programne </a>
                    </li>
                    <li className="pl-6  py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/display" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Display All </a>
                    </li>
                </ul>
            </li>

            <li className="side-item-btn py-0 pl-1 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <a  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <HiCurrencyBangladeshi className="text-xl text-white" />
                    </span>
                        Education Skills
                    
                </a>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exams-manage" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Manage </a>
                    </li>
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/create" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Create Programne </a>
                    </li>
                    <li className="pl-6  py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/display" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Display All </a>
                    </li>
                </ul>
            </li>

            <li className="side-item-btn py-0 pl-1 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <a  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded ltr:mr-2 rtl:mx-2 justify-center" >
                    <MdOutlineCastForEducation className="text-xl text-white" />
                    </span>
                        Scholarship App
                   
                </a>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exams-manage" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Manage </a>
                    </li>
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/create" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Create Programne </a>
                    </li>
                    <li className="pl-6  py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/exam/display" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Display All </a>
                    </li>
                </ul>
            </li> 
        </ul>  */}



    </div>


</div>
</div>
</div>
  );
};

export default UserSidNav;
