'use client';

import React, { useState } from 'react';
import { PageSection, Testimonial } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';

interface Props {
  testimonials: Testimonial[];
  meta: PageSection;
  locale: string;
  messages : AbstractIntlMessages,
}

const TestimonialsClient = ({ testimonials, meta, locale ,messages}: Props) => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(testimonials);
  const [visibleTestimonial, setVisibleTestimonial] = useState(0); 
  const noImage = '/images/no-image.svg';
  const more = (messages as any).Common.more; 
  const testimonial = (messages as any).Common.testimonials; 

  const handleClick = (index: number) => {
    setVisibleTestimonial(index); 
  };

  return (
    <div className="w-full bg-[#202529] dark:bg-[#111] border-y border-y-gray-300 dark:border-0">
      <div className="w-11.5/12 relative bg-[#202529] sm:dark:bg-[#161616] dark:bg-[#111] mx-auto py-8 flex flex-wrap">
        {/* Left Section */}
        <div className="p-2 flex-100 sm:flex-35 flex flex-col justify-center dark:bg-[#111] dark:border dark:border-gray-700 rounded-md">
          <div className="w-full py-4 mx-auto my-1 bg-[#202529] dark:bg-[#111]">
            <div className="w-11.4/12 sm:px-2 mx-auto text-center">
              {locale === 'en' ? (
                <div className="flex flex-col items-center">
                  <h2 className="text-gray-800 dark:text-gray-50 text-2xl font-semibold">{meta?.title}</h2>
                  <p className="text-base mt-2 text-gray-700">{meta?.desc}</p>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="flex items-center mb-3">
                    <span className="h-[3px] w-20 ml-2 bg-[#EE9143] inline-block"></span>
                    <p className="text-md sm:text-lg font-semibold text-gray-100">{testimonial}</p>
                    <span className="h-[3px] sm:hidden w-20 mr-2 bg-[#EE9143] inline-block"></span>
                  </div>
                  <h2 className="text-gray-50 sm:leading-9 leading-8 dark:text-gray-50 text-lg sm:text-2xl font-semibold">
                    {meta?.titleAr}
                  </h2>
                  <p className="text-sm mt-2 max-sm:hidden text-gray-100 line-clamp-1 sm:line-clamp-[7] leading-8 ">{meta?.descAr}</p>
                  <p className="text-sm max-sm:hidden w-fit border my-3 sm:mt-5 text-orange-400 border-[#EE9143] rounded-2xl sm:px-4 px-3 py-1.5 sm:py-3">
                    {meta.moreAr}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-100 sm:flex-65 ltr:pl-3 rtl:pr-3 sm:pr-2 sm:col-span-3">
        <div className="flex sm:hidden justify-between animate-modalSlide max-sm:flex-wrap " >
      {testimonialsList.length > 0 && (
        <>
          {/* Show only one testimonial based on the visibleTestimonial state on mobile */}
          <div key={testimonialsList[visibleTestimonial].id} className="flex animate-modalSlide flex-col w-11.5/12 mx-auto rounded-md border border-gray-300 shadow-xl dark:border-gray-800 sm:hidden">
            <div className="rounded-t-md bg-gray-50 dark:bg-[#161616] animate-modalSlide">
              <div className="h-24 relative flex flex-col rounded-md justify-end items-center bg-[#005974] dark:bg-violet-600">
                <div className="w-14 bg-white border border-gray-300 dark:border-transparent p-0.5 rounded-full absolute -top-6">
                  {testimonialsList[visibleTestimonial].image && (
                    <img className="w-full rounded-full" 
                    src={testimonialsList[visibleTestimonial].image ?? noImage }
                     alt={testimonialsList[visibleTestimonial].title ?? ""} /> 
                  )}
                  
                </div>
                <div className="p-2 text-center">
                  <h2 className="text-base font-semibold text-gray-100 mb-0.5">{testimonialsList[visibleTestimonial].title}</h2>
                  <p className="text-[13px] font-semibold text-gray-300">{locale === 'en' ? testimonialsList[visibleTestimonial].title : testimonialsList[visibleTestimonial].titleAr}</p>
                </div>
              </div>
              <div className="h-fit">
                <p className="text-sm pt-4 pb-10 px-2 leading-8 text-center line-clamp-6 dark:text-gray-200">
                  {locale === 'en' ? testimonialsList[visibleTestimonial].content : testimonialsList[visibleTestimonial].contentAr}
                </p>
                <div className="flex justify-center">
                  <span className="inline-block text-sm border border-orange-500 bg-white dark:bg-transparent dark:border-violet-600 p-1 px-2 mb-2 rounded-md">
                     {more}
                  </span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Show buttons to switch testimonials only on mobile */}
          <div className="mt-4 flex justify-center gap-x-3  w-full">
            {testimonialsList.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`p-2  h-[3px] w-8 rounded ${visibleTestimonial === index ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
              >
                {/* {index + 1} */}
              </button>
            ))}
          </div>
          <div className="pt-5 flex items-center w-full flex-col ">
             <p className="relative w-full text-center before:content-[''] before:absolute before:top-[50%] before:-left-2 before:w-[104px] before:h-px before:bg-gradient-to-r before:from-transparent before:via-orange-200 before:to-orange-200 after:content-[''] after:absolute after:top-[50%] after:-right-2 after:w-[104px] after:h-px after:bg-gradient-to-l after:from-transparent after:via-orange-200 after:to-orange-200"><span className="text-orange-200 text-sm px-1 border border-orange-200 rounded-md">{meta.moreAr}</span></p>
          </div>
        </>
      )}
    </div>
          <div className="grid grid-cols-3 gap-x-4 max-sm:hidden pt-6 justify-between">
            {testimonialsList.length > 0 &&
              testimonialsList.map((testi) => (
                <div key={testi.id} className="flex flex-col rounded-md border border-gray-300 shadow-xl dark:border-gray-800">
                  <div className="  rounded-t-md bg-gray-50 dark:bg-[#161616]">
                    <div className="h-24 relative flex flex-col rounded-md rounded-b-none justify-end items-center bg-[#005974] dark:bg-violet-600">
                      <div className="w-14 bg-white border border-gray-300 dark:border-transparent p-0.5 rounded-full absolute -top-6">
                        {testi.image && <img className="w-full rounded-full" src={testi.image} alt="" /> }
                      </div>
                      <div className="p-2 text-center">
                        <h2 className="text-base font-semibold text-gray-100 mb-0.5">{testi.title}</h2>
                        <p className="text-[13px] font-semibold line-clamp-1 text-gray-300">{locale === 'en' ? testi.title : testi.titleAr}</p>
                      </div>
                    </div>
                   <div className='h-fit text-center'>
                    <p className="text-sm pt-4 pb-10 px-2 leading-8 text-center line-clamp-6  dark:text-gray-200">
                        {locale === 'en' ? testi.content : testi.contentAr}
                      </p>
                      <span className="inline-block border border-orange-500 bg-white px-3 dark:bg-transparent dark:border-violet-600 p-1.5 mb-2 rounded-md">
                        {more}
                      </span>
                   </div>
                   
                  </div>
                 
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsClient;
