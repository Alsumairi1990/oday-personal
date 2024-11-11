'use client'
import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels'
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
interface Props {
    menu : MenuWithAllModels,
    locale : string,
    messages : AbstractIntlMessages,
}
function NavPanel({menu,locale,messages}:Props) {
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
                    <span className=" bog-[#206681] borfder border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    <img className='w-5 ' src={`${baseUrl}/${menu?.icon}`} alt="" />
                    </span>
                    {locale === 'en' ? <span className="text-gray-800 ml-2 font-semibold">
                      {menu.title}
                    </span>
                    : <span className="text-gray-800 mr-2 font-semibold">
                    {menu.titleAr}
                  </span>
                    }
              </div>
                {/* <div className="sm:pl-5 max-sm:grid grid-cols-2 sm:grid-cols-1 sm:columns-3 gap-4 sm:gap-4 " >
                    {menu.elements.map((element) => (
                      <Link href={baseUrl+element.link} className='inline-flex'>
                      <div
                      onClick={() => handleLinkClick(baseUrl+element.link)}
                      className={`ltr:pl-9 rtl:pr-9 py-[2.5px] sm:text-sm font-medium  ${activeLink === baseUrl+element.link ? 'text-orange-400' : ''}`}
                      >
                      {locale === 'en'?
                        <span className="text-gray-800 sm:text-sm">{element.title}</span>
                        :                            
                        <span className="text-gray-800 sm:text-sm">{element.titleAr}</span>
                      }  
                      </div>
                      </Link>
                            ))}
                    </div> */}
                {/* <ul className={` mb-3 font-normal flex-col text-sm  `}>
                  {menu.elements.map(element => (
                    <li key={element.id}>
                        <Link href={baseUrl+element.link}>
                            <div
                            onClick={() => handleLinkClick(baseUrl+element.link)}
                            className={`ltr:pl-9 rtl:pr-9 py-[2.5px]   ${activeLink === baseUrl+element.link ? 'text-orange-400' : ''}`}
                            >
                            {locale === 'en'?
                              <span className="text-gray-800">{element.title}</span>
                              :                            
                              <span className="text-gray-800">{element.titleAr}</span>
                            }  
                            </div>
                            </Link>
                      
                        
                        </li>
                    ))}
        </ul> */}








    
  







    </div>
  )
}

export default NavPanel