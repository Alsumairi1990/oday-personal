
'use client'
import React, { useRef } from "react";
import { FiArrowLeft } from "react-icons/fi";

import {useEffect} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { AbstractIntlMessages } from "next-intl";
import { MenuWithAllModels } from "../../admin/setting/left-nav/_utils/MenuWithAllModels";


interface Props {
    // serviceCategory: ServiceCategoryInt,
    element : MenuWithAllModels,
    locale : string,
    messages : AbstractIntlMessages,
  }
  
  function MenuElement({ element,locale,messages}: Props) {
    const serviceRef = useRef(null);
         const handleClick = (event:any) => {
    const clickedDiv = event.currentTarget; 
    const prnt = clickedDiv.closest('.service-outer');
    const menu = prnt.querySelector('.services-menu');
    if(menu.classList.contains('max-sm:hidden')){
      menu.classList.remove('max-sm:hidden');
    }
    else if(!menu.classList.contains('max-sm:hidden')){
      menu.classList.add('max-sm:hidden');
    }

  };

  const closeMenu = (event:any) => {
    
    const elem= event.currentTarget;    
    const prnt = elem.closest('.services-menu');

    prnt.classList.add('max-sm:hidden');
  }

  
    
    return (
      <div className='service-outer    max-sm-py-1 sm:pb-2 pt-0  max-sm:rounded-md max-sm:border max-sm:border-gray-200' >
        {/* <div className="flex justify-center" >
          
        </div> */}
        <div className="flex items-center mt-1 mb-2 service-btn  rounded-[10px]  w-full py-1.5 px-1 " ref={serviceRef}  onClick={handleClick}>
          
          
           {/* <div className="borfder mb-2 w-8  border-gray-400 mr-0.5  justify-center flex items-center rounded-full "  >
                  {locale === 'en' ? (
                    element.icon &&  <img className='w-full' src={element.icon} alt={element.title} />
                   ) 
                   :(
                    element.icon &&  <img className='w-full' src={element.icon} alt={element.titleAr!} /> 
                   )
                  }
                    </div>*/} 
                  {locale === 'en' ? <span className='text-sm   text-gray-800 sm:text-orange-500  font-medium sm:font-semibold'>{element.title}</span> 
                  :
                  <span className='text-sm   text-gray-800 sm:text-orange-500 font-medium sm:font-semibold'>{element.titleAr}</span> 
                } 
        </div>
        
        {element.elements && element.elements.length > 0 && (
          <div className='my-1 mb-1 max-sm:nav-mob services-menu max-sm:hidden max-sm:fixed max-sm:mt-0 max-sm:top-0 max-sm:h-full max-sm:left-0 max-sm:w-full max-sm:bg-white'>
            <div className="sm:hidden flex mb-2 flex-col bg-slate-500 ">
              <span className="sm:hidden pl-2 pt-2"  onClick={closeMenu}>
                <FiArrowLeft className="text-xl font-semibold text-white " />
              </span>
              <div className="flex justify-center pb-6 items-center">
                 
                {locale === 'en' ? <span className="text-lg font-semibold text-white">
                    {element.title}
                </span>:
                <span className="text-lg font-semibold text-white">
                {element.titleAr}
            </span>
                }
              </div>
            </div>
            
           
            <ul className='grid grid-cols-2 sm:flex max-sm:mt-6 sm:flex-col rtl:sm:pr-6 ltr:sm:pl-6 max-sm:gap-4  max-sm:px-6'>
              {element.elements.map((service) => (
                
                <li className='flex max-sm:flex-col items-center py-2 max-sm:shadow-md max-sm:px-2 sm:py-1.5 max-sm:border max-sm:border-gray-300 max-sm:rounded-md'  key={service.id}>
                  {/* <div className=" bg-white border max-sm:mb-2 w-8 sm:w-[22px] border-gray-400 p-1 mr-2  justify-center flex items-center rounded-full "  >
                    <img className='w-full' src={service.image} alt={service.name} />
                  </div> */}
                  <span className="flex max-sm:hidden rtl:ml-0.5"><IoIosArrowBack className="text-base text-gray-400 ltr:rotate-180" /></span>
                  {locale === 'en' ? <h3 className='text-sm sm:text-sm text-gray-800 font-medium max-sm:text-center'>{service.title}</h3>
                  :
                  <h3 className='text-sm sm:text-sm text-gray-800 font-medium max-sm:text-center'>{service.titleAr}</h3>
                  }
                  
                </li>
              ))}
            </ul> 
            
          </div>
        )}
      </div>
    );
  }
  
  export default MenuElement;