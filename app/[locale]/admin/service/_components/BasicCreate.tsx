"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { MdAssignmentAdd } from "react-icons/md";
import { BasicSchema } from '../utils/BasicSchema';
import { addBasic } from '../_serviceActions/ServiceActions';
import SuccessMessage from '../utils/SuccessMessage';




type inputType = z.infer<typeof BasicSchema>;

interface Props {
  addBasicId: (value: number) => void,
  closeModel: (value: boolean) => void
  }
const ToolCreate = ({addBasicId,closeModel}:Props) => {
    const [basic, setBasic] = useState<number>(0); // Use Category type
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
      } catch (error) {
        toast.error("something went wrong" + error);
      }
    }
    
  return (
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40 p-6 ">
        <div className="grid grid-cols-1">
        {basic !=0 &&
          <SuccessMessage status={basic}   closeMode={closeMenu}/>
        }
          {/* <div className="px-2 py-2.5 w-full flex items-center rounded-md bg-[#7648e5] mb-3">
                <div className="flex items-center">
                <span className=""><MdAssignmentAdd className='text-white text-2xl mr-2' /> </span>

                <span className="text-base text-white">
                  Adding Tag </span> 

                </div>
               </div> */}

            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Tag Name</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('name')}  type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="title" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Tag Name</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('title')}  type="text" name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mb-5 group">
                    <label htmlFor="description" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Tag Description</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('description')}   name="description" id="description" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>

            <div className=" flex flex-col z-0 w-full mt-2 mb-5 group">
                    <label htmlFor="price" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Tag Name</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input 
                          type="number"
                          {...register('price')}
                          name="price" id="price" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.price?.message} </span>
            </div>

            <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
            </div>
           
        </div>
    </form>
  );
};

export default ToolCreate;


