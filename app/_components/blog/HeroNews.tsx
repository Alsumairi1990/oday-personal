
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@prisma/client';
import { PostForFront } from '@/app/[locale]/admin/blogs/_utils/PostForfront';
interface Props {
  posts :  PostForFront[],
  locale : string,
  messages : AbstractIntlMessages,
}
const HeroNews = async ({posts,locale,messages}:Props) => {
    const marketDetails = (messages as any).Common.marketDetails;
    const latestPost = posts[0];
    const otherPosts = posts.slice(1); 
    const otherPosts2 = posts.slice(3); 

  return (


    <section className="w-11.4/12 max-w-full mx-auto ">
                <div className="grid sm:grdid-cols-3 sm:grid-cols-37/37/26 gap-2">
                    <div className="sm:col-span-2">
                     
                        <div className="grid sm:grid-cols-63/37   gap-x-2 ">
                              <div className=" relative max-sm:mb-2 max-sm:border max-sm:border-elem-border">
                                      <div className="h-full">
                                          <div className="h-full">
                                              <img className="w-full max-w-full h-full rounded" src={latestPost.image || "/images/w01.png"} alt="" />  
                                          </div>
                                          <div className="absolute bottom-0 w-full ">
                                              <div className="pb-4 py-4 w-full rounded-b px-3" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
                                                  <p className="text-xl text-white font-bold leading-8 font-arabic mt-2">
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
                                                <div className="">
                                                    {post && post.categories.length > 0 &&
                                                    <span className="text-sm mb-1 inline-flex rounded px-1 bg-orange-600 text-white font-arabic">
                                                        {post.categories[0].nameAr}
                                                    </span>
                                                    }
                                                 </div>
                                                  <div className="">
                                                     <h3 className="text-bxs text-slate-900 font-arabic leading-6 font-bold">
                                                     <Link href={`/blog/${post.title}`}>{post.titleAr}</Link> 
                                                        </h3>
                                                  </div>
                                              </div>
                                          </div>
                                  ))}
                              </div>
                          </div>
                    </div>
                    <div className="">
                          <div className="rounded-md h-full flex gap-y-4 flex-col">
                              {/* <header className="p-2 py-3 border-b border-b-black">
                                  <h3 className="text-base text-gray-200 pl-2 font-bold mb-0">Most Popular Articles</h3>
                              </header> */}
                              {otherPosts2.map((post, index) => (
                                  <div className="flex flex-wrap bg-black rounded relative flex-grow">
                                      <div className="flex-100 ">
                                           <img className="w-full opacity-70 max-w-full h-full rounded" src={post.image || "/images/w01.png"}  alt="" />
                                      </div>
                                      <div className="flex-100 absolute bottom-0 w-full">
                                        <div className="px-3">
                                            {post && post.categories.length > 0 &&
                                            <span className="text-md px-1 border text-white bg-slate-400  inline-flex border-slate-400 rounded font-arabic">
                                                {post.categories[0].nameAr}
                                            </span>
                                            }
                                        </div>
                                        <div className=" ">
                                              <div className="pb-2 w-full rounded-b px-3" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
                                                  <h2 className="text-base text-white font-bold leading-7 font-arabic mt-2">
                                                  <Link href={`/blog/${latestPost.title}`}>{latestPost.titleAr}</Link> 
                                                  </h2>
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