
import React from 'react';
import { ServiceCategoryInt } from '@/app/models/ServiceCategoryInt'
import { MdAssistantDirection } from "react-icons/md";


interface ServiceCategoryProps {
    serviceCategory: ServiceCategoryInt;
  }
  
  function ServiceCategory({ serviceCategory }: ServiceCategoryProps) {
    return (
      <div className='bg-gray-100 rounded-xl py-6 px-2 shadow border border-gray-200 '>
        <div className="flex justify-center" >
         <img className='p-1.5 bg-white rounded-md' src={serviceCategory.image} alt={serviceCategory.name} style={{boxShadow:'0 0 5px #ccc'}} />
          
        </div>
        <div className="py-2">
        <h2 className='text-2xl text-center tracking-wide font-bold mt-2 text-gray-700'>{serviceCategory.name}</h2>  
        <p className='mt-3 text-sm leading-6 text-gray-500 font-semibold pl-4'>{serviceCategory.desc}</p>
        </div>
        
        {serviceCategory.services && serviceCategory.services.length > 0 && (
          <div className='mt-2'>
           
            <ul className='flex flex-col px-4'>
              {serviceCategory.services.map((service) => (
                
                <li className='flex items-center py-2 border-b border-gray-300'  key={service.id}>
                  <div className="bg-white border w-7 border-gray-400 p-1 mr-2  justify-center flex items-center rounded-full "  >
                    <img className='w-full' src={service.image} alt={service.name} />
                  </div>
                  
                  <h3 className='text-sm text-gray-700 font-semibold'>{service.name}</h3>
                  
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-6">
              <span className="border flex w-1/2 justify-center py-2 border-gray-600 bg-white  rounded-[2rem] text-sm text-gray-700" >Explore details</span>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default ServiceCategory;