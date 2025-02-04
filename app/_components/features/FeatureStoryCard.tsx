
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
import { Feature, Post , PageSection} from '@prisma/client';
import Image from 'next/image';

interface Props {
    post: Post;
    locale : string,
    messages : AbstractIntlMessages,
    
  }
const FeatureStoryCard = ({ post,locale,messages } : Props) => {
  const request = (messages as any).HomePage.requestindustry;
  const details = (messages as any).HomePage.details;
  const buy = (messages as any).Common.buy;
  return (
    <div className="p-1.5 bg-white border border-gray-200 rounded-md ">
    <div  className=" relative flex flex-col p-1  rounded-md bg-gray-100 dark:bg-[#111] ">
      

      
             <div className="w-full flex justify-center">
                <div className="  p-2 sm:h-64">
                  {post.image && <Image className='w-full h-full rounded-md '
                    src={post.image}
                    height={400}
                    width={400}
                    alt="img"
                />}
                    {/*{post.image && post.image && <img className='rounded-t-md' src={post.image} alt={post.title} />}*/}
                </div>


              </div>
        {locale == 'en' ? <div className=" h-full w-full flex flex-col pt-1 items-center justify-center ">
            
            <p className="text-gray-800 text-xl text-center mb-2 font-semibold dark:text-orange-500 ">{post.title}</p>
            <p className="text-gray-800 text-sm tracking-8  leading-7 px-1.5 dark:text-gray-100 line-clamp-3 font-medium mb-4">{post.content}</p>

        </div>
        : 
        <div className="font-arabic w-full flex flex-col h-full pt-1 items-center justify-center ">
            <p className="text-gray-800 text-lg text-center font-bold dark:text-orange-500 mb-2">{post.titleAr}</p>
            <p className="text-gray-800 text-sm   leading-7 px-2 dark:text-gray-100 line-clamp-3 font-medium mb-4">{post.contentAr}</p>
        </div>
          }
       </div>
    </div>
  );
};

export default FeatureStoryCard;

