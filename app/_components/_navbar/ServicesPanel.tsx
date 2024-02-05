'use client'
import React from 'react';
import {serviceCategories} from '@/app/utils/ServiceCategories'
import CategoryElements from './CategoryElements';

const ServicesPanel = () => {
   const imagePath = '/images/10.png';
  return (
    <div className="absolute top-[4.5rem] z-10 bg-white right-0 w-full  px-2 py-3 flex flex-col " >
    <span className="absolute inline-block w-4 h-4 bg-white top-[-.5rem] sm:right-28 sm:mr-4 sm:rotate-45"></span>
    <div className="px-6 py-0.5 grid grid-cols-5">
       <div className="col-start-1 col-span-4">
       <div className="pl-5 grid-cols-1 sm:columns-3 gap-10" >
       {serviceCategories.map((categoryService) => (
                  <CategoryElements key={categoryService.id} serviceCategory={categoryService} />
               ))}
       </div>
       </div>
       <div className="p-2 rounded-md" style={{background: 'rgba(226, 235, 247, 0.41)'}}>
          <h2 className="text-xl text-gray-800 font-semibold px-3 pt-4">Find Out Best Course and Top Collages </h2>
          <img src={imagePath} alt="My Image" />
       </div>
    </div>
 </div>
  );
};

export default ServicesPanel;