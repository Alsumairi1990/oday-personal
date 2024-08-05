"use client";
import React, { useEffect } from 'react';
import { Tag} from '@prisma/client';
import { useState } from 'react';
import { TestimonialWithModels } from './TestimonialWithModels';
interface Props {
    testimonial: TestimonialWithModels;
  }


const TestimonialCard = ({testimonial}:Props) => {
    const [baseUrl, setBaseUrl] = useState<string>('');
  
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);

  return (
   <div className="w-full ">
      {testimonial && 
           <div className=" w-full sm:h-32 flex flex-wrap sm:mx-auto items-center bg-white border-r border-r-gray-300 rounded-l-md">
             <div className="flex-100 sm:flex-23 h-full rounded-l-md bg-black border-r border-r-gray-300">
                 <img className=' opacity-75 h-full rounded-l-md' src={`${baseUrl}/${testimonial?.image}`} alt="" />
             </div>
             <div className="p-2 pl-4 flex-100 sm:flex-77 w-full">
                <div className="w-full mb-2 flex items-center">
                    <span className="text-base  text-black  font-semibold">{testimonial?.title}</span>
                    <div className="ml-auto">
                      <span className="text-sm text-gray-700">Added By : </span>
                      <span className="text-sm text-red-700 ml-1 capitalize">{ testimonial?.user?.user_name}</span>
                    </div>
                </div>
                <div className="">
                    <span className="text-sm text-gray-800 mr-1">
                      Rating
                    </span>
                    <span className="text-sm text-gray-900 font-medium">{testimonial?.rating}</span>
                </div>
                <div className="mt-2.5">
                    <span className="text-sm font-normal line-clamp-2 leading-6">{testimonial?.content}</span>
                </div>
             </div>
            
           
            
           </div>
        }
         
   </div>
  );
};

export default TestimonialCard;