"use client";
import React, { ChangeEvent, useEffect, useRef } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { MdDone, MdOutlineAddCircle } from 'react-icons/md';
import { LuAlertOctagon } from 'react-icons/lu';
import { MarketSchema } from '../_utils/MarketSchema';
import { addBasic, getLocations } from '../_actions/Actions';
import { Location } from '@prisma/client';
import MenuPanel from '../../common/utils/MenuPanel';
import CreatePage from './CreatePage';
import PagesPanel from './PagesPanel';




type inputType = z.infer<typeof MarketSchema>;


const CreateMarket = () => {
    const [basic, setBasic] = useState<number>(); // Use Category type
    const [error , setError] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [iconSrc, setIconSrc] = useState<string | null>(null);
    const [elements, setElements] = useState<Location[]>([]);
    const [selectedElement, setSelectedElement] = useState<string>('');  
    const [selectedElement2, setSelectedElement2] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [selectedPages, setSelectedPages] = useState<string[]>([]);
    const [selectedPagesId, setSelectedPagesId] = useState<number[]>([]);

    

    const [menuShow1, setMenuShow1] = useState<boolean>(false); 
    const [menuShow2, setMenuShow2] = useState<boolean>(false); 
    const [locationShow, setLocationShow] = useState<boolean>(false); 
    const [pageCreateShow, setPageCreateShow] = useState<boolean>(false); 
    const [basicId, setBasicId] = useState<number>(0);

    const [countries, setCountries] = useState<string[]>([]);
    const [countriesAr, setCountriesAr] = useState<string[]>([]);

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
    resolver: zodResolver(MarketSchema),
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

  const setSelect = (value:string,id:number) => {
    setSelectedPages(prevValues => {
      const newValues = [...prevValues, value];
      return newValues;
    });
    setSelectedPagesId(prevValues => {
      const newValues = [...prevValues, id];
      return newValues;
    });
  }
  const deSelect = (value:string,id:number) => {
  setSelectedPages(prevValues => {
    const newValues = prevValues.filter(item => item !== value);
    return newValues;
    });

    setSelectedPagesId(prevValues => {
      const newValues = prevValues.filter(item => item !== id);
      return newValues;
      });
  }

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
      setElements(elements)
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
     
      if(selectedElement !== ''){
        formData.append('name', selectedElement)
      }

      if(selectedElement2 !== ''){
        formData.append('nameAr', selectedElement2)
      }
      console.log(JSON.stringify(formData, null, 2));
      try {
        setLoading(true);
        const codeData =  await addBasic(formData);
        setBasic(codeData);
        setBasicId(codeData);
        setLoading(false);
        setError('')
        reset();
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (error:any) {
        setLoading(false);
         setError(error.message);
         messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      }
    }

    const closeModel = (value:boolean) => {
       setPageCreateShow(value);
    }
    
    
  return (
    // <div className=" bg-white"></div>
    <>
     <form onSubmit={handleSubmit(saveUser)} className=" text-start z-40 bg-white rounded-md border border-gray-200 ">
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
             {basic !== 0 &&
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
                ) : (
                  <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                    <span className="px-1 capitalize text-sm">name </span>
                  </div>
                )}
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
                  ) : (
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
                        <input {...register('title')}  type="text" name="title" id="title" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="title...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.title?.message} </span>
            </div>

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="titleAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> title arabic</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('titleAr')}  type="text" name="titleAr" id="titleAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Title Arabic...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.titleAr?.message} </span>
            </div>

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="topTitle" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Top Title </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('topTitle')}  type="text" name="topTitle" id="topTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Top Title ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.topTitle?.message} </span>
            </div>

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="topTitlAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> Top Title Arabic </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('topTitlAr')}  type="text" name="topTitleAr" id="topTitleAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Top Title Arabic ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.topTitlAr?.message} </span>
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

            <div className="flex flex-100 items-center mb-4 justify-center w-full">
                    <label htmlFor="icon" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                        <div className="flex flex-col w-26 items-center justify-center pt-2 pb-3">
                        {iconSrc ? (
                        <Image className='rounded-md w-full h-full'
                            src={iconSrc}
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
                        {iconSrc  && <span className='text-gray-600 text-md'>Change Icon</span>}
                        <input id="icon" {...register('icon')}  type="file" name="icon" className="opacity-0 w-3 h-3" onChange={handleIconChange} />
                    </label>
                    {errors.icon?.message && <p>{errors.icon.message as string}</p>}

            </div> 

         
            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="description" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">description </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('description')} cols={cols} rows={rows}   name="description" id="description" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description  ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="descriptionAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Description Arabic </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('descriptionAr')} cols={cols} rows={rows}   name="descriptionAr" id="descriptionAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description arabic ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>
            <div className=" flex sm:flex-100 flex-col z-0 w-full mb-5 group">
              <button 
                  type='button'
                  onClick={()=> setPageCreateShow(true)}
                  className='capitalize text-md w-full py-1 rounded border border-gray-300 bg-gray-50 text-gray-800'
                >
                add Pages
              </button>
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
    {pageCreateShow  && basicId > 0 &&
    <PagesPanel id={basicId} closePanel={closeModel} selectElement={setSelect} deSelectElement={deSelect} />
    }
    </>
    
  );
};

export default CreateMarket;


