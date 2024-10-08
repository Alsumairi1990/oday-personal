'use client'
import Link from 'next/link';
import { Element } from "./Element";

// import React from 'react';
import React, { useEffect, useState } from 'react';
import { ElementWithSubElements, MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
import { MenuWithModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithModels';
interface Props {
  element : MenuWithAllModels
}
const NavElement = ({element}:Props) => {
 const [visibleContent, setVisibleContent] = useState<boolean>(false);
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
    <>
    
       

   
      <li className="side-item-btn py-0 pl-1.5 text-gray-300 text-base font-bold bortder-b border-side-bcolor cursor-pointer">
                 <div  
                 onClick={handleClick}
                  className="flex items-center text-md py-2 hover:bg-side-btn pl-3 font-medium  rounded" >
                    <span className=" bg-[#206681] border border-[#878787] h-6 w-6 flex items-center text-[14px]  rounded mr-2 justify-center" >
                    {/* <BiBasketball className="text-xl text-white" /> */}
                    <img className='w-5 ' src={`${baseUrl}/${element?.icon}`} alt="" />
                    </span>
                        {element.title}
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
                {element && element.elements.length > 0 && 
                // <ul className={`side-sub mb-3 font-normal flex flex-col text-[.9rem] pt-1 ml-[1.5rem] ${visibleContent ? '' : 'hidden'} border-l border-gray-400 mb-2`}>
                    
                //      {element.elements.map(elm =>
                //        <li>
                //         <Link href={baseUrl+elm.link}>
                //             <div
                //             onClick={() => handleLinkClick(baseUrl+elm.link)}
                //             className={`pl-6 py-[2px] relative after:content-[''] after:absolute after:h-px after:w-5 after:border-b after:border-dotted after:border-b-gray-400 after:bg-transparent after:left-0 after:top-[14px] ${activeLink === baseUrl+elm.link ? 'text-orange-400' : ''}`}
                //             >
                //             <span className="pl-3 relative after:content-[''] after:absolute after:h-1 after:w-1 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[7px] after:rounded">{elm.title}</span>
                //             </div>
                //         </Link>
                //        </li>

                //      )}
                // </ul>
                <ul className={`side-sub mb-3 font-normal flex flex-col text-[.9rem] pt-1 ml-[1.5rem] ${visibleContent ? '' : 'hidden'} border-l border-gray-400 mb-2`}>
                {element.elements.map((element) => (
                  <ElementDisplay key={element.id} element={element} />
                ))}
              </ul>
                }
            </li>
             
            </>
  )
};


export default NavElement;

// Recursive component to display nested elements
type ElementProps = {
    element: ElementWithSubElements;
  };
  
  const ElementDisplay: React.FC<ElementProps> = ({ element }) => {
    const [visibleContent, setVisibleContent] = useState<boolean>(false);
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
    return (
           <li>
                       <Link href={baseUrl+element.link}>
                            <div
                            onClick={() => handleLinkClick(baseUrl+element.link)}
                            className={`pl-6 py-[2px] relative after:content-[''] after:absolute after:h-px after:w-5 after:border-b after:border-dotted after:border-b-gray-400 after:bg-transparent after:left-0 after:top-[14px] ${activeLink === baseUrl+element.link ? 'text-orange-400' : ''}`}
                            >
                            <span className="pl-3 relative after:content-[''] after:absolute after:h-1 after:w-1 after:bg-gray-400 after:left-[-2px] hover:text-orange-400 after:top-[7px] after:rounded">{element.title}</span>
                            </div>
                            </Link>
  
        {element.subElements && element.subElements.length > 0 && (
          <ul className='pl-3'>
            {element.subElements.map((subElement) => (
              <ElementDisplay key={subElement.id} element={subElement} />
            ))}
          </ul>
        )}
      </li>
    );
  };
