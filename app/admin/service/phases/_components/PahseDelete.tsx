"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Category, Service } from '@prisma/client';
import { LuAlertOctagon } from "react-icons/lu";
import DeleteService from '@/app/admin/service/_components/DeleteService';
import { PhaseWithModels } from '../utils/PhaseWithModels';
import { getPhaseElements } from '../_actions/Actions';
import DeletePhase from './DeletePhase';


const PhaseDelete = () => {
    
    
    const [menuElements, setMenuElements] = useState<PhaseWithModels[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [svalues, setSvalues] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [showDelete, setShowDelete] = useState(false);

   
    const [baseUrl, setBaseUrl] = useState<string>('');
  
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);


  const closeModel = (edit:boolean) => {
    setShowEdit(edit);
  }
  const closeConfirm = (flag:boolean) =>{
    setShowDelete(flag);
    setSvalues([]);
  }
 
  const loadMenuElements = async () => {
    try {
      setLoading(true);
      const catgs = await getPhaseElements();
      setMenuElements(catgs)
      setLoading(false);
    } catch (error:any) {
      setLoading(false);
      setError(error.message)
    }
  };
  useEffect(() => {
    loadMenuElements();
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
   <div className="w-full sm:w-11.8/12 max-sm:border relative max-sm:border-gray-300  m-auto p-6 bg-white border border-gray-300 rounded-md">
    {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
     <div className="text-start z-40  ">
        {svalues.length>0 && <div className='sm:ml-4'>
          <button onClick = { () => {setShowDelete(true)}}
            type='button' className='inline-flex py-0.5 px-1 rounded-md bg-rose-700 ml-4 text-white text-[14px] capitalize'>delete 
              </button>
          </div>
        }
      {showDelete && <DeletePhase closeModel={closeConfirm} ids={svalues}  />}  
        <div className="grid grid-cols-1">
                    {error && <div className="py-3 my-1 flex items-center">
                    <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                    <span className="text-red-400 text-md">{error}</span>
                    </div>
                }
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
            
            <div className="flex flex-col max-h-[70vh] overflow-y-auto">
                
               {menuElements && menuElements.length > 0 ? (
                menuElements.filter((element) =>
                    element.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((element, index) => (
                    <div className=" relative border flex my-4 w-[98%]  mx-auto items-center  border-gray-200 rounded-md " >
                    <div className="inline-flex absolute z-20 bg-white  top-1 left-3  justify-center   border border-gray-300  rounded-md">
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
                    <div className=" w-full h-16  sm:flex sm:mx-auto items-center bg-white border-r border-r-gray-300 rounded-l-md">
                            
                            {element.icon ? (<div className="sm:flex-10 h-full rounded-l-md bg-black border-r border-r-gray-300">
                                <img className=' opacity-75 h-full rounded-l-md' src={`${baseUrl}/${element?.icon}`} alt="" />
                            </div>):
                            (
                              <div className="w-20 h-14 flex justify-center items-center rounded-l-md bg-slate-300">
                                <span className="text-gray-500 text-sm">
                                  Image
                                </span>
                              </div>
                            )
                            }
                            <div className="pl-4  w-full">
                                <div className="w-full mb-2 flex items-center">
                                    <span className="text-base  text-black  font-medium">{element?.name}</span>                           
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="flex gap-x-2 flex-20  justify-center  ">
                     <button 
                           onClick = { () => {{
                            getSelected(String(element?.id));
                            setShowDelete(true)}}}
                           type='button' className='inline-flex py-0.5 px-1 rounded-md ml-4 text-white text-[14px] capitalize'>
                         <div className="inline-flex items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md py-1 px-2">
                             <span className="text-gray-700 mr-2">Remove </span> 
                             <span className="">
                             <svg className="w-4 h-4 pl-0.5 fill-red-500"  viewBox="0 0 32 32" >
                                     <g fill="none" fill-rule="evenodd">
                                     <path d="m0 0h32v32h-32z"/>
                                     <path className="fill-red-500" d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                                     </g>
                                     </svg>
                             </span>
                               
                          </div>
                          </button>
         
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


export default PhaseDelete;