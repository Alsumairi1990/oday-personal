"use client";
import React, { useEffect } from 'react';
import { GrCheckmark } from "react-icons/gr";
import { Location, ServiceCode } from '@prisma/client';
import { useState } from 'react';
import Link from 'next/link';

interface Props {
    status: number;
    closeMode : (value : boolean) => void
  }


const SuccessMessage = ({status,closeMode}:Props) => {
    const [result, setResult] = useState<number>(0); // Use Category type
    useEffect(() => {
        setResult(status);
    }, [result]);
   
   const handleClick = (e:any) => {
    e.preventDefault();
    const uniqueParam = new Date().getTime().toString();
    window.location.href = `/admin/service/create?refresh=${uniqueParam}`;

};
const closeMenu= ()=> {
    closeMode(false);
}

  return (
   <div className="fixed bg-[#0000003f] h-full flex items-center justify-center w-full left-0 top-0 m-auto z-50 p-6">
      {location &&
           <div className=" w-full sm:mx-auto bg-white sm:w-6/12 shadow-2xl mb-4 rounded-md">
            <div className="flex items-center bg-indigo-500 py-2.5 px-2 rounded-t-md">
                <span className=''><GrCheckmark className='text-xl mr-2 text-white'  /></span>
                <span className="text-base text-white">
                tag Added 
                </span>
                <button type="button" onClick={closeMenu}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center  ml-auto" >
                                      <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
            </div>
           
             <div className="border-t flex px-2 bg-gray-100 border-t-gray-200 py-2">
                <span className="flex-30 text-gray-700 text-md font-medium">
                    name
                </span>
                <span className="flex-30 text-gray-700 text-md font-medium">
                    slug
                </span>
                <span className="flex-30 text-gray-700 text-md font-medium">
                    icon
                </span>
             </div>

             <div className="px-2 border-t flex border-t-gray-200 py-2">
                <span className="text-gray-600 flex-30 text-md font-medium">
                    {result}

                </span>
              
             </div>
             <div className="flex justify-center border-t pt-3 border-t-gray-200 my-4">
                <button onClick={handleClick} className='flex-20 flex justify-center'>
                    <span className="text-white px-4 text-center flex bg-blue-600 rounded-md py-1.5 font-semibold text-md">Add Category</span>
                </button>
                <Link href="/admin/service" className="flex-15 flex justify-center">
                    <span className="text-white px-4 text-center flex bg-slate-500 rounded-md py-1.5 font-semibold text-md">Manag</span>
                </Link>

             </div>
            
           </div>
        }
         
   </div>
  );
};

export default SuccessMessage;