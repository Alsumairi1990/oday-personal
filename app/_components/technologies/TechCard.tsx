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
function TechCard({tool,locale,messages}:Props) {
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
        <div className=" border flex justify-center w-[3.5rem] h-[3.5rem] items-center bg-white dark:bg-[#111] border-gray-200 shasdow-md rounded-md">
            <div className="w-10 h-10 flex items-center">
            {tool.icon && <Image className=''
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

export default TechCard