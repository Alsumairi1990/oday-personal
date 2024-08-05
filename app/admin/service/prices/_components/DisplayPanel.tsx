"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { getServices } from '../../_serviceActions/ServiceActions';
import { Phase, Service } from '@prisma/client';
import Link from 'next/link';
import { BsColumnsGap } from 'react-icons/bs';
import { LuAlertOctagon } from 'react-icons/lu';

const DisplayPanel = () => {
    
    
    const [services, setServices] = useState<Service[] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [svalues, setSvalues] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(0);
    const [error, setError] = useState<string>('');

   
    const [baseUrl, setBaseUrl] = useState<string>('');
  
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);

  const handleRadioChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const closeModel = (edit:boolean) => {
    setShowEdit(edit);
  }
  
  const editCat = (categoryM:any)=>{
    setShowEdit(true);
    setSelectedCategory(categoryM);
   
  }
  const getAllService = async () => {
    try {
      setLoading(true);
      const catgs = await getServices();
      setServices(catgs)
      setLoading(false);
    } catch (error:any) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllService();
  }, []);
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
  return (
   <div className="w-full sm:w-11.8/12 relative max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white border border-gray-300 rounded-md">
      {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
     
      {error && <div className="py-3 my-1 flex items-center">
        <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
        <span className="text-red-400 text-md">{error}</span>
        </div>}
     <div className="text-start z-40  ">
        {svalues.length>0 && <div className='sm:ml-4'>
          <button 
            type='button' className='inline-flex py-0.5 px-1 rounded-md bg-rose-700 ml-4 text-white text-[14px] capitalize'>delete 
              </button>
          </div>
        }
        
        <div className="grid grid-cols-1">
          <div className="p-2 mb-3 flex gap-x-2 items-center">
            <span className=''><BsColumnsGap className='text-xl text-orange-600' /></span>
            <span className="text-base font-semibold text-gray-600">Choose / Search Services to dispaly price details</span>
          </div>
            <div className="border-b border-b-gray-200 w-full mb-2">
                <div className="bg-gray-100 border border-gray-200  rounded-3xl py-1.5 mb-2 w-full h-11 ">
                <input
                type="text"
                placeholder="Search Services"
                value={searchTerm}
                className='w-full h-full bg-transparent px-3 pl-4 placeholder:text-md outline-none'
                onChange={(e) => setSearchTerm(e.target.value)}
                  />   
                </div>
            </div>
            
            <div className="flex flex-col">
                
               {services && services.length > 0 ? (
                services.filter((element) =>
                  element.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((element, index) => (
                    <div className=" relative border flex my-4 w-[98%] mx-auto items-center  border-gray-200 rounded-md " >
                    <div className="inline-flex absolute z-20 bg-white top-3 left-3  justify-center   border border-gray-300  rounded-md">
                         <label className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                             <input type="checkbox"
                                 className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                 id="checkbox"  
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
                    <div className="flex-80">
                    <div className=" w-full  sm:flex sm:mx-auto items-center bg-white border-r border-r-gray-300 rounded-l-md">
                            <div className="sm:flex-10 h-full rounded-l-md bg-black border-r border-r-gray-300">
                                <img className=' opacity-75 h-full rounded-l-md' src={`${baseUrl}/${element?.image}`} alt="" />
                            </div>
                            <div className="pl-4  w-full">
                                <div className="w-full mb-2 flex items-center">
                                    {/* <img className=' rounded-md w-5  mr-2' src={`${baseUrl}/${category?.icon}`} alt="" /> */}
                                    <span className="text-base  text-black  font-medium">{element?.name}</span>
                                   
                                </div>

                            </div>
                            
                        
                            
                        </div>
                    </div>
                     <div className="flex gap-x-2 flex-20 px-3 justify-center  ">
                   
                          <Link href={`/admin/service/prices/display/${element.id}`} className="inline-flex px-2 w-8/12 items-center justify-center bg-[#f9f9f9] border !border-gray-300 hover:!bg-blue-200 py-0.5 rounded-md ">
                             <span className="text-slate-800 text-md  text-medium">Price Details</span>
                             <span className="ml-auto">
                                <svg className="w-4 h-4 fill-orange-500"  viewBox="0 0 48 48" >
                                <path d="M0 0h48v48H0z" fill="none"/>
                                <g id="Shopicon">
                                    <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,14c7.072,0,12.741,6.584,15.201,9.992
                                        C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z"/>
                                    <path d="M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4
                                        s-4-1.794-4-4C20,21.794,21.794,20,24,20z"/>
                                </g>
                                </svg>
                              </span>
                          </Link>
         
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
        
    </div>
    
   </div>
  );
};


export default DisplayPanel;