import { AbstractIntlMessages } from 'next-intl'
import React from 'react'
import { BiJoystickButton } from 'react-icons/bi'
import { CiMedicalMask } from 'react-icons/ci'
import { LuRefreshCw, LuUsers } from 'react-icons/lu'
import Image from 'next/image'
import { MdOutlineAdd } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { MdGridView } from "react-icons/md";





interface Props {
    slug : String,
    locale : string,
    messages : AbstractIntlMessages
}
function ProjectOverview({locale,messages}:Props) {
   const pendingProject = (messages as any).Common.pendingProject;
   const totalProjects = (messages as any).Common.totalProjects;
   const activeProject = (messages as any).Common.activeProject;
   const manageProjects = (messages as any).Common.manageProjects;
   const finishedProject = (messages as any).Common.finishedProject;
   const overdueProject = (messages as any).Common.overdueProject;   
   const projectsNotCopleted = (messages as any).Common.projectsNotCopleted;  
   const canceledProjects = (messages as any).Common.canceledProjects;
   const projectsHasCancled = (messages as any).Common.projectsHasCancled;   
   const orderProject = (messages as any).Common.orderProject;   
   const viewAllProjects = (messages as any).Common.viewAllProjects;
   const view = (messages as any).Common.view;






   const imagePath7 = '/images/cardResult.png';
   const imagePath8 = '/images/cardResult2.png';


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
         <div className="border-b pb-2  border-b-gray-100">
            <div className="flex items-center ">
               <h5 className="mb-1 text-base font-semibold text-gray-700 ">{manageProjects}</h5>
               <div className="dropdown ltr:ml-auto rtl:mr-auto">
                  <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
                     <LuRefreshCw   className="text-gray-00"   />
                  </div>
               </div>
            </div>
            <div className="flex items-center card-subtitle">
               <div className="me-2 text-normal text-sm text-gray-700">{totalProjects}</div>
               <div className="  text-success">
                  <p className="mb-0 font-semibold text-green-500 text-md">44</p>
                  <i className="ri-arrow-up-s-line ri-20px ltr:ml-auto rtl:mr-auto"></i>
               </div>
            </div>
         </div>
         <div className="flex flex-wrap gap-4 mt-5">
            <div className='flex gap-x-4 flex-100'>
            <div className="flex items-center gap-3">
               <div className="bg-[#e7e7ff] p-2 rounded">
                  <div className="flex items-center  justify-center  rounded">
                  <LuUsers className="text-indigo-500 text-2xl"   />
                  </div>
               </div>
               <div className="">
                  <h5 className="mb-0 text-lg font-medium">86</h5>
                  <p className="mb-0 text-sm text-gray-700">{activeProject}</p>
               </div>
            </div>
            <div className="flex items-center gap-3 ml-auto">
               <div className="bg-[#fee9d5] p-2 rounded">
                  <div className=" flex items-center  justify-center rounded">
                     <CiMedicalMask className="text-orange-500 text-3xl"   />
                  </div>
               </div>
               <div className="">
                  <h5 className="mb-0 text-lg font-medium">28</h5>
                  <p className="mb-0 text-sm text-gray-700">{pendingProject}</p>
               </div>
            </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
               <div className="bg-[#d5f7fe] p-3 flex items-center  justify-center rounded">
                  <div className="">
                  <BiJoystickButton className="text-[#26c6f9] text-xl"   />
                  </div>
               </div>
               <div className="">
                  <h5 className="mb-0 font-medium">57 </h5>
                  <p className="mb-0 text-sm text-gray-700">{finishedProject}</p>
               </div>
            </div>
         </div>
      </div>
      <div className=" bg-white p-4 shadow-md border border-gray-200 rounded-md">
           <div className="card h-100 ">
             <div className="border-b pb-2  border-b-gray-100">
                <div className="flex items-center">
                   <h5 className="mb-1 text-lg font-medium text-gray-600 ">{overdueProject}</h5>
                   <div className=" ltr:ml-auto rtl:mr-auto">
                      <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
                         <LuRefreshCw   className="text-gray-500"   />
                      </div>
                   </div>
                </div>
                <div className="flex items-center ">
                   <div className="me-2 bg-[#dbdbfd] font-medium  rounded-xl px-2 py-0.5 text-bxs text-[#666cff]">{projectsNotCopleted}</div>
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
                   <h5 className="mb-1 text-lg font-medium text-gray-600 ">{canceledProjects}</h5>
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
            <span>{orderProject}</span>
            <span className='rounded-xl ltr:ml-auto rtl:mr-auto bg-violet-800 inline-flex items-center justify-center h-6 w-6 mx-2'><MdOutlineAdd  className='text-lg text-white ' /> </span>
           </button>
      </div>
      <div className="max-sm:flex-100 border border-gray-300 p-0.5 rounded-md hover:bg-orange-500 shadow-md">
           <button
           className='px-2 py-2.5 text-md flex gap-x-2 items-center font-semibold text-gray-800  max-sm:w-full bg-gray-100 rounded-md'
           >
            <span>{viewAllProjects}</span>
            <span className='rounded-xl ltr:ml-auto rtl:mr-auto bg-orange-700 inline-flex items-center justify-center h-6 w-6 mx-2'><VscOpenPreview  className='text-base text-white ' /> </span>
           </button>
      </div>
      <div className="max-sm:flex-100 border border-gray-300 p-0.5 rounded-md hover:bg-orange-500 shadow-md">
           <button
           className='px-2 py-2.5 text-md flex gap-x-2 items-center font-semibold text-gray-800  max-sm:w-full bg-gray-100 rounded-md'
           >
            <span>{view} {activeProject}</span>
            <span className='rounded-xl ltr:ml-auto rtl:mr-auto bg-emerald-700 inline-flex items-center justify-center h-6 w-6 mx-2'><MdGridView  className='text-base text-white ' /> </span>
           </button>
      </div>

      <div className="max-sm:flex-100 rtl:mr-auto ltr:ml-auto rtl:border-r border-gray-300 px-4">
         <div className="rounded-xl hover:bg-orange-500 shadow-md">
            <button
            className='px-2 py-2.5 text-md flex gap-x-2 max-sm:w-full items-center font-semibold text-white bg-violet-600 rounded-xl'
            >
               <span>{view} {activeProject}</span>
               <span className='rounded-xl bg-white inline-flex items-center justify-center h-6 w-6 mx-2'><MdGridView  className='text-base text-gray-800 ' /> </span>
            </button>
         </div>
      </div>
   </div>
  </div>
 </div>
  )
}
export default ProjectOverview