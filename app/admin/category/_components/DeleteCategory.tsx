"use client";
import React, { useEffect } from 'react';
import { GrCheckmark } from "react-icons/gr";
import { Category, Service } from '@prisma/client';
import { useState } from 'react';
import { CategoryDTO } from '../util/CategoryDTO';
import Link from 'next/link';
import router from 'next/router';
import { useRouter } from 'next/navigation';
import { deleteCategories } from '../_actions/Actions';
type CategoryInput = Omit<Category, 'id' | 'slug' | 'userId' | 'image' | 'icon' | 'createdAt' | 'updatedAt'>;

interface Props {
    categoryIds: string[];
  }


const DeleteCategory = ({categoryIds}:Props) => {
    const router = useRouter();
    const [categories, setCategories] = useState<CategoryInput | null>(null); // Use Category type
    // useEffect(() => {
    //     setCategory(categoryP);
    // }, [categoryP]);
  const deleteRows = () => {
        deleteCategories(categoryIds);
        
  }
  

  return (
   <div className="fixed bg-[#0000003f] h-full flex items-center justify-center w-full left-0 top-0 m-auto z-50 p-6">
      {categoryIds &&
           <div className=" w-full sm:mx-auto bg-white sm:w-6/12 shadow-2xl mb-4 rounded-md">
            <div className="flex items-center bg-indigo-500 py-2.5 px-2 rounded-t-md">
                <span className=''><GrCheckmark className='text-xl mr-2 text-white'  /></span>
                <span className="text-base text-white">
                Categoty Added 
                </span>
            </div>
           
             <div className="p-2">
                <span className="text-gray-700 text-sm capitalize">
                    you are going to delete {categoryIds.length} rows
                </span>
             </div>

           
             <div className="flex justify-center border-t pt-3 border-t-gray-200 my-4">
                <button onClick={deleteRows} className='flex-20 flex justify-center'>
                    <span className="text-white px-4 text-center flex bg-blue-600 rounded-md py-1.5 font-semibold text-md">Delete Rows</span>
                </button>
                <Link href="/admin/category" className="flex-15 flex justify-center">
                    <span className="text-white px-4 text-center flex bg-slate-500 rounded-md py-1.5 font-semibold text-md">Manag</span>
                </Link>

             </div>
            
           </div>
        }
         
   </div>
  );
};

export default DeleteCategory;