import React, { useState } from 'react'
import { ServiceAnalticsModel } from '../utils/ServiceAanlyticsModel'
import { LuAlertOctagon } from 'react-icons/lu';
import { MdAssignmentAdd, MdKeyboardDoubleArrowDown } from 'react-icons/md';
import Link from 'next/link';
interface Props{
    service:ServiceAnalticsModel,
    closeModel : (value : boolean) => void
}
function ShowServiceModel({service,closeModel}:Props) {
    const [loading, setLoading] = useState<boolean>(false); 
    const [loadingPage, setLoadingPage] = useState<boolean>(false);
    const [error, setError] = useState<string>(''); 
  return (
    <div className="fixed bg-[#0000003f] h-full flex items-center justify-center w-full left-0 top-0 m-auto z-50 p-6">
    {loadingPage && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    {error && <div className="py-3 my-1 flex items-center">
                <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                <span className="text-red-400 text-md">{error}</span>
                </div>
            }
       {service && 
         <div className="w-5/12 mx-auto max-h-90vh animate-modalEnter">

            <div className="flex w-full items-center flex-col">
                <div className="w-full relative bg-white p-2 rounded-md border border-gray-300">
                {loading && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
                <div className=" mb-3 border w-full bg-gray-100 p-2 border-gray-200 flex items-center rounded-md">
                    <div className="flex  items-center">
                            <span className=""><MdAssignmentAdd className='text-cyan-600 text-2xl mr-2' /> </span>
                        <span className="text-md font-semibold text-gray-600">Service Details</span>
                    </div>
                    <div className="ml-auto">
                        <button type="button" onClick={() => closeModel(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>
                <div className="flex relative py-1 mb-1 justify-center">
                    <span className="absolute -bottom-1  ">
                        <MdKeyboardDoubleArrowDown className='text-base text-gray-500' />
                    </span>
                </div>
                {error && <div className="py-3 my-1 flex items-center">
                <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                <span className="text-red-400 text-md">{error}</span>
                </div>
                }
            <div className="text-start z-40  px-5 rounded-md">
                <div className="flex flex-wrap justify-between">
                   <div className=" flex flex-100 border-b border-b-gray-300 z-0 w-full py-3">
                        <span className="flex-30 text-gray-500">Name : </span>
                        <span className="flex-70 text-md">{service.name}</span>
                    </div>
                    <div className=" flex flex-100 border-b border-b-gray-300 z-0 w-full py-3">
                        <span className="flex-30 text-gray-500">Title : </span>
                        <span className="flex-70 text-md">{service.title}</span>
                    </div>
                    <div className=" flex flex-100 border-b border-b-gray-300 z-0 w-full py-3">
                        <span className="flex-30 text-gray-500">Created  : </span>
                        <span className="flex-70 text-md">           {new Date(service.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                    </div>
                    <div className=" flex flex-100 border-b border-b-gray-300 z-0 w-full py-3">
                        <span className="flex-30 text-gray-500">Works Total : </span>
                        <span className="flex-70 text-md">{service._count.works}</span>
                    </div>
                    <div className=" flex flex-100 border-b border-b-gray-300 z-0 w-full py-3">
                        <span className="flex-30 text-gray-500">Prices: </span>
                        <span className="flex-70 text-md">{service._count.prices}</span>
                    </div>
                    <div className=" flex flex-100 border-b border-b-gray-300 z-0 w-full py-3">
                        <span className="flex-30 text-gray-500">Testimonials Total : </span>
                        <span className="flex-70 text-md">{service._count.testimonials}</span>
                    </div>
                    <div className="p-3 flex justify-center flex-100">
                        <Link href="#" className='text-md bg-indigo-500 rounded px-2 py-1 text-gray-50'>
                         Display Full Details
                        </Link>
                    </div>


                 

        
                
                </div>
            </div>
            </div>
         </div>
       </div>
      }
      </div>
  )
}

export default ShowServiceModel