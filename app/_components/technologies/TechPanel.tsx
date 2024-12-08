'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import SelectTechCategory from './SelectTechCategory';
import { Tool } from '@prisma/client';
import TechCard from './TechCard';
import { CategoryWithTools } from '@/app/[locale]/admin/category/util/CategoryWithTools';
import TechCategoryCard from './TechCategoryCard';

interface Props {
    tools? : Tool[],
    categories : CategoryWithTools[],
    locale : string,
    messages : AbstractIntlMessages

}
function TechPanel({tools,categories,locale,messages}:Props) {
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;
 const selectData = (toolsData:Tool[])=> {
     tools = toolsData;
 }
  useEffect(() => {
  }, []);
  return (
    <>
    {categories.length > 0 && 
    <div className="p-2 grid sm:grid-cols-3 gap-6 rtl:font-arabic w-11/12 m-auto">
      {categories.map ((category) => (
            <TechCategoryCard category={category} locale={locale} messages={messages} />
      ))}
    </div>
    }
      {/* <div className="w-fit m-auto">
         <SelectTechCategory  locale='locale' messages={messages} selectData={selectData} />
      </div> */}
      {/* {tools.length > 0 &&
         <div className="flex my-10 flex-wrap gap-8 justify-center w-10/12 m-auto">
        {tools.map((tool) => (
          <div className="flex-30 sm:flex-10 p-1">
             <TechCard tool={tool} locale={locale} messages={messages} />
          </div>
        ))}
        </div>
      } */}
     </>
  )
}

export default TechPanel