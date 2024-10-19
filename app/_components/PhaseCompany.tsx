
import { PageSection, Phase, Post } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';
import ProcessPhase from './_services/ProcessPhase';
import { PhaseWithModels } from '../[locale]/admin/service/phases/utils/PhaseWithModels';

interface Props {
    meta : PageSection,
    phases : PhaseWithModels[]
}
const PhaseCompany = async ({meta,phases}:Props) => {
    const locale = await getLocale();
    const messages = await getMessages({ locale });
   
  return (
           <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
          { locale == 'en' ? (
            <div className="flex flex-col items-center sm:mb-8">
            <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{meta.title}</h2>
            <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">{meta.desc}</p>
         </div>
          ):(
             <div className="flex flex-col font-arabic items-center sm:mb-8">
               <h2 className="sm:text-[27px] text-blue-700 capitalize font-bold tracking-wide dark:text-orange-400">{meta.titleAr}</h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">{meta.descAr}</p>
            </div>
          )
          }
            
            <div className="flex max-sm:overflow-x-auto gap-8 max-sm:p-4 sm:justify-between">
            {phases.map((phase, index:number) => (
               <ProcessPhase key={phase.id} phase={phase} index={index} phaseSize={phases.length} />
            ))}
            </div>
           </div>
      </div>


  )
};

export default PhaseCompany;