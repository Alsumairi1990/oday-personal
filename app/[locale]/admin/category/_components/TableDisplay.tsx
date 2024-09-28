'use client'
import React, { useEffect, useState } from 'react';
import CategoryTable from '../util/CategoryTable';
import { getCategories } from '../_actions/Actions';
import { Category } from '@prisma/client';
import DeleteCategory from './DeleteCategory';
import CategoryCard from '../util/CategoryCard';


const TableDisplay = () => {
  
   const [categories, setCategories] = useState<Category[] | null>(null);
   const [slected, setSlected] = useState<boolean>(false);
   const [svalues, setSvalues] = useState<string[]>([]);
   const [trigger, setTrigger] = useState(0); 
   const [showDelete, setShowDelete] = useState(false);

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
   const closeModel = (val:boolean)=>{

   }
   const getAllCategories = async () => {
    const catgs = await getCategories();
    setCategories(catgs)
   }
   useEffect(() => {
    getAllCategories();

}, []);

useEffect(() => {
    // alert('size after changed:'+ svalues.length);
}, [trigger]); 
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
                      {showDelete && <DeleteCategory categoryIds={svalues} closeModel={closeModel}  />}  
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
             </div>
            </div>

            <div className="relative overflow-x-auto  h-[90vh] scr-container overflow-y-auto">
                <table className="w-full text-sm text-left border !border-gray-100 rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  uppercase bg-gray-50 ">
                        <tr className="w-full flex">
                              <th scope="col" className="text-center flex justify-center  flex-5 py-3">
                                      <div className="inline-flex items-center">
                                    <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                                        <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                        id="checkbox"  />
                                        <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                        </svg>
                                        </span>
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="flex justify-center flex-10 py-3">
                                 image
                            </th>
                            <th scope="col" className="flex justify-center  flex-20 py-3">
                                name
                            </th>
                            <th scope="col" className="flex justify-center  flex-20 py-3">
                                Slug
                            </th>
                            <th scope="col" className="flex justify-center  flex-30 py-3">
                                Description
                            </th>
                            {/* <th scope="col" className="text-center flex-20 py-3">
                                Price
                            </th> */}
                            <th scope="col" className="flex justify-center  flex-10 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                    {/* <UniversitiesTable
                        :universities="universities"
                        @update-select="updateDeletSelect"
                        /> */}

                     {categories && categories?.length > 0 && 
                        categories.map((category) => (
                            <div className=" relative border flex my-4 w-[98%] mx-auto items-center  border-gray-200 rounded-md " >
                               <div className="inline-flex absolute bg-white top-3 left-3  justify-center   border-r border-t-gray-300  rounded-md">
                                    <label className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                                        <input type="checkbox"
                                            className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                            id="checkbox"  
                                            onChange={(e) => {
                                                const isChecked = e.target.checked;
                                                if (isChecked) {
                                               
                                                // getSelected(option.id);
                                                } else {
                                                   
                                                // unSelected(option?.id);
                                                }
                                            }}
                                            />
                                        <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                        </svg>
                                        </span>
                                    </label>
                                </div> 
                               <div className="flex-80">
                               <CategoryCard  key={category.id} category={category} />
                               </div>
                                

                                <div className="flex gap-x-2 flex-20  justify-center  ">
                                    <span className="inline-flex items-center justify-center bg-sky-100 border !border-sky-200 hover:!bg-sky-200 rounded-md py-1 flex-23">
                                        <svg className="w-4 h-4"  viewBox="0 0 24 24" fill="none">
                                        <path className="fill-sky-500" fill-rule="evenodd" clip-rule="evenodd" d="M19.2071 2.79312C17.9882 1.57417 16.0119 1.57417 14.7929 2.79312L5.68463 11.9014C5.30015 12.2859 5.0274 12.7676 4.89552 13.2951L4.02988 16.7577C3.94468 17.0985 4.04453 17.459 4.29291 17.7073C4.54129 17.9557 4.90178 18.0556 5.24256 17.9704L8.70513 17.1047C9.23263 16.9729 9.71437 16.7001 10.0988 16.3156L19.2071 7.20733C20.4261 5.98838 20.4261 4.01207 19.2071 2.79312ZM16.2071 4.20733C16.645 3.76943 17.355 3.76943 17.7929 4.20733C18.2308 4.64524 18.2308 5.35522 17.7929 5.79312L8.68463 14.9014C8.55647 15.0296 8.39589 15.1205 8.22006 15.1644L6.37439 15.6259L6.83581 13.7802C6.87976 13.6044 6.97068 13.4438 7.09884 13.3156L16.2071 4.20733Z"/>
                                        <path className="fill-sky-500"   d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z" fill="#777"/>
                                        </svg>
                                    </span>
                                    <span className="inline-flex items-center justify-center bg-blue-100 border !border-blue-200 hover:!bg-blue-200 rounded-md flex-23">
                                        <svg className="w-4 h-4 fill-blue-500"  viewBox="0 0 48 48" >
                                        <path d="M0 0h48v48H0z" fill="none"/>
                                        <g id="Shopicon">
                                            <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,14c7.072,0,12.741,6.584,15.201,9.992
                                                C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z"/>
                                            <path d="M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4
                                                s-4-1.794-4-4C20,21.794,21.794,20,24,20z"/>
                                        </g>
                                        </svg>
                                    </span>
                                    <span className="inline-flex items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md flex-23">
                                            <svg className="w-4 h-4 p-0.5 fill-red-500"  viewBox="0 0 32 32" >
                                                <g fill="none" fill-rule="evenodd">
                                                <path d="m0 0h32v32h-32z"/>
                                                <path className="fill-red-500" d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                                                </g>
                                                </svg>
                                        </span>

                                </div>
                            </div>
                        ))
                        // <CategoryTable categories={categories} unSelected={unSelected} getSelected={getSelected} />
                        }
                    </tbody>
                </table>
            </div>

        </div>


  </div>





  )
};


export default TableDisplay;