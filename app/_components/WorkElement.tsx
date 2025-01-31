import React from 'react'
import { WorksFrontData } from '../[locale]/admin/works/utils/WorksFrontData'
import { getLocale, getMessages } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
interface Props {
    work : WorksFrontData
}
async function WorkElement({work}:Props) {
    const locale = await getLocale();
  const messages = await getMessages({ locale });
  const preview = (messages as any).HomePage.workPreview;
  return (
    
    <div className="rounded-md bg-white  dark:bg-[#181818] p-1.5 border border-gray-200 dark:border-gray-700 relative"> 
    <div className="">
      {work.image && 
      // <img className='w-full rounded-md border border-gray-400 h-full' src={work.image} alt={work.title} />
       <Image 
       src={work.image}
       height={500}
       width={500}
       alt="Product Image"
       className='w-full rounded-md border border-gray-400 h-full'
       />
        
      }

    </div>
   
    
    <div className="px-2 pb-2 pt-3 flex w-full justify-between">
        {locale == 'en' ?(  <div className="flex flex-col">
            <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">{work.title}</h2>
            <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">{work.services?.name}</span>
        </div>) :
        (
        <div className="flex flex-col font-arabic">
            <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">{work.titleAr}</h2>
            <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">{work.services?.nameAr}</span>
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
  )
}

export default WorkElement