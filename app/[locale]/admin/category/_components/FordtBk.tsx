"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { GrCheckmark } from "react-icons/gr";
import { Category, Service } from '@prisma/client';
import { useState } from 'react';
import { CategoryDTO } from '../util/CategoryDTO';
import Link from 'next/link';
import router from 'next/router';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { IoMdCloseCircle } from "react-icons/io";
import { BiSolidCommentEdit } from "react-icons/bi";
import Image from 'next/image';
import { VscCloudUpload } from "react-icons/vsc";


import { Input } from "@/components/ui/input"

import { editCategory, getCatByName } from '../_actions/Actions';
import { categoryParam } from '../util/CategoryParam';
import { formSchema } from '../util/formSchema';
interface FormEditProps {
    name: string;
  }
  type CategoryInput = Omit<Category, 'id' | 'slug' | 'userId' | 'createdAt' | 'updatedAt'>;

  

const FormEditBk = ({name}:FormEditProps) => {
  const [category, setCategory] = useState<Category | null>(null); 
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [iconSrc, setIconSrc] = useState<string | null>(null);
  

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // alert("---");
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
      // alert("---");
      const file = e.target.files?.[0];
          if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                  setIconSrc(reader.result as string);
              };
              reader.readAsDataURL(file);
          }
      };
      const fileSchema = z.instanceof(File, { message: "Required" })
      const imageSchema = fileSchema.refine(
        file => file.size === 0 || file.type.startsWith("image/")
      )

   
      type inputType = z.infer<typeof formSchema>;
      const transformToCategoryInput = (data: inputType): categoryParam => {
          return {
            name: data.category_name,
            description: data.description,
            image : data.image,
            icon : data.icon
      
            // Include other fields here if needed, or set default values
          };
        };
      const {
          register,
          handleSubmit,
          reset,
          control,
          watch,
          formState: { errors },
        } = useForm<inputType>({
          resolver: zodResolver(formSchema),
          defaultValues: {
            description: category?.description || '',
            category_name : category?.name || '',
            image: undefined,
            icon : undefined
          }
        });
        const saveUser: SubmitHandler<inputType> = async (data)=>{
          alert("called");

          const formData = new FormData();

          // Append form fields
          for (const key in data) {
            formData.append(key, data[key as keyof inputType].toString());
          }
          console.log("form data after converted"+formData);
          const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
          fileInputs.forEach((fileInput) => {
            if (fileInput.files?.length) {
              formData.append(fileInput.name, fileInput.files[0]);
            } else {
              // setFileErrors((prev) => ({ ...prev, [fileInput.name]: `${fileInput.name} is required` }));
            }
          })
          // formData.append('id',String(category?.id));
          // console.log("ppppppp"+data.image);
          // const files = data.image; 
          // if (files instanceof FileList) {
          //   console.log("size---" + files.length);
          //   for (let i = 0; i < files.length; i++) {

          //     const file = files[i];
          //     console.log(file.name); 
          //   }
          // }
  
          try{
              console.log("before call edit category");
              if (category?.id !== undefined) {
             await editCategory(formData,category?.id);}
             console.log("after call edit category");
              
          }catch(error){
              toast.error("soth77777ing went wrong"+error);
          }
      }
      const getCategory = async () =>{
        const categoryDa = await getCatByName(name);
             
        setCategory(categoryDa);
      }
      
      useEffect(() => {
        getCategory();
    }, []);

  return (
   <div className="fixed bg-[#0000003f] h-full flex overflow-hidden items-center justify-center w-full left-0 top-0 m-auto z-50 p-6 max-h[100vh]">
           {category && <form onSubmit={handleSubmit(saveUser)} className='w-6/12 bg-white rounded-md shadow-2xl scr-container overflow-y-auto h-[95vh]' >
              
               <div className="p-2 sticky top-1.5 w-[98%] mx-auto z-40 flex items-center rounded-md bg-[#7648e5] mb-3">
                <div className="flex items-center">
                <span className=""><BiSolidCommentEdit className='text-white text-2xl mr-2' /> </span>

                <span className="text-base text-white">
                  Edit Category</span> 

                </div>
                <span className="ml-auto"><IoMdCloseCircle className='text-3xl cursor-pointer text-white' /></span>
               </div>
               <div className="p-5">

              
                <div className=" flex flex-col z-0 w-full mb-5 group">
                            <label htmlFor="category_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Category Name</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('category_name')} type="text" name="category_name" id="category_name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                                </div>
                            </div> 
                            
                            <span className="text-red-400 text-xs mt-2">{errors.category_name?.message} </span>
                    </div>

                    <div className=" flex flex-col z-0 w-full mb-5 group">
                            <label htmlFor="description" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Categoty Description</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('description')}   type="text" name="description" id="description" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
                    </div>

                    <div className="flex flex-col z-0 w-full mb-5 group">
                      <label htmlFor="description" className="font-medium mb-3 text-sm text-gray-500 dark:text-gray-400 duration-300">
                          Category Image
                      </label>
                  </div>
                  <div className="flex items-center mb-4 justify-center w-full">
                      <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-2 pb-3">
                          {imageSrc ? (
                          <Image className=''
                              src={imageSrc}
                              height={200}
                              width={200}
                              alt="Product Image"
                          />
                      ):(
                           <div className="flex flex-col items-center">
                            <svg width="70px" height="70px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                      )} 

                          </div>
                          {imageSrc  && <span className='text-gray-600 text-md'>Change Image</span>}
                          <input id="image" {...register('image')}  type="file" name="image" className="opacity-0" onChange={handleFileChange} />
                      </label>
                      {errors.image?.message && <p>{errors.image.message as string}</p>}

                  </div> 
                            {/* <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span> */}

                  <div className="flex flex-col z-0 w-full pt-2 mb-2 mt-3 group border-t border-t-gray-200">
                      <label htmlFor="description" className="font-medium mb-3 text-sm text-gray-500 dark:text-gray-400 duration-300">
                          Icon
                      </label>
                  </div>
                  <div className="flex items-center mb-4 justify-center w-full">
                      <label htmlFor="icon" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-2 pb-3">
                          {iconSrc ? (
                          <Image className=''
                              src={iconSrc}
                              height={200}
                              width={200}
                              alt="Product Image"
                          />
                      ):(
                           <div className="flex flex-col items-center">
                            <svg width="50px" height="50px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                      )} 

                          </div>
                          {imageSrc  && <span className='text-gray-600 text-md'>Change Image</span>}
                          <input id="icon" {...register('icon')}  type="file" name="icon" className="hiddenv" onChange={handleIconChange} />
                      </label>
                  </div> 

                  


                    <div className="mb-4 sticky bottom-2">
                        <input type="submit" className="btn py-2.5 bg-slate-900  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Add Actegory" />
                    </div>
                    </div>
            </form> 
              }
   </div>
  );
};

export default FormEditBk;