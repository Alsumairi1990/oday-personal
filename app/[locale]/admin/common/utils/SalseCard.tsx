'use client'
import React, { useEffect, useState } from 'react'
import { LuRefreshCw } from 'react-icons/lu'
import Image from 'next/image'
function SelseCard() {
    const imagePath = '/images/cardResult-4.png';
    const [baseUrl, setBaseUrl] = useState<string>('');
  
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);

  return (
    <div className="bg-[#5b60f8] rounded-md" style={{boxShadow:'0 .25rem .875rem 0 rgba(38,43,67,.16)'}}>
        <div className="p-1 flex pt-4">
           <div className="border-b flex flex-col pb-2 px-3 border-b-gray-400">
                <div className="flex items-center">
                    <h5 className="mb-1 text-lg font-medium text-white ">Sessions</h5>
                </div>
                <div className="flex items-center card-subtitle">
                    <div className="me-2 bg-[#fcead9] font-medium  rounded-xl  px-2 py-0.5 text-sm text-orange-600">Total 42.5k Sales</div>
                    <div className="d-flex align-items-center text-success">
                        <i className="ri-arrow-up-s-line ri-20px"></i>
                    </div>
                </div>
          </div>
          <div className='ml-auto pr-1.5'>
            <div className=" ml-auto">
                <div className="bg-[#4c53dd] p-1.5 border border-[#7a81fd]  rounded-full ml-auto ">
                    <LuRefreshCw   className="text-gray-300"   />
                </div>
            </div>
            </div>
        </div>
        <div className="p-3 grid grid-cols-3 pb-6">
            <div className="p-2 col-span-2 ">
                <div className="">
                    <span className="text-white text-base">Application Requirment</span>
                </div>
                <div className="px-1 mt-4 flex flex-wrap gap-y-6 justify-between">
                    <div className="flex-48 flex items-center gap-4">
                        <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded font-medium text-white text-base">89</span>
                        <span className="text-white capitalize text-md">Mobiles</span>
                    </div>
                    <div className="flex-48 flex items-center gap-4">
                        <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded font-medium text-white text-base">54</span>
                        <span className="text-white capitalize text-md">Laptops</span>
                    </div>
                    <div className="flex-48 flex items-center gap-4">
                        <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded font-medium text-white text-base">879</span>
                        <span className="text-white capitalize text-md">Invoices</span>
                    </div>
                    <div className="flex-48 flex items-center gap-4">
                        <span className="bg-[#4c53dd] w-10 h-8 flex items-center justify-center rounded font-medium text-white text-base">398</span>
                        <span className="text-white capitalize text-md">Saleses</span>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className=" w-10/12">
                <img 
                style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.6) 0px 4px 60px)'}}
                className=' rounded-l-md max-w-full' src={`${baseUrl}/${imagePath}`} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelseCard