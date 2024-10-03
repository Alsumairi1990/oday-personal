"use client";
import React, { useEffect } from 'react';
import { Category} from '@prisma/client';
import { useState } from 'react';
import Link from 'next/link';
import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import { CategoryFrontSingle } from '@/app/[locale]/admin/category/util/CategoryFrontSingle';

interface Props {
    category: CategoryFrontSingle;
    locale : string,
    messages : AbstractIntlMessages,
  }


const CategoryCard = ({category,locale,messages,}:Props) => {
  const request = (messages as any).HomePage.requestService;
  const details = (messages as any).HomePage.details;

  
  return (
    <div className="w-full ">
    {category && 
         <div className=" w-full flex flex-wrap border border-gray-300 sm:mx-auto items-center bg-white dark:bg-[#111] rounded-t-md">
           <div className="sm:flex-15 max-h-44 flex justify-center overflow-hidden">
           {category.image && <img src={category.image} alt={category.name} />}
           </div>
           <div className="p-2 ltr:pl-4 rtl:pr-5 sm:flex-70 mt-1 sm:border-x sm:border-x-gray-300">
              <div className="w-full mb-2 flex items-center">
                  {/* <img className=' rounded-md w-6  ltr:mr-2 rtl:ml-2' src={category.icon!} alt="" /> */}
                  {locale == 'en' ? <span className="text-base  text-black dark:text-orange-500 font-semibold">{category?.name}</span>
                  : <span className="text-base  text-black font-arabic dark:text-orange-500  font-semibold">{category?.nameAr}</span>
                  }
                  <div className="ltr:ml-auto rtl:mr-auto">
                    <span className="text-sm text-gray-700">By : </span>
                    {/* <span className="text-sm text-red-700 ml-1 capitalize">{ category?.user?.user_name}</span> */}
                  </div>
              </div>
              <div className="">
                  {/* <span className="text-sm text-gray-800 mr-1">
                    Caregory Name : 
                  </span> */}
                  {locale === 'en' ?<span className="text-sm text-gray-900 dark:text-gray-50 font-medium">{category?.name}</span>
                  : <span className="text-[13px] text-gray-900 font-arabic dark:text-gray-50 font-medium">{category.nameAr}</span>
                 }
              </div>
              <div className="mt-2.5">
                  {locale === 'en' ? <span className="text-sm font-normal line-clamp-3 leading-6">{category?.description}</span>
                  :  <span className="text-sm font-normal line-clamp-2 font-arabic  leading-6">{category?.descriptionAr}</span>
                }
              </div>
           </div>
           <div className="flex-15 px-3 space-y-2">
             <div className="py-1 text-center bg-orange-600 border border-orange-600 rounded-md">
              <Link href="/category" className="text-base rtl:font-arabic rtl:text-sm rtl:font-bold text-white">{request}</Link>
             </div>
             <div className="py-1 text-center border bg-gray-50 rounded-md">
              <Link href="/category" className="text-base rtl:font-arabic rtl:font-semibold rtl:text-sm"> {details}</Link>
             </div>
           </div>
           
          
         
          
         </div>
      }
       
 </div>
  );
};

export default CategoryCard;