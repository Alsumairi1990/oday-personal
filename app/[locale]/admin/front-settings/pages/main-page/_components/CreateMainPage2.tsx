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

type inputType = z.infer<typeof MainPageSchema>;


const CreateMainPage2 = () => {
    const [basic, setBasic] = useState<string>(''); // Use Category type
    const [error , setError] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [iconSrc, setIconSrc] = useState<string | null>(null);
    const [selectedMenuElement, setSelectedMenuElement] = useState<string>('');
    const [selectedTypeElement, setSelectedTypeElement] = useState<string>('');
    const [selectedMethod, setSelectedMethod] = useState<string>('');

    const [menuElements, setMenuElements] = useState<string[]>([ 
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED",
      "ON_HOLD",
      "CANCELLED",]); 

    const [typeElements, setTypeElements] = useState<string[]>([ 'Service', 'Product']); 
    const [paymentElements, setPaymentElements] = useState<string[]>([ 'Visa', 'Bank Transfer','Cash']); 
    const [loading, setLoading] = useState<boolean>(false);

    const [typeMenu, setTypeMEnu] = useState<boolean>(false); 
    const [paymentMenu, setPaymentMenu] = useState<boolean>(false); 
    const [menuShow, setMenuShow] = useState<boolean>(false); 
    const messageRef = useRef<HTMLDivElement>(null);

     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(MainPageSchema),
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
        formData.append(key, data[key as keyof inputType]!.toString());

      }
      const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
      fileInputs.forEach((fileInput) => {
        if (fileInput.files?.length) {
          formData.append(fileInput.name, fileInput.files[0]);
        } 
      });
      if(selectedMenuElement !== ''){
        formData.append('status', selectedMenuElement)
      }
      if(selectedMethod !== ''){
        formData.append('paymentMethod', selectedMethod)
      }
      if(selectedTypeElement !== ''){
        formData.append('orderType', selectedTypeElement)
      }
      console.log(JSON.stringify(formData, null, 2));
      try {
        setLoading(true);
        // const codeData =  await addBasic(formData);
        // setBasic(codeData);
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
                    <div className=" flex flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceCatSectTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service Category Area Title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceCatSectTitle')}  type="text" name="ServiceCatSectTitle" id="ServiceCatSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Category Area Title ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectTitle?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceCatSectTitleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service Category Area Title Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceCatSectTitleAr')}  type="text" name="ServiceCatSectTitleAr" id="ServiceCatSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Category Area Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectTitleAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceCatSectDesc" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Service Category Area Decription </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('ServiceCatSectDesc')} cols={cols} rows={rows}   name="ServiceCatSectDesc" id="ServiceCatSectDesc" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Category Area Decription ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectDesc?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceCatSectDescAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Service Category Area Decription Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('ServiceCatSectDescAr')} cols={cols} rows={rows}   name="ServiceCatSectDescAr" id="ServiceCatSectDescAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Category Area Decription Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectDescAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceCatSectNo" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service Catefory number in area </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceCatSectNo')}  type="number" name="ServiceCatSectNo" id="ServiceCatSectNo" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="number of ctegories ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectNo?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceCatSectMore" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service Category More</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceCatSectMore')}  type="text" name="ServiceCatSectMore" id="ServiceCatSectMore" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectMore?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceCatSectMoreAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service Category More Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceCatSectMoreAr')}  type="text" name="ServiceCatSectMoreAr" id="ServiceCatSectMoreAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectMoreAr?.message} </span>
                    </div>
                   
                    <div className="flex sm:flex-25 mb-6 justify-between">
                        <div className=" flex-100 ">
                            <h3 className="mb-1.5 text-md font-medium text-gray-600 ">Show Status ? </h3>
                            <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                                <li>
                                    <input type="radio" 
                                    {...register('ServiceCatSectActive')} 
                                    id="publish-1" defaultChecked name="publish" value="yes" className="hidden peer" required />
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
                                    {...register('ServiceCatSectActive')}
                                    id="publish-2" name="publish" value="no" className="hidden peer" />
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
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectActive?.message} </span>
                        </div>
                        </div>
                  </div>




{/* 
                  <div className="flex pl-1 flex-100 mb-2 border-b pb-2">
                      <span className="tet-orange-600 font-semibold text-base  capitalize">
                      Service  Section
                      </span>
                  </div>
                  <div className="p-4 w-full flex flex-wrap justify-between">
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service  Area Title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceSectTitle')}  type="text" name="ServiceSectTitle" id="ServiceSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Service Area Title ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceSectTitle?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectTitleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service Area Title Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceSectTitleAr')}  type="text" name="ServiceSectTitleAr" id="ServiceSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Service Area Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectTitleAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectDesc" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Service Area Decription </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('ServiceSectDesc')} cols={cols} rows={rows}   name="ServiceSectDesc" id="ServiceCatSectDesc" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Services Area Decription ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceSectDesc?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectDescAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Service Area Decription Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('ServiceSectDescAr')} cols={cols} rows={rows}   name="ServiceSectDescAr" id="ServiceSectDescAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="ServicesArea Decription Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceCatSectDescAr?.message} </span>
                    </div>

                    <div className=" flex  sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectNo" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Services number in area </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceSectNo')}  type="number" name="ServiceSectNo" id="ServiceSectNo" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="number of services ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceSectNo?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectMore" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service More</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceSectMore')}  type="text" name="ServiceSectMore" id="ServiceSectMore" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceSectMore?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectMoreAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Service  More Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('ServiceSectMoreAr')}  type="text" name="ServiceSectMoreAr" id="ServiceSectMoreAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceSectMoreAr?.message} </span>
                    </div>
                   
                    <div className="flex sm:flex-25 mb-6 justify-between">
                        <div className=" flex-100 ">
                            <h3 className="mb-1.5 text-md font-medium text-gray-600 ">Show Status ? </h3>
                            <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                                <li>
                                    <input type="radio" 
                                    {...register('ServiceSectActive')} 
                                    id="ServiceSectActive-1" defaultChecked name="ServiceActive" value="yes" className="hidden peer" required />
                                    <label htmlFor="ServiceSectActive-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 " >                           
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
                                    {...register('ServiceSectActive')}
                                    id="ServiceSectActive-2" name="ServiceActive" value="no" className="hidden peer" />
                                    <label htmlFor="ServiceSectActive-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 " >
                                        <div className="block">
                                            <div className="w-full text-sm font-medium">Unvisiable</div>
                                        </div>
                                        <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                            <span className="text-red-400 text-xs mt-2">{errors.ServiceSectActive?.message} </span>
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




                  <div className="flex pl-1 flex-100 mb-2 border-b pb-2">
                      <span className="tet-orange-600 font-semibold text-base  capitalize">
                      Works  Section
                      </span>
                  </div>
                  <div className="p-4 w-full flex flex-wrap justify-between">
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkSectTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Works  Area Title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkSectTitle')}  type="text" name="WorkSectTitle" id="WorkSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Works Area Title ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectTitle?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkSectTitleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Works Area Title Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkSectTitleAr')}  type="text" name="WorkSectTitleAr" id="WorkSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Works Area Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectTitleAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkSectDesc" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Works Area Decription </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('WorkSectDesc')} cols={cols} rows={rows}   name="WorkSectDesc" id="WorkSectDesc" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Works Area Decription ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectDesc?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="ServiceSectDescAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Works Area Decription Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('ServiceSectDescAr')} cols={cols} rows={rows}   name="ServiceSectDescAr" id="ServiceSectDescAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Works Decription Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectDescAr?.message} </span>
                    </div>

                    <div className=" flex  sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkSectNo" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Works number in area </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkSectNo')}  type="number" name="WorkSectNo" id="WorkSectNo" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="number of works ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectNo?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkSectMore" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Works More</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkSectMore')}  type="text" name="WorkSectMore" id="WorkSectMore" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectMore?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkSectMoreAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Works  More Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkSectMoreAr')}  type="text" name="WorkSectMoreAr" id="WorkSectMoreAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectMoreAr?.message} </span>
                    </div>
                   
                    <div className="flex sm:flex-25 mb-6 justify-between">
                        <div className=" flex-100 ">
                            <h3 className="mb-1.5 text-md font-medium text-gray-600 ">Show Status ? </h3>
                            <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                                <li>
                                    <input type="radio" 
                                    {...register('WorkSectActive')} 
                                    id="WorkSectActive-1" defaultChecked name="WorkSectActive" value="yes" className="hidden peer" required />
                                    <label htmlFor="WorkSectActive-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 " >                           
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
                                    {...register('WorkSectActive')}
                                    id="WorkSectActive-2" name="WorkSectActive" value="no" className="hidden peer" />
                                    <label htmlFor="WorkSectActive-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 " >
                                        <div className="block">
                                            <div className="w-full text-sm font-medium">Unvisiable</div>
                                        </div>
                                        <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectActive?.message} </span>
                        </div>
                        </div>
                  </div>







                  <div className="flex pl-1 flex-100 mb-2 border-b pb-2">
                      <span className="tet-orange-600 font-semibold text-base  capitalize">
                      Blogs  Section
                      </span>
                  </div>
                  <div className="p-4 w-full flex flex-wrap justify-between">
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="BlogSectTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Blogs  Area Title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('BlogSectTitle')}  type="text" name="BlogSectTitle" id="BlogSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Blogs Area Title ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.BlogSectTitle?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="BlogSectTitleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Blogs Area Title Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('BlogSectTitleAr')}  type="text" name="BlogSectTitleAr" id="BlogSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Blogs Area Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.BlogSectTitleAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="BlogsSectDesc" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Blogs Area Decription </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('BlogSectDesc')} cols={cols} rows={rows}   name="BlogsSectDesc" id="BlogsSectDesc" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Blogs Area Decription ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.BlogSectDesc?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="SerBlogsSectDescAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Blogs Area Decription Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('BlogSectDescAr')} cols={cols} rows={rows}   name="BlogsSectDescAr" id="SerBlogsSectDescAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Blogs Decription Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.BlogSectDescAr?.message} </span>
                    </div>

                    <div className=" flex  sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkSectNo" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Works number in area </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkSectNo')}  type="number" name="WorkSectNo" id="WorkSectNo" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="number of works ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectNo?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="BlogSectMore" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Blogs More</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('BlogSectMore')}  type="text" name="BlogSectMore" id="BlogSectMore" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.BlogSectMore?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="BlogSectMoreAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Blogs  More Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('BlogSectMoreAr')}  type="text" name="BlogSectMoreAr" id="BlogSectMoreAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.BlogSectMoreAr?.message} </span>
                    </div>
                   
                    <div className="flex sm:flex-25 mb-6 justify-between">
                        <div className=" flex-100 ">
                            <h3 className="mb-1.5 text-md font-medium text-gray-600 ">Show Status ? </h3>
                            <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                                <li>
                                    <input type="radio" 
                                    {...register('BlogSectActive')} 
                                    id="BlogSectActive-1" defaultChecked name="BlogSectActive" value="yes" className="hidden peer" required />
                                    <label htmlFor="BlogSectActive-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 " >                           
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
                                    {...register('BlogSectActive')}
                                    id="BlogSectActive-2" name="WorkSectActive" value="no" className="hidden peer" />
                                    <label htmlFor="BlogSectActive-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 " >
                                        <div className="block">
                                            <div className="w-full text-sm font-medium">Unvisiable</div>
                                        </div>
                                        <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectActive?.message} </span>
                        </div>
                        </div>
                  </div> */}




                  <div className="flex pl-1 flex-100 mb-2 border-b pb-2">
                      <span className="tet-orange-600 font-semibold text-base  capitalize">
                      How It Works  Section
                      </span>
                  </div>
                  <div className="p-4 w-full flex flex-wrap justify-between">
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkMethSectTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> How it Works Area Title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkMethSectTitle')}  type="text" name="WorkMethSectTitle" id="WorkMethSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="How it Works  Area Title ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkMethSectTitle?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkMethSectTitleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> How it Works  Title Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkMethSectTitleAr')}  type="text" name="WorkMethSectTitleAr" id="WorkMethSectTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="How it WoWorkMetho Area Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkMethSectTitleAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkMethSectDesc" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">How it works Decription </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('WorkMethSectDesc')} cols={cols} rows={rows}   name="WorkMethSectDesc" id="WorkMethSectDesc" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="How it Works Decription ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkMethSectDesc?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkMethSectDescAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">How it Works Decription Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('WorkMethSectDescAr')} cols={cols} rows={rows}   name="WorkMethSectDescAr" id="WorkMethSectDescAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="How it Works Decription Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkMethSectDescAr?.message} </span>
                    </div>

                    <div className=" flex  sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkMethSectNo" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> phases number in area </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkMethSectNo')}  type="number" name="WorkMethSectNo" id="WorkMethSectNo" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="number of phases ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectNo?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkMethSectMore" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize">Phases  More</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkMethSectMore')}  type="text" name="WorkMethSectMore" id="WorkMethSectMore" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkMethSectMore?.message} </span>
                    </div>
                    <div className=" flex sm:flex-23 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="WorkMethSectMoreAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Phases More Arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('WorkMethSectMoreAr')}  type="text" name="WorkMethSectMoreAr" id="WorkMethSectMoreAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="More Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.WorkMethSectMoreAr?.message} </span>
                    </div>
                   
                    <div className="flex sm:flex-25 mb-6 justify-between">
                        <div className=" flex-100 ">
                            <h3 className="mb-1.5 text-md font-medium text-gray-600 ">Show Status ? </h3>
                            <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                                <li>
                                    <input type="radio" 
                                    {...register('BlogSectActive')} 
                                    id="BlogSectActive-1" defaultChecked name="BlogSectActive" value="yes" className="hidden peer" required />
                                    <label htmlFor="BlogSectActive-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 " >                           
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
                                    {...register('BlogSectActive')}
                                    id="BlogSectActive-2" name="WorkSectActive" value="no" className="hidden peer" />
                                    <label htmlFor="BlogSectActive-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 " >
                                        <div className="block">
                                            <div className="w-full text-sm font-medium">Unvisiable</div>
                                        </div>
                                        <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                            <span className="text-red-400 text-xs mt-2">{errors.WorkSectActive?.message} </span>
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


export default CreateMainPage2;
