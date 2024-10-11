"use client";
import React, { useEffect } from 'react';
import { ServiceCode, Tag} from '@prisma/client';
import { useState } from 'react';
import { ToolWithUser } from './ToolWithUser';
interface Props {
    code: ServiceCode;
  }
const CardCol = ({code}:Props) => {
    const [baseUrl, setBaseUrl] = useState<string>('');
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);
  return (
   <div className="w-full ">
      {code && 
           <div className=" w-full flex flex-col sm:mx-auto items-center bg-white rounded-t-md">
             <div className="sm:flex-100 max-h-44 overflow-hidden rounded-t-md bg-black ">
                 <img className=' opacity-75 h-full rounded-l-md' src={`${baseUrl}/${code?.image}`} alt="" />
             </div>
             <div className="p-2 pl-4 flex-100 mt-1">
                <div className="w-full mb-2 flex items-center">
                    <img className=' rounded-md w-6  mr-2' src={`${baseUrl}/${code?.icon}`} alt="" />
                    <span className="text-base  text-black  font-semibold">{code?.code}</span>
                    <div className="ml-auto">
                      <span className="text-sm text-gray-700">By : </span>
                      <span className="text-sm text-red-700 ml-1 capitalize">Sameer</span>
                    </div>
                </div>
                <div className="">
                    <span className="text-sm text-gray-800 mr-1">
                      Caregory Slug : 
                    </span>
                    <span className="text-sm text-gray-900 font-medium">slug name</span>
                </div>
                <div className="mt-2.5">
                    <span className="text-sm font-normal line-clamp-2 leading-6">{code?.description}</span>
                </div>
             </div>
           </div>
        }
   </div>
  );
};
export default CardCol;