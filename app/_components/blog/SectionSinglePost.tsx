
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
const SectionSinglePost =  ({posts,locale,messages}:Props) => {
    const marketDetails = (messages as any).Common.marketDetails;
    const news = (messages as any).Common.news;
    const ecnomics = (messages as any).Common.ecnomics;
    const more = (messages as any).Common.more;

    const singlePost = posts[0];
    const otherPosts2 = posts.slice(2); 

  return (
    <section className="w-full">
            <div className="rtl:font-arabic">
                <div className="p-1">
                  <header className="flex w-full items-center sm:border-b justify-between sm:border-b-gray-300 max-sm:border max-sm:border-gray-300 py-1 max-sm:px-2 max-sm:bg-white sm:mb-3 max-sm:rounded-t-md">
                      <p className="m-0 font-bold bg-blue-500 rounded-md py-1 px-2 font-nav text-[14.5px] text-white"> {news} </p>
                      <a className="ltr:ml-auto flex items-center cursor-pointer">
                          <span className="px-1.5 capitalize text-slate-500 font-bold hover:text-primary-btn">{more}</span>
                          <div className="p-0.5 rtl:rotate-180 bg-slate-300 rounded hover:bg-primary-btn">
                              <svg stroke="currentColor" fill="none" className="text-slate-700 hover:text-white " stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                      </a> 
                  </header>
                  <div className="sm:pt-3 sm:px-3 sm:pb-20 sm:bg-gray-100  sm:border sm:border-gray-200 max-sm:border max-sm:border-gray-300 max-sm:border-t-0 max-sm:rounded-b-md">
                      <div className="flex bg-white max-sm:flex-col px-2 pb-2 sm:pt-2 sm:rounded-md max-sm:rounded-b-md max-sm:pt-[1.4rem] ">
                        <div className="flex-50 max-sm:flex-100  max-sm:order-2">
                           <div className="mb-2">
                                            {singlePost && singlePost.categories.length > 0 &&
                                            <span className="text-md px-1 border text-white bg-slate-400  inline-flex border-slate-400 rounded font-arabic">
                                                {singlePost.categories[0].nameAr}
                                            </span>
                                            }
                                        </div>
                            <h3 className="text-lg font-semibold sm:leading-8"><Link href={`/blog/${singlePost.title}`}>{singlePost.titleAr}</Link> </h3>   
                        </div>
                        <div className="flex-50 max-sm:flex-100 max-sm:order-1">
                          <img className="w-full max-w-full rounded-md" src={singlePost.image || "/images/w01.png"} alt="" /> 
                        </div>
                      </div>
                        
                  </div>
                  <div className="sm:px-3 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[1rem] sm:mt-[-3rem]">
                  {otherPosts2.map((post, index) => (
      
                      <div className=" shadow-lg max-sm:bg-white rounded-md ">
                          <a href="" className="text-gray-600 max-sm:h-20  hover:text-primary-btn max-sm:flex">
                            <div className="flex-25 sm:flex-30 h-32">
                              <img className=" h-full max-sm:w-full rounded-t-md max-sm:p-2 max-sm:rounded-xl max-sm:max-h-20" src={post.image || "/images/w01.png"}  />
                            </div>
                             {post.categories.length > 0  && <div className="flex-70 pt-3 max-sm:hidden ltr:pl-2 rtl:pr-2 mb-1  text-gray-600"> 
                                          <span className='rtl:border-r-2 rtl:border-r-red-600 inline-flex rtl:pr-1.5 text-gray-900 font-bold'>{post.categories[0].nameAr}</span>
                              </div>}
                              <div className="max-sm:flex-75 max-sm:max-w-70 px-2 sm:pt-1.5 sm:mt-2 max-sm:pt-2 pb-2">
                                  <h3 className="sm:text-md text-[15px] font-semibold "><Link href={`/blog/${post.title}`}>{post.titleAr}</Link> </h3>
                              </div>
                          </a>  
                      </div>
                      ))}
                  </div>
                </div>
      
             
      
            </div> 
      </section> 
  )
};
export default SectionSinglePost;