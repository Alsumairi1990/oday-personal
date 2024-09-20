import React from 'react'
import { LuRefreshCw } from 'react-icons/lu'
import Image from "next/image"
function CardResult1() {
    const imagePath7 = '/images/cardResult.png';

  return (
    <div className="card h-100 ">
    <div className="border-b pb-2  border-b-gray-100">
       <div className="flex items-center">
          <h5 className="mb-1 text-lg font-medium text-gray-600 ">Rating Data</h5>
          <div className="dropdown ml-auto">
             <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
                <LuRefreshCw   className="text-gray-500"   />
             </div>
          </div>
       </div>
       <div className="flex items-center card-subtitle">
          <div className="me-2 bg-[#dbdbfd] font-medium  rounded-xl  px-2 py-0.5 text-sm text-[#666cff]">Total 42.5k Sales</div>
          <div className="d-flex align-items-center text-success">
             {/* <p className="mb-0 fw-medium text-green-500 text-md">+18%</p> */}
             <i className="ri-arrow-up-s-line ri-20px"></i>
          </div>
       </div>
      
    </div>
    <div className="p-2 flex ">
        <div className="p-1 flex-60 flex items-center">
           <span className="text-2xl text-gray-800 font-semibold">8.14k</span> 
           <span className="text-green-500 text-base font-medium pl-3" >+17%</span>
        </div>
        <div className="flex-40">
        <Image
            src={imagePath7}
            height={50}
            width={50}
            
            alt="jjj"
            className="w-full object-fill max-w-full rounded"
        /> 
        </div>
        
       </div>
    
 </div>
     )
}

export default CardResult1