import React from 'react'
import { getLocale, getMessages } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { WorksFrontData } from '@/app/[locale]/admin/works/utils/WorksFrontData';
import { Work } from '@prisma/client';
interface Props {
    work : Work
}
async function WorkCard2({work}:Props) {
    const locale = await getLocale();
  const messages = await getMessages({ locale });
  const preview = (messages as any).HomePage.workPreview;
  return (
    
    <div className="rounded-md bg-white   dark:bg-[#181818] p-f1.5 border border-gray-200 dark:border-gray-700 relative"> 
    <div className="h-full">
      {work.image && 
       <Image 
       src={work.image}
       height={500}
       width={500}
       alt="Product Image"
       className='w-full rounded-md border border-gray-400 h-full'
       />
        
      }
    </div>
    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50 pointer-events-none"></div>
    <div className="absolute bottom-1 p-2">
            <div className="px-2 pb-2 pt-3 flex w-full justify-between">
                {locale == 'en' ?(  <div className="flex flex-col">
                    <h2 className="text-white dark:text-gray-100 font-semibold text-base">{work.title}</h2>
                    {/* <span className="inline-block text-white dark:text-gray-100 uppercase mt-1.5 text-sm">{work.service?.name}</span> */}
                </div>) :
                (
                <div className="flex flex-col font-arabic">
                    <h2 className="text-white dark:text-gray-100 font-semibold text-base">{work.titleAr}</h2>
                    {/* <span className="inline-block text-white dark:text-gray-100 uppercase mt-1.5 text-sm">{work.service?.nameAr}</span> */}
                </div>)
            }
            </div>
            <div className="px-3 flex justify-between items-center py-1.5 bg-gray-100  dark:bg-[#242424] rounded-md">
                <div className=''>
                    <span className="text-md font-semibold text-red-800 dark:text-green-500">10$</span>
                </div>
                <Link href={`/works/${work.title}`}  className="">
                    <span className="text-sm bg-orange-500 dark:bg-violet-600 rtl:font-arabic  rounded text-white inline-block px-2 py-1">{preview}</span>
                </Link>
            </div>
       </div>     
</div>
  )
}

export default WorkCard2