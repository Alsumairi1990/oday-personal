"use client";
import React, { ChangeEvent, useEffect } from "react";
import { Category, Price, Service, Tag, Tool, Work } from "@prisma/client";
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
import { AiFillEdit } from "react-icons/ai";
import { FaTags, FaTools } from "react-icons/fa";
import { GrSelect, GrWorkshop } from "react-icons/gr";
import { addServiceCategories, addServiceTags, addServiceTools, addServiceWorks, getServices, getWorks, removeServiceCategory, removeServiceTag, removeServiceTool, removeServiceWork } from "../../service/_serviceActions/ServiceActions";
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
  const [selectedMenuElements, setSelectedMenuElements] = useState<string[]>([]);
  const [selectedMenuElementsId, setSelectedMenuElementsId] = useState<string[]>([]);
  const [removedTool, setRemovedTool] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [editPrice, setEditPrice] = useState<boolean>(false);

  const [removedRows, setRemovedRows] = useState<number>(0);
  const [trigger, setTrigger] = useState(0);
  const [groupedPrices, setGroupedPrices] = useState<Record<string, PriceWithModels[]>>({});
  const [price, setPrice] = useState<Price>();

  const [priceDTO, setPriceDTO] = useState<PriceDTO>();



  const addSelectedService = (id: string, name: string) => {
    setSelectedMenuElements(prevValues => {
      const newValues = [...prevValues, name];
      setTrigger(trigger + 1);
      return newValues;
  });
  setSelectedMenuElementsId(prevValues => {
    const newValues = [...prevValues, id];
    setTrigger(trigger + 1);
    return newValues;
});
  
   
  };
  const unSelectedService = (id: string, name: string) => {
    setSelectedMenuElements(prevValues => {
      const newValues = prevValues.filter(item => item !== name);
      setTrigger(trigger + 1); 
      return newValues;
  });

  setSelectedMenuElementsId(prevValues => {
        const newValues = prevValues.filter(item => item !== id);
        setTrigger(trigger + 1); 
        return newValues;
    });
  
  };
  const addService = async () => {
    try {
        setLoading(true);
        if(selectedMenuElementsId.length>0){
          const numberArray = selectedMenuElementsId.map(value => Number(value));
        const result = await addServiceWorks(Number(service.id), numberArray);
        if(result) service = result;
        if(result) setServiceData(result);
        }
        
        setError('');
       setSelectedMenuElements([]);
    } catch (error:any) {
        setLoading(false);
        setError(error.message)
    }finally{
      setLoading(false)
    }
  }
  const removeElem = async ()=> {
    try {
        setLoading(true);
        const numberArray = selectedMenuElementsId.map(value => Number(value));
        const result = await removeServiceWork(service.id,removedTool);
        setServiceData(result);
        setLoading(false);
       setSelectedMenuElements([]);
       setShowRemoveTool(false)
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
    const elements = await getServicePricesById(service.id);
    const cov = await getPriceByLocation(elements);
    setGroupedPrices(cov);
  }
  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
    setServiceData(service);
  }, []);
  useEffect(() => {
    getAllMenuElements();
    getPriceWmodel();

  }, []);
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
                  className={`ml-auto flex items-center px-1.5 py-0.5 rounded-md ${selectedMenuElements.length>0 ? 'bg-gray-800' : 'bg-gray-500'}`}
                  onClick={() =>  {addService()}}
                  disabled={selectedMenuElements.length<1}
                >
                  <span className="text-gray-100 text-md">Save {selectedMenuElements.length}</span>
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



<div className="grid grid-cols-3  px-4 py-3 gap-6">
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
                
             {editPrice ? (<div className="space-y-2 mt-2 pt-2">
                <div className="flex flex-wrap gap-x-2 ">
                  <div className='flex flex-48 flex-col bg-gray-100 rounded-md gap-y-1.5 items-center py-2'>
                      <div className="flex gap-x-2 items-center">
                          <span className=""><LuBadgeDollarSign className='text-base ' /> </span>
                          <span className=" font-medium text-gray-900 capitalize">main Price </span>
                      </div>
                      <div className="flex justify-center">
                      <span className="text-orange-600 font-medium">{price.amount && price.amount.toString()}</span>
                      </div>
                  </div>
                  <div className='flex flex-48 flex-col gap-y-1.5 items-center py-2'>
                      <div className="flex gap-x-2 items-center">
                          <span className=""><BiBlanket className='text-base text-gray-700' /> </span>
                          <span className="text-gray-600 font-medium">Start Price: </span>
                      </div>
                      <div className="flex justify-center">
                      <span className="text-orange-600 font-medium">{price.startPrice && price.startPrice.toString()}</span>
                      </div>
                  </div>
                  <div className="py-2 mb-1 mt-3 justify-center border-y border-y-gray-200 flex flex-100">
                    <div className='flex-48 flex justify-center items-center'>
                          <span className="text-gray-600 font-medium">Median: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>
                          <span className="text-cyan-500  font-medium"> {price.median && price.median.toString()}</span>
                      </div>
                      <div className='flex-48 flex justify-center items-center'>
                          <span className="text-gray-600 font-medium">Currency: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>

                          <span className="text-cyan-500 font-medium"> {price.currency }</span>
                      </div>
                  </div>
                  <div className=" py-2  pl-3 flex flex-100 bg-gray-50 border border-gray-100 my-3 rounded-md items-center gap-x-2">
                      <span className=""><BsBrowserChrome className='text-cyan-700 text-base' /></span>
                      <span className="text-orange-600 font-medium">Discount: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>

                          <span className="text-cyan-500 font-medium"> {price.discount && price.discount.toString()}%</span>
                      
                  </div>
                  <div className="justify-cente  border-t-gray-200 flex border-b pb-3 border-b-gray-200 flex-100">
                    <div className='flex-48 pl-3 flex flex-col gap-y-2 justcenter items-center'>
                          <span className="text-gray-600 font-medium capitalize">Effective Date</span>
                          <span className="text-orange-500  font-medium">{price.effectiveDate && price.effectiveDate.toLocaleDateString()}</span>
                      </div>
                      <div className='flex-48 flex flex-col gap-y-2 pl-3 justcenter items-center'>
                          <span className="text-gray-600 font-medium capitalize">expiry Date</span>
                          <span className="text-orange-500  font-medium"> {price.expiryDate && price.expiryDate.toLocaleDateString()}</span>
                      </div>
                  </div>
                 
                </div>
            </div>
            ):(
              <div className="space-y-2 mt-2 pt-2">
                <div className="flex flex-wrap gap-x-2 ">
                  <div className='flex flex-48 flex-col rounded-md gap-y-1.5 items-center py-2'>
                      <div className="flex gap-x-2 items-center">
                          <span className=""><LuBadgeDollarSign className='text-base ' /> </span>
                          <span className=" font-medium text-gray-900 capitalize">main Price </span>
                      </div>
                      <div className="flex justify-center">
                      <input type="number" 
                          name='amount'
                          className='border border-gray-100 w-full py-1 px-2 rounded-md outline-none bg-gray-50'
                          value={price.amount.toString() ?? 0}
                          // onChange={(e) =>{ setPrice({ ...price, amount: new Decimal(e.target.value) })}}
                          />
                      {/* <span className="text-orange-600 font-medium">{price.amount && price.amount.toString()}</span> */}
                      </div>
                  </div>
                  <div className='flex flex-48 flex-col gap-y-1.5 items-center py-2'>
                      <div className="flex gap-x-2 items-center">
                          <span className=""><BiBlanket className='text-base text-gray-700' /> </span>
                          <span className="text-gray-600 font-medium">Start Price: </span>
                      </div>
                      <div className="flex justify-center">
                      <span className="text-orange-600 font-medium">{price.startPrice && price.startPrice.toString()}</span>
                      </div>
                  </div>
                  <div className="py-2 mb-1 mt-3 justify-center border-y border-y-gray-200 flex flex-100">
                    <div className='flex-48 flex justify-center items-center'>
                          <span className="text-gray-600 font-medium">Median: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>
                          <span className="text-cyan-500  font-medium"> {price.median && price.median.toString()}</span>
                      </div>
                      <div className='flex-48 flex justify-center items-center'>
                          <span className="text-gray-600 font-medium">Currency: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>

                          <span className="text-cyan-500 font-medium"> {price.currency }</span>
                      </div>
                  </div>
                  <div className=" py-2  pl-3 flex flex-100 bg-gray-50 border border-gray-100 my-3 rounded-md items-center gap-x-2">
                      <span className=""><BsBrowserChrome className='text-cyan-700 text-base' /></span>
                      <span className="text-orange-600 font-medium">Discount: </span>
                          <span className="text-gray-600 font-medium text-bxs px-2">|</span>

                          <span className="text-cyan-500 font-medium"> {price.discount && price.discount.toString()}%</span>
                      
                  </div>
                  <div className="justify-cente  border-t-gray-200 flex border-b pb-3 border-b-gray-200 flex-100">
                    <div className='flex-48 pl-3 flex flex-col gap-y-2 justcenter items-center'>
                          <span className="text-gray-600 font-medium capitalize">Effective Date</span>
                          <span className="text-orange-500  font-medium">{price.effectiveDate && price.effectiveDate.toLocaleDateString()}</span>
                      </div>
                      <div className='flex-48 flex flex-col gap-y-2 pl-3 justcenter items-center'>
                          <span className="text-gray-600 font-medium capitalize">expiry Date</span>
                          <span className="text-orange-500  font-medium"> {price.expiryDate && price.expiryDate.toLocaleDateString()}</span>
                      </div>
                  </div>
                 
                </div>
            </div>
            )}

            <div className="flex gap-x-2 flex-100 my-7  justify-center  ">
                  <button className="inline-flex items-center justify-center bg-sky-100 border !border-sky-200 hover:!bg-sky-200 rounded-md py-1.5 flex-23">
                      <svg className="w-4 h-4"  viewBox="0 0 24 24" fill="none">
                      <path className="fill-sky-500" fill-rule="evenodd" clip-rule="evenodd" d="M19.2071 2.79312C17.9882 1.57417 16.0119 1.57417 14.7929 2.79312L5.68463 11.9014C5.30015 12.2859 5.0274 12.7676 4.89552 13.2951L4.02988 16.7577C3.94468 17.0985 4.04453 17.459 4.29291 17.7073C4.54129 17.9557 4.90178 18.0556 5.24256 17.9704L8.70513 17.1047C9.23263 16.9729 9.71437 16.7001 10.0988 16.3156L19.2071 7.20733C20.4261 5.98838 20.4261 4.01207 19.2071 2.79312ZM16.2071 4.20733C16.645 3.76943 17.355 3.76943 17.7929 4.20733C18.2308 4.64524 18.2308 5.35522 17.7929 5.79312L8.68463 14.9014C8.55647 15.0296 8.39589 15.1205 8.22006 15.1644L6.37439 15.6259L6.83581 13.7802C6.87976 13.6044 6.97068 13.4438 7.09884 13.3156L16.2071 4.20733Z"/>
                      <path className="fill-sky-500"   d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z" fill="#777"/>
                      </svg>
                  </button>
                  <button 
                   onClick={()=>{setEditPrice(false)}}
                   className="inline-flex items-center justify-center bg-blue-100 border !border-blue-200 hover:!bg-blue-200 rounded-md flex-23">
                      <svg className="w-4 h-4 fill-blue-500"  viewBox="0 0 48 48" >
                      <path d="M0 0h48v48H0z" fill="none"/>
                      <g id="Shopicon">
                          <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,14c7.072,0,12.741,6.584,15.201,9.992
                              C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z"/>
                          <path d="M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4
                              s-4-1.794-4-4C20,21.794,21.794,20,24,20z"/>
                      </g>
                      </svg>
                  </button>
                  <button 
                      type='button'
                      // onClick={()=>{addSelected(price.id)}}
                      className="inline-flex items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md flex-23">
                          
                          <svg className="w-4 h-4 p-0.5 fill-red-500"  viewBox="0 0 32 32" >
                              <g fill="none" fill-rule="evenodd">
                              <path d="m0 0h32v32h-32z"/>
                              <path className="fill-red-500" d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                              </g>
                              </svg>
                  </button>
              </div>

            </div>
          ))}
        </div>
        
      ))}
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