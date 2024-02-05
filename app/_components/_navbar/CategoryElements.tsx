
import React from 'react';
import { ServiceCategoryInt } from '@/app/models/ServiceCategoryInt'
import { MdAssistantDirection } from "react-icons/md";


interface ServiceCategoryProps {
    serviceCategory: ServiceCategoryInt;
  }
  
  function CategoryElements({ serviceCategory }: ServiceCategoryProps) {
    return (
      <div className='rounded-xl sm:flex-25 pb-6 pt-0 px-2  '>
        {/* <div className="flex justify-center" >
         <img className='p-1.5 bg-white rounded-md' src={serviceCategory.image} alt={serviceCategory.name} style={{boxShadow:'0 0 5px #ccc'}} />
          
        </div> */}
        <div className="py-1">
        <h2 className='text-sm  px-4 text-orange-500 tracking-wide font-semibold mt-2 '>{serviceCategory.name}</h2>  
        {/* <p className='mt-3 text-sm leading-6 text-gray-500 font-semibold pl-4'>{serviceCategory.desc}</p> */}
        </div>
        
        {serviceCategory.services && serviceCategory.services.length > 0 && (
          <div className='mt-1'>
           
            <ul className='flex flex-col px-4'>
              {serviceCategory.services.map((service) => (
                
                <li className='flex items-center py-1'  key={service.id}>
                  <div className="bg-white border w-[22px] border-gray-400 p-1 mr-2  justify-center flex items-center rounded-full "  >
                    <img className='w-full' src={service.image} alt={service.name} />
                  </div>
                  
                  <h3 className='text-sm text-gray-700 font-medium'>{service.name}</h3>
                  
                </li>
              ))}
            </ul>
            
          </div>
        )}
      </div>
    );
  }
  
  export default CategoryElements;