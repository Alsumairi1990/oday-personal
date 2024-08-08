"use client";
import React, { ChangeEvent, useEffect } from "react";
import { Category, Service, Tag, Tool, Work } from "@prisma/client";
import { useState } from "react";
import { IoIosArrowDown, IoMdCloseCircle } from "react-icons/io";
import { BiCategory, BiSolidCommentEdit } from "react-icons/bi";
import Image from "next/image";
import {
  MdAssignmentAdd,
  MdPlaylistAdd,
 
} from "react-icons/md";

import { LuAlertOctagon } from "react-icons/lu";

import { FiEdit } from "react-icons/fi";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaTags, FaTools } from "react-icons/fa";
import { GrSelect, GrWorkshop } from "react-icons/gr";
import { addServiceCategories, addServiceTags, addServiceTestimonial, addServiceTools, addServiceWorks, getServices, getWorks, removeServiceCategory, removeServiceTag, removeServiceTestimonial, removeServiceTool, removeServiceWork } from "../../service/_serviceActions/ServiceActions";
import { getCategories, getTags} from "../../common/_actions/Actions";
import { ServiceWithModels } from "../utils/ServiceWithModels";
import { addTestimonialCategory, getTestimonialWModels, getTestimonialWModelsById, removeTesimonialCategory } from "../../testimonials/_actions/Actions";
import { getTools } from "../../tools/_actions/Actions";
import { TestimonialWithModels } from "../../testimonials/_util/TestimonialWithModels";

interface FormEditProps {
  service: ServiceWithModels;
  colseModel: (value: boolean) => void;
}
const TestimonialPanel = ({ service, colseModel }: FormEditProps) => {
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [serviceData, setServiceData] = useState<ServiceWithModels>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [menuElements, setMenuElements] = useState<TestimonialWithModels[] | null>([]);
  const [showRemoveTool, setShowRemoveTool] = useState<boolean>(false);
  const [elementMenuShow, setElementMenuShow] = useState<boolean>(false);
  const [selectedMenuElements, setSelectedMenuElements] = useState<string[]>([]);
  const [selectedMenuElementsId, setSelectedMenuElementsId] = useState<string[]>([]);
  const [removedTool, setRemovedTool] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [removedRows, setRemovedRows] = useState<number>(0);
  const [trigger, setTrigger] = useState(0);


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
        const result = await addServiceTestimonial(Number(service.id), numberArray);
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
        const result = await removeServiceTestimonial(service.id,removedTool);
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
      const elements = await getTestimonialWModels();
      setMenuElements(elements);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
    setServiceData(service);
  }, []);
  useEffect(() => {
    getAllMenuElements();
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
                  <GrWorkshop className="text-gray-700 text-xl" />
                </span>
                <span className="text-gray-700 text-md font-semibold">
                  Edit Works
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
              {serviceData && serviceData.testimonials &&
              <div>
                <div className="py-2 pt-1 flex items-center border-b border-b-gray-300 flex-wrap overflow-y-auto">
                  {serviceData.testimonials.length > 0 && <h3 className="text-gray-500 pb-1 text-md w-full border-b">list of added Testimonial</h3>
                  }
                  <div className="flex items-center rounded-md w-full gap-2 max-h-40 flex-wrap overflow-y-auto">
                   {serviceData.testimonials && serviceData.testimonials.length>0 ?  (
                   
                          <div className="py-2 grid grid-cols-7 gap-2 items-center ">
                          {serviceData.testimonials.map(element => (
                            <div className="rounded-md p-1 bg-white border border-gray-200">
                                <div className="p-1 flex flex-col">
                                    <div className="h-16 ">
                                    <img
                                      className="  sm:h-full w-full rounded-md"
                                      src={`${baseUrl}/${element?.image}`}
                                      alt=""
                                    />
                                    </div>
                                
                                {element.title && <div className='text-sm  text-orange-gray-600 py-1 pl-1 font-medium'>{element.title}</div>}
                                <button
                                  onClick={() => {
                                    if(serviceData.testimonials.length>0 && element.title) setRemovedTool(element.title);
                                    setShowRemoveTool(true);
                                  }}
                                  className="flex items-center border w-8/12 mx-auto py-0.5 mt-2 justify-center ml-auto  border-gray-400 bg-gray-400 rounded-md"
                                > 
                                  <IoMdCloseCircle className="text-base text-white" />
                                </button>
                                </div>
                            </div>
                          ))}
                        
                         </div> 
                      ):(
                        <div className="pb-1">
                        <span className="text-sm text-orange-600 px-4 inline-flex capitalize">No Works  </span>
                    </div>                                   
                      )
                      }
                  </div>
                </div>
                    
                <div className="p2">
                  <div className="py-2 ">
                    <button
                      type="button"
                      onClick={() => {
                        setElementMenuShow((prevState) => {
                          if (prevState == false) {
                            setSelectedMenuElements([]);
                          }
                          return !prevState;
                        });
                      }}
                      className="flex w-full bg-white  items-center border gap-x-3 py-2 border-gray-300  px-2 rounded-md"
                    >
                      {/* <GrSelect className="text-base text-gray-600" /> */}
                      {selectedMenuElements.length>0 ? (
                        <span className="text-md inline-flex text-gray-600 font-medium">
                         {selectedMenuElements.map(element => (
                              <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{element}</span>
                          ))}
                        </span>
                      ) : (
                        <div className="text-md inline-flex text-gray-600 font-medium capitalize">
                          <span className="px-1">Adding Tesimonial</span>
                        </div>
                      )}
                      <span className="ml-auto">
                        {/* <IoIosArrowDown className="text-xl text-gray-700" />   */}
                        <MdPlaylistAdd className="text-2xl text-gray-700" /> 
                      </span>
                    </button>
                  </div>
                  {elementMenuShow && (
                    <div className="p-3 border mb-5 shadow-md bg-white border-gray-200 animate-modalEnter rounded-md">
                      <div className="border-b border-b-gray-200 w-full mb-2">
                        <div className="bg-gray-100 border border-gray-200 rounded-3xl py-1.5 mb-2 w-full h-11 ">
                          <input
                            type="text"
                            placeholder="Search categories"
                            value={searchTerm}
                            className="w-full h-full bg-transparent px-3 placeholder:text-md outline-none"
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols max-sm:gap-4  max-sm:gap-y-8 sm:gap-x-2 sm:max-h-72 mt-2 overflow-y-auto">
                        {menuElements && menuElements.length > 0? (
                          menuElements
                          
                            .filter((element) =>
                                element.title?.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((element, index) => (
                              <div className=" relative border flex bg-white flex-wrap my-2 w-11.8/12 mx-auto items-center  border-gray-200 rounded-md max-sm:pb-3 ">
                                <div className="sm:flex-10 flex-100 h-9 overflow-y-hidden  rounded-l-md bg-black border-r border-r-gray-300">
                                  {element.image ? (
                                    <img
                                      className=" opacity-75 sm:h-full rounded-l-md"
                                      src={`${baseUrl}/${element?.image}`}
                                      alt=""
                                    />
                                  ) : (
                                    <span className="h-full bg-gray-300 w-full text-sm text-gray-100 rounded-l-md inline-flex justify-center items-center">
                                      Ime
                                    </span>
                                  )}
                                </div>
                                <div className=" flex-100 sm:flex-70  sm:flex sm:mx-auto items-center bg-white border-r border-r-gray-300 rounded-l-md">
                                  <div className="pl-4  w-full">
                                    <div className="w-full flex items-center">
                                      <span className="text-base  text-black  font-medium">
                                        {element?.title}
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
                                        type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                        id={String(element.id)}
                                        name="service"
                                        onChange={(e) => {
                                          const isChecked = e.target.checked;
                                          if (isChecked) {
                                            addSelectedService(
                                              String(element?.id),
                                              String(element.title)
                                            );
                                          } else {
                                            unSelectedService(
                                              String(element?.id),
                                              String(element.title)
                                            );
                                          }
                                        }}
                                      />
                                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-3.5 w-3.5"
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
                            ))
                        ) : (
                          <div className=" relative h-16  w-11.8/12 mx-auto items-center bg-white border border-gray-300 rounded-md flex justify-center">
                            <p className="text-gray-700 text-md">No Data</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
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

export default TestimonialPanel;