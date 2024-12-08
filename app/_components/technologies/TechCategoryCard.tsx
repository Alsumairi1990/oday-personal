'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import SelectTechCategory from './SelectTechCategory';
import { Tool } from '@prisma/client';
import Image from 'next/image';
import { CategoryWithTools } from '@/app/[locale]/admin/category/util/CategoryWithTools';
import TechCard from './TechCard';

interface Props {
    category : CategoryWithTools,
    locale : string,
    messages : AbstractIntlMessages

}
function TechCategoryCard({category,locale,messages}:Props) {
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;
 

  return (
    <>
      {locale === 'en' ?
        <div className="p-2">
            <div className="">
         {category.icon && <Image className='rounded-md'
                          src={category.icon}
                          height={200}
                          width={200}
                          alt={category.name}
                      />}
            </div>
        </div>
        : 
        <div className=" border flex flex-col   pt-4 items-center bg-white dark:bg-[#111] border-gray-200  rounded-xl">
            <div className="w-16 h-16 flex items-center">
            {category.icon && <Image className='w-full'
                    src={category.icon}
                    height={200}
                    width={200}
                    alt={category.nameAr!}
                />}
            </div>
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold  text-gray-900 ">
                    {category.nameAr}
                </h2>
                <p className="text-gray-700 text-md leading-6 px-2 mt-3 line-clamp-4">
                    {category.descriptionAr}
                </p>
            </div>
            {category.tools.length > 0 &&
                <div className="flex my-10 flex-wrap gap-8 justify-center w-10/12 m-auto">
                {category.tools.map((tool) => (
                <div className="flex-30 sm:flex-10 p-1">
                    <TechCard tool={tool} locale={locale} messages={messages} />
                </div>
                ))}
                </div>
            } 
        </div>
      }      
     </>
  )
}

export default TechCategoryCard