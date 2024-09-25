'use client'
import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
interface Props {
    menu : MenuWithAllModels
}
function NavPanel({menu}:Props) {
    const [visibleContent, setVisibleContent] = useState<boolean>(true);
    const [activeLink, setActiveLink] = useState<string | null>(null); 
    const [baseUrl, setBaseUrl] = useState<string>('');
       const handleClick = (e:any) => {
        const nearestContent = e.currentTarget.closest('li').querySelector('.side-sub');
        if (nearestContent) {
          setVisibleContent(prevContent => prevContent === nearestContent ? false : nearestContent);
        }}
         const handleLinkClick = (link: string) => {
        setActiveLink(link);
      };
       useEffect(() => {
           const { protocol, host } = window.location;
           setBaseUrl(`${protocol}//${host}/`);
       });
  return (
    <div >
              <div  
                 
                  className="flex items-center text-md py-2 pl-3 font-medium  rounded" >
                    <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <img className='w-5 ' src={`${baseUrl}/${menu?.icon}`} alt="" />
                    </span>
                        {menu.title}
                        

                </div>
                <ul className={` mb-3 font-normal flex-col ftext-[.9rem] pt-1 `}>
                  {menu.elements.map(element => (
                    <li key={element.id}>
                        <Link href={baseUrl+element.link}>
                            <div
                            onClick={() => handleLinkClick(baseUrl+element.link)}
                            className={`pl-6 py-[2px]   ${activeLink === baseUrl+element.link ? 'text-orange-400' : ''}`}
                            >
                            <span className="text-gray-800">{element.title}</span>
                            </div>
                            </Link>
                      
                        
                        </li>
                    ))}
        </ul>
    </div>
  )
}

export default NavPanel