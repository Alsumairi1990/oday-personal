
import React from 'react';
import { ServiceCategoryInt } from '@/app/models/ServiceCategoryInt'
import { MdAssistantDirection } from "react-icons/md";
import Link from 'next/link';


interface ServiceCategoryProps {
    serviceCategory: ServiceCategoryInt,
    index : number
  }
  
  function ServiceCategory({ serviceCategory, index }: ServiceCategoryProps) {
    const ind = 0;
  
    return (
        <div className="flex-48 first:flex-100 ">
        
        {index === ind ? (
                <div className='bg-gray-100 flex rounded-xl py-4 my-12 px-2 shadow border border-gray-200 '>
                <div className="sm:flex-35">
                    <div className="flex justify-center" >
                    <img className='p-1.5 bg-white rounded-md' src={serviceCategory.image} alt={serviceCategory.name} style={{boxShadow:'0 0 5px #ccc'}} />
                    
                    </div>
                </div>
                <div className="sm:flex-65 pl-6">
                     <div className="py-2 flex flex-col ">
                        <h2 className='text-2xl text-center tracking-wide font-bold mt-2 text-gray-700'>{serviceCategory.name}</h2>  
                        <p className='mt-3 text-sm leading-6 text-gray-500 font-semibold pl-4'>{serviceCategory.desc}</p>
                    </div>
                    <div className="p-2">
                        {serviceCategory.services && serviceCategory.services.length > 0 && (
                        <div className='mt-2'>
                            <ul className='flex flex-wrap px-4'>
                            {serviceCategory.services.map((service) => (
                                <li className='flex-48 py-2 border-b border-gray-300'  key={service.id}>
                                    <Link href={'/services/se'} className='flex items-center  '>
                                    <div className="bg-white border w-7 border-gray-400 p-1 mr-2  justify-center flex items-center rounded-full "  >
                                        <img className='w-full' src={service.image} alt={service.name} />
                                    </div>
                                    <h3 className='text-sm text-gray-700 font-semibold'>{service.name}</h3>
                                    </Link>
                                </li>
                            ))}
                            </ul>
                            <div className="flex justify-center mt-6">

                            <Link href={'/services/category/l'} className="border flex w-1/2 justify-center py-2 border-gray-600 bg-white  rounded-[2rem] text-sm text-gray-700" >Explore details</Link>
                            </div>
                        </div>
                    )}
                    </div>
        
                </div>
              </div>

            ) : (
                <div className=" flex flex-30 rounded-xl py-4 my-2 px-2 shadow border border-gray-200 ">
                <div className="sm:flex-40">
                    <div className="flex justify-center" >
                    <img className='p-1.5 bg-white rounded-md' src={serviceCategory.image} alt={serviceCategory.name} style={{boxShadow:'0 0 5px #ccc'}} />
                    
                    </div>
                </div>
                <div className="sm:flex-60 pl-3">
                     <div className="py-2 flex flex-col ">
                        <h2 className='text-2xl text-center tracking-wide font-bold mt-2 text-gray-700'>{serviceCategory.name}</h2>  
                        <p className='mt-3 text-sm leading-6 text-gray-500 font-medium pl-4'>{serviceCategory.desc}</p>
                    </div>
                    <div className="p-2">
                        {serviceCategory.services && serviceCategory.services.length > 0 && (
                        <div className='mt-2'>
                            <ul className='flex flex-wrap px-4'>
                            {serviceCategory.services.map((service) => (
                                <li className='flex-100 py-2 border-b border-gray-300'  key={service.id}>
                                    <Link href={'/services/se'} className='flex items-center  '>
                                    <div className="bg-white border w-7 border-gray-400 p-1 mr-2  justify-center flex items-center rounded-full "  >
                                        <img className='w-full' src={service.image} alt={service.name} />
                                    </div>
                                    <h3 className='text-sm text-gray-700 font-medium'>{service.name}</h3>
                                    </Link>
                                </li>
                            ))}
                            </ul>
                            <div className="flex justify-center mt-6">
                            <Link href={'/services/category/l'} className="border flex w-1/2 justify-center py-2 border-gray-600 bg-white  rounded-[2rem] text-sm text-gray-700" >Explore details</Link>
                            </div>
                        </div>
                    )}
                    </div>
        
                </div>
              </div>

            )
        }
  
     </div>
    );
  }
  
  export default ServiceCategory;