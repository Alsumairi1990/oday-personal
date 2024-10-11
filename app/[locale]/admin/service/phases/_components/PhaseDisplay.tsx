'use client'
import React, { useEffect, useState } from 'react';
import { Phase, Service, Tag, Tool } from '@prisma/client';
import HashLoader from 'react-spinners/HashLoader';
import { FaThList } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";

import GridView from './GridView';
import GridColsView from './GridColsView';
import TableView from './TableView';
import { getTools } from '@/app/[locale]/admin/tools/_actions/Actions';
import {  getServiceById, getServicePhasesById, getServiceWPhasesById } from '../../_serviceActions/ServiceActions';



interface ShowProps {
    id : string;
    
  }

const PhaseDisplay = ({id}:ShowProps) => {
  
   const [phases, setPhases] = useState<Phase[] | null>(null);
   const [svalues, setSvalues] = useState<string[]>([]);
   const [service, setService] = useState<Service | null>();
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
   const getAllTags = async () => {
    // const catgs = await getServiceWPhasesById(Number(id));
    const catgs = await getServicePhasesById(Number(id));
    const SericeName = await getServiceById(Number(id));

    setService(SericeName);
    setPhases(catgs)
   }
   useEffect(() => {
    setLoading(true)
    getAllTags();
    setLoading(false)

}, []);
const closeConfirm = (flag:boolean) =>{
    setShowDelete(flag);
    
  }

if (loading) {
    return (<div className="h-72 mx-auto w-11.8/12 flex justify-center pt-8 bg-white border border-gray-300 rounded-md">
      <HashLoader />
      </div>)
  }

  return (


    <div className="relative sm:w-11.8/12 sm:pb-8 mx-auto flex flex-wrap self-center mt-4  rounded-md w-full  ">


    <div className="flex-100  bg-white sm:rounded-lg shadow-md ">
            <div className="flex flex-col p-2  my-3 pb-3 border-b border-gray-300">
                <div className="px-2 w-full flex pb-3 ">
                    <div className="flex max-sm:flex-col items-center">
                        <h5 className="font-semibold sm:text-lg text-md text-capitalize mb-0 text-orange-500 ">{service?.name} <span className='text-sm mx-3 text-gray-300'>|</span><span className="text-gray-800">Pahses</span></h5>
                       <button v-if="deleteSelectValues.length>0" className="py-1 hidden ml-2 px-2 bg-rose-700 text-white rounded-md text-sm capitalize" onClick={showDeleteConfirm}>Delete Selected</button>
                    </div>
                     {svalues.length>0 && <div className='sm:ml-4'>
                        <button onClick = { () => {setShowDelete(true)}}
                         type='button' className='inline-flex py-0.5 px-1 rounded-md bg-rose-700 ml-4 text-white text-[14px] capitalize'>delete 
                            </button>
                       </div>
                      }
                        
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
               
            </div>

            <div className="relative overflow-x-auto  scr-container overflow-y-autحo">
                <div className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                     {showGrid && phases && phases?.length > 0 && 
                        <GridView phases={phases} unSelected={unSelected} getSelected={getSelected}  />
                        }
                    {/* {showTable && tools && tools?.length > 0 && 
                    <TableView tools={tools} unSelected={unSelected} getSelected={getSelected}  />
                    } 
                    {showGridCols && tools && tools?.length > 0 && 
                    <GridColsView tools={tools} unSelected={unSelected} getSelected={getSelected}  />
                    }  */}
                </div>
            </div>

        </div>
  </div>
  )
};

export default PhaseDisplay;
