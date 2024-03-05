
'use client'
import React from 'react';
import { ServiceCategoryInt } from '@/app/models/ServiceCategoryInt'
import { MdAssistantDirection } from "react-icons/md";
import {useEffect} from 'react';


interface ServiceCategoryProps {
    serviceCategory: ServiceCategoryInt;
  }
  
  function CategoryElements({ serviceCategory }: ServiceCategoryProps) {
    
        
    
    return (
      <div className='rounded-xl service-outer sm:flex-25 max-sm:px-2 max-sm-py-1 sm:pb-2 pt-0 sm:px-2 max-sm:rounded-md max-sm:border max-sm:border-gray-200'>
        {/* <div className="flex justify-center" >
         <img className='p-1.5 bg-white rounded-md' src={serviceCategory.image} alt={serviceCategory.name} style={{boxShadow:'0 0 5px #ccc'}} />
          
        </div> */}
        <div className="py-1 max-sm:flex max-sm:items-center service-btn">
          <span className="w-8 sm:hidden inline-block">
            <img className='w-full' src={serviceCategory.icon} alt="" />
            </span>
          <h2 className='text-sm  px-4 text-orange-500 tracking-wide font-medium sm:font-semibold'>{serviceCategory.name}</h2>  
        {/* <p className='mt-3 text-sm leading-6 text-gray-500 font-semibold pl-4'>{serviceCategory.desc}</p> */}
        </div>
        
        {serviceCategory.services && serviceCategory.services.length > 0 && (
          <div className='my-1 mb-1 services-menu max-sm:hidden'>
           
            <ul className='flex flex-col px-4'>
              {serviceCategory.services.map((service) => (
                
                <li className='flex items-center py-1'  key={service.id}>
                  <div className="bg-white border w-[22px] border-gray-400 p-1 mr-2  justify-center flex items-center rounded-full "  >
                    <img className='w-full' src={service.image} alt={service.name} />
                  </div>
                  
                  <h3 className='text-sm text-gray-700 font-medium nav-font'>{service.name}</h3>
                  
                </li>
              ))}
            </ul>
            
          </div>
        )}
      </div>
    );
  }
  
  export default CategoryElements;