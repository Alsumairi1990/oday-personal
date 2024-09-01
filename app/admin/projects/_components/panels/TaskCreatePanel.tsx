"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { Task, Tool} from '@prisma/client';
import { LuAlertOctagon } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import Image from 'next/image'
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdOutlineAddCircle } from "react-icons/md";
import { TaskSchema } from '../../tasks/_utils/TaskSchema';
import { CreateTask } from '../../tasks/_actions/Actions';
import MenuPanel from '@/app/admin/common/utils/MenuPanel';



type inputType = z.infer<typeof TaskSchema>; 
interface Props {
    projectId : string,
    closeModel? : (value:boolean) => void
  }
  
const TaskCreatePanel = ({projectId,closeModel}:Props) => {
  const [toolName , setToolName ] = useState<string>('');
  const [tasks , setTasks ] = useState<Task[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [svalues, setSvalues] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(0);
    const [showDelete, setShowDelete] = useState(false);
    const [baseUrl, setBaseUrl] = useState<string>('');
    const [toolNames, setToolNames] = useState<Tool[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [showRemoveTool , setShowRemoveTool] = useState<boolean>(false);
    const [removedTool , setRemovedTool] = useState<string>(''); 
    const [selectedMenuElements , setSelectedMenuElements] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [iconSrc, setIconSrc] = useState<string | null>(null);
    const [menuElements, setMenuElements] = useState<string[]>([ 'PLANNED',
      'IN_PROGRESS',
      'COMPLETED',
      'ON_HOLD',
      'CANCELLED']); 
    const [menuShow, setMenuShow] = useState<boolean>(false); 
     const {
      register,
      handleSubmit,
      reset,
      control,
      watch,
      formState: { errors },
    } = useForm<inputType>({
      resolver: zodResolver(TaskSchema),
    });
  const rows = 5;
  const cols = 5;
  const saveTask: SubmitHandler<inputType> = async (data)=>{
    alert("called");
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key as keyof inputType]!.toString());

    }
    const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    fileInputs.forEach((fileInput) => {
      if (fileInput.files?.length) {
        formData.append(fileInput.name, fileInput.files[0]);
      } 
    });
    console.log(JSON.stringify(formData, null, 2));
    try {
      setLoading(true);
      const codeData =  await CreateTask(formData,projectId);
      setTasks(codeData);
      setLoading(false);
    } catch (error:any) {
      setLoading(false);
       setError(error.message);
    }
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

  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
}, []);

const setSelect = (value:string) => {
  setSelectedMenuElements(value);
  
}
const unSelect = (value:string) => {
  setSelectedMenuElements('');
}
   
  
 
  const removeCategory  = async () => {
    
    try {
    //   setLoading(true);
    //   const tools = await removeProjectTool(projectId,removedTool);
    //   setLoading(false);
    //  setToolNames(tools);
     setError(null);
     setShowRemoveTool(false);
    } catch (error:any) {
      setError(error.message || 'An unexpected error occurred');
      setLoading(false);
    }
    
  }  
  
   
    useEffect(() => {

    }, []);

   
  return (
    <div className="w-full sm:w-5/12 max-sm:border relative max-sm:border-gray-300 mx-auto pb-0 bg-white  rounded-md">
    {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    <div className=" flex flex-wrap justify-between ">
          <div className="flex w-full bg-gray-100 rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300">
                <div className="flex items-center">
                    <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                    <span className="text-[.96rem] font-medium text-gray-600">Project Tasks</span>
                </div>
                <div className="ml-auto">
                    <button type="button" onClick={() => {if(closeModel) closeModel(false)}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
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
       <div className="max-h-[95vh] sm:max-h-[80vh] relative overflow-y-auto scr-container">
          <form onSubmit={handleSubmit(saveTask)} className="text-start z-40  rounded-md ">
              <div className="flex flex-wrap py-0 pt-6 px-6 justify-between">
           

                  <div className=" flex flex-100 flex-col z-0 w-full mb-5 group">
                          <label htmlFor="name" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 "> Name</label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input {...register('name')}  type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-100 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Poeject Name  ..." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
                  </div>

                  <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                          <label htmlFor="priority" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 "> Priority</label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input {...register('priority')}  type="text" name="priority" id="priority" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-100 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="'Low', 'Medium', 'High' ...." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.priority?.message} </span>
                  </div>
                
                  <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                          <label htmlFor="estimatedHours" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 capitalize "> estimated Hours</label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input {...register('estimatedHours')}  type="number" name="estimatedHours" id="estimatedHours" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-100 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="'Low', 'Medium', 'High' ...." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.estimatedHours?.message} </span>
                  </div>
                  <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                          <label htmlFor="actualHours" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 capitalize "> actual Hours</label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input {...register('actualHours')}  type="number" name="actualHours" id="actualHours" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-100 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="'Low', 'Medium', 'High' ...." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.estimatedHours?.message} </span>
                  </div>
                  <div className="flex-48 z-0 w-full mb-5 ">
                      <label htmlFor="progress" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Progress</label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input 
                                type="number"
                                {...register('progress')}
                                name="progress" id="progress" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-gray-100 border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="30% 40% 80%  ..." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.progress?.message} </span>
                  </div>
                  
                  <div className=" sm:flex-100  flex  flex-col z-10 w-full mb-5 ">
                              <label htmlFor="degree" className="font-medium mb-1.5 pl-0.5 text-sm text-gray-700 duration-300 capitalize">Project Status</label>
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
                            className="flex w-full bg-gray-100   items-center border gap-x-3 h-10 border-gray-200  px-2 rounded-2xl"
                          >
                            {selectedMenuElements != '' ? (
                              <span className="text-md inline-flex text-gray-600 font-medium">
                                 <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{selectedMenuElements}</span>
                              </span>
                            ) : (
                              <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                                <span className="px-1 capitalize text-sm">Task Status</span>
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
                          <span className="text-red-400 text-xs mt-2">{errors.status?.message} </span>
                  </div>

                  <div className=" flex flex-col z-0 w-full mb-5 group">
                          <label htmlFor="description" className="font-medium mb-1.5 text-sm  text-gray-700 dark:text-gray-400 duration-300 ">Project Description</label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <textarea {...register('description')} cols={cols} rows={rows}   name="description" id="description" className="block bg-gray-100 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Project Desctiption ...." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
                  </div>

                  <div className=" flex flex-col flex-48 z-0 mt-2 w-full mb-5 group">
                          <label htmlFor="dueDate" className="font-medium mb-2 text-sm  text-gray-700 duration-300 capitalize">due Date </label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input 
                                {...register('dueDate')}
                              type="date" name="dueDate" id="dueDate" className="block pl-2 h-10 px-2 z-0 w-full text-sm text-gray-500 bg-gray-100 border rounded-xl border-gray-300 after:focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Start Date  ..." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.dueDate?.message} </span>
                  </div>
                  <div className=" flex flex-col flex-48 z-0 mt-2 w-full mb-5 group">
                          <label htmlFor="completedAt" className="font-medium mb-2 text-sm  text-gray-700 duration-300 capitalize">completedAt </label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input 
                                {...register('completedAt')}
                              type="date" name="completedAt" id="completedAt" className="block pl-2 h-10 px-2 z-0 w-full text-sm text-gray-500 bg-gray-100 border rounded-xl border-gray-300 after:focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="end Date  ..." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.endDate?.message} </span>
                  </div>

                  <div className="flex flex-48 items-center mb-4 justify-center w-full">
                          <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100  hover:bg-gray-100">
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
                                <svg width="50px" height="50px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Image</span> From System</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                          )} 
                              </div>
                              {imageSrc  && <span className='text-gray-600 text-md'>Change Image</span>}
                              <input id="image" {...register('image')}  type="file" name="image" className="opacity-0 w-3 h-3" onChange={handleFileChange} />
                          </label>
                          {errors.image?.message && <p>{errors.image.message as string}</p>}

                  </div> 

                  <div className="flex flex-48 items-center mb-4 justify-center w-full">
                        <label htmlFor="icon" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100  hover:bg-gray-100">
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
                            <input id="icon" {...register('icon')}  type="file" name="icon" className="opacity-0 w-3 h-3" onChange={handleIconChange} />
                        </label>
                    </div> 

                    <div className=" flex flex-col flex-48 z-0 mt-2 w-full mb-5 group">
                          <label htmlFor="startDate" className="font-medium mb-2 text-sm  text-gray-700 duration-300 capitalize">Start Date </label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input 
                                {...register('startDate')}
                              type="date" name="startDate" id="startDate" className="block pl-2 h-10 px-2 z-0 w-full text-sm text-gray-500 bg-gray-100 border rounded-xl border-gray-300 after:focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Start Date  ..." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.startDate?.message} </span>
                  </div>
                  <div className=" flex flex-col flex-48 z-0 mt-2 w-full mb-5 group">
                          <label htmlFor="endDate" className="font-medium mb-2 text-sm  text-gray-700 duration-300 capitalize">end Date </label>
                          <div className="flex items-center w-full">
                              <div className="relative flex w-full">
                              <input 
                                {...register('endDate')}
                              type="date" name="endDate" id="endDate" className="block pl-2 h-10 px-2 z-0 w-full text-sm text-gray-500 bg-gray-100 border rounded-xl border-gray-300 after:focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="end Date  ..." required />
                              </div>
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.endDate?.message} </span>
                  </div>
              </div>
              <div className="flex-100 flex justify-center sticky bottom-0 w-full left-0 bg-white py-2 border-t border-t-gray-300">
                      <input type="submit" className="btn py-1.5 text-sm px-2 bg-indigo-600   border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 cursor-pointer text-white rounded-md" value="Create Basic Data" />
                  </div>
          </form>
       </div>
   </div>
   
  </div>
  );
};


export default TaskCreatePanel;

