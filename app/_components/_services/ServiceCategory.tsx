
import React from 'react';
import { ServiceCategoryInt } from '@/app/models/ServiceCategoryInt'
import { MdAssistantDirection } from "react-icons/md";


interface ServiceCategoryProps {
    serviceCategory: ServiceCategoryInt;
  }
  
  function ServiceCategory({ serviceCategory }: ServiceCategoryProps) {
    return (
      <div className='bg-slate-300 rounded py-6 px-2'>
        <div className="flex justify-center">
         <img src={serviceCategory.image} alt={serviceCategory.name} />
          
        </div>
        <div className="py-2">
        <h2 className='text-xl text-center font-bold mt-2 text-white'>{serviceCategory.name}</h2>  
        <p className='mt-2 text-sm '>{serviceCategory.desc}</p>
        </div>
        
        
  
        {/* Check if services exist */}
        {serviceCategory.services && serviceCategory.services.length > 0 && (
          <div>
            <h3>Services:</h3>
            <ul className='flex flex-col'>
              {serviceCategory.services.map((service) => (
                
                <li className='flex items-center' key={service.id}>
                  <img className='w-6' src={service.image} alt={service.name} />
                  <h3 className='text-sm'>{service.name}</h3>
                  
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default ServiceCategory;