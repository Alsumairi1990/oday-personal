"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { FcAnswers, FcApprove, FcEditImage, FcShop } from "react-icons/fc";
import { LuAlertOctagon } from 'react-icons/lu';
import { FiEdit } from 'react-icons/fi';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineContentPasteGo } from 'react-icons/md';
import { ProjectWithModels } from '../_utils/ProjectWithModels';
import { editWorkBasicData, editWorkDescription, editWorkIcon, editWorkImage, getWorkWModelsById } from '../../works/_actions/Actions';
import { ProjectStatus } from '@prisma/client';
import { getProjectWModelsById } from '../_actions/Actions';
import { CiImageOn } from 'react-icons/ci';
import EditProjectDetails from './EditProjectDetails';


interface FormEditProps {
  id : string;
}
const EditTestimonial = ({ id}: FormEditProps) => {
  const [project, setProject] = useState<ProjectWithModels | null>(null); 
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [contentEdit, setContentEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); 
  const [loadingContent, setLoadingContent] = useState<boolean>(false); 
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [error, setError] = useState<string>(''); 
  const [basicEdit, setBasicEdit] = useState<boolean>(false);  
  const [categoryEdit, setCategoryEdit] = useState<boolean>(false); 
  const [removedTool , setRemovedTool] = useState<string>('');
  const [showRemoveTool , setShowRemoveTool] = useState<boolean>(false);  
  const [tagsEdit , setTagsEdit] = useState<boolean>(false); 
  const [touched, setTouched] = useState<boolean>(false);
  const [imageEdit,setImageEdit] = useState<boolean>(false);
  const [iconEdit,setIconEdit] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [iconSrc, setIconSrc] = useState<string | null>(null);


  useEffect(() => {
    console.log('tagsEdit state changed:', tagsEdit);
  }, [tagsEdit]);


  const getProjects = async () => {
    try {
        setLoadingPage(true)
        const data = await getProjectWModelsById(id);
         setProject(data);
        setLoadingPage(false)
    } catch (error:any) {
      setLoadingPage(false);
      setError(error.message)
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
  const add = async (dataForm:FormData) => {
    try {
     const data = await editWorkBasicData(Number(id),dataForm);
    //  if(data) setWork(data);
     console.log("after  added");
     setError('');
 } catch (error:any) {
    
     setError(error.message)
 }finally {
  console.log("finaaly");
  
}
  }
  
  const addBasic = async (dataForm:FormData) => {
    setLoading(true);
      console.log("start add"+ loading);
    await add(dataForm);
    setLoading(false);
    console.log("false");
   

  }
  
  const editIcon = async (data:FormData) => {
    console.log(data);
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data.toString());
    }   
    const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    fileInputs.forEach((fileInput) => {
      if (fileInput.files?.length) {
        formData.append(fileInput.name, fileInput.files[0]);
      } 
    });
    try {
         const data = await editWorkIcon(Number(id),formData);
        //  if(data) setWork(data);
         setError('');
         setIconEdit(false);
     } catch (error:any) {
         setError(error.message)
     }
 }
  const editImage = async (data:FormData) => {
     console.log(data);
     const formData = new FormData();
     for (const key in data) {
       formData.append(key, data.toString());
     }   
     const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
     fileInputs.forEach((fileInput) => {
       if (fileInput.files?.length) {
         formData.append(fileInput.name, fileInput.files[0]);
       } 
     });
     try {
          setLoading(true);
          const data = await editWorkImage(Number(id),formData);
          // if(data) setWork(data);
          setError('');
          setImageEdit(false);
          setLoading(false);
      } catch (error:any) {
        setLoading(false);
          setError(error.message)
      }
  }
  
  
  useEffect(() => {
      const { protocol, host } = window.location;
      setBaseUrl(`${protocol}//${host}`);
  }, []);

  useEffect(() => {
    getProjects();
  }, []);
const closeCategory = (flag:boolean) => {

}
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); 
  const formData = new FormData(event.currentTarget);
  addBasic(formData);
};
const handleTextArea = (content:string) => {
  setContent(content);
}
const editContent = async () => {
  try {
    setLoadingContent(true);
    const data = await editWorkDescription(Number(id),content);
    // setWork(data);
    setError('')
  } catch (error:any) {
    setLoadingContent(false)
    setError(error.message)
  }finally{
    setLoadingContent(false);
    setContentEdit(false);
  }
}

  return (
   <div className="h-auto flex items-center relative justify-center w-full m-auto py-4 ">
        {loadingPage && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
        {error && <div className="py-3 my-1 flex items-center">
                    <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                    <span className="text-red-400 text-md">{error}</span>
                    </div>
                }
           {project && 
             <div className="w-full">

                <div className="flex items-center flex-col">
                  <div className='bg-white p-2 rounded-md border border-gray-300 w-full'>
                    <div className="w-full relative grid rel sm:grid-cols-3 ">
                    {loading && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}

                      <div className="p2  relative rounded-md border border-gray-300">
                            {project.image  ? (<img className=' h-full opacity-70  rounded-md' src={`${baseUrl}/${project?.image}`} alt="" />)
                            :(
                              <div className="h-full w-full flex items-center justify-center border border-gray-300">
                                <CiImageOn className="text-[3rem] text-gray-500"  />
                              </div>
                             )
                             }
                            {!imageEdit ? (<div className="absolute flex space-x-2 top-3 right-3">         
                              <button
                                className="ml-auto flex items-center px-1.5 gap-x-1 py-0.5 rounded-md border border-gray-500 text-white bg-slate-800"
                                onClick={() =>  setImageEdit(true)}
                              >
                                <span className="text-gray-100 text-sm">Edit</span>
                                <span className=""><AiFillEdit className='text-gray-200 text-base'/> </span>
                              </button>
                          </div>):(
                          <div className="absolute bg-[#0000005c] items-center justify-center h-full w-full flex top-0 left-0">         
                            <form className='w-full ' action={editImage}>
                             <div className="flex items-center justify-center w-full">
                                <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50  hover:bg-gray-100">
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
                                    <input id="image"  type="file" name="image" className="opacity-0" onChange={handleFileChange} />
                                </label>
                                <div className="absolute bottom-2 right-2 flex gap-x-2">
                                <button
                                  onClick={ () => {setImageEdit(false)}}
                                 className='  text-gray-600 text-md border border-gray-300 font-medium bg-300 rounded px-2 py-1 capitalize'>cancel</button>
                                <button className='  text-gray-100 text-md font-medium bg-gray-800 rounded px-2 py-1 capitalize'>save image</button>
                                </div>
                          </div>
                        </form>
                        </div>
                          )}
                      </div>
                      
                      <div className="col-span-2 relative col-start-2 pl-5  ">
                         <div className="p-2 border-b flex items-center border-b-gray-200 pb-2">
                           <span className="text-gray-800 font-medium">
                             Edit Basic Data
                           </span>
                           <div className="ml-auto flex gap-x-2">
                           </div>
                          
                         </div>
                         <div className="flex">
                           <form onSubmit={handleSubmit} className="flex-80 px-2 pt-1.5  rounded-md justify-center">
                                <div className="p-1.5 capitalize text-md flex items-center rounded-md">
                                 <div className="flex-25 flex items-center border py-1 rounded-md pl-1">
                                   <span className='w-6 h-6 mr-2 items-center  justify-center rounded-md  inline-flex' ><FcEditImage className='text-3xl '/></span>
                                   <span className='text-gray-700 text-sm font-medium mr-1'>Title </span> 
                                   <span className='text-gray-500 text-bxs mx-1 ml-auto'>|</span> 
                                 </div>
                                 <div className="flex flex-75 pl-4 items-center">
                                  <input type="text" 
                                  name='title'
                                  onFocus={() => setTouched(true)}
                                  className='border border-gray-100 w-full py-1 px-2 rounded-md outline-none bg-gray-50'
                                  value={project.name  ?? ''}
                                  onChange={(e) => { setProject({ ...project, name: e.target.value }); setTouched(true)}}
                                  />
                                 </div>
                               </div>

                               <div className="p-1.5 capitalize text-md flex items-center rounded-md">
                                     <div className="flex-25 flex items-center border border-gray-200 py-1 rounded-md pl-1">
                                        <span className='w-6 h-6 mr-2 items-center  justify-center rounded-md  inline-flex' ><FcShop className='text-3xl '/></span>
                                        <span className='text-gray-700 text-sm font-medium mr-1 capitalize'>priority </span> 
                                        <span className='text-gray-500 text-bxs mx-1 ml-auto'>|</span> 
                                    </div>
                                    <div className="flex flex-75 pl-4 items-center">
                                    <input type="text" 
                                    name='priority'
                                    placeholder='-'
                                    onFocus={() => setTouched(true)}
                                    className='border border-gray-100 w-full py-1 px-2 rounded-md outline-none bg-gray-50'
                                    value={project.priority ?? ''}
                                    onChange={(e) =>{ setProject({ ...project, priority: e.target.value }); setTouched(true)}}
                                    />
                                    </div>
                               </div>

                               <div className="p-1.5 capitalize text-md flex items-center rounded-md ">
                                  <div className="flex-25 flex items-center border py-1 rounded-md pl-1">
                                    <span className='w-6 h-6 mr-2 items-center  justify-center rounded-md  inline-flex' ><FcAnswers className='text-3xl '/></span>
                                    <span className='text-gray-700 text-sm font-medium mr-1'>progress </span> 
                                    <span className='text-gray-500 text-bxs mx-1 ml-auto'>|</span> 
                                    </div>
                                    <div className="flex flex-75 pl-4 items-center">
                                    <input type="number" 
                                    name='progress'
                                    onFocus={() => setTouched(true)}
                                    className='border border-gray-100 w-full py-1 px-2 rounded-md outline-none bg-gray-50'
                                    value={project.progress ?? 0}
                                    onChange={(e) =>{ setProject({ ...project, progress: Number (e.target.value)  }); setTouched(true)}}
                                    />
                                    </div>
                               </div>

                               
                               <button
                               type='submit'
                                className={`ml-auto flex items-center absolute right-2 bottom-0 px-1.5 py-0.5 rounded-md ${touched === true ? 'bg-gray-800' : 'bg-gray-500'}`}
                                disabled={touched === false}
                              >
                                <span className="text-gray-100 text-sm">Save</span>
                              </button>

                             </form>
                             <div className="flex-20 p-2 pl-0 mb-5">
                                <div className="p-2 border shadow-md border-gray-300 h-full  relative rounded-md">
                                    {project.icon ?(  <img className=' h-full w-full opacity-70  rounded-md' src={`${baseUrl}/${project?.icon}`} alt="" />)
                                      :(
                                        <div className="h-full w-full flex items-center justify-center border border-gray-300">
                                          <CiImageOn className="text-[3rem] text-gray-500"  />
                                        </div>
                                      )
                                    }
                                    
                                    {!iconEdit ? (<div className="absolute flex space-x-2 top-3 right-3">         
                                    <button
                                        className="ml-auto flex items-center px-1.5 gap-x-1 py-0.5 rounded-md border border-gray-500 text-white bg-slate-800"
                                        onClick={() =>  setIconEdit(true)}
                                    >
                                        <span className="text-gray-100 text-xs">Edit</span>
                                        <span className=""><AiFillEdit className='text-gray-200 text-base'/> </span>
                                    </button>
                                </div>):(
                                <div className="absolute bg-[#0000005c] items-center justify-center h-full w-full flex top-0 left-0">         
                                    <form className='w-full ' action={editIcon}>
                                    <div className="flex items-center relative justify-center w-full">
                                        <label htmlFor="icon" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                            <div className="flex flex-col items-center h-16 justify-center px-2 pt-2 pb-0">
                                            {iconSrc ? (
                                            <Image className='rounded-md border w-full h-full border-gray-300 bg-white p-1'
                                                src={iconSrc}
                                                height={100}
                                                width={100}
                                                alt="Product Image"
                                                
                                            />
                                        ):(
                                              <div className="flex flex-col items-center">
                                              <svg width="50px" height="50px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Icon</span> </p>
                                              {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                              </div>
                                        )} 
                                            </div>
                                            {iconSrc  && <span className='text-gray-600 text-md'>Change Icon</span>}
                                            <input id="icon" type="file" name="icon" className="opacity-0" onChange={handleIconChange} />
                                        </label>
                                        <div className="absolute bottom-0.5 right-2 flex gap-x-2">
                                          <button
                                            onClick={ () => {setIconEdit(false)}}
                                          className='  text-gray-600 text-sm border border-gray-300 font-medium bg-300 rounded px-1.5 py-0.5 capitalize'>cancel</button>
                                          <button className='  text-gray-100 text-sm font-medium bg-gray-800 rounded px-1.5 py-0.5 capitalize'>save </button>
                                          </div>
                                    </div> 
                                </form>
                                </div>
                                )}
                            </div>

                             </div>
                          </div>
                       </div>
                       

                      
                    </div>
                    <div className="bg-white w-full px-3 pt-2 mt-3">
                      <EditProjectDetails id={id}  />
                    </div>
                    </div>

                    <div className="p-2 w-full relative rounded-md my-6 bg-white border border-gray-200">
                      {loadingContent && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
                      {!contentEdit ? (
                        <div className="px-2">
                          <div className="flex border-b border-b-gray-300 pt-1 pb-2">
                            <div className="flex gap-x-2 items-center">
                              <span className=""><MdOutlineContentPasteGo className='text-gray-700 text-xl' /> </span>
                              <span className="text-gray-700 text-md font-semibold">Service Content</span>
                            </div>
                            <button
                              className='ml-auto'
                              onClick={()=> setContentEdit(true)}>
                              <span className="ml-auto"><FiEdit className='text-lg' /></span>
                            </button>
                          </div>
                          <div className="p-2">
                            <p className="text-gray-600 py-2 line-clamp-4">
                              {project.description}
                            </p>
                          </div>
                      </div>
                      ):(
                      <div className="px-2 w-full">
                            <div className="flex  pt-1 pb-2">
                              <div className="flex gap-x-2 items-center">
                                <span className=""><MdOutlineContentPasteGo className='text-gray-700 text-xl' /> </span>
                                <span className="text-gray-700 text-md font-semibold">Edit Service Description</span>
                               
                              </div>
                              <div className="ml-auto flex gap-x-2">
                                  <button
                                    className='ml-auto flex items-center bg-gray-200 px-1.5 py-0.5 rounded-md'
                                    onClick={()=> setContentEdit(false)}>
                                    <span className="text-gray-700 text-md">Cancel</span>
                                  </button>
                                  <button
                                    className='ml-auto flex items-center bg-gray-800 px-1.5 py-0.5 rounded-md'
                                    onClick={()=> {setBasicEdit(false) , editContent()}}>
                                    <span className="text-gray-100 text-md">Save</span>
                                  </button>
                                  </div>
                            </div>
                            <div className="p-2 w-full bg-slate-50 border border-gray-100">
                              <textarea name="" 
                              onChange={(e) => handleTextArea(e.target.value)}
                              className="text-gray-600 focus:border  outline-indigo-300 line-clamp-5 w-full"
                              id="">
                              {project.description}
                              </textarea>
                            </div>
                        </div>
                      )}
                    </div>


                  <div className="w-full">
                      {/* <CategoryPanel work={work} colseModel={closeCategory}  /> */}
                    </div> 
                      
                     <div className="w-full">
                     {/* <TagPanel work={work} colseModel={closeCategory}  /> */}
                    </div> 
                    
                    <div className="w-full">
                     {/* <ToolPanel work={work} colseModel={closeCategory}  /> */}
                    </div> 
                   
                    <div className="w-full">
                     {/* <LocationPanel work={work} colseModel={closeCategory}  /> */}
                    </div> 
                </div>
             </div>
              }
   </div>
  );
};

export default EditTestimonial;