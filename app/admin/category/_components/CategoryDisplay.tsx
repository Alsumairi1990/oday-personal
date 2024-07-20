'use client'
import React, { useEffect, useState } from 'react';
import CategoryTable from '../util/CategoryTable';
import { getCategories } from '../_actions/Actions';
import { Category } from '@prisma/client';
import DeleteCategory from './DeleteCategory';
import CategoryCard from '../util/CategoryCard';
import GridView from './GridView';
import HashLoader from 'react-spinners/HashLoader';
import { FaThList } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import TableView from './TableView';
import GridColsView from './GridColsView';




const CategoryDisplay = () => {
  
   const [categories, setCategories] = useState<Category[] | null>(null);
   const [slected, setSlected] = useState<boolean>(false);
   const [svalues, setSvalues] = useState<string[]>([]);
   const [trigger, setTrigger] = useState(0); 
   const [loading, setLoading] = useState<boolean>(true);
   const [showDelete, setShowDelete] = useState(false);
   const [showGrid, setShowGrid] = useState(true);
   const [showTable, setShowTable] = useState(false);
   const [showGridCols, setGridCols] = useState(false);
   

   const openDisplay =()=>{
    alert("vrvtrv")
   }
   const openEdit = ()=>{

   }
   const openMenu = (event:any)=>{
       alert(event)
   }
   const showDeleteConfirm = ()=>{

   }
   const getSelected= (selected:string)=>{
    setSvalues(prevValues => {
        const newValues = [...prevValues, selected];
        setTrigger(trigger + 1);
        return newValues;
    });
   }
   const unSelected = (id:string) => {
    setSvalues(prevValues => {
        const newValues = prevValues.filter(item => item !== id);
        setTrigger(trigger + 1); 
        return newValues;
    });
   }
   const getAllCategories = async () => {
    const catgs = await getCategories();
    setCategories(catgs)
   }
   useEffect(() => {
    setLoading(true)
    getAllCategories();
    setLoading(false)

}, []);

if (loading) {
    return (<div className="h-72 mx-auto w-11.8/12 flex justify-center pt-8 bg-white border border-gray-300 rounded-md">
      <HashLoader />
      </div>)
  }

  return (


    <div className="relative sm:w-[97%] mx-auto flex flex-wrap self-center mt-8 max-h-[95vh] rounded-md w-full  ">


    <div className="flex-100  bg-white sm:rounded-lg shadow-md ">
            <div className="flex flex-col p-2  my-3 pb-3 border-b border-gray-300">
                <div className="px-2 w-full flex pb-3 border-b border-b-gray-300">
                    <div className="flex max-sm:flex-col items-center">
                        <h5 className="font-semibold sm:text-lg text-md text-capitalize mb-0 text-gray-800 ">Found 103 colleges</h5>
                       <button v-if="deleteSelectValues.length>0" className="py-1 hidden ml-2 px-2 bg-rose-700 text-white rounded-md text-sm capitalize" onClick={showDeleteConfirm}>Delete Selected</button>
                    </div>
                     {svalues.length>0 && <div className='sm:ml-4'>
                        <button onClick = { () => {setShowDelete(true)}}
                         type='button' className='inline-flex py-0.5 px-1 rounded-md bg-rose-700 ml-4 text-white text-[14px] capitalize'>delete 
                            </button>
                       </div>
                      }
                      {showDelete && <DeleteCategory categoryIds={svalues}  />}  
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
                    <div className="text-md max-sm:flex-100 text-gray-400 py-1 flex items-center capitalize border-r px-2 border-gray-300">
                        <span className="h-6 w-6 inline-flex mr-1">
                            <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke-slate-700" d="M18 7H17M17 7H16M17 7V6M17 7V8M12.5 5H6C5.5286 5 5.29289 5 5.14645 5.14645C5 5.29289 5 5.5286 5 6V7.96482C5 8.2268 5 8.35779 5.05916 8.46834C5.11833 8.57888 5.22732 8.65154 5.4453 8.79687L8.4688 10.8125C9.34073 11.3938 9.7767 11.6845 10.0133 12.1267C10.25 12.5688 10.25 13.0928 10.25 14.1407V19L13.75 17.25V14.1407C13.75 13.0928 13.75 12.5688 13.9867 12.1267C14.1205 11.8765 14.3182 11.6748 14.6226 11.4415M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"  stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </span>
                        <span>All Filters</span>
                    </div>
                   <div className="px-2 max-sm:flex-40 relative filter-panel rounded py-1.5 border !border-gray-300">
                            <button onClick={(event) => openMenu(event)} className="inline-flex capitalize option-btn group relative w-full  items-center   text-sm  text-gray-600 rounded-xl focus:!border-orange-500 focus:outline-none peer-focus:!text-orange-500 focus:ring-orange-500" type="button">
                                <span className="font-medium  mr-2.5" >Discipline</span>
                                <span className="ml-auto mt-0.5 inline-flex">
                                    <svg className="w-2.5 h-2.5 fill-slate-500 " viewBox="0 0 74.652 42.552" ><path d="M37.326 42.553a5.217 5.217 0 0 1-3.696-1.528L1.531 8.924a5.227 5.227 0 1 1 7.393-7.393l28.402 28.403L65.728 1.532a5.228 5.228 0 1 1 7.394 7.394l-32.101 32.1a5.208 5.208 0 0 1-3.695 1.527z"></path></svg>
                                </span>
                            </button>
                            <div  className="filter-menu hidden z-40 option-menu absolute top-12 w-80  bg-white rounded-md border !border-gray-300 shadow mt-2 dark:bg-gray-700" style={{boxShadow: 'rgb(0 0 0 / 3%) 0px 12.5px 10px, rgb(0 0 0 / 6%) 0px 100px 80px'}}>
                                  {/* <FilterPanel
                                    v-model="discipline"
                                    placeholder="Enter Year"
                                    :options="disciplines"
                                    className="w-full "
                                    :title="disciplineTitle"
                                    @update:touch="disciplineTouch"
                                    /> */}
                                    {/* <FilterPanel /> */}
                            </div>
                            {/* <span v-if="errors.year" className="text-red-500 text-sm">{{errors.year}}</span> */}
                   </div>
                   <div className="px-2 max-sm:flex-40 relative filter-panel rounded py-1.5 border !border-gray-200">
                        <button onClick={(event) => openMenu(event)} className="inline-flex capitalize option-btn group relative w-full  items-center   text-sm  text-gray-600 rounded-xl focus:!border-orange-500 focus:outline-none peer-focus:!text-orange-500 focus:ring-orange-500" type="button">
                            <span className="font-medium mr-2.5" >programType</span>
                            <span className="ml-auto mt-0.5 inline-flex">
                                 <svg className="w-2.5 h-2.5 fill-slate-500 " viewBox="0 0 74.652 42.552">
                                    <path d="M37.326 42.553a5.217 5.217 0 0 1-3.696-1.528L1.531 8.924a5.227 5.227 0 1 1 7.393-7.393l28.402 28.403L65.728 1.532a5.228 5.228 0 1 1 7.394 7.394l-32.101 32.1a5.208 5.208 0 0 1-3.695 1.527z"></path></svg>
                            </span>
                        </button>

                        <div className="filter-menu hidden z-40 option-menu absolute top-12 w-80  bg-white rounded-md border !border-gray-300 shadow mt-2 dark:bg-gray-700" style={{boxShadow: 'rgb(0 0 0 / 3%) 0px 12.5px 10px, rgb(0 0 0 / 6%) 0px 100px 80px'}}>
                            {/* <FilterPanel
                                v-model="type"
                                :options="programs"
                                className="w-full"
                                :title="typeTitle"
                                @update:touch="typeTouche"
                                /> */}
                                {/* <FilterPanel /> */}
                        </div>
                  </div>
                  <div className="px-2 relative max-sm:flex-40 filter-panel rounded py-1.5 border !border-gray-200">
                        <button onClick={(event) => openMenu(event)}  className="inline-flex capitalize option-btn group relative w-full  items-center   text-sm  text-gray-600 rounded-xl focus:!border-orange-500 focus:outline-none peer-focus:!text-orange-500 focus:ring-orange-500" type="button">
                            <span className="font-medium mr-2.5" >City</span>
                            <span className="ml-auto mt-0.5 inline-flex">
                                 <svg className="w-2.5 h-2.5 fill-slate-500 " viewBox="0 0 74.652 42.552"><path d="M37.326 42.553a5.217 5.217 0 0 1-3.696-1.528L1.531 8.924a5.227 5.227 0 1 1 7.393-7.393l28.402 28.403L65.728 1.532a5.228 5.228 0 1 1 7.394 7.394l-32.101 32.1a5.208 5.208 0 0 1-3.695 1.527z"></path></svg>
                            </span>
                        </button>
                        <div className="filter-menu hidden z-40 option-menu absolute top-12 w-80  bg-white rounded-md border !border-gray-300 shadow mt-2 dark:bg-gray-700" >
                            {/* <FilterPanel
                                v-model="programType"
                                :options="programs"
                                className="w-full"
                                :title="programTypeTitle"
                                @update:touch="programTypeTouch"
                                /> */}
                        </div>
                  </div>
                  <div className="!ml-auto lx-3 gap-x-4 flex items-center">
                    <button type='button' onClick={()=>{setShowTable(false);setGridCols(false); setShowGrid(true)}}><FaThList className='text-xl text-gray-600' /></button>
                    <button type='button' onClick={()=>{setShowGrid(false);setGridCols(false);setShowTable(true) }}><BsTable className='text-xl text-gray-600' /></button>
                    <button type='button' onClick={()=>{setShowGrid(false);setShowTable(false);setGridCols(true) }}><RiLayoutGridFill className='text-[22px] text-gray-600' /></button>
                    
                  </div>
             </div>
            </div>

            <div className="relative overflow-x-auto  h-[90vh] scr-container overflow-y-auto">
                <div className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                     {showGrid && categories && categories?.length > 0 && 
                        <GridView categories={categories} unSelected={unSelected} getSelected={getSelected}  />
                        }
                    {showTable && categories && categories?.length > 0 && 
                    <TableView categories={categories} unSelected={unSelected} getSelected={getSelected}  />
                    }
                    {showGridCols && categories && categories?.length > 0 && 
                    <GridColsView categories={categories} unSelected={unSelected} getSelected={getSelected}  />
                    }
                </div>
            </div>

        </div>


  </div>





  )
};


export default CategoryDisplay;
