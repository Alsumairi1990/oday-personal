"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdDone } from "react-icons/md";
import { LuAlertOctagon } from "react-icons/lu";
import { Phase} from '@prisma/client';
import Image from 'next/image';
import { MdAssignmentAdd } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { createProjectPhase, getProjectWPhasesById, removeProjectPhase } from '../_actions/Actions';
import { PhaseSchema } from '../../../service/phases/utils/PhaseSchema';


type inputType = z.infer<typeof PhaseSchema>;

interface Props {
    projectId : string,
  }
const CreatePhase = ({projectId}:Props) => {
    const [phases, setPhases] = useState<Phase[]>([]); // Use Category type
    const [imageSrc, setImageSrc] = useState<string | null>(null);
   const [iconSrc, setIconSrc] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const [showRemoveTool , setShowRemoveTool] = useState<boolean>(false);
   const [phaseNames, setPhasesNames] = useState<string[]>([]);
   const [removedPhase , setRemovedPhase] = useState<string>('');



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
    resolver: zodResolver(PhaseSchema),
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

  
  const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

 
    
    
    const saveUser: SubmitHandler<inputType> = async (data)=>{
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
        const categ =  await createProjectPhase(formData,projectId);
        setPhasesNames(categ);
        setLoading(false);

      } catch (error:any) {
        setLoading(false);
        setError(error.message)
      }
    }

    const removePhase  = async () => {
        try {
          setLoading(true);
          const phases = await removeProjectPhase(projectId,removedPhase);
          setLoading(false);
         setPhasesNames(phases);
         setError(null);
         setShowRemoveTool(false);
        } catch (error:any) {
          setError(error.message || 'An unexpected error occurred');
          setLoading(false);
        }
      }  
      const getPhaseNames = async ()=> {
        try {
            setLoading(true);
            const names = await getProjectWPhasesById(projectId);
            setLoading(false);

            setPhasesNames(names);
            setError(null); 
            
        } catch (error:any) {
            setError(error.message || 'An unexpected error occurred');
            setLoading(false);
        }
      }
      useEffect(() => {
        getPhaseNames();
      }, []);
  return (
   <div className="w-full sm:w-11.8/12 m-auto relative p-4 bg-white rounded-md">
        {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
        <div className=" mb-3 border border-gray-200 rounded-md">
           
            
          {phaseNames.length>0 ?  (
            <>
             <div className="px-2 border-b flex gap-2 items-center border-b-gray-200 py-1.5 ">
             <span className="">
             <MdDone  className='text-xl text-green-600 size-5 border border-green-500 rounded-xl'  />
             </span>
             <span className="text-gray-600 font-medium text-md">Tools added {projectId} </span>
         </div>
            <div className="p-2 flex items-center gap-2 max-h-16 flex-wrap overflow-y-auto">
            {phaseNames.map(name => (
              <div className="flex items-center rounded-md pl-2 pr-1 bg-gray-100 border border-gray-200">
                  <span className='text-sm  text-orange-600 py-1 mr-2 font-medium'>{name}</span>
                  <button 
                  onClick={()=> { setRemovedPhase(name);setShowRemoveTool(true) }}
                className="flex items-center border size-[22px] justify-center ml-auto  border-sky-500 bg-sky-500 rounded-md">
                  <IoMdCloseCircle className='text-base text-white' />
                  
                </button>
               </div>
             ))}
            </div> 
            </>
        ):(
          <span className="text-sm text-orange-600 px-4 py-2 inline-flex capitalize">No Tools Added </span>
        )
        }
        </div>
        <div className="flex relative py-1 mb-1 justify-center">
              <span className="absolute -bottom-1  ">
                <MdKeyboardDoubleArrowDown className='text-base text-gray-500' />
              </span>
        </div>
        {error && <div className="py-3 my-1 flex items-center">
        <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
        <span className="text-red-400 text-md">{error}</span>
        </div>
      }
        
        {showRemoveTool && <div className='fixed top-0 left-0 z-30 bg-[#00000018]  flex items-center justify-center h-full w-full '>
          <div className="w-5/12 bg-white animate-modalEnter rounded-md shadow-lg p-4">
                 <div className="flex w-full border border-gray-300 bg-gray-200 rounded-md py-2.5 items-center px-3 border-b border-b-gray-300" style={{boxShadow:'0 6px 19px -13px #9f9494;'}}>
                      <div className="flex items-center">
                              <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                          <span className="text-base font-semibold text-gray-600">Remove Service Tool</span>
                      </div>
                      <div className="ml-auto">
                          <button type="button" onClick={() => setShowRemoveTool(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
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
                  onClick={ removePhase }
                  className='inline-flex py-1.5  items-center px-2 rounded-md bg-violet-600 ml-4 text-white text-[14px] capitalize'>
                    Remove Service Tool
                    </button>
                    </div>
                   
          </div> 
      </div>
      }
      
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  border border-gray-200 p-5 rounded-md">
        <div className="grid grid-cols-1">
            
           <div className="flex rounded-md py-1 justify-center mb-3 bg-cyan-500 border border-cyan-500 shadow">
               <span className="texr-gray-600 inline-flex text-white font-medium ">Creating Phase </span>
            </div>
        
            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="category_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Phase Title</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('name')}  type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Phase title  ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="description" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Phase  Description</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('description')}  rows={rows} cols={cols}  name="description" id="description" className="block pl-2 pt-3 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="sequence" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Sequence</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('sequence')}  type="text" name="sequence" id="sequence" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>

            <div className="flex sm:flex-48 items-center mb-4 justify-center w-full">
                    <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-2 pb-3">
                        {imageSrc ? (
                        <Image className='rounded-md'
                            src={imageSrc}
                            height={200}
                            width={200}
                            alt="Product Image"
                        />
                    ):(
                          <div className="flex flex-col items-center">
                          <svg width="70px" height="70px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Image</span> From System</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                          </div>
                    )} 
                        </div>
                        {imageSrc  && <span className='text-gray-600 text-md'>Change Image</span>}
                        <input id="image" {...register('image')}  type="file" name="image" className="opacity-0" onChange={handleFileChange} />
                    </label>
                    {errors.image?.message && <p>{errors.image.message as string}</p>}

            </div> 

            <div className="flex flex-48 items-center mb-4 justify-center w-full">
                  <label htmlFor="icon" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-2 pb-3">
                      {iconSrc ? (
                      <Image className='rounded-md'
                          src={iconSrc}
                          height={200}
                          width={200}
                          alt="Product Image"
                      />
                  ):(
                        <div className="flex flex-col items-center">
                        <svg width="50px" height="50px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Icon</span> From system</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                  )} 
                      </div>
                      {iconSrc  && <span className='text-gray-600 text-md'>Change Icon</span>}
                      <input id="icon" {...register('icon')}  type="file" name="icon" className="opacity-0" onChange={handleIconChange} />
                  </label>
              </div> 

            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
           
        </div>
    </form>
   </div>
  );
};

export default CreatePhase;