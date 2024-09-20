import React from 'react'
import { BiJoystickButton } from 'react-icons/bi'
import { CiMedicalMask } from 'react-icons/ci'
import { LuRefreshCw, LuUsers } from 'react-icons/lu'

function SalesOverview() {
  return (
    <div className="card h-100 ">
    <div className="border-b pb-2  border-b-gray-100">
       <div className="flex items-center">
          <h5 className="mb-1 text-lg font-medium text-gray-600 ">Sales Overview</h5>
          <div className="dropdown ml-auto">
             <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
                <LuRefreshCw   className="text-gray-500"   />
             </div>
          </div>
       </div>
       <div className="flex items-center card-subtitle">
          <div className="me-2 text-normal text-md text-gray-500">Total 42.5k Sales</div>
          <div className="d-flex align-items-center text-success">
             <p className="mb-0 fw-medium text-green-500 text-md">+18%</p>
             <i className="ri-arrow-up-s-line ri-20px"></i>
          </div>
       </div>
    </div>
    <div className="flex flex-wrap gap-4 mt-5">
        <div className='flex flex-100'>
       <div className="flex  items-center gap-3">
          <div className="bg-[#e7e7ff] p-2 rounded">
             <div className="flex items-center  justify-center  rounded">
             <LuUsers className="text-indigo-500 text-2xl"   />
             </div>
          </div>
          <div className="">
             <h5 className="mb-0 text-lg font-medium">8,458</h5>
             <p className="mb-0 text-sm text-gray-500">New Customers</p>
          </div>
       </div>
       <div className="flex items-center gap-3 ml-auto">
          <div className="bg-[#fee9d5] p-2 rounded">
             <div className=" flex items-center  justify-center rounded">
                <CiMedicalMask className="text-orange-500 text-3xl"   />
             </div>
          </div>
          <div className="">
             <h5 className="mb-0 text-lg font-medium">$28.5k</h5>
             <p className="mb-0 text-sm text-gray-500">Total Profit</p>
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
             <h5 className="mb-0 font-medium">2,450k </h5>
             <p className="mb-0 text-sm text-gray-500">New Transactions</p>
          </div>
       </div>
    </div>
 </div>
  )
}
export default SalesOverview