"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LuAlertOctagon } from "react-icons/lu";
import Image from 'next/image';
import { MdAssignmentAdd} from "react-icons/md";
import { addingInnerElement, getElelemntWModelsById } from '../_actions/Action';
import { MenuWithModels } from '../_utils/MenuWithModels';
import { IoMdCloseCircle } from 'react-icons/io';
import { MenuElementSchema } from '../_utils/MenuElementSchema';

interface Props {
    id : string
    closeModel : (value:boolean) => void
}

type inputType = z.infer<typeof MenuElementSchema>;


const InnerElementCreate = ({id,closeModel}:Props) => {
    const [element, setElement ]= useState<MenuWithModels>(); 
    const [imageSrc, setImageSrc] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const [baseUrl,setBaseUrl] = useState<string>('');
   const [removedTool, setRemovedTool] = useState<string>('');
   const [showRemoveTool, setShowRemoveTool] = useState<boolean>(false);

   

   const rows = 5;
   const cols = 30;
     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(MenuElementSchema),
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const closePanel = (flag:boolean) => {
    closeModel(false);
  }

  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
}, []);
    const saveUser2: SubmitHandler<inputType> = async (data)=>{
      alert("called");
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key as keyof inputType].toString());
      }
      const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
      fileInputs.forEach((fileInput) => {
        if (fileInput.files?.length) {
          formData.append(fileInput.name, fileInput.files[0]);
        } 
      });
  
      try {
        setLoading(true);
        if (id){
        const result =  await addingInnerElement(Number(id),formData);
        setElement(result)
        }
        setLoading(false);
      } catch (error:any) {
        setLoading(false);
        setError(error.message)
      }
    }

    const getMenuInner = async ()=>{
      try {
        if(id) {
          setLoading(true)
           const element =  await getElelemntWModelsById(Number(id));
           setElement(element)
           setError('')
        }
        
      } catch (error:any) {
        setLoading(false);
        setError(error.message);
      } finally{
        setLoading(false)
      }
    }
      useEffect(() => {
        getMenuInner();
      }, []);
     
  return (
   <div className="w-full h-full bg-[#0003]  m-auto fixed left-0 top-0 flex items-center justify-center p-4 pb-0 z-50 ">
         <div   className="flex flex-col w-full  sm:w-5/12 animate-modalEnter max-sm:h-full add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
        
        {loading && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
         
        <div className="px-2 py-2.5 w-full flex items-center rounded-t-md bg-gray-100 mb-3 border-b border-b-gray-300">
            <div className="flex items-center">
            <span className=""><MdAssignmentAdd className='text-cyan-600 text-2xl mr-2' /> </span>
            <span className="text-base text-gray-700">
              Adding Menu inner Elements </span> |   {id}
            </div>
            <div className="ml-auto">
                <button type="button" onClick={() => closeModel(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
          </div>
          <div className=" flex flex-wrap justify-between px-5 max-h-[100vh] sm:max-h-[80vh] relative overflow-y-auto scr-container pt-6 ">
        
        {error && <div className="py-1 my-1 flex items-center">
        <LuAlertOctagon className='text-gray-500 text-2xl' />
        <span className="text-red-400 ml-2 text-md">{error}</span>
        </div>
      }
      {element && <span>00{element.title}</span>

      }

       {element?.elements && element.elements.length>0 ?  (
            <div className="py-2 flex gap-2 items-center ">
            {element.elements.map(element => (
              <div className="flex items-center  rounded-md pl-2 pr-1 bg-gray-100 border border-gray-200">
                  <span className='text-sm text-orange-600 py-1 mr-2 font-medium'>{element.title}</span>
                  <button
                    onClick={() => {
                      if(element) setRemovedTool(element.title);
                      setShowRemoveTool(true);
                    }}
                    className="flex items-center border size-[22px] justify-center ml-auto  border-sky-500 bg-sky-500 rounded-md"
                  >
                    <IoMdCloseCircle className="text-base text-white" />
                  </button>
              </div>
            ))}
            </div> 
        ):(
          <div className="pb-1">
            <span className="text-sm text-orange-600 px-4 inline-flex capitalize"> </span>
          </div>                                   
        )
        }
       
     <form onSubmit={handleSubmit(saveUser2)} className="text-start  z-40 rounded-md">
        <div className="flex flex-wrap justify-between p-5 ">
            <div className=" flex flex-100 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="title" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 "> Title</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('title')}  type="text" name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-100 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Phase title  ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
            </div>
            <div className=" flex flex-100 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="link" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 "> Linke</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('link')}  type="text" name="link" id="link" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-100 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Phase title  ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
            </div>
            <div className=" flex sm:flex-100 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="content" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 ">Meny Element description</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('description')}  rows={rows} cols={cols}  name="description" id="description" className="block pl-2 pt-3 px-0 z-0 w-full text-sm text-gray-900 bg-gray-100 border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="MEnu Element description ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>
           
            <div className="flex flex-100 items-center  justify-center w-full">
                    <label htmlFor="icon" className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100  hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-2 pb-3">
                        {imageSrc ? (
                        <Image className='rounded-md'
                            src={imageSrc}
                            height={150}
                            width={150}
                            alt="Product Image"
                        />
                    ):(
                          <div className="flex flex-col items-center">
                          <svg width="50px" height="50px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload icon</span> From System</p>
                          {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                          </div>
                    )} 
                        </div>
                        {imageSrc  && <span className='text-gray-600 text-md'>Change icon</span>}
                        <input id="icon" {...register('icon')}  type="file" name="icon" className="opacity-0 h-2" onChange={handleFileChange} />
                    </label>
                    {errors.icon?.message && <p>{errors.icon.message as string}</p>}

            </div> 
        </div>
          <div className="mt-4 flex w-full sticky bottom-0 pr-3 z-40 left-0 bg-white border-t border-t-gray-300 py-1.5 ">
                <input type="submit" className="btn px-3 ml-auto py-0.5  bg-indigo-600  hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded " value="Register" />
            </div>
    </form>
    </div>
    </div>
   </div>
  );
};

export default InnerElementCreate;