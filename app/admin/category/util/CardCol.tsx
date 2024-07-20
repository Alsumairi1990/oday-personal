"use client";
import React, { useEffect } from 'react';
import { GrCheckmark } from "react-icons/gr";
import { Category} from '@prisma/client';
import { useState } from 'react';
import { CategoryDTO } from '../util/CategoryDTO';
import Link from 'next/link';
import router from 'next/router';
import { useRouter } from 'next/navigation';
import { deleteCategories } from '../_actions/Actions';
type CategoryInput = Omit<Category, 'id' | 'slug' | 'userId' | 'image' | 'icon' | 'createdAt' | 'updatedAt'>;

interface Props {
    category: Category;
  }


const CardCol = ({category}:Props) => {
    const router = useRouter();
    const [categories, setCategories] = useState<CategoryInput | null>(null); // Use Category type
    const [baseUrl, setBaseUrl] = useState<string>('');
  
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);

  return (
   <div className="w-full ">
      {category && 
           <div className=" w-full flex flex-col sm:mx-auto items-center bg-white rounded-t-md">
             <div className="sm:flex-100 max-h-44 overflow-hidden rounded-t-md bg-black ">
                 <img className=' opacity-75 h-full rounded-l-md' src={`${baseUrl}/${category?.image}`} alt="" />
             </div>
             <div className="p-2 pl-4 flex-100 mt-1">
                <div className="w-full mb-2 flex items-center">
                    <img className=' rounded-md w-6  mr-2' src={`${baseUrl}/${category?.icon}`} alt="" />
                    <span className="text-base  text-black  font-semibold">{category?.name}</span>
                    <div className="ml-auto">
                      <span className="text-sm text-gray-700">By : </span>
                      <span className="text-sm text-red-700 ml-1 capitalize">{ category?.user?.user_name}</span>
                    </div>
                </div>
                <div className="">
                    <span className="text-sm text-gray-800 mr-1">
                      Caregory Slug : 
                    </span>
                    <span className="text-sm text-gray-900 font-medium">{category?.slug}</span>
                </div>
                <div className="mt-2.5">
                    <span className="text-sm font-normal line-clamp-2 leading-6">{category?.description}</span>
                </div>
             </div>
            
           
            
           </div>
        }
         
   </div>
  );
};

export default CardCol;