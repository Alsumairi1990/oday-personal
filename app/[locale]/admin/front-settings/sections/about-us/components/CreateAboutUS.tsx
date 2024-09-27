"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { AboutUsSchema } from '../_utils/AboutUsSchema';
import { addAboutUs } from '../_actions/Actions';




type inputType = z.infer<typeof AboutUsSchema>;


const CreateAboutUS = () => {
    const [basic, setBasic] = useState<string>(''); // Use Category type
    const [error , setError] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [iconSrc, setIconSrc] = useState<string | null>(null);
  
    const [menuShow, setMenuShow] = useState<boolean>(false); 
     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(AboutUsSchema),
  });
  const rows = 5;
  const cols = 5;
  
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

 
 
    const saveUser: SubmitHandler<inputType> = async (data)=>{
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
        const codeData =  await addAboutUs(formData);
        setBasic(String(codeData));
        // addBasicId(codeData);
      } catch (error:any) {
         setError(error.message);
      }
    }
    
  return (
    <div className="pt-2">

  
     <form onSubmit={handleSubmit(saveUser)} className=" text-start z-40 bg-white  w-11.7/12 mx-auto ">
        <div className=" flex flex-wrap justify-between px-5 relative  pt-6 ">
        {basic !='' &&
        <div className=''><span className='text-green-500'>Sucessfully added | {basic} </span></div>
          // <SuccessMessage status={basic}   closeMode={closeMenu}/>
        }

<div className=" flex flex-100 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="name" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">  Section name</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('name')}  type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Section name ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
                    </div>
                    <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="title" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">  Section Title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('title')}  type="text" name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Section Title ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="titleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">Section Title Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('titleAr')}  type="text" name="titleAr" id="titleAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Section Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.titleAr?.message} </span>
                    </div>

                    <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="topTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">  top Title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('topTitle')}  type="text" name="topTitle" id="topTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="top Title ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.topTitle?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="topTitlAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">top Title Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('topTitlAr')}  type="text" name="topTitlAr" id="topTitlAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="top Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.topTitlAr?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="desc" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 "> Decription </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('description')} cols={cols} rows={rows}   name="description" id="description" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" Section Decription ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="descriptionAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">  Decription Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('descriptionAr')} cols={cols} rows={rows}   name="descriptionAr" id="descriptionAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" Section Decription Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.descriptionAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="more" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">  More</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('more')}  type="text" name="more" id="more" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.more?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="moreAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> More Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('moreAr')}  type="text" name="moreAr" id="moreAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.moreAr?.message} </span>
                    </div>

            

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="url" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> URL</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('url')}  type="text" name="url" id="url" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Section Title Arabic...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.url?.message} </span>
            </div> 
            <div className="flex flex-48 mb-6 justify-between">
              <div className=" flex-100 ">
                <h3 className="mb-1.5 text-md font-medium text-gray-600">Is Active ? </h3>
                <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                    <li>
                        <input type="radio" {...register('isActive')}  id="status-1" defaultChecked name="status" value="yes" className="hidden peer" required />
                        <label htmlFor="status-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 " >                           
                            <div className="block">
                                <div className="w-full text-sm font-medium">Deactive</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" {...register('isActive')} id="status-2" name="status" value="no" className="hidden peer" />
                        <label htmlFor="status-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 " >
                            <div className="block">
                                <div className="w-full text-sm font-medium">Active</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </label>
                    </li>
                </ul>
                <span className="text-red-400 text-xs mt-2">{errors.isActive?.message} </span>
              </div>
            </div>

            


           

            
           
    

            <div className="flex flex-100 items-center mb-4 justify-center w-full">
                    <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-2 pb-3">
                        {imageSrc ? (
                        <Image className='rounded-md w-26'
                            src={imageSrc}
                            height={100}
                            width={100}
                            alt="Product Image"
                        />
                    ):(
                          <div className="flex flex-col items-center">
                          <svg width="40px" height="40px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                          <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Upload Image</span> From System</p>
                          <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF </p>
                          </div>
                    )} 
                        </div>
                        {imageSrc  && <span className='text-gray-600 text-md'>Change Image</span>}
                        <input id="image" {...register('image')}  type="file" name="image" className="opacity-0 w-3 h-3" onChange={handleFileChange} />
                    </label>
                    {errors.image?.message && <p>{errors.image.message as string}</p>}

            </div> 
          
          
           
           
        </div>
        <div className="py-2 w-full flex  border-t-gray-300 left-0 bottom-0 bg-white pr-3">
                <div className="ml-auto">
                  <button type='button' className='px-2 py-1.5 mr-2 bg-gray-200 rounded text-gray-800 capitalize text-md'>
                    clear
                  </button>
                  <input type="submit" className="btn py-1.5 pr-3  text-md px-2 bg-indigo-600   border-indigo-600 hover:bg-indigo-800 hover:border-indigo-800 cursor-pointer text-white rounded-md" value="save data" />
                </div>
            </div>
    </form>
    </div>
  );
};

export default CreateAboutUS;


