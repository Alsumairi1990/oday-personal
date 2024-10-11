import React from 'react';
import Image from 'next/image';
import { CategoryWithService } from '../[locale]/admin/service/utils/CategoryWithService';
import { MdOutlineUpdate } from 'react-icons/md';
import Link from 'next/link';



interface Props {
  category: CategoryWithService
}

function ServiceCategoryPanel1({ category }: Props) {
  return (
    <div className='bg-gray-200 border border-gray-300 py-2 rounded-lg'>
      <div className="p-1 px-2 border-b border-dashed gap-x-1.5 flex items-center border  border-b-gray-500 mb-3">
        <div className="h-7 w-7 px-1 flex items-center overflow-hidden bg-white border border-gray-300 rounded-full text-white">
        {category.icon && (
                  <Image
                    src={category.icon}
                    height={50}
                    width={50}
                    alt={category.name}
                    className="w-full max-w-full rounded-full"
                  />
                )}
        </div>
        <span className="text-md text-gray-800 font-medium ">{category.name}</span>
      </div>
      <div className="h-96 overflow-y-auto px-2 scr-container">
        {category.services.length > 0 &&
          category.services.map(({ service }) => (
            <div key={service.name} className="  bg-white mb-8 rounded-t-lg shadow-md rounded-b-lg">
              <div>
                {service.image && (
                  <Image
                    src={service.image}
                    height={300}
                    width={300}
                    alt={service.name}
                    className="w-full max-w-full rounded-t-lg"
                  />
                )}
                
              </div>
              <div className="my-3 pb-4 px-3 ">
                <div className="py-1 mb-1 flex gap-x-2">
                    <span className="flex-15 rounded-md h-1.5 bg-indigo-500"></span>
                    <span className="flex-15 rounded-md h-1.5 bg-orange-500">
                    </span>
                </div>
                 <p className='text-md w-7/12'>{service.name}</p>
                 <div className="flex items-center mt-2 gap-x-2">
                    <div className="flex gap-x-1  text-gray-100 rounded-md  bg-green-600 px-1 pr-2 py-[3px]">
                        <span className=""><MdOutlineUpdate  className="text-white text-md" /></span>
                    <span className="text-xs font-medium ">
                    {new Date(service.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                        {/* <span className="text-md bg-gray-200 px-1.5 py-0.5">{service.createdAt.toLocaleString()}</span> */}
                    </div>
                    <div className="flex gap-x-1  text-gray-600 rounded-md  bg-gray-200 px-1 pr-2 py-[3px]">
                       <span className="text-xs font-medium ">
                        Price : 
                        </span>
                    </div>
                    <div className="flex ml-auto gap-x-1 w-7 h-7 justify-center items-center  text-gray-600 rounded-full  bg-gray-200 px-1.5 py-[3px]">
                    {service.icon && (
                        <Image
                            src={service.icon}
                            height={50}
                            width={50}
                            alt={service.name}
                            className="w-full max-w-full "
                        />
                        )}
                    </div>
                 </div>
              </div>
            </div>
          ))}
      </div>
      <div className="px-2 mt-1  border-t  border-t-gray-400 border-dashed pt-2">
        <Link href={`/admin/service/pages/categories/${category.id}`} className="bg-white rounded-md px-2 py-1">
            <span className="m-0 py-1.5  text-center text-gray-700 ">
                show Services
            </span>
            <span className="text-orange-500 ml-2 text-md font-medium">
            ( {category._count.services} )
            </span>
        </Link> 
      </div>
    </div>
  );
}

export default ServiceCategoryPanel1;
