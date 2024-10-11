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
import { AiFillFunnelPlot } from 'react-icons/ai';
import CategoryCol from './CategoryCol';
import CategoryCard from './CategoryCard';
import { CategoryFrontSingle } from '@/app/[locale]/admin/category/util/CategoryFrontSingle';

interface Props {
    categories: CategoryFrontSingle[];
    locale : string,
    messages : AbstractIntlMessages,
  }


const CategoryPanel = ({categories,locale,messages}:Props) => {
  
   const [showGrid, setShowGrid] = useState(true);
   const [showGridCols, setGridCols] = useState(false);    
   const displayMode = (messages as any).Common.displayMode;  
   const listOfServices = (messages as any).Common.listOfServices;


  return (
    <div className="relative sm:w-11.8/12 sm:pb-8 mx-auto flex flex-wrap self-center mt-4  rounded-md w-full  ">
    <div className="flex-100  bg-white sm:rounded-lg dark:bg-[#111] ">
            <div className="flex  p-2  items-center my-3 pb-3 border rounded border-gray-200 justify-between">
            <div className="p-1 flex gap-x-2">
                <span className="p-1"><AiFillFunnelPlot /> </span>
                <span className="text-gray-600 rtl:font-arabic rtl:font-bold">{listOfServices}</span>
             </div>
             <div className=" max-sm:flex-wrap space-x-3 items-center mt-3 gap-x-3 flex px-2">
                    <div className="p-1">
                        <span className="text-gray-500 font-arabic text-sm  rtl:border-l rtl:border-gray-300 rtl:pl-2">{displayMode}</span>
                    </div>
                  <div className="!ml-auto lx-3 gap-x-4 flex items-center">
                    <button type='button' onClick={()=>{setGridCols(false); setShowGrid(true)}}><FaThList className={` text-xl hover:text-orange-600  ${showGrid == true ? 'text-orange-600 shadow-lg' : 'text-gray-600'} `}/></button>
                    <button type='button' onClick={()=>{setShowGrid(false);setGridCols(true) }}><RiLayoutGridFill className={` text-[22px] hover:text-orange-600  ${showGridCols == true ? 'text-orange-600 shadow-lg' : 'text-gray-600'} `}/></button>
                  </div>
             </div>
            </div>

            <div className="relative overflow-x-auto  scr-container overflow-y-autحo">
                <div className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                <div className="grid grid-cols-4 gap-6">
                     {showGrid && categories && categories?.length > 0 && 
                         categories.map((category) => (
                            <CategoryCol category={category} locale={locale} messages={messages}  />
                         ))
                        }
                        </div>
                    
                    {showGridCols && categories && categories?.length > 0 && 
                    <div className="space-y-5">
                     {categories.map((category) => (
                        <CategoryCard category={category} locale={locale} messages={messages}  />
                     ))}
                     </div>
                    }
                    
                </div>
            </div>

        </div>
  </div>
  )
};


export default CategoryPanel;
