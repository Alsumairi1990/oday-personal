"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getServiceWWorksById, getTools, getWorks, updateServiceWithCategories } from '../_serviceActions/ServiceActions';
import {  Location, Work } from '@prisma/client';
import { MdOutlinePriceChange } from "react-icons/md";
import { LuAlertOctagon } from "react-icons/lu";
import { GrSelect } from "react-icons/gr";
import { createServiceTool, createServiceWork, removeServiceTool, removeServiceWork } from '../../common/_actions/Actions';
import AddPrice from './AddPrice';
import { getLocations } from '../../location/_actions/Actions';
import { IoIosArrowDown, IoMdCloseCircle } from 'react-icons/io';


interface Props {
    serviceId : number,
  }
const PriceCreate = ({serviceId}:Props) => {
  const [workName , setWorkName ] = useState<string>('');
    const [works , setWorks ] = useState<Work[]>([]);
    const [locations , setLocations ] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>('');

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [value, setValue] = useState<string>('');
    const [trigger, setTrigger] = useState(0);
    const [showDelete, setShowDelete] = useState(false);
    const [baseUrl, setBaseUrl] = useState<string>('');
    const [workNames, setWorkNames] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [showAddTool , setShowAddTool ] = useState<boolean>(false);
    const [showRemoveTool , setShowRemoveTool] = useState<boolean>(false);
    const [removedTool , setRemovedTool] = useState<string>('');
    const [locationShow , setLocationShow] = useState<boolean>(true);
    
    



  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
}, []);

const getSelected = (selected:string, country:string)=>{
  setValue(selected);
  setSelectedLocation(country);
   }
   const unSelected = () => {
    setValue('');
    setSelectedLocation('');

    
   }
   const addWorkName = (name:string)=>{
    setWorkName(name);
   }
   
   const addWork = async () => {
    try {
      const numberArray = value;
      setLoading(true);
      // const names = await addServiceWork(serviceId, numberArray);
      setLoading(false);
      // setWorkNames(names);
      setError(null); // Clear previous errors
    } catch (error: any) {
      console.error('Error in addTool:', error);
      setError(error.message || 'An unexpected error occurred');
      setLoading(false);
    }
  };
  const getWorkNames = async ()=> {
    try {
        setLoading(true);
        const names = await getServiceWWorksById(serviceId);
        setLoading(false);
        setWorkNames(names);
        setError(null); 
        
    } catch (error:any) {
        setError(error.message || 'An unexpected error occurred');
        setLoading(false);
    }
  }
  const removeWork  = async () => {
    try {
      setLoading(true);
      const tools = await removeServiceWork(serviceId,removedTool);
      setLoading(false);
     setWorkNames(tools);
     setError(null);
     setShowRemoveTool(false);
    } catch (error:any) {
      setError(error.message || 'An unexpected error occurred');
      setLoading(false);
    }
  }  
  
    const getAllLocations = async ()=> {
      try {
        setLoading(true);
        const catgs = await getLocations();
        setLoading(false);
        setLocations(catgs);
        setError(null)
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
     
    }
    useEffect(() => {
      getAllLocations();
        getWorkNames();
    }, []);

    const createWork = async () => {
      try {
        if(serviceId != 0 && workName != ''){
          setLoading(true);
          const wName = await createServiceWork(serviceId , workName);
          setLoading(false);
          setError(null)
          setWorkNames((prevToolNames) => [...prevToolNames, wName]);
        }
        setShowAddTool(false);
      } catch (error:any) {
         setError(error); 
      }
   
      
    }
    const closeModel = (flag:boolean) =>{
      setShowAddTool(flag);
      setLocationShow(true);
    }
  return (
    <div className="w-full sm:w-full h-full max-sm:border relative max-sm:border-gray-300 mx-auto p-6 pb-1 bg-white  rounded-md">
    {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    <div className="text-start z-40   ">
       <div className=" mb-3 border border-gray-200 rounded-md">
            <div className="px-2 border-b flex gap-2 items-center border-b-gray-200 py-1.5 ">
                <div className="flex items-center">
                              <span className=""><MdOutlinePriceChange className='text-gray-600 text-2xl mr-2' /> </span>
                          <span className="text-base font-semibold text-gray-600">Added Prices</span>
                      </div>
            </div>
          {workNames.length>0 ?  (
            <div className="p-2 flex items-center gap-2 max-h-16 flex-wrap overflow-y-auto">
            {workNames.map(name => (
              <div className="flex items-center rounded-md pl-2 pr-1 bg-gray-100 border border-gray-200">
                  <span className='text-sm  text-orange-600 py-1 mr-2 font-medium'>{name}</span>
                  <button 
                  onClick={()=> { setRemovedTool(name);setShowRemoveTool(true) }}
                className="flex items-center border size-[22px] justify-center ml-auto  border-sky-500 bg-sky-500 rounded-md">
                  <IoMdCloseCircle className='text-base text-white' />
                  
                </button>
               </div>
             ))}
            </div> 
        ):(
          <span className="text-sm text-orange-600 px-4 py-2 inline-flex capitalize">No Tools Added </span>
        )
        }
        </div>
      {error && <div className="py-3 my-1 flex items-center">
        <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
        <span className="text-red-400 text-md">{error}</span>
        </div>
      }
      
      <div className="py-2">
        <button type='button'
         onClick={()=> setLocationShow(prevState => !prevState)}
         className="flex w-full items-center border gap-x-3 py-2 border-gray-300  px-2 bg-gray-100 rounded-md">
          <GrSelect className='text-base text-gray-600' />
          {value === '' ? (<span className="text-md inline-flex text-indigo-600 font-semibold">Choose Location</span>)
          :
          (<span className="text-md inline-flex text-indigo-600 font-semibold capitalize">{selectedLocation}</span>)
           }
          <span className="ml-auto"><IoIosArrowDown className='text-xl text-gray-700' />
          </span>
        </button>
        
      </div>
       {locationShow && <div className="p-3 border border-gray-200 animate-modalEnter rounded-md">

           <div className="border-b border-b-gray-200 w-full mb-2">
               <div className="bg-gray-100 border border-gray-200 rounded-3xl py-1.5 mb-2 w-full h-11 ">
               <input
               type="text"
               placeholder="Search categories"
               value={searchTerm}
               className='w-full h-full bg-transparent px-3 placeholder:text-md outline-none'
               onChange={(e) => setSearchTerm(e.target.value)}
                 />   
               </div>
           </div>
           
           <div className="grid grid-cols-2 sm:grid-cols max-sm:gap-4  max-sm:gap-y-8 sm:gap-x-2 sm:max-h-72 mt-2 overflow-y-auto">
               
              {locations && locations.length > 0 ? (
               locations.filter((element) =>
                   element.country.toLowerCase().includes(searchTerm.toLowerCase())
               )
               .map((element, index) => (
                   <div className=" relative border flex flex-wrap my-2 w-11.8/12 mx-auto items-center  border-gray-200 rounded-md max-sm:pb-3 " >
                         <div className="sm:flex-10 flex-100 h-9 overflow-y-hidden  rounded-l-md bg-black border-r border-r-gray-300">
                              {element.image ?(<img className=' opacity-75 sm:h-full rounded-l-md' src={`${baseUrl}/${element?.image}`} alt="" />)
                              :
                              (<span className='h-full bg-gray-300 w-full text-sm text-gray-100 rounded-l-md inline-flex justify-center items-center'>Ime</span>)
                              }
                           </div>
                   <div className=" flex-100 sm:flex-70  sm:flex sm:mx-auto items-center bg-white border-r border-r-gray-300 rounded-l-md">
                          
                           <div className="pl-4  w-full">
                               <div className="w-full flex items-center">
                                   <span className="text-base  text-black  font-medium">{element?.country}</span>
                               </div>
                           </div>
                   </div>
                    <div className="flex flex-100 gap-x-2 sm:flex-20  justify-center items-center  ">
                    <div className="inline-flex  z-20 bg-white  justify-center rounded-md">
                        <label className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                            <input type="radio"
                                className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                id={String(element.id)} 
                                name='location' 
                                onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    if (isChecked) {
                                    getSelected(String(element?.id), element.country);
                                    } else {
                                    unSelected();
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
                    </div>
                </div>
                       
               ))
               ) : (
                 <div className=" relative h-16  w-11.8/12 mx-auto items-center bg-white border border-gray-300 rounded-md flex justify-center">
                   <p className="text-gray-700 text-md">No Data</p>
                 </div>
              
               )}
           </div>
              
       <div className=' my-3 border border-gray-200 py-2 items-center rounded-md flex justify-center'>
            <div className="flex items-center">
            <span className='text-violet-600 flex items-center font-medium border-b-2 text-md border-b-gray-400 mr-1 px-1'>{value}</span> 
            <span className='text-md text-orange-500 font-medium'>
               has been selected</span>

            </div>
             <button
               onClick={()=>{setShowAddTool(true);setLocationShow(false)}}              
               type='button' 
               disabled={value === ''}
               className={`inline-flex py-1 items-center px-2 rounded-md ml-4 text-white text-[14px] capitalize ${
                value === '' ? 'bg-violet-400' : 'bg-violet-600'
              }`}
            //    className='inline-flex py-1  items-center px-2 rounded-md bg-violet-600 ml-4 text-white text-[14px] capitalize'>
               >Add Category 
                <span className="text-white ml-2 text-md"  >
                <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 14L1 1H2L2 14H1ZM9.85355 3.14645L14.2071 7.5L9.85355 11.8536L9.14645 11.1464L12.2929 8H3V7H12.2929L9.14645 3.85355L9.85355 3.14645Z" fill="#ffffff"/>
                    </svg>
                </span>
             </button>
         </div> 
       </div>
   
         }

{showAddTool && value !== '' && <AddPrice  serviceId={serviceId} locationId={Number(value)}  closeModel={closeModel} />
      }

       
   </div>
   
  </div>
  );
};

export default PriceCreate;


