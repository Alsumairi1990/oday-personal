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

const TestimonialsClient = ({ testimonials, meta, locale }: Props) => {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(testimonials);

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
                    <p className="text-md sm:text-lg font-semibold text-gray-100">{meta.name}</p>
                  </div>
                  <h2 className="text-gray-50 sm:leading-9 dark:text-gray-50 text-xl sm:text-2xl font-semibold">
                    {meta?.titleAr}
                  </h2>
                  <p className="text-sm mt-2 text-gray-100 line-clamp-[7] leading-8">{meta?.descAr}</p>
                  <p className="text-sm w-fit border my-3 sm:mt-5 text-orange-400 border-[#EE9143] rounded-2xl sm:px-4 px-3 py-1.5 sm:py-3">
                    {meta.moreAr}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-100 sm:flex-65 ltr:pl-3 rtl:pr-3 sm:pr-2 sm:col-span-3">
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonialsList.length > 0 &&
              testimonialsList.map((testi) => (
                <div key={testi.id} className="flex flex-col rounded-md border border-gray-300 shadow-xl dark:border-gray-800">
                  <div className="  rounded-t-md bg-gray-50 dark:bg-[#161616]">
                    <div className="h-24 relative flex flex-col rounded-md justify-end items-center bg-[#005974] dark:bg-violet-600">
                      <div className="w-14 bg-white border border-gray-300 dark:border-transparent p-0.5 rounded-full absolute -top-6">
                        {testi.image && <img className="w-full rounded-full" src={testi.image} alt="" /> }
                      </div>
                      <div className="p-2 text-center">
                        <h2 className="text-base font-semibold text-gray-100 mb-0.5">{testi.title}</h2>
                        <p className="text-[13px] font-semibold  text-gray-300">{locale === 'en' ? testi.title : testi.titleAr}</p>
                      </div>
                    </div>
                   <div className='h-fit'>
                    <p className="text-sm pt-4 pb-10 px-2 leading-8 text-center line-clamp-6  dark:text-gray-200">
                        {locale === 'en' ? testi.content : testi.contentAr}
                      </p>
                      <span className="inline-block border border-orange-500 bg-orange-500 dark:bg-transparent dark:border-violet-600 p-1.5 mb-2 rounded-md">
                        see full
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
