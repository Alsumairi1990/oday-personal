'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import SelectTechCategory from './SelectTechCategory';
import { Tool } from '@prisma/client';
import Image from 'next/image';

interface Props {
    tool : Tool,
    locale : string,
    messages : AbstractIntlMessages

}
function TechCard1({tool,locale,messages}:Props) {
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;
 

  return (
    <>
      {locale === 'en' ?
        <div className="p-2">
            <div className="">
         {tool.icon && <Image className='rounded-md'
                          src={tool.icon}
                          height={200}
                          width={200}
                          alt={tool.name}
                      />}
            </div>
        </div>
        : 
        <div className=" border flex justify-center w-20 h-20 items-center bg-white dark:bg-[#111] border-gray-200 shadow-md rounded-full">
            <div className="w-16 h-16 flex items-center">
            {tool.icon && <Image className='rounded-full  border  w-full'
                    src={tool.icon}
                    height={200}
                    width={200}
                    alt={tool.nameAr!}
                />}
            </div>
        </div>
      }      
     </>
  )
}

export default TechCard1