
import { PageSection, Testimonial } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import React from 'react';
interface Props {
    testimonials : Testimonial[],
    meta : PageSection
}
const Testimonials = async ({testimonials, meta}:Props) => {
    const locale = await getLocale();
  const messages = await getMessages({ locale });
  return (
    <div className=" w-full bg-[#202529] dark:bg-[#111]  border-y border-y-gray-300 dark:border-0">

      <div className="w-11.5/12 relative bg-[#202529] sm:dark:bg-[#161616] dark:bg-[#111] dark:pr- max-sm:flex-wrap sm:dark:border sm:dark:border-gray-800 mx-auto py-8 flex ">
            <div className="p-2 flex-100 sm:flex-35 flex flex-col justify-center max-sm:bg-white  dark:bg-[#111] dark:border darke:border-gray-700  rounded-md max-sm:dark:bg-[#111] max-sm:border max-sm:border-gray-300 max-sm:dark:border-gray-800  max-sm:rounded">
                {/* <span className="-top-8 absolute bg-violet-600 left-2 p-5 rounded-full">
                <svg fill="#fff" width="28px" height="28px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    </defs><title>quotes</title>
                    <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                    <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1 fill-none" width="32" height="32"/>
                    </svg>
                </span> */}
                
                <div className="w-full py-4 mx-auto my-1 bg-[#202529]  dark:bg-[#111] ">
                    <div className="w-11.4/12 sm:flex sm:flex-wrap sm:px-2  mx-auto ">
                    <div className="p-1  w-full mb-3 flex mt-4 justify-center">
                    {locale === 'en' ? <div className='flex flex-col items-center'>
                            <h2 className="text-gray-800  dark:text-gray-50 text-2xl font-semibold ">
                            {meta?.title}
                            </h2>
                            <p className="text-base mt-2 text-gray-700 text-center">
                            {meta?.desc}
                            </p>
                    </div>
                    :
                    <div className='flex flex-col '>
                            <div className="flex items-center mb-3 ">
                                <span className="h-[3px] w-20 ml-2 bg-[#EE9143] inline-block"></span>
                                <p className="text-md sm:text-lg font-semibold text-gray-100 ">{meta.name} </p>
                            </div>
                            <h2 className="text-gray-50 sm:leading-9  dark:text-gray-50 text-xl sm:text-2xl font-semibold ">
                            {meta?.titleAr}
                            </h2>
                            <p className="text-sm mt-2 text-gray-100 line-clamp-6 leading-7 ">
                            {meta?.descAr}
                            </p>
                            <p className="text-sm  w-fit border my-3 sm:mt-5 text-orange-400 border-[#EE9143] rounded-2xl sm:rounded-3xl sm:px-4 px-3 py-1.5 sm:py-3 text-center">{meta.moreAr}</p>
                    </div>
                        }
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="flex-100 sm:flex-65 ltr:pl-3 rtl:pr-3 max-sm:mt-4 sm:pr-2 sm:col-span-3 ">
              <div className="grid sm:grid-cols-3 gap-6">
                {testimonials && testimonials.length > 0 &&
                   testimonials.map((testi) => (

                  <div className="flex flex-col rounded-md border border-gray-300 shadow-xl dark:shadow-0 dark:border-gray-800">
                        <div className="py-4 px-2 rounded-t-md bg-gray-50 dark:bg-[#161616]">
                            <div className=""></div>
                            <div className="mb-6 relative">
                            <span className="inline-block border border-orange-500 bg-orange-500 dark:bg-transparent dark:border-violet-600 bg-violet-6080 left-2 p-1.5 mb-2 rounded-full">
                                <svg fill="#fff" width="22px" height="22px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                    </defs><title>quotes</title>
                                    <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                                    <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
                                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1 fill-none" width="32" height="32"/>
                                    </svg>
                                </span>
                                {locale =='en' ?  <p className="text-sm line-clamp-[7] leading-7 dark:text-gray-200">{testi.content}</p>
                                : <p className="text-sm leading-7 font-arabic line-clamp-[7] dark:text-gray-200">{testi.contentAr}</p>
                                 }
                            </div>
                        </div>
                        <div className="h-24 relative flex flex-col rounded-md justify-end items-center bg-[#005974] dark:bg-violet-600">
                            <div className="w-14 bg-white border border-gray-300 dark:border-transparent p-0.5 rounded-full absolute -top-6">
                                <img className='w-full rounded-full max-w-full' src={`${testi.image}`} alt="" />
                            </div>
                            {locale == 'en' ? (<div className="p-2 text-center" >
                                <h2 className="text-base  leading-4 font-semibold text-gray-100 mb-0.5">Ahmed Fuad </h2> 
                                <p className="text-[13px] font-semibold text-gray-300 my-0">{testi.title}</p>
                            </div>)
                            :
                                (<div className="p-2 text-center" >
                                    <h2 className="text-base  leading-4 font-semibold text-gray-100 mb-0.5">Ahmed Fuad </h2> 
                                    <p className="text-[13px] font-semibold text-gray-300 font-arabic my-0">{testi.titleAr}</p>
                                </div>
                            )
                            }
                        </div>
                    </div>

                   ))

                }

              </div>
              {/* <div className="flex mt-4">
                <div className="p2 flex ">
                <span className="bg-gray-200 flex items-center px-2 py-1 mr-1  rounded">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <span className="bg-gray-200 flex items-center px-2 py-1 rounded">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    
                </div>
              </div> */}
            </div>
        </div>
    </div>
  );
};

export default Testimonials;