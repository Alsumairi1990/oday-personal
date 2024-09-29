'use client'
import React, { useEffect, useState } from 'react';
import { Category, Service } from '@prisma/client';
import HashLoader from 'react-spinners/HashLoader';
import { FaThList } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import CardCol from './CardCol';
import ServiceCard from './ServiceCard';
import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';

interface Props {
    services: Service[];
    locale : string,
    messages : AbstractIntlMessages,
    category : CategoryForFront
  }


const CategoryDisplay = ({services,locale,messages,category}:Props) => {
  
   const [showGrid, setShowGrid] = useState(true);
   const [showGridCols, setGridCols] = useState(false);    


  return (
    <div className="relative sm:w-11.8/12 sm:pb-8 mx-auto flex flex-wrap self-center mt-4  rounded-md w-full  ">
    <div className="flex-100  bg-white sm:rounded-lg  ">
            <div className="flex flex-col p-2  my-3 pb-3 border-b border-gray-300">
                <div className="px-2 w-full flex pb-3 border-b border-b-gray-300">
                  
                   
                     {/* <span>  -{svalues.length}</span> */}
                      <div className="ml-auto">
                        <div className="flex items-center max-sm:flex-wrap space-x-2 ">
                            <span className="max-sm:flex-100">
                                <span className=" sortby-text px-1 text-dark text-base">
                                    <strong className="text-md">Sort By :</strong>
                                </span>
                            </span>
                            <span className="flex max-sm:flex-40 items-center space-x-1">
                                  <label className="relative flex items-center p-1 rounded-full cursor-pointer" htmlFor="sort-rating_desc">
                                    <input name="type" type="radio"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-gray-400 text-orange-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-orange-500 checked:before:bg-orange-500 hover:before:opacity-10"
                                        id="sort-popularity_desc"
                                        checked />
                                    <span
                                        className="absolute text-orange-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <label htmlFor="sort-popularity_desc" className="text-sm font-medium text-gray">Popularity</label>
                            </span>
                            <span className="flex max-sm:flex-40 items-center space-x-1">
                                   <label className="relative flex items-center p-1 rounded-full cursor-pointer" htmlFor="sort-rating_desc">
                                    <input name="type" type="radio"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-gray-400 text-orange-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-orange-500 checked:before:bg-orange-500 hover:before:opacity-10"
                                        id="sort-rating_desc" />
                                    <span
                                        className="absolute text-orange-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                  <label htmlFor="sort-rating_desc" className="text-sm font-medium text-gray">Rating</label>
                            </span>
                            <span className="flex max-sm:flex-40 items-center space-x-1">
                                   <label className="relative flex items-center p-1 rounded-full cursor-pointer" htmlFor="sort-rating_desc">
                                    <input name="type" type="radio"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-gray-400 text-orange-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-orange-500 checked:before:bg-orange-500 hover:before:opacity-10"
                                        id="sort-fees_desc" />
                                    <span
                                        className="absolute text-orange-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                  <label htmlFor="sort-fees_desc" className=" text-sm font-medium text-gray">Highest Fees</label>
                            </span>
                            <span className="flex max-sm:flex-40 items-center space-x-1">
                                   <label className="relative flex items-center p-1 rounded-full cursor-pointer" htmlFor="sort-rating_desc">
                                    <input name="type" type="radio"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-gray-400 text-orange-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-orange-500 checked:before:bg-orange-500 hover:before:opacity-10"
                                       id="sort-fees_asc" />
                                    <span
                                        className="absolute text-orange-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                  <label htmlFor="sort-fees_asc" className=" text-sm font-medium text-gray">Lowest Fees</label>
                            </span>

                            </div>
                    </div>
                </div>
                <div className="flex-100 max-sm:flex-wrap space-x-3 items-center mt-3 flex px-2">
                   
                   
                  
                  <div className="!ml-auto lx-3 gap-x-4 flex items-center">
                    <button type='button' onClick={()=>{setGridCols(false); setShowGrid(true)}}><FaThList className='text-xl text-gray-600' /></button>
                    <button type='button' onClick={()=>{setShowGrid(false);setGridCols(false); }}><BsTable className='text-xl text-gray-600' /></button>
                    <button type='button' onClick={()=>{setShowGrid(false);setGridCols(true) }}><RiLayoutGridFill className='text-[22px] text-gray-600' /></button>
                    
                  </div>
             </div>
            </div>

            <div className="relative overflow-x-auto  scr-container overflow-y-autحo">
                <div className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                <div className="grid grid-cols-4">
                     {showGrid && services && services?.length > 0 && 
                         services.map((service) => (
                            <CardCol service={service}  />
                         ))
                        }
                        </div>
                    
                    {showGridCols && services && services?.length > 0 && 
                    <div className="space-y-5">
                     {services.map((service) => (
                        <ServiceCard service={service} locale={locale} messages={messages} category={category} />
                     ))}
                     </div>
                    }
                    
                </div>
            </div>

        </div>


  </div>





  )
};


export default CategoryDisplay;
