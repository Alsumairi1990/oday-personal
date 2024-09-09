
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import NavElement from './NavElement';
import { getAdminLeftMenuElements } from '../common/Actions';
import { MenuWithModels } from '@/app/admin/setting/left-nav/_utils/MenuWithModels';
import { IoMdSettings } from 'react-icons/io';
import { getMenusElements } from '@/app/admin/setting/left-nav/_actions/Action';
import { MenuWithAllModels } from '@/app/admin/setting/left-nav/_utils/MenuWithAllModels';
import NavMenuElement from './NavMenuElement';
import NavMenuElem from './NavMenuElem';
interface MenusDisplayProps {
    menusData: Record<number, MenuWithAllModels[]>;
  }

const LeftNav: React.FC<MenusDisplayProps> = ({ menusData }) => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/manager2.png';
   const [visibleContent, setVisibleContent] = useState<boolean>(false);
   const [navElement, setNavElement] = useState<MenuWithModels[]>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string>('');
//    const[menusData , setMenusData] = useState<MenuWithAllModels[]>();

   const getElements = async () =>{
    try {
        setLoading(true);
        const elements = await getAdminLeftMenuElements();
        setNavElement(elements);
        setLoading(false);
        setError('');
    } catch (error:any) {
        setLoading(false);
        setError(error.message);
    }
}

const getAllElements = async () =>{
    try {
        setLoading(true);
        
            const result = await getMenusElements();
            // if(result) setMenusData(result);
       
        setLoading(false);
        setError('');
    } catch (error:any) {
        setLoading(false);
        setError(error.message);
    }
}

useEffect(() => {
    getElements();
    getAllElements();
}, []);

//    const [navElement, setNavElement] = useState<NavsElement>(
//     {
//       id: '1',
//       title: 'Service Manage',
//       icon: '/images/svg/20.svg',
//       nav: [
//         {
//           id: '1',
//           title: 'Manage',
//           link: '/admin/service' 
//         },
//         {
//             id: '2',
//             title: 'Create',
//             link: '/admin/service/create' 
//         },
//         {
//             id: '3',
//             title: 'Display',
//             link: '/admin/service/display' 
//         },
//         {
//               id: '4',
//               title: 'Edit',
//               link: '/admin/service/edit' 
//         },
//         {
//             id: '5',
//             title: 'Deleye',
//             link: '/admin/service/delete' 
//         },

//       ]
//     }
//   );
  
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
    <div className="relative">
<div id="adminLeft" className="fixed top-14 z-50  h-full left-0  sm:w-[240px] " style={{transition: 'width 0.5s ease-in-out' }}>
<div className="h-full overflow-y-hidden overflow-x-hidden bg-cover bg-[#051118] bg-blend-multiply " style={{backgroundImage: `url(${imagePath})`}} >


    <div className="pt-4 pb-3 px-3 border-b border-b-gray-800">
       <div className="user-profile-panel bg-[#f9f9f9] rounded-xl  flex items-center ">
            <div className="flex-20">
               <img className="user-avatar bg-gray-100 w-8 rounded-xl p-0.5 h-8 max-w-full" src={imagePath2} id="imge"  alt=""   />
            </div>
            <div className="user-content flex-80 pl-2">
               <p className="text-sm font-semibold text-gray-800"> Ahmed </p>
               <div className="flex items-center">
                <span className="text-sm mr-1 text-gray-800">Adminstrator |</span>
                <span className="status-user-admin text-sm"><span className="online-status"></span>online</span>
                </div>

            </div>
        </div>
    </div>


    <div className="side-content pt-2  h-[calc(100%_-_10rem)] overflow-y-auto left-container overflow-x-hidden">
        <ul className="p-1 pl-0 whitespace-nowrap" style={{direction:'ltr'}}>

        <div className="pl-1">
            {Object.entries(menusData).map(([parentId, menus]) => {
            // Find the parent menu for the current parentId
            const parentMenu = menus.length > 0 ? menus[0].menuParent : null;

            return (
            <div key={parentId}>
                <h2 className='text-sm font-semibold text-gray-200'>{parentMenu?.title || 'Unknown Parent'}</h2>
                <ul className='pl-3'>
                        {menus.map(menu => (
                             <NavMenuElem menu={menu}  />
                       
                        ))}
                        </ul>
                    </div>
                    );
                })}
            </div>




        {/* <div className="pl-1">
              {menusData?.map(element => 
                <>
                <span className="text-md text-gray-300 font-normal capitalize">{element.menuParent.title}</span>
                
                 <NavMenuElement element={element}  />
                 
                </>
              )}
            </div> */}





            {/* {navElement && 
              navElement.map(element => 
                <NavElement element={element}  />
              )
            } */}
           


            {/* <div className="pl-1">
                <span className="text-md text-gray-300 font-normal capitalize">Services :</span>
            </div>
            {navElement && 
              navElement.map(element => 
                <NavElement element={element}  />
              )
            } */}
            
            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                 <div  
                 onClick={handleClick}
                  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded" >
                    <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <IoMdSettings className="text-xl text-gray-50" />
                    </span>
                        Settings
                        <div className="ml-auto">
                           <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>plus</title>
                                <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                            </svg>
                            <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                            </svg>
                        </div>

                </div>
                <ul className={`side-sub mb-3 font-normal flex flex-col text-[.9rem] pt-1 ml-[1.5rem] ${visibleContent ? '' : 'hidden'} border-l border-gray-400 mb-2`}>
                     <li>
                        <Link href="/admin/setting/left-nav">
                            <div
                            onClick={() => handleLinkClick('/admin/setting/left-nav')}
                            className={`pl-6 py-[2px] relative after:content-[''] after:absolute after:h-px after:w-5 after:border-b after:border-dotted after:border-b-gray-400 after:bg-transparent  after:left-0 after:top-[14px] ${activeLink === '/admin/setting/left-nav' ? 'text-orange-400' : ''}`}
                            >
                            <span className="pl-3 relative after:content-[''] after:absolute after:h-1 after:w-1 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[7px] after:rounded">Menu Manage</span>
                            </div>
                        </Link>
                        </li>
                        <li>
                        <Link href="/admin/service/create">
                            <div
                            onClick={() => handleLinkClick('/admin/service/create')}
                            className={`pl-6 py-[2px] relative after:content-[''] after:absolute after:h-px after:w-5 after:border-b after:border-dotted after:border-b-gray-400 after:bg-transparent after:left-0 after:top-[14px] ${activeLink === '/admin/service/create' ? 'text-orange-400' : ''}`}
                            >
                            <span className="pl-3 relative after:content-[''] after:absolute after:h-1 after:w-1 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[7px] after:rounded">Create New</span>
                            </div>
                        </Link>
                        </li>
                         <li>
                        <Link href="/admin/service/display">
                            <div
                            onClick={() => handleLinkClick('/admin/service/display')}
                            className={`pl-6 py-[2px] relative after:content-[''] after:absolute after:h-px after:w-5 after:border-b after:border-dotted after:border-b-gray-400 after:bg-transparent after:left-0 after:top-[14px] ${activeLink === '/admin/service/display' ? 'text-orange-400' : ''}`}
                            >
                            <span className="pl-3 relative after:content-[''] after:absolute after:h-1 after:w-1 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[7px] after:rounded">Display</span>
                            </div>
                        </Link>
                        <Link href="/admin/service/edit">
                            <div
                            onClick={() => handleLinkClick('/admin/service/edit')}
                            className={`pl-6 py-[2px] relative after:content-[''] after:absolute after:h-px after:w-5 after:border-b after:border-dotted after:border-b-gray-400 after:bg-transparent  after:left-0 after:top-[14px] ${activeLink === '/admin/service/edit' ? 'text-orange-400' : ''}`}
                            >
                            <span className="pl-3 relative after:content-[''] after:absolute after:h-1 after:w-1 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[7px] after:rounded">Edit</span>
                            </div>
                        </Link>
                         <Link href="/admin/service/delete">
                            <div
                            onClick={() => handleLinkClick('/admin/service/delete')}
                            className={`pl-6 py-[2px] relative after:content-[''] after:absolute after:h-px after:w-5 after:border-b after:border-dotted after:border-b-gray-400 after:bg-transparent  after:left-0 after:top-[14px] ${activeLink === '/admin/service/delete' ? 'text-orange-400' : ''}`}
                            >
                            <span className="pl-3 relative after:content-[''] after:absolute after:h-1 after:w-1 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[7px] after:rounded">Delete</span>
                            </div>
                        </Link>
                        </li>
                </ul>
            </li>

            {/* <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/blogs" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiChip className="text-xl text-white" />
                    </span>
                        Blogs Panel
                    <div className="ml-auto">
                       <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
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
                <Link href="/admin/category"  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLayer className="text-xl text-white" />
                    </span>
                        Category
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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
                <Link href="/admin/works"  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLayer className="text-xl text-white" />
                    </span>
                        Our Works
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
                <ul className="side-sub font-normal text-[.9rem] pt-1 ml-[1.8rem] hidden border-l border-[#355476] mb-2">
                    <li className="pl-6 py-1 relative after:content-[''] after:absolute after:h-px after:w-5 after:bg-[#355476] after:left-0 after:top-4">
                        <a href="/admin/works" className="pl-2 relative after:content-[''] after:absolute after:h-1.5 after:w-1.5 after:bg-[#355476] after:left-[-2px] after:top-1.7 after:rounded">Our Works </a>
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
                <Link href="/admin/tag" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Tags
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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


            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/tools" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Tools
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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
            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/service/codes" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Service Codes
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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
            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/location" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Market Locations
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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

            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/service/prices" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Service Prices
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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

            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/testimonials" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Testimonails 
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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



            <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/service/phases" className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <BiLogoCodepen className="text-xl text-white" />
                    </span>
                        Service Phases
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
                </Link>
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

            <div className="pl-1 mt-1">
                <span className="text-md text-gray-300 font-normal capitalize">Employee Manage</span>
            </div>
            <li className="side-item-btn py-0 pl-1 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                <Link href="/admin/employees-manage/employees"  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded">
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <HiAcademicCap className="text-xl text-white" />
                    </span>
                        Employees
                    <div className="ml-auto">
                         <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
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
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <HiBoltSlash className="text-xl text-white" />
                    </span>
                        Disciplines
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
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
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <HiCurrencyBangladeshi className="text-xl text-white" />
                    </span>
                        Education Skills
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
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
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <MdOutlineCastForEducation className="text-xl text-white" />
                    </span>
                        Scholarship App
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
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
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <RiMoneyDollarCircleFill className="text-xl text-white" />
                    </span>
                        Fees
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
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
                <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <LiaCertificateSolid className="text-xl text-white" />
                    </span>
                        Admissions
                    <div className="ml-auto">
                        <svg className="mr-2 fill-white sv-plus" width="13px" height="13px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>plus</title>
                            <path d="M30 15.25h-13.25v-13.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 13.25h-13.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h13.25v13.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-13.25h13.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                        </svg>
                        <svg width="20px" className="pr-2 mr-[0.2rem] sv-minus hidden"  height="24px" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="#ddd"/>
                        </svg>
                    </div>
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
            </li> */}








        </ul>



    </div>


</div>
</div>
</div>
  );
};

export default LeftNav;
