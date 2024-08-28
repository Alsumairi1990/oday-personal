"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LuAlertOctagon } from "react-icons/lu";
import Image from 'next/image';
import { MdAssignmentAdd, MdOutlineAddCircle } from "react-icons/md";
import { createTeam } from '../_actions/Actions';
import MenuPanel from '@/app/admin/common/utils/MenuPanel';
import { getLocationById, getLocations } from '@/app/admin/location/_actions/Actions';
import { TeamSchema } from '@/app/admin/employees-manage/teams/_utils/TeamSchema';
import { Team } from '@prisma/client';
type inputType = z.infer<typeof TeamSchema>;
interface Props{
    projectId:string,
    closeModel: (value:boolean) => void
}
const CreateTeam = ({projectId,closeModel}:Props) => {
    const [element, setElement ]= useState<Team>(); 
    const [imageSrc, setImageSrc] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [elementMenuShow, setElementMenuShow] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const [baseUrl,setBaseUrl] = useState<string>('');
   const [menuShow, setMenuShow] = useState<boolean>(false); 
   const [selectedMenuElements, setSelectedMenuElements] = useState<string>();
   const [menuElements, setMenuElements] = useState<string[]>([]); 



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
    resolver: zodResolver(TeamSchema),
  });


  const setSelect = (value:string) => {
    setSelectedMenuElements(value);
    
  }
  const unSelect = (value:string) => {
    setSelectedMenuElements('')
  
  }

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
  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
}, []);
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
        if(selectedMenuElements){
          const result =  await createTeam(formData,selectedMenuElements,projectId);
          setElement(result)
        }
        
        setLoading(false);

      } catch (error:any) {
        setLoading(false);
        setError(error.message)
      }
    }
    const closePanel = (flag:boolean) => {
      setElementMenuShow(flag);
    }
    const getAllLocations = async () =>{
      try {
        setLoading(true);
        const elements = await getLocations();
        const countries = elements.map(location => location.country);
        setMenuElements(countries);
        setLoading(false);
        setError('')
      } catch (error:any) {
        setLoading(false);
        setError(error.message)
      }
    }
      useEffect(() => {
        getAllLocations();
      }, []);

    
  return (
   <div className="w-full sm:w-6/12 m-auto relative p-4 bg-white rounded-md border border-gray-200">
        {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
        <div className="px-2 py-2.5 w-full flex items-center rounded-md bg-indigo-600 mb-3">
                <div className="flex items-center">
                <span className=""><MdAssignmentAdd className='text-white text-2xl mr-2' /> </span>
                <span className="text-base text-white">
                  Adding Project Team </span> 
                </div>
                <div className="ml-auto">
                          <button type="button" 
                             onClick={() => closeModel(false)} 
                             className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span className="sr-only">Close modal</span>
                          </button>
                      </div>
               </div>
        
        {error && <div className="py-3 my-1 flex items-center">
        <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
        <span className="text-red-400 text-md">{error}</span>
        </div>
      }
        {element && <div className="py-3 my-1 flex items-center">
            <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
            <span className="text-green-400 text-md">Team has beed added : with name {element.name}</span>
            </div>
        }
       
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  border border-gray-200 p-5 rounded-md">
        <div className="flex flex-wrap justify-between">
        
            <div className=" flex flex-100 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="name" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 "> Title</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('name')}  type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Team name  ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
            </div>


            <div className=" sm:flex-48  flex  flex-col z-10 w-full mb-5 ">
                        <label htmlFor="degree" className="font-medium mb-2 pl-0.5 text-sm text-gray-600 duration-300 capitalize">Location</label>
                        <div className="flex flex-col  w-full ">
                        <button
                      type="button"
                      onClick={() => {
                        setMenuShow((prevState) => {
                          if (prevState == false) {
                            setSelectedMenuElements('');
                          }
                          return !prevState;
                        });
                      }}
                      className="flex w-full bg-gray-100   items-center border gap-x-3 py-2 border-gray-300  px-2 rounded-2xl"
                    >
                      {selectedMenuElements != '' ? (
                        <span className="text-md inline-flex text-gray-600 font-medium">
                         
                              <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{selectedMenuElements}</span>
                          
                        </span>
                      ) : (
                        <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                          <span className="px-1 capitalize text-sm">locations</span>
                        </div>
                      )}
                      <span className="ml-auto">
                        <MdOutlineAddCircle className="text-2xl border-2 border-violet-800 rounded-full text-violet-800" />
                      </span>
                    </button> 
                      {menuShow &&
                      <div className="relative z-50">
                        <MenuPanel menuElements={menuElements} setSelect={setSelect} unSelect={unSelect} />
                      </div>
                          }
                        </div> 
                </div>

                
            <div className="flex flex-48  justify-between">
              <div className=" flex-100 ">
                <h3 className="mb-1.5 text-md font-medium text-gray-600 dark:text-white">Team Status ? </h3>
                <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                    <li>
                        <input type="radio" {...register('status')}  id="status-1" defaultChecked name="publish" value="yes" className="hidden peer" required />
                        <label htmlFor="status-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >                           
                            <div className="block">
                                <div className="w-full text-md font-medium">Deactive</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" {...register('status')} id="status-2" name="publish" value="no" className="hidden peer" />
                        <label htmlFor="status-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >
                            <div className="block">
                                <div className="w-full text-md font-medium">Active</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                </ul>
                <span className="text-red-400 text-xs mt-2">{errors.status?.message} </span>
              </div>
            </div>
            <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="content" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 ">Meny Element description</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('description')}  rows={rows} cols={cols}  name="description" id="description" className="block pl-2 pt-3 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="MEnu Element description ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>

            <div className="flex flex-48 items-center  justify-center w-full">
                    <label htmlFor="icon" className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-2 pb-3">
                        {imageSrc ? (
                          <div className="w-28 border border-gray-300 p-0.5 bg-white rounded">
                             <img src={imageSrc} className='w-full rounded ' alt="" />
                          </div>
                      
                    ):(
                          <div className="flex flex-col items-center">
                          <svg width="50px" height="50px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload icon</span> From System</p>
                          </div>
                    )} 
                        </div>
                        {imageSrc  && <span className='text-gray-600 text-md'>Change icon</span>}
                        <input id="icon" {...register('icon')}  type="file" name="icon" className="opacity-0 h-2" onChange={handleFileChange} />
                    </label>
                    {errors.icon?.message && <p>{errors.icon.message as string}</p>}
            </div> 

            <div className="py-2 flex-100">
            <button
                      type="button"
                      onClick={() => {
                        setElementMenuShow((prevState) => {
                          if (prevState == false) {
                          }
                          return !prevState;
                        });
                      }}
                      className="flex w-full bg-gray-50 items-center border gap-x-3 py-2 border-gray-300  px-2 rounded-2xl"
                    >
                        <div className="text-md inline-flex text-gray-800 font-medium capitalize">
                          <span className="px-1 capitalize">Adding Inner Element</span>
                        </div>
                      <span className="ml-auto">
                        <MdOutlineAddCircle className="text-3xl border-2 border-violet-800 rounded-full text-violet-800" />
                      </span>
                    </button>
            </div>
            <div className="mb-4 mt-4 flex w-full">
                <input type="submit" className="btn px-3 ml-auto py-1.5  bg-indigo-600  hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded " value="Register" />
            </div>
        </div>
    </form>
    {/* {elementMenuShow && <AddMember teamId={Number(element?.id)} closeModel={closePanel}  /> } */}

   </div>
  );
};

export default CreateTeam;