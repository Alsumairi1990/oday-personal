'use client'
import React from 'react';
import Link from 'next/link'
import { ServiceInt1 } from '../models/ServiceInt';
import NavElement from './_navbar/NavElement';

const ServicesPanel = () => {
    const imagePath = '/images/10.png';

    const services:ServiceInt1[] = [
      {
         id : "1",
         name : 'Printing Services',
         desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
         icon : 's1.svg'
      },
      {
         id : "2",
         name : 'Mobile Dign',
         desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
         icon : 's2.svg'
     },
     {
       id : "3",
       name : 'Packaging Services',
       desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
       icon : 's3.svg'
     },
     {
      id : "1",
        name : 'Logo Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's1.svg'
     },
     {
      id : "1",
        name : 'Label Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's4.svg'
     },
     {
      id : "1",
        name : 'Resume Prepartion',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's5.svg'
     },
     {
      id : "1",
        name : 'Eboox Cover',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's6.svg'
     },
     {
      id : "1",
        name : 'Bag Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's7.svg'
     }

   ]
  return (
    <div className="fixed top-[4.5rem] z-10 right-4 bg-white w-7/12 px-2 py-3 flex flex-col rounded-md" style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.08) 0px 0px 18px)'}}>
    <span className="absolute inline-block w-4 h-4 bg-white top-[-.5rem] sm:right-28 sm:mr-4 sm:rotate-45"></span>
    <div className="p-2"><span className="text-md text-gray-500 font-semibold">Explore More</span></div>
    <div className="px-3 py-2 grid grid-cols-3">
       <div className="col-start-1 col-span-2">
          <ul className="flex flex-wrap pb-2">
            {services.map((service) => (

            
                <li className="flex-48 line-height-20 pr-6">
                  <Link  href={`/services/${service.name}`}  className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                     <NavElement service={service}  />
                </Link>
             </li>
            ))
            }
            
  
          </ul>
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