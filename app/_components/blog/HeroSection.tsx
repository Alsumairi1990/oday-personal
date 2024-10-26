
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@prisma/client';
interface Props {
  posts : Post[],
  locale : string,
  messages : AbstractIntlMessages,
}
const HeroSection = async ({posts,locale,messages}:Props) => {
    const marketDetails = (messages as any).Common.marketDetails;
    const latestPost = posts[0];
    const otherPosts = posts.slice(1); 

  return (


    <section className="w-11.4/12 max-w-full mx-auto mt-8 ">
    <div className="grid sm:grid-cols-2 gap-[0.3rem] sm:border sm:border-gray-300 rounded p-0.5">
        <div className="grid">
          <div className="col-span-full row-span-full">
               {latestPost && latestPost.image && <img className="w-full max-w-full" src={latestPost.image} alt="" /> } 
          </div>
          <div className="col-span-full row-span-full title-shadow self-end text-white pt-3 pb-4 pl-4" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
              <p className="mb-0.5 text-base">
                
              </p>
              {locale === 'en' ? <p className="font-bold p pt-4 text-2xl pb-5">
                  <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>                           
              </p> :
               <p className="font-bold p pt-4 font-arabic text-2xl pb-5">
               <Link href={`/blog/${latestPost.slug}`}>{latestPost.titleAr}</Link>                           
              </p>
             }
          </div>
        </div>  
        <div className="grid sm:grid-cols-2 max-sm:auto-rows-fr gap-[0.4rem]">
        {otherPosts.map((post) => (
         
      
          <div className="flex relative sm:grid sec-elm-bg max-sm:items-center max-sm:pl-1 max-sm:rounded-md max-sm:border max-sm:border-gray-300">                     
              <div className="sm:col-span-20 sm:row-span-20 max-sm:max-h-20 flex-30">
                  <img className="w-full max-w-full max-sm:h-11.5/12 rounded-md" src={post.image || "/images/w01.png"} alt="" />
              </div>
              {locale === 'en' ? <div className="sm:col-span-20 pl-2 pr-1 pt-3 sm:absolute sm:bottom-0 title-shadow sm:row-span-20 flex-70 self-end text-white pb-3 max-sm:self-start" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
                  <p className="mb-1 overflow-hidden whitespace-nowrap	">
                    <span className="text-sm bg-violet-600 inline-block px-1 border border-gray-500 py-0.5 rounded" ></span>
                  </p>
                  <p className="mb-1 text-md font-semibold sm:text-white">
                    <Link href={`/blog/${post.title}`}>{post.title}</Link> 
                  </p>
              </div>:
              <div className="sm:col-span-20 pl-2 pr-1 pt-3 sm:absolute sm:bottom-0 w-full title-shadow sm:row-span-20 flex-70 self-end text-white pb-3 max-sm:self-start" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
              <p className="mb-1 overflow-hidden whitespace-nowrap	">
                <span className="text-sm bg-violet-600 inline-block px-1 border border-gray-500 py-0.5 rounded" ></span>
              </p>
              <p className="mb-1 text-md font-arabic  font-semibold sm:text-white">
                <Link href={`/blog/${post.slug}`}>{post.titleAr}</Link> 
              </p>
             </div>
           }
          </div>
     
        ))}
        
      </div>
</div>
</section>
  )
};
export default HeroSection;