
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import { CategoryFrontSingle } from '@/app/[locale]/admin/category/util/CategoryFrontSingle';
import Image from 'next/image';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

interface ServiceProps {
    category: CategoryFrontSingle;
    locale : string,
    messages : AbstractIntlMessages,
  }
const CategoryCol = ({ category,locale,messages } : ServiceProps) => {
  const request = (messages as any).HomePage.requestService;
  const details = (messages as any).HomePage.details;
  const categoryDetails = (messages as any).HomePage.categoryDetails;

  return (
    <div className="flex-100 sm:flex-20 py-2">
    <div className=" py-3 text-center rounded-md shadow-xl border border-gray-200">
     <div className="flex px-2 h-24 justify-center">
        {/* {category.image && <img src={category.image} alt={category.name} />} */}
        {category.icon && 
            <Image 
            src={category.icon}
            height={500}
            width={500}
            alt={category.name}
            className=' mx-auto rounded-t-md sm:rounded-md'
            />
            }
     </div>
        {locale == 'en' ? <div className="mt-1.5 ">
            <p className="text-gray-800 text-xl mb-1 font-semibold dark:text-orange-500 ">{category.name}</p>
            <p className="text-gray-500 text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-5 font-medium mb-4">{category.description}</p>
            <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{request}</a>
            </div>
            <div className="flex items-center bg-gray-200 px-2 py-1 mx-auto justify-center border  border-gray-300 rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{details}</a>
            </div>
        </div>
        : 
        <div className="mt-1.5 font-arabic ">
            <p className="text-gray-800 text-lg font-bold dark:text-orange-500 mb-2">{category.nameAr}</p>
            <p className="text-gray-500 text-sm tracking-8  leading-7 px-1.5 dark:text-gray-100 line-clamp-3 font-medium mb-4">{category.descriptionAr}</p>
            {/* <div className="flex px-3 gap-x-3 justify-center border-t border-t-gray-200 pt-3">
             <div className="py-1 px-2 text-center bg-orange-600 border border-orange-600 rounded-md">
              <Link href="/service" className="text-base rtl:font-arabic rtl:text-sm rtl:font-bold text-white">{request}</Link>
             </div>
             <div className="py-1 px-2 text-center border bg-gray-50 rounded-md">
              <Link href="/service" className="text-base rtl:font-arabic rtl:font-semibold rtl:text-sm"> {details}</Link>
             </div>
           </div> */}
             <div className="p-1 flex flex-col sm:flex-row justify-around mt-4 mb-1">
                   <Link href={`/services/categories/${category.slug}`} className='px-2 sm:px-4 py-1 sm:py-1.5 rtl:font-arabic flex items-center justify-center border dark:border-[0.13rem] bg-gray-50 border-gray-100 dark:bg-[#00ba35] dark:border-[#00ba35] rounded text-gray-600 dark:text-black font-semibold text-sm' style={{borderRadius:'36px 67px'}} >{categoryDetails} 
                   <span className='font-semibold text-orange-500 mx-1 text-sm px-2 py-0.5 border rounded-xl'>{category._count.services}</span>
                   <span className="ml-2 rtl:mr-2 rtl:-rotate-90">
                   <MdOutlineKeyboardArrowLeft className='text-lg text-gray-500' />
                       </span>
                   </Link>
                 </div>
        </div>
          }

    </div>
    </div>
  );
};

export default CategoryCol;

