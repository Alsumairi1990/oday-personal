"use client";
import React, { ChangeEvent, useEffect } from "react";
import { Category, Location, Price, Service, Tag, Tool, Work } from "@prisma/client";
import { useState } from "react";
import { IoIosArrowDown, IoMdCloseCircle } from "react-icons/io";
import { BiBlanket, BiCategory, BiSolidCommentEdit } from "react-icons/bi";
import Image from "next/image";
import {
  MdAssignmentAdd,
  MdPlaylistAdd,
 
} from "react-icons/md";

import { LuAlertOctagon, LuBadgeDollarSign } from "react-icons/lu";

import { FiEdit } from "react-icons/fi";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillEdit, AiOutlineSend } from "react-icons/ai";
import { FaTags, FaTools } from "react-icons/fa";
import { GrSelect, GrWorkshop } from "react-icons/gr";
import { addServiceCategories, addServicePrice, addServiceTags, addServiceTools, addServiceWorks, editLocationPrice, getServices, getWorks, removeServiceCategory, removeServiceTag, removeServiceTool, removeServiceWork } from "../_serviceActions/ServiceActions";
import { getCategories, getTags} from "../../common/_actions/Actions";
import { ServiceWithModels } from "../utils/ServiceWithModels";
import { addTestimonialCategory, getTestimonialWModelsById, removeTesimonialCategory } from "../../testimonials/_actions/Actions";
import { getTools } from "../../tools/_actions/Actions";
import { PriceWithModels } from "../prices/utils/PriceWithModels";
import { getServicePricesById } from "../prices/_actions/Actions";
import { getPriceByLocation } from "../../common/utils/PriceByLocation";
import { BsBrowserChrome } from "react-icons/bs";
import Link from "next/link";
import Decimal from 'decimal.js';
import { PriceDTO } from "../../common/utils/PriceDTO";
import { RiMenuAddLine } from "react-icons/ri";
import { getLocations } from "../../location/_actions/Actions";
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PriceSchema } from "../utils/PriceSchema";
// import { Decimal } from "@prisma/client/runtime/library";

interface FormEditProps {
  service: ServiceWithModels;
  colseModel: (value: boolean) => void;
}
const PricePanel = ({ service, colseModel }: FormEditProps) => {
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [serviceData, setServiceData] = useState<ServiceWithModels>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [menuElements, setMenuElements] = useState<Work[] | null>([]);
  const [showRemoveTool, setShowRemoveTool] = useState<boolean>(false);
  const [elementMenuShow, setElementMenuShow] = useState<boolean>(false);
  const [selectedMenuElements, setSelectedMenuElements] = useState<string>();
  const [selectedMenuElementId, setSelectedMenuElementId] = useState<string>();
  const [removedTool, setRemovedTool] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [priceAddShow, setPriceAddShow] = useState<boolean>(false);
  const [locationMenu, SetLocationMenu] = useState<boolean>(false);
  const [priceLoading, setPriceLoading] = useState<boolean>(true);
  const [removedRows, setRemovedRows] = useState<number>(0);
  const [trigger, setTrigger] = useState(0);
  const [groupedPrices, setGroupedPrices] = useState<Record<string, PriceWithModels[]>>({});
  const [price, setPrice] = useState<Price>();
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [imageSrc, setImageSrc] = useState<string>('');


  const [priceDTO, setPriceDTO] = useState<PriceDTO>();
  type inputType = z.infer<typeof PriceSchema>;
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(PriceSchema),
  });

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

    const plainData: any = {};
    formData.forEach((value, key) => {
      if (key === 'amount' || key === 'startPrice' || key === 'median' || key === 'discount') {
        plainData[key] = parseFloat(value as string);
      } else if (key === 'effectiveDate' || key === 'expiryDate') {
        plainData[key] = new Date(value as string);
      } else {
        plainData[key] = value;
      }
    });

    try {
      setLoading(true);
      const locationId = formData.get('locationId');
      if(service.id && selectedMenuElements) {
        const categ =  await addServicePrice(formData,service.id,Number(selectedMenuElementId));
        getPriceWmodel();
      }
      setLoading(false);
      setPriceAddShow(false);

    } catch (error:any) {
      setLoading(false);
      setError(error.message)
    }
  }

  



  const addSelectedService = (id: string, name: string) => {
    setSelectedMenuElements(name);
    setSelectedMenuElementId(id);
  };
  const unSelectedService = (id: string, name: string) => {
    setSelectedMenuElements('');
    setSelectedMenuElementId('');
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
  const addService = async () => {
    try {
        setLoading(true);
        if(selectedMenuElementId){
          // const numberArray = selectedMenuElementId.map(value => Number(value));
        // const result = await addServiceWorks(Number(service.id), selectedMenuElementId);
        // if(result) service = result;
        // if(result) setServiceData(result);
        }
        
        setError('');
       setSelectedMenuElements('');
    } catch (error:any) {
        setLoading(false);
        setError(error.message)
    }finally{
      setLoading(false)
    }
  }
  const removeElem = async ()=> {
    try {
      //   setLoading(true);
      //   const numberArray = selectedMenuElementsId.map(value => Number(value));
      //   const result = await removeServiceWork(service.id,removedTool);
      //   setServiceData(result);
      //   setLoading(false);
      //  setSelectedMenuElements('');
      //  setShowRemoveTool(false)
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
  }
  const getAllMenuElements = async () => {
    try {
      setLoading(true);
      const elements = await getWorks();
    //   const elements = await getServicePricesById(Number(id));
      setMenuElements(elements);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
  const getPriceWmodel = async ()=>{
    setPriceLoading(true);
    const elements = await getServicePricesById(service.id);
    const cov = await getPriceByLocation(elements);
    setGroupedPrices(cov);
    setPriceLoading(false);
  }
  const getAllLocation = async () => {
    try {
      setPriceLoading(true);
      const locationD = await getLocations();
      setLocationData(locationD);
      setError('');
    } catch (error:any) {
      setPriceLoading(false);
      setError(error.message)
    } finally{
      setPriceLoading(false);
    }

  }
  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
    setServiceData(service);
  }, []);
  useEffect(() => {
    getAllMenuElements();
    getAllLocation();
    getPriceWmodel();

  }, []);
  const handleSubmit2 = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('amount'));
    console.log(formData.get('startPrice'));
    console.log(formData.get('location'));
    console.log(formData.get('priceId'));
    const locationId = formData.get('locationId');
    const priceId = formData.get('priceId');
    try {
        setPriceLoading(true)
        if(service.id && locationId && priceId){
          const prices = await editLocationPrice(Number(service.id),String(priceId),Number(locationId),formData)
          const cov = await getPriceByLocation(prices);
          setGroupedPrices(cov);
        }
        setError('');
    } catch (error:any) {
      setPriceLoading(false);
      setError(error.message);
    } finally{
      setPriceLoading(false)
    }
  };
  return (
    <div className="h-auto flex flex-col items-center relative justify-center w-full m-auto ">
      {loading && (
        <div
          className=" w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className="loader-2 w-4"></div>
        </div>
      )}
        {error && <div className="py-3 my-1 flex items-center">
                    <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                    <span className="text-red-400 text-md">{error}</span>
                    </div>
                }
      
      <div className="p-2 w-full rounded-md my-6 bg-white border border-gray-300">
        
          <div className="px-2 w-full animate-modalSlide ">
            <div className="flex  pt-1 pb-2 ">
              <div className="flex gap-x-2 items-center">
                <span className="">
                  <LuBadgeDollarSign className="text-gray-700 text-xl" />
                </span>
                <span className="text-gray-700 text-md font-semibold">
                  Edit Prices
                </span>
              </div>
             
              <div className="ml-auto flex gap-x-2">
               
                <button
                  className={`ml-auto flex items-center px-1.5 py-0.5 rounded-md ${selectedMenuElements ? 'bg-gray-800' : 'bg-gray-500'}`}
                  // onClick={() =>  {addService()}}
                  disabled={selectedMenuElements === ''}
                >
                  <span className="text-gray-100 text-md">Save {selectedMenuElements}</span>
                </button>
              </div>
            </div>
             {error && (
                  <div className="py-3 my-1 border-t border-t-gray-300 flex items-center">
                    <LuAlertOctagon className="text-gray-500 mr-2 text-xl" />
                    <span className="text-red-400 text-md">{error}</span>
                  </div>
                )}
            <div className="p-2 w-full bg-slate-50 border border-gray-200">
              {groupedPrices &&
              
              <div>



<div className="grid grid-cols-3 relative px-4 py-3 gap-6">
        {priceLoading && (
                  <div
                    className=" w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center"
                    style={{ backdropFilter: "blur(2px)" }}
                  >
                    <div className="loader-2 w-4"></div>
                  </div>
                )}
{Object.keys(groupedPrices).map((location) => (

        <div key={location} className='border p-2 bg-white border-gray-200 shadow-md rounded-md'>
          {groupedPrices[location].map((price) => (
            
            <div key={price.id}>
                <div className="flex items-center p-1 pb-2 border-b border-b-gray-100 bg-ugray-100">
                    <div className="">
                        <h3 className='text-lg text-gray-800 font-medium'>{location}</h3>
                        <p className="text-sm text-gray-500"><span className="text-gray-700">{service.name}</span> Price Details in {location}</p>
                    </div>
                     {price.image ? (
                    <div className="w-20 h-14 bg-white border border-gray-200 p-1 ml-auto rounded-md overflow-y-hidden">
                        <img src={price.image} className='w-full h-full' alt="Price Image" />
                    </div>
                    ):(
                        <div className="h-36 "><span className="text-gray-400">Image</span></div>
                    )}
                </div>
                
            
              <div className="space-y-2 mt-2 pt-2">
               <form onSubmit={handleSubmit2}  className="">
                <div className="flex flex-wrap gap-x-2 ">
                  <div className='flex flex-48 flex-col rounded-md bor-gray-200 gap-y-1.5 items-center py-2'>
                      <div className="flex gap-x-2 items-center">
                          <span className=""><LuBadgeDollarSign className='text-base ' /> </span>
                          <span className=" font-medium text-gray-900 capitalize">main Price </span>
                      </div>
                      <input type="hidden" 
                          name='locationId'
                          className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                          value={price.locationId}
                          />
                      <input type="hidden" 
                          name='location'
                          className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                          value={location}
                          />
                      <input type="hidden" 
                      name='priceId'
                      className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                      value={price.id}
                      />
                      <div className="flex px-3 justify-center">
                        <input type="string" 
                          name='amount'
                          className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                          defaultValue={price.amount.toString()}
                          />
                      </div>
                  </div>
                  <div className='flex flex-48 flex-col gap-y-1.5 items-center py-2'>
                      <div className="flex gap-x-2 items-center">
                          <span className=""><BiBlanket className='text-base text-gray-700' /> </span>
                          <span className="text-gray-600 font-medium">Start Price: </span>
                      </div>
                      <div className="flex px-3 justify-center">
                        <input type="number" 
                          name='startPrice'
                          className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                          defaultValue={price.startPrice ? price.startPrice.toString() : 0}
                          />
                      </div>
                  </div>
                  <div className="py-2 mb-1 gap-x-1 mt-3 justify-center border-y border-y-gray-200 flex flex-100">
                    <div className='flex-48 flex justify-center items-center'>
                          <span className="text-gray-600 text-md font-medium">Median: </span>
                          <span className="text-gray-600 font-medium text-bxs px-1">|</span>
                          <span className="text-cyan-500  font-medium">
                               <input type="number" 
                                  name='median'
                                  className='border text-center border-gray-100 w-full py-0.5 px-1 rounded-md outline-none text-md bg-gray-50'
                                  defaultValue={price.median ? price.median.toString() : 0}
                                  />
                              </span>
                      </div>
                      <div className='flex-48 pl-1 flex justify-center items-center'>
                          <span className="text-gray-600 text-md font-medium">Currency: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>
                          <input type="text" 
                                  name='currency'
                                  className='border text-center border-gray-100 w-full py-0.5 px-1 rounded-md outline-none text-md bg-gray-50'
                                  defaultValue={price.currency ? price.currency : ''}
                                  />
                      </div>
                  </div>
                  <div className=" py-2  pl-3 flex flex-100 bg-gray-50 border border-gray-100 my-3 rounded-md items-center gap-x-2">
                      <span className=""><BsBrowserChrome className='text-cyan-700 text-base' /></span>
                      <span className="text-orange-600 font-medium">Discount: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>
                          <span className="pr-2 ">
                          <input type="number" 
                                  name='discount'
                                  className='border text-center border-gray-200 w-full py-0.5 px-1 rounded-md outline-none text-md bg-gray-100'
                                  defaultValue={price.discount ? price.discount.toString() : 0}
                                  />
                          </span>                      
                  </div>
                  <div className="justify-cente  border-t-gray-200 flex border-b pb-3 border-b-gray-200 flex-100">
                    <div className='flex-48 pl-3 flex flex-col gap-y-2 justcenter items-center'>
                          <span className="text-gray-600 text-md font-medium capitalize">Effective Date</span>
                          <span className="text-orange-500 text-md font-medium">{price.effectiveDate && price.effectiveDate.toLocaleDateString()}</span>
                          <input type="date" 
                            name='expiryDate'
                            className='border text-center border-gray-100 w-full py-0.5 rounded-md outline-none text-gray-700 text-md bg-gray-50'
                            defaultValue={price.effectiveDate ? price.effectiveDate.toLocaleDateString() : ''}
                            />
                      </div>
                      <div className='flex-48 flex flex-col gap-y-2 pl-3 justcenter items-center'>
                          <span className="text-gray-600 font-medium text-md capitalize">expiry Date</span>
                          <span className="text-orange-500 text-md font-medium"> {price.expiryDate && price.expiryDate.toLocaleDateString()}</span>
                          <input type="date" 
                            name='effectiveDate'
                            className='border text-center border-gray-100 w-full text-gray-700 py-0.5 rounded-md outline-none text-md bg-gray-50'
                            defaultValue={price.effectiveDate ? price.effectiveDate.toLocaleDateString() : ''}
                            />
                      </div>
                  </div>
                 
                </div>
                <div className="flex gap-x-2 px-2 flex-100 my-6  justify-center  ">
                
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-violet-600 border font-medium border-violet-600 hover:!bg-violet-800 text-white rounded-md py-1 flex-70">
                        <span className="">Edit Details</span>
                        <span className="pl-1"><AiOutlineSend className="text-base font-semibold text-white" /></span>
                    </button>
          
                  <button 
                      type='button'
                      className="inline-flex items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md flex-30">
                          <svg className="w-4 h-4 p-0.5 fill-red-500"  viewBox="0 0 32 32" >
                              <g fill="none" fill-rule="evenodd">
                              <path d="m0 0h32v32h-32z"/>
                              <path className="fill-red-500" d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                              </g>
                              </svg>
                  </button>
              </div>
                </form>
            </div>
          </div>
            
            

          ))}
          
        </div>

        
      ))}

      
        {/* adding new Price with Location Form     */}
        {priceAddShow && 
        <div className='border p-2 bg-white border-gray-200 shadow-md animate-modalSlide rounded-md'>
                  <div>
                  {/* <div className="px-2 pt-1  pb-1 mb-1 border-b border-b-gray-200">
                            <span className="text-md font-medium text-gray-600 ">
                              Creating new Locatiion with Price Details
                            </span>
                          </div> */}
                      <div className="flex items-center max-sm:flex-wrap p-1 pb-2 gap-x-2 border-b border-b-gray-100 bg-ugray-100">
                          
                          <div className="relative flex-70">
                            <button
                                type="button"
                                onClick={() => {
                                  SetLocationMenu((prevState) => {
                                    return !prevState;
                                  });
                                }}
                                className="flex w-full bg-gray-50  items-center border gap-x-3 py-1.5 border-gray-300  px-2 rounded-md"
                              >
                                <div className="text-md inline-flex text-gray-600 font-medium capitalize">
                                  {!selectedMenuElements ?( <span className="px-1">Adding Location</span>)
                                  : (
                                    <span className="text-md text-gray-600">{selectedMenuElements}</span>
                                  )}
                                </div>
                                <span className="ml-auto">
                                  <MdPlaylistAdd className="text-2xl text-gray-700" /> 
                                </span>
                              </button>
                              {locationMenu && locationData.length > 0 &&
                         <div className="p relative ">
                           <div className="absolute top-0.5 z-40 px-1 w-full shadow-md bg-white border border-gray-300 rounded">
                         {locationData.map(element => 
                          <div className=" relative border flex bg-white flex-wrap my-2 w-11.8/12 mx-auto items-center  border-gray-200 rounded-md max-sm:pb-3 ">
                                <div className="sm:flex-15 flex-100 h-8  rounded-l-md border-r border-r-gray-300">
                                  {element.image ? (
                                    <img
                                      className="  sm:h-full rounded-l-md"
                                      src={`${baseUrl}/${element?.image}`}
                                      alt=""
                                    />
                                  ) : (
                                    <span className="h-full  w-full text-sm text-gray-400 rounded-l-md inline-flex justify-center items-center">
                                      Ime
                                    </span>
                                  )}
                                </div>
                                <div className=" flex-100 sm:flex-65  sm:flex sm:mx-auto items-center bg-white border-r border-r-gray-300 rounded-l-md">
                                  <div className="pl-4  w-full">
                                    <div className="w-full flex items-center">
                                      <span className="text-md  text-black  font-medium">
                                        {element?.country}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-100 gap-x-2 sm:flex-20  justify-center items-center  ">
                                  <div className="inline-flex  z-20 bg-white  justify-center rounded-md">
                                    <label
                                      className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer"
                                      htmlFor="checkbox"
                                    >
                                      <input
                                        type="radio"
                                        className="before:content[''] peer relative h-[16px] w-[16px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                        id={String(element.id)}
                                        name="service"
                                        onChange={(e) => {
                                          const isChecked = e.target.checked;
                                          if (isChecked) {
                                            addSelectedService(
                                              String(element?.id),
                                              String(element.country)
                                            );
                                          } else {
                                            unSelectedService(
                                              String(element?.id),
                                              String(element.country)
                                            );
                                          }
                                        }}
                                      />
                                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-3 w-3"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          stroke="currentColor"
                                          stroke-width="1"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                             ) }
                             </div>
                             </div>
                             }
                             </div>
                             <div className="flex-30">
                             <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                            <div className="flex flex-col items-center h-7 justify-center px-2 pt-2 pb-0">
                                            {imageSrc ? (
                                            <Image className='rounded-md border w-full h-full border-gray-300 bg-white p-1'
                                                src={imageSrc}
                                                height={100}
                                                width={100}
                                                alt="Product Image"
                                                
                                            />
                                        ):(
                                              <div className="flex flex-col items-center">
                                              <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                                              </div>
                                        )} 
                                            </div>
                                            <input id="image" type="file" name="image" className="opacity-0 w-4 h-2" onChange={handleFileChange} />
                                        </label>
                        
                             </div>
                          </div>
                         

                      

                      
                
                  
                    <div className="space-y-2 pt-2">
                    <form  onSubmit={handleSubmit(saveUser)} className="">
                      <div className="flex flex-wrap gap-x-2 ">
                        <div className='flex flex-48 flex-col rounded-md bor-gray-200 gap-y-1.5 items-center py-2'>
                            <div className="flex gap-x-2 items-center">
                                <span className=""><LuBadgeDollarSign className='text-base ' /> </span>
                                <span className=" font-medium text-gray-900 capitalize">main Price </span>
                            </div>
                            <input type="hidden" 
                                name='locationId'
                                className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                                
                                />
                            <input type="hidden" 
                                name='location'
                                className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                                
                                />
                            <input type="hidden" 
                            name='priceId'
                            className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                            
                            />
                            <div className="flex px-3 justify-center">
                              <input
                                {...register('amount')}
                                type="string" 
                                name='amount'
                                className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                                
                                />
                              <span className="text-red-400 text-xs mt-2">{errors.amount?.message} </span>
                            </div>
                        </div>
                        <div className='flex flex-48 flex-col gap-y-1.5 items-center py-2'>
                            <div className="flex gap-x-2 items-center">
                                <span className=""><BiBlanket className='text-base text-gray-700' /> </span>
                                <span className="text-gray-600 font-medium">Start Price: </span>
                            </div>
                            <div className="flex px-3 justify-center">
                              <input type="number" 
                                {...register('startPrice')}
                                name='startPrice'
                                className='border text-center border-gray-100 w-full py-1 px-2 rounded-md outline-none text-md bg-gray-50'
                               
                                />
                                <span className="text-red-400 text-xs mt-2">{errors.startPrice?.message} </span>
                            </div>
                        </div>
                        <div className="py-2 mb-1 gap-x-1 mt-3 justify-center border-y border-y-gray-200 flex flex-100">
                          <div className='flex-48 flex justify-center items-center'>
                                <span className="text-gray-600 text-md font-medium">Median: </span>
                                <span className="text-gray-600 font-medium text-bxs px-1">|</span>
                                <span className="text-cyan-500  font-medium">
                                    <input type="number" 
                                        {...register('median')}
                                        name='median'
                                        className='border text-center border-gray-100 w-full py-0.5 px-1 rounded-md outline-none text-md bg-gray-50'
                                        />
                                        <span className="text-red-400 text-xs mt-2">{errors.median?.message} </span>
                                    </span>
                            </div>
                          
                            <div className='flex-48 pl-1 flex justify-center items-center'>
                                <span className="text-gray-600 text-md font-medium">Currency: </span>
                                <span className="text-gray-600 font-medium text-bxs px-2">|</span>
                                <input type="text" 
                                      {...register('currency')}
                                        name='currency'
                                        className='border text-center border-gray-100 w-full py-0.5 px-1 rounded-md outline-none text-md bg-gray-50'
                                        
                                        />
                                        <span className="text-red-400 text-xs mt-2">{errors.currency?.message} </span>
                            </div>
                        </div>
                        <div className="  items-center w-full">
                              <div className="relative flex w-full">
                              <textarea {...register('description')}   name="description" id="description" className="block pl-2 pt-3 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Price Description ..." required />
                              </div>
                          </div> 
                        <div className=" py-2  pl-3 flex flex-100 bg-gray-50 border border-gray-100 my-3 rounded-md items-center gap-x-2">
                            <span className=""><BsBrowserChrome className='text-cyan-700 text-base' /></span>
                            <span className="text-orange-600 font-medium">Discount: </span>
                                <span className="text-gray-600 font-medium text-bxs px-2">|</span>
                                <span className="pr-2 ">
                                <input type="number" 
                                    {...register('discount')}
                                        name='discount'
                                        className='border text-center border-gray-200 w-full py-0.5 px-1 rounded-md outline-none text-md bg-gray-100'
                                        />
                                </span>  
                                <span className="text-red-400 text-xs mt-2">{errors.discount?.message} </span>                    
                        </div>
                        <div className="justify-cente  border-t-gray-200 flex border-b pb-3 border-b-gray-200 flex-100">
                          <div className='flex-48 pl-3 flex flex-col gap-y-2 justcenter items-center'>
                                <span className="text-gray-600 text-md font-medium capitalize">Effective Date</span>
                                <input type="date" 
                                {...register('expiryDate')}
                                  name='expiryDate'
                                  className='border text-center border-gray-100 w-full py-0.5 rounded-md outline-none text-gray-700 text-md bg-gray-50'
                                  />
                                  <span className="text-red-400 text-xs mt-2">{errors.expiryDate?.message} </span>
                            </div>
                            <div className='flex-48 flex flex-col gap-y-2 pl-3 justcenter items-center'>
                                <span className="text-gray-600 font-medium text-md capitalize">expiry Date</span>
                                <input type="date" 
                                {...register('effectiveDate')}
                                  name='effectiveDate'
                                  className='border text-center border-gray-100 w-full text-gray-700 py-0.5 rounded-md outline-none text-md bg-gray-50'
                                  />
                                  <span className="text-red-400 text-xs mt-2">{errors.effectiveDate?.message} </span>
                            </div>
                        </div>
                      
                      </div>
                      <div className="flex gap-x-2 px-2 flex-100 my-6  justify-center  ">
                        <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-violet-600 border font-medium border-violet-600 hover:!bg-violet-800 text-white rounded-md py-1 flex-70">
                            <span className="">Create</span>
                            <span className="pl-1"><AiOutlineSend className="text-base font-semibold text-white" /></span>
                        </button>
                
                        <button 
                            type='button'
                            onClick={() => setPriceAddShow(false)}
                            className="inline-flex gap-x-1 text-md items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md flex-30">
                              <span className="text-md">Cancel</span>
                              <span className="">
                              <svg className="w-4 h-4 p-0.5 fill-red-500"  viewBox="0 0 32 32" >
                              <g fill="none" fill-rule="evenodd">
                              <path d="m0 0h32v32h-32z"/>
                              <path className="fill-red-500 " d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                              </g>
                              </svg>
                              </span>    
                        </button>
                    </div>
                      </form>
                  </div>
                </div>
                </div>
                }
                {/* end of adding new location with peicw details */}



                <div className='flex items-center justify-center bg-white shadow-md border rounded-md bor-gray-200 gap-y-1.5  py-2'>
                  <button 
                          type='button'
                          onClick={() => setPriceAddShow(true)}
                          className="inline-flex items-center flex-col gap-y-2 border shadow-md !border-gray-200 p-2  justify-center rounded-md ">
                              <span className="">
                              <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 11C3.5 9.10025 3.50106 7.72573 3.64199 6.67754C3.78098 5.64373 4.04772 5.00253 4.52513 4.52513C5.00253 4.04772 5.64373 3.78098 6.67754 3.64199C7.72573 3.50106 9.10025 3.5 11 3.5H13C14.8998 3.5 16.2743 3.50106 17.3225 3.64199C18.3563 3.78098 18.9975 4.04772 19.4749 4.52513C19.9523 5.00253 20.219 5.64373 20.358 6.67754C20.4989 7.72573 20.5 9.10025 20.5 11V13C20.5 14.8998 20.4989 16.2743 20.358 17.3225C20.219 18.3563 19.9523 18.9975 19.4749 19.4749C18.9975 19.9523 18.3563 20.219 17.3225 20.358C16.2743 20.4989 14.8998 20.5 13 20.5H11C9.10025 20.5 7.72573 20.4989 6.67754 20.358C5.64373 20.219 5.00253 19.9523 4.52513 19.4749C4.04772 18.9975 3.78098 18.3563 3.64199 17.3225C3.50106 16.2743 3.5 14.8998 3.5 13V11Z" stroke="#2A4157" stroke-opacity="0.24"/>
                            <path d="M12 8L12 16" stroke="#222222" stroke-linejoin="round"/>
                            <path d="M16 12L8 12" stroke="#222222" stroke-linejoin="round"/>
                            </svg>
                              </span>
                                  <span className="bg-redd-100 p-1.5 rounded-md hover:!bg-red-200 ">Add New</span>
                      </button>
                  </div>
               

      </div>

                    
      






                {showRemoveTool && <div className='fixed top-0 left-0 z-30 bg-[#00000018]  flex items-center justify-center h-full w-full '>
                        <div className="w-5/12 bg-white animate-modalEnter rounded-md shadow-lg p-4">
                              <div className="flex w-full border border-gray-300 bg-gray-200 rounded-md py-2.5 items-center px-3 border-b border-b-gray-300" style={{boxShadow:'0 6px 19px -13px #9f9494;'}}>
                                    <div className="flex items-center">
                                            <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                                        <span className="text-base font-semibold text-gray-600">Remove Service Tool</span>
                                    </div>
                                    <div className="ml-auto">
                                        <button type="button" onClick={() => setShowRemoveTool(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                </div>
                                <div className=" flex flex-col z-0 w-full mt-2 mb-5 group pt-2">
                                    <span className='text-red-500'>You are going to remove tool from service</span>
                                </div>
                                <div className="mt-2 p-2 flex justify-center">
                                <button 
                                onClick={ removeElem }
                                className='inline-flex py-1.5  items-center px-2 rounded-md bg-violet-600 ml-4 text-white text-[14px] capitalize'>
                                  Remove Service Tool
                                  </button>
                                  </div>
                        </div> 
                    </div>
                    }
                </div>

              }
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default PricePanel;