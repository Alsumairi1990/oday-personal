'use client'
import React, { ChangeEvent, useRef } from 'react';
import {useState} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';



import { LuAlertOctagon } from "react-icons/lu";
import { MdAssignmentAdd, MdDone, MdOutlineAddCircle } from "react-icons/md";
import { MainPageSchema } from '../../_utils/MainPageSchema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import MenuPanel from '@/app/[locale]/admin/common/utils/MenuPanel';
import Image from 'next/image';
import { SectionSchema } from '../../../common/SectionSchema';
import { CreatePageSection } from '../_actions/Actions';

type inputType = z.infer<typeof SectionSchema>;


const CreateSection = () => {
    const [basic, setBasic] = useState<string>(''); // Use Category type
    const [error , setError] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [selectedMenuElement, setSelectedMenuElement] = useState<string>('');
    const [selectedTypeElement, setSelectedTypeElement] = useState<string>('');
    const [selectedMethod, setSelectedMethod] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const messageRef = useRef<HTMLDivElement>(null);

     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(SectionSchema),
  });
  const rows = 4;
  const cols = 4;
 
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

  const setSelect = (value:string) => {
    setSelectedMenuElement(value)
    
  }
  const unSelect = (value:string) => {
    setSelectedMenuElement('')
  }
  const typeSelect = (value:string) => {
    setSelectedTypeElement(value)
  }
  const unTypeSelect = (value:string) => {
    setSelectedTypeElement('')
  }
  const paymentSelect = (value:string) => {
    setSelectedMethod(value)
  }
  const unPaymentSelect = (value:string) => {
    setSelectedMethod('')
  }
 
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
        setLoading(true);
        const codeData =  await CreatePageSection(formData);
        setBasic(String(codeData));
        // addBasicId(codeData);
        setLoading(false);
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (error:any) {
        setLoading(false);
         setError(error.message);
         messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      }
    }
  return (
    <div  className="flex flex-wrap h-auto bg-white border border-gray-300 " >
        <div className="p-1 border-b border-b-gray-300 border-dashed flex py-3 items-center w-full">
           <div className="flex items-center pl-2">
                <span className=""><MdAssignmentAdd className="text-gray-600 text-2xl mr-2" /> </span>
                <span className="text-[.96rem] font-medium text-gray-600">Main Page Form</span>
            </div>
            {/* <div className="pl-1">
                <span className="text-gray-600 text-md font-medium">Product Form</span>
            </div> */}
        </div>
    <div id="add-main-panel" className="w-full relative  mx-auto add-main-panel bg-white mb-6 flex flex-col  rounded-md  borrder borrder-gray-200 bg-whitey">
           
            <form onSubmit={handleSubmit(saveUser)} className=" text-start z-40  ">
                {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
                
                <div className='px-4' ref={messageRef}>
                    {error && 
                    <div className="border-red-600 mt-4 flex w-full rounded-lg border-l-[6px] bg-red-200/30 px-7 py-4  sm:py-6">
                        <div className="bg-red-700 mr-5 flex h-8 w-9 items-center justify-center rounded-md">
                            <LuAlertOctagon  className='text-xl rounded-full border border-gray-50 p-0.5 text-white'  />
                        </div>
                        <div className="w-full">
                            <h5 className="mb-2 text-base font-semibold text-[#004434]">
                            Error While Creating 
                            </h5>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">
                            Error Alert : {error}
                            </p>
                        </div>
                    </div>
                    }
                    {basic !=='' &&
                    <div className="border-green-600 mt-4 flex w-full rounded-lg border-l-[6px] bg-green-200/30 px-7 py-4  sm:py-6">
                        <div className="bg-green-700 mr-5 flex h-8 w-9 items-center justify-center rounded-md">
                                <MdDone  className='text-xl rounded-full border border-gray-50 p-0.5 text-white'  />
                        </div>
                        <div className="w-full">
                            <h5 className="mb-2 text-base font-semibold text-[#004434]">
                                Order Created Successfully
                            </h5>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                Order Basic Data has been added with order id : ( {basic} )
                            </p>
                        </div>
                    </div>
                    }
                </div>

                <div className=" flex flex-wrap justify-between px-5 relative  pt-6 ">
                    <div className="flex pl-1 flex-100 mb-2 border-b pb-2">
                      <span className="tet-orange-600 font-semibold text-base  capitalize">
                      Service Category Section
                      </span>
                    </div>
                  <div className="p-4 w-full flex flex-wrap justify-between">
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

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="desc" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Section Decription </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('desc')} cols={cols} rows={rows}   name="desc" id="desc" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" Section Decription ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.desc?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="descAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 "> Area Decription Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('descAr')} cols={cols} rows={rows}   name="descAr" id="descAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" Section Decription Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.descAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="itemsNo" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> items number in area </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('itemsNo')}  type="number" name="itemsNo" id="itemsNo" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="number of items ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.itemsNo?.message} </span>
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
                   
                    <div className="flex sm:flex-25 mb-6 justify-between">
                        <div className=" flex-100 ">
                            <h3 className="mb-1.5 text-md font-medium text-gray-600 ">Show Status ? </h3>
                            <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                                <li>
                                    <input type="radio" 
                                    {...register('isActive')} 
                                    id="publish-1" defaultChecked name="isActive" value="yes" className="hidden peer" required />
                                    <label htmlFor="publish-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 " >                           
                                        <div className="block">
                                            <div className="w-full text-sm font-medium">Visiable</div>
                                        </div>
                                        <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" 
                                    {...register('isActive')}
                                    id="publish-2" name="isActive" value="no" className="hidden peer" />
                                    <label htmlFor="publish-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 " >
                                        <div className="block">
                                            <div className="w-full text-sm font-medium">Unvisiable</div>
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
    </div>
  
  )
};


export default CreateSection;
