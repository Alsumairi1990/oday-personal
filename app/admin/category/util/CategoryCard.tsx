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


const CategoryCard = ({category}:Props) => {
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
           <div className=" w-full sm:flex sm:mx-auto items-center bg-white border-r border-r-gray-300 rounded-l-md">
             <div className="sm:flex-23  border-r border-r-gray-300">
                 <img className=' rounded-l-md' src={`${baseUrl}/${category?.image}`} alt="" />
             </div>
             <div className="p-2 pl-4  ">
                <div className="sm:flex-15 mb-4 flex items-center">
                    <img className=' rounded-md w-8  mr-2' src={`${baseUrl}/${category?.icon}`} alt="" />
                    <span className="text-base  text-black  font-semibold">{category?.name}</span>
                </div>
                <div className="sm:flex-15">
                    <span className="text-sm font-semibold">{category?.slug}</span>
                </div>
                <div className="sm:flex-15">
                    <span className="text-sm font-semibold">{category?.description}</span>
                </div>
             </div>
            
           
            
           </div>
        }
         
   </div>
  );
};

export default CategoryCard;