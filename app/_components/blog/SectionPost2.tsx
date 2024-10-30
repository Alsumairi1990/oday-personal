
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { PostForFront } from '@/app/[locale]/admin/blogs/_utils/PostForfront';
interface Props {
  posts :  PostForFront[],
  locale : string,
  messages : AbstractIntlMessages,
}
const SectionPost2 =  ({posts,locale,messages}:Props) => {
    const marketDetails = (messages as any).Common.marketDetails;
    const otherPosts2 = posts.slice(1); 

  return (


    <section className="w-11.4/12 max-w-full mx-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                 
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
                                                  <Link href={`/blog/${post.title}`}>{post.titleAr}</Link> 
                                                  </h2>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                 
                                  ))}
                          </div>
      </section> 

  )
};
export default SectionPost2;