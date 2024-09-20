"use client";
import React, { useEffect } from 'react';
import { GrCheckmark } from "react-icons/gr";
import { Category, Tag } from '@prisma/client';
import { useState } from 'react';
import Link from 'next/link';

interface Props {
    tag: Category;
  }


const SuccessMessage = ({tag}:Props) => {
    const [tagData, setTagData] = useState<Tag | null>(null); // Use Category type
    useEffect(() => {
        setTagData(tag);
    }, [tag]);
   
   const handleClick = (e:any) => {
    e.preventDefault();
    const uniqueParam = new Date().getTime().toString();
    window.location.href = `/admin/tag/create?refresh=${uniqueParam}`;

};

  return (
   <div className="fixed bg-[#0000003f] h-full flex items-center justify-center w-full left-0 top-0 m-auto z-50 p-6">
      {tag &&
           <div className=" w-full sm:mx-auto bg-white sm:w-6/12 shadow-2xl mb-4 rounded-md">
            <div className="flex items-center bg-indigo-500 py-2.5 px-2 rounded-t-md">
                <span className=''><GrCheckmark className='text-xl mr-2 text-white'  /></span>
                <span className="text-base text-white">
                tag Added 
                </span>
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
                    {tag.name}

                </span>
                <span className="text-gray-600 flex-30 text-md font-medium">
                    {tag.description}
                </span>
             </div>
             <div className="flex justify-center border-t pt-3 border-t-gray-200 my-4">
                <button onClick={handleClick} className='flex-20 flex justify-center'>
                    <span className="text-white px-4 text-center flex bg-blue-600 rounded-md py-1.5 font-semibold text-md">Add Category</span>
                </button>
                <Link href="/admin/tag" className="flex-15 flex justify-center">
                    <span className="text-white px-4 text-center flex bg-slate-500 rounded-md py-1.5 font-semibold text-md">Manag</span>
                </Link>

             </div>
            
           </div>
        }
         
   </div>
  );
};

export default SuccessMessage;