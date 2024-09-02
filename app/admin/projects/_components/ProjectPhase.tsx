import React from 'react'
import { FiClock } from 'react-icons/fi'

function ProjectPhase() {
  return (
    <div className='w-full'>
      <div className="flex items-center">
        <div className="flex items-center gap-x-3">
          <div className="h-12 w-12 bg-gray-100 flex items-center justify-center rounded-full">
            <span className="text-xs">image</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-md font-medium text-gray-700">Project Title</span>
            <div className="flex">
                  <span className="text-[13px] font-medium text-gray-700">Client : </span>
                  <span className="text-[13px] font-medium text-gray-500">Adma Sameer </span>
            </div>
          </div>
         
        </div>
        <div className="p-1 flex flex-col gap-[3px] ml-auto">
            <div className="flex gap-x-1.5 text-[13px]">
                  <span className=" font-medium text-gray-700 capitalize">start date  : </span>
                  <span className=" font-medium text-gray-500">12-Jun-2024 </span>
            </div>
            <div className="flex gap-x-1.5 text-[13px]">
                  <span className=" font-medium text-gray-700 capitalize">end date  : </span>
                  <span className="font-medium text-gray-500">03-Sep-2024 </span>
            </div>
          </div>
      </div>

      <div className="my-3 p-2">
        <div className="grid grid-cols-4 ">
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-['']  first:after:w-5/12 after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 first:after:right-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-[#666cff] p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className="text-white inline-flex justify-center items-center rounded-full h-6 w-6 bg-[#666cff]  font-medium text-sm">1</span>
            </div>
            <div className="p-1">
              <span className="text-sm">Planning</span>
            </div>

          </div>
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-['']  after:w-full after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 first:after:right-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-[#666cff] p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className="text-white inline-flex justify-center items-center rounded-full h-6 w-6 bg-[#666cff]  font-medium text-sm">2</span>
            </div>
            <div className="p-1">
              <span className="text-sm">Design</span>
            </div>

          </div>
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-['']  after:w-full after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 first:after:right-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-[#666cff] p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className="text-white inline-flex justify-center items-center rounded-full h-6 w-6 bg-[#666cff]  font-medium text-sm">3</span>
            </div>
            <div className="p-1">
              <span className="text-sm">Implementing</span>
            </div>

          </div>
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-['']  last:after:w-1/2 after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 last:after:left-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-[#666cff] p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className="text-white inline-flex justify-center items-center rounded-full h-6 w-6 bg-[#666cff]  font-medium text-sm">4</span>
            </div>
            <div className="p-1">
              <span className="text-sm">Testing</span>
            </div>

          </div>

        
        </div>
      </div>
      <div className="py-1 flex items-center">
        <div className="flex items-center">
          <span className="text-[13px] text-gray-700 font-medium">
            Total Hours : 
          </span>
          <span className="text-gray-500 text-[13px] pl-3 font-medium">320 / 345</span>
        </div>
        <div className="flex items-center ml-auto">
          <span className="text-gray-800 capitalize font-medium text-[13px]">today :</span>
          <span className="text-gray-500 text-[13px] pl-1 font-medium mr-1">320</span>
          <div className=" bg-red-100 flex text-[13px] rounded gap-x-1 px-1.5 items-center ">
            <span><FiClock className='text-md text-red-600' /></span>
            <span className=' text-red-600 '>345 days left</span>
            
          </div>

        </div>
       
      </div>
      <div className="py-1 my-1">
        <h2 className="text-sm text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</h2>
      </div>
      <div className="flex flex-col justify-between w-full items-center">
          <span className="text-gray-500 w-full ml-auto flex text-[13px] font-medium justify-end">30% Comleted</span>
          <div className="h-2  flex flex-col w-full bg-gray-200 mt-1 rounded">
            <span className="bg-orange-400 inline-flex h-2 rounded w-[30%]" ></span>
          </div>
      </div>

    </div>
  )
}

export default ProjectPhase