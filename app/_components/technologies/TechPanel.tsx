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
 const noImage = '/images/no-image.svg';

 const [categoriesList, setcategoriesList] = useState<CategoryWithTools[]>(categories!);
   const [visibleTestimonial, setVisibleTestimonial] = useState(0); 
   const more = (messages as any).Common.more; 

 const handleClick = (index: number) => {
  setVisibleTestimonial(index); 
};
  useEffect(() => {
  }, []);
  return (
    <>
     <div className="flex sm:hidden justify-between animate-modalSlide max-sm:flex-wrap " >
      {categoriesList.length > 0 && (
        <>
          {/* Show only one testimonial based on the visibleTestimonial state on mobile */}
          <div key={categoriesList[visibleTestimonial].id} className="flex animate-modalSlide flex-col w-11.5/12 mx-auto rounded-md border border-gray-300 shadow-xl dark:border-gray-800 sm:hidden">
            {/* <div className="rounded-t-md bg-gray-50 dark:bg-[#161616] animate-modalSlide">
              <div className="h-24 relative flex flex-col rounded-md justify-end items-center bg-[#005974] dark:bg-violet-600">
                <div className="w-14 bg-white border border-gray-300 dark:border-transparent p-0.5 rounded-full absolute -top-6">
                  {categoriesList[visibleTestimonial].image && (
                    <img className="w-full rounded-full" 
                    src={categoriesList[visibleTestimonial].image ?? noImage }
                     alt={categoriesList[visibleTestimonial].name ?? ""} /> 
                  )}
                  
                </div>
                <div className="p-2 text-center">
                  <h2 className="text-base font-semibold text-gray-100 mb-0.5">{categoriesList[visibleTestimonial].name}</h2>
                  <p className="text-[13px] font-semibold text-gray-300">{locale === 'en' ? categoriesList[visibleTestimonial].name : categoriesList[visibleTestimonial].nameAr}</p>
                </div>
              </div>
              <div className="h-fit">
                <p className="text-sm pt-4 pb-10 px-2 leading-8 text-center line-clamp-6 dark:text-gray-200">
                  {locale === 'en' ? categoriesList[visibleTestimonial].description : categoriesList[visibleTestimonial].descriptionAr}
                </p>
                <div className="flex justify-center">
                  <span className="inline-block text-sm border border-orange-500 bg-white dark:bg-transparent dark:border-violet-600 p-1 px-2 mb-2 rounded-md">
                     {more}
                  </span>
                </div>
                
              </div>
            </div> */}
                        <TechCategoryCard category={categoriesList[visibleTestimonial]} locale={locale} messages={messages} />

          </div>

          {/* Show buttons to switch testimonials only on mobile */}
          <div className="mt-4 flex justify-center gap-x-3  w-full">
            {categoriesList.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`p-2  h-[3px] w-8 rounded ${visibleTestimonial === index ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
              >
              </button>
            ))}
          </div>
          <div className="pt-5 flex items-center w-full flex-col ">
             <p className="relative w-full text-center before:content-[''] before:absolute before:top-[50%] before:-left-2 before:w-[104px] before:h-px before:bg-gradient-to-r before:from-transparent before:via-orange-200 before:to-orange-200 after:content-[''] after:absolute after:top-[50%] after:-right-2 after:w-[104px] after:h-px after:bg-gradient-to-l after:from-transparent after:via-orange-200 after:to-orange-200"><span className="text-orange-200 text-sm px-1 border border-orange-200 rounded-md">{more}</span></p>
          </div>
        </>
      )}


      
    </div>
    {categories.length > 0 && 
    <div className="pt-2 pb-6 grid max-sm:hidden sm:grid-cols-3 gap-6 rtl:font-arabic w-11/12 m-auto">
      {categories.map ((category) => (
            <TechCategoryCard category={category} locale={locale} messages={messages} />
      ))}
    </div>
    }
     </>
  )
}

export default TechPanel