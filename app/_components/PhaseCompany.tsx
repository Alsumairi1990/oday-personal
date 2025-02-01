
'use client'
import { PageSection, Phase, Post } from '@prisma/client';
import Link from 'next/link';
import React, { useState } from 'react';
import ProcessPhase from './_services/ProcessPhase';
import { PhaseWithModels } from '../[locale]/admin/service/phases/utils/PhaseWithModels';
import { AbstractIntlMessages } from 'next-intl';

interface Props {
    meta : PageSection,
    phases : PhaseWithModels[],
    locale : string,
    messages : AbstractIntlMessages
}
const PhaseCompany =  ({meta,phases,locale,messages}:Props) => {
   
  const [phaseData, setphaseData] = useState<PhaseWithModels[]>(phases);
    
    
      // const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(testimonials);
        const [visibleTestimonial, setVisibleTestimonial] = useState(0); 
        const handleClick = (index: number) => {
          setVisibleTestimonial(index); 
        };
   
  return (
           <div className="w-full my-16  ">
          <div className="sm:w-11/12 w-11.5/12 mx-auto max-sm:bg-cardOnyx max-sm:rounded-md max-sm:pt-6">
          { locale == 'en' ? (
            <div className="flex flex-col items-center sm:mb-8">
            <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{meta.title}</h2>
            <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">{meta.desc}</p>
         </div>
          ):(
             <div className="flex flex-col font-arabic items-center sm:mb-8 mb-5">
                <div className="pt-5 flex items-center w-full flex-col ">
                  <p className="relative w-full text-center before:content-[''] before:absolute before:top-[50%] before:-left-2 before:w-[104px] before:h-px before:bg-gradient-to-r before:from-transparent before:via-orange-200 before:to-orange-200 after:content-[''] after:absolute after:top-[50%] after:-right-2 after:w-[104px] after:h-px after:bg-gradient-to-l after:from-transparent after:via-orange-200 after:to-orange-200"><span className="text-orange-200 font-bold text-xl px-1 border border-orange-200 rounded-md">{meta.titleAr}</span></p>
                </div>
               {/* <h2 className="sm:text-[27px] text-orange-500 sm:text-blue-700 capitalize font-bold tracking-wide dark:text-orange-400">{meta.titleAr}</h2> */}
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-200 sm:text-gray-700 dark:text-gray-200">{meta.descAr}</p>
            </div>
          )
          }
            
            <div className="sm:flex max-sm:overflow-x-auto hidden gap-8 max-sm:p-4 sm:justify-between">
                {phases.map((phase, index:number) => (
                  <ProcessPhase key={phase.id} phase={phase} index={index} phaseSize={phases.length} />
                ))}
            </div>

            <div className="flex sm:hidden bg-cardOnyx  pt-2 px-2 pb-5 rounded-md justify-between max-sm:flex-wrap">
              {phaseData && phaseData.length > 0 && (
                <>
                  <ProcessPhase phase={phaseData[visibleTestimonial]} phaseSize={phases.length}  locale={locale} messages={messages} />
                  <div className="mt-4 flex  justify-center gap-x-3  w-full ">
                    {phaseData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`p-2  h-[3px] w-8 rounded ${visibleTestimonial === index ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
                      >
                        {/* {index + 1} */}
                      </button>
                    ))}
                  </div>
                  <div className="p-2">
                      <span className="text-sm text-orange-200 border border-orange-300"></span>
                    </div>
                </>
              )}
            </div>
           </div>
      </div>


  )
};

export default PhaseCompany;