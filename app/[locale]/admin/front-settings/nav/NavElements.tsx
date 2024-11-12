
'use client'
import React, { useRef } from "react";
import { ServiceCategoryInt } from '@/app/models/ServiceCategoryInt'
import { FiArrowLeft } from "react-icons/fi";

import {useEffect} from 'react';
import { MenuWithAllModels } from "../../setting/left-nav/_utils/MenuWithAllModels";


interface ServiceCategoryProps {
    // serviceCategory: ServiceCategoryInt,
    serviceCategory : MenuWithAllModels
  }
  
  function CategoryElements({ serviceCategory}: ServiceCategoryProps) {
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
      <div className='rounded-xl service-outer sm:flex-25 max-sm:px-2 max-sm-py-1 sm:pb-2 pt-0 sm:px-2 max-sm:rounded-md max-sm:border max-sm:border-gray-200' >
        {/* <div className="flex justify-center" >
         <img className='p-1.5 bg-white rounded-md' src={serviceCategory.image} alt={serviceCategory.name} style={{boxShadow:'0 0 5px #ccc'}} />
          
        </div> */}
        <div className="py-1 flex items-center service-btn" ref={serviceRef}  onClick={handleClick}>
          
          <span className="w-8 sm:hidden inline-block">
            {serviceCategory.icon && <img className='w-full' src={serviceCategory.icon} alt="" />   }
            </span>
            <div className=" bg-white borfder max-sm:mb-2 w-8 sm:w-[22px] border-gray-400 mr-0.5  justify-center flex items-center rounded-full "  >
                   {serviceCategory.icon &&  <img className='w-full' src={serviceCategory.icon} alt={serviceCategory.title} /> }
                  </div> 
          <span className='text-sm  px-2 text-gray-800 sm:text-orange-500 tracking-wide font-medium sm:font-semibold'>{serviceCategory.titleAr}</span>  
        {/* <p className='mt-3 text-sm leading-6 text-gray-500 font-semibold pl-4'>{serviceCategory.desc}</p> */}
        </div>
        
        {serviceCategory.elements && serviceCategory.elements.length > 0 && (
          <div className='my-1 mb-1 max-sm:nav-mob services-menu max-sm:hidden max-sm:fixed max-sm:mt-0 max-sm:top-0 max-sm:h-full max-sm:left-0 max-sm:w-full max-sm:bg-white'>
            <div className="sm:hidden flex mb-2 flex-col bg-slate-500 ">
              <span className="sm:hidden pl-2 pt-2"  onClick={closeMenu}>
                <FiArrowLeft className="text-xl font-semibold text-white " />
              </span>
              <div className="flex justify-center pb-6 items-center">
                 
                <span className="text-lg font-semibold text-white">
                    {serviceCategory.titleAr}
                </span>
              </div>
            </div>
            
           
            <ul className='grid grid-cols-2 sm:flex max-sm:mt-6 sm:flex-col rtl:sm:pr-6 ltr:sm:pl-6 max-sm:gap-4  max-sm:px-6'>
              {serviceCategory.elements.map((service) => (
                
                <li className='flex max-sm:flex-col items-center py-2 max-sm:shadow-md max-sm:px-2 sm:py-1 max-sm:border max-sm:border-gray-300 max-sm:rounded-md'  key={service.id}>
                  {/* <div className=" bg-white border max-sm:mb-2 w-8 sm:w-[22px] border-gray-400 p-1 mr-2  justify-center flex items-center rounded-full "  >
                    <img className='w-full' src={service.image} alt={service.name} />
                  </div> */}
                  
                  <h3 className='text-sm sm:text-sm text-gray-800 font-medium max-sm:text-center'>{service.titleAr}</h3>
                  
                </li>
              ))}
            </ul> 
            
          </div>
        )}
      </div>
    );
  }
  
  export default CategoryElements;