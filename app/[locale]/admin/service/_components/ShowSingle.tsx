"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { Category, Service } from '@prisma/client';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { IoMdCloseCircle } from "react-icons/io";
import { BiSolidCommentEdit } from "react-icons/bi";
import Image from 'next/image';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FcShop } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { LuAlertOctagon } from 'react-icons/lu';
import { getServiceById, getServiceWModelsById } from '../_serviceActions/ServiceActions';
import { ServiceWithModels } from '../utils/ServiceWithModels';

interface FormEditProps {
  id : string;
  
}
const ShowSingle = ({ id}: FormEditProps) => {
  const [service, setService] = useState<ServiceWithModels | null>(null); 
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');


  const getService = async () => {
    try {
        setLoading(true)
        const serviceId = Number(id);
        const serviceData = await getServiceWModelsById(serviceId);
        setService(serviceData);
        setLoading(false)
    } catch (error:any) {
        setLoading(false);
        setError(error.message)
    }
    
  };
  
  
  useEffect(() => {
      const { protocol, host } = window.location;
      setBaseUrl(`${protocol}//${host}`);
  }, []);

  useEffect(() => {
    getService();
  }, []);



  return (
   <div className="h-auto flex items-center relative justify-center w-full m-auto p-6 ">
        {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
        {error && <div className="py-3 my-1 flex items-center">
                    <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                    <span className="text-red-400 text-md">{error}</span>
                    </div>
                }
           {service && 
             <div className="w-full">
                <div className="flex items-center flex-col">
                    <div className="w-10/12 relative lack rounded-md border border-gray-300">
                     <div className="p2 bg-black rounded-md border-[.3rem] border-white">
                        {/* <span>jherhfref</span> */}
                       <img className=' h-full opacity-70  rounded-md' src={`${baseUrl}/${service?.image}`} alt="" />
                     </div>
                     <div className="absolute flex space-x-2 top-3 right-3">
                        <button type='button' className='py-1 flex items-center px-1.5 rounded-md bg-white text-gray-900 ' onClick={()=>setShowEdit(true)}>
                          <span className=''>Edit</span> 
                          <MdEdit className='text-base ml-1 text-gray-900' />
                        </button>

                        <button type='button' className='py-1 flex items-center px-1.5 rounded-md bg-red-900 text-gray-900 ' onClick={()=>setShowEdit(true)}>
                          <span className='text-white'>Delete</span> 
                          <RiDeleteBinLine className='text-base ml-1 text-white' />
                        </button>
                     </div>
                     <div className="absolute  px-2 rounded-md justify-center left-0 flex space-x-4  bottom-4   right-2">
                        <div className="p-2 flex-25 capitalize text-md bg-white border border-gray-500  flex flex-col space-x-2 space-y-3 items-center rounded-md">
                          <img className='w-9 h-9  border border-gray-300 justify-center rounded-md '  src={`${baseUrl}/${service?.icon}`} alt="" />
                          <div className="flex">
                            <span className='text-gray-800 font-semibold mr-1'>Name : </span> 
                            <span className='text-orange-500 font-medium ml-1'>{service.name}</span> 
                          </div>
                         </div>
                         <div className="p-2 flex-25 capitalize text-md bg-white border border-gray-500  flex flex-col space-x-2 space-y-3 items-center rounded-md">
                          <span className='w-9 h-9 items-center  border border-gray-300 justify-center rounded-md  inline-flex' ><FcShop className='text-3xl '/></span>
                          <div className="flex">
                            <span className='text-gray-800 font-medium mr-1'>Slug : </span> 
                            <span className='text-orange-500 font-medium ml-1'>{service.name_slug}</span> 
                          </div>
                         </div>
                         <div className="p-2 flex-25 capitalize text-md bg-white border border-gray-500  flex flex-col space-x-2 space-y-3 items-center rounded-md">
                          <span className='w-9 h-9 items-center border border-gray-300 justify-center rounded-md inline-flex' ><FcIdea className='text-3xl '/></span>
                          <div className="flex">
                            <span className='text-gray-800 font-medium mr-1'>Category ID : </span> 
                            <span className='text-orange-500 font-semibold ml-1'>{service.id}</span> 
                          </div>
                         </div>
                        {/* <div className="p-2 flex-25 bg-[#00000062] border border-gray-500  flex flex-col space-x-2 space-y-3 items-center rounded-md">
                          <img className='w-9' src={`${baseUrl}/${category?.icon}`} alt="" />
                          <span className="text-base text-white font-semibold capitalize">Slug : {category.slug}</span>
                        </div> */}  
                       
                     </div>

                    </div>
                    <div className="py- mx-auto bg-white mt-1.5 rounded-md border border-gray-300 w-10/12">
                    <div className="text-center sm:p-0.5 ">
                      <h1 className="text-blu-500 font-semibold py-2 rounded-t-md bg-[#eeecec] border-b border-b-gray-200">Category Info Details </h1>
                    </div>
                      <div className="px-2 my-2 py-3 flex border-b border-b-gray-200  ">
                        <div className="flex-25 border-r border-r-gray-300">
                          <span className="text-base font-semibold pl-2">Category Name </span>
                        </div>
                        <div className="flex-75 pl-4 ">
                          <div className="text-md text-gray-800 font-medium">
                          {service.categories && service.categories.map(serviceCategory => (
                        <li key={serviceCategory.categoryId}>
                          Category: {serviceCategory.category.name}
                        </li>
                      ))}
                          </div>
                        </div>
                      </div>
                      <div className="px-2 my-2 py-3 flex border-b border-b-gray-200  ">
                        <div className="flex-25 border-r border-r-gray-300">
                          <span className="text-base font-semibold pl-2">Added By</span>
                        </div>
                        <div className="flex-75 pl-4 ">
                          <div className="text-md text-gray-800 capitalize font-medium">{service?.user?.user_name}</div>
                        </div>
                      </div>
                      <div className="px-2 my-2 py-3 flex border-b border-b-gray-200  ">
                        <div className="flex-25 border-r border-r-gray-300">
                          <span className="text-base font-semibold pl-2">Category Slug </span>
                        </div>
                        <div className="flex-75 pl-4 ">
                          <div className="text-md text-gray-800 font-medium">{service.name_slug}</div>
                        </div>
                      </div>
                      <div className="px-2 my-2 py-3 flex border-b border-b-gray-200  ">
                        <div className="flex-25 border-r border-r-gray-300">
                          <span className="text-base font-semibold pl-2">Description</span>
                        </div>
                        <div className="flex-75 pl-4 ">
                          <div className="text-md text-gray-800 font-medium leading-8">{service.description}</div>
                        </div>
                      </div>
                      <div className="px-2 my-2 py-3 flex border-b border-b-gray-200  ">
                        <div className="flex-25 border-r border-r-gray-300">
                          <span className="text-base font-semibold pl-2">Created At</span>
                        </div>
                        <div className="flex-75 pl-4 ">
                        <div className="text-md text-gray-800 font-medium leading-8">{service.createdAt.toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="px-2 my-2 py-3 flex border-b border-b-gray-200  ">
                        <div className="flex-25 border-r border-r-gray-300">
                          <span className="text-base font-semibold pl-2">Updated At</span>
                        </div>
                        <div className="flex-75 pl-4 ">
                        <div className="text-md text-gray-800 font-medium leading-8">{service.updatedAt.toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="px-2 my-2 py-3 flex border-b border-b-gray-200  ">
                        <div className="flex-25 border-r border-r-gray-300">
                          <span className="text-base font-semibold pl-2">Provided Services</span>
                        </div>
                        <div className="flex-75 pl-4 ">
                          <div className="text-md text-gray-800 font-medium leading-8">{}</div>
                        </div>
                      </div>
                    </div>
                </div>
             </div>
              }
   </div>
  );
};

export default ShowSingle;