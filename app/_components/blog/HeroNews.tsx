
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
const HeroNews = async ({posts,locale,messages}:Props) => {
    const marketDetails = (messages as any).Common.marketDetails;
    const latestPost = posts[0];
    const otherPosts = posts.slice(1); 

  return (


    <section className="w-11.4/12 max-w-full mx-auto ">
                <div className="grid sm:grdid-cols-3 sm:grid-cols-36/36/28 gap-2">
                    <div className="sm:col-span-2">
                     
                        <div className="grid sm:grid-cols-60/40   gap-x-2 ">
                              <div className=" relative max-sm:mb-2 max-sm:border max-sm:border-elem-border">
                                      <div className="h-full">
                                          <div className="h-full">
                                              <img className="w-full max-w-full h-full rounded" src={latestPost.image || "/images/w01.png"} alt="" />  
                                          </div>
                                          <div className="absolute bottom-0 w-full ">
                                              <div className="pb-4 py-4 w-full rtl:pr-2" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
                                                  <p className="text-lg text-white font-bold font-arabic mt-2">
                                                  <Link href={`/blog/${latestPost.title}`}>{latestPost.titleAr}</Link> 
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                              </div>
                              <div className="ltr:sm:pl-2 rtl:sm:px-2 flex flex-col gap-3">
                                  {otherPosts.map((post, index) => (
                                          <div className="flex  border border-elem-border p-1.5 items-center rounded-md">
                                              <div className="flex-30">
                                                  <div className="h-[70px]">
                                                      <img  className="w-full h-full max-w-full rounded" src={post.image || "/images/w01.png"}  alt="" />
                                                  </div>
                                              </div>
                                              <div className="flex-70 ltr:pl-3 rtl:pr-3">
                                                  <div className="thumb-content">
                                                     <h3 className="text-sm text-slate-600 font-arabic leading-6 font-bold">
                                                     <Link href={`/blog/${post.title}`}>{post.titleAr}</Link> 
                                                        </h3>
                                                  </div>
                                              </div>
                                          </div>
                                  ))}
                              </div>
                          </div>
                    </div>
                    <div className="ltr:sm:pl-5 rtl:sm:pr-4">
                          <div className="bg-[#1c1d1d] rounded-md">
                              <header className="p-2 py-3 border-b border-b-black">
                                  <h3 className="text-base text-gray-200 pl-2 font-bold mb-0">Most Popular Articles</h3>
                              </header>
                              {otherPosts.map((post, index) => (
                                <div key={post.id}> 
                             
                             
                                  <div className="flex px-2 py-[.60rem] border-t border-t-[#4a4a4a] border-b border-b-black max-sm:bg-[#282828] max-sm:my-2">
                                      <div className="flex-30 p-1">
                                           <img className="w-full max-w-full rounded" src={post.image || "/images/w01.png"}  alt="" />
                                      </div>
                                      <div className="flex-70">
                                          <div >
                                             <h3 className="text-sm text-gray-200 pl-2 font-arabic font-bold mb-0"><Link href={`/blog/${post.titleAr}`}>{latestPost.title}</Link> </h3>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  </div>
                                  ))}
                          </div>
                    </div>
                </div>      
      </section> 

  )
};
export default HeroNews;