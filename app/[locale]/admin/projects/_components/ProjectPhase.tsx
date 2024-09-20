import Link from 'next/link'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import Image from 'next/image'
import { RiTeamLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';

function ProjectPhase() {
  const user1 = "/images/user-2.jpg";
  const user2 = "/images/user-3.jpg";
  const user3 = "/images/user-4.jpg";
  const user4 = "/images/user-5.jpg";
  const user5 = "/images/user-6.jpg";
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
        <div className="grid  sm:grid-cols-4 ">
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-[''] after:w-full sm:first:after:w-5/12 after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 first:after:right-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-[#888cf7] p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className="text-white inline-flex justify-center items-center rounded-full h-6 w-6 bg-[#888cf7]  font-medium text-sm">1</span>
            </div>
            <div className="p-1">
              <span className="text-sm">Planning</span>
            </div>

          </div>
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-['']  after:w-full after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 first:after:right-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-[#454bfd] p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className="text-white inline-flex justify-center items-center rounded-full h-6 w-6 bg-[#454bfd]  font-medium text-sm">2</span>
            </div>
            <div className="p-1">
              <span className="text-sm">Design</span>
            </div>

          </div>
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-['']  after:w-full after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 first:after:right-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-slate-300 p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className=" inline-flex justify-center items-center rounded-full h-6 w-6 bg-slate-300 text-gray-600 font-medium text-sm">3</span>
            </div>
            <div className="p-1">
              <span className="text-sm ">Implementing</span>
            </div>

          </div>
          <div className="p-2 flex flex-col items-center gap-y-1 relative first:after:content-[''] after:w-full sm:last:after:w-1/2 after-z-30 after:h-0.5 after:absolute after:bg-gray-300 after:top-6 last:after:left-0">
            <div className="flex items-center  justify-center rounded-full h-8 w-8 border-2 z-40 border-slate-300 p-0.5 bg-white" style={{boxShadow: 'rgba(38, 43, 67, 0.8) 0px 0px 2px'}}>
                <span className=" inline-flex justify-center items-center rounded-full h-6 w-6 bg-slate-300 text-gray-600  font-medium text-sm">4</span>
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
          <div className="h-1.5  flex flex-col w-full bg-gray-200 mt-1 rounded">
            <span className="bg-orange-400 inline-flex h-1.5 rounded w-[30%]" ></span>
          </div>
      </div>
      <div className="flex items-center my-3">
        <div className="p-1 flex">
          <Link href="#">
            <Image
            src={user1}
            height="20"
            width="20"
            alt='image'
            className='w-full rounded-full p-0.5 border border-gray-200'
            />
          </Link>
          <Link href="#">
            <Image
            src={user2}
            height="20"
            width="20"
            alt='image'
            className='w-full rounded-full p-0.5 border border-gray-200'
            />
          </Link>
          <Link href="#">
            <Image
            src={user3}
            height="20"
            width="20"
            alt='image'
            className='w-full rounded-full p-0.5 border border-gray-200'
            />
          </Link>
          <Link href="#">
            <Image
            src={user4}
            height="20"
            width="20"
            alt='image'
            className='w-full rounded-full p-0.5 border border-gray-200'
            />
          </Link>
          <Link href="#">
           <div className="h-9 w-9 ml-2 rounded-full flex items-center justify-center bg-slate-100 p-0.5 border border-gray-200">
            <span className="text-gray-600 text-sm font-medium">+4</span>
           </div>
          </Link>
        </div>
        <div className="ml-auto flex gap-x-2 items-center">
          <span className="text-gray-300"><FaUsersGear className="text-gray-500 text-lg" /></span>
          <span className="text-[13px] text-gray-600 font-medium">Team Size :</span>
          <span className="text-[13px] text-gray-500 font-medium">5 members</span>          
        </div>
      </div>

    </div>
  )
}

export default ProjectPhase