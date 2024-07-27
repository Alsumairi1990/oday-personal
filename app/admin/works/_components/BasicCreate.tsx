"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { MdAssignmentAdd } from "react-icons/md";
import { BasicSchema } from '../utils/BasicSchema';
import { addBasic } from '../_actions/Actions';
import Image from 'next/image';




type inputType = z.infer<typeof BasicSchema>;

interface Props {
  addBasicId: (value: number) => void,
  closeModel: (value: boolean) => void
  }
const ToolCreate = ({addBasicId,closeModel}:Props) => {
    const [basic, setBasic] = useState<number>(0); // Use Category type
    const [error , setError] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [iconSrc, setIconSrc] = useState<string | null>(null);
     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(BasicSchema),
  });

  const closeMenu = (v:boolean)=> {
    closeModel(v);
    
  }

  const [numberValue, setNumberValue] = useState<number>(0);
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueAsString = event.target.value;
    const valueAsNumber = Number(valueAsString);

    setNumberValue(valueAsNumber);
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
        console.log("in");
        formData.append(key, data[key as keyof inputType].toString());
        // console.log("in"+formData.name);
      }
      console.log(JSON.stringify(formData, null, 2));

  
      try {
        const codeData =  await addBasic(formData);
        setBasic(codeData);
        addBasicId(codeData);
      } catch (error:any) {
         setError(error.message);
      }
    }
    
  return (
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40 p-6 ">
        <div className="grid grid-cols-1">
        {basic !=0 &&
        <div className=''><span className='text-green-500'>Sucessfully added :  </span></div>
          // <SuccessMessage status={basic}   closeMode={closeMenu}/>
        }
          {/* <div className="px-2 py-2.5 w-full flex items-center rounded-md bg-[#7648e5] mb-3">
                <div className="flex items-center">
                <span className=""><MdAssignmentAdd className='text-white text-2xl mr-2' /> </span>

                <span className="text-base text-white">
                  Adding Tag </span> 

                </div>
               </div> */}

          

            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="title" className="font-medium mb-1.5 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Title</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('title')}  type="text" name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="description" className="font-medium mb-1.5 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Tag Description</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('description')}   name="description" id="description" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>
            <div className="flex items-center mb-4 justify-center w-full">
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
                      <input id="icon" {...register('additionalImages')}  type="file" name="additionalImages" className="opacity-0" onChange={handleIconChange} />
                  </label>
              </div>

            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="highlights" className="font-medium mb-1.5 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">highlights</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input 
                          type="text"
                          {...register('highlights')}
                          name="highlights" id="highlights" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.highlights?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="client" className="font-medium mb-1.5 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">highlights</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input 
                          type="text"
                          {...register('client')}
                          name="client" id="client" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.highlights?.message} </span>
            </div>

            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
           
        </div>
    </form>
  );
};

export default ToolCreate;


