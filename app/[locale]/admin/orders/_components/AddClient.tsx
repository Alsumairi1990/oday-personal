"use client";
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Category, Client} from '@prisma/client';
import { LuAlertOctagon } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { GrSelect } from "react-icons/gr";
import { MdAssignmentAdd } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import Image from 'next/image'
import { ImUserTie } from "react-icons/im";
import { FiPlusCircle } from "react-icons/fi";
import { addOrderCategory, addOrderClient, createOrderCategory, getOrderClientById, getOrderWCategorylById, removeOrderCategory } from '../_actions/Actions';
import { getclients } from '../../clients/_actions/Actions';
import { LiaUserTieSolid } from 'react-icons/lia';

interface Props {
    orderId : string,
  }
const AddClient = ({orderId}:Props) => {
  const [categoryName , setCategoryName ] = useState<string>('');
  const [clients , setClients ] = useState<Client[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [svalues, setSvalues] = useState<string>();
    const [trigger, setTrigger] = useState(0);
    const [showDelete, setShowDelete] = useState(false);
    const [baseUrl, setBaseUrl] = useState<string>('');
    const [toolNames, setToolNames] = useState<string[]>([]);
    const [clientNames, setClientNames] = useState<Client[]>([]);

    const [error, setError] = useState<string | null>(null);
    const [showAddTool , setShowAddTool ] = useState<boolean>(false);
    const [showRemoveTool , setShowRemoveTool] = useState<boolean>(false);
    const [removedTool , setRemovedTool] = useState<string>('');
    const messageRef = useRef<HTMLDivElement>(null);

    
  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
}, []);

const getSelected= (selected:string)=>{
    setSvalues(selected);
   }
   const unSelected = (id:string) => {
    setSvalues('');
   }
   const addCategoryName = (name:string)=>{
    setCategoryName(name);
   }
   
   const addCategory = async () => {
    try {
      setLoading(true);
      if(svalues) {const names = await addOrderClient(orderId, svalues)
        setLoading(false);
      setClientNames(names);
      }
      
      setError(null); // Clear previous errors
    } catch (error: any) {
      console.error('Error in addTool:', error);
      setError(error.message || 'An unexpected error occurred');
      setLoading(false);
    }
  };
  const getOrderClients = async ()=> {
    try {
        setLoading(true);
        const names = await getOrderClientById(orderId);
        setLoading(false);
        setClientNames(names);
        setError(null); 
        
    } catch (error:any) {
        setError(error.message || 'An unexpected error occurred');
        setLoading(false);
    }
  }
  const removeCategory  = async () => {
    
    try {
      setLoading(true);
    //   const tools = await removeOrderCategory(orderId,removedTool);
    //   setLoading(false);
    //  setClientNames(tools);
     setError(null);
     setShowRemoveTool(false);
    } catch (error:any) {
      setError(error.message || 'An unexpected error occurred');
      setLoading(false);
    }
    
  }  
  
    const getAllclients = async ()=> {
      try {
        setLoading(true);
        const catgs = await getclients();
        setLoading(false);
        setClients(catgs);
        setError(null)
        
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
     
    }
    useEffect(() => {
      getAllclients();
      getOrderClients();

    }, []);

    const createCategory = async () => {
      try {
        if(orderId != '' && categoryName != ''){
          setLoading(true);
          // const catname = await createOrderCategory(orderId , categoryName);
          // setLoading(false);
          // setError(null)
          // setClientNames((prevToolNames) => [...prevToolNames, catname]);
        }
        setShowAddTool(false);
      } catch (error:any) {
         setError(error.message); 
      }
   
      
    }
  return (
    <div className="w-full sm:w-full max-sm:border relative max-sm:border-gray-300 mx-auto p-6 pb-1 bg-white  rounded-md">
    {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    <div className="text-start z-40  ">
       <div className=" mb-3 border border-gray-200 rounded-md">
            
          {clientNames.length>0 ?  (
            <>
            <div className="px-2 border-b flex gap-2 items-center border-b-gray-200 py-1.5 ">
                <span className="bg-green-600 size-5 flex items-center justify-center rounded-md">
                <MdDone  className='text-lg text-white  '  />
                </span>
                <span className="text-gray-600 font-medium text-md">clients added {orderId}</span>
            </div>
            <div className="p-2 grid sm:grid-cols-3 gap-x-3 items-center gap-2 max-h-28 flex-wrap overflow-y-auto">
            {clientNames.map(name => (
              <div className="flex items-center rounded-md pl-1 pr-1 bg-gray-50 border border-gray-200">
                 <div className="flex-30 h-14 p-1 pl-0">
                 {name && name.image ?( <Image className='rounded-md w-full h-full'
                            src={name.image}
                            height={100}
                            width={100}
                            alt="Image"
                        />):(
                            <span className="text-gray-400">no image</span>
                        )}
                 </div>
                  <span className='text-sm flex-55 pl-2 text-gray-600 py-1 '>{name.name}</span>
                  <button 
                  onClick={()=> {name.name && setRemovedTool(name.name);setShowRemoveTool(true) }}
                className="flex flex-15 items-center border justify-center py-3 border-sky-500 bg-sky-500 rounded-md">
                  <IoMdCloseCircle className='text-base text-white' />
                  
                </button>
               </div>
             ))}
            </div> 
            </>
        ):(
          <span className="text-sm text-orange-600 px-4 py-2 inline-flex capitalize">No clients Added </span>
        )
        }
        </div>
        <div className='' ref={messageRef}>
            {error && 
            <div className="border-red-600 mt-4 flex w-full rounded-lg border-l-[6px] bg-red-200/30 px-7 py-4  sm:py-6">
                <div className="bg-red-700 mr-5 flex h-8 w-9 items-center justify-center rounded-md">
                      <LuAlertOctagon  className='text-xl rounded-full border border-gray-50 p-0.5 text-white'  />
                </div>
                <div className="w-full">
                    <h5 className="mb-2 text-base font-semibold text-[#004434]">
                      Category Error Alret
                    </h5>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed line-clamp-2">
                      Error Alert : {error}
                    </p>
                </div>
            </div>
            }
         
          </div>
      <div className="border-t my-2.5 mb-3 flex items-center justify-center pt-3 border-t-gray-200 ">
        <div className="flex items-center border gap-x-3 py-1 border-gray-200  px-2 bg-gray-100 rounded-md">
          <GrSelect className='text-base text-gray-600' />
          <span className="text-md inline-flex text-indigo-600">Slecet Categorues</span>
        </div>
        <span className="inline-flex text-sm text-red-500 mx-2">OR</span>
        <button 
          onClick={()=>{setShowAddTool(true)}}
        className="flex items-center border gap-x-2 py-1 border-sky-500  px-2 bg-sky-500 rounded-md">
          <span className="text-md inline-flex text-white font-medium">Create New</span>
          <FiPlusCircle className='text-base font-medium text-white' />

        </button>
        
      </div>
      {showRemoveTool && <div className='fixed top-0 left-0 z-30 bg-[#00000018]  flex items-center justify-center h-full w-full '>
          <div className="w-5/12 bg-white animate-modalEnter rounded-md shadow-lg p-4">
                 <div className="flex w-full border border-gray-300 bg-gray-200 rounded-md py-2.5 items-center px-3 border-b border-b-gray-300" style={{boxShadow:'0 6px 19px -13px #9f9494;'}}>
                      <div className="flex items-center">
                              <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                          <span className="text-base font-semibold text-gray-600">Remove Serice Tool</span>
                      </div>
                      <div className="ml-auto">
                          <button type="button" onClick={() => setShowRemoveTool(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center " >
                              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span className="sr-only">Close modal</span>
                          </button>
                      </div>
                  </div>
                  <div className=" flex flex-col z-0 w-full mt-2 mb-5 group pt-2">
                      <span className='text-red-500'>You are going to remove tool from service</span>
                  </div>
                  <div className="mt-2 p-2 flex justify-center">
                  <button 
                  onClick={ removeCategory }
                  className='inline-flex py-1.5  items-center px-2 rounded-md bg-violet-600 ml-4 text-white text-[14px] capitalize'>
                    Remove Service Tool
                    </button>
                    </div>
          </div> 
      </div>
      }
      {showAddTool && <div className='fixed top-0 left-0 z-30 bg-[#00000018]  flex items-center justify-center h-full w-full '>
          <div className="w-5/12 bg-white animate-modalEnter rounded-md shadow-lg p-4">
                 <div className="flex w-full border border-gray-300 bg-gray-200 rounded-md py-2.5 items-center px-3 border-b border-b-gray-300" style={{boxShadow:'0 6px 19px -13px #9f9494;'}}>
                      <div className="flex items-center">
                              <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                          <span className="text-base font-semibold text-gray-600">Add New Tool</span>
                      </div>
                      <div className="ml-auto">
                          <button type="button" onClick={() => setShowAddTool(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center" >
                              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span className="sr-only">Close modal</span>
                          </button>
                      </div>
                  </div>
                  <div className=" flex flex-col z-0 w-full mt-2 mb-5 group pt-2">
                      <label htmlFor="name" className="font-medium mb-2 text-sm  text-gray-500 duration-300 ">Tag Name</label>
                      <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input  
                        onChange={(e) => addCategoryName(e.target.value)}
                        type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                      </div> 
                  </div>
                  <div className="mt-2 p-2 flex justify-center">
                    <button onClick = {createCategory}
                        type='button' 
                        disabled={categoryName=== ''}
                        className='inline-flex py-1.5  items-center px-2 rounded-md bg-violet-600 ml-4 text-white text-[14px] capitalize'>
                        Create & Add to Service 
                          <span className="text-white ml-2 text-md"  >
                          <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 14L1 1H2L2 14H1ZM9.85355 3.14645L14.2071 7.5L9.85355 11.8536L9.14645 11.1464L12.2929 8H3V7H12.2929L9.14645 3.85355L9.85355 3.14645Z" fill="#ffffff"/>
                              </svg>
                          </span>
                      </button>
                    </div>
          </div> 
      </div>
      }
       <div className="grid grid-cols-1">
           <div className="border-b border-b-gray-200 w-full mb-2">
               <div className="bg-gray-100 border border-gray-200 rounded-3xl py-1.5 mb-2 w-full h-11 ">
               <input
               type="text"
               placeholder="Search clients"
               value={searchTerm}
               className='w-full h-full bg-transparent px-3 placeholder:text-md outline-none'
               onChange={(e) => setSearchTerm(e.target.value)}
                 />   
               </div>
           </div>
           
           <div className="grid sm:grid-cols-4 sm:grid-cols max-sm:gap-4  max-sm:gap-y-8 sm:gap-x-2 sm:max-h-72 mt-2 overflow-y-auto">
               
              {clients && clients.length > 0 ? (
               clients.filter((element) =>
                element.name  && element.name!.toLowerCase().includes(searchTerm.toLowerCase())
               )
               .map((element, index) => (
                   <div className=" relative border bg-gray-50 flex flex-col gap-y-3 py-2 my-2 w-11.8/12 mx-auto items-center  border-gray-200 rounded-md max-sm:pb-3 " >
                    <div className="  rounded-md  border border-gray-200">
                        {element.image ?(<img className=' sm:h-full rounded-md' src={`${baseUrl}/${element?.image}`} alt="" />)
                        :
                        (<span className='h-full bg-gray-300 w-full text-gray-100 rounded-l-md inline-flex justify-center items-center'>Ima</span>)
                        }
                    </div>
                    <div className=" sm:h-8 sm:flex sm:mx-auto items-center bg-white border border-gray-200 rounded-md">
                          
                           <div className="px-2  w-full">
                               <div className="w-full flex items-center gap-x-1">
                                <span className=""><LiaUserTieSolid className='text-gray-500 text-base ' /></span>
                                   <span className="text-md  text-gray-800 ">{element?.name}</span>
                               </div>
                           </div>
                   </div>
                    <div className="flex gap-x-2  justify-center items-center  ">
                    <div className="inline-flex  z-20 bg-white  justify-center rounded-md">
                        <label className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer" htmlFor="client">
                            <input type="radio"
                                className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                id="client"  
                                name='client'
                                onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    if (isChecked) {
                                    getSelected(String(element?.id));
                                    } else {
                                    unSelected(String(element?.id));
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
       </div>
       <div className=' my-3 border border-gray-200 py-2 items-center rounded-md flex justify-center'>
            <div className="flex items-center">
            <span className='text-violet-600 flex items-center font-medium border-b-2 text-md border-b-gray-400 mr-1 px-1'>{svalues}</span> 
            <span className='text-md text-orange-500 font-medium'>
               has been selected</span>

            </div>
             <button onClick = {addCategory}
               type='button' 
               disabled={svalues === ''}
               className={`inline-flex py-1 items-center px-2 rounded-md ml-4 text-white text-[14px] capitalize ${
                svalues === '' ? 'bg-violet-400' : 'bg-violet-600'
              }`}
               >Add Category 
                <span className="text-white ml-2 text-md"  >
                <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 14L1 1H2L2 14H1ZM9.85355 3.14645L14.2071 7.5L9.85355 11.8536L9.14645 11.1464L12.2929 8H3V7H12.2929L9.14645 3.85355L9.85355 3.14645Z" fill="#ffffff"/>
                    </svg>
                </span>
             </button>
         </div>
       
   </div>
   
  </div>
  );
};

export default AddClient;



