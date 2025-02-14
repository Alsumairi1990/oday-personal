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
function PackageOverview({locale,messages}:Props) {
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
     <div className=" gap-6">
     <div className="bg-white p-6 rounded-2xl shadow-md">
  <h2 className="text-lg font-semibold mb-4">New Subscription</h2>
  <div className="flex items-center justify-center">
    <div className="relative w-40 h-40">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <path
          className="text-blue-500"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeDasharray="65, 100"
        />
        <path
          className="text-purple-500"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeDasharray="10, 100"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
        8527
      </span>
    </div>
  </div>
  <div className="mt-6">
    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 text-white rounded-lg">
          📄
        </div>
        <div>
          <p className="text-sm text-gray-500">New Subscriptions</p>
          <p className="text-lg font-semibold">4,784</p>
        </div>
      </div>
      <span className="text-green-600 text-sm">+1.05%</span>
    </div>
    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg mt-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-purple-500 text-white rounded-lg">
          🎟️
        </div>
        <div>
          <p className="text-sm text-gray-500">Active Subscriptions</p>
          <p className="text-lg font-semibold">3,743</p>
        </div>
      </div>
      <span className="text-red-600 text-sm">-0.35%</span>
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
export default PackageOverview