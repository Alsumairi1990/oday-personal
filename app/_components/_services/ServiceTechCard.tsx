'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import { ServiceTool, Tool } from '@prisma/client';
import Image from 'next/image';
import TechCard1 from '../technologies/TechCard1';

interface Props {
    tool : Tool,
    locale : string,
    messages : AbstractIntlMessages

}
function ServiceTechCard({tool,locale,messages}:Props) {
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;
 

  return (
    <>
      <div className="p-1 py-2 bg-white flex justify-center flex-col items-center rounded-lg border border-gray-300 ">
        <div className="">
            <TechCard1 
            tool={tool}
            locale={locale}
            messages={messages}
            />
        </div>
        <span className="py-2">{tool.name}</span>

         
      </div>

    

          
     </>
  )
}

export default ServiceTechCard