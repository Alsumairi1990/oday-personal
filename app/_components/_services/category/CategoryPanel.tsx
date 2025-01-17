'use client'
import React, {  useEffect, useState } from 'react';
import { FaThList } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { AbstractIntlMessages } from 'next-intl';
import { AiFillFunnelPlot } from 'react-icons/ai';
import CategoryCol from './CategoryCol';
import CategoryCard from './CategoryCard';
import { CategoryFrontSingle } from '@/app/[locale]/admin/category/util/CategoryFrontSingle';
import { GoSortDesc } from 'react-icons/go';

interface Props {
    categories: CategoryFrontSingle[];
    locale : string,
    messages : AbstractIntlMessages,
  }


const CategoryPanel = ({categories,locale,messages}:Props) => {
  
   const [showGrid, setShowGrid] = useState(true);
   const [showGridCols, setGridCols] = useState(false); 
   const [categoriesData, setCategoriesData] = useState<CategoryFrontSingle[]>([]);     
   const [sortedCategories, setSortedCategories] = useState<CategoryFrontSingle[]>([]);
   
   const displayMode = (messages as any).Common.displayMode;  

   const listOfServices = (messages as any).Common.listOfServices;
    

   const orderCat = () => {
  
    // Create a sorted copy of the categories array
    const sortedCategories = categories.sort(
      (a, b) => b._count.services - a._count.services
    );
  
    // Update state with the sorted array (if needed)
    setCategoriesData(sortedCategories);
    setGridCols(false);
    // setShowGrid(false)
    setGridCols(true);
    // setShowGrid(true)
  
   }

   
   useEffect(() => {
      setCategoriesData(categories)
          }, []);

  return (
    <div className="relative sm:w-11.8/12 sm:pb-8 mx-auto flex flex-wrap self-center mt-4  rounded-md w-full  ">
    <div className="flex-100  bg-white sm:rounded-lg dark:bg-[#111] ">
            <div className="flex max-sm:flex-col p-2  items-center my-3 pb-3 border rounded border-gray-200 justify-between">
              <div className="p-1 max-sm:pb-0 max-sm:justify-start max-sm:w-full flex gap-x-2 ">
                <span className="p-1"><AiFillFunnelPlot /> </span>
                <span className="text-gray-600 rtl:font-arabic rtl:font-bold">{listOfServices}</span>
             </div>
             <div className=" max-sm:flex-wrap max-sm:border-t max-sm:pt-2 max-sm:w-full max-sm:justify-end border-gray-300 space-x-3 items-center mt-3 gap-x-3 flex px-2">
                  <div className=" lx-3 gap-x-4 flex items-center">
                     <button type='button' className='flex items-center ltr:border-r rtl:border-l border-gray-300 px-1.5 hover:text-orange-500 text-gray-500' onClick={()=>{orderCat()}}>
                      <span className="">order</span>
                      <GoSortDesc className=" text-2xl mx-1" />
                      </button>
                    <button type='button' onClick={()=>{setGridCols(false); setShowGrid(true)}}><FaThList className={` text-xl hover:text-orange-600  ${showGrid == true ? 'text-orange-600 shadow-lg' : 'text-gray-600'} `}/></button>
                    <button type='button' onClick={()=>{setShowGrid(false);setGridCols(true) }}><RiLayoutGridFill className={` text-[22px] hover:text-orange-600  ${showGridCols == true ? 'text-orange-600 shadow-lg' : 'text-gray-600'} `}/></button>
                  </div>
             </div>
            </div>

            <div className="relative overflow-x-auto  scr-container overflow-y-autحo">
                <div className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                <div className="grid sm:grid-cols-3 gap-6">
                     {showGrid && categoriesData && categoriesData?.length > 0 && 
                         categories.map((category) => (
                            <CategoryCol category={category} locale={locale} messages={messages}  />
                         ))
                        }
                        </div>
                    
                    {showGridCols && categoriesData && categoriesData?.length > 0 && 
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
