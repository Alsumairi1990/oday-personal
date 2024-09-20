"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { FaUserTie } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import validator from 'validator';
import { GrCheckmark, GrSelect } from "react-icons/gr";

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';
import { passwordStrength } from 'check-password-strength';
import { MdDone } from "react-icons/md";
import { LuAlertOctagon } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";


import { registerUser } from '@/utils/authActions';
import { toast } from 'react-toastify';
import { Category, Phase, Service, Tag, Testimonial } from '@prisma/client';
import Image from 'next/image';
import { MdAssignmentAdd } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

import { createServicePhase, getCategories, getTags, removeServicePhase, removeServiceWork } from '@/app/[locale]/admin/common/_actions/Actions';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TestimonialSchema } from '../_util/TestimonialSchema';
import { addTestimonial } from '../_actions/Actions';


type inputType = z.infer<typeof TestimonialSchema>;


const PhaseCreate = () => {
    const [testimonial, setTestimonial ]= useState<Testimonial | null>(); 
    const [categories, setCategories] = useState<Category[]>([]); 
    const [tags, setTags] = useState<Tag[]>([]); 
    const [imageSrc, setImageSrc] = useState<string | null>(null);
   const [iconSrc, setIconSrc] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const [showRemoveTool , setShowRemoveTool] = useState<boolean>(false);
   const [categoryShow , setCategoryShow] = useState<boolean>(false);
   const [searchTerm, setSearchTerm] = useState<string>('');

   const [phaseNames, setPhasesNames] = useState<string[]>([]);
   const [removedPhase , setRemovedPhase] = useState<string>('');
   const [selectedCategories , setSelectedCategories] = useState<string[]>([]);

   const [selectedTags, setSelectedTags] = useState<string[]>([]);
   const [trigger, setTrigger] = useState(0);
   const [baseUrl, setBaseUrl] = useState<string>('');
   const [tagShow , setTagShow] = useState<boolean>(false);
   
   const [selectedCategory , setSelectedCategory] = useState<string[]>([]);
   const [selectedTag , setSelectedTag] = useState<string[]>([]);



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
    resolver: zodResolver(TestimonialSchema),
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
  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
}, []);

  const addSelectedCategory= (selected:string,name:string)=>{
    setSelectedCategories(prevValues => {
        const newValues = [...prevValues, selected];
        setTrigger(trigger + 1);
        return newValues;
    });
    setSelectedCategory(prevValues => {
        const newValues = [...prevValues, name];
        setTrigger(trigger + 1);
        return newValues;
    });
   }


  const addSelectedTag= (selected:string,name:string)=>{
    setSelectedTags(prevValues => {
        const newValues = [...prevValues, selected];
        setTrigger(trigger + 1);
        return newValues;
    });
    setSelectedTag(prevValues => {
        const newValues = [...prevValues, name];
        setTrigger(trigger + 1);
        return newValues;
    });
   }


   const unSelectedCategory = (id:string,name:string) => {
    setSelectedCategories(prevValues => {
        const newValues = prevValues.filter(item => item !== id);
        setTrigger(trigger + 1); 
        return newValues;
    });

    setSelectedCategory(prevValues => {
        const newValues = prevValues.filter(item => item !== name);
        setTrigger(trigger + 1); 
        return newValues;
    });
   }
   const unSelectedTag = (id:string,name:string) => {
    setSelectedTags(prevValues => {
        const newValues = prevValues.filter(item => item !== id);
        setTrigger(trigger + 1); 
        return newValues;
    });

    setSelectedTag(prevValues => {
        const newValues = prevValues.filter(item => item !== name);
        setTrigger(trigger + 1); 
        return newValues;
    });
   }

 
    
    
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
        const testimonial =  await addTestimonial(formData,selectedCategories,selectedTags);
        setTestimonial(testimonial)
        setLoading(false);

      } catch (error:any) {
        setLoading(false);
        setError(error.message)
      }
    }
 
      const getAllCategories = async ()=> {
        try {
            setLoading(true);
            const names = await getCategories();
            setLoading(false);
            setCategories(names);
            setError(null); 
        } catch (error:any) {
            setError(error.message || 'An unexpected error occurred');
            setLoading(false);
        }
      }
      const getAllTags = async ()=> {
        try {
            setLoading(true);
            const names = await getTags();
            setLoading(false);
            setTags(names);
            setError(null); 
        } catch (error:any) {
            setError(error.message || 'An unexpected error occurred');
            setLoading(false);
        }
      }
      useEffect(() => {
        getAllCategories();
        getAllTags();
      }, []);
      const empty = () => {
        setSelectedCategories([]);
      }
  return (
   <div className="w-full sm:w-11.8/12 m-auto relative p-4 bg-white rounded-md border border-gray-200">
        {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
        <div className="px-2 py-2.5 w-full flex items-center rounded-md bg-[#7648e5] mb-3">
                <div className="flex items-center">
                <span className=""><MdAssignmentAdd className='text-white text-2xl mr-2' /> </span>
                <span className="text-base text-white">
                  Adding Testimonials </span> 
                </div>
               </div>
        
        {error && <div className="py-3 my-1 flex items-center">
        <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
        <span className="text-red-400 text-md">{error}</span>
        </div>
      }
      {testimonial && <span className="text-gray-700">{testimonial.title}</span>

      }
       
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40  border border-gray-200 p-5 rounded-md">
        <div className="grid grid-cols-1">
        
            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="title" className="font-medium mb-1.5 text-sm  text-gray-600 dark:text-gray-400 duration-300 "> Title</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('title')}  type="text" name="title" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Phase title  ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
            </div>
            <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="startPrice" className="font-medium mb-2 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Start Price</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input 
                           {...register('rating')}
                          type="number" name="rating" id="rating" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Start from  ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.rating?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="content" className="font-medium mb-1.5 text-sm  text-gray-600 dark:text-gray-400 duration-300 ">Testimonial Content</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('content')}  rows={rows} cols={cols}  name="content" id="description" className="block pl-2 pt-3 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.content?.message} </span>
            </div>

          

            <div className="py-2">
              <button type='button'
              onClick={()=>{setCategoryShow(prevState =>{if(prevState == false){setSelectedCategories([]);setSelectedCategory([])};return !prevState})}}
              className="flex w-full items-center border gap-x-3 py-2 border-gray-300  px-2 bg-gray-50 rounded-md">
                <GrSelect className='text-base text-gray-600' />
                {selectedCategory.length <1 ? (<span className="text-md inline-flex text-gray-600 font-medium">Select Category</span>)
                :
                (<div className="text-md inline-flex text-gray-600 font-medium capitalize">{selectedCategory.map(element =>(
                      <span className="px-1">{element} ,</span>
                ))}
                </div>)
                }
                <span className="ml-auto"><IoIosArrowDown className='text-xl text-gray-700' />
                </span>
              </button>
            </div>

            {categoryShow && <div className="p-3 border mb-5 shadow-md border-gray-200 animate-modalEnter rounded-md">
                    
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
                      {categories && categories.length > 0 ? (
                        categories.filter((element) =>
                            element.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                                            <span className="text-base  text-black  font-medium">{element?.name}</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="flex flex-100 gap-x-2 sm:flex-20  justify-center items-center  ">
                            <div className="inline-flex  z-20 bg-white  justify-center rounded-md">
                                <label className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                        id={String(element.id)} 
                                        name={String(element.id)} 
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                            addSelectedCategory(String(element?.id), String(element.name));
                                            } else {
                                            unSelectedCategory(String(element?.id), String(element.name));
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
                    }
                    
             <div className="py-2">
                <button type='button'
                onClick={()=>{setTagShow(prevState =>{if(prevState == false){setSelectedTags([]);setSelectedTag([])};return !prevState})}}
                className="flex w-full items-center border gap-x-3 py-2 border-gray-300  px-2 bg-gray-50 rounded-md">
                  <GrSelect className='text-base text-gray-600' />
                  {selectedCategory.length <1 ? (<span className="text-md inline-flex text-gray-600 font-medium">Select Tags</span>)
                  :
                  (<div className="text-md inline-flex text-gray-600 font-medium capitalize">{selectedTag.map(element =>(
                        <span className="px-1">{element} ,</span>
                  ))}
                  </div>)
                  }
                  <span className="ml-auto"><IoIosArrowDown className='text-xl text-gray-700' />
                  </span>
                </button>
            </div>    
            {tagShow && <div className="p-3 border mb-5 shadow-md border-gray-200 animate-modalEnter rounded-md">
                    
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
                      {tags && tags.length > 0 ? (
                        tags.filter((element) =>
                            element.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                                            <span className="text-base  text-black  font-medium">{element?.name}</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="flex flex-100 gap-x-2 sm:flex-20  justify-center items-center  ">
                            <div className="inline-flex  z-20 bg-white  justify-center rounded-md">
                                <label className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                        id={String(element.id)} 
                                        name={String(element.id)} 
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            if (isChecked) {
                                            addSelectedTag(String(element?.id), String(element.name));
                                            } else {
                                            unSelectedTag(String(element?.id), String(element.name));
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
                    }    

            <div className=" flex flex-col z-0 w-full my-5 group">
                    <label htmlFor="videoContent" className="font-medium mb-1.5 text-sm  text-gray-600 dark:text-gray-400 duration-300 ">Video URL</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('videoContent')}  type="text" name="videoContent" id="videoContent" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.videoContent?.message} </span>
            </div>
            <div className="flex  justify-between">

              <div className="py-5 flex-40">
                <h3 className="mb-3 text-md font-medium text-gray-900 dark:text-white">Add and Publish Testimonial?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" {...register('published')}  id="hosting-small" defaultChecked name="publish" value="yes" className="hidden peer" required />
                        <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >                           
                            <div className="block">
                                <div className="w-full text-md font-medium">Drafts</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" {...register('published')} id="hosting-big" name="publish" value="no" className="hidden peer" />
                        <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >
                            <div className="block">
                                <div className="w-full text-md font-medium">Published</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                </ul>
                <span className="text-red-400 text-xs mt-2">{errors.published?.message} </span>

              </div>

              <div className="py-5 flex-40">
                <h3 className="mb-3 text-md font-medium text-gray-900  dark:text-white">Testimonial Verification?</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2  ">
                    <li>
                        <input type="radio" {...register('verified')}  id="verifyId" defaultChecked name="verified" value="yes" className="hidden peer" required />
                        <label htmlFor="verifyId" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >                           
                            <div className="block">
                                <div className="w-full text-md font-medium">Unverify</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" {...register('verified')} id="un-verifyId" name="verified" value="no" className="hidden peer" />
                        <label htmlFor="un-verifyId" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >
                            <div className="block">
                                <div className="w-full text-md font-medium">Verify</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                </ul>
                <span className="text-red-400 text-xs mt-2">{errors.verified?.message} </span>

              </div>
             
            </div>

            <div className="flex items-center mb-4 justify-center w-full">
                    <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
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

           
 
            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
           
        </div>
    </form>
   </div>
  );
};

export default PhaseCreate;