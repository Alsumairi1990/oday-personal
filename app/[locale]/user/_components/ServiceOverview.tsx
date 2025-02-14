'use client'
import { AbstractIntlMessages } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { BiJoystickButton } from 'react-icons/bi'
import { CiMedicalMask } from 'react-icons/ci'
import { LuRefreshCw, LuUsers } from 'react-icons/lu'
import Image from 'next/image'
import { MdOutlineAdd } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { MdGridView } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";






interface Props {
    slug : String,
    locale : string,
    messages : AbstractIntlMessages
}
function ServiceOverview({locale,messages}:Props) {
   const serviceData = (messages as any).Common.serviceData;
   const totalServices = (messages as any).Common.totalServices;
   const activeProject = (messages as any).Common.activeProject;
   const completedServices = (messages as any).Common.completedServices;
   const activeServices = (messages as any).Common.activeServices;
   const pendingServices = (messages as any).Common.pendingServices;   
   const delayedServices = (messages as any).Common.delayedServices;  
   const serviceSpending = (messages as any).Common.serviceSpending;   
   const discountedServices = (messages as any).Common.discountedServices;   



   const canceledProjects = (messages as any).Common.canceledProjects;
   const projectsHasCancled = (messages as any).Common.projectsHasCancled;   
   const orderService = (messages as any).Common.orderService;   
   const viewAllServices = (messages as any).Common.viewAllServices;
   const view = (messages as any).Common.view;
   const details = (messages as any).HomePage.details;

   const imagePath7 = '/images/cardResult.png';
   const imagePath = '/images/cardResult-4.png';
   const imagePath8 = '/images/cardResult2.png';
     const [baseUrl, setBaseUrl] = useState<string>('');
     
       useEffect(() => {
           const { protocol, host } = window.location;
           setBaseUrl(`${protocol}//${host}`);
       }, []);


   // "projectDeadline": "Project Deadline",
   // "upcomingDeadline": "Upcoming Deadline",
   // "viewAllProjects": "View All Projects",
   // "createNewProject": "Create New Project",
   // "trackProgress": "Track Progress",
   // "overdueProject": "Overdue Project",
   // "noProjectsFound": "No Projects Found",
   // "lastUpdated": "Last Updated",
   // "projectStatus": "Project Status",
   // "projectDetails": "Project Details"


  return (
   <div>
     <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
      <div className="sm:col-span-2 col-start-1">
        
        <div className="bg-[#5b60f8] rounded-md" style={{boxShadow:'0 .25rem .875rem 0 rgba(38,43,67,.16)'}}>
                <div className="p-1 flex pt-4 ">
                   <div className="border-b flex w-full flex-col pb-2 px-3 border-b-gray-400">
                        <div className="flex items-center">
                            <h5 className="mb-1 text-base font-semibold text-white ">{serviceData}</h5>
                        </div>
                        <div className="flex items-center card-subtitle">
                            <div className="me-2 bg-[#fcead9] font-medium  rounded-xl  px-2 py-0.5 text-sm text-orange-600">{totalServices}</div>
                            <div className=" align-items-center text-success">
                                <i className="ri-arrow-up-s-line ri-20px"></i>
                            </div>
                        </div>
                  </div>
                  <div className='ml-auto ltr:pr-1.5 rtl:pl-1.5'>
                    <div className=" ltr:ml-auto rtl:mr-auto">
                        <div className="bg-[#4c53dd] p-1.5 border border-[#7a81fd]  rounded-full ml-auto ">
                            <LuRefreshCw   className="text-gray-300"   />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="p-3 grid grid-cols-1 sm:grid-cols-3 pb-6">
                    <div className="p-2 col-span-2 ">
                        <div className="">
                            {/* <span className="text-white text-base">{}</span> */}
                        </div>
                        <div className="px-1 mt-4 flex flex-wrap gap-y-6 justify-between">
                            <div className="sm:flex-48 flex items-center gap-4">
                                <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded border border-[#7b81ff] font-medium text-white text-base">89</span>
                                <span className="text-white capitalize text-md">{completedServices}</span>
                            </div>
                            
                            <div className="sm:flex-48 flex items-center gap-4">
                                <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded border border-[#7b81ff] font-medium text-white text-base">879</span>
                                <span className="text-white capitalize text-md">{activeServices}</span>
                            </div>
                            <div className="sm:flex-48 flex items-center gap-4">
                                <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded border border-[#7b81ff] font-medium text-white text-base">54</span>
                                <span className="text-white capitalize text-md">{pendingServices}</span>
                            </div>
                            <div className="sm:flex-48 flex items-center gap-4">
                                <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded border border-[#7b81ff] font-medium text-white text-base">398</span>
                                <span className="text-white capitalize text-md">{delayedServices}</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 max-sm:hidden">
                        <div className=" w-10/12">
                        <img 
                        style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.6) 0px 4px 60px)'}}
                        className=' rounded-l-md max-w-full' src={`${baseUrl}/${imagePath}`} alt="" />
                        </div>
                        {/* <div className="flex-40 w-28">
                            <Image
                                src={imagePath}
                                height={1500}
                                width={1000}
                                alt="jjj"
                                style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.6) 0px 4px 60px)'}}
                                className="w-full  max-w-full rounded"
                            /> 
                            </div> */}
                    </div>
                </div>
            </div>
        
      </div>
      <div className=" bg-white p-4 shadow-md border border-gray-200 rounded-md">
           <div className="card h-100 ">
             <div className="border-b pb-2  border-b-gray-100">
                <div className="flex items-center">
                   <h5 className="mb-1 text-base font-medium text-gray-600 ">{serviceSpending}</h5>
                   <div className=" ltr:ml-auto rtl:mr-auto">
                      <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
                         <LuRefreshCw   className="text-gray-500"   />
                      </div>
                   </div>
                </div>
                <div className="flex items-center ">
                   <div className="me-2 bg-[#dbdbfd] font-medium  rounded-xl px-2 py-0.5 text-bxs text-[#666cff]">{discountedServices}</div>
                   <div className="d-flex align-items-center text-success">
                      <i className="ri-arrow-up-s-line ri-20px"></i>
                   </div>
                </div>
               
             </div>
             <div className="p-2 flex ">
                 <div className="p-1 flex-60 justify-center flex items-center">
                    <span className="text-2xl text-gray-800 font-semibold pb-1 border-b border-green-500">89</span> 
                    {/* <span className="text-green-500 text-base font-medium pl-3" >+17%</span> */}
                 </div>
                 <div className="flex-40 h-24">
                 <Image
                     src={imagePath7}
                     height={50}
                     width={50}
                     alt="jjj"
                     className="w-full h-full max-w-full rounded"
                 /> 
                 </div>
                 
                </div>
             
          </div>
      </div>
      <div className=" bg-white p-4 shadow-md border border-gray-200 rounded-md">
         <div className="card h-100 ">
             <div className="border-b pb-2  border-b-gray-100">
                <div className="flex items-center">
                   <h5 className="mb-1 text-base font-medium text-gray-600 ">{canceledProjects}</h5>
                   <div className="dropdown ltr:ml-auto rtl:mr-auto">
                      <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
                         <LuRefreshCw   className="text-gray-500"   />
                      </div>
                   </div>
                </div>
                <div className="flex items-center card-subtitle">
                   <div className="me-2 bg-[#fcead9] font-medium  rounded-xl  px-2 py-0.5 text-bxs text-orange-600">{projectsHasCancled}</div>
                   <div className="d-flex align-items-center text-success">
                      <i className="ri-arrow-up-s-line ri-20px"></i>
                   </div>
                </div>
               
             </div>
             <div className="p-2 flex ">
                 <div className="p-1 flex-60 flex justify-center items-center">
                    <span className="text-2xl text-gray-800 font-semibold pb-1 border-b border-green-500">13</span> 
                    {/* <span className="text-green-500 text-base font-medium pl-3" >+17%</span> */}
                 </div>
                 <div className="flex-40 h-24">
                 <Image
                     src={imagePath8}
                     height={50}
                     width={50}
                     
                     alt="jjj"
                     className="w-full h-full max-w-full rounded"
                 /> 
                 </div>
                 
                </div>
             
          </div>
         
      </div>
  </div>
    <div className="pt-6 mt-8 border-t w-full border-gray-300">
     <div className="flex items-center flex-wrap gap-y-4  gap-x-6">
        <div className="max-sm:flex-100 border border-gray-300 p-0.5 rounded-md hover:bg-orange-500 shadow-md">
             <button
             className='px-2 py-2.5 text-md flex gap-x-2 items-center font-semibold text-gray-800  max-sm:w-full bg-gray-100 rounded-md'
             >
              <span>{orderService}</span>
              <span className='rounded-xl ltr:ml-auto rtl:mr-auto bg-violet-800 inline-flex items-center justify-center h-6 w-6 mx-2'><MdOutlineAdd  className='text-lg text-white ' /> </span>
             </button>
        </div>
        <div className="max-sm:flex-100 border border-gray-300 p-0.5 rounded-md hover:bg-orange-500 shadow-md">
             <button
             className='px-2 py-2.5 text-md flex gap-x-2 items-center font-semibold text-gray-800  max-sm:w-full bg-gray-100 rounded-md'
             >
              <span>{viewAllServices}</span>
              <span className='rounded-xl ltr:ml-auto rtl:mr-auto bg-orange-700 inline-flex items-center justify-center h-6 w-6 mx-2'><VscOpenPreview  className='text-base text-white ' /> </span>
             </button>
        </div>
        <div className="max-sm:flex-100 border border-gray-300 p-0.5 rounded-md hover:bg-orange-500 shadow-md">
             <button
             className='px-2 py-2.5 text-md flex gap-x-2 items-center font-semibold text-gray-800  max-sm:w-full bg-gray-100 rounded-md'
             >
              <span>{view} {activeServices}</span>
              <span className='rounded-xl ltr:ml-auto rtl:mr-auto bg-emerald-700 inline-flex items-center justify-center h-6 w-6 mx-2'><MdGridView  className='text-base text-white ' /> </span>
             </button>
        </div>
  
        <div className="max-sm:flex-100 rtl:mr-auto ltr:ml-auto rtl:border-r border-gray-300 px-4">
           <div className="rounded-xl hover:bg-orange-500 shadow-md">
              <button
              className='px-2 py-2.5 text-md flex gap-x-2 max-sm:w-full items-center font-semibold text-white bg-violet-600 rounded-xl'
              >
                 <span>{view} {details}</span>
                 <span className='rounded-xl bg-white inline-flex items-center justify-center h-6 w-6 mx-2'><IoIosArrowBack  className='text-base text-gray-800 ' /> </span>
              </button>
           </div>
        </div>
     </div>
    </div>
 </div>
  )
}
export default ServiceOverview