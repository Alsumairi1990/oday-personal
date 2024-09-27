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
     <form onSubmit={handleSubmit(saveUser)} className="text-start z-40 py-4 ">
        {/* <div className="flex flex-wrap justify-between "> */}
        <div className=" flex flex-wrap justify-between px-5 max-h-[100vh] sm:max-h-[80vh] relative overflow-y-auto scr-container pt-6 ">

        {basic !=0 &&
          <SuccessMessage status={basic}   closeMode={closeMenu}/>
        }

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="name" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">  name english</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('name')}  type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="name ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
            </div>

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="nameAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">  name arabic</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('nameAr')}  type="text" name="nameAr" id="nameAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="name arabic ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.nameAr?.message} </span>
            </div>

            <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="title" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Title English</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('title')}  type="text" name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Title english ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
            </div>
            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="titleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">Title Arabic</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('titleAr')}  type="text" name="titleAr" id="titleAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Title Arabic...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.titleAr?.message} </span>
            </div>

            <div className=" flex flex-100 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="price" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">price</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('price')}  type="price" name="price" id="price" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Service Price for all Locations ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.price?.message} </span>
            </div>

            <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="description" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> description English</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('description')}  type="description" name="description" id="description" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description english ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>
            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="descriptionAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">description Arabic</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('descriptionAr')}  type="descriptionAr" name="descriptionAr" id="descriptionAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description Arabic...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.descriptionAr?.message} </span>
            </div>


            <div className="mb-4 sm:flex-40 ml-auto">
                <input type="submit" className="btn py-1.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded w-full" value="Register" />
            </div>
           
        </div>
    </form>
  );
};

export default ToolCreate;


