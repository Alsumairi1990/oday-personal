'use client'
import React, { useEffect, useState } from 'react';
import {  Service } from '@prisma/client';
import { FaThList } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import CardCol from './CardCol';
import ServiceCard from './ServiceCard';
import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import { AiFillFunnelPlot } from 'react-icons/ai';
import MenuPanel from '@/app/[locale]/admin/common/utils/MenuPanel';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { slugify } from '@/utils/TextUtils';


interface Props {
    services: Service[];
    categories : {name:string,nameAr:string | null}[],
    locale : string,
    messages : AbstractIntlMessages,
    category : CategoryForFront
  }


const CategoryDisplay = ({services,categories,locale,messages,category}:Props) => {

   const [servicesData, setServicesData] = useState<Service[]>([]); 
   const [categoryNames, setCategoryNames] = useState<string[]>([]); 
   const [categoryNamesAr, setCategoryNamesAr] = useState<string[]>([]); 
   const [selectedCategory, setSelectedCategory] = useState<string>(''); 
   const [loading, setLoading] = useState<boolean>(false);
   const [showGrid, setShowGrid] = useState(true);
   const [categoryMenu, setCategoryMenu] = useState(false);
   const [showGridCols, setGridCols] = useState(false);    
   const displayMode = (messages as any).Common.displayMode;  
   const listOfServices = (messages as any).Common.listOfServices;
   const setServiceData = ()=> {
    setServicesData(services);
   }
   const getServiceCategories = ()=> {

    const categoryNames = categories.map(category => category.name);
    // const categoryNamesAr = categories.map(category => category.nameAr);
    const categoryNamesAr = categories.map(category => category.nameAr).filter((name): name is string => name !== null);
    setCategoryNames(categoryNames);
    {categoryNamesAr.length>0 && setCategoryNamesAr(categoryNamesAr)};
  }
  const getNameByNameAr = (nameAr: string) => {
    const category = categories.find(cat => cat.nameAr === nameAr);
    return category ? category.name : null; 
  };
    useEffect(() => {
      setServiceData();
      getServiceCategories();
     if(locale === 'en')setSelectedCategory(category.name)
      else { setSelectedCategory(category.nameAr!)}
       }, []);

    const fetchCategoryData = async (slug:string) => {
      setLoading(true);
      try {
        const response = await fetch(`/api/front/categories/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch category data');
        }
        const data = await response.json(); 
        const categoryD:CategoryForFront = data; 
        const services: Service[] = categoryD.services.map(sc => sc.service);
        setServicesData(services);
        setCategoryMenu(false)
        setLoading(false);
      } catch (err) {
      }
    };
   
  const selectElem = (value:string)=> {
    
    setSelectedCategory(value);
    if(locale === 'ar'){
      const name = getNameByNameAr(value);
      fetchCategoryData(slugify(name));
    }else {
      fetchCategoryData(slugify(value));
    }
    

  }
  const unSelectElem = (value:string)=> {
    setSelectedCategory(category.nameAr!)

  }


  return (
    <div className="relative sm:w-11.8/12 sm:pb-8 mx-auto flex flex-wrap self-center mt-4  rounded-md w-full  ">
      {loading && <div className=' w-full h-72 z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    <div className="flex-100  bg-white sm:rounded-lg dark:bg-[#111] ">
            <div className="flex max-sm:flex-col  p-2  items-center my-3 pb-3 border rounded border-gray-200 justify-between">
            <div className="p-1 flex max-sm:w-full max-sm:pb-0 gap-x-2">
                <span className="p-1"><AiFillFunnelPlot /> </span>
                <span className="text-gray-600 rtl:font-arabic rtl:font-bold">{listOfServices}</span>
             </div>
             <div className=" max-sm:flex-wrap max-sm:w-full max-sm:border-t max-sm:pt-2 border-gray-300 relative space-x-3 items-center mt-3 gap-x-3 flex px-2">
                   
                  <button className='text-sm min-w-14 flex items-center bg-gray-50 text-gray-500 border border-gray-200 rounded-md px-2 py-1' type='button' onClick={() => setCategoryMenu(prevState => !prevState)}>{selectedCategory}
                    <MdOutlineKeyboardArrowDown className="m-1 text-gray-500 text-base"   />
                    </button>
                    {categoryMenu && locale ==='en' && <div className="p-1 absolute top-9 right-0 w-full">
                       <MenuPanel menuElements={categoryNames} setSelect={selectElem} unSelect={unSelectElem} />
                    </div>}
                    {categoryMenu && locale ==='ar' && <div className="p-1 absolute top-9 right-0 w-full">
                       <MenuPanel menuElements={categoryNamesAr} setSelect={selectElem} unSelect={unSelectElem} />
                    </div>}
                    {/* <div className="p-1">
                        <span className="text-gray-500 font-arabic text-sm  rtl:border-l rtl:border-gray-300 rtl:pl-2">{displayMode}</span>
                    </div> */}
                  <div className="!ml-auto lx-3 gap-x-4 flex items-center ltr:border-l px-2 rtl:border-r border-gray-300">

                    <button type='button' onClick={()=>{setGridCols(false); setShowGrid(true)}}><FaThList className={` text-xl hover:text-orange-600  ${showGrid == true ? 'text-orange-600 shadow-lg' : 'text-gray-600'} `}/></button>
                    <button type='button' onClick={()=>{setShowGrid(false);setGridCols(true) }}><RiLayoutGridFill className={` text-[22px] hover:text-orange-600  ${showGridCols == true ? 'text-orange-600 shadow-lg' : 'text-gray-600'} `}/></button>
                  </div>
             </div>
            </div>

            <div className="relative overflow-x-auto  scr-container overflow-y-autحo">
                <div className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                <div className="grid sm:grid-cols-4 gap-6">
                     {showGrid && servicesData && servicesData?.length > 0 && 
                         servicesData.map((service) => (
                            <CardCol service={service} locale={locale} messages={messages} category={category} />
                         ))
                        }
                        </div>
                    
                    {showGridCols && servicesData && servicesData?.length > 0 && 
                    <div className="space-y-5">
                     {servicesData.map((service) => (
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
