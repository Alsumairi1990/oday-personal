'use client'
import React from 'react';
import { CgDribbble } from "react-icons/cg";
import { CgTikcode } from "react-icons/cg";
import { CgTwilio } from "react-icons/cg";
import { MdOutlineManageSearch } from "react-icons/md";
import {useEffect} from 'react'





const PanelSearch = () => {

    useEffect(() => {
        const handleClickOutside = (event:any) => {
         const menus = document.getElementsByClassName('log-menu');
          if (event.target.closest('.menu-btn ') !== null) {
            const prnt = event.target.closest('.menu-pr');
            const menu = prnt.querySelector('.log-menu');
            if(menu.classList.contains('hidden')){
              for (let i = 0; i < menus.length; i++) {
                menus[i].classList.add('hidden');
              }
              
            //   menu.classList.remove('hidden');
            }
            else if(!menu.classList.contains('hidden')){
              menu.classList.remove('hidden');
            }
        }
        else if (event.target.closest('.login-menu ') !== null) return;
        
        else {
            
       for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('hidden');
            }
        }
        };
        document.addEventListener('click', handleClickOutside);
      
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      });


  const projectTypes = [
    {
        type: 'Logo Design',
        description: 'Create a unique and memorable logo that represents your brand.',
    },
    {
        type: 'Brand Identity',
        description: 'Develop a cohesive visual identity, including logos, color schemes, and typography.',
    },
    {
        type: 'Web Design',
        description: 'Design or redesign websites to ensure a visually appealing and user-friendly online presence.',
    },
    {
        type: 'Print Design',
        description: 'Create materials for print, such as brochures, business cards, posters, and banners.',
    },
    {
        type: 'Packaging Design',
        description: 'Design attractive and effective packaging for products.',
    },
    {
        type: 'Social Media Graphics',
        description: 'Craft graphics optimized for various social media platforms, including posts, banners, and profile images.',
    },
    {
        type: 'Illustration',
        description: 'Provide custom illustrations for various purposes, such as book covers, marketing materials, or digital assets.',
    },
    {
        type: 'UI/UX Design',
        description: 'Design user interfaces and experiences for websites, apps, or software.',
    },
    {
        type: 'Infographics',
        description: 'Create visually engaging and informative infographics to present data or information in a more digestible format.',
    },
    {
        type: 'Merchandise Design',
        description: 'Design graphics for merchandise such as T-shirts, mugs, and other promotional items.',
    },
    {
        type: 'Email Newsletter Design',
        description: 'Design visually appealing email templates for newsletters or marketing campaigns.',
    },
    {
        type: 'Event Graphics',
        description: 'Develop graphics for events, including invitations, posters, and promotional materials.',
    },
    {
        type: 'Corporate Collateral',
        description: 'Design various corporate materials like letterheads, business cards, and presentations.',
    },
    {
        type: 'E-book or Print Book Cover Design',
        description: 'Create visually striking covers for digital or print publications.',
    },
    {
        type: 'Environmental Graphics',
        description: 'Design graphics for physical spaces, such as office interiors or event spaces.',
    },
];
  return (
    <div className="w-full sm:bg-white rounded-xl mt-2 mb-3">
   <div  className="search-top p-0">
      <div  className="grid sm:grid-cols-25/25/40/10 max-sm:gap-4 search-row items-center rounded">
         <div  className="p-1">
            <div  className="menu-pr ran-c flex relative py-[3px] bg-white rounded-lg search-otp-rnk">
               <div  className="pl-[10px] self-end">
                 <span className="flex w-5 items-center h-5">
                  <CgDribbble className='text-sky-800 text-lg' />
                 </span>
               </div>
               <div  className="menu-btn rnk-opt-btn  pl-[5px] flex flex-col py-1 h-[50px] border-r border-r-gray-300 w-full">
                  <div  className="flex-22">
                     <div  className=""><span  className="font-bold text-gray-700 text-xs uppercase">Level</span></div>
                  </div>
                  <div  className="btn-trk flex items-end flex-70 pb-[6px]">
                     <div  className="actv-slc flex flex-nowrap items-center overflow-x-auto cursor-pointer"><span  className="text-sm text-gray-400 font-nav">General ...</span></div>
                     <span  className="ml-auto mr-[15px] text-xs text-gray-500"><i  className="fas fa-chevron-down"></i></span>
                  </div>
               </div>
                  <div id="dropdownRadioHelper" className="drop-menu log-menu hidden !z-50 max-h-56  overflow-y-auto absolute  top-16 sm:left-0 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                            {projectTypes.map((project, index) => (
                                <li key={index}>
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`helper-radio-${index}`}
                                                name="helper-radio"
                                                type="radio"
                                                value={project.type}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{project.type}</div>
                                                <p id={`helper-radio-text-${index}`} className="text-xs font-normal text-gray-500 dark:text-gray-300">{project.description}</p>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
               </div>
            {/* </div> */}
         </div>
         <div  className="flex-100 relative max-w-full p-1">
            <div  className="menu-pr flex py-[3px] bg-white rounded-lg search-otp-rnk">
               <div  className="pl-[10px] self-end">
                 <span className="flex w-5 items-center h-5">
                  <CgTikcode className='text-sky-800 text-lg' />
                 </span>
               </div>
               <div  className="menu-btn rnk-opt-btn pl-[5px] flex flex-col py-1 h-[50px] w-full border-r border-r-gray-300">
                  <div  className="flex-22">
                     <div  className="ext-left"><span  className="font-bold text-gray-700 text-xs uppercase">Streams</span></div>
                  </div>
                  <div  id="" className="btn-rk78 flex items-end flex-70 pb-[7px]">
                     <div  className="actv-slc flex flex-nowrap items-center overflow-x-auto cursor-pointer">
                        <span  className="text-sm font-nav text-gray-400">computer sceince ...</span>
                     </div>
                     <span  className="ml-auto mr-[15px] text-xs text-gray-500"><i  className="fas fa-chevron-down"></i></span>
                  </div>
               </div>                 
               <div id="dropdownRadioHelper" className="drop-menu hidden log-menu !z-50 max-h-56  overflow-y-auto absolute  top-[4.2rem] sm:left-0 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                            {projectTypes.map((project, index) => (
                                <li key={index}>
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`helper-radio-${index}`}
                                                name="helper-radio"
                                                type="radio"
                                                value={project.type}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{project.type}</div>
                                                <p id={`helper-radio-text-${index}`} className="text-xs font-normal text-gray-500 dark:text-gray-300">{project.description}</p>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
               {/* </div> */}
            </div>
         </div>
         <div  className="p-1 relative">
            <div  className="menu-pr flex py-[3px] bg-white rounded-lg search-otp-rnk">
               <div  className="pl-[10px] self-end">
                 <span className="flex w-5 items-center h-5">
                  <CgTwilio className='text-sky-800 text-lg' />
                 </span>
               </div>
               <div  className="menu-btn rnk-opt-btn pl-[5px] flex flex-col py-1 h-[50px] w-full">
                  <div  className="flex-22">
                     <div  className=""><span  className="font-bold text-gray-700 text-xs uppercase">Exam</span></div>
                  </div>
                  <div  className="btn-uni flex items-end flex-70 pb-[6px]">
                     <div  className="actv-slc flex flex-nowrap items-center overflow-x-auto">
                        <div  className="text-md text-gray-400 font-nav">
                          <input  type="text" placeholder="University Nameggg" className="bg-transparent" /></div>
                        
                     </div>
                     <span  className="ml-auto mr-[5px] text-xs text-gray-500"><i  className="fas fa-chevron-down"></i></span>
                  </div>
               </div>
               <div id="dropdownRadioHelper" className="drop-menu hidden log-menu !z-50 max-h-56  overflow-y-auto absolute  top-16 sm:left-0 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                            {projectTypes.map((project, index) => (
                                <li key={index}>
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`helper-radio-${index}`}
                                                name="helper-radio"
                                                type="radio"
                                                value={project.type}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{project.type}</div>
                                                <p id={`helper-radio-text-${index}`} className="text-xs font-normal text-gray-500 dark:text-gray-300">{project.description}</p>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
         </div>
         <div  className="search-btn text-center sm:border-l sm:border-l-gray-300"><a  href="" className="inline-block pl-[15px]"><button  className="searchBtn py-[5px] px-[10px] bg-primary-btn border-1 border-white"><span ><MdOutlineManageSearch className='text-2xl' /></span></button></a></div>
      </div>
   </div>
</div>
  );
};

export default PanelSearch;