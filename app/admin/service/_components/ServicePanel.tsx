'use client'
import React from 'react';
import FilterPanel from '../common/FilterPanel';
import ServiceTable from '../common/ServiceTable';

const ServicePanel = () => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/buttonsBg.svg';
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
  return (


    <div className="relative flex flex-wrap self-center mt-8 rounded-md w-full  ">


    <div className="flex-100  bg-white sm:rounded-lg shadow-md">




            <div className="flex flex-col p-2  my-3 pb-3 border-b border-gray-300">
                <div className="px-2 w-full flex pb-3 border-b border-b-gray-300">
                    <div className="flex max-sm:flex-col items-center">
                        <h5 className="font-semibold sm:text-lg text-md text-capitalize mb-0 text-gray-800 ">Found 103 colleges</h5>
                       <button v-if="deleteSelectValues.length>0" className="py-1 hidden ml-2 px-2 bg-rose-700 text-white rounded-md text-sm capitalize" onClick={showDeleteConfirm}>Delete Selected</button>
                    </div>

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
                                    <FilterPanel />
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
                                <FilterPanel />
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

            <div className="relative overflow-x-auto  ">
                <table className="w-full text-sm text-left border !border-gray-100 rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  uppercase bg-gray-50 ">
                        <tr className="w-full flex">
                              <th scope="col" className="text-center  flex-5 py-3">
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
                            <th scope="col" className="text-center  flex-20 py-3">
                                 name
                            </th>
                            <th scope="col" className="text-center flex-20 py-3">
                                Color
                            </th>
                            <th scope="col" className="text-center flex-20 py-3">
                                Category
                            </th>
                            <th scope="col" className="text-center flex-20 py-3">
                                Price
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* <UniversitiesTable
                        :universities="universities"
                        @update-select="updateDeletSelect"
                        /> */}
                        <ServiceTable />

                    </tbody>
                </table>
            </div>

        </div>


  </div>





  )
};


export default ServicePanel;
