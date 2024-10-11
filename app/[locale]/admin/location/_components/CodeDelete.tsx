"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { ServiceCode, Tool } from '@prisma/client';
import FormEdit from './FormEdit';
import HashLoader from "react-spinners/HashLoader";




const ToolDelete = () => {
    
    
    const [codes, setCodes] = useState<ServiceCode[] | null>(null);
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [svalues, setSvalues] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(0);
    const [showDelete, setShowDelete] = useState(false);

   
    const [baseUrl, setBaseUrl] = useState<string>('');
  
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);

  const handleRadioChange = (name: string) => {
    setSelectedTag(name);
  };

  const closeModel = (edit:boolean) => {
    setShowEdit(edit);
  }
  const closeConfirm = (flag:boolean) =>{
    setShowDelete(flag);
    setSvalues([]);
  }
  const editCat = (name:any)=>{
    setShowEdit(true);
    setSelectedTag(name);
  }

  useEffect(() => {
    const getAllCodes = async () => {
      try {
        setLoading(true);
        // const catgs = await getCodes();
        // setCodes(catgs)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getAllCodes();
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
  if (loading) {
    return (<div className="h-40 w-11.8/12 flex justify-center pt-8 bg-white border border-gray-300 rounded-md">
      <HashLoader />
      </div>)
  }

    
    
  return (
   <div className="w-full sm:w-11.8/12 max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white border border-gray-300 rounded-md">
     <div className="text-start z-40  ">
        {svalues.length>0 && <div className='sm:ml-4'>
          <button onClick = { () => {setShowDelete(true)}}
            type='button' className='inline-flex py-0.5 px-1 rounded-md bg-rose-700 ml-4 text-white text-[14px] capitalize'>delete 
              </button>
          </div>
        }
      {/* {showDelete && <DeleteTag closeModel={closeConfirm} ids={svalues}  />}   */}
        <div className="grid grid-cols-1">
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
            
            <div className="flex flex-col max-h-72 overflow-y-auto">
                
               {codes && codes.length > 0 ? (
                codes.filter((element) =>
                    element.code.toLowerCase().includes(searchTerm.toLowerCase())
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
                                    <span className="text-base  text-black  font-medium">{element?.code}</span>
                                   
                                </div>

                            </div>
                            
                        
                            
                        </div>
                    {/* <CategoryCard  key={category.id} category={category} /> */}
                    </div>
                     <div className="flex gap-x-2 flex-20  justify-center  ">
                     <button 
                           onClick = { () => {{
                            
                           
                            getSelected(String(element?.id));
                          
                          
                            setShowDelete(true)}}}
                           type='button' className='inline-flex py-0.5 px-1 rounded-md ml-4 text-white text-[14px] capitalize'>
                         <span className="inline-flex items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md py-1 px-2">
                                 <svg className="w-4 h-4 p-0.5 fill-red-500"  viewBox="0 0 32 32" >
                                     <g fill="none" fill-rule="evenodd">
                                     <path d="m0 0h32v32h-32z"/>
                                     <path className="fill-red-500" d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                                     </g>
                                     </svg>
                          </span>
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
            {showEdit &&  <FormEdit name={selectedTag} closeModel={closeModel} /> }
        
           
        </div>
        
    </div>
    
   </div>
  );
};


export default ToolDelete;