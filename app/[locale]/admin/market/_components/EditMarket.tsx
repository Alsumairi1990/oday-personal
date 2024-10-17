"use client";
import React, { ChangeEvent, useEffect, useRef } from 'react';
import { Market } from '@prisma/client';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { IoMdCloseCircle } from "react-icons/io";
import { BiSolidCommentEdit } from "react-icons/bi";
import Image from 'next/image';
import { MarketSchema } from '../_utils/MarketSchema';
import { addBasic, editMarket, getLocations, getMarketByName } from '../_actions/Actions';
import { editCategory } from '../../category/_actions/Actions';
import MenuPanel from '../../common/utils/MenuPanel';
import { MdOutlineAddCircle } from 'react-icons/md';

interface FormEditProps {
  id: number;
}

const FormEdit = ({ id}: FormEditProps) => {
  const [market, setMarket] = useState<Market | null>(null); 
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [iconSrc, setIconSrc] = useState<string | null>(null);
  const [elements, setElements] = useState<Location[]>([]);
  const [selectedElement, setSelectedElement] = useState<string>('');
  const [selectedElement2, setSelectedElement2] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [error , setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [menuShow1, setMenuShow1] = useState<boolean>(false); 
  const [menuShow2, setMenuShow2] = useState<boolean>(false); 
  const [locationShow, setLocationShow] = useState<boolean>(false); 

  const [countries, setCountries] = useState<string[]>([]);
  const [countriesAr, setCountriesAr] = useState<string[]>([]);
  const messageRef = useRef<HTMLDivElement>(null);

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
  const typeSelect = (value:string) => {
    setSelectedElement(value)
  }
  const unTypeSelect = (value:string) => {
    setSelectedElement('')
  }
  const typeSelect2 = (value:string) => {
    setSelectedElement2(value)
  }
  const unTypeSelect2 = (value:string) => {
    setSelectedElement2('')
  }
  const selectLocation= (value:string) => {
  setSelectedLocation(value)
  }
  const deSelectLocation = (value:string) => {
    setSelectedLocation('')
  }

  const setMeueElements = async ()=>{
    try {
      setLoading(true);
      const elements = await getLocations();
      const countries = elements.map(element => element.country);
      const countriesArr = elements.map(element => element.countryAr ?? '');
      setCountriesAr(countriesArr);
        setCountries(countries);
      // setElements(elements)
      setLoading(false);
      setError('')
      
    } catch (error:any) {
      setLoading(false);
      setError(error.messages);
    }
  }
  useEffect(() => {
    setMeueElements();
    }, []);
 
  
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

  type inputType = z.infer<typeof MarketSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(MarketSchema),
  });

  const saveUser: SubmitHandler<inputType> = async (data) => {
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
     
      if(selectedElement !== ''){
        formData.append('name', selectedElement)
      }else {
        formData.append('name',String(market?.name))
      }

      if(selectedElement2 !== ''){
        formData.append('nameAr', selectedElement2)
      }else {
        formData.append('nameAr',String(market?.nameAr))
      }

      if(selectedLocation !== ''){
        formData.append('location', selectedLocation)
      }else {
        formData.append('location',String(market?.location))
      }
      console.log(JSON.stringify(formData, null, 2));
      try {
        setLoading(true);
        const codeData =  await editMarket(formData,Number(market?.id),market!);
        // setBasic(codeData);
        // addBasicId(codeData);
        setLoading(false);
        setError('')
        reset();
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (error:any) {
        setLoading(false);
         setError(error.message);
         messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      }
  };

  const getmarket = async () => {
    const marketDa = await getMarketByName(Number(id));
    setMarket(marketDa);
  };

  useEffect(() => {
    getmarket();
  }, []);

  useEffect(() => {
    if (market) {
      reset({
        description: market.description ?? '',
        descriptionAr: market.descriptionAr ?? '',
        // title: market.title ?? '',
        // titleAr: market.titleAr ?? '',
        // topTitle: market.topTitle ?? '',
        // topTitlAr: market.topTitlAr ?? '',

        image: undefined,
        icon: undefined,
      });
    }
    if(market?.image){setImageSrc(market?.image);}
    if(market?.icon){setIconSrc(market?.icon);}
    
  }, [market, reset]);

  return (
   <div className="items-center justify-center w-full m-auto z-50 p-6 ">
           <form onSubmit={handleSubmit(saveUser)} className='w-full bg-white rounded-md shadow-2xl pt-2' >
              
               <div className="p-2  w-[98%] mt-2 mx-auto z-40 flex items-center rounded-md bg-gray-200 mb-3">
                <div className="flex items-center">
                <span className=""><BiSolidCommentEdit className='text-gray-800 text-2xl mr-2' /> </span>

                <span className="text-base text-gray-800">
                  Edit market</span> 

                </div>
               </div>
               <div className="p-5 flex justify-between flex-wrap">
                  <div className=" sm:flex-48  flex  flex-col z-20 w-full mb-5 ">
                      <label htmlFor="degree" className="font-medium mb-1.5 pl-0.5 text-sm text-gray-700 duration-300 capitalize">Market Name</label>
                      <div className="flex flex-col  w-full ">
                      <button
                        type="button"
                        onClick={() => {
                          setMenuShow1((prevState) => {
                            if (prevState == false) {
                              setSelectedElement('');
                            }
                            return !prevState;
                          });
                        }}
                        className="flex w-full bg-gray-50   items-center border gap-x-3 h-10 border-gray-200  px-2 rounded-2xl"
                      >
                        {selectedElement != '' ? (
                          <span className="text-md inline-flex text-gray-600 font-medium">
                                <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{selectedElement}</span>
                          </span>
                        ) : market?.name ?(
                          <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                            <span className="px-1 capitalize text-sm">{market.name} </span>
                          </div>
                        ): (
                          <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                            <span className="px-1 capitalize text-sm">name </span>
                          </div>
                        )
                        }
                        <span className="ml-auto">
                          <MdOutlineAddCircle className="text-2xl border-2 border-violet-800 rounded-full text-violet-800" />
                        </span>
                        <input type="hidden" {...register('name')}  name="name" value={selectedElement} />

                      </button> 
                        {menuShow1 &&
                        <div className="relative z-50">
                          <MenuPanel menuElements={countries} setSelect={typeSelect} unSelect={unTypeSelect} />
                        </div>
                            }
                      </div> 
                      <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
                   </div>

                   <div className=" sm:flex-48 flex  flex-col z-20 w-full mb-5 ">
                          <label htmlFor="degree" className="font-medium mb-1.5 pl-0.5 text-sm text-gray-700 duration-300 capitalize">Market Name arabic </label>
                        <div className="flex flex-col  w-full ">
                          <button
                            type="button"
                            onClick={() => {
                              setMenuShow2((prevState) => {
                                if (prevState == false) {
                                  setSelectedElement2('');
                                }
                                return !prevState;
                              });
                            }}
                            className="flex w-full bg-gray-50   items-center border gap-x-3 h-10 border-gray-200  px-2 rounded-2xl"
                          >
                            {selectedElement2 != '' ? (
                              <span className="text-md inline-flex text-gray-600 font-medium">
                                    <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{selectedElement2}</span>
                              </span>
                            ) : market?.nameAr ?(
                              <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                                <span className="px-1 capitalize font-arabic text-sm">{market.nameAr} </span>
                              </div>
                            ): (
                              <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                                <span className="px-1 capitalize text-sm">name arabic</span>
                              </div>
                            )}
                            <span className="ml-auto">
                              <MdOutlineAddCircle className="text-2xl border-2 border-violet-800 rounded-full text-violet-800" />
                            </span>
                            <input type="hidden" {...register('nameAr')}  name="nameAr" value={selectedElement2} />
                          </button> 
                            {menuShow2 &&
                            <div className="relative z-50 font-arabic">
                              <MenuPanel menuElements={countriesAr} setSelect={typeSelect2} unSelect={unTypeSelect2} />
                            </div>
                                }
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.nameAr?.message} </span>
                    </div>


                  <div className=" flex-100  flex  flex-col z-10 w-full mb-5 ">
                              <label htmlFor="degree" className="font-medium mb-1.5 pl-0.5 text-sm text-gray-700 duration-300 capitalize">Location </label>
                              <div className="flex flex-col  w-full ">
                          <button
                            type="button"
                            onClick={() => {
                              setLocationShow((prevState) => {
                                if (prevState == false) {
                                  setSelectedLocation('');
                                }
                                return !prevState;
                              });
                            }}
                            className="flex w-full bg-gray-50   items-center border gap-x-3 h-10 border-gray-200  px-2 rounded-2xl"
                          >
                            {selectedElement2 != '' ? (
                              <span className="text-md inline-flex text-gray-600 font-medium">
                                    <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{selectedLocation}</span>
                              </span>
                            ): market?.location ?(
                              <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                                <span className="px-1 capitalize text-sm">{market.location} </span>
                              </div>
                            ) : (
                              <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                                <span className="px-1 capitalize text-sm">Location</span>
                              </div>
                            )}
                            <span className="ml-auto">
                              <MdOutlineAddCircle className="text-2xl border-2 border-violet-800 rounded-full text-violet-800" />
                            </span>
                            <input type="hidden" {...register('location')}  name="location" value={selectedLocation} />
                          </button> 
                            {locationShow &&
                            <div className="relative z-50 font-arabic">
                              <MenuPanel menuElements={countries} setSelect={selectLocation} unSelect={deSelectLocation} />
                            </div>
                                }
                          </div> 
                          <span className="text-red-400 text-xs mt-2">{errors.nameAr?.message} </span>
                  </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="title" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> title</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('title')}  type="text" defaultValue={market?.title}  name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="title...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="titleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> title arabic</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('titleAr')}  type="text" defaultValue={market?.titleAr} name="titleAr" id="titleAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Title Arabic...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.titleAr?.message} </span>
                    </div>

                   
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                       <label htmlFor="topTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Top Title </label>
                        <div className="flex items-center w-full">
                            <div className="relative flex w-full">
                            <input {...register('topTitle')}  type="text" defaultValue={market?.topTitle} name="topTitle" id="topTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Top Title ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.topTitle?.message} </span>
                    </div>
                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="topTitlAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Top Title Arabic </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('topTitlAr')}  type="text" defaultValue={market?.topTitlAr} name="topTitleAr" id="topTitleAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Top Title Arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.topTitlAr?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="description" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">description </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('description')} cols={5} rows={5}   name="description" id="description" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description  ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
                    </div>

                    <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                            <label htmlFor="descriptionAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Description Arabic </label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <textarea {...register('descriptionAr')} cols={5} rows={5}   name="descriptionAr" id="descriptionAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description arabic ...." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
                    </div>

               
                    <div className="sm:flex-48">
                        <div className="flex flex-col z-0 w-full mb-2 group">
                          <label htmlFor="description" className="font-medium mb-3 text-sm text-gray-500 dark:text-gray-400 duration-300">
                              market Image
                          </label>
                      </div>
                      <div className="flex items-center mb-4 justify-center w-full">
                          <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
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
                              <input id="image" {...register('image')}  type="file" name="image" className="opacity-0 h-4 w-4" onChange={handleFileChange} />
                          </label>
                          {errors.image?.message && <p>{errors.image.message as string}</p>}

                      </div> 
                  </div>

                  <div className="sm:flex-48">
                    
                      <div className="flex flex-col z-0 w-full  mb-2 ">
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
                              <input id="icon" {...register('icon')}  type="file" name="icon" className="opacity-0 h-4 w-4" onChange={handleIconChange} />
                          </label>
                      </div> 
                  </div>
                  <div className="mb-4 flex-100 sticky bottom-2">
                        <input type="submit" className="btn py-2.5 bg-slate-900  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Add Actegory" />
                    </div>
                  </div>
            </form> 
              
   </div>
  );
};

export default FormEdit;